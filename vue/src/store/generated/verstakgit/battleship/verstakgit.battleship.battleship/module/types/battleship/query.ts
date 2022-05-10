/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../battleship/params";
import { NextGame } from "../battleship/next_game";
import { ExistingGames } from "../battleship/existing_games";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { ActiveGamesByUser } from "../battleship/active_games_by_user";
import { Game } from "../battleship/tx";
import { FinishedGamesByUser } from "../battleship/finished_games_by_user";

export const protobufPackage = "verstakgit.battleship.battleship";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetNextGameRequest {}

export interface QueryGetNextGameResponse {
  NextGame: NextGame | undefined;
}

export interface QueryGetExistingGamesRequest {
  index: string;
}

export interface QueryGetExistingGamesResponse {
  existingGames: ExistingGames | undefined;
}

export interface QueryAllExistingGamesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExistingGamesResponse {
  existingGames: ExistingGames[];
  pagination: PageResponse | undefined;
}

export interface QueryGetActiveGamesByUserRequest {
  index: string;
}

export interface QueryGetActiveGamesByUserResponse {
  activeGamesByUser: ActiveGamesByUser | undefined;
}

export interface QueryAllActiveGamesByUserRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllActiveGamesByUserResponse {
  activeGamesByUser: ActiveGamesByUser[];
  pagination: PageResponse | undefined;
}

export interface QueryGetFinishedGamesRequest {
  playerID: string;
}

export interface QueryGetFinishedGamesResponse {
  games: Game[];
}

export interface QueryGetFinishedGamesByUserRequest {
  index: string;
}

export interface QueryGetFinishedGamesByUserResponse {
  finishedGamesByUser: FinishedGamesByUser | undefined;
}

export interface QueryAllFinishedGamesByUserRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFinishedGamesByUserResponse {
  finishedGamesByUser: FinishedGamesByUser[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetNextGameRequest: object = {};

export const QueryGetNextGameRequest = {
  encode(_: QueryGetNextGameRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNextGameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextGameRequest,
    } as QueryGetNextGameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetNextGameRequest {
    const message = {
      ...baseQueryGetNextGameRequest,
    } as QueryGetNextGameRequest;
    return message;
  },

  toJSON(_: QueryGetNextGameRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetNextGameRequest>
  ): QueryGetNextGameRequest {
    const message = {
      ...baseQueryGetNextGameRequest,
    } as QueryGetNextGameRequest;
    return message;
  },
};

const baseQueryGetNextGameResponse: object = {};

export const QueryGetNextGameResponse = {
  encode(
    message: QueryGetNextGameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NextGame !== undefined) {
      NextGame.encode(message.NextGame, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNextGameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextGameResponse,
    } as QueryGetNextGameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NextGame = NextGame.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNextGameResponse {
    const message = {
      ...baseQueryGetNextGameResponse,
    } as QueryGetNextGameResponse;
    if (object.NextGame !== undefined && object.NextGame !== null) {
      message.NextGame = NextGame.fromJSON(object.NextGame);
    } else {
      message.NextGame = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNextGameResponse): unknown {
    const obj: any = {};
    message.NextGame !== undefined &&
      (obj.NextGame = message.NextGame
        ? NextGame.toJSON(message.NextGame)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNextGameResponse>
  ): QueryGetNextGameResponse {
    const message = {
      ...baseQueryGetNextGameResponse,
    } as QueryGetNextGameResponse;
    if (object.NextGame !== undefined && object.NextGame !== null) {
      message.NextGame = NextGame.fromPartial(object.NextGame);
    } else {
      message.NextGame = undefined;
    }
    return message;
  },
};

const baseQueryGetExistingGamesRequest: object = { index: "" };

export const QueryGetExistingGamesRequest = {
  encode(
    message: QueryGetExistingGamesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExistingGamesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExistingGamesRequest,
    } as QueryGetExistingGamesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExistingGamesRequest {
    const message = {
      ...baseQueryGetExistingGamesRequest,
    } as QueryGetExistingGamesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetExistingGamesRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExistingGamesRequest>
  ): QueryGetExistingGamesRequest {
    const message = {
      ...baseQueryGetExistingGamesRequest,
    } as QueryGetExistingGamesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetExistingGamesResponse: object = {};

export const QueryGetExistingGamesResponse = {
  encode(
    message: QueryGetExistingGamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.existingGames !== undefined) {
      ExistingGames.encode(
        message.existingGames,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExistingGamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExistingGamesResponse,
    } as QueryGetExistingGamesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.existingGames = ExistingGames.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExistingGamesResponse {
    const message = {
      ...baseQueryGetExistingGamesResponse,
    } as QueryGetExistingGamesResponse;
    if (object.existingGames !== undefined && object.existingGames !== null) {
      message.existingGames = ExistingGames.fromJSON(object.existingGames);
    } else {
      message.existingGames = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetExistingGamesResponse): unknown {
    const obj: any = {};
    message.existingGames !== undefined &&
      (obj.existingGames = message.existingGames
        ? ExistingGames.toJSON(message.existingGames)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExistingGamesResponse>
  ): QueryGetExistingGamesResponse {
    const message = {
      ...baseQueryGetExistingGamesResponse,
    } as QueryGetExistingGamesResponse;
    if (object.existingGames !== undefined && object.existingGames !== null) {
      message.existingGames = ExistingGames.fromPartial(object.existingGames);
    } else {
      message.existingGames = undefined;
    }
    return message;
  },
};

const baseQueryAllExistingGamesRequest: object = {};

export const QueryAllExistingGamesRequest = {
  encode(
    message: QueryAllExistingGamesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExistingGamesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExistingGamesRequest,
    } as QueryAllExistingGamesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExistingGamesRequest {
    const message = {
      ...baseQueryAllExistingGamesRequest,
    } as QueryAllExistingGamesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExistingGamesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExistingGamesRequest>
  ): QueryAllExistingGamesRequest {
    const message = {
      ...baseQueryAllExistingGamesRequest,
    } as QueryAllExistingGamesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllExistingGamesResponse: object = {};

export const QueryAllExistingGamesResponse = {
  encode(
    message: QueryAllExistingGamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.existingGames) {
      ExistingGames.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExistingGamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExistingGamesResponse,
    } as QueryAllExistingGamesResponse;
    message.existingGames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.existingGames.push(
            ExistingGames.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExistingGamesResponse {
    const message = {
      ...baseQueryAllExistingGamesResponse,
    } as QueryAllExistingGamesResponse;
    message.existingGames = [];
    if (object.existingGames !== undefined && object.existingGames !== null) {
      for (const e of object.existingGames) {
        message.existingGames.push(ExistingGames.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExistingGamesResponse): unknown {
    const obj: any = {};
    if (message.existingGames) {
      obj.existingGames = message.existingGames.map((e) =>
        e ? ExistingGames.toJSON(e) : undefined
      );
    } else {
      obj.existingGames = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExistingGamesResponse>
  ): QueryAllExistingGamesResponse {
    const message = {
      ...baseQueryAllExistingGamesResponse,
    } as QueryAllExistingGamesResponse;
    message.existingGames = [];
    if (object.existingGames !== undefined && object.existingGames !== null) {
      for (const e of object.existingGames) {
        message.existingGames.push(ExistingGames.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetActiveGamesByUserRequest: object = { index: "" };

export const QueryGetActiveGamesByUserRequest = {
  encode(
    message: QueryGetActiveGamesByUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActiveGamesByUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActiveGamesByUserRequest,
    } as QueryGetActiveGamesByUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActiveGamesByUserRequest {
    const message = {
      ...baseQueryGetActiveGamesByUserRequest,
    } as QueryGetActiveGamesByUserRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetActiveGamesByUserRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActiveGamesByUserRequest>
  ): QueryGetActiveGamesByUserRequest {
    const message = {
      ...baseQueryGetActiveGamesByUserRequest,
    } as QueryGetActiveGamesByUserRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetActiveGamesByUserResponse: object = {};

export const QueryGetActiveGamesByUserResponse = {
  encode(
    message: QueryGetActiveGamesByUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.activeGamesByUser !== undefined) {
      ActiveGamesByUser.encode(
        message.activeGamesByUser,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetActiveGamesByUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetActiveGamesByUserResponse,
    } as QueryGetActiveGamesByUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeGamesByUser = ActiveGamesByUser.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetActiveGamesByUserResponse {
    const message = {
      ...baseQueryGetActiveGamesByUserResponse,
    } as QueryGetActiveGamesByUserResponse;
    if (
      object.activeGamesByUser !== undefined &&
      object.activeGamesByUser !== null
    ) {
      message.activeGamesByUser = ActiveGamesByUser.fromJSON(
        object.activeGamesByUser
      );
    } else {
      message.activeGamesByUser = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetActiveGamesByUserResponse): unknown {
    const obj: any = {};
    message.activeGamesByUser !== undefined &&
      (obj.activeGamesByUser = message.activeGamesByUser
        ? ActiveGamesByUser.toJSON(message.activeGamesByUser)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetActiveGamesByUserResponse>
  ): QueryGetActiveGamesByUserResponse {
    const message = {
      ...baseQueryGetActiveGamesByUserResponse,
    } as QueryGetActiveGamesByUserResponse;
    if (
      object.activeGamesByUser !== undefined &&
      object.activeGamesByUser !== null
    ) {
      message.activeGamesByUser = ActiveGamesByUser.fromPartial(
        object.activeGamesByUser
      );
    } else {
      message.activeGamesByUser = undefined;
    }
    return message;
  },
};

const baseQueryAllActiveGamesByUserRequest: object = {};

export const QueryAllActiveGamesByUserRequest = {
  encode(
    message: QueryAllActiveGamesByUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllActiveGamesByUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActiveGamesByUserRequest,
    } as QueryAllActiveGamesByUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllActiveGamesByUserRequest {
    const message = {
      ...baseQueryAllActiveGamesByUserRequest,
    } as QueryAllActiveGamesByUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActiveGamesByUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActiveGamesByUserRequest>
  ): QueryAllActiveGamesByUserRequest {
    const message = {
      ...baseQueryAllActiveGamesByUserRequest,
    } as QueryAllActiveGamesByUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllActiveGamesByUserResponse: object = {};

export const QueryAllActiveGamesByUserResponse = {
  encode(
    message: QueryAllActiveGamesByUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.activeGamesByUser) {
      ActiveGamesByUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllActiveGamesByUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllActiveGamesByUserResponse,
    } as QueryAllActiveGamesByUserResponse;
    message.activeGamesByUser = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeGamesByUser.push(
            ActiveGamesByUser.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllActiveGamesByUserResponse {
    const message = {
      ...baseQueryAllActiveGamesByUserResponse,
    } as QueryAllActiveGamesByUserResponse;
    message.activeGamesByUser = [];
    if (
      object.activeGamesByUser !== undefined &&
      object.activeGamesByUser !== null
    ) {
      for (const e of object.activeGamesByUser) {
        message.activeGamesByUser.push(ActiveGamesByUser.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllActiveGamesByUserResponse): unknown {
    const obj: any = {};
    if (message.activeGamesByUser) {
      obj.activeGamesByUser = message.activeGamesByUser.map((e) =>
        e ? ActiveGamesByUser.toJSON(e) : undefined
      );
    } else {
      obj.activeGamesByUser = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllActiveGamesByUserResponse>
  ): QueryAllActiveGamesByUserResponse {
    const message = {
      ...baseQueryAllActiveGamesByUserResponse,
    } as QueryAllActiveGamesByUserResponse;
    message.activeGamesByUser = [];
    if (
      object.activeGamesByUser !== undefined &&
      object.activeGamesByUser !== null
    ) {
      for (const e of object.activeGamesByUser) {
        message.activeGamesByUser.push(ActiveGamesByUser.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetFinishedGamesRequest: object = { playerID: "" };

export const QueryGetFinishedGamesRequest = {
  encode(
    message: QueryGetFinishedGamesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.playerID !== "") {
      writer.uint32(10).string(message.playerID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFinishedGamesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFinishedGamesRequest,
    } as QueryGetFinishedGamesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFinishedGamesRequest {
    const message = {
      ...baseQueryGetFinishedGamesRequest,
    } as QueryGetFinishedGamesRequest;
    if (object.playerID !== undefined && object.playerID !== null) {
      message.playerID = String(object.playerID);
    } else {
      message.playerID = "";
    }
    return message;
  },

  toJSON(message: QueryGetFinishedGamesRequest): unknown {
    const obj: any = {};
    message.playerID !== undefined && (obj.playerID = message.playerID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFinishedGamesRequest>
  ): QueryGetFinishedGamesRequest {
    const message = {
      ...baseQueryGetFinishedGamesRequest,
    } as QueryGetFinishedGamesRequest;
    if (object.playerID !== undefined && object.playerID !== null) {
      message.playerID = object.playerID;
    } else {
      message.playerID = "";
    }
    return message;
  },
};

const baseQueryGetFinishedGamesResponse: object = {};

export const QueryGetFinishedGamesResponse = {
  encode(
    message: QueryGetFinishedGamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.games) {
      Game.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFinishedGamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFinishedGamesResponse,
    } as QueryGetFinishedGamesResponse;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.games.push(Game.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFinishedGamesResponse {
    const message = {
      ...baseQueryGetFinishedGamesResponse,
    } as QueryGetFinishedGamesResponse;
    message.games = [];
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetFinishedGamesResponse): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => (e ? Game.toJSON(e) : undefined));
    } else {
      obj.games = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFinishedGamesResponse>
  ): QueryGetFinishedGamesResponse {
    const message = {
      ...baseQueryGetFinishedGamesResponse,
    } as QueryGetFinishedGamesResponse;
    message.games = [];
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(Game.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetFinishedGamesByUserRequest: object = { index: "" };

export const QueryGetFinishedGamesByUserRequest = {
  encode(
    message: QueryGetFinishedGamesByUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFinishedGamesByUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFinishedGamesByUserRequest,
    } as QueryGetFinishedGamesByUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFinishedGamesByUserRequest {
    const message = {
      ...baseQueryGetFinishedGamesByUserRequest,
    } as QueryGetFinishedGamesByUserRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetFinishedGamesByUserRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFinishedGamesByUserRequest>
  ): QueryGetFinishedGamesByUserRequest {
    const message = {
      ...baseQueryGetFinishedGamesByUserRequest,
    } as QueryGetFinishedGamesByUserRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetFinishedGamesByUserResponse: object = {};

export const QueryGetFinishedGamesByUserResponse = {
  encode(
    message: QueryGetFinishedGamesByUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.finishedGamesByUser !== undefined) {
      FinishedGamesByUser.encode(
        message.finishedGamesByUser,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFinishedGamesByUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFinishedGamesByUserResponse,
    } as QueryGetFinishedGamesByUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finishedGamesByUser = FinishedGamesByUser.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFinishedGamesByUserResponse {
    const message = {
      ...baseQueryGetFinishedGamesByUserResponse,
    } as QueryGetFinishedGamesByUserResponse;
    if (
      object.finishedGamesByUser !== undefined &&
      object.finishedGamesByUser !== null
    ) {
      message.finishedGamesByUser = FinishedGamesByUser.fromJSON(
        object.finishedGamesByUser
      );
    } else {
      message.finishedGamesByUser = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFinishedGamesByUserResponse): unknown {
    const obj: any = {};
    message.finishedGamesByUser !== undefined &&
      (obj.finishedGamesByUser = message.finishedGamesByUser
        ? FinishedGamesByUser.toJSON(message.finishedGamesByUser)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFinishedGamesByUserResponse>
  ): QueryGetFinishedGamesByUserResponse {
    const message = {
      ...baseQueryGetFinishedGamesByUserResponse,
    } as QueryGetFinishedGamesByUserResponse;
    if (
      object.finishedGamesByUser !== undefined &&
      object.finishedGamesByUser !== null
    ) {
      message.finishedGamesByUser = FinishedGamesByUser.fromPartial(
        object.finishedGamesByUser
      );
    } else {
      message.finishedGamesByUser = undefined;
    }
    return message;
  },
};

const baseQueryAllFinishedGamesByUserRequest: object = {};

export const QueryAllFinishedGamesByUserRequest = {
  encode(
    message: QueryAllFinishedGamesByUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFinishedGamesByUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFinishedGamesByUserRequest,
    } as QueryAllFinishedGamesByUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFinishedGamesByUserRequest {
    const message = {
      ...baseQueryAllFinishedGamesByUserRequest,
    } as QueryAllFinishedGamesByUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFinishedGamesByUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFinishedGamesByUserRequest>
  ): QueryAllFinishedGamesByUserRequest {
    const message = {
      ...baseQueryAllFinishedGamesByUserRequest,
    } as QueryAllFinishedGamesByUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFinishedGamesByUserResponse: object = {};

export const QueryAllFinishedGamesByUserResponse = {
  encode(
    message: QueryAllFinishedGamesByUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.finishedGamesByUser) {
      FinishedGamesByUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFinishedGamesByUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFinishedGamesByUserResponse,
    } as QueryAllFinishedGamesByUserResponse;
    message.finishedGamesByUser = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finishedGamesByUser.push(
            FinishedGamesByUser.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFinishedGamesByUserResponse {
    const message = {
      ...baseQueryAllFinishedGamesByUserResponse,
    } as QueryAllFinishedGamesByUserResponse;
    message.finishedGamesByUser = [];
    if (
      object.finishedGamesByUser !== undefined &&
      object.finishedGamesByUser !== null
    ) {
      for (const e of object.finishedGamesByUser) {
        message.finishedGamesByUser.push(FinishedGamesByUser.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFinishedGamesByUserResponse): unknown {
    const obj: any = {};
    if (message.finishedGamesByUser) {
      obj.finishedGamesByUser = message.finishedGamesByUser.map((e) =>
        e ? FinishedGamesByUser.toJSON(e) : undefined
      );
    } else {
      obj.finishedGamesByUser = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFinishedGamesByUserResponse>
  ): QueryAllFinishedGamesByUserResponse {
    const message = {
      ...baseQueryAllFinishedGamesByUserResponse,
    } as QueryAllFinishedGamesByUserResponse;
    message.finishedGamesByUser = [];
    if (
      object.finishedGamesByUser !== undefined &&
      object.finishedGamesByUser !== null
    ) {
      for (const e of object.finishedGamesByUser) {
        message.finishedGamesByUser.push(FinishedGamesByUser.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NextGame by index. */
  NextGame(request: QueryGetNextGameRequest): Promise<QueryGetNextGameResponse>;
  /** Queries a ExistingGames by index. */
  ExistingGames(
    request: QueryGetExistingGamesRequest
  ): Promise<QueryGetExistingGamesResponse>;
  /** Queries a list of ExistingGames items. */
  ExistingGamesAll(
    request: QueryAllExistingGamesRequest
  ): Promise<QueryAllExistingGamesResponse>;
  /** Queries a ActiveGamesByUser by index. */
  ActiveGamesByUser(
    request: QueryGetActiveGamesByUserRequest
  ): Promise<QueryGetActiveGamesByUserResponse>;
  /** Queries a list of ActiveGamesByUser items. */
  ActiveGamesByUserAll(
    request: QueryAllActiveGamesByUserRequest
  ): Promise<QueryAllActiveGamesByUserResponse>;
  /** Queries a list of GetFinishedGames items. */
  GetFinishedGames(
    request: QueryGetFinishedGamesRequest
  ): Promise<QueryGetFinishedGamesResponse>;
  /** Queries a FinishedGamesByUser by index. */
  FinishedGamesByUser(
    request: QueryGetFinishedGamesByUserRequest
  ): Promise<QueryGetFinishedGamesByUserResponse>;
  /** Queries a list of FinishedGamesByUser items. */
  FinishedGamesByUserAll(
    request: QueryAllFinishedGamesByUserRequest
  ): Promise<QueryAllFinishedGamesByUserResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  NextGame(
    request: QueryGetNextGameRequest
  ): Promise<QueryGetNextGameResponse> {
    const data = QueryGetNextGameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "NextGame",
      data
    );
    return promise.then((data) =>
      QueryGetNextGameResponse.decode(new Reader(data))
    );
  }

  ExistingGames(
    request: QueryGetExistingGamesRequest
  ): Promise<QueryGetExistingGamesResponse> {
    const data = QueryGetExistingGamesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "ExistingGames",
      data
    );
    return promise.then((data) =>
      QueryGetExistingGamesResponse.decode(new Reader(data))
    );
  }

  ExistingGamesAll(
    request: QueryAllExistingGamesRequest
  ): Promise<QueryAllExistingGamesResponse> {
    const data = QueryAllExistingGamesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "ExistingGamesAll",
      data
    );
    return promise.then((data) =>
      QueryAllExistingGamesResponse.decode(new Reader(data))
    );
  }

  ActiveGamesByUser(
    request: QueryGetActiveGamesByUserRequest
  ): Promise<QueryGetActiveGamesByUserResponse> {
    const data = QueryGetActiveGamesByUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "ActiveGamesByUser",
      data
    );
    return promise.then((data) =>
      QueryGetActiveGamesByUserResponse.decode(new Reader(data))
    );
  }

  ActiveGamesByUserAll(
    request: QueryAllActiveGamesByUserRequest
  ): Promise<QueryAllActiveGamesByUserResponse> {
    const data = QueryAllActiveGamesByUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "ActiveGamesByUserAll",
      data
    );
    return promise.then((data) =>
      QueryAllActiveGamesByUserResponse.decode(new Reader(data))
    );
  }

  GetFinishedGames(
    request: QueryGetFinishedGamesRequest
  ): Promise<QueryGetFinishedGamesResponse> {
    const data = QueryGetFinishedGamesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "GetFinishedGames",
      data
    );
    return promise.then((data) =>
      QueryGetFinishedGamesResponse.decode(new Reader(data))
    );
  }

  FinishedGamesByUser(
    request: QueryGetFinishedGamesByUserRequest
  ): Promise<QueryGetFinishedGamesByUserResponse> {
    const data = QueryGetFinishedGamesByUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "FinishedGamesByUser",
      data
    );
    return promise.then((data) =>
      QueryGetFinishedGamesByUserResponse.decode(new Reader(data))
    );
  }

  FinishedGamesByUserAll(
    request: QueryAllFinishedGamesByUserRequest
  ): Promise<QueryAllFinishedGamesByUserResponse> {
    const data = QueryAllFinishedGamesByUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Query",
      "FinishedGamesByUserAll",
      data
    );
    return promise.then((data) =>
      QueryAllFinishedGamesByUserResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
