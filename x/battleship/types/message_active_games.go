package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgActiveGames = "active_games"

var _ sdk.Msg = &MsgActiveGames{}

func NewMsgActiveGames(creator string) *MsgActiveGames {
	return &MsgActiveGames{
		Creator: creator,
	}
}

func (msg *MsgActiveGames) Route() string {
	return RouterKey
}

func (msg *MsgActiveGames) Type() string {
	return TypeMsgActiveGames
}

func (msg *MsgActiveGames) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgActiveGames) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgActiveGames) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
