package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func (k msgServer) CreateGame(goCtx context.Context, msg *types.MsgCreateGame) (*types.MsgCreateGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	nextGame, ok := k.Keeper.GetNextGame(ctx)
	if !ok {
		return nil, types.ErrCantFindNextGame
	}

	if msg.Creator == msg.Opponent {
		return nil, types.ErrOpponentIsYou
	}

	nextGameIndex := strconv.FormatUint(nextGame.IdVal, 10)
	newGame := types.ExistingGames{
		Index:   nextGameIndex,
		PlayerA: msg.Creator,
		PlayerB: msg.Opponent,
		FieldA:  "",
		FieldB:  "",
		Turn:    msg.Creator,
	}
	if err := newGame.Validate(); err != nil {
		return nil, err
	}

	k.Keeper.SetExistingGames(ctx, newGame)
	nextGame.IdVal++
	k.Keeper.SetNextGame(ctx, nextGame)

	k.Keeper.addActiveGame(ctx, msg.Creator, nextGameIndex)
	k.Keeper.addActiveGame(ctx, msg.Opponent, nextGameIndex)

	return &types.MsgCreateGameResponse{
		IdVal: nextGameIndex,
	}, nil
}
