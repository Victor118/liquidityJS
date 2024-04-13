import * as _111 from "./liquidity/v1beta1/genesis";
import * as _112 from "./liquidity/v1beta1/liquidity";
import * as _113 from "./liquidity/v1beta1/query";
import * as _114 from "./liquidity/v1beta1/tx";
import * as _196 from "./liquidity/v1beta1/tx.amino";
import * as _197 from "./liquidity/v1beta1/tx.registry";
import * as _198 from "./liquidity/v1beta1/query.lcd";
import * as _199 from "./liquidity/v1beta1/query.rpc.Query";
import * as _200 from "./liquidity/v1beta1/tx.rpc.msg";
import * as _210 from "./lcd";
import * as _211 from "./rpc.query";
import * as _212 from "./rpc.tx";
export namespace Victor118 {
  export namespace liquidity {
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200
    };
  }
  export const ClientFactory = {
    ..._210,
    ..._211,
    ..._212
  };
}