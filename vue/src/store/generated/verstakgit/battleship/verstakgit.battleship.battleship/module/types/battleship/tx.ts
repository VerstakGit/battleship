/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "verstakgit.battleship.battleship";

export interface MsgCreateGame {
  creator: string;
  opponent: string;
}

export interface MsgCreateGameResponse {
  idVal: string;
}

export interface MsgSetField {
  creator: string;
  idVal: string;
  field: string;
}

export interface MsgSetFieldResponse {}

export interface MsgFire {
  creator: string;
  x: number;
  y: number;
  gameId: string;
}

export interface MsgFireResponse {
  status: string;
  win: boolean;
  opponentField: string;
}

const baseMsgCreateGame: object = { creator: "", opponent: "" };

export const MsgCreateGame = {
  encode(message: MsgCreateGame, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.opponent !== "") {
      writer.uint32(18).string(message.opponent);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGame } as MsgCreateGame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.opponent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGame {
    const message = { ...baseMsgCreateGame } as MsgCreateGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.opponent !== undefined && object.opponent !== null) {
      message.opponent = String(object.opponent);
    } else {
      message.opponent = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.opponent !== undefined && (obj.opponent = message.opponent);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGame>): MsgCreateGame {
    const message = { ...baseMsgCreateGame } as MsgCreateGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.opponent !== undefined && object.opponent !== null) {
      message.opponent = object.opponent;
    } else {
      message.opponent = "";
    }
    return message;
  },
};

const baseMsgCreateGameResponse: object = { idVal: "" };

export const MsgCreateGameResponse = {
  encode(
    message: MsgCreateGameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idVal !== "") {
      writer.uint32(10).string(message.idVal);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGameResponse } as MsgCreateGameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idVal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGameResponse {
    const message = { ...baseMsgCreateGameResponse } as MsgCreateGameResponse;
    if (object.idVal !== undefined && object.idVal !== null) {
      message.idVal = String(object.idVal);
    } else {
      message.idVal = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGameResponse): unknown {
    const obj: any = {};
    message.idVal !== undefined && (obj.idVal = message.idVal);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateGameResponse>
  ): MsgCreateGameResponse {
    const message = { ...baseMsgCreateGameResponse } as MsgCreateGameResponse;
    if (object.idVal !== undefined && object.idVal !== null) {
      message.idVal = object.idVal;
    } else {
      message.idVal = "";
    }
    return message;
  },
};

const baseMsgSetField: object = { creator: "", idVal: "", field: "" };

export const MsgSetField = {
  encode(message: MsgSetField, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.idVal !== "") {
      writer.uint32(18).string(message.idVal);
    }
    if (message.field !== "") {
      writer.uint32(26).string(message.field);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetField } as MsgSetField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.idVal = reader.string();
          break;
        case 3:
          message.field = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetField {
    const message = { ...baseMsgSetField } as MsgSetField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.idVal !== undefined && object.idVal !== null) {
      message.idVal = String(object.idVal);
    } else {
      message.idVal = "";
    }
    if (object.field !== undefined && object.field !== null) {
      message.field = String(object.field);
    } else {
      message.field = "";
    }
    return message;
  },

  toJSON(message: MsgSetField): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.idVal !== undefined && (obj.idVal = message.idVal);
    message.field !== undefined && (obj.field = message.field);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetField>): MsgSetField {
    const message = { ...baseMsgSetField } as MsgSetField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.idVal !== undefined && object.idVal !== null) {
      message.idVal = object.idVal;
    } else {
      message.idVal = "";
    }
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    } else {
      message.field = "";
    }
    return message;
  },
};

const baseMsgSetFieldResponse: object = {};

export const MsgSetFieldResponse = {
  encode(_: MsgSetFieldResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetFieldResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetFieldResponse } as MsgSetFieldResponse;
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

  fromJSON(_: any): MsgSetFieldResponse {
    const message = { ...baseMsgSetFieldResponse } as MsgSetFieldResponse;
    return message;
  },

  toJSON(_: MsgSetFieldResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetFieldResponse>): MsgSetFieldResponse {
    const message = { ...baseMsgSetFieldResponse } as MsgSetFieldResponse;
    return message;
  },
};

const baseMsgFire: object = { creator: "", x: 0, y: 0, gameId: "" };

export const MsgFire = {
  encode(message: MsgFire, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.x !== 0) {
      writer.uint32(16).int64(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int64(message.y);
    }
    if (message.gameId !== "") {
      writer.uint32(34).string(message.gameId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFire {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFire } as MsgFire;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.x = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.y = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.gameId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFire {
    const message = { ...baseMsgFire } as MsgFire;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = Number(object.x);
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = Number(object.y);
    } else {
      message.y = 0;
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = String(object.gameId);
    } else {
      message.gameId = "";
    }
    return message;
  },

  toJSON(message: MsgFire): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFire>): MsgFire {
    const message = { ...baseMsgFire } as MsgFire;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = 0;
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = object.gameId;
    } else {
      message.gameId = "";
    }
    return message;
  },
};

const baseMsgFireResponse: object = {
  status: "",
  win: false,
  opponentField: "",
};

export const MsgFireResponse = {
  encode(message: MsgFireResponse, writer: Writer = Writer.create()): Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.win === true) {
      writer.uint32(16).bool(message.win);
    }
    if (message.opponentField !== "") {
      writer.uint32(26).string(message.opponentField);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFireResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFireResponse } as MsgFireResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.win = reader.bool();
          break;
        case 3:
          message.opponentField = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFireResponse {
    const message = { ...baseMsgFireResponse } as MsgFireResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.win !== undefined && object.win !== null) {
      message.win = Boolean(object.win);
    } else {
      message.win = false;
    }
    if (object.opponentField !== undefined && object.opponentField !== null) {
      message.opponentField = String(object.opponentField);
    } else {
      message.opponentField = "";
    }
    return message;
  },

  toJSON(message: MsgFireResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.win !== undefined && (obj.win = message.win);
    message.opponentField !== undefined &&
      (obj.opponentField = message.opponentField);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFireResponse>): MsgFireResponse {
    const message = { ...baseMsgFireResponse } as MsgFireResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.win !== undefined && object.win !== null) {
      message.win = object.win;
    } else {
      message.win = false;
    }
    if (object.opponentField !== undefined && object.opponentField !== null) {
      message.opponentField = object.opponentField;
    } else {
      message.opponentField = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
  SetField(request: MsgSetField): Promise<MsgSetFieldResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Fire(request: MsgFire): Promise<MsgFireResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse> {
    const data = MsgCreateGame.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Msg",
      "CreateGame",
      data
    );
    return promise.then((data) =>
      MsgCreateGameResponse.decode(new Reader(data))
    );
  }

  SetField(request: MsgSetField): Promise<MsgSetFieldResponse> {
    const data = MsgSetField.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Msg",
      "SetField",
      data
    );
    return promise.then((data) => MsgSetFieldResponse.decode(new Reader(data)));
  }

  Fire(request: MsgFire): Promise<MsgFireResponse> {
    const data = MsgFire.encode(request).finish();
    const promise = this.rpc.request(
      "verstakgit.battleship.battleship.Msg",
      "Fire",
      data
    );
    return promise.then((data) => MsgFireResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
