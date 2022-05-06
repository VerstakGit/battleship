package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/rules"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func (k msgServer) Fire(goCtx context.Context, msg *types.MsgFire) (*types.MsgFireResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	game, ok := k.Keeper.GetExistingGames(ctx, msg.GameId)
	if !ok {
		return nil, types.ErrCantFindGameById
	}

	if game.FieldA == "" || game.FieldB == "" {
		return nil, types.ErrPlayerFieldIsEmpty
	}

	if game.Turn != msg.Creator {
		return nil, types.ErrItIsNotYourTurn
	}

	field, resp, err := rules.Fire(getOpponentField(&game, msg.Creator), int(msg.Y), int(msg.X))
	if err != nil {
		return nil, err
	}

	setOpponentField(&game, msg.Creator, field)
	if resp.Status != rules.HitStatus && resp.Status != rules.KillStatus {
		game.Turn = getOpponent(&game, msg.Creator)
	}
	k.Keeper.SetExistingGames(ctx, game)

	resp.OpponentField = rules.TransformToOpponentField(field)

	return resp, nil
}
