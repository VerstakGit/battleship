package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/verstakgit/battleship/testutil/keeper"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.BattleshipKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
