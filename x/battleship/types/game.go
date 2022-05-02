package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (game ExistingGames) Validate() error {
	if _, err := sdk.AccAddressFromBech32(game.PlayerA); err != nil {
		return sdkerrors.Wrapf(err, ErrInvalidPlayerA.Error(), game.PlayerA)
	}
	if _, err := sdk.AccAddressFromBech32(game.PlayerB); err != nil {
		return sdkerrors.Wrapf(err, ErrInvalidPlayerB.Error(), game.PlayerB)
	}
	return nil
}
