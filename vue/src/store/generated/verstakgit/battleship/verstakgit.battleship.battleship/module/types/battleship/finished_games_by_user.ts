/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "verstakgit.battleship.battleship";

export interface FinishedGamesByUser {
  index: string;
  games: string[];
}

const baseFinishedGamesByUser: object = { index: "", games: "" };

export const FinishedGamesByUser = {
  encode(
    message: FinishedGamesByUser,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.games) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FinishedGamesByUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFinishedGamesByUser } as FinishedGamesByUser;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.games.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FinishedGamesByUser {
    const message = { ...baseFinishedGamesByUser } as FinishedGamesByUser;
    message.games = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: FinishedGamesByUser): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    if (message.games) {
      obj.games = message.games.map((e) => e);
    } else {
      obj.games = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FinishedGamesByUser>): FinishedGamesByUser {
    const message = { ...baseFinishedGamesByUser } as FinishedGamesByUser;
    message.games = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(e);
      }
    }
    return message;
  },
};

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
