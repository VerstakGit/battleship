package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/types"
)

// SetExistingGames set a specific existingGames in the store from its index
func (k Keeper) SetExistingGames(ctx sdk.Context, existingGames types.ExistingGames) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExistingGamesKeyPrefix))
	b := k.cdc.MustMarshal(&existingGames)
	store.Set(types.ExistingGamesKey(
		existingGames.Index,
	), b)
}

// GetExistingGames returns a existingGames from its index
func (k Keeper) GetExistingGames(
	ctx sdk.Context,
	index string,

) (val types.ExistingGames, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExistingGamesKeyPrefix))

	b := store.Get(types.ExistingGamesKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveExistingGames removes a existingGames from the store
func (k Keeper) RemoveExistingGames(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExistingGamesKeyPrefix))
	store.Delete(types.ExistingGamesKey(
		index,
	))
}

// GetAllExistingGames returns all existingGames
func (k Keeper) GetAllExistingGames(ctx sdk.Context) (list []types.ExistingGames) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExistingGamesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ExistingGames
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func getOpponentField(game *types.ExistingGames, creator string) string {
	switch creator {
	case game.PlayerA:
		return game.FieldB
	case game.PlayerB:
		return game.FieldA
	}
	return ""
}

func setOpponentField(game *types.ExistingGames, creator, field string) {
	switch creator {
	case game.PlayerA:
		game.FieldB = field
	case game.PlayerB:
		game.FieldA = field
	}
}

func getOpponent(game *types.ExistingGames, creator string) string {
	switch creator {
	case game.PlayerA:
		return game.PlayerB
	case game.PlayerB:
		return game.PlayerA
	}
	return ""
}
