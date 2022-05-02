package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgFire = "fire"

var _ sdk.Msg = &MsgFire{}

func NewMsgFire(creator string, x uint64, y uint64) *MsgFire {
	return &MsgFire{
		Creator: creator,
		X:       x,
		Y:       y,
	}
}

func (msg *MsgFire) Route() string {
	return RouterKey
}

func (msg *MsgFire) Type() string {
	return TypeMsgFire
}

func (msg *MsgFire) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgFire) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFire) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
