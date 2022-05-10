package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		NextGame: &NextGame{
			IdVal: 0,
		},
		ActiveGamesByUserList:   []ActiveGamesByUser{},
		FinishedGamesByUserList: []FinishedGamesByUser{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in activeGamesByUser
	activeGamesByUserIndexMap := make(map[string]struct{})

	for _, elem := range gs.ActiveGamesByUserList {
		index := string(ActiveGamesByUserKey(elem.Index))
		if _, ok := activeGamesByUserIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for activeGamesByUser")
		}
		activeGamesByUserIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in finishedGamesByUser
	finishedGamesByUserIndexMap := make(map[string]struct{})

	for _, elem := range gs.FinishedGamesByUserList {
		index := string(FinishedGamesByUserKey(elem.Index))
		if _, ok := finishedGamesByUserIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for finishedGamesByUser")
		}
		finishedGamesByUserIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
