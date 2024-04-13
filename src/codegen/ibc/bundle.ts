import * as _78 from "./applications/transfer/v1/genesis";
import * as _79 from "./applications/transfer/v1/query";
import * as _80 from "./applications/transfer/v1/transfer";
import * as _81 from "./applications/transfer/v1/tx";
import * as _82 from "./applications/transfer/v2/packet";
import * as _83 from "./core/channel/v1/channel";
import * as _84 from "./core/channel/v1/genesis";
import * as _85 from "./core/channel/v1/query";
import * as _86 from "./core/channel/v1/tx";
import * as _87 from "./core/client/v1/client";
import * as _88 from "./core/client/v1/genesis";
import * as _89 from "./core/client/v1/query";
import * as _90 from "./core/client/v1/tx";
import * as _91 from "./core/commitment/v1/commitment";
import * as _92 from "./core/connection/v1/connection";
import * as _93 from "./core/connection/v1/genesis";
import * as _94 from "./core/connection/v1/query";
import * as _95 from "./core/connection/v1/tx";
import * as _96 from "./lightclients/localhost/v1/localhost";
import * as _97 from "./lightclients/solomachine/v1/solomachine";
import * as _98 from "./lightclients/solomachine/v2/solomachine";
import * as _99 from "./lightclients/tendermint/v1/tendermint";
import * as _176 from "./applications/transfer/v1/tx.amino";
import * as _177 from "./core/channel/v1/tx.amino";
import * as _178 from "./core/client/v1/tx.amino";
import * as _179 from "./core/connection/v1/tx.amino";
import * as _180 from "./applications/transfer/v1/tx.registry";
import * as _181 from "./core/channel/v1/tx.registry";
import * as _182 from "./core/client/v1/tx.registry";
import * as _183 from "./core/connection/v1/tx.registry";
import * as _184 from "./applications/transfer/v1/query.lcd";
import * as _185 from "./core/channel/v1/query.lcd";
import * as _186 from "./core/client/v1/query.lcd";
import * as _187 from "./core/connection/v1/query.lcd";
import * as _188 from "./applications/transfer/v1/query.rpc.Query";
import * as _189 from "./core/channel/v1/query.rpc.Query";
import * as _190 from "./core/client/v1/query.rpc.Query";
import * as _191 from "./core/connection/v1/query.rpc.Query";
import * as _192 from "./applications/transfer/v1/tx.rpc.msg";
import * as _193 from "./core/channel/v1/tx.rpc.msg";
import * as _194 from "./core/client/v1/tx.rpc.msg";
import * as _195 from "./core/connection/v1/tx.rpc.msg";
import * as _207 from "./lcd";
import * as _208 from "./rpc.query";
import * as _209 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._78,
        ..._79,
        ..._80,
        ..._81,
        ..._176,
        ..._180,
        ..._184,
        ..._188,
        ..._192
      };
      export const v2 = {
        ..._82
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._177,
        ..._181,
        ..._185,
        ..._189,
        ..._193
      };
    }
    export namespace client {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._178,
        ..._182,
        ..._186,
        ..._190,
        ..._194
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._91
      };
    }
    export namespace connection {
      export const v1 = {
        ..._92,
        ..._93,
        ..._94,
        ..._95,
        ..._179,
        ..._183,
        ..._187,
        ..._191,
        ..._195
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._96
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._97
      };
      export const v2 = {
        ..._98
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._99
      };
    }
  }
  export const ClientFactory = {
    ..._207,
    ..._208,
    ..._209
  };
}