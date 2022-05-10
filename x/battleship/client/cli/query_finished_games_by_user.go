package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func CmdListFinishedGamesByUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-finished-games-by-user",
		Short: "list all finishedGamesByUser",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllFinishedGamesByUserRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.FinishedGamesByUserAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowFinishedGamesByUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-finished-games-by-user [index]",
		Short: "shows a finishedGamesByUser",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetFinishedGamesByUserRequest{
				Index: argIndex,
			}

			res, err := queryClient.FinishedGamesByUser(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
