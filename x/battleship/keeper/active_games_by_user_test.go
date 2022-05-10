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

func createNActiveGamesByUser(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ActiveGamesByUser {
	items := make([]types.ActiveGamesByUser, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetActiveGamesByUser(ctx, items[i])
	}
	return items
}

func TestActiveGamesByUserGet(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNActiveGamesByUser(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetActiveGamesByUser(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestActiveGamesByUserRemove(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNActiveGamesByUser(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveActiveGamesByUser(ctx,
			item.Index,
		)
		_, found := keeper.GetActiveGamesByUser(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestActiveGamesByUserGetAll(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNActiveGamesByUser(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllActiveGamesByUser(ctx)),
	)
}
