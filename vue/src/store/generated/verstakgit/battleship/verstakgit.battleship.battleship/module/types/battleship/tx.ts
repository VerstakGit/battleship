/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "verstakgit.battleship.battleship";

export interface MsgCreateGame {
  creator: string;
  opponent: string;
}

export interface MsgCreateGameResponse {
  idVal: string;
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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
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
