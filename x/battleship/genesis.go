package battleship

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/verstakgit/battleship/x/battleship/keeper"
	"github.com/verstakgit/battleship/x/battleship/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.NextGame != nil {
		k.SetNextGame(ctx, *genState.NextGame)
	}
	// Set all the existingGames
	for _, elem := range genState.ExistingGamesList {
		k.SetExistingGames(ctx, elem)
	}
	// Set all the activeGamesByUser
	for _, elem := range genState.ActiveGamesByUserList {
		k.SetActiveGamesByUser(ctx, elem)
	}
	// Set all the finishedGamesByUser
	for _, elem := range genState.FinishedGamesByUserList {
		k.SetFinishedGamesByUser(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all nextGame
	nextGame, found := k.GetNextGame(ctx)
	if found {
		genesis.NextGame = &nextGame
	}
	genesis.ExistingGamesList = k.GetAllExistingGames(ctx)
	genesis.ActiveGamesByUserList = k.GetAllActiveGamesByUser(ctx)
	genesis.FinishedGamesByUserList = k.GetAllFinishedGamesByUser(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
