import * as _138 from "./liquidity/v1beta1/genesis";
import * as _139 from "./liquidity/v1beta1/liquidity";
import * as _140 from "./liquidity/v1beta1/query";
import * as _141 from "./liquidity/v1beta1/tx";
import * as _240 from "./liquidity/v1beta1/tx.amino";
import * as _241 from "./liquidity/v1beta1/tx.registry";
import * as _242 from "./liquidity/v1beta1/query.lcd";
import * as _243 from "./liquidity/v1beta1/query.rpc.Query";
import * as _244 from "./liquidity/v1beta1/tx.rpc.msg";
import * as _251 from "./lcd";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace Victor118 {
  export namespace liquidity {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244
    };
  }
  export const ClientFactory = {
    ..._251,
    ..._252,
    ..._253
  };
}