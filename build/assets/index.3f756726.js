function i2(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(n, o);
          a &&
            Object.defineProperty(
              e,
              o,
              a.get ? a : { enumerable: !0, get: () => n[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = r(o);
    fetch(o.href, a);
  }
})();
var kl =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function l2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var k = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ol = Symbol.for("react.element"),
  s2 = Symbol.for("react.portal"),
  u2 = Symbol.for("react.fragment"),
  c2 = Symbol.for("react.strict_mode"),
  d2 = Symbol.for("react.profiler"),
  f2 = Symbol.for("react.provider"),
  p2 = Symbol.for("react.context"),
  h2 = Symbol.for("react.forward_ref"),
  v2 = Symbol.for("react.suspense"),
  m2 = Symbol.for("react.memo"),
  g2 = Symbol.for("react.lazy"),
  iv = Symbol.iterator;
function y2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (iv && e[iv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Og = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vg = Object.assign,
  jg = {};
function Ca(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = jg),
    (this.updater = r || Og);
}
Ca.prototype.isReactComponent = {};
Ca.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ca.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wg() {}
Wg.prototype = Ca.prototype;
function dp(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = jg),
    (this.updater = r || Og);
}
var fp = (dp.prototype = new Wg());
fp.constructor = dp;
Vg(fp, Ca.prototype);
fp.isPureReactComponent = !0;
var lv = Array.isArray,
  Hg = Object.prototype.hasOwnProperty,
  pp = { current: null },
  Ug = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gg(e, t, r) {
  var n,
    o = {},
    a = null,
    i = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Hg.call(t, n) && !Ug.hasOwnProperty(n) && (o[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) o.children = r;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) o[n] === void 0 && (o[n] = l[n]);
  return {
    $$typeof: ol,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: pp.current,
  };
}
function b2(e, t) {
  return {
    $$typeof: ol,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ol;
}
function S2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var sv = /\/+/g;
function Tc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? S2("" + e.key)
    : t.toString(36);
}
function is(e, t, r, n, o) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (a) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ol:
          case s2:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = n === "" ? "." + Tc(i, 0) : n),
      lv(o)
        ? ((r = ""),
          e != null && (r = e.replace(sv, "$&/") + "/"),
          is(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (hp(o) &&
            (o = b2(
              o,
              r +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(sv, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (n = n === "" ? "." : n + ":"), lv(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var s = n + Tc(a, l);
      i += is(a, t, r, s, o);
    }
  else if (((s = y2(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (s = n + Tc(a, l++)), (i += is(a, t, r, s, o));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function El(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    is(e, n, "", "", function (a) {
      return t.call(r, a, o++);
    }),
    n
  );
}
function x2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Tt = { current: null },
  ls = { transition: null },
  w2 = {
    ReactCurrentDispatcher: Tt,
    ReactCurrentBatchConfig: ls,
    ReactCurrentOwner: pp,
  };
ie.Children = {
  map: El,
  forEach: function (e, t, r) {
    El(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      El(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      El(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ie.Component = Ca;
ie.Fragment = u2;
ie.Profiler = d2;
ie.PureComponent = dp;
ie.StrictMode = c2;
ie.Suspense = v2;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w2;
ie.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Vg({}, e.props),
    o = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = pp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Hg.call(t, s) &&
        !Ug.hasOwnProperty(s) &&
        (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    n.children = l;
  }
  return { $$typeof: ol, type: e.type, key: o, ref: a, props: n, _owner: i };
};
ie.createContext = function (e) {
  return (
    (e = {
      $$typeof: p2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: f2, _context: e }),
    (e.Consumer = e)
  );
};
ie.createElement = Gg;
ie.createFactory = function (e) {
  var t = Gg.bind(null, e);
  return (t.type = e), t;
};
ie.createRef = function () {
  return { current: null };
};
ie.forwardRef = function (e) {
  return { $$typeof: h2, render: e };
};
ie.isValidElement = hp;
ie.lazy = function (e) {
  return { $$typeof: g2, _payload: { _status: -1, _result: e }, _init: x2 };
};
ie.memo = function (e, t) {
  return { $$typeof: m2, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function (e) {
  var t = ls.transition;
  ls.transition = {};
  try {
    e();
  } finally {
    ls.transition = t;
  }
};
ie.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ie.useCallback = function (e, t) {
  return Tt.current.useCallback(e, t);
};
ie.useContext = function (e) {
  return Tt.current.useContext(e);
};
ie.useDebugValue = function () {};
ie.useDeferredValue = function (e) {
  return Tt.current.useDeferredValue(e);
};
ie.useEffect = function (e, t) {
  return Tt.current.useEffect(e, t);
};
ie.useId = function () {
  return Tt.current.useId();
};
ie.useImperativeHandle = function (e, t, r) {
  return Tt.current.useImperativeHandle(e, t, r);
};
ie.useInsertionEffect = function (e, t) {
  return Tt.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function (e, t) {
  return Tt.current.useLayoutEffect(e, t);
};
ie.useMemo = function (e, t) {
  return Tt.current.useMemo(e, t);
};
ie.useReducer = function (e, t, r) {
  return Tt.current.useReducer(e, t, r);
};
ie.useRef = function (e) {
  return Tt.current.useRef(e);
};
ie.useState = function (e) {
  return Tt.current.useState(e);
};
ie.useSyncExternalStore = function (e, t, r) {
  return Tt.current.useSyncExternalStore(e, t, r);
};
ie.useTransition = function () {
  return Tt.current.useTransition();
};
ie.version = "18.2.0";
(function (e) {
  e.exports = ie;
})(k);
const Q = l2(k.exports),
  Ad = i2({ __proto__: null, default: Q }, [k.exports]);
var Md = {},
  Su = { exports: {} },
  Qt = {},
  Kg = { exports: {} },
  Yg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(F, Y) {
    var H = F.length;
    F.push(Y);
    e: for (; 0 < H; ) {
      var J = (H - 1) >>> 1,
        de = F[J];
      if (0 < o(de, Y)) (F[J] = Y), (F[H] = de), (H = J);
      else break e;
    }
  }
  function r(F) {
    return F.length === 0 ? null : F[0];
  }
  function n(F) {
    if (F.length === 0) return null;
    var Y = F[0],
      H = F.pop();
    if (H !== Y) {
      F[0] = H;
      e: for (var J = 0, de = F.length, re = de >>> 1; J < re; ) {
        var Ye = 2 * (J + 1) - 1,
          Rt = F[Ye],
          ot = Ye + 1,
          Vt = F[ot];
        if (0 > o(Rt, H))
          ot < de && 0 > o(Vt, Rt)
            ? ((F[J] = Vt), (F[ot] = H), (J = ot))
            : ((F[J] = Rt), (F[Ye] = H), (J = Ye));
        else if (ot < de && 0 > o(Vt, H)) (F[J] = Vt), (F[ot] = H), (J = ot);
        else break e;
      }
    }
    return Y;
  }
  function o(F, Y) {
    var H = F.sortIndex - Y.sortIndex;
    return H !== 0 ? H : F.id - Y.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var s = [],
    u = [],
    d = 1,
    f = null,
    c = 3,
    h = !1,
    m = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(F) {
    for (var Y = r(u); Y !== null; ) {
      if (Y.callback === null) n(u);
      else if (Y.startTime <= F)
        n(u), (Y.sortIndex = Y.expirationTime), t(s, Y);
      else break;
      Y = r(u);
    }
  }
  function x(F) {
    if (((g = !1), b(F), !m))
      if (r(s) !== null) (m = !0), oe(E);
      else {
        var Y = r(u);
        Y !== null && Ge(x, Y.startTime - F);
      }
  }
  function E(F, Y) {
    (m = !1), g && ((g = !1), p(M), (M = -1)), (h = !0);
    var H = c;
    try {
      for (
        b(Y), f = r(s);
        f !== null && (!(f.expirationTime > Y) || (F && !K()));

      ) {
        var J = f.callback;
        if (typeof J == "function") {
          (f.callback = null), (c = f.priorityLevel);
          var de = J(f.expirationTime <= Y);
          (Y = e.unstable_now()),
            typeof de == "function" ? (f.callback = de) : f === r(s) && n(s),
            b(Y);
        } else n(s);
        f = r(s);
      }
      if (f !== null) var re = !0;
      else {
        var Ye = r(u);
        Ye !== null && Ge(x, Ye.startTime - Y), (re = !1);
      }
      return re;
    } finally {
      (f = null), (c = H), (h = !1);
    }
  }
  var T = !1,
    _ = null,
    M = -1,
    I = 5,
    B = -1;
  function K() {
    return !(e.unstable_now() - B < I);
  }
  function ce() {
    if (_ !== null) {
      var F = e.unstable_now();
      B = F;
      var Y = !0;
      try {
        Y = _(!0, F);
      } finally {
        Y ? xe() : ((T = !1), (_ = null));
      }
    } else T = !1;
  }
  var xe;
  if (typeof v == "function")
    xe = function () {
      v(ce);
    };
  else if (typeof MessageChannel < "u") {
    var ee = new MessageChannel(),
      We = ee.port2;
    (ee.port1.onmessage = ce),
      (xe = function () {
        We.postMessage(null);
      });
  } else
    xe = function () {
      S(ce, 0);
    };
  function oe(F) {
    (_ = F), T || ((T = !0), xe());
  }
  function Ge(F, Y) {
    M = S(function () {
      F(e.unstable_now());
    }, Y);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (F) {
      F.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || h || ((m = !0), oe(E));
    }),
    (e.unstable_forceFrameRate = function (F) {
      0 > F || 125 < F
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < F ? Math.floor(1e3 / F) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function (F) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = c;
      }
      var H = c;
      c = Y;
      try {
        return F();
      } finally {
        c = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (F, Y) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var H = c;
      c = F;
      try {
        return Y();
      } finally {
        c = H;
      }
    }),
    (e.unstable_scheduleCallback = function (F, Y, H) {
      var J = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? J + H : J))
          : (H = J),
        F)
      ) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return (
        (de = H + de),
        (F = {
          id: d++,
          callback: Y,
          priorityLevel: F,
          startTime: H,
          expirationTime: de,
          sortIndex: -1,
        }),
        H > J
          ? ((F.sortIndex = H),
            t(u, F),
            r(s) === null &&
              F === r(u) &&
              (g ? (p(M), (M = -1)) : (g = !0), Ge(x, H - J)))
          : ((F.sortIndex = de), t(s, F), m || h || ((m = !0), oe(E))),
        F
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (F) {
      var Y = c;
      return function () {
        var H = c;
        c = Y;
        try {
          return F.apply(this, arguments);
        } finally {
          c = H;
        }
      };
    });
})(Yg);
(function (e) {
  e.exports = Yg;
})(Kg);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xg = k.exports,
  Xt = Kg.exports;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qg = new Set(),
  Ci = {};
function So(e, t) {
  da(e, t), da(e + "Capture", t);
}
function da(e, t) {
  for (Ci[e] = t, e = 0; e < t.length; e++) Qg.add(t[e]);
}
var en = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ld = Object.prototype.hasOwnProperty,
  C2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uv = {},
  cv = {};
function k2(e) {
  return Ld.call(cv, e)
    ? !0
    : Ld.call(uv, e)
    ? !1
    : C2.test(e)
    ? (cv[e] = !0)
    : ((uv[e] = !0), !1);
}
function E2(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function T2(e, t, r, n) {
  if (t === null || typeof t > "u" || E2(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _t(e, t, r, n, o, a, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
}
var ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ht[e] = new _t(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ht[t] = new _t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ht[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ht[e] = new _t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ht[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ht[e] = new _t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ht[e] = new _t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ht[e] = new _t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ht[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vp = /[\-:]([a-z])/g;
function mp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vp, mp);
    ht[t] = new _t(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vp, mp);
    ht[t] = new _t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vp, mp);
  ht[t] = new _t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ht[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new _t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ht[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gp(e, t, r, n) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (T2(t, r, o, n) && (r = null),
    n || o === null
      ? k2(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var sn = Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Tl = Symbol.for("react.element"),
  Lo = Symbol.for("react.portal"),
  zo = Symbol.for("react.fragment"),
  yp = Symbol.for("react.strict_mode"),
  zd = Symbol.for("react.profiler"),
  Zg = Symbol.for("react.provider"),
  qg = Symbol.for("react.context"),
  bp = Symbol.for("react.forward_ref"),
  Dd = Symbol.for("react.suspense"),
  Bd = Symbol.for("react.suspense_list"),
  Sp = Symbol.for("react.memo"),
  Sn = Symbol.for("react.lazy"),
  Jg = Symbol.for("react.offscreen"),
  dv = Symbol.iterator;
function Ba(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dv && e[dv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ve = Object.assign,
  _c;
function Xa(e) {
  if (_c === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      _c = (t && t[1]) || "";
    }
  return (
    `
` +
    _c +
    e
  );
}
var Pc = !1;
function Rc(e, t) {
  if (!e || Pc) return "";
  Pc = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          a = n.stack.split(`
`),
          i = o.length - 1,
          l = a.length - 1;
        1 <= i && 0 <= l && o[i] !== a[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== a[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== a[l])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Pc = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Xa(e) : "";
}
function _2(e) {
  switch (e.tag) {
    case 5:
      return Xa(e.type);
    case 16:
      return Xa("Lazy");
    case 13:
      return Xa("Suspense");
    case 19:
      return Xa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Rc(e.type, !1)), e;
    case 11:
      return (e = Rc(e.type.render, !1)), e;
    case 1:
      return (e = Rc(e.type, !0)), e;
    default:
      return "";
  }
}
function Id(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zo:
      return "Fragment";
    case Lo:
      return "Portal";
    case zd:
      return "Profiler";
    case yp:
      return "StrictMode";
    case Dd:
      return "Suspense";
    case Bd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qg:
        return (e.displayName || "Context") + ".Consumer";
      case Zg:
        return (e._context.displayName || "Context") + ".Provider";
      case bp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Sp:
        return (
          (t = e.displayName || null), t !== null ? t : Id(e.type) || "Memo"
        );
      case Sn:
        (t = e._payload), (e = e._init);
        try {
          return Id(e(t));
        } catch {}
    }
  return null;
}
function P2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Id(t);
    case 8:
      return t === yp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ey(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function R2(e) {
  var t = ey(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (n = "" + i), a.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (i) {
          n = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _l(e) {
  e._valueTracker || (e._valueTracker = R2(e));
}
function ty(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = ey(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function As(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $d(e, t) {
  var r = t.checked;
  return Ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function fv(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = $n(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ry(e, t) {
  (t = t.checked), t != null && gp(e, "checked", t, !1);
}
function Nd(e, t) {
  ry(e, t);
  var r = $n(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Fd(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Fd(e, t.type, $n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pv(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Fd(e, t, r) {
  (t !== "number" || As(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Qa = Array.isArray;
function Yo(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + $n(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Od(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hv(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(N(92));
      if (Qa(r)) {
        if (1 < r.length) throw Error(N(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: $n(r) };
}
function ny(e, t) {
  var r = $n(t.value),
    n = $n(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function vv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? oy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Pl,
  ay = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Pl = Pl || document.createElement("div"),
          Pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ki(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ri = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  A2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ri).forEach(function (e) {
  A2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ri[t] = ri[e]);
  });
});
function iy(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (ri.hasOwnProperty(e) && ri[e])
    ? ("" + t).trim()
    : t + "px";
}
function ly(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = iy(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var M2 = Ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function jd(e, t) {
  if (t) {
    if (M2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Wd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Hd = null;
function xp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ud = null,
  Xo = null,
  Qo = null;
function mv(e) {
  if ((e = ll(e))) {
    if (typeof Ud != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Eu(t)), Ud(e.stateNode, e.type, t));
  }
}
function sy(e) {
  Xo ? (Qo ? Qo.push(e) : (Qo = [e])) : (Xo = e);
}
function uy() {
  if (Xo) {
    var e = Xo,
      t = Qo;
    if (((Qo = Xo = null), mv(e), t)) for (e = 0; e < t.length; e++) mv(t[e]);
  }
}
function cy(e, t) {
  return e(t);
}
function dy() {}
var Ac = !1;
function fy(e, t, r) {
  if (Ac) return e(t, r);
  Ac = !0;
  try {
    return cy(e, t, r);
  } finally {
    (Ac = !1), (Xo !== null || Qo !== null) && (dy(), uy());
  }
}
function Ei(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Eu(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(N(231, t, typeof r));
  return r;
}
var Gd = !1;
if (en)
  try {
    var Ia = {};
    Object.defineProperty(Ia, "passive", {
      get: function () {
        Gd = !0;
      },
    }),
      window.addEventListener("test", Ia, Ia),
      window.removeEventListener("test", Ia, Ia);
  } catch {
    Gd = !1;
  }
function L2(e, t, r, n, o, a, i, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (d) {
    this.onError(d);
  }
}
var ni = !1,
  Ms = null,
  Ls = !1,
  Kd = null,
  z2 = {
    onError: function (e) {
      (ni = !0), (Ms = e);
    },
  };
function D2(e, t, r, n, o, a, i, l, s) {
  (ni = !1), (Ms = null), L2.apply(z2, arguments);
}
function B2(e, t, r, n, o, a, i, l, s) {
  if ((D2.apply(this, arguments), ni)) {
    if (ni) {
      var u = Ms;
      (ni = !1), (Ms = null);
    } else throw Error(N(198));
    Ls || ((Ls = !0), (Kd = u));
  }
}
function xo(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function py(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function gv(e) {
  if (xo(e) !== e) throw Error(N(188));
}
function I2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xo(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var a = o.alternate;
    if (a === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === r) return gv(o), e;
        if (a === n) return gv(o), t;
        a = a.sibling;
      }
      throw Error(N(188));
    }
    if (r.return !== n.return) (r = o), (n = a);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === r) {
          (i = !0), (r = o), (n = a);
          break;
        }
        if (l === n) {
          (i = !0), (n = o), (r = a);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = a.child; l; ) {
          if (l === r) {
            (i = !0), (r = a), (n = o);
            break;
          }
          if (l === n) {
            (i = !0), (n = a), (r = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (r.alternate !== n) throw Error(N(190));
  }
  if (r.tag !== 3) throw Error(N(188));
  return r.stateNode.current === r ? e : t;
}
function hy(e) {
  return (e = I2(e)), e !== null ? vy(e) : null;
}
function vy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var my = Xt.unstable_scheduleCallback,
  yv = Xt.unstable_cancelCallback,
  $2 = Xt.unstable_shouldYield,
  N2 = Xt.unstable_requestPaint,
  Ke = Xt.unstable_now,
  F2 = Xt.unstable_getCurrentPriorityLevel,
  wp = Xt.unstable_ImmediatePriority,
  gy = Xt.unstable_UserBlockingPriority,
  zs = Xt.unstable_NormalPriority,
  O2 = Xt.unstable_LowPriority,
  yy = Xt.unstable_IdlePriority,
  xu = null,
  $r = null;
function V2(e) {
  if ($r && typeof $r.onCommitFiberRoot == "function")
    try {
      $r.onCommitFiberRoot(xu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wr = Math.clz32 ? Math.clz32 : H2,
  j2 = Math.log,
  W2 = Math.LN2;
function H2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((j2(e) / W2) | 0)) | 0;
}
var Rl = 64,
  Al = 4194304;
function Za(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ds(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    a = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (n = Za(l)) : ((a &= i), a !== 0 && (n = Za(a)));
  } else (i = r & ~o), i !== 0 ? (n = Za(i)) : a !== 0 && (n = Za(a));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    (t & o) === 0 &&
    ((o = n & -n), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
  )
    return t;
  if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - wr(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function U2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function G2(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - wr(a),
      l = 1 << i,
      s = o[i];
    s === -1
      ? ((l & r) === 0 || (l & n) !== 0) && (o[i] = U2(l, t))
      : s <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function Yd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function by() {
  var e = Rl;
  return (Rl <<= 1), (Rl & 4194240) === 0 && (Rl = 64), e;
}
function Mc(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function al(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wr(t)),
    (e[t] = r);
}
function K2(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - wr(r),
      a = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~a);
  }
}
function Cp(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - wr(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var Ce = 0;
function Sy(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var xy,
  kp,
  wy,
  Cy,
  ky,
  Xd = !1,
  Ml = [],
  Pn = null,
  Rn = null,
  An = null,
  Ti = new Map(),
  _i = new Map(),
  wn = [],
  Y2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pn = null;
      break;
    case "dragenter":
    case "dragleave":
      Rn = null;
      break;
    case "mouseover":
    case "mouseout":
      An = null;
      break;
    case "pointerover":
    case "pointerout":
      Ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _i.delete(t.pointerId);
  }
}
function $a(e, t, r, n, o, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [o],
      }),
      t !== null && ((t = ll(t)), t !== null && kp(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function X2(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (Pn = $a(Pn, e, t, r, n, o)), !0;
    case "dragenter":
      return (Rn = $a(Rn, e, t, r, n, o)), !0;
    case "mouseover":
      return (An = $a(An, e, t, r, n, o)), !0;
    case "pointerover":
      var a = o.pointerId;
      return Ti.set(a, $a(Ti.get(a) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (a = o.pointerId), _i.set(a, $a(_i.get(a) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function Ey(e) {
  var t = eo(e.target);
  if (t !== null) {
    var r = xo(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = py(r)), t !== null)) {
          (e.blockedOn = t),
            ky(e.priority, function () {
              wy(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ss(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Qd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Hd = n), r.target.dispatchEvent(n), (Hd = null);
    } else return (t = ll(r)), t !== null && kp(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Sv(e, t, r) {
  ss(e) && r.delete(t);
}
function Q2() {
  (Xd = !1),
    Pn !== null && ss(Pn) && (Pn = null),
    Rn !== null && ss(Rn) && (Rn = null),
    An !== null && ss(An) && (An = null),
    Ti.forEach(Sv),
    _i.forEach(Sv);
}
function Na(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xd ||
      ((Xd = !0),
      Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority, Q2)));
}
function Pi(e) {
  function t(o) {
    return Na(o, e);
  }
  if (0 < Ml.length) {
    Na(Ml[0], e);
    for (var r = 1; r < Ml.length; r++) {
      var n = Ml[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Pn !== null && Na(Pn, e),
      Rn !== null && Na(Rn, e),
      An !== null && Na(An, e),
      Ti.forEach(t),
      _i.forEach(t),
      r = 0;
    r < wn.length;
    r++
  )
    (n = wn[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < wn.length && ((r = wn[0]), r.blockedOn === null); )
    Ey(r), r.blockedOn === null && wn.shift();
}
var Zo = sn.ReactCurrentBatchConfig,
  Bs = !0;
function Z2(e, t, r, n) {
  var o = Ce,
    a = Zo.transition;
  Zo.transition = null;
  try {
    (Ce = 1), Ep(e, t, r, n);
  } finally {
    (Ce = o), (Zo.transition = a);
  }
}
function q2(e, t, r, n) {
  var o = Ce,
    a = Zo.transition;
  Zo.transition = null;
  try {
    (Ce = 4), Ep(e, t, r, n);
  } finally {
    (Ce = o), (Zo.transition = a);
  }
}
function Ep(e, t, r, n) {
  if (Bs) {
    var o = Qd(e, t, r, n);
    if (o === null) Vc(e, t, n, Is, r), bv(e, n);
    else if (X2(o, e, t, r, n)) n.stopPropagation();
    else if ((bv(e, n), t & 4 && -1 < Y2.indexOf(e))) {
      for (; o !== null; ) {
        var a = ll(o);
        if (
          (a !== null && xy(a),
          (a = Qd(e, t, r, n)),
          a === null && Vc(e, t, n, Is, r),
          a === o)
        )
          break;
        o = a;
      }
      o !== null && n.stopPropagation();
    } else Vc(e, t, n, null, r);
  }
}
var Is = null;
function Qd(e, t, r, n) {
  if (((Is = null), (e = xp(n)), (e = eo(e)), e !== null))
    if (((t = xo(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = py(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Is = e), null;
}
function Ty(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (F2()) {
        case wp:
          return 1;
        case gy:
          return 4;
        case zs:
        case O2:
          return 16;
        case yy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var En = null,
  Tp = null,
  us = null;
function _y() {
  if (us) return us;
  var e,
    t = Tp,
    r = t.length,
    n,
    o = "value" in En ? En.value : En.textContent,
    a = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var i = r - e;
  for (n = 1; n <= i && t[r - n] === o[a - n]; n++);
  return (us = o.slice(e, 1 < n ? 1 - n : void 0));
}
function cs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ll() {
  return !0;
}
function xv() {
  return !1;
}
function Zt(e) {
  function t(r, n, o, a, i) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((r = e[l]), (this[l] = r ? r(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Ll
        : xv),
      (this.isPropagationStopped = xv),
      this
    );
  }
  return (
    Ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ll));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ll));
      },
      persist: function () {},
      isPersistent: Ll,
    }),
    t
  );
}
var ka = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _p = Zt(ka),
  il = Ve({}, ka, { view: 0, detail: 0 }),
  J2 = Zt(il),
  Lc,
  zc,
  Fa,
  wu = Ve({}, il, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fa &&
            (Fa && e.type === "mousemove"
              ? ((Lc = e.screenX - Fa.screenX), (zc = e.screenY - Fa.screenY))
              : (zc = Lc = 0),
            (Fa = e)),
          Lc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zc;
    },
  }),
  wv = Zt(wu),
  eC = Ve({}, wu, { dataTransfer: 0 }),
  tC = Zt(eC),
  rC = Ve({}, il, { relatedTarget: 0 }),
  Dc = Zt(rC),
  nC = Ve({}, ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oC = Zt(nC),
  aC = Ve({}, ka, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  iC = Zt(aC),
  lC = Ve({}, ka, { data: 0 }),
  Cv = Zt(lC),
  sC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  uC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cC[e]) ? !!t[e] : !1;
}
function Pp() {
  return dC;
}
var fC = Ve({}, il, {
    key: function (e) {
      if (e.key) {
        var t = sC[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = cs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? uC[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pp,
    charCode: function (e) {
      return e.type === "keypress" ? cs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? cs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pC = Zt(fC),
  hC = Ve({}, wu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  kv = Zt(hC),
  vC = Ve({}, il, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pp,
  }),
  mC = Zt(vC),
  gC = Ve({}, ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yC = Zt(gC),
  bC = Ve({}, wu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  SC = Zt(bC),
  xC = [9, 13, 27, 32],
  Rp = en && "CompositionEvent" in window,
  oi = null;
en && "documentMode" in document && (oi = document.documentMode);
var wC = en && "TextEvent" in window && !oi,
  Py = en && (!Rp || (oi && 8 < oi && 11 >= oi)),
  Ev = String.fromCharCode(32),
  Tv = !1;
function Ry(e, t) {
  switch (e) {
    case "keyup":
      return xC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ay(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Do = !1;
function CC(e, t) {
  switch (e) {
    case "compositionend":
      return Ay(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tv = !0), Ev);
    case "textInput":
      return (e = t.data), e === Ev && Tv ? null : e;
    default:
      return null;
  }
}
function kC(e, t) {
  if (Do)
    return e === "compositionend" || (!Rp && Ry(e, t))
      ? ((e = _y()), (us = Tp = En = null), (Do = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Py && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var EC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _v(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!EC[e.type] : t === "textarea";
}
function My(e, t, r, n) {
  sy(n),
    (t = $s(t, "onChange")),
    0 < t.length &&
      ((r = new _p("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var ai = null,
  Ri = null;
function TC(e) {
  jy(e, 0);
}
function Cu(e) {
  var t = $o(e);
  if (ty(t)) return e;
}
function _C(e, t) {
  if (e === "change") return t;
}
var Ly = !1;
if (en) {
  var Bc;
  if (en) {
    var Ic = "oninput" in document;
    if (!Ic) {
      var Pv = document.createElement("div");
      Pv.setAttribute("oninput", "return;"),
        (Ic = typeof Pv.oninput == "function");
    }
    Bc = Ic;
  } else Bc = !1;
  Ly = Bc && (!document.documentMode || 9 < document.documentMode);
}
function Rv() {
  ai && (ai.detachEvent("onpropertychange", zy), (Ri = ai = null));
}
function zy(e) {
  if (e.propertyName === "value" && Cu(Ri)) {
    var t = [];
    My(t, Ri, e, xp(e)), fy(TC, t);
  }
}
function PC(e, t, r) {
  e === "focusin"
    ? (Rv(), (ai = t), (Ri = r), ai.attachEvent("onpropertychange", zy))
    : e === "focusout" && Rv();
}
function RC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Cu(Ri);
}
function AC(e, t) {
  if (e === "click") return Cu(t);
}
function MC(e, t) {
  if (e === "input" || e === "change") return Cu(t);
}
function LC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Er = typeof Object.is == "function" ? Object.is : LC;
function Ai(e, t) {
  if (Er(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Ld.call(t, o) || !Er(e[o], t[o])) return !1;
  }
  return !0;
}
function Av(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mv(e, t) {
  var r = Av(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Av(r);
  }
}
function Dy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function By() {
  for (var e = window, t = As(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = As(e.document);
  }
  return t;
}
function Ap(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zC(e) {
  var t = By(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Dy(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Ap(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          a = Math.min(n.start, o);
        (n = n.end === void 0 ? a : Math.min(n.end, o)),
          !e.extend && a > n && ((o = n), (n = a), (a = o)),
          (o = Mv(r, a));
        var i = Mv(r, n);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          a > n
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var DC = en && "documentMode" in document && 11 >= document.documentMode,
  Bo = null,
  Zd = null,
  ii = null,
  qd = !1;
function Lv(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  qd ||
    Bo == null ||
    Bo !== As(n) ||
    ((n = Bo),
    "selectionStart" in n && Ap(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (ii && Ai(ii, n)) ||
      ((ii = n),
      (n = $s(Zd, "onSelect")),
      0 < n.length &&
        ((t = new _p("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Bo))));
}
function zl(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Io = {
    animationend: zl("Animation", "AnimationEnd"),
    animationiteration: zl("Animation", "AnimationIteration"),
    animationstart: zl("Animation", "AnimationStart"),
    transitionend: zl("Transition", "TransitionEnd"),
  },
  $c = {},
  Iy = {};
en &&
  ((Iy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Io.animationend.animation,
    delete Io.animationiteration.animation,
    delete Io.animationstart.animation),
  "TransitionEvent" in window || delete Io.transitionend.transition);
function ku(e) {
  if ($c[e]) return $c[e];
  if (!Io[e]) return e;
  var t = Io[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Iy) return ($c[e] = t[r]);
  return e;
}
var $y = ku("animationend"),
  Ny = ku("animationiteration"),
  Fy = ku("animationstart"),
  Oy = ku("transitionend"),
  Vy = new Map(),
  zv =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jn(e, t) {
  Vy.set(e, t), So(t, [e]);
}
for (var Nc = 0; Nc < zv.length; Nc++) {
  var Fc = zv[Nc],
    BC = Fc.toLowerCase(),
    IC = Fc[0].toUpperCase() + Fc.slice(1);
  jn(BC, "on" + IC);
}
jn($y, "onAnimationEnd");
jn(Ny, "onAnimationIteration");
jn(Fy, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(Oy, "onTransitionEnd");
da("onMouseEnter", ["mouseout", "mouseover"]);
da("onMouseLeave", ["mouseout", "mouseover"]);
da("onPointerEnter", ["pointerout", "pointerover"]);
da("onPointerLeave", ["pointerout", "pointerover"]);
So(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
So(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
So("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
So(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
So(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
So(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $C = new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));
function Dv(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), B2(n, t, void 0, e), (e.currentTarget = null);
}
function jy(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = n.length - 1; 0 <= i; i--) {
          var l = n[i],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== a && o.isPropagationStopped())) break e;
          Dv(o, l, u), (a = s);
        }
      else
        for (i = 0; i < n.length; i++) {
          if (
            ((l = n[i]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== a && o.isPropagationStopped())
          )
            break e;
          Dv(o, l, u), (a = s);
        }
    }
  }
  if (Ls) throw ((e = Kd), (Ls = !1), (Kd = null), e);
}
function Ae(e, t) {
  var r = t[nf];
  r === void 0 && (r = t[nf] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Wy(t, e, 2, !1), r.add(n));
}
function Oc(e, t, r) {
  var n = 0;
  t && (n |= 4), Wy(r, e, n, t);
}
var Dl = "_reactListening" + Math.random().toString(36).slice(2);
function Mi(e) {
  if (!e[Dl]) {
    (e[Dl] = !0),
      Qg.forEach(function (r) {
        r !== "selectionchange" && ($C.has(r) || Oc(r, !1, e), Oc(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Dl] || ((t[Dl] = !0), Oc("selectionchange", !1, t));
  }
}
function Wy(e, t, r, n) {
  switch (Ty(t)) {
    case 1:
      var o = Z2;
      break;
    case 4:
      o = q2;
      break;
    default:
      o = Ep;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !Gd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function Vc(e, t, r, n, o) {
  var a = n;
  if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var i = n.tag;
      if (i === 3 || i === 4) {
        var l = n.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = n.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = eo(l)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            n = a = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  fy(function () {
    var u = a,
      d = xp(r),
      f = [];
    e: {
      var c = Vy.get(e);
      if (c !== void 0) {
        var h = _p,
          m = e;
        switch (e) {
          case "keypress":
            if (cs(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = pC;
            break;
          case "focusin":
            (m = "focus"), (h = Dc);
            break;
          case "focusout":
            (m = "blur"), (h = Dc);
            break;
          case "beforeblur":
          case "afterblur":
            h = Dc;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = wv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = tC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = mC;
            break;
          case $y:
          case Ny:
          case Fy:
            h = oC;
            break;
          case Oy:
            h = yC;
            break;
          case "scroll":
            h = J2;
            break;
          case "wheel":
            h = SC;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = iC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = kv;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          p = g ? (c !== null ? c + "Capture" : null) : c;
        g = [];
        for (var v = u, b; v !== null; ) {
          b = v;
          var x = b.stateNode;
          if (
            (b.tag === 5 &&
              x !== null &&
              ((b = x),
              p !== null && ((x = Ei(v, p)), x != null && g.push(Li(v, x, b)))),
            S)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((c = new h(c, m, null, r, d)), f.push({ event: c, listeners: g }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          c &&
            r !== Hd &&
            (m = r.relatedTarget || r.fromElement) &&
            (eo(m) || m[tn]))
        )
          break e;
        if (
          (h || c) &&
          ((c =
            d.window === d
              ? d
              : (c = d.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          h
            ? ((m = r.relatedTarget || r.toElement),
              (h = u),
              (m = m ? eo(m) : null),
              m !== null &&
                ((S = xo(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((h = null), (m = u)),
          h !== m)
        ) {
          if (
            ((g = wv),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = kv),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (v = "pointer")),
            (S = h == null ? c : $o(h)),
            (b = m == null ? c : $o(m)),
            (c = new g(x, v + "leave", h, r, d)),
            (c.target = S),
            (c.relatedTarget = b),
            (x = null),
            eo(d) === u &&
              ((g = new g(p, v + "enter", m, r, d)),
              (g.target = b),
              (g.relatedTarget = S),
              (x = g)),
            (S = x),
            h && m)
          )
            t: {
              for (g = h, p = m, v = 0, b = g; b; b = _o(b)) v++;
              for (b = 0, x = p; x; x = _o(x)) b++;
              for (; 0 < v - b; ) (g = _o(g)), v--;
              for (; 0 < b - v; ) (p = _o(p)), b--;
              for (; v--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = _o(g)), (p = _o(p));
              }
              g = null;
            }
          else g = null;
          h !== null && Bv(f, c, h, g, !1),
            m !== null && S !== null && Bv(f, S, m, g, !0);
        }
      }
      e: {
        if (
          ((c = u ? $o(u) : window),
          (h = c.nodeName && c.nodeName.toLowerCase()),
          h === "select" || (h === "input" && c.type === "file"))
        )
          var E = _C;
        else if (_v(c))
          if (Ly) E = MC;
          else {
            E = RC;
            var T = PC;
          }
        else
          (h = c.nodeName) &&
            h.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (E = AC);
        if (E && (E = E(e, u))) {
          My(f, E, r, d);
          break e;
        }
        T && T(e, c, u),
          e === "focusout" &&
            (T = c._wrapperState) &&
            T.controlled &&
            c.type === "number" &&
            Fd(c, "number", c.value);
      }
      switch (((T = u ? $o(u) : window), e)) {
        case "focusin":
          (_v(T) || T.contentEditable === "true") &&
            ((Bo = T), (Zd = u), (ii = null));
          break;
        case "focusout":
          ii = Zd = Bo = null;
          break;
        case "mousedown":
          qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qd = !1), Lv(f, r, d);
          break;
        case "selectionchange":
          if (DC) break;
        case "keydown":
        case "keyup":
          Lv(f, r, d);
      }
      var _;
      if (Rp)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Do
          ? Ry(e, r) && (M = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Py &&
          r.locale !== "ko" &&
          (Do || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Do && (_ = _y())
            : ((En = d),
              (Tp = "value" in En ? En.value : En.textContent),
              (Do = !0))),
        (T = $s(u, M)),
        0 < T.length &&
          ((M = new Cv(M, e, null, r, d)),
          f.push({ event: M, listeners: T }),
          _ ? (M.data = _) : ((_ = Ay(r)), _ !== null && (M.data = _)))),
        (_ = wC ? CC(e, r) : kC(e, r)) &&
          ((u = $s(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Cv("onBeforeInput", "beforeinput", null, r, d)),
            f.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    jy(f, t);
  });
}
function Li(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function $s(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      a = o.stateNode;
    o.tag === 5 &&
      a !== null &&
      ((o = a),
      (a = Ei(e, r)),
      a != null && n.unshift(Li(e, a, o)),
      (a = Ei(e, t)),
      a != null && n.push(Li(e, a, o))),
      (e = e.return);
  }
  return n;
}
function _o(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bv(e, t, r, n, o) {
  for (var a = t._reactName, i = []; r !== null && r !== n; ) {
    var l = r,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === n) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = Ei(r, a)), s != null && i.unshift(Li(r, s, l)))
        : o || ((s = Ei(r, a)), s != null && i.push(Li(r, s, l)))),
      (r = r.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var NC = /\r\n?/g,
  FC = /\u0000|\uFFFD/g;
function Iv(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      NC,
      `
`
    )
    .replace(FC, "");
}
function Bl(e, t, r) {
  if (((t = Iv(t)), Iv(e) !== t && r)) throw Error(N(425));
}
function Ns() {}
var Jd = null,
  ef = null;
function tf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var rf = typeof setTimeout == "function" ? setTimeout : void 0,
  OC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $v = typeof Promise == "function" ? Promise : void 0,
  VC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $v < "u"
      ? function (e) {
          return $v.resolve(null).then(e).catch(jC);
        }
      : rf;
function jC(e) {
  setTimeout(function () {
    throw e;
  });
}
function jc(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), Pi(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  Pi(t);
}
function Mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Nv(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ea = Math.random().toString(36).slice(2),
  zr = "__reactFiber$" + Ea,
  zi = "__reactProps$" + Ea,
  tn = "__reactContainer$" + Ea,
  nf = "__reactEvents$" + Ea,
  WC = "__reactListeners$" + Ea,
  HC = "__reactHandles$" + Ea;
function eo(e) {
  var t = e[zr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[tn] || r[zr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Nv(e); e !== null; ) {
          if ((r = e[zr])) return r;
          e = Nv(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function ll(e) {
  return (
    (e = e[zr] || e[tn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $o(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Eu(e) {
  return e[zi] || null;
}
var of = [],
  No = -1;
function Wn(e) {
  return { current: e };
}
function Le(e) {
  0 > No || ((e.current = of[No]), (of[No] = null), No--);
}
function Re(e, t) {
  No++, (of[No] = e.current), (e.current = t);
}
var Nn = {},
  bt = Wn(Nn),
  Dt = Wn(!1),
  vo = Nn;
function fa(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Nn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    a;
  for (a in r) o[a] = t[a];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Bt(e) {
  return (e = e.childContextTypes), e != null;
}
function Fs() {
  Le(Dt), Le(bt);
}
function Fv(e, t, r) {
  if (bt.current !== Nn) throw Error(N(168));
  Re(bt, t), Re(Dt, r);
}
function Hy(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(N(108, P2(e) || "Unknown", o));
  return Ve({}, r, n);
}
function Os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nn),
    (vo = bt.current),
    Re(bt, e),
    Re(Dt, Dt.current),
    !0
  );
}
function Ov(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(N(169));
  r
    ? ((e = Hy(e, t, vo)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Le(Dt),
      Le(bt),
      Re(bt, e))
    : Le(Dt),
    Re(Dt, r);
}
var Yr = null,
  Tu = !1,
  Wc = !1;
function Uy(e) {
  Yr === null ? (Yr = [e]) : Yr.push(e);
}
function UC(e) {
  (Tu = !0), Uy(e);
}
function Hn() {
  if (!Wc && Yr !== null) {
    Wc = !0;
    var e = 0,
      t = Ce;
    try {
      var r = Yr;
      for (Ce = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Yr = null), (Tu = !1);
    } catch (o) {
      throw (Yr !== null && (Yr = Yr.slice(e + 1)), my(wp, Hn), o);
    } finally {
      (Ce = t), (Wc = !1);
    }
  }
  return null;
}
var Fo = [],
  Oo = 0,
  Vs = null,
  js = 0,
  or = [],
  ar = 0,
  mo = null,
  Qr = 1,
  Zr = "";
function Xn(e, t) {
  (Fo[Oo++] = js), (Fo[Oo++] = Vs), (Vs = e), (js = t);
}
function Gy(e, t, r) {
  (or[ar++] = Qr), (or[ar++] = Zr), (or[ar++] = mo), (mo = e);
  var n = Qr;
  e = Zr;
  var o = 32 - wr(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var a = 32 - wr(t) + o;
  if (30 < a) {
    var i = o - (o % 5);
    (a = (n & ((1 << i) - 1)).toString(32)),
      (n >>= i),
      (o -= i),
      (Qr = (1 << (32 - wr(t) + o)) | (r << o) | n),
      (Zr = a + e);
  } else (Qr = (1 << a) | (r << o) | n), (Zr = e);
}
function Mp(e) {
  e.return !== null && (Xn(e, 1), Gy(e, 1, 0));
}
function Lp(e) {
  for (; e === Vs; )
    (Vs = Fo[--Oo]), (Fo[Oo] = null), (js = Fo[--Oo]), (Fo[Oo] = null);
  for (; e === mo; )
    (mo = or[--ar]),
      (or[ar] = null),
      (Zr = or[--ar]),
      (or[ar] = null),
      (Qr = or[--ar]),
      (or[ar] = null);
}
var Gt = null,
  Ut = null,
  $e = !1,
  Sr = null;
function Ky(e, t) {
  var r = ir(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Vv(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Gt = e), (Ut = Mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Ut = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = mo !== null ? { id: Qr, overflow: Zr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = ir(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Gt = e),
            (Ut = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function af(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lf(e) {
  if ($e) {
    var t = Ut;
    if (t) {
      var r = t;
      if (!Vv(e, t)) {
        if (af(e)) throw Error(N(418));
        t = Mn(r.nextSibling);
        var n = Gt;
        t && Vv(e, t)
          ? Ky(n, r)
          : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Gt = e));
      }
    } else {
      if (af(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), ($e = !1), (Gt = e);
    }
  }
}
function jv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Gt = e;
}
function Il(e) {
  if (e !== Gt) return !1;
  if (!$e) return jv(e), ($e = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !tf(e.type, e.memoizedProps))),
    t && (t = Ut))
  ) {
    if (af(e)) throw (Yy(), Error(N(418)));
    for (; t; ) Ky(e, t), (t = Mn(t.nextSibling));
  }
  if ((jv(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ut = Mn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ut = null;
    }
  } else Ut = Gt ? Mn(e.stateNode.nextSibling) : null;
  return !0;
}
function Yy() {
  for (var e = Ut; e; ) e = Mn(e.nextSibling);
}
function pa() {
  (Ut = Gt = null), ($e = !1);
}
function zp(e) {
  Sr === null ? (Sr = [e]) : Sr.push(e);
}
var GC = sn.ReactCurrentBatchConfig;
function gr(e, t) {
  if (e && e.defaultProps) {
    (t = Ve({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ws = Wn(null),
  Hs = null,
  Vo = null,
  Dp = null;
function Bp() {
  Dp = Vo = Hs = null;
}
function Ip(e) {
  var t = Ws.current;
  Le(Ws), (e._currentValue = t);
}
function sf(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function qo(e, t) {
  (Hs = e),
    (Dp = Vo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (zt = !0), (e.firstContext = null));
}
function sr(e) {
  var t = e._currentValue;
  if (Dp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vo === null)) {
      if (Hs === null) throw Error(N(308));
      (Vo = e), (Hs.dependencies = { lanes: 0, firstContext: e });
    } else Vo = Vo.next = e;
  return t;
}
var to = null;
function $p(e) {
  to === null ? (to = [e]) : to.push(e);
}
function Xy(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), $p(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    rn(e, n)
  );
}
function rn(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var xn = !1;
function Np(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Jr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ln(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), (he & 2) !== 0)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      rn(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), $p(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    rn(e, r)
  );
}
function ds(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Cp(e, r);
  }
}
function Wv(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var i = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        a === null ? (o = a = i) : (a = a.next = i), (r = r.next);
      } while (r !== null);
      a === null ? (o = a = t) : (a = a.next = t);
    } else o = a = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: a,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Us(e, t, r, n) {
  var o = e.updateQueue;
  xn = !1;
  var a = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), i === null ? (a = u) : (i.next = u), (i = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== i &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var f = o.baseState;
    (i = 0), (d = u = s = null), (l = a);
    do {
      var c = l.lane,
        h = l.eventTime;
      if ((n & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = e,
            g = l;
          switch (((c = t), (h = r), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                f = m.call(h, f, c);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (c = typeof m == "function" ? m.call(h, f, c) : m),
                c == null)
              )
                break e;
              f = Ve({}, f, c);
              break e;
            case 2:
              xn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [l]) : c.push(l));
      } else
        (h = {
          eventTime: h,
          lane: c,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = h), (s = f)) : (d = d.next = h),
          (i |= c);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (c = l),
          (l = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else a === null && (o.shared.lanes = 0);
    (yo |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Hv(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(N(191, o));
        o.call(n);
      }
    }
}
var Zy = new Xg.Component().refs;
function uf(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Ve({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var _u = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xo(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ct(),
      o = Dn(e),
      a = Jr(n, o);
    (a.payload = t),
      r != null && (a.callback = r),
      (t = Ln(e, a, o)),
      t !== null && (Cr(t, e, o, n), ds(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ct(),
      o = Dn(e),
      a = Jr(n, o);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = Ln(e, a, o)),
      t !== null && (Cr(t, e, o, n), ds(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ct(),
      n = Dn(e),
      o = Jr(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ln(e, o, n)),
      t !== null && (Cr(t, e, n, r), ds(t, e, n));
  },
};
function Uv(e, t, r, n, o, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, a, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ai(r, n) || !Ai(o, a)
      : !0
  );
}
function qy(e, t, r) {
  var n = !1,
    o = Nn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = sr(a))
      : ((o = Bt(t) ? vo : bt.current),
        (n = t.contextTypes),
        (a = (n = n != null) ? fa(e, o) : Nn)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _u),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Gv(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && _u.enqueueReplaceState(t, t.state, null);
}
function cf(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = Zy), Np(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (o.context = sr(a))
    : ((a = Bt(t) ? vo : bt.current), (o.context = fa(e, a))),
    (o.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (uf(e, t, a, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && _u.enqueueReplaceState(o, o.state, null),
      Us(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Oa(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(N(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(N(147, e));
      var o = n,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            l === Zy && (l = o.refs = {}),
              i === null ? delete l[a] : (l[a] = i);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!r._owner) throw Error(N(290, e));
  }
  return e;
}
function $l(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Kv(e) {
  var t = e._init;
  return t(e._payload);
}
function Jy(e) {
  function t(p, v) {
    if (e) {
      var b = p.deletions;
      b === null ? ((p.deletions = [v]), (p.flags |= 16)) : b.push(v);
    }
  }
  function r(p, v) {
    if (!e) return null;
    for (; v !== null; ) t(p, v), (v = v.sibling);
    return null;
  }
  function n(p, v) {
    for (p = new Map(); v !== null; )
      v.key !== null ? p.set(v.key, v) : p.set(v.index, v), (v = v.sibling);
    return p;
  }
  function o(p, v) {
    return (p = Bn(p, v)), (p.index = 0), (p.sibling = null), p;
  }
  function a(p, v, b) {
    return (
      (p.index = b),
      e
        ? ((b = p.alternate),
          b !== null
            ? ((b = b.index), b < v ? ((p.flags |= 2), v) : b)
            : ((p.flags |= 2), v))
        : ((p.flags |= 1048576), v)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, v, b, x) {
    return v === null || v.tag !== 6
      ? ((v = Qc(b, p.mode, x)), (v.return = p), v)
      : ((v = o(v, b)), (v.return = p), v);
  }
  function s(p, v, b, x) {
    var E = b.type;
    return E === zo
      ? d(p, v, b.props.children, x, b.key)
      : v !== null &&
        (v.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Sn &&
            Kv(E) === v.type))
      ? ((x = o(v, b.props)), (x.ref = Oa(p, v, b)), (x.return = p), x)
      : ((x = gs(b.type, b.key, b.props, null, p.mode, x)),
        (x.ref = Oa(p, v, b)),
        (x.return = p),
        x);
  }
  function u(p, v, b, x) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== b.containerInfo ||
      v.stateNode.implementation !== b.implementation
      ? ((v = Zc(b, p.mode, x)), (v.return = p), v)
      : ((v = o(v, b.children || [])), (v.return = p), v);
  }
  function d(p, v, b, x, E) {
    return v === null || v.tag !== 7
      ? ((v = lo(b, p.mode, x, E)), (v.return = p), v)
      : ((v = o(v, b)), (v.return = p), v);
  }
  function f(p, v, b) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Qc("" + v, p.mode, b)), (v.return = p), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Tl:
          return (
            (b = gs(v.type, v.key, v.props, null, p.mode, b)),
            (b.ref = Oa(p, null, v)),
            (b.return = p),
            b
          );
        case Lo:
          return (v = Zc(v, p.mode, b)), (v.return = p), v;
        case Sn:
          var x = v._init;
          return f(p, x(v._payload), b);
      }
      if (Qa(v) || Ba(v))
        return (v = lo(v, p.mode, b, null)), (v.return = p), v;
      $l(p, v);
    }
    return null;
  }
  function c(p, v, b, x) {
    var E = v !== null ? v.key : null;
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return E !== null ? null : l(p, v, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Tl:
          return b.key === E ? s(p, v, b, x) : null;
        case Lo:
          return b.key === E ? u(p, v, b, x) : null;
        case Sn:
          return (E = b._init), c(p, v, E(b._payload), x);
      }
      if (Qa(b) || Ba(b)) return E !== null ? null : d(p, v, b, x, null);
      $l(p, b);
    }
    return null;
  }
  function h(p, v, b, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(b) || null), l(v, p, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Tl:
          return (p = p.get(x.key === null ? b : x.key) || null), s(v, p, x, E);
        case Lo:
          return (p = p.get(x.key === null ? b : x.key) || null), u(v, p, x, E);
        case Sn:
          var T = x._init;
          return h(p, v, b, T(x._payload), E);
      }
      if (Qa(x) || Ba(x)) return (p = p.get(b) || null), d(v, p, x, E, null);
      $l(v, x);
    }
    return null;
  }
  function m(p, v, b, x) {
    for (
      var E = null, T = null, _ = v, M = (v = 0), I = null;
      _ !== null && M < b.length;
      M++
    ) {
      _.index > M ? ((I = _), (_ = null)) : (I = _.sibling);
      var B = c(p, _, b[M], x);
      if (B === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && B.alternate === null && t(p, _),
        (v = a(B, v, M)),
        T === null ? (E = B) : (T.sibling = B),
        (T = B),
        (_ = I);
    }
    if (M === b.length) return r(p, _), $e && Xn(p, M), E;
    if (_ === null) {
      for (; M < b.length; M++)
        (_ = f(p, b[M], x)),
          _ !== null &&
            ((v = a(_, v, M)), T === null ? (E = _) : (T.sibling = _), (T = _));
      return $e && Xn(p, M), E;
    }
    for (_ = n(p, _); M < b.length; M++)
      (I = h(_, p, M, b[M], x)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? M : I.key),
          (v = a(I, v, M)),
          T === null ? (E = I) : (T.sibling = I),
          (T = I));
    return (
      e &&
        _.forEach(function (K) {
          return t(p, K);
        }),
      $e && Xn(p, M),
      E
    );
  }
  function g(p, v, b, x) {
    var E = Ba(b);
    if (typeof E != "function") throw Error(N(150));
    if (((b = E.call(b)), b == null)) throw Error(N(151));
    for (
      var T = (E = null), _ = v, M = (v = 0), I = null, B = b.next();
      _ !== null && !B.done;
      M++, B = b.next()
    ) {
      _.index > M ? ((I = _), (_ = null)) : (I = _.sibling);
      var K = c(p, _, B.value, x);
      if (K === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && K.alternate === null && t(p, _),
        (v = a(K, v, M)),
        T === null ? (E = K) : (T.sibling = K),
        (T = K),
        (_ = I);
    }
    if (B.done) return r(p, _), $e && Xn(p, M), E;
    if (_ === null) {
      for (; !B.done; M++, B = b.next())
        (B = f(p, B.value, x)),
          B !== null &&
            ((v = a(B, v, M)), T === null ? (E = B) : (T.sibling = B), (T = B));
      return $e && Xn(p, M), E;
    }
    for (_ = n(p, _); !B.done; M++, B = b.next())
      (B = h(_, p, M, B.value, x)),
        B !== null &&
          (e && B.alternate !== null && _.delete(B.key === null ? M : B.key),
          (v = a(B, v, M)),
          T === null ? (E = B) : (T.sibling = B),
          (T = B));
    return (
      e &&
        _.forEach(function (ce) {
          return t(p, ce);
        }),
      $e && Xn(p, M),
      E
    );
  }
  function S(p, v, b, x) {
    if (
      (typeof b == "object" &&
        b !== null &&
        b.type === zo &&
        b.key === null &&
        (b = b.props.children),
      typeof b == "object" && b !== null)
    ) {
      switch (b.$$typeof) {
        case Tl:
          e: {
            for (var E = b.key, T = v; T !== null; ) {
              if (T.key === E) {
                if (((E = b.type), E === zo)) {
                  if (T.tag === 7) {
                    r(p, T.sibling),
                      (v = o(T, b.props.children)),
                      (v.return = p),
                      (p = v);
                    break e;
                  }
                } else if (
                  T.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Sn &&
                    Kv(E) === T.type)
                ) {
                  r(p, T.sibling),
                    (v = o(T, b.props)),
                    (v.ref = Oa(p, T, b)),
                    (v.return = p),
                    (p = v);
                  break e;
                }
                r(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            b.type === zo
              ? ((v = lo(b.props.children, p.mode, x, b.key)),
                (v.return = p),
                (p = v))
              : ((x = gs(b.type, b.key, b.props, null, p.mode, x)),
                (x.ref = Oa(p, v, b)),
                (x.return = p),
                (p = x));
          }
          return i(p);
        case Lo:
          e: {
            for (T = b.key; v !== null; ) {
              if (v.key === T)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === b.containerInfo &&
                  v.stateNode.implementation === b.implementation
                ) {
                  r(p, v.sibling),
                    (v = o(v, b.children || [])),
                    (v.return = p),
                    (p = v);
                  break e;
                } else {
                  r(p, v);
                  break;
                }
              else t(p, v);
              v = v.sibling;
            }
            (v = Zc(b, p.mode, x)), (v.return = p), (p = v);
          }
          return i(p);
        case Sn:
          return (T = b._init), S(p, v, T(b._payload), x);
      }
      if (Qa(b)) return m(p, v, b, x);
      if (Ba(b)) return g(p, v, b, x);
      $l(p, b);
    }
    return (typeof b == "string" && b !== "") || typeof b == "number"
      ? ((b = "" + b),
        v !== null && v.tag === 6
          ? (r(p, v.sibling), (v = o(v, b)), (v.return = p), (p = v))
          : (r(p, v), (v = Qc(b, p.mode, x)), (v.return = p), (p = v)),
        i(p))
      : r(p, v);
  }
  return S;
}
var ha = Jy(!0),
  e1 = Jy(!1),
  sl = {},
  Nr = Wn(sl),
  Di = Wn(sl),
  Bi = Wn(sl);
function ro(e) {
  if (e === sl) throw Error(N(174));
  return e;
}
function Fp(e, t) {
  switch ((Re(Bi, t), Re(Di, e), Re(Nr, sl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vd(t, e));
  }
  Le(Nr), Re(Nr, t);
}
function va() {
  Le(Nr), Le(Di), Le(Bi);
}
function t1(e) {
  ro(Bi.current);
  var t = ro(Nr.current),
    r = Vd(t, e.type);
  t !== r && (Re(Di, e), Re(Nr, r));
}
function Op(e) {
  Di.current === e && (Le(Nr), Le(Di));
}
var Fe = Wn(0);
function Gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Hc = [];
function Vp() {
  for (var e = 0; e < Hc.length; e++)
    Hc[e]._workInProgressVersionPrimary = null;
  Hc.length = 0;
}
var fs = sn.ReactCurrentDispatcher,
  Uc = sn.ReactCurrentBatchConfig,
  go = 0,
  Oe = null,
  tt = null,
  at = null,
  Ks = !1,
  li = !1,
  Ii = 0,
  KC = 0;
function vt() {
  throw Error(N(321));
}
function jp(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Er(e[r], t[r])) return !1;
  return !0;
}
function Wp(e, t, r, n, o, a) {
  if (
    ((go = a),
    (Oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fs.current = e === null || e.memoizedState === null ? ZC : qC),
    (e = r(n, o)),
    li)
  ) {
    a = 0;
    do {
      if (((li = !1), (Ii = 0), 25 <= a)) throw Error(N(301));
      (a += 1),
        (at = tt = null),
        (t.updateQueue = null),
        (fs.current = JC),
        (e = r(n, o));
    } while (li);
  }
  if (
    ((fs.current = Ys),
    (t = tt !== null && tt.next !== null),
    (go = 0),
    (at = tt = Oe = null),
    (Ks = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Hp() {
  var e = Ii !== 0;
  return (Ii = 0), e;
}
function Rr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return at === null ? (Oe.memoizedState = at = e) : (at = at.next = e), at;
}
function ur() {
  if (tt === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = tt.next;
  var t = at === null ? Oe.memoizedState : at.next;
  if (t !== null) (at = t), (tt = e);
  else {
    if (e === null) throw Error(N(310));
    (tt = e),
      (e = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null,
      }),
      at === null ? (Oe.memoizedState = at = e) : (at = at.next = e);
  }
  return at;
}
function $i(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gc(e) {
  var t = ur(),
    r = t.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = e;
  var n = tt,
    o = n.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = a.next), (a.next = i);
    }
    (n.baseQueue = o = a), (r.pending = null);
  }
  if (o !== null) {
    (a = o.next), (n = n.baseState);
    var l = (i = null),
      s = null,
      u = a;
    do {
      var d = u.lane;
      if ((go & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = f), (i = n)) : (s = s.next = f),
          (Oe.lanes |= d),
          (yo |= d);
      }
      u = u.next;
    } while (u !== null && u !== a);
    s === null ? (i = n) : (s.next = l),
      Er(n, t.memoizedState) || (zt = !0),
      (t.memoizedState = n),
      (t.baseState = i),
      (t.baseQueue = s),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (a = o.lane), (Oe.lanes |= a), (yo |= a), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Kc(e) {
  var t = ur(),
    r = t.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    a = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var i = (o = o.next);
    do (a = e(a, i.action)), (i = i.next);
    while (i !== o);
    Er(a, t.memoizedState) || (zt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, n];
}
function r1() {}
function n1(e, t) {
  var r = Oe,
    n = ur(),
    o = t(),
    a = !Er(n.memoizedState, o);
  if (
    (a && ((n.memoizedState = o), (zt = !0)),
    (n = n.queue),
    Up(i1.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || (at !== null && at.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Ni(9, a1.bind(null, r, n, o, t), void 0, null),
      it === null)
    )
      throw Error(N(349));
    (go & 30) !== 0 || o1(r, t, o);
  }
  return o;
}
function o1(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function a1(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), l1(t) && s1(e);
}
function i1(e, t, r) {
  return r(function () {
    l1(t) && s1(e);
  });
}
function l1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Er(e, r);
  } catch {
    return !0;
  }
}
function s1(e) {
  var t = rn(e, 1);
  t !== null && Cr(t, e, 1, -1);
}
function Yv(e) {
  var t = Rr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $i,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = QC.bind(null, Oe, e)),
    [t.memoizedState, e]
  );
}
function Ni(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function u1() {
  return ur().memoizedState;
}
function ps(e, t, r, n) {
  var o = Rr();
  (Oe.flags |= e),
    (o.memoizedState = Ni(1 | t, r, void 0, n === void 0 ? null : n));
}
function Pu(e, t, r, n) {
  var o = ur();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (tt !== null) {
    var i = tt.memoizedState;
    if (((a = i.destroy), n !== null && jp(n, i.deps))) {
      o.memoizedState = Ni(t, r, a, n);
      return;
    }
  }
  (Oe.flags |= e), (o.memoizedState = Ni(1 | t, r, a, n));
}
function Xv(e, t) {
  return ps(8390656, 8, e, t);
}
function Up(e, t) {
  return Pu(2048, 8, e, t);
}
function c1(e, t) {
  return Pu(4, 2, e, t);
}
function d1(e, t) {
  return Pu(4, 4, e, t);
}
function f1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function p1(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Pu(4, 4, f1.bind(null, t, e), r)
  );
}
function Gp() {}
function h1(e, t) {
  var r = ur();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && jp(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function v1(e, t) {
  var r = ur();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && jp(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function m1(e, t, r) {
  return (go & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (zt = !0)), (e.memoizedState = r))
    : (Er(r, t) || ((r = by()), (Oe.lanes |= r), (yo |= r), (e.baseState = !0)),
      t);
}
function YC(e, t) {
  var r = Ce;
  (Ce = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Uc.transition;
  Uc.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ce = r), (Uc.transition = n);
  }
}
function g1() {
  return ur().memoizedState;
}
function XC(e, t, r) {
  var n = Dn(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    y1(e))
  )
    b1(t, r);
  else if (((r = Xy(e, t, r, n)), r !== null)) {
    var o = Ct();
    Cr(r, e, n, o), S1(r, t, n);
  }
}
function QC(e, t, r) {
  var n = Dn(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (y1(e)) b1(t, o);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = a(i, r);
        if (((o.hasEagerState = !0), (o.eagerState = l), Er(l, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), $p(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = Xy(e, t, o, n)),
      r !== null && ((o = Ct()), Cr(r, e, n, o), S1(r, t, n));
  }
}
function y1(e) {
  var t = e.alternate;
  return e === Oe || (t !== null && t === Oe);
}
function b1(e, t) {
  li = Ks = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function S1(e, t, r) {
  if ((r & 4194240) !== 0) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Cp(e, r);
  }
}
var Ys = {
    readContext: sr,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useInsertionEffect: vt,
    useLayoutEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useMutableSource: vt,
    useSyncExternalStore: vt,
    useId: vt,
    unstable_isNewReconciler: !1,
  },
  ZC = {
    readContext: sr,
    useCallback: function (e, t) {
      return (Rr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: sr,
    useEffect: Xv,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ps(4194308, 4, f1.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ps(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ps(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Rr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Rr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = XC.bind(null, Oe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yv,
    useDebugValue: Gp,
    useDeferredValue: function (e) {
      return (Rr().memoizedState = e);
    },
    useTransition: function () {
      var e = Yv(!1),
        t = e[0];
      return (e = YC.bind(null, e[1])), (Rr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Oe,
        o = Rr();
      if ($e) {
        if (r === void 0) throw Error(N(407));
        r = r();
      } else {
        if (((r = t()), it === null)) throw Error(N(349));
        (go & 30) !== 0 || o1(n, t, r);
      }
      o.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (o.queue = a),
        Xv(i1.bind(null, n, a, e), [e]),
        (n.flags |= 2048),
        Ni(9, a1.bind(null, n, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Rr(),
        t = it.identifierPrefix;
      if ($e) {
        var r = Zr,
          n = Qr;
        (r = (n & ~(1 << (32 - wr(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Ii++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = KC++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qC = {
    readContext: sr,
    useCallback: h1,
    useContext: sr,
    useEffect: Up,
    useImperativeHandle: p1,
    useInsertionEffect: c1,
    useLayoutEffect: d1,
    useMemo: v1,
    useReducer: Gc,
    useRef: u1,
    useState: function () {
      return Gc($i);
    },
    useDebugValue: Gp,
    useDeferredValue: function (e) {
      var t = ur();
      return m1(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = Gc($i)[0],
        t = ur().memoizedState;
      return [e, t];
    },
    useMutableSource: r1,
    useSyncExternalStore: n1,
    useId: g1,
    unstable_isNewReconciler: !1,
  },
  JC = {
    readContext: sr,
    useCallback: h1,
    useContext: sr,
    useEffect: Up,
    useImperativeHandle: p1,
    useInsertionEffect: c1,
    useLayoutEffect: d1,
    useMemo: v1,
    useReducer: Kc,
    useRef: u1,
    useState: function () {
      return Kc($i);
    },
    useDebugValue: Gp,
    useDeferredValue: function (e) {
      var t = ur();
      return tt === null ? (t.memoizedState = e) : m1(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = Kc($i)[0],
        t = ur().memoizedState;
      return [e, t];
    },
    useMutableSource: r1,
    useSyncExternalStore: n1,
    useId: g1,
    unstable_isNewReconciler: !1,
  };
function ma(e, t) {
  try {
    var r = "",
      n = t;
    do (r += _2(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (a) {
    o =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Yc(e, t, r) {
  return {
    value: e,
    source: null,
    stack: r != null ? r : null,
    digest: t != null ? t : null,
  };
}
function df(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var ek = typeof WeakMap == "function" ? WeakMap : Map;
function x1(e, t, r) {
  (r = Jr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Qs || ((Qs = !0), (xf = n)), df(e, t);
    }),
    r
  );
}
function w1(e, t, r) {
  (r = Jr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        df(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        df(e, t),
          typeof n != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    r
  );
}
function Qv(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new ek();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = hk.bind(null, e, t, r)), t.then(e, e));
}
function Zv(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qv(e, t, r, n, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Jr(-1, 1)), (t.tag = 2), Ln(r, t, 1))),
          (r.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var tk = sn.ReactCurrentOwner,
  zt = !1;
function xt(e, t, r, n) {
  t.child = e === null ? e1(t, null, r, n) : ha(t, e.child, r, n);
}
function Jv(e, t, r, n, o) {
  r = r.render;
  var a = t.ref;
  return (
    qo(t, o),
    (n = Wp(e, t, r, n, a, o)),
    (r = Hp()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nn(e, t, o))
      : ($e && r && Mp(t), (t.flags |= 1), xt(e, t, n, o), t.child)
  );
}
function em(e, t, r, n, o) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !eh(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), C1(e, t, a, n, o))
      : ((e = gs(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), (e.lanes & o) === 0)) {
    var i = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Ai), r(i, n) && e.ref === t.ref)
    )
      return nn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Bn(a, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function C1(e, t, r, n, o) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Ai(a, n) && e.ref === t.ref)
      if (((zt = !1), (t.pendingProps = n = a), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (zt = !0);
      else return (t.lanes = e.lanes), nn(e, t, o);
  }
  return ff(e, t, r, n, o);
}
function k1(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(Wo, Ht),
        (Ht |= r);
    else {
      if ((r & 1073741824) === 0)
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Re(Wo, Ht),
          (Ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = a !== null ? a.baseLanes : r),
        Re(Wo, Ht),
        (Ht |= n);
    }
  else
    a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Re(Wo, Ht),
      (Ht |= n);
  return xt(e, t, o, r), t.child;
}
function E1(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ff(e, t, r, n, o) {
  var a = Bt(r) ? vo : bt.current;
  return (
    (a = fa(t, a)),
    qo(t, o),
    (r = Wp(e, t, r, n, a, o)),
    (n = Hp()),
    e !== null && !zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nn(e, t, o))
      : ($e && n && Mp(t), (t.flags |= 1), xt(e, t, r, o), t.child)
  );
}
function tm(e, t, r, n, o) {
  if (Bt(r)) {
    var a = !0;
    Os(t);
  } else a = !1;
  if ((qo(t, o), t.stateNode === null))
    hs(e, t), qy(t, r, n), cf(t, r, n, o), (n = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var s = i.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = sr(u))
      : ((u = Bt(r) ? vo : bt.current), (u = fa(t, u)));
    var d = r.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== n || s !== u) && Gv(t, i, n, u)),
      (xn = !1);
    var c = t.memoizedState;
    (i.state = c),
      Us(t, n, i, o),
      (s = t.memoizedState),
      l !== n || c !== s || Dt.current || xn
        ? (typeof d == "function" && (uf(t, r, d, n), (s = t.memoizedState)),
          (l = xn || Uv(t, r, l, n, c, s, u))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (i.props = n),
          (i.state = s),
          (i.context = u),
          (n = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (i = t.stateNode),
      Qy(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : gr(t.type, l)),
      (i.props = u),
      (f = t.pendingProps),
      (c = i.context),
      (s = r.contextType),
      typeof s == "object" && s !== null
        ? (s = sr(s))
        : ((s = Bt(r) ? vo : bt.current), (s = fa(t, s)));
    var h = r.getDerivedStateFromProps;
    (d =
      typeof h == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== f || c !== s) && Gv(t, i, n, s)),
      (xn = !1),
      (c = t.memoizedState),
      (i.state = c),
      Us(t, n, i, o);
    var m = t.memoizedState;
    l !== f || c !== m || Dt.current || xn
      ? (typeof h == "function" && (uf(t, r, h, n), (m = t.memoizedState)),
        (u = xn || Uv(t, r, u, n, c, m, s) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(n, m, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(n, m, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = m)),
        (i.props = n),
        (i.state = m),
        (i.context = s),
        (n = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return pf(e, t, r, n, a, o);
}
function pf(e, t, r, n, o, a) {
  E1(e, t);
  var i = (t.flags & 128) !== 0;
  if (!n && !i) return o && Ov(t, r, !1), nn(e, t, a);
  (n = t.stateNode), (tk.current = t);
  var l =
    i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ha(t, e.child, null, a)), (t.child = ha(t, null, l, a)))
      : xt(e, t, l, a),
    (t.memoizedState = n.state),
    o && Ov(t, r, !0),
    t.child
  );
}
function T1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fv(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fv(e, t.context, !1),
    Fp(e, t.containerInfo);
}
function rm(e, t, r, n, o) {
  return pa(), zp(o), (t.flags |= 256), xt(e, t, r, n), t.child;
}
var hf = { dehydrated: null, treeContext: null, retryLane: 0 };
function vf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _1(e, t, r) {
  var n = t.pendingProps,
    o = Fe.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Re(Fe, o & 1),
    e === null)
  )
    return (
      lf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((i = n.children),
          (e = n.fallback),
          a
            ? ((n = t.mode),
              (a = t.child),
              (i = { mode: "hidden", children: i }),
              (n & 1) === 0 && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = Mu(i, n, 0, null)),
              (e = lo(e, n, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = vf(r)),
              (t.memoizedState = hf),
              e)
            : Kp(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return rk(e, t, i, n, l, o, r);
  if (a) {
    (a = n.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: n.children };
    return (
      (i & 1) === 0 && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = s),
          (t.deletions = null))
        : ((n = Bn(o, s)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (a = Bn(l, a)) : ((a = lo(a, i, r, null)), (a.flags |= 2)),
      (a.return = t),
      (n.return = t),
      (n.sibling = a),
      (t.child = n),
      (n = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? vf(r)
          : {
              baseLanes: i.baseLanes | r,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = hf),
      n
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (n = Bn(a, { mode: "visible", children: n.children })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Kp(e, t) {
  return (
    (t = Mu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nl(e, t, r, n) {
  return (
    n !== null && zp(n),
    ha(t, e.child, null, r),
    (e = Kp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rk(e, t, r, n, o, a, i) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Yc(Error(N(422)))), Nl(e, t, i, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = n.fallback),
        (o = t.mode),
        (n = Mu({ mode: "visible", children: n.children }, o, 0, null)),
        (a = lo(a, o, i, null)),
        (a.flags |= 2),
        (n.return = t),
        (a.return = t),
        (n.sibling = a),
        (t.child = n),
        (t.mode & 1) !== 0 && ha(t, e.child, null, i),
        (t.child.memoizedState = vf(i)),
        (t.memoizedState = hf),
        a);
  if ((t.mode & 1) === 0) return Nl(e, t, i, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var l = n.dgst;
    return (n = l), (a = Error(N(419))), (n = Yc(a, n, void 0)), Nl(e, t, i, n);
  }
  if (((l = (i & e.childLanes) !== 0), zt || l)) {
    if (((n = it), n !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = (o & (n.suspendedLanes | i)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== a.retryLane &&
          ((a.retryLane = o), rn(e, o), Cr(n, e, o, -1));
    }
    return Jp(), (n = Yc(Error(N(421)))), Nl(e, t, i, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vk.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Ut = Mn(o.nextSibling)),
      (Gt = t),
      ($e = !0),
      (Sr = null),
      e !== null &&
        ((or[ar++] = Qr),
        (or[ar++] = Zr),
        (or[ar++] = mo),
        (Qr = e.id),
        (Zr = e.overflow),
        (mo = t)),
      (t = Kp(t, n.children)),
      (t.flags |= 4096),
      t);
}
function nm(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), sf(e.return, t, r);
}
function Xc(e, t, r, n, o) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = o));
}
function P1(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    a = n.tail;
  if ((xt(e, t, n.children, r), (n = Fe.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nm(e, r, t);
        else if (e.tag === 19) nm(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Re(Fe, n), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Gs(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          Xc(t, !1, o, r, a);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Gs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        Xc(t, !0, r, null, a);
        break;
      case "together":
        Xc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hs(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nn(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yo |= t.lanes),
    (r & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Bn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Bn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function nk(e, t, r) {
  switch (t.tag) {
    case 3:
      T1(t), pa();
      break;
    case 5:
      t1(t);
      break;
    case 1:
      Bt(t.type) && Os(t);
      break;
    case 4:
      Fp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      Re(Ws, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Re(Fe, Fe.current & 1), (t.flags |= 128), null)
          : (r & t.child.childLanes) !== 0
          ? _1(e, t, r)
          : (Re(Fe, Fe.current & 1),
            (e = nn(e, t, r)),
            e !== null ? e.sibling : null);
      Re(Fe, Fe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return P1(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Re(Fe, Fe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), k1(e, t, r);
  }
  return nn(e, t, r);
}
var R1, mf, A1, M1;
R1 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
mf = function () {};
A1 = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), ro(Nr.current);
    var a = null;
    switch (r) {
      case "input":
        (o = $d(e, o)), (n = $d(e, n)), (a = []);
        break;
      case "select":
        (o = Ve({}, o, { value: void 0 })),
          (n = Ve({}, n, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (o = Od(e, o)), (n = Od(e, n)), (a = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Ns);
    }
    jd(r, n);
    var i;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ci.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in n) {
      var s = n[u];
      if (
        ((l = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (r || (r = {}), (r[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                l[i] !== s[i] &&
                (r || (r = {}), (r[i] = s[i]));
          } else r || (a || (a = []), a.push(u, r)), (r = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (a = a || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (a = a || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ci.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && Ae("scroll", e),
                  a || l === s || (a = []))
                : (a = a || []).push(u, s));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
M1 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Va(e, t) {
  if (!$e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function mt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function ok(e, t, r) {
  var n = t.pendingProps;
  switch ((Lp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return mt(t), null;
    case 1:
      return Bt(t.type) && Fs(), mt(t), null;
    case 3:
      return (
        (n = t.stateNode),
        va(),
        Le(Dt),
        Le(bt),
        Vp(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Il(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Sr !== null && (kf(Sr), (Sr = null)))),
        mf(e, t),
        mt(t),
        null
      );
    case 5:
      Op(t);
      var o = ro(Bi.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        A1(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(N(166));
          return mt(t), null;
        }
        if (((e = ro(Nr.current)), Il(t))) {
          (n = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((n[zr] = t), (n[zi] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              Ae("cancel", n), Ae("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ae("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qa.length; o++) Ae(qa[o], n);
              break;
            case "source":
              Ae("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Ae("error", n), Ae("load", n);
              break;
            case "details":
              Ae("toggle", n);
              break;
            case "input":
              fv(n, a), Ae("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!a.multiple }),
                Ae("invalid", n);
              break;
            case "textarea":
              hv(n, a), Ae("invalid", n);
          }
          jd(r, a), (o = null);
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "children"
                ? typeof l == "string"
                  ? n.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Bl(n.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    n.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Bl(n.textContent, l, e),
                    (o = ["children", "" + l]))
                : Ci.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  Ae("scroll", n);
            }
          switch (r) {
            case "input":
              _l(n), pv(n, a, !0);
              break;
            case "textarea":
              _l(n), vv(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Ns);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = oy(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = i.createElement(r, { is: n.is }))
                : ((e = i.createElement(r)),
                  r === "select" &&
                    ((i = e),
                    n.multiple
                      ? (i.multiple = !0)
                      : n.size && (i.size = n.size)))
              : (e = i.createElementNS(e, r)),
            (e[zr] = t),
            (e[zi] = n),
            R1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Wd(r, n)), r)) {
              case "dialog":
                Ae("cancel", e), Ae("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ae("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < qa.length; o++) Ae(qa[o], e);
                o = n;
                break;
              case "source":
                Ae("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                Ae("error", e), Ae("load", e), (o = n);
                break;
              case "details":
                Ae("toggle", e), (o = n);
                break;
              case "input":
                fv(e, n), (o = $d(e, n)), Ae("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Ve({}, n, { value: void 0 })),
                  Ae("invalid", e);
                break;
              case "textarea":
                hv(e, n), (o = Od(e, n)), Ae("invalid", e);
                break;
              default:
                o = n;
            }
            jd(r, o), (l = o);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === "style"
                  ? ly(e, s)
                  : a === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ay(e, s))
                  : a === "children"
                  ? typeof s == "string"
                    ? (r !== "textarea" || s !== "") && ki(e, s)
                    : typeof s == "number" && ki(e, "" + s)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Ci.hasOwnProperty(a)
                      ? s != null && a === "onScroll" && Ae("scroll", e)
                      : s != null && gp(e, a, s, i));
              }
            switch (r) {
              case "input":
                _l(e), pv(e, n, !1);
                break;
              case "textarea":
                _l(e), vv(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + $n(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (a = n.value),
                  a != null
                    ? Yo(e, !!n.multiple, a, !1)
                    : n.defaultValue != null &&
                      Yo(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ns);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return mt(t), null;
    case 6:
      if (e && t.stateNode != null) M1(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(N(166));
        if (((r = ro(Bi.current)), ro(Nr.current), Il(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[zr] = t),
            (a = n.nodeValue !== r) && ((e = Gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[zr] = t),
            (t.stateNode = n);
      }
      return mt(t), null;
    case 13:
      if (
        (Le(Fe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($e && Ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Yy(), pa(), (t.flags |= 98560), (a = !1);
        else if (((a = Il(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(N(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(N(317));
            a[zr] = t;
          } else
            pa(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          mt(t), (a = !1);
        } else Sr !== null && (kf(Sr), (Sr = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Fe.current & 1) !== 0
                ? rt === 0 && (rt = 3)
                : Jp())),
          t.updateQueue !== null && (t.flags |= 4),
          mt(t),
          null);
    case 4:
      return (
        va(), mf(e, t), e === null && Mi(t.stateNode.containerInfo), mt(t), null
      );
    case 10:
      return Ip(t.type._context), mt(t), null;
    case 17:
      return Bt(t.type) && Fs(), mt(t), null;
    case 19:
      if ((Le(Fe), (a = t.memoizedState), a === null)) return mt(t), null;
      if (((n = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (n) Va(a, !1);
        else {
          if (rt !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = Gs(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Va(a, !1),
                    n = i.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (a = r),
                    (e = n),
                    (a.flags &= 14680066),
                    (i = a.alternate),
                    i === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Re(Fe, (Fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Ke() > ga &&
            ((t.flags |= 128), (n = !0), Va(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Gs(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Va(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !$e)
            )
              return mt(t), null;
          } else
            2 * Ke() - a.renderingStartTime > ga &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Va(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((r = a.last),
            r !== null ? (r.sibling = i) : (t.child = i),
            (a.last = i));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Ke()),
          (t.sibling = null),
          (r = Fe.current),
          Re(Fe, n ? (r & 1) | 2 : r & 1),
          t)
        : (mt(t), null);
    case 22:
    case 23:
      return (
        qp(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && (t.mode & 1) !== 0
          ? (Ht & 1073741824) !== 0 &&
            (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : mt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function ak(e, t) {
  switch ((Lp(t), t.tag)) {
    case 1:
      return (
        Bt(t.type) && Fs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        va(),
        Le(Dt),
        Le(bt),
        Vp(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Op(t), null;
    case 13:
      if (
        (Le(Fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        pa();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Le(Fe), null;
    case 4:
      return va(), null;
    case 10:
      return Ip(t.type._context), null;
    case 22:
    case 23:
      return qp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fl = !1,
  yt = !1,
  ik = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function jo(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        He(e, t, n);
      }
    else r.current = null;
}
function gf(e, t, r) {
  try {
    r();
  } catch (n) {
    He(e, t, n);
  }
}
var om = !1;
function lk(e, t) {
  if (((Jd = Bs), (e = By()), Ap(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            a = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var i = 0,
            l = -1,
            s = -1,
            u = 0,
            d = 0,
            f = e,
            c = null;
          t: for (;;) {
            for (
              var h;
              f !== r || (o !== 0 && f.nodeType !== 3) || (l = i + o),
                f !== a || (n !== 0 && f.nodeType !== 3) || (s = i + n),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (c = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (c === r && ++u === o && (l = i),
                c === a && ++d === n && (s = i),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = c), (c = f.parentNode);
            }
            f = h;
          }
          r = l === -1 || s === -1 ? null : { start: l, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (ef = { focusedElem: e, selectionRange: r }, Bs = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var m = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    S = m.memoizedState,
                    p = t.stateNode,
                    v = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : gr(t.type, g),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = "")
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (x) {
          He(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (m = om), (om = !1), m;
}
function si(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var a = o.destroy;
        (o.destroy = void 0), a !== void 0 && gf(t, r, a);
      }
      o = o.next;
    } while (o !== n);
  }
}
function Ru(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function yf(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function L1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), L1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[zr], delete t[zi], delete t[nf], delete t[WC], delete t[HC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function z1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function am(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || z1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Ns));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (bf(e, t, r), e = e.sibling; e !== null; ) bf(e, t, r), (e = e.sibling);
}
function Sf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Sf(e, t, r), e = e.sibling; e !== null; ) Sf(e, t, r), (e = e.sibling);
}
var ut = null,
  yr = !1;
function vn(e, t, r) {
  for (r = r.child; r !== null; ) D1(e, t, r), (r = r.sibling);
}
function D1(e, t, r) {
  if ($r && typeof $r.onCommitFiberUnmount == "function")
    try {
      $r.onCommitFiberUnmount(xu, r);
    } catch {}
  switch (r.tag) {
    case 5:
      yt || jo(r, t);
    case 6:
      var n = ut,
        o = yr;
      (ut = null),
        vn(e, t, r),
        (ut = n),
        (yr = o),
        ut !== null &&
          (yr
            ? ((e = ut),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ut.removeChild(r.stateNode));
      break;
    case 18:
      ut !== null &&
        (yr
          ? ((e = ut),
            (r = r.stateNode),
            e.nodeType === 8
              ? jc(e.parentNode, r)
              : e.nodeType === 1 && jc(e, r),
            Pi(e))
          : jc(ut, r.stateNode));
      break;
    case 4:
      (n = ut),
        (o = yr),
        (ut = r.stateNode.containerInfo),
        (yr = !0),
        vn(e, t, r),
        (ut = n),
        (yr = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !yt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var a = o,
            i = a.destroy;
          (a = a.tag),
            i !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && gf(r, t, i),
            (o = o.next);
        } while (o !== n);
      }
      vn(e, t, r);
      break;
    case 1:
      if (
        !yt &&
        (jo(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (l) {
          He(r, t, l);
        }
      vn(e, t, r);
      break;
    case 21:
      vn(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((yt = (n = yt) || r.memoizedState !== null), vn(e, t, r), (yt = n))
        : vn(e, t, r);
      break;
    default:
      vn(e, t, r);
  }
}
function im(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new ik()),
      t.forEach(function (n) {
        var o = mk.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function pr(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var a = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ut = l.stateNode), (yr = !1);
              break e;
            case 3:
              (ut = l.stateNode.containerInfo), (yr = !0);
              break e;
            case 4:
              (ut = l.stateNode.containerInfo), (yr = !0);
              break e;
          }
          l = l.return;
        }
        if (ut === null) throw Error(N(160));
        D1(a, i, o), (ut = null), (yr = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        He(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) B1(t, e), (t = t.sibling);
}
function B1(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pr(t, e), _r(e), n & 4)) {
        try {
          si(3, e, e.return), Ru(3, e);
        } catch (g) {
          He(e, e.return, g);
        }
        try {
          si(5, e, e.return);
        } catch (g) {
          He(e, e.return, g);
        }
      }
      break;
    case 1:
      pr(t, e), _r(e), n & 512 && r !== null && jo(r, r.return);
      break;
    case 5:
      if (
        (pr(t, e),
        _r(e),
        n & 512 && r !== null && jo(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ki(o, "");
        } catch (g) {
          He(e, e.return, g);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var a = e.memoizedProps,
          i = r !== null ? r.memoizedProps : a,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && a.type === "radio" && a.name != null && ry(o, a),
              Wd(l, i);
            var u = Wd(l, a);
            for (i = 0; i < s.length; i += 2) {
              var d = s[i],
                f = s[i + 1];
              d === "style"
                ? ly(o, f)
                : d === "dangerouslySetInnerHTML"
                ? ay(o, f)
                : d === "children"
                ? ki(o, f)
                : gp(o, d, f, u);
            }
            switch (l) {
              case "input":
                Nd(o, a);
                break;
              case "textarea":
                ny(o, a);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null
                  ? Yo(o, !!a.multiple, h, !1)
                  : c !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Yo(o, !!a.multiple, a.defaultValue, !0)
                      : Yo(o, !!a.multiple, a.multiple ? [] : "", !1));
            }
            o[zi] = a;
          } catch (g) {
            He(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((pr(t, e), _r(e), n & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (a = e.memoizedProps);
        try {
          o.nodeValue = a;
        } catch (g) {
          He(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (pr(t, e), _r(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Pi(t.containerInfo);
        } catch (g) {
          He(e, e.return, g);
        }
      break;
    case 4:
      pr(t, e), _r(e);
      break;
    case 13:
      pr(t, e),
        _r(e),
        (o = e.child),
        o.flags & 8192 &&
          ((a = o.memoizedState !== null),
          (o.stateNode.isHidden = a),
          !a ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Qp = Ke())),
        n & 4 && im(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((yt = (u = yt) || d), pr(t, e), (yt = u)) : pr(t, e),
        _r(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && (e.mode & 1) !== 0)
        )
          for (j = e, d = e.child; d !== null; ) {
            for (f = j = d; j !== null; ) {
              switch (((c = j), (h = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  si(4, c, c.return);
                  break;
                case 1:
                  jo(c, c.return);
                  var m = c.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (n = c), (r = c.return);
                    try {
                      (t = n),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      He(n, r, g);
                    }
                  }
                  break;
                case 5:
                  jo(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    sm(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = c), (j = h)) : sm(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((a = o.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = iy("display", i)));
              } catch (g) {
                He(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                He(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      pr(t, e), _r(e), n & 4 && im(e);
      break;
    case 21:
      break;
    default:
      pr(t, e), _r(e);
  }
}
function _r(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (z1(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(N(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (ki(o, ""), (n.flags &= -33));
          var a = am(e);
          Sf(e, a, o);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo,
            l = am(e);
          bf(e, l, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      He(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sk(e, t, r) {
  (j = e), I1(e);
}
function I1(e, t, r) {
  for (var n = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      a = o.child;
    if (o.tag === 22 && n) {
      var i = o.memoizedState !== null || Fl;
      if (!i) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || yt;
        l = Fl;
        var u = yt;
        if (((Fl = i), (yt = s) && !u))
          for (j = o; j !== null; )
            (i = j),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? um(o)
                : s !== null
                ? ((s.return = i), (j = s))
                : um(o);
        for (; a !== null; ) (j = a), I1(a), (a = a.sibling);
        (j = o), (Fl = l), (yt = u);
      }
      lm(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && a !== null
        ? ((a.return = o), (j = a))
        : lm(e);
  }
}
function lm(e) {
  for (; j !== null; ) {
    var t = j;
    if ((t.flags & 8772) !== 0) {
      var r = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || Ru(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !yt)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : gr(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Hv(t, a, n);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Hv(t, i, r);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (r === null && t.flags & 4) {
                r = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Pi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        yt || (t.flags & 512 && yf(t));
      } catch (c) {
        He(t, t.return, c);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (j = r);
      break;
    }
    j = t.return;
  }
}
function sm(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (j = r);
      break;
    }
    j = t.return;
  }
}
function um(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Ru(4, t);
          } catch (s) {
            He(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              He(t, o, s);
            }
          }
          var a = t.return;
          try {
            yf(t);
          } catch (s) {
            He(t, a, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            yf(t);
          } catch (s) {
            He(t, i, s);
          }
      }
    } catch (s) {
      He(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (j = l);
      break;
    }
    j = t.return;
  }
}
var uk = Math.ceil,
  Xs = sn.ReactCurrentDispatcher,
  Yp = sn.ReactCurrentOwner,
  lr = sn.ReactCurrentBatchConfig,
  he = 0,
  it = null,
  Qe = null,
  ft = 0,
  Ht = 0,
  Wo = Wn(0),
  rt = 0,
  Fi = null,
  yo = 0,
  Au = 0,
  Xp = 0,
  ui = null,
  Mt = null,
  Qp = 0,
  ga = 1 / 0,
  Kr = null,
  Qs = !1,
  xf = null,
  zn = null,
  Ol = !1,
  Tn = null,
  Zs = 0,
  ci = 0,
  wf = null,
  vs = -1,
  ms = 0;
function Ct() {
  return (he & 6) !== 0 ? Ke() : vs !== -1 ? vs : (vs = Ke());
}
function Dn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (he & 2) !== 0 && ft !== 0
    ? ft & -ft
    : GC.transition !== null
    ? (ms === 0 && (ms = by()), ms)
    : ((e = Ce),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ty(e.type))),
      e);
}
function Cr(e, t, r, n) {
  if (50 < ci) throw ((ci = 0), (wf = null), Error(N(185)));
  al(e, r, n),
    ((he & 2) === 0 || e !== it) &&
      (e === it && ((he & 2) === 0 && (Au |= r), rt === 4 && Cn(e, ft)),
      It(e, n),
      r === 1 &&
        he === 0 &&
        (t.mode & 1) === 0 &&
        ((ga = Ke() + 500), Tu && Hn()));
}
function It(e, t) {
  var r = e.callbackNode;
  G2(e, t);
  var n = Ds(e, e === it ? ft : 0);
  if (n === 0)
    r !== null && yv(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && yv(r), t === 1))
      e.tag === 0 ? UC(cm.bind(null, e)) : Uy(cm.bind(null, e)),
        VC(function () {
          (he & 6) === 0 && Hn();
        }),
        (r = null);
    else {
      switch (Sy(n)) {
        case 1:
          r = wp;
          break;
        case 4:
          r = gy;
          break;
        case 16:
          r = zs;
          break;
        case 536870912:
          r = yy;
          break;
        default:
          r = zs;
      }
      r = H1(r, $1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function $1(e, t) {
  if (((vs = -1), (ms = 0), (he & 6) !== 0)) throw Error(N(327));
  var r = e.callbackNode;
  if (Jo() && e.callbackNode !== r) return null;
  var n = Ds(e, e === it ? ft : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = qs(e, n);
  else {
    t = n;
    var o = he;
    he |= 2;
    var a = F1();
    (it !== e || ft !== t) && ((Kr = null), (ga = Ke() + 500), io(e, t));
    do
      try {
        fk();
        break;
      } catch (l) {
        N1(e, l);
      }
    while (1);
    Bp(),
      (Xs.current = a),
      (he = o),
      Qe !== null ? (t = 0) : ((it = null), (ft = 0), (t = rt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Yd(e)), o !== 0 && ((n = o), (t = Cf(e, o)))), t === 1)
    )
      throw ((r = Fi), io(e, 0), Cn(e, n), It(e, Ke()), r);
    if (t === 6) Cn(e, n);
    else {
      if (
        ((o = e.current.alternate),
        (n & 30) === 0 &&
          !ck(o) &&
          ((t = qs(e, n)),
          t === 2 && ((a = Yd(e)), a !== 0 && ((n = a), (t = Cf(e, a)))),
          t === 1))
      )
        throw ((r = Fi), io(e, 0), Cn(e, n), It(e, Ke()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Qn(e, Mt, Kr);
          break;
        case 3:
          if (
            (Cn(e, n), (n & 130023424) === n && ((t = Qp + 500 - Ke()), 10 < t))
          ) {
            if (Ds(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Ct(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = rf(Qn.bind(null, e, Mt, Kr), t);
            break;
          }
          Qn(e, Mt, Kr);
          break;
        case 4:
          if ((Cn(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var i = 31 - wr(n);
            (a = 1 << i), (i = t[i]), i > o && (o = i), (n &= ~a);
          }
          if (
            ((n = o),
            (n = Ke() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * uk(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = rf(Qn.bind(null, e, Mt, Kr), n);
            break;
          }
          Qn(e, Mt, Kr);
          break;
        case 5:
          Qn(e, Mt, Kr);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return It(e, Ke()), e.callbackNode === r ? $1.bind(null, e) : null;
}
function Cf(e, t) {
  var r = ui;
  return (
    e.current.memoizedState.isDehydrated && (io(e, t).flags |= 256),
    (e = qs(e, t)),
    e !== 2 && ((t = Mt), (Mt = r), t !== null && kf(t)),
    e
  );
}
function kf(e) {
  Mt === null ? (Mt = e) : Mt.push.apply(Mt, e);
}
function ck(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            a = o.getSnapshot;
          o = o.value;
          try {
            if (!Er(a(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Cn(e, t) {
  for (
    t &= ~Xp,
      t &= ~Au,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - wr(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function cm(e) {
  if ((he & 6) !== 0) throw Error(N(327));
  Jo();
  var t = Ds(e, 0);
  if ((t & 1) === 0) return It(e, Ke()), null;
  var r = qs(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Yd(e);
    n !== 0 && ((t = n), (r = Cf(e, n)));
  }
  if (r === 1) throw ((r = Fi), io(e, 0), Cn(e, t), It(e, Ke()), r);
  if (r === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qn(e, Mt, Kr),
    It(e, Ke()),
    null
  );
}
function Zp(e, t) {
  var r = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    (he = r), he === 0 && ((ga = Ke() + 500), Tu && Hn());
  }
}
function bo(e) {
  Tn !== null && Tn.tag === 0 && (he & 6) === 0 && Jo();
  var t = he;
  he |= 1;
  var r = lr.transition,
    n = Ce;
  try {
    if (((lr.transition = null), (Ce = 1), e)) return e();
  } finally {
    (Ce = n), (lr.transition = r), (he = t), (he & 6) === 0 && Hn();
  }
}
function qp() {
  (Ht = Wo.current), Le(Wo);
}
function io(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), OC(r)), Qe !== null))
    for (r = Qe.return; r !== null; ) {
      var n = r;
      switch ((Lp(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Fs();
          break;
        case 3:
          va(), Le(Dt), Le(bt), Vp();
          break;
        case 5:
          Op(n);
          break;
        case 4:
          va();
          break;
        case 13:
          Le(Fe);
          break;
        case 19:
          Le(Fe);
          break;
        case 10:
          Ip(n.type._context);
          break;
        case 22:
        case 23:
          qp();
      }
      r = r.return;
    }
  if (
    ((it = e),
    (Qe = e = Bn(e.current, null)),
    (ft = Ht = t),
    (rt = 0),
    (Fi = null),
    (Xp = Au = yo = 0),
    (Mt = ui = null),
    to !== null)
  ) {
    for (t = 0; t < to.length; t++)
      if (((r = to[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          a = r.pending;
        if (a !== null) {
          var i = a.next;
          (a.next = o), (n.next = i);
        }
        r.pending = n;
      }
    to = null;
  }
  return e;
}
function N1(e, t) {
  do {
    var r = Qe;
    try {
      if ((Bp(), (fs.current = Ys), Ks)) {
        for (var n = Oe.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Ks = !1;
      }
      if (
        ((go = 0),
        (at = tt = Oe = null),
        (li = !1),
        (Ii = 0),
        (Yp.current = null),
        r === null || r.return === null)
      ) {
        (rt = 1), (Fi = t), (Qe = null);
        break;
      }
      e: {
        var a = e,
          i = r.return,
          l = r,
          s = t;
        if (
          ((t = ft),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            d = l,
            f = d.tag;
          if ((d.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var c = d.alternate;
            c
              ? ((d.updateQueue = c.updateQueue),
                (d.memoizedState = c.memoizedState),
                (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var h = Zv(i);
          if (h !== null) {
            (h.flags &= -257),
              qv(h, i, l, a, t),
              h.mode & 1 && Qv(a, u, t),
              (t = h),
              (s = u);
            var m = t.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else m.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              Qv(a, u, t), Jp();
              break e;
            }
            s = Error(N(426));
          }
        } else if ($e && l.mode & 1) {
          var S = Zv(i);
          if (S !== null) {
            (S.flags & 65536) === 0 && (S.flags |= 256),
              qv(S, i, l, a, t),
              zp(ma(s, l));
            break e;
          }
        }
        (a = s = ma(s, l)),
          rt !== 4 && (rt = 2),
          ui === null ? (ui = [a]) : ui.push(a),
          (a = i);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var p = x1(a, s, t);
              Wv(a, p);
              break e;
            case 1:
              l = s;
              var v = a.type,
                b = a.stateNode;
              if (
                (a.flags & 128) === 0 &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (zn === null || !zn.has(b))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var x = w1(a, l, t);
                Wv(a, x);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      V1(r);
    } catch (E) {
      (t = E), Qe === r && r !== null && (Qe = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function F1() {
  var e = Xs.current;
  return (Xs.current = Ys), e === null ? Ys : e;
}
function Jp() {
  (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
    it === null ||
      ((yo & 268435455) === 0 && (Au & 268435455) === 0) ||
      Cn(it, ft);
}
function qs(e, t) {
  var r = he;
  he |= 2;
  var n = F1();
  (it !== e || ft !== t) && ((Kr = null), io(e, t));
  do
    try {
      dk();
      break;
    } catch (o) {
      N1(e, o);
    }
  while (1);
  if ((Bp(), (he = r), (Xs.current = n), Qe !== null)) throw Error(N(261));
  return (it = null), (ft = 0), rt;
}
function dk() {
  for (; Qe !== null; ) O1(Qe);
}
function fk() {
  for (; Qe !== null && !$2(); ) O1(Qe);
}
function O1(e) {
  var t = W1(e.alternate, e, Ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? V1(e) : (Qe = t),
    (Yp.current = null);
}
function V1(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((r = ok(r, t, Ht)), r !== null)) {
        Qe = r;
        return;
      }
    } else {
      if (((r = ak(r, t)), r !== null)) {
        (r.flags &= 32767), (Qe = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (rt = 6), (Qe = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Qe = t;
      return;
    }
    Qe = t = e;
  } while (t !== null);
  rt === 0 && (rt = 5);
}
function Qn(e, t, r) {
  var n = Ce,
    o = lr.transition;
  try {
    (lr.transition = null), (Ce = 1), pk(e, t, r, n);
  } finally {
    (lr.transition = o), (Ce = n);
  }
  return null;
}
function pk(e, t, r, n) {
  do Jo();
  while (Tn !== null);
  if ((he & 6) !== 0) throw Error(N(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (K2(e, a),
    e === it && ((Qe = it = null), (ft = 0)),
    ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
      Ol ||
      ((Ol = !0),
      H1(zs, function () {
        return Jo(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    (r.subtreeFlags & 15990) !== 0 || a)
  ) {
    (a = lr.transition), (lr.transition = null);
    var i = Ce;
    Ce = 1;
    var l = he;
    (he |= 4),
      (Yp.current = null),
      lk(e, r),
      B1(r, e),
      zC(ef),
      (Bs = !!Jd),
      (ef = Jd = null),
      (e.current = r),
      sk(r),
      N2(),
      (he = l),
      (Ce = i),
      (lr.transition = a);
  } else e.current = r;
  if (
    (Ol && ((Ol = !1), (Tn = e), (Zs = o)),
    (a = e.pendingLanes),
    a === 0 && (zn = null),
    V2(r.stateNode),
    It(e, Ke()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Qs) throw ((Qs = !1), (e = xf), (xf = null), e);
  return (
    (Zs & 1) !== 0 && e.tag !== 0 && Jo(),
    (a = e.pendingLanes),
    (a & 1) !== 0 ? (e === wf ? ci++ : ((ci = 0), (wf = e))) : (ci = 0),
    Hn(),
    null
  );
}
function Jo() {
  if (Tn !== null) {
    var e = Sy(Zs),
      t = lr.transition,
      r = Ce;
    try {
      if (((lr.transition = null), (Ce = 16 > e ? 16 : e), Tn === null))
        var n = !1;
      else {
        if (((e = Tn), (Tn = null), (Zs = 0), (he & 6) !== 0))
          throw Error(N(331));
        var o = he;
        for (he |= 4, j = e.current; j !== null; ) {
          var a = j,
            i = a.child;
          if ((j.flags & 16) !== 0) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (j = u; j !== null; ) {
                  var d = j;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      si(8, d, a);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (j = f);
                  else
                    for (; j !== null; ) {
                      d = j;
                      var c = d.sibling,
                        h = d.return;
                      if ((L1(d), d === u)) {
                        j = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = h), (j = c);
                        break;
                      }
                      j = h;
                    }
                }
              }
              var m = a.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              j = a;
            }
          }
          if ((a.subtreeFlags & 2064) !== 0 && i !== null)
            (i.return = a), (j = i);
          else
            e: for (; j !== null; ) {
              if (((a = j), (a.flags & 2048) !== 0))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    si(9, a, a.return);
                }
              var p = a.sibling;
              if (p !== null) {
                (p.return = a.return), (j = p);
                break e;
              }
              j = a.return;
            }
        }
        var v = e.current;
        for (j = v; j !== null; ) {
          i = j;
          var b = i.child;
          if ((i.subtreeFlags & 2064) !== 0 && b !== null)
            (b.return = i), (j = b);
          else
            e: for (i = v; j !== null; ) {
              if (((l = j), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ru(9, l);
                  }
                } catch (E) {
                  He(l, l.return, E);
                }
              if (l === i) {
                j = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (j = x);
                break e;
              }
              j = l.return;
            }
        }
        if (
          ((he = o), Hn(), $r && typeof $r.onPostCommitFiberRoot == "function")
        )
          try {
            $r.onPostCommitFiberRoot(xu, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (Ce = r), (lr.transition = t);
    }
  }
  return !1;
}
function dm(e, t, r) {
  (t = ma(r, t)),
    (t = x1(e, t, 1)),
    (e = Ln(e, t, 1)),
    (t = Ct()),
    e !== null && (al(e, 1, t), It(e, t));
}
function He(e, t, r) {
  if (e.tag === 3) dm(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dm(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (zn === null || !zn.has(n)))
        ) {
          (e = ma(r, e)),
            (e = w1(t, e, 1)),
            (t = Ln(t, e, 1)),
            (e = Ct()),
            t !== null && (al(t, 1, e), It(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hk(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ct()),
    (e.pingedLanes |= e.suspendedLanes & r),
    it === e &&
      (ft & r) === r &&
      (rt === 4 || (rt === 3 && (ft & 130023424) === ft && 500 > Ke() - Qp)
        ? io(e, 0)
        : (Xp |= r)),
    It(e, t);
}
function j1(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Al), (Al <<= 1), (Al & 130023424) === 0 && (Al = 4194304)));
  var r = Ct();
  (e = rn(e, t)), e !== null && (al(e, t, r), It(e, r));
}
function vk(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), j1(e, r);
}
function mk(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  n !== null && n.delete(t), j1(e, r);
}
var W1;
W1 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current) zt = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
        return (zt = !1), nk(e, t, r);
      zt = (e.flags & 131072) !== 0;
    }
  else (zt = !1), $e && (t.flags & 1048576) !== 0 && Gy(t, js, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      hs(e, t), (e = t.pendingProps);
      var o = fa(t, bt.current);
      qo(t, r), (o = Wp(null, t, n, e, o, r));
      var a = Hp();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Bt(n) ? ((a = !0), Os(t)) : (a = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Np(t),
            (o.updater = _u),
            (t.stateNode = o),
            (o._reactInternals = t),
            cf(t, n, e, r),
            (t = pf(null, t, n, !0, a, r)))
          : ((t.tag = 0), $e && a && Mp(t), xt(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (hs(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = yk(n)),
          (e = gr(n, e)),
          o)
        ) {
          case 0:
            t = ff(null, t, n, e, r);
            break e;
          case 1:
            t = tm(null, t, n, e, r);
            break e;
          case 11:
            t = Jv(null, t, n, e, r);
            break e;
          case 14:
            t = em(null, t, n, gr(n.type, e), r);
            break e;
        }
        throw Error(N(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : gr(n, o)),
        ff(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : gr(n, o)),
        tm(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((T1(t), e === null)) throw Error(N(387));
        (n = t.pendingProps),
          (a = t.memoizedState),
          (o = a.element),
          Qy(e, t),
          Us(t, n, null, r);
        var i = t.memoizedState;
        if (((n = i.element), a.isDehydrated))
          if (
            ((a = {
              element: n,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (o = ma(Error(N(423)), t)), (t = rm(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = ma(Error(N(424)), t)), (t = rm(e, t, n, r, o));
            break e;
          } else
            for (
              Ut = Mn(t.stateNode.containerInfo.firstChild),
                Gt = t,
                $e = !0,
                Sr = null,
                r = e1(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((pa(), n === o)) {
            t = nn(e, t, r);
            break e;
          }
          xt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        t1(t),
        e === null && lf(t),
        (n = t.type),
        (o = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = o.children),
        tf(n, o) ? (i = null) : a !== null && tf(n, a) && (t.flags |= 32),
        E1(e, t),
        xt(e, t, i, r),
        t.child
      );
    case 6:
      return e === null && lf(t), null;
    case 13:
      return _1(e, t, r);
    case 4:
      return (
        Fp(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = ha(t, null, n, r)) : xt(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : gr(n, o)),
        Jv(e, t, n, o, r)
      );
    case 7:
      return xt(e, t, t.pendingProps, r), t.child;
    case 8:
      return xt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return xt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (a = t.memoizedProps),
          (i = o.value),
          Re(Ws, n._currentValue),
          (n._currentValue = i),
          a !== null)
        )
          if (Er(a.value, i)) {
            if (a.children === o.children && !Dt.current) {
              t = nn(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                i = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (a.tag === 1) {
                      (s = Jr(-1, r & -r)), (s.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (u.pending = s);
                      }
                    }
                    (a.lanes |= r),
                      (s = a.alternate),
                      s !== null && (s.lanes |= r),
                      sf(a.return, r, t),
                      (l.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(N(341));
                (i.lanes |= r),
                  (l = i.alternate),
                  l !== null && (l.lanes |= r),
                  sf(i, r, t),
                  (i = a.sibling);
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    (a.return = i.return), (i = a);
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        xt(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        qo(t, r),
        (o = sr(o)),
        (n = n(o)),
        (t.flags |= 1),
        xt(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = gr(n, t.pendingProps)),
        (o = gr(n.type, o)),
        em(e, t, n, o, r)
      );
    case 15:
      return C1(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : gr(n, o)),
        hs(e, t),
        (t.tag = 1),
        Bt(n) ? ((e = !0), Os(t)) : (e = !1),
        qo(t, r),
        qy(t, n, o),
        cf(t, n, o, r),
        pf(null, t, n, !0, e, r)
      );
    case 19:
      return P1(e, t, r);
    case 22:
      return k1(e, t, r);
  }
  throw Error(N(156, t.tag));
};
function H1(e, t) {
  return my(e, t);
}
function gk(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ir(e, t, r, n) {
  return new gk(e, t, r, n);
}
function eh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yk(e) {
  if (typeof e == "function") return eh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bp)) return 11;
    if (e === Sp) return 14;
  }
  return 2;
}
function Bn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = ir(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function gs(e, t, r, n, o, a) {
  var i = 2;
  if (((n = e), typeof e == "function")) eh(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case zo:
        return lo(r.children, o, a, t);
      case yp:
        (i = 8), (o |= 8);
        break;
      case zd:
        return (
          (e = ir(12, r, t, o | 2)), (e.elementType = zd), (e.lanes = a), e
        );
      case Dd:
        return (e = ir(13, r, t, o)), (e.elementType = Dd), (e.lanes = a), e;
      case Bd:
        return (e = ir(19, r, t, o)), (e.elementType = Bd), (e.lanes = a), e;
      case Jg:
        return Mu(r, o, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zg:
              i = 10;
              break e;
            case qg:
              i = 9;
              break e;
            case bp:
              i = 11;
              break e;
            case Sp:
              i = 14;
              break e;
            case Sn:
              (i = 16), (n = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ir(i, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = a), t
  );
}
function lo(e, t, r, n) {
  return (e = ir(7, e, n, t)), (e.lanes = r), e;
}
function Mu(e, t, r, n) {
  return (
    (e = ir(22, e, n, t)),
    (e.elementType = Jg),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qc(e, t, r) {
  return (e = ir(6, e, null, t)), (e.lanes = r), e;
}
function Zc(e, t, r) {
  return (
    (t = ir(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bk(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Mc(0)),
    (this.expirationTimes = Mc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Mc(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function th(e, t, r, n, o, a, i, l, s) {
  return (
    (e = new bk(e, t, r, l, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = ir(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Np(a),
    e
  );
}
function Sk(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Lo,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function U1(e) {
  if (!e) return Nn;
  e = e._reactInternals;
  e: {
    if (xo(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Bt(r)) return Hy(e, r, t);
  }
  return t;
}
function G1(e, t, r, n, o, a, i, l, s) {
  return (
    (e = th(r, n, !0, e, o, a, i, l, s)),
    (e.context = U1(null)),
    (r = e.current),
    (n = Ct()),
    (o = Dn(r)),
    (a = Jr(n, o)),
    (a.callback = t != null ? t : null),
    Ln(r, a, o),
    (e.current.lanes = o),
    al(e, o, n),
    It(e, n),
    e
  );
}
function Lu(e, t, r, n) {
  var o = t.current,
    a = Ct(),
    i = Dn(o);
  return (
    (r = U1(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Jr(a, i)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Ln(o, t, i)),
    e !== null && (Cr(e, o, i, a), ds(e, o, i)),
    i
  );
}
function Js(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function rh(e, t) {
  fm(e, t), (e = e.alternate) && fm(e, t);
}
function xk() {
  return null;
}
var K1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function nh(e) {
  this._internalRoot = e;
}
zu.prototype.render = nh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Lu(e, t, null, null);
};
zu.prototype.unmount = nh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bo(function () {
      Lu(null, e, null, null);
    }),
      (t[tn] = null);
  }
};
function zu(e) {
  this._internalRoot = e;
}
zu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cy();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < wn.length && t !== 0 && t < wn[r].priority; r++);
    wn.splice(r, 0, e), r === 0 && Ey(e);
  }
};
function oh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Du(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pm() {}
function wk(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var u = Js(i);
        a.call(u);
      };
    }
    var i = G1(t, n, e, 0, null, !1, !1, "", pm);
    return (
      (e._reactRootContainer = i),
      (e[tn] = i.current),
      Mi(e.nodeType === 8 ? e.parentNode : e),
      bo(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var l = n;
    n = function () {
      var u = Js(s);
      l.call(u);
    };
  }
  var s = th(e, 0, !1, null, null, !1, !1, "", pm);
  return (
    (e._reactRootContainer = s),
    (e[tn] = s.current),
    Mi(e.nodeType === 8 ? e.parentNode : e),
    bo(function () {
      Lu(t, s, r, n);
    }),
    s
  );
}
function Bu(e, t, r, n, o) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = Js(i);
        l.call(s);
      };
    }
    Lu(t, i, e, o);
  } else i = wk(r, t, e, o, n);
  return Js(i);
}
xy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Za(t.pendingLanes);
        r !== 0 &&
          (Cp(t, r | 1),
          It(t, Ke()),
          (he & 6) === 0 && ((ga = Ke() + 500), Hn()));
      }
      break;
    case 13:
      bo(function () {
        var n = rn(e, 1);
        if (n !== null) {
          var o = Ct();
          Cr(n, e, 1, o);
        }
      }),
        rh(e, 1);
  }
};
kp = function (e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var r = Ct();
      Cr(t, e, 134217728, r);
    }
    rh(e, 134217728);
  }
};
wy = function (e) {
  if (e.tag === 13) {
    var t = Dn(e),
      r = rn(e, t);
    if (r !== null) {
      var n = Ct();
      Cr(r, e, t, n);
    }
    rh(e, t);
  }
};
Cy = function () {
  return Ce;
};
ky = function (e, t) {
  var r = Ce;
  try {
    return (Ce = e), t();
  } finally {
    Ce = r;
  }
};
Ud = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Nd(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = Eu(n);
            if (!o) throw Error(N(90));
            ty(n), Nd(n, o);
          }
        }
      }
      break;
    case "textarea":
      ny(e, r);
      break;
    case "select":
      (t = r.value), t != null && Yo(e, !!r.multiple, t, !1);
  }
};
cy = Zp;
dy = bo;
var Ck = { usingClientEntryPoint: !1, Events: [ll, $o, Eu, sy, uy, Zp] },
  ja = {
    findFiberByHostInstance: eo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  kk = {
    bundleType: ja.bundleType,
    version: ja.version,
    rendererPackageName: ja.rendererPackageName,
    rendererConfig: ja.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ja.findFiberByHostInstance || xk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vl.isDisabled && Vl.supportsFiber)
    try {
      (xu = Vl.inject(kk)), ($r = Vl);
    } catch {}
}
Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ck;
Qt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oh(t)) throw Error(N(200));
  return Sk(e, t, null, r);
};
Qt.createRoot = function (e, t) {
  if (!oh(e)) throw Error(N(299));
  var r = !1,
    n = "",
    o = K1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = th(e, 1, !1, null, null, r, !1, n, o)),
    (e[tn] = t.current),
    Mi(e.nodeType === 8 ? e.parentNode : e),
    new nh(t)
  );
};
Qt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = hy(t)), (e = e === null ? null : e.stateNode), e;
};
Qt.flushSync = function (e) {
  return bo(e);
};
Qt.hydrate = function (e, t, r) {
  if (!Du(t)) throw Error(N(200));
  return Bu(null, e, t, !0, r);
};
Qt.hydrateRoot = function (e, t, r) {
  if (!oh(e)) throw Error(N(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    a = "",
    i = K1;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (t = G1(t, null, e, 1, r != null ? r : null, o, !1, a, i)),
    (e[tn] = t.current),
    Mi(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new zu(t);
};
Qt.render = function (e, t, r) {
  if (!Du(t)) throw Error(N(200));
  return Bu(null, e, t, !1, r);
};
Qt.unmountComponentAtNode = function (e) {
  if (!Du(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (bo(function () {
        Bu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tn] = null);
        });
      }),
      !0)
    : !1;
};
Qt.unstable_batchedUpdates = Zp;
Qt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Du(r)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Bu(e, t, r, !1, n);
};
Qt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  t(), (e.exports = Qt);
})(Su);
var hm = Su.exports;
(Md.createRoot = hm.createRoot), (Md.hydrateRoot = hm.hydrateRoot);
var eu = Boolean(globalThis == null ? void 0 : globalThis.document)
    ? k.exports.useLayoutEffect
    : k.exports.useEffect,
  Iu = { exports: {} },
  $u = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ek = k.exports,
  Tk = Symbol.for("react.element"),
  _k = Symbol.for("react.fragment"),
  Pk = Object.prototype.hasOwnProperty,
  Rk = Ek.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ak = { key: !0, ref: !0, __self: !0, __source: !0 };
function Y1(e, t, r) {
  var n,
    o = {},
    a = null,
    i = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (n in t) Pk.call(t, n) && !Ak.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Tk,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: Rk.current,
  };
}
$u.Fragment = _k;
$u.jsx = Y1;
$u.jsxs = Y1;
(function (e) {
  e.exports = $u;
})(Iu);
const ya = Iu.exports.Fragment,
  A = Iu.exports.jsx,
  $t = Iu.exports.jsxs;
var ah = k.exports.createContext({});
ah.displayName = "ColorModeContext";
function ih() {
  const e = k.exports.useContext(ah);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var jl = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function Mk(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const o = t ? r.preventTransition() : void 0;
        (document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o == null || o();
      },
      setClassName(n) {
        document.body.classList.add(n ? jl.dark : jl.light),
          document.body.classList.remove(n ? jl.light : jl.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(n) {
        var a;
        return ((a = r.query().matches) != null ? a : n === "dark")
          ? "dark"
          : "light";
      },
      addListener(n) {
        const o = r.query(),
          a = (i) => {
            n(i.matches ? "dark" : "light");
          };
        return (
          typeof o.addListener == "function"
            ? o.addListener(a)
            : o.addEventListener("change", a),
          () => {
            typeof o.removeListener == "function"
              ? o.removeListener(a)
              : o.removeEventListener("change", a);
          }
        );
      },
      preventTransition() {
        const n = document.createElement("style");
        return (
          n.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(n),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(n);
                });
              });
          }
        );
      },
    };
  return r;
}
var Lk = "chakra-ui-color-mode";
function zk(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {}
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var Dk = zk(Lk),
  vm = () => {};
function mm(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function X1(e) {
  const {
      value: t,
      children: r,
      options: {
        useSystemColorMode: n,
        initialColorMode: o,
        disableTransitionOnChange: a,
      } = {},
      colorModeManager: i = Dk,
    } = e,
    l = o === "dark" ? "dark" : "light",
    [s, u] = k.exports.useState(() => mm(i, l)),
    [d, f] = k.exports.useState(() => mm(i)),
    {
      getSystemTheme: c,
      setClassName: h,
      setDataset: m,
      addListener: g,
    } = k.exports.useMemo(() => Mk({ preventTransition: a }), [a]),
    S = o === "system" && !s ? d : s,
    p = k.exports.useCallback(
      (x) => {
        const E = x === "system" ? c() : x;
        u(E), h(E === "dark"), m(E), i.set(E);
      },
      [i, c, h, m]
    );
  eu(() => {
    o === "system" && f(c());
  }, []),
    k.exports.useEffect(() => {
      const x = i.get();
      if (x) {
        p(x);
        return;
      }
      if (o === "system") {
        p("system");
        return;
      }
      p(l);
    }, [i, l, o, p]);
  const v = k.exports.useCallback(() => {
    p(S === "dark" ? "light" : "dark");
  }, [S, p]);
  k.exports.useEffect(() => {
    if (!!n) return g(p);
  }, [n, g, p]);
  const b = k.exports.useMemo(
    () => ({
      colorMode: t != null ? t : S,
      toggleColorMode: t ? vm : v,
      setColorMode: t ? vm : p,
      forced: t !== void 0,
    }),
    [S, v, p, t]
  );
  return A(ah.Provider, { value: b, children: r });
}
X1.displayName = "ColorModeProvider";
var Ef = { exports: {} };
(function (e, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    o = 800,
    a = 16,
    i = 9007199254740991,
    l = "[object Arguments]",
    s = "[object Array]",
    u = "[object AsyncFunction]",
    d = "[object Boolean]",
    f = "[object Date]",
    c = "[object Error]",
    h = "[object Function]",
    m = "[object GeneratorFunction]",
    g = "[object Map]",
    S = "[object Number]",
    p = "[object Null]",
    v = "[object Object]",
    b = "[object Proxy]",
    x = "[object RegExp]",
    E = "[object Set]",
    T = "[object String]",
    _ = "[object Undefined]",
    M = "[object WeakMap]",
    I = "[object ArrayBuffer]",
    B = "[object DataView]",
    K = "[object Float32Array]",
    ce = "[object Float64Array]",
    xe = "[object Int8Array]",
    ee = "[object Int16Array]",
    We = "[object Int32Array]",
    oe = "[object Uint8Array]",
    Ge = "[object Uint8ClampedArray]",
    F = "[object Uint16Array]",
    Y = "[object Uint32Array]",
    H = /[\\^$.*+?()[\]{}|]/g,
    J = /^\[object .+?Constructor\]$/,
    de = /^(?:0|[1-9]\d*)$/,
    re = {};
  (re[K] =
    re[ce] =
    re[xe] =
    re[ee] =
    re[We] =
    re[oe] =
    re[Ge] =
    re[F] =
    re[Y] =
      !0),
    (re[l] =
      re[s] =
      re[I] =
      re[d] =
      re[B] =
      re[f] =
      re[c] =
      re[h] =
      re[g] =
      re[S] =
      re[v] =
      re[x] =
      re[E] =
      re[T] =
      re[M] =
        !1);
  var Ye = typeof kl == "object" && kl && kl.Object === Object && kl,
    Rt = typeof self == "object" && self && self.Object === Object && self,
    ot = Ye || Rt || Function("return this")(),
    Vt = t && !t.nodeType && t,
    dr = Vt && !0 && e && !e.nodeType && e,
    Vr = dr && dr.exports === Vt,
    er = Vr && Ye.process,
    cn = (function () {
      try {
        var y = dr && dr.require && dr.require("util").types;
        return y || (er && er.binding && er.binding("util"));
      } catch {}
    })(),
    Un = cn && cn.isTypedArray;
  function dn(y, w, P) {
    switch (P.length) {
      case 0:
        return y.call(w);
      case 1:
        return y.call(w, P[0]);
      case 2:
        return y.call(w, P[0], P[1]);
      case 3:
        return y.call(w, P[0], P[1], P[2]);
    }
    return y.apply(w, P);
  }
  function W(y, w) {
    for (var P = -1, V = Array(y); ++P < y; ) V[P] = w(P);
    return V;
  }
  function D(y) {
    return function (w) {
      return y(w);
    };
  }
  function O(y, w) {
    return y == null ? void 0 : y[w];
  }
  function fe(y, w) {
    return function (P) {
      return y(w(P));
    };
  }
  var R = Array.prototype,
    L = Function.prototype,
    $ = Object.prototype,
    U = ot["__core-js_shared__"],
    X = L.toString,
    Z = $.hasOwnProperty,
    se = (function () {
      var y = /[^.]+$/.exec((U && U.keys && U.keys.IE_PROTO) || "");
      return y ? "Symbol(src)_1." + y : "";
    })(),
    ye = $.toString,
    Ee = X.call(Object),
    Te = RegExp(
      "^" +
        X.call(Z)
          .replace(H, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    we = Vr ? ot.Buffer : void 0,
    Ze = ot.Symbol,
    jr = ot.Uint8Array,
    tr = we ? we.allocUnsafe : void 0,
    Tr = fe(Object.getPrototypeOf, Object),
    Co = Object.create,
    ko = $.propertyIsEnumerable,
    fn = R.splice,
    De = Ze ? Ze.toStringTag : void 0,
    qe = (function () {
      try {
        var y = yc(Object, "defineProperty");
        return y({}, "", {}), y;
      } catch {}
    })(),
    pn = we ? we.isBuffer : void 0,
    hn = Math.max,
    yl = Date.now,
    La = yc(ot, "Map"),
    Gn = yc(Object, "create"),
    hc = (function () {
      function y() {}
      return function (w) {
        if (!Kn(w)) return {};
        if (Co) return Co(w);
        y.prototype = w;
        var P = new y();
        return (y.prototype = void 0), P;
      };
    })();
  function Je(y) {
    var w = -1,
      P = y == null ? 0 : y.length;
    for (this.clear(); ++w < P; ) {
      var V = y[w];
      this.set(V[0], V[1]);
    }
  }
  function fr() {
    (this.__data__ = Gn ? Gn(null) : {}), (this.size = 0);
  }
  function bl(y) {
    var w = this.has(y) && delete this.__data__[y];
    return (this.size -= w ? 1 : 0), w;
  }
  function vc(y) {
    var w = this.__data__;
    if (Gn) {
      var P = w[y];
      return P === n ? void 0 : P;
    }
    return Z.call(w, y) ? w[y] : void 0;
  }
  function cw(y) {
    var w = this.__data__;
    return Gn ? w[y] !== void 0 : Z.call(w, y);
  }
  function dw(y, w) {
    var P = this.__data__;
    return (
      (this.size += this.has(y) ? 0 : 1),
      (P[y] = Gn && w === void 0 ? n : w),
      this
    );
  }
  (Je.prototype.clear = fr),
    (Je.prototype.delete = bl),
    (Je.prototype.get = vc),
    (Je.prototype.has = cw),
    (Je.prototype.set = dw);
  function Wr(y) {
    var w = -1,
      P = y == null ? 0 : y.length;
    for (this.clear(); ++w < P; ) {
      var V = y[w];
      this.set(V[0], V[1]);
    }
  }
  function fw() {
    (this.__data__ = []), (this.size = 0);
  }
  function pw(y) {
    var w = this.__data__,
      P = Sl(w, y);
    if (P < 0) return !1;
    var V = w.length - 1;
    return P == V ? w.pop() : fn.call(w, P, 1), --this.size, !0;
  }
  function hw(y) {
    var w = this.__data__,
      P = Sl(w, y);
    return P < 0 ? void 0 : w[P][1];
  }
  function vw(y) {
    return Sl(this.__data__, y) > -1;
  }
  function mw(y, w) {
    var P = this.__data__,
      V = Sl(P, y);
    return V < 0 ? (++this.size, P.push([y, w])) : (P[V][1] = w), this;
  }
  (Wr.prototype.clear = fw),
    (Wr.prototype.delete = pw),
    (Wr.prototype.get = hw),
    (Wr.prototype.has = vw),
    (Wr.prototype.set = mw);
  function Eo(y) {
    var w = -1,
      P = y == null ? 0 : y.length;
    for (this.clear(); ++w < P; ) {
      var V = y[w];
      this.set(V[0], V[1]);
    }
  }
  function gw() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Je(),
        map: new (La || Wr)(),
        string: new Je(),
      });
  }
  function yw(y) {
    var w = wl(this, y).delete(y);
    return (this.size -= w ? 1 : 0), w;
  }
  function bw(y) {
    return wl(this, y).get(y);
  }
  function Sw(y) {
    return wl(this, y).has(y);
  }
  function xw(y, w) {
    var P = wl(this, y),
      V = P.size;
    return P.set(y, w), (this.size += P.size == V ? 0 : 1), this;
  }
  (Eo.prototype.clear = gw),
    (Eo.prototype.delete = yw),
    (Eo.prototype.get = bw),
    (Eo.prototype.has = Sw),
    (Eo.prototype.set = xw);
  function To(y) {
    var w = (this.__data__ = new Wr(y));
    this.size = w.size;
  }
  function ww() {
    (this.__data__ = new Wr()), (this.size = 0);
  }
  function Cw(y) {
    var w = this.__data__,
      P = w.delete(y);
    return (this.size = w.size), P;
  }
  function kw(y) {
    return this.__data__.get(y);
  }
  function Ew(y) {
    return this.__data__.has(y);
  }
  function Tw(y, w) {
    var P = this.__data__;
    if (P instanceof Wr) {
      var V = P.__data__;
      if (!La || V.length < r - 1)
        return V.push([y, w]), (this.size = ++P.size), this;
      P = this.__data__ = new Eo(V);
    }
    return P.set(y, w), (this.size = P.size), this;
  }
  (To.prototype.clear = ww),
    (To.prototype.delete = Cw),
    (To.prototype.get = kw),
    (To.prototype.has = Ew),
    (To.prototype.set = Tw);
  function _w(y, w) {
    var P = xc(y),
      V = !P && Sc(y),
      ue = !P && !V && ev(y),
      Pe = !P && !V && !ue && rv(y),
      Be = P || V || ue || Pe,
      le = Be ? W(y.length, String) : [],
      Ie = le.length;
    for (var rr in y)
      (w || Z.call(y, rr)) &&
        !(
          Be &&
          (rr == "length" ||
            (ue && (rr == "offset" || rr == "parent")) ||
            (Pe &&
              (rr == "buffer" || rr == "byteLength" || rr == "byteOffset")) ||
            qh(rr, Ie))
        ) &&
        le.push(rr);
    return le;
  }
  function mc(y, w, P) {
    ((P !== void 0 && !Cl(y[w], P)) || (P === void 0 && !(w in y))) &&
      gc(y, w, P);
  }
  function Pw(y, w, P) {
    var V = y[w];
    (!(Z.call(y, w) && Cl(V, P)) || (P === void 0 && !(w in y))) && gc(y, w, P);
  }
  function Sl(y, w) {
    for (var P = y.length; P--; ) if (Cl(y[P][0], w)) return P;
    return -1;
  }
  function gc(y, w, P) {
    w == "__proto__" && qe
      ? qe(y, w, { configurable: !0, enumerable: !0, value: P, writable: !0 })
      : (y[w] = P);
  }
  var Rw = jw();
  function xl(y) {
    return y == null
      ? y === void 0
        ? _
        : p
      : De && De in Object(y)
      ? Ww(y)
      : Xw(y);
  }
  function Qh(y) {
    return za(y) && xl(y) == l;
  }
  function Aw(y) {
    if (!Kn(y) || Kw(y)) return !1;
    var w = Cc(y) ? Te : J;
    return w.test(Jw(y));
  }
  function Mw(y) {
    return za(y) && tv(y.length) && !!re[xl(y)];
  }
  function Lw(y) {
    if (!Kn(y)) return Yw(y);
    var w = Jh(y),
      P = [];
    for (var V in y) (V == "constructor" && (w || !Z.call(y, V))) || P.push(V);
    return P;
  }
  function Zh(y, w, P, V, ue) {
    y !== w &&
      Rw(
        w,
        function (Pe, Be) {
          if ((ue || (ue = new To()), Kn(Pe))) zw(y, w, Be, P, Zh, V, ue);
          else {
            var le = V ? V(bc(y, Be), Pe, Be + "", y, w, ue) : void 0;
            le === void 0 && (le = Pe), mc(y, Be, le);
          }
        },
        nv
      );
  }
  function zw(y, w, P, V, ue, Pe, Be) {
    var le = bc(y, P),
      Ie = bc(w, P),
      rr = Be.get(Ie);
    if (rr) {
      mc(y, P, rr);
      return;
    }
    var jt = Pe ? Pe(le, Ie, P + "", y, w, Be) : void 0,
      Da = jt === void 0;
    if (Da) {
      var kc = xc(Ie),
        Ec = !kc && ev(Ie),
        av = !kc && !Ec && rv(Ie);
      (jt = Ie),
        kc || Ec || av
          ? xc(le)
            ? (jt = le)
            : e2(le)
            ? (jt = Fw(le))
            : Ec
            ? ((Da = !1), (jt = Iw(Ie, !0)))
            : av
            ? ((Da = !1), (jt = Nw(Ie, !0)))
            : (jt = [])
          : t2(Ie) || Sc(Ie)
          ? ((jt = le),
            Sc(le) ? (jt = r2(le)) : (!Kn(le) || Cc(le)) && (jt = Hw(Ie)))
          : (Da = !1);
    }
    Da && (Be.set(Ie, jt), ue(jt, Ie, V, Pe, Be), Be.delete(Ie)), mc(y, P, jt);
  }
  function Dw(y, w) {
    return Zw(Qw(y, w, ov), y + "");
  }
  var Bw = qe
    ? function (y, w) {
        return qe(y, "toString", {
          configurable: !0,
          enumerable: !1,
          value: o2(w),
          writable: !0,
        });
      }
    : ov;
  function Iw(y, w) {
    if (w) return y.slice();
    var P = y.length,
      V = tr ? tr(P) : new y.constructor(P);
    return y.copy(V), V;
  }
  function $w(y) {
    var w = new y.constructor(y.byteLength);
    return new jr(w).set(new jr(y)), w;
  }
  function Nw(y, w) {
    var P = w ? $w(y.buffer) : y.buffer;
    return new y.constructor(P, y.byteOffset, y.length);
  }
  function Fw(y, w) {
    var P = -1,
      V = y.length;
    for (w || (w = Array(V)); ++P < V; ) w[P] = y[P];
    return w;
  }
  function Ow(y, w, P, V) {
    var ue = !P;
    P || (P = {});
    for (var Pe = -1, Be = w.length; ++Pe < Be; ) {
      var le = w[Pe],
        Ie = V ? V(P[le], y[le], le, P, y) : void 0;
      Ie === void 0 && (Ie = y[le]), ue ? gc(P, le, Ie) : Pw(P, le, Ie);
    }
    return P;
  }
  function Vw(y) {
    return Dw(function (w, P) {
      var V = -1,
        ue = P.length,
        Pe = ue > 1 ? P[ue - 1] : void 0,
        Be = ue > 2 ? P[2] : void 0;
      for (
        Pe = y.length > 3 && typeof Pe == "function" ? (ue--, Pe) : void 0,
          Be && Uw(P[0], P[1], Be) && ((Pe = ue < 3 ? void 0 : Pe), (ue = 1)),
          w = Object(w);
        ++V < ue;

      ) {
        var le = P[V];
        le && y(w, le, V, Pe);
      }
      return w;
    });
  }
  function jw(y) {
    return function (w, P, V) {
      for (var ue = -1, Pe = Object(w), Be = V(w), le = Be.length; le--; ) {
        var Ie = Be[y ? le : ++ue];
        if (P(Pe[Ie], Ie, Pe) === !1) break;
      }
      return w;
    };
  }
  function wl(y, w) {
    var P = y.__data__;
    return Gw(w) ? P[typeof w == "string" ? "string" : "hash"] : P.map;
  }
  function yc(y, w) {
    var P = O(y, w);
    return Aw(P) ? P : void 0;
  }
  function Ww(y) {
    var w = Z.call(y, De),
      P = y[De];
    try {
      y[De] = void 0;
      var V = !0;
    } catch {}
    var ue = ye.call(y);
    return V && (w ? (y[De] = P) : delete y[De]), ue;
  }
  function Hw(y) {
    return typeof y.constructor == "function" && !Jh(y) ? hc(Tr(y)) : {};
  }
  function qh(y, w) {
    var P = typeof y;
    return (
      (w = w == null ? i : w),
      !!w &&
        (P == "number" || (P != "symbol" && de.test(y))) &&
        y > -1 &&
        y % 1 == 0 &&
        y < w
    );
  }
  function Uw(y, w, P) {
    if (!Kn(P)) return !1;
    var V = typeof w;
    return (V == "number" ? wc(P) && qh(w, P.length) : V == "string" && w in P)
      ? Cl(P[w], y)
      : !1;
  }
  function Gw(y) {
    var w = typeof y;
    return w == "string" || w == "number" || w == "symbol" || w == "boolean"
      ? y !== "__proto__"
      : y === null;
  }
  function Kw(y) {
    return !!se && se in y;
  }
  function Jh(y) {
    var w = y && y.constructor,
      P = (typeof w == "function" && w.prototype) || $;
    return y === P;
  }
  function Yw(y) {
    var w = [];
    if (y != null) for (var P in Object(y)) w.push(P);
    return w;
  }
  function Xw(y) {
    return ye.call(y);
  }
  function Qw(y, w, P) {
    return (
      (w = hn(w === void 0 ? y.length - 1 : w, 0)),
      function () {
        for (
          var V = arguments, ue = -1, Pe = hn(V.length - w, 0), Be = Array(Pe);
          ++ue < Pe;

        )
          Be[ue] = V[w + ue];
        ue = -1;
        for (var le = Array(w + 1); ++ue < w; ) le[ue] = V[ue];
        return (le[w] = P(Be)), dn(y, this, le);
      }
    );
  }
  function bc(y, w) {
    if (!(w === "constructor" && typeof y[w] == "function") && w != "__proto__")
      return y[w];
  }
  var Zw = qw(Bw);
  function qw(y) {
    var w = 0,
      P = 0;
    return function () {
      var V = yl(),
        ue = a - (V - P);
      if (((P = V), ue > 0)) {
        if (++w >= o) return arguments[0];
      } else w = 0;
      return y.apply(void 0, arguments);
    };
  }
  function Jw(y) {
    if (y != null) {
      try {
        return X.call(y);
      } catch {}
      try {
        return y + "";
      } catch {}
    }
    return "";
  }
  function Cl(y, w) {
    return y === w || (y !== y && w !== w);
  }
  var Sc = Qh(
      (function () {
        return arguments;
      })()
    )
      ? Qh
      : function (y) {
          return za(y) && Z.call(y, "callee") && !ko.call(y, "callee");
        },
    xc = Array.isArray;
  function wc(y) {
    return y != null && tv(y.length) && !Cc(y);
  }
  function e2(y) {
    return za(y) && wc(y);
  }
  var ev = pn || a2;
  function Cc(y) {
    if (!Kn(y)) return !1;
    var w = xl(y);
    return w == h || w == m || w == u || w == b;
  }
  function tv(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= i;
  }
  function Kn(y) {
    var w = typeof y;
    return y != null && (w == "object" || w == "function");
  }
  function za(y) {
    return y != null && typeof y == "object";
  }
  function t2(y) {
    if (!za(y) || xl(y) != v) return !1;
    var w = Tr(y);
    if (w === null) return !0;
    var P = Z.call(w, "constructor") && w.constructor;
    return typeof P == "function" && P instanceof P && X.call(P) == Ee;
  }
  var rv = Un ? D(Un) : Mw;
  function r2(y) {
    return Ow(y, nv(y));
  }
  function nv(y) {
    return wc(y) ? _w(y, !0) : Lw(y);
  }
  var n2 = Vw(function (y, w, P, V) {
    Zh(y, w, P, V);
  });
  function o2(y) {
    return function () {
      return y;
    };
  }
  function ov(y) {
    return y;
  }
  function a2() {
    return !1;
  }
  e.exports = n2;
})(Ef, Ef.exports);
const Dr = Ef.exports;
function kr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function no(e, ...t) {
  return Bk(e) ? e(...t) : e;
}
var Bk = (e) => typeof e == "function",
  Ik = (e) => /!(important)?$/.test(e),
  gm = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  Tf = (e, t) => (r) => {
    const n = String(t),
      o = Ik(n),
      a = gm(n),
      i = e ? `${e}.${a}` : a;
    let l = kr(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
    return (l = gm(l)), o ? `${l} !important` : l;
  };
function Oi(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var u;
    const l = Tf(t, a)(i);
    let s = (u = r == null ? void 0 : r(l, i)) != null ? u : l;
    return n && (s = n(s, i)), s;
  };
}
var Wl =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t);
function hr(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return (n.transform = Oi({ scale: e, transform: t })), n;
  };
}
var $k =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === "rtl" ? e : t;
function Nk(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: $k(t),
    transform: r ? Oi({ scale: r, compose: n }) : n,
  };
}
var Q1 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function Fk() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Q1,
  ].join(" ");
}
function Ok() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Q1,
  ].join(" ");
}
var Vk = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  jk = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function Wk(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var Hk = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  Z1 = "& > :not(style) ~ :not(style)",
  Uk = {
    [Z1]: {
      marginInlineStart:
        "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
      marginInlineEnd:
        "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))",
    },
  },
  Gk = {
    [Z1]: {
      marginTop:
        "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
      marginBottom:
        "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))",
    },
  },
  _f = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  Kk = new Set(Object.values(_f)),
  q1 = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  Yk = (e) => e.trim();
function Xk(e, t) {
  var f;
  var r;
  if (e == null || q1.has(e)) return e;
  const n = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,
    { type: o, values: a } =
      (f = (r = n.exec(e)) == null ? void 0 : r.groups) != null ? f : {};
  if (!o || !a) return e;
  const i = o.includes("-gradient") ? o : `${o}-gradient`,
    [l, ...s] = a.split(",").map(Yk).filter(Boolean);
  if ((s == null ? void 0 : s.length) === 0) return e;
  const u = l in _f ? _f[l] : l;
  s.unshift(u);
  const d = s.map((c) => {
    if (Kk.has(c)) return c;
    const h = c.indexOf(" "),
      [m, g] = h !== -1 ? [c.substr(0, h), c.substr(h + 1)] : [c],
      S = J1(g) ? g : g && g.split(" "),
      p = `colors.${m}`,
      v = p in t.__cssMap ? t.__cssMap[p].varRef : m;
    return S ? [v, ...(Array.isArray(S) ? S : [S])].join(" ") : v;
  });
  return `${i}(${d.join(", ")})`;
}
var J1 = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  Qk = (e, t) => Xk(e, t != null ? t : {});
function Zk(e) {
  return /^var\(--.+\)$/.test(e);
}
var qk = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), "");
    return { unitless: !r, value: t, unit: r };
  },
  Pr = (e) => (t) => `${e}(${t})`,
  pe = {
    filter(e) {
      return e !== "auto" ? e : Vk;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : jk;
    },
    ring(e) {
      return Wk(pe.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? Fk() : e === "auto-gpu" ? Ok() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = qk(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const r = { left: "right", right: "left" };
      return t.direction === "rtl" ? r[e] : e;
    },
    degree(e) {
      if (Zk(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: Qk,
    blur: Pr("blur"),
    opacity: Pr("opacity"),
    brightness: Pr("brightness"),
    contrast: Pr("contrast"),
    dropShadow: Pr("drop-shadow"),
    grayscale: Pr("grayscale"),
    hueRotate: Pr("hue-rotate"),
    invert: Pr("invert"),
    saturate: Pr("saturate"),
    sepia: Pr("sepia"),
    bgImage(e) {
      return e == null || J1(e) || q1.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var o;
      const { space: t, divide: r } = (o = Hk[e]) != null ? o : {},
        n = { flexDirection: e };
      return t && (n[t] = 1), r && (n[r] = 1), n;
    },
  },
  C = {
    borderWidths: hr("borderWidths"),
    borderStyles: hr("borderStyles"),
    colors: hr("colors"),
    borders: hr("borders"),
    radii: hr("radii", pe.px),
    space: hr("space", Wl(pe.vh, pe.px)),
    spaceT: hr("space", Wl(pe.vh, pe.px)),
    degreeT(e) {
      return { property: e, transform: pe.degree };
    },
    prop(e, t, r) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Oi({ scale: t, transform: r }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: hr("sizes", Wl(pe.vh, pe.px)),
    sizesT: hr("sizes", Wl(pe.vh, pe.fraction)),
    shadows: hr("shadows"),
    logical: Nk,
    blur: hr("blur", pe.blur),
  },
  ys = {
    background: C.colors("background"),
    backgroundColor: C.colors("backgroundColor"),
    backgroundImage: C.propT("backgroundImage", pe.bgImage),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: pe.bgClip },
    bgSize: C.prop("backgroundSize"),
    bgPosition: C.prop("backgroundPosition"),
    bg: C.colors("background"),
    bgColor: C.colors("backgroundColor"),
    bgPos: C.prop("backgroundPosition"),
    bgRepeat: C.prop("backgroundRepeat"),
    bgAttachment: C.prop("backgroundAttachment"),
    bgGradient: C.propT("backgroundImage", pe.gradient),
    bgClip: { transform: pe.bgClip },
  };
Object.assign(ys, { bgImage: ys.backgroundImage, bgImg: ys.backgroundImage });
var ve = {
  border: C.borders("border"),
  borderWidth: C.borderWidths("borderWidth"),
  borderStyle: C.borderStyles("borderStyle"),
  borderColor: C.colors("borderColor"),
  borderRadius: C.radii("borderRadius"),
  borderTop: C.borders("borderTop"),
  borderBlockStart: C.borders("borderBlockStart"),
  borderTopLeftRadius: C.radii("borderTopLeftRadius"),
  borderStartStartRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: C.radii("borderTopRightRadius"),
  borderStartEndRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: C.borders("borderRight"),
  borderInlineEnd: C.borders("borderInlineEnd"),
  borderBottom: C.borders("borderBottom"),
  borderBlockEnd: C.borders("borderBlockEnd"),
  borderBottomLeftRadius: C.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: C.radii("borderBottomRightRadius"),
  borderLeft: C.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: C.borders(["borderLeft", "borderRight"]),
  borderInline: C.borders("borderInline"),
  borderY: C.borders(["borderTop", "borderBottom"]),
  borderBlock: C.borders("borderBlock"),
  borderTopWidth: C.borderWidths("borderTopWidth"),
  borderBlockStartWidth: C.borderWidths("borderBlockStartWidth"),
  borderTopColor: C.colors("borderTopColor"),
  borderBlockStartColor: C.colors("borderBlockStartColor"),
  borderTopStyle: C.borderStyles("borderTopStyle"),
  borderBlockStartStyle: C.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: C.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: C.borderWidths("borderBlockEndWidth"),
  borderBottomColor: C.colors("borderBottomColor"),
  borderBlockEndColor: C.colors("borderBlockEndColor"),
  borderBottomStyle: C.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: C.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: C.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: C.borderWidths("borderInlineStartWidth"),
  borderLeftColor: C.colors("borderLeftColor"),
  borderInlineStartColor: C.colors("borderInlineStartColor"),
  borderLeftStyle: C.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: C.borderStyles("borderInlineStartStyle"),
  borderRightWidth: C.borderWidths("borderRightWidth"),
  borderInlineEndWidth: C.borderWidths("borderInlineEndWidth"),
  borderRightColor: C.colors("borderRightColor"),
  borderInlineEndColor: C.colors("borderInlineEndColor"),
  borderRightStyle: C.borderStyles("borderRightStyle"),
  borderInlineEndStyle: C.borderStyles("borderInlineEndStyle"),
  borderTopRadius: C.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: C.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: C.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: C.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(ve, {
  rounded: ve.borderRadius,
  roundedTop: ve.borderTopRadius,
  roundedTopLeft: ve.borderTopLeftRadius,
  roundedTopRight: ve.borderTopRightRadius,
  roundedTopStart: ve.borderStartStartRadius,
  roundedTopEnd: ve.borderStartEndRadius,
  roundedBottom: ve.borderBottomRadius,
  roundedBottomLeft: ve.borderBottomLeftRadius,
  roundedBottomRight: ve.borderBottomRightRadius,
  roundedBottomStart: ve.borderEndStartRadius,
  roundedBottomEnd: ve.borderEndEndRadius,
  roundedLeft: ve.borderLeftRadius,
  roundedRight: ve.borderRightRadius,
  roundedStart: ve.borderInlineStartRadius,
  roundedEnd: ve.borderInlineEndRadius,
  borderStart: ve.borderInlineStart,
  borderEnd: ve.borderInlineEnd,
  borderTopStartRadius: ve.borderStartStartRadius,
  borderTopEndRadius: ve.borderStartEndRadius,
  borderBottomStartRadius: ve.borderEndStartRadius,
  borderBottomEndRadius: ve.borderEndEndRadius,
  borderStartRadius: ve.borderInlineStartRadius,
  borderEndRadius: ve.borderInlineEndRadius,
  borderStartWidth: ve.borderInlineStartWidth,
  borderEndWidth: ve.borderInlineEndWidth,
  borderStartColor: ve.borderInlineStartColor,
  borderEndColor: ve.borderInlineEndColor,
  borderStartStyle: ve.borderInlineStartStyle,
  borderEndStyle: ve.borderInlineEndStyle,
});
var Jk = {
    color: C.colors("color"),
    textColor: C.colors("color"),
    fill: C.colors("fill"),
    stroke: C.colors("stroke"),
  },
  Pf = {
    boxShadow: C.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: C.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: C.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Pf, { shadow: Pf.boxShadow });
var eE = {
    filter: { transform: pe.filter },
    blur: C.blur("--chakra-blur"),
    brightness: C.propT("--chakra-brightness", pe.brightness),
    contrast: C.propT("--chakra-contrast", pe.contrast),
    hueRotate: C.degreeT("--chakra-hue-rotate"),
    invert: C.propT("--chakra-invert", pe.invert),
    saturate: C.propT("--chakra-saturate", pe.saturate),
    dropShadow: C.propT("--chakra-drop-shadow", pe.dropShadow),
    backdropFilter: { transform: pe.backdropFilter },
    backdropBlur: C.blur("--chakra-backdrop-blur"),
    backdropBrightness: C.propT("--chakra-backdrop-brightness", pe.brightness),
    backdropContrast: C.propT("--chakra-backdrop-contrast", pe.contrast),
    backdropHueRotate: C.degreeT("--chakra-backdrop-hue-rotate"),
    backdropInvert: C.propT("--chakra-backdrop-invert", pe.invert),
    backdropSaturate: C.propT("--chakra-backdrop-saturate", pe.saturate),
  },
  tu = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: pe.flexDirection },
    experimental_spaceX: {
      static: Uk,
      transform: Oi({
        scale: "space",
        transform: (e) => (e !== null ? { "--chakra-space-x": e } : null),
      }),
    },
    experimental_spaceY: {
      static: Gk,
      transform: Oi({
        scale: "space",
        transform: (e) => (e != null ? { "--chakra-space-y": e } : null),
      }),
    },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: C.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: C.space("gap"),
    rowGap: C.space("rowGap"),
    columnGap: C.space("columnGap"),
  };
Object.assign(tu, { flexDir: tu.flexDirection });
var eb = {
    gridGap: C.space("gridGap"),
    gridColumnGap: C.space("gridColumnGap"),
    gridRowGap: C.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  tE = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: pe.outline },
    outlineOffset: !0,
    outlineColor: C.colors("outlineColor"),
  },
  nr = {
    width: C.sizesT("width"),
    inlineSize: C.sizesT("inlineSize"),
    height: C.sizes("height"),
    blockSize: C.sizes("blockSize"),
    boxSize: C.sizes(["width", "height"]),
    minWidth: C.sizes("minWidth"),
    minInlineSize: C.sizes("minInlineSize"),
    minHeight: C.sizes("minHeight"),
    minBlockSize: C.sizes("minBlockSize"),
    maxWidth: C.sizes("maxWidth"),
    maxInlineSize: C.sizes("maxInlineSize"),
    maxHeight: C.sizes("maxHeight"),
    maxBlockSize: C.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: C.propT("float", pe.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(nr, {
  w: nr.width,
  h: nr.height,
  minW: nr.minWidth,
  maxW: nr.maxWidth,
  minH: nr.minHeight,
  maxH: nr.maxHeight,
  overscroll: nr.overscrollBehavior,
  overscrollX: nr.overscrollBehaviorX,
  overscrollY: nr.overscrollBehaviorY,
});
var rE = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: C.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: C.prop("listStyleImage"),
};
function nE(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
  return e === void 0 ? r : e;
}
var oE = (e) => {
    const t = new WeakMap();
    return (n, o, a, i) => {
      if (typeof n > "u") return e(n, o, a);
      t.has(n) || t.set(n, new Map());
      const l = t.get(n);
      if (l.has(o)) return l.get(o);
      const s = e(n, o, a, i);
      return l.set(o, s), s;
    };
  },
  aE = oE(nE),
  iE = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  lE = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  qc = (e, t, r) => {
    const n = {},
      o = aE(e, t, {});
    for (const a in o) (a in r && r[a] != null) || (n[a] = o[a]);
    return n;
  },
  sE = {
    srOnly: {
      transform(e) {
        return e === !0 ? iE : e === "focusable" ? lE : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => qc(t, `layerStyles.${e}`, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => qc(t, `textStyles.${e}`, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => qc(t, e, r) },
  },
  di = {
    position: !0,
    pos: C.prop("position"),
    zIndex: C.prop("zIndex", "zIndices"),
    inset: C.spaceT("inset"),
    insetX: C.spaceT(["left", "right"]),
    insetInline: C.spaceT("insetInline"),
    insetY: C.spaceT(["top", "bottom"]),
    insetBlock: C.spaceT("insetBlock"),
    top: C.spaceT("top"),
    insetBlockStart: C.spaceT("insetBlockStart"),
    bottom: C.spaceT("bottom"),
    insetBlockEnd: C.spaceT("insetBlockEnd"),
    left: C.spaceT("left"),
    insetInlineStart: C.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: C.spaceT("right"),
    insetInlineEnd: C.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(di, {
  insetStart: di.insetInlineStart,
  insetEnd: di.insetInlineEnd,
});
var uE = {
    ring: { transform: pe.ring },
    ringColor: C.colors("--chakra-ring-color"),
    ringOffset: C.prop("--chakra-ring-offset-width"),
    ringOffsetColor: C.colors("--chakra-ring-offset-color"),
    ringInset: C.prop("--chakra-ring-inset"),
  },
  Me = {
    margin: C.spaceT("margin"),
    marginTop: C.spaceT("marginTop"),
    marginBlockStart: C.spaceT("marginBlockStart"),
    marginRight: C.spaceT("marginRight"),
    marginInlineEnd: C.spaceT("marginInlineEnd"),
    marginBottom: C.spaceT("marginBottom"),
    marginBlockEnd: C.spaceT("marginBlockEnd"),
    marginLeft: C.spaceT("marginLeft"),
    marginInlineStart: C.spaceT("marginInlineStart"),
    marginX: C.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: C.spaceT("marginInline"),
    marginY: C.spaceT(["marginTop", "marginBottom"]),
    marginBlock: C.spaceT("marginBlock"),
    padding: C.space("padding"),
    paddingTop: C.space("paddingTop"),
    paddingBlockStart: C.space("paddingBlockStart"),
    paddingRight: C.space("paddingRight"),
    paddingBottom: C.space("paddingBottom"),
    paddingBlockEnd: C.space("paddingBlockEnd"),
    paddingLeft: C.space("paddingLeft"),
    paddingInlineStart: C.space("paddingInlineStart"),
    paddingInlineEnd: C.space("paddingInlineEnd"),
    paddingX: C.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: C.space("paddingInline"),
    paddingY: C.space(["paddingTop", "paddingBottom"]),
    paddingBlock: C.space("paddingBlock"),
  };
Object.assign(Me, {
  m: Me.margin,
  mt: Me.marginTop,
  mr: Me.marginRight,
  me: Me.marginInlineEnd,
  marginEnd: Me.marginInlineEnd,
  mb: Me.marginBottom,
  ml: Me.marginLeft,
  ms: Me.marginInlineStart,
  marginStart: Me.marginInlineStart,
  mx: Me.marginX,
  my: Me.marginY,
  p: Me.padding,
  pt: Me.paddingTop,
  py: Me.paddingY,
  px: Me.paddingX,
  pb: Me.paddingBottom,
  pl: Me.paddingLeft,
  ps: Me.paddingInlineStart,
  paddingStart: Me.paddingInlineStart,
  pr: Me.paddingRight,
  pe: Me.paddingInlineEnd,
  paddingEnd: Me.paddingInlineEnd,
});
var cE = {
    textDecorationColor: C.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: C.shadows("textShadow"),
  },
  dE = {
    clipPath: !0,
    transform: C.propT("transform", pe.transform),
    transformOrigin: !0,
    translateX: C.spaceT("--chakra-translate-x"),
    translateY: C.spaceT("--chakra-translate-y"),
    skewX: C.degreeT("--chakra-skew-x"),
    skewY: C.degreeT("--chakra-skew-y"),
    scaleX: C.prop("--chakra-scale-x"),
    scaleY: C.prop("--chakra-scale-y"),
    scale: C.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: C.degreeT("--chakra-rotate"),
  },
  fE = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: C.prop("transitionDuration", "transition.duration"),
    transitionProperty: C.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: C.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  pE = {
    fontFamily: C.prop("fontFamily", "fonts"),
    fontSize: C.prop("fontSize", "fontSizes", pe.px),
    fontWeight: C.prop("fontWeight", "fontWeights"),
    lineHeight: C.prop("lineHeight", "lineHeights"),
    letterSpacing: C.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  hE = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: C.spaceT("scrollMargin"),
    scrollMarginTop: C.spaceT("scrollMarginTop"),
    scrollMarginBottom: C.spaceT("scrollMarginBottom"),
    scrollMarginLeft: C.spaceT("scrollMarginLeft"),
    scrollMarginRight: C.spaceT("scrollMarginRight"),
    scrollMarginX: C.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: C.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: C.spaceT("scrollPadding"),
    scrollPaddingTop: C.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: C.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: C.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: C.spaceT("scrollPaddingRight"),
    scrollPaddingX: C.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: C.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function tb(e) {
  return kr(e) && e.reference ? e.reference : String(e);
}
var Nu = (e, ...t) => t.map(tb).join(` ${e} `).replace(/calc/g, ""),
  ym = (...e) => `calc(${Nu("+", ...e)})`,
  bm = (...e) => `calc(${Nu("-", ...e)})`,
  Rf = (...e) => `calc(${Nu("*", ...e)})`,
  Sm = (...e) => `calc(${Nu("/", ...e)})`,
  xm = (e) => {
    const t = tb(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Rf(t, -1);
  },
  qn = Object.assign(
    (e) => ({
      add: (...t) => qn(ym(e, ...t)),
      subtract: (...t) => qn(bm(e, ...t)),
      multiply: (...t) => qn(Rf(e, ...t)),
      divide: (...t) => qn(Sm(e, ...t)),
      negate: () => qn(xm(e)),
      toString: () => e.toString(),
    }),
    { add: ym, subtract: bm, multiply: Rf, divide: Sm, negate: xm }
  );
function vE(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function mE(e) {
  const t = vE(e.toString());
  return yE(gE(t));
}
function gE(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function yE(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function bE(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function SE(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function xE(e, t = "") {
  return mE(`--${bE(e, t)}`);
}
function _e(e, t, r) {
  const n = xE(e, r);
  return { variable: n, reference: SE(n, t) };
}
function wE(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function CE(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Af(e) {
  if (e == null) return e;
  const { unitless: t } = CE(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var rb = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  lh = (e) => Object.fromEntries(Object.entries(e).sort(rb));
function wm(e) {
  const t = lh(e);
  return Object.assign(Object.values(t), t);
}
function kE(e) {
  const t = Object.keys(lh(e));
  return new Set(t);
}
function Cm(e) {
  var r;
  if (!e) return e;
  e = (r = Af(e)) != null ? r : e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return typeof e == "number"
    ? `${e + t}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + t}`);
}
function Ja(e, t) {
  const r = ["@media screen"];
  return (
    e && r.push("and", `(min-width: ${Af(e)})`),
    t && r.push("and", `(max-width: ${Af(t)})`),
    r.join(" ")
  );
}
function EE(e) {
  var a;
  if (!e) return null;
  e.base = (a = e.base) != null ? a : "0px";
  const t = wm(e),
    r = Object.entries(e)
      .sort(rb)
      .map(([i, l], s, u) => {
        var f;
        let [, d] = (f = u[s + 1]) != null ? f : [];
        return (
          (d = parseFloat(d) > 0 ? Cm(d) : void 0),
          {
            _minW: Cm(l),
            breakpoint: i,
            minW: l,
            maxW: d,
            maxWQuery: Ja(null, d),
            minWQuery: Ja(l),
            minMaxQuery: Ja(l, d),
          }
        );
      }),
    n = kE(e),
    o = Array.from(n.values());
  return {
    keys: n,
    normalized: t,
    isResponsive(i) {
      const l = Object.keys(i);
      return l.length > 0 && l.every((s) => n.has(s));
    },
    asObject: lh(e),
    asArray: wm(e),
    details: r,
    media: [null, ...t.map((i) => Ja(i)).slice(1)],
    toArrayValue(i) {
      if (!kr(i)) throw new Error("toArrayValue: value must be an object");
      const l = o.map((s) => {
        var u;
        return (u = i[s]) != null ? u : null;
      });
      for (; wE(l) === null; ) l.pop();
      return l;
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce((l, s, u) => {
        const d = o[u];
        return d != null && s != null && (l[d] = s), l;
      }, {});
    },
  };
}
var st = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  mn = (e) => nb((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Hr = (e) => nb((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  nb = (e, ...t) => t.map(e).join(", "),
  Fu = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: mn(st.hover),
    _peerHover: Hr(st.hover),
    _groupFocus: mn(st.focus),
    _peerFocus: Hr(st.focus),
    _groupFocusVisible: mn(st.focusVisible),
    _peerFocusVisible: Hr(st.focusVisible),
    _groupActive: mn(st.active),
    _peerActive: Hr(st.active),
    _groupDisabled: mn(st.disabled),
    _peerDisabled: Hr(st.disabled),
    _groupInvalid: mn(st.invalid),
    _peerInvalid: Hr(st.invalid),
    _groupChecked: mn(st.checked),
    _peerChecked: Hr(st.checked),
    _groupFocusWithin: mn(st.focusWithin),
    _peerFocusWithin: Hr(st.focusWithin),
    _peerPlaceholderShown: Hr(st.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  },
  TE = Object.keys(Fu);
function km(e, t) {
  return _e(String(e).replace(/\./g, "-"), void 0, t);
}
function _E(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: l } = a,
      { variable: s, reference: u } = km(
        o,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!i) {
      if (o.startsWith("space")) {
        const c = o.split("."),
          [h, ...m] = c,
          g = `${h}.-${m.join(".")}`,
          S = qn.negate(l),
          p = qn.negate(u);
        n[g] = { value: S, var: s, varRef: p };
      }
      (r[s] = l), (n[o] = { value: l, var: s, varRef: u });
      continue;
    }
    const d = (c) => {
        const m = [String(o).split(".")[0], c].join(".");
        if (!e[m]) return c;
        const { reference: S } = km(m, t == null ? void 0 : t.cssVarPrefix);
        return S;
      },
      f = kr(l) ? l : { default: l };
    (r = Dr(
      r,
      Object.entries(f).reduce((c, [h, m]) => {
        var v;
        var g;
        const S = d(m);
        if (h === "default") return (c[s] = S), c;
        const p = (v = (g = Fu) == null ? void 0 : g[h]) != null ? v : h;
        return (c[p] = { [s]: S }), c;
      }, {})
    )),
      (n[o] = { value: u, var: s, varRef: u });
  }
  return { cssVars: r, cssMap: n };
}
function PE(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
function RE(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
var AE = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
];
function ME(e) {
  return RE(e, AE);
}
function LE(e) {
  return e.semanticTokens;
}
function zE(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
function DE({ tokens: e, semanticTokens: t }) {
  var o, a;
  const r = Object.entries((o = Mf(e)) != null ? o : {}).map(([i, l]) => [
      i,
      { isSemantic: !1, value: l },
    ]),
    n = Object.entries((a = Mf(t, 1)) != null ? a : {}).map(([i, l]) => [
      i,
      { isSemantic: !0, value: l },
    ]);
  return Object.fromEntries([...r, ...n]);
}
function Mf(e, t = 1 / 0) {
  return (!kr(e) && !Array.isArray(e)) || !t
    ? e
    : Object.entries(e).reduce(
        (r, [n, o]) => (
          kr(o) || Array.isArray(o)
            ? Object.entries(Mf(o, t - 1)).forEach(([a, i]) => {
                r[`${n}.${a}`] = i;
              })
            : (r[n] = o),
          r
        ),
        {}
      );
}
function BE(e) {
  var t;
  const r = zE(e),
    n = ME(r),
    o = LE(r),
    a = DE({ tokens: n, semanticTokens: o }),
    i = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: l, cssVars: s } = _E(a, { cssVarPrefix: i });
  return (
    Object.assign(r, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...s,
      },
      __cssMap: l,
      __breakpoints: EE(r.breakpoints),
    }),
    r
  );
}
var sh = Dr(
  {},
  ys,
  ve,
  Jk,
  tu,
  nr,
  eE,
  uE,
  tE,
  eb,
  sE,
  di,
  Pf,
  Me,
  hE,
  pE,
  cE,
  dE,
  rE,
  fE
);
Object.assign({}, Me, nr, tu, eb, di);
var IE = [...Object.keys(sh), ...TE],
  $E = { ...sh, ...Fu },
  NE = (e) => e in $E,
  FE = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      a = {};
    for (const i in e) {
      let l = no(e[i], t);
      if (l == null) continue;
      if (((l = kr(l) && r(l) ? n(l) : l), !Array.isArray(l))) {
        a[i] = l;
        continue;
      }
      const s = l.slice(0, o.length).length;
      for (let u = 0; u < s; u += 1) {
        const d = o == null ? void 0 : o[u];
        if (!d) {
          a[i] = l[u];
          continue;
        }
        (a[d] = a[d] || {}), l[u] != null && (a[d][i] = l[u]);
      }
    }
    return a;
  };
function OE(e) {
  const t = [];
  let r = "",
    n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "("
      ? ((n = !0), (r += a))
      : a === ")"
      ? ((n = !1), (r += a))
      : a === "," && !n
      ? (t.push(r), (r = ""))
      : (r += a);
  }
  return (r = r.trim()), r && t.push(r), t;
}
function VE(e) {
  return /^var\(--.+\)$/.test(e);
}
var jE = (e, t) => e.startsWith("--") && typeof t == "string" && !VE(t),
  WE = (e, t) => {
    var i, l;
    if (t == null) return t;
    const r = (s) => {
        var u, d;
        return (d = (u = e.__cssMap) == null ? void 0 : u[s]) == null
          ? void 0
          : d.varRef;
      },
      n = (s) => {
        var u;
        return (u = r(s)) != null ? u : s;
      },
      [o, a] = OE(t);
    return (t = (l = (i = r(o)) != null ? i : n(a)) != null ? l : n(t)), t;
  };
function HE(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (a, i = !1) => {
      var f, c;
      var l;
      const s = no(a, n),
        u = FE(s)(n);
      let d = {};
      for (let h in u) {
        const m = u[h];
        let g = no(m, n);
        h in r && (h = r[h]), jE(h, g) && (g = WE(n, g));
        let S = t[h];
        if ((S === !0 && (S = { property: h }), kr(g))) {
          (d[h] = (f = d[h]) != null ? f : {}), (d[h] = Dr({}, d[h], o(g, !0)));
          continue;
        }
        let p =
          (c =
            (l = S == null ? void 0 : S.transform) == null
              ? void 0
              : l.call(S, g, n, s)) != null
            ? c
            : g;
        p = S != null && S.processResult ? o(p, !0) : p;
        const v = no(S == null ? void 0 : S.property, n);
        if (!i && (S == null ? void 0 : S.static)) {
          const b = no(S.static, n);
          d = Dr({}, d, b);
        }
        if (v && Array.isArray(v)) {
          for (const b of v) d[b] = p;
          continue;
        }
        if (v) {
          v === "&" && kr(p) ? (d = Dr({}, d, p)) : (d[v] = p);
          continue;
        }
        if (kr(p)) {
          d = Dr({}, d, p);
          continue;
        }
        d[h] = p;
      }
      return d;
    };
  return o;
}
var ob = (e) => (t) => HE({ theme: t, pseudos: Fu, configs: sh })(e);
function ze(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function UE(e, t) {
  if (Array.isArray(e)) return e;
  if (kr(e)) return t(e);
  if (e != null) return [e];
}
function GE(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r;
  return -1;
}
function KE(e) {
  const t = e.__breakpoints;
  return function (n, o, a, i) {
    var l, s;
    if (!t) return;
    const u = {},
      d = UE(a, t.toArrayValue);
    if (!d) return u;
    const f = d.length,
      c = f === 1,
      h = !!n.parts;
    for (let m = 0; m < f; m++) {
      const g = t.details[m],
        S = t.details[GE(d, m)],
        p = Ja(g.minW, S == null ? void 0 : S._minW),
        v = no((l = n[o]) == null ? void 0 : l[d[m]], i);
      if (!!v) {
        if (h) {
          (s = n.parts) == null ||
            s.forEach((b) => {
              Dr(u, { [b]: c ? v[b] : { [p]: v[b] } });
            });
          continue;
        }
        if (!h) {
          c ? Dr(u, v) : (u[p] = v);
          continue;
        }
        u[p] = v;
      }
    }
    return u;
  };
}
function YE(e) {
  return (t) => {
    var i;
    const { variant: r, size: n, theme: o } = t,
      a = KE(o);
    return Dr(
      {},
      no((i = e.baseStyle) != null ? i : {}, t),
      a(e, "sizes", n, t),
      a(e, "variants", r, t)
    );
  };
}
function Ot(e) {
  return PE(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function XE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function QE(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var ab = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var a;
        n.tags.length === 0
          ? n.insertionPoint
            ? (a = n.insertionPoint.nextSibling)
            : n.prepend
            ? (a = n.container.firstChild)
            : (a = n.before)
          : (a = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, a),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(QE(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = XE(o);
          try {
            a.insertRule(n, a.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  gt = "-ms-",
  ru = "-moz-",
  me = "-webkit-",
  ib = "comm",
  uh = "rule",
  ch = "decl",
  ZE = "@import",
  lb = "@keyframes",
  qE = Math.abs,
  Ou = String.fromCharCode,
  JE = Object.assign;
function eT(e, t) {
  return dt(e, 0) ^ 45
    ? (((((((t << 2) ^ dt(e, 0)) << 2) ^ dt(e, 1)) << 2) ^ dt(e, 2)) << 2) ^
        dt(e, 3)
    : 0;
}
function sb(e) {
  return e.trim();
}
function tT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, r) {
  return e.replace(t, r);
}
function Lf(e, t) {
  return e.indexOf(t);
}
function dt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vi(e, t, r) {
  return e.slice(t, r);
}
function Mr(e) {
  return e.length;
}
function dh(e) {
  return e.length;
}
function Hl(e, t) {
  return t.push(e), e;
}
function rT(e, t) {
  return e.map(t).join("");
}
var Vu = 1,
  ba = 1,
  ub = 0,
  Nt = 0,
  Xe = 0,
  Ta = "";
function ju(e, t, r, n, o, a, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: a,
    line: Vu,
    column: ba,
    length: i,
    return: "",
  };
}
function Wa(e, t) {
  return JE(ju("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function nT() {
  return Xe;
}
function oT() {
  return (
    (Xe = Nt > 0 ? dt(Ta, --Nt) : 0), ba--, Xe === 10 && ((ba = 1), Vu--), Xe
  );
}
function Kt() {
  return (
    (Xe = Nt < ub ? dt(Ta, Nt++) : 0), ba++, Xe === 10 && ((ba = 1), Vu++), Xe
  );
}
function Fr() {
  return dt(Ta, Nt);
}
function bs() {
  return Nt;
}
function ul(e, t) {
  return Vi(Ta, e, t);
}
function ji(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function cb(e) {
  return (Vu = ba = 1), (ub = Mr((Ta = e))), (Nt = 0), [];
}
function db(e) {
  return (Ta = ""), e;
}
function Ss(e) {
  return sb(ul(Nt - 1, zf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function aT(e) {
  for (; (Xe = Fr()) && Xe < 33; ) Kt();
  return ji(e) > 2 || ji(Xe) > 3 ? "" : " ";
}
function iT(e, t) {
  for (
    ;
    --t &&
    Kt() &&
    !(Xe < 48 || Xe > 102 || (Xe > 57 && Xe < 65) || (Xe > 70 && Xe < 97));

  );
  return ul(e, bs() + (t < 6 && Fr() == 32 && Kt() == 32));
}
function zf(e) {
  for (; Kt(); )
    switch (Xe) {
      case e:
        return Nt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && zf(Xe);
        break;
      case 40:
        e === 41 && zf(e);
        break;
      case 92:
        Kt();
        break;
    }
  return Nt;
}
function lT(e, t) {
  for (; Kt() && e + Xe !== 47 + 10; )
    if (e + Xe === 42 + 42 && Fr() === 47) break;
  return "/*" + ul(t, Nt - 1) + "*" + Ou(e === 47 ? e : Kt());
}
function sT(e) {
  for (; !ji(Fr()); ) Kt();
  return ul(e, Nt);
}
function uT(e) {
  return db(xs("", null, null, null, [""], (e = cb(e)), 0, [0], e));
}
function xs(e, t, r, n, o, a, i, l, s) {
  for (
    var u = 0,
      d = 0,
      f = i,
      c = 0,
      h = 0,
      m = 0,
      g = 1,
      S = 1,
      p = 1,
      v = 0,
      b = "",
      x = o,
      E = a,
      T = n,
      _ = b;
    S;

  )
    switch (((m = v), (v = Kt()))) {
      case 40:
        if (m != 108 && dt(_, f - 1) == 58) {
          Lf((_ += be(Ss(v), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Ss(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += aT(m);
        break;
      case 92:
        _ += iT(bs() - 1, 7);
        continue;
      case 47:
        switch (Fr()) {
          case 42:
          case 47:
            Hl(cT(lT(Kt(), bs()), t, r), s);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        l[u++] = Mr(_) * p;
      case 125 * g:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            S = 0;
          case 59 + d:
            h > 0 &&
              Mr(_) - f &&
              Hl(
                h > 32
                  ? Tm(_ + ";", n, r, f - 1)
                  : Tm(be(_, " ", "") + ";", n, r, f - 2),
                s
              );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (Hl((T = Em(_, t, r, u, d, o, l, b, (x = []), (E = []), f)), a),
              v === 123)
            )
              if (d === 0) xs(_, t, T, T, x, a, f, l, E);
              else
                switch (c === 99 && dt(_, 3) === 110 ? 100 : c) {
                  case 100:
                  case 109:
                  case 115:
                    xs(
                      e,
                      T,
                      T,
                      n && Hl(Em(e, T, T, 0, 0, o, l, b, o, (x = []), f), E),
                      o,
                      E,
                      f,
                      l,
                      n ? x : E
                    );
                    break;
                  default:
                    xs(_, T, T, T, [""], E, 0, l, E);
                }
        }
        (u = d = h = 0), (g = p = 1), (b = _ = ""), (f = i);
        break;
      case 58:
        (f = 1 + Mr(_)), (h = m);
      default:
        if (g < 1) {
          if (v == 123) --g;
          else if (v == 125 && g++ == 0 && oT() == 125) continue;
        }
        switch (((_ += Ou(v)), v * g)) {
          case 38:
            p = d > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (l[u++] = (Mr(_) - 1) * p), (p = 1);
            break;
          case 64:
            Fr() === 45 && (_ += Ss(Kt())),
              (c = Fr()),
              (d = f = Mr((b = _ += sT(bs())))),
              v++;
            break;
          case 45:
            m === 45 && Mr(_) == 2 && (g = 0);
        }
    }
  return a;
}
function Em(e, t, r, n, o, a, i, l, s, u, d) {
  for (
    var f = o - 1, c = o === 0 ? a : [""], h = dh(c), m = 0, g = 0, S = 0;
    m < n;
    ++m
  )
    for (var p = 0, v = Vi(e, f + 1, (f = qE((g = i[m])))), b = e; p < h; ++p)
      (b = sb(g > 0 ? c[p] + " " + v : be(v, /&\f/g, c[p]))) && (s[S++] = b);
  return ju(e, t, r, o === 0 ? uh : l, s, u, d);
}
function cT(e, t, r) {
  return ju(e, t, r, ib, Ou(nT()), Vi(e, 2, -2), 0);
}
function Tm(e, t, r, n) {
  return ju(e, t, r, ch, Vi(e, 0, n), Vi(e, n + 1, -1), n);
}
function ea(e, t) {
  for (var r = "", n = dh(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function dT(e, t, r, n) {
  switch (e.type) {
    case ZE:
    case ch:
      return (e.return = e.return || e.value);
    case ib:
      return "";
    case lb:
      return (e.return = e.value + "{" + ea(e.children, n) + "}");
    case uh:
      e.value = e.props.join(",");
  }
  return Mr((r = ea(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function fT(e) {
  var t = dh(e);
  return function (r, n, o, a) {
    for (var i = "", l = 0; l < t; l++) i += e[l](r, n, o, a) || "";
    return i;
  };
}
function pT(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function fb(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var hT = function (t, r, n) {
    for (
      var o = 0, a = 0;
      (o = a), (a = Fr()), o === 38 && a === 12 && (r[n] = 1), !ji(a);

    )
      Kt();
    return ul(t, Nt);
  },
  vT = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (ji(o)) {
        case 0:
          o === 38 && Fr() === 12 && (r[n] = 1), (t[n] += hT(Nt - 1, r, n));
          break;
        case 2:
          t[n] += Ss(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = Fr() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Ou(o);
      }
    while ((o = Kt()));
    return t;
  },
  mT = function (t, r) {
    return db(vT(cb(t), r));
  },
  _m = new WeakMap(),
  gT = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !_m.get(n)) &&
        !o
      ) {
        _m.set(t, !0);
        for (
          var a = [], i = mT(r, a), l = n.props, s = 0, u = 0;
          s < i.length;
          s++
        )
          for (var d = 0; d < l.length; d++, u++)
            t.props[u] = a[s] ? i[s].replace(/&\f/g, l[d]) : l[d] + " " + i[s];
      }
    }
  },
  yT = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function pb(e, t) {
  switch (eT(e, t)) {
    case 5103:
      return me + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return me + e + ru + e + gt + e + e;
    case 6828:
    case 4268:
      return me + e + gt + e + e;
    case 6165:
      return me + e + gt + "flex-" + e + e;
    case 5187:
      return (
        me + e + be(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + gt + "flex-$1$2") + e
      );
    case 5443:
      return me + e + gt + "flex-item-" + be(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        me +
        e +
        gt +
        "flex-line-pack" +
        be(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return me + e + gt + be(e, "shrink", "negative") + e;
    case 5292:
      return me + e + gt + be(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        me +
        "box-" +
        be(e, "-grow", "") +
        me +
        e +
        gt +
        be(e, "grow", "positive") +
        e
      );
    case 4554:
      return me + be(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    case 6187:
      return (
        be(
          be(be(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
      return (
        be(
          be(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + gt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        me +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, me + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Mr(e) - 1 - t > 6)
        switch (dt(e, t + 1)) {
          case 109:
            if (dt(e, t + 4) !== 45) break;
          case 102:
            return (
              be(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  me +
                  "$2-$3$1" +
                  ru +
                  (dt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Lf(e, "stretch")
              ? pb(be(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (dt(e, t + 1) !== 115) break;
    case 6444:
      switch (dt(e, Mr(e) - 3 - (~Lf(e, "!important") && 10))) {
        case 107:
          return be(e, ":", ":" + me) + e;
        case 101:
          return (
            be(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                me +
                (dt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                me +
                "$2$3$1" +
                gt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (dt(e, t + 11)) {
        case 114:
          return me + e + gt + be(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return me + e + gt + be(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return me + e + gt + be(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return me + e + gt + e + e;
  }
  return e;
}
var bT = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case ch:
          t.return = pb(t.value, t.length);
          break;
        case lb:
          return ea([Wa(t, { value: be(t.value, "@", "@" + me) })], o);
        case uh:
          if (t.length)
            return rT(t.props, function (a) {
              switch (tT(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ea(
                    [Wa(t, { props: [be(a, /:(read-\w+)/, ":" + ru + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return ea(
                    [
                      Wa(t, {
                        props: [be(a, /:(plac\w+)/, ":" + me + "input-$1")],
                      }),
                      Wa(t, { props: [be(a, /:(plac\w+)/, ":" + ru + "$1")] }),
                      Wa(t, { props: [be(a, /:(plac\w+)/, gt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  ST = [bT],
  xT = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (g) {
        var S = g.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || ST,
      a = {},
      i,
      l = [];
    (i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (g) {
          for (
            var S = g.getAttribute("data-emotion").split(" "), p = 1;
            p < S.length;
            p++
          )
            a[S[p]] = !0;
          l.push(g);
        }
      );
    var s,
      u = [gT, yT];
    {
      var d,
        f = [
          dT,
          pT(function (g) {
            d.insert(g);
          }),
        ],
        c = fT(u.concat(o, f)),
        h = function (S) {
          return ea(uT(S), c);
        };
      s = function (S, p, v, b) {
        (d = v),
          h(S ? S + "{" + p.styles + "}" : p.styles),
          b && (m.inserted[p.name] = !0);
      };
    }
    var m = {
      key: r,
      sheet: new ab({
        key: r,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: s,
    };
    return m.sheet.hydrate(l), m;
  };
function nu() {
  return (
    (nu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    nu.apply(this, arguments)
  );
}
var Pm = function (t) {
    var r = new WeakMap();
    return function (n) {
      if (r.has(n)) return r.get(n);
      var o = t(n);
      return r.set(n, o), o;
    };
  },
  hb = { exports: {} },
  ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lt = typeof Symbol == "function" && Symbol.for,
  fh = lt ? Symbol.for("react.element") : 60103,
  ph = lt ? Symbol.for("react.portal") : 60106,
  Wu = lt ? Symbol.for("react.fragment") : 60107,
  Hu = lt ? Symbol.for("react.strict_mode") : 60108,
  Uu = lt ? Symbol.for("react.profiler") : 60114,
  Gu = lt ? Symbol.for("react.provider") : 60109,
  Ku = lt ? Symbol.for("react.context") : 60110,
  hh = lt ? Symbol.for("react.async_mode") : 60111,
  Yu = lt ? Symbol.for("react.concurrent_mode") : 60111,
  Xu = lt ? Symbol.for("react.forward_ref") : 60112,
  Qu = lt ? Symbol.for("react.suspense") : 60113,
  wT = lt ? Symbol.for("react.suspense_list") : 60120,
  Zu = lt ? Symbol.for("react.memo") : 60115,
  qu = lt ? Symbol.for("react.lazy") : 60116,
  CT = lt ? Symbol.for("react.block") : 60121,
  kT = lt ? Symbol.for("react.fundamental") : 60117,
  ET = lt ? Symbol.for("react.responder") : 60118,
  TT = lt ? Symbol.for("react.scope") : 60119;
function qt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fh:
        switch (((e = e.type), e)) {
          case hh:
          case Yu:
          case Wu:
          case Uu:
          case Hu:
          case Qu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ku:
              case Xu:
              case qu:
              case Zu:
              case Gu:
                return e;
              default:
                return t;
            }
        }
      case ph:
        return t;
    }
  }
}
function vb(e) {
  return qt(e) === Yu;
}
ke.AsyncMode = hh;
ke.ConcurrentMode = Yu;
ke.ContextConsumer = Ku;
ke.ContextProvider = Gu;
ke.Element = fh;
ke.ForwardRef = Xu;
ke.Fragment = Wu;
ke.Lazy = qu;
ke.Memo = Zu;
ke.Portal = ph;
ke.Profiler = Uu;
ke.StrictMode = Hu;
ke.Suspense = Qu;
ke.isAsyncMode = function (e) {
  return vb(e) || qt(e) === hh;
};
ke.isConcurrentMode = vb;
ke.isContextConsumer = function (e) {
  return qt(e) === Ku;
};
ke.isContextProvider = function (e) {
  return qt(e) === Gu;
};
ke.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === fh;
};
ke.isForwardRef = function (e) {
  return qt(e) === Xu;
};
ke.isFragment = function (e) {
  return qt(e) === Wu;
};
ke.isLazy = function (e) {
  return qt(e) === qu;
};
ke.isMemo = function (e) {
  return qt(e) === Zu;
};
ke.isPortal = function (e) {
  return qt(e) === ph;
};
ke.isProfiler = function (e) {
  return qt(e) === Uu;
};
ke.isStrictMode = function (e) {
  return qt(e) === Hu;
};
ke.isSuspense = function (e) {
  return qt(e) === Qu;
};
ke.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wu ||
    e === Yu ||
    e === Uu ||
    e === Hu ||
    e === Qu ||
    e === wT ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === qu ||
        e.$$typeof === Zu ||
        e.$$typeof === Gu ||
        e.$$typeof === Ku ||
        e.$$typeof === Xu ||
        e.$$typeof === kT ||
        e.$$typeof === ET ||
        e.$$typeof === TT ||
        e.$$typeof === CT))
  );
};
ke.typeOf = qt;
(function (e) {
  e.exports = ke;
})(hb);
var mb = hb.exports,
  _T = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  PT = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  gb = {};
gb[mb.ForwardRef] = _T;
gb[mb.Memo] = PT;
var RT = !0;
function AT(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var MT = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || RT === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  yb = function (t, r, n) {
    MT(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do t.insert(r === a ? "." + o : "", a, t.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function LT(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var zT = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  DT = /[A-Z]|^ms/g,
  BT = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  bb = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Rm = function (t) {
    return t != null && typeof t != "boolean";
  },
  Jc = fb(function (e) {
    return bb(e) ? e : e.replace(DT, "-$&").toLowerCase();
  }),
  Am = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(BT, function (n, o, a) {
            return (Lr = { name: o, styles: a, next: Lr }), o;
          });
    }
    return zT[t] !== 1 && !bb(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function Wi(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Lr = { name: r.name, styles: r.styles, next: Lr }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Lr = { name: n.name, styles: n.styles, next: Lr }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return IT(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = Lr,
          i = r(e);
        return (Lr = a), Wi(e, t, i);
      }
      break;
    }
  }
  if (t == null) return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function IT(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Wi(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0
          ? (n += a + "{" + t[i] + "}")
          : Rm(i) && (n += Jc(a) + ":" + Am(a, i) + ";");
      else if (
        Array.isArray(i) &&
        typeof i[0] == "string" &&
        (t == null || t[i[0]] === void 0)
      )
        for (var l = 0; l < i.length; l++)
          Rm(i[l]) && (n += Jc(a) + ":" + Am(a, i[l]) + ";");
      else {
        var s = Wi(e, t, i);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Jc(a) + ":" + s + ";";
            break;
          }
          default:
            n += a + "{" + s + "}";
        }
      }
    }
  return n;
}
var Mm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Lr,
  vh = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      a = "";
    Lr = void 0;
    var i = t[0];
    i == null || i.raw === void 0
      ? ((o = !1), (a += Wi(n, r, i)))
      : (a += i[0]);
    for (var l = 1; l < t.length; l++) (a += Wi(n, r, t[l])), o && (a += i[l]);
    Mm.lastIndex = 0;
    for (var s = "", u; (u = Mm.exec(a)) !== null; ) s += "-" + u[1];
    var d = LT(a) + s;
    return { name: d, styles: a, next: Lr };
  },
  Sb = k.exports.createContext(
    typeof HTMLElement < "u" ? xT({ key: "css" }) : null
  );
Sb.Provider;
var xb = function (t) {
    return k.exports.forwardRef(function (r, n) {
      var o = k.exports.useContext(Sb);
      return t(r, o, n);
    });
  },
  Hi = k.exports.createContext({}),
  $T = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return nu({}, t, r);
  },
  NT = Pm(function (e) {
    return Pm(function (t) {
      return $T(e, t);
    });
  }),
  FT = function (t) {
    var r = k.exports.useContext(Hi);
    return (
      t.theme !== r && (r = NT(r)(t.theme)),
      k.exports.createElement(Hi.Provider, { value: r }, t.children)
    );
  },
  Ju = xb(function (e, t) {
    var r = e.styles,
      n = vh([r], void 0, k.exports.useContext(Hi)),
      o = k.exports.useRef();
    return (
      k.exports.useLayoutEffect(
        function () {
          var a = t.key + "-global",
            i = new ab({
              key: a,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            l = !1,
            s = document.querySelector(
              'style[data-emotion="' + a + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            s !== null &&
              ((l = !0), s.setAttribute("data-emotion", a), i.hydrate([s])),
            (o.current = [i, l]),
            function () {
              i.flush();
            }
          );
        },
        [t]
      ),
      k.exports.useLayoutEffect(
        function () {
          var a = o.current,
            i = a[0],
            l = a[1];
          if (l) {
            a[1] = !1;
            return;
          }
          if ((n.next !== void 0 && yb(t, n.next, !0), i.tags.length)) {
            var s = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = s), i.flush();
          }
          t.insert("", n, i, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
function OT() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return vh(t);
}
var VT = function () {
    var t = OT.apply(void 0, arguments),
      r = "animation-" + t.name;
    return {
      name: r,
      styles: "@keyframes " + r + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  wb = (1 / 60) * 1e3,
  jT =
    typeof performance < "u"
      ? function () {
          return performance.now();
        }
      : function () {
          return Date.now();
        },
  Cb =
    typeof window < "u"
      ? function (e) {
          return window.requestAnimationFrame(e);
        }
      : function (e) {
          return setTimeout(function () {
            return e(jT());
          }, wb);
        };
function WT(e) {
  var t = [],
    r = [],
    n = 0,
    o = !1,
    a = new WeakSet(),
    i = {
      schedule: function (l, s, u) {
        s === void 0 && (s = !1), u === void 0 && (u = !1);
        var d = u && o,
          f = d ? t : r;
        return (
          s && a.add(l),
          f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)),
          l
        );
      },
      cancel: function (l) {
        var s = r.indexOf(l);
        s !== -1 && r.splice(s, 1), a.delete(l);
      },
      process: function (l) {
        var s;
        if (
          ((o = !0),
          (s = [r, t]),
          (t = s[0]),
          (r = s[1]),
          (r.length = 0),
          (n = t.length),
          n)
        )
          for (var u = 0; u < n; u++) {
            var d = t[u];
            d(l), a.has(d) && (i.schedule(d), e());
          }
        o = !1;
      },
    };
  return i;
}
var HT = 40,
  Df = !0,
  Ui = !1,
  Bf = !1,
  ta = { delta: 0, timestamp: 0 },
  cl = ["read", "update", "preRender", "render", "postRender"],
  ec = cl.reduce(function (e, t) {
    return (
      (e[t] = WT(function () {
        return (Ui = !0);
      })),
      e
    );
  }, {}),
  Br = cl.reduce(function (e, t) {
    var r = ec[t];
    return (
      (e[t] = function (n, o, a) {
        return (
          o === void 0 && (o = !1),
          a === void 0 && (a = !1),
          Ui || GT(),
          r.schedule(n, o, a)
        );
      }),
      e
    );
  }, {}),
  fi = cl.reduce(function (e, t) {
    return (e[t] = ec[t].cancel), e;
  }, {}),
  Ho = cl.reduce(function (e, t) {
    return (
      (e[t] = function () {
        return ec[t].process(ta);
      }),
      e
    );
  }, {}),
  UT = function (e) {
    return ec[e].process(ta);
  },
  kb = function (e) {
    (Ui = !1),
      (ta.delta = Df ? wb : Math.max(Math.min(e - ta.timestamp, HT), 1)),
      (ta.timestamp = e),
      (Bf = !0),
      cl.forEach(UT),
      (Bf = !1),
      Ui && ((Df = !1), Cb(kb));
  },
  GT = function () {
    (Ui = !0), (Df = !0), Bf || Cb(kb);
  },
  ou = function () {
    return ta;
  };
function KT(e) {
  return typeof e == "function";
}
function YT(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
function XT(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
  return e === void 0 ? r : e;
}
var QT = (e) => {
    const t = new WeakMap();
    return (n, o, a, i) => {
      if (typeof n > "u") return e(n, o, a);
      t.has(n) || t.set(n, new Map());
      const l = t.get(n);
      if (l.has(o)) return l.get(o);
      const s = e(n, o, a, i);
      return l.set(o, s), s;
    };
  },
  Eb = QT(XT);
function Tb(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      const o = e[n];
      t(o, n, e) && (r[n] = o);
    }),
    r
  );
}
var _b = (e) => Tb(e, (t) => t != null);
function Pb(e, ...t) {
  return KT(e) ? e(...t) : e;
}
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function ZT(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: n,
    } = e,
    o = k.exports.createContext(void 0);
  o.displayName = n;
  function a() {
    var i;
    const l = k.exports.useContext(o);
    if (!l && t) {
      const s = new Error(r);
      throw (
        ((s.name = "ContextError"),
        (i = Error.captureStackTrace) == null || i.call(Error, s, a),
        s)
      );
    }
    return l;
  }
  return [o.Provider, a, o];
}
var qT =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  JT = fb(function (e) {
    return (
      qT.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  e_ = JT,
  t_ = function (t) {
    return t !== "theme";
  },
  Lm = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? e_ : t_;
  },
  zm = function (t, r, n) {
    var o;
    if (r) {
      var a = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && a
          ? function (i) {
              return t.__emotion_forwardProp(i) && a(i);
            }
          : a;
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
  },
  r_ = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      a,
      i;
    r !== void 0 && ((a = r.label), (i = r.target));
    var l = zm(t, r, n),
      s = l || Lm(o),
      u = !s("as");
    return function () {
      var d = arguments,
        f =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (a !== void 0 && f.push("label:" + a + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        f.push.apply(f, d);
      else {
        f.push(d[0][0]);
        for (var c = d.length, h = 1; h < c; h++) f.push(d[h], d[0][h]);
      }
      var m = xb(function (g, S, p) {
        var v = (u && g.as) || o,
          b = "",
          x = [],
          E = g;
        if (g.theme == null) {
          E = {};
          for (var T in g) E[T] = g[T];
          E.theme = k.exports.useContext(Hi);
        }
        typeof g.className == "string"
          ? (b = AT(S.registered, x, g.className))
          : g.className != null && (b = g.className + " ");
        var _ = vh(f.concat(x), S.registered, E);
        yb(S, _, typeof v == "string"),
          (b += S.key + "-" + _.name),
          i !== void 0 && (b += " " + i);
        var M = u && l === void 0 ? Lm(v) : s,
          I = {};
        for (var B in g) (u && B === "as") || (M(B) && (I[B] = g[B]));
        (I.className = b), (I.ref = p);
        var K = k.exports.createElement(v, I);
        return K;
      });
      return (
        (m.displayName =
          a !== void 0
            ? a
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = f),
        (m.__emotion_forwardProp = l),
        Object.defineProperty(m, "toString", {
          value: function () {
            return "." + i;
          },
        }),
        (m.withComponent = function (g, S) {
          return e(g, nu({}, r, S, { shouldForwardProp: zm(m, S, !0) })).apply(
            void 0,
            f
          );
        }),
        m
      );
    };
  },
  n_ = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  If = r_.bind();
n_.forEach(function (e) {
  If[e] = If(e);
});
function Se(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...d) {
    n();
    for (const f of d) t[f] = s(f);
    return Se(e, t);
  }
  function a(...d) {
    for (const f of d) f in t || (t[f] = s(f));
    return Se(e, t);
  }
  function i() {
    return Object.fromEntries(
      Object.entries(t).map(([f, c]) => [f, c.selector])
    );
  }
  function l() {
    return Object.fromEntries(
      Object.entries(t).map(([f, c]) => [f, c.className])
    );
  }
  function s(d) {
    const h = `chakra-${(["container", "root"].includes(d != null ? d : "")
      ? [e]
      : [e, d]
    )
      .filter(Boolean)
      .join("__")}`;
    return { className: h, selector: `.${h}`, toString: () => d };
  }
  return {
    parts: o,
    toPart: s,
    extend: a,
    selectors: i,
    classnames: l,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var o_ = Se("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  a_ = Se("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  i_ = Se("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  l_ = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var s_ = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var u_ = Se("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  c_ = Se("editable").parts("preview", "input", "textarea"),
  d_ = Se("form").parts("container", "requiredIndicator", "helperText"),
  f_ = Se("formError").parts("text", "icon"),
  p_ = Se("input").parts("addon", "field", "element"),
  h_ = Se("list").parts("container", "item", "icon"),
  v_ = Se("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "command", "divider"),
  m_ = Se("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  g_ = Se("numberinput").parts("root", "field", "stepperGroup", "stepper");
Se("pininput").parts("field");
var y_ = Se("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  b_ = Se("progress").parts("label", "filledTrack", "track"),
  S_ = Se("radio").parts("container", "control", "label"),
  x_ = Se("select").parts("field", "icon"),
  w_ = Se("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  C_ = Se("stat").parts("container", "label", "helpText", "number", "icon"),
  k_ = Se("switch").parts("container", "track", "thumb"),
  E_ = Se("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  T_ = Se("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  __ = Se("tag").parts("container", "label", "closeButton"),
  P_ = Se("card").parts("container", "header", "body", "footer");
function pt(e, t) {
  R_(e) && (e = "100%");
  var r = A_(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    r && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function Ul(e) {
  return Math.min(1, Math.max(0, e));
}
function R_(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function A_(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Rb(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Gl(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function oo(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function M_(e, t, r) {
  return { r: pt(e, 255) * 255, g: pt(t, 255) * 255, b: pt(r, 255) * 255 };
}
function Dm(e, t, r) {
  (e = pt(e, 255)), (t = pt(t, 255)), (r = pt(r, 255));
  var n = Math.max(e, t, r),
    o = Math.min(e, t, r),
    a = 0,
    i = 0,
    l = (n + o) / 2;
  if (n === o) (i = 0), (a = 0);
  else {
    var s = n - o;
    switch (((i = l > 0.5 ? s / (2 - n - o) : s / (n + o)), n)) {
      case e:
        a = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / s + 2;
        break;
      case r:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function ed(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * (6 * r)
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function L_(e, t, r) {
  var n, o, a;
  if (((e = pt(e, 360)), (t = pt(t, 100)), (r = pt(r, 100)), t === 0))
    (o = r), (a = r), (n = r);
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - i;
    (n = ed(l, i, e + 1 / 3)), (o = ed(l, i, e)), (a = ed(l, i, e - 1 / 3));
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function Bm(e, t, r) {
  (e = pt(e, 255)), (t = pt(t, 255)), (r = pt(r, 255));
  var n = Math.max(e, t, r),
    o = Math.min(e, t, r),
    a = 0,
    i = n,
    l = n - o,
    s = n === 0 ? 0 : l / n;
  if (n === o) a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / l + 2;
        break;
      case r:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: i };
}
function z_(e, t, r) {
  (e = pt(e, 360) * 6), (t = pt(t, 100)), (r = pt(r, 100));
  var n = Math.floor(e),
    o = e - n,
    a = r * (1 - t),
    i = r * (1 - o * t),
    l = r * (1 - (1 - o) * t),
    s = n % 6,
    u = [r, i, a, a, l, r][s],
    d = [l, r, r, i, a, a][s],
    f = [a, a, l, r, r, i][s];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Im(e, t, r, n) {
  var o = [
    oo(Math.round(e).toString(16)),
    oo(Math.round(t).toString(16)),
    oo(Math.round(r).toString(16)),
  ];
  return n &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join("");
}
function D_(e, t, r, n, o) {
  var a = [
    oo(Math.round(e).toString(16)),
    oo(Math.round(t).toString(16)),
    oo(Math.round(r).toString(16)),
    oo(B_(n)),
  ];
  return o &&
    a[0].startsWith(a[0].charAt(1)) &&
    a[1].startsWith(a[1].charAt(1)) &&
    a[2].startsWith(a[2].charAt(1)) &&
    a[3].startsWith(a[3].charAt(1))
    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
    : a.join("");
}
function B_(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function $m(e) {
  return Wt(e) / 255;
}
function Wt(e) {
  return parseInt(e, 16);
}
function I_(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var $f = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function $_(e) {
  var t = { r: 0, g: 0, b: 0 },
    r = 1,
    n = null,
    o = null,
    a = null,
    i = !1,
    l = !1;
  return (
    typeof e == "string" && (e = O_(e)),
    typeof e == "object" &&
      (Ur(e.r) && Ur(e.g) && Ur(e.b)
        ? ((t = M_(e.r, e.g, e.b)),
          (i = !0),
          (l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : Ur(e.h) && Ur(e.s) && Ur(e.v)
        ? ((n = Gl(e.s)),
          (o = Gl(e.v)),
          (t = z_(e.h, n, o)),
          (i = !0),
          (l = "hsv"))
        : Ur(e.h) &&
          Ur(e.s) &&
          Ur(e.l) &&
          ((n = Gl(e.s)),
          (a = Gl(e.l)),
          (t = L_(e.h, n, a)),
          (i = !0),
          (l = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)),
    (r = Rb(r)),
    {
      ok: i,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: r,
    }
  );
}
var N_ = "[-\\+]?\\d+%?",
  F_ = "[-\\+]?\\d*\\.\\d+%?",
  _n = "(?:".concat(F_, ")|(?:").concat(N_, ")"),
  td = "[\\s|\\(]+("
    .concat(_n, ")[,|\\s]+(")
    .concat(_n, ")[,|\\s]+(")
    .concat(_n, ")\\s*\\)?"),
  rd = "[\\s|\\(]+("
    .concat(_n, ")[,|\\s]+(")
    .concat(_n, ")[,|\\s]+(")
    .concat(_n, ")[,|\\s]+(")
    .concat(_n, ")\\s*\\)?"),
  mr = {
    CSS_UNIT: new RegExp(_n),
    rgb: new RegExp("rgb" + td),
    rgba: new RegExp("rgba" + rd),
    hsl: new RegExp("hsl" + td),
    hsla: new RegExp("hsla" + rd),
    hsv: new RegExp("hsv" + td),
    hsva: new RegExp("hsva" + rd),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function O_(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if ($f[e]) (e = $f[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = mr.rgb.exec(e);
  return r
    ? { r: r[1], g: r[2], b: r[3] }
    : ((r = mr.rgba.exec(e)),
      r
        ? { r: r[1], g: r[2], b: r[3], a: r[4] }
        : ((r = mr.hsl.exec(e)),
          r
            ? { h: r[1], s: r[2], l: r[3] }
            : ((r = mr.hsla.exec(e)),
              r
                ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                : ((r = mr.hsv.exec(e)),
                  r
                    ? { h: r[1], s: r[2], v: r[3] }
                    : ((r = mr.hsva.exec(e)),
                      r
                        ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                        : ((r = mr.hex8.exec(e)),
                          r
                            ? {
                                r: Wt(r[1]),
                                g: Wt(r[2]),
                                b: Wt(r[3]),
                                a: $m(r[4]),
                                format: t ? "name" : "hex8",
                              }
                            : ((r = mr.hex6.exec(e)),
                              r
                                ? {
                                    r: Wt(r[1]),
                                    g: Wt(r[2]),
                                    b: Wt(r[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : ((r = mr.hex4.exec(e)),
                                  r
                                    ? {
                                        r: Wt(r[1] + r[1]),
                                        g: Wt(r[2] + r[2]),
                                        b: Wt(r[3] + r[3]),
                                        a: $m(r[4] + r[4]),
                                        format: t ? "name" : "hex8",
                                      }
                                    : ((r = mr.hex3.exec(e)),
                                      r
                                        ? {
                                            r: Wt(r[1] + r[1]),
                                            g: Wt(r[2] + r[2]),
                                            b: Wt(r[3] + r[3]),
                                            format: t ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function Ur(e) {
  return Boolean(mr.CSS_UNIT.exec(String(e)));
}
var dl = (function () {
  function e(t, r) {
    t === void 0 && (t = ""), r === void 0 && (r = {});
    var n;
    if (t instanceof e) return t;
    typeof t == "number" && (t = I_(t)), (this.originalInput = t);
    var o = $_(t);
    (this.originalInput = t),
      (this.r = o.r),
      (this.g = o.g),
      (this.b = o.b),
      (this.a = o.a),
      (this.roundA = Math.round(100 * this.a) / 100),
      (this.format = (n = r.format) !== null && n !== void 0 ? n : o.format),
      (this.gradientType = r.gradientType),
      this.r < 1 && (this.r = Math.round(this.r)),
      this.g < 1 && (this.g = Math.round(this.g)),
      this.b < 1 && (this.b = Math.round(this.b)),
      (this.isValid = o.ok);
  }
  return (
    (e.prototype.isDark = function () {
      return this.getBrightness() < 128;
    }),
    (e.prototype.isLight = function () {
      return !this.isDark();
    }),
    (e.prototype.getBrightness = function () {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }),
    (e.prototype.getLuminance = function () {
      var t = this.toRgb(),
        r,
        n,
        o,
        a = t.r / 255,
        i = t.g / 255,
        l = t.b / 255;
      return (
        a <= 0.03928
          ? (r = a / 12.92)
          : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
        i <= 0.03928
          ? (n = i / 12.92)
          : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
        l <= 0.03928
          ? (o = l / 12.92)
          : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
        0.2126 * r + 0.7152 * n + 0.0722 * o
      );
    }),
    (e.prototype.getAlpha = function () {
      return this.a;
    }),
    (e.prototype.setAlpha = function (t) {
      return (
        (this.a = Rb(t)), (this.roundA = Math.round(100 * this.a) / 100), this
      );
    }),
    (e.prototype.toHsv = function () {
      var t = Bm(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }),
    (e.prototype.toHsvString = function () {
      var t = Bm(this.r, this.g, this.b),
        r = Math.round(t.h * 360),
        n = Math.round(t.s * 100),
        o = Math.round(t.v * 100);
      return this.a === 1
        ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)")
        : "hsva("
            .concat(r, ", ")
            .concat(n, "%, ")
            .concat(o, "%, ")
            .concat(this.roundA, ")");
    }),
    (e.prototype.toHsl = function () {
      var t = Dm(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }),
    (e.prototype.toHslString = function () {
      var t = Dm(this.r, this.g, this.b),
        r = Math.round(t.h * 360),
        n = Math.round(t.s * 100),
        o = Math.round(t.l * 100);
      return this.a === 1
        ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)")
        : "hsla("
            .concat(r, ", ")
            .concat(n, "%, ")
            .concat(o, "%, ")
            .concat(this.roundA, ")");
    }),
    (e.prototype.toHex = function (t) {
      return t === void 0 && (t = !1), Im(this.r, this.g, this.b, t);
    }),
    (e.prototype.toHexString = function (t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }),
    (e.prototype.toHex8 = function (t) {
      return t === void 0 && (t = !1), D_(this.r, this.g, this.b, this.a, t);
    }),
    (e.prototype.toHex8String = function (t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }),
    (e.prototype.toRgb = function () {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a,
      };
    }),
    (e.prototype.toRgbString = function () {
      var t = Math.round(this.r),
        r = Math.round(this.g),
        n = Math.round(this.b);
      return this.a === 1
        ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")")
        : "rgba("
            .concat(t, ", ")
            .concat(r, ", ")
            .concat(n, ", ")
            .concat(this.roundA, ")");
    }),
    (e.prototype.toPercentageRgb = function () {
      var t = function (r) {
        return "".concat(Math.round(pt(r, 255) * 100), "%");
      };
      return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
    }),
    (e.prototype.toPercentageRgbString = function () {
      var t = function (r) {
        return Math.round(pt(r, 255) * 100);
      };
      return this.a === 1
        ? "rgb("
            .concat(t(this.r), "%, ")
            .concat(t(this.g), "%, ")
            .concat(t(this.b), "%)")
        : "rgba("
            .concat(t(this.r), "%, ")
            .concat(t(this.g), "%, ")
            .concat(t(this.b), "%, ")
            .concat(this.roundA, ")");
    }),
    (e.prototype.toName = function () {
      if (this.a === 0) return "transparent";
      if (this.a < 1) return !1;
      for (
        var t = "#" + Im(this.r, this.g, this.b, !1),
          r = 0,
          n = Object.entries($f);
        r < n.length;
        r++
      ) {
        var o = n[r],
          a = o[0],
          i = o[1];
        if (t === i) return a;
      }
      return !1;
    }),
    (e.prototype.toString = function (t) {
      var r = Boolean(t);
      t = t != null ? t : this.format;
      var n = !1,
        o = this.a < 1 && this.a >= 0,
        a = !r && o && (t.startsWith("hex") || t === "name");
      return a
        ? t === "name" && this.a === 0
          ? this.toName()
          : this.toRgbString()
        : (t === "rgb" && (n = this.toRgbString()),
          t === "prgb" && (n = this.toPercentageRgbString()),
          (t === "hex" || t === "hex6") && (n = this.toHexString()),
          t === "hex3" && (n = this.toHexString(!0)),
          t === "hex4" && (n = this.toHex8String(!0)),
          t === "hex8" && (n = this.toHex8String()),
          t === "name" && (n = this.toName()),
          t === "hsl" && (n = this.toHslString()),
          t === "hsv" && (n = this.toHsvString()),
          n || this.toHexString());
    }),
    (e.prototype.toNumber = function () {
      return (
        (Math.round(this.r) << 16) +
        (Math.round(this.g) << 8) +
        Math.round(this.b)
      );
    }),
    (e.prototype.clone = function () {
      return new e(this.toString());
    }),
    (e.prototype.lighten = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.l += t / 100), (r.l = Ul(r.l)), new e(r);
    }),
    (e.prototype.brighten = function (t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return (
        (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100))))),
        (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100))))),
        (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100))))),
        new e(r)
      );
    }),
    (e.prototype.darken = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.l -= t / 100), (r.l = Ul(r.l)), new e(r);
    }),
    (e.prototype.tint = function (t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }),
    (e.prototype.shade = function (t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }),
    (e.prototype.desaturate = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.s -= t / 100), (r.s = Ul(r.s)), new e(r);
    }),
    (e.prototype.saturate = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.s += t / 100), (r.s = Ul(r.s)), new e(r);
    }),
    (e.prototype.greyscale = function () {
      return this.desaturate(100);
    }),
    (e.prototype.spin = function (t) {
      var r = this.toHsl(),
        n = (r.h + t) % 360;
      return (r.h = n < 0 ? 360 + n : n), new e(r);
    }),
    (e.prototype.mix = function (t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(),
        o = new e(t).toRgb(),
        a = r / 100,
        i = {
          r: (o.r - n.r) * a + n.r,
          g: (o.g - n.g) * a + n.g,
          b: (o.b - n.b) * a + n.b,
          a: (o.a - n.a) * a + n.a,
        };
      return new e(i);
    }),
    (e.prototype.analogous = function (t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(),
        o = 360 / r,
        a = [this];
      for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; )
        (n.h = (n.h + o) % 360), a.push(new e(n));
      return a;
    }),
    (e.prototype.complement = function () {
      var t = this.toHsl();
      return (t.h = (t.h + 180) % 360), new e(t);
    }),
    (e.prototype.monochromatic = function (t) {
      t === void 0 && (t = 6);
      for (
        var r = this.toHsv(), n = r.h, o = r.s, a = r.v, i = [], l = 1 / t;
        t--;

      )
        i.push(new e({ h: n, s: o, v: a })), (a = (a + l) % 1);
      return i;
    }),
    (e.prototype.splitcomplement = function () {
      var t = this.toHsl(),
        r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
      ];
    }),
    (e.prototype.onBackground = function (t) {
      var r = this.toRgb(),
        n = new e(t).toRgb();
      return new e({
        r: n.r + (r.r - n.r) * r.a,
        g: n.g + (r.g - n.g) * r.a,
        b: n.b + (r.b - n.b) * r.a,
      });
    }),
    (e.prototype.triad = function () {
      return this.polyad(3);
    }),
    (e.prototype.tetrad = function () {
      return this.polyad(4);
    }),
    (e.prototype.polyad = function (t) {
      for (
        var r = this.toHsl(), n = r.h, o = [this], a = 360 / t, i = 1;
        i < t;
        i++
      )
        o.push(new e({ h: (n + i * a) % 360, s: r.s, l: r.l }));
      return o;
    }),
    (e.prototype.equals = function (t) {
      return this.toRgbString() === new e(t).toRgbString();
    }),
    e
  );
})();
function Ab(e) {
  if ((e === void 0 && (e = {}), e.count !== void 0 && e.count !== null)) {
    var t = e.count,
      r = [];
    for (e.count = void 0; t > r.length; )
      (e.count = null), e.seed && (e.seed += 1), r.push(Ab(e));
    return (e.count = t), r;
  }
  var n = V_(e.hue, e.seed),
    o = j_(n, e),
    a = W_(n, o, e),
    i = { h: n, s: o, v: a };
  return e.alpha !== void 0 && (i.a = e.alpha), new dl(i);
}
function V_(e, t) {
  var r = U_(e),
    n = au(r, t);
  return n < 0 && (n = 360 + n), n;
}
function j_(e, t) {
  if (t.hue === "monochrome") return 0;
  if (t.luminosity === "random") return au([0, 100], t.seed);
  var r = Mb(e).saturationRange,
    n = r[0],
    o = r[1];
  switch (t.luminosity) {
    case "bright":
      n = 55;
      break;
    case "dark":
      n = o - 10;
      break;
    case "light":
      o = 55;
      break;
  }
  return au([n, o], t.seed);
}
function W_(e, t, r) {
  var n = H_(e, t),
    o = 100;
  switch (r.luminosity) {
    case "dark":
      o = n + 20;
      break;
    case "light":
      n = (o + n) / 2;
      break;
    case "random":
      (n = 0), (o = 100);
      break;
  }
  return au([n, o], r.seed);
}
function H_(e, t) {
  for (var r = Mb(e).lowerBounds, n = 0; n < r.length - 1; n++) {
    var o = r[n][0],
      a = r[n][1],
      i = r[n + 1][0],
      l = r[n + 1][1];
    if (t >= o && t <= i) {
      var s = (l - a) / (i - o),
        u = a - s * o;
      return s * t + u;
    }
  }
  return 0;
}
function U_(e) {
  var t = parseInt(e, 10);
  if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t];
  if (typeof e == "string") {
    var r = zb.find(function (i) {
      return i.name === e;
    });
    if (r) {
      var n = Lb(r);
      if (n.hueRange) return n.hueRange;
    }
    var o = new dl(e);
    if (o.isValid) {
      var a = o.toHsv().h;
      return [a, a];
    }
  }
  return [0, 360];
}
function Mb(e) {
  e >= 334 && e <= 360 && (e -= 360);
  for (var t = 0, r = zb; t < r.length; t++) {
    var n = r[t],
      o = Lb(n);
    if (o.hueRange && e >= o.hueRange[0] && e <= o.hueRange[1]) return o;
  }
  throw Error("Color not found");
}
function au(e, t) {
  if (t === void 0) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
  var r = e[1] || 1,
    n = e[0] || 0;
  t = (t * 9301 + 49297) % 233280;
  var o = t / 233280;
  return Math.floor(n + o * (r - n));
}
function Lb(e) {
  var t = e.lowerBounds[0][0],
    r = e.lowerBounds[e.lowerBounds.length - 1][0],
    n = e.lowerBounds[e.lowerBounds.length - 1][1],
    o = e.lowerBounds[0][1];
  return {
    name: e.name,
    hueRange: e.hueRange,
    lowerBounds: e.lowerBounds,
    saturationRange: [t, r],
    brightnessRange: [n, o],
  };
}
var zb = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0],
    ],
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50],
    ],
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70],
    ],
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75],
    ],
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40],
    ],
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35],
    ],
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42],
    ],
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73],
    ],
  },
];
function G_(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var K_ = (e) => Object.keys(e).length === 0,
  wt = (e, t, r) => {
    const n = G_(e, `colors.${t}`, t),
      { isValid: o } = new dl(n);
    return o ? n : r;
  },
  Y_ = (e) => (t) => {
    const r = wt(t, e);
    return new dl(r).isDark() ? "dark" : "light";
  },
  X_ = (e) => (t) => Y_(e)(t) === "dark",
  Sa = (e, t) => (r) => {
    const n = wt(r, e);
    return new dl(n).setAlpha(t).toRgbString();
  };
function Nm(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
function Q_(e) {
  const t = Ab().toHexString();
  return !e || K_(e)
    ? t
    : e.string && e.colors
    ? q_(e.string, e.colors)
    : e.string && !e.colors
    ? Z_(e.string)
    : e.colors && !e.string
    ? J_(e.colors)
    : t;
}
function Z_(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let n = 0; n < e.length; n += 1)
    (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = (t >> (n * 8)) & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function q_(e, t) {
  let r = 0;
  if (e.length === 0) return t[0];
  for (let n = 0; n < e.length; n += 1)
    (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function J_(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function G(e, t) {
  return (r) => (r.colorMode === "dark" ? t : e);
}
function mh(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? (t === "vertical" ? r : n) : {};
}
function eP(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Db(e) {
  return eP(e) && e.reference ? e.reference : String(e);
}
var tc = (e, ...t) => t.map(Db).join(` ${e} `).replace(/calc/g, ""),
  Fm = (...e) => `calc(${tc("+", ...e)})`,
  Om = (...e) => `calc(${tc("-", ...e)})`,
  Nf = (...e) => `calc(${tc("*", ...e)})`,
  Vm = (...e) => `calc(${tc("/", ...e)})`,
  jm = (e) => {
    const t = Db(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Nf(t, -1);
  },
  Xr = Object.assign(
    (e) => ({
      add: (...t) => Xr(Fm(e, ...t)),
      subtract: (...t) => Xr(Om(e, ...t)),
      multiply: (...t) => Xr(Nf(e, ...t)),
      divide: (...t) => Xr(Vm(e, ...t)),
      negate: () => Xr(jm(e)),
      toString: () => e.toString(),
    }),
    { add: Fm, subtract: Om, multiply: Nf, divide: Vm, negate: jm }
  );
function tP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function rP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Bb(e) {
  const t = rP(e.toString());
  return t.includes("\\.") ? e : tP(e) ? t.replace(".", "\\.") : e;
}
function nP(e, t = "") {
  return [t, Bb(e)].filter(Boolean).join("-");
}
function oP(e, t) {
  return `var(${Bb(e)}${t ? `, ${t}` : ""})`;
}
function aP(e, t = "") {
  return `--${nP(e, t)}`;
}
function nt(e, t) {
  const r = aP(e, t == null ? void 0 : t.prefix);
  return { variable: r, reference: oP(r, iP(t == null ? void 0 : t.fallback)) };
}
function iP(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { definePartsStyle: lP, defineMultiStyleConfig: sP } = ze(o_.keys),
  uP = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  cP = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  dP = { pt: "2", px: "4", pb: "5" },
  fP = { fontSize: "1.25em" },
  pP = lP({ container: uP, button: cP, panel: dP, icon: fP }),
  hP = sP({ baseStyle: pP }),
  { definePartsStyle: fl, defineMultiStyleConfig: vP } = ze(a_.keys),
  Yt = _e("alert-fg"),
  on = _e("alert-bg"),
  mP = fl({
    container: { bg: on.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: Yt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: Yt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function gh(e) {
  const { theme: t, colorScheme: r } = e,
    n = Sa(`${r}.200`, 0.16)(t);
  return { light: `colors.${r}.100`, dark: n };
}
var gP = fl((e) => {
    const { colorScheme: t } = e,
      r = gh(e);
    return {
      container: {
        [Yt.variable]: `colors.${t}.500`,
        [on.variable]: r.light,
        _dark: { [Yt.variable]: `colors.${t}.200`, [on.variable]: r.dark },
      },
    };
  }),
  yP = fl((e) => {
    const { colorScheme: t } = e,
      r = gh(e);
    return {
      container: {
        [Yt.variable]: `colors.${t}.500`,
        [on.variable]: r.light,
        _dark: { [Yt.variable]: `colors.${t}.200`, [on.variable]: r.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: Yt.reference,
      },
    };
  }),
  bP = fl((e) => {
    const { colorScheme: t } = e,
      r = gh(e);
    return {
      container: {
        [Yt.variable]: `colors.${t}.500`,
        [on.variable]: r.light,
        _dark: { [Yt.variable]: `colors.${t}.200`, [on.variable]: r.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: Yt.reference,
      },
    };
  }),
  SP = fl((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [Yt.variable]: "colors.white",
        [on.variable]: `colors.${t}.500`,
        _dark: {
          [Yt.variable]: "colors.gray.900",
          [on.variable]: `colors.${t}.200`,
        },
        color: Yt.reference,
      },
    };
  }),
  xP = { subtle: gP, "left-accent": yP, "top-accent": bP, solid: SP },
  wP = vP({
    baseStyle: mP,
    variants: xP,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  Ib = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  CP = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  kP = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  EP = { ...Ib, ...CP, container: kP },
  $b = EP,
  TP = (e) => typeof e == "function";
function kt(e, ...t) {
  return TP(e) ? e(...t) : e;
}
var { definePartsStyle: Nb, defineMultiStyleConfig: _P } = ze(i_.keys),
  ra = _e("avatar-border-color"),
  nd = _e("avatar-bg"),
  PP = {
    borderRadius: "full",
    border: "0.2em solid",
    [ra.variable]: "white",
    _dark: { [ra.variable]: "colors.gray.800" },
    borderColor: ra.reference,
  },
  RP = {
    [nd.variable]: "colors.gray.200",
    _dark: { [nd.variable]: "colors.whiteAlpha.400" },
    bgColor: nd.reference,
  },
  Wm = _e("avatar-background"),
  AP = (e) => {
    const { name: t, theme: r } = e,
      n = t ? Q_({ string: t }) : "colors.gray.400",
      o = X_(n)(r);
    let a = "white";
    return (
      o || (a = "gray.800"),
      {
        bg: Wm.reference,
        "&:not([data-loaded])": { [Wm.variable]: n },
        color: a,
        [ra.variable]: "colors.white",
        _dark: { [ra.variable]: "colors.gray.800" },
        borderColor: ra.reference,
        verticalAlign: "top",
      }
    );
  },
  MP = Nb((e) => ({
    badge: kt(PP, e),
    excessLabel: kt(RP, e),
    container: kt(AP, e),
  }));
function gn(e) {
  const t = e !== "100%" ? $b[e] : void 0;
  return Nb({
    container: {
      width: e,
      height: e,
      fontSize: `calc(${t != null ? t : e} / 2.5)`,
    },
    excessLabel: { width: e, height: e },
    label: {
      fontSize: `calc(${t != null ? t : e} / 2.5)`,
      lineHeight: e !== "100%" ? (t != null ? t : e) : void 0,
    },
  });
}
var LP = {
    "2xs": gn(4),
    xs: gn(6),
    sm: gn(8),
    md: gn(12),
    lg: gn(16),
    xl: gn(24),
    "2xl": gn(32),
    full: gn("100%"),
  },
  zP = _P({ baseStyle: MP, sizes: LP, defaultProps: { size: "md" } }),
  DP = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
  },
  na = _e("badge-bg"),
  Ir = _e("badge-color"),
  BP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Sa(`${t}.500`, 0.6)(r);
    return {
      [na.variable]: `colors.${t}.500`,
      [Ir.variable]: "colors.white",
      _dark: { [na.variable]: n, [Ir.variable]: "colors.whiteAlpha.800" },
      bg: na.reference,
      color: Ir.reference,
    };
  },
  IP = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Sa(`${t}.200`, 0.16)(r);
    return {
      [na.variable]: `colors.${t}.100`,
      [Ir.variable]: `colors.${t}.800`,
      _dark: { [na.variable]: n, [Ir.variable]: `colors.${t}.200` },
      bg: na.reference,
      color: Ir.reference,
    };
  },
  $P = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Sa(`${t}.200`, 0.8)(r);
    return {
      [Ir.variable]: `colors.${t}.500`,
      _dark: { [Ir.variable]: n },
      color: Ir.reference,
      boxShadow: `inset 0 0 0px 1px ${Ir.reference}`,
    };
  },
  NP = { solid: BP, subtle: IP, outline: $P },
  pi = {
    baseStyle: DP,
    variants: NP,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: FP, definePartsStyle: OP } = ze(l_.keys),
  VP = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  jP = OP({ link: VP }),
  WP = FP({ baseStyle: jP }),
  HP = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  Fb = (e) => {
    const { colorScheme: t, theme: r } = e;
    if (t === "gray")
      return {
        color: G("inherit", "whiteAlpha.900")(e),
        _hover: { bg: G("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: G("gray.200", "whiteAlpha.300")(e) },
      };
    const n = Sa(`${t}.200`, 0.12)(r),
      o = Sa(`${t}.200`, 0.24)(r);
    return {
      color: G(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: G(`${t}.50`, n)(e) },
      _active: { bg: G(`${t}.100`, o)(e) },
    };
  },
  UP = (e) => {
    const { colorScheme: t } = e,
      r = G("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? r : "currentColor",
      ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
        marginEnd: "-1px",
      },
      ...kt(Fb, e),
    };
  },
  GP = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  KP = (e) => {
    var l;
    const { colorScheme: t } = e;
    if (t === "gray") {
      const s = G("gray.100", "whiteAlpha.200")(e);
      return {
        bg: s,
        _hover: {
          bg: G("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: s },
        },
        _active: { bg: G("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: r = `${t}.500`,
        color: n = "white",
        hoverBg: o = `${t}.600`,
        activeBg: a = `${t}.700`,
      } = (l = GP[t]) != null ? l : {},
      i = G(r, `${t}.200`)(e);
    return {
      bg: i,
      color: G(n, "gray.800")(e),
      _hover: { bg: G(o, `${t}.300`)(e), _disabled: { bg: i } },
      _active: { bg: G(a, `${t}.400`)(e) },
    };
  },
  YP = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: G(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: G(`${t}.700`, `${t}.500`)(e) },
    };
  },
  XP = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  QP = { ghost: Fb, outline: UP, solid: KP, link: YP, unstyled: XP },
  ZP = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  qP = {
    baseStyle: HP,
    variants: QP,
    sizes: ZP,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: so, defineMultiStyleConfig: JP } = ze(P_.keys),
  iu = _e("card-bg"),
  oa = _e("card-padding"),
  e5 = so({
    container: {
      [iu.variable]: "chakra-body-bg",
      backgroundColor: iu.reference,
      color: "chakra-body-text",
    },
    body: { padding: oa.reference, flex: "1 1 0%" },
    header: { padding: oa.reference },
    footer: { padding: oa.reference },
  }),
  t5 = {
    sm: so({ container: { borderRadius: "base", [oa.variable]: "space.3" } }),
    md: so({ container: { borderRadius: "md", [oa.variable]: "space.5" } }),
    lg: so({ container: { borderRadius: "xl", [oa.variable]: "space.7" } }),
  },
  r5 = {
    elevated: so({
      container: {
        boxShadow: "base",
        _dark: { [iu.variable]: "colors.gray.700" },
      },
    }),
    outline: so({
      container: { borderWidth: "1px", borderColor: "chakra-border-color" },
    }),
    filled: so({ container: { [iu.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { padding: 0 },
      header: { padding: 0 },
      footer: { padding: 0 },
    },
  },
  n5 = JP({
    baseStyle: e5,
    variants: r5,
    sizes: t5,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  { definePartsStyle: ws, defineMultiStyleConfig: o5 } = ze(s_.keys),
  hi = _e("checkbox-size"),
  a5 = (e) => {
    const { colorScheme: t } = e;
    return {
      w: hi.reference,
      h: hi.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: G(`${t}.500`, `${t}.200`)(e),
        borderColor: G(`${t}.500`, `${t}.200`)(e),
        color: G("white", "gray.900")(e),
        _hover: {
          bg: G(`${t}.600`, `${t}.300`)(e),
          borderColor: G(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: G("gray.200", "transparent")(e),
          bg: G("gray.200", "whiteAlpha.300")(e),
          color: G("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: G(`${t}.500`, `${t}.200`)(e),
        borderColor: G(`${t}.500`, `${t}.200`)(e),
        color: G("white", "gray.900")(e),
      },
      _disabled: {
        bg: G("gray.100", "whiteAlpha.100")(e),
        borderColor: G("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: G("red.500", "red.300")(e) },
    };
  },
  i5 = { _disabled: { cursor: "not-allowed" } },
  l5 = { userSelect: "none", _disabled: { opacity: 0.4 } },
  s5 = { transitionProperty: "transform", transitionDuration: "normal" },
  u5 = ws((e) => ({ icon: s5, container: i5, control: kt(a5, e), label: l5 })),
  c5 = {
    sm: ws({
      control: { [hi.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: ws({
      control: { [hi.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: ws({
      control: { [hi.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  lu = o5({
    baseStyle: u5,
    sizes: c5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  vi = nt("close-button-size"),
  Ha = nt("close-button-bg"),
  d5 = {
    w: [vi.reference],
    h: [vi.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [Ha.variable]: "colors.blackAlpha.100",
      _dark: { [Ha.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Ha.variable]: "colors.blackAlpha.200",
      _dark: { [Ha.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: Ha.reference,
  },
  f5 = {
    lg: { [vi.variable]: "sizes.10", fontSize: "md" },
    md: { [vi.variable]: "sizes.8", fontSize: "xs" },
    sm: { [vi.variable]: "sizes.6", fontSize: "2xs" },
  },
  p5 = { baseStyle: d5, sizes: f5, defaultProps: { size: "md" } },
  { variants: h5, defaultProps: v5 } = pi,
  m5 = { fontFamily: "mono", fontSize: "sm", px: "0.2em", borderRadius: "sm" },
  g5 = { baseStyle: m5, variants: h5, defaultProps: v5 },
  y5 = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  b5 = { baseStyle: y5 },
  S5 = { opacity: 0.6, borderColor: "inherit" },
  x5 = { borderStyle: "solid" },
  w5 = { borderStyle: "dashed" },
  C5 = { solid: x5, dashed: w5 },
  k5 = { baseStyle: S5, variants: C5, defaultProps: { variant: "solid" } },
  { definePartsStyle: Ff, defineMultiStyleConfig: E5 } = ze(u_.keys),
  od = _e("drawer-bg"),
  ad = _e("drawer-box-shadow");
function Po(e) {
  return Ff(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var T5 = { bg: "blackAlpha.600", zIndex: "overlay" },
  _5 = { display: "flex", zIndex: "modal", justifyContent: "center" },
  P5 = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [od.variable]: "colors.white",
      [ad.variable]: "shadows.lg",
      _dark: {
        [od.variable]: "colors.gray.700",
        [ad.variable]: "shadows.dark-lg",
      },
      bg: od.reference,
      boxShadow: ad.reference,
    };
  },
  R5 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  A5 = { position: "absolute", top: "2", insetEnd: "3" },
  M5 = { px: "6", py: "2", flex: "1", overflow: "auto" },
  L5 = { px: "6", py: "4" },
  z5 = Ff((e) => ({
    overlay: T5,
    dialogContainer: _5,
    dialog: kt(P5, e),
    header: R5,
    closeButton: A5,
    body: M5,
    footer: L5,
  })),
  D5 = {
    xs: Po("xs"),
    sm: Po("md"),
    md: Po("lg"),
    lg: Po("2xl"),
    xl: Po("4xl"),
    full: Po("full"),
  },
  B5 = E5({ baseStyle: z5, sizes: D5, defaultProps: { size: "xs" } }),
  { definePartsStyle: I5, defineMultiStyleConfig: $5 } = ze(c_.keys),
  N5 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  F5 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  O5 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  V5 = I5({ preview: N5, input: F5, textarea: O5 }),
  j5 = $5({ baseStyle: V5 }),
  { definePartsStyle: W5, defineMultiStyleConfig: H5 } = ze(d_.keys),
  aa = _e("form-control-color"),
  U5 = {
    marginStart: "1",
    [aa.variable]: "colors.red.500",
    _dark: { [aa.variable]: "colors.red.300" },
    color: aa.reference,
  },
  G5 = {
    mt: "2",
    [aa.variable]: "colors.gray.600",
    _dark: { [aa.variable]: "colors.whiteAlpha.600" },
    color: aa.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  K5 = W5({
    container: { width: "100%", position: "relative" },
    requiredIndicator: U5,
    helperText: G5,
  }),
  Y5 = H5({ baseStyle: K5 }),
  { definePartsStyle: X5, defineMultiStyleConfig: Q5 } = ze(f_.keys),
  ia = _e("form-error-color"),
  Z5 = {
    [ia.variable]: "colors.red.500",
    _dark: { [ia.variable]: "colors.red.300" },
    color: ia.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  q5 = {
    marginEnd: "0.5em",
    [ia.variable]: "colors.red.500",
    _dark: { [ia.variable]: "colors.red.300" },
    color: ia.reference,
  },
  J5 = X5({ text: Z5, icon: q5 }),
  eR = Q5({ baseStyle: J5 }),
  tR = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  rR = { baseStyle: tR },
  nR = { fontFamily: "heading", fontWeight: "bold" },
  oR = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  aR = { baseStyle: nR, sizes: oR, defaultProps: { size: "xl" } },
  { definePartsStyle: qr, defineMultiStyleConfig: iR } = ze(p_.keys),
  lR = qr({
    field: {
      width: "100%",
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  yn = {
    lg: { fontSize: "lg", px: "4", h: "12", borderRadius: "md" },
    md: { fontSize: "md", px: "4", h: "10", borderRadius: "md" },
    sm: { fontSize: "sm", px: "3", h: "8", borderRadius: "sm" },
    xs: { fontSize: "xs", px: "2", h: "6", borderRadius: "sm" },
  },
  sR = {
    lg: qr({ field: yn.lg, addon: yn.lg }),
    md: qr({ field: yn.md, addon: yn.md }),
    sm: qr({ field: yn.sm, addon: yn.sm }),
    xs: qr({ field: yn.xs, addon: yn.xs }),
  };
function yh(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || G("blue.500", "blue.300")(e),
    errorBorderColor: r || G("red.500", "red.300")(e),
  };
}
var uR = qr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = yh(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: G("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: wt(t, n), boxShadow: `0 0 0 1px ${wt(t, n)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: wt(t, r),
          boxShadow: `0 0 0 1px ${wt(t, r)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: G("inherit", "whiteAlpha.50")(e),
        bg: G("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  cR = qr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = yh(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: G("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: G("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: wt(t, n) },
        _focusVisible: { bg: "transparent", borderColor: wt(t, r) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: G("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  dR = qr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = yh(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: wt(t, n),
          boxShadow: `0px 1px 0px 0px ${wt(t, n)}`,
        },
        _focusVisible: {
          borderColor: wt(t, r),
          boxShadow: `0px 1px 0px 0px ${wt(t, r)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  fR = qr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  pR = { outline: uR, filled: cR, flushed: dR, unstyled: fR },
  ge = iR({
    baseStyle: lR,
    sizes: sR,
    variants: pR,
    defaultProps: { size: "md", variant: "outline" },
  }),
  id = _e("kbd-bg"),
  hR = {
    [id.variable]: "colors.gray.100",
    _dark: { [id.variable]: "colors.whiteAlpha.100" },
    bg: id.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  vR = { baseStyle: hR },
  mR = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  gR = { baseStyle: mR },
  { defineMultiStyleConfig: yR, definePartsStyle: bR } = ze(h_.keys),
  SR = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  xR = bR({ icon: SR }),
  wR = yR({ baseStyle: xR }),
  { defineMultiStyleConfig: CR, definePartsStyle: kR } = ze(v_.keys),
  Ar = _e("menu-bg"),
  ld = _e("menu-shadow"),
  ER = {
    [Ar.variable]: "#fff",
    [ld.variable]: "shadows.sm",
    _dark: {
      [Ar.variable]: "colors.gray.700",
      [ld.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: Ar.reference,
    boxShadow: ld.reference,
  },
  TR = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [Ar.variable]: "colors.gray.100",
      _dark: { [Ar.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Ar.variable]: "colors.gray.200",
      _dark: { [Ar.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [Ar.variable]: "colors.gray.100",
      _dark: { [Ar.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: Ar.reference,
  },
  _R = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  PR = { opacity: 0.6 },
  RR = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  AR = { transitionProperty: "common", transitionDuration: "normal" },
  MR = kR({
    button: AR,
    list: ER,
    item: TR,
    groupTitle: _R,
    command: PR,
    divider: RR,
  }),
  LR = CR({ baseStyle: MR }),
  { defineMultiStyleConfig: zR, definePartsStyle: Of } = ze(m_.keys),
  DR = { bg: "blackAlpha.600", zIndex: "modal" },
  BR = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: r === "inside" ? "hidden" : "auto",
    };
  },
  IR = (e) => {
    const { scrollBehavior: t } = e;
    return {
      borderRadius: "md",
      bg: G("white", "gray.700")(e),
      color: "inherit",
      my: "16",
      zIndex: "modal",
      maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
      boxShadow: G("lg", "dark-lg")(e),
    };
  },
  $R = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  NR = { position: "absolute", top: "2", insetEnd: "3" },
  FR = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  OR = { px: "6", py: "4" },
  VR = Of((e) => ({
    overlay: DR,
    dialogContainer: kt(BR, e),
    dialog: kt(IR, e),
    header: $R,
    closeButton: NR,
    body: kt(FR, e),
    footer: OR,
  }));
function vr(e) {
  return Of(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var jR = {
    xs: vr("xs"),
    sm: vr("sm"),
    md: vr("md"),
    lg: vr("lg"),
    xl: vr("xl"),
    "2xl": vr("2xl"),
    "3xl": vr("3xl"),
    "4xl": vr("4xl"),
    "5xl": vr("5xl"),
    "6xl": vr("6xl"),
    full: vr("full"),
  },
  WR = zR({ baseStyle: VR, sizes: jR, defaultProps: { size: "md" } }),
  HR = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  Ob = HR,
  { defineMultiStyleConfig: UR, definePartsStyle: Vb } = ze(g_.keys),
  bh = nt("number-input-stepper-width"),
  jb = nt("number-input-input-padding"),
  GR = Xr(bh).add("0.5rem").toString(),
  sd = nt("number-input-bg"),
  ud = nt("number-input-color"),
  cd = nt("number-input-border-color"),
  KR = { [bh.variable]: "sizes.6", [jb.variable]: GR },
  YR = (e) => {
    var r;
    var t;
    return (r = (t = kt(ge.baseStyle, e)) == null ? void 0 : t.field) != null
      ? r
      : {};
  },
  XR = { width: bh.reference },
  QR = {
    borderStart: "1px solid",
    borderStartColor: cd.reference,
    color: ud.reference,
    bg: sd.reference,
    [ud.variable]: "colors.chakra-body-text",
    [cd.variable]: "colors.chakra-border-color",
    _dark: {
      [ud.variable]: "colors.whiteAlpha.800",
      [cd.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [sd.variable]: "colors.gray.200",
      _dark: { [sd.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  ZR = Vb((e) => {
    var t;
    return {
      root: KR,
      field: (t = kt(YR, e)) != null ? t : {},
      stepperGroup: XR,
      stepper: QR,
    };
  });
function Kl(e) {
  var l;
  var t, r;
  const n = (t = ge.sizes) == null ? void 0 : t[e],
    o = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    a = (l = (r = n.field) == null ? void 0 : r.fontSize) != null ? l : "md",
    i = Ob.fontSizes[a];
  return Vb({
    field: { ...n.field, paddingInlineEnd: jb.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Xr(i).multiply(0.75).toString(),
      _first: { borderTopEndRadius: o[e] },
      _last: { borderBottomEndRadius: o[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var qR = { xs: Kl("xs"), sm: Kl("sm"), md: Kl("md"), lg: Kl("lg") },
  JR = UR({
    baseStyle: ZR,
    sizes: qR,
    variants: ge.variants,
    defaultProps: ge.defaultProps,
  }),
  Hm,
  e3 = {
    ...((Hm = ge.baseStyle) == null ? void 0 : Hm.field),
    textAlign: "center",
  },
  t3 = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  Um,
  Dg,
  r3 = {
    outline: (e) => {
      var n;
      var t, r;
      return (n =
        (r = kt((t = ge.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    flushed: (e) => {
      var n;
      var t, r;
      return (n =
        (r = kt((t = ge.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    filled: (e) => {
      var n;
      var t, r;
      return (n =
        (r = kt((t = ge.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    unstyled:
      (Dg = (Um = ge.variants) == null ? void 0 : Um.unstyled.field) != null
        ? Dg
        : {},
  },
  n3 = {
    baseStyle: e3,
    sizes: t3,
    variants: r3,
    defaultProps: ge.defaultProps,
  },
  { defineMultiStyleConfig: o3, definePartsStyle: a3 } = ze(y_.keys),
  Yl = nt("popper-bg"),
  i3 = nt("popper-arrow-bg"),
  Gm = nt("popper-arrow-shadow-color"),
  l3 = { zIndex: 10 },
  s3 = {
    [Yl.variable]: "colors.white",
    bg: Yl.reference,
    [i3.variable]: Yl.reference,
    [Gm.variable]: "colors.gray.200",
    _dark: {
      [Yl.variable]: "colors.gray.700",
      [Gm.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  u3 = { px: 3, py: 2, borderBottomWidth: "1px" },
  c3 = { px: 3, py: 2 },
  d3 = { px: 3, py: 2, borderTopWidth: "1px" },
  f3 = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  p3 = a3({
    popper: l3,
    content: s3,
    header: u3,
    body: c3,
    footer: d3,
    closeButton: f3,
  }),
  h3 = o3({ baseStyle: p3 }),
  { defineMultiStyleConfig: v3, definePartsStyle: ei } = ze(b_.keys),
  m3 = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      a = G(Nm(), Nm("1rem", "rgba(0,0,0,0.1)"))(e),
      i = G(`${t}.500`, `${t}.200`)(e),
      l = `linear-gradient(
    to right,
    transparent 0%,
    ${wt(r, i)} 50%,
    transparent 100%
  )`;
    return { ...(!n && o && a), ...(n ? { bgImage: l } : { bgColor: i }) };
  },
  g3 = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  y3 = (e) => ({ bg: G("gray.100", "whiteAlpha.300")(e) }),
  b3 = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...m3(e),
  }),
  S3 = ei((e) => ({ label: g3, filledTrack: b3(e), track: y3(e) })),
  x3 = {
    xs: ei({ track: { h: "1" } }),
    sm: ei({ track: { h: "2" } }),
    md: ei({ track: { h: "3" } }),
    lg: ei({ track: { h: "4" } }),
  },
  w3 = v3({
    sizes: x3,
    baseStyle: S3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: C3, definePartsStyle: Cs } = ze(S_.keys),
  k3 = (e) => {
    var t;
    const r = (t = kt(lu.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...r,
      borderRadius: "full",
      _checked: {
        ...(r == null ? void 0 : r._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  E3 = Cs((e) => {
    var t, r, n, o;
    return {
      label: (r = (t = lu).baseStyle) == null ? void 0 : r.call(t, e).label,
      container:
        (o = (n = lu).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: k3(e),
    };
  }),
  T3 = {
    md: Cs({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Cs({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Cs({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  _3 = C3({
    baseStyle: E3,
    sizes: T3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: P3, definePartsStyle: R3 } = ze(x_.keys),
  Xl = _e("select-bg"),
  Km,
  A3 = {
    ...((Km = ge.baseStyle) == null ? void 0 : Km.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: Xl.reference,
    [Xl.variable]: "colors.white",
    _dark: { [Xl.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: Xl.reference },
  },
  M3 = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  L3 = R3({ field: A3, icon: M3 }),
  Ql = { paddingInlineEnd: "8" },
  Ym,
  Xm,
  Qm,
  Zm,
  qm,
  Jm,
  e0,
  t0,
  z3 = {
    lg: {
      ...((Ym = ge.sizes) == null ? void 0 : Ym.lg),
      field: { ...((Xm = ge.sizes) == null ? void 0 : Xm.lg.field), ...Ql },
    },
    md: {
      ...((Qm = ge.sizes) == null ? void 0 : Qm.md),
      field: { ...((Zm = ge.sizes) == null ? void 0 : Zm.md.field), ...Ql },
    },
    sm: {
      ...((qm = ge.sizes) == null ? void 0 : qm.sm),
      field: { ...((Jm = ge.sizes) == null ? void 0 : Jm.sm.field), ...Ql },
    },
    xs: {
      ...((e0 = ge.sizes) == null ? void 0 : e0.xs),
      field: { ...((t0 = ge.sizes) == null ? void 0 : t0.xs.field), ...Ql },
      icon: { insetEnd: "1" },
    },
  },
  D3 = P3({
    baseStyle: L3,
    sizes: z3,
    variants: ge.variants,
    defaultProps: ge.defaultProps,
  }),
  dd = _e("skeleton-start-color"),
  fd = _e("skeleton-end-color"),
  B3 = {
    [dd.variable]: "colors.gray.100",
    [fd.variable]: "colors.gray.400",
    _dark: {
      [dd.variable]: "colors.gray.800",
      [fd.variable]: "colors.gray.600",
    },
    background: dd.reference,
    borderColor: fd.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  I3 = { baseStyle: B3 },
  pd = _e("skip-link-bg"),
  $3 = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [pd.variable]: "colors.white",
      _dark: { [pd.variable]: "colors.gray.700" },
      bg: pd.reference,
    },
  },
  N3 = { baseStyle: $3 },
  { defineMultiStyleConfig: F3, definePartsStyle: rc } = ze(w_.keys),
  Gi = _e("slider-thumb-size"),
  Ki = _e("slider-track-size"),
  kn = _e("slider-bg"),
  O3 = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...mh({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  V3 = (e) => ({
    ...mh({
      orientation: e.orientation,
      horizontal: { h: Ki.reference },
      vertical: { w: Ki.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [kn.variable]: "colors.gray.200",
    _dark: { [kn.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [kn.variable]: "colors.gray.300",
      _dark: { [kn.variable]: "colors.whiteAlpha.300" },
    },
    bg: kn.reference,
  }),
  j3 = (e) => {
    const { orientation: t } = e;
    return {
      ...mh({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: Gi.reference,
      h: Gi.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  W3 = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [kn.variable]: `colors.${t}.500`,
      _dark: { [kn.variable]: `colors.${t}.200` },
      bg: kn.reference,
    };
  },
  H3 = rc((e) => ({
    container: O3(e),
    track: V3(e),
    thumb: j3(e),
    filledTrack: W3(e),
  })),
  U3 = rc({
    container: { [Gi.variable]: "sizes.4", [Ki.variable]: "sizes.1" },
  }),
  G3 = rc({
    container: { [Gi.variable]: "sizes.3.5", [Ki.variable]: "sizes.1" },
  }),
  K3 = rc({
    container: { [Gi.variable]: "sizes.2.5", [Ki.variable]: "sizes.0.5" },
  }),
  Y3 = { lg: U3, md: G3, sm: K3 },
  X3 = F3({
    baseStyle: H3,
    sizes: Y3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Jn = nt("spinner-size"),
  Q3 = { width: [Jn.reference], height: [Jn.reference] },
  Z3 = {
    xs: { [Jn.variable]: "sizes.3" },
    sm: { [Jn.variable]: "sizes.4" },
    md: { [Jn.variable]: "sizes.6" },
    lg: { [Jn.variable]: "sizes.8" },
    xl: { [Jn.variable]: "sizes.12" },
  },
  q3 = { baseStyle: Q3, sizes: Z3, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: J3, definePartsStyle: Wb } = ze(C_.keys),
  eA = { fontWeight: "medium" },
  tA = { opacity: 0.8, marginBottom: "2" },
  rA = { verticalAlign: "baseline", fontWeight: "semibold" },
  nA = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  oA = Wb({ container: {}, label: eA, helpText: tA, number: rA, icon: nA }),
  aA = {
    md: Wb({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  iA = J3({ baseStyle: oA, sizes: aA, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: lA, definePartsStyle: ks } = ze(k_.keys),
  mi = nt("switch-track-width"),
  uo = nt("switch-track-height"),
  hd = nt("switch-track-diff"),
  sA = Xr.subtract(mi, uo),
  Vf = nt("switch-thumb-x"),
  Ua = nt("switch-bg"),
  uA = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [mi.reference],
      height: [uo.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [Ua.variable]: "colors.gray.300",
      _dark: { [Ua.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [Ua.variable]: `colors.${t}.500`,
        _dark: { [Ua.variable]: `colors.${t}.200` },
      },
      bg: Ua.reference,
    };
  },
  cA = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [uo.reference],
    height: [uo.reference],
    _checked: { transform: `translateX(${Vf.reference})` },
  },
  dA = ks((e) => ({
    container: {
      [hd.variable]: sA,
      [Vf.variable]: hd.reference,
      _rtl: { [Vf.variable]: Xr(hd).negate().toString() },
    },
    track: uA(e),
    thumb: cA,
  })),
  fA = {
    sm: ks({
      container: { [mi.variable]: "1.375rem", [uo.variable]: "sizes.3" },
    }),
    md: ks({
      container: { [mi.variable]: "1.875rem", [uo.variable]: "sizes.4" },
    }),
    lg: ks({
      container: { [mi.variable]: "2.875rem", [uo.variable]: "sizes.6" },
    }),
  },
  pA = lA({
    baseStyle: dA,
    sizes: fA,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: hA, definePartsStyle: la } = ze(E_.keys),
  vA = la({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  su = { "&[data-is-numeric=true]": { textAlign: "end" } },
  mA = la((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: G("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: G(`${t}.100`, `${t}.700`)(e),
        ...su,
      },
      td: {
        borderBottom: "1px",
        borderColor: G(`${t}.100`, `${t}.700`)(e),
        ...su,
      },
      caption: { color: G("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  gA = la((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: G("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: G(`${t}.100`, `${t}.700`)(e),
        ...su,
      },
      td: {
        borderBottom: "1px",
        borderColor: G(`${t}.100`, `${t}.700`)(e),
        ...su,
      },
      caption: { color: G("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: G(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: G(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  yA = { simple: mA, striped: gA, unstyled: {} },
  bA = {
    sm: la({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: la({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: la({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  SA = hA({
    baseStyle: vA,
    variants: yA,
    sizes: bA,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  Lt = _e("tabs-color"),
  xr = _e("tabs-bg"),
  Zl = _e("tabs-border-color"),
  { defineMultiStyleConfig: xA, definePartsStyle: Or } = ze(T_.keys),
  wA = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  CA = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  kA = (e) => {
    const { align: t = "start", orientation: r } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: r === "vertical" ? "column" : "row",
    };
  },
  EA = { p: 4 },
  TA = Or((e) => ({ root: wA(e), tab: CA(e), tablist: kA(e), tabpanel: EA })),
  _A = {
    sm: Or({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: Or({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: Or({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  PA = Or((e) => {
    const { colorScheme: t, orientation: r } = e,
      n = r === "vertical",
      o = r === "vertical" ? "borderStart" : "borderBottom",
      a = n ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [a]: "-2px",
        _selected: {
          [Lt.variable]: `colors.${t}.600`,
          _dark: { [Lt.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [xr.variable]: "colors.gray.200",
          _dark: { [xr.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: Lt.reference,
        bg: xr.reference,
      },
    };
  }),
  RA = Or((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [Zl.reference]: "transparent",
        _selected: {
          [Lt.variable]: `colors.${t}.600`,
          [Zl.variable]: "colors.white",
          _dark: {
            [Lt.variable]: `colors.${t}.300`,
            [Zl.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: Zl.reference,
        },
        color: Lt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  AA = Or((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [xr.variable]: "colors.gray.50",
        _dark: { [xr.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [xr.variable]: "colors.white",
          [Lt.variable]: `colors.${t}.600`,
          _dark: {
            [xr.variable]: "colors.gray.800",
            [Lt.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: Lt.reference,
        bg: xr.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  MA = Or((e) => {
    const { colorScheme: t, theme: r } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: wt(r, `${t}.700`), bg: wt(r, `${t}.100`) },
      },
    };
  }),
  LA = Or((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [Lt.variable]: "colors.gray.600",
        _dark: { [Lt.variable]: "inherit" },
        _selected: {
          [Lt.variable]: "colors.white",
          [xr.variable]: `colors.${t}.600`,
          _dark: {
            [Lt.variable]: "colors.gray.800",
            [xr.variable]: `colors.${t}.300`,
          },
        },
        color: Lt.reference,
        bg: xr.reference,
      },
    };
  }),
  zA = Or({}),
  DA = {
    line: PA,
    enclosed: RA,
    "enclosed-colored": AA,
    "soft-rounded": MA,
    "solid-rounded": LA,
    unstyled: zA,
  },
  BA = xA({
    baseStyle: TA,
    sizes: _A,
    variants: DA,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: IA, definePartsStyle: co } = ze(__.keys),
  $A = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    borderRadius: "md",
    _focusVisible: { boxShadow: "outline" },
  },
  NA = { lineHeight: 1.2, overflow: "visible" },
  FA = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  OA = co({ container: $A, label: NA, closeButton: FA }),
  VA = {
    sm: co({
      container: { minH: "5", minW: "5", fontSize: "xs", px: "2" },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: co({ container: { minH: "6", minW: "6", fontSize: "sm", px: "2" } }),
    lg: co({ container: { minH: "8", minW: "8", fontSize: "md", px: "3" } }),
  },
  jA = {
    subtle: co((e) => {
      var t;
      return { container: (t = pi.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: co((e) => {
      var t;
      return { container: (t = pi.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: co((e) => {
      var t;
      return { container: (t = pi.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  WA = IA({
    variants: jA,
    baseStyle: OA,
    sizes: VA,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  r0,
  HA = {
    ...((r0 = ge.baseStyle) == null ? void 0 : r0.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  n0,
  Bg,
  UA = {
    outline: (e) => {
      var r;
      var t;
      return (r = (t = ge.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? r
        : {};
    },
    flushed: (e) => {
      var r;
      var t;
      return (r = (t = ge.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? r
        : {};
    },
    filled: (e) => {
      var r;
      var t;
      return (r = (t = ge.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? r
        : {};
    },
    unstyled:
      (Bg = (n0 = ge.variants) == null ? void 0 : n0.unstyled.field) != null
        ? Bg
        : {},
  },
  o0,
  a0,
  i0,
  l0,
  Ig,
  $g,
  Ng,
  Fg,
  GA = {
    xs: (Ig = (o0 = ge.sizes) == null ? void 0 : o0.xs.field) != null ? Ig : {},
    sm: ($g = (a0 = ge.sizes) == null ? void 0 : a0.sm.field) != null ? $g : {},
    md: (Ng = (i0 = ge.sizes) == null ? void 0 : i0.md.field) != null ? Ng : {},
    lg: (Fg = (l0 = ge.sizes) == null ? void 0 : l0.lg.field) != null ? Fg : {},
  },
  KA = {
    baseStyle: HA,
    sizes: GA,
    variants: UA,
    defaultProps: { size: "md", variant: "outline" },
  },
  ql = nt("tooltip-bg"),
  vd = nt("tooltip-fg"),
  YA = nt("popper-arrow-bg"),
  XA = {
    bg: ql.reference,
    color: vd.reference,
    [ql.variable]: "colors.gray.700",
    [vd.variable]: "colors.whiteAlpha.900",
    _dark: {
      [ql.variable]: "colors.gray.300",
      [vd.variable]: "colors.gray.900",
    },
    [YA.variable]: ql.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  QA = { baseStyle: XA },
  ZA = {
    Accordion: hP,
    Alert: wP,
    Avatar: zP,
    Badge: pi,
    Breadcrumb: WP,
    Button: qP,
    Checkbox: lu,
    CloseButton: p5,
    Code: g5,
    Container: b5,
    Divider: k5,
    Drawer: B5,
    Editable: j5,
    Form: Y5,
    FormError: eR,
    FormLabel: rR,
    Heading: aR,
    Input: ge,
    Kbd: vR,
    Link: gR,
    List: wR,
    Menu: LR,
    Modal: WR,
    NumberInput: JR,
    PinInput: n3,
    Popover: h3,
    Progress: w3,
    Radio: _3,
    Select: D3,
    Skeleton: I3,
    SkipLink: N3,
    Slider: X3,
    Spinner: q3,
    Stat: iA,
    Switch: pA,
    Table: SA,
    Tabs: BA,
    Tag: WA,
    Textarea: KA,
    Tooltip: QA,
    Card: n5,
  },
  qA = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  JA = qA,
  e4 = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  t4 = e4,
  r4 = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  n4 = r4,
  o4 = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  a4 = o4,
  i4 = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  l4 = i4,
  s4 = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  u4 = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  c4 = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  d4 = { property: s4, easing: u4, duration: c4 },
  f4 = d4,
  p4 = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  h4 = p4,
  v4 = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  m4 = v4,
  g4 = {
    breakpoints: t4,
    zIndices: h4,
    radii: a4,
    blur: m4,
    colors: n4,
    ...Ob,
    sizes: $b,
    shadows: l4,
    space: Ib,
    borders: JA,
    transition: f4,
  },
  y4 = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  b4 = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": {
        borderColor: "chakra-border-color",
        wordWrap: "break-word",
      },
    },
  },
  S4 = "ltr",
  x4 = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  w4 = {
    semanticTokens: y4,
    direction: S4,
    ...g4,
    components: ZA,
    styles: b4,
    config: x4,
  },
  C4 = typeof Element < "u",
  k4 = typeof Map == "function",
  E4 = typeof Set == "function",
  T4 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Es(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Es(e[n], t[n])) return !1;
      return !0;
    }
    var a;
    if (k4 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Es(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (E4 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (T4 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (C4 && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") &&
          e.$$typeof
        ) &&
        !Es(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var _4 = function (t, r) {
  try {
    return Es(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
function Hb() {
  const e = k.exports.useContext(Hi);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
function P4() {
  const e = ih(),
    t = Hb();
  return { ...e, theme: t };
}
function R4(e, t, r) {
  var o, a;
  if (t == null) return t;
  const n = (i) => {
    var l, s;
    return (s = (l = e.__breakpoints) == null ? void 0 : l.asArray) == null
      ? void 0
      : s[i];
  };
  return (a = (o = n(t)) != null ? o : n(r)) != null ? a : r;
}
function A4(e, t, r) {
  var o, a;
  if (t == null) return t;
  const n = (i) => {
    var l, s;
    return (s = (l = e.__cssMap) == null ? void 0 : l[i]) == null
      ? void 0
      : s.value;
  };
  return (a = (o = n(t)) != null ? o : n(r)) != null ? a : r;
}
function M4(e, t, r) {
  const n = Array.isArray(t) ? t : [t],
    o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean),
      l = n.map((s, u) => {
        var f, c;
        if (e === "breakpoints") return R4(a, s, (f = i[u]) != null ? f : s);
        const d = `${e}.${s}`;
        return A4(a, d, (c = i[u]) != null ? c : s);
      });
    return Array.isArray(t) ? l : l[0];
  };
}
function L4(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = k.exports.useMemo(() => BE(r), [r]);
  return $t(FT, { theme: o, children: [A(z4, { root: t }), n] });
}
function z4({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return A(Ju, { styles: (r) => ({ [t]: r.__cssVars }) });
}
ZT({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function D4() {
  const { colorMode: e } = ih();
  return A(Ju, {
    styles: (t) => {
      const r = Eb(t, "styles.global"),
        n = Pb(r, { theme: t, colorMode: e });
      return n ? ob(n)(t) : void 0;
    },
  });
}
var B4 = new Set([
    ...IE,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  I4 = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function $4(e) {
  return I4.has(e) || !B4.has(e);
}
var N4 =
  ({ baseStyle: e }) =>
  (t) => {
    const { theme: r, css: n, __css: o, sx: a, ...i } = t,
      l = Tb(i, (f, c) => NE(c)),
      s = Pb(e, t),
      u = Object.assign({}, o, s, _b(l), a),
      d = ob(u)(t.theme);
    return n ? [d, n] : d;
  };
function md(e, t) {
  const { baseStyle: r, ...n } = t != null ? t : {};
  n.shouldForwardProp || (n.shouldForwardProp = $4);
  const o = N4({ baseStyle: r }),
    a = If(e, n)(o);
  return Q.forwardRef(function (s, u) {
    const { colorMode: d, forced: f } = ih();
    return Q.createElement(a, { ref: u, "data-theme": f ? d : void 0, ...s });
  });
}
function ne(e) {
  return k.exports.forwardRef(e);
}
function Ub(e, t = {}) {
  var d;
  const { styleConfig: r, ...n } = t,
    { theme: o, colorMode: a } = P4(),
    i = e ? Eb(o, `components.${e}`) : void 0,
    l = r || i,
    s = Dr(
      { theme: o, colorMode: a },
      (d = l == null ? void 0 : l.defaultProps) != null ? d : {},
      _b(YT(n, ["children"]))
    ),
    u = k.exports.useRef({});
  if (l) {
    const c = YE(l)(s);
    _4(u.current, c) || (u.current = c);
  }
  return u.current;
}
function cr(e, t = {}) {
  return Ub(e, t);
}
function Gb(e, t = {}) {
  return Ub(e, t);
}
function F4() {
  const e = new Map();
  return new Proxy(md, {
    apply(t, r, n) {
      return md(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, md(r)), e.get(r);
    },
  });
}
var te = F4();
function O4(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function _a(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = "useContext",
      providerName: o = "Provider",
      errorMessage: a,
    } = e,
    i = k.exports.createContext(void 0);
  i.displayName = t;
  function l() {
    var s;
    const u = k.exports.useContext(i);
    if (!u && r) {
      const d = new Error(a != null ? a : O4(n, o));
      throw (
        ((d.name = "ContextError"),
        (s = Error.captureStackTrace) == null || s.call(Error, d, l),
        d)
      );
    }
    return u;
  }
  return [i.Provider, l, i];
}
function V4(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function j4(...e) {
  return (t) => {
    e.forEach((r) => {
      V4(r, t);
    });
  };
}
function W4(...e) {
  return k.exports.useMemo(() => j4(...e), e);
}
var Pt = (...e) => e.filter(Boolean).join(" "),
  s0 = {
    path: $t("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        A("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        A("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        A("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Pa = ne((e, t) => {
    const {
        as: r,
        viewBox: n,
        color: o = "currentColor",
        focusable: a = !1,
        children: i,
        className: l,
        __css: s,
        ...u
      } = e,
      d = Pt("chakra-icon", l),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...s,
      },
      c = { ref: t, focusable: a, className: d, __css: f },
      h = n != null ? n : s0.viewBox;
    if (r && typeof r != "string")
      return Q.createElement(te.svg, { as: r, ...c, ...u });
    const m = i != null ? i : s0.path;
    return Q.createElement(
      te.svg,
      { verticalAlign: "middle", viewBox: h, ...c, ...u },
      m
    );
  });
Pa.displayName = "Icon";
function H4(e, t = []) {
  const r = k.exports.useRef(e);
  return (
    k.exports.useEffect(() => {
      r.current = e;
    }),
    k.exports.useCallback((...n) => {
      var o;
      return (o = r.current) == null ? void 0 : o.call(r, ...n);
    }, t)
  );
}
var jf = function (e, t) {
  return (
    (jf =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
      }),
    jf(e, t)
  );
};
function Kb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  jf(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var z = function () {
  return (
    (z =
      Object.assign ||
      function (t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
          r = arguments[n];
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }
        return t;
      }),
    z.apply(this, arguments)
  );
};
function Jt(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
}
function je(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    o,
    a = [],
    i;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) a.push(o.value);
  } catch (l) {
    i = { error: l };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
function Et(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var Gr = function (e) {
    return {
      isEnabled: function (t) {
        return e.some(function (r) {
          return !!t[r];
        });
      },
    };
  },
  Sh = {
    measureLayout: Gr(["layout", "layoutId", "drag", "_layoutResetTransform"]),
    animation: Gr([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
    ]),
    exit: Gr(["exit"]),
    drag: Gr(["drag", "dragControls"]),
    focus: Gr(["whileFocus"]),
    hover: Gr(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: Gr(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: Gr(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
    layoutAnimation: Gr(["layout", "layoutId"]),
  };
function U4(e) {
  for (var t in e) {
    var r = e[t];
    r !== null && (Sh[t].Component = r);
  }
}
var Yi = function () {},
  Yb = k.exports.createContext({ strict: !1 }),
  Xb = Object.keys(Sh),
  G4 = Xb.length;
function K4(e, t, r) {
  var n = [];
  if ((k.exports.useContext(Yb), !t)) return null;
  for (var o = 0; o < G4; o++) {
    var a = Xb[o],
      i = Sh[a],
      l = i.isEnabled,
      s = i.Component;
    l(e) && s && n.push(A(s, { ...z({ key: a }, e, { visualElement: t }) }));
  }
  return n;
}
var nc = k.exports.createContext({
    transformPagePoint: function (e) {
      return e;
    },
    isStatic: !1,
  }),
  oc = k.exports.createContext({});
function Y4() {
  return k.exports.useContext(oc).visualElement;
}
var Ra = k.exports.createContext(null);
function Xi(e) {
  var t = k.exports.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Qb() {
  var e = k.exports.useContext(Ra);
  if (e === null) return [!0, null];
  var t = e.isPresent,
    r = e.onExitComplete,
    n = e.register,
    o = q4();
  k.exports.useEffect(function () {
    return n(o);
  }, []);
  var a = function () {
    return r == null ? void 0 : r(o);
  };
  return !t && r ? [!1, a] : [!0];
}
function X4() {
  return Zb(k.exports.useContext(Ra));
}
function Zb(e) {
  return e === null ? !0 : e.isPresent;
}
var Q4 = 0,
  Z4 = function () {
    return Q4++;
  },
  q4 = function () {
    return Xi(Z4);
  },
  J4 = k.exports.createContext(null),
  pl = typeof window < "u",
  u0 = pl ? k.exports.useLayoutEffect : k.exports.useEffect;
function eM(e) {
  var t = e.layoutId,
    r = k.exports.useContext(J4);
  return r && t !== void 0 ? r + "-" + t : t;
}
function tM(e, t, r, n) {
  var o = k.exports.useContext(nc),
    a = k.exports.useContext(Yb),
    i = Y4(),
    l = k.exports.useContext(Ra),
    s = eM(r),
    u = k.exports.useRef(void 0);
  n || (n = a.renderer),
    !u.current &&
      n &&
      (u.current = n(e, {
        visualState: t,
        parent: i,
        props: z(z({}, r), { layoutId: s }),
        presenceId: l == null ? void 0 : l.id,
        blockInitialAnimation: (l == null ? void 0 : l.initial) === !1,
      }));
  var d = u.current;
  return (
    u0(function () {
      !d ||
        (d.setProps(z(z(z({}, o), r), { layoutId: s })),
        (d.isPresent = Zb(l)),
        (d.isPresenceRoot = !i || i.presenceId !== (l == null ? void 0 : l.id)),
        d.syncRender());
    }),
    k.exports.useEffect(function () {
      var f;
      !d ||
        (f = d.animationState) === null ||
        f === void 0 ||
        f.animateChanges();
    }),
    u0(function () {
      return function () {
        return d == null ? void 0 : d.notifyUnmount();
      };
    }, []),
    d
  );
}
function Wf(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function rM(e, t, r) {
  return k.exports.useCallback(
    function (n) {
      var o;
      n && ((o = e.mount) === null || o === void 0 || o.call(e, n)),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : Wf(r) && (r.current = n));
    },
    [t]
  );
}
function qb(e) {
  return Array.isArray(e);
}
function br(e) {
  return typeof e == "string" || qb(e);
}
function nM(e) {
  var t = {};
  return (
    e.forEachValue(function (r, n) {
      return (t[n] = r.get());
    }),
    t
  );
}
function oM(e) {
  var t = {};
  return (
    e.forEachValue(function (r, n) {
      return (t[n] = r.getVelocity());
    }),
    t
  );
}
function Jb(e, t, r, n, o) {
  var a;
  return (
    n === void 0 && (n = {}),
    o === void 0 && (o = {}),
    typeof t == "string" &&
      (t = (a = e.variants) === null || a === void 0 ? void 0 : a[t]),
    typeof t == "function" ? t(r != null ? r : e.custom, n, o) : t
  );
}
function ac(e, t, r) {
  var n = e.getProps();
  return Jb(n, t, r != null ? r : n.custom, nM(e), oM(e));
}
function ic(e) {
  var t;
  return (
    typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) ==
      "function" ||
    br(e.initial) ||
    br(e.animate) ||
    br(e.whileHover) ||
    br(e.whileDrag) ||
    br(e.whileTap) ||
    br(e.whileFocus) ||
    br(e.exit)
  );
}
function eS(e) {
  return Boolean(ic(e) || e.variants);
}
function aM(e, t) {
  if (ic(e)) {
    var r = e.initial,
      n = e.animate;
    return {
      initial: r === !1 || br(r) ? r : void 0,
      animate: br(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function iM(e, t) {
  var r = aM(e, k.exports.useContext(oc)),
    n = r.initial,
    o = r.animate;
  return k.exports.useMemo(
    function () {
      return { initial: n, animate: o };
    },
    t ? [c0(n), c0(o)] : []
  );
}
function c0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function lM(e) {
  var t = e.preloadedFeatures,
    r = e.createVisualElement,
    n = e.useRender,
    o = e.useVisualState,
    a = e.Component;
  t && U4(t);
  function i(l, s) {
    var u = k.exports.useContext(nc).isStatic,
      d = null,
      f = iM(l, u),
      c = o(l, u);
    return (
      !u &&
        pl &&
        ((f.visualElement = tM(a, c, l, r)), (d = K4(l, f.visualElement))),
      $t(ya, {
        children: [
          A(oc.Provider, {
            value: f,
            children: n(a, l, rM(c, f.visualElement, s), c, u),
          }),
          d,
        ],
      })
    );
  }
  return k.exports.forwardRef(i);
}
function sM(e) {
  function t(n, o) {
    return o === void 0 && (o = {}), lM(e(n, o));
  }
  var r = new Map();
  return new Proxy(t, {
    get: function (n, o) {
      return r.has(o) || r.set(o, t(o)), r.get(o);
    },
  });
}
var uM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view",
];
function xh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(uM.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var gi = {};
function cM(e) {
  for (var t in e) gi[t] = e[t];
}
var dM = ["", "X", "Y", "Z"],
  fM = ["translate", "scale", "rotate", "skew"],
  Qi = ["transformPerspective", "x", "y", "z"];
fM.forEach(function (e) {
  return dM.forEach(function (t) {
    return Qi.push(e + t);
  });
});
function pM(e, t) {
  return Qi.indexOf(e) - Qi.indexOf(t);
}
var hM = new Set(Qi);
function lc(e) {
  return hM.has(e);
}
var vM = new Set(["originX", "originY", "originZ"]);
function tS(e) {
  return vM.has(e);
}
function rS(e, t) {
  var r = t.layout,
    n = t.layoutId;
  return (
    lc(e) || tS(e) || ((r || n !== void 0) && (!!gi[e] || e === "opacity"))
  );
}
var Fn = function (e) {
    return e !== null && typeof e == "object" && e.getVelocity;
  },
  mM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  };
function gM(e, t, r, n) {
  var o = e.transform,
    a = e.transformKeys,
    i = t.enableHardwareAcceleration,
    l = i === void 0 ? !0 : i,
    s = t.allowTransformNone,
    u = s === void 0 ? !0 : s,
    d = "";
  a.sort(pM);
  for (var f = !1, c = a.length, h = 0; h < c; h++) {
    var m = a[h];
    (d += (mM[m] || m) + "(" + o[m] + ") "), m === "z" && (f = !0);
  }
  return (
    !f && l ? (d += "translateZ(0)") : (d = d.trim()),
    n ? (d = n(o, r ? "" : d)) : u && r && (d = "none"),
    d
  );
}
function yM(e) {
  var t = e.originX,
    r = t === void 0 ? "50%" : t,
    n = e.originY,
    o = n === void 0 ? "50%" : n,
    a = e.originZ,
    i = a === void 0 ? 0 : a;
  return r + " " + o + " " + i;
}
function nS(e) {
  return e.startsWith("--");
}
var bM = function (e, t) {
    return t && typeof e == "number" ? t.transform(e) : e;
  },
  oS = function (e, t) {
    return function (r) {
      return Math.max(Math.min(r, t), e);
    };
  },
  yi = function (e) {
    return e % 1 ? Number(e.toFixed(5)) : e;
  },
  Zi = /(-)?([\d]*\.?[\d])+/g,
  Hf =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  SM =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function hl(e) {
  return typeof e == "string";
}
var wo = {
    test: function (e) {
      return typeof e == "number";
    },
    parse: parseFloat,
    transform: function (e) {
      return e;
    },
  },
  bi = z(z({}, wo), { transform: oS(0, 1) }),
  Jl = z(z({}, wo), { default: 1 }),
  vl = function (e) {
    return {
      test: function (t) {
        return hl(t) && t.endsWith(e) && t.split(" ").length === 1;
      },
      parse: parseFloat,
      transform: function (t) {
        return "" + t + e;
      },
    };
  },
  bn = vl("deg"),
  sa = vl("%"),
  q = vl("px"),
  xM = vl("vh"),
  wM = vl("vw"),
  d0 = z(z({}, sa), {
    parse: function (e) {
      return sa.parse(e) / 100;
    },
    transform: function (e) {
      return sa.transform(e * 100);
    },
  }),
  wh = function (e, t) {
    return function (r) {
      return Boolean(
        (hl(r) && SM.test(r) && r.startsWith(e)) ||
          (t && Object.prototype.hasOwnProperty.call(r, t))
      );
    };
  },
  aS = function (e, t, r) {
    return function (n) {
      var o;
      if (!hl(n)) return n;
      var a = n.match(Zi),
        i = a[0],
        l = a[1],
        s = a[2],
        u = a[3];
      return (
        (o = {}),
        (o[e] = parseFloat(i)),
        (o[t] = parseFloat(l)),
        (o[r] = parseFloat(s)),
        (o.alpha = u !== void 0 ? parseFloat(u) : 1),
        o
      );
    };
  },
  Uo = {
    test: wh("hsl", "hue"),
    parse: aS("hue", "saturation", "lightness"),
    transform: function (e) {
      var t = e.hue,
        r = e.saturation,
        n = e.lightness,
        o = e.alpha,
        a = o === void 0 ? 1 : o;
      return (
        "hsla(" +
        Math.round(t) +
        ", " +
        sa.transform(yi(r)) +
        ", " +
        sa.transform(yi(n)) +
        ", " +
        yi(bi.transform(a)) +
        ")"
      );
    },
  },
  CM = oS(0, 255),
  gd = z(z({}, wo), {
    transform: function (e) {
      return Math.round(CM(e));
    },
  }),
  Go = {
    test: wh("rgb", "red"),
    parse: aS("red", "green", "blue"),
    transform: function (e) {
      var t = e.red,
        r = e.green,
        n = e.blue,
        o = e.alpha,
        a = o === void 0 ? 1 : o;
      return (
        "rgba(" +
        gd.transform(t) +
        ", " +
        gd.transform(r) +
        ", " +
        gd.transform(n) +
        ", " +
        yi(bi.transform(a)) +
        ")"
      );
    },
  };
function kM(e) {
  var t = "",
    r = "",
    n = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substr(1, 2)),
        (r = e.substr(3, 2)),
        (n = e.substr(5, 2)),
        (o = e.substr(7, 2)))
      : ((t = e.substr(1, 1)),
        (r = e.substr(2, 1)),
        (n = e.substr(3, 1)),
        (o = e.substr(4, 1)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
var Uf = { test: wh("#"), parse: kM, transform: Go.transform },
  St = {
    test: function (e) {
      return Go.test(e) || Uf.test(e) || Uo.test(e);
    },
    parse: function (e) {
      return Go.test(e) ? Go.parse(e) : Uo.test(e) ? Uo.parse(e) : Uf.parse(e);
    },
    transform: function (e) {
      return hl(e)
        ? e
        : e.hasOwnProperty("red")
        ? Go.transform(e)
        : Uo.transform(e);
    },
  },
  iS = "${c}",
  lS = "${n}";
function EM(e) {
  var t, r, n, o;
  return (
    isNaN(e) &&
    hl(e) &&
    ((r = (t = e.match(Zi)) === null || t === void 0 ? void 0 : t.length) !==
      null && r !== void 0
      ? r
      : 0) +
      ((o = (n = e.match(Hf)) === null || n === void 0 ? void 0 : n.length) !==
        null && o !== void 0
        ? o
        : 0) >
      0
  );
}
function sS(e) {
  var t = [],
    r = 0,
    n = e.match(Hf);
  n &&
    ((r = n.length), (e = e.replace(Hf, iS)), t.push.apply(t, n.map(St.parse)));
  var o = e.match(Zi);
  return (
    o && ((e = e.replace(Zi, lS)), t.push.apply(t, o.map(wo.parse))),
    { values: t, numColors: r, tokenised: e }
  );
}
function uS(e) {
  return sS(e).values;
}
function cS(e) {
  var t = sS(e),
    r = t.values,
    n = t.numColors,
    o = t.tokenised,
    a = r.length;
  return function (i) {
    for (var l = o, s = 0; s < a; s++)
      l = l.replace(s < n ? iS : lS, s < n ? St.transform(i[s]) : yi(i[s]));
    return l;
  };
}
var TM = function (e) {
  return typeof e == "number" ? 0 : e;
};
function _M(e) {
  var t = uS(e),
    r = cS(e);
  return r(t.map(TM));
}
var an = { test: EM, parse: uS, createTransformer: cS, getAnimatableNone: _M },
  PM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function RM(e) {
  var t = e.slice(0, -1).split("("),
    r = t[0],
    n = t[1];
  if (r === "drop-shadow") return e;
  var o = (n.match(Zi) || [])[0];
  if (!o) return e;
  var a = n.replace(o, ""),
    i = PM.has(r) ? 1 : 0;
  return o !== n && (i *= 100), r + "(" + i + a + ")";
}
var AM = /([a-z-]*)\(.*?\)/g,
  Gf = z(z({}, an), {
    getAnimatableNone: function (e) {
      var t = e.match(AM);
      return t ? t.map(RM).join(" ") : e;
    },
  }),
  f0 = z(z({}, wo), { transform: Math.round }),
  dS = {
    borderWidth: q,
    borderTopWidth: q,
    borderRightWidth: q,
    borderBottomWidth: q,
    borderLeftWidth: q,
    borderRadius: q,
    radius: q,
    borderTopLeftRadius: q,
    borderTopRightRadius: q,
    borderBottomRightRadius: q,
    borderBottomLeftRadius: q,
    width: q,
    maxWidth: q,
    height: q,
    maxHeight: q,
    size: q,
    top: q,
    right: q,
    bottom: q,
    left: q,
    padding: q,
    paddingTop: q,
    paddingRight: q,
    paddingBottom: q,
    paddingLeft: q,
    margin: q,
    marginTop: q,
    marginRight: q,
    marginBottom: q,
    marginLeft: q,
    rotate: bn,
    rotateX: bn,
    rotateY: bn,
    rotateZ: bn,
    scale: Jl,
    scaleX: Jl,
    scaleY: Jl,
    scaleZ: Jl,
    skew: bn,
    skewX: bn,
    skewY: bn,
    distance: q,
    translateX: q,
    translateY: q,
    translateZ: q,
    x: q,
    y: q,
    z: q,
    perspective: q,
    transformPerspective: q,
    opacity: bi,
    originX: d0,
    originY: d0,
    originZ: q,
    zIndex: f0,
    fillOpacity: bi,
    strokeOpacity: bi,
    numOctaves: f0,
  };
function Ch(e, t, r, n, o, a, i, l) {
  var s,
    u = e.style,
    d = e.vars,
    f = e.transform,
    c = e.transformKeys,
    h = e.transformOrigin;
  c.length = 0;
  var m = !1,
    g = !1,
    S = !0;
  for (var p in t) {
    var v = t[p];
    if (nS(p)) {
      d[p] = v;
      continue;
    }
    var b = dS[p],
      x = bM(v, b);
    if (lc(p)) {
      if (((m = !0), (f[p] = x), c.push(p), !S)) continue;
      v !== ((s = b.default) !== null && s !== void 0 ? s : 0) && (S = !1);
    } else if (tS(p)) (h[p] = x), (g = !0);
    else if (
      (r == null ? void 0 : r.isHydrated) &&
      (n == null ? void 0 : n.isHydrated) &&
      gi[p]
    ) {
      var E = gi[p].process(v, n, r),
        T = gi[p].applyTo;
      if (T) for (var _ = T.length, M = 0; M < _; M++) u[T[M]] = E;
      else u[p] = E;
    } else u[p] = x;
  }
  n && r && i && l
    ? ((u.transform = i(n.deltaFinal, n.treeScale, m ? f : void 0)),
      a && (u.transform = a(f, u.transform)),
      (u.transformOrigin = l(n)))
    : (m && (u.transform = gM(e, o, S, a)), g && (u.transformOrigin = yM(h)));
}
var kh = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
  };
};
function fS(e, t, r) {
  for (var n in t) !Fn(t[n]) && !rS(n, r) && (e[n] = t[n]);
}
function MM(e, t, r) {
  var n = e.transformTemplate;
  return k.exports.useMemo(
    function () {
      var o = kh();
      Ch(o, t, void 0, void 0, { enableHardwareAcceleration: !r }, n);
      var a = o.vars,
        i = o.style;
      return z(z({}, a), i);
    },
    [t]
  );
}
function LM(e, t, r) {
  var n = e.style || {},
    o = {};
  return (
    fS(o, n, e),
    Object.assign(o, MM(e, t, r)),
    e.transformValues && (o = e.transformValues(o)),
    o
  );
}
function zM(e, t, r) {
  var n = {},
    o = LM(e, t, r);
  return (
    Boolean(e.drag) &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : "pan-" + (e.drag === "x" ? "y" : "x"))),
    (n.style = o),
    n
  );
}
var DM = new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "_layoutResetTransform",
  "onLayoutAnimationComplete",
  "onViewportBoxUpdate",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
]);
function uu(e) {
  return DM.has(e);
}
var pS = function (e) {
  return !uu(e);
};
try {
  var BM = require("@emotion/is-prop-valid").default;
  pS = function (e) {
    return e.startsWith("on") ? !uu(e) : BM(e);
  };
} catch {}
function IM(e, t, r) {
  var n = {};
  for (var o in e)
    (pS(o) || (r === !0 && uu(o)) || (!t && !uu(o))) && (n[o] = e[o]);
  return n;
}
function p0(e, t, r) {
  return typeof e == "string" ? e : q.transform(t + r * e);
}
function $M(e, t, r) {
  var n = p0(t, e.x, e.width),
    o = p0(r, e.y, e.height);
  return n + " " + o;
}
var yd = function (e, t) {
    return q.transform(e * t);
  },
  NM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  FM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function OM(e, t, r, n, o, a) {
  n === void 0 && (n = 1), o === void 0 && (o = 0), a === void 0 && (a = !0);
  var i = a ? NM : FM;
  e[i.offset] = yd(-o, t);
  var l = yd(r, t),
    s = yd(n, t);
  e[i.array] = l + " " + s;
}
function Eh(e, t, r, n, o, a, i, l) {
  var s = t.attrX,
    u = t.attrY,
    d = t.originX,
    f = t.originY,
    c = t.pathLength,
    h = t.pathSpacing,
    m = h === void 0 ? 1 : h,
    g = t.pathOffset,
    S = g === void 0 ? 0 : g,
    p = Jt(t, [
      "attrX",
      "attrY",
      "originX",
      "originY",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  Ch(e, p, r, n, o, a, i, l), (e.attrs = e.style), (e.style = {});
  var v = e.attrs,
    b = e.style,
    x = e.dimensions,
    E = e.totalPathLength;
  v.transform && (x && (b.transform = v.transform), delete v.transform),
    x &&
      (d !== void 0 || f !== void 0 || b.transform) &&
      (b.transformOrigin = $M(
        x,
        d !== void 0 ? d : 0.5,
        f !== void 0 ? f : 0.5
      )),
    s !== void 0 && (v.x = s),
    u !== void 0 && (v.y = u),
    E !== void 0 && c !== void 0 && OM(v, E, c, m, S, !1);
}
var hS = function () {
  return z(z({}, kh()), { attrs: {} });
};
function VM(e, t) {
  var r = k.exports.useMemo(
    function () {
      var o = hS();
      return (
        Eh(
          o,
          t,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          e.transformTemplate
        ),
        z(z({}, o.attrs), { style: z({}, o.style) })
      );
    },
    [t]
  );
  if (e.style) {
    var n = {};
    fS(n, e.style, e), (r.style = z(z({}, n), r.style));
  }
  return r;
}
function jM(e) {
  e === void 0 && (e = !1);
  var t = function (r, n, o, a, i) {
    var l = a.latestValues,
      s = xh(r) ? VM : zM,
      u = s(n, l, i),
      d = IM(n, typeof r == "string", e),
      f = z(z(z({}, d), u), { ref: o });
    return k.exports.createElement(r, f);
  };
  return t;
}
var WM = /([a-z])([A-Z])/g,
  HM = "$1-$2",
  vS = function (e) {
    return e.replace(WM, HM).toLowerCase();
  };
function mS(e, t) {
  var r = t.style,
    n = t.vars;
  Object.assign(e.style, r);
  for (var o in n) e.style.setProperty(o, n[o]);
}
var gS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
]);
function yS(e, t) {
  mS(e, t);
  for (var r in t.attrs) e.setAttribute(gS.has(r) ? r : vS(r), t.attrs[r]);
}
function Th(e) {
  var t = e.style,
    r = {};
  for (var n in t) (Fn(t[n]) || rS(n, e)) && (r[n] = t[n]);
  return r;
}
function bS(e) {
  var t = Th(e);
  for (var r in e)
    if (Fn(e[r])) {
      var n = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function _h(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var qi = function (e) {
    return Array.isArray(e);
  },
  UM = function (e) {
    return Boolean(e && typeof e == "object" && e.mix && e.toValue);
  },
  GM = function (e) {
    return qi(e) ? e[e.length - 1] || 0 : e;
  };
function KM(e) {
  var t = Fn(e) ? e.get() : e;
  return UM(t) ? t.toValue() : t;
}
function h0(e, t, r, n) {
  var o = e.scrapeMotionValuesFromProps,
    a = e.createRenderState,
    i = e.onMount,
    l = { latestValues: YM(t, r, n, o), renderState: a() };
  return (
    i &&
      (l.mount = function (s) {
        return i(t, s, l);
      }),
    l
  );
}
var SS = function (e) {
  return function (t, r) {
    var n = k.exports.useContext(oc),
      o = k.exports.useContext(Ra);
    return r
      ? h0(e, t, n, o)
      : Xi(function () {
          return h0(e, t, n, o);
        });
  };
};
function YM(e, t, r, n) {
  var o = {},
    a = (r == null ? void 0 : r.initial) === !1,
    i = n(e);
  for (var l in i) o[l] = KM(i[l]);
  var s = e.initial,
    u = e.animate,
    d = ic(e),
    f = eS(e);
  t &&
    f &&
    !d &&
    e.inherit !== !1 &&
    (s != null || (s = t.initial), u != null || (u = t.animate));
  var c = a || s === !1 ? u : s;
  if (c && typeof c != "boolean" && !_h(c)) {
    var h = Array.isArray(c) ? c : [c];
    h.forEach(function (m) {
      var g = Jb(e, m);
      if (!!g) {
        var S = g.transitionEnd;
        g.transition;
        var p = Jt(g, ["transitionEnd", "transition"]);
        for (var v in p) o[v] = p[v];
        for (var v in S) o[v] = S[v];
      }
    });
  }
  return o;
}
var XM = {
  useVisualState: SS({
    scrapeMotionValuesFromProps: bS,
    createRenderState: hS,
    onMount: function (e, t, r) {
      var n = r.renderState,
        o = r.latestValues;
      try {
        n.dimensions =
          typeof t.getBBox == "function"
            ? t.getBBox()
            : t.getBoundingClientRect();
      } catch {
        n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
      }
      QM(t) && (n.totalPathLength = t.getTotalLength()),
        Eh(
          n,
          o,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          e.transformTemplate
        ),
        yS(t, n);
    },
  }),
};
function QM(e) {
  return e.tagName === "path";
}
var ZM = {
  useVisualState: SS({
    scrapeMotionValuesFromProps: Th,
    createRenderState: kh,
  }),
};
function qM(e, t, r, n) {
  var o = t.forwardMotionProps,
    a = o === void 0 ? !1 : o,
    i = xh(e) ? XM : ZM;
  return z(z({}, i), {
    preloadedFeatures: r,
    useRender: jM(a),
    createVisualElement: n,
    Component: e,
  });
}
var Ue;
(function (e) {
  (e.Animate = "animate"),
    (e.Hover = "whileHover"),
    (e.Tap = "whileTap"),
    (e.Drag = "whileDrag"),
    (e.Focus = "whileFocus"),
    (e.Exit = "exit");
})(Ue || (Ue = {}));
function Ph(e, t, r, n) {
  return (
    e.addEventListener(t, r, n),
    function () {
      return e.removeEventListener(t, r, n);
    }
  );
}
function Kf(e, t, r, n) {
  k.exports.useEffect(
    function () {
      var o = e.current;
      if (r && o) return Ph(o, t, r, n);
    },
    [e, t, r, n]
  );
}
function JM(e) {
  var t = e.whileFocus,
    r = e.visualElement,
    n = function () {
      var a;
      (a = r.animationState) === null ||
        a === void 0 ||
        a.setActive(Ue.Focus, !0);
    },
    o = function () {
      var a;
      (a = r.animationState) === null ||
        a === void 0 ||
        a.setActive(Ue.Focus, !1);
    };
  Kf(r, "focus", t ? n : void 0), Kf(r, "blur", t ? o : void 0);
}
function xS(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent
    ? e.pointerType === "mouse"
    : e instanceof MouseEvent;
}
function wS(e) {
  var t = !!e.touches;
  return t;
}
function eL(e) {
  return function (t) {
    var r = t instanceof MouseEvent,
      n = !r || (r && t.button === 0);
    n && e(t);
  };
}
var tL = { pageX: 0, pageY: 0 };
function rL(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0],
    n = r || tL;
  return { x: n[t + "X"], y: n[t + "Y"] };
}
function nL(e, t) {
  return t === void 0 && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
}
function Rh(e, t) {
  return t === void 0 && (t = "page"), { point: wS(e) ? rL(e, t) : nL(e, t) };
}
function oL(e) {
  return Rh(e, "client");
}
var CS = function (e, t) {
    t === void 0 && (t = !1);
    var r = function (n) {
      return e(n, Rh(n));
    };
    return t ? eL(r) : r;
  },
  aL = function () {
    return pl && window.onpointerdown === null;
  },
  iL = function () {
    return pl && window.ontouchstart === null;
  },
  lL = function () {
    return pl && window.onmousedown === null;
  },
  sL = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
  },
  uL = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
  };
function kS(e) {
  return aL() ? e : iL() ? uL[e] : lL() ? sL[e] : e;
}
function ua(e, t, r, n) {
  return Ph(e, kS(t), CS(r, t === "pointerdown"), n);
}
function cu(e, t, r, n) {
  return Kf(e, kS(t), r && CS(r, t === "pointerdown"), n);
}
function ES(e) {
  var t = null;
  return function () {
    var r = function () {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
var v0 = ES("dragHorizontal"),
  m0 = ES("dragVertical");
function TS(e) {
  var t = !1;
  if (e === "y") t = m0();
  else if (e === "x") t = v0();
  else {
    var r = v0(),
      n = m0();
    r && n
      ? (t = function () {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function _S() {
  var e = TS(!0);
  return e ? (e(), !1) : !0;
}
function g0(e, t, r) {
  return function (n, o) {
    var a;
    !xS(n) ||
      _S() ||
      (r == null || r(n, o),
      (a = e.animationState) === null ||
        a === void 0 ||
        a.setActive(Ue.Hover, t));
  };
}
function cL(e) {
  var t = e.onHoverStart,
    r = e.onHoverEnd,
    n = e.whileHover,
    o = e.visualElement;
  cu(o, "pointerenter", t || n ? g0(o, !0, t) : void 0),
    cu(o, "pointerleave", r || n ? g0(o, !1, r) : void 0);
}
var PS = function (e, t) {
  return t ? (e === t ? !0 : PS(e, t.parentElement)) : !1;
};
function Ah(e) {
  return k.exports.useEffect(function () {
    return function () {
      return e();
    };
  }, []);
}
var du = function (e, t, r) {
    return Math.min(Math.max(r, e), t);
  },
  bd = 0.001,
  dL = 0.01,
  fL = 10,
  pL = 0.05,
  hL = 1;
function vL(e) {
  var t = e.duration,
    r = t === void 0 ? 800 : t,
    n = e.bounce,
    o = n === void 0 ? 0.25 : n,
    a = e.velocity,
    i = a === void 0 ? 0 : a,
    l = e.mass,
    s = l === void 0 ? 1 : l,
    u,
    d,
    f = 1 - o;
  (f = du(pL, hL, f)),
    (r = du(dL, fL, r / 1e3)),
    f < 1
      ? ((u = function (g) {
          var S = g * f,
            p = S * r,
            v = S - i,
            b = Yf(g, f),
            x = Math.exp(-p);
          return bd - (v / b) * x;
        }),
        (d = function (g) {
          var S = g * f,
            p = S * r,
            v = p * i + i,
            b = Math.pow(f, 2) * Math.pow(g, 2) * r,
            x = Math.exp(-p),
            E = Yf(Math.pow(g, 2), f),
            T = -u(g) + bd > 0 ? -1 : 1;
          return (T * ((v - b) * x)) / E;
        }))
      : ((u = function (g) {
          var S = Math.exp(-g * r),
            p = (g - i) * r + 1;
          return -bd + S * p;
        }),
        (d = function (g) {
          var S = Math.exp(-g * r),
            p = (i - g) * (r * r);
          return S * p;
        }));
  var c = 5 / r,
    h = gL(u, d, c);
  if (((r = r * 1e3), isNaN(h)))
    return { stiffness: 100, damping: 10, duration: r };
  var m = Math.pow(h, 2) * s;
  return { stiffness: m, damping: f * 2 * Math.sqrt(s * m), duration: r };
}
var mL = 12;
function gL(e, t, r) {
  for (var n = r, o = 1; o < mL; o++) n = n - e(n) / t(n);
  return n;
}
function Yf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var yL = ["duration", "bounce"],
  bL = ["stiffness", "damping", "mass"];
function y0(e, t) {
  return t.some(function (r) {
    return e[r] !== void 0;
  });
}
function SL(e) {
  var t = z(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    e
  );
  if (!y0(e, bL) && y0(e, yL)) {
    var r = vL(e);
    (t = z(z(z({}, t), r), { velocity: 0, mass: 1 })),
      (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Mh(e) {
  var t = e.from,
    r = t === void 0 ? 0 : t,
    n = e.to,
    o = n === void 0 ? 1 : n,
    a = e.restSpeed,
    i = a === void 0 ? 2 : a,
    l = e.restDelta,
    s = Jt(e, ["from", "to", "restSpeed", "restDelta"]),
    u = { done: !1, value: r },
    d = SL(s),
    f = d.stiffness,
    c = d.damping,
    h = d.mass,
    m = d.velocity,
    g = d.duration,
    S = d.isResolvedFromDuration,
    p = b0,
    v = b0;
  function b() {
    var x = m ? -(m / 1e3) : 0,
      E = o - r,
      T = c / (2 * Math.sqrt(f * h)),
      _ = Math.sqrt(f / h) / 1e3;
    if ((l != null || (l = Math.abs(o - r) <= 1 ? 0.01 : 0.4), T < 1)) {
      var M = Yf(_, T);
      (p = function (B) {
        var K = Math.exp(-T * _ * B);
        return (
          o -
          K * (((x + T * _ * E) / M) * Math.sin(M * B) + E * Math.cos(M * B))
        );
      }),
        (v = function (B) {
          var K = Math.exp(-T * _ * B);
          return (
            T *
              _ *
              K *
              ((Math.sin(M * B) * (x + T * _ * E)) / M + E * Math.cos(M * B)) -
            K * (Math.cos(M * B) * (x + T * _ * E) - M * E * Math.sin(M * B))
          );
        });
    } else if (T === 1)
      p = function (B) {
        return o - Math.exp(-_ * B) * (E + (x + _ * E) * B);
      };
    else {
      var I = _ * Math.sqrt(T * T - 1);
      p = function (B) {
        var K = Math.exp(-T * _ * B),
          ce = Math.min(I * B, 300);
        return (
          o -
          (K * ((x + T * _ * E) * Math.sinh(ce) + I * E * Math.cosh(ce))) / I
        );
      };
    }
  }
  return (
    b(),
    {
      next: function (x) {
        var E = p(x);
        if (S) u.done = x >= g;
        else {
          var T = v(x) * 1e3,
            _ = Math.abs(T) <= i,
            M = Math.abs(o - E) <= l;
          u.done = _ && M;
        }
        return (u.value = u.done ? o : E), u;
      },
      flipTarget: function () {
        var x;
        (m = -m), (x = [o, r]), (r = x[0]), (o = x[1]), b();
      },
    }
  );
}
Mh.needsInterpolation = function (e, t) {
  return typeof e == "string" || typeof t == "string";
};
var b0 = function (e) {
    return 0;
  },
  Ji = function (e, t, r) {
    var n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  Ft = function (e, t, r) {
    return -r * e + r * t + e;
  },
  xL = function (e, t, r) {
    var n = e * e,
      o = t * t;
    return Math.sqrt(Math.max(0, r * (o - n) + n));
  },
  wL = [Uf, Go, Uo],
  S0 = function (e) {
    return wL.find(function (t) {
      return t.test(e);
    });
  },
  RS = function (e, t) {
    var r = S0(e),
      n = S0(t);
    Yi(r.transform === n.transform);
    var o = r.parse(e),
      a = n.parse(t),
      i = z({}, o),
      l = r === Uo ? Ft : xL;
    return function (s) {
      for (var u in i) u !== "alpha" && (i[u] = l(o[u], a[u], s));
      return (i.alpha = Ft(o.alpha, a.alpha, s)), r.transform(i);
    };
  },
  Xf = function (e) {
    return typeof e == "number";
  },
  CL = function (e, t) {
    return function (r) {
      return t(e(r));
    };
  },
  ml = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.reduce(CL);
  };
function AS(e, t) {
  return Xf(e)
    ? function (r) {
        return Ft(e, t, r);
      }
    : St.test(e)
    ? RS(e, t)
    : LS(e, t);
}
var MS = function (e, t) {
    var r = Et([], e),
      n = r.length,
      o = e.map(function (a, i) {
        return AS(a, t[i]);
      });
    return function (a) {
      for (var i = 0; i < n; i++) r[i] = o[i](a);
      return r;
    };
  },
  kL = function (e, t) {
    var r = z(z({}, e), t),
      n = {};
    for (var o in r)
      e[o] !== void 0 && t[o] !== void 0 && (n[o] = AS(e[o], t[o]));
    return function (a) {
      for (var i in n) r[i] = n[i](a);
      return r;
    };
  };
function x0(e) {
  for (
    var t = an.parse(e), r = t.length, n = 0, o = 0, a = 0, i = 0;
    i < r;
    i++
  )
    n || typeof t[i] == "number" ? n++ : t[i].hue !== void 0 ? a++ : o++;
  return { parsed: t, numNumbers: n, numRGB: o, numHSL: a };
}
var LS = function (e, t) {
    var r = an.createTransformer(t),
      n = x0(e),
      o = x0(t);
    return ml(MS(n.parsed, o.parsed), r);
  },
  EL = function (e, t) {
    return function (r) {
      return Ft(e, t, r);
    };
  };
function TL(e) {
  if (typeof e == "number") return EL;
  if (typeof e == "string") return St.test(e) ? RS : LS;
  if (Array.isArray(e)) return MS;
  if (typeof e == "object") return kL;
}
function _L(e, t, r) {
  for (var n = [], o = r || TL(e[0]), a = e.length - 1, i = 0; i < a; i++) {
    var l = o(e[i], e[i + 1]);
    if (t) {
      var s = Array.isArray(t) ? t[i] : t;
      l = ml(s, l);
    }
    n.push(l);
  }
  return n;
}
function PL(e, t) {
  var r = e[0],
    n = e[1],
    o = t[0];
  return function (a) {
    return o(Ji(r, n, a));
  };
}
function RL(e, t) {
  var r = e.length,
    n = r - 1;
  return function (o) {
    var a = 0,
      i = !1;
    if ((o <= e[0] ? (i = !0) : o >= e[n] && ((a = n - 1), (i = !0)), !i)) {
      for (var l = 1; l < r && !(e[l] > o || l === n); l++);
      a = l - 1;
    }
    var s = Ji(e[a], e[a + 1], o);
    return t[a](s);
  };
}
function zS(e, t, r) {
  var n = r === void 0 ? {} : r,
    o = n.clamp,
    a = o === void 0 ? !0 : o,
    i = n.ease,
    l = n.mixer,
    s = e.length;
  Yi(s === t.length),
    Yi(!i || !Array.isArray(i) || i.length === s - 1),
    e[0] > e[s - 1] &&
      ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
  var u = _L(t, i, l),
    d = s === 2 ? PL(e, u) : RL(e, u);
  return a
    ? function (f) {
        return d(du(e[0], e[s - 1], f));
      }
    : d;
}
var sc = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Lh = function (e) {
    return function (t) {
      return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    };
  },
  AL = function (e) {
    return function (t) {
      return Math.pow(t, e);
    };
  },
  DS = function (e) {
    return function (t) {
      return t * t * ((e + 1) * t - e);
    };
  },
  ML = function (e) {
    var t = DS(e);
    return function (r) {
      return (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
    };
  },
  BS = 1.525,
  LL = 4 / 11,
  zL = 8 / 11,
  DL = 9 / 10,
  IS = function (e) {
    return e;
  },
  zh = AL(2),
  BL = sc(zh),
  $S = Lh(zh),
  NS = function (e) {
    return 1 - Math.sin(Math.acos(e));
  },
  FS = sc(NS),
  IL = Lh(FS),
  Dh = DS(BS),
  $L = sc(Dh),
  NL = Lh(Dh),
  FL = ML(BS),
  OL = 4356 / 361,
  VL = 35442 / 1805,
  jL = 16061 / 1805,
  fu = function (e) {
    if (e === 1 || e === 0) return e;
    var t = e * e;
    return e < LL
      ? 7.5625 * t
      : e < zL
      ? 9.075 * t - 9.9 * e + 3.4
      : e < DL
      ? OL * t - VL * e + jL
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  WL = sc(fu),
  HL = function (e) {
    return e < 0.5 ? 0.5 * (1 - fu(1 - e * 2)) : 0.5 * fu(e * 2 - 1) + 0.5;
  };
function UL(e, t) {
  return e
    .map(function () {
      return t || $S;
    })
    .splice(0, e.length - 1);
}
function GL(e) {
  var t = e.length;
  return e.map(function (r, n) {
    return n !== 0 ? n / (t - 1) : 0;
  });
}
function KL(e, t) {
  return e.map(function (r) {
    return r * t;
  });
}
function Ts(e) {
  var t = e.from,
    r = t === void 0 ? 0 : t,
    n = e.to,
    o = n === void 0 ? 1 : n,
    a = e.ease,
    i = e.offset,
    l = e.duration,
    s = l === void 0 ? 300 : l,
    u = { done: !1, value: r },
    d = Array.isArray(o) ? o : [r, o],
    f = KL(i && i.length === d.length ? i : GL(d), s);
  function c() {
    return zS(f, d, { ease: Array.isArray(a) ? a : UL(d, a) });
  }
  var h = c();
  return {
    next: function (m) {
      return (u.value = h(m)), (u.done = m >= s), u;
    },
    flipTarget: function () {
      d.reverse(), (h = c());
    },
  };
}
function YL(e) {
  var t = e.velocity,
    r = t === void 0 ? 0 : t,
    n = e.from,
    o = n === void 0 ? 0 : n,
    a = e.power,
    i = a === void 0 ? 0.8 : a,
    l = e.timeConstant,
    s = l === void 0 ? 350 : l,
    u = e.restDelta,
    d = u === void 0 ? 0.5 : u,
    f = e.modifyTarget,
    c = { done: !1, value: o },
    h = i * r,
    m = o + h,
    g = f === void 0 ? m : f(m);
  return (
    g !== m && (h = g - o),
    {
      next: function (S) {
        var p = -h * Math.exp(-S / s);
        return (c.done = !(p > d || p < -d)), (c.value = c.done ? g : g + p), c;
      },
      flipTarget: function () {},
    }
  );
}
var w0 = { keyframes: Ts, spring: Mh, decay: YL };
function XL(e) {
  if (Array.isArray(e.to)) return Ts;
  if (w0[e.type]) return w0[e.type];
  var t = new Set(Object.keys(e));
  return t.has("ease") || (t.has("duration") && !t.has("dampingRatio"))
    ? Ts
    : t.has("dampingRatio") ||
      t.has("stiffness") ||
      t.has("mass") ||
      t.has("damping") ||
      t.has("restSpeed") ||
      t.has("restDelta")
    ? Mh
    : Ts;
}
function OS(e, t, r) {
  return r === void 0 && (r = 0), e - t - r;
}
function QL(e, t, r, n) {
  return (
    r === void 0 && (r = 0),
    n === void 0 && (n = !0),
    n ? OS(t + -e, t, r) : t - (e - t) + r
  );
}
function ZL(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
var qL = function (e) {
  var t = function (r) {
    var n = r.delta;
    return e(n);
  };
  return {
    start: function () {
      return Br.update(t, !0);
    },
    stop: function () {
      return fi.update(t);
    },
  };
};
function VS(e) {
  var t,
    r,
    n = e.from,
    o = e.autoplay,
    a = o === void 0 ? !0 : o,
    i = e.driver,
    l = i === void 0 ? qL : i,
    s = e.elapsed,
    u = s === void 0 ? 0 : s,
    d = e.repeat,
    f = d === void 0 ? 0 : d,
    c = e.repeatType,
    h = c === void 0 ? "loop" : c,
    m = e.repeatDelay,
    g = m === void 0 ? 0 : m,
    S = e.onPlay,
    p = e.onStop,
    v = e.onComplete,
    b = e.onRepeat,
    x = e.onUpdate,
    E = Jt(e, [
      "from",
      "autoplay",
      "driver",
      "elapsed",
      "repeat",
      "repeatType",
      "repeatDelay",
      "onPlay",
      "onStop",
      "onComplete",
      "onRepeat",
      "onUpdate",
    ]),
    T = E.to,
    _,
    M = 0,
    I = E.duration,
    B,
    K = !1,
    ce = !0,
    xe,
    ee = XL(E);
  !((r = (t = ee).needsInterpolation) === null || r === void 0) &&
    r.call(t, n, T) &&
    ((xe = zS([0, 100], [n, T], { clamp: !1 })), (n = 0), (T = 100));
  var We = ee(z(z({}, E), { from: n, to: T }));
  function oe() {
    M++,
      h === "reverse"
        ? ((ce = M % 2 === 0), (u = QL(u, I, g, ce)))
        : ((u = OS(u, I, g)), h === "mirror" && We.flipTarget()),
      (K = !1),
      b && b();
  }
  function Ge() {
    _.stop(), v && v();
  }
  function F(H) {
    if ((ce || (H = -H), (u += H), !K)) {
      var J = We.next(Math.max(0, u));
      (B = J.value), xe && (B = xe(B)), (K = ce ? J.done : u <= 0);
    }
    x == null || x(B),
      K &&
        (M === 0 && (I != null || (I = u)),
        M < f ? ZL(u, I, g, ce) && oe() : Ge());
  }
  function Y() {
    S == null || S(), (_ = l(F)), _.start();
  }
  return (
    a && Y(),
    {
      stop: function () {
        p == null || p(), _.stop();
      },
    }
  );
}
function jS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function JL(e) {
  var t = e.from,
    r = t === void 0 ? 0 : t,
    n = e.velocity,
    o = n === void 0 ? 0 : n,
    a = e.min,
    i = e.max,
    l = e.power,
    s = l === void 0 ? 0.8 : l,
    u = e.timeConstant,
    d = u === void 0 ? 750 : u,
    f = e.bounceStiffness,
    c = f === void 0 ? 500 : f,
    h = e.bounceDamping,
    m = h === void 0 ? 10 : h,
    g = e.restDelta,
    S = g === void 0 ? 1 : g,
    p = e.modifyTarget,
    v = e.driver,
    b = e.onUpdate,
    x = e.onComplete,
    E;
  function T(oe) {
    return (a !== void 0 && oe < a) || (i !== void 0 && oe > i);
  }
  function _(oe) {
    return a === void 0
      ? i
      : i === void 0 || Math.abs(a - oe) < Math.abs(i - oe)
      ? a
      : i;
  }
  function M(oe) {
    E == null || E.stop(),
      (E = VS(
        z(z({}, oe), {
          driver: v,
          onUpdate: function (Ge) {
            var F;
            b == null || b(Ge),
              (F = oe.onUpdate) === null || F === void 0 || F.call(oe, Ge);
          },
          onComplete: x,
        })
      ));
  }
  function I(oe) {
    M(z({ type: "spring", stiffness: c, damping: m, restDelta: S }, oe));
  }
  if (T(r)) I({ from: r, velocity: o, to: _(r) });
  else {
    var B = s * o + r;
    typeof p < "u" && (B = p(B));
    var K = _(B),
      ce = K === a ? -1 : 1,
      xe,
      ee,
      We = function (oe) {
        (xe = ee),
          (ee = oe),
          (o = jS(oe - xe, ou().delta)),
          ((ce === 1 && oe > K) || (ce === -1 && oe < K)) &&
            I({ from: oe, to: K, velocity: o });
      };
    M({
      type: "decay",
      from: r,
      velocity: o,
      timeConstant: d,
      power: s,
      restDelta: S,
      modifyTarget: p,
      onUpdate: T(B) ? We : void 0,
    });
  }
  return {
    stop: function () {
      return E == null ? void 0 : E.stop();
    },
  };
}
var Qf = function (e) {
    return e.hasOwnProperty("x") && e.hasOwnProperty("y");
  },
  C0 = function (e) {
    return Qf(e) && e.hasOwnProperty("z");
  },
  es = function (e, t) {
    return Math.abs(e - t);
  };
function WS(e, t) {
  if (Xf(e) && Xf(t)) return es(e, t);
  if (Qf(e) && Qf(t)) {
    var r = es(e.x, t.x),
      n = es(e.y, t.y),
      o = C0(e) && C0(t) ? es(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(o, 2));
  }
}
var HS = function (e, t) {
    return 1 - 3 * t + 3 * e;
  },
  US = function (e, t) {
    return 3 * t - 6 * e;
  },
  GS = function (e) {
    return 3 * e;
  },
  pu = function (e, t, r) {
    return ((HS(t, r) * e + US(t, r)) * e + GS(t)) * e;
  },
  KS = function (e, t, r) {
    return 3 * HS(t, r) * e * e + 2 * US(t, r) * e + GS(t);
  },
  ez = 1e-7,
  tz = 10;
function rz(e, t, r, n, o) {
  var a,
    i,
    l = 0;
  do (i = t + (r - t) / 2), (a = pu(i, n, o) - e), a > 0 ? (r = i) : (t = i);
  while (Math.abs(a) > ez && ++l < tz);
  return i;
}
var nz = 8,
  oz = 0.001;
function az(e, t, r, n) {
  for (var o = 0; o < nz; ++o) {
    var a = KS(t, r, n);
    if (a === 0) return t;
    var i = pu(t, r, n) - e;
    t -= i / a;
  }
  return t;
}
var _s = 11,
  ts = 1 / (_s - 1);
function iz(e, t, r, n) {
  if (e === t && r === n) return IS;
  for (var o = new Float32Array(_s), a = 0; a < _s; ++a)
    o[a] = pu(a * ts, e, r);
  function i(l) {
    for (var s = 0, u = 1, d = _s - 1; u !== d && o[u] <= l; ++u) s += ts;
    --u;
    var f = (l - o[u]) / (o[u + 1] - o[u]),
      c = s + f * ts,
      h = KS(c, e, r);
    return h >= oz ? az(l, c, e, r) : h === 0 ? c : rz(l, s, s + ts, e, r);
  }
  return function (l) {
    return l === 0 || l === 1 ? l : pu(i(l), t, n);
  };
}
function lz(e) {
  var t = e.onTap,
    r = e.onTapStart,
    n = e.onTapCancel,
    o = e.whileTap,
    a = e.visualElement,
    i = t || r || n || o,
    l = k.exports.useRef(!1),
    s = k.exports.useRef(null);
  function u() {
    var m;
    (m = s.current) === null || m === void 0 || m.call(s), (s.current = null);
  }
  function d() {
    var m;
    return (
      u(),
      (l.current = !1),
      (m = a.animationState) === null ||
        m === void 0 ||
        m.setActive(Ue.Tap, !1),
      !_S()
    );
  }
  function f(m, g) {
    !d() ||
      (PS(a.getInstance(), m.target)
        ? t == null || t(m, g)
        : n == null || n(m, g));
  }
  function c(m, g) {
    !d() || n == null || n(m, g);
  }
  function h(m, g) {
    var S;
    u(),
      !l.current &&
        ((l.current = !0),
        (s.current = ml(
          ua(window, "pointerup", f),
          ua(window, "pointercancel", c)
        )),
        r == null || r(m, g),
        (S = a.animationState) === null ||
          S === void 0 ||
          S.setActive(Ue.Tap, !0));
  }
  cu(a, "pointerdown", i ? h : void 0), Ah(u);
}
var fo = function (e) {
    return function (t) {
      return e(t), null;
    };
  },
  sz = { tap: fo(lz), focus: fo(JM), hover: fo(cL) };
function YS(e, t) {
  if (!Array.isArray(t)) return !1;
  var r = t.length;
  if (r !== e.length) return !1;
  for (var n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
var hu = function (e) {
    return e * 1e3;
  },
  uz = {
    linear: IS,
    easeIn: zh,
    easeInOut: $S,
    easeOut: BL,
    circIn: NS,
    circInOut: IL,
    circOut: FS,
    backIn: Dh,
    backInOut: NL,
    backOut: $L,
    anticipate: FL,
    bounceIn: WL,
    bounceInOut: HL,
    bounceOut: fu,
  },
  k0 = function (e) {
    if (Array.isArray(e)) {
      Yi(e.length === 4);
      var t = je(e, 4),
        r = t[0],
        n = t[1],
        o = t[2],
        a = t[3];
      return iz(r, n, o, a);
    } else if (typeof e == "string") return uz[e];
    return e;
  },
  cz = function (e) {
    return Array.isArray(e) && typeof e[0] != "number";
  },
  E0 = function (e, t) {
    return e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && an.test(t) && !t.startsWith("url("))
        );
  },
  Yn = function () {
    return {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restDelta: 0.5,
      restSpeed: 10,
    };
  },
  rs = function (e) {
    return {
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restDelta: 0.01,
      restSpeed: 10,
    };
  },
  Sd = function () {
    return { type: "keyframes", ease: "linear", duration: 0.3 };
  },
  dz = function (e) {
    return { type: "keyframes", duration: 0.8, values: e };
  },
  T0 = {
    x: Yn,
    y: Yn,
    z: Yn,
    rotate: Yn,
    rotateX: Yn,
    rotateY: Yn,
    rotateZ: Yn,
    scaleX: rs,
    scaleY: rs,
    scale: rs,
    opacity: Sd,
    backgroundColor: Sd,
    color: Sd,
    default: rs,
  },
  fz = function (e, t) {
    var r;
    return qi(t) ? (r = dz) : (r = T0[e] || T0.default), z({ to: t }, r(t));
  },
  pz = z(z({}, dS), {
    color: St,
    backgroundColor: St,
    outlineColor: St,
    fill: St,
    stroke: St,
    borderColor: St,
    borderTopColor: St,
    borderRightColor: St,
    borderBottomColor: St,
    borderLeftColor: St,
    filter: Gf,
    WebkitFilter: Gf,
  }),
  Bh = function (e) {
    return pz[e];
  };
function Ih(e, t) {
  var r,
    n = Bh(e);
  return (
    n !== Gf && (n = an),
    (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t)
  );
}
function hz(e) {
  e.when,
    e.delay,
    e.delayChildren,
    e.staggerChildren,
    e.staggerDirection,
    e.repeat,
    e.repeatType,
    e.repeatDelay,
    e.from;
  var t = Jt(e, [
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
  ]);
  return !!Object.keys(t).length;
}
function vz(e) {
  var t = e.ease,
    r = e.times,
    n = e.yoyo,
    o = e.flip,
    a = e.loop,
    i = Jt(e, ["ease", "times", "yoyo", "flip", "loop"]),
    l = z({}, i);
  return (
    r && (l.offset = r),
    i.duration && (l.duration = hu(i.duration)),
    i.repeatDelay && (l.repeatDelay = hu(i.repeatDelay)),
    t && (l.ease = cz(t) ? t.map(k0) : k0(t)),
    i.type === "tween" && (l.type = "keyframes"),
    (n || a || o) &&
      (n
        ? (l.repeatType = "reverse")
        : a
        ? (l.repeatType = "loop")
        : o && (l.repeatType = "mirror"),
      (l.repeat = a || n || o || i.repeat)),
    i.type !== "spring" && (l.type = "keyframes"),
    l
  );
}
function mz(e, t) {
  var r,
    n = $h(e, t) || {};
  return (r = n.delay) !== null && r !== void 0 ? r : 0;
}
function gz(e) {
  return (
    Array.isArray(e.to) &&
      e.to[0] === null &&
      ((e.to = Et([], je(e.to))), (e.to[0] = e.from)),
    e
  );
}
function yz(e, t, r) {
  var n;
  return (
    Array.isArray(t.to) &&
      (((n = e.duration) !== null && n !== void 0) || (e.duration = 0.8)),
    gz(t),
    hz(e) || (e = z(z({}, e), fz(r, t.to))),
    z(z({}, t), vz(e))
  );
}
function bz(e, t, r, n, o) {
  var a,
    i = $h(n, e),
    l = (a = i.from) !== null && a !== void 0 ? a : t.get(),
    s = E0(e, r);
  l === "none" && s && typeof r == "string"
    ? (l = Ih(e, r))
    : _0(l) && typeof r == "string"
    ? (l = P0(r))
    : !Array.isArray(r) && _0(r) && typeof l == "string" && (r = P0(l));
  var u = E0(e, l);
  function d() {
    var c = {
      from: l,
      to: r,
      velocity: t.getVelocity(),
      onComplete: o,
      onUpdate: function (h) {
        return t.set(h);
      },
    };
    return i.type === "inertia" || i.type === "decay"
      ? JL(z(z({}, c), i))
      : VS(
          z(z({}, yz(i, c, e)), {
            onUpdate: function (h) {
              var m;
              c.onUpdate(h),
                (m = i.onUpdate) === null || m === void 0 || m.call(i, h);
            },
            onComplete: function () {
              var h;
              c.onComplete(),
                (h = i.onComplete) === null || h === void 0 || h.call(i);
            },
          })
        );
  }
  function f() {
    var c;
    return (
      t.set(r),
      o(),
      (c = i == null ? void 0 : i.onComplete) === null ||
        c === void 0 ||
        c.call(i),
      { stop: function () {} }
    );
  }
  return !u || !s || i.type === !1 ? f : d;
}
function _0(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function P0(e) {
  return typeof e == "number" ? 0 : Ih("", e);
}
function $h(e, t) {
  return e[t] || e.default || e;
}
function vu(e, t, r, n) {
  return (
    n === void 0 && (n = {}),
    t.start(function (o) {
      var a,
        i,
        l = bz(e, t, r, n, o),
        s = mz(n, e),
        u = function () {
          return (i = l());
        };
      return (
        s ? (a = setTimeout(u, hu(s))) : u(),
        function () {
          clearTimeout(a), i == null || i.stop();
        }
      );
    })
  );
}
var Sz = function (e) {
  return /^\-?\d*\.?\d+$/.test(e);
};
function XS(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function QS(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var Ps = (function () {
    function e() {
      this.subscriptions = [];
    }
    return (
      (e.prototype.add = function (t) {
        var r = this;
        return (
          XS(this.subscriptions, t),
          function () {
            return QS(r.subscriptions, t);
          }
        );
      }),
      (e.prototype.notify = function (t, r, n) {
        var o = this.subscriptions.length;
        if (!!o)
          if (o === 1) this.subscriptions[0](t, r, n);
          else
            for (var a = 0; a < o; a++) {
              var i = this.subscriptions[a];
              i && i(t, r, n);
            }
      }),
      (e.prototype.getSize = function () {
        return this.subscriptions.length;
      }),
      (e.prototype.clear = function () {
        this.subscriptions.length = 0;
      }),
      e
    );
  })(),
  xz = function (e) {
    return !isNaN(parseFloat(e));
  },
  wz = (function () {
    function e(t) {
      var r = this;
      (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.updateSubscribers = new Ps()),
        (this.velocityUpdateSubscribers = new Ps()),
        (this.renderSubscribers = new Ps()),
        (this.canTrackVelocity = !1),
        (this.updateAndNotify = function (n, o) {
          o === void 0 && (o = !0), (r.prev = r.current), (r.current = n);
          var a = ou(),
            i = a.delta,
            l = a.timestamp;
          r.lastUpdated !== l &&
            ((r.timeDelta = i),
            (r.lastUpdated = l),
            Br.postRender(r.scheduleVelocityCheck)),
            r.prev !== r.current && r.updateSubscribers.notify(r.current),
            r.velocityUpdateSubscribers.getSize() &&
              r.velocityUpdateSubscribers.notify(r.getVelocity()),
            o && r.renderSubscribers.notify(r.current);
        }),
        (this.scheduleVelocityCheck = function () {
          return Br.postRender(r.velocityCheck);
        }),
        (this.velocityCheck = function (n) {
          var o = n.timestamp;
          o !== r.lastUpdated &&
            ((r.prev = r.current),
            r.velocityUpdateSubscribers.notify(r.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = t),
        (this.canTrackVelocity = xz(this.current));
    }
    return (
      (e.prototype.onChange = function (t) {
        return this.updateSubscribers.add(t);
      }),
      (e.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      }),
      (e.prototype.onRenderRequest = function (t) {
        return t(this.get()), this.renderSubscribers.add(t);
      }),
      (e.prototype.attach = function (t) {
        this.passiveEffect = t;
      }),
      (e.prototype.set = function (t, r) {
        r === void 0 && (r = !0),
          !r || !this.passiveEffect
            ? this.updateAndNotify(t, r)
            : this.passiveEffect(t, this.updateAndNotify);
      }),
      (e.prototype.get = function () {
        return this.current;
      }),
      (e.prototype.getPrevious = function () {
        return this.prev;
      }),
      (e.prototype.getVelocity = function () {
        return this.canTrackVelocity
          ? jS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }),
      (e.prototype.start = function (t) {
        var r = this;
        return (
          this.stop(),
          new Promise(function (n) {
            (r.hasAnimated = !0), (r.stopAnimation = t(n));
          }).then(function () {
            return r.clearAnimation();
          })
        );
      }),
      (e.prototype.stop = function () {
        this.stopAnimation && this.stopAnimation(), this.clearAnimation();
      }),
      (e.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      }),
      (e.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      }),
      (e.prototype.destroy = function () {
        this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop();
      }),
      e
    );
  })();
function po(e) {
  return new wz(e);
}
var ZS = function (e) {
    return function (t) {
      return t.test(e);
    };
  },
  Cz = {
    test: function (e) {
      return e === "auto";
    },
    parse: function (e) {
      return e;
    },
  },
  qS = [wo, q, sa, bn, wM, xM, Cz],
  ns = function (e) {
    return qS.find(ZS(e));
  },
  kz = Et(Et([], je(qS)), [St, an]),
  Ez = function (e) {
    return kz.find(ZS(e));
  };
function Tz(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, po(r));
}
function _z(e, t) {
  var r = ac(e, t),
    n = r ? e.makeTargetAnimatable(r, !1) : {},
    o = n.transitionEnd,
    a = o === void 0 ? {} : o;
  n.transition;
  var i = Jt(n, ["transitionEnd", "transition"]);
  i = z(z({}, i), a);
  for (var l in i) {
    var s = GM(i[l]);
    Tz(e, l, s);
  }
}
function Pz(e, t, r) {
  var n,
    o,
    a,
    i,
    l = Object.keys(t).filter(function (h) {
      return !e.hasValue(h);
    }),
    s = l.length;
  if (!!s)
    for (var u = 0; u < s; u++) {
      var d = l[u],
        f = t[d],
        c = null;
      Array.isArray(f) && (c = f[0]),
        c === null &&
          (c =
            (o = (n = r[d]) !== null && n !== void 0 ? n : e.readValue(d)) !==
              null && o !== void 0
              ? o
              : t[d]),
        c != null &&
          (typeof c == "string" && Sz(c)
            ? (c = parseFloat(c))
            : !Ez(c) && an.test(f) && (c = Ih(d, f)),
          e.addValue(d, po(c)),
          ((a = (i = r)[d]) !== null && a !== void 0) || (i[d] = c),
          e.setBaseTarget(d, c));
    }
}
function Rz(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function Az(e, t, r) {
  var n,
    o,
    a = {};
  for (var i in e)
    a[i] =
      (n = Rz(i, t)) !== null && n !== void 0
        ? n
        : (o = r.getValue(i)) === null || o === void 0
        ? void 0
        : o.get();
  return a;
}
function Mz(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart();
  var n;
  if (Array.isArray(t)) {
    var o = t.map(function (i) {
      return Zf(e, i, r);
    });
    n = Promise.all(o);
  } else if (typeof t == "string") n = Zf(e, t, r);
  else {
    var a = typeof t == "function" ? ac(e, t, r.custom) : t;
    n = JS(e, a, r);
  }
  return n.then(function () {
    return e.notifyAnimationComplete(t);
  });
}
function Zf(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var o = ac(e, t, r.custom),
    a = (o || {}).transition,
    i = a === void 0 ? e.getDefaultTransition() || {} : a;
  r.transitionOverride && (i = r.transitionOverride);
  var l = o
      ? function () {
          return JS(e, o, r);
        }
      : function () {
          return Promise.resolve();
        },
    s =
      !((n = e.variantChildren) === null || n === void 0) && n.size
        ? function (h) {
            h === void 0 && (h = 0);
            var m = i.delayChildren,
              g = m === void 0 ? 0 : m,
              S = i.staggerChildren,
              p = i.staggerDirection;
            return Lz(e, t, g + h, S, p, r);
          }
        : function () {
            return Promise.resolve();
          },
    u = i.when;
  if (u) {
    var d = je(u === "beforeChildren" ? [l, s] : [s, l], 2),
      f = d[0],
      c = d[1];
    return f().then(c);
  } else return Promise.all([l(), s(r.delay)]);
}
function JS(e, t, r) {
  var n,
    o = r === void 0 ? {} : r,
    a = o.delay,
    i = a === void 0 ? 0 : a,
    l = o.transitionOverride,
    s = o.type,
    u = e.makeTargetAnimatable(t),
    d = u.transition,
    f = d === void 0 ? e.getDefaultTransition() : d,
    c = u.transitionEnd,
    h = Jt(u, ["transition", "transitionEnd"]);
  l && (f = l);
  var m = [],
    g =
      s &&
      ((n = e.animationState) === null || n === void 0
        ? void 0
        : n.getState()[s]);
  for (var S in h) {
    var p = e.getValue(S),
      v = h[S];
    if (!(!p || v === void 0 || (g && Dz(g, S)))) {
      var b = vu(S, p, v, z({ delay: i }, f));
      m.push(b);
    }
  }
  return Promise.all(m).then(function () {
    c && _z(e, c);
  });
}
function Lz(e, t, r, n, o, a) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), o === void 0 && (o = 1);
  var i = [],
    l = (e.variantChildren.size - 1) * n,
    s =
      o === 1
        ? function (u) {
            return u === void 0 && (u = 0), u * n;
          }
        : function (u) {
            return u === void 0 && (u = 0), l - u * n;
          };
  return (
    Array.from(e.variantChildren)
      .sort(zz)
      .forEach(function (u, d) {
        i.push(
          Zf(u, t, z(z({}, a), { delay: r + s(d) })).then(function () {
            return u.notifyAnimationComplete(t);
          })
        );
      }),
    Promise.all(i)
  );
}
function zz(e, t) {
  return e.sortNodePosition(t);
}
function Dz(e, t) {
  var r = e.protectedKeys,
    n = e.needsAnimating,
    o = r.hasOwnProperty(t) && n[t] !== !0;
  return (n[t] = !1), o;
}
var Nh = [Ue.Animate, Ue.Hover, Ue.Tap, Ue.Drag, Ue.Focus, Ue.Exit],
  Bz = Et([], je(Nh)).reverse(),
  Iz = Nh.length;
function $z(e) {
  return function (t) {
    return Promise.all(
      t.map(function (r) {
        var n = r.animation,
          o = r.options;
        return Mz(e, n, o);
      })
    );
  };
}
function Nz(e) {
  var t = $z(e),
    r = Oz(),
    n = {},
    o = !0,
    a = function (d, f) {
      var c = ac(e, f);
      if (c) {
        c.transition;
        var h = c.transitionEnd,
          m = Jt(c, ["transition", "transitionEnd"]);
        d = z(z(z({}, d), m), h);
      }
      return d;
    };
  function i(d) {
    return n[d] !== void 0;
  }
  function l(d) {
    t = d(e);
  }
  function s(d, f) {
    for (
      var c,
        h = e.getProps(),
        m = e.getVariantContext(!0) || {},
        g = [],
        S = new Set(),
        p = {},
        v = 1 / 0,
        b = function (_) {
          var M = Bz[_],
            I = r[M],
            B = (c = h[M]) !== null && c !== void 0 ? c : m[M],
            K = br(B),
            ce = M === f ? I.isActive : null;
          ce === !1 && (v = _);
          var xe = B === m[M] && B !== h[M] && K;
          if (
            (xe && o && e.manuallyAnimateOnMount && (xe = !1),
            (I.protectedKeys = z({}, p)),
            (!I.isActive && ce === null) ||
              (!B && !I.prevProp) ||
              _h(B) ||
              typeof B == "boolean")
          )
            return "continue";
          var ee =
              Fz(I.prevProp, B) ||
              (M === f && I.isActive && !xe && K) ||
              (_ > v && K),
            We = Array.isArray(B) ? B : [B],
            oe = We.reduce(a, {});
          ce === !1 && (oe = {});
          var Ge = I.prevResolvedValues,
            F = Ge === void 0 ? {} : Ge,
            Y = z(z({}, F), oe),
            H = function (Ye) {
              (ee = !0), S.delete(Ye), (I.needsAnimating[Ye] = !0);
            };
          for (var J in Y) {
            var de = oe[J],
              re = F[J];
            p.hasOwnProperty(J) ||
              (de !== re
                ? qi(de) && qi(re)
                  ? YS(de, re)
                    ? (I.protectedKeys[J] = !0)
                    : H(J)
                  : de !== void 0
                  ? H(J)
                  : S.add(J)
                : de !== void 0 && S.has(J)
                ? H(J)
                : (I.protectedKeys[J] = !0));
          }
          (I.prevProp = B),
            (I.prevResolvedValues = oe),
            I.isActive && (p = z(z({}, p), oe)),
            o && e.blockInitialAnimation && (ee = !1),
            ee &&
              !xe &&
              g.push.apply(
                g,
                Et(
                  [],
                  je(
                    We.map(function (Ye) {
                      return { animation: Ye, options: z({ type: M }, d) };
                    })
                  )
                )
              );
        },
        x = 0;
      x < Iz;
      x++
    )
      b(x);
    if (((n = z({}, p)), S.size)) {
      var E = {};
      S.forEach(function (_) {
        var M = e.getBaseTarget(_);
        M !== void 0 && (E[_] = M);
      }),
        g.push({ animation: E });
    }
    var T = Boolean(g.length);
    return (
      o && h.initial === !1 && !e.manuallyAnimateOnMount && (T = !1),
      (o = !1),
      T ? t(g) : Promise.resolve()
    );
  }
  function u(d, f, c) {
    var h;
    return r[d].isActive === f
      ? Promise.resolve()
      : ((h = e.variantChildren) === null ||
          h === void 0 ||
          h.forEach(function (m) {
            var g;
            return (g = m.animationState) === null || g === void 0
              ? void 0
              : g.setActive(d, f);
          }),
        (r[d].isActive = f),
        s(c, d));
  }
  return {
    isAnimated: i,
    animateChanges: s,
    setActive: u,
    setAnimateFunction: l,
    getState: function () {
      return r;
    },
  };
}
function Fz(e, t) {
  return typeof t == "string" ? t !== e : qb(t) ? !YS(t, e) : !1;
}
function Ro(e) {
  return (
    e === void 0 && (e = !1),
    {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    }
  );
}
function Oz() {
  var e;
  return (
    (e = {}),
    (e[Ue.Animate] = Ro(!0)),
    (e[Ue.Hover] = Ro()),
    (e[Ue.Tap] = Ro()),
    (e[Ue.Drag] = Ro()),
    (e[Ue.Focus] = Ro()),
    (e[Ue.Exit] = Ro()),
    e
  );
}
var Vz = {
    animation: fo(function (e) {
      var t = e.visualElement,
        r = e.animate;
      t.animationState || (t.animationState = Nz(t)),
        _h(r) &&
          k.exports.useEffect(
            function () {
              return r.subscribe(t);
            },
            [r]
          );
    }),
    exit: fo(function (e) {
      var t = e.custom,
        r = e.visualElement,
        n = je(Qb(), 2),
        o = n[0],
        a = n[1],
        i = k.exports.useContext(Ra);
      k.exports.useEffect(
        function () {
          var l,
            s,
            u =
              (l = r.animationState) === null || l === void 0
                ? void 0
                : l.setActive(Ue.Exit, !o, {
                    custom:
                      (s = i == null ? void 0 : i.custom) !== null &&
                      s !== void 0
                        ? s
                        : t,
                  });
          !o && (u == null || u.then(a));
        },
        [o]
      );
    }),
  },
  ex = (function () {
    function e(t, r, n) {
      var o = this,
        a = n === void 0 ? {} : n,
        i = a.transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function () {
          if (!!(o.lastMoveEvent && o.lastMoveEventInfo)) {
            var c = wd(o.lastMoveEventInfo, o.history),
              h = o.startEvent !== null,
              m = WS(c.offset, { x: 0, y: 0 }) >= 3;
            if (!(!h && !m)) {
              var g = c.point,
                S = ou().timestamp;
              o.history.push(z(z({}, g), { timestamp: S }));
              var p = o.handlers,
                v = p.onStart,
                b = p.onMove;
              h ||
                (v && v(o.lastMoveEvent, c), (o.startEvent = o.lastMoveEvent)),
                b && b(o.lastMoveEvent, c);
            }
          }
        }),
        (this.handlePointerMove = function (c, h) {
          if (
            ((o.lastMoveEvent = c),
            (o.lastMoveEventInfo = xd(h, o.transformPagePoint)),
            xS(c) && c.buttons === 0)
          ) {
            o.handlePointerUp(c, h);
            return;
          }
          Br.update(o.updatePoint, !0);
        }),
        (this.handlePointerUp = function (c, h) {
          o.end();
          var m = o.handlers,
            g = m.onEnd,
            S = m.onSessionEnd,
            p = wd(xd(h, o.transformPagePoint), o.history);
          o.startEvent && g && g(c, p), S && S(c, p);
        }),
        !(wS(t) && t.touches.length > 1))
      ) {
        (this.handlers = r), (this.transformPagePoint = i);
        var l = Rh(t),
          s = xd(l, this.transformPagePoint),
          u = s.point,
          d = ou().timestamp;
        this.history = [z(z({}, u), { timestamp: d })];
        var f = r.onSessionStart;
        f && f(t, wd(s, this.history)),
          (this.removeListeners = ml(
            ua(window, "pointermove", this.handlePointerMove),
            ua(window, "pointerup", this.handlePointerUp),
            ua(window, "pointercancel", this.handlePointerUp)
          ));
      }
    }
    return (
      (e.prototype.updateHandlers = function (t) {
        this.handlers = t;
      }),
      (e.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          fi.update(this.updatePoint);
      }),
      e
    );
  })();
function xd(e, t) {
  return t ? { point: t(e.point) } : e;
}
function R0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wd(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: R0(r, tx(t)),
    offset: R0(r, jz(t)),
    velocity: Wz(t, 0.1),
  };
}
function jz(e) {
  return e[0];
}
function tx(e) {
  return e[e.length - 1];
}
function Wz(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  for (
    var r = e.length - 1, n = null, o = tx(e);
    r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > hu(t)));

  )
    r--;
  if (!n) return { x: 0, y: 0 };
  var a = (o.timestamp - n.timestamp) / 1e3;
  if (a === 0) return { x: 0, y: 0 };
  var i = { x: (o.x - n.x) / a, y: (o.y - n.y) / a };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Hz(e) {
  return e;
}
function rx(e) {
  var t = e.top,
    r = e.left,
    n = e.right,
    o = e.bottom;
  return { x: { min: r, max: n }, y: { min: t, max: o } };
}
function Uz(e) {
  var t = e.x,
    r = e.y;
  return { top: r.min, bottom: r.max, left: t.min, right: t.max };
}
function Gz(e, t) {
  var r = e.top,
    n = e.left,
    o = e.bottom,
    a = e.right;
  t === void 0 && (t = Hz);
  var i = t({ x: n, y: r }),
    l = t({ x: a, y: o });
  return { top: i.y, left: i.x, bottom: l.y, right: l.x };
}
function On() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function Kz(e) {
  return { x: z({}, e.x), y: z({}, e.y) };
}
var A0 = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
function M0() {
  return { x: z({}, A0), y: z({}, A0) };
}
function At(e) {
  return [e("x"), e("y")];
}
function nx(e, t, r) {
  var n = t.min,
    o = t.max;
  return (
    n !== void 0 && e < n
      ? (e = r ? Ft(n, e, r.min) : Math.max(e, n))
      : o !== void 0 && e > o && (e = r ? Ft(o, e, r.max) : Math.min(e, o)),
    e
  );
}
function Yz(e, t, r, n, o) {
  var a = e - t * r;
  return n ? nx(a, n, o) : a;
}
function L0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function Xz(e, t) {
  var r = t.top,
    n = t.left,
    o = t.bottom,
    a = t.right;
  return { x: L0(e.x, n, a), y: L0(e.y, r, o) };
}
function z0(e, t) {
  var r,
    n = t.min - e.min,
    o = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min &&
      ((r = je([o, n], 2)), (n = r[0]), (o = r[1])),
    { min: e.min + n, max: e.min + o }
  );
}
function Qz(e, t) {
  return { x: z0(e.x, t.x), y: z0(e.y, t.y) };
}
function Zz(e, t, r) {
  var n = e.max - e.min,
    o = Ft(t.min, t.max - n, r);
  return { min: o, max: o + n };
}
function qz(e, t) {
  var r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
var ox = 0.35;
function Jz(e) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ox),
    { x: D0(e, "left", "right"), y: D0(e, "top", "bottom") }
  );
}
function D0(e, t, r) {
  return { min: B0(e, t), max: B0(e, r) };
}
function B0(e, t) {
  var r;
  return typeof e == "number" ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
function ax(e, t) {
  var r = e.getBoundingClientRect();
  return rx(Gz(r, t));
}
var e6 = function (e) {
  return du(0, 1, e);
};
function I0(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), WS(e, t) < r;
}
function el(e) {
  return e.max - e.min;
}
function t6(e, t) {
  var r = 0.5,
    n = el(e),
    o = el(t);
  return (
    o > n
      ? (r = Ji(t.min, t.max - n, e.min))
      : n > o && (r = Ji(e.min, e.max - o, t.min)),
    e6(r)
  );
}
function $0(e, t, r, n) {
  n === void 0 && (n = 0.5),
    (e.origin = n),
    (e.originPoint = Ft(t.min, t.max, e.origin)),
    (e.scale = el(r) / el(t)),
    I0(e.scale, 1, 1e-4) && (e.scale = 1),
    (e.translate = Ft(r.min, r.max, e.origin) - e.originPoint),
    I0(e.translate) && (e.translate = 0);
}
function ix(e, t, r, n) {
  $0(e.x, t.x, r.x, N0(n.originX)), $0(e.y, t.y, r.y, N0(n.originY));
}
function N0(e) {
  return typeof e == "number" ? e : 0.5;
}
function F0(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + el(t));
}
function r6(e, t) {
  F0(e.target.x, e.relativeTarget.x, t.target.x),
    F0(e.target.y, e.relativeTarget.y, t.target.y);
}
var Fh = function (e, t) {
  return e.depth - t.depth;
};
function lx(e) {
  var t = e.projection.isEnabled;
  return t || e.shouldResetTransform();
}
function mu(e, t) {
  t === void 0 && (t = []);
  var r = e.parent;
  return r && mu(r, t), lx(e) && t.push(e), t;
}
function n6(e) {
  var t = [],
    r = function (n) {
      lx(n) && t.push(n), n.children.forEach(r);
    };
  return e.children.forEach(r), t.sort(Fh);
}
function Rs(e) {
  if (!e.shouldResetTransform()) {
    var t = e.getLayoutState();
    e.notifyBeforeLayoutMeasure(t.layout),
      (t.isHydrated = !0),
      (t.layout = e.measureViewportBox()),
      (t.layoutCorrected = Kz(t.layout)),
      e.notifyLayoutMeasure(t.layout, e.prevViewportBox || t.layout),
      Br.update(function () {
        return e.rebaseProjectionTarget();
      });
  }
}
function o6(e) {
  e.shouldResetTransform() ||
    ((e.prevViewportBox = e.measureViewportBox(!1)),
    e.rebaseProjectionTarget(!1, e.prevViewportBox));
}
function a6(e, t, r, n) {
  (e.min = Ft(t.min, r.min, n)), (e.max = Ft(t.max, r.max, n));
}
function O0(e, t) {
  return { min: t.min - e.min, max: t.max - e.min };
}
function xa(e, t) {
  return { x: O0(e.x, t.x), y: O0(e.y, t.y) };
}
function i6(e, t) {
  var r = e.getLayoutId(),
    n = t.getLayoutId();
  return r !== n || (n === void 0 && e !== t);
}
function sx(e) {
  var t = e.getProps(),
    r = t.drag,
    n = t._dragX;
  return r && !n;
}
function V0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function l6(e, t) {
  V0(e.x, t.x), V0(e.y, t.y);
}
function gu(e, t, r) {
  var n = e - r,
    o = t * n;
  return r + o;
}
function j0(e, t, r, n, o) {
  return o !== void 0 && (e = gu(e, o, n)), gu(e, r, n) + t;
}
function qf(e, t, r, n, o) {
  t === void 0 && (t = 0),
    r === void 0 && (r = 1),
    (e.min = j0(e.min, t, r, n, o)),
    (e.max = j0(e.max, t, r, n, o));
}
function s6(e, t) {
  var r = t.x,
    n = t.y;
  qf(e.x, r.translate, r.scale, r.originPoint),
    qf(e.y, n.translate, n.scale, n.originPoint);
}
function W0(e, t, r, n) {
  var o = je(n, 3),
    a = o[0],
    i = o[1],
    l = o[2];
  (e.min = t.min), (e.max = t.max);
  var s = r[l] !== void 0 ? r[l] : 0.5,
    u = Ft(t.min, t.max, s);
  qf(e, r[a], r[i], u, r.scale);
}
var ux = ["x", "scaleX", "originX"],
  cx = ["y", "scaleY", "originY"];
function Jf(e, t, r) {
  W0(e.x, t.x, r, ux), W0(e.y, t.y, r, cx);
}
function H0(e, t, r, n, o) {
  return (
    (e -= t), (e = gu(e, 1 / r, n)), o !== void 0 && (e = gu(e, 1 / o, n)), e
  );
}
function u6(e, t, r, n, o) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = 0.5);
  var a = Ft(e.min, e.max, n) - t;
  (e.min = H0(e.min, t, r, a, o)), (e.max = H0(e.max, t, r, a, o));
}
function U0(e, t, r) {
  var n = je(r, 3),
    o = n[0],
    a = n[1],
    i = n[2];
  u6(e, t[o], t[a], t[i], t.scale);
}
function dx(e, t) {
  U0(e.x, t, ux), U0(e.y, t, cx);
}
function c6(e, t, r) {
  var n = r.length;
  if (!!n) {
    t.x = t.y = 1;
    for (var o, a, i = 0; i < n; i++)
      (o = r[i]),
        (a = o.getLayoutState().delta),
        (t.x *= a.x.scale),
        (t.y *= a.y.scale),
        s6(e, a),
        sx(o) && Jf(e, e, o.getLatestValues());
  }
}
function d6(e, t) {
  t === void 0 && (t = !0);
  var r = e.getProjectionParent();
  if (!r) return !1;
  var n;
  return (
    t
      ? ((n = xa(r.projection.target, e.projection.target)),
        dx(n, r.getLatestValues()))
      : (n = xa(r.getLayoutState().layout, e.getLayoutState().layout)),
    At(function (o) {
      return e.setProjectionTargetAxis(o, n[o].min, n[o].max, !0);
    }),
    !0
  );
}
var Si = new Set();
function G0(e, t, r) {
  e[r] || (e[r] = []), e[r].push(t);
}
function ep(e) {
  return (
    Si.add(e),
    function () {
      return Si.delete(e);
    }
  );
}
function tp() {
  if (!!Si.size) {
    var e = 0,
      t = [[]],
      r = [],
      n = function (l) {
        return G0(t, l, e);
      },
      o = function (l) {
        G0(r, l, e), e++;
      };
    Si.forEach(function (l) {
      l(n, o), (e = 0);
    }),
      Si.clear();
    for (var a = r.length, i = 0; i <= a; i++)
      t[i] && t[i].forEach(K0), r[i] && r[i].forEach(K0);
  }
}
var K0 = function (e) {
    return e();
  },
  f6 = new WeakMap(),
  Y0,
  p6 = (function () {
    function e(t) {
      var r = t.visualElement;
      (this.isDragging = !1),
        (this.currentDirection = null),
        (this.constraints = !1),
        (this.elastic = On()),
        (this.props = {}),
        (this.hasMutatedConstraints = !1),
        (this.cursorProgress = { x: 0.5, y: 0.5 }),
        (this.originPoint = {}),
        (this.openGlobalLock = null),
        (this.panSession = null),
        (this.visualElement = r),
        this.visualElement.enableLayoutProjection(),
        f6.set(r, this);
    }
    return (
      (e.prototype.start = function (t, r) {
        var n = this,
          o = r === void 0 ? {} : r,
          a = o.snapToCursor,
          i = a === void 0 ? !1 : a,
          l = o.cursorProgress,
          s = function (h) {
            var m;
            n.stopMotion();
            var g = oL(h).point;
            (m = n.cancelLayout) === null || m === void 0 || m.call(n),
              (n.cancelLayout = ep(function (S, p) {
                var v = mu(n.visualElement),
                  b = n6(n.visualElement),
                  x = Et(Et([], je(v)), je(b)),
                  E = !1;
                n.isLayoutDrag() && n.visualElement.lockProjectionTarget(),
                  p(function () {
                    x.forEach(function (T) {
                      return T.resetTransform();
                    });
                  }),
                  S(function () {
                    Rs(n.visualElement), b.forEach(Rs);
                  }),
                  p(function () {
                    x.forEach(function (T) {
                      return T.restoreTransform();
                    }),
                      i && (E = n.snapToCursor(g));
                  }),
                  S(function () {
                    var T = Boolean(
                      n.getAxisMotionValue("x") && !n.isExternalDrag()
                    );
                    T ||
                      n.visualElement.rebaseProjectionTarget(
                        !0,
                        n.visualElement.measureViewportBox(!1)
                      ),
                      n.visualElement.scheduleUpdateLayoutProjection();
                    var _ = n.visualElement.projection;
                    At(function (M) {
                      if (!E) {
                        var I = _.target[M],
                          B = I.min,
                          K = I.max;
                        n.cursorProgress[M] = l ? l[M] : Ji(B, K, g[M]);
                      }
                      var ce = n.getAxisMotionValue(M);
                      ce && (n.originPoint[M] = ce.get());
                    });
                  }),
                  p(function () {
                    Ho.update(), Ho.preRender(), Ho.render(), Ho.postRender();
                  }),
                  S(function () {
                    return n.resolveDragConstraints();
                  });
              }));
          },
          u = function (h, m) {
            var g,
              S,
              p,
              v = n.props,
              b = v.drag,
              x = v.dragPropagation;
            (b &&
              !x &&
              (n.openGlobalLock && n.openGlobalLock(),
              (n.openGlobalLock = TS(b)),
              !n.openGlobalLock)) ||
              (tp(),
              (n.isDragging = !0),
              (n.currentDirection = null),
              (S = (g = n.props).onDragStart) === null ||
                S === void 0 ||
                S.call(g, h, m),
              (p = n.visualElement.animationState) === null ||
                p === void 0 ||
                p.setActive(Ue.Drag, !0));
          },
          d = function (h, m) {
            var g,
              S,
              p,
              v,
              b = n.props,
              x = b.dragPropagation,
              E = b.dragDirectionLock;
            if (!(!x && !n.openGlobalLock)) {
              var T = m.offset;
              if (E && n.currentDirection === null) {
                (n.currentDirection = h6(T)),
                  n.currentDirection !== null &&
                    ((S = (g = n.props).onDirectionLock) === null ||
                      S === void 0 ||
                      S.call(g, n.currentDirection));
                return;
              }
              n.updateAxis("x", m.point, T),
                n.updateAxis("y", m.point, T),
                (v = (p = n.props).onDrag) === null ||
                  v === void 0 ||
                  v.call(p, h, m),
                (Y0 = h);
            }
          },
          f = function (h, m) {
            return n.stop(h, m);
          },
          c = this.props.transformPagePoint;
        this.panSession = new ex(
          t,
          { onSessionStart: s, onStart: u, onMove: d, onSessionEnd: f },
          { transformPagePoint: c }
        );
      }),
      (e.prototype.resolveDragConstraints = function () {
        var t = this,
          r = this.props,
          n = r.dragConstraints,
          o = r.dragElastic,
          a = this.visualElement.getLayoutState().layoutCorrected;
        n
          ? (this.constraints = Wf(n)
              ? this.resolveRefConstraints(a, n)
              : Xz(a, n))
          : (this.constraints = !1),
          (this.elastic = Jz(o)),
          this.constraints &&
            !this.hasMutatedConstraints &&
            At(function (i) {
              t.getAxisMotionValue(i) &&
                (t.constraints[i] = qz(a[i], t.constraints[i]));
            });
      }),
      (e.prototype.resolveRefConstraints = function (t, r) {
        var n = this.props,
          o = n.onMeasureDragConstraints,
          a = n.transformPagePoint,
          i = r.current;
        this.constraintsBox = ax(i, a);
        var l = Qz(t, this.constraintsBox);
        if (o) {
          var s = o(Uz(l));
          (this.hasMutatedConstraints = !!s), s && (l = rx(s));
        }
        return l;
      }),
      (e.prototype.cancelDrag = function () {
        var t, r;
        this.visualElement.unlockProjectionTarget(),
          (t = this.cancelLayout) === null || t === void 0 || t.call(this),
          (this.isDragging = !1),
          this.panSession && this.panSession.end(),
          (this.panSession = null),
          !this.props.dragPropagation &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
          (r = this.visualElement.animationState) === null ||
            r === void 0 ||
            r.setActive(Ue.Drag, !1);
      }),
      (e.prototype.stop = function (t, r) {
        var n, o, a;
        (n = this.panSession) === null || n === void 0 || n.end(),
          (this.panSession = null);
        var i = this.isDragging;
        if ((this.cancelDrag(), !!i)) {
          var l = r.velocity;
          this.animateDragEnd(l),
            (a = (o = this.props).onDragEnd) === null ||
              a === void 0 ||
              a.call(o, t, r);
        }
      }),
      (e.prototype.snapToCursor = function (t) {
        var r = this;
        return At(function (n) {
          var o = r.props.drag;
          if (!!os(n, o, r.currentDirection)) {
            var a = r.getAxisMotionValue(n);
            if (a) {
              var i = r.visualElement.getLayoutState().layout,
                l = i[n].max - i[n].min,
                s = i[n].min + l / 2,
                u = t[n] - s;
              (r.originPoint[n] = t[n]), a.set(u);
            } else return (r.cursorProgress[n] = 0.5), !0;
          }
        }).includes(!0);
      }),
      (e.prototype.updateAxis = function (t, r, n) {
        var o = this.props.drag;
        if (!!os(t, o, this.currentDirection))
          return this.getAxisMotionValue(t)
            ? this.updateAxisMotionValue(t, n)
            : this.updateVisualElementAxis(t, r);
      }),
      (e.prototype.updateAxisMotionValue = function (t, r) {
        var n = this.getAxisMotionValue(t);
        if (!(!r || !n)) {
          var o = this.originPoint[t] + r[t],
            a = this.constraints
              ? nx(o, this.constraints[t], this.elastic[t])
              : o;
          n.set(a);
        }
      }),
      (e.prototype.updateVisualElementAxis = function (t, r) {
        var n,
          o = this.visualElement.getLayoutState().layout[t],
          a = o.max - o.min,
          i = this.cursorProgress[t],
          l = Yz(
            r[t],
            a,
            i,
            (n = this.constraints) === null || n === void 0 ? void 0 : n[t],
            this.elastic[t]
          );
        this.visualElement.setProjectionTargetAxis(t, l, l + a);
      }),
      (e.prototype.setProps = function (t) {
        var r = t.drag,
          n = r === void 0 ? !1 : r,
          o = t.dragDirectionLock,
          a = o === void 0 ? !1 : o,
          i = t.dragPropagation,
          l = i === void 0 ? !1 : i,
          s = t.dragConstraints,
          u = s === void 0 ? !1 : s,
          d = t.dragElastic,
          f = d === void 0 ? ox : d,
          c = t.dragMomentum,
          h = c === void 0 ? !0 : c,
          m = Jt(t, [
            "drag",
            "dragDirectionLock",
            "dragPropagation",
            "dragConstraints",
            "dragElastic",
            "dragMomentum",
          ]);
        this.props = z(
          {
            drag: n,
            dragDirectionLock: a,
            dragPropagation: l,
            dragConstraints: u,
            dragElastic: f,
            dragMomentum: h,
          },
          m
        );
      }),
      (e.prototype.getAxisMotionValue = function (t) {
        var r = this.props,
          n = r.layout,
          o = r.layoutId,
          a = "_drag" + t.toUpperCase();
        if (this.props[a]) return this.props[a];
        if (!n && o === void 0) return this.visualElement.getValue(t, 0);
      }),
      (e.prototype.isLayoutDrag = function () {
        return !this.getAxisMotionValue("x");
      }),
      (e.prototype.isExternalDrag = function () {
        var t = this.props,
          r = t._dragX,
          n = t._dragY;
        return r || n;
      }),
      (e.prototype.animateDragEnd = function (t) {
        var r = this,
          n = this.props,
          o = n.drag,
          a = n.dragMomentum,
          i = n.dragElastic,
          l = n.dragTransition,
          s = d6(
            this.visualElement,
            this.isLayoutDrag() && !this.isExternalDrag()
          ),
          u = this.constraints || {};
        if (s && Object.keys(u).length && this.isLayoutDrag()) {
          var d = this.visualElement.getProjectionParent();
          if (d) {
            var f = xa(d.projection.targetFinal, u);
            At(function (h) {
              var m = f[h],
                g = m.min,
                S = m.max;
              u[h] = { min: isNaN(g) ? void 0 : g, max: isNaN(S) ? void 0 : S };
            });
          }
        }
        var c = At(function (h) {
          var m;
          if (!!os(h, o, r.currentDirection)) {
            var g =
                (m = u == null ? void 0 : u[h]) !== null && m !== void 0
                  ? m
                  : {},
              S = i ? 200 : 1e6,
              p = i ? 40 : 1e7,
              v = z(
                z(
                  {
                    type: "inertia",
                    velocity: a ? t[h] : 0,
                    bounceStiffness: S,
                    bounceDamping: p,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                  },
                  l
                ),
                g
              );
            return r.getAxisMotionValue(h)
              ? r.startAxisValueAnimation(h, v)
              : r.visualElement.startLayoutAnimation(h, v, s);
          }
        });
        return Promise.all(c).then(function () {
          var h, m;
          (m = (h = r.props).onDragTransitionEnd) === null ||
            m === void 0 ||
            m.call(h);
        });
      }),
      (e.prototype.stopMotion = function () {
        var t = this;
        At(function (r) {
          var n = t.getAxisMotionValue(r);
          n ? n.stop() : t.visualElement.stopLayoutAnimation();
        });
      }),
      (e.prototype.startAxisValueAnimation = function (t, r) {
        var n = this.getAxisMotionValue(t);
        if (!!n) {
          var o = n.get();
          return n.set(o), n.set(o), vu(t, n, 0, r);
        }
      }),
      (e.prototype.scalePoint = function () {
        var t = this,
          r = this.props,
          n = r.drag,
          o = r.dragConstraints;
        if (!(!Wf(o) || !this.constraintsBox)) {
          this.stopMotion();
          var a = { x: 0, y: 0 };
          At(function (i) {
            a[i] = t6(
              t.visualElement.projection.target[i],
              t.constraintsBox[i]
            );
          }),
            this.updateConstraints(function () {
              At(function (i) {
                if (!!os(i, n, null)) {
                  var l = Zz(
                      t.visualElement.projection.target[i],
                      t.constraintsBox[i],
                      a[i]
                    ),
                    s = l.min,
                    u = l.max;
                  t.visualElement.setProjectionTargetAxis(i, s, u);
                }
              });
            }),
            setTimeout(tp, 1);
        }
      }),
      (e.prototype.updateConstraints = function (t) {
        var r = this;
        this.cancelLayout = ep(function (n, o) {
          var a = mu(r.visualElement);
          o(function () {
            return a.forEach(function (i) {
              return i.resetTransform();
            });
          }),
            n(function () {
              return Rs(r.visualElement);
            }),
            o(function () {
              return a.forEach(function (i) {
                return i.restoreTransform();
              });
            }),
            n(function () {
              r.resolveDragConstraints();
            }),
            t && o(t);
        });
      }),
      (e.prototype.mount = function (t) {
        var r = this,
          n = t.getInstance(),
          o = ua(n, "pointerdown", function (s) {
            var u = r.props,
              d = u.drag,
              f = u.dragListener,
              c = f === void 0 ? !0 : f;
            d && c && r.start(s);
          }),
          a = Ph(window, "resize", function () {
            r.scalePoint();
          }),
          i = t.onLayoutUpdate(function () {
            r.isDragging && r.resolveDragConstraints();
          }),
          l = t.prevDragCursor;
        return (
          l && this.start(Y0, { cursorProgress: l }),
          function () {
            o == null || o(),
              a == null || a(),
              i == null || i(),
              r.cancelDrag();
          }
        );
      }),
      e
    );
  })();
function os(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function h6(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
function v6(e) {
  var t = e.dragControls,
    r = e.visualElement,
    n = k.exports.useContext(nc).transformPagePoint,
    o = Xi(function () {
      return new p6({ visualElement: r });
    });
  o.setProps(z(z({}, e), { transformPagePoint: n })),
    k.exports.useEffect(
      function () {
        return t && t.subscribe(o);
      },
      [o]
    ),
    k.exports.useEffect(function () {
      return o.mount(r);
    }, []);
}
function m6(e) {
  var t = e.onPan,
    r = e.onPanStart,
    n = e.onPanEnd,
    o = e.onPanSessionStart,
    a = e.visualElement,
    i = t || r || n || o,
    l = k.exports.useRef(null),
    s = k.exports.useContext(nc).transformPagePoint,
    u = {
      onSessionStart: o,
      onStart: r,
      onMove: t,
      onEnd: function (f, c) {
        (l.current = null), n && n(f, c);
      },
    };
  k.exports.useEffect(function () {
    l.current !== null && l.current.updateHandlers(u);
  });
  function d(f) {
    l.current = new ex(f, u, { transformPagePoint: s });
  }
  cu(a, "pointerdown", i && d),
    Ah(function () {
      return l.current && l.current.end();
    });
}
var g6 = { pan: fo(m6), drag: fo(v6) },
  tl;
(function (e) {
  (e[(e.Entering = 0)] = "Entering"),
    (e[(e.Present = 1)] = "Present"),
    (e[(e.Exiting = 2)] = "Exiting");
})(tl || (tl = {}));
var rp;
(function (e) {
  (e[(e.Hide = 0)] = "Hide"), (e[(e.Show = 1)] = "Show");
})(rp || (rp = {}));
function np(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var fx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function y6(e) {
  var t = fx.exec(e);
  if (!t) return [,];
  var r = je(t, 3),
    n = r[1],
    o = r[2];
  return [n, o];
}
function op(e, t, r) {
  var n = je(y6(e), 2),
    o = n[0],
    a = n[1];
  if (!!o) {
    var i = window.getComputedStyle(t).getPropertyValue(o);
    return i ? i.trim() : np(a) ? op(a, t) : a;
  }
}
function b6(e, t, r) {
  var n,
    o = Jt(t, []),
    a = e.getInstance();
  if (!(a instanceof HTMLElement)) return { target: o, transitionEnd: r };
  r && (r = z({}, r)),
    e.forEachValue(function (u) {
      var d = u.get();
      if (!!np(d)) {
        var f = op(d, a);
        f && u.set(f);
      }
    });
  for (var i in o) {
    var l = o[i];
    if (!!np(l)) {
      var s = op(l, a);
      !s ||
        ((o[i] = s),
        r && (((n = r[i]) !== null && n !== void 0) || (r[i] = l)));
    }
  }
  return { target: o, transitionEnd: r };
}
function X0(e, t) {
  return (e / (t.max - t.min)) * 100;
}
function S6(e, t, r) {
  var n = r.target;
  if (typeof e == "string")
    if (q.test(e)) e = parseFloat(e);
    else return e;
  var o = X0(e, n.x),
    a = X0(e, n.y);
  return o + "% " + a + "%";
}
var Q0 = "_$css";
function x6(e, t) {
  var r = t.delta,
    n = t.treeScale,
    o = e,
    a = e.includes("var("),
    i = [];
  a &&
    (e = e.replace(fx, function (g) {
      return i.push(g), Q0;
    }));
  var l = an.parse(e);
  if (l.length > 5) return o;
  var s = an.createTransformer(e),
    u = typeof l[0] != "number" ? 1 : 0,
    d = r.x.scale * n.x,
    f = r.y.scale * n.y;
  (l[0 + u] /= d), (l[1 + u] /= f);
  var c = Ft(d, f, 0.5);
  typeof l[2 + u] == "number" && (l[2 + u] /= c),
    typeof l[3 + u] == "number" && (l[3 + u] /= c);
  var h = s(l);
  if (a) {
    var m = 0;
    h = h.replace(Q0, function () {
      var g = i[m];
      return m++, g;
    });
  }
  return h;
}
var Ga = { process: S6 },
  w6 = {
    borderRadius: z(z({}, Ga), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    }),
    borderTopLeftRadius: Ga,
    borderTopRightRadius: Ga,
    borderBottomLeftRadius: Ga,
    borderBottomRightRadius: Ga,
    boxShadow: { process: x6 },
  },
  Z0 = 1e3,
  C6 = (function (e) {
    Kb(t, e);
    function t() {
      var r = (e !== null && e.apply(this, arguments)) || this;
      return (
        (r.frameTarget = On()),
        (r.currentAnimationTarget = On()),
        (r.isAnimating = { x: !1, y: !1 }),
        (r.stopAxisAnimation = { x: void 0, y: void 0 }),
        (r.isAnimatingTree = !1),
        (r.animate = function (n, o, a) {
          a === void 0 && (a = {});
          var i = a.originBox,
            l = a.targetBox,
            s = a.visibilityAction,
            u = a.shouldStackAnimate,
            d = a.onComplete,
            f = a.prevParent,
            c = Jt(a, [
              "originBox",
              "targetBox",
              "visibilityAction",
              "shouldStackAnimate",
              "onComplete",
              "prevParent",
            ]),
            h = r.props,
            m = h.visualElement,
            g = h.layout;
          if (u === !1) return (r.isAnimatingTree = !1), r.safeToRemove();
          if (!(r.isAnimatingTree && u !== !0)) {
            u && (r.isAnimatingTree = !0), (o = i || o), (n = l || n);
            var S = !1,
              p = m.getProjectionParent();
            if (p) {
              var v = p.prevViewportBox,
                b = p.getLayoutState().layout;
              f &&
                (l && (b = f.getLayoutState().layout),
                i && !i6(f, p) && f.prevViewportBox && (v = f.prevViewportBox)),
                v && _6(f, i, l) && ((S = !0), (o = xa(v, o)), (n = xa(b, n)));
            }
            var x = E6(o, n),
              E = At(function (T) {
                var _, M;
                if (g === "position") {
                  var I = n[T].max - n[T].min;
                  o[T].max = o[T].min + I;
                }
                if (!m.projection.isTargetLocked)
                  if (s !== void 0) m.setVisibility(s === rp.Show);
                  else
                    return x
                      ? r.animateAxis(
                          T,
                          n[T],
                          o[T],
                          z(z({}, c), { isRelative: S })
                        )
                      : ((M = (_ = r.stopAxisAnimation)[T]) === null ||
                          M === void 0 ||
                          M.call(_),
                        m.setProjectionTargetAxis(T, n[T].min, n[T].max, S));
              });
            return (
              m.syncRender(),
              Promise.all(E).then(function () {
                (r.isAnimatingTree = !1),
                  d && d(),
                  m.notifyLayoutAnimationComplete();
              })
            );
          }
        }),
        r
      );
    }
    return (
      (t.prototype.componentDidMount = function () {
        var r = this,
          n = this.props.visualElement;
        (n.animateMotionValue = vu),
          n.enableLayoutProjection(),
          (this.unsubLayoutReady = n.onLayoutUpdate(this.animate)),
          (n.layoutSafeToRemove = function () {
            return r.safeToRemove();
          }),
          cM(w6);
      }),
      (t.prototype.componentWillUnmount = function () {
        var r = this;
        this.unsubLayoutReady(),
          At(function (n) {
            var o, a;
            return (a = (o = r.stopAxisAnimation)[n]) === null || a === void 0
              ? void 0
              : a.call(o);
          });
      }),
      (t.prototype.animateAxis = function (r, n, o, a) {
        var i = this,
          l,
          s,
          u = a === void 0 ? {} : a,
          d = u.transition,
          f = u.isRelative;
        if (!(this.isAnimating[r] && rl(n, this.currentAnimationTarget[r]))) {
          (s = (l = this.stopAxisAnimation)[r]) === null ||
            s === void 0 ||
            s.call(l),
            (this.isAnimating[r] = !0);
          var c = this.props.visualElement,
            h = this.frameTarget[r],
            m = c.getProjectionAnimationProgress()[r];
          m.clearListeners(), m.set(0), m.set(0);
          var g = function () {
            var b = m.get() / Z0;
            a6(h, o, n, b), c.setProjectionTargetAxis(r, h.min, h.max, f);
          };
          g();
          var S = m.onChange(g);
          (this.stopAxisAnimation[r] = function () {
            (i.isAnimating[r] = !1), m.stop(), S();
          }),
            (this.currentAnimationTarget[r] = n);
          var p = d || c.getDefaultTransition() || T6,
            v = vu(
              r === "x" ? "layoutX" : "layoutY",
              m,
              Z0,
              p && $h(p, "layout")
            ).then(this.stopAxisAnimation[r]);
          return v;
        }
      }),
      (t.prototype.safeToRemove = function () {
        var r, n;
        (n = (r = this.props).safeToRemove) === null ||
          n === void 0 ||
          n.call(r);
      }),
      (t.prototype.render = function () {
        return null;
      }),
      t
    );
  })(k.exports.Component);
function k6(e) {
  var t = je(Qb(), 2),
    r = t[1];
  return A(C6, { ...z({}, e, { safeToRemove: r }) });
}
function E6(e, t) {
  return !J0(e) && !J0(t) && (!rl(e.x, t.x) || !rl(e.y, t.y));
}
var q0 = { min: 0, max: 0 };
function J0(e) {
  return rl(e.x, q0) && rl(e.y, q0);
}
function rl(e, t) {
  return e.min === t.min && e.max === t.max;
}
var T6 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function _6(e, t, r) {
  return e || (!e && !(t || r));
}
var P6 = {
  layoutReady: function (e) {
    return e.notifyLayoutReady();
  },
};
function px() {
  var e = new Set();
  return {
    add: function (t) {
      return e.add(t);
    },
    flush: function (t) {
      var r = t === void 0 ? P6 : t,
        n = r.layoutReady,
        o = r.parent;
      ep(function (a, i) {
        var l = Array.from(e).sort(Fh),
          s = o ? mu(o) : [];
        i(function () {
          var u = Et(Et([], je(s)), je(l));
          u.forEach(function (d) {
            return d.resetTransform();
          });
        }),
          a(function () {
            l.forEach(Rs);
          }),
          i(function () {
            s.forEach(function (u) {
              return u.restoreTransform();
            }),
              l.forEach(n);
          }),
          a(function () {
            l.forEach(function (u) {
              u.isPresent && (u.presence = tl.Present);
            });
          }),
          i(function () {
            Ho.preRender(), Ho.render();
          }),
          a(function () {
            Br.postRender(function () {
              return l.forEach(R6);
            }),
              e.clear();
          });
      }),
        tp();
    },
  };
}
function R6(e) {
  e.prevViewportBox = e.projection.target;
}
var hx = k.exports.createContext(px()),
  A6 = k.exports.createContext(px());
function Zn(e) {
  return !!e.forceUpdate;
}
var M6 = (function (e) {
  Kb(t, e);
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.componentDidMount = function () {
      var r = this.props,
        n = r.syncLayout,
        o = r.framerSyncLayout,
        a = r.visualElement;
      Zn(n) && n.register(a),
        Zn(o) && o.register(a),
        a.onUnmount(function () {
          Zn(n) && n.remove(a), Zn(o) && o.remove(a);
        });
    }),
    (t.prototype.getSnapshotBeforeUpdate = function () {
      var r = this.props,
        n = r.syncLayout,
        o = r.visualElement;
      return Zn(n) ? n.syncUpdate() : (o6(o), n.add(o)), null;
    }),
    (t.prototype.componentDidUpdate = function () {
      var r = this.props.syncLayout;
      Zn(r) || r.flush();
    }),
    (t.prototype.render = function () {
      return null;
    }),
    t
  );
})(Q.Component);
function L6(e) {
  var t = k.exports.useContext(hx),
    r = k.exports.useContext(A6);
  return A(M6, { ...z({}, e, { syncLayout: t, framerSyncLayout: r }) });
}
var z6 = { measureLayout: L6, layoutAnimation: k6 },
  D6 = function () {
    return {
      isEnabled: !1,
      isHydrated: !1,
      isTargetLocked: !1,
      target: On(),
      targetFinal: On(),
    };
  };
function vx() {
  return {
    isHydrated: !1,
    layout: On(),
    layoutCorrected: On(),
    treeScale: { x: 1, y: 1 },
    delta: M0(),
    deltaFinal: M0(),
    deltaTransform: "",
  };
}
var eg = vx();
function uc(e, t, r) {
  var n = e.x,
    o = e.y,
    a = n.translate / t.x,
    i = o.translate / t.y,
    l = "translate3d(" + a + "px, " + i + "px, 0) ";
  if (r) {
    var s = r.rotate,
      u = r.rotateX,
      d = r.rotateY;
    s && (l += "rotate(" + s + ") "),
      u && (l += "rotateX(" + u + ") "),
      d && (l += "rotateY(" + d + ") ");
  }
  return (
    (l += "scale(" + n.scale + ", " + o.scale + ")"), !r && l === B6 ? "" : l
  );
}
function mx(e) {
  var t = e.deltaFinal;
  return t.x.origin * 100 + "% " + t.y.origin * 100 + "% 0";
}
var B6 = uc(eg.delta, eg.treeScale, { x: 1, y: 1 }),
  as = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "SetAxisTarget",
    "Unmount",
  ];
function I6() {
  var e = as.map(function () {
      return new Ps();
    }),
    t = {},
    r = {
      clearAllListeners: function () {
        return e.forEach(function (n) {
          return n.clear();
        });
      },
      updatePropListeners: function (n) {
        return as.forEach(function (o) {
          var a;
          (a = t[o]) === null || a === void 0 || a.call(t);
          var i = "on" + o,
            l = n[i];
          l && (t[o] = r[i](l));
        });
      },
    };
  return (
    e.forEach(function (n, o) {
      (r["on" + as[o]] = function (a) {
        return n.add(a);
      }),
        (r["notify" + as[o]] = function () {
          for (var a = [], i = 0; i < arguments.length; i++)
            a[i] = arguments[i];
          return n.notify.apply(n, Et([], je(a)));
        });
    }),
    r
  );
}
function $6(e, t, r) {
  var n;
  for (var o in t) {
    var a = t[o],
      i = r[o];
    if (Fn(a)) e.addValue(o, a);
    else if (Fn(i)) e.addValue(o, po(a));
    else if (i !== a)
      if (e.hasValue(o)) {
        var l = e.getValue(o);
        !l.hasAnimated && l.set(a);
      } else
        e.addValue(
          o,
          po((n = e.getStaticValue(o)) !== null && n !== void 0 ? n : a)
        );
  }
  for (var o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
function N6(e, t, r, n) {
  var o = e.delta,
    a = e.layout,
    i = e.layoutCorrected,
    l = e.treeScale,
    s = t.target;
  l6(i, a), c6(i, l, r), ix(o, i, s, n);
}
var F6 = (function () {
  function e() {
    (this.children = []), (this.isDirty = !1);
  }
  return (
    (e.prototype.add = function (t) {
      XS(this.children, t), (this.isDirty = !0);
    }),
    (e.prototype.remove = function (t) {
      QS(this.children, t), (this.isDirty = !0);
    }),
    (e.prototype.forEach = function (t) {
      this.isDirty && this.children.sort(Fh),
        (this.isDirty = !1),
        this.children.forEach(t);
    }),
    e
  );
})();
function O6(e) {
  var t = e.getProjectionParent();
  if (!t) {
    e.rebaseProjectionTarget();
    return;
  }
  var r = xa(t.getLayoutState().layout, e.getLayoutState().layout);
  At(function (n) {
    e.setProjectionTargetAxis(n, r[n].min, r[n].max, !0);
  });
}
var gx = function (e) {
  var t = e.treeType,
    r = t === void 0 ? "" : t,
    n = e.build,
    o = e.getBaseTarget,
    a = e.makeTargetAnimatable,
    i = e.measureViewportBox,
    l = e.render,
    s = e.readValueFromInstance,
    u = e.resetTransform,
    d = e.restoreTransform,
    f = e.removeValueFromRenderState,
    c = e.sortNodePosition,
    h = e.scrapeMotionValuesFromProps;
  return function (m, g) {
    var S = m.parent,
      p = m.props,
      v = m.presenceId,
      b = m.blockInitialAnimation,
      x = m.visualState;
    g === void 0 && (g = {});
    var E = x.latestValues,
      T = x.renderState,
      _,
      M = I6(),
      I = D6(),
      B,
      K = I,
      ce = E,
      xe,
      ee = vx(),
      We,
      oe = !1,
      Ge = new Map(),
      F = new Map(),
      Y = {},
      H,
      J = z({}, E),
      de;
    function re() {
      !_ ||
        (W.isProjectionReady() &&
          (Jf(K.targetFinal, K.target, ce),
          ix(ee.deltaFinal, ee.layoutCorrected, K.targetFinal, E)),
        Ye(),
        l(_, T));
    }
    function Ye() {
      var D = E;
      if (We && We.isActive()) {
        var O = We.getCrossfadeState(W);
        O && (D = O);
      }
      n(W, T, D, K, ee, g, p);
    }
    function Rt() {
      M.notifyUpdate(E);
    }
    function ot() {
      if (!!W.isProjectionReady()) {
        var D = ee.delta,
          O = ee.treeScale,
          fe = O.x,
          R = O.y,
          L = ee.deltaTransform;
        N6(ee, K, W.path, E),
          oe && W.notifyViewportBoxUpdate(K.target, D),
          (oe = !1);
        var $ = uc(D, O);
        ($ !== L || fe !== O.x || R !== O.y) && W.scheduleRender(),
          (ee.deltaTransform = $);
      }
    }
    function Vt() {
      W.layoutTree.forEach(j6);
    }
    function dr(D, O) {
      var fe = O.onChange(function (L) {
          (E[D] = L), p.onUpdate && Br.update(Rt, !1, !0);
        }),
        R = O.onRenderRequest(W.scheduleRender);
      F.set(D, function () {
        fe(), R();
      });
    }
    var Vr = h(p);
    for (var er in Vr) {
      var cn = Vr[er];
      E[er] !== void 0 && Fn(cn) && cn.set(E[er], !1);
    }
    var Un = ic(p),
      dn = eS(p),
      W = z(
        z(
          {
            treeType: r,
            current: null,
            depth: S ? S.depth + 1 : 0,
            parent: S,
            children: new Set(),
            path: S ? Et(Et([], je(S.path)), [S]) : [],
            layoutTree: S ? S.layoutTree : new F6(),
            presenceId: v,
            projection: I,
            variantChildren: dn ? new Set() : void 0,
            isVisible: void 0,
            manuallyAnimateOnMount: Boolean(S == null ? void 0 : S.isMounted()),
            blockInitialAnimation: b,
            isMounted: function () {
              return Boolean(_);
            },
            mount: function (D) {
              (_ = W.current = D),
                W.pointTo(W),
                dn &&
                  S &&
                  !Un &&
                  (de = S == null ? void 0 : S.addVariantChild(W)),
                S == null || S.children.add(W);
            },
            unmount: function () {
              fi.update(Rt),
                fi.render(re),
                fi.preRender(W.updateLayoutProjection),
                F.forEach(function (D) {
                  return D();
                }),
                W.stopLayoutAnimation(),
                W.layoutTree.remove(W),
                de == null || de(),
                S == null || S.children.delete(W),
                xe == null || xe(),
                M.clearAllListeners();
            },
            addVariantChild: function (D) {
              var O,
                fe = W.getClosestVariantNode();
              if (fe)
                return (
                  (O = fe.variantChildren) === null || O === void 0 || O.add(D),
                  function () {
                    return fe.variantChildren.delete(D);
                  }
                );
            },
            sortNodePosition: function (D) {
              return !c || r !== D.treeType
                ? 0
                : c(W.getInstance(), D.getInstance());
            },
            getClosestVariantNode: function () {
              return dn ? W : S == null ? void 0 : S.getClosestVariantNode();
            },
            scheduleUpdateLayoutProjection: S
              ? S.scheduleUpdateLayoutProjection
              : function () {
                  return Br.preRender(W.updateTreeLayoutProjection, !1, !0);
                },
            getLayoutId: function () {
              return p.layoutId;
            },
            getInstance: function () {
              return _;
            },
            getStaticValue: function (D) {
              return E[D];
            },
            setStaticValue: function (D, O) {
              return (E[D] = O);
            },
            getLatestValues: function () {
              return E;
            },
            setVisibility: function (D) {
              W.isVisible !== D && ((W.isVisible = D), W.scheduleRender());
            },
            makeTargetAnimatable: function (D, O) {
              return O === void 0 && (O = !0), a(W, D, p, O);
            },
            addValue: function (D, O) {
              W.hasValue(D) && W.removeValue(D),
                Ge.set(D, O),
                (E[D] = O.get()),
                dr(D, O);
            },
            removeValue: function (D) {
              var O;
              Ge.delete(D),
                (O = F.get(D)) === null || O === void 0 || O(),
                F.delete(D),
                delete E[D],
                f(D, T);
            },
            hasValue: function (D) {
              return Ge.has(D);
            },
            getValue: function (D, O) {
              var fe = Ge.get(D);
              return (
                fe === void 0 &&
                  O !== void 0 &&
                  ((fe = po(O)), W.addValue(D, fe)),
                fe
              );
            },
            forEachValue: function (D) {
              return Ge.forEach(D);
            },
            readValue: function (D) {
              var O;
              return (O = E[D]) !== null && O !== void 0 ? O : s(_, D, g);
            },
            setBaseTarget: function (D, O) {
              J[D] = O;
            },
            getBaseTarget: function (D) {
              if (o) {
                var O = o(p, D);
                if (O !== void 0 && !Fn(O)) return O;
              }
              return J[D];
            },
          },
          M
        ),
        {
          build: function () {
            return Ye(), T;
          },
          scheduleRender: function () {
            Br.render(re, !1, !0);
          },
          syncRender: re,
          setProps: function (D) {
            (p = D), M.updatePropListeners(D), (Y = $6(W, h(p), Y));
          },
          getProps: function () {
            return p;
          },
          getVariant: function (D) {
            var O;
            return (O = p.variants) === null || O === void 0 ? void 0 : O[D];
          },
          getDefaultTransition: function () {
            return p.transition;
          },
          getVariantContext: function (D) {
            if ((D === void 0 && (D = !1), D))
              return S == null ? void 0 : S.getVariantContext();
            if (!Un) {
              var O = (S == null ? void 0 : S.getVariantContext()) || {};
              return p.initial !== void 0 && (O.initial = p.initial), O;
            }
            for (var fe = {}, R = 0; R < W6; R++) {
              var L = yx[R],
                $ = p[L];
              (br($) || $ === !1) && (fe[L] = $);
            }
            return fe;
          },
          enableLayoutProjection: function () {
            (I.isEnabled = !0), W.layoutTree.add(W);
          },
          lockProjectionTarget: function () {
            I.isTargetLocked = !0;
          },
          unlockProjectionTarget: function () {
            W.stopLayoutAnimation(), (I.isTargetLocked = !1);
          },
          getLayoutState: function () {
            return ee;
          },
          setCrossfader: function (D) {
            We = D;
          },
          isProjectionReady: function () {
            return I.isEnabled && I.isHydrated && ee.isHydrated;
          },
          startLayoutAnimation: function (D, O, fe) {
            fe === void 0 && (fe = !1);
            var R = W.getProjectionAnimationProgress()[D],
              L = fe ? I.relativeTarget[D] : I.target[D],
              $ = L.min,
              U = L.max,
              X = U - $;
            return (
              R.clearListeners(),
              R.set($),
              R.set($),
              R.onChange(function (Z) {
                W.setProjectionTargetAxis(D, Z, Z + X, fe);
              }),
              W.animateMotionValue(D, R, 0, O)
            );
          },
          stopLayoutAnimation: function () {
            At(function (D) {
              return W.getProjectionAnimationProgress()[D].stop();
            });
          },
          measureViewportBox: function (D) {
            D === void 0 && (D = !0);
            var O = i(_, g);
            return D || dx(O, E), O;
          },
          getProjectionAnimationProgress: function () {
            return H || (H = { x: po(0), y: po(0) }), H;
          },
          setProjectionTargetAxis: function (D, O, fe, R) {
            R === void 0 && (R = !1);
            var L;
            R
              ? (I.relativeTarget || (I.relativeTarget = On()),
                (L = I.relativeTarget[D]))
              : ((I.relativeTarget = void 0), (L = I.target[D])),
              (I.isHydrated = !0),
              (L.min = O),
              (L.max = fe),
              (oe = !0),
              M.notifySetAxisTarget();
          },
          rebaseProjectionTarget: function (D, O) {
            O === void 0 && (O = ee.layout);
            var fe = W.getProjectionAnimationProgress(),
              R = fe.x,
              L = fe.y,
              $ =
                !I.relativeTarget &&
                !I.isTargetLocked &&
                !R.isAnimating() &&
                !L.isAnimating();
            (D || $) &&
              At(function (U) {
                var X = O[U],
                  Z = X.min,
                  se = X.max;
                W.setProjectionTargetAxis(U, Z, se);
              });
          },
          notifyLayoutReady: function (D) {
            O6(W),
              W.notifyLayoutUpdate(
                ee.layout,
                W.prevViewportBox || ee.layout,
                D
              );
          },
          resetTransform: function () {
            return u(W, _, p);
          },
          restoreTransform: function () {
            return d(_, T);
          },
          updateLayoutProjection: ot,
          updateTreeLayoutProjection: function () {
            W.layoutTree.forEach(V6), Br.preRender(Vt, !1, !0);
          },
          getProjectionParent: function () {
            if (B === void 0) {
              for (var D = !1, O = W.path.length - 1; O >= 0; O--) {
                var fe = W.path[O];
                if (fe.projection.isEnabled) {
                  D = fe;
                  break;
                }
              }
              B = D;
            }
            return B;
          },
          resolveRelativeTargetBox: function () {
            var D = W.getProjectionParent();
            if (!(!I.relativeTarget || !D) && (r6(I, D.projection), sx(D))) {
              var O = I.target;
              Jf(O, O, D.getLatestValues());
            }
          },
          shouldResetTransform: function () {
            return Boolean(p._layoutResetTransform);
          },
          pointTo: function (D) {
            (K = D.projection),
              (ce = D.getLatestValues()),
              xe == null || xe(),
              (xe = ml(
                D.onSetAxisTarget(W.scheduleUpdateLayoutProjection),
                D.onLayoutAnimationComplete(function () {
                  var O;
                  W.isPresent
                    ? (W.presence = tl.Present)
                    : (O = W.layoutSafeToRemove) === null ||
                      O === void 0 ||
                      O.call(W);
                })
              ));
          },
          isPresent: !0,
          presence: tl.Entering,
        }
      );
    return W;
  };
};
function V6(e) {
  e.resolveRelativeTargetBox();
}
function j6(e) {
  e.updateLayoutProjection();
}
var yx = Et(["initial"], je(Nh)),
  W6 = yx.length,
  H6 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  bx = function (e) {
    return H6.has(e);
  },
  U6 = function (e) {
    return Object.keys(e).some(bx);
  },
  Sx = function (e, t) {
    e.set(t, !1), e.set(t);
  },
  tg = function (e) {
    return e === wo || e === q;
  },
  rg;
(function (e) {
  (e.width = "width"),
    (e.height = "height"),
    (e.left = "left"),
    (e.right = "right"),
    (e.top = "top"),
    (e.bottom = "bottom");
})(rg || (rg = {}));
var ng = function (e, t) {
    return parseFloat(e.split(", ")[t]);
  },
  og = function (e, t) {
    return function (r, n) {
      var o = n.transform;
      if (o === "none" || !o) return 0;
      var a = o.match(/^matrix3d\((.+)\)$/);
      if (a) return ng(a[1], t);
      var i = o.match(/^matrix\((.+)\)$/);
      return i ? ng(i[1], e) : 0;
    };
  },
  G6 = new Set(["x", "y", "z"]),
  K6 = Qi.filter(function (e) {
    return !G6.has(e);
  });
function Y6(e) {
  var t = [];
  return (
    K6.forEach(function (r) {
      var n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.syncRender(),
    t
  );
}
var ag = {
    width: function (e) {
      var t = e.x;
      return t.max - t.min;
    },
    height: function (e) {
      var t = e.y;
      return t.max - t.min;
    },
    top: function (e, t) {
      var r = t.top;
      return parseFloat(r);
    },
    left: function (e, t) {
      var r = t.left;
      return parseFloat(r);
    },
    bottom: function (e, t) {
      var r = e.y,
        n = t.top;
      return parseFloat(n) + (r.max - r.min);
    },
    right: function (e, t) {
      var r = e.x,
        n = t.left;
      return parseFloat(n) + (r.max - r.min);
    },
    x: og(4, 13),
    y: og(5, 14),
  },
  X6 = function (e, t, r) {
    var n = t.measureViewportBox(),
      o = t.getInstance(),
      a = getComputedStyle(o),
      i = a.display,
      l = a.top,
      s = a.left,
      u = a.bottom,
      d = a.right,
      f = a.transform,
      c = { top: l, left: s, bottom: u, right: d, transform: f };
    i === "none" && t.setStaticValue("display", e.display || "block"),
      t.syncRender();
    var h = t.measureViewportBox();
    return (
      r.forEach(function (m) {
        var g = t.getValue(m);
        Sx(g, ag[m](n, c)), (e[m] = ag[m](h, a));
      }),
      e
    );
  },
  Q6 = function (e, t, r, n) {
    r === void 0 && (r = {}),
      n === void 0 && (n = {}),
      (t = z({}, t)),
      (n = z({}, n));
    var o = Object.keys(t).filter(bx),
      a = [],
      i = !1,
      l = [];
    if (
      (o.forEach(function (u) {
        var d = e.getValue(u);
        if (!!e.hasValue(u)) {
          var f = r[u],
            c = t[u],
            h = ns(f),
            m;
          if (qi(c))
            for (var g = c.length, S = c[0] === null ? 1 : 0; S < g; S++)
              m ? Yi(ns(c[S]) === m) : (m = ns(c[S]));
          else m = ns(c);
          if (h !== m)
            if (tg(h) && tg(m)) {
              var p = d.get();
              typeof p == "string" && d.set(parseFloat(p)),
                typeof c == "string"
                  ? (t[u] = parseFloat(c))
                  : Array.isArray(c) && m === q && (t[u] = c.map(parseFloat));
            } else
              (h == null ? void 0 : h.transform) &&
              (m == null ? void 0 : m.transform) &&
              (f === 0 || c === 0)
                ? f === 0
                  ? d.set(m.transform(f))
                  : (t[u] = h.transform(c))
                : (i || ((a = Y6(e)), (i = !0)),
                  l.push(u),
                  (n[u] = n[u] !== void 0 ? n[u] : t[u]),
                  Sx(d, c));
        }
      }),
      l.length)
    ) {
      var s = X6(t, e, l);
      return (
        a.length &&
          a.forEach(function (u) {
            var d = je(u, 2),
              f = d[0],
              c = d[1];
            e.getValue(f).set(c);
          }),
        e.syncRender(),
        { target: s, transitionEnd: n }
      );
    } else return { target: t, transitionEnd: n };
  };
function Z6(e, t, r, n) {
  return U6(t) ? Q6(e, t, r, n) : { target: t, transitionEnd: n };
}
var q6 = function (e, t, r, n) {
  var o = b6(e, t, n);
  return (t = o.target), (n = o.transitionEnd), Z6(e, t, r, n);
};
function J6(e) {
  return window.getComputedStyle(e);
}
var xx = {
    treeType: "dom",
    readValueFromInstance: function (e, t) {
      if (lc(t)) {
        var r = Bh(t);
        return (r && r.default) || 0;
      } else {
        var n = J6(e);
        return (nS(t) ? n.getPropertyValue(t) : n[t]) || 0;
      }
    },
    sortNodePosition: function (e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    },
    getBaseTarget: function (e, t) {
      var r;
      return (r = e.style) === null || r === void 0 ? void 0 : r[t];
    },
    measureViewportBox: function (e, t) {
      var r = t.transformPagePoint;
      return ax(e, r);
    },
    resetTransform: function (e, t, r) {
      var n = r.transformTemplate;
      (t.style.transform = n ? n({}, "") : "none"), e.scheduleRender();
    },
    restoreTransform: function (e, t) {
      e.style.transform = t.style.transform;
    },
    removeValueFromRenderState: function (e, t) {
      var r = t.vars,
        n = t.style;
      delete r[e], delete n[e];
    },
    makeTargetAnimatable: function (e, t, r, n) {
      var o = r.transformValues;
      n === void 0 && (n = !0);
      var a = t.transition,
        i = t.transitionEnd,
        l = Jt(t, ["transition", "transitionEnd"]),
        s = Az(l, a || {}, e);
      if ((o && (i && (i = o(i)), l && (l = o(l)), s && (s = o(s))), n)) {
        Pz(e, l, s);
        var u = q6(e, l, s, i);
        (i = u.transitionEnd), (l = u.target);
      }
      return z({ transition: a, transitionEnd: i }, l);
    },
    scrapeMotionValuesFromProps: Th,
    build: function (e, t, r, n, o, a, i) {
      e.isVisible !== void 0 &&
        (t.style.visibility = e.isVisible ? "visible" : "hidden");
      var l = n.isEnabled && o.isHydrated;
      Ch(t, r, n, o, a, i.transformTemplate, l ? uc : void 0, l ? mx : void 0);
    },
    render: mS,
  },
  eD = gx(xx),
  tD = gx(
    z(z({}, xx), {
      getBaseTarget: function (e, t) {
        return e[t];
      },
      readValueFromInstance: function (e, t) {
        var r;
        return lc(t)
          ? ((r = Bh(t)) === null || r === void 0 ? void 0 : r.default) || 0
          : ((t = gS.has(t) ? t : vS(t)), e.getAttribute(t));
      },
      scrapeMotionValuesFromProps: bS,
      build: function (e, t, r, n, o, a, i) {
        var l = n.isEnabled && o.isHydrated;
        Eh(
          t,
          r,
          n,
          o,
          a,
          i.transformTemplate,
          l ? uc : void 0,
          l ? mx : void 0
        );
      },
      render: yS,
    })
  ),
  rD = function (e, t) {
    return xh(e)
      ? tD(t, { enableHardwareAcceleration: !1 })
      : eD(t, { enableHardwareAcceleration: !0 });
  },
  nD = z(z(z(z({}, Vz), sz), g6), z6),
  oD = sM(function (e, t) {
    return qM(e, t, nD, rD);
  });
function aD() {
  var e = k.exports.useRef(!1),
    t = je(k.exports.useState(0), 2),
    r = t[0],
    n = t[1];
  return (
    Ah(function () {
      return (e.current = !0);
    }),
    k.exports.useCallback(
      function () {
        !e.current && n(r + 1);
      },
      [r]
    )
  );
}
var ig = 0;
function iD() {
  var e = ig;
  return ig++, e;
}
var Cd = function (e) {
  var t = e.children,
    r = e.initial,
    n = e.isPresent,
    o = e.onExitComplete,
    a = e.custom,
    i = e.presenceAffectsLayout,
    l = Xi(lD),
    s = Xi(iD),
    u = k.exports.useMemo(
      function () {
        return {
          id: s,
          initial: r,
          isPresent: n,
          custom: a,
          onExitComplete: function (d) {
            l.set(d, !0);
            var f = !0;
            l.forEach(function (c) {
              c || (f = !1);
            }),
              f && (o == null || o());
          },
          register: function (d) {
            return (
              l.set(d, !1),
              function () {
                return l.delete(d);
              }
            );
          },
        };
      },
      i ? void 0 : [n]
    );
  return (
    k.exports.useMemo(
      function () {
        l.forEach(function (d, f) {
          return l.set(f, !1);
        });
      },
      [n]
    ),
    k.exports.useEffect(
      function () {
        !n && !l.size && (o == null || o());
      },
      [n]
    ),
    A(Ra.Provider, { value: u, children: t })
  );
};
function lD() {
  return new Map();
}
function Mo(e) {
  return e.key || "";
}
function sD(e, t) {
  e.forEach(function (r) {
    var n = Mo(r);
    t.set(n, r);
  });
}
function uD(e) {
  var t = [];
  return (
    k.exports.Children.forEach(e, function (r) {
      k.exports.isValidElement(r) && t.push(r);
    }),
    t
  );
}
var cD = function (e) {
    var t = e.children,
      r = e.custom,
      n = e.initial,
      o = n === void 0 ? !0 : n,
      a = e.onExitComplete,
      i = e.exitBeforeEnter,
      l = e.presenceAffectsLayout,
      s = l === void 0 ? !0 : l,
      u = aD(),
      d = k.exports.useContext(hx);
    Zn(d) && (u = d.forceUpdate);
    var f = k.exports.useRef(!0),
      c = uD(t),
      h = k.exports.useRef(c),
      m = k.exports.useRef(new Map()).current,
      g = k.exports.useRef(new Set()).current;
    if ((sD(c, m), f.current))
      return (
        (f.current = !1),
        A(ya, {
          children: c.map(function (T) {
            return A(
              Cd,
              {
                isPresent: !0,
                initial: o ? void 0 : !1,
                presenceAffectsLayout: s,
                children: T,
              },
              Mo(T)
            );
          }),
        })
      );
    for (
      var S = Et([], je(c)),
        p = h.current.map(Mo),
        v = c.map(Mo),
        b = p.length,
        x = 0;
      x < b;
      x++
    ) {
      var E = p[x];
      v.indexOf(E) === -1 ? g.add(E) : g.delete(E);
    }
    return (
      i && g.size && (S = []),
      g.forEach(function (T) {
        if (v.indexOf(T) === -1) {
          var _ = m.get(T);
          if (!!_) {
            var M = p.indexOf(T),
              I = function () {
                m.delete(T), g.delete(T);
                var B = h.current.findIndex(function (K) {
                  return K.key === T;
                });
                h.current.splice(B, 1),
                  g.size || ((h.current = c), u(), a && a());
              };
            S.splice(
              M,
              0,
              A(
                Cd,
                {
                  isPresent: !1,
                  onExitComplete: I,
                  custom: r,
                  presenceAffectsLayout: s,
                  children: _,
                },
                Mo(_)
              )
            );
          }
        }
      }),
      (S = S.map(function (T) {
        var _ = T.key;
        return g.has(_)
          ? T
          : A(
              Cd,
              { isPresent: !0, presenceAffectsLayout: s, children: T },
              Mo(T)
            );
      })),
      (h.current = S),
      A(ya, {
        children: g.size
          ? S
          : S.map(function (T) {
              return k.exports.cloneElement(T);
            }),
      })
    );
  },
  dD = (...e) => e.filter(Boolean).join(" "),
  fD = VT({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  Oh = ne((e, t) => {
    const r = cr("Spinner", e),
      {
        label: n = "Loading...",
        thickness: o = "2px",
        speed: a = "0.45s",
        emptyColor: i = "transparent",
        className: l,
        ...s
      } = Ot(e),
      u = dD("chakra-spinner", l),
      d = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: i,
        borderLeftColor: i,
        animation: `${fD} ${a} linear infinite`,
        ...r,
      };
    return Q.createElement(
      te.div,
      { ref: t, __css: d, className: u, ...s },
      n && Q.createElement(te.span, { srOnly: !0 }, n)
    );
  });
Oh.displayName = "Spinner";
var cc = (...e) => e.filter(Boolean).join(" ");
function pD(e) {
  return A(Pa, {
    viewBox: "0 0 24 24",
    ...e,
    children: A("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function hD(e) {
  return A(Pa, {
    viewBox: "0 0 24 24",
    ...e,
    children: A("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function lg(e) {
  return A(Pa, {
    viewBox: "0 0 24 24",
    ...e,
    children: A("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var [vD, mD] = _a({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [gD, Vh] = _a({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  wx = {
    info: { icon: hD, colorScheme: "blue" },
    warning: { icon: lg, colorScheme: "orange" },
    success: { icon: pD, colorScheme: "green" },
    error: { icon: lg, colorScheme: "red" },
    loading: { icon: Oh, colorScheme: "blue" },
  };
function yD(e) {
  return wx[e].colorScheme;
}
function bD(e) {
  return wx[e].icon;
}
var Cx = ne(function (t, r) {
  var u;
  const { status: n = "info", addRole: o = !0, ...a } = Ot(t),
    i = (u = t.colorScheme) != null ? u : yD(n),
    l = Gb("Alert", { ...t, colorScheme: i }),
    s = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return Q.createElement(
    vD,
    { value: { status: n } },
    Q.createElement(
      gD,
      { value: l },
      Q.createElement(te.div, {
        role: o ? "alert" : void 0,
        ref: r,
        ...a,
        className: cc("chakra-alert", t.className),
        __css: s,
      })
    )
  );
});
Cx.displayName = "Alert";
var kx = ne(function (t, r) {
  const o = { display: "inline", ...Vh().description };
  return Q.createElement(te.div, {
    ref: r,
    ...t,
    className: cc("chakra-alert__desc", t.className),
    __css: o,
  });
});
kx.displayName = "AlertDescription";
function Ex(e) {
  const { status: t } = mD(),
    r = bD(t),
    n = Vh(),
    o = t === "loading" ? n.spinner : n.icon;
  return Q.createElement(
    te.span,
    {
      display: "inherit",
      ...e,
      className: cc("chakra-alert__icon", e.className),
      __css: o,
    },
    e.children || A(r, { h: "100%", w: "100%" })
  );
}
Ex.displayName = "AlertIcon";
var Tx = ne(function (t, r) {
  const n = Vh();
  return Q.createElement(te.div, {
    ref: r,
    ...t,
    className: cc("chakra-alert__title", t.className),
    __css: n.title,
  });
});
Tx.displayName = "AlertTitle";
function _x(e) {
  return k.exports.Children.toArray(e).filter((t) =>
    k.exports.isValidElement(t)
  );
}
var dc = (...e) => e.filter(Boolean).join(" "),
  sg = (e) => (e ? "" : void 0),
  [SD, xD] = _a({ strict: !1, name: "ButtonGroupContext" });
function ap(e) {
  const { children: t, className: r, ...n } = e,
    o = k.exports.isValidElement(t)
      ? k.exports.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    a = dc("chakra-button__icon", r);
  return Q.createElement(
    te.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: a,
    },
    o
  );
}
ap.displayName = "ButtonIcon";
function ip(e) {
  const {
      label: t,
      placement: r,
      spacing: n = "0.5rem",
      children: o = A(Oh, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: a,
      __css: i,
      ...l
    } = e,
    s = dc("chakra-button__spinner", a),
    u = r === "start" ? "marginEnd" : "marginStart",
    d = k.exports.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? n : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...i,
      }),
      [i, t, u, n]
    );
  return Q.createElement(te.div, { className: s, ...l, __css: d }, o);
}
ip.displayName = "ButtonSpinner";
function wD(e) {
  const [t, r] = k.exports.useState(!e);
  return {
    ref: k.exports.useCallback((a) => {
      !a || r(a.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
var jh = ne((e, t) => {
  const r = xD(),
    n = cr("Button", { ...r, ...e }),
    {
      isDisabled: o = r == null ? void 0 : r.isDisabled,
      isLoading: a,
      isActive: i,
      children: l,
      leftIcon: s,
      rightIcon: u,
      loadingText: d,
      iconSpacing: f = "0.5rem",
      type: c,
      spinner: h,
      spinnerPlacement: m = "start",
      className: g,
      as: S,
      ...p
    } = Ot(e),
    v = k.exports.useMemo(() => {
      const T = { ...(n == null ? void 0 : n._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...n,
        ...(!!r && { _focus: T }),
      };
    }, [n, r]),
    { ref: b, type: x } = wD(S),
    E = { rightIcon: u, leftIcon: s, iconSpacing: f, children: l };
  return Q.createElement(
    te.button,
    {
      disabled: o || a,
      ref: W4(t, b),
      as: S,
      type: c != null ? c : x,
      "data-active": sg(i),
      "data-loading": sg(a),
      __css: v,
      className: dc("chakra-button", g),
      ...p,
    },
    a &&
      m === "start" &&
      A(ip, {
        className: "chakra-button__spinner--start",
        label: d,
        placement: "start",
        spacing: f,
        children: h,
      }),
    a
      ? d || Q.createElement(te.span, { opacity: 0 }, A(ug, { ...E }))
      : A(ug, { ...E }),
    a &&
      m === "end" &&
      A(ip, {
        className: "chakra-button__spinner--end",
        label: d,
        placement: "end",
        spacing: f,
        children: h,
      })
  );
});
jh.displayName = "Button";
function ug(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return $t(ya, {
    children: [
      t && A(ap, { marginEnd: o, children: t }),
      n,
      r && A(ap, { marginStart: o, children: r }),
    ],
  });
}
var CD = ne(function (t, r) {
  const {
      size: n,
      colorScheme: o,
      variant: a,
      className: i,
      spacing: l = "0.5rem",
      isAttached: s,
      isDisabled: u,
      ...d
    } = t,
    f = dc("chakra-button__group", i),
    c = k.exports.useMemo(
      () => ({ size: n, colorScheme: o, variant: a, isDisabled: u }),
      [n, o, a, u]
    );
  let h = { display: "inline-flex" };
  return (
    s
      ? (h = {
          ...h,
          "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
          "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
          "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 },
        })
      : (h = { ...h, "& > *:not(style) ~ *:not(style)": { marginStart: l } }),
    Q.createElement(
      SD,
      { value: c },
      Q.createElement(te.div, {
        ref: r,
        role: "group",
        __css: h,
        className: f,
        "data-attached": s ? "" : void 0,
        ...d,
      })
    )
  );
});
CD.displayName = "ButtonGroup";
var kD = ne((e, t) => {
  const { icon: r, children: n, isRound: o, "aria-label": a, ...i } = e,
    l = r || n,
    s = k.exports.isValidElement(l)
      ? k.exports.cloneElement(l, { "aria-hidden": !0, focusable: !1 })
      : null;
  return A(jh, {
    padding: "0",
    borderRadius: o ? "full" : void 0,
    ref: t,
    "aria-label": a,
    ...i,
    children: s,
  });
});
kD.displayName = "IconButton";
function cg(e, t) {
  const r = k.exports.useRef(!1),
    n = k.exports.useRef(!1);
  k.exports.useEffect(() => {
    if (r.current && n.current) return e();
    n.current = !0;
  }, t),
    k.exports.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1;
        }
      ),
      []
    );
}
function ED(e) {
  return A(Pa, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: A("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var Px = ne(function (t, r) {
  const n = cr("CloseButton", t),
    { children: o, isDisabled: a, __css: i, ...l } = Ot(t),
    s = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return Q.createElement(
    te.button,
    {
      type: "button",
      "aria-label": "Close",
      ref: r,
      disabled: a,
      __css: { ...s, ...n, ...i },
      ...l,
    },
    o || A(ED, { width: "1em", height: "1em" })
  );
});
Px.displayName = "CloseButton";
var Rx = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,
  TD = () => A(Ju, { styles: Rx }),
  _D = () =>
    A(Ju, {
      styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${Rx}
    `,
    });
function Ax(e) {
  const t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function PD(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function Vn(e, t) {
  return Array.isArray(e)
    ? e.map((r) => (r === null ? null : t(r)))
    : PD(e)
    ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
    : e != null
    ? t(e)
    : null;
}
var RD = ne(function (e, t) {
  const { ratio: r = 4 / 3, children: n, className: o, ...a } = e,
    i = k.exports.Children.only(n),
    l = Pt("chakra-aspect-ratio", o);
  return Q.createElement(
    te.div,
    {
      ref: t,
      position: "relative",
      className: l,
      _before: {
        height: 0,
        content: '""',
        display: "block",
        paddingBottom: Vn(r, (s) => `${(1 / s) * 100}%`),
      },
      __css: {
        "& > *:not(style)": {
          overflow: "hidden",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
        "& > img, & > video": { objectFit: "cover" },
      },
      ...a,
    },
    i
  );
});
RD.displayName = "AspectRatio";
var AD = ne(function (t, r) {
  const n = cr("Badge", t),
    { className: o, ...a } = Ot(t);
  return Q.createElement(te.span, {
    ref: r,
    className: Pt("chakra-badge", t.className),
    ...a,
    __css: {
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      ...n,
    },
  });
});
AD.displayName = "Badge";
var wa = te("div");
wa.displayName = "Box";
var Mx = ne(function (t, r) {
  const { size: n, centerContent: o = !0, ...a } = t;
  return A(wa, {
    ref: r,
    boxSize: n,
    __css: {
      ...(o
        ? { display: "flex", alignItems: "center", justifyContent: "center" }
        : {}),
      flexShrink: 0,
      flexGrow: 0,
    },
    ...a,
  });
});
Mx.displayName = "Square";
var MD = ne(function (t, r) {
  const { size: n, ...o } = t;
  return A(Mx, { size: n, ref: r, borderRadius: "9999px", ...o });
});
MD.displayName = "Circle";
var Lx = te("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
Lx.displayName = "Center";
var LD = {
  horizontal: { insetStart: "50%", transform: "translateX(-50%)" },
  vertical: { top: "50%", transform: "translateY(-50%)" },
  both: { insetStart: "50%", top: "50%", transform: "translate(-50%, -50%)" },
};
ne(function (t, r) {
  const { axis: n = "both", ...o } = t;
  return Q.createElement(te.div, {
    ref: r,
    __css: LD[n],
    ...o,
    position: "absolute",
  });
});
var zD = ne(function (t, r) {
  const n = cr("Code", t),
    { className: o, ...a } = Ot(t);
  return Q.createElement(te.code, {
    ref: r,
    className: Pt("chakra-code", t.className),
    ...a,
    __css: { display: "inline-block", ...n },
  });
});
zD.displayName = "Code";
var zx = ne(function (t, r) {
  const { className: n, centerContent: o, ...a } = Ot(t),
    i = cr("Container", t);
  return Q.createElement(te.div, {
    ref: r,
    className: Pt("chakra-container", n),
    ...a,
    __css: {
      ...i,
      ...(o && {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
    },
  });
});
zx.displayName = "Container";
var DD = ne(function (t, r) {
  const {
      borderLeftWidth: n,
      borderBottomWidth: o,
      borderTopWidth: a,
      borderRightWidth: i,
      borderWidth: l,
      borderStyle: s,
      borderColor: u,
      ...d
    } = cr("Divider", t),
    { className: f, orientation: c = "horizontal", __css: h, ...m } = Ot(t),
    g = {
      vertical: { borderLeftWidth: n || i || l || "1px", height: "100%" },
      horizontal: { borderBottomWidth: o || a || l || "1px", width: "100%" },
    };
  return Q.createElement(te.hr, {
    ref: r,
    "aria-orientation": c,
    ...m,
    __css: { ...d, border: "0", borderColor: u, borderStyle: s, ...g[c], ...h },
    className: Pt("chakra-divider", f),
  });
});
DD.displayName = "Divider";
var Dx = ne(function (t, r) {
  const {
      direction: n,
      align: o,
      justify: a,
      wrap: i,
      basis: l,
      grow: s,
      shrink: u,
      ...d
    } = t,
    f = {
      display: "flex",
      flexDirection: n,
      alignItems: o,
      justifyContent: a,
      flexWrap: i,
      flexBasis: l,
      flexGrow: s,
      flexShrink: u,
    };
  return Q.createElement(te.div, { ref: r, __css: f, ...d });
});
Dx.displayName = "Flex";
var Bx = ne(function (t, r) {
  const {
      templateAreas: n,
      gap: o,
      rowGap: a,
      columnGap: i,
      column: l,
      row: s,
      autoFlow: u,
      autoRows: d,
      templateRows: f,
      autoColumns: c,
      templateColumns: h,
      ...m
    } = t,
    g = {
      display: "grid",
      gridTemplateAreas: n,
      gridGap: o,
      gridRowGap: a,
      gridColumnGap: i,
      gridAutoColumns: c,
      gridColumn: l,
      gridRow: s,
      gridAutoFlow: u,
      gridAutoRows: d,
      gridTemplateRows: f,
      gridTemplateColumns: h,
    };
  return Q.createElement(te.div, { ref: r, __css: g, ...m });
});
Bx.displayName = "Grid";
function dg(e) {
  return Vn(e, (t) => (t === "auto" ? "auto" : `span ${t}/span ${t}`));
}
var BD = ne(function (t, r) {
  const {
      area: n,
      colSpan: o,
      colStart: a,
      colEnd: i,
      rowEnd: l,
      rowSpan: s,
      rowStart: u,
      ...d
    } = t,
    f = Ax({
      gridArea: n,
      gridColumn: dg(o),
      gridRow: dg(s),
      gridColumnStart: a,
      gridColumnEnd: i,
      gridRowStart: u,
      gridRowEnd: l,
    });
  return Q.createElement(te.div, { ref: r, __css: f, ...d });
});
BD.displayName = "GridItem";
var yu = ne(function (t, r) {
  const n = cr("Heading", t),
    { className: o, ...a } = Ot(t);
  return Q.createElement(te.h2, {
    ref: r,
    className: Pt("chakra-heading", t.className),
    ...a,
    __css: n,
  });
});
yu.displayName = "Heading";
ne(function (t, r) {
  const n = cr("Mark", t),
    o = Ot(t);
  return A(wa, {
    ref: r,
    ...o,
    as: "mark",
    __css: { bg: "transparent", whiteSpace: "nowrap", ...n },
  });
});
var ID = ne(function (t, r) {
  const n = cr("Kbd", t),
    { className: o, ...a } = Ot(t);
  return Q.createElement(te.kbd, {
    ref: r,
    className: Pt("chakra-kbd", o),
    ...a,
    __css: { fontFamily: "mono", ...n },
  });
});
ID.displayName = "Kbd";
var $D = ne(function (t, r) {
  const n = cr("Link", t),
    { className: o, isExternal: a, ...i } = Ot(t);
  return Q.createElement(te.a, {
    target: a ? "_blank" : void 0,
    rel: a ? "noopener" : void 0,
    ref: r,
    className: Pt("chakra-link", o),
    ...i,
    __css: n,
  });
});
$D.displayName = "Link";
var ND = ne(function (t, r) {
    const { isExternal: n, target: o, rel: a, className: i, ...l } = t;
    return Q.createElement(te.a, {
      ...l,
      ref: r,
      className: Pt("chakra-linkbox__overlay", i),
      rel: n ? "noopener noreferrer" : a,
      target: n ? "_blank" : o,
      __css: {
        position: "static",
        "&::before": {
          content: "''",
          cursor: "inherit",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        },
      },
    });
  }),
  FD = ne(function (t, r) {
    const { className: n, ...o } = t;
    return Q.createElement(te.div, {
      ref: r,
      position: "relative",
      ...o,
      className: Pt("chakra-linkbox", n),
      __css: {
        "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
          position: "relative",
          zIndex: 1,
        },
      },
    });
  }),
  [OD, Ix] = _a({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  Wh = ne(function (t, r) {
    const n = Gb("List", t),
      {
        children: o,
        styleType: a = "none",
        stylePosition: i,
        spacing: l,
        ...s
      } = Ot(t),
      u = _x(o),
      f = l ? { ["& > *:not(style) ~ *:not(style)"]: { mt: l } } : {};
    return Q.createElement(
      OD,
      { value: n },
      Q.createElement(
        te.ul,
        {
          ref: r,
          listStyleType: a,
          listStylePosition: i,
          role: "list",
          __css: { ...n.container, ...f },
          ...s,
        },
        u
      )
    );
  });
Wh.displayName = "List";
var VD = ne((e, t) => {
  const { as: r, ...n } = e;
  return A(Wh, {
    ref: t,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...n,
  });
});
VD.displayName = "OrderedList";
var jD = ne(function (t, r) {
  const { as: n, ...o } = t;
  return A(Wh, {
    ref: r,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...o,
  });
});
jD.displayName = "UnorderedList";
var WD = ne(function (t, r) {
  const n = Ix();
  return Q.createElement(te.li, { ref: r, ...t, __css: n.item });
});
WD.displayName = "ListItem";
var HD = ne(function (t, r) {
  const n = Ix();
  return A(Pa, { ref: r, role: "presentation", ...t, __css: n.icon });
});
HD.displayName = "ListIcon";
var UD = ne(function (t, r) {
  const {
      columns: n,
      spacingX: o,
      spacingY: a,
      spacing: i,
      minChildWidth: l,
      ...s
    } = t,
    u = Hb(),
    d = l ? KD(l, u) : YD(n);
  return A(Bx, {
    ref: r,
    gap: i,
    columnGap: o,
    rowGap: a,
    templateColumns: d,
    ...s,
  });
});
UD.displayName = "SimpleGrid";
function GD(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function KD(e, t) {
  return Vn(e, (r) => {
    const n = M4("sizes", r, GD(r))(t);
    return r === null ? null : `repeat(auto-fit, minmax(${n}, 1fr))`;
  });
}
function YD(e) {
  return Vn(e, (t) => (t === null ? null : `repeat(${t}, minmax(0, 1fr))`));
}
var XD = te("div", {
  baseStyle: { flex: 1, justifySelf: "stretch", alignSelf: "stretch" },
});
XD.displayName = "Spacer";
var lp = "& > *:not(style) ~ *:not(style)";
function QD(e) {
  const { spacing: t, direction: r } = e,
    n = {
      column: { marginTop: t, marginEnd: 0, marginBottom: 0, marginStart: 0 },
      row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: t },
      "column-reverse": {
        marginTop: 0,
        marginEnd: 0,
        marginBottom: t,
        marginStart: 0,
      },
      "row-reverse": {
        marginTop: 0,
        marginEnd: t,
        marginBottom: 0,
        marginStart: 0,
      },
    };
  return { flexDirection: r, [lp]: Vn(r, (o) => n[o]) };
}
function ZD(e) {
  const { spacing: t, direction: r } = e,
    n = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": Vn(r, (o) => n[o]) };
}
var $x = (e) =>
  Q.createElement(te.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
$x.displayName = "StackItem";
var Hh = ne((e, t) => {
  const {
      isInline: r,
      direction: n,
      align: o,
      justify: a,
      spacing: i = "0.5rem",
      wrap: l,
      children: s,
      divider: u,
      className: d,
      shouldWrapChildren: f,
      ...c
    } = e,
    h = r ? "row" : n != null ? n : "column",
    m = k.exports.useMemo(() => QD({ direction: h, spacing: i }), [h, i]),
    g = k.exports.useMemo(() => ZD({ spacing: i, direction: h }), [i, h]),
    S = !!u,
    p = !f && !S,
    v = k.exports.useMemo(() => {
      const x = _x(s);
      return p
        ? x
        : x.map((E, T) => {
            const _ = typeof E.key < "u" ? E.key : T,
              M = T + 1 === x.length,
              B = f ? A($x, { children: E }, _) : E;
            if (!S) return B;
            const K = k.exports.cloneElement(u, { __css: g }),
              ce = M ? null : K;
            return $t(k.exports.Fragment, { children: [B, ce] }, _);
          });
    }, [u, g, S, p, f, s]),
    b = Pt("chakra-stack", d);
  return Q.createElement(
    te.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: a,
      flexDirection: m.flexDirection,
      flexWrap: l,
      className: b,
      __css: S ? {} : { [lp]: m[lp] },
      ...c,
    },
    v
  );
});
Hh.displayName = "Stack";
var qD = ne((e, t) =>
  A(Hh, { align: "center", ...e, direction: "row", ref: t })
);
qD.displayName = "HStack";
var JD = ne((e, t) =>
  A(Hh, { align: "center", ...e, direction: "column", ref: t })
);
JD.displayName = "VStack";
var eB = ne(function (t, r) {
  const n = cr("Text", t),
    { className: o, align: a, decoration: i, casing: l, ...s } = Ot(t),
    u = Ax({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return Q.createElement(te.p, {
    ref: r,
    className: Pt("chakra-text", t.className),
    ...u,
    ...s,
    __css: n,
  });
});
eB.displayName = "Text";
function fg(e) {
  return typeof e == "number" ? `${e}px` : e;
}
var Nx = ne(function (t, r) {
  const {
      spacing: n = "0.5rem",
      spacingX: o,
      spacingY: a,
      children: i,
      justify: l,
      direction: s,
      align: u,
      className: d,
      shouldWrapChildren: f,
      ...c
    } = t,
    h = k.exports.useMemo(() => {
      const { spacingX: g = n, spacingY: S = n } = { spacingX: o, spacingY: a };
      return {
        "--chakra-wrap-x-spacing": (p) => Vn(g, (v) => fg(Tf("space", v)(p))),
        "--chakra-wrap-y-spacing": (p) => Vn(S, (v) => fg(Tf("space", v)(p))),
        "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
        "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: l,
        alignItems: u,
        flexDirection: s,
        listStyleType: "none",
        padding: "0",
        margin:
          "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
        "& > *:not(style)": {
          margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)",
        },
      };
    }, [n, o, a, l, u, s]),
    m = k.exports.useMemo(
      () =>
        f ? k.exports.Children.map(i, (g, S) => A(Uh, { children: g }, S)) : i,
      [i, f]
    );
  return Q.createElement(
    te.div,
    { ref: r, className: Pt("chakra-wrap", d), overflow: "hidden", ...c },
    Q.createElement(te.ul, { className: "chakra-wrap__list", __css: h }, m)
  );
});
Nx.displayName = "Wrap";
var Uh = ne(function (t, r) {
  const { className: n, ...o } = t;
  return Q.createElement(te.li, {
    ref: r,
    __css: { display: "flex", alignItems: "flex-start" },
    className: Pt("chakra-wrap__listitem", n),
    ...o,
  });
});
Uh.displayName = "WrapItem";
var tB = {
    body: { classList: { add() {}, remove() {} } },
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
  },
  Fx = tB,
  Ao = () => {},
  rB = {
    document: Fx,
    navigator: { userAgent: "" },
    CustomEvent: function () {
      return this;
    },
    addEventListener: Ao,
    removeEventListener: Ao,
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    matchMedia() {
      return { matches: !1, addListener: Ao, removeListener: Ao };
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
    setTimeout: () => 0,
    clearTimeout: Ao,
    setInterval: () => 0,
    clearInterval: Ao,
  },
  nB = rB,
  oB = { window: nB, document: Fx },
  Ox = typeof window < "u" ? { window, document } : oB,
  Vx = k.exports.createContext(Ox);
Vx.displayName = "EnvironmentContext";
function jx(e) {
  const { children: t, environment: r } = e,
    [n, o] = k.exports.useState(null),
    [a, i] = k.exports.useState(!1);
  k.exports.useEffect(() => i(!0), []);
  const l = k.exports.useMemo(() => {
    if (r) return r;
    const s = n == null ? void 0 : n.ownerDocument,
      u = n == null ? void 0 : n.ownerDocument.defaultView;
    return s ? { document: s, window: u } : Ox;
  }, [n, r]);
  return $t(Vx.Provider, {
    value: l,
    children: [
      t,
      !r &&
        a &&
        A("span", {
          id: "__chakra_env",
          hidden: !0,
          ref: (s) => {
            k.exports.startTransition(() => {
              s && o(s);
            });
          },
        }),
    ],
  });
}
jx.displayName = "EnvironmentProvider";
var [aB, iB] = _a({ strict: !1, name: "PortalManagerContext" });
function Wx(e) {
  const { children: t, zIndex: r } = e;
  return A(aB, { value: { zIndex: r }, children: t });
}
Wx.displayName = "PortalManager";
var [Hx, lB] = _a({ strict: !1, name: "PortalContext" }),
  Gh = "chakra-portal",
  sB = ".chakra-portal",
  uB = (e) =>
    A("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  cB = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = k.exports.useState(null),
      a = k.exports.useRef(null),
      [, i] = k.exports.useState({});
    k.exports.useEffect(() => i({}), []);
    const l = lB(),
      s = iB();
    eu(() => {
      if (!n) return;
      const d = n.ownerDocument,
        f = t && l != null ? l : d.body;
      if (!f) return;
      (a.current = d.createElement("div")),
        (a.current.className = Gh),
        f.appendChild(a.current),
        i({});
      const c = a.current;
      return () => {
        f.contains(c) && f.removeChild(c);
      };
    }, [n]);
    const u =
      s != null && s.zIndex
        ? A(uB, { zIndex: s == null ? void 0 : s.zIndex, children: r })
        : r;
    return a.current
      ? Su.exports.createPortal(
          A(Hx, { value: a.current, children: u }),
          a.current
        )
      : A("span", {
          ref: (d) => {
            d && o(d);
          },
        });
  },
  dB = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      a = o != null ? o : typeof window < "u" ? document.body : void 0,
      i = k.exports.useMemo(() => {
        const s = o == null ? void 0 : o.ownerDocument.createElement("div");
        return s && (s.className = Gh), s;
      }, [o]),
      [, l] = k.exports.useState({});
    return (
      eu(() => l({}), []),
      eu(() => {
        if (!(!i || !a))
          return (
            a.appendChild(i),
            () => {
              a.removeChild(i);
            }
          );
      }, [i, a]),
      a && i
        ? Su.exports.createPortal(
            A(Hx, { value: n ? i : null, children: t }),
            i
          )
        : null
    );
  };
function gl(e) {
  const { containerRef: t, ...r } = e;
  return t ? A(dB, { containerRef: t, ...r }) : A(cB, { ...r });
}
gl.defaultProps = { appendToParentPortal: !0 };
gl.className = Gh;
gl.selector = sB;
gl.displayName = "Portal";
function fB(e, t) {
  const r = H4(e);
  k.exports.useEffect(() => {
    if (t == null) return;
    let n = null;
    return (
      (n = window.setTimeout(() => {
        r();
      }, t)),
      () => {
        n && window.clearTimeout(n);
      }
    );
  }, [t, r]);
}
function pB(e, ...t) {
  return hB(e) ? e(...t) : e;
}
var hB = (e) => typeof e == "function",
  vB = (e, t) => e.find((r) => r.id === t);
function pg(e, t) {
  const r = Ux(e, t),
    n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return { position: r, index: n };
}
function Ux(e, t) {
  for (const [r, n] of Object.entries(e)) if (vB(n, t)) return r;
}
function mB(e) {
  const t = e.includes("right"),
    r = e.includes("left");
  let n = "center";
  return (
    t && (n = "flex-end"),
    r && (n = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: n }
  );
}
function gB(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0,
    n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    a = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    i = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: 5500,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: a,
    left: i,
  };
}
var yB = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  xi = bB(yB);
function bB(e) {
  let t = e;
  const r = new Set(),
    n = (o) => {
      (t = o(t)), r.forEach((a) => a());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      r.add(o),
      () => {
        n(() => e), r.delete(o);
      }
    ),
    removeToast: (o, a) => {
      n((i) => ({ ...i, [a]: i[a].filter((l) => l.id != o) }));
    },
    notify: (o, a) => {
      const i = SB(o, a),
        { position: l, id: s } = i;
      return (
        n((u) => {
          var c, h;
          const f = l.includes("top")
            ? [i, ...((c = u[l]) != null ? c : [])]
            : [...((h = u[l]) != null ? h : []), i];
          return { ...u, [l]: f };
        }),
        s
      );
    },
    update: (o, a) => {
      !o ||
        n((i) => {
          const l = { ...i },
            { position: s, index: u } = pg(l, o);
          return (
            s && u !== -1 && (l[s][u] = { ...l[s][u], ...a, message: wB(a) }), l
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      n((a) => {
        const i = [
          "bottom",
          "bottom-right",
          "bottom-left",
          "top",
          "top-left",
          "top-right",
        ];
        return (o != null ? o : i).reduce(
          (s, u) => ((s[u] = a[u].map((d) => ({ ...d, requestClose: !0 }))), s),
          { ...a }
        );
      });
    },
    close: (o) => {
      n((a) => {
        const i = Ux(a, o);
        return i
          ? {
              ...a,
              [i]: a[i].map((l) =>
                l.id == o ? { ...l, requestClose: !0 } : l
              ),
            }
          : a;
      });
    },
    isActive: (o) => Boolean(pg(xi.getState(), o).position),
  };
}
var hg = 0;
function SB(e, t = {}) {
  var o, a;
  hg += 1;
  const r = (o = t.id) != null ? o : hg,
    n = (a = t.position) != null ? a : "bottom";
  return {
    id: r,
    message: e,
    position: n,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => xi.removeToast(String(r), n),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var xB = (e) => {
  const {
      status: t,
      variant: r = "solid",
      id: n,
      title: o,
      isClosable: a,
      onClose: i,
      description: l,
      icon: s,
    } = e,
    u = n
      ? {
          root: `toast-${n}`,
          title: `toast-${n}-title`,
          description: `toast-${n}-description`,
        }
      : void 0;
  return Q.createElement(
    Cx,
    {
      addRole: !1,
      status: t,
      variant: r,
      id: u == null ? void 0 : u.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
    },
    A(Ex, { children: s }),
    Q.createElement(
      te.div,
      { flex: "1", maxWidth: "100%" },
      o && A(Tx, { id: u == null ? void 0 : u.title, children: o }),
      l &&
        A(kx, {
          id: u == null ? void 0 : u.description,
          display: "block",
          children: l,
        })
    ),
    a &&
      A(Px, {
        size: "sm",
        onClick: i,
        position: "absolute",
        insetEnd: 1,
        top: 1,
      })
  );
};
function wB(e = {}) {
  const { render: t, toastComponent: r = xB } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : A(r, { ...o, ...e });
}
var CB = {
    initial: (e) => {
      const { position: t } = e,
        r = ["top", "bottom"].includes(t) ? "y" : "x";
      let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (n = 1), { opacity: 0, [r]: n * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  Gx = k.exports.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: a = !1,
        position: i = "bottom",
        duration: l = 5e3,
        containerStyle: s,
        motionVariants: u = CB,
        toastSpacing: d = "0.5rem",
      } = e,
      [f, c] = k.exports.useState(l),
      h = X4();
    cg(() => {
      h || n == null || n();
    }, [h]),
      cg(() => {
        c(l);
      }, [l]);
    const m = () => c(null),
      g = () => c(l),
      S = () => {
        h && o();
      };
    k.exports.useEffect(() => {
      h && a && o();
    }, [h, a, o]),
      fB(S, f);
    const p = k.exports.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: d,
          ...s,
        }),
        [s, d]
      ),
      v = k.exports.useMemo(() => mB(i), [i]);
    return Q.createElement(
      oD.li,
      {
        layout: !0,
        className: "chakra-toast",
        variants: u,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        onHoverStart: m,
        onHoverEnd: g,
        custom: { position: i },
        style: v,
      },
      Q.createElement(
        te.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: p,
        },
        pB(r, { id: t, onClose: S })
      )
    );
  });
Gx.displayName = "ToastComponent";
var kB = (e) => {
    const t = k.exports.useSyncExternalStore(
        xi.subscribe,
        xi.getState,
        xi.getState
      ),
      { children: r, motionVariants: n, component: o = Gx, portalProps: a } = e,
      l = Object.keys(t).map((s) => {
        const u = t[s];
        return A(
          "ul",
          {
            role: "region",
            "aria-live": "polite",
            id: `chakra-toast-manager-${s}`,
            style: gB(s),
            children: A(cD, {
              initial: !1,
              children: u.map((d) => A(o, { motionVariants: n, ...d }, d.id)),
            }),
          },
          s
        );
      });
    return $t(ya, { children: [r, A(gl, { ...a, children: l })] });
  },
  EB = (e) => {
    const {
        children: t,
        colorModeManager: r,
        portalZIndex: n,
        resetCSS: o = !0,
        theme: a = {},
        environment: i,
        cssVarsRoot: l,
      } = e,
      s = A(jx, { environment: i, children: t });
    return A(L4, {
      theme: a,
      cssVarsRoot: l,
      children: $t(X1, {
        colorModeManager: r,
        options: a.config,
        children: [
          o ? A(_D, {}) : A(TD, {}),
          A(D4, {}),
          n ? A(Wx, { zIndex: n, children: s }) : s,
        ],
      }),
    });
  };
function TB({ children: e, theme: t = w4, toastOptions: r, ...n }) {
  return $t(EB, { theme: t, ...n, children: [e, A(kB, { ...r })] });
}
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ne() {
  return (
    (Ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ne.apply(this, arguments)
  );
}
var et;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(et || (et = {}));
const vg = "popstate";
function _B(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let { pathname: a, search: i, hash: l } = n.location;
    return ho(
      "",
      { pathname: a, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(n, o) {
    return typeof o == "string" ? o : ln(o);
  }
  return RB(t, r, null, e);
}
function PB() {
  return Math.random().toString(36).substr(2, 8);
}
function mg(e) {
  return { usr: e.state, key: e.key };
}
function ho(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Ne(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? un(t) : t,
      { state: r, key: (t && t.key) || n || PB() }
    )
  );
}
function ln(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function un(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function nl(e) {
  let t =
      typeof window < "u" &&
      typeof window.location < "u" &&
      window.location.origin !== "null"
        ? window.location.origin
        : "unknown://unknown",
    r = typeof e == "string" ? e : ln(e);
  return new URL(r, t);
}
function RB(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: o = document.defaultView, v5Compat: a = !1 } = n,
    i = o.history,
    l = et.Pop,
    s = null;
  function u() {
    (l = et.Pop), s && s({ action: l, location: c.location });
  }
  function d(h, m) {
    l = et.Push;
    let g = ho(c.location, h, m);
    r && r(g, h);
    let S = mg(g),
      p = c.createHref(g);
    try {
      i.pushState(S, "", p);
    } catch {
      o.location.assign(p);
    }
    a && s && s({ action: l, location: c.location });
  }
  function f(h, m) {
    l = et.Replace;
    let g = ho(c.location, h, m);
    r && r(g, h);
    let S = mg(g),
      p = c.createHref(g);
    i.replaceState(S, "", p), a && s && s({ action: l, location: c.location });
  }
  let c = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(h) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(vg, u),
        (s = h),
        () => {
          o.removeEventListener(vg, u), (s = null);
        }
      );
    },
    createHref(h) {
      return t(o, h);
    },
    encodeLocation(h) {
      let m = nl(ln(h));
      return Ne({}, h, {
        pathname: m.pathname,
        search: m.search,
        hash: m.hash,
      });
    },
    push: d,
    replace: f,
    go(h) {
      return i.go(h);
    },
  };
  return c;
}
var ct;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ct || (ct = {}));
function AB(e) {
  return e.index === !0;
}
function Kx(e, t, r) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = new Set()),
    e.map((n, o) => {
      let a = [...t, o],
        i = typeof n.id == "string" ? n.id : a.join("-");
      return (
        ae(
          n.index !== !0 || !n.children,
          "Cannot specify children on an index route"
        ),
        ae(
          !r.has(i),
          'Found a route id collision on id "' +
            i +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        r.add(i),
        AB(n)
          ? Ne({}, n, { id: i })
          : Ne({}, n, {
              id: i,
              children: n.children ? Kx(n.children, a, r) : void 0,
            })
      );
    })
  );
}
function ti(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? un(t) : t,
    o = Xx(n.pathname || "/", r);
  if (o == null) return null;
  let a = Yx(e);
  MB(a);
  let i = null;
  for (let l = 0; i == null && l < a.length; ++l) i = OB(a[l], WB(o));
  return i;
}
function Yx(e, t, r, n) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = ""),
    e.forEach((o, a) => {
      let i = {
        relativePath: o.path || "",
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: a,
        route: o,
      };
      i.relativePath.startsWith("/") &&
        (ae(
          i.relativePath.startsWith(n),
          'Absolute route path "' +
            i.relativePath +
            '" nested under path ' +
            ('"' + n + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (i.relativePath = i.relativePath.slice(n.length)));
      let l = In([n, i.relativePath]),
        s = r.concat(i);
      o.children &&
        o.children.length > 0 &&
        (ae(
          o.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + l + '".')
        ),
        Yx(o.children, t, s, l)),
        !(o.path == null && !o.index) &&
          t.push({ path: l, score: NB(l, o.index), routesMeta: s });
    }),
    t
  );
}
function MB(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : FB(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const LB = /^:\w+$/,
  zB = 3,
  DB = 2,
  BB = 1,
  IB = 10,
  $B = -2,
  gg = (e) => e === "*";
function NB(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(gg) && (n += $B),
    t && (n += DB),
    r
      .filter((o) => !gg(o))
      .reduce((o, a) => o + (LB.test(a) ? zB : a === "" ? BB : IB), n)
  );
}
function FB(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function OB(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = "/",
    a = [];
  for (let i = 0; i < r.length; ++i) {
    let l = r[i],
      s = i === r.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = VB(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!d) return null;
    Object.assign(n, d.params);
    let f = l.route;
    a.push({
      params: n,
      pathname: In([o, d.pathname]),
      pathnameBase: KB(In([o, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (o = In([o, d.pathnameBase]));
  }
  return a;
}
function VB(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = jB(e.path, e.caseSensitive, e.end),
    o = t.match(r);
  if (!o) return null;
  let a = o[0],
    i = a.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: n.reduce((u, d, f) => {
      if (d === "*") {
        let c = l[f] || "";
        i = a.slice(0, a.length - c.length).replace(/(.)\/+$/, "$1");
      }
      return (u[d] = HB(l[f] || "", d)), u;
    }, {}),
    pathname: a,
    pathnameBase: i,
    pattern: e,
  };
}
function jB(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Kh(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (i, l) => (n.push(l), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), n]
  );
}
function WB(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Kh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function HB(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      Kh(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ").")
      ),
      e
    );
  }
}
function Xx(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Kh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function UB(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = "",
  } = typeof e == "string" ? un(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : GB(r, t)) : t,
    search: YB(n),
    hash: XB(o),
  };
}
function GB(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function kd(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Yh(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Qx(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string"
    ? (o = un(e))
    : ((o = Ne({}, e)),
      ae(
        !o.pathname || !o.pathname.includes("?"),
        kd("?", "pathname", "search", o)
      ),
      ae(
        !o.pathname || !o.pathname.includes("#"),
        kd("#", "pathname", "hash", o)
      ),
      ae(!o.search || !o.search.includes("#"), kd("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "",
    i = a ? "/" : o.pathname,
    l;
  if (n || i == null) l = r;
  else {
    let f = t.length - 1;
    if (i.startsWith("..")) {
      let c = i.split("/");
      for (; c[0] === ".."; ) c.shift(), (f -= 1);
      o.pathname = c.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let s = UB(o, l),
    u = i && i !== "/" && i.endsWith("/"),
    d = (a || i === ".") && r.endsWith("/");
  return !s.pathname.endsWith("/") && (u || d) && (s.pathname += "/"), s;
}
const In = (e) => e.join("/").replace(/\/\/+/g, "/"),
  KB = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  YB = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  XB = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class yg extends Error {}
class QB {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      ae(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let r;
    (this.abortPromise = new Promise((o, a) => (r = a))),
      (this.controller = new AbortController());
    let n = () => r(new yg("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", n)),
      this.controller.signal.addEventListener("abort", n),
      (this.data = Object.entries(t).reduce((o, a) => {
        let [i, l] = a;
        return Object.assign(o, { [i]: this.trackPromise(i, l) });
      }, {}));
  }
  trackPromise(t, r) {
    if (!(r instanceof Promise)) return r;
    this.pendingKeys.add(t);
    let n = Promise.race([r, this.abortPromise]).then(
      (o) => this.onSettle(n, t, null, o),
      (o) => this.onSettle(n, t, o)
    );
    return (
      n.catch(() => {}),
      Object.defineProperty(n, "_tracked", { get: () => !0 }),
      n
    );
  }
  onSettle(t, r, n, o) {
    if (this.controller.signal.aborted && n instanceof yg)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => n }),
        Promise.reject(n)
      );
    this.pendingKeys.delete(r), this.done && this.unlistenAbortSignal();
    const a = this.subscriber;
    return n
      ? (Object.defineProperty(t, "_error", { get: () => n }),
        a && a(!1),
        Promise.reject(n))
      : (Object.defineProperty(t, "_data", { get: () => o }), a && a(!1), o);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((r, n) => this.pendingKeys.delete(n));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let r = !1;
    if (!this.done) {
      let n = () => this.cancel();
      t.addEventListener("abort", n),
        (r = await new Promise((o) => {
          this.subscribe((a) => {
            t.removeEventListener("abort", n), (a || this.done) && o(a);
          });
        }));
    }
    return r;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      ae(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, r) => {
        let [n, o] = r;
        return Object.assign(t, { [n]: qB(o) });
      }, {})
    );
  }
}
function ZB(e) {
  return e instanceof Promise && e._tracked === !0;
}
function qB(e) {
  if (!ZB(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class Aa {
  constructor(t, r, n) {
    (this.status = t), (this.statusText = r || ""), (this.data = n);
  }
}
function Zx(e) {
  return e instanceof Aa;
}
const Ed = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  JB = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  e8 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  t8 = !e8;
function r8(e) {
  ae(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = Kx(e.routes),
    r = null,
    n = new Set(),
    o = null,
    a = null,
    i = null,
    l = !1,
    s = ti(t, e.history.location, e.basename),
    u = null;
  if (s == null) {
    let { matches: R, route: L, error: $ } = Cg(t);
    (s = R), (u = { [L.id]: $ });
  }
  let d = !s.some((R) => R.route.loader) || e.hydrationData != null,
    f,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: s,
      initialized: d,
      navigation: Ed,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || u,
      fetchers: new Map(),
    },
    h = et.Pop,
    m = !1,
    g,
    S = !1,
    p = !1,
    v = [],
    b = [],
    x = new Map(),
    E = 0,
    T = -1,
    _ = new Map(),
    M = new Set(),
    I = new Map(),
    B = new Map();
  function K() {
    return (
      (r = e.history.listen((R) => {
        let { action: L, location: $ } = R;
        return F(L, $);
      })),
      c.initialized || F(et.Pop, c.location),
      f
    );
  }
  function ce() {
    r && r(), n.clear(), g && g.abort(), c.fetchers.forEach((R, L) => Vr(L));
  }
  function xe(R) {
    return n.add(R), () => n.delete(R);
  }
  function ee(R) {
    (c = Ne({}, c, R)), n.forEach((L) => L(c));
  }
  function We(R, L) {
    var $;
    let U =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        c.navigation.state === "loading" &&
        (($ = c.navigation.formAction) == null ? void 0 : $.split("?")[0]) ===
          R.pathname,
      X = L.loaderData
        ? { loaderData: _d(c.loaderData, L.loaderData, L.matches || []) }
        : {};
    ee(
      Ne({}, U ? {} : { actionData: null }, L, X, {
        historyAction: h,
        location: R,
        initialized: !0,
        navigation: Ed,
        revalidation: "idle",
        restoreScrollPosition: c.navigation.formData
          ? !1
          : fe(R, L.matches || c.matches),
        preventScrollReset: m,
      })
    ),
      S ||
        h === et.Pop ||
        (h === et.Push
          ? e.history.push(R, R.state)
          : h === et.Replace && e.history.replace(R, R.state)),
      (h = et.Pop),
      (m = !1),
      (S = !1),
      (p = !1),
      (v = []),
      (b = []);
  }
  async function oe(R, L) {
    if (typeof R == "number") {
      e.history.go(R);
      return;
    }
    let { path: $, submission: U, error: X } = bg(R, L),
      Z = ho(c.location, $, L && L.state);
    Z = e.history.encodeLocation(Z);
    let se = (L && L.replace) === !0 || U != null ? et.Replace : et.Push,
      ye =
        L && "preventScrollReset" in L ? L.preventScrollReset === !0 : void 0;
    return await F(se, Z, {
      submission: U,
      pendingError: X,
      preventScrollReset: ye,
      replace: L && L.replace,
    });
  }
  function Ge() {
    if (
      (Vt(),
      ee({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        F(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      F(h || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function F(R, L, $) {
    g && g.abort(),
      (g = null),
      (h = R),
      (S = ($ && $.startUninterruptedRevalidation) === !0),
      O(c.location, c.matches),
      (m = ($ && $.preventScrollReset) === !0);
    let U = $ && $.overrideNavigation,
      X = ti(t, L, e.basename);
    if (!X) {
      let { matches: Ze, route: jr, error: tr } = Cg(t);
      W(), We(L, { matches: Ze, loaderData: {}, errors: { [jr.id]: tr } });
      return;
    }
    if (s8(c.location, L)) {
      We(L, { matches: X });
      return;
    }
    g = new AbortController();
    let Z = Ya(L, g.signal, $ && $.submission),
      se,
      ye;
    if ($ && $.pendingError) ye = { [Ko(X).route.id]: $.pendingError };
    else if ($ && $.submission) {
      let Ze = await Y(Z, L, $.submission, X, { replace: $.replace });
      if (Ze.shortCircuited) return;
      (se = Ze.pendingActionData),
        (ye = Ze.pendingActionError),
        (U = Ne({ state: "loading", location: L }, $.submission));
    }
    let {
      shortCircuited: Ee,
      loaderData: Te,
      errors: we,
    } = await H(Z, L, X, U, $ && $.submission, $ && $.replace, se, ye);
    Ee || ((g = null), We(L, { matches: X, loaderData: Te, errors: we }));
  }
  async function Y(R, L, $, U, X) {
    Vt();
    let Z = Ne({ state: "submitting", location: L }, $);
    ee({ navigation: Z });
    let se,
      ye = Pg(U, L);
    if (!ye.route.action) se = kg(L);
    else if (
      ((se = await Ka("action", R, ye, U, f.basename)), R.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (ca(se)) {
      let Ee = Ne(
        { state: "loading", location: ho(c.location, se.location) },
        $
      );
      return await Rt(se, Ee, X && X.replace), { shortCircuited: !0 };
    }
    if (wi(se)) {
      let Ee = Ko(U, ye.route.id);
      return (
        (X && X.replace) !== !0 && (h = et.Push),
        { pendingActionError: { [Ee.route.id]: se.error } }
      );
    }
    if (ao(se)) throw new Error("defer() is not supported in actions");
    return { pendingActionData: { [ye.route.id]: se.data } };
  }
  async function H(R, L, $, U, X, Z, se, ye) {
    let Ee = U;
    Ee ||
      (Ee = {
        state: "loading",
        location: L,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [Te, we] = Sg(c, $, X, L, p, v, b, se, ye, I);
    if (
      (W(
        (De) =>
          !($ && $.some((qe) => qe.route.id === De)) ||
          (Te && Te.some((qe) => qe.route.id === De))
      ),
      Te.length === 0 && we.length === 0)
    )
      return (
        We(L, {
          matches: $,
          loaderData: _d(c.loaderData, {}, $),
          errors: ye || null,
          actionData: se || null,
        }),
        { shortCircuited: !0 }
      );
    S ||
      (we.forEach((De) => {
        let [qe] = De,
          pn = c.fetchers.get(qe),
          hn = {
            state: "loading",
            data: pn && pn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        c.fetchers.set(qe, hn);
      }),
      ee(
        Ne(
          { navigation: Ee, actionData: se || c.actionData || null },
          we.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      )),
      (T = ++E),
      we.forEach((De) => {
        let [qe] = De;
        return x.set(qe, g);
      });
    let {
      results: Ze,
      loaderResults: jr,
      fetcherResults: tr,
    } = await ot(c.matches, $, Te, we, R);
    if (R.signal.aborted) return { shortCircuited: !0 };
    we.forEach((De) => {
      let [qe] = De;
      return x.delete(qe);
    });
    let Tr = Eg(Ze);
    if (Tr) {
      let De = Td(c, Tr);
      return await Rt(Tr, De, Z), { shortCircuited: !0 };
    }
    let { loaderData: Co, errors: ko } = wg(c, $, Te, jr, ye, we, tr, B);
    B.forEach((De, qe) => {
      De.subscribe((pn) => {
        (pn || De.done) && B.delete(qe);
      });
    }),
      Un();
    let fn = dn(T);
    return Ne(
      { loaderData: Co, errors: ko },
      fn || we.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function J(R) {
    return c.fetchers.get(R) || JB;
  }
  function de(R, L, $, U) {
    if (t8)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    x.has(R) && er(R);
    let X = ti(t, $, e.basename);
    if (!X) {
      dr(R, L, new Aa(404, "Not Found", null));
      return;
    }
    let { path: Z, submission: se } = bg($, U, !0),
      ye = Pg(X, Z);
    if (se) {
      re(R, L, Z, ye, X, se);
      return;
    }
    I.set(R, [Z, ye, X]), Ye(R, L, Z, ye, X);
  }
  async function re(R, L, $, U, X, Z) {
    if ((Vt(), I.delete(R), !U.route.action)) {
      let { error: Je } = kg($);
      dr(R, L, Je);
      return;
    }
    let se = c.fetchers.get(R),
      ye = Ne({ state: "submitting" }, Z, { data: se && se.data });
    c.fetchers.set(R, ye), ee({ fetchers: new Map(c.fetchers) });
    let Ee = new AbortController(),
      Te = Ya($, Ee.signal, Z);
    x.set(R, Ee);
    let we = await Ka("action", Te, U, X, f.basename);
    if (Te.signal.aborted) {
      x.get(R) === Ee && x.delete(R);
      return;
    }
    if (ca(we)) {
      x.delete(R), M.add(R);
      let Je = Ne({ state: "loading" }, Z, { data: void 0 });
      c.fetchers.set(R, Je), ee({ fetchers: new Map(c.fetchers) });
      let fr = Ne(
        { state: "loading", location: ho(c.location, we.location) },
        Z
      );
      await Rt(we, fr);
      return;
    }
    if (wi(we)) {
      dr(R, L, we.error);
      return;
    }
    ao(we) && ae(!1, "defer() is not supported in actions");
    let Ze = c.navigation.location || c.location,
      jr = Ya(Ze, Ee.signal),
      tr =
        c.navigation.state !== "idle"
          ? ti(t, c.navigation.location, e.basename)
          : c.matches;
    ae(tr, "Didn't find any matches after fetcher action");
    let Tr = ++E;
    _.set(R, Tr);
    let Co = Ne({ state: "loading", data: we.data }, Z);
    c.fetchers.set(R, Co);
    let [ko, fn] = Sg(
      c,
      tr,
      Z,
      Ze,
      p,
      v,
      b,
      { [U.route.id]: we.data },
      void 0,
      I
    );
    fn
      .filter((Je) => {
        let [fr] = Je;
        return fr !== R;
      })
      .forEach((Je) => {
        let [fr] = Je,
          bl = c.fetchers.get(fr),
          vc = {
            state: "loading",
            data: bl && bl.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        c.fetchers.set(fr, vc), x.set(fr, Ee);
      }),
      ee({ fetchers: new Map(c.fetchers) });
    let {
      results: De,
      loaderResults: qe,
      fetcherResults: pn,
    } = await ot(c.matches, tr, ko, fn, jr);
    if (Ee.signal.aborted) return;
    _.delete(R),
      x.delete(R),
      fn.forEach((Je) => {
        let [fr] = Je;
        return x.delete(fr);
      });
    let hn = Eg(De);
    if (hn) {
      let Je = Td(c, hn);
      await Rt(hn, Je);
      return;
    }
    let { loaderData: yl, errors: La } = wg(
        c,
        c.matches,
        ko,
        qe,
        void 0,
        fn,
        pn,
        B
      ),
      Gn = {
        state: "idle",
        data: we.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    c.fetchers.set(R, Gn);
    let hc = dn(Tr);
    c.navigation.state === "loading" && Tr > T
      ? (ae(h, "Expected pending action"),
        g && g.abort(),
        We(c.navigation.location, {
          matches: tr,
          loaderData: yl,
          errors: La,
          fetchers: new Map(c.fetchers),
        }))
      : (ee(
          Ne(
            { errors: La, loaderData: _d(c.loaderData, yl, tr) },
            hc ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        (p = !1));
  }
  async function Ye(R, L, $, U, X) {
    let Z = c.fetchers.get(R),
      se = {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: Z && Z.data,
      };
    c.fetchers.set(R, se), ee({ fetchers: new Map(c.fetchers) });
    let ye = new AbortController(),
      Ee = Ya($, ye.signal);
    x.set(R, ye);
    let Te = await Ka("loader", Ee, U, X, f.basename);
    if (
      (ao(Te) && (Te = (await tw(Te, Ee.signal, !0)) || Te),
      x.get(R) === ye && x.delete(R),
      Ee.signal.aborted)
    )
      return;
    if (ca(Te)) {
      let Ze = Td(c, Te);
      await Rt(Te, Ze);
      return;
    }
    if (wi(Te)) {
      let Ze = Ko(c.matches, L);
      c.fetchers.delete(R),
        ee({
          fetchers: new Map(c.fetchers),
          errors: { [Ze.route.id]: Te.error },
        });
      return;
    }
    ae(!ao(Te), "Unhandled fetcher deferred data");
    let we = {
      state: "idle",
      data: Te.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    c.fetchers.set(R, we), ee({ fetchers: new Map(c.fetchers) });
  }
  async function Rt(R, L, $) {
    R.revalidate && (p = !0),
      ae(L.location, "Expected a location on the redirect navigation"),
      (g = null);
    let U = $ === !0 ? et.Replace : et.Push;
    await F(U, L.location, { overrideNavigation: L });
  }
  async function ot(R, L, $, U, X) {
    let Z = await Promise.all([
        ...$.map((Ee) => Ka("loader", X, Ee, L, f.basename)),
        ...U.map((Ee) => {
          let [, Te, we, Ze] = Ee;
          return Ka("loader", Ya(Te, X.signal), we, Ze, f.basename);
        }),
      ]),
      se = Z.slice(0, $.length),
      ye = Z.slice($.length);
    return (
      await Promise.all([
        Tg(R, $, se, X.signal, !1, c.loaderData),
        Tg(
          R,
          U.map((Ee) => {
            let [, , Te] = Ee;
            return Te;
          }),
          ye,
          X.signal,
          !0
        ),
      ]),
      { results: Z, loaderResults: se, fetcherResults: ye }
    );
  }
  function Vt() {
    (p = !0),
      v.push(...W()),
      I.forEach((R, L) => {
        x.has(L) && (b.push(L), er(L));
      });
  }
  function dr(R, L, $) {
    let U = Ko(c.matches, L);
    Vr(R), ee({ errors: { [U.route.id]: $ }, fetchers: new Map(c.fetchers) });
  }
  function Vr(R) {
    x.has(R) && er(R),
      I.delete(R),
      _.delete(R),
      M.delete(R),
      c.fetchers.delete(R);
  }
  function er(R) {
    let L = x.get(R);
    ae(L, "Expected fetch controller: " + R), L.abort(), x.delete(R);
  }
  function cn(R) {
    for (let L of R) {
      let U = {
        state: "idle",
        data: J(L).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
      c.fetchers.set(L, U);
    }
  }
  function Un() {
    let R = [];
    for (let L of M) {
      let $ = c.fetchers.get(L);
      ae($, "Expected fetcher: " + L),
        $.state === "loading" && (M.delete(L), R.push(L));
    }
    cn(R);
  }
  function dn(R) {
    let L = [];
    for (let [$, U] of _)
      if (U < R) {
        let X = c.fetchers.get($);
        ae(X, "Expected fetcher: " + $),
          X.state === "loading" && (er($), _.delete($), L.push($));
      }
    return cn(L), L.length > 0;
  }
  function W(R) {
    let L = [];
    return (
      B.forEach(($, U) => {
        (!R || R(U)) && ($.cancel(), L.push(U), B.delete(U));
      }),
      L
    );
  }
  function D(R, L, $) {
    if (
      ((o = R), (i = L), (a = $ || ((U) => U.key)), !l && c.navigation === Ed)
    ) {
      l = !0;
      let U = fe(c.location, c.matches);
      U != null && ee({ restoreScrollPosition: U });
    }
    return () => {
      (o = null), (i = null), (a = null);
    };
  }
  function O(R, L) {
    if (o && a && i) {
      let $ = L.map((X) => _g(X, c.loaderData)),
        U = a(R, $) || R.key;
      o[U] = i();
    }
  }
  function fe(R, L) {
    if (o && a && i) {
      let $ = L.map((Z) => _g(Z, c.loaderData)),
        U = a(R, $) || R.key,
        X = o[U];
      if (typeof X == "number") return X;
    }
    return null;
  }
  return (
    (f = {
      get basename() {
        return e.basename;
      },
      get state() {
        return c;
      },
      get routes() {
        return t;
      },
      initialize: K,
      subscribe: xe,
      enableScrollRestoration: D,
      navigate: oe,
      fetch: de,
      revalidate: Ge,
      createHref: (R) => e.history.createHref(R),
      getFetcher: J,
      deleteFetcher: Vr,
      dispose: ce,
      _internalFetchControllers: x,
      _internalActiveDeferreds: B,
    }),
    f
  );
}
const n8 = new Set(["POST", "PUT", "PATCH", "DELETE"]);
[...n8];
function bg(e, t, r) {
  r === void 0 && (r = !1);
  let n = typeof e == "string" ? e : ln(e);
  if (!t || (!("formMethod" in t) && !("formData" in t))) return { path: n };
  if (t.formMethod != null && t.formMethod !== "get")
    return {
      path: n,
      submission: {
        formMethod: t.formMethod,
        formAction: ew(n),
        formEncType:
          (t && t.formEncType) || "application/x-www-form-urlencoded",
        formData: t.formData,
      },
    };
  if (!t.formData) return { path: n };
  let o = un(n);
  try {
    let a = Jx(t.formData);
    r && o.search && rw(o.search) && a.append("index", ""),
      (o.search = "?" + a);
  } catch {
    return {
      path: n,
      error: new Aa(
        400,
        "Bad Request",
        "Cannot submit binary form data using GET"
      ),
    };
  }
  return { path: ln(o) };
}
function Td(e, t) {
  let {
    formMethod: r,
    formAction: n,
    formEncType: o,
    formData: a,
  } = e.navigation;
  return {
    state: "loading",
    location: ho(e.location, t.location),
    formMethod: r || void 0,
    formAction: n || void 0,
    formEncType: o || void 0,
    formData: a || void 0,
  };
}
function o8(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((o) => o.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Sg(e, t, r, n, o, a, i, l, s, u) {
  let d = s ? Object.values(s)[0] : l ? Object.values(l)[0] : null,
    f = s ? Object.keys(s)[0] : void 0,
    h = o8(t, f).filter(
      (g, S) =>
        g.route.loader != null &&
        (a8(e.loaderData, e.matches[S], g) ||
          a.some((p) => p === g.route.id) ||
          xg(e.location, e.matches[S], r, n, g, o, d))
    ),
    m = [];
  return (
    u &&
      u.forEach((g, S) => {
        let [p, v, b] = g;
        i.includes(S)
          ? m.push([S, p, v, b])
          : o && xg(p, v, r, p, v, o, d) && m.push([S, p, v, b]);
      }),
    [h, m]
  );
}
function a8(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0;
  return n || o;
}
function qx(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function xg(e, t, r, n, o, a, i) {
  let l = nl(e),
    s = t.params,
    u = nl(n),
    d = o.params,
    f = qx(t, o) || l.toString() === u.toString() || l.search !== u.search || a;
  if (o.route.shouldRevalidate) {
    let c = o.route.shouldRevalidate(
      Ne({ currentUrl: l, currentParams: s, nextUrl: u, nextParams: d }, r, {
        actionResult: i,
        defaultShouldRevalidate: f,
      })
    );
    if (typeof c == "boolean") return c;
  }
  return f;
}
async function Ka(e, t, r, n, o, a, i) {
  a === void 0 && (a = !1), i === void 0 && (i = !1);
  let l,
    s,
    u,
    d = new Promise((c, h) => (u = h)),
    f = () => u();
  t.signal.addEventListener("abort", f);
  try {
    let c = r.route[e];
    ae(
      c,
      "Could not find the " + e + ' to run on the "' + r.route.id + '" route'
    ),
      (s = await Promise.race([c({ request: t, params: r.params }), d]));
  } catch (c) {
    (l = ct.error), (s = c);
  } finally {
    t.signal.removeEventListener("abort", f);
  }
  if (s instanceof Response) {
    let c = s.status;
    if (c >= 300 && c <= 399) {
      let g = s.headers.get("Location");
      ae(
        g,
        "Redirects returned/thrown from loaders/actions must have a Location header"
      );
      let S = n.slice(0, n.indexOf(r) + 1),
        p = Yh(S).map((x) => x.pathnameBase),
        v = nl(t.url).pathname,
        b = Qx(g, p, v);
      if (
        (ae(
          ln(b),
          "Unable to resolve redirect location: " + s.headers.get("Location")
        ),
        o)
      ) {
        let x = b.pathname;
        b.pathname = x === "/" ? o : In([o, x]);
      }
      if (((g = ln(b)), a)) throw (s.headers.set("Location", g), s);
      return {
        type: ct.redirect,
        status: c,
        location: g,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (i) throw { type: l || ct.data, response: s };
    let h,
      m = s.headers.get("Content-Type");
    return (
      m && m.startsWith("application/json")
        ? (h = await s.json())
        : (h = await s.text()),
      l === ct.error
        ? { type: l, error: new Aa(c, s.statusText, h), headers: s.headers }
        : { type: ct.data, data: h, statusCode: s.status, headers: s.headers }
    );
  }
  return l === ct.error
    ? { type: l, error: s }
    : s instanceof QB
    ? { type: ct.deferred, deferredData: s }
    : { type: ct.data, data: s };
}
function Ya(e, t, r) {
  let n = nl(ew(e)).toString(),
    o = { signal: t };
  if (r) {
    let { formMethod: a, formEncType: i, formData: l } = r;
    (o.method = a.toUpperCase()),
      (o.body = i === "application/x-www-form-urlencoded" ? Jx(l) : l);
  }
  return new Request(n, o);
}
function Jx(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    ae(
      typeof n == "string",
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(r, n);
  return t;
}
function i8(e, t, r, n, o) {
  let a = {},
    i = null,
    l,
    s = !1,
    u = {};
  return (
    r.forEach((d, f) => {
      let c = t[f].route.id;
      if (
        (ae(!ca(d), "Cannot handle redirect results in processLoaderData"),
        wi(d))
      ) {
        let h = Ko(e, c),
          m = d.error;
        n && ((m = Object.values(n)[0]), (n = void 0)),
          (i = Object.assign(i || {}, { [h.route.id]: m })),
          s || ((s = !0), (l = Zx(d.error) ? d.error.status : 500)),
          d.headers && (u[c] = d.headers);
      } else
        ao(d)
          ? (o && o.set(c, d.deferredData), (a[c] = d.deferredData.data))
          : ((a[c] = d.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !s &&
              (l = d.statusCode),
            d.headers && (u[c] = d.headers));
    }),
    n && (i = n),
    { loaderData: a, errors: i, statusCode: l || 200, loaderHeaders: u }
  );
}
function wg(e, t, r, n, o, a, i, l) {
  let { loaderData: s, errors: u } = i8(t, r, n, o, l);
  for (let d = 0; d < a.length; d++) {
    let [f, , c] = a[d];
    ae(
      i !== void 0 && i[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let h = i[d];
    if (wi(h)) {
      let m = Ko(e.matches, c.route.id);
      (u && u[m.route.id]) || (u = Ne({}, u, { [m.route.id]: h.error })),
        e.fetchers.delete(f);
    } else {
      if (ca(h)) throw new Error("Unhandled fetcher revalidation redirect");
      if (ao(h)) throw new Error("Unhandled fetcher deferred data");
      {
        let m = {
          state: "idle",
          data: h.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(f, m);
      }
    }
  }
  return { loaderData: s, errors: u };
}
function _d(e, t, r) {
  let n = Ne({}, t);
  return (
    r.forEach((o) => {
      let a = o.route.id;
      t[a] === void 0 && e[a] !== void 0 && (n[a] = e[a]);
    }),
    n
  );
}
function Ko(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function l8(e, t, r) {
  let n = e.find((o) => o.index || !o.path || o.path === "/") || {
    id: "__shim-" + t + "-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: n }],
    route: n,
    error: new Aa(t, r, null),
  };
}
function Cg(e) {
  return l8(e, 404, "Not Found");
}
function kg(e) {
  let t = typeof e == "string" ? e : ln(e);
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ("[" + t + "]")
    ),
    { type: ct.error, error: new Aa(405, "Method Not Allowed", "") }
  );
}
function Eg(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (ca(r)) return r;
  }
}
function ew(e) {
  let t = typeof e == "string" ? un(e) : e;
  return ln(Ne({}, t, { hash: "" }));
}
function s8(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function ao(e) {
  return e.type === ct.deferred;
}
function wi(e) {
  return e.type === ct.error;
}
function ca(e) {
  return (e && e.type) === ct.redirect;
}
async function Tg(e, t, r, n, o, a) {
  for (let i = 0; i < r.length; i++) {
    let l = r[i],
      s = t[i],
      u = e.find((f) => f.route.id === s.route.id),
      d = u != null && !qx(u, s) && (a && a[s.route.id]) !== void 0;
    ao(l) &&
      (o || d) &&
      (await tw(l, n, o).then((f) => {
        f && (r[i] = f || r[i]);
      }));
  }
}
async function tw(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: ct.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: ct.error, error: o };
      }
    return { type: ct.data, data: e.deferredData.data };
  }
}
function rw(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function _g(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function Pg(e, t) {
  let r = typeof t == "string" ? un(t).search : t.search;
  if (e[e.length - 1].route.index && rw(r || "")) return e[e.length - 1];
  let n = Yh(e);
  return n[n.length - 1];
}
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bu() {
  return (
    (bu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    bu.apply(this, arguments)
  );
}
function u8(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const c8 = typeof Object.is == "function" ? Object.is : u8,
  { useState: d8, useEffect: f8, useLayoutEffect: p8, useDebugValue: h8 } = Ad;
function v8(e, t, r) {
  const n = t(),
    [{ inst: o }, a] = d8({ inst: { value: n, getSnapshot: t } });
  return (
    p8(() => {
      (o.value = n), (o.getSnapshot = t), Pd(o) && a({ inst: o });
    }, [e, n, t]),
    f8(
      () => (
        Pd(o) && a({ inst: o }),
        e(() => {
          Pd(o) && a({ inst: o });
        })
      ),
      [e]
    ),
    h8(n),
    n
  );
}
function Pd(e) {
  const t = e.getSnapshot,
    r = e.value;
  try {
    const n = t();
    return !c8(r, n);
  } catch {
    return !0;
  }
}
function m8(e, t, r) {
  return t();
}
const g8 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  y8 = !g8,
  b8 = y8 ? m8 : v8,
  S8 = "useSyncExternalStore" in Ad ? ((e) => e.useSyncExternalStore)(Ad) : b8,
  x8 = k.exports.createContext(null),
  nw = k.exports.createContext(null),
  Xh = k.exports.createContext(null),
  ow = k.exports.createContext(null),
  fc = k.exports.createContext(null),
  Ma = k.exports.createContext({ outlet: null, matches: [] }),
  aw = k.exports.createContext(null);
function pc() {
  return k.exports.useContext(fc) != null;
}
function iw() {
  return pc() || ae(!1), k.exports.useContext(fc).location;
}
function w8() {
  pc() || ae(!1);
  let { basename: e, navigator: t } = k.exports.useContext(ow),
    { matches: r } = k.exports.useContext(Ma),
    { pathname: n } = iw(),
    o = JSON.stringify(Yh(r).map((l) => l.pathnameBase)),
    a = k.exports.useRef(!1);
  return (
    k.exports.useEffect(() => {
      a.current = !0;
    }),
    k.exports.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !a.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = Qx(l, JSON.parse(o), n, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : In([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, o, n]
    )
  );
}
const C8 = k.exports.createContext(null);
function k8(e) {
  let t = k.exports.useContext(Ma).outlet;
  return t && A(C8.Provider, { value: e, children: t });
}
function E8() {
  let { matches: e } = k.exports.useContext(Ma),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function T8(e, t) {
  pc() || ae(!1);
  let r = k.exports.useContext(Xh),
    { matches: n } = k.exports.useContext(Ma),
    o = n[n.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let i = o ? o.pathnameBase : "/";
  o && o.route;
  let l = iw(),
    s;
  if (t) {
    var u;
    let m = typeof t == "string" ? un(t) : t;
    i === "/" ||
      ((u = m.pathname) == null ? void 0 : u.startsWith(i)) ||
      ae(!1),
      (s = m);
  } else s = l;
  let d = s.pathname || "/",
    f = i === "/" ? d : d.slice(i.length) || "/",
    c = ti(e, { pathname: f }),
    h = A8(
      c &&
        c.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, a, m.params),
            pathname: In([i, m.pathname]),
            pathnameBase: m.pathnameBase === "/" ? i : In([i, m.pathnameBase]),
          })
        ),
      n,
      r || void 0
    );
  return t && h
    ? A(fc.Provider, {
        value: {
          location: bu(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            s
          ),
          navigationType: et.Pop,
        },
        children: h,
      })
    : h;
}
function _8() {
  let e = lw(),
    t = Zx(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: n },
    a = { padding: "2px 4px", backgroundColor: n };
  return $t(ya, {
    children: [
      A("h2", { children: "Unhandled Thrown Error!" }),
      A("h3", { style: { fontStyle: "italic" }, children: t }),
      r ? A("pre", { style: o, children: r }) : null,
      A("p", { children: "\u{1F4BF} Hey developer \u{1F44B}" }),
      $t("p", {
        children: [
          "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
          A("code", { style: a, children: "errorElement" }),
          " props on\xA0",
          A("code", { style: a, children: "<Route>" }),
        ],
      }),
    ],
  });
}
class P8 extends k.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error
      ? A(aw.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function R8(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = k.exports.useContext(x8);
  return (
    o && r.route.errorElement && (o._deepestRenderedBoundaryId = r.route.id),
    A(Ma.Provider, { value: t, children: n })
  );
}
function A8(e, t, r) {
  if ((t === void 0 && (t = []), e == null))
    if (r != null && r.errors) e = r.matches;
    else return null;
  let n = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let a = n.findIndex(
      (i) => i.route.id && (o == null ? void 0 : o[i.route.id])
    );
    a >= 0 || ae(!1), (n = n.slice(0, Math.min(n.length, a + 1)));
  }
  return n.reduceRight((a, i, l) => {
    let s = i.route.id ? (o == null ? void 0 : o[i.route.id]) : null,
      u = r ? i.route.errorElement || A(_8, {}) : null,
      d = () =>
        A(R8, {
          match: i,
          routeContext: { outlet: a, matches: t.concat(n.slice(0, l + 1)) },
          children: s ? u : i.route.element !== void 0 ? i.route.element : a,
        });
    return r && (i.route.errorElement || l === 0)
      ? A(P8, { location: r.location, component: u, error: s, children: d() })
      : d();
  }, null);
}
var Rg;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(Rg || (Rg = {}));
var sp;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(sp || (sp = {}));
function M8(e) {
  let t = k.exports.useContext(Xh);
  return t || ae(!1), t;
}
function lw() {
  var e;
  let t = k.exports.useContext(aw),
    r = M8(sp.UseRouteError),
    n = k.exports.useContext(Ma),
    o = n.matches[n.matches.length - 1];
  return (
    t ||
    (n || ae(!1),
    o.route.id || ae(!1),
    (e = r.errors) == null ? void 0 : e[o.route.id])
  );
}
function L8(e) {
  let { fallbackElement: t, router: r } = e,
    n = S8(
      r.subscribe,
      () => r.state,
      () => r.state
    ),
    o = k.exports.useMemo(
      () => ({
        createHref: r.createHref,
        go: (i) => r.navigate(i),
        push: (i, l, s) =>
          r.navigate(i, {
            state: l,
            preventScrollReset: s == null ? void 0 : s.preventScrollReset,
          }),
        replace: (i, l, s) =>
          r.navigate(i, {
            replace: !0,
            state: l,
            preventScrollReset: s == null ? void 0 : s.preventScrollReset,
          }),
      }),
      [r]
    ),
    a = r.basename || "/";
  return A(nw.Provider, {
    value: { router: r, navigator: o, static: !1, basename: a },
    children: A(Xh.Provider, {
      value: n,
      children: A(B8, {
        basename: r.basename,
        location: r.state.location,
        navigationType: r.state.historyAction,
        navigator: o,
        children: r.state.initialized ? A(I8, {}) : t,
      }),
    }),
  });
}
function z8(e) {
  return k8(e.context);
}
function D8(e) {
  ae(!1);
}
function B8(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: o = et.Pop,
    navigator: a,
    static: i = !1,
  } = e;
  pc() && ae(!1);
  let l = t.replace(/^\/*/, "/"),
    s = k.exports.useMemo(
      () => ({ basename: l, navigator: a, static: i }),
      [l, a, i]
    );
  typeof n == "string" && (n = un(n));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: c = null,
      key: h = "default",
    } = n,
    m = k.exports.useMemo(() => {
      let g = Xx(u, l);
      return g == null
        ? null
        : { pathname: g, search: d, hash: f, state: c, key: h };
    }, [l, u, d, f, c, h]);
  return m == null
    ? null
    : A(ow.Provider, {
        value: s,
        children: A(fc.Provider, {
          children: r,
          value: { location: m, navigationType: o },
        }),
      });
}
function I8(e) {
  let { children: t, location: r } = e,
    n = k.exports.useContext(nw),
    o = n && !t ? n.router.routes : up(t);
  return T8(o, r);
}
var Ag;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ag || (Ag = {}));
new Promise(() => {});
function up(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    k.exports.Children.forEach(e, (n, o) => {
      if (!k.exports.isValidElement(n)) return;
      if (n.type === k.exports.Fragment) {
        r.push.apply(r, up(n.props.children, t));
        return;
      }
      n.type !== D8 && ae(!1), !n.props.index || !n.props.children || ae(!1);
      let a = [...t, o],
        i = {
          id: n.props.id || a.join("-"),
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          index: n.props.index,
          path: n.props.path,
          loader: n.props.loader,
          action: n.props.action,
          errorElement: n.props.errorElement,
          hasErrorBoundary: n.props.errorElement != null,
          shouldRevalidate: n.props.shouldRevalidate,
          handle: n.props.handle,
        };
      n.props.children && (i.children = up(n.props.children, a)), r.push(i);
    }),
    r
  );
}
function sw(e) {
  return e.map((t) => {
    let r = bu({}, t);
    return (
      r.hasErrorBoundary == null &&
        (r.hasErrorBoundary = r.errorElement != null),
      r.children && (r.children = sw(r.children)),
      r
    );
  });
}
/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $8(e, t) {
  var r;
  return r8({
    basename: t == null ? void 0 : t.basename,
    history: _B({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((r = window) == null ? void 0 : r.__staticRouterHydrationData),
    routes: sw(e),
  }).initialize();
}
var Mg;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Mg || (Mg = {}));
var Lg;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Lg || (Lg = {}));
const uw = () => {
    const e = Rd().map((n) => `beef${n}`),
      t = Rd().map((n) => {
        const [o, a] = n.split("");
        return `${o}beef${a}`;
      }),
      r = Rd().map((n) => `${n}beef`);
    return [...e, ...t, ...r];
  },
  Rd = () => {
    const e = [];
    for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
    return e;
  },
  N8 = uw(),
  zg = () => {
    const { id: e } = E8(),
      t = N8.includes(e || "");
    return (
      k.exports.useEffect(() => {
        e && t && (document.title = e);
      }, [t, e]),
      t
        ? A(wa, {
            bg: `#${e}`,
            children: A(yu, { textAlign: "center", py: 4, children: e }),
          })
        : A(wa, {
            children: A(yu, {
              textAlign: "center",
              py: 4,
              children:
                "this is not a beef and you should be ashamed of yourself",
            }),
          })
    );
  },
  F8 = ({ id: e }) =>
    A(FD, {
      children: A(Dx, {
        p: 2,
        bgColor: `#${e}`,
        minW: 20,
        minH: 20,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: "larger",
        borderRadius: "lg",
        borderWidth: "medium",
        borderColor: "blackAlpha.500",
        borderStyle: "inset",
        transition: "transform 0.5s ease",
        _hover: {
          transform: "rotate(7.5deg)",
          transition: "transform 0.1s ease",
        },
        children: A(ND, { href: `/beefs/${e}`, children: e }),
      }),
    }),
  cp = uw(),
  O8 = () =>
    $t(wa, {
      children: [
        A(yu, { textAlign: "center", py: 4, children: "every beef" }),
        A(Lx, { mb: 4, children: A(V8, {}) }),
        A(Nx, {
          spacing: 1,
          justify: "center",
          children: cp.map((e) => A(Uh, { children: A(F8, { id: e }) }, e)),
        }),
      ],
    }),
  V8 = () => {
    const e = w8();
    return A(jh, {
      onClick: () => {
        const r = Math.floor(Math.random() * cp.length),
          n = cp[r];
        e(`/beefs/${n}`);
      },
      colorScheme: "purple",
      children: "I'm Feeling Lucky",
    });
  },
  j8 = () => A(zx, { maxW: "container.lg", children: A(z8, {}) }),
  W8 = () => {
    const e = lw();
    return (
      console.error(e),
      $t("div", {
        id: "error-page",
        children: [
          A("h1", { children: "Oops!" }),
          A("p", { children: "Sorry, an unexpected error has occurred." }),
          A("p", { children: A("i", { children: e.statusText || e.message }) }),
        ],
      })
    );
  },
  H8 = $8([
    { path: "/beefs/:id", element: A(zg, {}) },
    {
      path: "/",
      element: A(j8, {}),
      errorElement: A(W8, {}),
      children: [
        { index: !0, element: A(O8, {}) },
        { path: "beefs/:id", element: A(zg, {}) },
      ],
    },
  ]);
function U8() {
  return A(L8, { router: H8 });
}
Md.createRoot(document.getElementById("root")).render(
  $t(Q.StrictMode, { children: [A(TB, { children: A(U8, {}) }), ","] })
);
