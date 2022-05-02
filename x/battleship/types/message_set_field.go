package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetField = "set_field"

var _ sdk.Msg = &MsgSetField{}

func NewMsgSetField(creator string, idVal string, field string) *MsgSetField {
	return &MsgSetField{
		Creator: creator,
		IdVal:   idVal,
		Field:   field,
	}
}

func (msg *MsgSetField) Route() string {
	return RouterKey
}

func (msg *MsgSetField) Type() string {
	return TypeMsgSetField
}

func (msg *MsgSetField) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetField) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetField) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
