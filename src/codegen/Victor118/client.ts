import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as victor118LiquidityV1beta1TxRegistry from "./liquidity/v1beta1/tx.registry";
import * as victor118LiquidityV1beta1TxAmino from "./liquidity/v1beta1/tx.amino";
export const victor118AminoConverters = {
  ...victor118LiquidityV1beta1TxAmino.AminoConverter
};
export const victor118ProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...victor118LiquidityV1beta1TxRegistry.registry];
export const getSigningVictor118ClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...victor118ProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...victor118AminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningVictor118Client = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningVictor118ClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};