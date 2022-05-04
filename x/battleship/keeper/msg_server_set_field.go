package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/rules"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func (k msgServer) SetField(goCtx context.Context, msg *types.MsgSetField) (*types.MsgSetFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	game, ok := k.Keeper.GetExistingGames(ctx, msg.IdVal)
	if !ok {
		return nil, types.ErrCantFindGameById
	}

	if err := rules.ValidateInitialField(msg.Field); err != nil {
		return nil, err
	}

	switch {
	case msg.Creator == game.PlayerA:
		if game.FieldA != "" {
			return nil, types.ErrPlayerFieldIsSet
		}
		game.FieldA = msg.Field
	case msg.Creator == game.PlayerB:
		if game.FieldB != "" {
			return nil, types.ErrPlayerFieldIsSet
		}
		game.FieldB = msg.Field
	default:
		return nil, types.ErrCreatorIsNotPlaying
	}

	k.Keeper.SetExistingGames(ctx, game)

	return &types.MsgSetFieldResponse{}, nil
}
