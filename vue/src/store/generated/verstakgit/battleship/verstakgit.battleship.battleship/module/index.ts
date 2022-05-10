// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgFire } from "./types/battleship/tx";
import { MsgActiveGames } from "./types/battleship/tx";
import { MsgCreateGame } from "./types/battleship/tx";
import { MsgSetField } from "./types/battleship/tx";


const types = [
  ["/verstakgit.battleship.battleship.MsgFire", MsgFire],
  ["/verstakgit.battleship.battleship.MsgActiveGames", MsgActiveGames],
  ["/verstakgit.battleship.battleship.MsgCreateGame", MsgCreateGame],
  ["/verstakgit.battleship.battleship.MsgSetField", MsgSetField],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgFire: (data: MsgFire): EncodeObject => ({ typeUrl: "/verstakgit.battleship.battleship.MsgFire", value: MsgFire.fromPartial( data ) }),
    msgActiveGames: (data: MsgActiveGames): EncodeObject => ({ typeUrl: "/verstakgit.battleship.battleship.MsgActiveGames", value: MsgActiveGames.fromPartial( data ) }),
    msgCreateGame: (data: MsgCreateGame): EncodeObject => ({ typeUrl: "/verstakgit.battleship.battleship.MsgCreateGame", value: MsgCreateGame.fromPartial( data ) }),
    msgSetField: (data: MsgSetField): EncodeObject => ({ typeUrl: "/verstakgit.battleship.battleship.MsgSetField", value: MsgSetField.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
