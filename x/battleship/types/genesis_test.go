package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				NextGame: &types.NextGame{
					IdVal: 13,
				},
				ExistingGamesList: []types.ExistingGames{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				ActiveGamesByUserList: []types.ActiveGamesByUser{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated existingGames",
			genState: &types.GenesisState{
				ExistingGamesList: []types.ExistingGames{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated activeGamesByUser",
			genState: &types.GenesisState{
				ActiveGamesByUserList: []types.ActiveGamesByUser{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
