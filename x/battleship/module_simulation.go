package battleship

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/verstakgit/battleship/testutil/sample"
	battleshipsimulation "github.com/verstakgit/battleship/x/battleship/simulation"
	"github.com/verstakgit/battleship/x/battleship/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = battleshipsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateGame = "op_weight_msg_create_game"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateGame int = 100

	opWeightMsgSetField = "op_weight_msg_set_field"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSetField int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	battleshipGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&battleshipGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateGame int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateGame, &weightMsgCreateGame, nil,
		func(_ *rand.Rand) {
			weightMsgCreateGame = defaultWeightMsgCreateGame
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateGame,
		battleshipsimulation.SimulateMsgCreateGame(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSetField int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSetField, &weightMsgSetField, nil,
		func(_ *rand.Rand) {
			weightMsgSetField = defaultWeightMsgSetField
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSetField,
		battleshipsimulation.SimulateMsgSetField(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
