/* eslint-disable */
import { Params } from "../battleship/params";
import { NextGame } from "../battleship/next_game";
import { ExistingGames } from "../battleship/existing_games";
import { ActiveGamesByUser } from "../battleship/active_games_by_user";
import { FinishedGamesByUser } from "../battleship/finished_games_by_user";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "verstakgit.battleship.battleship";

/** GenesisState defines the battleship module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  nextGame: NextGame | undefined;
  existingGamesList: ExistingGames[];
  activeGamesByUserList: ActiveGamesByUser[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  finishedGamesByUserList: FinishedGamesByUser[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextGame !== undefined) {
      NextGame.encode(message.nextGame, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.existingGamesList) {
      ExistingGames.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.activeGamesByUserList) {
      ActiveGamesByUser.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.finishedGamesByUserList) {
      FinishedGamesByUser.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.existingGamesList = [];
    message.activeGamesByUserList = [];
    message.finishedGamesByUserList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextGame = NextGame.decode(reader, reader.uint32());
          break;
        case 3:
          message.existingGamesList.push(
            ExistingGames.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.activeGamesByUserList.push(
            ActiveGamesByUser.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.finishedGamesByUserList.push(
            FinishedGamesByUser.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.existingGamesList = [];
    message.activeGamesByUserList = [];
    message.finishedGamesByUserList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nextGame !== undefined && object.nextGame !== null) {
      message.nextGame = NextGame.fromJSON(object.nextGame);
    } else {
      message.nextGame = undefined;
    }
    if (
      object.existingGamesList !== undefined &&
      object.existingGamesList !== null
    ) {
      for (const e of object.existingGamesList) {
        message.existingGamesList.push(ExistingGames.fromJSON(e));
      }
    }
    if (
      object.activeGamesByUserList !== undefined &&
      object.activeGamesByUserList !== null
    ) {
      for (const e of object.activeGamesByUserList) {
        message.activeGamesByUserList.push(ActiveGamesByUser.fromJSON(e));
      }
    }
    if (
      object.finishedGamesByUserList !== undefined &&
      object.finishedGamesByUserList !== null
    ) {
      for (const e of object.finishedGamesByUserList) {
        message.finishedGamesByUserList.push(FinishedGamesByUser.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.nextGame !== undefined &&
      (obj.nextGame = message.nextGame
        ? NextGame.toJSON(message.nextGame)
        : undefined);
    if (message.existingGamesList) {
      obj.existingGamesList = message.existingGamesList.map((e) =>
        e ? ExistingGames.toJSON(e) : undefined
      );
    } else {
      obj.existingGamesList = [];
    }
    if (message.activeGamesByUserList) {
      obj.activeGamesByUserList = message.activeGamesByUserList.map((e) =>
        e ? ActiveGamesByUser.toJSON(e) : undefined
      );
    } else {
      obj.activeGamesByUserList = [];
    }
    if (message.finishedGamesByUserList) {
      obj.finishedGamesByUserList = message.finishedGamesByUserList.map((e) =>
        e ? FinishedGamesByUser.toJSON(e) : undefined
      );
    } else {
      obj.finishedGamesByUserList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.existingGamesList = [];
    message.activeGamesByUserList = [];
    message.finishedGamesByUserList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nextGame !== undefined && object.nextGame !== null) {
      message.nextGame = NextGame.fromPartial(object.nextGame);
    } else {
      message.nextGame = undefined;
    }
    if (
      object.existingGamesList !== undefined &&
      object.existingGamesList !== null
    ) {
      for (const e of object.existingGamesList) {
        message.existingGamesList.push(ExistingGames.fromPartial(e));
      }
    }
    if (
      object.activeGamesByUserList !== undefined &&
      object.activeGamesByUserList !== null
    ) {
      for (const e of object.activeGamesByUserList) {
        message.activeGamesByUserList.push(ActiveGamesByUser.fromPartial(e));
      }
    }
    if (
      object.finishedGamesByUserList !== undefined &&
      object.finishedGamesByUserList !== null
    ) {
      for (const e of object.finishedGamesByUserList) {
        message.finishedGamesByUserList.push(
          FinishedGamesByUser.fromPartial(e)
        );
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
