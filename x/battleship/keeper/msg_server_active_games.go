package keeper

import (
	"context"
	"github.com/verstakgit/battleship/x/battleship/rules"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func (k msgServer) ActiveGames(goCtx context.Context, msg *types.MsgActiveGames) (*types.MsgActiveGamesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	games, ok := k.Keeper.GetActiveGamesByUser(ctx, msg.Creator)
	if !ok {
		return nil, types.ErrUserHasNoActiveGames
	}

	resp := &types.MsgActiveGamesResponse{}

	for _, gameID := range games.Games {
		game, ok := k.Keeper.GetExistingGames(ctx, gameID)
		if !ok {
			continue
		}

		switch msg.Creator {
		case game.PlayerA:
			game.FieldB = rules.TransformToOpponentField(game.FieldB)
		case game.PlayerB:
			game.FieldA = rules.TransformToOpponentField(game.FieldA)
		default:
			continue
		}

		resp.Games = append(resp.Games, &types.Game{
			PlayerA: game.PlayerA,
			PlayerB: game.PlayerB,
			FieldA:  game.FieldA,
			FieldB:  game.FieldB,
			Turn:    game.Turn,
		})
	}

	return resp, nil
}
