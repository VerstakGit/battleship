package rules

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/verstakgit/battleship/x/battleship/types"
	"math"
	"strings"
)

const (
	emptyCell      = byte('E')
	shipCell       = byte('S')
	hitCell        = byte('H')
	killCell       = byte('F')
	missCell       = byte('M')
	unknownCell    = byte('U')
	newLine        = "\n"
	fieldSize      = 10
	maximumShipLen = 4
	missStatus     = "miss"
	HitStatus      = "hit"
	KillStatus     = "kill"
)

const (
	horizontalDir = iota
	verticalDir
)

var (
	shipsCnt = map[int]int{
		// ship size: number of ships
		1: 4,
		2: 3,
		3: 2,
		4: 1,
	}
	possibleDirections = [][]int{
		// vertical
		{1, 0},
		{-1, 0},
		// horizontal
		{0, 1},
		{0, -1},
		// diagonal
		{1, 1},
		{1, -1},
		{-1, 1},
		{-1, -1},
	}
	allowedDirections = [][]int{
		// vertical
		{1, 0},
		{-1, 0},
		// horizontal
		{0, 1},
		{0, -1},
	}
)

func ValidateInitialField(fieldStr string) error {
	curShipsCnt := make(map[int]int, len(shipsCnt))
	field := transformFieldStrToArr(fieldStr)
	for i := range field {
		if len(field[i]) != fieldSize {
			return types.ErrInvalidFieldSize
		}
	}

	if len(field) != fieldSize {
		return types.ErrInvalidFieldSize
	}

	for i := range field {
		for j := range field[i] {
			switch field[i][j] {
			case emptyCell:
				continue
			case shipCell:
				n, err := countShipLen(field, i, j)
				if err != nil {
					return err
				}
				curShipsCnt[n]++
			default:
				return sdkerrors.Wrapf(types.ErrIncorrectField, types.ErrInvalidFieldSymbol.Error(), j, i, field[i][j])
			}
		}
	}

	for shipLen, cnt := range curShipsCnt {
		if shipLen > maximumShipLen {
			return types.ErrShipIsTooLong
		}
		if shipsCnt[shipLen] != cnt {
			return sdkerrors.Wrapf(types.ErrIncorrectField, types.ErrInvalidNumberOfShips.Error(), shipLen, shipsCnt[shipLen], cnt)
		}
	}

	return nil
}

func countShipLen(field [][]byte, i, j int) (int, error) {
	q := make([][]int, 0)
	direction := -1
	q = append(q, []int{i, j})
	var n int
	for len(q) > 0 {
		n++
		i, j := q[0][0], q[0][1]
		q = q[1:]
		field[i][j] = emptyCell
		for _, d := range possibleDirections {
			newI, newJ := i+d[0], j+d[1]
			if outOfBounds(field, newI, newJ) {
				continue
			}
			if field[newI][newJ] != shipCell {
				continue
			}

			// diagonal direction
			if math.Abs(float64(d[0]))+math.Abs(float64(d[1])) == 2 {
				return 0, types.ErrDiagonalShips
			}
			if direction == -1 {
				if d[0] != 0 {
					direction = verticalDir
				} else {
					direction = horizontalDir
				}
			}

			if d[0] != 0 && direction != verticalDir {
				return 0, types.ErrIncorrectShipDirection
			}
			if d[1] != 0 && direction != horizontalDir {
				return 0, types.ErrIncorrectShipDirection
			}

			q = append(q, []int{newI, newJ})
		}
	}

	return n, nil
}

func Fire(fieldStr string, i, j int) (string, *types.MsgFireResponse, error) {
	if i < 0 || i >= fieldSize || j < 0 || j >= fieldSize {
		return "", nil, sdkerrors.Wrapf(types.ErrInvalidMove, types.ErrFireOutOfBounds.Error(), i, j, fieldSize-1)
	}

	field := []byte(fieldStr)
	resp := &types.MsgFireResponse{}
	idx := i*fieldSize + j
	switch field[idx] {
	case emptyCell:
		resp.Status = missStatus
		field[idx] = missCell
		return string(field), resp, nil
	case missCell, hitCell, killCell:
		return "", nil, types.ErrCantFireInTheSamePlace
	case shipCell:
		resField, status := damageShip(fieldStr, i, j)
		resp.Status = status
		resp.Win = strings.Index(resField, string(shipCell)) == -1
		return resField, resp, nil
	}

	return "", nil, types.ErrUnknownCell
}

func damageShip(fieldStr string, i, j int) (string, string) {
	field := transformFieldStrToArr(fieldStr)

	field[i][j] = hitCell
	q := make([][]int, 0)
	q = append(q, []int{i, j})
	for idx := 0; idx < len(q); idx++ {
		i, j := q[idx][0], q[idx][1]
		for _, d := range allowedDirections {
			newI, newJ := i+d[0], j+d[1]
			if outOfBounds(field, newI, newJ) {
				continue
			}
			cell := field[newI][newJ]
			if cell != shipCell || cell != hitCell {
				continue
			}

			if cell == shipCell {
				return transformFieldArrToStr(field), HitStatus
			}

			q = append(q, []int{newI, newJ})
		}
	}

	// all near cells are hit cells
	for _, cell := range q {
		field[cell[0]][cell[1]] = killCell
	}

	return transformFieldArrToStr(field), KillStatus
}

func outOfBounds(field [][]byte, newI, newJ int) bool {
	return newI < 0 || newI >= len(field) || newJ < 0 || newJ >= len(field[0])
}

func TransformToOpponentField(fieldStr string) string {
	field := transformFieldStrToArr(fieldStr)
	for i := range field {
		for j := range field[i] {
			if field[i][j] == shipCell || field[i][j] == emptyCell {
				field[i][j] = unknownCell
			}
		}
	}

	for i := range field {
		for j := range field[i] {
			if field[i][j] != killCell {
				continue
			}

			for _, d := range possibleDirections {
				newI, newJ := i+d[0], j+d[1]
				if outOfBounds(field, newI, newJ) {
					continue
				}

				if field[newI][newJ] == unknownCell {
					field[newI][newJ] = emptyCell
				}
			}
		}
	}

	return transformFieldArrToStr(field)
}

func transformFieldStrToArr(fieldStr string) [][]byte {
	field := make([][]byte, 0, fieldSize)
	for i, row := range strings.Split(fieldStr, newLine) {
		field = append(field, make([]byte, 0, fieldSize))
		for _, s := range strings.Split(row, "") {
			field[i] = append(field[i], s[0])
		}
	}
	return field
}

func transformFieldArrToStr(field [][]byte) string {
	fieldStr := ""
	for i, row := range field {
		for _, symbol := range row {
			fieldStr += string(symbol)
		}
		if i+1 != len(field) {
			fieldStr += newLine
		}
	}
	return fieldStr
}
