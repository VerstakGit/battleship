package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/verstakgit/battleship/testutil/keeper"
	"github.com/verstakgit/battleship/testutil/nullify"
	"github.com/verstakgit/battleship/x/battleship/keeper"
	"github.com/verstakgit/battleship/x/battleship/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNExistingGames(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ExistingGames {
	items := make([]types.ExistingGames, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetExistingGames(ctx, items[i])
	}
	return items
}

func TestExistingGamesGet(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNExistingGames(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetExistingGames(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestExistingGamesRemove(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNExistingGames(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveExistingGames(ctx,
			item.Index,
		)
		_, found := keeper.GetExistingGames(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestExistingGamesGetAll(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNExistingGames(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllExistingGames(ctx)),
	)
}
