import * as _115 from "./liquidity/v1beta1/genesis";
import * as _116 from "./liquidity/v1beta1/liquidity";
import * as _117 from "./liquidity/v1beta1/query";
import * as _118 from "./liquidity/v1beta1/tx";
import * as _205 from "./liquidity/v1beta1/tx.amino";
import * as _206 from "./liquidity/v1beta1/tx.registry";
import * as _207 from "./liquidity/v1beta1/query.lcd";
import * as _208 from "./liquidity/v1beta1/query.rpc.Query";
import * as _209 from "./liquidity/v1beta1/tx.rpc.msg";
import * as _222 from "./lcd";
import * as _223 from "./rpc.query";
import * as _224 from "./rpc.tx";
export namespace Victor118 {
  export namespace liquidity {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209
    };
  }
  export const ClientFactory = {
    ..._222,
    ..._223,
    ..._224
  };
}