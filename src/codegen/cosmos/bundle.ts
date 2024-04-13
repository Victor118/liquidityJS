import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./feegrant/v1beta1/feegrant";
import * as _31 from "./feegrant/v1beta1/genesis";
import * as _32 from "./feegrant/v1beta1/query";
import * as _33 from "./feegrant/v1beta1/tx";
import * as _34 from "./gov/v1/genesis";
import * as _35 from "./gov/v1/gov";
import * as _36 from "./gov/v1/query";
import * as _37 from "./gov/v1/tx";
import * as _38 from "./gov/v1beta1/genesis";
import * as _39 from "./gov/v1beta1/gov";
import * as _40 from "./gov/v1beta1/query";
import * as _41 from "./gov/v1beta1/tx";
import * as _42 from "./group/v1/events";
import * as _43 from "./group/v1/genesis";
import * as _44 from "./group/v1/query";
import * as _45 from "./group/v1/tx";
import * as _46 from "./group/v1/types";
import * as _47 from "./mint/v1beta1/genesis";
import * as _48 from "./mint/v1beta1/mint";
import * as _49 from "./mint/v1beta1/query";
import * as _50 from "./params/v1beta1/params";
import * as _51 from "./params/v1beta1/query";
import * as _52 from "./staking/v1beta1/authz";
import * as _53 from "./staking/v1beta1/genesis";
import * as _54 from "./staking/v1beta1/query";
import * as _55 from "./staking/v1beta1/staking";
import * as _56 from "./staking/v1beta1/tx";
import * as _57 from "./tx/signing/v1beta1/signing";
import * as _58 from "./tx/v1beta1/service";
import * as _59 from "./tx/v1beta1/tx";
import * as _60 from "./upgrade/v1beta1/query";
import * as _61 from "./upgrade/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/upgrade";
import * as _63 from "./vesting/v1beta1/tx";
import * as _64 from "./vesting/v1beta1/vesting";
import * as _115 from "./authz/v1beta1/tx.amino";
import * as _116 from "./bank/v1beta1/tx.amino";
import * as _117 from "./distribution/v1beta1/tx.amino";
import * as _118 from "./feegrant/v1beta1/tx.amino";
import * as _119 from "./gov/v1/tx.amino";
import * as _120 from "./gov/v1beta1/tx.amino";
import * as _121 from "./group/v1/tx.amino";
import * as _122 from "./staking/v1beta1/tx.amino";
import * as _123 from "./upgrade/v1beta1/tx.amino";
import * as _124 from "./vesting/v1beta1/tx.amino";
import * as _125 from "./authz/v1beta1/tx.registry";
import * as _126 from "./bank/v1beta1/tx.registry";
import * as _127 from "./distribution/v1beta1/tx.registry";
import * as _128 from "./feegrant/v1beta1/tx.registry";
import * as _129 from "./gov/v1/tx.registry";
import * as _130 from "./gov/v1beta1/tx.registry";
import * as _131 from "./group/v1/tx.registry";
import * as _132 from "./staking/v1beta1/tx.registry";
import * as _133 from "./upgrade/v1beta1/tx.registry";
import * as _134 from "./vesting/v1beta1/tx.registry";
import * as _135 from "./auth/v1beta1/query.lcd";
import * as _136 from "./authz/v1beta1/query.lcd";
import * as _137 from "./bank/v1beta1/query.lcd";
import * as _138 from "./distribution/v1beta1/query.lcd";
import * as _139 from "./feegrant/v1beta1/query.lcd";
import * as _140 from "./gov/v1/query.lcd";
import * as _141 from "./gov/v1beta1/query.lcd";
import * as _142 from "./group/v1/query.lcd";
import * as _143 from "./mint/v1beta1/query.lcd";
import * as _144 from "./params/v1beta1/query.lcd";
import * as _145 from "./staking/v1beta1/query.lcd";
import * as _146 from "./tx/v1beta1/service.lcd";
import * as _147 from "./upgrade/v1beta1/query.lcd";
import * as _148 from "./auth/v1beta1/query.rpc.Query";
import * as _149 from "./authz/v1beta1/query.rpc.Query";
import * as _150 from "./bank/v1beta1/query.rpc.Query";
import * as _151 from "./distribution/v1beta1/query.rpc.Query";
import * as _152 from "./feegrant/v1beta1/query.rpc.Query";
import * as _153 from "./gov/v1/query.rpc.Query";
import * as _154 from "./gov/v1beta1/query.rpc.Query";
import * as _155 from "./group/v1/query.rpc.Query";
import * as _156 from "./mint/v1beta1/query.rpc.Query";
import * as _157 from "./params/v1beta1/query.rpc.Query";
import * as _158 from "./staking/v1beta1/query.rpc.Query";
import * as _159 from "./tx/v1beta1/service.rpc.Service";
import * as _160 from "./upgrade/v1beta1/query.rpc.Query";
import * as _161 from "./authz/v1beta1/tx.rpc.msg";
import * as _162 from "./bank/v1beta1/tx.rpc.msg";
import * as _163 from "./distribution/v1beta1/tx.rpc.msg";
import * as _164 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _165 from "./gov/v1/tx.rpc.msg";
import * as _166 from "./gov/v1beta1/tx.rpc.msg";
import * as _167 from "./group/v1/tx.rpc.msg";
import * as _168 from "./staking/v1beta1/tx.rpc.msg";
import * as _169 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _170 from "./vesting/v1beta1/tx.rpc.msg";
import * as _201 from "./lcd";
import * as _202 from "./rpc.query";
import * as _203 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._135,
      ..._148
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._115,
      ..._125,
      ..._136,
      ..._149,
      ..._161
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._116,
      ..._126,
      ..._137,
      ..._150,
      ..._162
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._20
    };
    export namespace hd {
      export const v1 = {
        ..._21
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._22
      };
    }
    export const multisig = {
      ..._23
    };
    export const secp256k1 = {
      ..._24
    };
    export const secp256r1 = {
      ..._25
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._117,
      ..._127,
      ..._138,
      ..._151,
      ..._163
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._118,
      ..._128,
      ..._139,
      ..._152,
      ..._164
    };
  }
  export namespace gov {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._119,
      ..._129,
      ..._140,
      ..._153,
      ..._165
    };
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._120,
      ..._130,
      ..._141,
      ..._154,
      ..._166
    };
  }
  export namespace group {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._121,
      ..._131,
      ..._142,
      ..._155,
      ..._167
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._143,
      ..._156
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._144,
      ..._157
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._122,
      ..._132,
      ..._145,
      ..._158,
      ..._168
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._146,
      ..._159
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._123,
      ..._133,
      ..._147,
      ..._160,
      ..._169
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._124,
      ..._134,
      ..._170
    };
  }
  export const ClientFactory = {
    ..._201,
    ..._202,
    ..._203
  };
}