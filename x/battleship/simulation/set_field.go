package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/verstakgit/battleship/x/battleship/keeper"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func SimulateMsgSetField(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSetField{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the SetField simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SetField simulation not implemented"), nil, nil
	}
}
