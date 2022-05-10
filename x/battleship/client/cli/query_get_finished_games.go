package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/verstakgit/battleship/x/battleship/types"
)

var _ = strconv.Itoa(0)

func CmdGetFinishedGames() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-finished-games [player-id]",
		Short: "Query getFinishedGames",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqPlayerID := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetFinishedGamesRequest{

				PlayerID: reqPlayerID,
			}

			res, err := queryClient.GetFinishedGames(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
