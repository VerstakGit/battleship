package battleship_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/verstakgit/battleship/testutil/keeper"
	"github.com/verstakgit/battleship/testutil/nullify"
	"github.com/verstakgit/battleship/x/battleship"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		NextGame: &types.NextGame{
			IdVal: 96,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BattleshipKeeper(t)
	battleship.InitGenesis(ctx, *k, genesisState)
	got := battleship.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.NextGame, got.NextGame)
	// this line is used by starport scaffolding # genesis/test/assert
}
