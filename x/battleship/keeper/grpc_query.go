package keeper

import (
	"github.com/verstakgit/battleship/x/battleship/types"
)

var _ types.QueryServer = Keeper{}
