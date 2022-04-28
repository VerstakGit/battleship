/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../battleship/params";
import { NextGame } from "../battleship/next_game";
import { ExistingGames } from "../battleship/existing_games";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

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
