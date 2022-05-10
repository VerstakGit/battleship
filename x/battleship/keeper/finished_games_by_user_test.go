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

func createNFinishedGamesByUser(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.FinishedGamesByUser {
	items := make([]types.FinishedGamesByUser, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetFinishedGamesByUser(ctx, items[i])
	}
	return items
}

func TestFinishedGamesByUserGet(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNFinishedGamesByUser(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetFinishedGamesByUser(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestFinishedGamesByUserRemove(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNFinishedGamesByUser(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFinishedGamesByUser(ctx,
			item.Index,
		)
		_, found := keeper.GetFinishedGamesByUser(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestFinishedGamesByUserGetAll(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	items := createNFinishedGamesByUser(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFinishedGamesByUser(ctx)),
	)
}
