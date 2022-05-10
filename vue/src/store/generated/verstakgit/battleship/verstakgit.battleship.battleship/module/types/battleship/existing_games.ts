/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "verstakgit.battleship.battleship";

export interface ExistingGames {
  index: string;
  playerA: string;
  playerB: string;
  fieldA: string;
  fieldB: string;
  turn: string;
  ended: boolean;
}

const baseExistingGames: object = {
  index: "",
  playerA: "",
  playerB: "",
  fieldA: "",
  fieldB: "",
  turn: "",
  ended: false,
};

export const ExistingGames = {
  encode(message: ExistingGames, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.playerA !== "") {
      writer.uint32(18).string(message.playerA);
    }
    if (message.playerB !== "") {
      writer.uint32(26).string(message.playerB);
    }
    if (message.fieldA !== "") {
      writer.uint32(34).string(message.fieldA);
    }
    if (message.fieldB !== "") {
      writer.uint32(42).string(message.fieldB);
    }
    if (message.turn !== "") {
      writer.uint32(50).string(message.turn);
    }
    if (message.ended === true) {
      writer.uint32(56).bool(message.ended);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExistingGames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExistingGames } as ExistingGames;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.playerA = reader.string();
          break;
        case 3:
          message.playerB = reader.string();
          break;
        case 4:
          message.fieldA = reader.string();
          break;
        case 5:
          message.fieldB = reader.string();
          break;
        case 6:
          message.turn = reader.string();
          break;
        case 7:
          message.ended = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExistingGames {
    const message = { ...baseExistingGames } as ExistingGames;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.playerA !== undefined && object.playerA !== null) {
      message.playerA = String(object.playerA);
    } else {
      message.playerA = "";
    }
    if (object.playerB !== undefined && object.playerB !== null) {
      message.playerB = String(object.playerB);
    } else {
      message.playerB = "";
    }
    if (object.fieldA !== undefined && object.fieldA !== null) {
      message.fieldA = String(object.fieldA);
    } else {
      message.fieldA = "";
    }
    if (object.fieldB !== undefined && object.fieldB !== null) {
      message.fieldB = String(object.fieldB);
    } else {
      message.fieldB = "";
    }
    if (object.turn !== undefined && object.turn !== null) {
      message.turn = String(object.turn);
    } else {
      message.turn = "";
    }
    if (object.ended !== undefined && object.ended !== null) {
      message.ended = Boolean(object.ended);
    } else {
      message.ended = false;
    }
    return message;
  },

  toJSON(message: ExistingGames): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.playerA !== undefined && (obj.playerA = message.playerA);
    message.playerB !== undefined && (obj.playerB = message.playerB);
    message.fieldA !== undefined && (obj.fieldA = message.fieldA);
    message.fieldB !== undefined && (obj.fieldB = message.fieldB);
    message.turn !== undefined && (obj.turn = message.turn);
    message.ended !== undefined && (obj.ended = message.ended);
    return obj;
  },

  fromPartial(object: DeepPartial<ExistingGames>): ExistingGames {
    const message = { ...baseExistingGames } as ExistingGames;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.playerA !== undefined && object.playerA !== null) {
      message.playerA = object.playerA;
    } else {
      message.playerA = "";
    }
    if (object.playerB !== undefined && object.playerB !== null) {
      message.playerB = object.playerB;
    } else {
      message.playerB = "";
    }
    if (object.fieldA !== undefined && object.fieldA !== null) {
      message.fieldA = object.fieldA;
    } else {
      message.fieldA = "";
    }
    if (object.fieldB !== undefined && object.fieldB !== null) {
      message.fieldB = object.fieldB;
    } else {
      message.fieldB = "";
    }
    if (object.turn !== undefined && object.turn !== null) {
      message.turn = object.turn;
    } else {
      message.turn = "";
    }
    if (object.ended !== undefined && object.ended !== null) {
      message.ended = object.ended;
    } else {
      message.ended = false;
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
