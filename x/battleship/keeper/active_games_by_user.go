package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/types"
)

// SetActiveGamesByUser set a specific activeGamesByUser in the store from its index
func (k Keeper) SetActiveGamesByUser(ctx sdk.Context, activeGamesByUser types.ActiveGamesByUser) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ActiveGamesByUserKeyPrefix))
	b := k.cdc.MustMarshal(&activeGamesByUser)
	store.Set(types.ActiveGamesByUserKey(
		activeGamesByUser.Index,
	), b)
}

// GetActiveGamesByUser returns a activeGamesByUser from its index
func (k Keeper) GetActiveGamesByUser(
	ctx sdk.Context,
	index string,

) (val types.ActiveGamesByUser, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ActiveGamesByUserKeyPrefix))

	b := store.Get(types.ActiveGamesByUserKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveActiveGamesByUser removes a activeGamesByUser from the store
func (k Keeper) RemoveActiveGamesByUser(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ActiveGamesByUserKeyPrefix))
	store.Delete(types.ActiveGamesByUserKey(
		index,
	))
}

// GetAllActiveGamesByUser returns all activeGamesByUser
func (k Keeper) GetAllActiveGamesByUser(ctx sdk.Context) (list []types.ActiveGamesByUser) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ActiveGamesByUserKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ActiveGamesByUser
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) addActiveGame(ctx sdk.Context, user, gameID string) {
	if games, ok := k.GetActiveGamesByUser(ctx, user); ok {
		games.Games = append(games.Games, gameID)
		k.SetActiveGamesByUser(ctx, games)
	}
}

// TODO: binary search
func (k Keeper) removeActiveGame(ctx sdk.Context, user, gameID string) {
	if games, ok := k.GetActiveGamesByUser(ctx, user); ok {
		for idx := range games.Games {
			if games.Games[idx] == gameID {
				games.Games[idx] = games.Games[len(games.Games)-1]
				games.Games = games.Games[:len(games.Games)-1]
				break
			}
		}
		k.SetActiveGamesByUser(ctx, games)
	}
}
