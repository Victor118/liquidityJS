import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as tendermintLiquidityV1beta1TxRegistry from "./liquidity/v1beta1/tx.registry";
import * as tendermintLiquidityV1beta1TxAmino from "./liquidity/v1beta1/tx.amino";
export const tendermintAminoConverters = {
  ...tendermintLiquidityV1beta1TxAmino.AminoConverter
};
export const tendermintProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...tendermintLiquidityV1beta1TxRegistry.registry];
export const getSigningTendermintClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...tendermintProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...tendermintAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningTendermintClient = async ({
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
  } = getSigningTendermintClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};