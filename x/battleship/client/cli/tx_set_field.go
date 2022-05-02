package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/verstakgit/battleship/x/battleship/types"
)

var _ = strconv.Itoa(0)

func CmdSetField() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-field [id-val] [field]",
		Short: "Broadcast message setField",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIdVal := args[0]
			argField := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSetField(
				clientCtx.GetFromAddress().String(),
				argIdVal,
				argField,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
