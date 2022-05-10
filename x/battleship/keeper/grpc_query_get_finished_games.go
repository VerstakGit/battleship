package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetFinishedGames(goCtx context.Context, req *types.QueryGetFinishedGamesRequest) (*types.QueryGetFinishedGamesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	games, ok := k.GetFinishedGamesByUser(ctx, req.PlayerID)
	if !ok {
		return nil, types.ErrUserHasNoFinishedGames
	}

	resp := &types.QueryGetFinishedGamesResponse{}

	for _, gameID := range games.Games {
		game, ok := k.GetExistingGames(ctx, gameID)
		if !ok {
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
