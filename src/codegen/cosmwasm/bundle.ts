import * as _65 from "./wasm/v1/authz";
import * as _66 from "./wasm/v1/genesis";
import * as _67 from "./wasm/v1/ibc";
import * as _68 from "./wasm/v1/proposal";
import * as _69 from "./wasm/v1/query";
import * as _70 from "./wasm/v1/tx";
import * as _71 from "./wasm/v1/types";
import * as _175 from "./wasm/v1/tx.amino";
import * as _176 from "./wasm/v1/tx.registry";
import * as _177 from "./wasm/v1/query.lcd";
import * as _178 from "./wasm/v1/query.rpc.Query";
import * as _179 from "./wasm/v1/tx.rpc.msg";
import * as _213 from "./lcd";
import * as _214 from "./rpc.query";
import * as _215 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179
    };
  }
  export const ClientFactory = {
    ..._213,
    ..._214,
    ..._215
  };
}