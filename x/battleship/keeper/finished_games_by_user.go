package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/types"
)

// SetFinishedGamesByUser set a specific finishedGamesByUser in the store from its index
func (k Keeper) SetFinishedGamesByUser(ctx sdk.Context, finishedGamesByUser types.FinishedGamesByUser) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinishedGamesByUserKeyPrefix))
	b := k.cdc.MustMarshal(&finishedGamesByUser)
	store.Set(types.FinishedGamesByUserKey(
		finishedGamesByUser.Index,
	), b)
}

// GetFinishedGamesByUser returns a finishedGamesByUser from its index
func (k Keeper) GetFinishedGamesByUser(
	ctx sdk.Context,
	index string,

) (val types.FinishedGamesByUser, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinishedGamesByUserKeyPrefix))

	b := store.Get(types.FinishedGamesByUserKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFinishedGamesByUser removes a finishedGamesByUser from the store
func (k Keeper) RemoveFinishedGamesByUser(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinishedGamesByUserKeyPrefix))
	store.Delete(types.FinishedGamesByUserKey(
		index,
	))
}

// GetAllFinishedGamesByUser returns all finishedGamesByUser
func (k Keeper) GetAllFinishedGamesByUser(ctx sdk.Context) (list []types.FinishedGamesByUser) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinishedGamesByUserKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.FinishedGamesByUser
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) addFinishedGame(ctx sdk.Context, user, gameID string) {
	if games, ok := k.GetFinishedGamesByUser(ctx, user); ok {
		games.Games = append(games.Games, gameID)
		k.SetFinishedGamesByUser(ctx, games)
	}
}
