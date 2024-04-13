import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/Victor118.liquidity.v1beta1.MsgCreatePool", MsgCreatePool], ["/Victor118.liquidity.v1beta1.MsgDepositWithinBatch", MsgDepositWithinBatch], ["/Victor118.liquidity.v1beta1.MsgWithdrawWithinBatch", MsgWithdrawWithinBatch], ["/Victor118.liquidity.v1beta1.MsgSwapWithinBatch", MsgSwapWithinBatch]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    depositWithinBatch(value: MsgDepositWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgDepositWithinBatch",
        value: MsgDepositWithinBatch.encode(value).finish()
      };
    },
    withdrawWithinBatch(value: MsgWithdrawWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgWithdrawWithinBatch",
        value: MsgWithdrawWithinBatch.encode(value).finish()
      };
    },
    swap(value: MsgSwapWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgSwapWithinBatch",
        value: MsgSwapWithinBatch.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgCreatePool",
        value
      };
    },
    depositWithinBatch(value: MsgDepositWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgDepositWithinBatch",
        value
      };
    },
    withdrawWithinBatch(value: MsgWithdrawWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgWithdrawWithinBatch",
        value
      };
    },
    swap(value: MsgSwapWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgSwapWithinBatch",
        value
      };
    }
  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    depositWithinBatch(value: MsgDepositWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgDepositWithinBatch",
        value: MsgDepositWithinBatch.fromPartial(value)
      };
    },
    withdrawWithinBatch(value: MsgWithdrawWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgWithdrawWithinBatch",
        value: MsgWithdrawWithinBatch.fromPartial(value)
      };
    },
    swap(value: MsgSwapWithinBatch) {
      return {
        typeUrl: "/Victor118.liquidity.v1beta1.MsgSwapWithinBatch",
        value: MsgSwapWithinBatch.fromPartial(value)
      };
    }
  }
};