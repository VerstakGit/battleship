package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/verstakgit/battleship/testutil/keeper"
	"github.com/verstakgit/battleship/testutil/nullify"
	"github.com/verstakgit/battleship/x/battleship/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestExistingGamesQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNExistingGames(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetExistingGamesRequest
		response *types.QueryGetExistingGamesResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetExistingGamesRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetExistingGamesResponse{ExistingGames: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetExistingGamesRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetExistingGamesResponse{ExistingGames: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetExistingGamesRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ExistingGames(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestExistingGamesQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.BattleshipKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNExistingGames(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllExistingGamesRequest {
		return &types.QueryAllExistingGamesRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ExistingGamesAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ExistingGames), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ExistingGames),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ExistingGamesAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ExistingGames), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ExistingGames),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ExistingGamesAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.ExistingGames),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ExistingGamesAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
