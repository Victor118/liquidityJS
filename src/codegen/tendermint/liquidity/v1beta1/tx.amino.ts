//@ts-nocheck
import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch } from "./tx";
export const AminoConverter = {
  "/tendermint.liquidity.v1beta1.MsgCreatePool": {
    aminoType: "/tendermint.liquidity.v1beta1.MsgCreatePool",
    toAmino: MsgCreatePool.toAmino,
    fromAmino: MsgCreatePool.fromAmino
  },
  "/tendermint.liquidity.v1beta1.MsgDepositWithinBatch": {
    aminoType: "/tendermint.liquidity.v1beta1.MsgDepositWithinBatch",
    toAmino: MsgDepositWithinBatch.toAmino,
    fromAmino: MsgDepositWithinBatch.fromAmino
  },
  "/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch": {
    aminoType: "/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch",
    toAmino: MsgWithdrawWithinBatch.toAmino,
    fromAmino: MsgWithdrawWithinBatch.fromAmino
  },
  "/tendermint.liquidity.v1beta1.MsgSwapWithinBatch": {
    aminoType: "/tendermint.liquidity.v1beta1.MsgSwapWithinBatch",
    toAmino: MsgSwapWithinBatch.toAmino,
    fromAmino: MsgSwapWithinBatch.fromAmino
  }
};