(function(a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.i = function(a) {
      return a;
    }),
    (b.d = function(a, c, d) {
      b.o(a, c) ||
        Object.defineProperty(a, c, {
          configurable: !1,
          enumerable: !0,
          get: d,
        });
    }),
    (b.n = function(a) {
      var c =
        a && a.__esModule
          ? function() {
              return a['default'];
            }
          : function() {
              return a;
            };
      return b.d(c, 'a', c), c;
    }),
    (b.o = function(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ''),
    b((b.s = 267))
  );
})({
  18: function(a, b, c) {
    const d = c(336).EventEmitter;
    a.exports = new d();
  },
  19: function(a, b, c) {
    function d() {
      let a = 'APPSERVICE';
      /widgetservice/.test(e)
        ? (a = 'WIDGETSERVICE')
        : /gameservice/.test(e) &&
          ((a = 'GAMESERVICE'),
          f.registerCallback((a) => {
            let { command: b, data: c } = a;
            if ('SET_CANVAS' === b) {
              let a = window.__global.document.getElementById('myCanvas');
              a.setAttribute('width', c.width),
                a.setAttribute('height', c.height),
                a.setAttribute('style', c.style);
            }
          })),
        f.connect(a);
    }
    const e = window.__global.navigator.userAgent,
      f = c(2);
    'complete' == window.__global.document.readyState
      ? d()
      : window.__global.addEventListener('load', () => {
          d();
        }),
      (a.exports = { send: f.send, registerCallback: f.registerCallback });
  },
  2: function(a) {
    function b(a) {
      (l = a ? a : l),
        (j = new f(k, l)),
        (j.onopen = function() {
          let a = [].concat(n);
          (n = []),
            a.forEach((a) => {
              c(a);
            });
        }),
        (j.onclose = function() {
          (j = null),
            setTimeout(() => {
              b(a);
            });
        }),
        (j.onmessage = function(a) {
          try {
            let b = JSON.parse(a.data);
            d(b);
          } catch (a) {}
        });
    }
    function c(a) {
      j && j.readyState === f.OPEN ? j.send(JSON.stringify(a)) : n.push(a);
    }
    function d() {
      m.forEach((a) => {
        try {
          a.apply(this, arguments);
        } catch (a) {
          console.error(a);
        }
      });
    }
    var e = window.navigator || window.__global.navigator,
      f = window.WebSocket || window.__global.WebSocket,
      g = e.userAgent,
      h = g.match(/port\/(\d*)/),
      i = h ? parseInt(h[1]) : 9974,
      j = null,
      k = `ws://127.0.0.1:${i}`,
      l = null,
      m = [],
      n = [];
    a.exports = {
      connect: b,
      send: c,
      registerCallback: (a) => {
        m.push(a);
      },
      getWs() {
        return j;
      },
    };
  },
  20: function(a, b, c) {
    function d(a, b) {
      switch (a) {
        case 'showSystemInfo': {
          let a = b.memory,
            c = b.restartInfo,
            d = c.restartTimes;
          console.group(`${new Date()} 工具系统信息`),
            console.info(
              `${
                c.beginTime
              } 启动工具，执行编译 ${d} 次， 当前内存占用 ${a.toFixed(2)}m`
            ),
            console.table(b.info),
            console.groupEnd();
          break;
        }
        case 'checkProxy': {
          console.group(`${new Date()} 代理信息`),
            console.table(b),
            console.groupEnd();
          break;
        }
        case 'showDecryptedInfo': {
          console.group(`${new Date()} 加解密信息`),
            console.table(b),
            console.groupEnd();
          break;
        }
        default:
      }
    }
    var e = this;
    const f = c(19);
    c(268);
    let g = !1,
      h = [];
    f.registerCallback((a) => {
      let { command: b, data: c } = a;
      'SYSTEM_CALLBACK' === b && d(c.api, c.data);
    }),
      (window.showDebugInfo = (a, b) => {
        let c = h.filter((c) => {
          let d = !a || (Array.isArray(a) ? a.includes(c.type) : c.type === a),
            e =
              !b ||
              (Array.isArray(b) ? b.includes(c.eventName) : c.eventName === b);
          if (d && e) return c;
        });
        console.group('showDebugInfo'),
          c.forEach((a) => {
            console.group(
              `${a.timesmap} WeixinJSBridge ${a.type} ${a.eventName}`
            ),
              console.debug.apply(window, a.data),
              console.groupEnd();
          }),
          console.groupEnd(),
          (g = !0);
      });
    const i = () => {
        console.clear(), (g = !1);
      },
      j = () => i();
    Object.defineProperty(window, 'closeDebug', {
      get() {
        return j(), j;
      },
    });
    const k = () => {
        console.table(h);
      },
      l = () => k();
    Object.defineProperty(window, 'showDebugInfoTable', {
      get() {
        return l(), l;
      },
    });
    const m = () => {
        console.table([
          {
            fun: 'build',
            'arg[0]': '',
            'arg[1]': '',
            example: 'build',
            description: 'build / reload',
          },
          {
            fun: 'preview',
            'arg[0]': '',
            'arg[1]': '',
            example: 'preview',
            description: 'preview with QR code',
          },
          {
            fun: 'upload',
            'arg[0]': '',
            'arg[1]': '',
            example: 'upload',
            description: 'upload the app',
          },
          {
            fun: 'showDebugInfo',
            'arg[0]':
              'type -- String || Array; publish on subscribe invoke GetMsg',
            'arg[1]': 'eventName -- String || Array;',
            example:
              'showDebugInfo() showDebugInfo("publish") showDebugInfo(["publish", "invoke"], "onAppRoute")',
            description: 'open tools logs',
          },
          { fun: 'closeDebug' },
          { fun: 'showDebugInfoTable' },
          {
            fun: 'openToolsLog',
            'arg[0]': '',
            'arg[1]': '',
            example: 'openVendor',
            description: 'open log folder',
          },
          {
            fun: 'openVendor',
            'arg[0]': '',
            'arg[1]': '',
            example: 'openVendor',
            description: 'open vendor folder',
          },
          {
            fun: 'showRequestInfo',
            'arg[0]': '',
            'arg[1]': '',
            example: 'showRequestInfo',
            description: 'show request info',
          },
          {
            fun: 'showSystemInfo',
            'arg[0]': '',
            'arg[1]': '',
            example: 'showSystemInfo',
            description: 'show tools info',
          },
          {
            fun: 'checkProxy',
            'arg[0]': 'type -- String; url',
            example: 'checkProxy("http://www.qq.com")',
            description: 'checkProxy of the input url',
          },
          {
            fun: 'showDecryptedInfo',
            'arg[0]': '',
            example: 'showDecryptedInfo',
            description: 'show API decrypted info',
          },
        ]);
      },
      n = () => m();
    Object.defineProperty(window, 'help', {
      get() {
        return n(), n;
      },
    });
    const o = () => {
        let a = {};
        for (let b in window.securityDetails)
          if (0 !== b.indexOf(`http://${__wxConfig.apphash}`)) {
            let c = window.securityDetails[b];
            delete c.id,
              delete c.command,
              delete c.isReady,
              delete c.url,
              (a[b] = c);
          }
        console.table(a);
      },
      p = () => o();
    Object.defineProperty(window, 'showRequestInfo', {
      get() {
        return p(), p;
      },
    });
    const q = (a, b) => {
        f.send({ command: 'SYSTEM', data: { api: a, data: b } });
      },
      r = () => q('openToolsLog');
    Object.defineProperty(window, 'openToolsLog', {
      get() {
        return r(), r;
      },
    });
    const s = () => q('openVendor');
    Object.defineProperty(window, 'openVendor', {
      get() {
        return s(), s;
      },
    });
    const t = () => q('showSystemInfo');
    Object.defineProperty(window, 'showSystemInfo', {
      get() {
        return console.log('loading...'), t(), () => {};
      },
    }),
      (window.checkProxy = function(a) {
        return 'string' == typeof a
          ? void (console.log('checking...'), q('checkProxy', a))
          : console.log('param should be string');
      });
    const u = () => q('syncMessage');
    Object.defineProperty(window, 'syncMessage', {
      get() {
        return u(), u;
      },
    });
    const v = () => {
        f.send({ command: 'SYSTEM', data: { api: 'showDecryptedInfo' } });
      },
      w = () => v();
    Object.defineProperty(window, 'showDecryptedInfo', {
      get() {
        return w(), w;
      },
    }),
      (a.exports = {
        debugLog: (a, b) => {
          g &&
            (console.group(a), console.debug.apply(e, b), console.groupEnd(a));
        },
        debugInfo: (a) => {
          g || (h.length > 100 && (h = []), h.push(a));
        },
        isDev: () => {
          return g;
        },
        base64ToArrayBuffer: function(a) {
          let b = window.__global.atob(a),
            c = b.length,
            d = new Uint8Array(c);
          for (let e = 0; e < c; e++) d[e] = b.charCodeAt(e);
          return d.buffer;
        },
        arrayBufferToBase64: function(a) {
          let b = '',
            c = new Uint8Array(a),
            d = c.byteLength;
          for (let e = 0; e < d; e++) b += String.fromCharCode(c[e]);
          return window.__global.btoa(b);
        },
      });
  },
  227: function(a, b, c) {
    a.exports = function() {
      function a(a) {
        if (a && a.__cover) {
          for (let b in a.__cover)
            'base64' == b && ((a[a.__cover[b]] = l(a.base64)), delete a.base64);
          delete a.__cover;
        }
      }
      const b = c(20),
        d = c(41),
        e = c(18),
        f = c(19),
        g = c(40),
        h = c(262),
        i = c(265),
        j = c(266),
        k = c(269),
        { base64ToArrayBuffer: l, arrayBufferToBase64: m } = c(20),
        { isSyncSDK: n, needTransArgsBase64Api: o } = c(8);
      let p = {},
        q = 1;
      return (
        f.registerCallback((b) => {
          let { command: c, data: d } = b;
          if ('APPSERVICE_INVOKE_CALLBACK' === c) {
            let b = d.callbackID,
              c = p[b];
            a(d.res), 'function' == typeof c && c(d.res), delete p[b];
          }
        }),
        {
          invoke: function(c, e, l) {
            if (o[c])
              for (let a in e) e[a] instanceof ArrayBuffer && (e[a] = m(e[a]));
            if (
              (b.debugLog(
                `${new Date()} WeixinJSBridge invoke ${c}`,
                arguments
              ),
              b.debugInfo({
                type: 'invoke',
                eventName: c,
                data: arguments,
                timesmap: new Date(),
              }),
              i[c])
            )
              for (let a in e) i[c].is(e[a]) && (e[a] = i[c].trans(e, e[a]));
            if ((j[c] && j[c](e), d.check.apply(this, arguments))) return;
            let r = n(c),
              s = function() {
                'function' == typeof l &&
                  (r
                    ? l.apply(l, arguments)
                    : setTimeout(() => {
                        l.apply(l, arguments);
                      }, 0));
              };
            if (
              (!g[c] || g[c].apply(this, arguments)) &&
              !(k[c] && ((e = k[c].apply(this, arguments)), !e))
            )
              if (h[c]) h[c](c, e, s);
              else {
                let b = q++;
                if (!r)
                  (p[b] = s),
                    f.send({
                      command: 'APPSERVICE_INVOKE',
                      data: { api: c, args: e, callbackID: b },
                    });
                else {
                  let d = {
                      command: 'APPSERVICE_INVOKE',
                      data: { api: c, args: e, callbackID: b },
                    },
                    f = `____sdk____${JSON.stringify(d)}`,
                    g = window.__global.prompt(f);
                  (g = JSON.parse(g)), a(g), delete g.to, s(g);
                }
              }
          },
        }
      );
    };
  },
  228: function(a, b, c) {
    a.exports = function() {
      function a(a, b, c) {
        let d = f[a];
        'function' == typeof d && d(b, c);
      }
      const b = c(20),
        d = c(19),
        e = c(18),
        f = {};
      return (
        e.on('triggerOnEvent', function(b, c, d) {
          a(b, c, d);
        }),
        (window.DeviceOrientation = function(b, c, d) {
          a('onAccelerometerChange', { x: b, y: c, z: d });
        }),
        d.registerCallback((b) => {
          let { command: c, data: d, webviewID: e } = b;
          'APPSERVICE_ON_EVENT' === c && a(d.eventName, d.data, e);
        }),
        {
          on: function(a, c) {
            b.debugLog(`${new Date()} WeixinJSBridge on ${a}`, arguments),
              b.debugInfo({
                type: 'on',
                eventName: a,
                data: arguments,
                timesmap: new Date(),
              }),
              c && (f[a] = c);
          },
          triggerOnEvent: a,
        }
      );
    };
  },
  229: function(a, b, c) {
    a.exports = function() {
      function a(a, c, g, h) {
        if (
          (b.debugLog(`${new Date()} WeixinJSBridge publish ${a}`, arguments),
          c && 0 !== a.indexOf('canvas'))
        ) {
          let b = JSON.stringify(c),
            d = b.length;
          if (d > e)
            return (
              console.group(`${new Date()} 数据传输错误`),
              console.error(`${a} 数据传输长度为 ${d} 已经超过最大长度 ${e}`),
              void console.groupEnd()
            );
        }
        b.debugInfo({
          type: 'publish',
          eventName: a,
          data: arguments,
          timesmap: new Date(),
        }),
          ('appDataChange' !== a &&
            'pageInitData' !== a &&
            '__updateAppData' !== a) ||
            h ||
            d.send({ command: 'SEND_APP_DATA', data: __wxAppData }),
          'invokeWebviewMethod' === a &&
            c &&
            c.data &&
            'appDataChange' == c.data.name &&
            (f && d.send({ command: 'SEND_APP_DATA', data: __wxAppData }),
            (f = !0)),
          ('vdSync' === a || 'vdSyncBatch' === a) &&
            (f && d.send({ command: 'SEND_APP_DATA', data: __wxAppData }),
            (f = !0)),
          d.send({
            command: 'APPSERVICE_PUBLISH',
            data: { eventName: a, data: c, webviewIds: g },
          });
      }
      const b = c(20),
        d = c(19),
        { AppserviceMaxDataSize: e } = c(8);
      var f = !0;
      return (
        d.registerCallback((b) => {
          let { command: c, data: e, fromWebviewID: g } = b;
          if ('WRITE_APP_DATA' === c) {
            let b = {};
            const c = getCurrentPages();
            for (let d in (c.forEach((a) => {
              b[a.__route__ || a.route] = a;
            }),
            e)) {
              let c = e[d],
                g = c.__webviewId__;
              for (var h in (b[d] && 'function' == typeof b[d].setData
                ? ((f = !1), b[d].setData(c))
                : wx && wx.invokeWebviewMethod
                  ? ((f = !1),
                    wx.invokeWebviewMethod({
                      name: 'appDataChange',
                      args: { data: c },
                    }))
                  : a('appDataChange', { data: { data: c } }, [g], !0),
              Object.assign(__wxAppData[d], c),
              __wxAppData[d]))
                void 0 == c[h] && delete __wxAppData[d][h];
            }
          } else
            'GET_APP_DATA' === c &&
              d.send({ command: 'SEND_APP_DATA', data: __wxAppData });
        }),
        { publish: a }
      );
    };
  },
  230: function(a, b, c) {
    a.exports = function() {
      function a(a, b, c) {
        let d = f[a];
        'function' == typeof d && d(b, c);
      }
      const b = c(20),
        d = c(18),
        e = c(19);
      var f = {};
      return (
        d.on('triggerSubscribeEvent', (b, c) => {
          a(b, c);
        }),
        e.registerCallback((b) => {
          let { command: c, data: d, fromWebviewID: e } = b;
          'WEBVIEW_PUBLISH' === c && a(d.eventName, d.data, e);
        }),
        {
          subscribe: function(a, c) {
            b.debugLog(`${new Date()} WeixinJSBridge subscribe`, arguments),
              b.debugInfo({
                type: 'subscribe',
                eventName: a,
                data: arguments,
                timesmap: new Date(),
              }),
              (f[a] = c);
          },
          triggerSubscribeEvent: a,
        }
      );
    };
  },
  231: function(a) {
    a.exports = function() {
      if (
        ([
          'Caches',
          'screen',
          'performance ',
          'getComputedStyle',
          'openDatabase',
          'btoa',
          'Image',
        ].forEach((a) => {
          delete window[a];
        }),
        (window.chrome = void 0),
        'complete' == window.__global.document.readyState)
      )
        window.__global.history.replaceState({}, {}, `${location.href}?load`);
      else {
        const a = () => {
          window.__global.history.replaceState({}, {}, `${location.href}?load`),
            window.__global.removeEventListener('load', a);
        };
        window.__global.addEventListener('load', a);
      }
    };
  },
  261: function(a) {
    const b = { 0: 'log', 1: 'info', 2: 'warn', 3: 'error' };
    a.exports = {
      reportKeyValue: (a, b, c) => {
        c({ errMsg: `${a}:ok` });
      },
      reportIDKey: (a, b, c) => {
        c({ errMsg: `${a}:ok` });
      },
      log: (a, c) => {
        let d = c.dataArray || [];
        d.forEach((a) => {
          let c = b[a.level];
          c && a.msg && console[c](a.msg);
        });
      },
    };
  },
  262: function(a, b, c) {
    const d = c(263),
      e = c(261),
      f = c(264);
    a.exports = Object.assign({}, d, e, f);
  },
  263: function(a, b, c) {
    function d(a, b) {
      let { origin: c, fullPath: d, tls: e } = a;
      console.group(`${new Date()} wx.request 错误`),
        console.error(
          `${c} 对应的服务器 TLS 为 ${e} ，小程序要求的 TLS 版本必须大于等于 1.2 。控制台输入 showRequestInfo() 可以获取更详细信息。`
        ),
        console.groupEnd(),
        b &&
          b({
            errMsg:
              'request:fail \u5C0F\u7A0B\u5E8F\u8981\u6C42\u7684 TLS \u7248\u672C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1.2',
          });
    }
    function e(a, b) {
      let { origin: c, fullPath: d, tls: e } = a;
      console.group(`${new Date()} wx.request 错误`),
        console.error(
          `${c} 对应的服务器证书无效。控制台输入 showRequestInfo() 可以获取更详细信息。`
        ),
        console.groupEnd(),
        b &&
          b({
            errMsg:
              'request:fail \u5BF9\u5E94\u7684\u670D\u52A1\u5668\u8BC1\u4E66\u65E0\u6548\u3002',
          });
    }
    const f = c(18),
      { getSecuryDetailsByURL: g, parseURL: h } = c(87),
      { MaxRequestConcurrent: i, urlCheckErrReason: j, DevtoolsConfig: k } = c(
        8
      ),
      { checkUrl: l } = c(40),
      m =
        'undefined' != typeof __devtoolsConfig && __devtoolsConfig
          ? __devtoolsConfig.libNumberVersion || 999999999
          : 999999999;
    let n = {},
      o = 1,
      p = 0;
    const q = (a, b, c, h) => {
      p++;
      const n = (a) => {
        setTimeout(() => {
          p--, 'function' == typeof c && c(a);
        });
      };
      if (p > i)
        return (
          console.group(`${new Date()} request 错误`),
          console.error(
            `同时最多发起 ${i} 个 request 请求，更多请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html`
          ),
          console.groupEnd(),
          void n({ errMsg: `${a}:fail exceed max task count` })
        );
      let { url: o, responseType: q, __skipDomainCheck__: r } = b;
      if (!r && !l(o)) return void n({ errMsg: `${a}:fail ${j}` });
      var s = b.method || 'POST';
      if (
        0 >
        [
          'OPTIONS',
          'GET',
          'HEAD',
          'POST',
          'PUT',
          'DELETE',
          'TRACE',
          'CONNECT',
        ].indexOf(s)
      )
        return void n({ errMsg: `${a}:fail method is invalid` });
      let t = g(o);
      if (t.isReady) {
        if (!t.isSecuryTLS) return void d(t, n);
        if (!t.isSecuryCertificate) return void e(t, n);
      }
      var u = b.header || {},
        v = new window.__global.XMLHttpRequest();
      (v.responseType = q || 'text'),
        (v.timeout =
          b.timeout ||
          (__wxConfig.networkTimeout && __wxConfig.networkTimeout.request) ||
          6e4),
        v.open(s, b.url, !0),
        (v.onreadystatechange = () => {
          if (v.readyState == (v.HEADERS_RECEIVED || 2))
            try {
              const a = v.getAllResponseHeaders(),
                b = a.trim().split(/[\r\n]+/),
                c = {};
              b.forEach(function(a) {
                const b = a.split(': '),
                  d = b.shift(),
                  e = b.join(': ');
                c[d] = e;
              }),
                delete c['for-weapp-devtools'],
                'function' == typeof h &&
                  1009093 <= m &&
                  h({ state: 'headersReceived', header: c });
            } catch (a) {
              console.error(a);
            }
          if ((3 == v.readyState, 4 == v.readyState)) {
            v.onreadystatechange = null;
            var b = v.status;
            if (0 == b);
            else {
              function c(c) {
                if (!c.isSecuryTLS) d(c, n);
                else if (!c.isSecuryCertificate) e(c, n);
                else if (v.responseURL && !r && !l(v.responseURL))
                  n({ errMsg: `${a}:fail ${j}` });
                else {
                  let c = { errMsg: `${a}:ok`, header: i || {}, statusCode: b };
                  (c.data = 'arraybuffer' === q ? v.response : v.responseText),
                    n(c);
                }
              }
              let h = g(o),
                i = {};
              try {
                i = JSON.parse(v.getResponseHeader('for-weapp-devtools'));
              } catch (a) {}
              h.isReady ? c(h) : f.once(`TLS_CHECK_READY_${h.id}`, c);
            }
          }
        }),
        (v.onerror = () => {
          n({ errMsg: `${a}:fail` });
        }),
        (v.ontimeout = () => {
          n({ errMsg: `${a}:fail timeout` });
        }),
        (v.onabort = () => {
          n({ errMsg: `${a}:fail abort` });
        });
      let w = 0;
      for (let d in u) 'content-type' === d.toLowerCase() && w++;
      2 <= w && delete u['content-type'];
      let x = !1;
      for (var y in u)
        if (u.hasOwnProperty(y)) {
          let a = y.toLowerCase();
          (x = 'content-type' == a || x),
            'cookie' === a
              ? v.setRequestHeader('_Cookie', u[y])
              : v.setRequestHeader(y, u[y]);
        }
      'POST' != s ||
        x ||
        v.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded; charset=UTF-8'
        );
      let k = b.data;
      try {
        v.send(k);
      } catch (b) {
        n({ errMsg: `${a}:fail` });
      }
      return v;
    };
    a.exports = {
      request: q,
      createRequestTask: (a, b, c = () => {}) => {
        let d = {
          id: o++,
          url: b.url,
          data: b.data,
          header: b.header,
          method: b.method,
          callback: (a, b) => {
            let c = {};
            (c =
              0 === b.errMsg.indexOf('request:ok')
                ? {
                    requestTaskId: a,
                    state: 'success',
                    data: b.data,
                    header: b.header,
                    statusCode: b.statusCode,
                  }
                : {
                    requestTaskId: a,
                    state: 'fail',
                    errMsg: b.errMsg.replace(/^request:fail ?/, ''),
                  }),
              delete n[a],
              f.emit('triggerOnEvent', 'onRequestTaskStateChange', c);
          },
        };
        c({ errMsg: `${a}:ok`, requestTaskId: d.id }), (n[d.id] = d);
        d.xhr = q('request', b, d.callback.bind(void 0, d.id), function(a) {
          f.emit(
            'triggerOnEvent',
            'onRequestTaskStateChange',
            Object.assign({}, a, { requestTaskId: d.id })
          );
        });
      },
      operateRequestTask: (a, b, c) => {
        let d = b.requestTaskId,
          e = b.operationType,
          f = n[d];
        if (!f) return c({ errMsg: `${a}:fail task not found` });
        if ('abort' === e)
          try {
            f.xhr.abort(), c({ errMsg: `${a}:ok` });
          } catch (b) {
            c({ errMsg: `${a}:fail ${b}` });
          }
        else return c({ errMsg: `${a}:fail illegal operationType` });
      },
    };
  },
  264: function(a, b, c) {
    function d(a) {
      let b = window.alert ? window.alert : window.__global.alert;
      b(`SET_SOCKET_HEADER:${JSON.stringify(a)}`);
    }
    function e(a) {
      console.group(`${new Date()} 无网络状态模拟`),
        console.error(
          `已开启无网络状态模拟，网络请求 ${a} 已被阻止；在模拟器工具栏切换网络状态，可恢复网络请求。`
        ),
        console.groupEnd();
    }
    const f = c(18),
      { getSecuryDetailsByURL: g, parseURL: h } = c(87),
      { MaxWebsocketConnect: i, urlCheckErrReason: j, DevtoolsConfig: k } = c(
        8
      ),
      { checkUrl: l } = c(40);
    let m = {},
      n = 1;
    var o = window.__global.WebSocket;
    const p = {
      1000: 'normal closure',
      1001: 'going away',
      1002: 'protocol error',
      1003: 'unsupported data',
      1004: 'reserved',
      1005: 'no status rcvd',
      1006: 'abnormal closure',
      1007: 'invalid frame payload data',
      1008: 'policy violation',
      1009: 'message too big',
      1010: 'mandatory ext.',
      1011: 'internal server error',
      1015: 'tls handshake',
    };
    let q = null;
    window.addEventListener('networkChange', (a) => {
      if (
        ((k.networkStatus = a.detail.networkStatus), 'none' == k.networkStatus)
      )
        for (let a in (q && (q.close(), (q = null)), m)) {
          let b = m[a].socket;
          b && b.close();
        }
    }),
      (a.exports = {
        connectSocket: (a, b, c = () => {}) => {
          let { url: g, header: h } = b;
          return 'none' == k.networkStatus
            ? (e(g), void c({ errMsg: `${a}:fail network is down` }))
            : l(g, 'socket')
              ? (h && 0 < Object.keys(h).length && d(h),
                q && (q.readyState == o.OPEN || q.readyState == o.CONNECTING)
                  ? void c({
                      errMsg: `connectSocket:fail websocket is connected`,
                    })
                  : void ((q = new o(g, b.protocols || [])),
                    (q.binaryType = 'arraybuffer'),
                    (q.onopen = function() {
                      f.emit('triggerOnEvent', 'onSocketOpen', {});
                    }),
                    (q.onmessage = function(a) {
                      f.emit('triggerOnEvent', 'onSocketMessage', {
                        data: a.data,
                      });
                    }),
                    (q.onclose = function(a) {
                      f.emit('triggerOnEvent', 'onSocketClose', {
                        code: a.code,
                        reason: a.reason || p[a.code] || '',
                      }),
                        (q = null);
                    }),
                    (q.onerror = function() {
                      f.emit('triggerOnEvent', 'onSocketError', {}), (q = null);
                    }),
                    c({ errMsg: 'connectSocket:ok' })))
              : void c({ errMsg: `connectSocket:fail ${j}` });
        },
        sendSocketMessage: (a, b, c) => {
          let d = b.data,
            f = 'fail';
          if (q)
            try {
              q.readyState == o.OPEN
                ? (q.send(d), (f = 'ok'))
                : (f = 'fail webSocket is not connected');
            } catch (a) {
              f = `fail ${a.message}`;
            }
          c && c({ errMsg: `${a}:${f}` });
        },
        closeSocket: (a, b, c) => {
          if (q)
            try {
              q.close(b.code, b.reason),
                (q = null),
                c && c({ errMsg: 'closeSocket:ok' });
            } catch (a) {
              c && c({ errMsg: `closeSocket:fail ${a}` });
            }
          else c && c({ errMsg: 'closeSocket:fail' });
        },
        createSocketTask: (a, b, c = () => {}) => {
          let g = Object.keys(m).length,
            { url: h, header: q, protocols: r, __skipDomainCheck__: s } = b,
            t = n++,
            u = { socketTaskId: t, url: h, protocols: r, header: q };
          if ((c({ socketTaskId: t, errMsg: `${a}:ok` }), g >= i))
            return void setTimeout(() => {
              console.group(`${new Date()} websocket 错误`),
                console.error(
                  `同时最多发起 ${i} 个 socket 请求，更多请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html`
                ),
                console.groupEnd(),
                f.emit('triggerOnEvent', 'onSocketTaskStateChange', {
                  socketTaskId: t,
                  state: 'error',
                  errMsg: 'exceed max task count',
                });
            });
          if ('none' == k.networkStatus)
            return void setTimeout(() => {
              e(h),
                f.emit('triggerOnEvent', 'onSocketTaskStateChange', {
                  socketTaskId: t,
                  state: 'error',
                  errMsg: 'network is down',
                });
            });
          if (!s && !l(h, 'socket'))
            return void setTimeout(() => {
              f.emit('triggerOnEvent', 'onSocketTaskStateChange', {
                socketTaskId: t,
                state: 'error',
                errMsg: j,
              });
            });
          (m[t] = u), q && 0 < Object.keys(q).length && d(q);
          let v = new o(h, b.protocols || []);
          (v.binaryType = 'arraybuffer'),
            (v.onopen = function() {
              f.emit('triggerOnEvent', 'onSocketTaskStateChange', {
                socketTaskId: t,
                state: 'open',
              });
            }),
            (v.onmessage = function(a) {
              let b = a.data;
              f.emit('triggerOnEvent', 'onSocketTaskStateChange', {
                socketTaskId: t,
                data: b,
                state: 'message',
              });
            }),
            (v.onclose = function(a) {
              f.emit('triggerOnEvent', 'onSocketTaskStateChange', {
                socketTaskId: t,
                state: 'close',
                code: a.code,
                reason: a.reason || p[a.code] || '',
              }),
                delete m[t];
            }),
            (v.onerror = function() {
              f.emit('triggerOnEvent', 'onSocketTaskStateChange', {
                socketTaskId: t,
                state: 'error',
                errMsg: ``,
              }),
                delete m[t];
            }),
            (u.socket = v);
        },
        operateSocketTask: (a, b, c) => {
          let {
              socketTaskId: d,
              operationType: e,
              code: f,
              reason: g,
              data: h,
            } = b,
            i = m[d];
          if (!i) return c({ errMsg: `${a}:fail task not found` });
          if ('send' === e) {
            try {
              i.socket.readyState == o.OPEN
                ? (i.socket.send(h), c({ errMsg: `${a}:ok` }))
                : c({ errMsg: `${a}:fail webSocket is not connected` });
            } catch (b) {
              c({ errMsg: `${a}:fail ${b.message}` });
            }
            return;
          }
          if ('close' === e)
            try {
              i.socket.close(b.code, b.reason), c({ errMsg: `${a}:ok` });
            } catch (b) {
              c({ errMsg: `${a}:fail ${b.message}` });
            }
        },
      });
  },
  265: function(a, b, c) {
    const { arrayBufferToBase64: d } = c(20);
    a.exports = {
      writeFile: {
        is: (a) => {
          return a instanceof ArrayBuffer;
        },
        trans: (a, b) => {
          return (a.__dataisab = !0), d(b);
        },
      },
      writeFileSync: {
        is: (a) => {
          return a instanceof ArrayBuffer;
        },
        trans: (a, b) => {
          return (a.__dataisab = !0), d(b);
        },
      },
    };
  },
  266: function(a, b, c) {
    const { canNotReadFromCodePackage: d } = c(8);
    a.exports = {
      readFile: (a) => {
        let { filePath: b } = a;
        if (0 !== b.indexOf(__wxConfig.env.LOCAL_PROTOCOL)) {
          let a = b.split('.'),
            c = 1 < a.length ? a[a.length - 1] : '';
          c &&
            d[c] &&
            (console.group(`${new Date()} 读取文件失败`),
            console.info(
              `无法读取 ${b} 文件，该文件经过编译后在移动设备上不存在`
            ),
            console.groupEnd());
        }
      },
    };
  },
  267: function(a, b, c) {
    const d = c(8),
      e = c(228),
      f = c(227),
      g = c(229),
      h = c(230),
      i = c(231);
    var j = window.__global.navigator.userAgent,
      k = -1 !== j.indexOf('game');
    k || i(),
      (window.__global.getNewWeixinJSBridge = (a) => {
        const { invoke: b } = f(a),
          { publish: c } = g(a),
          { subscribe: d, triggerSubscribeEvent: i } = h(a),
          { on: j, triggerOnEvent: k } = e(a);
        return {
          invoke: b,
          publish: c,
          subscribe: d,
          on: j,
          get __triggerOnEvent() {
            return k;
          },
          get __triggerSubscribeEvent() {
            return i;
          },
        };
      }),
      (window.WeixinJSBridge = window.__global.WeixinJSBridge = window.__global.getNewWeixinJSBridge(
        'global'
      )),
      (window.__global.WeixinJSBridgeMap = {
        __globalBridge: window.WeixinJSBridge,
      }),
      __devtoolsConfig.online &&
        __devtoolsConfig.autoTest &&
        setInterval(() => {
          console.clear();
        }, 1e4);
    try {
      var l = new window.__global.XMLHttpRequest();
      (l.responseType = 'text'),
        l.open(
          'GET',
          `http://${window.location.host}/calibration/${Date.now()}`,
          !0
        ),
        l.send();
    } catch (a) {}
  },
  268: function(a, b, c) {
    const d = c(19),
      e = () => {
        d.send({ command: 'SYSTEM', data: { api: 'build' } });
      },
      f = () => e();
    Object.defineProperty(window, 'build', {
      get() {
        return f(), f;
      },
    });
    const g = () => {
        d.send({ command: 'SYSTEM', data: { api: 'preview' } });
      },
      h = () => g();
    Object.defineProperty(window, 'preview', {
      get() {
        return console.log('loading...'), h(), h;
      },
    });
    const i = () => {
        d.send({ command: 'SYSTEM', data: { api: 'upload' } });
      },
      j = () => i();
    Object.defineProperty(window, 'upload', {
      get() {
        return j(), j;
      },
    }),
      (window.where = { am: {} }),
      Object.defineProperty(window.where.am, 'i', {
        get() {
          console.log("wait a second, I'll check"),
            setTimeout(() => {
              try {
                wx.getLocation({
                  success: (a) => {
                    console.log(`${a.longitude}° ${a.latitude}°`);
                  },
                });
              } catch (a) {}
            }, 1e3);
        },
      });
  },
  269: function(a) {
    const b = window.__global.navigator.userAgent,
      c = (a, c, d) => {
        if (!/gameservice/.test(b)) return c;
        const e = c.canvasId,
          f = () => {
            d({ errMsg: `${a}:fail canvas not found` });
          };
        if (!e) return void (/Sync$/.test(a) ? f() : setTimeout(f));
        const {
            x: g = 0,
            y: h = 0,
            width: i = e.width,
            height: j = e.height,
            destWidth: k = e.width,
            destHeight: l = e.height,
            fileType: m = 'png',
          } = c,
          n = window.__global.document.createElement('canvas');
        Object.setPrototypeOf(n, window.__global.canvasProto),
          (n.width = k),
          (n.height = l);
        const o = n.getContext('2d');
        Object.setPrototypeOf(o, window.__global.canvas2dContextProto),
          o.drawImage(e, g, h, i, j, 0, 0, k, l);
        const p = 'jpg' == m ? 'image/jpeg' : 'image/png',
          q = isNaN(c.quality)
            ? 1
            : 0 < c.quality && 1 >= c.quality
              ? c.quality
              : 1,
          r = n.toDataURL(p, q).replace(/^data:image\/(jpg|png);base64,/, '');
        return { dataURL: r, fileType: m };
      };
    a.exports = { canvasToTempFilePath: c, canvasToTempFilePathSync: c };
  },
  336: function(a) {
    function b() {
      (this._events = this._events || {}),
        (this._maxListeners = this._maxListeners || void 0);
    }
    function c(a) {
      return 'function' == typeof a;
    }
    function d(a) {
      return 'number' == typeof a;
    }
    function e(a) {
      return 'object' == typeof a && null !== a;
    }
    function f(a) {
      return void 0 === a;
    }
    (a.exports = b),
      (b.EventEmitter = b),
      (b.prototype._events = void 0),
      (b.prototype._maxListeners = void 0),
      (b.defaultMaxListeners = 10),
      (b.prototype.setMaxListeners = function(a) {
        if (!d(a) || 0 > a || isNaN(a))
          throw TypeError('n must be a positive number');
        return (this._maxListeners = a), this;
      }),
      (b.prototype.emit = function(a) {
        var b, d, g, h, j, i;
        if (
          (this._events || (this._events = {}),
          'error' === a &&
            (!this._events.error ||
              (e(this._events.error) && !this._events.error.length)))
        )
          if (((b = arguments[1]), b instanceof Error)) throw b;
          else {
            var k = new Error(
              'Uncaught, unspecified "error" event. (' + b + ')'
            );
            throw ((k.context = b), k);
          }
        if (((d = this._events[a]), f(d))) return !1;
        if (c(d))
          switch (arguments.length) {
            case 1:
              d.call(this);
              break;
            case 2:
              d.call(this, arguments[1]);
              break;
            case 3:
              d.call(this, arguments[1], arguments[2]);
              break;
            default:
              (h = Array.prototype.slice.call(arguments, 1)), d.apply(this, h);
          }
        else if (e(d))
          for (
            h = Array.prototype.slice.call(arguments, 1),
              i = d.slice(),
              g = i.length,
              j = 0;
            j < g;
            j++
          )
            i[j].apply(this, h);
        return !0;
      }),
      (b.prototype.addListener = function(a, d) {
        var g;
        if (!c(d)) throw TypeError('listener must be a function');
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit('newListener', a, c(d.listener) ? d.listener : d),
          this._events[a]
            ? e(this._events[a])
              ? this._events[a].push(d)
              : (this._events[a] = [this._events[a], d])
            : (this._events[a] = d),
          e(this._events[a]) &&
            !this._events[a].warned &&
            ((g = f(this._maxListeners)
              ? b.defaultMaxListeners
              : this._maxListeners),
            g &&
              0 < g &&
              this._events[a].length > g &&
              ((this._events[a].warned = !0),
              console.error(
                '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                this._events[a].length
              ),
              'function' == typeof console.trace && console.trace())),
          this
        );
      }),
      (b.prototype.on = b.prototype.addListener),
      (b.prototype.once = function(a, b) {
        function d() {
          this.removeListener(a, d), e || ((e = !0), b.apply(this, arguments));
        }
        if (!c(b)) throw TypeError('listener must be a function');
        var e = !1;
        return (d.listener = b), this.on(a, d), this;
      }),
      (b.prototype.removeListener = function(a, b) {
        var d, f, g, h;
        if (!c(b)) throw TypeError('listener must be a function');
        if (!this._events || !this._events[a]) return this;
        if (
          ((d = this._events[a]),
          (g = d.length),
          (f = -1),
          d === b || (c(d.listener) && d.listener === b))
        )
          delete this._events[a],
            this._events.removeListener && this.emit('removeListener', a, b);
        else if (e(d)) {
          for (h = g; 0 < h--; )
            if (d[h] === b || (d[h].listener && d[h].listener === b)) {
              f = h;
              break;
            }
          if (0 > f) return this;
          1 === d.length
            ? ((d.length = 0), delete this._events[a])
            : d.splice(f, 1),
            this._events.removeListener && this.emit('removeListener', a, b);
        }
        return this;
      }),
      (b.prototype.removeAllListeners = function(a) {
        var b, d;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return (
            0 === arguments.length
              ? (this._events = {})
              : this._events[a] && delete this._events[a],
            this
          );
        if (0 === arguments.length) {
          for (b in this._events)
            'removeListener' !== b && this.removeAllListeners(b);
          return (
            this.removeAllListeners('removeListener'), (this._events = {}), this
          );
        }
        if (((d = this._events[a]), c(d))) this.removeListener(a, d);
        else if (d) for (; d.length; ) this.removeListener(a, d[d.length - 1]);
        return delete this._events[a], this;
      }),
      (b.prototype.listeners = function(a) {
        var b;
        return (
          (b =
            this._events && this._events[a]
              ? c(this._events[a])
                ? [this._events[a]]
                : this._events[a].slice()
              : []),
          b
        );
      }),
      (b.prototype.listenerCount = function(a) {
        if (this._events) {
          var b = this._events[a];
          if (c(b)) return 1;
          if (b) return b.length;
        }
        return 0;
      }),
      (b.listenerCount = function(a, b) {
        return a.listenerCount(b);
      });
  },
  40: function(a, b, c) {
    function d(a, b = 'request') {
      if (e.isTourist())
        return (
          k &&
            (console.group(`${new Date()} 无 AppID 关联`),
            console.warn(
              `工具未检查合法域名，更多请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html`
            ),
            console.groupEnd(),
            (k = !1)),
          !0
        );
      if (!__devtoolsConfig.urlCheck)
        return (
          __disPlayURLCheckWarning &&
            (console.group(
              `${new Date()} 配置中关闭合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书检查`
            ),
            console.warn(
              `工具未校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书。`
            ),
            console.groupEnd(),
            (__disPlayURLCheckWarning = !1)),
          !0
        );
      if (!a) return !1;
      if (((a = l.exec(a.toLowerCase())), !a)) return !1;
      a = a[0];
      const c = a;
      if (/^http:\/\/(tmp|usr|store)\/?$/gi.test(c)) return !0;
      try {
        let c = [];
        c =
          'downloadFile' === b
            ? g.download
            : 'uploadFile' === b
              ? g.upload
              : 'socket' === b
                ? g.socket
                : g.request;
        for (let d = 0; d < c.length; d++) {
          let e = c[d],
            f = l.exec(e.toLowerCase());
          if (f && f[0] == a) return !0;
          if ('socket' == b && !!j.setting.WebsocketSkipPortCheck) {
            let b = new RegExp(`^${e}(:\\d+)?$`);
            if (b.test(a)) return !0;
          }
        }
        let d = [];
        c.forEach((a) => {
          d.push([a]);
        }),
          console.group(`${new Date()} ${b} 合法域名校验出错`),
          console.info(
            `如若已在管理后台更新域名配置，请刷新项目配置后重新编译项目，操作路径：“详情-域名信息”`
          ),
          console.error(
            ` ${a} 不在以下 ${b} 合法域名列表中，请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html`
          ),
          console.table(d),
          console.groupEnd();
      } catch (a) {
        return console.error(a), !1;
      }
    }
    const e = c(41),
      {
        MaxRequestConcurrent: f,
        NetworkConfig: g,
        appconfig: h,
        urlCheckErrReason: i,
        DevtoolsConfig: j,
      } = c(8);
    window.__disPlayURLCheckWarning = !0;
    var k = !0,
      l = /^(http|ws)s?:\/\/[\w-.]+(:\d+)?/i;
    a.exports = {
      downloadFile: function(a, b, c) {
        return (
          !!d(b.url, 'downloadFile') || (c({ errMsg: `${a}:fail ${i}` }), !1)
        );
      },
      uploadFile: function(a, b, c) {
        return (
          !!d(b.url, 'uploadFile') || (c({ errMsg: `${a}:fail ${i}` }), !1)
        );
      },
      checkUrl: d,
      createUploadTask: function(a, b, c) {
        return (
          b.__skipDomainCheck__ ||
          d(b.url, 'uploadFile') ||
          (c({ errMsg: `${a}:fail ${i}` }), !1)
        );
      },
      createDownloadTask: function(a, b, c) {
        return (
          b.__skipDomainCheck__ ||
          d(b.url, 'downloadFile') ||
          (c({ errMsg: `${a}:fail ${i}` }), !1)
        );
      },
      operateWXData: function(a, b) {
        return (
          b.data &&
            'webapi_getuserinfo' == b.data.api_name &&
            !b.data.from_component &&
            (console.group(`${new Date()} 接口调整`),
            console.warn(
              `获取 wx.getUserInfo 接口后续将不再出现授权弹窗，请注意升级\n参考文档: https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1650183953&docid=0000a26e1aca6012e896a517556c01`
            ),
            console.groupEnd()),
          !0
        );
      },
      authorize: function(a, b) {
        return (
          'scope.userInfo' == b.scope &&
            (console.group(`${new Date()} 接口调整`),
            console.error(
              `wx.authorize({scope: "scope.userInfo"}) 不会出现授权弹窗，请使用 <button open-type="getUserInfo />\n参考文档: https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1650183953&docid=0000a26e1aca6012e896a517556c01`
            ),
            console.groupEnd()),
          !0
        );
      },
    };
  },
  41: function(a) {
    const b = () => {
        return 'touristappid' == __devtoolsConfig.appid;
      },
      c = b() ? Object.assign(__devtoolsConfig.userInfo) : {};
    delete __devtoolsConfig.userInfo;
    const d = {
      login: (a, b, c) => {
        c({ errMsg: 'login:ok', code: 'the code is a mock one' });
      },
      authorize: (a, b, c) => {
        c({ errMsg: 'authorize:fail' });
      },
      operateWXData: (a, b, d) => {
        d({
          errMsg: 'operateWXData:ok',
          data: {
            data: JSON.stringify({
              nickName: c.nickName,
              avatarUrl: c.headUrl,
              gender: 'male' === c.sex ? 1 : 2,
              province: c.province,
              city: c.city,
              country: c.country,
            }),
          },
        });
      },
      openSetting: (a, b, c) => {
        c({
          errMsg: 'openSetting:ok',
          authSetting: [{ scope: 'scope.userInfo', state: 1 }],
        });
      },
    };
    a.exports = {
      isTourist: b,
      fake: d,
      check: function(a) {
        return (
          b() &&
          d.hasOwnProperty(a) &&
          (console.group(`${new Date()} 无 AppID 关联`),
          console.warn(
            `请注意无 AppID 关联下，调用 wx.${a} 是受限的, API 的返回是工具的模拟返回`
          ),
          console.groupEnd(),
          setTimeout(() => {
            d[a].apply(this, arguments);
          }),
          !0)
        );
      },
    };
  },
  8: function(a) {
    (window.__devtoolsConfig = window.__devtoolsConfig || { setting: {} }),
      (window.__wxConfig = window.__wxConfig || {});
    const b = {
      getSystemInfo: !0,
      getBatteryInfo: !0,
      getBackgroundAudioState: !0,
      setBackgroundAudioState: !0,
      operateBackgroundAudio: !0,
      createRequestTask: !0,
      createUploadTask: !0,
      createDownloadTask: !0,
      createSocketTask: !0,
      operateSocketTask: !0,
      createAudioInstance: !0,
      unlink: !0,
      createLoadSubPackageTask: !0,
    };
    let c = __devtoolsConfig,
      d = __devtoolsConfig.network || {},
      e = __devtoolsConfig.permission,
      f =
        (__devtoolsConfig.setting && __devtoolsConfig.setting.MaxDataSize) ||
        1048576,
      g =
        (__devtoolsConfig.setting &&
          __devtoolsConfig.setting.MaxRequestConcurrent) ||
        10,
      h =
        (__devtoolsConfig.setting &&
          __devtoolsConfig.setting.MaxWebsocketConnect) ||
        10;
    a.exports = {
      syncSDKList: b,
      isSyncSDK: function(a) {
        return !!b[a] || /Sync$/.test(a);
      },
      DevtoolsConfig: c,
      NetworkConfig: d,
      Permission: e,
      AppserviceMaxDataSize: f,
      MaxRequestConcurrent: g,
      MaxWebsocketConnect: h,
      urlCheckErrReason: 'url not in domain list',
      needTransArgsBase64Api: {
        encodeArrayBufferSync: !0,
        decodeArrayBufferSync: !0,
      },
      canNotReadFromCodePackage: { js: !0, wxss: !0, wxml: !0 },
    };
  },
  87: function(a, b, c) {
    function d(b) {
      let c = document.createElement('a');
      return (
        (c.href = b),
        {
          protocol: c.protocol,
          origin: c.origin,
          fullPath: `${c.origin}/${c.pathname}`,
        }
      );
    }
    const e = c(41),
      f = c(18);
    var g = (window.securityDetails = {}),
      h = 1e4;
    (window.setSecurityDetails = function(a, b) {
      let { origin: c } = d(a);
      (b = JSON.parse(b)), g[c] || (g[c] = {});
      let { protocol: e, securityState: h } = b,
        i = !1;
      e && (i = 1.2 <= parseFloat(e.replace('TLS ', ''))),
        (g[c].isSecuryTLS = i),
        (g[c].tls = e),
        (g[c].securityState = h),
        (g[c].isSecuryCertificate = 'insecure' !== h),
        (g[c].isReady = !0),
        (g[c].remoteAddress = b.remoteAddress),
        (g[c].statusCode = b.statusCode);
      let j = g[c].id;
      f.emit(`TLS_CHECK_READY_${j}`, g[c]);
    }),
      (a.exports = {
        securityDetails: g,
        getSecuryDetailsByURL: function(a) {
          let { protocol: b, origin: c, fullPath: f } = d(a),
            i = g[c];
          return e.isTourist() || !__devtoolsConfig.urlCheck || 'https:' !== b
            ? ((i = { isReady: !0, isSecuryTLS: !0, isSecuryCertificate: !0 }),
              (g[c] = i),
              i)
            : i
              ? i
              : ((i = {
                  isReady: !1,
                  id: h++,
                  tls: '',
                  isSecuryTLS: !1,
                  securityState: '',
                  isSecuryCertificate: !1,
                  protocol: b,
                  origin: c,
                  fullPath: f,
                  url: a,
                }),
                (g[c] = i),
                i);
        },
        parseURL: d,
      });
  },
});
