/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "verstakgit.battleship.battleship";

export interface ExistingGames {
  index: string;
  playerA: string;
  playerB: string;
  gameStatus: string;
  turn: string;
}

const baseExistingGames: object = {
  index: "",
  playerA: "",
  playerB: "",
  gameStatus: "",
  turn: "",
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
    if (message.gameStatus !== "") {
      writer.uint32(34).string(message.gameStatus);
    }
    if (message.turn !== "") {
      writer.uint32(42).string(message.turn);
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
          message.gameStatus = reader.string();
          break;
        case 5:
          message.turn = reader.string();
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
    if (object.gameStatus !== undefined && object.gameStatus !== null) {
      message.gameStatus = String(object.gameStatus);
    } else {
      message.gameStatus = "";
    }
    if (object.turn !== undefined && object.turn !== null) {
      message.turn = String(object.turn);
    } else {
      message.turn = "";
    }
    return message;
  },

  toJSON(message: ExistingGames): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.playerA !== undefined && (obj.playerA = message.playerA);
    message.playerB !== undefined && (obj.playerB = message.playerB);
    message.gameStatus !== undefined && (obj.gameStatus = message.gameStatus);
    message.turn !== undefined && (obj.turn = message.turn);
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
    if (object.gameStatus !== undefined && object.gameStatus !== null) {
      message.gameStatus = object.gameStatus;
    } else {
      message.gameStatus = "";
    }
    if (object.turn !== undefined && object.turn !== null) {
      message.turn = object.turn;
    } else {
      message.turn = "";
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
