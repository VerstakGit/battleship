package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/verstakgit/battleship/x/battleship/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FinishedGamesByUserAll(c context.Context, req *types.QueryAllFinishedGamesByUserRequest) (*types.QueryAllFinishedGamesByUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var finishedGamesByUsers []types.FinishedGamesByUser
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	finishedGamesByUserStore := prefix.NewStore(store, types.KeyPrefix(types.FinishedGamesByUserKeyPrefix))

	pageRes, err := query.Paginate(finishedGamesByUserStore, req.Pagination, func(key []byte, value []byte) error {
		var finishedGamesByUser types.FinishedGamesByUser
		if err := k.cdc.Unmarshal(value, &finishedGamesByUser); err != nil {
			return err
		}

		finishedGamesByUsers = append(finishedGamesByUsers, finishedGamesByUser)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFinishedGamesByUserResponse{FinishedGamesByUser: finishedGamesByUsers, Pagination: pageRes}, nil
}

func (k Keeper) FinishedGamesByUser(c context.Context, req *types.QueryGetFinishedGamesByUserRequest) (*types.QueryGetFinishedGamesByUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetFinishedGamesByUser(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetFinishedGamesByUserResponse{FinishedGamesByUser: val}, nil
}
