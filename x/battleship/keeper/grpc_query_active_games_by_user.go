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

func (k Keeper) ActiveGamesByUserAll(c context.Context, req *types.QueryAllActiveGamesByUserRequest) (*types.QueryAllActiveGamesByUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var activeGamesByUsers []types.ActiveGamesByUser
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	activeGamesByUserStore := prefix.NewStore(store, types.KeyPrefix(types.ActiveGamesByUserKeyPrefix))

	pageRes, err := query.Paginate(activeGamesByUserStore, req.Pagination, func(key []byte, value []byte) error {
		var activeGamesByUser types.ActiveGamesByUser
		if err := k.cdc.Unmarshal(value, &activeGamesByUser); err != nil {
			return err
		}

		activeGamesByUsers = append(activeGamesByUsers, activeGamesByUser)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllActiveGamesByUserResponse{ActiveGamesByUser: activeGamesByUsers, Pagination: pageRes}, nil
}

func (k Keeper) ActiveGamesByUser(c context.Context, req *types.QueryGetActiveGamesByUserRequest) (*types.QueryGetActiveGamesByUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetActiveGamesByUser(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetActiveGamesByUserResponse{ActiveGamesByUser: val}, nil
}
