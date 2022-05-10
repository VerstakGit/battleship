package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/verstakgit/battleship/x/battleship/rules"
	"github.com/verstakgit/battleship/x/battleship/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ExistingGamesAll(c context.Context, req *types.QueryAllExistingGamesRequest) (*types.QueryAllExistingGamesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var existingGamess []types.ExistingGames
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	existingGamesStore := prefix.NewStore(store, types.KeyPrefix(types.ExistingGamesKeyPrefix))

	pageRes, err := query.Paginate(existingGamesStore, req.Pagination, func(key []byte, value []byte) error {
		var existingGames types.ExistingGames
		if err := k.cdc.Unmarshal(value, &existingGames); err != nil {
			return err
		}

		if !existingGames.Ended {
			existingGames.FieldA = rules.TransformToOpponentField(existingGames.FieldA)
			existingGames.FieldB = rules.TransformToOpponentField(existingGames.FieldB)
		}

		existingGamess = append(existingGamess, existingGames)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllExistingGamesResponse{ExistingGames: existingGamess, Pagination: pageRes}, nil
}

func (k Keeper) ExistingGames(c context.Context, req *types.QueryGetExistingGamesRequest) (*types.QueryGetExistingGamesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetExistingGames(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if !val.Ended {
		val.FieldA = rules.TransformToOpponentField(val.FieldA)
		val.FieldB = rules.TransformToOpponentField(val.FieldB)
	}

	return &types.QueryGetExistingGamesResponse{ExistingGames: val}, nil
}
