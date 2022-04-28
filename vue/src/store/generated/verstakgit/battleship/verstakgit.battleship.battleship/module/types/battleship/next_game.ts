/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "verstakgit.battleship.battleship";

export interface NextGame {
  idVal: number;
}

const baseNextGame: object = { idVal: 0 };

export const NextGame = {
  encode(message: NextGame, writer: Writer = Writer.create()): Writer {
    if (message.idVal !== 0) {
      writer.uint32(8).uint64(message.idVal);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NextGame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNextGame } as NextGame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idVal = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NextGame {
    const message = { ...baseNextGame } as NextGame;
    if (object.idVal !== undefined && object.idVal !== null) {
      message.idVal = Number(object.idVal);
    } else {
      message.idVal = 0;
    }
    return message;
  },

  toJSON(message: NextGame): unknown {
    const obj: any = {};
    message.idVal !== undefined && (obj.idVal = message.idVal);
    return obj;
  },

  fromPartial(object: DeepPartial<NextGame>): NextGame {
    const message = { ...baseNextGame } as NextGame;
    if (object.idVal !== undefined && object.idVal !== null) {
      message.idVal = object.idVal;
    } else {
      message.idVal = 0;
    }
    return message;
  },
};

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
