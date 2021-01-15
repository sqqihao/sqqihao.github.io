var WegameLogin = function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "/dist/middle/login/",
    t(t.s = 67)
}([function(e, t, n) {
    "use strict";
    function r(e) {
        return "[object Array]" === T.call(e)
    }
    function o(e) {
        return void 0 === e
    }
    function i(e) {
        return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    function a(e) {
        return "[object ArrayBuffer]" === T.call(e)
    }
    function s(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    function c(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    }
    function u(e) {
        return "string" == typeof e
    }
    function l(e) {
        return "number" == typeof e
    }
    function p(e) {
        return null !== e && "object" == typeof e
    }
    function f(e) {
        return "[object Date]" === T.call(e)
    }
    function d(e) {
        return "[object File]" === T.call(e)
    }
    function g(e) {
        return "[object Blob]" === T.call(e)
    }
    function h(e) {
        return "[object Function]" === T.call(e)
    }
    function m(e) {
        return p(e) && h(e.pipe)
    }
    function v(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }
    function w(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }
    function y() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }
    function b(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" != typeof e && (e = [e]),
            r(e))
                for (var n = 0, o = e.length; n < o; n++)
                    t.call(null, e[n], n, e);
            else
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }
    function _() {
        function e(e, n) {
            "object" == typeof t[n] && "object" == typeof e ? t[n] = _(t[n], e) : t[n] = e
        }
        for (var t = {}, n = 0, r = arguments.length; n < r; n++)
            b(arguments[n], e);
        return t
    }
    function x() {
        function e(e, n) {
            "object" == typeof t[n] && "object" == typeof e ? t[n] = x(t[n], e) : t[n] = "object" == typeof e ? x({}, e) : e
        }
        for (var t = {}, n = 0, r = arguments.length; n < r; n++)
            b(arguments[n], e);
        return t
    }
    function k(e, t, n) {
        return b(t, function(t, r) {
            e[r] = n && "function" == typeof t ? A(t, n) : t
        }),
        e
    }
    var A = n(49)
      , T = Object.prototype.toString;
    e.exports = {
        isArray: r,
        isArrayBuffer: a,
        isBuffer: i,
        isFormData: s,
        isArrayBufferView: c,
        isString: u,
        isNumber: l,
        isObject: p,
        isUndefined: o,
        isDate: f,
        isFile: d,
        isBlob: g,
        isFunction: h,
        isStream: m,
        isURLSearchParams: v,
        isStandardBrowserEnv: y,
        forEach: b,
        merge: _,
        deepMerge: x,
        extend: k,
        trim: w
    }
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t, n) {
    var r = n(38)("wks")
      , o = n(39)
      , i = n(1).Symbol
      , a = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
    }
    ).store = r
}
, function(e, t) {
    var n = e.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t) {
    t.getCookie = function(e) {
        var n;
        return t.filterXSS((n = document.cookie.match(RegExp("(^|;\\s*)" + e + "=([^;]*)(;|$)"))) ? unescape(n[2]) : null)
    }
    ,
    t.setCookie = function(e, t, n, r, o, i) {
        var a = new Date
          , s = arguments[2] || null
          , r = arguments[3] || "/"
          , o = arguments[4] || null
          , i = arguments[5] || !1;
        s && a.setMinutes(a.getMinutes() + parseInt(s));
        var c = escape(e) + "=" + escape(t) + (s ? "; expires=" + a.toGMTString() : "") + "; path=" + r + (o ? "; domain=" + o : "") + (i ? "; secure" : "");
        document.cookie = c
    }
    ,
    t.delCookie = function(e, t, n) {
        var r = new Date;
        r.setTime(r.getTime() - 1),
        document.cookie = e + "=;expires=" + r.toGMTString() + "; path=" + (t || "/") + "; domain=" + (n || "")
    }
    ,
    t.filterXSS = function(e) {
        if (!e)
            return e;
        for (; e != unescape(e); )
            e = unescape(e);
        for (var t = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], r = 0; r < t.length; r++)
            e = e.replace(new RegExp(t[r],"gi"), n[r]);
        return e
    }
}
, function(e, t, n) {
    var r = n(8);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t, n) {
    var r = n(14)
      , o = n(34);
    e.exports = n(9) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = n(3)
      , i = n(12)
      , a = n(6)
      , s = n(15)
      , c = function(e, t, n) {
        var u, l, p, f = e & c.F, d = e & c.G, g = e & c.S, h = e & c.P, m = e & c.B, v = e & c.W, w = d ? o : o[t] || (o[t] = {}), y = w.prototype, b = d ? r : g ? r[t] : (r[t] || {}).prototype;
        d && (n = t);
        for (u in n)
            (l = !f && b && void 0 !== b[u]) && s(w, u) || (p = l ? b[u] : n[u],
            w[u] = d && "function" != typeof b[u] ? n[u] : m && l ? i(p, r) : v && b[u] == p ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,n)
                        }
                        return new e(t,n,r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype,
                t
            }(p) : h && "function" == typeof p ? i(Function.call, p) : p,
            h && ((w.virtual || (w.virtual = {}))[u] = p,
            e & c.R && y && !y[u] && a(y, u, p)))
    };
    c.F = 1,
    c.G = 2,
    c.S = 4,
    c.P = 8,
    c.B = 16,
    c.W = 32,
    c.U = 64,
    c.R = 128,
    e.exports = c
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    e.exports = !n(23)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t) {
    e.exports = {}
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    var r = n(13);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(72)
      , i = n(73)
      , a = Object.defineProperty;
    t.f = n(9) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = i(t, !0),
        r(n),
        o)
            try {
                return a(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t, n) {
    "use strict";
    (function(t, r) {
        function o(e) {
            var t = document.createElement("a");
            return t.href = e,
            t.href
        }
        function i(e) {
            return e ? e.replace(/^http(s)?:/i, location.protocol) : e
        }
        function a(e, t, n, r) {
            var o = n || 622
              , i = r || 418
              , a = (window.screen.availHeight - 30 - i) / 2
              , s = (window.screen.availWidth - 10 - o) / 2;
            return window.open(e, t, "height=" + i + ",width=" + o + ", top=" + a + ", left=" + s)
        }
        function s(e) {
            var t = null;
            if (void 0 !== e && "function" != typeof e || (t = ""),
            "number" == typeof e && (t = e.toString()),
            "boolean" == typeof e && (t = e ? "1" : "0"),
            "object" == typeof e && (e || (t = ""),
            e instanceof RegExp && (t = e.toString())),
            "string" == typeof e && (t = e),
            "string" == typeof t)
                return encodeURIComponent(t);
            var n, r = [];
            if (e instanceof Array) {
                for (n = 0; n < e.length; n++)
                    void 0 !== e[n] && r.push("object" == typeof e[n] ? "" : s(e[n]));
                return r.join("|")
            }
            for (n in e)
                void 0 !== e[n] && (t = null,
                "object" == typeof e[n] ? e[n]instanceof Array ? (t = e[n],
                r.push(n + "=" + s(t))) : r.push(n + "=") : (t = e[n],
                r.push(n + "=" + s(t))));
            return r.join("&")
        }
        function c(e, t) {
            if (t = t || 0,
            !e)
                return {};
            e = e.toString();
            var n = {}
              , r = e.split("&");
            if (0 == r.length)
                return n;
            for (var o = 0; o < r.length; o++)
                if (r[o]) {
                    var i = r[o].split("=");
                    if (i.length >= 2) {
                        var a = r[o].substr(0, r[o].indexOf("="))
                          , s = r[o].substr(r[o].indexOf("=") + 1);
                        s || (s = ""),
                        a && (n[a] = 0 == t ? decodeURIComponent(s) : s)
                    }
                }
            return n
        }
        function u(e, t) {
            t = t || {};
            for (var n in t)
                "object" != typeof e[n] ? e[n] = t[n] : "object" == typeof t[n] && (e[n] = u(e[n], t[n]));
            return e
        }
        function l(e, t, n, r, o, i) {
            var a = null;
            a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
            e = e.toUpperCase();
            var s = Math.random();
            if ("object" == typeof n) {
                var c = "";
                for (var u in n)
                    c += u + "=" + n[u] + "&";
                n = c.replace(/&$/, "")
            }
            "GET" == e ? (n ? a.open("GET", t + "?" + n, !0) : a.open("GET", t + "?t=" + s, !0),
            i || (a.withCredentials = !0),
            a.send()) : "POST" == e && (a.open("POST", t, !0),
            a.setRequestHeader("Content-type", "application/json"),
            i || (a.withCredentials = !0),
            a.send(n)),
            a.onreadystatechange = function() {
                4 == a.readyState && (200 == a.status ? r(JSON.parse(a.responseText)) : o && o(a.status))
            }
        }
        function p(e) {
            return new Promise(function(t, n) {
                var r = document.createElement("script");
                r.src = e,
                r.onload = function() {
                    t()
                }
                ,
                r.onerror = function(e) {
                    n(e)
                }
                ,
                document.body.appendChild(r)
            }
            )
        }
        function f(e) {
            N = "www.wegame.com.cn",
            I = "wegame.gtimg.com",
            U = "wegame.com.cn",
            R = !1,
            C.isBrowser && document.domain.indexOf(U) >= 0 && (document.domain = U)
        }
        function d() {
            var e = A.getCookie("tgp_id");
            return !(!e || "undefined" == e || "0" == e)
        }
        function g(e, t) {
            t = t || {};
            var n = 7200;
            t.session && (n = 0);
            for (var r in e)
                void 0 !== e[r] && A.setCookie(r, e[r], n, "/", U)
        }
        function h(e, t) {
            t = t || {};
            var n = 7200;
            t.session && (n = 0);
            for (var r in e)
                void 0 !== e[r] && A.setCookie("tgp_" + r, e[r], n, "/", U)
        }
        function m() {
            ["env", "id", "ticket", "bind_ticket", "user_type", "biz_ticket"].forEach(function(e) {
                A.delCookie("tgp_" + e, "/", U)
            }),
            ["uin", "skey", "p_uin", "p_skey", "pt2gguin", "pt4_token", "client_type", "region"].forEach(function(e) {
                A.delCookie(e, "/", U)
            }),
            ["uin", "skey", "p_uin", "p_skey", "pt2gguin", "pt4_token", "client_type", "region"].forEach(function(e) {
                A.delCookie(e, "/", U)
            }),
            ["uin", "skey", "p_uin", "p_skey", "pt2gguin", "pt4_token", "client_type", "region"].forEach(function(e) {
                A.delCookie(e, "/", "qq.com")
            }),
            "tgp.qq.com" == U && ["env", "id", "ticket", "bind_ticket", "user_type", "biz_ticket"].forEach(function(e) {
                A.delCookie("tgp_" + e, "/", "qq.com")
            })
        }
        function v() {
            return m(),
            localStorage.removeItem("tgp_uc"),
            localStorage.removeItem("tgp_userinfo"),
            localStorage.removeItem("jump_conf"),
            k()
        }
        function w(e, t) {
            return new Promise(function(n, r) {
                L.baseRequest({
                    url: e,
                    method: "post",
                    data: t
                }).then(function(e) {
                    if (!e || 0 !== e.code || !e.data || 0 !== e.data.result) {
                        var t = e.data && e.data.result ? e.data.result : ""
                          , o = e.data && e.data.errmsg ? e.data.errmsg : ""
                          , i = e.data;
                        return void r({
                            result: t,
                            errmsg: o,
                            data: i
                        })
                    }
                    var a = _(e.data);
                    n(a)
                }).catch(function(e) {
                    r({
                        result: -1e3,
                        errmsg: e
                    })
                })
            }
            )
        }
        function y() {
            return new Promise(function(e, t) {
                var n = localStorage.getItem("tgp_userinfo");
                if (!(n = D(n)) || !n.ct)
                    return void t({
                        result: 1,
                        errmsg: ""
                    });
                L.baseRequest({
                    method: "post",
                    url: G.refresh_wt_url,
                    data: {
                        user_id: n.uid,
                        ct: n.ct
                    }
                }).then(function(r) {
                    if (!r || 0 !== r.code || !r.data || 0 !== r.data.result) {
                        var o = r.data && r.data.result ? r.data.result : ""
                          , i = r.data && r.data.errmsg ? r.data.errmsg : "";
                        return t({
                            result: o,
                            errmsg: i
                        }),
                        void v()
                    }
                    var a = _(r.data, n);
                    e(a)
                }, function(e) {
                    t({
                        result: -1e3,
                        errmsg: e
                    })
                })
            }
            ).catch(function(e) {
                console.log(e)
            })
        }
        function b() {
            return new Promise(function(e, t) {
                A.getCookie("tgp_id") ? L.baseRequest({
                    method: "get",
                    url: G.get_userinfo_url,
                    params: {
                        Type: 1,
                        Count: 1,
                        IDList: A.getCookie("tgp_id")
                    }
                }).then(function(n) {
                    if (0 === n.Result) {
                        var r = {}
                          , o = n.UserInfoList[0];
                        r.nick = o.NewName || o.nick,
                        r.logo = M(o.faceurl),
                        r.gender = o.gender,
                        r.sign = o.sign,
                        r.level = o.level,
                        r.showid = o.showid,
                        r.vip = o.vip,
                        r.uid = o.tgpid,
                        localStorage.setItem("tgp_userinfo", E(r)),
                        e(r)
                    } else
                        t(n)
                }, function(e) {
                    t(e)
                }) : e({})
            }
            )
        }
        function _(e, t) {
            var n = {};
            t && P(n, t),
            n.env = e.env || "",
            n.uid = e.user_id,
            n.third_type = void 0 !== e.third_type ? e.third_type : n.third_type,
            n.third_openid = void 0 !== e.third_openid ? e.third_openid : n.third_openid,
            n.third_ticket = void 0 !== e.third_ticket ? e.third_ticket : n.third_ticket,
            n.already_bound = void 0 !== e.already_bound ? e.already_bound : n.already_bound,
            n.refresh_wt_span = e.refresh_wt_span,
            n.wt = e.wt,
            n.bt = e.ext_info,
            n.ct = e.ct || n.ct || "",
            n.refresh_time = Date.now() + 1e3 * e.refresh_wt_span,
            e.user_info && (n.nick = e.user_info.nick,
            n.logo = M(e.user_info.picurl),
            n.gender = e.user_info.gender,
            n.sign = e.user_info.sign,
            n.level = e.user_info.level,
            n.showid = e.user_info.showid,
            n.vip = e.user_info.vip),
            localStorage.setItem("tgp_userinfo", E(n));
            var r = {
                env: n.env,
                bind_ticket: n.bt,
                user_type: n.third_type
            }
              , o = A.getCookie("tgp_id");
            return o && "undefined" != o && "0" != o || (r.id = n.uid,
            r.ticket = n.wt),
            h(r, {
                session: 1
            }),
            n
        }
        function x(e, t) {
            debugger;
            if (C.isBrowser) {
                var n = !1;
                try {
                    if (top.window.TGP && void 0 !== top.window.TGP.status && (n = !!top.window.TGP.status.exception))
                        return Promise.reject({
                            error: "exception model",
                            exception: !0
                        })
                } catch (e) {
                    console.log(e)
                }
                var r = sessionStorage.getItem("wg_abnormal_model");
                if (r)
                    try {
                        n = !!JSON.parse(r).is_svr_exception_mode
                    } catch (e) {
                        console.log(e)
                    }
                if (n)
                    return Promise.reject({
                        error: "exception model",
                        exception: !0
                    })
            }
            return new Promise(function(n, r) {
                var o = {
                    agent_client_type: 1,
                    t: Date.now()
                };
                e && (o.from_src = "we.game.site"),
                L.baseRequest({
                    url: G.check_login_url,
                    method: "get",
                    withCredentials: C.isBrowser,
                    params: o,
                    cookies: t
                }).then(function(e) {
                    if (1 === e.result && e.data) {
                        var t = e.data
                          , o = {
                            tgp_biz_ticket: t.tgp_biz_ticket,
                            client_type: t.agent_client_type,
                            region: t.personal_home_region
                        };
                        C.isBrowser && g(o, {
                            session: 1
                        }),
                        n(t)
                    } else
                        r(e)
                }).catch(function(e) {
                    r(e)
                })
            }
            )
        }
        function k() {
            return new Promise(function(e, t) {
                L.baseRequest({
                    url: G.logout_url,
                    method: "get"
                }).then(function(t) {
                    e(t)
                }).catch(function(e) {
                    t(e)
                })
            }
            )
        }
        var A = function(e) {
            return e && "object" == typeof e && "default"in e ? e.default : e
        }(n(4))
          , T = n(100)
          , q = n(129)
          , C = n(18)
          , L = n(48)
          , S = function() {
            function e(e) {
                if (e)
                    g[0] = g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0,
                    this.blocks = g,
                    this.buffer8 = s;
                else if (c) {
                    var t = new ArrayBuffer(68);
                    this.buffer8 = new Uint8Array(t),
                    this.blocks = new Uint32Array(t)
                } else
                    this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                this.finalized = this.hashed = !1,
                this.first = !0
            }
            var n = "input is invalid type"
              , o = "object" == typeof window
              , i = o ? window : {};
            i.JS_MD5_NO_WINDOW && (o = !1);
            var a = !o && "object" == typeof self;
            !i.JS_MD5_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node ? i = r : a && (i = self);
            var s, c = !i.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, u = "0123456789abcdef".split(""), l = [128, 32768, 8388608, -2147483648], p = [0, 8, 16, 24], f = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), g = [];
            if (c) {
                var h = new ArrayBuffer(68);
                s = new Uint8Array(h),
                g = new Uint32Array(h)
            }
            !i.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ),
            !c || !i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
            }
            );
            var m = function(t) {
                return function(n) {
                    return new e(!0).update(n)[t]()
                }
            };
            return e.prototype.update = function(e) {
                if (!this.finalized) {
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" !== r)
                            throw n;
                        if (null === e)
                            throw n;
                        if (c && e.constructor === ArrayBuffer)
                            e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || c && ArrayBuffer.isView(e)))
                            throw n;
                        t = !0
                    }
                    for (var o, i, a = 0, s = e.length, u = this.blocks, l = this.buffer8; a < s; ) {
                        if (this.hashed && (this.hashed = !1,
                        u[0] = u[16],
                        u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0),
                        t)
                            if (c)
                                for (i = this.start; a < s && i < 64; ++a)
                                    l[i++] = e[a];
                            else
                                for (i = this.start; a < s && i < 64; ++a)
                                    u[i >> 2] |= e[a] << p[3 & i++];
                        else if (c)
                            for (i = this.start; a < s && i < 64; ++a)
                                o = e.charCodeAt(a),
                                o < 128 ? l[i++] = o : o < 2048 ? (l[i++] = 192 | o >> 6,
                                l[i++] = 128 | 63 & o) : o < 55296 || o >= 57344 ? (l[i++] = 224 | o >> 12,
                                l[i++] = 128 | o >> 6 & 63,
                                l[i++] = 128 | 63 & o) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++a)),
                                l[i++] = 240 | o >> 18,
                                l[i++] = 128 | o >> 12 & 63,
                                l[i++] = 128 | o >> 6 & 63,
                                l[i++] = 128 | 63 & o);
                        else
                            for (i = this.start; a < s && i < 64; ++a)
                                o = e.charCodeAt(a),
                                o < 128 ? u[i >> 2] |= o << p[3 & i++] : o < 2048 ? (u[i >> 2] |= (192 | o >> 6) << p[3 & i++],
                                u[i >> 2] |= (128 | 63 & o) << p[3 & i++]) : o < 55296 || o >= 57344 ? (u[i >> 2] |= (224 | o >> 12) << p[3 & i++],
                                u[i >> 2] |= (128 | o >> 6 & 63) << p[3 & i++],
                                u[i >> 2] |= (128 | 63 & o) << p[3 & i++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++a)),
                                u[i >> 2] |= (240 | o >> 18) << p[3 & i++],
                                u[i >> 2] |= (128 | o >> 12 & 63) << p[3 & i++],
                                u[i >> 2] |= (128 | o >> 6 & 63) << p[3 & i++],
                                u[i >> 2] |= (128 | 63 & o) << p[3 & i++]);
                        this.lastByteIndex = i,
                        this.bytes += i - this.start,
                        i >= 64 ? (this.start = i - 64,
                        this.hash(),
                        this.hashed = !0) : this.start = i
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                    this.bytes = this.bytes % 4294967296),
                    this
                }
            }
            ,
            e.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var e = this.blocks
                      , t = this.lastByteIndex;
                    e[t >> 2] |= l[3 & t],
                    t >= 56 && (this.hashed || this.hash(),
                    e[0] = e[16],
                    e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                    e[14] = this.bytes << 3,
                    e[15] = this.hBytes << 3 | this.bytes >>> 29,
                    this.hash()
                }
            }
            ,
            e.prototype.hash = function() {
                var e, t, n, r, o, i, a = this.blocks;
                this.first ? (e = a[0] - 680876937,
                e = (e << 7 | e >>> 25) - 271733879 << 0,
                r = (-1732584194 ^ 2004318071 & e) + a[1] - 117830708,
                r = (r << 12 | r >>> 20) + e << 0,
                n = (-271733879 ^ r & (-271733879 ^ e)) + a[2] - 1126478375,
                n = (n << 17 | n >>> 15) + r << 0,
                t = (e ^ n & (r ^ e)) + a[3] - 1316259209,
                t = (t << 22 | t >>> 10) + n << 0) : (e = this.h0,
                t = this.h1,
                n = this.h2,
                r = this.h3,
                e += (r ^ t & (n ^ r)) + a[0] - 680876936,
                e = (e << 7 | e >>> 25) + t << 0,
                r += (n ^ e & (t ^ n)) + a[1] - 389564586,
                r = (r << 12 | r >>> 20) + e << 0,
                n += (t ^ r & (e ^ t)) + a[2] + 606105819,
                n = (n << 17 | n >>> 15) + r << 0,
                t += (e ^ n & (r ^ e)) + a[3] - 1044525330,
                t = (t << 22 | t >>> 10) + n << 0),
                e += (r ^ t & (n ^ r)) + a[4] - 176418897,
                e = (e << 7 | e >>> 25) + t << 0,
                r += (n ^ e & (t ^ n)) + a[5] + 1200080426,
                r = (r << 12 | r >>> 20) + e << 0,
                n += (t ^ r & (e ^ t)) + a[6] - 1473231341,
                n = (n << 17 | n >>> 15) + r << 0,
                t += (e ^ n & (r ^ e)) + a[7] - 45705983,
                t = (t << 22 | t >>> 10) + n << 0,
                e += (r ^ t & (n ^ r)) + a[8] + 1770035416,
                e = (e << 7 | e >>> 25) + t << 0,
                r += (n ^ e & (t ^ n)) + a[9] - 1958414417,
                r = (r << 12 | r >>> 20) + e << 0,
                n += (t ^ r & (e ^ t)) + a[10] - 42063,
                n = (n << 17 | n >>> 15) + r << 0,
                t += (e ^ n & (r ^ e)) + a[11] - 1990404162,
                t = (t << 22 | t >>> 10) + n << 0,
                e += (r ^ t & (n ^ r)) + a[12] + 1804603682,
                e = (e << 7 | e >>> 25) + t << 0,
                r += (n ^ e & (t ^ n)) + a[13] - 40341101,
                r = (r << 12 | r >>> 20) + e << 0,
                n += (t ^ r & (e ^ t)) + a[14] - 1502002290,
                n = (n << 17 | n >>> 15) + r << 0,
                t += (e ^ n & (r ^ e)) + a[15] + 1236535329,
                t = (t << 22 | t >>> 10) + n << 0,
                e += (n ^ r & (t ^ n)) + a[1] - 165796510,
                e = (e << 5 | e >>> 27) + t << 0,
                r += (t ^ n & (e ^ t)) + a[6] - 1069501632,
                r = (r << 9 | r >>> 23) + e << 0,
                n += (e ^ t & (r ^ e)) + a[11] + 643717713,
                n = (n << 14 | n >>> 18) + r << 0,
                t += (r ^ e & (n ^ r)) + a[0] - 373897302,
                t = (t << 20 | t >>> 12) + n << 0,
                e += (n ^ r & (t ^ n)) + a[5] - 701558691,
                e = (e << 5 | e >>> 27) + t << 0,
                r += (t ^ n & (e ^ t)) + a[10] + 38016083,
                r = (r << 9 | r >>> 23) + e << 0,
                n += (e ^ t & (r ^ e)) + a[15] - 660478335,
                n = (n << 14 | n >>> 18) + r << 0,
                t += (r ^ e & (n ^ r)) + a[4] - 405537848,
                t = (t << 20 | t >>> 12) + n << 0,
                e += (n ^ r & (t ^ n)) + a[9] + 568446438,
                e = (e << 5 | e >>> 27) + t << 0,
                r += (t ^ n & (e ^ t)) + a[14] - 1019803690,
                r = (r << 9 | r >>> 23) + e << 0,
                n += (e ^ t & (r ^ e)) + a[3] - 187363961,
                n = (n << 14 | n >>> 18) + r << 0,
                t += (r ^ e & (n ^ r)) + a[8] + 1163531501,
                t = (t << 20 | t >>> 12) + n << 0,
                e += (n ^ r & (t ^ n)) + a[13] - 1444681467,
                e = (e << 5 | e >>> 27) + t << 0,
                r += (t ^ n & (e ^ t)) + a[2] - 51403784,
                r = (r << 9 | r >>> 23) + e << 0,
                n += (e ^ t & (r ^ e)) + a[7] + 1735328473,
                n = (n << 14 | n >>> 18) + r << 0,
                t += (r ^ e & (n ^ r)) + a[12] - 1926607734,
                t = (t << 20 | t >>> 12) + n << 0,
                o = t ^ n,
                e += (o ^ r) + a[5] - 378558,
                e = (e << 4 | e >>> 28) + t << 0,
                r += (o ^ e) + a[8] - 2022574463,
                r = (r << 11 | r >>> 21) + e << 0,
                i = r ^ e,
                n += (i ^ t) + a[11] + 1839030562,
                n = (n << 16 | n >>> 16) + r << 0,
                t += (i ^ n) + a[14] - 35309556,
                t = (t << 23 | t >>> 9) + n << 0,
                o = t ^ n,
                e += (o ^ r) + a[1] - 1530992060,
                e = (e << 4 | e >>> 28) + t << 0,
                r += (o ^ e) + a[4] + 1272893353,
                r = (r << 11 | r >>> 21) + e << 0,
                i = r ^ e,
                n += (i ^ t) + a[7] - 155497632,
                n = (n << 16 | n >>> 16) + r << 0,
                t += (i ^ n) + a[10] - 1094730640,
                t = (t << 23 | t >>> 9) + n << 0,
                o = t ^ n,
                e += (o ^ r) + a[13] + 681279174,
                e = (e << 4 | e >>> 28) + t << 0,
                r += (o ^ e) + a[0] - 358537222,
                r = (r << 11 | r >>> 21) + e << 0,
                i = r ^ e,
                n += (i ^ t) + a[3] - 722521979,
                n = (n << 16 | n >>> 16) + r << 0,
                t += (i ^ n) + a[6] + 76029189,
                t = (t << 23 | t >>> 9) + n << 0,
                o = t ^ n,
                e += (o ^ r) + a[9] - 640364487,
                e = (e << 4 | e >>> 28) + t << 0,
                r += (o ^ e) + a[12] - 421815835,
                r = (r << 11 | r >>> 21) + e << 0,
                i = r ^ e,
                n += (i ^ t) + a[15] + 530742520,
                n = (n << 16 | n >>> 16) + r << 0,
                t += (i ^ n) + a[2] - 995338651,
                t = (t << 23 | t >>> 9) + n << 0,
                e += (n ^ (t | ~r)) + a[0] - 198630844,
                e = (e << 6 | e >>> 26) + t << 0,
                r += (t ^ (e | ~n)) + a[7] + 1126891415,
                r = (r << 10 | r >>> 22) + e << 0,
                n += (e ^ (r | ~t)) + a[14] - 1416354905,
                n = (n << 15 | n >>> 17) + r << 0,
                t += (r ^ (n | ~e)) + a[5] - 57434055,
                t = (t << 21 | t >>> 11) + n << 0,
                e += (n ^ (t | ~r)) + a[12] + 1700485571,
                e = (e << 6 | e >>> 26) + t << 0,
                r += (t ^ (e | ~n)) + a[3] - 1894986606,
                r = (r << 10 | r >>> 22) + e << 0,
                n += (e ^ (r | ~t)) + a[10] - 1051523,
                n = (n << 15 | n >>> 17) + r << 0,
                t += (r ^ (n | ~e)) + a[1] - 2054922799,
                t = (t << 21 | t >>> 11) + n << 0,
                e += (n ^ (t | ~r)) + a[8] + 1873313359,
                e = (e << 6 | e >>> 26) + t << 0,
                r += (t ^ (e | ~n)) + a[15] - 30611744,
                r = (r << 10 | r >>> 22) + e << 0,
                n += (e ^ (r | ~t)) + a[6] - 1560198380,
                n = (n << 15 | n >>> 17) + r << 0,
                t += (r ^ (n | ~e)) + a[13] + 1309151649,
                t = (t << 21 | t >>> 11) + n << 0,
                e += (n ^ (t | ~r)) + a[4] - 145523070,
                e = (e << 6 | e >>> 26) + t << 0,
                r += (t ^ (e | ~n)) + a[11] - 1120210379,
                r = (r << 10 | r >>> 22) + e << 0,
                n += (e ^ (r | ~t)) + a[2] + 718787259,
                n = (n << 15 | n >>> 17) + r << 0,
                t += (r ^ (n | ~e)) + a[9] - 343485551,
                t = (t << 21 | t >>> 11) + n << 0,
                this.first ? (this.h0 = e + 1732584193 << 0,
                this.h1 = t - 271733879 << 0,
                this.h2 = n - 1732584194 << 0,
                this.h3 = r + 271733878 << 0,
                this.first = !1) : (this.h0 = this.h0 + e << 0,
                this.h1 = this.h1 + t << 0,
                this.h2 = this.h2 + n << 0,
                this.h3 = this.h3 + r << 0)
            }
            ,
            e.prototype.hex = function() {
                this.finalize();
                var e = this.h0
                  , t = this.h1
                  , n = this.h2
                  , r = this.h3;
                return u[e >> 4 & 15] + u[15 & e] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 28 & 15] + u[e >> 24 & 15] + u[t >> 4 & 15] + u[15 & t] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 28 & 15] + u[t >> 24 & 15] + u[n >> 4 & 15] + u[15 & n] + u[n >> 12 & 15] + u[n >> 8 & 15] + u[n >> 20 & 15] + u[n >> 16 & 15] + u[n >> 28 & 15] + u[n >> 24 & 15] + u[r >> 4 & 15] + u[15 & r] + u[r >> 12 & 15] + u[r >> 8 & 15] + u[r >> 20 & 15] + u[r >> 16 & 15] + u[r >> 28 & 15] + u[r >> 24 & 15]
            }
            ,
            e.prototype.toString = e.prototype.hex,
            e.prototype.digest = function() {
                this.finalize();
                var e = this.h0
                  , t = this.h1
                  , n = this.h2
                  , r = this.h3;
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255]
            }
            ,
            e.prototype.array = e.prototype.digest,
            e.prototype.arrayBuffer = function() {
                this.finalize();
                var e = new ArrayBuffer(16)
                  , t = new Uint32Array(e);
                return t[0] = this.h0,
                t[1] = this.h1,
                t[2] = this.h2,
                t[3] = this.h3,
                e
            }
            ,
            e.prototype.buffer = e.prototype.arrayBuffer,
            e.prototype.base64 = function() {
                for (var e, t, n, r = "", o = this.array(), i = 0; i < 15; )
                    e = o[i++],
                    t = o[i++],
                    n = o[i++],
                    r += d[e >>> 2] + d[63 & (e << 4 | t >>> 4)] + d[63 & (t << 2 | n >>> 6)] + d[63 & n];
                return e = o[i],
                r += d[e >>> 2] + d[e << 4 & 63] + "=="
            }
            ,
            function() {
                var t = m("hex");
                t.create = function() {
                    return new e
                }
                ,
                t.update = function(e) {
                    return t.create().update(e)
                }
                ;
                for (var n = 0; n < f.length; ++n) {
                    var r = f[n];
                    t[r] = m(r)
                }
                return t
            }()
        }()
          , j = function() {
            function e() {
                return Math.round(4294967295 * Math.random())
            }
            function t(e, t, n) {
                (!n || n > 4) && (n = 4);
                for (var r = 0, o = t; o < t + n; o++)
                    r <<= 8,
                    r |= e[o];
                return (4294967295 & r) >>> 0
            }
            function n(e, t, n) {
                e[t + 3] = n >> 0 & 255,
                e[t + 2] = n >> 8 & 255,
                e[t + 1] = n >> 16 & 255,
                e[t + 0] = n >> 24 & 255
            }
            function r(e) {
                if (!e)
                    return "";
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = Number(e[n]).toString(16);
                    1 == r.length && (r = "0" + r),
                    t += r
                }
                return t
            }
            function o(e) {
                for (var t = "", n = 0; n < e.length; n += 2)
                    t += String.fromCharCode(parseInt(e.substr(n, 2), 16));
                return t
            }
            function i(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t[n] = e.charCodeAt(n);
                return r(t)
            }
            function a(t) {
                h = new Array(8),
                m = new Array(8),
                v = w = 0,
                _ = !0,
                g = 0;
                var n, r = t.length, o = 0;
                for (g = (r + 10) % 8,
                0 != g && (g = 8 - g),
                y = new Array(r + g + 10),
                h[0] = 255 & (248 & e() | g),
                n = 1; n <= g; n++)
                    h[n] = 255 & e();
                for (g++,
                n = 0; n < 8; n++)
                    m[n] = 0;
                for (o = 1; o <= 2; )
                    g < 8 && (h[g++] = 255 & e(),
                    o++),
                    8 == g && c();
                for (n = 0; r > 0; )
                    g < 8 && (h[g++] = t[n++],
                    r--),
                    8 == g && c();
                for (o = 1; o <= 7; )
                    g < 8 && (h[g++] = 0,
                    o++),
                    8 == g && c();
                return y
            }
            function s(e) {
                var t, n = 0, r = new Array(8), o = e.length;
                if (b = e,
                o % 8 != 0 || o < 16)
                    return null;
                if (m = l(e),
                g = 7 & m[0],
                (n = o - g - 10) < 0)
                    return null;
                for (t = 0; t < r.length; t++)
                    r[t] = 0;
                y = new Array(n),
                w = 0,
                v = 8,
                g++;
                for (var i = 1; i <= 2; )
                    g < 8 && (g++,
                    i++),
                    8 == g && (r = e,
                    p());
                for (t = 0; 0 != n; )
                    g < 8 && (y[t] = 255 & (r[w + g] ^ m[g]),
                    t++,
                    n--,
                    g++),
                    8 == g && (r = e,
                    w = v - 8,
                    p());
                for (i = 1; i < 8; i++) {
                    if (g < 8) {
                        if (0 != (r[w + g] ^ m[g]))
                            return null;
                        g++
                    }
                    8 == g && (r = e,
                    w = v,
                    p())
                }
                return y
            }
            function c() {
                var e;
                for (e = 0; e < 8; e++)
                    h[e] ^= _ ? m[e] : y[w + e];
                var t = u(h);
                for (e = 0; e < 8; e++)
                    y[v + e] = t[e] ^ m[e],
                    m[e] = h[e];
                w = v,
                v += 8,
                g = 0,
                _ = !1
            }
            function u(e) {
                for (var r = 16, o = t(e, 0, 4), i = t(e, 4, 4), a = t(d, 0, 4), s = t(d, 4, 4), c = t(d, 8, 4), u = t(d, 12, 4), l = 0; r-- > 0; )
                    l += 2654435769,
                    l = (4294967295 & l) >>> 0,
                    o += (i << 4) + a ^ i + l ^ (i >>> 5) + s,
                    o = (4294967295 & o) >>> 0,
                    i += (o << 4) + c ^ o + l ^ (o >>> 5) + u,
                    i = (4294967295 & i) >>> 0;
                var p = new Array(8);
                return n(p, 0, o),
                n(p, 4, i),
                p
            }
            function l(e) {
                for (var r = 16, o = t(e, 0, 4), i = t(e, 4, 4), a = t(d, 0, 4), s = t(d, 4, 4), c = t(d, 8, 4), u = t(d, 12, 4), l = 3816266640; r-- > 0; )
                    i -= (o << 4) + c ^ o + l ^ (o >>> 5) + u,
                    i = (4294967295 & i) >>> 0,
                    o -= (i << 4) + a ^ i + l ^ (i >>> 5) + s,
                    o = (4294967295 & o) >>> 0,
                    l -= 2654435769,
                    l = (4294967295 & l) >>> 0;
                var p = new Array(8);
                return n(p, 0, o),
                n(p, 4, i),
                p
            }
            function p() {
                for (var e = 0; e < 8; e++)
                    m[e] ^= b[v + e];
                return m = l(m),
                v += 8,
                g = 0,
                !0
            }
            function f(e, t) {
                var n, r = [];
                if (t)
                    for (n = 0; n < e.length; n++)
                        r[n] = 255 & e.charCodeAt(n);
                else {
                    var o = 0;
                    for (n = 0; n < e.length; n += 2)
                        r[o++] = parseInt(e.substr(n, 2), 16)
                }
                return r
            }
            var d = ""
              , g = 0
              , h = []
              , m = []
              , v = 0
              , w = 0
              , y = []
              , b = []
              , _ = !0;
            return {
                encrypt: function(e, t) {
                    return r(a(f(e, t)))
                },
                decrypt: function(e) {
                    return r(s(f(e, !1)))
                },
                initkey: function(e, t) {
                    d = f(e, t)
                },
                bytesToStr: o,
                strToBytes: i,
                bytesInStr: r,
                dataFromStr: f
            }
        }()
          , O = Object.freeze({
            extend: u,
            Ajax: l,
            md5: S,
            TEA: j,
            popuWindow: a,
            serialize: s,
            unSerialize: c,
            adapterprotocol: i,
            fullUrl: o,
            loadJS: p
        })
          , P = u
          , E = s
          , D = c
          , M = i
          , B = p
          , I = "cdn.tgp.qq.com"
          , R = !1
          , N = C.isBrowser ? location.hostname : ""
          , U = C.isBrowser ? location.hostname : "";
        f();
        var G = {
            login_channels: {
                qq: !R,
                wx: !R,
                mail: R,
                fb: R
            },
            defaulttab: R ? "mail" : "qq",
            loginedDiv: "logined",
            unloginDiv: "unlogin",
            userinfoSpan: "login_qq_span",
            language: C.isBrowser ? T.getLanguage() : "zh_CN",
            loginwraper: "",
            session: !1,
            regmailurlblank: !0,
            closerememberpwd: !0,
            sso: !1,
            ssojumpurl: "/middle/login/thirdLoginJump.html",
            api_base_url: q.replaceDomain("//middle.tgp.qq.com/clientapi/auth/"),
            refresh_wt_url: q.replaceDomain("//middle.tgp.qq.com/clientapi/auth/get_web_ticket"),
            check_login_url: q.replaceDomain("//forum.tgp.qq.com/lua/tgpforum_auth_svr/checklogin"),
            logout_url: q.replaceDomain("//middle.tgp.qq.com/clientapi/auth/logout"),
            get_userinfo_url: "/api/webd/game_status/fcg-bin/user_base_info"
        }
          , F = {
            mappid: "10001",
            mcode: "",
            clienttype: "1000005",
            qq_appid: "1600001063",
            qq_daid: "733",
            wx_appid: "wx911818d5d92affa8",
            google_appid: "885487218314-kvlbl71padt9mrurnrr51s5ndr0mqds4.apps.googleusercontent.com",
            facebook_appid: "1849038352057015",
            reflush: 1,
            forgetpasswdblank: !0,
            regmailurlblank: !0
        }
          , z = {
            initEnv: f,
            isWeGameX: R,
            bizdomain: N,
            rootDomain: U,
            cdnDomain: I,
            setting: G,
            refreshWT: y,
            doWegameLogin: w,
            doWegameLogout: v,
            getLoginUser: x,
            isLogin: d,
            getUserInfo: b,
            init: function(e) {
                return P(G, e)
            },
            getLoginOption: function(e) {
                var t = P({}, F);
                return P(t, e)
            },
            loadWXJs: function() {
                return window.WxLogin ? Promise.resolve() : B("//res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js")
            },
            util: O
        };
        e.exports = z
    }
    ).call(t, n(29), n(11))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        function r(e) {
            try {
                return e()
            } catch (e) {
                return !1
            }
        }
        n.d(t, "isBrowser", function() {
            return o
        }),
        n.d(t, "isDevelopment", function() {
            return y
        }),
        n.d(t, "isInClient", function() {
            return a
        }),
        n.d(t, "isMainland", function() {
            return A
        }),
        n.d(t, "isOversea", function() {
            return k
        }),
        n.d(t, "isPreRelease", function() {
            return _
        }),
        n.d(t, "isProduction", function() {
            return x
        }),
        n.d(t, "isServer", function() {
            return i
        }),
        n.d(t, "isTest", function() {
            return b
        }),
        n.d(t, "isTgp", function() {
            return c
        }),
        n.d(t, "isTgpCross", function() {
            return m
        }),
        n.d(t, "isTgpFrame", function() {
            return g
        }),
        n.d(t, "isTgpIndependent", function() {
            return w
        }),
        n.d(t, "isTgpMain", function() {
            return l
        }),
        n.d(t, "isTgpMainTop", function() {
            return f
        }),
        n.d(t, "isWeGame", function() {
            return s
        }),
        n.d(t, "isWeGameCross", function() {
            return h
        }),
        n.d(t, "isWeGameFrame", function() {
            return d
        }),
        n.d(t, "isWeGameIndependent", function() {
            return v
        }),
        n.d(t, "isWeGameMain", function() {
            return u
        }),
        n.d(t, "isWeGameMainTop", function() {
            return p
        }),
        n.d(t, "isWeGameX", function() {
            return T
        });
        var o = "undefined" != typeof window && "undefined" != typeof document
          , i = !o && void 0 !== e
          , a = o && window.external && "function" == typeof window.external.callcpp && r(function() {
            try {
                return window.top.location.href,
                !0
            } catch (e) {
                return !1
            }
        })
          , s = a
          , c = a
          , u = s && r(function() {
            return void 0 !== window.top.TGP.status
        })
          , l = u
          , p = u && r(function() {
            return window.top === window.parent && window.top !== window
        })
          , f = p
          , d = u && r(function() {
            return window.top === window
        })
          , g = d
          , h = s && r(function() {
            return /clienttype=cross/.test(window.location.href)
        })
          , m = h
          , v = s && !u && !h
          , w = v
          , y = !1
          , b = !1
          , _ = !1
          , x = !y && !b && !_
          , k = !1
          , A = !k
          , T = k
    }
    .call(t, n(11))
}
, function(e, t, n) {
    e.exports = {
        default: n(68),
        __esModule: !0
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t) {
    e.exports = !0
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var r = n(8)
      , o = n(1).document
      , i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(36)
      , o = n(21);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t, n) {
    var r = n(38)("keys")
      , o = n(39);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}
, function(e, t, n) {
    var r = n(14).f
      , o = n(15)
      , i = n(2)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t, n;
        this.promise = new e(function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        ),
        this.resolve = o(t),
        this.reject = o(n)
    }
    var o = n(13);
    e.exports.f = function(e) {
        return new r(e)
    }
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (l === setTimeout)
            return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout)
            return l = setTimeout,
            setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }
    function i(e) {
        if (p === clearTimeout)
            return clearTimeout(e);
        if ((p === r || !p) && clearTimeout)
            return p = clearTimeout,
            clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }
    function a() {
        h && d && (h = !1,
        d.length ? g = d.concat(g) : m = -1,
        g.length && s())
    }
    function s() {
        if (!h) {
            var e = o(a);
            h = !0;
            for (var t = g.length; t; ) {
                for (d = g,
                g = []; ++m < t; )
                    d && d[m].run();
                m = -1,
                t = g.length
            }
            d = null,
            h = !1,
            i(e)
        }
    }
    function c(e, t) {
        this.fun = e,
        this.array = t
    }
    function u() {}
    var l, p, f = e.exports = {};
    !function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            p = r
        }
    }();
    var d, g = [], h = !1, m = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        g.push(new c(e,t)),
        1 !== g.length || h || o(s)
    }
    ,
    c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    f.title = "browser",
    f.browser = !0,
    f.env = {},
    f.argv = [],
    f.version = "",
    f.versions = {},
    f.on = u,
    f.addListener = u,
    f.once = u,
    f.off = u,
    f.removeListener = u,
    f.removeAllListeners = u,
    f.emit = u,
    f.prependListener = u,
    f.prependOnceListener = u,
    f.listeners = function(e) {
        return []
    }
    ,
    f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    f.cwd = function() {
        return "/"
    }
    ,
    f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    f.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty
      , o = Array.isArray
      , i = function() {
        for (var e = [], t = 0; t < 256; ++t)
            e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e
    }()
      , a = function(e) {
        for (; e.length > 1; ) {
            var t = e.pop()
              , n = t.obj[t.prop];
            if (o(n)) {
                for (var r = [], i = 0; i < n.length; ++i)
                    void 0 !== n[i] && r.push(n[i]);
                t.obj[t.prop] = r
            }
        }
    }
      , s = function(e, t) {
        for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)
            void 0 !== e[r] && (n[r] = e[r]);
        return n
    }
      , c = function e(t, n, i) {
        if (!n)
            return t;
        if ("object" != typeof n) {
            if (o(t))
                t.push(n);
            else {
                if (!t || "object" != typeof t)
                    return [t, n];
                (i && (i.plainObjects || i.allowPrototypes) || !r.call(Object.prototype, n)) && (t[n] = !0)
            }
            return t
        }
        if (!t || "object" != typeof t)
            return [t].concat(n);
        var a = t;
        return o(t) && !o(n) && (a = s(t, i)),
        o(t) && o(n) ? (n.forEach(function(n, o) {
            if (r.call(t, o)) {
                var a = t[o];
                a && "object" == typeof a && n && "object" == typeof n ? t[o] = e(a, n, i) : t.push(n)
            } else
                t[o] = n
        }),
        t) : Object.keys(n).reduce(function(t, o) {
            var a = n[o];
            return r.call(t, o) ? t[o] = e(t[o], a, i) : t[o] = a,
            t
        }, a)
    }
      , u = function(e, t) {
        return Object.keys(t).reduce(function(e, n) {
            return e[n] = t[n],
            e
        }, e)
    }
      , l = function(e, t, n) {
        var r = e.replace(/\+/g, " ");
        if ("iso-8859-1" === n)
            return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(r)
        } catch (e) {
            return r
        }
    }
      , p = function(e, t, n) {
        if (0 === e.length)
            return e;
        var r = e;
        if ("symbol" == typeof e ? r = Symbol.prototype.toString.call(e) : "string" != typeof e && (r = String(e)),
        "iso-8859-1" === n)
            return escape(r).replace(/%u[0-9a-f]{4}/gi, function(e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
            });
        for (var o = "", a = 0; a < r.length; ++a) {
            var s = r.charCodeAt(a);
            45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 ? o += r.charAt(a) : s < 128 ? o += i[s] : s < 2048 ? o += i[192 | s >> 6] + i[128 | 63 & s] : s < 55296 || s >= 57344 ? o += i[224 | s >> 12] + i[128 | s >> 6 & 63] + i[128 | 63 & s] : (a += 1,
            s = 65536 + ((1023 & s) << 10 | 1023 & r.charCodeAt(a)),
            o += i[240 | s >> 18] + i[128 | s >> 12 & 63] + i[128 | s >> 6 & 63] + i[128 | 63 & s])
        }
        return o
    }
      , f = function(e) {
        for (var t = [{
            obj: {
                o: e
            },
            prop: "o"
        }], n = [], r = 0; r < t.length; ++r)
            for (var o = t[r], i = o.obj[o.prop], s = Object.keys(i), c = 0; c < s.length; ++c) {
                var u = s[c]
                  , l = i[u];
                "object" == typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                    obj: i,
                    prop: u
                }),
                n.push(l))
            }
        return a(t),
        e
    }
      , d = function(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    }
      , g = function(e) {
        return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    }
      , h = function(e, t) {
        return [].concat(e, t)
    }
      , m = function(e, t) {
        if (o(e)) {
            for (var n = [], r = 0; r < e.length; r += 1)
                n.push(t(e[r]));
            return n
        }
        return t(e)
    };
    e.exports = {
        arrayToObject: s,
        assign: u,
        combine: h,
        compact: f,
        decode: l,
        encode: p,
        isBuffer: g,
        isRegExp: d,
        maybeMap: m,
        merge: c
    }
}
, function(e, t) {
    function n(e, t) {
        var n = e[1] || ""
          , o = e[3];
        if (!o)
            return n;
        if (t && "function" == typeof btoa) {
            var i = r(o);
            return [n].concat(o.sources.map(function(e) {
                return "/*# sourceURL=" + o.sourceRoot + e + " */"
            })).concat([i]).join("\n")
        }
        return [n].join("\n")
    }
    function r(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var r = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + r + "}" : r
            }).join("")
        }
        ,
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                t.push(a))
            }
        }
        ,
        t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        function r(e) {
            try {
                return e()
            } catch (e) {
                return !1
            }
        }
        n.d(t, "isBrowser", function() {
            return o
        }),
        n.d(t, "isServer", function() {
            return i
        }),
        n.d(t, "isWeGame", function() {
            return a
        }),
        n.d(t, "isTgp", function() {
            return s
        }),
        n.d(t, "isWeGameMain", function() {
            return c
        }),
        n.d(t, "isTgpMain", function() {
            return u
        }),
        n.d(t, "isWeGameMainTop", function() {
            return l
        }),
        n.d(t, "isTgpMainTop", function() {
            return p
        }),
        n.d(t, "isWeGameFrame", function() {
            return f
        }),
        n.d(t, "isTgpFrame", function() {
            return d
        }),
        n.d(t, "isWeGameCross", function() {
            return g
        }),
        n.d(t, "isTgpCross", function() {
            return h
        }),
        n.d(t, "isWeGameIndependent", function() {
            return m
        }),
        n.d(t, "isTgpIndependent", function() {
            return v
        }),
        n.d(t, "isDevelopment", function() {
            return w
        }),
        n.d(t, "isTest", function() {
            return y
        }),
        n.d(t, "isPreRelease", function() {
            return b
        }),
        n.d(t, "isProduction", function() {
            return _
        }),
        n.d(t, "isOversea", function() {
            return k
        }),
        n.d(t, "isMainland", function() {
            return A
        }),
        n.d(t, "isWeGameX", function() {
            return T
        });
        var o = "undefined" != typeof window && "undefined" != typeof document
          , i = !o && void 0 !== e
          , a = o && window.external && "function" == typeof window.external.callcpp && r(function() {
            try {
                return window.top.location.href,
                !0
            } catch (e) {
                return !1
            }
        })
          , s = a
          , c = a && r(function() {
            return void 0 !== window.top.TGP.status
        })
          , u = c
          , l = c && r(function() {
            return window.top === window.parent && window.top !== window
        })
          , p = l
          , f = c && r(function() {
            return window.top === window
        })
          , d = f
          , g = a && r(function() {
            return /clienttype=cross/.test(window.location.href)
        })
          , h = g
          , m = a && !c && !g
          , v = m
          , w = !1
          , y = !1
          , b = !1
          , _ = !w && !y && !b
          , x = !1;
        if (!i) {
            x = /wegame\.com$/.test(window.location.host)
        }
        var k = !(i || !w) && x
          , A = !k
          , T = k
    }
    .call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    var r = n(22)
      , o = n(7)
      , i = n(74)
      , a = n(6)
      , s = n(10)
      , c = n(75)
      , u = n(27)
      , l = n(81)
      , p = n(2)("iterator")
      , f = !([].keys && "next"in [].keys())
      , d = function() {
        return this
    };
    e.exports = function(e, t, n, g, h, m, v) {
        c(n, t, g);
        var w, y, b, _ = function(e) {
            if (!f && e in T)
                return T[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, x = t + " Iterator", k = "values" == h, A = !1, T = e.prototype, q = T[p] || T["@@iterator"] || h && T[h], C = q || _(h), L = h ? k ? _("entries") : C : void 0, S = "Array" == t ? T.entries || q : q;
        if (S && (b = l(S.call(new e))) !== Object.prototype && b.next && (u(b, x, !0),
        r || "function" == typeof b[p] || a(b, p, d)),
        k && q && "values" !== q.name && (A = !0,
        C = function() {
            return q.call(this)
        }
        ),
        r && !v || !f && !A && T[p] || a(T, p, C),
        s[t] = C,
        s[x] = d,
        h)
            if (w = {
                values: k ? C : _("values"),
                keys: m ? C : _("keys"),
                entries: L
            },
            v)
                for (y in w)
                    y in T || i(T, y, w[y]);
            else
                o(o.P + o.F * (f || A), t, w);
        return w
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    var r = n(78)
      , o = n(40);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(16);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t, n) {
    var r = n(20)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(1)
      , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(22) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t, n) {
    var r = n(1).document;
    e.exports = r && r.documentElement
}
, function(e, t, n) {
    var r = n(21);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t, n) {
    var r = n(16)
      , o = n(2)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }())
      , a = function(e, t) {
        try {
            return e[t]
        } catch (e) {}
    };
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(13)
      , i = n(2)("species");
    e.exports = function(e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? t : o(n)
    }
}
, function(e, t, n) {
    var r, o, i, a = n(12), s = n(92), c = n(41), u = n(24), l = n(1), p = l.process, f = l.setImmediate, d = l.clearImmediate, g = l.MessageChannel, h = l.Dispatch, m = 0, v = {}, w = function() {
        var e = +this;
        if (v.hasOwnProperty(e)) {
            var t = v[e];
            delete v[e],
            t()
        }
    }, y = function(e) {
        w.call(e.data)
    };
    f && d || (f = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return v[++m] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }
        ,
        r(m),
        m
    }
    ,
    d = function(e) {
        delete v[e]
    }
    ,
    "process" == n(16)(p) ? r = function(e) {
        p.nextTick(a(w, e, 1))
    }
    : h && h.now ? r = function(e) {
        h.now(a(w, e, 1))
    }
    : g ? (o = new g,
    i = o.port2,
    o.port1.onmessage = y,
    r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }
    ,
    l.addEventListener("message", y, !1)) : r = "onreadystatechange"in u("script") ? function(e) {
        c.appendChild(u("script")).onreadystatechange = function() {
            c.removeChild(this),
            w.call(e)
        }
    }
    : function(e) {
        setTimeout(a(w, e, 1), 0)
    }
    ),
    e.exports = {
        set: f,
        clear: d
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(8)
      , i = n(28);
    e.exports = function(e, t) {
        if (r(e),
        o(t) && t.constructor === e)
            return t;
        var n = i.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return t = {
            exports: {}
        },
        e(t, t.exports),
        t.exports
    }
    function o(e, t, n, r, o, i, a) {
        try {
            var s = e[i](a)
              , c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
    }
    function i(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise(function(r, i) {
                function a(e) {
                    o(c, r, i, a, s, "next", e)
                }
                function s(e) {
                    o(c, r, i, a, s, "throw", e)
                }
                var c = e.apply(t, n);
                a(void 0)
            }
            )
        }
    }
    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }
    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
    }
    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach(function(t) {
                O(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
    }
    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach(function(t) {
                O(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n.d(t, "baseRequest", function() {
        return j
    }),
    n.d(t, "feedsRequest", function() {
        return N
    }),
    n.d(t, "feedsUpload", function() {
        return F
    }),
    n.d(t, "imRequest", function() {
        return G
    }),
    n.d(t, "railRequest", function() {
        return E
    }),
    n.d(t, "webdRequest", function() {
        return U
    });
    var f = n(107)
      , d = n.n(f)
      , g = n(124)
      , h = (n.n(g),
    n(57))
      , m = (n.n(h),
    n(125))
      , v = n.n(m);
    n.d(t, "rawRequest", function() {
        return d.a
    });
    var w = r(function(e) {
        function t(n) {
            "@babel/helpers - typeof";
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = t = function(e) {
                return typeof e
            }
            : e.exports = t = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            t(n)
        }
        e.exports = t
    })
      , y = r(function(e) {
        var t = function(e) {
            function t(e, t, n, o) {
                var i = t && t.prototype instanceof r ? t : r
                  , a = Object.create(i.prototype)
                  , s = new f(o || []);
                return a._invoke = c(e, n, s),
                a
            }
            function n(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            function r() {}
            function o() {}
            function i() {}
            function a(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }
            function s(e, t) {
                function r(o, i, a, s) {
                    var c = n(e[o], e, i);
                    if ("throw" !== c.type) {
                        var u = c.arg
                          , l = u.value;
                        return l && "object" === w(l) && v.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
                            r("next", e, a, s)
                        }, function(e) {
                            r("throw", e, a, s)
                        }) : t.resolve(l).then(function(e) {
                            u.value = e,
                            a(u)
                        }, function(e) {
                            return r("throw", e, a, s)
                        })
                    }
                    s(c.arg)
                }
                function o(e, n) {
                    function o() {
                        return new t(function(t, o) {
                            r(e, n, t, o)
                        }
                        )
                    }
                    return i = i ? i.then(o, o) : o()
                }
                var i;
                this._invoke = o
            }
            function c(e, t, r) {
                var o = k;
                return function(i, a) {
                    if (o === T)
                        throw new Error("Generator is already running");
                    if (o === q) {
                        if ("throw" === i)
                            throw a;
                        return g()
                    }
                    for (r.method = i,
                    r.arg = a; ; ) {
                        var s = r.delegate;
                        if (s) {
                            var c = u(s, r);
                            if (c) {
                                if (c === C)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === k)
                                throw o = q,
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        o = T;
                        var l = n(e, t, r);
                        if ("normal" === l.type) {
                            if (o = r.done ? q : A,
                            l.arg === C)
                                continue;
                            return {
                                value: l.arg,
                                done: r.done
                            }
                        }
                        "throw" === l.type && (o = q,
                        r.method = "throw",
                        r.arg = l.arg)
                    }
                }
            }
            function u(e, t) {
                var r = e.iterator[t.method];
                if (r === h) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = h,
                        u(e, t),
                        "throw" === t.method))
                            return C;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return C
                }
                var o = n(r, e.iterator, t.arg);
                if ("throw" === o.type)
                    return t.method = "throw",
                    t.arg = o.arg,
                    t.delegate = null,
                    C;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = h),
                t.delegate = null,
                C) : i : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                C)
            }
            function l(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function p(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function f(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(l, this),
                this.reset(!0)
            }
            function d(e) {
                if (e) {
                    var t = e[b];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var n = -1
                          , r = function t() {
                            for (; ++n < e.length; )
                                if (v.call(e, n))
                                    return t.value = e[n],
                                    t.done = !1,
                                    t;
                            return t.value = h,
                            t.done = !0,
                            t
                        };
                        return r.next = r
                    }
                }
                return {
                    next: g
                }
            }
            function g() {
                return {
                    value: h,
                    done: !0
                }
            }
            var h, m = Object.prototype, v = m.hasOwnProperty, y = "function" == typeof Symbol ? Symbol : {}, b = y.iterator || "@@iterator", _ = y.asyncIterator || "@@asyncIterator", x = y.toStringTag || "@@toStringTag";
            e.wrap = t;
            var k = "suspendedStart"
              , A = "suspendedYield"
              , T = "executing"
              , q = "completed"
              , C = {}
              , L = {};
            L[b] = function() {
                return this
            }
            ;
            var S = Object.getPrototypeOf
              , j = S && S(S(d([])));
            j && j !== m && v.call(j, b) && (L = j);
            var O = i.prototype = r.prototype = Object.create(L);
            return o.prototype = O.constructor = i,
            i.constructor = o,
            i[x] = o.displayName = "GeneratorFunction",
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : (e.__proto__ = i,
                x in e || (e[x] = "GeneratorFunction")),
                e.prototype = Object.create(O),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            a(s.prototype),
            s.prototype[_] = function() {
                return this
            }
            ,
            e.AsyncIterator = s,
            e.async = function(n, r, o, i, a) {
                void 0 === a && (a = Promise);
                var c = new s(t(n, r, o, i),a);
                return e.isGeneratorFunction(r) ? c : c.next().then(function(e) {
                    return e.done ? e.value : c.next()
                })
            }
            ,
            a(O),
            O[x] = "Generator",
            O[b] = function() {
                return this
            }
            ,
            O.toString = function() {
                return "[object Generator]"
            }
            ,
            e.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            e.values = d,
            f.prototype = {
                constructor: f,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = h,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = h,
                    this.tryEntries.forEach(p),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && v.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = h)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0]
                      , t = e.completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    function t(t, r) {
                        return i.type = "throw",
                        i.arg = e,
                        n.next = t,
                        r && (n.method = "next",
                        n.arg = h),
                        !!r
                    }
                    if (this.done)
                        throw e;
                    for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = v.call(o, "catchLoc")
                              , s = v.call(o, "finallyLoc");
                            if (a && s) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && v.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = e,
                    i.arg = t,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    C) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    C
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            p(n),
                            C
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                p(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: d(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = h),
                    C
                }
            },
            e
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    })
      , b = y
      , _ = i
      , x = function(e) {
        return e ? Object.keys(e).map(function(t) {
            return "".concat(t, "=").concat(e[t], ";")
        }).join(" ") : ""
    }
      , k = "undefined" != typeof window
      , A = {
        timeout: 5e3
    };
    if (!k) {
        var T = new h({
            maxSockets: 100,
            maxFreeSockets: 10,
            timeout: 6e4,
            freeSocketTimeout: 3e4
        })
          , q = new h.HttpsAgent({
            maxSockets: 100,
            maxFreeSockets: 10,
            timeout: 6e4,
            freeSocketTimeout: 3e4
        });
        A.httpAgent = T,
        A.httpsAgent = q
    }
    var C = d.a.create(A)
      , L = {}
      , S = function(e) {
        var t = e.cacheable
          , n = e.cacheKey;
        if (!k || !t)
            return {
                cacheable: !1
            };
        if (!n)
            throw new Error('"cacheKey" must be provided for cacheable request');
        return {
            cacheable: !0,
            cacheKey: n
        }
    }
      , j = function() {
        var e = _(b.mark(function e() {
            var t, n, r, o, i, a, s, c, u = arguments;
            return b.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (t = u.length > 0 && void 0 !== u[0] ? u[0] : {},
                        n = t.camelCase,
                        r = S(t),
                        o = r.cacheable,
                        i = r.cacheKey,
                        !o || !L[i]) {
                            e.next = 5;
                            break
                        }
                        return e.abrupt("return", Promise.resolve(L[i]));
                    case 5:
                        return t.cookies && Object.keys(t.cookies).length > 0 && (t.headers = t.headers || {},
                        t.headers.Cookie = x(t.cookies),
                        delete t.cookies),
                        e.prev = 6,
                        e.next = 9,
                        C.request(t);
                    case 9:
                        return a = e.sent,
                        s = a.data,
                        c = n ? Object(g.camelKeys)(s) : s,
                        o && (L[i] = c),
                        e.abrupt("return", Promise.resolve(c));
                    case 16:
                        return e.prev = 16,
                        e.t0 = e.catch(6),
                        e.abrupt("return", Promise.reject(e.t0));
                    case 19:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[6, 16]])
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }();
    j.instance = C;
    var O = s
      , P = {
        method: "post",
        responseType: "json"
    }
      , E = function() {
        var e = _(b.mark(function e() {
            var t, n, r, o, i = arguments;
            return b.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return t = i.length > 0 && void 0 !== i[0] ? i[0] : {},
                        n = u({}, P, {}, t),
                        e.prev = 2,
                        e.next = 5,
                        j(n);
                    case 5:
                        if (r = e.sent,
                        o = r.result || {},
                        !o.error_code || !Number(o.error_code)) {
                            e.next = 11;
                            break
                        }
                        return e.abrupt("return", Promise.reject(r));
                    case 11:
                        if (void 0 !== o.error_code || !Number(o)) {
                            e.next = 13;
                            break
                        }
                        return e.abrupt("return", Promise.reject(r));
                    case 13:
                        return e.abrupt("return", Promise.resolve(r));
                    case 16:
                        return e.prev = 16,
                        e.t0 = e.catch(2),
                        e.abrupt("return", Promise.reject(e.t0));
                    case 19:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[2, 16]])
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }();
    E.instance = j.instance;
    var D = {
        responseType: "json"
    }
      , M = function(e, t, n) {
        if ("get" === e)
            return {
                params: t
            };
        if (n)
            return {
                data: t
            };
        var r = new FormData;
        return Object.keys(t).forEach(function(e) {
            r.set(e, t[e])
        }),
        {
            data: r
        }
    }
      , B = function(e) {
        return "get" === e ? {} : {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    }
      , I = function(e) {
        return (e.type || e.method || "GET").toLowerCase()
    }
      , R = function(e) {
        return e.timeout ? {
            timeout: e.timeout
        } : {}
    }
      , N = function() {
        var e = _(b.mark(function e() {
            var t, n, r, o, i, a, s, c, u = arguments;
            return b.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (t = u.length > 0 && void 0 !== u[0] ? u[0] : {},
                        t.data = t.data || {},
                        n = I(t),
                        r = t.tourist,
                        o = "GET" === n ? t.params || t.data : t.data,
                        i = t.appType || "wegame_feeds",
                        a = t.url || "/api/forum/lua/".concat(i, "/").concat(t.api),
                        t.withoutUid) {
                            e.next = 12;
                            break
                        }
                        if ((s = o.uid || v.a.get("tgp_id")) || r) {
                            e.next = 11;
                            break
                        }
                        throw new Error("uid or tgpid are required");
                    case 11:
                        o.uid = s || 0;
                    case 12:
                        return e.next = 14,
                        j(p({
                            url: a,
                            method: n
                        }, D, {}, R(t), {}, M(n, {
                            p: JSON.stringify(Object(g.snakeKeys)(o))
                        }), {}, B(n)));
                    case 14:
                        if (c = e.sent) {
                            e.next = 17;
                            break
                        }
                        return e.abrupt("return", Promise.reject(c));
                    case 17:
                        return e.abrupt("return", Object(g.camelKeys)(c && c.data ? c.data : c || {}));
                    case 18:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }();
    N.instance = j.instance;
    var U = function() {
        var e = _(b.mark(function e() {
            var t, n, r, o, i, a = arguments;
            return b.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : {},
                        n = I(t),
                        r = t.url,
                        o = t.api,
                        e.next = 5,
                        j(p({
                            url: r || "/api/webd".concat(o),
                            method: n
                        }, D, {}, R(t), {}, M(n, t.data || t.params || {}), {}, B(n)));
                    case 5:
                        return i = e.sent,
                        e.abrupt("return", i);
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }();
    U.instance = j.instance;
    var G = function() {
        var e = _(b.mark(function e() {
            var t, n, r, o, i, a = arguments;
            return b.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : {},
                        n = I(t),
                        r = "GET" === n ? t.params || t.data : t.data,
                        o = t.url || "/api/mwg_im/lua/proxy/index/mwg_org_svr/".concat(t.api),
                        e.next = 6,
                        j(p({
                            url: o,
                            method: n
                        }, D, {}, R(t), {}, M(n, r, !0)));
                    case 6:
                        if (!(i = e.sent) || 0 === Number(i.code)) {
                            e.next = 9;
                            break
                        }
                        return e.abrupt("return", Promise.reject(i));
                    case 9:
                        return e.abrupt("return", Object(g.camelKeys)(i && i.data ? i.data : i || {}));
                    case 10:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }();
    G.instance = j.instance;
    var F = function() {
        var e = _(b.mark(function e() {
            var t, n, r, o, i, s, c, u, l, f, g, h, m, v, w, y = arguments;
            return b.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return t = y.length > 0 && void 0 !== y[0] ? y[0] : {},
                        n = t.file,
                        r = t.bussiness,
                        o = void 0 === r ? "feeds" : r,
                        i = t.app_id,
                        s = t.onprogress,
                        c = t.game_id,
                        u = t.withoutWaterMark,
                        l = void 0 === u ? 1 : u,
                        f = t.extra,
                        g = void 0 === f ? "" : f,
                        h = new FormData,
                        m = [(new Date).getTime(), o, a()].join("_"),
                        v = "/api/wpicupload/platform/snappic/upload.fcg?from=".concat(o, "&without_water_mark=").concat(l),
                        h.append("filename", m),
                        h.append("img", n),
                        h.append("app_id", i),
                        c && h.append("game_id", c),
                        g && h.append("extra", g),
                        e.next = 12,
                        d.a.post(v, h, p({}, D, {}, R(t), {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            onUploadProgress: s
                        }));
                    case 12:
                        if (!(w = e.sent) || !w.data) {
                            e.next = 15;
                            break
                        }
                        return e.abrupt("return", Promise.resolve(w.data));
                    case 15:
                        return e.abrupt("return", Promise.reject(w));
                    case 16:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }()
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var o = n(0);
    e.exports = function(e, t, n) {
        if (!t)
            return e;
        var i;
        if (n)
            i = n(t);
        else if (o.isURLSearchParams(t))
            i = t.toString();
        else {
            var a = [];
            o.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (o.isArray(e) ? t += "[]" : e = [e],
                o.forEach(e, function(e) {
                    o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)),
                    a.push(r(t) + "=" + r(e))
                }))
            }),
            i = a.join("&")
        }
        if (i) {
            var s = e.indexOf("#");
            -1 !== s && (e = e.slice(0, s)),
            e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function r(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var o = n(0)
          , i = n(113)
          , a = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
          , s = {
            adapter: function() {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = n(53) : void 0 !== t && "[object process]" === Object.prototype.toString.call(t) && (e = n(53)),
                e
            }(),
            transformRequest: [function(e, t) {
                return i(t, "Accept"),
                i(t, "Content-Type"),
                o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"),
                JSON.stringify(e)) : e
            }
            ],
            transformResponse: [function(e) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        s.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        o.forEach(["delete", "get", "head"], function(e) {
            s.headers[e] = {}
        }),
        o.forEach(["post", "put", "patch"], function(e) {
            s.headers[e] = o.merge(a)
        }),
        e.exports = s
    }
    ).call(t, n(29))
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(114)
      , i = n(50)
      , a = n(116)
      , s = n(119)
      , c = n(120)
      , u = n(54);
    e.exports = function(e) {
        return new Promise(function(t, l) {
            var p = e.data
              , f = e.headers;
            r.isFormData(p) && delete f["Content-Type"];
            var d = new XMLHttpRequest;
            if (e.auth) {
                var g = e.auth.username || ""
                  , h = e.auth.password || "";
                f.Authorization = "Basic " + btoa(g + ":" + h)
            }
            var m = a(e.baseURL, e.url);
            if (d.open(e.method.toUpperCase(), i(m, e.params, e.paramsSerializer), !0),
            d.timeout = e.timeout,
            d.onreadystatechange = function() {
                if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders"in d ? s(d.getAllResponseHeaders()) : null
                      , r = e.responseType && "text" !== e.responseType ? d.response : d.responseText
                      , i = {
                        data: r,
                        status: d.status,
                        statusText: d.statusText,
                        headers: n,
                        config: e,
                        request: d
                    };
                    o(t, l, i),
                    d = null
                }
            }
            ,
            d.onabort = function() {
                d && (l(u("Request aborted", e, "ECONNABORTED", d)),
                d = null)
            }
            ,
            d.onerror = function() {
                l(u("Network Error", e, null, d)),
                d = null
            }
            ,
            d.ontimeout = function() {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                l(u(t, e, "ECONNABORTED", d)),
                d = null
            }
            ,
            r.isStandardBrowserEnv()) {
                var v = n(121)
                  , w = (e.withCredentials || c(m)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                w && (f[e.xsrfHeaderName] = w)
            }
            if ("setRequestHeader"in d && r.forEach(f, function(e, t) {
                void 0 === p && "content-type" === t.toLowerCase() ? delete f[t] : d.setRequestHeader(t, e)
            }),
            r.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
            e.responseType)
                try {
                    d.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType)
                        throw t
                }
            "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken && e.cancelToken.promise.then(function(e) {
                d && (d.abort(),
                l(e),
                d = null)
            }),
            void 0 === p && (p = null),
            d.send(p)
        }
        )
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(115);
    e.exports = function(e, t, n, o, i) {
        var a = new Error(e);
        return r(a, t, n, o, i)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t) {
        t = t || {};
        var n = {}
          , o = ["url", "method", "params", "data"]
          , i = ["headers", "auth", "proxy"]
          , a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        r.forEach(o, function(e) {
            void 0 !== t[e] && (n[e] = t[e])
        }),
        r.forEach(i, function(o) {
            r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : void 0 !== t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : void 0 !== e[o] && (n[o] = e[o])
        }),
        r.forEach(a, function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        });
        var s = o.concat(i).concat(a)
          , c = Object.keys(t).filter(function(e) {
            return -1 === s.indexOf(e)
        });
        return r.forEach(c, function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        }),
        n
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    r.prototype.__CANCEL__ = !0,
    e.exports = r
}
, function(e, t) {
    function n() {}
    e.exports = n,
    e.exports.HttpsAgent = n
}
, function(e, t, n) {
    "use strict";
    var r = String.prototype.replace
      , o = /%20/g
      , i = n(30)
      , a = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    };
    e.exports = i.assign({
        default: a.RFC3986,
        formatters: {
            RFC1738: function(e) {
                return r.call(e, o, "+")
            },
            RFC3986: function(e) {
                return String(e)
            }
        }
    }, a)
}
, function(e, t, n) {
    "use strict";
    var r = n(60)
      , o = n.n(r)
      , i = n(139)
      , a = n.n(i)
      , s = n(19)
      , c = n.n(s)
      , u = n(145)
      , l = (n.n(u),
    n(149))
      , p = (n.n(l),
    n(17))
      , f = n.n(p)
      , d = n(4)
      , g = n.n(d)
      , h = n(152)
      , m = n(66)
      , v = n(32)
      , w = n(162)
      , y = n(163)
      , b = n(164)
      , _ = {
        zh_CN: w.a,
        zh_HK: y.a,
        en_US: b.a
    }
      , x = {
        zh_CN: "zh-cn",
        zh_HK: "zh-hk",
        en_US: "en"
    };
    t.a = {
        props: ["options", "lang"],
        data: function() {
            return {
                show_pic_verify: !1,
                wxLoginDivId: "miloLoginWX" + Math.ceil(1e4 * Math.random()),
                visible: !1,
                mailReg: /^\w+([-+.]\w+)*[a-zA-Z0-9]*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                isWegameX: f.a.isWeGameX,
                channelIconKey: {
                    wx: "wechat",
                    qc: "qq"
                },
                loginChannels: {
                    mail: 1,
                    fb: 1,
                    qq: 1,
                    wx: 1
                },
                curLoginType: "mail",
                ptLoginUrl: "",
                logined: !1,
                loginReflush: !1,
                loginBackUrl: location.href + (location.href.indexOf("?") > 0 ? "&" : "?"),
                loginForBiz: !0,
                loginPopup: !0,
                loginDefaultTab: "",
                form: {
                    mailAddress: "",
                    mailPassword: "",
                    mailRemember: !1
                },
                errorText: {
                    mail: "",
                    password: ""
                },
                captcha: null,
                captcha_randstr: null,
                captcha_ticket: null,
                wss: void 0,
                seqid: 0,
                socketError: 0,
                socketTimer: void 0,
                cli: 0,
                isInClient: v.isWeGame,
                flag: {
                    kickoff: !1,
                    logintip: !1
                },
                kickoffaction: "",
                logincity: this.trans("unknown") + this.trans("logintipC"),
                firstlogin: !0,
                twofa: {
                    src: "",
                    show: !1
                },
                unregister: {
                    show: !1,
                    apply_time: 0,
                    left_lock_days: 0
                },
                checkLoginFailCount: 0,
                report: null
            }
        },
        computed: {
            isMobile: function() {
                return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            },
            loginChannelsLength: function() {
                var e = 0;
                for (var t in this.loginChannels)
                    this.loginChannels[t] && (e += 1);
                return e
            },
            gotoForget: function() {
                return {
                    href: this.options && this.options.forgetpasswdurl || m.a.forgetpasswdurl,
                    target: this.options && this.options.forgetpasswdblank ? "_self" : "_blank"
                }
            },
            gotoJoin: function() {
                return {
                    href: this.options && this.options.regmailurl || m.a.regmailurl,
                    target: this.options && this.options.regmailurlblank ? "_blank" : "_self"
                }
            },
            isdevplatform: function() {
                return -1 != window.location.href.indexOf("developer.wegame.com")
            },
            kickofftip: function() {
                switch (this.kickoffaction) {
                case "password_changed":
                default:
                    return this.trans("kickoff.passwordchange")
                }
            },
            developerSpecialStyle: function() {
                return this.isdevplatform ? {
                    "margin-right": "12px"
                } : {}
            }
        },
        watch: {
            lang: function(e) {
                this.switchLoginType(this.curLoginType)
            },
            options: function(e) {
                e && (this.reloadOptions(e),
                this.loginPopup || (this.visible = !0))
            },
            loginDefaultTab: function(e) {
                e && this.switchLoginType(e)
            },
            "twofa.show": {
                handler: function(e) {
                    var t = this
                      , n = document.getElementById("layer_login_2fa");
                    if (e) {
                        if (n)
                            return;
                        var r = document.createElement("iframe");
                        r.style = "border:none;width:100%;height:100%;",
                        r.src = this.twofa.src,
                        r.id = "login_2fa";
                        var o = document.createElement("a");
                        o.href = "javascript:void(0);",
                        o.innerText = "x",
                        o.onclick = function() {
                            t.closeTwofa()
                        }
                        ,
                        o.classList = "twofa_close";
                        var i = document.createElement("div");
                        i.style = "position: absolute;height: 41px;width: 100%;",
                        i.appendChild(o);
                        var a = document.createElement("div");
                        a.style = "border:none;width: 390px;height: 256px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);",
                        a.appendChild(i),
                        a.appendChild(r);
                        var s = document.createElement("div");
                        s.style = "position: fixed;overflow: hidden;width: 100%;height: 100%;top: 0;left: 0;background: rgba(0,0,0,0.5);z-index: 9999;",
                        s.id = "layer_login_2fa",
                        s.appendChild(a),
                        document.body.appendChild(s)
                    } else
                        n.remove()
                }
            }
        },
        created: function() {
            debugger;
            var e = this;
            if (v.isBrowser && "www.wegame.com.cn" !== location.hostname)
                throw this.visible = !1,
                new Error("[login-sdk] not support current domain");
            if (!window.__TencentCaptchaExists__) {
                var t = document.getElementsByTagName("head")[0]
                  , n = document.createElement("script");
                n.src = "https://ssl.captcha.qq.com/TCaptcha.js",
                t.insertBefore(n, t.lastChild)
            }
            if (window.WeLibReport && (this.report = window.WeLibReport.init({
                main: "wegame_login",
                sub: "index",
                keys: ["module", "action", "result"]
            })),
            this.logined = h.a.isLogin(),
            this.loginChannels = f.a.setting.login_channels,
            this.logined && (h.a.proxyWinWaiter ? h.a.proxyWinWaiter.then(function() {
                e.loginFinish("alreadyLogin")
            }) : this.loginFinish("alreadyLogin")),
            this.options && this.reloadOptions(this.options),
            !this.loginDefaultTab && (this.loginDefaultTab = f.a.setting.defaulttab,
            !this.loginChannels[this.loginDefaultTab]))
                for (var r in this.loginChannels)
                    if (this.loginChannels[r]) {
                        this.loginDefaultTab = r;
                        break
                    }
            window.addEventListener("message", function(t) {
                t && "wegame_login_finish" == t.data && e.loginFinish(),
                t && t.data.event && "wegame_login_unregister" === t.data.event && e.showUnregister(t.data.data),
                t && t.data.event && "wegame_qq_login_need2fa" === t.data.event && (t.data.data.account_type = 0,
                e.showTwoFA(t.data.data))
            }),
            this.loginPopup || (this.visible = !0,
            this.switchLoginType(this.loginDefaultTab))
            e.loginFinish("alreadyLogin");
        },
        beforeDestroy: function() {
            this.wss && this.closeSocket()
        },
        methods: {
            trans: function(e, t) {
                for (var n = _[this.lang ? this.lang : "zh_CN"], r = e.split("."), o = n, i = 0; i < r.length; )
                    o[r[i]] && (o = o[r[i]]),
                    i += 1;
                if ("string" == typeof o) {
                    if (t)
                        for (var a in t) {
                            var s = new RegExp("{" + a + "}","ig");
                            o = o.replace(s, t[a])
                        }
                    return o
                }
                return e
            },
            reloadOptions: function(e) {
                var t = Object.prototype.hasOwnProperty;
                f.a.init(e),
                t.call(e, "reflush") && (this.loginReflush = e.reflush),
                t.call(e, "backUrl") && (this.loginBackUrl = e.backUrl + (e.backUrl.indexOf("?") > 0 ? "&" : "?")),
                t.call(e, "popup") && (this.loginPopup = e.popup),
                t.call(e, "channels") && (this.loginChannels = e.channels),
                t.call(e, "biz") && (this.loginForBiz = e.biz),
                t.call(e, "defaultTab") && (this.loginDefaultTab = e.defaultTab)
            },
            reset: function() {
                this.errorText.mail = "",
                this.errorText.password = "",
                this.form.mailAddress = "",
                this.form.mailPassword = ""
            },
            popup: function() {
                this.switchLoginType(this.loginDefaultTab),
                this.visible = !0
            },
            popdown: function() {
                this.switchLoginType("mail"),
                this.visible = !1,
                this.reset(),
                h.a.cancel()
            },
            isLogin: function() {
                return h.a.isLogin()
            },
            logout: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = t.keepStyle
                  , r = void 0 !== n && n;
                return h.a.isLogin() ? (clearTimeout(this.cli),
                this.checkLoginFailCount = 0,
                this.closeSocket("logout"),
                h.a.logout().then(function() {
                    return e.logined = h.a.isLogin(),
                    r || e.$emit("logout"),
                    c.a.resolve("logout")
                }).catch(function(t) {
                    return e.logined = h.a.isLogin(),
                    r || e.$emit("logout"),
                    c.a.reject(t)
                })) : (this.$emit("logout"),
                c.a.resolve("no logined"))
            },
            getUserInfo: function() {
                if (!h.a.isLogin())
                    return null;
                var e = h.a.getLocalstorage("tgp_userinfo");
                return e = f.a.util.unSerialize(e),
                {
                    tgp_id: e.uid || g.a.getCookie("tgp_id"),
                    faceurl: e.logo,
                    nick: e.nick,
                    channel: this.curLoginType
                }
            },
            getLoginUser: function(e) {
                return h.a.getLoginUser(e)
            },
            getMobileLoginUrl: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return h.a.getMobileLoginUrl(a()({
                    lang: this.lang,
                    reflush: this.loginReflush,
                    succurl: this.loginBackUrl + "loginop=succ",
                    failurl: this.loginBackUrl + "loginop=fail",
                    session: !0
                }, e))
            },
            switchLoginType: function(e) {
                switch (this.curLoginType = e,
                e) {
                case "qq":
                    this.ptLoginUrl = h.a.getPtLoginUrl({
                        lang: this.lang,
                        reflush: this.loginReflush,
                        succurl: this.loginBackUrl + "loginop=succ",
                        failurl: this.loginBackUrl + "loginop=fail",
                        session: !0
                    });
                    break;
                case "wx":
                    h.a.showWXloginQRCode({
                        wxLoginDivId: this.wxLoginDivId,
                        reflush: this.loginReflush,
                        succurl: this.loginBackUrl + "loginop=succ",
                        failurl: this.loginBackUrl + "loginop=fail",
                        session: !0
                    })
                }
                "qq" != e && (this.ptLoginUrl = "")
            },
            loginByFacebook: function() {
                var e = this;
                h.a.openFacebookDialog({
                    lang: this.lang,
                    reflush: this.loginReflush,
                    succurl: this.loginBackUrl + "loginop=succ",
                    failurl: this.loginBackUrl + "loginop=fail",
                    session: !0
                }).then(function() {
                    e.loginFinish()
                }).catch(function() {})
            },
            checkMailAddress: function() {
                return this.visible && !this.mailReg.test(this.form.mailAddress) ? (this.errorText.mail = this.trans("mailformaterr"),
                !1) : (this.errorText.mail = "",
                !0)
            },
            checkMailPassword: function() {
                return this.visible && !this.form.mailPassword ? (this.errorText.password = this.trans("passwdempty"),
                !1) : (this.errorText.password = "",
                !0)
            },
            tryLoginByMail: function(e) {
                13 == e.keyCode && this.loginByMail()
            },
            loginByMail: function() {
                var e = this;
                this.checkMailAddress() && this.checkMailPassword() && (this.show_pic_verify && this.captcha_randstr && this.captcha_ticket ? (this.form.ticket = this.captcha_ticket,
                this.form.randstr = this.captcha_randstr) : (this.form.ticket = null,
                this.form.randstr = null),
                h.a.loginByMail(this.form).then(function() {
                    e.captcha = null,
                    e.captcha_randstr = null,
                    e.captcha_ticket = null,
                    e.show_pic_verify = !1,
                    e.reset(),
                    e.loginFinish()
                }).catch(function(t) {
                    var n = {
                        10600: e.trans("backmailpwderr"),
                        10601: e.trans("backmailnotreg"),
                        10602: e.trans("backmailformaterr"),
                        10603: e.trans("backpwderr"),
                        10604: e.isdevplatform ? e.trans("accountlockdevplatform") : e.trans("accountlock"),
                        10605: e.trans("backpwderr")
                    };
                    if (e.captcha = null,
                    e.captcha_randstr = null,
                    e.captcha_ticket = null,
                    e.show_pic_verify = !1,
                    10605 == t.result) {
                        if (t.data && "show_pic_verify_now" === t.data.state) {
                            var r = e;
                            e.show_pic_verify = !0,
                            new TencentCaptcha("2066407696",function(e) {
                                0 === e.ret && (r.captcha = 0,
                                r.captcha_ticket = e.ticket,
                                r.captcha_randstr = e.randstr,
                                r.loginByMail())
                            }
                            ,{
                                forceLang: x[e.lang]
                            }).show()
                        }
                    } else
                        8010002 == t.result ? t.data && "need_2fa" == t.data.state && (t.data.account_id = e.form.mailAddress,
                        t.data.account_type = 1,
                        e.showTwoFA(t.data)) : 10603 == t.result ? (e.errorText.password = e.trans("backpwderr"),
                        t.data && void 0 !== t.data.today_left_login_times && (e.errorText.password += e.trans("maxtrytime", {
                            trytimes: t.data.max_try_times || 10
                        }) + e.trans("lefttrytime", {
                            lefttimes: t.data.today_left_login_times
                        }))) : 10604 == t.result ? e.errorText.password = e.isdevplatform ? e.trans("accountlockdevplatform") : e.trans("accountlock") : e.errorText.mail = n[t.result] || e.trans("commerr", {
                            result: t.result
                        });
                    console.log(t)
                }))
            },
            doLoginByMail: function() {
                var e = this
                  , t = this.form.mailAddress;
                h.a.loginByMail(this.form).then(function() {
                    e.reset(),
                    e.loginFinish()
                }).catch(function(n) {
                    var r = {
                        10600: e.trans("backmailpwderr"),
                        10601: e.trans("backmailnotreg"),
                        10602: e.trans("backmailformaterr"),
                        10603: e.trans("backpwderr"),
                        10604: e.isdevplatform ? e.trans("accountlockdevplatform") : e.trans("accountlock")
                    };
                    if (e.show_pic_verify = !!n.data && "show_pic_verify" == n.data.state,
                    e.show_pic_verify) {
                        var o = (new Date).setHours(24, 0, 0, 0) - 1e3;
                        h.a.saveLocalstorage("wegame_login_show_pic_verify_" + t, '{"show":1,"date":' + o + "}")
                    } else
                        h.a.saveLocalstorage("wegame_login_show_pic_verify_" + t, "{}");
                    10603 == n.result ? (e.errorText.password = e.trans("backpwderr"),
                    n.data && void 0 !== n.data.today_left_login_times && (e.errorText.password += e.trans("maxtrytime", {
                        trytimes: n.data.max_try_times || 10
                    }) + e.trans("lefttrytime", {
                        lefttimes: n.data.today_left_login_times
                    }))) : 10604 == n.result ? e.errorText.password = e.isdevplatform ? e.trans("accountlockdevplatform") : e.trans("accountlock") : e.errorText.mail = r[n.result] || e.trans("commerr", {
                        result: n.result
                    }),
                    console.log(n)
                })
            },
            loginFinish: function(e) {
                debugger;

                var t = this;


                // t.clearTicketStorage()
                // t.updateLastTicketTime()
                // t.loginDone(e)
                e ? (this.updateLastRequestTime(),
                this.loginDone(e)) : setTimeout(function() {
                    h.a.getLoginUser(!e).then(function() {
                        t.clearTicketStorage(),
                        t.updateLastTicketTime(),
                        t.loginDone(e)
                    }).catch(function(e) {
                        console.log("getLoginUser", e)
                    })
                }, 100),
                this.logined = h.a.isLogin(),
                this.loginPopup && this.popdown(),
                this.isInClient || this.openSocket();

            },
            loginDone: function(e) {
                var t = this
                  , n = h.a.getLocalstorage("tgp_userinfo");
                if (n = f.a.util.unSerialize(n),
                this.setLoginInterval(),
                this.proxyRequest(),
                n && n.logo) {
                    if (String(n.uid) !== String(g.a.getCookie("tgp_id")))
                        return localStorage.removeItem("tgp_userinfo"),
                        void this.loginDone(e);
                    this.emitLogin(e)
                } else
                    h.a.getUserInfo().then(function() {
                        debugger;
                        t.emitLogin(e)
                    }).catch(function(n) {
                        console.log(n),
                        t.emitLogin(e)
                    })
            },
            emitLogin: function(e) {
                var t = h.a.getLocalstorage("tgp_userinfo");
                if (t = f.a.util.unSerialize(t),
                !e && this.loginReflush)
                    try {
                        window.parent != window ? window.parent.location.reload() : location.reload()
                    } catch (e) {
                        location.reload()
                    }
                else
                    this.$emit(e ? "checkLogin" : "login", {
                        tgp_id: t.uid || g.a.getCookie("tgp_id"),
                        faceurl: t.logo,
                        nick: t.nick,
                        channel: this.curLoginType,
                        already: !!e
                    })
            },
            clearMailRemember: function() {
                var e = this;
                this.$nextTick(function() {
                    e.form.mailRemember || h.a.clearMailRemember()
                })
            },
            checkLoginInterval: function() {},
            setLoginInterval: function() {
                var e = this;
                clearTimeout(this.cli);
                var t = Number(localStorage.getItem("ticket_refresh_time"));
                if (!t)
                    return void (this.cli = setTimeout(function() {
                        e.getLoginUser().then(function() {
                            e.checkLoginFailCount = 0,
                            e.setLoginInterval()
                        }).catch(function(t) {
                            if (e.checkLoginFailCount += 1,
                            e.checkLoginFailCount < 2)
                                return void e.setLoginInterval();
                            t && e.$emit("ticketFail", t),
                            e.options.disabledFailLogout || e.logout()
                        })
                    }, 3e6));
                this.cli = setTimeout(function() {
                    var n = (new Date).getTime()
                      , r = Number(localStorage.getItem("last_request_time"))
                      , o = Number(localStorage.getItem("last_check_ticket_time"));
                    if (h.a.isLogin()) {
                        var i = Number(localStorage.getItem("last_ticket_time"));
                        return i + Number(localStorage.getItem("ticket_valid_time")) - 1e3 <= n + 1e3 ? void (e.options.disabledFailLogout || (e.report && e.report(["logout", "ticket_outdate", "emit"]),
                        e.logout({
                            keepStyle: !0
                        }))) : i + 2 * t - 1e3 <= n + 1e3 && o - r > 0 && 0 === e.checkLoginFailCount ? void (e.options.disabledFailLogout || (e.report && e.report(["logout", "refresh_outdate", "emit"]),
                        e.logout({
                            keepStyle: !0
                        }))) : o + t > n ? void e.setLoginInterval() : void (e.checkLoginFailCount > 0 || r - o > 0 && r - o - 1e3 < 2 * t + 1e3 ? (e.report && e.report(["checkLogin", "lastRequest", "emit"]),
                        e.doCheck(!0)) : (e.report && e.report(["checkLogin", "ignore", "emit"]),
                        e.updateLastCheckTicketTime(),
                        e.setLoginInterval()))
                    }
                }, 5e3)
            },
            doCheck: function(e) {
                var t = this;
                this.getLoginUser().then(function() {
                    t.report && t.report(["checkLogin", "success", "emit"]),
                    t.updateLastTicketTime(),
                    t.checkLoginFailCount = 0,
                    t.setLoginInterval()
                }).catch(function(n) {
                    try {
                        t.report && t.report(["checkLogin", "fail", o()(n)])
                    } catch (n) {
                        console.log(n)
                    }
                    if (e)
                        setTimeout(function() {
                            t.updateLastRequestTime(),
                            t.report && t.report(["checkLogin", "fail", "retry"]),
                            t.doCheck()
                        });
                    else {
                        if (t.updateLastCheckTicketTime(),
                        t.setLoginInterval(),
                        t.checkLoginFailCount += 1,
                        t.checkLoginFailCount < 2)
                            return;
                        if (n && t.$emit("ticketFail", n),
                        !t.options.disabledFailLogout)
                            return t.report && t.report(["logout", "ticket_fail", "emit"]),
                            void t.logout({
                                keepStyle: !0
                            })
                    }
                })
            },
            handlerSocket: function(e) {
                try {
                    var t = JSON.parse(e.data)
                      , n = {};
                    switch (t.cmd) {
                    case 1001:
                    case 1002:
                        break;
                    case 1003:
                        this.report && this.report(["logout", "socket", "emit"]),
                        this.logout();
                        break;
                    case 1004:
                        try {
                            n = JSON.parse(t.body)
                        } catch (e) {
                            console.log(e)
                        }
                        "kickoff" == n.message_type && (this.report && this.report(["logout", "kickoff", "emit"]),
                        this.logout(),
                        this.kickoffaction = n.message,
                        this.showKickoffTip()),
                        "login" == n.message_type && (this.firstlogin || (this.logincity = n.message,
                        n.message == this.trans("unknown") && (this.logincity += this.trans("logintipC")),
                        this.showLoginTip()),
                        this.firstlogin = !1)
                    }
                } catch (t) {
                    console.log("invalid socket", e)
                }
            },
            retrySocket: function() {
                var e = this;
                setTimeout(function() {
                    e.openSocket()
                }, 3e3)
            },
            closeSocket: function() {
                clearInterval(this.socketTimer),
                this.wss && (this.wss.onclose = function() {}
                ,
                this.wss.close(),
                this.wss = void 0,
                window.WegameLogin_socket = void 0,
                "event" === this.type && this.retrySocket())
            },
            openSocket: function() {
                var e = this;
                if ("function" == typeof WebSocket) {
                    if (this.socketError > 5)
                        return;
                    if (this.wss && 1 == this.wss.readyState)
                        return;
                    if (window.WegameLogin_socket)
                        return;
                    try {
                        this.wss = new WebSocket("wss://" + document.location.host + "/api/login_ws/ws"),
                        window.WegameLogin_socket = this.wss,
                        this.wss.onclose = function() {
                            e.closeSocket("event")
                        }
                        ,
                        this.wss.onerror = function(t) {
                            console.log("wss error", t),
                            e.closeSocket("error")
                        }
                        ,
                        this.wss.onmessage = function(t) {
                            e.handlerSocket(t)
                        }
                        ,
                        this.wss.onopen = function() {
                            e.seqid = 0,
                            e.socketError = 0,
                            e.wss.send('{"seq_id":1,"cmd":1001,"body":"{\\"login_type\\":0}"}')
                        }
                        ,
                        this.socketTimer = setInterval(function() {
                            e.wss && e.wss.send('{"seq_id":' + e.seqid + ',"cmd":1002,"body":"{\\"seq_id\\":' + (e.seqid += 1) + '}"}')
                        }, 2e4)
                    } catch (e) {
                        this.socketError += 1,
                        console.log("socket err", e)
                    }
                } else
                    console.log("unsupport socket")
            },
            showKickoffTip: function() {
                this.$emit("kickoff"),
                this.options.closeKickoffTip || (this.flag.kickoff = !0)
            },
            showLoginTip: function(e) {
                this.$emit("multilogin"),
                !e && this.options.closeMultiLoginTip || (this.flag.logintip = !0)
            },
            popLoginTip: function(e) {
                this.logincity = e,
                this.showLoginTip(!0)
            },
            closeTwofa: function() {
                this.errorText.password = this.options && this.options.twofatip || this.trans("failVerifyTip"),
                this.twofa.show = !1,
                this.twofa.url = "",
                window.postMessage("cancel")
            },
            showUnregister: function(e) {
                this.unregister.show = !0,
                this.unregister.left_lock_days = e.left_lock_days,
                this.unregister.apply_time = e.apply_time
            },
            loginUnreg: function() {
                "qq" === this.curLoginType && (this.$el.getElementsByTagName("iframe")[0].contentWindow.postMessage("unreg_confirm_login"),
                this.unregister.show = !1),
                "wx" === this.curLoginType && (g.a.setCookie("login_unreg_confirm", "1", "", "/", ".wegame.com.cn"),
                this.closeUnreg())
            },
            closeUnreg: function() {
                var e = this;
                if (this.unregister.show = !1,
                this.report && this.report(["logout", "unreg", "emit"]),
                this.logout(),
                this.loginPopup)
                    this.popdown();
                else {
                    this.reset(),
                    h.a.cancel();
                    var t = this.curLoginType;
                    this.switchLoginType(""),
                    setTimeout(function() {
                        e.switchLoginType(t)
                    })
                }
            },
            clearTicketStorage: function() {
                localStorage.removeItem("last_ticket_time"),
                localStorage.removeItem("last_check_ticket_time"),
                localStorage.removeItem("last_request_time")
            },
            updateLastTicketTime: function() {
                var e = (new Date).getTime();
                localStorage.setItem("last_ticket_time", String(e)),
                localStorage.setItem("last_check_ticket_time", String(e))
            },
            updateLastCheckTicketTime: function() {
                var e = (new Date).getTime();
                localStorage.setItem("last_check_ticket_time", String(e))
            },
            updateLastRequestTime: function(e) {
                var t = (new Date).getTime();
                localStorage.setItem("last_request_time", String(e || t))
            },
            proxyRequest: function() {
                var e = XMLHttpRequest.prototype.send
                  , t = this;
                if (XMLHttpRequest.prototype.send = function() {
                    var n = this.onload
                      , r = (new Date).getTime();
                    this.onload = function(e) {
                        e && e.currentTarget && e.currentTarget.responseURL && -1 !== e.currentTarget.responseURL.indexOf(h.a.getCheckloginUrl()) && (r = localStorage.getItem("last_request_time"));
                        var o = e.currentTarget.responseType || "application/json";
                        "application/json" !== o && "arraybuffer" !== o || t.updateLastRequestTime(r),
                        "function" == typeof n && n.apply(this, arguments)
                    }
                    ,
                    e.apply(this, arguments)
                }
                ,
                window.fetch) {
                    var n = window.fetch;
                    window.fetch = function(e, r) {
                        var o = (new Date).getTime();
                        return n.apply(null, [e, r]).then(function(e) {
                            return e && e.url && -1 !== e.url.indexOf(h.a.getCheckloginUrl()) && (o = localStorage.getItem("last_request_time")),
                            e && e.headers && e.headers.get("content-type").includes("application/json") && t.updateLastRequestTime(o),
                            e
                        }).catch(function(e) {
                            throw e
                        })
                    }
                }
            },
            showTwoFA: function(e) {
                var t = this;
                localStorage.setItem("user_login_verification_2fa", e.code_2fa),
                localStorage.setItem("user_login_verification_account_id", e.account_id),
                localStorage.setItem("user_login_verification_account_type", e.account_type),
                t.twofa.src = t.options && t.options.twofaurl || location.protocol + "//" + location.host + "/platform/user-login-verification/verify";
                var n = function n(r) {
                    if ((r.origin || r.originalEvent.origin) === location.protocol + "//" + location.host && r && r.data)
                        switch (r.data) {
                        case "success":
                            setTimeout(function() {
                                switch (window.removeEventListener("message", n),
                                t.twofa.src = "",
                                t.twofa.show = !1,
                                Number(e.account_type)) {
                                case 1:
                                    t.loginByMail();
                                    break;
                                case 0:
                                    t.loginByQQ()
                                }
                            }, 1e3);
                            break;
                        case "fail":
                            t.errorText.password = t.options && t.options.twofatip || t.trans("failVerifyTip");
                            break;
                        case "cancel":
                            switch (Number(e.account_type)) {
                            case 1:
                                t.errorText.password = t.options && t.options.twofatip || t.trans("failVerifyTip");
                                break;
                            case 0:
                                t.resetQQ()
                            }
                            window.removeEventListener("message", n),
                            t.twofa.src = "",
                            t.twofa.show = !1
                        }
                };
                window.addEventListener("message", n, !1),
                this.twofa.show = !0
            },
            loginByQQ: function() {
                this.$el.getElementsByTagName("iframe")[0].contentWindow.postMessage("wegame_confirm_2fa")
            },
            resetQQ: function() {
                var e = this;
                g.a.delCookie("uin", "/", ".wegame.com.cn"),
                g.a.delCookie("skey", "/", ".wegame.com.cn"),
                g.a.delCookie("p_skey", "/", ".wegame.com.cn"),
                g.a.delCookie("uin", "/", ".wegame.com"),
                g.a.delCookie("skey", "/", ".wegame.com"),
                g.a.delCookie("p_skey", "/", ".wegame.com"),
                this.visible = !1,
                this.$nextTick(function() {
                    e.visible = !0
                })
            }
        }
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(138),
        __esModule: !0
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
        /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
    }
}
, function(e, t, n) {
    function r(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , o = g[r.id];
            if (o) {
                o.refs++;
                for (var i = 0; i < o.parts.length; i++)
                    o.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++)
                    o.parts.push(l(r.parts[i], t))
            } else {
                for (var a = [], i = 0; i < r.parts.length; i++)
                    a.push(l(r.parts[i], t));
                g[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function o(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o]
              , a = t.base ? i[0] + t.base : i[0]
              , s = i[1]
              , c = i[2]
              , u = i[3]
              , l = {
                css: s,
                media: c,
                sourceMap: u
            };
            r[a] ? r[a].parts.push(l) : n.push(r[a] = {
                id: a,
                parts: [l]
            })
        }
        return n
    }
    function i(e, t) {
        var n = m(e.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = y[y.length - 1];
        if ("top" === e.insertAt)
            r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            y.push(t);
        else {
            if ("bottom" !== e.insertAt)
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }
    function a(e) {
        if (null === e.parentNode)
            return !1;
        e.parentNode.removeChild(e);
        var t = y.indexOf(e);
        t >= 0 && y.splice(t, 1)
    }
    function s(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css",
        u(t, e.attrs),
        i(e, t),
        t
    }
    function c(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css",
        e.attrs.rel = "stylesheet",
        u(t, e.attrs),
        i(e, t),
        t
    }
    function u(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }
    function l(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = t.transform(e.css)))
                return function() {}
                ;
            e.css = i
        }
        if (t.singleton) {
            var u = w++;
            n = v || (v = s(t)),
            r = p.bind(null, n, u, !1),
            o = p.bind(null, n, u, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t),
            r = d.bind(null, n, t),
            o = function() {
                a(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = s(t),
            r = f.bind(null, n),
            o = function() {
                a(n)
            }
            );
        return r(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                r(e = t)
            } else
                o()
        }
    }
    function p(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet)
            e.styleSheet.cssText = _(t, o);
        else {
            var i = document.createTextNode(o)
              , a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
    function f(e, t) {
        var n = t.css
          , r = t.media;
        if (r && e.setAttribute("media", r),
        e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function d(e, t, n) {
        var r = n.css
          , o = n.sourceMap
          , i = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || i) && (r = b(r)),
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r],{
            type: "text/css"
        })
          , s = e.href;
        e.href = URL.createObjectURL(a),
        s && URL.revokeObjectURL(s)
    }
    var g = {}
      , h = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)),
            t
        }
    }(function() {
        return window && document && document.all && !window.atob
    })
      , m = function(e) {
        var t = {};
        return function(n) {
            return void 0 === t[n] && (t[n] = e.call(this, n)),
            t[n]
        }
    }(function(e) {
        return document.querySelector(e)
    })
      , v = null
      , w = 0
      , y = []
      , b = n(148);
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {},
        t.attrs = "object" == typeof t.attrs ? t.attrs : {},
        t.singleton || (t.singleton = h()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
        var n = o(e, t);
        return r(n, t),
        function(e) {
            for (var i = [], a = 0; a < n.length; a++) {
                var s = n[a]
                  , c = g[s.id];
                c.refs--,
                i.push(c)
            }
            if (e) {
                r(o(e, t), t)
            }
            for (var a = 0; a < i.length; a++) {
                var c = i[a];
                if (0 === c.refs) {
                    for (var u = 0; u < c.parts.length; u++)
                        c.parts[u]();
                    delete g[c.id]
                }
            }
        }
    }
    ;
    var _ = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    }()
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && "object" == typeof e && "default"in e ? e.default : e
    }
    function o(e) {
        var t = s.getCookie("language");
        t && (s.setCookie("language", "", -1, "/", location.hostname),
        a(e || t))
    }
    function i(e) {
        var t = s.getCookie("language") || ""
          , n = c.getSearch("language") || c.getSearch("lang") || f || "";
        return /^[a-z]{2}[_-][a-z]{2}$/i.test(n) || (n = ""),
        e && n && a(n),
        n || t
    }
    function a(e) {
        s.setCookie("language", e, 0, "/", p)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = r(n(4))
      , c = n(64)
      , u = r(n(32))
      , l = n(153)
      , p = "wegame.com.cn"
      , f = "";
    t.clientPromise = null,
    u.isWeGame && u.isWeGameX ? t.clientPromise = new Promise(function(e) {
        l.tgp.get({
            app: "0",
            cmd: "m_get_client_info",
            data: {},
            success: function(t) {
                var n = t ? t.data : {};
                n && (f = n.language || "",
                o(f),
                e(f),
                console.log(t))
            },
            fail: function(t) {
                e(),
                console.log(t)
            }
        })
    }
    ) : o(),
    t.getLanguage = i,
    t.setLanguage = a
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        void 0 === t && (t = document.location.href);
        var n = new RegExp("[?&#]" + e + "=[^&#?]*","igm")
          , r = t.match(n);
        if (!r)
            return "";
        for (var o = r[0], i = o.indexOf("="), a = o.substr(i + 1, o.length); a.indexOf("<") >= 0; )
            a = a.replace("<", "");
        return a.indexOf("#") > 0 && (i = a.indexOf("#"),
        a = a.substr(0, i)),
        a
    }
    function o(e, n) {
        var r = t.getUrlPara(e, n);
        return /^[\w_\-\.]+$/.test(r) || (r = ""),
        r
    }
    function i(e, t, n) {
        var r = null
          , o = ""
          , i = e.split("?")
          , a = i[0]
          , s = i[1]
          , c = "";
        if (s) {
            var u = s.split("#")
              , l = u[0]
              , r = u[1];
            r && (s = l),
            i = s.split("&");
            for (var p = 0; p < i.length; p++)
                i[p].split("=")[0] != t && (o += c + i[p],
                c = "&")
        } else {
            var u = a.split("#")
              , l = u[0]
              , r = u[1];
            l && (a = l)
        }
        return r && (n += "#" + r),
        a + "?" + o + c + t + "=" + n
    }
    function a(e) {
        console.warn(" <getUrlParam> is deprecated, please use <getUrlPara> instead.");
        var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
          , r = window.location.search.substr(1).match(n);
        return null != r ? t.domXssSafe(decodeURIComponent(t.domXssSafe(r[2]))) : ""
    }
    function s(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
    }
    function c(e) {
        var t = [];
        if ("object" != typeof e)
            return "";
        for (var n in e)
            t.push(n + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    function u(e) {
        var t = {};
        if (!e)
            return t;
        for (var n = e.split("&"), r = 0, o = n.length; r < o; r++) {
            var i = n[r]
              , a = i.split("=");
            t[a[0]] = decodeURIComponent(a[1])
        }
        return t
    }
    function l(e, t, n) {
        return t ? ("object" == typeof t && (t = c(t)),
        t && (t = "?" + t)) : t = "",
        n ? ("object" == typeof n && (n = c(n)),
        n && (n = "#" + n)) : n = "",
        e + t + n
    }
    function p(e) {
        var t;
        return e ? (w.href = e,
        t = w.pathname) : t = location.pathname,
        t
    }
    function f(e) {
        var t;
        return e ? (w.href = e,
        t = w.search) : t = location.search,
        u(t.replace(/^\?/, ""))
    }
    function d(e) {
        var t;
        return e ? (w.href = e,
        t = w.hash) : t = location.hash,
        u(t.replace(/^#/, ""))
    }
    function g(e, t) {
        return f(t)[e]
    }
    function h(e, t) {
        return d(t)[e]
    }
    function m(e, t) {
        var n = d();
        if ("string" == typeof e && "string" == typeof t)
            n[e] = t;
        else if ("object" == typeof e)
            if (t)
                n = e;
            else
                for (var r in e)
                    n[r] = e[r];
        location.hash = c(n)
    }
    function v(e) {
        if (!e)
            return "";
        var t = String(e).split(":");
        return "http" !== t[0] && "https" !== t[0] || t.shift(),
        t.join(":")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var w = document.createElement("a");
    t.getUrlPara = r,
    t.getSafePara = o,
    t.setUrlPara = i,
    t.getUrlParam = a,
    t.domXssSafe = s,
    t.serialize = c,
    t.unserialize = u,
    t.make = l,
    t.getPathName = p,
    t.getSearches = f,
    t.getSearch = g,
    t.getHashes = d,
    t.getHash = h,
    t.setHash = m,
    t.clearProtocol = v
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return null !== e && "object" == typeof e
    }
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var r = n(17)
      , o = n.n(r)
      , i = n(63)
      , a = (n.n(i),
    {
        google_redirect: "//" + o.a.bizdomain + "/middle/login/ggLogin.html",
        redirect: "//" + o.a.bizdomain + "/middle/login/third_callback.html",
        proxy: "//" + o.a.bizdomain + "/middle/login/proxy.html",
        mail_boundy: "//www.wegamex.com.hk/platform/sign/join.html",
        forgetpasswdurl: "//" + o.a.bizdomain + "/platform/sign/reset_pass.html",
        regmailurl: "//" + o.a.bizdomain + "/platform/sign/join.html",
        noAutoTicket: !1,
        disabledFailLogout: !1,
        wx_mobile_appid: "wx6e73c47afaf63fa9",
        wx_clienttype: "1000507",
        afterWegameLogin: function(e) {
            if (e.bt && 1 * e.already_bound != 1)
                return e.need_boundy_mail = !0,
                top.location.href = a.mail_boundy + "?nick=" + encodeURIComponent(e.nick) + "&lang=" + Object(i.getLanguage)(),
                e;
            if (window.parent != window) {
                var t = localStorage.getItem("tgp_userinfo");
                t && window.parent.localStorage.setItem("tgp_userinfo", t)
            } else if (window.opener) {
                var t = localStorage.getItem("tgp_userinfo");
                try {
                    window.opener.localStorage.setItem("tgp_userinfo", t)
                } catch (e) {
                    console.log(e)
                }
            }
            return e
        }
    });
    t.a = a
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return h = window.Vue,
        o(e, t, n)
    }
    function o(e, t, n) {
        return t = u.a.util.extend(t || {}, m.options),
        m.readyPromise = new s.a(function(r) {
            new h({
                el: e,
                components: {
                    weLogin: d.a
                },
                data: function() {
                    return {
                        isLogin: !1,
                        lang: n,
                        options: t
                    }
                },
                mounted: function() {
                    var e = this;
                    m.isReady = !0,
                    m.popup = function() {
                        return e.$refs.loginBox.popup()
                    }
                    ,
                    m.popdown = function() {
                        return e.$refs.loginBox.popdown()
                    }
                    ,
                    m.logout = function() {
                        return e.$refs.loginBox.logout()
                    }
                    ,
                    m.getUserInfo = function() {
                        return e.$refs.loginBox.getUserInfo()
                    }
                    ,
                    m.setOptions = function(t) {
                        return e.options = t
                    }
                    ,
                    m.setLang = function(t) {
                        return e.lang = t
                    }
                    ,
                    m.getMobileLoginUrl = function(t) {
                        return e.$refs.loginBox.getMobileLoginUrl(t)
                    }
                    ,
                    m.popLoginTip = function(t) {
                        return e.$refs.loginBox.popLoginTip(t)
                    }
                    ,
                    r(),
                    this.$nextTick(function() {
                        g.emit("ready")
                    })
                },
                methods: {
                    checkLogin: function(e) {
                        this.isLogin = !0,
                        g.emit("checkLogin", e)
                    },
                    onlogin: function(e) {
                        this.isLogin = !0,
                        g.emit("login", e)
                    },
                    onlogout: function() {
                        g.emit("logout")
                    },
                    onKickoff: function() {
                        g.emit("kickoff")
                    },
                    onMultilogin: function() {
                        g.emit("multilogin")
                    },
                    onTicketFail: function(e) {
                        g.emit("ticketFail", e)
                    }
                },
                render: function(e) {
                    return e(d.a, {
                        props: {
                            lang: this.lang,
                            options: this.options
                        },
                        on: {
                            login: this.onlogin,
                            checkLogin: this.checkLogin,
                            logout: this.onlogout,
                            kickoff: this.onKickoff,
                            multilogin: this.onMultilogin,
                            ticketFail: this.onTicketFail
                        },
                        ref: "loginBox"
                    })
                }
            })
        }
        ),
        m.readyPromise
    }
    function i() {}
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(19)
      , s = n.n(a)
      , c = n(17)
      , u = n.n(c)
      , l = n(131)
      , p = n.n(l)
      , f = n(4)
      , d = (n.n(f),
    n(132))
      , g = new p.a
      , h = null
      , m = {
        isReady: !1,
        options: {},
        onReady: function(e) {
            this.isReady ? e() : g.on("ready", e)
        },
        onCheckLogin: function(e) {
            this.isLogin() && e(this.getUserInfo()),
            g.on("checkLogin", e)
        },
        onLogin: function(e) {
            g.on("login", e)
        },
        onLogout: function(e) {
            g.on("logout", e)
        },
        onKickoff: function(e) {
            g.on("kickoff", e)
        },
        onMultiLogin: function(e) {
            g.on("multilogin", e)
        },
        onTicketFail: function(e) {
            g.on("ticketFail", e)
        },
        readyPromise: null,
        isLogin: u.a.isLogin,
        mount: r,
        popup: i,
        popdown: i,
        logout: i,
        getMobileLoginUrl: i,
        getLoginUser: function() {
            return u.a.getLoginUser(!0)
        },
        getUserInfo: i,
        setOptions: function(e) {
            u.a.util.extend(this.options, e)
        },
        setLang: i
    }
      , v = document.getElementById("LoginBox");
    v || (v = document.createElement("div"),
    v.id = "LoginBox",
    document.body.appendChild(v));
    var w = v.getAttribute("lang") || Object(f.getCookie)("language") || Object(f.getCookie)("lang")
      , y = !!v.getAttribute("popup") || !0;
    m.readyPromise = r(v, {
        popup: y
    }, w),
    t.default = m
}
, function(e, t, n) {
    n(69),
    n(70),
    n(82),
    n(86),
    n(98),
    n(99),
    e.exports = n(3).Promise
}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    var r = n(71)(!0);
    n(33)(String, "String", function(e) {
        this._t = String(e),
        this._i = 0
    }, function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    })
}
, function(e, t, n) {
    var r = n(20)
      , o = n(21);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, s = String(o(t)), c = r(n), u = s.length;
            return c < 0 || c >= u ? e ? "" : void 0 : (i = s.charCodeAt(c),
            i < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536)
        }
    }
}
, function(e, t, n) {
    e.exports = !n(9) && !n(23)(function() {
        return 7 != Object.defineProperty(n(24)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t, n) {
    var r = n(8);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
            return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t, n) {
    e.exports = n(6)
}
, function(e, t, n) {
    "use strict";
    var r = n(76)
      , o = n(34)
      , i = n(27)
      , a = {};
    n(6)(a, n(2)("iterator"), function() {
        return this
    }),
    e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: o(1, n)
        }),
        i(e, t + " Iterator")
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(77)
      , i = n(40)
      , a = n(26)("IE_PROTO")
      , s = function() {}
      , c = function() {
        var e, t = n(24)("iframe"), r = i.length;
        for (t.style.display = "none",
        n(41).appendChild(t),
        t.src = "javascript:",
        e = t.contentWindow.document,
        e.open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        c = e.F; r--; )
            delete c.prototype[i[r]];
        return c()
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s.prototype = r(e),
        n = new s,
        s.prototype = null,
        n[a] = e) : n = c(),
        void 0 === t ? n : o(n, t)
    }
}
, function(e, t, n) {
    var r = n(14)
      , o = n(5)
      , i = n(35);
    e.exports = n(9) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, a = i(t), s = a.length, c = 0; s > c; )
            r.f(e, n = a[c++], t[n]);
        return e
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(25)
      , i = n(79)(!1)
      , a = n(26)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = o(e), c = 0, u = [];
        for (n in s)
            n != a && r(s, n) && u.push(n);
        for (; t.length > c; )
            r(s, n = t[c++]) && (~i(u, n) || u.push(n));
        return u
    }
}
, function(e, t, n) {
    var r = n(25)
      , o = n(37)
      , i = n(80);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, c = r(t), u = o(c.length), l = i(a, u);
            if (e && n != n) {
                for (; u > l; )
                    if ((s = c[l++]) != s)
                        return !0
            } else
                for (; u > l; l++)
                    if ((e || l in c) && c[l] === n)
                        return e || l || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var r = n(20)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        return e = r(e),
        e < 0 ? o(e + t, 0) : i(e, t)
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(42)
      , i = n(26)("IE_PROTO")
      , a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e),
        r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}
, function(e, t, n) {
    n(83);
    for (var r = n(1), o = n(6), i = n(10), a = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var u = s[c]
          , l = r[u]
          , p = l && l.prototype;
        p && !p[a] && o(p, a, u),
        i[u] = i.Array
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(84)
      , o = n(85)
      , i = n(10)
      , a = n(25);
    e.exports = n(33)(Array, "Array", function(e, t) {
        this._t = a(e),
        this._i = 0,
        this._k = t
    }, function() {
        var e = this._t
          , t = this._k
          , n = this._i++;
        return !e || n >= e.length ? (this._t = void 0,
        o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
    }, "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(e, t) {
    e.exports = function() {}
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r, o, i, a, s = n(22), c = n(1), u = n(12), l = n(43), p = n(7), f = n(8), d = n(13), g = n(87), h = n(88), m = n(44), v = n(45).set, w = n(93)(), y = n(28), b = n(46), _ = n(94), x = n(47), k = c.TypeError, A = c.process, T = A && A.versions, q = T && T.v8 || "", C = c.Promise, L = "process" == l(A), S = function() {}, j = o = y.f, O = !!function() {
        try {
            var e = C.resolve(1)
              , t = (e.constructor = {})[n(2)("species")] = function(e) {
                e(S, S)
            }
            ;
            return (L || "function" == typeof PromiseRejectionEvent) && e.then(S)instanceof t && 0 !== q.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
        } catch (e) {}
    }(), P = function(e) {
        var t;
        return !(!f(e) || "function" != typeof (t = e.then)) && t
    }, E = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            w(function() {
                for (var r = e._v, o = 1 == e._s, i = 0; n.length > i; )
                    !function(t) {
                        var n, i, a, s = o ? t.ok : t.fail, c = t.resolve, u = t.reject, l = t.domain;
                        try {
                            s ? (o || (2 == e._h && B(e),
                            e._h = 1),
                            !0 === s ? n = r : (l && l.enter(),
                            n = s(r),
                            l && (l.exit(),
                            a = !0)),
                            n === t.promise ? u(k("Promise-chain cycle")) : (i = P(n)) ? i.call(n, c, u) : c(n)) : u(r)
                        } catch (e) {
                            l && !a && l.exit(),
                            u(e)
                        }
                    }(n[i++]);
                e._c = [],
                e._n = !1,
                t && !e._h && D(e)
            })
        }
    }, D = function(e) {
        v.call(c, function() {
            var t, n, r, o = e._v, i = M(e);
            if (i && (t = b(function() {
                L ? A.emit("unhandledRejection", o, e) : (n = c.onunhandledrejection) ? n({
                    promise: e,
                    reason: o
                }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
            }),
            e._h = L || M(e) ? 2 : 1),
            e._a = void 0,
            i && t.e)
                throw t.v
        })
    }, M = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    }, B = function(e) {
        v.call(c, function() {
            var t;
            L ? A.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            })
        })
    }, I = function(e) {
        var t = this;
        t._d || (t._d = !0,
        t = t._w || t,
        t._v = e,
        t._s = 2,
        t._a || (t._a = t._c.slice()),
        E(t, !0))
    }, R = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === e)
                    throw k("Promise can't be resolved itself");
                (t = P(e)) ? w(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, u(R, r, 1), u(I, r, 1))
                    } catch (e) {
                        I.call(r, e)
                    }
                }) : (n._v = e,
                n._s = 1,
                E(n, !1))
            } catch (e) {
                I.call({
                    _w: n,
                    _d: !1
                }, e)
            }
        }
    };
    O || (C = function(e) {
        g(this, C, "Promise", "_h"),
        d(e),
        r.call(this);
        try {
            e(u(R, this, 1), u(I, this, 1))
        } catch (e) {
            I.call(this, e)
        }
    }
    ,
    r = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ,
    r.prototype = n(95)(C.prototype, {
        then: function(e, t) {
            var n = j(m(this, C));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = L ? A.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && E(this, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    i = function() {
        var e = new r;
        this.promise = e,
        this.resolve = u(R, e, 1),
        this.reject = u(I, e, 1)
    }
    ,
    y.f = j = function(e) {
        return e === C || e === a ? new i(e) : o(e)
    }
    ),
    p(p.G + p.W + p.F * !O, {
        Promise: C
    }),
    n(27)(C, "Promise"),
    n(96)("Promise"),
    a = n(3).Promise,
    p(p.S + p.F * !O, "Promise", {
        reject: function(e) {
            var t = j(this);
            return (0,
            t.reject)(e),
            t.promise
        }
    }),
    p(p.S + p.F * (s || !O), "Promise", {
        resolve: function(e) {
            return x(s && this === a ? C : this, e)
        }
    }),
    p(p.S + p.F * !(O && n(97)(function(e) {
        C.all(e).catch(S)
    })), "Promise", {
        all: function(e) {
            var t = this
              , n = j(t)
              , r = n.resolve
              , o = n.reject
              , i = b(function() {
                var n = []
                  , i = 0
                  , a = 1;
                h(e, !1, function(e) {
                    var s = i++
                      , c = !1;
                    n.push(void 0),
                    a++,
                    t.resolve(e).then(function(e) {
                        c || (c = !0,
                        n[s] = e,
                        --a || r(n))
                    }, o)
                }),
                --a || r(n)
            });
            return i.e && o(i.v),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = j(t)
              , r = n.reject
              , o = b(function() {
                h(e, !1, function(e) {
                    t.resolve(e).then(n.resolve, r)
                })
            });
            return o.e && r(o.v),
            n.promise
        }
    })
}
, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e)
            throw TypeError(n + ": incorrect invocation!");
        return e
    }
}
, function(e, t, n) {
    var r = n(12)
      , o = n(89)
      , i = n(90)
      , a = n(5)
      , s = n(37)
      , c = n(91)
      , u = {}
      , l = {}
      , t = e.exports = function(e, t, n, p, f) {
        var d, g, h, m, v = f ? function() {
            return e
        }
        : c(e), w = r(n, p, t ? 2 : 1), y = 0;
        if ("function" != typeof v)
            throw TypeError(e + " is not iterable!");
        if (i(v)) {
            for (d = s(e.length); d > y; y++)
                if ((m = t ? w(a(g = e[y])[0], g[1]) : w(e[y])) === u || m === l)
                    return m
        } else
            for (h = v.call(e); !(g = h.next()).done; )
                if ((m = o(h, w, g.value, t)) === u || m === l)
                    return m
    }
    ;
    t.BREAK = u,
    t.RETURN = l
}
, function(e, t, n) {
    var r = n(5);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(10)
      , o = n(2)("iterator")
      , i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}
, function(e, t, n) {
    var r = n(43)
      , o = n(2)("iterator")
      , i = n(10);
    e.exports = n(3).getIteratorMethod = function(e) {
        if (void 0 != e)
            return e[o] || e["@@iterator"] || i[r(e)]
    }
}
, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
        case 0:
            return r ? e() : e.call(n);
        case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = n(45).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , a = r.process
      , s = r.Promise
      , c = "process" == n(16)(a);
    e.exports = function() {
        var e, t, n, u = function() {
            var r, o;
            for (c && (r = a.domain) && r.exit(); e; ) {
                o = e.fn,
                e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0,
                    r
                }
            }
            t = void 0,
            r && r.enter()
        };
        if (c)
            n = function() {
                a.nextTick(u)
            }
            ;
        else if (!i || r.navigator && r.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve(void 0);
                n = function() {
                    l.then(u)
                }
            } else
                n = function() {
                    o.call(r, u)
                }
                ;
        else {
            var p = !0
              , f = document.createTextNode("");
            new i(u).observe(f, {
                characterData: !0
            }),
            n = function() {
                f.data = p = !p
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            t && (t.next = o),
            e || (e = o,
            n()),
            t = o
        }
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = r.navigator;
    e.exports = o && o.userAgent || ""
}
, function(e, t, n) {
    var r = n(6);
    e.exports = function(e, t, n) {
        for (var o in t)
            n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(1)
      , o = n(3)
      , i = n(14)
      , a = n(9)
      , s = n(2)("species");
    e.exports = function(e) {
        var t = "function" == typeof o[e] ? o[e] : r[e];
        a && t && !t[s] && i.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(e, t, n) {
    var r = n(2)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return a
            }
            ,
            e(i)
        } catch (e) {}
        return n
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(7)
      , o = n(3)
      , i = n(1)
      , a = n(44)
      , s = n(47);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = a(this, o.Promise || i.Promise)
              , n = "function" == typeof e;
            return this.then(n ? function(n) {
                return s(t, e()).then(function() {
                    return n
                })
            }
            : e, n ? function(n) {
                return s(t, e()).then(function() {
                    throw n
                })
            }
            : e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(7)
      , o = n(28)
      , i = n(46);
    r(r.S, "Promise", {
        try: function(e) {
            var t = o.f(this)
              , n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v),
            t.promise
        }
    })
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && "object" == typeof e && "default"in e ? e.default : e
    }
    function o(e) {
        u.getCookie("language") && e && u.setCookie("language", "", -1, "/", location.hostname),
        e && c(e)
    }
    function i(e) {
        if (!l.isBrowser)
            throw new Error("This method is only available in browser side");
        var t = u.getCookie("language") || ""
          , n = s("language") || s("lang") || g || "";
        return /^[a-z]{2}[_-][a-z]{2}$/i.test(n) || (n = ""),
        e && n && c(n),
        n || t
    }
    function a(e, t) {
        if (void 0 === t && (t = {}),
        l.isBrowser)
            throw new Error("This method is only available in server side");
        var n = t.language || ""
          , r = s("language", e) || s("lang", e) || "";
        return /^[a-z]{2}[_-][a-z]{2}$/i.test(r) || (r = ""),
        r || n
    }
    function s(e, t) {
        return f.parse((t || location.search || "").split("?")[1])[e] || ""
    }
    function c(e) {
        u.setCookie("language", e, 0, "/", d)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = r(n(4))
      , l = r(n(18))
      , p = n(101)
      , f = n(126)
      , d = "wegame.com.cn"
      , g = ""
      , h = l.isBrowser ? new Promise(function(e, t) {
        var n = setTimeout(function() {
            e(i(!0))
        }, 1e3);
        p.tgp.get({
            app: "0",
            cmd: "m_get_client_info",
            data: {},
            success: function(t) {
                clearTimeout(n);
                var r = t ? t.data : {};
                r && r.language ? (g = r.language,
                o(g),
                e(g)) : e(i(!0)),
                console.log("m_get_client_info", t)
            },
            fail: function(r) {
                clearTimeout(n),
                e(i(!0)),
                t(r)
            }
        })
    }
    ) : null;
    t.clientPromise = h,
    t.getLanguage = i,
    t.getLanguageInServer = a,
    t.setLanguage = c
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && "object" == typeof e && "default"in e ? e.default : e
    }
    function o(e, t, n) {
        var r = Math.floor(1e4 * Math.random())
          , o = document.createElement("script");
        return o.charset = t || "UTF-8",
        o.id = r,
        document.getElementsByTagName("head")[0].appendChild(o),
        o.src = e,
        "function" == typeof n && ("onload"in o ? o.onload = n : "onreadystatechange"in o && (o.onreadystatechange = function() {
            "complete" !== this.readyState && "loaded" !== this.readyState || n()
        }
        )),
        o
    }
    function i(e, t) {
        void 0 === t && (t = {});
        try {
            return window.external.callcpp(e, JSON.stringify(t)),
            !0
        } catch (e) {
            return !1
        }
    }
    function a(e, t) {
        void 0 === t && (t = ""),
        console.warn("%c" + e, "color:orange;font-size:1.5em;", t)
    }
    function s(e, t) {
        void 0 === t && (t = "wegame.com.cn"),
        "string" == typeof t && (t = [t]),
        t.forEach(function(t) {
            R.forEach(function(n) {
                null != e[n] && (document.cookie = n + "=" + e[n] + ";path=/;domain=" + t)
            })
        })
    }
    function c(e) {
        return I.every(function(t) {
            return !!e[t]
        })
    }
    function u(e) {
        return void 0 === e && (e = O.getCookie),
        R.reduce(function(t, n) {
            return t[n] = e(n),
            t
        }, {})
    }
    function l(e, t, n) {
        U.executors.push({
            seq: ++U.seq,
            fn: n || F
        }),
        i("call_service", {
            cmd: e,
            data: t,
            callback: "call_service_callback",
            custom_data: {
                seq: U.seq
            }
        })
    }
    function p(e, t) {
        var n = !!G[e];
        G[e] = (G[e] || []).concat(t),
        n || i("listen_broadcast", {
            cmd: e
        })
    }
    function f(e, t) {
        i("send_broadcast", {
            cmd: e,
            data: t || {}
        })
    }
    function d(e, t) {
        if (G[e])
            return void 0 === t ? void (G[e] = []) : void (G[e] = G[e].filter(function(e) {
                return e === t
            }))
    }
    function g(e, t) {
        if ("undefined" != typeof window) {
            var n = window[e];
            window[e] = "function" == typeof n ? function() {
                for (var e = [], r = arguments.length; r--; )
                    e[r] = arguments[r];
                n.apply(window, e),
                t.apply(window, e)
            }
            : t
        }
    }
    function h() {
        return m()
    }
    function m() {
        var e = !0;
        return O.getCookie("client_type"),
        e = !1,
        e
    }
    function v(e, t) {
        return new Promise(function(n, r) {
            return void 0 !== V && null != V && void 0 !== K && null != K ? (e && e({
                isNetBar: V
            }),
            e && e({
                bar_id: K
            }),
            void n({
                isNetBar: V,
                bar_id: K
            })) : top && top.TGP && top.TGP.status && top.TGP.status.isNetbar && top.TGP.status.barID ? (V = top.TGP.status.isNetbar,
            K = top.TGP.status.barID,
            e && e({
                isNetBar: V
            }),
            e && e({
                bar_id: K
            }),
            void n({
                isNetBar: V,
                bar_id: K
            })) : void (N && N.get ? N.get({
                app: "0",
                cmd: "m_get_client_info",
                success: function(o) {
                    o && 0 == o.retCode && o.data ? (o = o.data,
                    V = o.is_netbar,
                    K = o.bar_id,
                    e && e({
                        isNetBar: V
                    }),
                    n({
                        isNetBar: V,
                        bar_id: K
                    })) : (t && t(o),
                    r(o))
                },
                fail: function(e) {
                    t && t(e),
                    r(e)
                }
            }) : (console.log("queryTgpIsNetBar: TGP error"),
            t && t(),
            r()))
        }
        )
    }
    function w(e, t) {
        return new Promise(function(n, r) {
            return void 0 !== X && null != X ? (e && e({
                language: X
            }),
            void n({
                language: X
            })) : top && top.TGP && top.TGP.status && top.TGP.status.language ? (X = top.TGP.status.language,
            e && e({
                language: X
            }),
            void n({
                language: X
            })) : void (Y && l ? l("i_service_get_client_env", {}, function(o) {
                o && o.language ? (X = o.language,
                e && e({
                    language: X
                }),
                n({
                    language: X
                })) : (t && t(o),
                r(o))
            }) : (console.log("queryTgpLanguage: comm_center error"),
            t && t(),
            r()))
        }
        )
    }
    function y(e, t) {
        var n = {
            method: e,
            data: t
        };
        try {
            var r = JSON.stringify(n);
            window.external.callcpp("RailCrossJavascriptEvent", r)
        } catch (e) {}
    }
    function b() {
        y("RailCrossMethodCloseWebWindow", "")
    }
    function _(e, t) {
        if (void 0 === t && (t = {}),
        null == e || "" === e)
            return !1;
        y(e, t)
    }
    function x(e) {
        var t = {};
        if (e && 0 === e.retCode && e.data) {
            if (t = e.data,
            void 0 !== e.data.is_wow64 && (t.isClientCanGetCpuBits = !0,
            !0 === e.data.is_wow64 && (t.userClientCpuBits = 64)),
            e.data.sys_name && e.data.sys_name.length) {
                var n = e.data.sys_name.split("-");
                n.length > 1 && (t.isClientCanGetSysVersion = !0,
                t.isClientCanGetCpuBits = !0,
                t.userClientSysVersion = n[0],
                t.userClientCpuBits = n[n.length - 1])
            }
        } else {
            var r = {
                "4.0": "winnt4.0",
                "5.0": "win2000",
                5.1: "winxp",
                5.2: "server2003",
                "6.0": "vista",
                6.1: "win7",
                6.2: "win8",
                6.3: "win8",
                6.4: "win10",
                "10.0": "win10"
            }
              , o = navigator.userAgent.match(/windows nt ([\d.]+)/i)
              , i = navigator.userAgent.match(/(wow64|win64)/i);
            o && (t.isClientCanGetSysVersion = !0,
            t.userClientSysVersion = r[o[1]]),
            i ? (t.isClientCanGetCpuBits = !0,
            t.userClientCpuBits = "64") : o && (t.isClientCanGetCpuBits = !0,
            t.userClientCpuBits = "32")
        }
        return t
    }
    function k() {
        return L.isWeGameIndependent || L.isWeGameMainTop ? ee || (ee = new Promise(function(e) {
            var t = setTimeout(function() {
                e(x())
            }, 1e3);
            N.get({
                app: "0",
                cmd: "m_get_client_info",
                data: {},
                success: function(n) {
                    void 0 === n && (n = {}),
                    clearTimeout(t),
                    e(x(n))
                },
                fail: function() {
                    return clearTimeout(t),
                    Promise.resolve(x())
                }
            })
        }
        )) : Promise.resolve(x())
    }
    function A(e, t, n, r) {
        return new Promise(function(o) {
            L.isInClient ? (t.func_name = e,
            N.get({
                app: "888",
                src: "50000013",
                cmd: "rail_web_req",
                timeout: 2e3,
                data: t,
                success: function(e) {
                    "function" == typeof n && n(e),
                    o(e)
                },
                fail: function(e) {
                    "function" == typeof r && r(e),
                    o({})
                }
            })) : o({})
        }
        )
    }
    function T(e) {
        document.cookie = "language=" + e + ";path=/;domain=" + (window.location.hostname.indexOf("tgp.qq.com") >= 0 ? "tgp.qq.com" : window.location.hostname)
    }
    function q() {
        if (z)
            return z;
        var e = S.getUrlPara("language") || S.getUrlPara("lang");
        if (e)
            return T(e),
            z = Promise.resolve(e);
        var t = O.getCookie("language");
        return z = t ? Promise.resolve(t) : k().then(function(e) {
            if (null == e)
                return te;
            var t = e.language || te;
            return T(t),
            t
        })
    }
    function C(e) {
        T(e),
        z = Promise.resolve(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var L = r(n(18))
      , S = n(102)
      , j = r(S)
      , O = r(n(4))
      , P = n(106)
      , E = n(48)
      , D = "https://";
    L.isBrowser && (D = "https:" === window.location.protocol ? "https://" : "http://");
    var M = {
        qtreq: function(e) {
            E.baseRequest({
                method: "get",
                url: P.replaceDomain("//qt.qq.com/lua/tgp_live_svr/" + e.cmd),
                params: {
                    p: JSON.stringify(e.data || {})
                }
            }).then(function(t) {
                e.callback(t)
            }).catch(function(t) {
                e.callback(null)
            })
        },
        get_lives_detail: function(e) {
            M.qtreq({
                desc: "查某直播房间详细信息接口",
                cmd: "get_lives_detail",
                data: {
                    live_ids: e.liveId
                },
                callback: function(t) {
                    t && 1 === t.result ? e.succ(t.data[0]) : e.fail(t)
                }
            })
        },
        openLivePlayer: function(e, t, n) {
            M.get_lives_detail({
                liveId: e,
                fail: function(t) {
                    console.log("打开播放器时，拉取直播详情失败。liveId: " + e + ", err: " + t)
                },
                succ: function(e) {
                    window.tgpThirdPlayer && window.tgpThirdPlayer.getPlayer() && window.tgpThirdPlayer.getPlayer().stop();
                    var r = ""
                      , o = 0
                      , i = 0
                      , a = O.getCookie("language");
                    if (3 == e.live_type) {
                        var s;
                        e.detail ? ("string" == typeof e.detail && (e.detail = JSON.parse(e.detail)),
                        "string" == typeof e.detail.extra_info && (e.detail.extra_info = JSON.parse(e.detail.extra_info)),
                        s = e.detail.extra_info) : ("string" == typeof e.extra_info && (e.extra_info = JSON.parse(e.extra_info)),
                        s = e.extra_info);
                        var c = e.gid
                          , u = s.room_id
                          , l = s.subroom_id;
                        r = P.replaceDomain(D + "plat.tgp.qq.com/tgpforum/video/index.html#!/live/room/" + c + "/" + u + "/" + l + "?from=" + t),
                        window.screen.height > 900 ? (o = 1028,
                        i = 900) : (o = 1034,
                        i = 626)
                    } else if (6 == e.live_type) {
                        var c = e.gid
                          , u = e.room_identify;
                        if ("string" == typeof e.extra_info && (e.extra_info = JSON.parse(e.extra_info)),
                        e.extra_info && e.extra_info.qt_main_game_id)
                            var p = e.extra_info.qt_main_game_id;
                        else
                            var p = 20003;
                        var f = 22;
                        0 !== t.indexOf("live-center") && "nav-dropbox-follow" != t || (f = 9),
                        r = P.replaceDomain(D + "plat.tgp.qq.com/video/self-room/client_player.html?game_id=" + p + "&room_id=" + u + "&gid=" + c + "&live_id=" + e.live_id + "&from=wegame&source_type= " + f + "&language=" + a + "&recoId=" + n),
                        o = 1280,
                        i = 706
                    } else
                        r = P.replaceDomain(D + "plat.tgp.qq.com/video/live-player/room.html?liveid=" + e.live_id + "&from=" + t + "&recoId=" + n),
                        o = 1280,
                        i = 706;
                    if (/\bxTools\.exe/i.test(navigator.userAgent) || /\BattleCare\.exe/i.test(navigator.userAgent))
                        return N.openJdqsWindow(r, "直播", o, i),
                        !0;
                    N.openWindow({
                        url: r,
                        width: o,
                        height: i
                    })
                }
            })
        }
    }
      , B = "https://";
    L.isBrowser && (B = "https:" === window.location.protocol ? "https://" : "http://");
    var I = ["tgp_id", "tgp_ticket"]
      , R = I.concat(["tgp_biz_ticket", "tgp_env", "tgp_user_type", "region", "client_type"])
      , N = {
        cbList: {},
        curJump: {
            mid: 0,
            page: 0
        },
        get: function(e) {
            var t = N.cbList
              , n = N.status;
            window.top.location !== window.location || window.webBridgeFunc || (window.webBridgeFunc = function(e) {
                var t, n, r = N.cbList;
                e && (n = e.src,
                n && window.frames["tgpFrame_" + n] && (t = window.frames["tgpFrame_" + n],
                t.TGP || (t = t.contentWindow),
                t && t.TGP.cbList && t.TGP.cbList["cb_" + e.seq_num] && (r = t.TGP.cbList)),
                0 == e.retCode ? r["cb_" + e.seq_num] && r["cb_" + e.seq_num](e) : r["err_" + e.seq_num] && r["err_" + e.seq_num](e),
                delete r["cb_" + e.seq_num],
                delete r["err_" + e.seq_num])
            }
            ),
            e.seq || (e.seq = Date.now() + Math.floor(Math.random() * Date.now() + 1)),
            t["cb_" + e.seq] || ("function" == typeof e.success ? t["cb_" + e.seq] = e.success : "string" == typeof e.success && window[e.success] && (t["cb_" + e.seq] = window[e.success])),
            t["err_" + e.seq] || ("function" == typeof e.fail ? t["err_" + e.seq] = function(n) {
                delete t["cb_" + n.seq],
                delete t["err_" + n.seq],
                delete t["evt_" + n.seq],
                e.fail(n)
            }
            : "string" == typeof e.fail && window[e.fail] && (t["err_" + e.seq] = function(n) {
                delete t["cb_" + n.seq],
                delete t["err_" + n.seq],
                delete t[n.event + "_" + n.app],
                window[e.fail](n)
            }
            ));
            var r = {
                dest: (isNaN(e.app) ? "0" : e.app) + "",
                seq_num: e.seq + "",
                callback_func: "webBridgeFunc",
                data: e.data || {}
            }
              , o = null;
            try {
                o = window.parent && window.parent.TGP && window.parent.TGP.status
            } catch (e) {
                console.log(e)
            }
            isNaN(e.src) ? n && n.curMod ? r.src = n.curMod + "" : o ? (n = o,
            r.src = n.curMod ? n.curMod + "" : "0") : r.src = "0" : r.src = e.src + "",
            e.timeout && (r.timeout = e.timeout + "");
            try {
                return window.external.callcpp(e.cmd, JSON.stringify(r)),
                0
            } catch (n) {
                return delete t["cb_" + r.seq],
                delete t["err_" + r.seq],
                delete t["evt_" + r.seq],
                "function" == typeof e.fail && e.fail({
                    retCode: -9999,
                    msg: "web侧调用callcpp失败，请确认是在正确的客户端环境内打开。",
                    data: {
                        e: n,
                        params: e.data
                    }
                }),
                -9999
            }
        },
        listen: function(e) {
            var t, n = N.cbList, r = "register_event";
            window.top.location != window.location || window.webEventProxy || (window.webEventProxy = function(e) {
                var t, n, r, o = N.cbList;
                n = e.src,
                _data = e.data,
                window.frames["tgpFrame_" + n] ? (t = window.frames["tgpFrame_" + n],
                t.TGP || (t = t.contentWindow),
                r = _data.event ? _data.event + "_" + n : "",
                t && t.TGP.cbList && t.TGP.cbList[r] && (o = t.TGP.cbList)) : r = _data.event ? _data.event + "_" + n : "",
                o[r] && o[r](e)
            }
            ),
            e.seq || (e.seq = Date.now() + Math.floor(Math.random() * Date.now() + 1)),
            e.src = e.src || 0,
            t = e.event + "_" + e.src,
            n[t] || ("function" == typeof e.callback ? n[t] = e.callback : "string" == typeof e.callback && window[e.callback] && (n[t] = window[e.callback])),
            e.event_type && 2 === e.event_type && (r = "unregister_event"),
            e.cmd = r,
            e.data = e.data || {},
            e.data.event_name = e.event,
            e.data.event_callback = "webEventProxy",
            N.get(e)
        },
        jump: function(e) {
            var t, n = N.status, r = {
                TGP: N
            };
            try {
                if (null == window.top.TGP || null == window.top.TGP.status)
                    return void (window.top.location.href = e.page)
            } catch (t) {
                e.page.indexOf(B) < 0 && (e.page = B + e.page.replace("//", ""));
                var i = (new Date).getTime();
                return void window.top.postMessage(JSON.stringify({
                    action: "jump",
                    url: e.page + (-1 === e.page.indexOf("?") ? "?t=" + i : "&t=" + i)
                }), "*")
            }
            if (top.location === self.location) {
                if ("jumpView" === e.module)
                    ;
                else if (!isNaN(e.app))
                    if (e.app != n.curMod)
                        N.get({
                            app: 0,
                            src: n.curMod,
                            cmd: "jc_set_app_status",
                            data: {
                                game_id: isNaN(e.app) ? n.curMod : e.app
                            },
                            success: function(t) {
                                var n = N.mList
                                  , r = n[e.app].name
                                  , t = t.data;
                                e.page ? (N.curJump.mid = e.app,
                                N.curJump.page = e.page,
                                N.curJump.params = e.params || {},
                                N.curJump.web_st = t.web_st,
                                N.curJump.uin = t.uin,
                                N[r + "_navmenu"] ? N.web.jumpModuleURI(N.curJump) : (confUrl = B + "cdn.tgp.qq.com/" + r + "/conf/" + r + "_page_map.js?t=" + Date.now(),
                                o(confUrl, "UTF-8", window.tgp_jumpModuleURI))) : N.web.jumpModulePage({
                                    mid: t.mid,
                                    url: t.url,
                                    web_st: t.web_st || "",
                                    uin: t.uin || ""
                                })
                            },
                            fail: function(t) {
                                N.web.jumpModulePage({
                                    mid: e.app,
                                    url: P.replaceDomain(B + "plat.tgp.qq.com/platform/frames/building.html")
                                }),
                                console.log("jump fail : " + JSON.stringify(t))
                            }
                        });
                    else if (r[e.app])
                        if (t = r[e.app].name,
                        N.curJump.mid = e.app,
                        N.curJump.page = e.page,
                        N.curJump.params = e.params || {},
                        N[t + "_navmenu"])
                            N.web.jumpModuleURI(N.curJump);
                        else {
                            var a = B + "cdn.tgp.qq.com/" + t + "/conf/" + t + "_page_map.js?t=" + Date.now();
                            o(a, "UTF-8", window.tgp_jumpModuleURI)
                        }
            } else
                top.TGP.jump(e)
        },
        back: function() {
            try {
                if (void 0 == top.TGP || void 0 == top.TGP.status)
                    return void window.history.go(-1)
            } catch (e) {
                return void window.history.go(-1)
            }
            if (top.location == self.location) {
                var e, t, n = N.status, r = n.refList;
                t = r.length,
                e = 0 == t ? {
                    mid: "55555",
                    url: B + "plat.tgp.qq.com/center/index.html"
                } : r.pop(),
                n.curMod != e.mid ? N.get({
                    app: 0,
                    src: 0,
                    cmd: "jc_set_app_status",
                    data: {
                        game_id: e.mid
                    },
                    success: function(t) {
                        e.web_st = t.web_st,
                        e.uin = t.uin,
                        setTimeout(function() {
                            N.web.setMainFrame(e)
                        }, 100)
                    },
                    fail: function(e) {
                        console.log("goBack fail : " + JSON.stringify(e))
                    }
                }) : N.web.setMainFrame(e)
            } else
                top.TGP.back()
        },
        openVideo: function(e) {
            a("TGP.openVideo", "废弃方法，请替换为 TGP.openWindow，使用方法一样。"),
            N.openWindow(e)
        },
        openWindow: function(e) {
            var t = {
                type: "open_video",
                qblink: !0
            };
            for (var n in e)
                t[n] = e[n];
            return N.get({
                app: 0,
                cmd: "open_inner_link",
                data: t,
                fail: function() {}
            })
        },
        openJdqsWindow: function(e, t, n, r) {
            return i("X_JS_SDK", {
                module: "view_mgr",
                cmd: "open_popup_web_wnd",
                callback: "",
                seq_id: 100,
                data: {
                    id: 1,
                    width: n,
                    height: r,
                    title: t,
                    url: e
                }
            })
        },
        set_wegame_cookie: function(e) {
            a("TGP.set_wegame_cookie", "请使用 setLoginCookie 替代"),
            N.setLoginCookie(e)
        },
        setLoginCookie: function(e, t) {
            var n = u();
            if (c(n) && !t)
                return void setTimeout(function() {
                    e && e(n)
                }, 0);
            var r = u(function(e) {
                return j.getUrlPara(e)
            });
            if (c(r))
                return s(r),
                void setTimeout(function() {
                    e && e(r)
                }, 0);
            var o = setTimeout(function() {
                e && e(null)
            }, 1e3)
              , i = "0";
            try {
                top.TGP && top.TGP.status && (i = top.TGP.status.curMod)
            } catch (e) {}
            N.get({
                src: i,
                app: "0",
                cmd: "m_get_client_info",
                timeout: 1e3,
                success: function(t) {
                    clearTimeout(o),
                    t && t.data ? (s(t.data),
                    e && e(t.data)) : e && e(null)
                },
                fail: function() {
                    clearTimeout(o),
                    e && e(null)
                }
            })
        },
        storage: {
            set: function(e) {
                N.get({
                    app: 0,
                    cmd: "jc_plugin_set_cfg",
                    data: {
                        module_id: e.module_id + "" || "0",
                        expire_time: e.expire_time || 1e6,
                        datas: e.datas
                    },
                    success: function() {},
                    fail: function() {}
                })
            },
            get: function(e, t) {
                N.get({
                    app: 0,
                    cmd: "jc_plugin_get_cfg",
                    data: {
                        module_id: e.module_id + "" || "0",
                        keys: e.keys
                    },
                    success: function(e) {
                        "function" == typeof t && t(e)
                    },
                    fail: function(e) {
                        "function" == typeof t && t(e)
                    }
                })
            },
            del: function(e) {
                N.get({
                    app: 0,
                    cmd: "jc_plugin_del_cfg",
                    data: {
                        module_id: e.module_id + "" || "0",
                        keys: e.keys
                    },
                    success: function() {},
                    fail: function() {}
                })
            }
        },
        render: function() {},
        log: function(e) {
            var t = 0;
            if ("string" == typeof e && e.constructor == String && (e = {
                text: "[WEBLOG] " + e
            }),
            e.level = e.level || "3",
            !L.isWeGame)
                return void ("undefined" != typeof console && "function" == typeof console.log && console.log(e.text));
            try {
                window.top.TGP && window.top.TGP.status && (t = window.top.TGP.status.curMod)
            } catch (e) {}
            e.filter = e.filter ? t + "_" + e.filter : t,
            N.get({
                src: "0",
                app: "0",
                cmd: "tx_log",
                data: {
                    level: e.level,
                    filter: e.filter,
                    text: e.text
                },
                success: function(e) {
                    console.log("log fail : " + JSON.stringify(e))
                },
                fail: function(e) {
                    console.log("WEB log fail : " + JSON.stringify(e))
                }
            })
        },
        action: function(e, t, n) {
            function r(e, t) {
                var n = "0";
                t && t.url && -1 != t.url.indexOf(".qq.com") && (n = "1"),
                t && void 0 !== t.use_ptlogin && (n = t.use_ptlogin),
                N.get({
                    app: 0,
                    cmd: "open_inner_link",
                    data: {
                        type: "open_web",
                        browser: e,
                        tgp_browser_type: "QBLink",
                        url: P.replaceDomain(t.url),
                        title: t.title,
                        use_ptlogin: n
                    },
                    fail: function() {
                        window.open(P.replaceDomain(t.url), "TGPWindow")
                    }
                })
            }
            function o(e, t, n, r) {
                N.openWindow({
                    url: e,
                    width: t,
                    height: n,
                    title: r
                })
            }
            var i = arguments.length;
            if (0 === i || 1 === i && "function" == typeof e)
                return !document.__attach_tgp_action && (document.addEventListener("click", function(t) {
                    var n = t.target
                      , r = n.dataset.tgpaction
                      , o = n.dataset.windowtitle;
                    if (r || (n = n.closest("[data-tgpaction]")),
                    !n)
                        return !1;
                    r = n.dataset.tgpaction,
                    o = n.dataset.windowtitle;
                    try {
                        var i = JSON.parse(r);
                        if (/\bxTools\.exe/i.test(navigator.userAgent) || /\BattleCare\.exe/i.test(navigator.userAgent)) {
                            var a = P.replaceDomain(window.location.protocol + "//plat.tgp.qq.com/video/zone/template-video.html")
                              , s = P.replaceDomain(window.location.protocol + "//plat.tgp.qq.com/video/video-player/index.html?gid=" + i[1].appId + "&vid=" + i[1].vid + "&from=" + a);
                            return N.openJdqsWindow(s, "视频", 1080, 630),
                            document.__attach_tgp_action = !0,
                            !0
                        }
                        N.action(i[0], i[1], o),
                        "function" == typeof e && e.call(n, i[0], i[1])
                    } catch (t) {
                        console.warn("%cTGP.action", "color:red;font-size:2em;", "data-tgpaction设置的参数错误，请检查!")
                    }
                }, !1),
                document.__attach_tgp_action = !0,
                !0);
            if (e *= 1,
            t = t || {},
            isNaN(e))
                return console.error("TGP.action(actionId, params)的第一个参数actionId必须是Number");
            switch (e) {
            case 100:
                r("os", t);
                break;
            case 101:
                r("tgp", t);
                break;
            case 102:
                r("multi_web", t);
                break;
            case 103:
                var a = [];
                for (var s in t) {
                    var c = t[s];
                    a.push(s + "=" + encodeURIComponent(c))
                }
                var u = B + location.hostname + "/helper/pop-video-player/index.html?" + a.join("&");
                o(u, t.width, t.height);
                break;
            case 105:
                o(t.url, t.width || 800, t.height || 600);
                break;
            case 110:
                if (!("vid"in t))
                    return;
                "catagory"in t || (t.catagory = 1);
                var l = t.appId || 0
                  , p = t.vid
                  , f = t.from || encodeURIComponent(location.protocol + "//" + location.host + location.pathname) || ""
                  , d = P.replaceDomain(B + "plat.tgp.qq.com/video/video-player/index.html?")
                  , u = ["gid=" + l, "vid=" + p]
                  , g = 1080
                  , h = 630;
                switch (1 * t.catagory) {
                case 0:
                    u.push("sourcetype=1");
                    break;
                case 999:
                    u.push("sourcetype=2")
                }
                u.push("from=" + f),
                u = d + u.join("&"),
                o(u, g, h, n);
                break;
            case 120:
                var m = ""
                  , f = "";
                "string" == typeof t ? m = t : (m = t.liveId,
                f = t.from || ""),
                M.openLivePlayer(m, f);
                break;
            case 121:
                var v = t.gameId
                  , w = t.roomId
                  , y = t.subRoomId
                  , b = t.from || ""
                  , u = P.replaceDomain(B + "plat.tgp.qq.com/tgpforum/video/index.html#!/live/room/" + v + "/" + w + "/" + y + "?from=" + b, g, h);
                window.screen.height > 900 ? (g = 1028,
                h = 900) : (g = 1034,
                h = 626),
                o(u, g, h);
                break;
            case 122:
                var l = t.gameId
                  , _ = t.roomId
                  , u = P.replaceDomain(B + "plat.tgp.qq.com/live/selfroom/selfroom.html?game_id=" + l + "&room_id=" + _);
                o(u, 1280, 707);
                break;
            case 200:
                N.jump(t);
                break;
            case 301:
                !function(e, t, n) {
                    N.get({
                        app: 0,
                        cmd: e,
                        data: t,
                        fail: n || function() {}
                    })
                }("jc_start_game", t)
            }
        },
        monitorReport: function(e) {
            var t, n = N.status;
            e && !isNaN(e.key) && (t = {
                app_id: isNaN(e.app) ? n.curMod : e.app,
                report_id: 1 * e.key,
                value: isNaN(e.value) ? -1 : 1 * e.value
            },
            N.get({
                app: 0,
                cmd: "tgp_monitor_report",
                data: t,
                success: function() {},
                fail: function() {}
            }))
        },
        jumpMMOGDetail: function(e) {
            return e && e.params.game_id ? 16 != +e.page && -1 === e.page.indexOf("MMOG_detail.html") ? N.jump(e) : e.params ? void N.get({
                app: "0",
                cmd: "m_query_game_info_by_id",
                data: {
                    game_id_count: 1,
                    game_id_list: [e.params.game_id]
                },
                success: function(t) {
                    t && t.data && t.data.length > 0 && 1 == +t.data[0].game_main_type && (e.page = 20),
                    N.jump(e)
                },
                fail: function() {
                    N.jump(e)
                }
            }) : N.jump(e) : N.jump(e)
        }
    };
    L.isBrowser && (window.TGP = N),
    L.isWeGame && window.addEventListener("message", function(e) {
        e && e.data && s(e.data)
    }, !1);
    var U = {
        seq: 1,
        executors: []
    }
      , G = {}
      , F = function() {};
    g("on_comm_center_call_back", function(e, t, n) {
        if (0 !== t.length && 0 !== n.length)
            try {
                var r = JSON.parse(t)
                  , o = ~~JSON.parse(n).seq;
                U.executors = U.executors.filter(function(e) {
                    var t = e.seq === o;
                    return t && e.fn.call(null, r),
                    !t
                })
            } catch (e) {}
    }),
    g("on_comm_center_broadcast", function(e, t) {
        var n = G[e];
        if (n && n.length) {
            var r = t && t.length ? JSON.parse(t) : {};
            n.forEach(function(e) {
                e(r)
            })
        }
    });
    var z, W = l, J = p, Q = f, H = d, Y = Object.freeze({
        call: l,
        listen: p,
        broadcast: f,
        unlisten: d,
        call_service: W,
        listen_broadcast: J,
        send_broadcast: Q,
        remove_listen: H
    }), V = null, X = null, K = null, Z = Object.freeze({
        isWeGameX: h,
        isOversea: m,
        queryTgpIsNetBar: v,
        queryTgpLanguage: w
    }), $ = Object.freeze({
        railCrossCloseWebWindow: b,
        crossInvoke: _
    }), ee = null, te = "zh_CN", ne = Object.freeze({
        getClientInfo: k,
        callRailCpp: A,
        getLanguage: q,
        setLanguage: C
    });
    t.tgp = N,
    t.env = Z,
    t.cross = $,
    t.service = Y,
    t.live = M,
    t.client = ne
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        void 0 === t && (t = document.location.href);
        var r = t.match(/\/mars_vars(.+)/i)
          , o = "";
        r && r.length > 1 && (o = r[1]);
        var i = new RegExp("/" + e + "-([^/]+)","im")
          , a = ""
          , s = o.match(i);
        s && s.length > 1 && (a = s[1]),
        a = a.replace(/</g, "");
        var c = new RegExp("[?&#]" + e + "=[^&#?]*","igm")
          , u = t.match(c);
        if (!u)
            return "from" !== e || n ? a : b("from") || a;
        for (var l = u[0], p = l.indexOf("="), f = l.substr(p + 1, l.length); f.indexOf("<") >= 0; )
            f = f.replace("<", "");
        return f.indexOf("#") > 0 && (p = f.indexOf("#"),
        f = f.substr(0, p)),
        "from" !== e || f || n || (f = b("from")),
        f || a
    }
    function o(e, n) {
        var r = t.getUrlPara(e, n);
        return /^[\w_\-\.]+$/.test(r) || (r = ""),
        r
    }
    function i(e, t, n) {
        var r = null
          , o = ""
          , i = e.split("?")
          , a = i[0]
          , s = i[1]
          , c = "";
        if (s) {
            var u = s.split("#")
              , l = u[0]
              , r = u[1];
            r && (s = l),
            i = s.split("&");
            for (var p = 0; p < i.length; p++)
                i[p].split("=")[0] != t && (o += c + i[p],
                c = "&")
        } else {
            var u = a.split("#")
              , l = u[0]
              , r = u[1];
            l && (a = l)
        }
        return r && (n += "#" + r),
        a + "?" + o + c + t + "=" + n
    }
    function a(e) {
        console.warn(" <getUrlParam> is deprecated, please use <getUrlPara> instead.");
        var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
          , r = window.location.search.substr(1).match(n);
        return null != r ? t.domXssSafe(decodeURIComponent(t.domXssSafe(r[2]))) : ""
    }
    function s(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
    }
    function c(e) {
        var t = [];
        if ("object" != typeof e)
            return "";
        for (var n in e)
            t.push(n + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    function u(e) {
        var t = {};
        if (!e)
            return t;
        for (var n = e.split("&"), r = 0, o = n.length; r < o; r++) {
            var i = n[r]
              , a = i.split("=");
            t[a[0]] = decodeURIComponent(a[1])
        }
        return t
    }
    function l(e, t, n) {
        return t ? ("object" == typeof t && (t = c(t)),
        t && (t = "?" + t)) : t = "",
        n ? ("object" == typeof n && (n = c(n)),
        n && (n = "#" + n)) : n = "",
        e + t + n
    }
    function p(e) {
        return e ? A(e).pathname : k ? location.pathname : ""
    }
    function f(e) {
        return u((e ? A(e).query : k ? location.search : "").replace(/^\?/, ""))
    }
    function d(e) {
        return u((e ? A(e).hash : k ? location.hash : "").replace(/^#/, ""))
    }
    function g(e, t) {
        return f(t)[e]
    }
    function h(e, t) {
        return d(t)[e]
    }
    function m(e, t) {
        var n = d();
        if ("string" == typeof e && "string" == typeof t)
            n[e] = t;
        else if ("object" == typeof e)
            if (t)
                n = e;
            else
                for (var r in e)
                    n[r] = e[r];
        location.hash = c(n)
    }
    function v(e) {
        if (!e)
            return "";
        var t = String(e).split(":");
        return "http" !== t[0] && "https" !== t[0] || t.shift(),
        t.join(":")
    }
    function w(e) {
        !x && sessionStorage && e && "[object Object]" === Object.prototype.toString.call(e) && (e.path = location.href,
        sessionStorage.setItem(T, JSON.stringify(e)))
    }
    function y(e) {
        if (!x && e && sessionStorage && history && history.replaceState) {
            var t = !1
              , n = {}
              , o = document.referrer || location.href
              , i = location.href
              , a = sessionStorage.getItem(T);
            if (a)
                try {
                    a = JSON.parse(a),
                    a.path === o && (n = a)
                } catch (e) {}
            for (var s = 0; s < e.length; s++) {
                var c = e[s]
                  , u = r(c, void 0, "onlyUrl")
                  , l = new RegExp("&+" + c + "=" + u,"g")
                  , p = new RegExp("\\?+" + c + "=" + u,"g");
                u && (i = i.replace(l, "").replace(p, "?").replace(/\?&+/, "?").replace(/\?+$/, ""),
                n[c] = u,
                t = !0)
            }
            t && (history.replaceState({}, null, i),
            n.path = document.referrer || location.href,
            sessionStorage.setItem(T, JSON.stringify(n)))
        }
    }
    function b(e) {
        var t = {}
          , n = document.referrer
          , r = null;
        if (x || !sessionStorage)
            return e ? t[e] || "" : t;
        r = sessionStorage.getItem(T);
        var o = sessionStorage.getItem(q);
        if (r)
            try {
                r = JSON.parse(r),
                r.path && (r.path === n || r.path === location.href && !n || n === location.href && r.path === o) && (t = r)
            } catch (e) {}
        return e ? t[e] || "" : t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var _ = n(18)
      , x = _.isWeGame
      , k = _.isBrowser
      , A = n(103)
      , T = "custom_json"
      , q = "last_referrer";
    t.getUrlPara = r,
    t.getSafePara = o,
    t.setUrlPara = i,
    t.getUrlParam = a,
    t.domXssSafe = s,
    t.serialize = c,
    t.unserialize = u,
    t.make = l,
    t.getPathName = p,
    t.getSearches = f,
    t.getSearch = g,
    t.getHashes = d,
    t.getHash = h,
    t.setHash = m,
    t.clearProtocol = v,
    t.transferUrlDataToReferrerSession = y,
    t.getDataFromReferrerSession = b,
    t.setReferrerSession = w
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function r(e) {
            return (e || "").toString().replace(g, "")
        }
        function o(e) {
            var n;
            n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
            var r = n.location || {};
            e = e || r;
            var o, i = {}, a = typeof e;
            if ("blob:" === e.protocol)
                i = new s(unescape(e.pathname),{});
            else if ("string" === a) {
                i = new s(e,{});
                for (o in m)
                    delete i[o]
            } else if ("object" === a) {
                for (o in e)
                    o in m || (i[o] = e[o]);
                void 0 === i.slashes && (i.slashes = f.test(e.href))
            }
            return i
        }
        function i(e) {
            e = r(e);
            var t = d.exec(e);
            return {
                protocol: t[1] ? t[1].toLowerCase() : "",
                slashes: !!t[2],
                rest: t[3]
            }
        }
        function a(e, t) {
            if ("" === e)
                return t;
            for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, a = 0; r--; )
                "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1),
                a++) : a && (0 === r && (i = !0),
                n.splice(r, 1),
                a--);
            return i && n.unshift(""),
            "." !== o && ".." !== o || n.push(""),
            n.join("/")
        }
        function s(e, t, n) {
            if (e = r(e),
            !(this instanceof s))
                return new s(e,t,n);
            var c, u, f, d, g, m, v = h.slice(), w = typeof t, y = this, b = 0;
            for ("object" !== w && "string" !== w && (n = t,
            t = null),
            n && "function" != typeof n && (n = p.parse),
            t = o(t),
            u = i(e || ""),
            c = !u.protocol && !u.slashes,
            y.slashes = u.slashes || c && t.slashes,
            y.protocol = u.protocol || t.protocol || "",
            e = u.rest,
            u.slashes || (v[3] = [/(.*)/, "pathname"]); b < v.length; b++)
                d = v[b],
                "function" != typeof d ? (f = d[0],
                m = d[1],
                f !== f ? y[m] = e : "string" == typeof f ? ~(g = e.indexOf(f)) && ("number" == typeof d[2] ? (y[m] = e.slice(0, g),
                e = e.slice(g + d[2])) : (y[m] = e.slice(g),
                e = e.slice(0, g))) : (g = f.exec(e)) && (y[m] = g[1],
                e = e.slice(0, g.index)),
                y[m] = y[m] || (c && d[3] ? t[m] || "" : ""),
                d[4] && (y[m] = y[m].toLowerCase())) : e = d(e);
            n && (y.query = n(y.query)),
            c && t.slashes && "/" !== y.pathname.charAt(0) && ("" !== y.pathname || "" !== t.pathname) && (y.pathname = a(y.pathname, t.pathname)),
            l(y.port, y.protocol) || (y.host = y.hostname,
            y.port = ""),
            y.username = y.password = "",
            y.auth && (d = y.auth.split(":"),
            y.username = d[0] || "",
            y.password = d[1] || ""),
            y.origin = y.protocol && y.host && "file:" !== y.protocol ? y.protocol + "//" + y.host : "null",
            y.href = y.toString()
        }
        function c(e, t, n) {
            var r = this;
            switch (e) {
            case "query":
                "string" == typeof t && t.length && (t = (n || p.parse)(t)),
                r[e] = t;
                break;
            case "port":
                r[e] = t,
                l(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname,
                r[e] = "");
                break;
            case "hostname":
                r[e] = t,
                r.port && (t += ":" + r.port),
                r.host = t;
                break;
            case "host":
                r[e] = t,
                /:\d+$/.test(t) ? (t = t.split(":"),
                r.port = t.pop(),
                r.hostname = t.join(":")) : (r.hostname = t,
                r.port = "");
                break;
            case "protocol":
                r.protocol = t.toLowerCase(),
                r.slashes = !n;
                break;
            case "pathname":
            case "hash":
                if (t) {
                    var o = "pathname" === e ? "/" : "#";
                    r[e] = t.charAt(0) !== o ? o + t : t
                } else
                    r[e] = t;
                break;
            default:
                r[e] = t
            }
            for (var i = 0; i < h.length; i++) {
                var a = h[i];
                a[4] && (r[a[1]] = r[a[1]].toLowerCase())
            }
            return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null",
            r.href = r.toString(),
            r
        }
        function u(e) {
            e && "function" == typeof e || (e = p.stringify);
            var t, n = this, r = n.protocol;
            r && ":" !== r.charAt(r.length - 1) && (r += ":");
            var o = r + (n.slashes ? "//" : "");
            return n.username && (o += n.username,
            n.password && (o += ":" + n.password),
            o += "@"),
            o += n.host + n.pathname,
            t = "object" == typeof n.query ? e(n.query) : n.query,
            t && (o += "?" !== t.charAt(0) ? "?" + t : t),
            n.hash && (o += n.hash),
            o
        }
        var l = n(104)
          , p = n(105)
          , f = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
          , d = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
          , g = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+")
          , h = [["#", "hash"], ["?", "query"], function(e) {
            return e.replace("\\", "/")
        }
        , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
          , m = {
            hash: 1,
            query: 1
        };
        s.prototype = {
            set: c,
            toString: u
        },
        s.extractProtocol = i,
        s.location = o,
        s.trimLeft = r,
        s.qs = p,
        e.exports = s
    }
    ).call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        if (t = t.split(":")[0],
        !(e = +e))
            return !1;
        switch (t) {
        case "http":
        case "ws":
            return 80 !== e;
        case "https":
        case "wss":
            return 443 !== e;
        case "ftp":
            return 21 !== e;
        case "gopher":
            return 70 !== e;
        case "file":
            return !1
        }
        return 0 !== e
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "))
        } catch (e) {
            return null
        }
    }
    function o(e) {
        for (var t, n = /([^=?&]+)=?([^&]*)/g, o = {}; t = n.exec(e); ) {
            var i = r(t[1])
              , a = r(t[2]);
            null === i || null === a || i in o || (o[i] = a)
        }
        return o
    }
    function i(e, t) {
        t = t || "";
        var n, r, o = [];
        "string" != typeof t && (t = "?");
        for (r in e)
            if (s.call(e, r)) {
                if (n = e[r],
                n || null !== n && n !== a && !isNaN(n) || (n = ""),
                r = encodeURIComponent(r),
                n = encodeURIComponent(n),
                null === r || null === n)
                    continue;
                o.push(r + "=" + n)
            }
        return o.length ? t + o.join("&") : ""
    }
    var a, s = Object.prototype.hasOwnProperty;
    t.stringify = i,
    t.parse = o
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = window.location.host
          , n = !1;
        return n = t.indexOf("wegame.com") >= 0 || t.indexOf("wegame.com.cn") >= 0,
        n ? e.replace(/\/\/(oss|forum|rail|webd|oper-promot|im|wpicupload|act|iso)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/api\.(pallas)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/middle\.tgp\.qq\.com/, "//" + t + "/api/middle").replace(/\/\/qt\.qq\.com/, "//" + t + "/api/qt").replace(/\/\/plat\.tgp\.qq\.com/, "//" + t).replace(/\/\/game\.tgp\.qq\.com/, "//" + t) : e
    }
    function o(e) {
        var t = window.location.host;
        if (t.indexOf("wegame.com") >= 0 || t.indexOf("wegame.com.cn") >= 0) {
            var n = /\.com\.cn$/.test(t) ? "//act.wegame.com.cn" : "//act.wegame.com";
            return e.replace(/\/\/(demo|act)\.tgp\.qq\.com/, n)
        }
        return e
    }
    function i() {
        var e = !1;
        return e
    }
    function a(e) {
        return /^(https?:)?\/\//.test(e)
    }
    function s(e) {
        if (!e)
            return "";
        if (!a(e))
            return "//wegame.gtimg.com" + e;
        var t = window.location.host;
        return t.indexOf("qq.com") >= 0 || t.indexOf("wegame.com.cn") >= 0 ? e.replace(/\/\/cdn\.tgp\.qq\.com/, "//wegame.gtimg.com") : e.replace(/\/\/cdn\.tgp\.qq\.com/, "//img.gtgres.com").replace(/\/\/wegame\.gtimg\.com/, "//img.gtgres.com")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.replaceDomain = r,
    t.replaceActDomain = o,
    t.isOverSeaDomain = i,
    t.replaceCDNDomain = s
}
, function(e, t, n) {
    e.exports = n(108)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = new a(e)
          , n = i(a.prototype.request, t);
        return o.extend(n, a.prototype, t),
        o.extend(n, t),
        n
    }
    var o = n(0)
      , i = n(49)
      , a = n(109)
      , s = n(55)
      , c = n(52)
      , u = r(c);
    u.Axios = a,
    u.create = function(e) {
        return r(s(u.defaults, e))
    }
    ,
    u.Cancel = n(56),
    u.CancelToken = n(122),
    u.isCancel = n(51),
    u.all = function(e) {
        return Promise.all(e)
    }
    ,
    u.spread = n(123),
    e.exports = u,
    e.exports.default = u
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        this.defaults = e,
        this.interceptors = {
            request: new a,
            response: new a
        }
    }
    var o = n(0)
      , i = n(50)
      , a = n(110)
      , s = n(111)
      , c = n(55);
    r.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {},
        e.url = arguments[0]) : e = e || {},
        e = c(this.defaults, e),
        e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [s, void 0]
          , n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
            t.unshift(e.fulfilled, e.rejected)
        }),
        this.interceptors.response.forEach(function(e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length; )
            n = n.then(t.shift(), t.shift());
        return n
    }
    ,
    r.prototype.getUri = function(e) {
        return e = c(this.defaults, e),
        i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }
    ,
    o.forEach(["delete", "get", "head", "options"], function(e) {
        r.prototype[e] = function(t, n) {
            return this.request(o.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    }),
    o.forEach(["post", "put", "patch"], function(e) {
        r.prototype[e] = function(t, n, r) {
            return this.request(o.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }),
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function r() {
        this.handlers = []
    }
    var o = n(0);
    r.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }),
        this.handlers.length - 1
    }
    ,
    r.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    ,
    r.prototype.forEach = function(e) {
        o.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }
    ,
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var o = n(0)
      , i = n(112)
      , a = n(51)
      , s = n(52);
    e.exports = function(e) {
        return r(e),
        e.headers = e.headers || {},
        e.data = i(e.data, e.headers, e.transformRequest),
        e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
        o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }),
        (e.adapter || s.adapter)(e).then(function(t) {
            return r(e),
            t.data = i(t.data, t.headers, e.transformResponse),
            t
        }, function(t) {
            return a(t) || (r(e),
            t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))),
            Promise.reject(t)
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t, n) {
        return r.forEach(n, function(n) {
            e = n(e, t)
        }),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e, t) {
        r.forEach(e, function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
            delete e[r])
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(54);
    e.exports = function(e, t, n) {
        var o = n.config.validateStatus;
        !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o) {
        return e.config = t,
        n && (e.code = n),
        e.request = r,
        e.response = o,
        e.isAxiosError = !0,
        e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }
        ,
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(117)
      , o = n(118);
    e.exports = function(e, t) {
        return e && !r(t) ? o(e, t) : t
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, i, a = {};
        return e ? (r.forEach(e.split("\n"), function(e) {
            if (i = e.indexOf(":"),
            t = r.trim(e.substr(0, i)).toLowerCase(),
            n = r.trim(e.substr(i + 1)),
            t) {
                if (a[t] && o.indexOf(t) >= 0)
                    return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
            }
        }),
        a) : a
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? function() {
        function e(e) {
            var t = e;
            return n && (o.setAttribute("href", t),
            t = o.href),
            o.setAttribute("href", t),
            {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            }
        }
        var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
        return t = e(window.location.href),
        function(n) {
            var o = r.isString(n) ? e(n) : n;
            return o.protocol === t.protocol && o.host === t.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }()
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, t, n, o, i, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(o) && s.push("path=" + o),
                r.isString(i) && s.push("domain=" + i),
                !0 === a && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        }
        );
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new o(e),
            t(n.reason))
        })
    }
    var o = n(56);
    r.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    r.source = function() {
        var e;
        return {
            token: new r(function(t) {
                e = t
            }
            ),
            cancel: e
        }
    }
    ,
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
    }
    function o(e) {
        return ((String(e || "").match(s) || [])[0] || "") + String(e || "").replace(s, "").replace(c, function(e) {
            return e[e.length - 1].toUpperCase()
        })
    }
    function i(e) {
        return String(e || "").replace(u, function(e) {
            return e.toLowerCase()
        }).replace(l, function(e, t) {
            return "_" + t.toLowerCase()
        })
    }
    function a(e) {
        return function t(n) {
            return "object" === r(n) ? Object.keys(n).reduce(function(r, o) {
                return r[e(o)] = t(n[o]),
                r
            }, {}) : "array" === r(n) ? n.map(t) : n
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = /^\_+/g
      , c = /\_+[A-Za-z0-9]/g;
    t.snakeToCamel = o;
    var u = /^[A-Z]+/
      , l = /\.?([A-Z]+)/g;
    t.camelToSnake = i,
    t.camelKeys = a(o),
    t.snakeKeys = a(i)
}
, function(e, t, n) {
    var r, o;
    !function(i) {
        var a;
        if (r = i,
        void 0 !== (o = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = o),
        a = !0,
        e.exports = i(),
        a = !0,
        !a) {
            var s = window.Cookies
              , c = window.Cookies = i();
            c.noConflict = function() {
                return window.Cookies = s,
                c
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    t[r] = n[r]
            }
            return t
        }
        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        function n(r) {
            function o() {}
            function i(t, n, i) {
                if ("undefined" != typeof document) {
                    i = e({
                        path: "/"
                    }, o.defaults, i),
                    "number" == typeof i.expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        var a = JSON.stringify(n);
                        /^[\{\[]/.test(a) && (n = a)
                    } catch (e) {}
                    n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var c in i)
                        i[c] && (s += "; " + c,
                        !0 !== i[c] && (s += "=" + i[c].split(";")[0]));
                    return document.cookie = t + "=" + n + s
                }
            }
            function a(e, n) {
                if ("undefined" != typeof document) {
                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                        var s = i[a].split("=")
                          , c = s.slice(1).join("=");
                        n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                        try {
                            var u = t(s[0]);
                            if (c = (r.read || r)(c, u) || t(c),
                            n)
                                try {
                                    c = JSON.parse(c)
                                } catch (e) {}
                            if (o[u] = c,
                            e === u)
                                break
                        } catch (e) {}
                    }
                    return e ? o[e] : o
                }
            }
            return o.set = i,
            o.get = function(e) {
                return a(e, !1)
            }
            ,
            o.getJSON = function(e) {
                return a(e, !0)
            }
            ,
            o.remove = function(t, n) {
                i(t, "", e(n, {
                    expires: -1
                }))
            }
            ,
            o.defaults = {},
            o.withConverter = n,
            o
        }
        return n(function() {})
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(127)
      , o = n(128)
      , i = n(58);
    e.exports = {
        formats: i,
        parse: o,
        stringify: r
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(30)
      , o = n(58)
      , i = Object.prototype.hasOwnProperty
      , a = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, t) {
            return e + "[" + t + "]"
        },
        repeat: function(e) {
            return e
        }
    }
      , s = Array.isArray
      , c = Array.prototype.push
      , u = function(e, t) {
        c.apply(e, s(t) ? t : [t])
    }
      , l = Date.prototype.toISOString
      , p = o.default
      , f = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        format: p,
        formatter: o.formatters[p],
        indices: !1,
        serializeDate: function(e) {
            return l.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    }
      , d = function(e) {
        return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" == typeof e || "bigint" == typeof e
    }
      , g = function e(t, n, o, i, a, c, l, p, g, h, m, v, w) {
        var y = t;
        if ("function" == typeof l ? y = l(n, y) : y instanceof Date ? y = h(y) : "comma" === o && s(y) && (y = r.maybeMap(y, function(e) {
            return e instanceof Date ? h(e) : e
        }).join(",")),
        null === y) {
            if (i)
                return c && !v ? c(n, f.encoder, w, "key") : n;
            y = ""
        }
        if (d(y) || r.isBuffer(y)) {
            if (c) {
                return [m(v ? n : c(n, f.encoder, w, "key")) + "=" + m(c(y, f.encoder, w, "value"))]
            }
            return [m(n) + "=" + m(String(y))]
        }
        var b = [];
        if (void 0 === y)
            return b;
        var _;
        if (s(l))
            _ = l;
        else {
            var x = Object.keys(y);
            _ = p ? x.sort(p) : x
        }
        for (var k = 0; k < _.length; ++k) {
            var A = _[k]
              , T = y[A];
            if (!a || null !== T) {
                var q = s(y) ? "function" == typeof o ? o(n, A) : n : n + (g ? "." + A : "[" + A + "]");
                u(b, e(T, q, o, i, a, c, l, p, g, h, m, v, w))
            }
        }
        return b
    }
      , h = function(e) {
        if (!e)
            return f;
        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
            throw new TypeError("Encoder has to be a function.");
        var t = e.charset || f.charset;
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = o.default;
        if (void 0 !== e.format) {
            if (!i.call(o.formatters, e.format))
                throw new TypeError("Unknown format option provided.");
            n = e.format
        }
        var r = o.formatters[n]
          , a = f.filter;
        return ("function" == typeof e.filter || s(e.filter)) && (a = e.filter),
        {
            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
            allowDots: void 0 === e.allowDots ? f.allowDots : !!e.allowDots,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
            delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : f.encode,
            encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
            filter: a,
            formatter: r,
            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
        }
    };
    e.exports = function(e, t) {
        var n, r, o = e, i = h(t);
        "function" == typeof i.filter ? (r = i.filter,
        o = r("", o)) : s(i.filter) && (r = i.filter,
        n = r);
        var c = [];
        if ("object" != typeof o || null === o)
            return "";
        var l;
        l = t && t.arrayFormat in a ? t.arrayFormat : t && "indices"in t ? t.indices ? "indices" : "repeat" : "indices";
        var p = a[l];
        n || (n = Object.keys(o)),
        i.sort && n.sort(i.sort);
        for (var f = 0; f < n.length; ++f) {
            var d = n[f];
            i.skipNulls && null === o[d] || u(c, g(o[d], d, p, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.formatter, i.encodeValuesOnly, i.charset))
        }
        var m = c.join(i.delimiter)
          , v = !0 === i.addQueryPrefix ? "?" : "";
        return i.charsetSentinel && ("iso-8859-1" === i.charset ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"),
        m.length > 0 ? v + m : ""
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(30)
      , o = Object.prototype.hasOwnProperty
      , i = Array.isArray
      , a = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    }
      , s = function(e) {
        return e.replace(/&#(\d+);/g, function(e, t) {
            return String.fromCharCode(parseInt(t, 10))
        })
    }
      , c = function(e, t) {
        return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
    }
      , u = function(e, t) {
        var n, u = {}, l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, p = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, f = l.split(t.delimiter, p), d = -1, g = t.charset;
        if (t.charsetSentinel)
            for (n = 0; n < f.length; ++n)
                0 === f[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === f[n] ? g = "utf-8" : "utf8=%26%2310003%3B" === f[n] && (g = "iso-8859-1"),
                d = n,
                n = f.length);
        for (n = 0; n < f.length; ++n)
            if (n !== d) {
                var h, m, v = f[n], w = v.indexOf("]="), y = -1 === w ? v.indexOf("=") : w + 1;
                -1 === y ? (h = t.decoder(v, a.decoder, g, "key"),
                m = t.strictNullHandling ? null : "") : (h = t.decoder(v.slice(0, y), a.decoder, g, "key"),
                m = r.maybeMap(c(v.slice(y + 1), t), function(e) {
                    return t.decoder(e, a.decoder, g, "value")
                })),
                m && t.interpretNumericEntities && "iso-8859-1" === g && (m = s(m)),
                v.indexOf("[]=") > -1 && (m = i(m) ? [m] : m),
                o.call(u, h) ? u[h] = r.combine(u[h], m) : u[h] = m
            }
        return u
    }
      , l = function(e, t, n, r) {
        for (var o = r ? t : c(t, n), i = e.length - 1; i >= 0; --i) {
            var a, s = e[i];
            if ("[]" === s && n.parseArrays)
                a = [].concat(o);
            else {
                a = n.plainObjects ? Object.create(null) : {};
                var u = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s
                  , l = parseInt(u, 10);
                n.parseArrays || "" !== u ? !isNaN(l) && s !== u && String(l) === u && l >= 0 && n.parseArrays && l <= n.arrayLimit ? (a = [],
                a[l] = o) : a[u] = o : a = {
                    0: o
                }
            }
            o = a
        }
        return o
    }
      , p = function(e, t, n, r) {
        if (e) {
            var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
              , a = /(\[[^[\]]*])/
              , s = /(\[[^[\]]*])/g
              , c = n.depth > 0 && a.exec(i)
              , u = c ? i.slice(0, c.index) : i
              , p = [];
            if (u) {
                if (!n.plainObjects && o.call(Object.prototype, u) && !n.allowPrototypes)
                    return;
                p.push(u)
            }
            for (var f = 0; n.depth > 0 && null !== (c = s.exec(i)) && f < n.depth; ) {
                if (f += 1,
                !n.plainObjects && o.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
                    return;
                p.push(c[1])
            }
            return c && p.push("[" + i.slice(c.index) + "]"),
            l(p, t, n, r)
        }
    }
      , f = function(e) {
        if (!e)
            return a;
        if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder)
            throw new TypeError("Decoder has to be a function.");
        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var t = void 0 === e.charset ? a.charset : e.charset;
        return {
            allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
            allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
            arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
            charset: t,
            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : a.comma,
            decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
            delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
            depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
            parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
        }
    };
    e.exports = function(e, t) {
        var n = f(t);
        if ("" === e || null === e || void 0 === e)
            return n.plainObjects ? Object.create(null) : {};
        for (var o = "string" == typeof e ? u(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, a = Object.keys(o), s = 0; s < a.length; ++s) {
            var c = a[s]
              , l = p(c, o[c], n, "string" == typeof e);
            i = r.merge(i, l, n)
        }
        return r.compact(i)
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = c.isBrowser ? window.location.host : "www.wegame.com.cn";
        return e.replace(/\/\/(oss|forum|rail|webd|oper-promot|im|wpicupload|iso)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/api\.(pallas)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/middle\.tgp\.qq\.com/, "//" + t + "/api/middle").replace(/\/\/qt\.qq\.com/, "//" + t + "/api/qt").replace(/\/\/plat\.tgp\.qq\.com/, "//" + t).replace(/\/\/game\.tgp\.qq\.com/, "//" + t)
    }
    function o(e) {
        var t = c.isBrowser ? window.location.host : "www.wegame.com.cn";
        if (!(t.indexOf("tgp.qq.com") >= 0)) {
            var n = /\.com\.cn$/.test(t) ? "//act.wegame.com.cn" : "//act.wegame.com";
            return e.replace(/\/\/(demo|act)\.tgp\.qq\.com/, n)
        }
        return e
    }
    function i() {
        return !1
    }
    function a(e) {
        return /^(https?:)?\/\//.test(e)
    }
    function s(e) {
        return e ? a(e) ? e.replace(/\/\/cdn\.tgp\.qq\.com/, "//wegame.gtimg.com").replace(/\/\/wegame\.gtimg\.com/, "//wegame.gtimg.com") : "//wegame.gtimg.com" + e : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(130);
    t.replaceDomain = r,
    t.replaceActDomain = o,
    t.isOverSeaDomain = i,
    t.replaceCDNDomain = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        function r(e) {
            try {
                return e()
            } catch (e) {
                return !1
            }
        }
        n.d(t, "isBrowser", function() {
            return o
        }),
        n.d(t, "isServer", function() {
            return i
        }),
        n.d(t, "isWeGame", function() {
            return a
        }),
        n.d(t, "isTgp", function() {
            return s
        }),
        n.d(t, "isWeGameMain", function() {
            return c
        }),
        n.d(t, "isTgpMain", function() {
            return u
        }),
        n.d(t, "isWeGameMainTop", function() {
            return l
        }),
        n.d(t, "isTgpMainTop", function() {
            return p
        }),
        n.d(t, "isWeGameFrame", function() {
            return f
        }),
        n.d(t, "isTgpFrame", function() {
            return d
        }),
        n.d(t, "isWeGameCross", function() {
            return g
        }),
        n.d(t, "isTgpCross", function() {
            return h
        }),
        n.d(t, "isWeGameIndependent", function() {
            return m
        }),
        n.d(t, "isTgpIndependent", function() {
            return v
        }),
        n.d(t, "isDevelopment", function() {
            return w
        }),
        n.d(t, "isTest", function() {
            return y
        }),
        n.d(t, "isPreRelease", function() {
            return b
        }),
        n.d(t, "isProduction", function() {
            return _
        }),
        n.d(t, "isOversea", function() {
            return k
        }),
        n.d(t, "isMainland", function() {
            return A
        }),
        n.d(t, "isWeGameX", function() {
            return T
        });
        var o = "undefined" != typeof window && "undefined" != typeof document
          , i = !o && void 0 !== e
          , a = o && window.external && "function" == typeof window.external.callcpp && r(function() {
            try {
                return window.top.location.href,
                !0
            } catch (e) {
                return !1
            }
        })
          , s = a
          , c = a && r(function() {
            return void 0 !== window.top.TGP.status
        })
          , u = c
          , l = c && r(function() {
            return window.top === window.parent && window.top !== window
        })
          , p = l
          , f = c && r(function() {
            return window.top === window
        })
          , d = f
          , g = a && r(function() {
            return /clienttype=cross/.test(window.location.href)
        })
          , h = g
          , m = a && !c && !g
          , v = m
          , w = !1
          , y = !1
          , b = !1
          , _ = !w && !y && !b
          , x = !1;
        if (!i) {
            x = /wegame\.com$/.test(window.location.host)
        }
        var k = !(i || !w) && x
          , A = !k
          , T = k
    }
    .call(t, n(11))
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        console && console.warn && console.warn(e)
    }
    function o() {
        o.init.call(this)
    }
    function i(e) {
        return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
    }
    function a(e, t, n, o) {
        var a, s, c;
        if ("function" != typeof n)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
        if (s = e._events,
        void 0 === s ? (s = e._events = Object.create(null),
        e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
        s = e._events),
        c = s[t]),
        void 0 === c)
            c = s[t] = n,
            ++e._eventsCount;
        else if ("function" == typeof c ? c = s[t] = o ? [n, c] : [c, n] : o ? c.unshift(n) : c.push(n),
        (a = i(e)) > 0 && c.length > a && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning",
            u.emitter = e,
            u.type = t,
            u.count = c.length,
            r(u)
        }
        return e
    }
    function s() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e.push(arguments[t]);
        this.fired || (this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        m(this.listener, this.target, e))
    }
    function c(e, t, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        }
          , o = s.bind(r);
        return o.listener = n,
        r.wrapFn = o,
        o
    }
    function u(e, t, n) {
        var r = e._events;
        if (void 0 === r)
            return [];
        var o = r[t];
        return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? d(o) : p(o, o.length)
    }
    function l(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n)
                return 1;
            if (void 0 !== n)
                return n.length
        }
        return 0
    }
    function p(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r)
            n[r] = e[r];
        return n
    }
    function f(e, t) {
        for (; t + 1 < e.length; t++)
            e[t] = e[t + 1];
        e.pop()
    }
    function d(e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n)
            t[n] = e[n].listener || e[n];
        return t
    }
    var g, h = "object" == typeof Reflect ? Reflect : null, m = h && "function" == typeof h.apply ? h.apply : function(e, t, n) {
        return Function.prototype.apply.call(e, t, n)
    }
    ;
    g = h && "function" == typeof h.ownKeys ? h.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : function(e) {
        return Object.getOwnPropertyNames(e)
    }
    ;
    var v = Number.isNaN || function(e) {
        return e !== e
    }
    ;
    e.exports = o,
    o.EventEmitter = o,
    o.prototype._events = void 0,
    o.prototype._eventsCount = 0,
    o.prototype._maxListeners = void 0;
    var w = 10;
    Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return w
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || v(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            w = e
        }
    }),
    o.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    o.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || v(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    }
    ,
    o.prototype.getMaxListeners = function() {
        return i(this)
    }
    ,
    o.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
        var r = "error" === e
          , o = this._events;
        if (void 0 !== o)
            r = r && void 0 === o.error;
        else if (!r)
            return !1;
        if (r) {
            var i;
            if (t.length > 0 && (i = t[0]),
            i instanceof Error)
                throw i;
            var a = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
            throw a.context = i,
            a
        }
        var s = o[e];
        if (void 0 === s)
            return !1;
        if ("function" == typeof s)
            m(s, this, t);
        else
            for (var c = s.length, u = p(s, c), n = 0; n < c; ++n)
                m(u[n], this, t);
        return !0
    }
    ,
    o.prototype.addListener = function(e, t) {
        return a(this, e, t, !1)
    }
    ,
    o.prototype.on = o.prototype.addListener,
    o.prototype.prependListener = function(e, t) {
        return a(this, e, t, !0)
    }
    ,
    o.prototype.once = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, c(this, e, t)),
        this
    }
    ,
    o.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, c(this, e, t)),
        this
    }
    ,
    o.prototype.removeListener = function(e, t) {
        var n, r, o, i, a;
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (r = this._events))
            return this;
        if (void 0 === (n = r[e]))
            return this;
        if (n === t || n.listener === t)
            0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
            r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (o = -1,
            i = n.length - 1; i >= 0; i--)
                if (n[i] === t || n[i].listener === t) {
                    a = n[i].listener,
                    o = i;
                    break
                }
            if (o < 0)
                return this;
            0 === o ? n.shift() : f(n, o),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
        }
        return this
    }
    ,
    o.prototype.off = o.prototype.removeListener,
    o.prototype.removeAllListeners = function(e) {
        var t, n, r;
        if (void 0 === (n = this._events))
            return this;
        if (void 0 === n.removeListener)
            return 0 === arguments.length ? (this._events = Object.create(null),
            this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
            this;
        if (0 === arguments.length) {
            var o, i = Object.keys(n);
            for (r = 0; r < i.length; ++r)
                "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if ("function" == typeof (t = n[e]))
            this.removeListener(e, t);
        else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--)
                this.removeListener(e, t[r]);
        return this
    }
    ,
    o.prototype.listeners = function(e) {
        return u(this, e, !0)
    }
    ,
    o.prototype.rawListeners = function(e) {
        return u(this, e, !1)
    }
    ,
    o.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : l.call(e, t)
    }
    ,
    o.prototype.listenerCount = l,
    o.prototype.eventNames = function() {
        return this._eventsCount > 0 ? g(this._events) : []
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        n(133)
    }
    var o = n(59)
      , i = n(165)
      , a = n(137)
      , s = r
      , c = a(o.a, i.a, !1, s, null, null);
    t.a = c.exports
}
, function(e, t, n) {
    var r = n(134);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    r.locals && (e.exports = r.locals);
    n(135)("2d662c3e", r, !0, {})
}
, function(e, t, n) {
    t = e.exports = n(31)(!1),
    t.push([e.i, "\n.widget-login-popbox {\n  display: block;\n  min-width: 350px;\n  border-radius: 6px;\n  overflow: hidden;\n  /* z-index: 201; */\n  border: 1px solid transparent;\n  box-shadow: 0 8px 16px -2px rgba(0, 0, 0, 0.1),\n    0 8px 16px -8px rgba(0, 0, 0, 0.2);\n}\n.widget-login-popbox-title {\n  display: inline-block;\n  color: #333;\n  font-size: 14px;\n  line-height: 45px;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.widget-login-popbox-hd {\n  position: relative;\n  height: 41px;\n  padding: 0 12px;\n  border-bottom: 1px solid #eeeeee;\n  background: #fff;\n  font-size: 0;\n  white-space: nowrap;\n  word-wrap: normal;\n  text-align: left;\n}\n.widget-login-popbox-bd {\n  line-height: 1.5;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #fff;\n  min-height: 50px;\n  padding: 12px;\n  font-size: 13px;\n}\n.widget-login-popbox-bd p {\n  color: #757575;\n}\n.widget-login-popbox-bd span {\n  color: #757575;\n}\n.widget-login-popbox-ft {\n  position: relative;\n  height: 10px;\n  border: none;\n  border-top: 1px solid #e8e8e8;\n  background-color: #f9f9f9;\n}\n.widget-login-popbox-close {\n  text-decoration: none;\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  width: 24px;\n  height: 24px;\n  margin-top: -12px;\n  font-size: 24px;\n  line-height: 24px;\n  color: rgba(0, 0, 0, 0.8);\n  opacity: 0.8;\n  text-align: center;\n  cursor: pointer;\n}\n.twofa_close {\n  text-decoration: none;\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  width: 24px;\n  height: 24px;\n  margin-top: -12px;\n  font-size: 24px;\n  line-height: 24px;\n  color: #3c3c3c;\n  opacity: 0.8;\n  text-align: center;\n  cursor: pointer;\n}\n.twofa_close:hover {\n  opacity: 1;\n}\n", ""])
}
, function(e, t, n) {
    function r(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t]
              , r = l[n.id];
            if (r) {
                r.refs++;
                for (var o = 0; o < r.parts.length; o++)
                    r.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++)
                    r.parts.push(i(n.parts[o]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                for (var a = [], o = 0; o < n.parts.length; o++)
                    a.push(i(n.parts[o]));
                l[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function o() {
        var e = document.createElement("style");
        return e.type = "text/css",
        p.appendChild(e),
        e
    }
    function i(e) {
        var t, n, r = document.querySelector("style[" + v + '~="' + e.id + '"]');
        if (r) {
            if (g)
                return h;
            r.parentNode.removeChild(r)
        }
        if (w) {
            var i = d++;
            r = f || (f = o()),
            t = a.bind(null, r, i, !1),
            n = a.bind(null, r, i, !0)
        } else
            r = o(),
            t = s.bind(null, r),
            n = function() {
                r.parentNode.removeChild(r)
            }
            ;
        return t(e),
        function(r) {
            if (r) {
                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap)
                    return;
                t(e = r)
            } else
                n()
        }
    }
    function a(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet)
            e.styleSheet.cssText = y(t, o);
        else {
            var i = document.createTextNode(o)
              , a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
    function s(e, t) {
        var n = t.css
          , r = t.media
          , o = t.sourceMap;
        if (r && e.setAttribute("media", r),
        m.ssrId && e.setAttribute(v, t.id),
        o && (n += "\n/*# sourceURL=" + o.sources[0] + " */",
        n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
        e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    var c = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !c)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var u = n(136)
      , l = {}
      , p = c && (document.head || document.getElementsByTagName("head")[0])
      , f = null
      , d = 0
      , g = !1
      , h = function() {}
      , m = null
      , v = "data-vue-ssr-id"
      , w = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    e.exports = function(e, t, n, o) {
        g = n,
        m = o || {};
        var i = u(e, t);
        return r(i),
        function(t) {
            for (var n = [], o = 0; o < i.length; o++) {
                var a = i[o]
                  , s = l[a.id];
                s.refs--,
                n.push(s)
            }
            t ? (i = u(e, t),
            r(i)) : i = [];
            for (var o = 0; o < n.length; o++) {
                var s = n[o];
                if (0 === s.refs) {
                    for (var c = 0; c < s.parts.length; c++)
                        s.parts[c]();
                    delete l[s.id]
                }
            }
        }
    }
    ;
    var y = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    }()
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o]
              , a = i[0]
              , s = i[1]
              , c = i[2]
              , u = i[3]
              , l = {
                id: e + ":" + o,
                css: s,
                media: c,
                sourceMap: u
            };
            r[a] ? r[a].parts.push(l) : n.push(r[a] = {
                id: a,
                parts: [l]
            })
        }
        return n
    }
}
, function(e, t) {
    e.exports = function(e, t, n, r, o, i) {
        var a, s = e = e || {}, c = typeof e.default;
        "object" !== c && "function" !== c || (a = e,
        s = e.default);
        var u = "function" == typeof s ? s.options : s;
        t && (u.render = t.render,
        u.staticRenderFns = t.staticRenderFns,
        u._compiled = !0),
        n && (u.functional = !0),
        o && (u._scopeId = o);
        var l;
        if (i ? (l = function(e) {
            e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
            e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
            r && r.call(this, e),
            e && e._registeredComponents && e._registeredComponents.add(i)
        }
        ,
        u._ssrRegister = l) : r && (l = r),
        l) {
            var p = u.functional
              , f = p ? u.render : u.beforeCreate;
            p ? (u._injectStyles = l,
            u.render = function(e, t) {
                return l.call(t),
                f(e, t)
            }
            ) : u.beforeCreate = f ? [].concat(f, l) : [l]
        }
        return {
            esModule: a,
            exports: s,
            options: u
        }
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    e.exports = function(e) {
        return o.stringify.apply(o, arguments)
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(140),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(141),
    e.exports = n(3).Object.assign
}
, function(e, t, n) {
    var r = n(7);
    r(r.S + r.F, "Object", {
        assign: n(142)
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(35)
      , o = n(143)
      , i = n(144)
      , a = n(42)
      , s = n(36)
      , c = Object.assign;
    e.exports = !c || n(23)(function() {
        var e = {}
          , t = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return e[n] = 7,
        r.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = a(e), c = arguments.length, u = 1, l = o.f, p = i.f; c > u; )
            for (var f, d = s(arguments[u++]), g = l ? r(d).concat(l(d)) : r(d), h = g.length, m = 0; h > m; )
                p.call(d, f = g[m++]) && (n[f] = d[f]);
        return n
    }
    : c
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t) {
    t.f = {}.propertyIsEnumerable
}
, function(e, t, n) {
    var r = n(146);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {};
    o.transform = void 0;
    n(62)(r, o);
    r.locals && (e.exports = r.locals)
}
, function(e, t, n) {
    var r = n(61);
    t = e.exports = n(31)(!1),
    t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * \r\n * @authors baronxiong\r\n * @date    2017-08-10 09:41:10\r\n * @version 活动页面顶部通栏\r\n */\r\n\r\n\r\n\r\n/*登录组件*/\r\n.widget-login,\r\n.widget-login *,\r\n.widget-login *:before,\r\n.widget-login *:after{box-sizing:border-box;margin: 0;padding: 0;}\r\n\r\n.widget-login a,\r\n.widget-login a:hover,\r\n.widget-login a:active,\r\n.widget-login a:visited{text-decoration:none;}\r\n\r\n\r\n\r\n.widget-login input,\r\n.widget-login :focus{outline:none;}\r\n.widget-login input{background:none;-webkit-border-radius:0;border-radius:0;-webkit-appearance:none;resize: none;cursor:text;color: #333;font-family:Verdana,Tahoma,Arial}\r\n\r\n.widget-login input::-webkit-input-placeholder{\r\n    color:#aaa;\r\n    font-family:Verdana,Tahoma,Arial;\r\n    font-size: 16px;\r\n}\r\n.widget-login input:-moz-placeholder{\r\n    color:#aaa;\r\n    font-family:Verdana,Tahoma,Arial;\r\n    font-size: 16px;\r\n}\r\n.widget-login input::-moz-placeholder{\r\n    color:#aaa;\r\n    font-family:Verdana,Tahoma,Arial;\r\n    font-size: 16px;\r\n}\r\n.widget-login input:-ms-input-placeholder {\r\n    color:#aaa;\r\n    font-family:Verdana,Tahoma,Arial;\r\n    font-size: 16px;\r\n}\r\n\r\n.widget-login ul,\r\n.widget-login ol,\r\n.widget-login li{list-style:none;}\r\n\r\n.widget-login{position:relative;z-index:9999;width: 560px;height: 410px;padding-top:57px;background-color: #fff;word-wrap:break-word;font-size:12px;line-height:1.5;font-family:Helvetica,Arial,"Microsoft Yahei","Heiti SC"}\r\n.widget-login--app{height:440px;}\r\n.widget-login-hd{position:absolute;left:0;top:0;width:100%;height:57px;border-bottom: 1px solid #e5e5e5;}\r\n.widget-login-bd{height:100%;}\r\n\r\n.widget-login-close{position: absolute;right: 5px;top:2px;width: 24px;height: 24px;font-size:0;line-height: 0;cursor: pointer;opacity: 0.6;overflow: hidden;}\r\n.widget-login-close:after{content: "";position: absolute;left: 50%;top: 50%;width: 12px;height: 12px;margin-left: -6px;margin-top: -6px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACJJREFUCNdjAIIDCQwJBxgMGxikGRj4QAjIAHKBgkApoDwAb6YGNTCU42cAAAAASUVORK5CYII=) no-repeat 50% 50%;}\r\n.widget-login-close:hover{opacity: 1}\r\n\r\n\r\n\r\n\r\n.widget-login-nav{font-size: 0;white-space: nowrap;word-wrap:normal;overflow: hidden;text-align: center;}\r\n.widget-login-nav>li{display: inline-block;margin: 0 20px;}\r\n.widget-login-channel{position:relative;display: block;width: 40px;height: 56px;cursor: pointer;font-size: 0}\r\n.widget-login-channel:before,\r\n.widget-login-channel:after{content: "";position: absolute;}\r\n\r\n.widget-login-channel:before{left:50%;top:50%;width:32px;height: 32px;margin-left: -16px;margin-top: -16px;background:url(' + r(n(147)) + ') no-repeat;}\r\n.widget-login-channel:after{left: 0;bottom: 0;width: 100%;height: 4px;}\r\n.widget-login-channel.cur:after{background-color: #f9b011}\r\n\r\n.widget-login-channel--fb:before{background-position: 0 0;}\r\n.widget-login-channel--fb:hover:before,\r\n.widget-login-channel--fb.cur:before{background-position: -32px 0;}\r\n\r\n\r\n.widget-login-channel--mail:before {background-position: -64px 0;}\r\n.widget-login-channel--mail:hover:before,\r\n.widget-login-channel--mail.cur:before{background-position: -96px 0;}\r\n\r\n\r\n.widget-login-channel--qq:before {background-position: -128px 0;}\r\n.widget-login-channel--qq:hover:before,\r\n.widget-login-channel--qq.cur:before {background-position: -160px 0;}\r\n\r\n\r\n.widget-login-channel--wechat:before {background-position: -192px 0;}\r\n.widget-login-channel--wechat:hover:before,\r\n.widget-login-channel--wechat.cur:before {background-position: -224px 0;}\r\n\r\n\r\n\r\n.widget-login-item{position: relative;width: 100%;height:100%;overflow: hidden;}\r\n.widget-login-detail{padding:7px 11px;}\r\n.widget-login-tit{font-size: 20px;line-height:28px;color: #373737;text-align: center;}\r\n.widget-login-figure{position:relative;z-index:0;display: block;margin: 0 auto;}\r\n.widget-login-figure>img{display: block;width: 100%;height: 100%;object-fit:cover;}\r\n\r\n.widget-login-input{margin-bottom:15px;}\r\n.widget-login-input>input{display: block;width: 100%;height:40px;padding:10px;border:1px solid #d1d1d1;border-radius: 3px;font-size: 16px;line-height: 18px;}\r\n.widget-login-input>p{font-size: 12px;padding-top:6px;line-height:14px;}\r\n\r\n.widget-login-input>input:focus,\r\n.widget-login-input>input.focus{outline:0;border-color:rgba(0,0,0,0.8);background:rgba(255,255,255,0.6);}\r\n.widget-login-input.error>input{border-color: #f64949;background: #fff5f5;color: #333;}\r\n.widget-login-input.error>p{color: #f64949}\r\n\r\n.widget-login-tips{font-size: 12px;text-align: center;}\r\n.widget-login-tips>span,\r\n.widget-login-tips>em{display: block;padding: 5px 0;}\r\n.widget-login-tips>em{font-weight: bold;color: #999999}\r\n\r\n.widget-login-btn{display:block;width:100%;height:36px;border-radius:2px;font-size:18px;line-height:36px;color: #000;background-color: #ffc800;text-align: center;}\r\n.widget-login-btn:hover{background-color: #e6b400;color: #333}\r\n.widget-login-toolbar{position: absolute;left: 0;bottom: 0;width: 100%;padding: 0 11px 7px;}\r\n.widget-login-check{float: left;position: relative;padding-left: 20px;}\r\n.widget-login-check input[type="checkbox"]{ position:absolute;left:0;top:50%;width:14px;height:14px;margin-top:-7px;border-radius:2px;background:rgba(255, 255, 255, 0.2);border:1px solid rgba(0, 0, 0, 0.3);cursor:pointer;}\r\n.widget-login-check input[type="checkbox"]:hover{border-color:rgba(0, 0, 0, 0.8);transition:border-color .2s linear;}\r\n.widget-login-check input[type="checkbox"]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;background:url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAMAAwDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMHCf/EABcBAQEBAQAAAAAAAAAAAAAAAAMFBgf/2gAMAwEAAhADEAAAANnOeSVEdG3FM0H/AP/EACUQAAIBBAAFBQEAAAAAAAAAAAECBQMEBhEABwgTIRIVImFxMv/aAAgBAQABPwDOeqyM5c+5xN7FXtLKLWqKEdDohYyodiKD0XA0UbXnxtTtdE63AdK0bnUf7xzFtkncpkD3rg9+olGxU/zbUgrAehB+ksWO/PD4jFZPJRM7ex9rXlYymzWlwyba37i6f0/o4yTJbiGvxSpLSKlA3yBJ3s/f1x//xAAmEQABBAAEBQUAAAAAAAAAAAABAgMEEQUGMUEAEhMUIRAiMlGh/9oACAECAQE/AMWz/Hw8uxpDau5BpLevU5j7Ck18Tvuk2KJ1iZBjz2+8zAnqyF+T5NI+kJrZP6bPD+FxH5Lcp5sKcavlUdRYo+n/xAAiEQABAgUEAwAAAAAAAAAAAAABAgMABRESYQQQE1EhMUH/2gAIAQMBAT8AfmyGrm1A3/B31SEytDg5NYLln3jAwILSFkOKHkVpt//Z") no-repeat 50% 50%;}\r\n\r\n.widget-login-check input[type="checkbox"]:checked,\r\n.widget-login-check input[type="checkbox"]:focus{outline:0 none;}\r\n.widget-login-check input[type="checkbox"]:checked:after{opacity:1;}\r\n\r\n.widget-login-linklist{float: right;font-size: 0;white-space: nowrap;word-wrap:normal;}\r\n.widget-login-linklist>li{position:relative;display: inline-block;padding: 0 12px;}\r\n.widget-login-linklist>li:before{content: "";position: absolute;left: -1px;top: 50%;width: 2px;height: 10px;margin-top: -5px;background-color: #d6d6d6}\r\n.widget-login-linklist>li:nth-of-type(1):before{display: none;}\r\n.widget-login-link{display:block;font-size: 12px;color: #565656}\r\n.widget-login-link:hover{text-decoration: underline;}\r\n\r\n.widget-login-item>iframe{position: absolute;left: 0;top: 0;width: 100%;height: 100%;border:0 none;}\r\n\r\n\r\n.widget-login-item--wechat .widget-login-detail{position:relative;padding-bottom: 0;overflow: hidden;}\r\n.widget-login-item--wechat .widget-login-figure{width: 100%;height: 100%;}\r\n.widget-login-item--wechat .widget-login-tips{position: absolute;left: 0;top:50px;width: 100%;}\r\n.widget-login-item--wechat .widget-login-figure>iframe{display:block;margin: 0 auto;}\r\n\r\n\r\n\r\n\r\n\r\n.widget-login-item--fb .widget-login-detail{padding-top: 78px;}\r\n.widget-login-item--fb .widget-login-figure{width: 84px;height:84px;margin-bottom: 30px;cursor: pointer;}\r\n\r\n\r\n\r\n\r\n.widget-login-item--mail .widget-login-detail{position:relative;height: 100%;}\r\n.widget-login-item--mail .widget-login-tit,\r\n.widget-login-item--mail .widget-login-account,\r\n.widget-login-item--mail .widget-login-btn{width:232px;margin: 0 auto}\r\n.widget-login-item--mail .widget-login-tit{margin-top: 37px;margin-bottom: 26px;}\r\n.widget-login-item--mail .widget-login-account{margin-bottom:15px;}\r\n\r\n/*wegame-x主题样式*/\r\n/*.theme-wegamex .widget-login-channel:before{background-image: url(../images/widget/login/wegamex-login-icons.png);}\r\n.theme-wegamex .widget-login-channel.cur:after{background-color:#29b8ff}\r\n.theme-wegamex .widget-login-btn{background-color:#29b8ff}\r\n.theme-wegamex .widget-login-btn:hover{background-color:#4ce1ff}\r\n\r\n*/\r\n\r\n\r\n/*弹出式 半透明遮罩*/\r\n.widget-login-mask{position:fixed;left:0;top:0;width: 100%;height:100%;z-index:9999;background-color: rgba(0,0,0,0.5);}\r\n.widget-login-mask .widget-login{position: fixed;left: 50%;top: 50%;margin:-205px 0 0 -280px;}\r\n\r\n/*嵌入式*/\r\n\r\n.widget-login-inject{}', ""])
}
, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAASxUlEQVR4Xu2ce5BU1Z3Hv7/T07cHecxchIDgIypKrFoU1EhSq4kja1nBhenBpft29wBLfLC6ZpMAsTQPFjUpTUXd6OquVplldejHtMr0qCHRcsXdRBPNSjBGxFEWrBWEBefOyADTr/PbOj0z0D3Tt+/th5UK9Plvps85n/P73XO/9zx+5xDqqe6BugdOWg/QSWt53fC6B+oeQF0A6p2g7oGT2AN1ATiJH37d9LoHyhKA7u6fTRw87FnCRF8D8EUAZwFwAcgC+BDA74j5F43jk5taW68/VGv3cveUiWlkljDT10D4IjiPT/gQjN8R8S/caNhErQdrzq+1PX9u9a1fv15ccP75fiYOApgPYOqwDQcAvE5MkXd7ejrXr18vPwvbeD1E6iLdD4EgA/OJh/hMOEDA65CIaG+ZnbQenwn/s7DpT12nIwGIx+PjpMx8B8yrATQ5aHQ/iB4QouEnPp/vqIP8JbNw/PRxKW3gOwA554Mf0FITfkK+j6rmV9v+E6F8OBw+xyXwFICLbezZmpVYGgqF/qeWdg8+03QOCfEUyIbP2MpSLm28rr8qfjwed3EmsxDE1zBwBQMzCTh1+GPXC9A7BH4ty9QZDAb/UEtbc6IWhyup6QsFkOMDmIlhPhN6BeMdBl4DodPTalbMtxWAWKzjIrBQD/68Cox8HySXGsaytyoomyuS2tR8EZN68Fw+n+l9YrlUW9JXMb/Sdp9I5TZu3Hh6g0v8FmDVCR0k2pPJyi+1t7d/5CCzbZYjz0w+3eXi3w6/BLb5AezJZulLp1zXWzZfvfgyk1kF4tuGR7hOeK+CeK1htKs2VpXUi5/W9FUMOOYz8KoQtFZb3Fs2v6QARCKRqwQ4AcLEiq1iHJIgbzAYfLncOo4+23SVkCIBVMEHDkkhveMW9zvmd3aGW1hiQxkdwM60D0lgpd8f2mKXUf1+tLu5RTDVlC+JV45r7XPEH93GWCT8MggtTtp+LA9jixEMXVVWGYvMqYT+MqM8PgFbNK9ZFj8SiUwTxM8A+MtK2s3ADw0juI6IuJLyA92fm9bA6WeoQj6Yfqh5e9cRwTHfUgByX34pflXVyz/iBcYhCHlFOSOB3Jdf0K+qfPlHWnCIJF/hdCQQi4Z3AjinkodYosxuIxA620mdyW59J7j2fI/XdMTPb2M0unEBgV5y0u7ReSTTgkqEP7+eo11NCwSJyvhCLnAq/MMv/6sAzq3E1rwyHX4juKJcEVAvv5vTNeFrreYKpyJQVAA2bNjQOM6jbQNhtgNn7ADwNoOOjOQl8GIAekFZxntHk6m5K1euHLSrk7d8vjHV378NcM4HH+eDivCB97SmprnUstuWH4uEfwrC3wNosGurw9/TBDzsD4TUGoZtSnVN/ikT15jPD2vePkf8UQIQIVDAttFFMjA4Ggi0qwXDilOyW4+AUREfhKin1bTlMzN1RiMvgvBXhQ2lV8D8Fgg3AjhllBE9IEqAWbXtjPzfCHyzP9D+qFOjmUHp7uYXGVTAJ+AVML3FxEX4PMzP+aaQT7hZazUd8YsKQDQa/gEBd5UygIFPAPYHAu3/MTpfLBrZBvBFo//PwLpAIHS3nWOSXc0/AFFJPoBPJEv/uLb+Mfxkt74NjDF8MK/ztPXZ8lX74vGO2VKKB8BYaNdem9+fB7nWGIbRU049g91TZhNnHwCq5BOe56xrTeOSg2XxR9oai4bVCv+Uctqel/egEQiN7BRUVMVgQlcr/BXxGTjY6DVt+Z2RiJeJuwobyPumTZ95RktLS6YzsvE2Jvpxwe/kmq2eaTwSuVwSq5FqfurNZPns9vb2T50Ynexq9oJoFB/7tCbzDGpBJtml3wZCAZ+la7Z6pulN+uVSYAxf0+hsWthryx8jAE8++eR4ze3aY7vaT/AZRkgtDo5JVgIAoD+Vzs5cvnz5YSvH8AvTxqeOphzwyedp7S3KtxQAoF8bp82ka/Zb8lW7YtHwrxliTSAQeL0zHL6GBd0H8F84eZjH8jC2E2O1PxR6IRqNzifI+41A6HIndQwm9F8LiDWa95PXBxOTryHwfQDK4wPbGbS60dv7Qipx6nwJeX+j13TEH2ljR0fHae4GsddJm63ypDNyxrJlyz6upI7Dz0w5rcGVrYqfybpmjL/uYEl+LBreDEBtbeenoyDXnB07duyaPXvWEwRqz/+RwUsDgfanY7HwzWD8y2j7GFgeCIQ6nNid7NY3g8fymeUcz1v9u1Lz9CfAKOADtNTj7X061aXfzDSWT8zLtbY+W/4YAeiMRNqZ2K5gctr0GROUOpYpACCmZf5gcKOVY5JdejsItnytyZyg1LFYPSUEAGAs87SZlvxhARhaRGHEmMQd06dP/2j//r03gnOjIruvUS+D102fPvOxffv2nU4s7wHBUNUZgZDtrovKl0zoI4s4Mcl8R2Nz30fpPv1GSbjLwdewV420PE3mY4N9zacLonsUWtXr8ZqO+CM+jUaj8whyq5NObCnoEBcHAoHfV1JHqrt5HjNVxSfii7XWvpL8WDTcD2BSkTYmCehn4HNFfmOA9g7vjKjn9RoB/8lEH5BEGi6568iR9JtOprzJhF6CT/0MtuBDiaPamWG1Jaj4BP6AmdJCYFfDpKY37aa8YzpELBqOAfDbPLAPjUDo8/l5YtGwWqi5dPh/atdAWNTRaQRCuQ5Z9OVN6I74Hq9ZwE8lJr/EYEd8j9e05BcIwFADk2B+SDRoP3IfPkypRm0dA7cCcI9qfwaMR7KMO91ut5SZ1PdA9A/qvRvJV4EADPGBh7QUfgQ3U5qwjkFF+cT0iNudvRNHhExp+B6AAn75AtBxJUFUtHMwYjNDtgQCy16pRACOdjVfKYiq4kvmlnFtfSX5sWjY8ar5KDskiB8lKX7JQl4LpgUAZhXm4XdBeElK8VgwGHzHos9XzGdAzfV/CeBaAorw8S4BL7GgxzyLe8fwiwnABw5WQosJgFMjdhqB0CgnHXdLMqE74o8WgLyvpl1f2+nxmpb8IgIwUt9BEO6cNm3Go/v37z8HyN4HxqLcj4TNQsjVU6eevnP//r1/B8Y/FhspVCgAOYSazyq+Z5L5aNKccg6JrJoWDPGBzUyu1Z5JB3cmP9Vz/GIjhXIFIBYL3wrGP9s5tOTvhG8YRujhSuoY7NZvpSr5TPhGY6tZkh+LhtWUcPQin12TPySJWyDoBga32WUe/r1DS2W+vWTFik/y8ycTekV8Bm4h0A0ohy8z36Ylh47xiwmAGlar8N5SqRoByBqBkOXqejKhO+JXIQBZj9csubpv80XoIaa1/mDwuUgkcrWLWah5fmcksogpN1c/38px1QjA8Tq5h0FrG73mc4Pdk68GQ6h5/mBCXzS0VkCW/HIEQIX9fmH2ee+Wssdhp+/Z8d77F5QbHpwL+53b/G4pe5zxuUfb1ndBqfDgWDSyBeArndWXy6XiOm5gqabKNL2McirrbuHKXuXzLd81Ui6V0LcwUBafIW4gSDVVLpsvhbxq3OL+HL+YAJT6kh8gpptYyCOG0f5ivuHRaMcxAwi5yEHLuXKpF6HUlzwX8y35JoY40tjWW8BXw8WR9hDRU6XmynYvgrMhIb0iJK9VTDm0SGj7AGsjAENWDm0RyRwfJO5z0oHs7M5/np3h8EIW+HmZnbtodpK41h8KqYU2x2kwoS8k1IbPwLWNXtOSH4uFl4PxhMPGMQksGB0oxsBvCBgP4ML8ehh4g4a2k4+HUDO2H02mLhlZH0glmpczyDFfEi8oEij2GxThA/wGmBpGhVBv15qaLlHrA8UEQO2TH5u3jnLKmC9/MafFomE1b9UsHJo0AqFGK2cnE3pJ/ugvf7F6kgm9JN/jNS35qj5nAuCwu+Rlq6UAlE8vbxGwMxrp5qF4jqoTgZ71B4Kt5VSUTOjdAGrCB/Csx2ta8rds2dKwf9/eNwDMs2sjgZ5mlttBtC4v764d770/67LLLnN/2m/+3/EFRdojXA1nmaYpmiZN2Adg8rEyhG8ZRuhB9TdvQUOqX3fEB/hpQGwHuICvbTNn4TK4Uyk9j489Wso8CyZEappewGfibzW29j1YTADUIQqriDFbAYjH41NlNq0aYZV2GYGQZZRdMqGX5NsJAMcnTE1p7pJ8j9csGeV3sgtAPB6fLrPp/61hIFRGuNxn+Hw+1Qlt08DPp053pzM15afdDWdMuPaAJT8e75gls0J9RUvv8hCuA+OfAJyZZ0iSwQEimgjGv+eNrFMMDqmPIYHUcD1/Yfz3RiB0bFQw2D1pFtilRhE2fL4OTGP4UHxgIoMK+ACFAFYf4zF8j9e8eOw2YDTyFIP/pthTGgr+wVqAB9QeaH6eaDT8t+pvAZzFwHqrp6wU1B8ILrUeATQ/BVBRvgr+Iea1TGJA7YHm15Hqas7xWeAsMFnylYJ6vH2W/PoIALDa27Z9c0tlINxiGKF/dVKH1d62k7KW/Y5xi9ZmluTHYrELwNlnx67kH69VSFwqBf67mrYMl5VGIFSw1pbcdOoFELIkn1heyiRqwvd4TVcRAdj4dQb9zMbAihcBCXy9P9D+b1b1p7onf52ZbfmVLgIS0fVaa68lvy4AOQHoAsNbg05+vApCwjBCjlbLkwldRcXVlg8kPF7Tlm83ghUS86XA6zXwDRuB0JitcrsRLLGYzyRrwvd4TTFGAOLxeJPMplUknlrQsEqVCsBh4XLP9Pl8KvChaOK43pTSYMuvUAAOaynMJJ9pya8LANAZDe9l4DQQVEj13Ko6+3AdBHzsD4RmOKkrmdBVgMtpANR5kOr4x+v42OM1bfnxSOTLkvi14Xb+AaBegNVQPRcoRExtTPwIANu6SttKfzQCwTmj86Q3Tf6yFMf5BKjArmN8MLeBqAZ8/NHjNecUjQyLRTbeA6Lbay4AzPcawfY77DpBMqGr6LWS/AoF4F6P17Tln+xrAMp+AnVlGQ8L4jFnLeyeX/7v6kSgi3Cr2isvbxGUuqTIPiykqI4v5AIhXbeqvXInuyCd0fD3VRgvMd3hCwQ2qVN96rBQNBo9lZl1IjKJsJrAtv2olJ8YuD0QCBWeL1BRX93N34cUywHcoXl7N6lTfeqwEJ6feGoSpHvAZirTsBqEqvjq/fJ4zR8XFYB4PD5BZtNvAyiItsszqJIRwG7hcs/x+XwDdh2I41MnpLRMSX4FArBbSzXMId8BW34sGt5dw7sARsy1XUAdyZhM6J8J324BdYQfi218aPz4w7e/+ebHg1+YfZ46Gm3VD+we5e4d771/7iWXnNZ4+PD4ew2jXUUm2qZUQn/I7Rp3O97cO5iaq1fF17aZ5+KSGY3p7NF7Na9pyw+Hw/rAwMDAqlWr0lYNjcfjk4ffj0pHAT3jJwzMW7Ro1bETtCMsfr5Jx57+AVoFSz7HJ01OaS71flTI5x7Ndco8WrT3iGVs+PBQSIVhFtsSLFcAkoKpxRcMqlVWR2l4KGTJL1MAkkJSi3tJryP+0Bl48YTzG3DsTKI9DLmi2MnJYiWHz8CrfWGHN/DY8bFHslxR7OSkXclYLNwKhrqUpfxE8BpGSG3nVZySzza3QlJlfMFez+K+qviWIhAOz80KvDR8TVgZ9qmtweyVPt8yFfFacUp1Nc9lyt3ToK4pKyftYcpe2dj6aY5f8nDI8DHJziJ7+uUIQIqY/P5gsOyHOHxMsii/DAFIgdnvaesrm1+OV0/kvJ2RjWuYVLCT86R2a/zB9vudl7DOOdg1eQ0NRVk6Tsy0trGttyZ8SxGIP3kmZ12PM3C1w4b1CJf7q063Q+3qPPqcfqYrw48zkUM+96Td7q/mb4fang7r7Ax/hSWio4YbTgVgLwkE/P7Qf9kZY/V7urv5K5JpDN+hAOwVxAF3a1/F/ErbfSKUy12U0RlZBsY3HVwGOtrkrSA86PcHO8q9HWekouGLMpYx0zdtLwMdTWdsJeIH3a19HU5vx6n0mUWjHVcAdJMALcgtnhYmtaCpwtvPBOFtwwgVRApWyswvl07oV0jCTeDcYSBrPvC2x2sW8G0FQIG6NmxoTo5z3wUmdTOJiqKzEwA1f3ncM5j6btvKlX3VGsldzc1porsYuZtZcnwbAUgz4XGP5O9SW1/V/Grb/+daPhaLnQvOqkU4FW8+eiqoLpsY8W1zkeO0KhpzH8i1wDAMNY8vOw12NZ1LlFsErJjPLBc0tvVXxC+7wQAikYgK5JkihCAhxEGfz3dAnauYPfu85QK4OyNxYSgUMiup20kZfm7ilBS0KUiDtEzyIPkGDqhzFemLmpcz0d1ag7yQ/rr/GN+RAIyA1QURDQ3CIGCeEQiplcpjKRYJf8qErYJ5cyrLHZVeAlHKSHVBhMslDQLP83jNAn4yoef4JLE5I10ddpdAOHFmPU/dAye6B8oSgBPdGXX76h442TxQF4CT7YnX7a17IM8DdQGod4e6B05iD/w/VGIymUXerkQAAAAASUVORK5CYII="
}
, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t)
            throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e)
            return e;
        var n = t.protocol + "//" + t.host
          , r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))
                return e;
            var i;
            return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""),
            "url(" + JSON.stringify(i) + ")"
        })
    }
}
, function(e, t, n) {
    var r = n(150);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {};
    o.transform = void 0;
    n(62)(r, o);
    r.locals && (e.exports = r.locals)
}
, function(e, t, n) {
    var r = n(61);
    t = e.exports = n(31)(!1),
    t.push([e.i, ".unregister-login-mask {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 10001;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0,0,0,.5);\r\n}\r\n.unregister-login-popbox {\r\n  display: block;\r\n  max-width: 480px;\r\n  border-radius: 0 0 6px 6px;\r\n  overflow: hidden;\r\n  border: 1px solid transparent;\r\n  box-shadow: 0 8px 16px -2px rgba(0,0,0,.1), 0 8px 16px -8px rgba(0,0,0,.2);\r\n}\r\n.unregister-login-popbox-hd {\r\n  position: relative;\r\n  height: 41px;\r\n  padding: 0 12px;\r\n  border-bottom: 1px solid #e4e4e4;\r\n  background-color: #fff;\r\n  font-size: 0;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  text-align: left;\r\n  border-radius: 6px 6px 0 0;\r\n}\r\n.unregister-login-popbox-title {\r\n  display: inline-block;\r\n  color: #3c3c3c;\r\n  font-size: 14px;\r\n  line-height: 40px;\r\n  font-weight: 400;\r\n}\r\n.unregister-login-popbox-close {\r\n  position: absolute;\r\n  right: 5px;\r\n  top: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin-top: -12px;\r\n  font-size: 24px;\r\n  line-height: 24px;\r\n  color: #3c3c3c;\r\n  opacity: .8;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n.unregister-login-popbox-close:hover {\r\n  color: #faab00;\r\n}\r\n.unregister-login-popbox-bd {\r\n  line-height: 1.5;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  background-color: #fff;\r\n}\r\n.unregister-login-popbox-alert {\r\n  position: relative;\r\n  min-height: 50px;\r\n  padding: 32px 30px 32px 97px;\r\n}\r\n.unregister-login-popbox-alert-icon {\r\n  position: absolute;\r\n  left: 30px;\r\n  top: 50%;\r\n  margin-top: -25px;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-position: 0 -98px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  background-image: url(" + r(n(151)) + ");\r\n  background-repeat: no-repeat;\r\n}\r\n.unregister-login-popbox-alert-tit {\r\n  color: #3c3c3c;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n.unregister-login-popbox-ft {\r\n  position: relative;\r\n  padding: 12px;\r\n  border: none;\r\n  border-top: 1px solid #e4e4e4;\r\n  background-color: #f4f4f4;\r\n}\r\n.unregister-login-popbox-we-ft-r {\r\n  width: 100%;\r\n  text-align: right;\r\n  font-size: 0;\r\n  -webkit-text-size-adjust: none;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n}\r\n.unregister-login-popbox-confirm {\r\n  margin-left: 10px;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  border-color: #ffb300;\r\n  background-color: rgba(255,202,40,.5);\r\n  color: #3c3c3c;\r\n  display: inline-block;\r\n  line-height: 24px;\r\n  padding: 0 12px;\r\n  font-size: 12px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 26px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.unregister-login-popbox-confirm:hover {\r\n  background-color: #ffca28;\r\n  color: #3c3c3c;\r\n}\r\n.unregister-login-popbox-cancel {\r\n  margin-left: 10px;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  border-color: rgb(164, 164, 164);\r\n  color: rgb(51, 51, 51);\r\n  display: inline-block;\r\n  line-height: 24px;\r\n  padding: 0 12px;\r\n  font-size: 12px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 26px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.unregister-login-popbox-cancel:hover {\r\n  background-color: rgba(164, 164, 164, 0.12);\r\n  color: #333;\r\n}", ""])
}
, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAE4CAMAAAAuDVBRAAACQFBMVEUAAAD+/v7/eSoRfyH2SUn/mQAAAAAYuTL/mQAAqP8ZuTMAqv8Aqv8AAAAAq//3SUkYuTL/mQAAqv8Aqv8YujP2SEiPj48Aqv//cCgMDAwZuTMAqv8ZujMXuDL2SUkZuTP2SUn/mQAAq/8YuTMAqv8YujP/mQD2SUn2SUkZuTP/mQD/mgAAAAAZuTI9PT0Aqv/4SEj3SEgAAAAAqv8YuTL/mQAYuTAAqv8ZuTMAqv//mQAYuTP/mQD4SUn1SUn/mQApKSn2SUn/mQAZuzMZuTP/mAAArP/2SUn/mQD3SUn1Rkb/mQD2SUn/mQAAqv8Aqv/2SEgXuzMAqf8ZujL0Skr/mwAAqv8ZuTMAAAD3SUkYujP2SUkAq///mQD/mAD/mQD/lwD/mQAAqv8YuDT0SEgAqP8Aqv/2SUkAqv/2SEj/mQD2SUn2SUn/mAD3SEj/mQAAqv//mQAAqf/2SUn/mQA7OzvT09P0SEgAqv//mQAcHBz/mgD2SUkrKysZuTP/mQAAAAD/mgD/mAD/mAD1SUn1SEj/mgAAp/8AsP8Aqv8QEBD/AAAAq/8Aq/8Aqv9fX18rKyv/mgD/mQD/AAAyMjJRUVFycnIZuTMAqv/2SUn/mQD/AAD/////+/f3/fz/9/eM3Jmr4///6Oj9ra37qKj/zoU6w1Biy/8gvDnt+f/g9f/Q8P+15/970/9Iwv8gtf/k9+jY893/8dz91NT/58P8wsKq5rT/3ar/0o9v039Uy2f/VFT/FRWg3//M8NK66sKigFyVAAAAl3RSTlMAMwUE7+/IppMF7+2TdKeWxqUgxW7FTEUK1ru6Rgymk5FFPecvI/3n1dXVxayXd25FPSLoYi0X+tvYulckI7qYiW1tOx4eE/n5Hhjl29uYe1UsZTEtGNSwln58ZFZWQDsQ6F5BEAzdvrCvq59zc19f9b6hiYmFOy8mxrCwqIiEfXplY05JMjIaCu/Mw5+Ig2aZg3vEjnFcUKYmgQAACcpJREFUaN7cVjGLq0AQVgSFBSGFCIpiIRYHXgoREdIcJH8gpMhhm99wKQIvvPqaXPHe+XdvZo032dtVJqS7aTTufjvfzHwzGwut8kvXLf3K4prju8vQtsOl+9dhIl5f7Kv9eeVhfECM9uJzEJVrA6lTFH0c4cWtOE6WsPN0ulze3+BlyXFThrAzutj22wndlQwI8kILwQsy40P+Rx/4OLo8Ymjv/wZfJTd8iASQ3PCrgVmEkWCS+aX8DLVS8gXDl+WRL8v7xf/7+gVKGdk2v18Iwu8XgvD7hSC2ey+E3y9kYflY+Pwk80v5S/pFtU2dxa3oe9HGWb1h7O+eesWeunnUzusN5u0mAc0AEF6QFKnjpEUSeGIANWbESi4vEvVrspDHrEypfpaArb6ylaBnrQBpjKGSB9UTpiROfyAWdJCJQoYMFIyDPgJrxgL0c3skxlFbs1YjjZtckY95P995awQdMGMQjxjr40GuOBqGvHlXlYDHg8WwA2wctLOH/M3FINr19RUqsZfaBex2GpHAcj7qAN4LeHazTgohIeTmPASVTCJS2T3dTTSt5CWmnXhSq5TOHJnVkLm58qmReqiSbKbwa4kI1DMyK54OpcmJFuUvtlpkZzRn6EdltcD4IYnppKY0uTaYLPh6c/C6UeSNNFTP8EmF7EnfW0G0VIhKTA4g+TOFGA19lyIxJfwzbsvX6I9oaeGrSR6G39np5FNsDCKNqZQ0N6Djeo0WlZIEQ9NptL1Rc7Umy6YdEYISrshSF3+RXyErYyu3phbbCZ2W2mKF1sgHmWqVFjWyeVysNFo0LqaGUiCyqaFEo8/ijj4asBlzwN4/xh+4LO6+kkhaGffi41+vD1zi3L8K/D8kX8xWPWvrQBA8BOKpvc5dEIEUSa1GCAwOBoFw6dKJ3RqCMaQJKUJsSP9eYxAX48q4TELIV/Hy17J7ikKsOTtr1GQa4ZVHt7szt3f7cCERXntqXq7kV7j6OKYq9/8cywlWkbL1Mnwy3hZkO2FWBWN19382E+b2KcXCvPKmE6HQdzm/W/EBLwItcL9YvpsFM6WrvM6NMfMlDy9xLct7Y56sm+QdWz2ZN6ZI1dybldirob7cY78c7VEQd/w09TtxMGoL/n91mK/h8Go7Kxoe5ICDYbSR0NWW4OtWmPQ9r5+ELe1bku66GT37+ihcj4ZH9jM9hfCalhA5srWkpleNN2IuNVROhNySuFFhXFAw8NQGeAG9vljjeGMKnaktOON1vn+S67hWW3HN9XzrFf1sqR/Qoj/1vvTwqQ71I6gev9RHU6+gXt+HblDftLK4Ic1P4IuE80rwhHxwoxiXpKCqwLeSV6Ok6aX1Li0CmqdMScEHtExCz3+wCCFjSqYcy/wtigKfcND2BKvpUF6cM2DMlDHGB3meqBF3DjBkyhDCrMdEBU7hm9bvTgsEKuZSAOeoi0VI5lQdys5lXLe1E6qfResrwIQpE4z3uVn0SiGmTJli3COBSwoKUBoPKe7EIqZE7sQ2lN9lSttd/oYmN5jScDf5S0r05UC5pSwMg5gOsqlyGwZsCQBbgvkBYH7YYjgucIsllY0M4wI28q7jAoYSUGAoweiDxGD0wYCF8mHA7jzGaxwW0iNp7NU4+MTHa41DXHpVkF9IBnAhEV57al6u5Fe4+jjVWZrpUzmBpWWw+kKwhrfmluWSZsULPJgHfghz0znh0TzyQ0unGeHZPBcnvQg548W88COVr1Ii26GWj/Kr57WJIAoPsgfDhg2klBQCIYRCvCUhh5BDCr0kGIoppQSKnkprK5VS6sEePFZUrF68VLpabBXxZw+lp9b/zfdm22x2v7fbWRah4AcafLPfvF/fvBm/fPiCucRXjItsXjF1e+Tldorum2vshuPuZnlmzur1rLmZ8uZdg++X7rwP4M5SPOvps/cCnj2NJPQ39BdWabbeWbl1a6VTny1Z2rTRlxnzenmyHrTWJ/U281JDc5qwiCuLmpTD/yXNcKp1JaLOJZkJD/5J2AhCmJwKmNbI9FjF4DF9sDa+JW9yX8XiPocxViv656y6BrP00ahufcvfABAIxbrqT4lqFc63bFnlcDWobiWl8Zw8NkKrZW7Fk5CxQbbnivGI6qdCsHTLw1bqxCOtXVqEnveY0gMdkLFDv0vghFBlSlUJbpa8pHaVwkx1TTCbOR2XpQBrTFlT6J0j2+TKAagknCpgg1VSFhuf03oXJVBWJHpB8k+wLxp1OgRqjqKThCtLu0P5c9NWJN3K2u5zsWhJmgNMmRfOGjdYpjSY0pApEYEtMkUYXyscmJx+nyl9Of2IIk8xZUoust9KUEZVya30BIPYrVZ3lSwYkCUAZAniB4D44YjhuMAj1vEPMowL6SAnHxcwlJCCQwlHHwaGow8HrJx+mQds8jGe4rIwv5Lg4vODx87CxWd2vaa+xM2fCuYPkuTPnvSPK3zC5a6ecDl4wqVAo1TtVUsNFQfsCJQ+Fsw4dA+ZYzw1CEfuEQzuaJT421P3lH9KptOMcOaewU0fDZ35sXvMPz1TLz6qCXL5fPgZc4mv2Af3MEHFVG7kJZei++Ya+y/x+mCE14aUgzH8U4rrntOfhJSji8QU9zghhRmJKRdHiSkH55pyo/oyJph36iYjv5wttu1Wy24Xs8t5g+8Hw/0AhoN41rSzL8CZjiR09/QXtlMr7HQzme5OoebY2rTXlRkP9PJEIWgtTOhtHihE5p4mTAvRatK9TNi+WiRzW3tAFNq0WFwNGl/yTtmMikAmyxG8DJjYR03FoMZ+xrfkPBZULBY4n7FaoQ/Zz6huL2zKQ10Lysd+oTw4JIsMZmzboXoMSQiXdSePFWFPwpuAqUIWr2/rVD8FsHXTgzbqxLrWLnPNKBwP63qATjAw381b+iExgE4gfT+bto7LVsZocmTLXDljbLNKskLjuzuV5bfFLSHgGje9yKmgnDTyeAxInOohrry6ZLRAEpz5Q14PnR3eRWMojAcuFi2B95ZHWRdKT741BVHxG4kUDIwxYMqCHBimz6A6+vKG9LnI6H+LKV0lF5lbian4MsZW+oKBVCYiBOPLElLZjpClL35o5kApUfzyEWvpGq/ubQ3wiEUcZF2wFv1t40GWxwWbPDgwLqKGUr7pMbIZGEr+6At32WnuN+nCw9GXfMAmH+PJL4tUV5L5xWd+vQ7hejW+xJM/FRDdbXyQeDLY7qZ79uDjqh38vj3Ip3jCpUTFabaajjC2YluLpwMR1OSnj5982SFwangUgmFsfiuMb03u788f334ypWlG4U//fHd/6Tlk6oXwzf0NXuJz+e26J5BLfMV+uR+/foWKxQ6bkx/ud6JkU3TfXGM3CX8B1nloRTaDz+wAAAAASUVORK5CYII="
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(60)
          , o = n.n(r)
          , i = n(19)
          , a = n.n(i)
          , s = n(17)
          , c = n.n(s)
          , u = n(4)
          , l = n.n(u)
          , p = n(63)
          , f = (n.n(p),
        n(161))
          , d = (n.n(f),
        n(66))
          , g = c.a.util
          , h = g.md5
          , m = g.serialize
          , v = g.unSerialize
          , w = g.fullUrl
          , y = g.popuWindow
          , b = 0
          , _ = null
          , x = null;
        if (c.a.bizdomain !== location.hostname) {
            var k = document.createElement("iframe");
            k.src = d.a.proxy,
            k.style.cssText = "position: absolute;top: 0;left: 0;width: 0;height: 0;",
            document.body.appendChild(k),
            _ = k.contentWindow,
            x = new a.a(function(e) {
                k.addEventListener("load", function() {
                    e(),
                    x = null
                })
            }
            )
        } else if (e.env.test_domain) {
            var A = document.createElement("iframe");
            A.src = d.a.proxy.replace(e.env.test_domain, e.env.replace_domain || "www"),
            A.style.cssText = "position: absolute;top: 0;left: 0;width: 0;height: 0;",
            document.body.appendChild(A),
            _ = A.contentWindow,
            x = new a.a(function(e) {
                A.addEventListener("load", function() {
                    e(),
                    x = null
                })
            }
            )
        }
        if (c.a.isLogin()) {
            var T = localStorage.getItem("tgp_userinfo");
            T = v(T),
            T.uid && +l.a.getCookie("tgp_id") != +T.uid && localStorage.removeItem("tgp_userinfo")
        }
        var q = function(t) {
            e.env.test_domain && (t.env = e.env.test_domain,
            t.real_env = e.env.replace_domain)
        }
          , C = function(e) {
            var t = c.a.getLoginOption(e)
              , n = e.lang || Object(p.getLanguage)()
              , r = {
                type: "fb",
                appid: t.facebook_appid,
                reflush: t.reflush,
                succurl: t.succurl,
                failurl: t.failurl,
                session: t.session
            };
            M("jump_conf", o()(r));
            var i = "https://www.facebook.com/v3.0/dialog/oauth?redirect_uri=" + encodeURIComponent(w(d.a.redirect)) + "&client_id=1282507435238794&locale=" + n + "&state=" + Math.random()
              , s = y(i, "Facebook帐号登录", 800, 600);
            return clearInterval(b),
            new a.a(function(e, t) {
                b = setInterval(function() {
                    c.a.isLogin() ? (clearInterval(b),
                    e()) : s && s.window ? console.log("no fb login, check again late") : (clearInterval(b),
                    t())
                }, 1e3)
            }
            )
        }
          , L = function(t) {
            var n = c.a.getLoginOption(t)
              , r = t.lang || Object(p.getLanguage)()
              , i = {
                type: "wx",
                appid: n.wx_appid,
                reflush: n.reflush,
                succurl: n.succurl,
                failurl: n.failurl,
                session: n.session
            };
            q(i);
            var a = d.a.redirect;
            e.env.test_domain && (a = a.replace(e.env.test_domain, e.env.replace_domain || "www")),
            M("jump_conf", o()(i));
            var s = {
                id: t.wxLoginDivId || "miloLoginWX",
                appid: n.wx_appid,
                scope: "snsapi_login",
                redirect_uri: encodeURIComponent(w(a)),
                state: "1",
                style: "black",
                href: "//" + c.a.cdnDomain + "/middle/login/qrcode.css",
                self_redirect: !0,
                lang: r
            };
            return c.a.loadWXJs().then(function() {
                return new WxLogin(s)
            })
        }
          , S = function(t) {
            var n = c.a.getLoginOption(t)
              , r = t.lang || Object(p.getLanguage)()
              , i = {
                zh_HK: 1028,
                en_US: 1033
            }
              , a = w(d.a.redirect);
            e.env.test_domain && a.indexOf(e.env.test_domain) > -1 && (a = a.replace(e.env.test_domain, e.env.replace_domain));
            var s = {
                s_url: a,
                appid: n.qq_appid,
                daid: n.qq_daid,
                style: 20,
                pt_no_auth: 1,
                target: "self",
                hide_close_icon: 1,
                lang: r ? i[r] : "",
                hide_border: 1
            }
              , u = {
                type: "qq",
                reflush: n.reflush,
                succurl: n.succurl,
                failurl: n.failurl,
                session: n.session
            };
            return q(u),
            M("jump_conf", o()(u)),
            "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?" + m(s)
        }
          , j = function(e) {
            var t = c.a.getLoginOption(e);
            console.log(e);
            var n = e.lang || Object(p.getLanguage)()
              , r = {
                zh_HK: 1028,
                en_US: 1033
            }
              , i = {
                s_url: w(d.a.redirect),
                appid: t.qq_appid,
                daid: t.qq_daid,
                style: 8,
                hln_css: t.hln_css || "https://login.wegame.com.cn/web/oauth2.0/login/images/login_logo.png",
                pt_no_auth: 1,
                target: "top",
                lang: n ? r[n] : ""
            }
              , a = {
                type: "qq",
                reflush: t.reflush,
                succurl: t.succurl,
                failurl: t.failurl,
                session: t.session
            };
            return M("jump_conf", o()(a)),
            "https://ui.ptlogin2.qq.com/cgi-bin/login?" + m(i)
        }
          , O = function(e) {
            if (_)
                return _.loginByMail(e);
            var t = {
                login_info: {},
                config_params: {
                    lang_type: 0
                }
            }
              , n = ""
              , r = c.a.getLoginOption(e);
            t.luid = r.luid || "",
            t.lct = r.lct || "",
            t.mappid = r.mappid,
            t.mcode = r.mcode,
            t.clienttype = r.clienttype,
            r.sso && (n = "j",
            t.redirect_uri = encodeURIComponent(r.succurl || location.href) + "|" + encodeURIComponent(r.failurl || location.href)),
            t.luid && t.lct || (t.login_info.account = r.mailAddress,
            t.login_info.password = h(r.mailPassword)),
            e.ticket && e.randstr && (t.pic_verify_info = {
                ticket: e.ticket,
                randstr: e.randstr
            });
            var o = Object(f.replaceDomain)(c.a.setting.api_base_url + n + "login_by_email");
            return c.a.doWegameLogin(o, t)
        }
          , P = function(e) {
            if (_)
                return _.loginByQC(e);
            var t = {
                login_info: {},
                config_params: {
                    lang_type: 0
                }
            }
              , n = ""
              , r = c.a.getLoginOption(e);
            t.mappid = r.mappid,
            t.mcode = r.mcode,
            t.clienttype = r.clienttype,
            r.sso && (n = "j",
            t.redirect_uri = encodeURIComponent(r.succurl || location.href) + "|" + encodeURIComponent(r.failurl || location.href)),
            t.login_info = {
                qq_info_type: 5,
                appid: e.appid,
                openid: e.openId,
                sig: e.accessToken
            };
            var o = Object(f.replaceDomain)(c.a.setting.api_base_url + n + "login_by_qq");
            return c.a.doWegameLogin(o, t).then(d.a.afterWegameLogin)
        }
          , E = function(e) {
            return _ ? _.getLoginUser(e).then(function(e) {
                return localStorage.setItem("ticket_refresh_time", 1e3 * e.biz_refresh_time),
                localStorage.setItem("ticket_valid_time", 1e3 * e.biz_valid_time),
                a.a.resolve(e)
            }).catch(function(e) {
                return a.a.reject(e)
            }) : c.a.getLoginUser(e).then(function(e) {
                return e.biz_refresh_time && localStorage.setItem("ticket_refresh_time", 1e3 * e.biz_refresh_time),
                e.biz_valid_time && localStorage.setItem("ticket_valid_time", 1e3 * e.biz_valid_time),
                a.a.resolve(e)
            }).catch(function(e) {
                return a.a.reject(e)
            })
        }
          , D = function(t) {
            if (!localStorage || !localStorage.getItem)
                return "";
            var n = "";
            if (_)
                try {
                    n = _.localStorage.getItem(t)
                } catch (e) {
                    console.log(e)
                }
            else
                n = localStorage.getItem(t);
            return !n && e.env.test_domain && (n = localStorage.getItem(t)),
            n
        }
          , M = function e(t, n) {
            if (localStorage && localStorage.setItem) {
                if (x)
                    x.then(function() {
                        e(t, n)
                    });
                else if (_)
                    try {
                        _.localStorage.setItem(t, n)
                    } catch (e) {
                        console.log(e)
                    }
                localStorage.setItem(t, n)
            }
        };
        t.a = {
            proxyWinWaiter: x,
            cancel: function() {
                clearInterval(b)
            },
            openFacebookDialog: C,
            showWXloginQRCode: L,
            getPtLoginUrl: S,
            getMobileLoginUrl: j,
            loginByMail: O,
            loginByQC: P,
            getCheckloginUrl: function() {
                return c.a.setting.check_login_url
            },
            isLogin: function() {
                return c.a.isLogin()
            },
            logout: function() {
                return _ && M("tgp_userinfo", ""),
                c.a.doWegameLogout()
            },
            getLoginUser: E,
            getUserInfo: function() {
                return c.a.getUserInfo()
            },
            clearMailRemember: function() {
                M("tgp_uc", "")
            },
            getLocalstorage: D,
            saveLocalstorage: M
        }
    }
    ).call(t, n(29))
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && "object" == typeof e && "default"in e ? e.default : e
    }
    function o(e, t, n) {
        var r = Math.floor(1e4 * Math.random())
          , o = document.createElement("script");
        return o.charset = t || "UTF-8",
        o.id = r,
        document.getElementsByTagName("head")[0].appendChild(o),
        o.src = e,
        "function" == typeof n && ("onload"in o ? o.onload = n : "onreadystatechange"in o && (o.onreadystatechange = function() {
            "complete" !== this.readyState && "loaded" !== this.readyState || n()
        }
        )),
        o
    }
    function i(e, t) {
        void 0 === t && (t = {});
        try {
            return window.external.callcpp(e, JSON.stringify(t)),
            !0
        } catch (e) {
            return !1
        }
    }
    function a(e, t) {
        void 0 === t && (t = ""),
        console.warn("%c" + e, "color:orange;font-size:1.5em;", t)
    }
    function s(e, t) {
        void 0 === t && (t = ["wegame.com", "wegame.com.cn", "qq.com"]),
        "string" == typeof t && (t = [t]),
        t.forEach(function(t) {
            I.forEach(function(n) {
                null != e[n] && (document.cookie = n + "=" + e[n] + ";path=/;domain=" + t)
            })
        })
    }
    function c(e) {
        return B.every(function(t) {
            return !!e[t]
        })
    }
    function u(e) {
        return void 0 === e && (e = j.getCookie),
        I.reduce(function(t, n) {
            return t[n] = e(n),
            t
        }, {})
    }
    function l(e, t, n) {
        N.executors.push({
            seq: ++N.seq,
            fn: n || G
        }),
        i("call_service", {
            cmd: e,
            data: t,
            callback: "call_service_callback",
            custom_data: {
                seq: N.seq
            }
        })
    }
    function p(e, t) {
        var n = !!U[e];
        U[e] = (U[e] || []).concat(t),
        n || i("listen_broadcast", {
            cmd: e
        })
    }
    function f(e, t) {
        i("send_broadcast", {
            cmd: e,
            data: t || {}
        })
    }
    function d(e, t) {
        if (U[e])
            return void 0 === t ? void (U[e] = []) : void (U[e] = U[e].filter(function(e) {
                return e === t
            }))
    }
    function g(e, t) {
        if ("undefined" != typeof window) {
            var n = window[e];
            window[e] = "function" == typeof n ? function() {
                for (var e = [], r = arguments.length; r--; )
                    e[r] = arguments[r];
                n.apply(window, e),
                t.apply(window, e)
            }
            : t
        }
    }
    function h() {
        var e = !0;
        return 1 * j.getCookie("client_type") == 1 ? e = !1 : (window.location.host.includes("wegame.com.cn") || window.location.host.includes("plat.tgp.qq.com")) && (e = !1),
        e
    }
    function m(e, t) {
        return new Promise(function(n, r) {
            return void 0 !== Y && null != Y && void 0 !== X && null != X ? (e && e({
                isNetBar: Y
            }),
            e && e({
                bar_id: X
            }),
            void n({
                isNetBar: Y,
                bar_id: X
            })) : top && top.TGP && top.TGP.status && top.TGP.status.isNetbar && top.TGP.status.barID ? (Y = top.TGP.status.isNetbar,
            X = top.TGP.status.barID,
            e && e({
                isNetBar: Y
            }),
            e && e({
                bar_id: X
            }),
            void n({
                isNetBar: Y,
                bar_id: X
            })) : void (R && R.get ? R.get({
                app: "0",
                cmd: "m_get_client_info",
                success: function(o) {
                    o && 0 == o.retCode && o.data ? (o = o.data,
                    Y = o.is_netbar,
                    X = o.bar_id,
                    e && e({
                        isNetBar: Y
                    }),
                    n({
                        isNetBar: Y,
                        bar_id: X
                    })) : (t && t(o),
                    r(o))
                },
                fail: function(e) {
                    t && t(e),
                    r(e)
                }
            }) : (console.log("queryTgpIsNetBar: TGP error"),
            t && t(),
            r()))
        }
        )
    }
    function v(e, t) {
        return new Promise(function(n, r) {
            return void 0 !== V && null != V ? (e && e({
                language: V
            }),
            void n({
                language: V
            })) : top && top.TGP && top.TGP.status && top.TGP.status.language ? (V = top.TGP.status.language,
            e && e({
                language: V
            }),
            void n({
                language: V
            })) : void (H && l ? l("i_service_get_client_env", {}, function(o) {
                o && o.language ? (V = o.language,
                e && e({
                    language: V
                }),
                n({
                    language: V
                })) : (t && t(o),
                r(o))
            }) : (console.log("queryTgpLanguage: comm_center error"),
            t && t(),
            r()))
        }
        )
    }
    function w(e, t) {
        var n = {
            method: e,
            data: t
        };
        try {
            var r = JSON.stringify(n);
            window.external.callcpp("RailCrossJavascriptEvent", r)
        } catch (e) {}
    }
    function y() {
        w("RailCrossMethodCloseWebWindow", "")
    }
    function b(e, t) {
        if (void 0 === t && (t = {}),
        null == e || "" === e)
            return !1;
        w(e, t)
    }
    function _(e) {
        var t = {};
        if (e && 0 === e.retCode && e.data) {
            if (t = e.data,
            void 0 !== e.data.is_wow64 && (t.isClientCanGetCpuBits = !0,
            !0 === e.data.is_wow64 && (t.userClientCpuBits = 64)),
            e.data.sys_name && e.data.sys_name.length) {
                var n = e.data.sys_name.split("-");
                n.length > 1 && (t.isClientCanGetSysVersion = !0,
                t.isClientCanGetCpuBits = !0,
                t.userClientSysVersion = n[0],
                t.userClientCpuBits = n[n.length - 1])
            }
        } else {
            var r = {
                "4.0": "winnt4.0",
                "5.0": "win2000",
                5.1: "winxp",
                5.2: "server2003",
                "6.0": "vista",
                6.1: "win7",
                6.2: "win8",
                6.3: "win8",
                6.4: "win10",
                "10.0": "win10"
            }
              , o = navigator.userAgent.match(/windows nt ([\d.]+)/i)
              , i = navigator.userAgent.match(/(wow64|win64)/i);
            o && (t.isClientCanGetSysVersion = !0,
            t.userClientSysVersion = r[o[1]]),
            i ? (t.isClientCanGetCpuBits = !0,
            t.userClientCpuBits = "64") : o && (t.isClientCanGetCpuBits = !0,
            t.userClientCpuBits = "32")
        }
        return t
    }
    function x() {
        return C.isWeGameIndependent || C.isWeGameMainTop ? $ || ($ = new Promise(function(e) {
            R.get({
                app: "0",
                cmd: "m_get_client_info",
                data: {},
                success: function(t) {
                    void 0 === t && (t = {}),
                    e(_(t))
                },
                fail: function() {
                    return Promise.resolve(_())
                }
            })
        }
        )) : Promise.resolve(_())
    }
    function k(e, t, n, r) {
        return new Promise(function(o) {
            C.isWeGameIndependent ? (t.func_name = e,
            R.get({
                app: "888",
                src: "50000013",
                cmd: "rail_web_req",
                timeout: 2e3,
                data: t,
                success: function(e) {
                    "function" == typeof n && n(e),
                    o(e)
                },
                fail: function(e) {
                    "function" == typeof r && r(e),
                    o({})
                }
            })) : o({})
        }
        )
    }
    function A(e) {
        document.cookie = "language=" + e + ";path=/;domain=" + (window.location.hostname.indexOf("tgp.qq.com") >= 0 ? "tgp.qq.com" : window.location.hostname)
    }
    function T() {
        if (F)
            return F;
        var e = L.getUrlPara("language") || L.getUrlPara("lang");
        if (e)
            return A(e),
            F = Promise.resolve(e);
        var t = j.getCookie("language");
        return F = t ? Promise.resolve(t) : x().then(function(e) {
            if (null == e)
                return ee;
            var t = e.language || ee;
            return A(t),
            t
        })
    }
    function q(e) {
        A(e),
        F = Promise.resolve(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var C = r(n(32))
      , L = n(64)
      , S = r(L)
      , j = r(n(4))
      , O = n(154)
      , P = r(n(155))
      , E = "https:" === window.location.protocol ? "https://" : "http://"
      , D = {
        qtreq: function(e) {
            P.get(O.replaceDomain("//qt.qq.com/lua/tgp_live_svr/" + e.cmd)).query({
                p: JSON.stringify(e.data || {})
            }).end(function(t, n) {
                if (t)
                    return e.callback(null);
                e.callback(n.body)
            })
        },
        get_lives_detail: function(e) {
            D.qtreq({
                desc: "查某直播房间详细信息接口",
                cmd: "get_lives_detail",
                data: {
                    live_ids: e.liveId
                },
                callback: function(t) {
                    t && 1 === t.result ? e.succ(t.data[0]) : e.fail(t)
                }
            })
        },
        openLivePlayer: function(e, t) {
            D.get_lives_detail({
                liveId: e,
                fail: function(t) {
                    console.log("打开播放器时，拉取直播详情失败。liveId: " + e + ", err: " + t)
                },
                succ: function(e) {
                    window.tgpThirdPlayer && window.tgpThirdPlayer.getPlayer() && window.tgpThirdPlayer.getPlayer().stop();
                    var n = ""
                      , r = 0
                      , o = 0
                      , i = j.getCookie("language");
                    if (3 == e.live_type) {
                        var a;
                        e.detail ? ("string" == typeof e.detail && (e.detail = JSON.parse(e.detail)),
                        "string" == typeof e.detail.extra_info && (e.detail.extra_info = JSON.parse(e.detail.extra_info)),
                        a = e.detail.extra_info) : ("string" == typeof e.extra_info && (e.extra_info = JSON.parse(e.extra_info)),
                        a = e.extra_info);
                        var s = e.gid
                          , c = a.room_id
                          , u = a.subroom_id;
                        n = O.replaceDomain(E + "plat.tgp.qq.com/tgpforum/video/index.html#!/live/room/" + s + "/" + c + "/" + u + "?from=" + t),
                        window.screen.height > 900 ? (r = 1028,
                        o = 900) : (r = 1034,
                        o = 626)
                    } else if (6 == e.live_type) {
                        var s = e.gid
                          , c = e.room_identify;
                        if ("string" == typeof e.extra_info && (e.extra_info = JSON.parse(e.extra_info)),
                        e.extra_info && e.extra_info.qt_main_game_id)
                            var l = e.extra_info.qt_main_game_id;
                        else
                            var l = 20003;
                        var p = 22;
                        0 !== t.indexOf("live-center") && "nav-dropbox-follow" != t || (p = 9),
                        n = O.replaceDomain(E + "plat.tgp.qq.com/video/self-room/client_player.html?game_id=" + l + "&room_id=" + c + "&gid=" + s + "&live_id=" + e.live_id + "&from=wegame&source_type= " + p + "&language=" + i),
                        r = 1280,
                        o = 706
                    } else
                        n = O.replaceDomain(E + "plat.tgp.qq.com/video/live-player/room.html?liveid=" + e.live_id + "&from=" + t),
                        r = 1280,
                        o = 706;
                    if (/\bxTools\.exe/i.test(navigator.userAgent) || /\BattleCare\.exe/i.test(navigator.userAgent))
                        return R.openJdqsWindow(n, "直播", r, o),
                        !0;
                    R.openWindow({
                        url: n,
                        width: r,
                        height: o
                    })
                }
            })
        }
    }
      , M = "https:" === window.location.protocol ? "https://" : "http://"
      , B = ["tgp_id", "tgp_ticket"]
      , I = B.concat(["tgp_biz_ticket", "tgp_env", "tgp_user_type", "region", "client_type"])
      , R = {
        cbList: {},
        curJump: {
            mid: 0,
            page: 0
        },
        get: function(e) {
            var t = R.cbList
              , n = R.status;
            window.top.location !== window.location || window.webBridgeFunc || (window.webBridgeFunc = function(e) {
                var t, n, r = R.cbList;
                e && (n = e.src,
                n && window.frames["tgpFrame_" + n] && (t = window.frames["tgpFrame_" + n],
                t.TGP || (t = t.contentWindow),
                t && t.TGP.cbList && t.TGP.cbList["cb_" + e.seq_num] && (r = t.TGP.cbList)),
                0 == e.retCode ? r["cb_" + e.seq_num] && r["cb_" + e.seq_num](e) : r["err_" + e.seq_num] && r["err_" + e.seq_num](e),
                delete r["cb_" + e.seq_num],
                delete r["err_" + e.seq_num])
            }
            ),
            e.seq || (e.seq = Date.now() + Math.floor(Math.random() * Date.now() + 1)),
            t["cb_" + e.seq] || ("function" == typeof e.success ? t["cb_" + e.seq] = e.success : "string" == typeof e.success && window[e.success] && (t["cb_" + e.seq] = window[e.success])),
            t["err_" + e.seq] || ("function" == typeof e.fail ? t["err_" + e.seq] = function(n) {
                delete t["cb_" + n.seq],
                delete t["err_" + n.seq],
                delete t["evt_" + n.seq],
                e.fail(n)
            }
            : "string" == typeof e.fail && window[e.fail] && (t["err_" + e.seq] = function(n) {
                delete t["cb_" + n.seq],
                delete t["err_" + n.seq],
                delete t[n.event + "_" + n.app],
                window[e.fail](n)
            }
            ));
            var r = {
                dest: (isNaN(e.app) ? "0" : e.app) + "",
                seq_num: e.seq + "",
                callback_func: "webBridgeFunc",
                data: e.data || {}
            };
            isNaN(e.src) ? n && n.curMod ? r.src = n.curMod + "" : window.parent && window.parent.TGP && window.parent.TGP.status ? (n = window.parent.TGP.status,
            r.src = n.curMod ? n.curMod + "" : "0") : r.src = "0" : r.src = e.src + "",
            e.timeout && (r.timeout = e.timeout + "");
            try {
                return window.external.callcpp(e.cmd, JSON.stringify(r)),
                0
            } catch (n) {
                return delete t["cb_" + r.seq],
                delete t["err_" + r.seq],
                delete t["evt_" + r.seq],
                "function" == typeof e.fail && e.fail({
                    retCode: -9999,
                    msg: "web侧调用callcpp失败，请确认是在正确的客户端环境内打开。",
                    data: {
                        e: n,
                        params: e.data
                    }
                }),
                -9999
            }
        },
        listen: function(e) {
            var t, n = R.cbList, r = "register_event";
            window.top.location != window.location || window.webEventProxy || (window.webEventProxy = function(e) {
                var t, n, r, o = R.cbList;
                n = e.src,
                _data = e.data,
                window.frames["tgpFrame_" + n] ? (t = window.frames["tgpFrame_" + n],
                t.TGP || (t = t.contentWindow),
                r = _data.event ? _data.event + "_" + n : "",
                t && t.TGP.cbList && t.TGP.cbList[r] && (o = t.TGP.cbList)) : r = _data.event ? _data.event + "_" + n : "",
                o[r] && o[r](e)
            }
            ),
            e.seq || (e.seq = Date.now() + Math.floor(Math.random() * Date.now() + 1)),
            e.src = e.src || 0,
            t = e.event + "_" + e.src,
            n[t] || ("function" == typeof e.callback ? n[t] = e.callback : "string" == typeof e.callback && window[e.callback] && (n[t] = window[e.callback])),
            e.event_type && 2 === e.event_type && (r = "unregister_event"),
            e.cmd = r,
            e.data = e.data || {},
            e.data.event_name = e.event,
            e.data.event_callback = "webEventProxy",
            R.get(e)
        },
        jump: function(e) {
            var t, n = R.status, r = {
                TGP: R
            };
            try {
                if (null == window.top.TGP || null == window.top.TGP.status)
                    return void (window.top.location.href = e.page)
            } catch (t) {
                e.page.indexOf(M) < 0 && (e.page = M + e.page.replace("//", ""));
                var i = (new Date).getTime();
                return void window.top.postMessage(JSON.stringify({
                    action: "jump",
                    url: e.page + (-1 === e.page.indexOf("?") ? "?t=" + i : "&t=" + i)
                }), "*")
            }
            if (top.location === self.location) {
                if ("jumpView" === e.module)
                    ;
                else if (!isNaN(e.app))
                    if (e.app != n.curMod)
                        R.get({
                            app: 0,
                            src: n.curMod,
                            cmd: "jc_set_app_status",
                            data: {
                                game_id: isNaN(e.app) ? n.curMod : e.app
                            },
                            success: function(t) {
                                var n = R.mList
                                  , r = n[e.app].name
                                  , t = t.data;
                                e.page ? (R.curJump.mid = e.app,
                                R.curJump.page = e.page,
                                R.curJump.params = e.params || {},
                                R.curJump.web_st = t.web_st,
                                R.curJump.uin = t.uin,
                                R[r + "_navmenu"] ? R.web.jumpModuleURI(R.curJump) : (confUrl = M + "cdn.tgp.qq.com/" + r + "/conf/" + r + "_page_map.js?t=" + Date.now(),
                                o(confUrl, "UTF-8", window.tgp_jumpModuleURI))) : R.web.jumpModulePage({
                                    mid: t.mid,
                                    url: t.url,
                                    web_st: t.web_st || "",
                                    uin: t.uin || ""
                                })
                            },
                            fail: function(t) {
                                R.web.jumpModulePage({
                                    mid: e.app,
                                    url: O.replaceDomain(M + "plat.tgp.qq.com/platform/frames/building.html")
                                }),
                                console.log("jump fail : " + JSON.stringify(t))
                            }
                        });
                    else if (r[e.app])
                        if (t = r[e.app].name,
                        R.curJump.mid = e.app,
                        R.curJump.page = e.page,
                        R.curJump.params = e.params || {},
                        R[t + "_navmenu"])
                            R.web.jumpModuleURI(R.curJump);
                        else {
                            var a = M + "cdn.tgp.qq.com/" + t + "/conf/" + t + "_page_map.js?t=" + Date.now();
                            o(a, "UTF-8", window.tgp_jumpModuleURI)
                        }
            } else
                top.TGP.jump(e)
        },
        back: function() {
            try {
                if (void 0 == top.TGP || void 0 == top.TGP.status)
                    return void window.history.go(-1)
            } catch (e) {
                return void window.history.go(-1)
            }
            if (top.location == self.location) {
                var e, t, n = R.status, r = n.refList;
                t = r.length,
                e = 0 == t ? {
                    mid: "55555",
                    url: M + "plat.tgp.qq.com/center/index.html"
                } : r.pop(),
                n.curMod != e.mid ? R.get({
                    app: 0,
                    src: 0,
                    cmd: "jc_set_app_status",
                    data: {
                        game_id: e.mid
                    },
                    success: function(t) {
                        e.web_st = t.web_st,
                        e.uin = t.uin,
                        setTimeout(function() {
                            R.web.setMainFrame(e)
                        }, 100)
                    },
                    fail: function(e) {
                        console.log("goBack fail : " + JSON.stringify(e))
                    }
                }) : R.web.setMainFrame(e)
            } else
                top.TGP.back()
        },
        openVideo: function(e) {
            a("TGP.openVideo", "废弃方法，请替换为 TGP.openWindow，使用方法一样。"),
            R.openWindow(e)
        },
        openWindow: function(e) {
            var t = {
                type: "open_video",
                qblink: !0
            };
            for (var n in e)
                t[n] = e[n];
            return R.get({
                app: 0,
                cmd: "open_inner_link",
                data: t,
                fail: function() {}
            })
        },
        openJdqsWindow: function(e, t, n, r) {
            return i("X_JS_SDK", {
                module: "view_mgr",
                cmd: "open_popup_web_wnd",
                callback: "",
                seq_id: 100,
                data: {
                    id: 1,
                    width: n,
                    height: r,
                    title: t,
                    url: e
                }
            })
        },
        set_wegame_cookie: function(e) {
            a("TGP.set_wegame_cookie", "请使用 setLoginCookie 替代"),
            R.setLoginCookie(e)
        },
        setLoginCookie: function(e, t) {
            var n = u();
            if (c(n) && !t)
                return void setTimeout(function() {
                    e && e(n)
                }, 0);
            var r = u(function(e) {
                return S.getUrlPara(e)
            });
            if (c(r))
                return s(r),
                void setTimeout(function() {
                    e && e(r)
                }, 0);
            var o = setTimeout(function() {
                e && e(null)
            }, 1e3)
              , i = "0";
            try {
                top.TGP && top.TGP.status && (i = top.TGP.status.curMod)
            } catch (e) {}
            R.get({
                src: i,
                app: "0",
                cmd: "m_get_client_info",
                timeout: 1e3,
                success: function(t) {
                    clearTimeout(o),
                    t && t.data ? (s(t.data),
                    e && e(t.data)) : e && e(null)
                },
                fail: function() {
                    clearTimeout(o),
                    e && e(null)
                }
            })
        },
        storage: {
            set: function(e) {
                R.get({
                    app: 0,
                    cmd: "jc_plugin_set_cfg",
                    data: {
                        module_id: e.module_id + "" || "0",
                        expire_time: e.expire_time || 1e6,
                        datas: e.datas
                    },
                    success: function() {},
                    fail: function() {}
                })
            },
            get: function(e, t) {
                R.get({
                    app: 0,
                    cmd: "jc_plugin_get_cfg",
                    data: {
                        module_id: e.module_id + "" || "0",
                        keys: e.keys
                    },
                    success: function(e) {
                        "function" == typeof t && t(e)
                    },
                    fail: function(e) {
                        "function" == typeof t && t(e)
                    }
                })
            },
            del: function(e) {
                R.get({
                    app: 0,
                    cmd: "jc_plugin_del_cfg",
                    data: {
                        module_id: e.module_id + "" || "0",
                        keys: e.keys
                    },
                    success: function() {},
                    fail: function() {}
                })
            }
        },
        render: function() {},
        log: function(e) {
            var t = 0;
            if ("string" == typeof e && e.constructor == String && (e = {
                text: "[WEBLOG] " + e
            }),
            e.level = e.level || "3",
            !C.isWeGame) {
                var n = {
                    1: "error",
                    2: "warn",
                    3: "trace"
                }
                  , r = n[e.level];
                return void (r && "undefined" != typeof console && "function" == typeof console[r] && console[r](e.text))
            }
            try {
                window.top.TGP && window.top.TGP.status && (t = window.top.TGP.status.curMod)
            } catch (e) {}
            e.filter = e.filter ? t + "_" + e.filter : t,
            R.get({
                src: "0",
                app: "0",
                cmd: "tx_log",
                data: {
                    level: e.level,
                    filter: e.filter,
                    text: e.text
                },
                success: function(e) {
                    console.log("log fail : " + JSON.stringify(e))
                },
                fail: function(e) {
                    console.log("WEB log fail : " + JSON.stringify(e))
                }
            })
        },
        action: function(e, t, n) {
            function r(e, t) {
                var n = "0";
                /\.qq\.com$/.test(t.url) && (n = "1"),
                void 0 !== t.use_ptlogin && (n = t.use_ptlogin),
                R.get({
                    app: 0,
                    cmd: "open_inner_link",
                    data: {
                        type: "open_web",
                        browser: e,
                        tgp_browser_type: "QBLink",
                        url: O.replaceDomain(t.url),
                        title: t.title,
                        use_ptlogin: n
                    },
                    fail: function() {
                        window.open(O.replaceDomain(t.url), "TGPWindow")
                    }
                })
            }
            function o(e, t, n, r) {
                R.openWindow({
                    url: e,
                    width: t,
                    height: n,
                    title: r
                })
            }
            var i = arguments.length;
            if (0 === i || 1 === i && "function" == typeof e)
                return !document.__attach_tgp_action && (document.addEventListener("click", function(t) {
                    var n = t.target
                      , r = n.dataset.tgpaction
                      , o = n.dataset.windowtitle;
                    if (r || (n = n.closest("[data-tgpaction]")),
                    !n)
                        return !1;
                    r = n.dataset.tgpaction,
                    o = n.dataset.windowtitle;
                    try {
                        var i = JSON.parse(r);
                        if (/\bxTools\.exe/i.test(navigator.userAgent) || /\BattleCare\.exe/i.test(navigator.userAgent)) {
                            var a = O.replaceDomain(window.location.protocol + "//plat.tgp.qq.com/video/zone/template-video.html")
                              , s = O.replaceDomain(window.location.protocol + "//plat.tgp.qq.com/video/video-player/index.html?gid=" + i[1].appId + "&vid=" + i[1].vid + "&from=" + a);
                            return R.openJdqsWindow(s, "视频", 1080, 630),
                            document.__attach_tgp_action = !0,
                            !0
                        }
                        R.action(i[0], i[1], o),
                        "function" == typeof e && e.call(n, i[0], i[1])
                    } catch (t) {
                        console.warn("%cTGP.action", "color:red;font-size:2em;", "data-tgpaction设置的参数错误，请检查!")
                    }
                }, !1),
                document.__attach_tgp_action = !0,
                !0);
            if (e *= 1,
            t = t || {},
            isNaN(e))
                return console.error("TGP.action(actionId, params)的第一个参数actionId必须是Number");
            switch (e) {
            case 100:
                r("os", t);
                break;
            case 101:
                r("tgp", t);
                break;
            case 102:
                r("multi_web", t);
                break;
            case 103:
                var a = [];
                for (var s in t) {
                    var c = t[s];
                    a.push(s + "=" + encodeURIComponent(c))
                }
                var u = M + location.hostname + "/helper/pop-video-player/index.html?" + a.join("&");
                o(u, t.width, t.height);
                break;
            case 105:
                o(t.url, t.width || 800, t.height || 600);
                break;
            case 110:
                if (!("vid"in t))
                    return;
                "catagory"in t || (t.catagory = 1);
                var l = t.appId || 0
                  , p = t.vid
                  , f = t.from || encodeURIComponent(location.protocol + "//" + location.host + location.pathname) || ""
                  , d = O.replaceDomain(M + "plat.tgp.qq.com/video/video-player/index.html?")
                  , u = ["gid=" + l, "vid=" + p]
                  , g = 1080
                  , h = 630;
                switch (1 * t.catagory) {
                case 0:
                    u.push("sourcetype=1");
                    break;
                case 999:
                    u.push("sourcetype=2")
                }
                u.push("from=" + f),
                u = d + u.join("&"),
                o(u, g, h, n);
                break;
            case 120:
                var m = ""
                  , f = "";
                "string" == typeof t ? m = t : (m = t.liveId,
                f = t.from || ""),
                D.openLivePlayer(m, f);
                break;
            case 121:
                var v = t.gameId
                  , w = t.roomId
                  , y = t.subRoomId
                  , b = t.from || ""
                  , u = O.replaceDomain(M + "plat.tgp.qq.com/tgpforum/video/index.html#!/live/room/" + v + "/" + w + "/" + y + "?from=" + b, g, h);
                window.screen.height > 900 ? (g = 1028,
                h = 900) : (g = 1034,
                h = 626),
                o(u, g, h);
                break;
            case 122:
                var l = t.gameId
                  , _ = t.roomId
                  , u = O.replaceDomain(M + "plat.tgp.qq.com/live/selfroom/selfroom.html?game_id=" + l + "&room_id=" + _);
                o(u, 1280, 707);
                break;
            case 200:
                R.jump(t);
                break;
            case 301:
                !function(e, t, n) {
                    R.get({
                        app: 0,
                        cmd: e,
                        data: t,
                        fail: n || function() {}
                    })
                }("jc_start_game", t)
            }
        },
        monitorReport: function(e) {
            var t, n = R.status;
            e && !isNaN(e.key) && (t = {
                app_id: isNaN(e.app) ? n.curMod : e.app,
                report_id: 1 * e.key,
                value: isNaN(e.value) ? -1 : 1 * e.value
            },
            R.get({
                app: 0,
                cmd: "tgp_monitor_report",
                data: t,
                success: function() {},
                fail: function() {}
            }))
        },
        jumpMMOGDetail: function(e) {
            return e && e.params.game_id ? 16 != +e.page && -1 === e.page.indexOf("MMOG_detail.html") ? R.jump(e) : e.params ? void R.get({
                app: "0",
                cmd: "m_query_game_info_by_id",
                data: {
                    game_id_count: 1,
                    game_id_list: [e.params.game_id]
                },
                success: function(t) {
                    t && t.data && t.data.length > 0 && 1 == +t.data[0].game_main_type && (e.page = 20),
                    R.jump(e)
                },
                fail: function() {
                    R.jump(e)
                }
            }) : R.jump(e) : R.jump(e)
        }
    };
    window.TGP = R,
    C.isWeGame && window.addEventListener("message", function(e) {
        e && e.data && s(e.data)
    }, !1);
    var N = {
        seq: 1,
        executors: []
    }
      , U = {}
      , G = function() {};
    g("on_comm_center_call_back", function(e, t, n) {
        if (0 !== t.length && 0 !== n.length)
            try {
                var r = JSON.parse(t)
                  , o = ~~JSON.parse(n).seq;
                N.executors = N.executors.filter(function(e) {
                    var t = e.seq === o;
                    return t && e.fn.call(null, r),
                    !t
                })
            } catch (e) {}
    }),
    g("on_comm_center_broadcast", function(e, t) {
        var n = U[e];
        if (n && n.length) {
            var r = t && t.length ? JSON.parse(t) : {};
            n.forEach(function(e) {
                e(r)
            })
        }
    });
    var F, z = l, W = p, J = f, Q = d, H = Object.freeze({
        call: l,
        listen: p,
        broadcast: f,
        unlisten: d,
        call_service: z,
        listen_broadcast: W,
        send_broadcast: J,
        remove_listen: Q
    }), Y = null, V = null, X = null, K = Object.freeze({
        isWeGameX: h,
        queryTgpIsNetBar: m,
        queryTgpLanguage: v
    }), Z = Object.freeze({
        railCrossCloseWebWindow: y,
        crossInvoke: b
    }), $ = null, ee = "zh_CN", te = Object.freeze({
        getClientInfo: x,
        callRailCpp: k,
        getLanguage: T,
        setLanguage: q
    });
    t.tgp = R,
    t.env = K,
    t.cross = Z,
    t.service = H,
    t.live = D,
    t.client = te
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = window.location.host
          , n = !1;
        return n = t.indexOf("wegame.com") >= 0 || t.indexOf("wegame.com.cn") >= 0,
        n ? e.replace(/\/\/(oss|forum|rail|webd|oper-promot|im|wpicupload|act|iso)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/api\.(pallas)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/middle\.tgp\.qq\.com/, "//" + t + "/api/middle").replace(/\/\/qt\.qq\.com/, "//" + t + "/api/qt").replace(/\/\/plat\.tgp\.qq\.com/, "//" + t).replace(/\/\/game\.tgp\.qq\.com/, "//" + t) : e
    }
    function o(e) {
        var t = window.location.host;
        if (t.indexOf("wegame.com") >= 0 || t.indexOf("wegame.com.cn") >= 0) {
            var n = /\.com\.cn$/.test(t) ? "//act.wegame.com.cn" : "//act.wegame.com";
            return e.replace(/\/\/(demo|act)\.tgp\.qq\.com/, n)
        }
        return e
    }
    function i() {
        var e = !1;
        return e
    }
    function a(e) {
        return /^(https?:)?\/\//.test(e)
    }
    function s(e) {
        if (!e)
            return "";
        if (!a(e))
            return "//wegame.gtimg.com" + e;
        var t = window.location.host;
        return t.indexOf("qq.com") >= 0 || t.indexOf("wegame.com.cn") >= 0 ? e.replace(/\/\/cdn\.tgp\.qq\.com/, "//wegame.gtimg.com") : e.replace(/\/\/cdn\.tgp\.qq\.com/, "//img.gtgres.com").replace(/\/\/wegame\.gtimg\.com/, "//img.gtgres.com")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.replaceDomain = r,
    t.replaceActDomain = o,
    t.isOverSeaDomain = i,
    t.replaceCDNDomain = s
}
, function(e, t, n) {
    function r() {}
    function o(e) {
        if (!h(e))
            return e;
        var t = [];
        for (var n in e)
            i(t, n, e[n]);
        return t.join("&")
    }
    function i(e, t, n) {
        if (null != n)
            if (Array.isArray(n))
                n.forEach(function(n) {
                    i(e, t, n)
                });
            else if (h(n))
                for (var r in n)
                    i(e, t + "[" + r + "]", n[r]);
            else
                e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
        else
            null === n && e.push(encodeURIComponent(t))
    }
    function a(e) {
        for (var t, n, r = {}, o = e.split("&"), i = 0, a = o.length; i < a; ++i)
            t = o[i],
            n = t.indexOf("="),
            -1 == n ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
        return r
    }
    function s(e) {
        for (var t, n, r, o, i = e.split(/\r?\n/), a = {}, s = 0, c = i.length; s < c; ++s)
            n = i[s],
            -1 !== (t = n.indexOf(":")) && (r = n.slice(0, t).toLowerCase(),
            o = y(n.slice(t + 1)),
            a[r] = o);
        return a
    }
    function c(e) {
        return /[\/+]json($|[^-\w])/.test(e)
    }
    function u(e) {
        this.req = e,
        this.xhr = this.req.xhr,
        this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null,
        this.statusText = this.req.xhr.statusText;
        var t = this.xhr.status;
        1223 === t && (t = 204),
        this._setStatusProperties(t),
        this.header = this.headers = s(this.xhr.getAllResponseHeaders()),
        this.header["content-type"] = this.xhr.getResponseHeader("content-type"),
        this._setHeaderProperties(this.header),
        null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }
    function l(e, t) {
        var n = this;
        this._query = this._query || [],
        this.method = e,
        this.url = t,
        this.header = {},
        this._header = {},
        this.on("end", function() {
            var e = null
              , t = null;
            try {
                t = new u(n)
            } catch (t) {
                return e = new Error("Parser is unable to parse the response"),
                e.parse = !0,
                e.original = t,
                n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response,
                e.status = n.xhr.status ? n.xhr.status : null,
                e.statusCode = e.status) : (e.rawResponse = null,
                e.status = null),
                n.callback(e)
            }
            n.emit("response", t);
            var r;
            try {
                n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"))
            } catch (e) {
                r = e
            }
            r ? (r.original = e,
            r.response = t,
            r.status = t.status,
            n.callback(r, t)) : n.callback(null, t)
        })
    }
    function p(e, t, n) {
        var r = w("DELETE", e);
        return "function" == typeof t && (n = t,
        t = null),
        t && r.send(t),
        n && r.end(n),
        r
    }
    var f;
    "undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"),
    f = this);
    var d = n(156)
      , g = n(157)
      , h = n(65)
      , m = n(158)
      , v = n(160)
      , w = t = e.exports = function(e, n) {
        return "function" == typeof n ? new t.Request("GET",e).end(n) : 1 == arguments.length ? new t.Request("GET",e) : new t.Request(e,n)
    }
    ;
    t.Request = l,
    w.getXHR = function() {
        if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject))
            return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        throw Error("Browser-only version of superagent could not find XHR")
    }
    ;
    var y = "".trim ? function(e) {
        return e.trim()
    }
    : function(e) {
        return e.replace(/(^\s*|\s*$)/g, "")
    }
    ;
    w.serializeObject = o,
    w.parseString = a,
    w.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    },
    w.serialize = {
        "application/x-www-form-urlencoded": o,
        "application/json": JSON.stringify
    },
    w.parse = {
        "application/x-www-form-urlencoded": a,
        "application/json": JSON.parse
    },
    m(u.prototype),
    u.prototype._parseBody = function(e) {
        var t = w.parse[this.type];
        return this.req._parser ? this.req._parser(this, e) : (!t && c(this.type) && (t = w.parse["application/json"]),
        t && e && (e.length || e instanceof Object) ? t(e) : null)
    }
    ,
    u.prototype.toError = function() {
        var e = this.req
          , t = e.method
          , n = e.url
          , r = "cannot " + t + " " + n + " (" + this.status + ")"
          , o = new Error(r);
        return o.status = this.status,
        o.method = t,
        o.url = n,
        o
    }
    ,
    w.Response = u,
    d(l.prototype),
    g(l.prototype),
    l.prototype.type = function(e) {
        return this.set("Content-Type", w.types[e] || e),
        this
    }
    ,
    l.prototype.accept = function(e) {
        return this.set("Accept", w.types[e] || e),
        this
    }
    ,
    l.prototype.auth = function(e, t, n) {
        1 === arguments.length && (t = ""),
        "object" == typeof t && null !== t && (n = t,
        t = ""),
        n || (n = {
            type: "function" == typeof btoa ? "basic" : "auto"
        });
        var r = function(e) {
            if ("function" == typeof btoa)
                return btoa(e);
            throw new Error("Cannot use basic auth, btoa is not a function")
        };
        return this._auth(e, t, n, r)
    }
    ,
    l.prototype.query = function(e) {
        return "string" != typeof e && (e = o(e)),
        e && this._query.push(e),
        this
    }
    ,
    l.prototype.attach = function(e, t, n) {
        if (t) {
            if (this._data)
                throw Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, t, n || t.name)
        }
        return this
    }
    ,
    l.prototype._getFormData = function() {
        return this._formData || (this._formData = new f.FormData),
        this._formData
    }
    ,
    l.prototype.callback = function(e, t) {
        if (this._shouldRetry(e, t))
            return this._retry();
        var n = this._callback;
        this.clearTimeout(),
        e && (this._maxRetries && (e.retries = this._retries - 1),
        this.emit("error", e)),
        n(e, t)
    }
    ,
    l.prototype.crossDomainError = function() {
        var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        e.crossDomain = !0,
        e.status = this.status,
        e.method = this.method,
        e.url = this.url,
        this.callback(e)
    }
    ,
    l.prototype.buffer = l.prototype.ca = l.prototype.agent = function() {
        return console.warn("This is not supported in browser version of superagent"),
        this
    }
    ,
    l.prototype.pipe = l.prototype.write = function() {
        throw Error("Streaming is not supported in browser version of superagent")
    }
    ,
    l.prototype._isHost = function(e) {
        return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
    }
    ,
    l.prototype.end = function(e) {
        return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"),
        this._endCalled = !0,
        this._callback = e || r,
        this._finalizeQueryString(),
        this._end()
    }
    ,
    l.prototype._end = function() {
        var e = this
          , t = this.xhr = w.getXHR()
          , n = this._formData || this._data;
        this._setTimeouts(),
        t.onreadystatechange = function() {
            var n = t.readyState;
            if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer),
            4 == n) {
                var r;
                try {
                    r = t.status
                } catch (e) {
                    r = 0
                }
                if (!r) {
                    if (e.timedout || e._aborted)
                        return;
                    return e.crossDomainError()
                }
                e.emit("end")
            }
        }
        ;
        var r = function(t, n) {
            n.total > 0 && (n.percent = n.loaded / n.total * 100),
            n.direction = t,
            e.emit("progress", n)
        };
        if (this.hasListeners("progress"))
            try {
                t.onprogress = r.bind(null, "download"),
                t.upload && (t.upload.onprogress = r.bind(null, "upload"))
            } catch (e) {}
        try {
            this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
        } catch (e) {
            return this.callback(e)
        }
        if (this._withCredentials && (t.withCredentials = !0),
        !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
            var o = this._header["content-type"]
              , i = this._serializer || w.serialize[o ? o.split(";")[0] : ""];
            !i && c(o) && (i = w.serialize["application/json"]),
            i && (n = i(n))
        }
        for (var a in this.header)
            null != this.header[a] && this.header.hasOwnProperty(a) && t.setRequestHeader(a, this.header[a]);
        return this._responseType && (t.responseType = this._responseType),
        this.emit("request", this),
        t.send(void 0 !== n ? n : null),
        this
    }
    ,
    w.agent = function() {
        return new v
    }
    ,
    ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(e) {
        v.prototype[e.toLowerCase()] = function(t, n) {
            var r = new w.Request(e,t);
            return this._setDefaults(r),
            n && r.end(n),
            r
        }
    }),
    v.prototype.del = v.prototype.delete,
    w.get = function(e, t, n) {
        var r = w("GET", e);
        return "function" == typeof t && (n = t,
        t = null),
        t && r.query(t),
        n && r.end(n),
        r
    }
    ,
    w.head = function(e, t, n) {
        var r = w("HEAD", e);
        return "function" == typeof t && (n = t,
        t = null),
        t && r.query(t),
        n && r.end(n),
        r
    }
    ,
    w.options = function(e, t, n) {
        var r = w("OPTIONS", e);
        return "function" == typeof t && (n = t,
        t = null),
        t && r.send(t),
        n && r.end(n),
        r
    }
    ,
    w.del = p,
    w.delete = p,
    w.patch = function(e, t, n) {
        var r = w("PATCH", e);
        return "function" == typeof t && (n = t,
        t = null),
        t && r.send(t),
        n && r.end(n),
        r
    }
    ,
    w.post = function(e, t, n) {
        var r = w("POST", e);
        return "function" == typeof t && (n = t,
        t = null),
        t && r.send(t),
        n && r.end(n),
        r
    }
    ,
    w.put = function(e, t, n) {
        var r = w("PUT", e);
        return "function" == typeof t && (n = t,
        t = null),
        t && r.send(t),
        n && r.end(n),
        r
    }
}
, function(e, t, n) {
    function r(e) {
        if (e)
            return o(e)
    }
    function o(e) {
        for (var t in r.prototype)
            e[t] = r.prototype[t];
        return e
    }
    e.exports = r,
    r.prototype.on = r.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {},
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
    }
    ,
    r.prototype.once = function(e, t) {
        function n() {
            this.off(e, n),
            t.apply(this, arguments)
        }
        return n.fn = t,
        this.on(e, n),
        this
    }
    ,
    r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {},
        0 == arguments.length)
            return this._callbacks = {},
            this;
        var n = this._callbacks["$" + e];
        if (!n)
            return this;
        if (1 == arguments.length)
            return delete this._callbacks["$" + e],
            this;
        for (var r, o = 0; o < n.length; o++)
            if ((r = n[o]) === t || r.fn === t) {
                n.splice(o, 1);
                break
            }
        return this
    }
    ,
    r.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1)
          , n = this._callbacks["$" + e];
        if (n) {
            n = n.slice(0);
            for (var r = 0, o = n.length; r < o; ++r)
                n[r].apply(this, t)
        }
        return this
    }
    ,
    r.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {},
        this._callbacks["$" + e] || []
    }
    ,
    r.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if (e)
            return o(e)
    }
    function o(e) {
        for (var t in r.prototype)
            e[t] = r.prototype[t];
        return e
    }
    var i = n(65);
    e.exports = r,
    r.prototype.clearTimeout = function() {
        return clearTimeout(this._timer),
        clearTimeout(this._responseTimeoutTimer),
        delete this._timer,
        delete this._responseTimeoutTimer,
        this
    }
    ,
    r.prototype.parse = function(e) {
        return this._parser = e,
        this
    }
    ,
    r.prototype.responseType = function(e) {
        return this._responseType = e,
        this
    }
    ,
    r.prototype.serialize = function(e) {
        return this._serializer = e,
        this
    }
    ,
    r.prototype.timeout = function(e) {
        if (!e || "object" != typeof e)
            return this._timeout = e,
            this._responseTimeout = 0,
            this;
        for (var t in e)
            switch (t) {
            case "deadline":
                this._timeout = e.deadline;
                break;
            case "response":
                this._responseTimeout = e.response;
                break;
            default:
                console.warn("Unknown timeout option", t)
            }
        return this
    }
    ,
    r.prototype.retry = function(e, t) {
        return 0 !== arguments.length && !0 !== e || (e = 1),
        e <= 0 && (e = 0),
        this._maxRetries = e,
        this._retries = 0,
        this._retryCallback = t,
        this
    }
    ;
    var a = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    r.prototype._shouldRetry = function(e, t) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries)
            return !1;
        if (this._retryCallback)
            try {
                var n = this._retryCallback(e, t);
                if (!0 === n)
                    return !0;
                if (!1 === n)
                    return !1
            } catch (e) {
                console.error(e)
            }
        if (t && t.status && t.status >= 500 && 501 != t.status)
            return !0;
        if (e) {
            if (e.code && ~a.indexOf(e.code))
                return !0;
            if (e.timeout && "ECONNABORTED" == e.code)
                return !0;
            if (e.crossDomain)
                return !0
        }
        return !1
    }
    ,
    r.prototype._retry = function() {
        return this.clearTimeout(),
        this.req && (this.req = null,
        this.req = this.request()),
        this._aborted = !1,
        this.timedout = !1,
        this._end()
    }
    ,
    r.prototype.then = function(e, t) {
        if (!this._fullfilledPromise) {
            var n = this;
            this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),
            this._fullfilledPromise = new Promise(function(e, t) {
                n.end(function(n, r) {
                    n ? t(n) : e(r)
                })
            }
            )
        }
        return this._fullfilledPromise.then(e, t)
    }
    ,
    r.prototype.catch = function(e) {
        return this.then(void 0, e)
    }
    ,
    r.prototype.use = function(e) {
        return e(this),
        this
    }
    ,
    r.prototype.ok = function(e) {
        if ("function" != typeof e)
            throw Error("Callback required");
        return this._okCallback = e,
        this
    }
    ,
    r.prototype._isResponseOK = function(e) {
        return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
    }
    ,
    r.prototype.get = function(e) {
        return this._header[e.toLowerCase()]
    }
    ,
    r.prototype.getHeader = r.prototype.get,
    r.prototype.set = function(e, t) {
        if (i(e)) {
            for (var n in e)
                this.set(n, e[n]);
            return this
        }
        return this._header[e.toLowerCase()] = t,
        this.header[e] = t,
        this
    }
    ,
    r.prototype.unset = function(e) {
        return delete this._header[e.toLowerCase()],
        delete this.header[e],
        this
    }
    ,
    r.prototype.field = function(e, t) {
        if (null === e || void 0 === e)
            throw new Error(".field(name, val) name can not be empty");
        if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),
        i(e)) {
            for (var n in e)
                this.field(n, e[n]);
            return this
        }
        if (Array.isArray(t)) {
            for (var r in t)
                this.field(e, t[r]);
            return this
        }
        if (null === t || void 0 === t)
            throw new Error(".field(name, val) val can not be empty");
        return "boolean" == typeof t && (t = "" + t),
        this._getFormData().append(e, t),
        this
    }
    ,
    r.prototype.abort = function() {
        return this._aborted ? this : (this._aborted = !0,
        this.xhr && this.xhr.abort(),
        this.req && this.req.abort(),
        this.clearTimeout(),
        this.emit("abort"),
        this)
    }
    ,
    r.prototype._auth = function(e, t, n, r) {
        switch (n.type) {
        case "basic":
            this.set("Authorization", "Basic " + r(e + ":" + t));
            break;
        case "auto":
            this.username = e,
            this.password = t;
            break;
        case "bearer":
            this.set("Authorization", "Bearer " + e)
        }
        return this
    }
    ,
    r.prototype.withCredentials = function(e) {
        return void 0 == e && (e = !0),
        this._withCredentials = e,
        this
    }
    ,
    r.prototype.redirects = function(e) {
        return this._maxRedirects = e,
        this
    }
    ,
    r.prototype.maxResponseSize = function(e) {
        if ("number" != typeof e)
            throw TypeError("Invalid argument");
        return this._maxResponseSize = e,
        this
    }
    ,
    r.prototype.toJSON = function() {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        }
    }
    ,
    r.prototype.send = function(e) {
        var t = i(e)
          , n = this._header["content-type"];
        if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),
        t && !this._data)
            Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
        else if (e && this._data && this._isHost(this._data))
            throw Error("Can't merge these send calls");
        if (t && i(this._data))
            for (var r in e)
                this._data[r] = e[r];
        else
            "string" == typeof e ? (n || this.type("form"),
            n = this._header["content-type"],
            this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
        return !t || this._isHost(e) ? this : (n || this.type("json"),
        this)
    }
    ,
    r.prototype.sortQuery = function(e) {
        return this._sort = void 0 === e || e,
        this
    }
    ,
    r.prototype._finalizeQueryString = function() {
        var e = this._query.join("&");
        if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e),
        this._query.length = 0,
        this._sort) {
            var t = this.url.indexOf("?");
            if (t >= 0) {
                var n = this.url.substring(t + 1).split("&");
                "function" == typeof this._sort ? n.sort(this._sort) : n.sort(),
                this.url = this.url.substring(0, t) + "?" + n.join("&")
            }
        }
    }
    ,
    r.prototype._appendQueryString = function() {
        console.trace("Unsupported")
    }
    ,
    r.prototype._timeoutError = function(e, t, n) {
        if (!this._aborted) {
            var r = new Error(e + t + "ms exceeded");
            r.timeout = t,
            r.code = "ECONNABORTED",
            r.errno = n,
            this.timedout = !0,
            this.abort(),
            this.callback(r)
        }
    }
    ,
    r.prototype._setTimeouts = function() {
        var e = this;
        this._timeout && !this._timer && (this._timer = setTimeout(function() {
            e._timeoutError("Timeout of ", e._timeout, "ETIME")
        }, this._timeout)),
        this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
            e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
        }, this._responseTimeout))
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if (e)
            return o(e)
    }
    function o(e) {
        for (var t in r.prototype)
            e[t] = r.prototype[t];
        return e
    }
    var i = n(159);
    e.exports = r,
    r.prototype.get = function(e) {
        return this.header[e.toLowerCase()]
    }
    ,
    r.prototype._setHeaderProperties = function(e) {
        var t = e["content-type"] || "";
        this.type = i.type(t);
        var n = i.params(t);
        for (var r in n)
            this[r] = n[r];
        this.links = {};
        try {
            e.link && (this.links = i.parseLinks(e.link))
        } catch (e) {}
    }
    ,
    r.prototype._setStatusProperties = function(e) {
        var t = e / 100 | 0;
        this.status = this.statusCode = e,
        this.statusType = t,
        this.info = 1 == t,
        this.ok = 2 == t,
        this.redirect = 3 == t,
        this.clientError = 4 == t,
        this.serverError = 5 == t,
        this.error = (4 == t || 5 == t) && this.toError(),
        this.created = 201 == e,
        this.accepted = 202 == e,
        this.noContent = 204 == e,
        this.badRequest = 400 == e,
        this.unauthorized = 401 == e,
        this.notAcceptable = 406 == e,
        this.forbidden = 403 == e,
        this.notFound = 404 == e,
        this.unprocessableEntity = 422 == e
    }
}
, function(e, t, n) {
    "use strict";
    t.type = function(e) {
        return e.split(/ *; */).shift()
    }
    ,
    t.params = function(e) {
        return e.split(/ *; */).reduce(function(e, t) {
            var n = t.split(/ *= */)
              , r = n.shift()
              , o = n.shift();
            return r && o && (e[r] = o),
            e
        }, {})
    }
    ,
    t.parseLinks = function(e) {
        return e.split(/ *, */).reduce(function(e, t) {
            var n = t.split(/ *; */)
              , r = n[0].slice(1, -1);
            return e[n[1].split(/ *= */)[1].slice(1, -1)] = r,
            e
        }, {})
    }
    ,
    t.cleanHeader = function(e, t) {
        return delete e["content-type"],
        delete e["content-length"],
        delete e["transfer-encoding"],
        delete e.host,
        t && (delete e.authorization,
        delete e.cookie),
        e
    }
}
, function(e, t) {
    function n() {
        this._defaults = []
    }
    ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(e) {
        n.prototype[e] = function() {
            return this._defaults.push({
                fn: e,
                arguments: arguments
            }),
            this
        }
    }),
    n.prototype._setDefaults = function(e) {
        this._defaults.forEach(function(t) {
            e[t.fn].apply(e, t.arguments)
        })
    }
    ,
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = window.location.host;
        return e.replace(/\/\/(oss|forum|rail|webd|oper-promot|im|wpicupload|iso)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/api\.(pallas)\.tgp\.qq\.com/, "//" + t + "/api/$1").replace(/\/\/middle\.tgp\.qq\.com/, "//" + t + "/api/middle").replace(/\/\/qt\.qq\.com/, "//" + t + "/api/qt").replace(/\/\/plat\.tgp\.qq\.com/, "//" + t).replace(/\/\/game\.tgp\.qq\.com/, "//" + t)
    }
    function o(e) {
        var t = window.location.host;
        if (!(t.indexOf("tgp.qq.com") >= 0)) {
            var n = /\.com\.cn$/.test(t) ? "//act.wegame.com.cn" : "//act.wegame.com";
            return e.replace(/\/\/(demo|act)\.tgp\.qq\.com/, n)
        }
        return e
    }
    function i() {
        return !1
    }
    function a(e) {
        return /^(https?:)?\/\//.test(e)
    }
    function s(e) {
        return e ? a(e) ? e.replace(/\/\/cdn\.tgp\.qq\.com/, "//wegame.gtimg.com").replace(/\/\/wegame\.gtimg\.com/, "//wegame.gtimg.com") : "//wegame.gtimg.com" + e : ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.replaceDomain = r,
    t.replaceActDomain = o,
    t.isOverSeaDomain = i,
    t.replaceCDNDomain = s
}
, function(e, t, n) {
    "use strict";
    t.a = {
        maillogin: "登录",
        mail: "请输入邮箱帐号",
        facebooklogin: "facebook登录",
        qqlogin: "qq登录",
        wxlogin: "微信登录",
        passwd: "密码",
        login: "登 录",
        rememberpasswd: "记住密码",
        forgetpasswd: "忘记密码",
        reg: "注册新用户",
        tofacebook: "请点击跳转至Facebook登录页登录",
        qqwxalert: "QQ与微信帐号的信息独立，游戏资产不互通",
        loginfailmsg: "登录WeGame失败, 错误码：",
        failmsg: "错误信息：",
        mailformaterr: "请输入正确的邮箱地址",
        passwdempty: "请输入密码",
        commerr: "网络繁忙，请稍后再试 ({result})",
        mailqqerr: "如果你正在使用QQ帐号，请点击上方的“QQ登录”",
        backmailpwderr: "校验帐号密码失败",
        backmailnotreg: "邮箱帐号未注册",
        backmailformaterr: "邮箱格式不正确",
        backpwderr: "用户名或密码错误",
        maxtrytime: "，连续错误{trytimes}次后锁定帐户，",
        lefttrytime: "剩余{lefttimes}次",
        accountlock: "帐户已被锁定，请24小时后重试或联系客服处理",
        accountlockdevplatform: "帐户已被锁定，请24小时后重试或联系我们：developer@wegame.com。",
        kickofftip: "因为{action}操作，您已下线，请重新登录",
        kickoff: {
            passwordchange: "已修改登录密码，请重新登录"
        },
        password_changed: "修改密码",
        logintip: "您在{city}区域进行了登录，请确认是否本人操作",
        logintipL: "您在",
        logintipC: "区域",
        unknown: "未知",
        logintipR: "进行了登录，请确认是否本人操作",
        kickofftitle: "下线通知",
        logintiptitle: "登录通知",
        failVerifyTip: "安全验证失败",
        unreg: {
            title: "帐号注销",
            tips_l: "您的帐号处于帐号注销锁定期",
            left_days: "(当前剩余{left_days}天)",
            tips_r: "如果继续登录，将自动撤销注销帐号申请，是否继续登录?",
            continue: "继续登录",
            cancel: "取消"
        }
    }
}
, function(e, t, n) {
    "use strict";
    t.a = {
        maillogin: "郵箱帳號登錄",
        mail: "請輸入郵箱帳號",
        facebooklogin: "facebook登錄",
        qqlogin: "qq登錄",
        wxlogin: "微信登錄",
        passwd: "密碼",
        login: "登 錄",
        rememberpasswd: "記住密碼",
        forgetpasswd: "忘記密碼？",
        reg: "註冊新用戶",
        tofacebook: "請點擊跳轉至Facebook登錄頁登錄",
        qqwxalert: "QQ與微信帳號的資訊獨立，遊戲資產不互通",
        loginfailmsg: "登錄WeGame失敗, 錯誤碼：",
        failmsg: "錯誤資訊：",
        mailformaterr: "請輸入正確的郵箱地址",
        passwdempty: "請輸入密碼",
        commerr: "網路繁忙，請稍後再試 ({result})",
        mailqqerr: "如果你正在使用QQ帳號，請點擊上方的“QQ登錄”",
        backmailpwderr: "校驗帳號密碼失敗",
        backmailnotreg: "郵箱帳號未註冊",
        backmailformaterr: "郵箱格式不正確",
        backpwderr: "用戶名或密碼錯誤",
        maxtrytime: "，連續錯誤{trytimes}次後鎖定帳戶，",
        lefttrytime: "剩余{lefttimes}次",
        accountlock: "帳戶已被鎖定，請24小時後重試或聯系客服處理",
        accountlockdevplatform: "帳戶已被鎖定，請24小時後重試或聯系我們：developer@wegame.com。",
        kickofftip: "因為{action}操作，您已下線，請重新登錄",
        kickoff: {
            passwordchange: "已修改登錄密碼，請重新登錄"
        },
        password_changed: "修改密碼",
        logintip: "您在{city}進行了登錄，請確認是否本人操作",
        logintipL: "您在",
        logintipC: "區域",
        unknown: "未知",
        logintipR: "進行了登錄，請確認是否本人操作",
        kickofftitle: "下線通知",
        logintiptitle: "登錄通知",
        failVerifyTip: "安全驗證失敗",
        unreg: {
            title: "帳戶登出",
            tips_l: "您的帳戶處於帳戶登出鎖定期",
            left_days: "(當前剩餘{left_days}天)",
            tips_r: "如果繼續登入，將自動撤銷登出帳戶申請，是否繼續登入?",
            continue: "繼續登入",
            cancel: "撤消"
        }
    }
}
, function(e, t, n) {
    "use strict";
    t.a = {
        maillogin: "E-mail Login",
        mail: "E-mail",
        facebooklogin: "Facebook Login",
        qqlogin: "QQ Login",
        wxlogin: "WeChat Login",
        passwd: "Password",
        login: "Sign in",
        rememberpasswd: "Save password",
        forgetpasswd: "Forgot password?",
        reg: "Register",
        tofacebook: "Click to sign in with Facebook account",
        qqwxalert: "QQ and WeChat assets are interoperable",
        loginfailmsg: "Failed to login WeGame. Error: ",
        failmsg: "Error: ",
        mailformaterr: "Enter a valid E-mail address.",
        passwdempty: "Please enter password",
        commerr: "System busy. Please retry later ({result})",
        mailqqerr: "If your QQ is logged in, please click QQ Login",
        backmailpwderr: "Failed to verify account credentials",
        backmailnotreg: "E-mail not registered",
        backmailformaterr: "Invalid E-mail address",
        backpwderr: "Incorrect account or password",
        maxtrytime: ". Account will be locked after {trytimes} consecutive failures.",
        lefttrytime: "{lefttimes} attempt(s) left.",
        accountlock: "Account locked, please try again after 24 hours or contact Customer Service.",
        accountlockdevplatform: "The account has been blocked temporarily. Please try again 24 hours later or contact us by developer@wegame.com",
        kickofftip: "Because of {action}, you have been taken offline. Please relogin.",
        kickoff: {
            passwordchange: "Password has been modified. Please sign in again."
        },
        password_changed: "password changed",
        logintip: "You have logged in at {city}, please confirm if you are operating",
        logintipL: "You have logged in at ",
        logintipC: " area, ",
        unknown: "unknown",
        logintipR: "please confirm if you are operating",
        kickofftitle: "Offline Notice",
        logintiptitle: "Login Notice",
        failVerifyTip: "Login verify Failed",
        unreg: {
            title: "Account deletion",
            tips_l: "Your account is in lock period ",
            left_days: "({left_days} day(s) left)",
            tips_r: "If you continue to login, deletion process will be automatically canceled. Are you sure to continue?",
            continue: "Continue to login",
            cancel: "Cancel"
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = function() {
        var e = this
          , t = e.$createElement
          , r = e._self._c || t;
        return r("div", [r("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.visible,
                expression: "visible"
            }],
            class: {
                "widget-login-mask": e.loginPopup,
                "widget-login-inject": !e.loginPopup
            }
        }, [r("div", {
            ref: "loginBox",
            staticClass: "widget-login",
            class: [e.isWegameX ? "theme-wegamex" : "", e.isMobile ? "widget-login--app" : ""]
        }, [r("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.loginChannelsLength >= 1,
                expression: "loginChannelsLength >= 1"
            }],
            staticClass: "widget-login-hd"
        }, [r("ul", {
            staticClass: "widget-login-nav"
        }, e._l(e.loginChannels, function(t, n) {
            return r("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t,
                    expression: "show"
                }],
                key: n
            }, [r("a", {
                staticClass: "widget-login-channel",
                class: ["widget-login-channel--" + (e.channelIconKey[n] || n), n == e.curLoginType ? "cur" : ""],
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: function(t) {
                        return e.switchLoginType(n)
                    }
                }
            })])
        }), 0), e._v(" "), e.loginPopup ? r("a", {
            staticClass: "widget-login-close",
            attrs: {
                href: "javascript:;"
            },
            on: {
                click: e.popdown
            }
        }, [e._v("x")]) : e._e()]), e._v(" "), r("div", {
            staticClass: "widget-login-bd"
        }, [r("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "mail" == e.curLoginType,
                expression: "curLoginType == 'mail'"
            }],
            staticClass: "widget-login-item widget-login-item--mail"
        }, [r("div", {
            staticClass: "widget-login-detail"
        }, [r("p", {
            staticClass: "widget-login-tit"
        }, [e._v(e._s(e.trans("maillogin")))]), e._v(" "), r("form", {
            on: {
                keydown: e.tryLoginByMail
            }
        }, [r("div", {
            staticClass: "widget-login-account"
        }, [r("div", {
            staticClass: "widget-login-input",
            class: {
                error: e.errorText.mail
            }
        }, [r("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.form.mailAddress,
                expression: "form.mailAddress"
            }],
            attrs: {
                type: "text",
                maxlength: "64",
                placeholder: e.trans("mail")
            },
            domProps: {
                value: e.form.mailAddress
            },
            on: {
                blur: e.checkMailAddress,
                input: function(t) {
                    t.target.composing || e.$set(e.form, "mailAddress", t.target.value)
                }
            }
        }), e._v(" "), r("p", [e._v(e._s(e.errorText.mail))])]), e._v(" "), r("div", {
            staticClass: "widget-login-input widget-login-input--password",
            class: {
                error: e.errorText.password
            }
        }, [r("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.form.mailPassword,
                expression: "form.mailPassword"
            }],
            attrs: {
                type: "password",
                maxlength: "16",
                placeholder: e.trans("passwd")
            },
            domProps: {
                value: e.form.mailPassword
            },
            on: {
                blur: e.checkMailPassword,
                input: function(t) {
                    t.target.composing || e.$set(e.form, "mailPassword", t.target.value)
                }
            }
        }), e._v(" "), r("p", [e._v(e._s(e.errorText.password))])])])]), e._v(" "), r("a", {
            staticClass: "widget-login-btn",
            attrs: {
                href: "javascript:;"
            },
            on: {
                click: e.loginByMail
            }
        }, [r("span", [e._v(e._s(e.trans("login")))])]), e._v(" "), r("div", {
            staticClass: "widget-login-toolbar"
        }, [r("ul", {
            staticClass: "widget-login-linklist",
            style: e.developerSpecialStyle
        }, [r("li", [r("a", {
            staticClass: "widget-login-link",
            attrs: {
                href: e.gotoForget.href,
                target: e.gotoForget.target
            }
        }, [e._v(e._s(e.trans("forgetpasswd")))])]), e._v(" "), r("li", [r("a", {
            staticClass: "widget-login-link",
            attrs: {
                href: e.gotoJoin.href,
                target: e.gotoJoin.target
            }
        }, [e._v(e._s(e.trans("reg")))])])])])])]), e._v(" "), r("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "fb" == e.curLoginType,
                expression: "curLoginType == 'fb'"
            }],
            staticClass: "widget-login-item widget-login-item--fb"
        }, [r("div", {
            staticClass: "widget-login-detail"
        }, [r("p", {
            staticClass: "widget-login-figure",
            on: {
                click: e.loginByFacebook
            }
        }, [r("img", {
            attrs: {
                src: n(166)
            }
        })]), e._v(" "), r("p", {
            staticClass: "widget-login-tips"
        }, [r("span", [e._v(e._s(e.trans("tofacebook")))]), e._v(" "), r("em", [e._v('"WeGame X"')])])])]), e._v(" "), "qq" == e.curLoginType && e.visible ? r("div", {
            staticClass: "widget-login-item widget-login-item--qq"
        }, [r("iframe", {
            attrs: {
                src: e.ptLoginUrl
            }
        })]) : e._e(), e._v(" "), r("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "wx" == e.curLoginType,
                expression: "curLoginType == 'wx'"
            }],
            staticClass: "widget-login-item widget-login-item--wechat"
        }, [r("div", {
            staticClass: "widget-login-detail"
        }, [r("p", {
            staticClass: "widget-login-figure",
            attrs: {
                id: e.wxLoginDivId
            }
        }), e._v(" "), r("p", {
            staticClass: "widget-login-tips"
        }, [r("em", [e._v(e._s(e.trans("qqwxalert")))])])])])])])]), e._v(" "), e.flag.kickoff ? r("div", {
            staticClass: "widget-login-popbox",
            staticStyle: {
                top: "unset",
                left: "unset",
                bottom: "5px",
                right: "5px",
                position: "fixed",
                "z-index": "100"
            }
        }, [r("div", {
            staticClass: "widget-login-popbox-hd"
        }, [r("h3", {
            staticClass: "widget-login-popbox-title"
        }, [e._v(e._s(e.trans("kickofftitle")))]), e._v(" "), r("a", {
            staticClass: "widget-login-popbox-close",
            attrs: {
                href: "javascript:void(0);"
            },
            on: {
                click: function(t) {
                    e.flag.kickoff = !1
                }
            }
        }, [e._v("×")])]), e._v(" "), r("div", {
            staticClass: "widget-login-popbox-bd"
        }, [r("p", [e._v(e._s(e.kickofftip))])]), e._v(" "), r("div", {
            staticClass: "widget-login-popbox-ft"
        })]) : e._e(), e._v(" "), e.flag.logintip ? r("div", {
            staticClass: "widget-login-popbox",
            staticStyle: {
                top: "unset",
                left: "unset",
                bottom: "5px",
                right: "5px",
                position: "fixed",
                "z-index": "100"
            }
        }, [r("div", {
            staticClass: "widget-login-popbox-hd"
        }, [r("h3", {
            staticClass: "widget-login-popbox-title"
        }, [e._v(e._s(e.trans("logintiptitle")))]), e._v(" "), r("a", {
            staticClass: "widget-login-popbox-close",
            attrs: {
                href: "javascript:void(0);"
            },
            on: {
                click: function(t) {
                    e.flag.logintip = !1
                }
            }
        }, [e._v("×")])]), e._v(" "), r("div", {
            staticClass: "widget-login-popbox-bd"
        }, [r("p", [e._v("\n        " + e._s(e.trans("logintipL")) + "\n        "), r("span", {
            staticStyle: {
                "font-weight": "bold"
            }
        }, [e._v(e._s(e.logincity))]), e._v("\n        " + e._s(e.trans("logintipR")) + "\n      ")])]), e._v(" "), r("div", {
            staticClass: "widget-login-popbox-ft"
        })]) : e._e(), e._v(" "), e.unregister.show ? r("div", {
            staticClass: "unregister-login-mask"
        }, [r("div", {
            staticClass: "unregister-login-popbox"
        }, [r("div", {
            staticClass: "unregister-login-popbox-hd"
        }, [r("h3", {
            staticClass: "unregister-login-popbox-title"
        }, [e._v(e._s(e.trans("unreg.title")))]), e._v(" "), r("a", {
            staticClass: "unregister-login-popbox-close",
            on: {
                click: e.closeUnreg
            }
        }, [e._v("×")])]), e._v(" "), r("div", {
            staticClass: "unregister-login-popbox-bd"
        }, [r("div", {
            staticClass: "unregister-login-popbox-alert"
        }, [r("i", {
            staticClass: "unregister-login-popbox-alert-icon"
        }), e._v(" "), r("h3", {
            staticClass: "unregister-login-popbox-alert-tit"
        }, [e._v("\n            " + e._s(e.trans("unreg.tips_l")) + "\n            "), r("span", {
            staticStyle: {
                color: "#f0824a"
            }
        }, [e._v("\n              " + e._s(e.trans("unreg.left_days", {
            left_days: e.unregister.left_lock_days
        })) + "\n            ")]), e._v("\n            " + e._s(e.trans("unreg.tips_r")) + "\n          ")])])]), e._v(" "), r("div", {
            staticClass: "unregister-login-popbox-ft"
        }, [r("div", {
            staticClass: "unregister-login-popbox-we-ft-r"
        }, [r("a", {
            staticClass: "unregister-login-popbox-confirm",
            on: {
                click: e.loginUnreg
            }
        }, [r("span", [e._v(e._s(e.trans("unreg.continue")))])]), e._v(" "), r("a", {
            staticClass: "unregister-login-popbox-cancel",
            on: {
                click: e.closeUnreg
            }
        }, [r("span", [e._v(e._s(e.trans("unreg.cancel")))])])])])])]) : e._e()])
    }
      , o = []
      , i = {
        render: r,
        staticRenderFns: o
    };
    t.a = i
}
, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNDdFM0RDNkIwMjExRTg4OEUwOEUyRDQ1M0M2MTY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwNDdFM0RENkIwMjExRTg4OEUwOEUyRDQ1M0M2MTY2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjA0N0UzREE2QjAyMTFFODg4RTA4RTJENDUzQzYxNjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjA0N0UzREI2QjAyMTFFODg4RTA4RTJENDUzQzYxNjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mkh2oAAAE3UlEQVR42uydW2gcVRjH/zOzl+xuNptNNk3T1G4WkqgRY22giEUo2GIriFa8FR9UfG596IuIIqKCYh/ESKn4IKIiIvZZEdQnQUV9ErHUJK6kSbO3ZG/J7s7F8x0ipZK4O5NJspfvH76EhDNs5rffOd/lnGGVI6cvYl3PCzstLAGWHc0K+1TYG/SLZ/2PXwq7j9k40uS6HRV2QhXfzjFMV0QMzxHQs8zCNZ0hoHuYg2vaS0AN5uCadAJqMgfXZKrMwF0xUAbKQDtKnna9MUWYJaxaM1BarWKtoqNa1WGY1vUxiiJMeJWqQFNV+dOjqdA0BT6PhlDID1UMsCyrc4ESlIqAt5gpSpgD0RDi+3qxNxbGQF8IXf7rt2wYFnTDQKVKpksrlqtYFdevFNZQE9dbaod6qEYgBYC5ZA694S4cv3sURw8nMHXbMBL7+24AWU+GYSKXX8UzL3yBmWQW0Uigs4B6PCrmF/PSs564fxJPn5rCwVuHnL85YtrHouTNXtR0s7M8lNa8y7NpHBDT+rXnjuOY8Ey3RJ5KS0jHACWYf8ymcEhM6w/ffBSx3iBH+a3AnPk7i4nRQVyafhJ+X3PcSkvmoZTuZJbLCAa8+Pitx5oGZksn9leX8njl7DEMDYS5UtqadwILqTyOHBrB4ycnufR0owZaya/hqVN3ci3vhgqlCsYTMZy852YG6oZSuRLuuuOADEg7UTDoRpsn9rpubKkKIl2eS+PPZAYrxQos05JZw0bKFyoIh/ztC9QwTXQH/RiN9zu6nvLWF9/+Gr/+flU2QaT3yU7SxkDjw72IdPtteWlLAa3VTER7Ao5SpYVUAQ+f+QRz8zmMx2PoiwShNFBV2p3yLbWGVsV07xEeEwl32b72vc9+xJW/Mjh4yxB8Pq0hmG0flEzDklVRwG8vIJlinfzlt3kMD/bY9ri2BmqJL+qgU0fdjqi3SbYTmUHLpU0UQmzsSEjR9kdNLBfqds3zdqjlbb8JUHbktToCqLJpYsRAm14MlIEy0I7SrpeetDe0WqlhMVWsOza9XBLjNdtpEyXzyYVl1KqGyEV9DV1D1Vh/b1CmWy0FtLxWk+Xk4dtvqju2UK5gsD9se2s3JBL6h+6dgK6bDe8/LWWLuJLM2K7Kdh1oOlfGxOgeTL/0wLa9Bh1auPDyg7auef/zn/DtDzMYH4m11hqqCG8zzeY7RE2tPq9Ha72gpDgoJXdC1O6zcx6Ko3ydIJbKlhioW1rKlJBdLjs6QMFANwRaxHJhTR66ZaAu6Fq6INM5u+kZA91Ei+miPM3MQF0DWth0a5mBOvRQKokZqItBqcvhEcldB0o5n8+rNRXQa8JD/T5n/9Ou1/J0cIGqknc++r7uWIq8fT1BPPvIlHywoFHRIzIfXPpZnpn31nnz8sWKfK6p2+YRnKYBGgn7ZYPk9Yvf1R2bzpUwFo/Jo4x2gNIW8qsXvkGV2nfB/2/f0dqZ2B+VEd40rdYDSi01mvJjDZxXikWDiO+L2o7A1OQYG4nJB7kCXY2145zA5KC0DWKgDJSBMlAWA2WgDJTFQBkoA2UxUAbKQBkoi4EyUAbKYqAMlIGyGCgDZaCs/wBlqC7yJJgac3BNHgK6xBxc0yIBnWYOruldAnpe2FfMYssihuf/PX13AvwRak51w0eo/SPAAAk4j826LhLJAAAAAElFTkSuQmCC"
}
]);
