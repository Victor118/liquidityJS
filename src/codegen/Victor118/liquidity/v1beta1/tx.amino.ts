//@ts-nocheck
import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch } from "./tx";
export const AminoConverter = {
  "/Victor118.liquidity.v1beta1.MsgCreatePool": {
    aminoType: "/Victor118.liquidity.v1beta1.MsgCreatePool",
    toAmino: MsgCreatePool.toAmino,
    fromAmino: MsgCreatePool.fromAmino
  },
  "/Victor118.liquidity.v1beta1.MsgDepositWithinBatch": {
    aminoType: "/Victor118.liquidity.v1beta1.MsgDepositWithinBatch",
    toAmino: MsgDepositWithinBatch.toAmino,
    fromAmino: MsgDepositWithinBatch.fromAmino
  },
  "/Victor118.liquidity.v1beta1.MsgWithdrawWithinBatch": {
    aminoType: "/Victor118.liquidity.v1beta1.MsgWithdrawWithinBatch",
    toAmino: MsgWithdrawWithinBatch.toAmino,
    fromAmino: MsgWithdrawWithinBatch.fromAmino
  },
  "/Victor118.liquidity.v1beta1.MsgSwapWithinBatch": {
    aminoType: "/Victor118.liquidity.v1beta1.MsgSwapWithinBatch",
    toAmino: MsgSwapWithinBatch.toAmino,
    fromAmino: MsgSwapWithinBatch.fromAmino
  }
};