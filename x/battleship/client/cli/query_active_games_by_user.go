package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/verstakgit/battleship/x/battleship/types"
)

func CmdListActiveGamesByUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-active-games-by-user",
		Short: "list all activeGamesByUser",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllActiveGamesByUserRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ActiveGamesByUserAll(context.Background(), params)
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

func CmdShowActiveGamesByUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-active-games-by-user [index]",
		Short: "shows a activeGamesByUser",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetActiveGamesByUserRequest{
				Index: argIndex,
			}

			res, err := queryClient.ActiveGamesByUser(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
