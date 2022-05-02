package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/battleship module sentinel errors
var (
	ErrInvalidPlayerA      = sdkerrors.Register(ModuleName, 1100, "player A address is invalid: %s")
	ErrInvalidPlayerB      = sdkerrors.Register(ModuleName, 1101, "player B address is invalid: %s")
	ErrCantFindNextGame    = sdkerrors.Register(ModuleName, 1102, "cant find the next game")
	ErrCantFindGameById    = sdkerrors.Register(ModuleName, 1103, "cant find the game by id")
	ErrCreatorIsNotPlaying = sdkerrors.Register(ModuleName, 1104, "creator is not a player in the game")
	ErrIncorrectGameField  = sdkerrors.Register(ModuleName, 1105, "incorrect game field")
	ErrOpponentIsYou       = sdkerrors.Register(ModuleName, 1106, "you cant play against yourself")
	ErrPlayerFieldIsSet    = sdkerrors.Register(ModuleName, 1107, "player field is already set")
)
