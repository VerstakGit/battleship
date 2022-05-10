package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/battleship module sentinel errors
var (
	ErrInvalidPlayerA         = sdkerrors.Register(ModuleName, 1100, "player A address is invalid: %s")
	ErrInvalidPlayerB         = sdkerrors.Register(ModuleName, 1101, "player B address is invalid: %s")
	ErrCantFindNextGame       = sdkerrors.Register(ModuleName, 1102, "cant find the next game")
	ErrCantFindGameById       = sdkerrors.Register(ModuleName, 1103, "cant find the game by id")
	ErrCreatorIsNotPlaying    = sdkerrors.Register(ModuleName, 1104, "creator is not a player in the game")
	ErrItIsNotYourTurn        = sdkerrors.Register(ModuleName, 1105, "it is not your turn")
	ErrOpponentIsYou          = sdkerrors.Register(ModuleName, 1106, "you cant play against yourself")
	ErrPlayerFieldIsSet       = sdkerrors.Register(ModuleName, 1107, "player field is already set")
	ErrInvalidFieldSize       = sdkerrors.Register(ModuleName, 1108, "invalid field size")
	ErrIncorrectField         = sdkerrors.Register(ModuleName, 1109, "incorrect field")
	ErrInvalidFieldSymbol     = sdkerrors.Register(ModuleName, 1110, "field has incorrect symbol: x = %v, y = %v, symbol = %s")
	ErrDiagonalShips          = sdkerrors.Register(ModuleName, 1111, "ships can not be connected diagonally")
	ErrIncorrectShipDirection = sdkerrors.Register(ModuleName, 1112, "ship can not be vertical and horizontal simultaneously")
	ErrShipIsTooLong          = sdkerrors.Register(ModuleName, 1113, "one of the ships is too long")
	ErrInvalidNumberOfShips   = sdkerrors.Register(ModuleName, 1114, "invalid number of ships: ship_length = %v, allowed_count = %v, got = %v")
	ErrInvalidMove            = sdkerrors.Register(ModuleName, 1115, "invalid move")
	ErrFireOutOfBounds        = sdkerrors.Register(ModuleName, 1116, "fire is out of bounds: x = %v, y = %v, maximum_allowed = %v")
	ErrCantFireInTheSamePlace = sdkerrors.Register(ModuleName, 1117, "you can not fire to the same place")
	ErrUnknownCell            = sdkerrors.Register(ModuleName, 1118, "unknown field cell")
	ErrPlayerFieldIsEmpty     = sdkerrors.Register(ModuleName, 1119, "all players should set their fields first")
	ErrEndedGame              = sdkerrors.Register(ModuleName, 1120, "the game is already ended")
	ErrUserHasNoActiveGames   = sdkerrors.Register(ModuleName, 1121, "user has no active games")
)
