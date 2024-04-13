import * as _65 from "./wasm/v1/authz";
import * as _66 from "./wasm/v1/genesis";
import * as _67 from "./wasm/v1/ibc";
import * as _68 from "./wasm/v1/proposal";
import * as _69 from "./wasm/v1/query";
import * as _70 from "./wasm/v1/tx";
import * as _71 from "./wasm/v1/types";
import * as _171 from "./wasm/v1/tx.amino";
import * as _172 from "./wasm/v1/tx.registry";
import * as _173 from "./wasm/v1/query.lcd";
import * as _174 from "./wasm/v1/query.rpc.Query";
import * as _175 from "./wasm/v1/tx.rpc.msg";
import * as _204 from "./lcd";
import * as _205 from "./rpc.query";
import * as _206 from "./rpc.tx";
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
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175
    };
  }
  export const ClientFactory = {
    ..._204,
    ..._205,
    ..._206
  };
}