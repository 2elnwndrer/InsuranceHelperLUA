(function () {
  'use strict';

  Lampa.Platform.tv();
  (function () {
    var _0x1c1449 = function () {
      var _0x3512a1 = true;
      return function (_0x416d8d, _0x2be5bd) {
        var _0xa9dce5 = _0x3512a1 ? function () {
          if (_0x2be5bd) {
            var _0x56d1eb = _0x2be5bd.apply(_0x416d8d, arguments);
            _0x2be5bd = null;
            return _0x56d1eb;
          }
        } : function () {};
        _0x3512a1 = false;
        return _0xa9dce5;
      };
    }();
    'use strict';
    function _0x42558b(_0x2af7ab, _0x5d66e3) {
      var _0x4231b7 = _0x2af7ab.length - _0x5d66e3.length;
      if (_0x4231b7 < 0x0) {
        return false;
      }
      return _0x2af7ab.indexOf(_0x5d66e3, _0x4231b7) === _0x4231b7;
    }
    var _0x33d079 = '';
    var _0x5a2c7d = _0x2bc4bd([0x5f, 0x39, 0x1c, 0x2a, 0x37, 0x7d, 0x1c, 0x7c, 0x4b, 0x53, 0x56, 0x23, 0x1b, 0x3f, 0x36, 0x2e, 0x52, 0x3f, 0x9, 0x1b, 0x58, 0x3f, 0xf], atob('RnVja0Zhbg=='));
    function _0x492022(_0x1783c7) {
      var _0x13b30d = (_0x1783c7 || '') + '';
      var _0x55566b = 0x0;
      for (var _0x18556a = 0x0; _0x18556a < _0x13b30d.length; _0x18556a++) {
        var _0x5f1580 = _0x13b30d.charCodeAt(_0x18556a);
        _0x55566b = (_0x55566b << 0x5) - _0x55566b + _0x5f1580;
        _0x55566b = _0x55566b & _0x55566b;
      }
      var _0x3b6854 = '';
      var _0x5cca05 = 0x0;
      for (var _0x264075 = 29; _0x264075 >= 0x0; _0x5cca05 += 0x3, _0x264075 -= 0x3) {
        var _0x443bdf = ((_0x55566b >>> _0x5cca05 & 0x7) << 0x3) + (_0x55566b >>> _0x264075 & 0x7);
        _0x3b6854 += String.fromCharCode(_0x443bdf < 0x1a ? 0x61 + _0x443bdf : _0x443bdf < 0x34 ? 0x27 + _0x443bdf : _0x443bdf - 0x4);
      }
      return _0x3b6854;
    }
    function _0x2bc4bd(_0x15a83c, _0x4f3e75) {
      var _0x438240 = _0x1c1449(this, function () {
        var _0x24e75f = function () {
          var _0x287f16;
          try {
            _0x287f16 = Function("return (function() {}.constructor(\"return this\")( ));")();
          } catch (_0x3ccd7a) {
            _0x287f16 = window;
          }
          return _0x287f16;
        };
        var _0x322c9a = _0x24e75f();
        var _0x2932d0 = _0x322c9a.console = _0x322c9a.console || {};
        var _0x5a08ac = ['log', "warn", "info", "error", "exception", "table", "trace"];
        for (var _0x48d839 = 0x0; _0x48d839 < _0x5a08ac.length; _0x48d839++) {
          var _0x56c4d8 = _0x1c1449.constructor.prototype.bind(_0x1c1449);
          var _0x66c93b = _0x5a08ac[_0x48d839];
          var _0x3f8c6a = _0x2932d0[_0x66c93b] || _0x56c4d8;
          _0x56c4d8.__proto__ = _0x1c1449.bind(_0x1c1449);
          _0x56c4d8.toString = _0x3f8c6a.toString.bind(_0x3f8c6a);
          _0x2932d0[_0x66c93b] = _0x56c4d8;
        }
      });
      _0x438240();
      var _0x3c0ff3 = '';
      _0x4f3e75 = (_0x4f3e75 || Lampa.Storage.get("online_mod_secret_password", '')) + '';
      if (_0x15a83c && _0x4f3e75) {
        var _0x248dd2 = _0x492022("123456789" + _0x4f3e75);
        while (_0x248dd2.length < _0x15a83c.length) {
          _0x248dd2 += _0x248dd2;
        }
        var _0x4cb7d2 = 0x0;
        while (_0x4cb7d2 < _0x15a83c.length) {
          _0x3c0ff3 += String.fromCharCode(_0x15a83c[_0x4cb7d2] ^ _0x248dd2.charCodeAt(_0x4cb7d2));
          _0x4cb7d2++;
        }
      }
      return _0x3c0ff3;
    }
    function _0x3087fa() {
      return true;
    }
    function _0x3f85c5() {
      return true;
    }
    function _0x36831b() {
      return false;
    }
    function _0x269c60() {
      var _0xc3be17 = Lampa.Storage.get("online_mod_rezka2_mirror", '') + '';
      if (!_0xc3be17) {
        return "https://kvk.zone";
      }
      if (_0xc3be17.indexOf("://") == -0x1) {
        _0xc3be17 = "https://" + _0xc3be17;
      }
      if (_0xc3be17.charAt(_0xc3be17.length - 0x1) === '/') {
        _0xc3be17 = _0xc3be17.substring(0x0, _0xc3be17.length - 0x1);
      }
      return _0xc3be17;
    }
    function _0x1668f2() {
      var _0x2f160c = Lampa.Storage.get("online_mod_kinobase_mirror", '') + '';
      if (!_0x2f160c) {
        return "https://kinobase.org";
      }
      if (_0x2f160c.indexOf("://") == -0x1) {
        _0x2f160c = "https://" + _0x2f160c;
      }
      if (_0x2f160c.charAt(_0x2f160c.length - 0x1) === '/') {
        _0x2f160c = _0x2f160c.substring(0x0, _0x2f160c.length - 0x1);
      }
      return _0x2f160c;
    }
    function _0x9de7eb(_0x2e202e) {
      _0x5a2c7d = _0x2e202e;
    }
    function _0x17dbe0() {
      return _0x5a2c7d;
    }
    function _0x92180d() {
      return _0x5a2c7d || _0x2bc4bd([0x5f, 0x39, 0x1c, 0x2a, 0x37, 0x7d, 0x1c, 0x7c, 0x4b, 0x53, 0x56, 0x23, 0x1b, 0x3f, 0x36, 0x2e, 0x52, 0x3f, 0x9, 0x1b, 0x58, 0x3f, 0xf], atob("RnVja0Zhbg=="));
    }
    function _0xff9daf() {
      return _0x5a2c7d || _0x2bc4bd([0x5f, 0x39, 0x1c, 0x2a, 0x37, 0x7d, 0x1c, 0x7c, 0x4b, 0x53, 0x56, 0x23, 0x1b, 0x3f, 0x36, 0x2e, 0x52, 0x3f, 0x9, 0x1b, 0x58, 0x3f, 0xf], atob("RnVja0Zhbg=="));
    }
    function _0x4be5e8() {
      return 'https://filmix.gg';
    }
    function _0x4e9f3f() {
      return "http://filmixapp.cyou";
    }
    function _0x555831(_0x59e32a, _0x1e0246) {
      return "?user_dev_id=" + _0x59e32a + "&user_dev_name=Xiaomi&user_dev_token=" + _0x1e0246 + "&user_dev_vendor=Xiaomi&user_dev_os=14&user_dev_apk=2.2.0&app_lang=ru-rRU";
    }
    function _0x504fc6() {
      return 'okhttp/3.10.0';
    }
    function _0x227051() {
      return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36";
    }
    function _0x2e0ff3() {
      return atob('YXBpX3Rva2VuPQ==') + _0x2bc4bd([0x7a, 0x5c, 0xa, 0x1a, 0x4e, 0x4f, 0x1, 0x6, 0x75, 0x6a, 0x37, 0x3, 0x53, 0x1b, 0x5c, 0x12, 0x6b, 0x18, 0x42, 0x2c, 0x14, 0x3a, 0x9, 0x3a, 0x6a, 0x13, 0x5b, 0x35, 0x7b, 0x31, 0x73, 0x58], atob('RnVja0x1bWV4'));
    }
    function _0xac1321(_0x467dc2) {
      _0x33d079 = _0x467dc2;
    }
    function _0x5664ab() {
      return _0x33d079;
    }
    function _0xd86e59(_0x1c5c9a, _0x4a4889) {
      var _0x16530f = _0x33d079;
      if (_0x16530f) {
        _0x4a4889();
        return;
      }
      _0x1c5c9a.clear();
      _0x1c5c9a.timeout(0x2710);
      _0x1c5c9a.silent('https://api.ipify.org/?format=json', function (_0x428953) {
        if (_0x428953.ip) {
          _0xac1321(_0x428953.ip);
        }
        _0x4a4889();
      }, function (_0x373f65, _0x703727) {
        _0x1c5c9a.clear();
        _0x1c5c9a.timeout(0x2710);
        _0x1c5c9a.silent(_0x209c3c('ip') + "jsonip", function (_0x27b3ce) {
          if (_0x27b3ce.ip) {
            _0xac1321(_0x27b3ce.ip);
          }
          _0x4a4889();
        }, function (_0x33b268, _0x48ea46) {
          _0x4a4889();
        });
      });
    }
    function _0x209c3c(_0x3c1d52) {
      var _0x230b1e = _0x33d079 || '';
      var _0x517c83 = Lampa.Storage.field("online_mod_proxy_find_ip") === true ? 'ip' + _0x230b1e + '/' : '';
      var _0x56b827 = new Date().getHours() % 0x2 ? "https://cors.nb557.workers.dev/" : "https://cors.fx666.workers.dev/";
      var _0x1077cd = "https://apn-latest.onrender.com/" + (_0x517c83 ? '' : "ip/");
      var _0x2c77b6 = '';
      var _0x2a4316 = '';
      _0x2c77b6 = _0x2bc4bd([0x24, 0x3f, 0x11, 0x6, 0x11, 0x0, 0x68, 0x5a, 0x13, 0x28, 0x22, 0x66, 0x8, 0x14, 0x57, 0xf, 0x71, 0x5b, 0x19, 0x37, 0x35, 0x2e, 0x7, 0x58, 0x3, 0x4a, 0x37, 0x5a, 0x13, 0x28, 0x22, 0x64]);
      _0x2a4316 = _0x2c77b6 + (_0x517c83 || "ip/");
      var _0x1d6a55 = Lampa.Storage.field("online_mod_proxy_other") === true;
      var _0x25dd2a = _0x1d6a55 ? Lampa.Storage.field("online_mod_proxy_other_url") + '' : '';
      var _0xc8bbd = (_0x25dd2a || _0x56b827) + _0x517c83;
      var _0x196e0a = (_0x25dd2a || _0x1077cd) + _0x517c83;
      var _0x30c539 = (_0x25dd2a || "https://cors557.deno.dev/") + _0x517c83;
      if (_0x3c1d52 === "lumex_api") {
        return _0x196e0a;
      }
      if (_0x3c1d52 === "filmix_site") {
        return _0x1d6a55 && !_0x25dd2a && _0x2a4316 || _0xc8bbd;
      }
      if (_0x3c1d52 === "filmix_abuse") {
        return '';
      }
      if (_0x3c1d52 === 'zetflix') {
        return '';
      }
      if (_0x3c1d52 === "allohacdn") {
        return _0x2c77b6;
      }
      if (_0x3c1d52 === "cookie") {
        return _0xc8bbd;
      }
      if (_0x3c1d52 === "cookie2") {
        return _0x196e0a;
      }
      if (_0x3c1d52 === 'cookie3') {
        return _0x30c539;
      }
      if (_0x3c1d52 === 'ip') {
        return "https://apn-latest.onrender.com/";
      }
      if (Lampa.Storage.field('online_mod_proxy_' + _0x3c1d52) === true) {
        if (_0x3c1d52 === "iframe") {
          return _0x196e0a;
        }
        if (_0x3c1d52 === "lumex") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === 'rezka') {
          return _0x196e0a;
        }
        if (_0x3c1d52 === "rezka2") {
          return _0x196e0a;
        }
        if (_0x3c1d52 === "kinobase") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "collaps") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "cdnmovies") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "filmix") {
          return _0x1d6a55 && !_0x25dd2a && _0x2a4316 || _0xc8bbd;
        }
        if (_0x3c1d52 === 'videodb') {
          return _0x196e0a;
        }
        if (_0x3c1d52 === "fancdn") {
          return _0x30c539;
        }
        if (_0x3c1d52 === 'fancdn2') {
          return _0x196e0a;
        }
        if (_0x3c1d52 === "fanserials") {
          return _0xc8bbd;
        }
        if (_0x3c1d52 === "fanserials_cdn") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "videoseed") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "vibix") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "redheadsound") {
          return _0x196e0a;
        }
        if (_0x3c1d52 === "cdnvideohub") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "anilibria") {
          return _0x196e0a;
        }
        if (_0x3c1d52 === "anilibria2") {
          return _0xc8bbd;
        }
        if (_0x3c1d52 === "animelib") {
          return _0x2c77b6;
        }
        if (_0x3c1d52 === "kodik") {
          return _0xc8bbd;
        }
        if (_0x3c1d52 === "kinopub") {
          return _0x196e0a;
        }
      }
      return '';
    }
    function _0x4fadc3(_0x473385) {
      var _0xadd6a3 = {
        'href': _0x473385,
        'protocol': '',
        'host': '',
        'origin': '',
        'pathname': '',
        'search': '',
        'hash': ''
      };
      var _0x74079 = _0x473385.indexOf('#');
      if (_0x74079 !== -0x1) {
        _0xadd6a3.hash = _0x473385.substring(_0x74079);
        _0x473385 = _0x473385.substring(0x0, _0x74079);
      }
      _0x74079 = _0x473385.indexOf('?');
      if (_0x74079 !== -0x1) {
        _0xadd6a3.search = _0x473385.substring(_0x74079);
        _0x473385 = _0x473385.substring(0x0, _0x74079);
      }
      _0x74079 = _0x473385.indexOf(':');
      var _0x5a0138 = _0x473385.indexOf('/');
      if (_0x74079 !== -0x1 && (_0x5a0138 === -0x1 || _0x5a0138 > _0x74079)) {
        _0xadd6a3.protocol = _0x473385.substring(0x0, _0x74079 + 0x1);
        _0x473385 = _0x473385.substring(_0x74079 + 0x1);
      }
      if (_0x473385.lastIndexOf('//', 0x0) === 0x0) {
        _0x74079 = _0x473385.indexOf('/', 0x2);
        if (_0x74079 !== -0x1) {
          _0xadd6a3.host = _0x473385.substring(0x2, _0x74079);
          _0x473385 = _0x473385.substring(_0x74079);
        } else {
          _0xadd6a3.host = _0x473385.substring(0x2);
          _0x473385 = '/';
        }
        _0xadd6a3.origin = "//";
      }
      _0xadd6a3.pathname = _0x473385;
      return _0xadd6a3;
    }
    function _0x3002d7(_0xd675d3, _0x5bf74c) {
      if (_0xd675d3) {
        if (!_0x5bf74c || _0xd675d3.indexOf("://") !== -0x1) {
          return _0xd675d3;
        }
        var _0xcf474c = _0x4fadc3(_0x5bf74c);
        if (_0xd675d3.lastIndexOf('//', 0x0) === 0x0) {
          return _0xcf474c.protocol + _0xd675d3;
        }
        if (_0xd675d3.lastIndexOf('/', 0x0) === 0x0) {
          return _0xcf474c.origin + _0xd675d3;
        }
        if (_0xd675d3.lastIndexOf('?', 0x0) === 0x0) {
          return _0xcf474c.origin + _0xcf474c.pathname + _0xd675d3;
        }
        if (_0xd675d3.lastIndexOf('#', 0x0) === 0x0) {
          return _0xcf474c.origin + _0xcf474c.pathname + _0xcf474c.search + _0xd675d3;
        }
        var _0x5cff7a = _0xcf474c.origin + _0xcf474c.pathname;
        _0x5cff7a = _0x5cff7a.substring(0x0, _0x5cff7a.lastIndexOf('/') + 0x1);
        return _0x5cff7a + _0xd675d3;
      }
      return _0xd675d3;
    }
    function _0x5bc849(_0x328d4c, _0x29e85c, _0x1101bb) {
      if (_0x328d4c) {
        if (_0x328d4c.lastIndexOf('//', 0x0) === 0x0) {
          return (_0x29e85c ? "http:" : "https:") + _0x328d4c;
        } else {
          if (_0x29e85c && _0x1101bb) {
            return _0x328d4c.replace("https://", "http://");
          } else {
            if (!_0x29e85c && _0x1101bb === "full") {
              return _0x328d4c.replace("http://", "https://");
            }
          }
        }
      }
      return _0x328d4c;
    }
    function _0x2cec66(_0x42f7ff, _0x4f3d8a, _0x3fb397, _0xe2a507) {
      if (_0x42f7ff && _0x4f3d8a) {
        if (_0x3fb397 == null) {
          _0x3fb397 = '';
        }
        if (_0xe2a507 == null) {
          _0xe2a507 = "enc";
        }
        if (_0xe2a507 === "enc") {
          var _0x3520fc = _0x42f7ff.indexOf('/');
          if (_0x3520fc !== -0x1 && _0x42f7ff.charAt(_0x3520fc + 0x1) === '/') {
            _0x3520fc++;
          }
          var _0x472fc9 = _0x3520fc !== -0x1 ? _0x42f7ff.substring(0x0, _0x3520fc + 0x1) : '';
          var _0x26cc8e = _0x3520fc !== -0x1 ? _0x42f7ff.substring(_0x3520fc + 0x1) : _0x42f7ff;
          return _0x4f3d8a + "enc/" + encodeURIComponent(btoa(_0x3fb397 + _0x472fc9)) + '/' + _0x26cc8e;
        }
        if (_0xe2a507 === 'enc1') {
          var _0x2d832f = _0x42f7ff.lastIndexOf('/');
          var _0x28e998 = _0x2d832f !== -0x1 ? _0x42f7ff.substring(0x0, _0x2d832f + 0x1) : '';
          var _0x19c599 = _0x2d832f !== -0x1 ? _0x42f7ff.substring(_0x2d832f + 0x1) : _0x42f7ff;
          return _0x4f3d8a + 'enc1/' + encodeURIComponent(btoa(_0x3fb397 + _0x28e998)) + '/' + _0x19c599;
        }
        if (_0xe2a507 === "enc2" || _0xe2a507 === "enc2t") {
          var _0x5ca530 = _0x42f7ff.lastIndexOf('?');
          var _0x3894c8 = _0x42f7ff.lastIndexOf("://");
          if (_0x5ca530 === -0x1 || _0x5ca530 <= _0x3894c8) {
            _0x5ca530 = _0x42f7ff.length;
          }
          if (_0x3894c8 === -0x1) {
            _0x3894c8 = -0x3;
          }
          var _0x1abbb2 = _0x42f7ff.substring(_0x3894c8 + 0x3, _0x5ca530);
          _0x3894c8 = _0x1abbb2.lastIndexOf('/');
          _0x1abbb2 = _0x3894c8 !== -0x1 ? _0x1abbb2.substring(_0x3894c8 + 0x1) : '';
          return _0x4f3d8a + "enc2/" + encodeURIComponent(btoa(_0x3fb397 + _0x42f7ff)) + '/' + _0x1abbb2 + (_0xe2a507 === "enc2t" ? '?jacred.test' : '');
        }
        return _0x4f3d8a + _0x3fb397 + _0x42f7ff;
      }
      return _0x42f7ff;
    }
    function _0x3adcd1(_0x4a7bb4, _0x1e971a) {
      _0x4a7bb4 = _0x4a7bb4 || [];
      _0x1e971a = _0x1e971a || 0x0;
      var _0x5dff19 = _0x4a7bb4.length;
      if (!_0x5dff19) {
        return '';
      }
      var _0x222199 = '';
      for (var _0x1f107c = 0x0; _0x1f107c < _0x1e971a; _0x1f107c++) {
        _0x222199 += _0x4a7bb4[Math.floor(Math.random() * _0x5dff19)];
      }
      return _0x222199;
    }
    function _0x498a01(_0x4fb9d8, _0x1ac877) {
      return _0x3adcd1((_0x4fb9d8 || '').split(''), _0x1ac877);
    }
    function _0x2e3723(_0x1ad642) {
      return _0x3adcd1(("0123456789abcdef" || '').split(''), _0x1ad642);
    }
    function _0xa8b8e1(_0x5a6915, _0x4fb841) {
      return _0x3adcd1(("0123456789abcdefghijklmnopqrstuvwxyz" + (_0x4fb841 || '') || '').split(''), _0x5a6915);
    }
    function _0xfbfea0(_0x1cb7a2, _0x7682a6) {
      return _0x3adcd1(("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + (_0x7682a6 || '') || '').split(''), _0x1cb7a2);
    }
    function _0x29a09a() {
      return atob("Y2ZfY2xlYXJhbmNlPQ==") + _0x3adcd1(("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + (undefined || '') || '').split(''), 0x2b) + '-' + Math.floor(Date.now() / 0x3e8) + atob('LTEuMi4xLjEt') + _0x3adcd1(("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + ('_.' || '') || '').split(''), 0x12b);
    }
    function _0x499b8d(_0x524ddc) {
      if (typeof AndroidJS !== 'undefined') {
        try {
          var _0x440eca = AndroidJS.appVersion().split('-');
          var _0x4dbe59 = _0x440eca.pop();
          if (parseInt(_0x4dbe59, 0xa) >= _0x524ddc) {
            return true;
          }
        } catch (_0x269a33) {}
      }
      return false;
    }
    var _0x59443e = {
      'decodeSecret': _0x2bc4bd,
      'isDebug': _0x3087fa,
      'isDebug2': _0x3f85c5,
      'isDebug3': _0x36831b,
      'rezka2Mirror': _0x269c60,
      'kinobaseMirror': _0x1668f2,
      'setCurrentFanserialsHost': _0x9de7eb,
      'getCurrentFanserialsHost': _0x17dbe0,
      'fanserialsHost': _0x92180d,
      'fancdnHost': _0xff9daf,
      'filmixHost': _0x4be5e8,
      'filmixAppHost': _0x4e9f3f,
      'filmixToken': _0x555831,
      'filmixUserAgent': _0x504fc6,
      'baseUserAgent': _0x227051,
      'vcdnToken': _0x2e0ff3,
      'setMyIp': _0xac1321,
      'getMyIp': _0x5664ab,
      'checkMyIp': _0xd86e59,
      'proxy': _0x209c3c,
      'parseURL': _0x4fadc3,
      'fixLink': _0x3002d7,
      'fixLinkProtocol': _0x5bc849,
      'proxyLink': _0x2cec66,
      'randomWords': _0x3adcd1,
      'randomChars': _0x498a01,
      'randomHex': _0x2e3723,
      'randomId': _0xa8b8e1,
      'randomId2': _0xfbfea0,
      'randomCookie': _0x29a09a,
      'checkAndroidVersion': _0x499b8d
    };
    var _0x5104fd = new Lampa.Reguest();
    var _0x48a1ab = {};
    var _0xeb1c9f = 0x0;
    var _0x379dd4 = 0x0;
    var _0x5bf7ca = 0x0;
    function _0x33d7af(_0x3bff01, _0x376e29, _0x388888) {
      var _0x1f9ccd = _0xeb1c9f >= 0xa && _0x5bf7ca > _0xeb1c9f / 0x2;
      if (!_0x1f9ccd) {
        _0xeb1c9f++;
      }
      var _0x97bdc0 = "https://kinopoiskapiunofficial.tech/";
      _0x97bdc0 += _0x3bff01;
      _0x5104fd.timeout(0x3a98);
      _0x5104fd.silent((_0x1f9ccd ? "https://cors.kp556.workers.dev/" : '') + _0x97bdc0, function (_0x889f39) {
        _0x376e29(_0x889f39);
      }, function (_0x1f7255, _0x582469) {
        _0x1f9ccd = !_0x1f9ccd && (_0x379dd4 < 0xa || _0x5bf7ca > _0x379dd4 / 0x2);
        if (_0x1f9ccd && (_0x1f7255.status == 0x1ad || _0x1f7255.status == 0x1c3 || _0x1f7255.status == 0x0 && _0x1f7255.statusText !== "timeout")) {
          _0x379dd4++;
          _0x5104fd.timeout(0x3a98);
          _0x5104fd.silent("https://cors.kp556.workers.dev/" + _0x97bdc0, function (_0x734774) {
            _0x5bf7ca++;
            _0x376e29(_0x734774);
          }, _0x388888, false, {
            'headers': {
              'X-API-KEY': _0x59443e.decodeSecret([0x52, 0x5a, 0x7c, 0x63, 0x7f, 0x5, 0x5a, 0x6, 0x7a, 0x6, 0x55, 0x50, 0x2f, 0x7b, 0x72, 0x53, 0x59, 0x53, 0x7a, 0xc, 0x3, 0xd, 0x2e, 0x7b, 0x20, 0x54, 0xc, 0x55, 0x67, 0x53, 0x50, 0x5f, 0x79, 0x35, 0x70, 0x7], atob("JDVLUHBhc3N3b3Jk"))
            }
          });
        } else {
          _0x388888(_0x1f7255, _0x582469);
        }
      }, false, {
        'headers': {
          'X-API-KEY': _0x59443e.decodeSecret([0x33, 0x51, 0x5d, 0x7d, 0x5f, 0x64, 0x39, 0x50, 0x5e, 0x63, 0x34, 0x5b, 0xe, 0x65, 0x52, 0x32, 0x3a, 0x5, 0x5e, 0x69, 0x62, 0x6, 0xf, 0x65, 0x0, 0x35, 0x6f, 0x3, 0x43, 0x36, 0x31, 0x54, 0x58, 0x2b, 0x50, 0x66], atob("JDRLUHBhc3N3b3Jk"))
        }
      });
    }
    function _0x2fafd5(_0x12ac20, _0x21afa8) {
      _0x33d7af(_0x12ac20, _0x21afa8, function () {
        _0x21afa8(null);
      });
    }
    function _0x31dfdb(_0x9fe093, _0x56b666, _0x36ea2d) {
      if (_0x9fe093) {
        _0x2fafd5(_0x56b666, _0x36ea2d);
      } else {
        setTimeout(function () {
          _0x36ea2d(null);
        }, 0xa);
      }
    }
    function _0x1d1855(_0x3c3156) {
      var _0x3b51a0 = _0x48a1ab[_0x3c3156];
      if (_0x3b51a0) {
        var _0x94d958 = new Date().getTime() - 3600000;
        if (_0x3b51a0.timestamp > _0x94d958) {
          return _0x3b51a0.value;
        }
        for (var _0x81d446 in _0x48a1ab) {
          var _0x1ec3d3 = _0x48a1ab[_0x81d446];
          if (!(_0x1ec3d3 && _0x1ec3d3.timestamp > _0x94d958)) {
            delete _0x48a1ab[_0x81d446];
          }
        }
      }
      return null;
    }
    function _0x4299d9(_0x3a6075, _0x428014) {
      var _0x571770 = new Date().getTime();
      var _0x32b9bf = Object.keys(_0x48a1ab).length;
      if (_0x32b9bf >= 0x64) {
        var _0x2b7252 = _0x571770 - 3600000;
        for (var _0x2b0439 in _0x48a1ab) {
          var _0xe7fda1 = _0x48a1ab[_0x2b0439];
          if (!(_0xe7fda1 && _0xe7fda1.timestamp > _0x2b7252)) {
            delete _0x48a1ab[_0x2b0439];
          }
        }
        _0x32b9bf = Object.keys(_0x48a1ab).length;
        if (_0x32b9bf >= 0x64) {
          var _0x46d432 = [];
          for (var _0x27f294 in _0x48a1ab) {
            var _0xf54b2d = _0x48a1ab[_0x27f294];
            _0x46d432.push(_0xf54b2d && _0xf54b2d.timestamp || 0x0);
          }
          _0x46d432.sort(function (_0x5aa0b1, _0x5cd68e) {
            return _0x5aa0b1 - _0x5cd68e;
          });
          _0x2b7252 = _0x46d432[Math.floor(_0x46d432.length / 0x2)];
          for (var _0x14e960 in _0x48a1ab) {
            var _0x2f2566 = _0x48a1ab[_0x14e960];
            if (!(_0x2f2566 && _0x2f2566.timestamp > _0x2b7252)) {
              delete _0x48a1ab[_0x14e960];
            }
          }
        }
      }
      _0x48a1ab[_0x3a6075] = {
        'timestamp': _0x571770,
        'value': _0x428014
      };
    }
    function _0x27b617(_0x33ef6e, _0x771e2, _0x3cb2ec) {
      var _0x4ff3cd = _0x1d1855(_0x33ef6e);
      if (_0x4ff3cd) {
        setTimeout(function () {
          _0x771e2(_0x4ff3cd, true);
        }, 0xa);
      } else {
        _0x33d7af(_0x33ef6e, _0x771e2, _0x3cb2ec);
      }
    }
    function _0x262a4f() {
      _0x5104fd.clear();
    }
    var _0x581995 = {
      'get': _0x33d7af,
      'getComplite': _0x2fafd5,
      'getCompliteIf': _0x31dfdb,
      'getCache': _0x1d1855,
      'setCache': _0x4299d9,
      'getFromCache': _0x27b617,
      'clear': _0x262a4f
    };
    function _0x1db8f3(_0x4c6609, _0x329194) {
      var _0x66d200 = new Lampa.Reguest();
      var _0x7dd2eb = {};
      var _0x2fb8f6 = _0x329194;
      _0x7dd2eb.seasons = [];
      _0x7dd2eb.season_num = [];
      _0x7dd2eb.media = [];
      var _0x1a1d72 = '';
      var _0x1d5fae = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x6b1a9b = Lampa.Storage.field('online_mod_prefer_mp4') === true;
      var _0x40059c = _0x4c6609.proxy('lumex');
      var _0x5c3041 = atob('aHR0cHM6Ly9wLmx1bWV4LnNwYWNl');
      var _0x58b478 = _0x5c3041 + '/';
      var _0x3ca0ea = _0x59443e.baseUserAgent();
      var _0x177baf = Lampa.Platform.is("android") ? {
        'Origin': _0x5c3041,
        'Referer': _0x58b478,
        'User-Agent': _0x3ca0ea,
        'Sec-Fetch-Dest': "empty",
        'Sec-Fetch-Mode': "cors",
        'Sec-Fetch-Site': 'same-site'
      } : {};
      var _0x6850c4 = Lampa.Platform.is('android') ? {
        'Origin': _0x5c3041,
        'Referer': _0x58b478,
        'User-Agent': _0x3ca0ea,
        'Sec-Fetch-Dest': "empty",
        'Sec-Fetch-Mode': "cors",
        'Sec-Fetch-Site': 'same-site',
        'Cookie': '',
        'x-csrf-token': ''
      } : {};
      var _0x465e76 = '';
      if (_0x40059c) {
        _0x465e76 += "param/Origin=" + encodeURIComponent(_0x5c3041) + '/';
        _0x465e76 += "param/Referer=" + encodeURIComponent(_0x58b478) + '/';
        _0x465e76 += "param/User-Agent=" + encodeURIComponent(_0x3ca0ea) + '/';
        _0x465e76 += "param/Sec-Fetch-Dest=empty/";
        _0x465e76 += "param/Sec-Fetch-Mode=cors/";
        _0x465e76 += 'param/Sec-Fetch-Site=same-site/';
      }
      var _0x39e95f = _0x465e76;
      var _0x2c6c80 = atob("aHR0cHM6Ly9hcGkubHVtZXguc3BhY2Uv");
      var _0x4e3dc0 = atob('Y2xpZW50SWQ9Q1dmS1hMYzFhaklkJmRvbWFpbj1tb3ZpZWxhYi5vbmUmdXJsPW1vdmllbGFiLm9uZQ==');
      var _0x502f48 = atob("LmVudG91YWVkb24uY29tLw==");
      var _0x3106de = {};
      var _0x4d3608 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': '',
        'voice_id': 0x0
      };
      function _0x4176ba(_0x16de28, _0x225e50, _0x5c755d) {
        var _0xd02c4f = function _0x3d8d23(_0x11e341, _0x3310a6) {
          if (_0x11e341.status == 0x194 || _0x11e341.status == 0x0 && _0x11e341.statusText !== "timeout") {
            if (_0x225e50) {
              _0x225e50('');
            }
          } else {
            if (_0x5c755d) {
              _0x5c755d(_0x66d200.errorDecode(_0x11e341, _0x3310a6));
            }
          }
        };
        var _0x32c7cb = true;
        var _0x583dc4 = _0x465e76;
        if (_0x40059c) {
          _0x583dc4 += "cookie_plus/param/Cookie=/";
          _0x32c7cb = false;
        }
        var _0x47d704 = function _0x119793(_0x2d9b7f) {
          var _0x33ff9a = '';
          if (_0x2d9b7f && _0x2d9b7f.headers && _0x2d9b7f.body) {
            var _0x1d875d = _0x2d9b7f.headers['set-cookie'] || null;
            if (_0x1d875d && _0x1d875d.forEach) {
              var _0x251961 = {};
              _0x1d875d.forEach(function (_0x33b248) {
                var _0x23eb3c = _0x33b248.split(';')[0x0].split('=');
                if (_0x23eb3c[0x0]) {
                  if (_0x23eb3c[0x1] === "deleted") {
                    delete _0x251961[_0x23eb3c[0x0]];
                  } else {
                    _0x251961[_0x23eb3c[0x0]] = _0x23eb3c[0x1] || '';
                  }
                }
              });
              var _0x558c5f = [];
              for (var _0x547818 in _0x251961) {
                _0x558c5f.push(_0x547818 + '=' + _0x251961[_0x547818]);
              }
              _0x33ff9a = _0x558c5f.join("; ");
            }
            _0x2d9b7f = typeof _0x2d9b7f.body === "string" ? Lampa.Arrays.decodeJson(_0x2d9b7f.body, {}) : _0x2d9b7f.body;
          }
          _0x225e50(_0x2d9b7f, _0x33ff9a);
        };
        _0x66d200.clear();
        _0x66d200.timeout(0x4e20);
        _0x66d200.native(_0x4c6609.proxyLink(_0x16de28, _0x40059c, _0x583dc4, "enc2t"), _0x47d704, _0xd02c4f, false, {
          'headers': _0x177baf,
          'returnHeaders': _0x32c7cb
        });
      }
      this.search = function (_0x58a485, _0x140c02, _0x4fd364) {
        _0x2fb8f6 = _0x58a485;
        _0x1a1d72 = _0x2fb8f6.search || _0x2fb8f6.movie.title;
        var _0x31946b = _0x4c6609.empty.bind(_0x4c6609);
        var _0x97c7e3 = false;
        var _0x439a92 = _0x2c6c80 + "content";
        if (_0x4fd364 && _0x4fd364[0x0] && _0x4fd364[0x0].content_type && _0x4fd364[0x0].id) {
          _0x97c7e3 = true;
          _0x439a92 = Lampa.Utils.addUrlComponent(_0x439a92, 'contentType=' + encodeURIComponent(_0x4fd364[0x0].content_type.replace(/_/g, '-')));
          _0x439a92 = Lampa.Utils.addUrlComponent(_0x439a92, "contentId=" + encodeURIComponent(_0x4fd364[0x0].id));
        } else {
          _0x439a92 = Lampa.Utils.addUrlComponent(_0x439a92, "contentType=short");
          _0x439a92 = Lampa.Utils.addUrlComponent(_0x439a92, (+_0x140c02 ? "kpId=" : 'imdbId=') + encodeURIComponent(_0x140c02));
        }
        _0x439a92 = Lampa.Utils.addUrlComponent(_0x439a92, _0x4e3dc0);
        _0x4176ba(_0x439a92, function (_0x2d326a, _0x3ed007) {
          if (_0x2d326a) {
            _0x5535b0(_0x2d326a, _0x3ed007);
          } else {
            if (!_0x97c7e3 && !_0x2fb8f6.clarification && _0x2fb8f6.movie.imdb_id && _0x140c02 != _0x2fb8f6.movie.imdb_id) {
              var _0x599bdf = _0x2c6c80 + "content";
              _0x599bdf = Lampa.Utils.addUrlComponent(_0x599bdf, "contentType=short");
              _0x599bdf = Lampa.Utils.addUrlComponent(_0x599bdf, "imdbId=" + encodeURIComponent(_0x2fb8f6.movie.imdb_id));
              _0x599bdf = Lampa.Utils.addUrlComponent(_0x599bdf, _0x4e3dc0);
              _0x4176ba(_0x599bdf, function (_0x3d082a, _0x12ef5e) {
                if (_0x3d082a) {
                  _0x5535b0(_0x3d082a, _0x12ef5e);
                } else {
                  _0x4c6609.emptyForQuery(_0x1a1d72);
                }
              }, _0x31946b);
            } else {
              _0x4c6609.emptyForQuery(_0x1a1d72);
            }
          }
        }, _0x31946b);
      };
      this.extendChoice = function (_0x5345e8) {
        Lampa.Arrays.extend(_0x4d3608, _0x5345e8, true);
      };
      this.reset = function () {
        _0x4c6609.reset();
        _0x4d3608 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': '',
          'voice_id': 0x0
        };
        _0x84f473();
        _0x40dd35(_0x27e7d1());
        _0x4c6609.saveChoice(_0x4d3608);
      };
      this.filter = function (_0x474649, _0x3d50bc, _0x11118b) {
        _0x4d3608[_0x3d50bc.stype] = _0x11118b.index;
        if (_0x3d50bc.stype == "voice") {
          _0x4d3608.voice_name = _0x3106de.voice[_0x11118b.index];
          _0x4d3608.voice_id = _0x3106de.voice_info[_0x11118b.index] && _0x3106de.voice_info[_0x11118b.index].id;
        }
        _0x4c6609.reset();
        _0x84f473();
        _0x40dd35(_0x27e7d1());
        _0x4c6609.saveChoice(_0x4d3608);
      };
      this.destroy = function () {
        _0x66d200.clear();
        _0x7dd2eb = null;
      };
      function _0x5535b0(_0xeeadb0, _0x314304) {
        _0x4c6609.loading(false);
        if (_0xeeadb0 && _0xeeadb0.player && _0xeeadb0.player.media && _0xeeadb0.player.media.length) {
          _0x39e95f = _0x465e76;
          if (_0x40059c) {
            _0x39e95f += 'param/Cookie=' + encodeURIComponent(_0x314304) + '/';
            _0x39e95f += "param/x-csrf-token=" + encodeURIComponent(_0xeeadb0.meta || '') + '/';
          }
          if (Lampa.Platform.is("android")) {
            _0x6850c4.Cookie = _0x314304;
            _0x6850c4['x-csrf-token'] = _0xeeadb0.meta || '';
          }
          var _0x25b9d1 = [];
          var _0xd5aab7 = [];
          var _0x4d3e0f = 0x0;
          _0xeeadb0.player.media.forEach(function (_0x196ad6) {
            if (_0x196ad6.episodes) {
              _0x4d3e0f++;
              if (_0x196ad6.episodes.length) {
                _0x25b9d1.push(_0x196ad6);
                _0xd5aab7.push(_0x196ad6.season_id != null ? _0x196ad6.season_id : _0x4d3e0f);
              }
            } else if (_0x196ad6.media && _0x196ad6.episode_id != null && !_0x4d3e0f) {
              _0x4d3e0f++;
              _0x25b9d1.push({
                'season_id': 0x1,
                'season_name': "Сезон 1",
                'episodes': _0xeeadb0.player.media
              });
              _0xd5aab7.push(0x1);
            }
          });
          _0x7dd2eb = {
            'seasons': _0x25b9d1,
            'season_num': _0xd5aab7,
            'media': _0xeeadb0.player.media
          };
          _0x84f473();
          _0x40dd35(_0x27e7d1());
        } else {
          _0x4c6609.emptyForQuery(_0x1a1d72);
        }
      }
      function _0x84f473() {
        _0x3106de = {
          'season': _0x7dd2eb.season_num.map(function (_0x36e6cc) {
            return Lampa.Lang.translate("torrent_serial_season") + " " + _0x36e6cc;
          }),
          'season_num': _0x7dd2eb.season_num,
          'voice': [],
          'voice_info': []
        };
        if (!_0x3106de.season[_0x4d3608.season]) {
          _0x4d3608.season = 0x0;
        }
        if (_0x7dd2eb.season_num.length) {
          var _0x19218c = _0x7dd2eb.seasons[_0x4d3608.season];
          if (_0x19218c && _0x19218c.episodes) {
            _0x19218c.episodes.forEach(function (_0x110bb8) {
              if (_0x110bb8.media) {
                _0x110bb8.media.forEach(function (_0x21e52e) {
                  if (_0x21e52e.translation_id != null && _0x21e52e.translation_name != null) {
                    if (!_0x3106de.voice_info.some(function (_0x384a9b) {
                      return _0x384a9b.id == _0x21e52e.translation_id;
                    })) {
                      _0x3106de.voice.push(_0x21e52e.translation_name);
                      _0x3106de.voice_info.push({
                        'id': _0x21e52e.translation_id,
                        'name': _0x21e52e.translation_name
                      });
                    }
                  }
                });
              }
            });
          }
        }
        if (!_0x3106de.voice[_0x4d3608.voice]) {
          _0x4d3608.voice = 0x0;
        }
        if (_0x4d3608.voice_name) {
          var _0x18e853 = -0x1;
          if (_0x4d3608.voice_id) {
            var _0x2c6f4b = _0x3106de.voice_info.filter(function (_0x41253c) {
              return _0x41253c.id == _0x4d3608.voice_id;
            })[0x0];
            if (_0x2c6f4b) {
              _0x18e853 = _0x3106de.voice_info.indexOf(_0x2c6f4b);
            }
          }
          if (_0x18e853 == -0x1) {
            _0x18e853 = _0x3106de.voice.indexOf(_0x4d3608.voice_name);
          }
          if (_0x18e853 == -0x1) {
            _0x4d3608.voice = 0x0;
          } else if (_0x18e853 !== _0x4d3608.voice) {
            _0x4d3608.voice = _0x18e853;
          }
        }
        _0x4c6609.filter(_0x3106de, _0x4d3608);
      }
      function _0x27e7d1() {
        var _0x526c17 = [];
        if (_0x3106de.season_num.length) {
          var _0x4139ee = _0x7dd2eb.seasons[_0x4d3608.season];
          var _0x125a30 = _0x7dd2eb.season_num[_0x4d3608.season];
          var _0x294d3c = _0x3106de.voice_info[_0x4d3608.voice];
          if (_0x4139ee && _0x4139ee.episodes && _0x294d3c) {
            var _0x13f3cc = 0x0;
            _0x4139ee.episodes.forEach(function (_0x50252a) {
              _0x13f3cc++;
              if (_0x50252a.media) {
                _0x50252a.media.forEach(function (_0x98891) {
                  if (_0x98891.translation_id == _0x294d3c.id) {
                    var _0x45fd7f = _0x50252a.episode_id != null ? _0x50252a.episode_id : _0x13f3cc;
                    _0x526c17.push({
                      'title': _0x4c6609.formatEpisodeTitle(_0x125a30, _0x45fd7f),
                      'quality': _0x98891.max_quality ? _0x98891.max_quality + 'p' : "360p ~ 1080p",
                      'info': " / " + (_0x98891.translation_name || _0x294d3c.name),
                      'season': _0x125a30,
                      'episode': _0x13f3cc,
                      'media': _0x98891
                    });
                  }
                });
              }
            });
          }
        } else {
          _0x7dd2eb.media.forEach(function (_0x2366af) {
            if (_0x2366af.translation_id != null && _0x2366af.translation_name != null) {
              _0x526c17.push({
                'title': _0x2366af.translation_name || _0x1a1d72,
                'quality': _0x2366af.max_quality ? _0x2366af.max_quality + 'p' : "360p ~ 1080p",
                'info': '',
                'media': _0x2366af
              });
            }
          });
        }
        return _0x526c17;
      }
      function _0x4ad7b4(_0x29061f, _0x55bf45) {
        if (!_0x29061f) {
          return [];
        }
        try {
          var _0x4da891 = _0x4c6609.parseM3U(_0x29061f).map(function (_0x1c1d68) {
            var _0x3a4137 = _0x1c1d68.link || '';
            if (_0x6b1a9b) {
              _0x3a4137 = _0x3a4137.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
            }
            var _0x129381 = _0x1c1d68.height;
            var _0x11473 = _0x3a4137.match(/\b(\d\d\d+)\./);
            if (_0x11473) {
              var _0x504b6c = parseInt(_0x11473[0x1]);
              if (_0x504b6c > _0x129381 && _0x504b6c <= 0x10e0) {
                _0x129381 = _0x504b6c;
              }
            }
            _0x3a4137 = _0x4c6609.fixLink(_0x3a4137, _0x55bf45);
            var _0x120715 = _0x3a4137.indexOf(_0x502f48) !== -0x1 ? '' : _0x40059c;
            return {
              'label': _0x129381 ? _0x129381 + 'p' : "360p ~ 1080p",
              'quality': _0x129381,
              'file': _0x4c6609.proxyLink(_0x3a4137, _0x120715, _0x465e76)
            };
          });
          _0x4da891.sort(function (_0x319f92, _0x3616cd) {
            if (_0x3616cd.quality > _0x319f92.quality) {
              return 0x1;
            }
            if (_0x3616cd.quality < _0x319f92.quality) {
              return -0x1;
            }
            if (_0x3616cd.label > _0x319f92.label) {
              return 0x1;
            }
            if (_0x3616cd.label < _0x319f92.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x4da891;
        } catch (_0x28a1d8) {}
        return [];
      }
      function _0x39a464(_0x34b515, _0x480e7a, _0x2ff220, _0x293cf7, _0x1dc604, _0x13f088) {
        var _0x20171f = '';
        var _0x2ab6e9 = false;
        var _0xa9a370 = _0x293cf7(_0x1dc604, _0x13f088);
        if (_0xa9a370 && _0xa9a370.length) {
          _0x20171f = _0xa9a370[0x0].file;
          _0x2ab6e9 = {};
          _0xa9a370.forEach(function (_0x3cfafa) {
            _0x2ab6e9[_0x3cfafa.label] = _0x3cfafa.file;
          });
        }
        if (_0x20171f) {
          _0x34b515.stream = _0x20171f;
          _0x34b515.qualitys = _0x2ab6e9;
          _0x480e7a(_0x34b515);
        } else {
          _0x2ff220();
        }
      }
      function _0x14930e(_0x5b6364, _0x2f051e, _0x5d9297, _0x123562) {
        _0x123562 = _0x123562.replace(/\.mp4:hls:manifest/, '');
        var _0x1af884 = _0x123562.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        var _0x22c49d = _0x123562.indexOf(_0x502f48) !== -0x1 ? '' : _0x40059c;
        _0x66d200.clear();
        _0x66d200.timeout(0x1388);
        _0x66d200.native(_0x4c6609.proxyLink(_0x1af884, _0x22c49d, _0x465e76), function (_0x4411c0) {
          _0x39a464(_0x5b6364, _0x2f051e, _0x5d9297, _0x4ad7b4, _0x4411c0, _0x1af884);
        }, function (_0x1fe301, _0x138741) {
          if (_0x123562 != _0x1af884) {
            _0x66d200.clear();
            _0x66d200.timeout(0x1388);
            _0x66d200.native(_0x4c6609.proxyLink(_0x123562, _0x22c49d, _0x465e76), function (_0x384d35) {
              _0x39a464(_0x5b6364, _0x2f051e, _0x5d9297, _0x4ad7b4, _0x384d35, _0x123562);
            }, function (_0x274e11, _0x1865a3) {
              _0x5d9297();
            }, false, {
              'dataType': "text"
            });
          } else {
            _0x5d9297();
          }
        }, false, {
          'dataType': "text"
        });
      }
      function _0x5e93be(_0x50c030) {
        if (!(_0x50c030 && _0x50c030.length)) {
          return false;
        }
        var _0x23da33 = _0x50c030.filter(function (_0x5d88bb) {
          return _0x5d88bb.kind === 'captions';
        }).map(function (_0x544562) {
          var _0x26ff1e = _0x544562.src || '';
          var _0x36e115 = _0x26ff1e.split(" or ").filter(function (_0x421adb) {
            return _0x421adb;
          })[0x0] || '';
          _0x36e115 = _0x4c6609.fixLinkProtocol(_0x36e115, _0x1d5fae);
          var _0x25daa3 = _0x36e115.indexOf(_0x502f48) !== -0x1 ? '' : _0x40059c;
          return {
            'label': _0x544562.label,
            'url': _0x4c6609.proxyLink(_0x36e115, _0x25daa3, _0x465e76)
          };
        }).filter(function (_0x5a60c8) {
          return _0x5a60c8.url;
        });
        return _0x23da33.length ? _0x23da33 : false;
      }
      function _0x5aa391(_0x47a1a3, _0x40006e, _0x488032) {
        if (_0x47a1a3.stream) {
          return _0x40006e(_0x47a1a3);
        }
        if (!_0x47a1a3.media.playlist) {
          return _0x488032();
        }
        var _0x57abf4 = _0x4c6609.fixLink(_0x47a1a3.media.playlist, _0x2c6c80);
        _0x66d200.clear();
        _0x66d200.timeout(0x2710);
        _0x66d200.native(_0x4c6609.proxyLink(_0x57abf4, _0x40059c, _0x39e95f, 'enc2t'), function (_0x4021a9) {
          var _0x158c31 = _0x4c6609.fixLinkProtocol(_0x4021a9 && _0x4021a9.url || '', _0x1d5fae);
          if (_0x158c31) {
            _0x47a1a3.subtitles = _0x5e93be(_0x47a1a3.media.tracks);
            if (_0x42558b(_0x158c31, '.m3u8')) {
              _0x14930e(_0x47a1a3, _0x40006e, _0x488032, _0x158c31);
              return;
            }
            var _0x310a71 = _0x158c31.indexOf(_0x502f48) !== -0x1 ? '' : _0x40059c;
            _0x47a1a3.stream = _0x4c6609.proxyLink(_0x158c31, _0x310a71, _0x465e76);
            _0x47a1a3.qualitys = false;
            _0x40006e(_0x47a1a3);
          } else {
            _0x488032();
          }
        }, function (_0x3108f3, _0x3e7207) {
          _0x488032();
        }, {}, {
          'headers': _0x6850c4
        });
      }
      function _0x40dd35(_0x200b87) {
        _0x4c6609.reset();
        var _0x4c1de1 = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x2d8c86 = _0x4c6609.getLastEpisode(_0x200b87);
        _0x200b87.forEach(function (_0x52aaee) {
          if (_0x52aaee.season) {
            _0x52aaee.translate_episode_end = _0x2d8c86;
            _0x52aaee.translate_voice = _0x3106de.voice[_0x4d3608.voice];
          }
          var _0x59af6d = Lampa.Utils.hash(_0x52aaee.season ? [_0x52aaee.season, _0x52aaee.season > 0xa ? ':' : '', _0x52aaee.episode, _0x2fb8f6.movie.original_title].join('') : _0x2fb8f6.movie.original_title);
          var _0x4c3b93 = Lampa.Timeline.view(_0x59af6d);
          var _0x270163 = Lampa.Template.get('online_mod', _0x52aaee);
          var _0x50eb79 = Lampa.Utils.hash(_0x52aaee.season ? [_0x52aaee.season, _0x52aaee.season > 0xa ? ':' : '', _0x52aaee.episode, _0x2fb8f6.movie.original_title, _0x3106de.voice[_0x4d3608.voice]].join('') : _0x2fb8f6.movie.original_title + _0x52aaee.title);
          _0x52aaee.timeline = _0x4c3b93;
          _0x270163.append(Lampa.Timeline.render(_0x4c3b93));
          if (Lampa.Timeline.details) {
            _0x270163.find(".online__quality").append(Lampa.Timeline.details(_0x4c3b93, " / "));
          }
          if (_0x4c1de1.indexOf(_0x50eb79) !== -0x1) {
            _0x270163.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x270163.on("hover:enter", function () {
            if (_0x52aaee.loading) {
              return;
            }
            if (_0x2fb8f6.movie.id) {
              Lampa.Favorite.add("history", _0x2fb8f6.movie, 0x64);
            }
            _0x52aaee.loading = true;
            _0x5aa391(_0x52aaee, function (_0x45c4e0) {
              _0x45c4e0.loading = false;
              var _0x51a310 = {
                'url': _0x4c6609.getDefaultQuality(_0x45c4e0.qualitys, _0x45c4e0.stream),
                'quality': _0x4c6609.renameQualityMap(_0x45c4e0.qualitys),
                'subtitles': _0x45c4e0.subtitles,
                'timeline': _0x45c4e0.timeline,
                'title': _0x45c4e0.season ? _0x45c4e0.title : _0x1a1d72 + (_0x45c4e0.title == _0x1a1d72 ? '' : " / " + _0x45c4e0.title)
              };
              Lampa.Player.play(_0x51a310);
              if (_0x45c4e0.season && Lampa.Platform.version) {
                var _0x3aca32 = [];
                _0x200b87.forEach(function (_0x21ef86) {
                  if (_0x21ef86 == _0x45c4e0) {
                    _0x3aca32.push(_0x51a310);
                  } else {
                    var _0x4534d6 = {
                      'url': function _0x350c5a(_0x5b716d) {
                        _0x5aa391(_0x21ef86, function (_0x1aa8c2) {
                          _0x4534d6.url = _0x4c6609.getDefaultQuality(_0x1aa8c2.qualitys, _0x1aa8c2.stream);
                          _0x4534d6.quality = _0x4c6609.renameQualityMap(_0x1aa8c2.qualitys);
                          _0x4534d6.subtitles = _0x1aa8c2.subtitles;
                          _0x5b716d();
                        }, function () {
                          _0x4534d6.url = '';
                          _0x5b716d();
                        });
                      },
                      'timeline': _0x21ef86.timeline,
                      'title': _0x21ef86.title
                    };
                    _0x3aca32.push(_0x4534d6);
                  }
                });
                Lampa.Player.playlist(_0x3aca32);
              } else {
                Lampa.Player.playlist([_0x51a310]);
              }
              if (_0x4c1de1.indexOf(_0x50eb79) == -0x1) {
                _0x4c1de1.push(_0x50eb79);
                _0x270163.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x4c1de1);
              }
            }, function () {
              _0x52aaee.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          _0x4c6609.append(_0x270163);
          _0x4c6609.contextmenu({
            'item': _0x270163,
            'view': _0x4c3b93,
            'viewed': _0x4c1de1,
            'hash_file': _0x50eb79,
            'element': _0x52aaee,
            'file': function _0x180a5f(_0x3b7686) {
              _0x5aa391(_0x52aaee, function (_0xdda81d) {
                _0x3b7686({
                  'file': _0xdda81d.stream,
                  'quality': _0xdda81d.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0x4c6609.start(true);
      }
    }
    function _0x42c9ee(_0x1e3abe, _0x150cd0) {
      var _0x2e6f6c = new Lampa.Reguest();
      var _0x236d09 = [];
      var _0x2e8f97 = _0x150cd0;
      var _0x36d9b1 = '';
      var _0x7ca72 = false;
      var _0x5e5aaf = atob('aHR0cHM6Ly9hcGkubGFtcGEuc3RyZWFtL2x1bWV4Lw==');
      var _0x49aa48 = '/' + encodeURIComponent(btoa(window.location.href));
      var _0x3b6d8f = encodeURIComponent(btoa(Lampa.Storage.get("account", '{}').email || "none"));
      var _0x3b73a0 = {};
      var _0x2054ca = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      function _0x59c4ab(_0x5ea347, _0x411805, _0x3caa2d) {
        var _0x44af8e = function _0x5262d6(_0x10417e, _0x53b091) {
          if (_0x10417e.status == 0x194 || _0x10417e.status == 0x1f4 || _0x10417e.status == 0x0 && _0x10417e.statusText !== "timeout") {
            if (_0x411805) {
              _0x411805('');
            }
          } else {
            if (_0x3caa2d) {
              _0x3caa2d(_0x2e6f6c.errorDecode(_0x10417e, _0x53b091));
            }
          }
        };
        var _0x4c8994 = function _0x171e70(_0x5a491c) {
          _0x411805(_0x5a491c);
        };
        _0x2e6f6c.clear();
        _0x2e6f6c.timeout(0x4e20);
        _0x2e6f6c.native(_0x5ea347, _0x4c8994, _0x44af8e);
      }
      this.search = function (_0x1d7e32, _0x5b5142, _0x3b7cb0) {
        _0x2e8f97 = _0x1d7e32;
        _0x36d9b1 = _0x2e8f97.search || _0x2e8f97.movie.title;
        var _0x5052de = _0x1e3abe.empty.bind(_0x1e3abe);
        var _0x578d8f = _0x5e5aaf + "sId/" + encodeURIComponent(_0x2e8f97.movie.id) + '/mod/';
        if (_0x3b7cb0 && _0x3b7cb0[0x0] && _0x3b7cb0[0x0].content_type && _0x3b7cb0[0x0].id) {
          var _0x59b618 = _0x3b7cb0[0x0].imdb_id || "null";
          var _0x2863fd = _0x3b7cb0[0x0].kp_id || "null";
          _0x578d8f += encodeURIComponent(_0x2863fd) + '/' + encodeURIComponent(_0x59b618);
        } else {
          var _0x2de464 = (+_0x5b5142 ? !_0x2e8f97.clarification && _0x2e8f97.movie.imdb_id : _0x5b5142) || "null";
          var _0x2aec86 = +_0x5b5142 ? _0x5b5142 : 'null';
          _0x578d8f += encodeURIComponent(_0x2aec86) + '/' + encodeURIComponent(_0x2de464);
        }
        var _0x29438f = !_0x2e8f97.clarification && (_0x2e8f97.movie.original_title || _0x2e8f97.movie.original_name) || '';
        var _0x24489f = _0x2e8f97.search_date || !_0x2e8f97.clarification && (_0x2e8f97.movie.release_date || _0x2e8f97.movie.first_air_date || _0x2e8f97.movie.last_air_date) || "0000";
        var _0x5aa7e7 = parseInt((_0x24489f + '').slice(0x0, 0x4));
        _0x1e3abe.checkMyIp(function () {
          var _0x3d15a0 = _0x59443e.getMyIp();
          if (!_0x3d15a0) {
            _0x5052de();
            return;
          }
          var _0x1a4636 = _0x578d8f + '/' + _0x3b6d8f + _0x49aa48;
          _0x1a4636 = Lampa.Utils.addUrlComponent(_0x1a4636, "ip=" + encodeURIComponent(_0x3d15a0));
          _0x1a4636 = Lampa.Utils.addUrlComponent(_0x1a4636, "search=" + encodeURIComponent(_0x36d9b1));
          _0x1a4636 = Lampa.Utils.addUrlComponent(_0x1a4636, 'original_title=' + encodeURIComponent(_0x29438f));
          _0x1a4636 = Lampa.Utils.addUrlComponent(_0x1a4636, "year=" + _0x5aa7e7);
          _0x59c4ab(_0x1a4636, function (_0x15d74f) {
            if (_0x15d74f) {
              _0x2945ba(_0x15d74f);
            } else {
              _0x1e3abe.emptyForQuery(_0x36d9b1);
            }
          }, _0x5052de);
        });
      };
      this.extendChoice = function (_0x4b682d) {
        Lampa.Arrays.extend(_0x2054ca, _0x4b682d, true);
      };
      this.reset = function () {
        _0x1e3abe.reset();
        _0x2054ca = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x241385();
        _0x256315(_0x4ac069());
        _0x1e3abe.saveChoice(_0x2054ca);
      };
      this.filter = function (_0xb8e872, _0xc5995c, _0x4eebb4) {
        _0x2054ca[_0xc5995c.stype] = _0x4eebb4.index;
        if (_0xc5995c.stype == "voice") {
          _0x2054ca.voice_name = _0x3b73a0.voice[_0x4eebb4.index];
        }
        _0x1e3abe.reset();
        _0x241385();
        _0x256315(_0x4ac069());
        _0x1e3abe.saveChoice(_0x2054ca);
      };
      this.destroy = function () {
        _0x2e6f6c.clear();
        _0x236d09 = null;
      };
      function _0x2945ba(_0x15b4de, _0xe96e4e) {
        _0x1e3abe.loading(false);
        if (_0x15b4de && _0x15b4de.folder && Lampa.Arrays.getKeys(_0x15b4de.folder).length) {
          if (_0x15b4de.folder.forEach) {
            _0x236d09 = _0x15b4de.folder;
            _0x7ca72 = false;
          } else {
            _0x236d09 = [];
            _0x7ca72 = true;
            for (var _0x1ade0a in _0x15b4de.folder) {
              var _0x11fa6f = _0x15b4de.folder[_0x1ade0a];
              if (!_0x11fa6f.forEach) {
                var _0x53dca4 = function _0x61e3ae(_0x1e6912) {
                  var _0x11b003 = _0x11fa6f[_0x1e6912];
                  if (_0x11b003.forEach) {
                    var _0x12e2e0 = _0x236d09.filter(function (_0x268812) {
                      return _0x268812.season_id === _0x1e6912;
                    })[0x0];
                    if (!_0x12e2e0) {
                      _0x12e2e0 = {
                        'season_id': _0x1e6912,
                        'title': Lampa.Lang.translate("torrent_serial_season") + " " + _0x1e6912,
                        'voices': []
                      };
                      _0x236d09.push(_0x12e2e0);
                    }
                    _0x12e2e0.voices.push({
                      'title': _0x1ade0a,
                      'episodes': _0x11b003
                    });
                  }
                };
                for (var _0x25f173 in _0x11fa6f) {
                  _0x53dca4(_0x25f173);
                }
              }
            }
            _0x236d09.sort(function (_0x4c2f57, _0x6188b4) {
              return _0x4c2f57.season_id - _0x6188b4.season_id;
            });
          }
          _0x241385();
          _0x256315(_0x4ac069());
        } else {
          _0x1e3abe.emptyForQuery(_0x36d9b1);
        }
      }
      function _0x241385() {
        _0x3b73a0 = {
          'season': _0x7ca72 ? _0x236d09.map(function (_0x38e412) {
            return _0x38e412.title;
          }) : [],
          'voice': []
        };
        if (!_0x3b73a0.season[_0x2054ca.season]) {
          _0x2054ca.season = 0x0;
        }
        if (_0x7ca72) {
          var _0x112e18 = _0x236d09[_0x2054ca.season];
          if (_0x112e18 && _0x112e18.voices) {
            _0x112e18.voices.forEach(function (_0x46ca58) {
              _0x3b73a0.voice.push(_0x46ca58.title);
            });
          }
        }
        if (!_0x3b73a0.voice[_0x2054ca.voice]) {
          _0x2054ca.voice = 0x0;
        }
        if (_0x2054ca.voice_name) {
          var _0x552a3f = _0x3b73a0.voice.indexOf(_0x2054ca.voice_name);
          if (_0x552a3f == -0x1) {
            _0x2054ca.voice = 0x0;
          } else if (_0x552a3f !== _0x2054ca.voice) {
            _0x2054ca.voice = _0x552a3f;
          }
        }
        _0x1e3abe.filter(_0x3b73a0, _0x2054ca);
      }
      function _0x4ac069() {
        var _0x43df81 = [];
        if (_0x7ca72) {
          var _0x3e637e = _0x236d09[_0x2054ca.season];
          if (_0x3e637e && _0x3e637e.voices) {
            var _0x37d9e5 = _0x3b73a0.voice[_0x2054ca.voice];
            _0x3e637e.voices.forEach(function (_0xe190cf) {
              if (_0xe190cf.title == _0x37d9e5 && _0xe190cf.episodes) {
                _0xe190cf.episodes.forEach(function (_0x533ae8) {
                  _0x43df81.push({
                    'title': _0x1e3abe.formatEpisodeTitle(_0x533ae8.season, _0x533ae8.episode),
                    'quality': _0x533ae8.quality || "360p ~ 1080p",
                    'info': " / " + _0x37d9e5,
                    'season': _0x533ae8.season + '',
                    'episode': _0x533ae8.episode,
                    'media': _0x533ae8,
                    'subtitles': _0x4cf629(_0x533ae8.subtitles),
                    'vast_url': _0x533ae8.vast_url,
                    'vast_msg': _0x533ae8.vast_msg
                  });
                });
              }
            });
          }
        } else {
          _0x236d09.forEach(function (_0x1e05a5) {
            if (_0x1e05a5.url) {
              _0x43df81.push({
                'title': _0x1e05a5.title || _0x36d9b1,
                'quality': _0x1e05a5.quality || "360p ~ 1080p",
                'info': '',
                'media': _0x1e05a5,
                'subtitles': _0x4cf629(_0x1e05a5.subtitles),
                'vast_url': _0x1e05a5.vast_url,
                'vast_msg': _0x1e05a5.vast_msg
              });
            }
          });
        }
        return _0x43df81;
      }
      function _0x4cf629(_0x1b2c75) {
        if (!(_0x1b2c75 && _0x1b2c75.forEach)) {
          return false;
        }
        var _0x8729f9 = _0x1b2c75.map(function (_0x282e20) {
          return {
            'label': _0x282e20.label,
            'url': _0x282e20.url || ''
          };
        }).filter(function (_0x43f1b5) {
          return _0x43f1b5.url;
        });
        return _0x8729f9.length ? _0x8729f9 : false;
      }
      function _0x36c6f9(_0xccf510, _0x4e20eb, _0x3ee252) {
        if (_0xccf510.stream) {
          return _0x4e20eb(_0xccf510);
        }
        var _0x5e06b4 = _0x59443e.getMyIp();
        if (!_0xccf510.media.url || !_0x5e06b4) {
          return _0x3ee252();
        }
        var _0x3e98e8 = _0xccf510.media.url + '/' + encodeURIComponent(_0x5e06b4) + _0x49aa48;
        _0x59c4ab(_0x3e98e8, function (_0x37bc08) {
          if (_0x37bc08 && _0x37bc08.url) {
            _0xccf510.stream = _0x37bc08.url;
            _0xccf510.qualitys = _0x37bc08.qualitys || false;
            _0x4e20eb(_0xccf510);
          } else {
            _0x3ee252();
          }
        }, _0x3ee252);
      }
      function _0x256315(_0x388ada) {
        _0x1e3abe.reset();
        var _0x3aceac = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x3ef908 = _0x1e3abe.getLastEpisode(_0x388ada);
        _0x388ada.forEach(function (_0x4d0fc9) {
          if (_0x4d0fc9.season) {
            _0x4d0fc9.translate_episode_end = _0x3ef908;
            _0x4d0fc9.translate_voice = _0x3b73a0.voice[_0x2054ca.voice];
          }
          var _0x2d7fdb = Lampa.Utils.hash(_0x4d0fc9.season ? [_0x4d0fc9.season, _0x4d0fc9.season > 0xa ? ':' : '', _0x4d0fc9.episode, _0x2e8f97.movie.original_title].join('') : _0x2e8f97.movie.original_title);
          var _0x2294f1 = Lampa.Timeline.view(_0x2d7fdb);
          var _0x37f371 = Lampa.Template.get("online_mod", _0x4d0fc9);
          var _0x583f08 = Lampa.Utils.hash(_0x4d0fc9.season ? [_0x4d0fc9.season, _0x4d0fc9.season > 0xa ? ':' : '', _0x4d0fc9.episode, _0x2e8f97.movie.original_title, _0x3b73a0.voice[_0x2054ca.voice]].join('') : _0x2e8f97.movie.original_title + _0x4d0fc9.title);
          _0x4d0fc9.timeline = _0x2294f1;
          _0x37f371.append(Lampa.Timeline.render(_0x2294f1));
          if (Lampa.Timeline.details) {
            _0x37f371.find(".online__quality").append(Lampa.Timeline.details(_0x2294f1, " / "));
          }
          if (_0x3aceac.indexOf(_0x583f08) !== -0x1) {
            _0x37f371.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x37f371.on('hover:enter', function () {
            if (_0x4d0fc9.loading) {
              return;
            }
            if (_0x2e8f97.movie.id) {
              Lampa.Favorite.add("history", _0x2e8f97.movie, 0x64);
            }
            _0x4d0fc9.loading = true;
            _0x36c6f9(_0x4d0fc9, function (_0x4ba26f) {
              _0x4ba26f.loading = false;
              var _0x23655a = {
                'url': _0x1e3abe.getDefaultQuality(_0x4ba26f.qualitys, _0x4ba26f.stream),
                'quality': _0x1e3abe.renameQualityMap(_0x4ba26f.qualitys),
                'subtitles': _0x4ba26f.subtitles,
                'vast_url': _0x4ba26f.vast_url,
                'vast_msg': _0x4ba26f.vast_msg,
                'timeline': _0x4ba26f.timeline,
                'title': _0x4ba26f.season ? _0x4ba26f.title : _0x36d9b1 + (_0x4ba26f.title == _0x36d9b1 ? '' : " / " + _0x4ba26f.title)
              };
              Lampa.Player.play(_0x23655a);
              if (_0x4ba26f.season && Lampa.Platform.version) {
                var _0xfb366d = [];
                _0x388ada.forEach(function (_0x2b03b5) {
                  if (_0x2b03b5 == _0x4ba26f) {
                    _0xfb366d.push(_0x23655a);
                  } else {
                    var _0x2395de = {
                      'url': function _0x465ed0(_0x1f18f3) {
                        _0x36c6f9(_0x2b03b5, function (_0x406edb) {
                          _0x2395de.url = _0x1e3abe.getDefaultQuality(_0x406edb.qualitys, _0x406edb.stream);
                          _0x2395de.quality = _0x1e3abe.renameQualityMap(_0x406edb.qualitys);
                          _0x2395de.subtitles = _0x406edb.subtitles;
                          _0x1f18f3();
                        }, function () {
                          _0x2395de.url = '';
                          _0x1f18f3();
                        });
                      },
                      'vast_url': _0x2b03b5.vast_url,
                      'vast_msg': _0x2b03b5.vast_msg,
                      'timeline': _0x2b03b5.timeline,
                      'title': _0x2b03b5.title
                    };
                    _0xfb366d.push(_0x2395de);
                  }
                });
                Lampa.Player.playlist(_0xfb366d);
              } else {
                Lampa.Player.playlist([_0x23655a]);
              }
              if (_0x3aceac.indexOf(_0x583f08) == -0x1) {
                _0x3aceac.push(_0x583f08);
                _0x37f371.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get('icon_star', {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x3aceac);
              }
            }, function () {
              _0x4d0fc9.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0x1e3abe.append(_0x37f371);
          _0x1e3abe.contextmenu({
            'item': _0x37f371,
            'view': _0x2294f1,
            'viewed': _0x3aceac,
            'hash_file': _0x583f08,
            'element': _0x4d0fc9,
            'file': function _0x50975f(_0x18f199) {
              _0x36c6f9(_0x4d0fc9, function (_0x25c4e7) {
                _0x18f199({
                  'file': _0x25c4e7.stream,
                  'quality': _0x25c4e7.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        _0x1e3abe.start(true);
      }
    }
    function _0x4b1506(_0x483dde, _0x4b8e66) {
      var _0x217938 = new Lampa.Reguest();
      var _0x170645 = {};
      var _0x2dcc81 = _0x4b8e66;
      var _0x11a9e3 = '';
      var _0x40ad53 = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x59b0a8 = Lampa.Storage.field("online_mod_prefer_mp4") === true;
      var _0x2944ee = Lampa.Storage.field("online_mod_proxy_rezka2_mirror") === true;
      var _0x4e70de = _0x483dde.proxy("rezka2");
      var _0x27144e = _0x4e70de && !_0x2944ee ? "https://rezka.ag" : _0x59443e.rezka2Mirror();
      var _0x4c6a36 = _0x27144e + '/';
      var _0xf201ae = !(_0x4e70de || Lampa.Platform.is('android'));
      var _0x1d33f2 = _0x59443e.baseUserAgent();
      var _0x506a93 = Lampa.Platform.is("android") ? {
        'Origin': _0x27144e,
        'Referer': _0x4c6a36,
        'User-Agent': _0x1d33f2
      } : {};
      var _0x56008c = '';
      if (_0x4e70de) {
        _0x56008c += 'param/Origin=' + encodeURIComponent(_0x27144e) + '/';
        _0x56008c += "param/Referer=" + encodeURIComponent(_0x4c6a36) + '/';
        _0x56008c += "param/User-Agent=" + encodeURIComponent(_0x1d33f2) + '/';
      }
      var _0x1f18fd = Lampa.Storage.get("online_mod_rezka2_cookie", '') + '';
      if (_0x1f18fd.indexOf("PHPSESSID=") == -0x1) {
        _0x1f18fd = 'PHPSESSID=' + _0x59443e.randomId(0x1a) + (_0x1f18fd ? "; " + _0x1f18fd : '');
      }
      if (_0x1f18fd) {
        if (Lampa.Platform.is("android")) {
          _0x506a93.Cookie = _0x1f18fd;
        }
        if (_0x4e70de) {
          _0x56008c += "param/Cookie=" + encodeURIComponent(_0x1f18fd) + '/';
        }
      }
      var _0xebd81c = {};
      var _0x5ed9f4 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': '',
        'season_id': ''
      };
      var _0x2c09bd = '';
      function _0x32c715(_0x3046b6) {
        var _0x1c3a33 = _0x3046b6.match(/<form id="check-form" class="check-form" method="post" action="\/ajax\/login\/">/);
        if (_0x1c3a33) {
          _0x2c09bd = Lampa.Lang.translate("online_mod_authorization_required") + " HDrezka";
          return;
        }
        var _0x4c3649 = _0x3046b6.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);
        if (_0x4c3649) {
          _0x2c09bd = ($(_0x4c3649[0x1]).text().trim() || '') + ":\n" + ($(_0x4c3649[0x2]).text().trim() || '');
          return;
        }
        var _0x1634aa = _0x3046b6.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);
        if (_0x1634aa) {
          _0x2c09bd = Lampa.Lang.translate("online_mod_unsupported_mirror") + " HDrezka";
          return;
        }
        if (_0x3046b6.lastIndexOf("Fatal error:", 0x0) === 0x0) {
          _0x2c09bd = _0x3046b6;
          return;
        }
      }
      this.search = function (_0x1b2fdf, _0x14d647, _0xa293fb) {
        var _0x1c9648 = this;
        _0x2dcc81 = _0x1b2fdf;
        _0x11a9e3 = _0x2dcc81.search || _0x2dcc81.movie.title;
        if (this.wait_similars && _0xa293fb && _0xa293fb[0x0].is_similars) {
          return _0xec14d9(_0xa293fb[0x0].link);
        }
        _0x2c09bd = '';
        var _0x54fbbd = _0x2dcc81.search_date || !_0x2dcc81.clarification && (_0x2dcc81.movie.release_date || _0x2dcc81.movie.first_air_date || _0x2dcc81.movie.last_air_date) || '0000';
        var _0xb5bbb2 = parseInt((_0x54fbbd + '').slice(0x0, 0x4));
        var _0x162bae = [];
        if (_0x2dcc81.movie.alternative_titles && _0x2dcc81.movie.alternative_titles.results) {
          _0x162bae = _0x2dcc81.movie.alternative_titles.results.map(function (_0x175aef) {
            return _0x175aef.title;
          });
        }
        if (_0x2dcc81.movie.original_title) {
          _0x162bae.push(_0x2dcc81.movie.original_title);
        }
        if (_0x2dcc81.movie.original_name) {
          _0x162bae.push(_0x2dcc81.movie.original_name);
        }
        var _0x24c4c1 = _0x4c6a36 + "engine/ajax/search.php";
        var _0x5b19ac = _0x4c6a36 + "search/?do=search&subaction=search";
        var _0x455a3d = function _0x1430da(_0x5ab429, _0x119cd6, _0xb5a75b, _0x3c9047) {
          var _0x260c6a = _0x5b19ac + "&q=" + encodeURIComponent(_0x5ab429) + "&page=" + encodeURIComponent(_0x119cd6);
          _0x217938.clear();
          _0x217938.timeout(0x2710);
          _0x217938.native(_0x483dde.proxyLink(_0x260c6a, _0x4e70de, _0x56008c, _0x56008c, "enc2t"), function (_0x2346df) {
            _0x2346df = (_0x2346df || '').replace(/\n/g, '');
            _0x32c715(_0x2346df);
            var _0x265210 = _0x2346df.match(/<div class="b-content__inline_item-link">\s*<a [^>]*>[^<]*<\/a>\s*<div>[^<]*<\/div>\s*<\/div>/g);
            var _0x50cd74 = !!_0x2346df.match(/<a [^>]*>\s*<span class="b-navigation__next\b/);
            if (_0x265210 && _0x265210.length) {
              var _0x524630 = _0x265210.map(function (_0x3fe91d) {
                var _0x24a3d6 = $(_0x3fe91d);
                var _0x57a518 = $('a', _0x24a3d6);
                var _0x13a4a3 = $("div", _0x24a3d6);
                var _0x5c0884 = _0x57a518.text().trim() || '';
                var _0x3955b2 = _0x13a4a3.text().trim() || '';
                var _0x27cd6d;
                var _0x20710f = _0x3955b2.match(/^(\d{4})\b/);
                if (_0x20710f) {
                  _0x27cd6d = parseInt(_0x20710f[0x1]);
                }
                return {
                  'year': _0x27cd6d,
                  'title': _0x5c0884,
                  'orig_title': '',
                  'link': _0x57a518.attr("href") || ''
                };
              });
              _0xb5a75b = _0xb5a75b.concat(_0x524630);
            }
            if (_0x3c9047) {
              _0x3c9047(_0xb5a75b, _0x50cd74);
            }
          }, function (_0x3d6ea9, _0x133106) {
            _0x483dde.empty(_0x217938.errorDecode(_0x3d6ea9, _0x133106));
          }, false, {
            'dataType': "text",
            'withCredentials': _0xf201ae,
            'headers': _0x506a93
          });
        };
        var _0x2be1db = function _0x15bd33(_0x4caa09) {
          var _0x529f5f = _0x4caa09.items || [];
          var _0x5baba5 = _0x4caa09.query || '';
          var _0x37ff1e = _0x4caa09.page || 0x1;
          _0x455a3d(_0x5baba5, _0x37ff1e, _0x529f5f, function (_0x4a743b, _0x37697e) {
            if (_0x4a743b && _0x4a743b.length) {
              _0x1c9648.wait_similars = true;
              _0x4a743b.forEach(function (_0x45dfea) {
                _0x45dfea.is_similars = true;
              });
              if (_0x37697e) {
                _0x483dde.similars(_0x4a743b, _0x15bd33, {
                  'items': [],
                  'query': _0x5baba5,
                  'page': _0x37ff1e + 0x1
                });
              } else {
                _0x483dde.similars(_0x4a743b);
              }
              _0x483dde.loading(false);
            } else {
              if (_0x2c09bd) {
                _0x483dde.empty(_0x2c09bd);
              } else {
                _0x483dde.emptyForQuery(_0x11a9e3);
              }
            }
          });
        };
        var _0x123137 = function _0x1f1ebe(_0x39e78e, _0x447324, _0x2c534a) {
          if (_0x39e78e && _0x39e78e.length && _0x39e78e.forEach) {
            var _0x14be82 = false;
            var _0x12d9e4 = _0x39e78e.map(function (_0xfcfe2) {
              var _0x517f8c = $(_0xfcfe2);
              var _0x1fd4ec = $('a', _0x517f8c);
              var _0x1a4623 = $(".enty", _0x1fd4ec);
              var _0x81b6ea = $('.rating', _0x1fd4ec);
              var _0xb5349 = _0x1a4623.text().trim() || '';
              _0x1a4623.remove();
              _0x81b6ea.remove();
              var _0x591f3f = _0x1fd4ec.text().trim() || '';
              var _0x36032b = '';
              var _0x49013a;
              var _0x1e93e1 = _0x591f3f.match(/\((.*,\s*)?\b(\d{4})(\s*-\s*[\d.]*)\)$/);
              if (_0x1e93e1) {
                if (_0x1e93e1[0x1]) {
                  var _0x18df68 = _0x1e93e1[0x1].match(/^([^а-яА-ЯёЁ]+),/);
                  if (_0x18df68) {
                    _0x36032b = _0x18df68[0x1].trim();
                  }
                }
                _0x49013a = parseInt(_0x1e93e1[0x2]);
              }
              return {
                'year': _0x49013a,
                'title': _0xb5349,
                'orig_title': _0x36032b,
                'link': _0x1fd4ec.attr("href") || ''
              };
            });
            var _0x12d2bd = _0x12d9e4;
            if (_0x12d2bd.length) {
              if (_0x162bae.length) {
                var _0x2e0a77 = _0x12d2bd.filter(function (_0xba79f2) {
                  return _0x483dde.containsAnyTitle([_0xba79f2.orig_title, _0xba79f2.title], _0x162bae);
                });
                if (_0x2e0a77.length) {
                  _0x12d2bd = _0x2e0a77;
                  _0x14be82 = true;
                }
              }
              if (_0x11a9e3) {
                var _0x4f1cf7 = _0x12d2bd.filter(function (_0x538d81) {
                  return _0x483dde.containsAnyTitle([_0x538d81.title, _0x538d81.orig_title], [_0x11a9e3]);
                });
                if (_0x4f1cf7.length) {
                  _0x12d2bd = _0x4f1cf7;
                  _0x14be82 = true;
                }
              }
              if (_0x12d2bd.length > 0x1 && _0xb5bbb2) {
                var _0x2a7201 = _0x12d2bd.filter(function (_0x29edc3) {
                  return _0x29edc3.year == _0xb5bbb2;
                });
                if (!_0x2a7201.length) {
                  _0x2a7201 = _0x12d2bd.filter(function (_0x3b0ac0) {
                    return _0x3b0ac0.year && _0x3b0ac0.year > _0xb5bbb2 - 0x2 && _0x3b0ac0.year < _0xb5bbb2 + 0x2;
                  });
                }
                if (_0x2a7201.length) {
                  _0x12d2bd = _0x2a7201;
                }
              }
            }
            if (_0x12d2bd.length == 0x1 && _0x14be82) {
              if (_0xb5bbb2 && _0x12d2bd[0x0].year) {
                _0x14be82 = _0x12d2bd[0x0].year > _0xb5bbb2 - 0x2 && _0x12d2bd[0x0].year < _0xb5bbb2 + 0x2;
              }
              if (_0x14be82) {
                _0x14be82 = false;
                if (_0x162bae.length) {
                  _0x14be82 |= _0x483dde.equalAnyTitle([_0x12d2bd[0x0].orig_title, _0x12d2bd[0x0].title], _0x162bae);
                }
                if (_0x11a9e3) {
                  _0x14be82 |= _0x483dde.equalAnyTitle([_0x12d2bd[0x0].title, _0x12d2bd[0x0].orig_title], [_0x11a9e3]);
                }
              }
            }
            if (_0x12d2bd.length == 0x1 && _0x14be82) {
              _0xec14d9(_0x12d2bd[0x0].link);
            } else {
              if (_0x12d9e4.length) {
                _0x1c9648.wait_similars = true;
                _0x12d9e4.forEach(function (_0x33851e) {
                  _0x33851e.is_similars = true;
                });
                if (_0x447324) {
                  _0x483dde.similars(_0x12d9e4, _0x2be1db, {
                    'items': [],
                    'query': _0x2c534a,
                    'page': 0x1
                  });
                } else {
                  _0x483dde.similars(_0x12d9e4);
                }
                _0x483dde.loading(false);
              } else {
                _0x483dde.emptyForQuery(_0x11a9e3);
              }
            }
          } else {
            if (_0x2c09bd) {
              _0x483dde.empty(_0x2c09bd);
            } else {
              _0x483dde.emptyForQuery(_0x11a9e3);
            }
          }
        };
        var _0x231089 = function _0x5c3c00(_0x55010c, _0x19922b, _0x17abe1) {
          var _0xca32d5 = 'q=' + encodeURIComponent(_0x55010c);
          _0x217938.clear();
          _0x217938.timeout(0x2710);
          _0x217938.native(_0x483dde.proxyLink(_0x24c4c1, _0x4e70de, _0x56008c, "enc2t"), function (_0x889e88) {
            _0x889e88 = (_0x889e88 || '').replace(/\n/g, '');
            _0x32c715(_0x889e88);
            var _0x378549 = _0x889e88.match(/<li><a href=.*?<\/li>/g);
            var _0x5ad327 = _0x889e88.indexOf("<a class=\"b-search__live_all\"") !== -0x1;
            if (_0x378549 && _0x378549.length) {
              _0x19922b = _0x19922b.concat(_0x378549);
            }
            if (_0x17abe1) {
              _0x17abe1(_0x19922b, _0x5ad327, _0x55010c);
            }
          }, function (_0x3bfc8c, _0x3f4032) {
            if (_0x4e70de && _0x3bfc8c.status == 0x193 && (!_0x3bfc8c.responseText || _0x3bfc8c.responseText.indexOf("<div>105</div>") !== -0x1)) {
              // Включаем прокси HDrezka только при первом запуске.
// Сохранённый выбор пользователя больше не перезаписывается.
if (Lampa.Storage.get("online_mod_proxy_rezka2", '') === '') {
  Lampa.Storage.set("online_mod_proxy_rezka2", "false");
}
            }
            if (_0x3bfc8c.status == 0x193 && _0x3bfc8c.responseText) {
              var _0x1222c9 = (_0x3bfc8c.responseText || '').replace(/\n/g, '');
              _0x32c715(_0x1222c9);
            }
            if (_0x2c09bd) {
              _0x483dde.empty(_0x2c09bd);
            } else {
              _0x483dde.empty(_0x217938.errorDecode(_0x3bfc8c, _0x3f4032));
            }
          }, _0xca32d5, {
            'dataType': "text",
            'withCredentials': _0xf201ae,
            'headers': _0x506a93
          });
        };
        var _0x306835 = function _0x288ea1() {
          _0x231089(_0x483dde.cleanTitle(_0x11a9e3), [], function (_0x34a634, _0x5f4273, _0x489119) {
            if (_0x34a634 && _0x34a634.length && _0x34a634.forEach) {
              _0x123137(_0x34a634, _0x5f4273, _0x489119);
            } else {
              _0x123137([]);
            }
          });
        };
        _0x306835();
      };
      this.extendChoice = function (_0x155658) {
        Lampa.Arrays.extend(_0x5ed9f4, _0x155658, true);
      };
      this.reset = function () {
        _0x483dde.reset();
        _0x5ed9f4 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': '',
          'season_id': ''
        };
        _0x483dde.loading(true);
        _0x17d90a(_0x21e713);
        _0x483dde.saveChoice(_0x5ed9f4);
      };
      this.filter = function (_0x566c45, _0x27efac, _0x3156d0) {
        _0x5ed9f4[_0x27efac.stype] = _0x3156d0.index;
        if (_0x27efac.stype == "voice") {
          _0x5ed9f4.voice_name = _0xebd81c.voice[_0x3156d0.index];
        }
        if (_0x27efac.stype == "season") {
          _0x5ed9f4.season_id = _0xebd81c.season_id[_0x3156d0.index];
        }
        _0x483dde.reset();
        _0x483dde.loading(true);
        _0x17d90a(_0x21e713);
        _0x483dde.saveChoice(_0x5ed9f4);
        setTimeout(_0x483dde.closeFilter, 0xa);
      };
      this.destroy = function () {
        _0x217938.clear();
        _0x170645 = null;
      };
      function _0xec14d9(_0x45a052) {
        _0x45a052 = _0x483dde.fixLink(_0x45a052, _0x4c6a36);
        _0x217938.clear();
        _0x217938.timeout(0x2710);
        _0x217938.native(_0x483dde.proxyLink(_0x45a052, _0x4e70de, _0x56008c, "enc2t"), function (_0x157c0e) {
          _0xfaa9f6(_0x157c0e);
          if (_0x170645.film_id) {
            _0x17d90a(_0x21e713);
          } else {
            if (_0x2c09bd) {
              _0x483dde.empty(_0x2c09bd);
            } else {
              _0x483dde.emptyForQuery(_0x11a9e3);
            }
          }
        }, function (_0x14638b, _0x89813c) {
          _0x483dde.empty(_0x217938.errorDecode(_0x14638b, _0x89813c));
        }, false, {
          'dataType': "text",
          'withCredentials': _0xf201ae,
          'headers': _0x506a93
        });
      }
      function _0x21e713() {
        _0x483dde.loading(false);
        _0x1a8dc3();
        _0x67ee57(_0xd187e5());
      }
      function _0xfaa9f6(_0x3d5350) {
        _0x170645.voice = [];
        _0x170645.season = [];
        _0x170645.episode = [];
        _0x170645.voice_data = {};
        _0x170645.is_series = false;
        _0x170645.film_id = '';
        _0x170645.favs = '';
        _0x3d5350 = (_0x3d5350 || '').replace(/\n/g, '');
        _0x32c715(_0x3d5350);
        var _0x4a31b0 = _0x3d5350.match(/<h2>В переводе<\/h2>:<\/td>\s*(<td>.*?<\/td>)/);
        var _0x4998c8 = _0x3d5350.match(/\.initCDNSeriesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
        var _0x552034 = _0x3d5350.match(/\.initCDNMoviesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/);
        var _0x336757;
        if (_0x4a31b0) {
          _0x336757 = $(_0x4a31b0[0x1]).text().trim();
        }
        if (!_0x336757) {
          _0x336757 = "Оригинал";
        }
        var _0xaed9c5;
        var _0x511724;
        var _0x58baa8;
        if (_0x4998c8) {
          _0x170645.is_series = true;
          _0x170645.film_id = _0x4998c8[0x1];
          _0xaed9c5 = {
            'name': _0x336757,
            'id': _0x4998c8[0x2]
          };
          _0x511724 = {
            'name': "Сезон " + _0x4998c8[0x3],
            'id': _0x4998c8[0x3]
          };
          _0x58baa8 = {
            'name': "Серия " + _0x4998c8[0x4],
            'season_id': _0x4998c8[0x3],
            'episode_id': _0x4998c8[0x4]
          };
        } else if (_0x552034) {
          _0x170645.film_id = _0x552034[0x1];
          _0xaed9c5 = {
            'name': _0x336757,
            'id': _0x552034[0x2],
            'is_camrip': _0x552034[0x3],
            'is_ads': _0x552034[0x4],
            'is_director': _0x552034[0x5]
          };
        }
        var _0x52b5af = _0x3d5350.match(/(<ul id="translators-list".*?<\/ul>)/);
        if (_0x52b5af) {
          var _0x395b37 = $(_0x52b5af[0x1]);
          $('.b-translator__item', _0x395b37).each(function () {
            var _0x1fb1ae = ($(this).attr("title") || $(this).text() || '').trim();
            $("img", this).each(function () {
              var _0x5d5689 = ($(this).attr('title') || $(this).attr("alt") || '').trim();
              if (_0x5d5689 && _0x1fb1ae.indexOf(_0x5d5689) == -0x1) {
                _0x1fb1ae += " (" + _0x5d5689 + ')';
              }
            });
            _0x170645.voice.push({
              'name': _0x1fb1ae,
              'id': $(this).attr("data-translator_id"),
              'is_camrip': $(this).attr("data-camrip"),
              'is_ads': $(this).attr("data-ads"),
              'is_director': $(this).attr("data-director")
            });
          });
        }
        if (!_0x170645.voice.length && _0xaed9c5) {
          _0x170645.voice.push(_0xaed9c5);
        }
        if (_0x170645.is_series) {
          var _0xf12425 = _0x3d5350.match(/(<ul id="simple-seasons-tabs".*?<\/ul>)/);
          if (_0xf12425) {
            var _0x2af1ac = $(_0xf12425[0x1]);
            $('.b-simple_season__item', _0x2af1ac).each(function () {
              _0x170645.season.push({
                'name': $(this).text(),
                'id': $(this).attr("data-tab_id")
              });
            });
          }
          if (!_0x170645.season.length && _0x511724) {
            _0x170645.season.push(_0x511724);
          }
          var _0x125c7e = _0x3d5350.match(/(<div id="simple-episodes-tabs".*?<\/div>)/);
          if (_0x125c7e) {
            var _0x4446e4 = $(_0x125c7e[0x1]);
            $('.b-simple_episode__item', _0x4446e4).each(function () {
              _0x170645.episode.push({
                'name': $(this).text(),
                'season_id': $(this).attr("data-season_id"),
                'episode_id': $(this).attr("data-episode_id")
              });
            });
          }
          if (!_0x170645.episode.length && _0x58baa8) {
            _0x170645.episode.push(_0x58baa8);
          }
        }
        var _0x1da420 = _0x3d5350.match(/<input type="hidden" id="ctrl_favs" value="([^"]*)"/);
        if (_0x1da420) {
          _0x170645.favs = _0x1da420[0x1];
        }
        var _0x28517b = _0x3d5350.match(/class="b-player__restricted__block_message"/);
        if (_0x28517b) {
          _0x170645.blocked = true;
        }
      }
      function _0x17d90a(_0x1af95a) {
        if (_0x170645.is_series) {
          _0x4037b7();
          if (_0x170645.voice[_0x5ed9f4.voice]) {
            var _0x134c3d = _0x170645.voice[_0x5ed9f4.voice].id;
            var _0x57d54e = _0x170645.voice_data[_0x134c3d];
            if (_0x57d54e) {
              _0x170645.season = _0x57d54e.season;
              _0x170645.episode = _0x57d54e.episode;
            } else {
              var _0x450572 = _0x4c6a36 + "ajax/get_cdn_series/?t=" + Date.now();
              var _0x2a90d8 = "id=" + encodeURIComponent(_0x170645.film_id);
              _0x2a90d8 += '&translator_id=' + encodeURIComponent(_0x134c3d);
              _0x2a90d8 += '&favs=' + encodeURIComponent(_0x170645.favs);
              _0x2a90d8 += "&action=get_episodes";
              _0x217938.clear();
              _0x217938.timeout(0x2710);
              _0x217938.native(_0x483dde.proxyLink(_0x450572, _0x4e70de, _0x56008c, "enc2t"), function (_0x34503c) {
                _0x295d9c(_0x34503c, _0x134c3d);
                _0x1af95a();
              }, function (_0x506f41, _0x240754) {
                _0x483dde.empty(_0x217938.errorDecode(_0x506f41, _0x240754));
              }, _0x2a90d8, {
                'withCredentials': _0xf201ae,
                'headers': _0x506a93
              });
              return;
            }
          }
        }
        _0x1af95a();
      }
      function _0x295d9c(_0x41a03e, _0x555db6) {
        var _0xbce827 = {
          'season': [],
          'episode': []
        };
        if (_0x41a03e && _0x41a03e.seasons) {
          var _0x3ca640 = $("<ul>" + _0x41a03e.seasons + '</ul>');
          $(".b-simple_season__item", _0x3ca640).each(function () {
            _0xbce827.season.push({
              'name': $(this).text(),
              'id': $(this).attr("data-tab_id")
            });
          });
        }
        if (_0x41a03e && _0x41a03e.episodes) {
          var _0x1d8f56 = $("<div>" + _0x41a03e.episodes + '</div>');
          $(".b-simple_episode__item", _0x1d8f56).each(function () {
            _0xbce827.episode.push({
              'name': $(this).text(),
              'translator_id': _0x555db6,
              'season_id': $(this).attr("data-season_id"),
              'episode_id': $(this).attr("data-episode_id")
            });
          });
        }
        _0x170645.voice_data[_0x555db6] = _0xbce827;
        _0x170645.season = _0xbce827.season;
        _0x170645.episode = _0xbce827.episode;
      }
      function _0x4037b7() {
        var _0x1eaeca = _0x170645.is_series ? _0x170645.voice.map(function (_0x4c5d09) {
          return _0x4c5d09.name;
        }) : [];
        if (!_0x1eaeca[_0x5ed9f4.voice]) {
          _0x5ed9f4.voice = 0x0;
        }
        if (_0x5ed9f4.voice_name) {
          var _0x1f26bd = _0x1eaeca.indexOf(_0x5ed9f4.voice_name);
          if (_0x1f26bd == -0x1) {
            _0x5ed9f4.voice = 0x0;
          } else if (_0x1f26bd !== _0x5ed9f4.voice) {
            _0x5ed9f4.voice = _0x1f26bd;
          }
        }
      }
      function _0x1a8dc3() {
        _0xebd81c = {
          'season': _0x170645.season.map(function (_0x210a33) {
            return _0x210a33.name;
          }),
          'season_id': _0x170645.season.map(function (_0x2982f6) {
            return _0x2982f6.id;
          }),
          'voice': _0x170645.is_series ? _0x170645.voice.map(function (_0x158ccd) {
            return _0x158ccd.name;
          }) : []
        };
        if (!_0xebd81c.season[_0x5ed9f4.season]) {
          _0x5ed9f4.season = 0x0;
        }
        if (!_0xebd81c.voice[_0x5ed9f4.voice]) {
          _0x5ed9f4.voice = 0x0;
        }
        if (_0x5ed9f4.voice_name) {
          var _0x36096b = _0xebd81c.voice.indexOf(_0x5ed9f4.voice_name);
          if (_0x36096b == -0x1) {
            _0x5ed9f4.voice = 0x0;
          } else if (_0x36096b !== _0x5ed9f4.voice) {
            _0x5ed9f4.voice = _0x36096b;
          }
        }
        if (_0x5ed9f4.season_id) {
          var _0x1f5c4a = _0xebd81c.season_id.indexOf(_0x5ed9f4.season_id);
          if (_0x1f5c4a == -0x1) {
            _0x5ed9f4.season = 0x0;
          } else if (_0x1f5c4a !== _0x5ed9f4.season) {
            _0x5ed9f4.season = _0x1f5c4a;
          }
        }
        _0x483dde.filter(_0xebd81c, _0x5ed9f4);
      }
      function _0x41251c(_0x351b62, _0x2d7666, _0x9fba2d) {
        if (_0x351b62.stream) {
          return _0x2d7666(_0x351b62);
        }
        var _0x375cbc = _0x4c6a36 + "ajax/get_cdn_series/?t=" + Date.now();
        var _0x4f2f42 = 'id=' + encodeURIComponent(_0x170645.film_id);
        if (_0x170645.is_series) {
          _0x4f2f42 += "&translator_id=" + encodeURIComponent(_0x351b62.media.translator_id);
          _0x4f2f42 += "&season=" + encodeURIComponent(_0x351b62.media.season_id);
          _0x4f2f42 += "&episode=" + encodeURIComponent(_0x351b62.media.episode_id);
          _0x4f2f42 += "&favs=" + encodeURIComponent(_0x170645.favs);
          _0x4f2f42 += '&action=get_stream';
        } else {
          _0x4f2f42 += "&translator_id=" + encodeURIComponent(_0x351b62.media.id);
          _0x4f2f42 += "&is_camrip=" + encodeURIComponent(_0x351b62.media.is_camrip);
          _0x4f2f42 += "&is_ads=" + encodeURIComponent(_0x351b62.media.is_ads);
          _0x4f2f42 += "&is_director=" + encodeURIComponent(_0x351b62.media.is_director);
          _0x4f2f42 += "&favs=" + encodeURIComponent(_0x170645.favs);
          _0x4f2f42 += "&action=get_movie";
        }
        _0x217938.clear();
        _0x217938.timeout(0x2710);
        _0x217938.native(_0x483dde.proxyLink(_0x375cbc, _0x4e70de, _0x56008c, "enc2t"), function (_0x2e0e11) {
          if (_0x2e0e11 && _0x2e0e11.url) {
            var _0xdd27ff = _0x26ff9e(_0x2e0e11.url);
            var _0x25fbe1 = '';
            var _0x512e70 = false;
            var _0x128342 = _0x65dc9d(_0xdd27ff);
            if (_0x128342 && _0x128342.length) {
              _0x25fbe1 = _0x128342[0x0].file;
              var _0x3992bb = _0x2e0e11.premium_content || false;
              var _0x12e46e = '';
              _0x512e70 = {};
              _0x128342.forEach(function (_0x1540e2) {
                if (_0x1540e2.label !== "1080p Ultra") {
                  if (_0x12e46e !== '' && _0x12e46e !== _0x1540e2.file) {
                    _0x3992bb = false;
                  }
                  _0x12e46e = _0x1540e2.file;
                }
                _0x512e70[_0x1540e2.label] = _0x1540e2.file;
              });
              if (_0x3992bb) {
                _0x9fba2d("Перевод доступен только с HDrezka Premium");
                return;
              }
            }
            if (_0x25fbe1) {
              _0x351b62.stream = _0x25fbe1;
              _0x351b62.qualitys = _0x512e70;
              _0x351b62.subtitles = _0x5de528(_0x2e0e11.subtitle);
              _0x2d7666(_0x351b62);
            } else {
              _0x9fba2d();
            }
          } else {
            _0x9fba2d();
          }
        }, function (_0x46b22c, _0x32cf97) {
          _0x9fba2d();
        }, _0x4f2f42, {
          'withCredentials': _0xf201ae,
          'headers': _0x506a93
        });
      }
      function _0x26ff9e(_0x355eea) {
        if (!(_0x355eea.lastIndexOf('#', 0x0) === 0x0)) {
          return _0x355eea;
        }
        var _0x40c126 = function _0x566931(_0x4038b4) {
          return btoa(encodeURIComponent(_0x4038b4).replace(/%([0-9A-F]{2})/g, function (_0x2b5929, _0x54df4e) {
            return String.fromCharCode('0x' + _0x54df4e);
          }));
        };
        var _0x51f571 = function _0x286539(_0x17f8d4) {
          return decodeURIComponent(atob(_0x17f8d4).split('').map(function (_0x260146) {
            return '%' + ('00' + _0x260146.charCodeAt(0x0).toString(0x10)).slice(-0x2);
          }).join(''));
        };
        var _0x53b83c = ["$$!!@$$@^!@#$$@", "@@@@@!##!^^^", "####^!!##!@@", '^^^!@##!!##', "$$#!!@#!@##"];
        var _0x12906a = _0x355eea.substring(0x2);
        _0x53b83c.forEach(function (_0x1cd672) {
          _0x12906a = _0x12906a.replace('//_//' + _0x40c126(_0x1cd672), '');
        });
        try {
          _0x12906a = _0x51f571(_0x12906a);
        } catch (_0x3e9d49) {
          _0x12906a = '';
        }
        return _0x12906a;
      }
      function _0x65dc9d(_0x29ed4d) {
        if (!_0x29ed4d) {
          return [];
        }
        try {
          var _0x425b57 = _0x483dde.parsePlaylist(_0x29ed4d).map(function (_0x3472c1) {
            var _0x220587 = NaN;
            var _0x259ae6 = _0x3472c1.label.match(/(\d\d\d+)/);
            if (_0x259ae6) {
              _0x220587 = parseInt(_0x259ae6[0x1]);
            } else {
              _0x259ae6 = _0x3472c1.label.match(/(\d+)K/);
              if (_0x259ae6) {
                _0x220587 = parseInt(_0x259ae6[0x1]) * 0x3e8;
              }
            }
            var _0x580110;
            if (_0x59b0a8) {
              _0x580110 = _0x3472c1.links.filter(function (_0x31813f) {
                return /\.mp4$/i.test(_0x31813f);
              });
            } else {
              _0x580110 = _0x3472c1.links.filter(function (_0x1b2cd6) {
                return /\.m3u8$/i.test(_0x1b2cd6);
              });
            }
            if (!_0x580110.length) {
              _0x580110 = _0x3472c1.links;
            }
            var _0x1536f5 = _0x580110[0x0] || '';
            _0x1536f5 = _0x483dde.fixLinkProtocol(_0x1536f5, _0x40ad53, "full");
            return {
              'label': _0x3472c1.label,
              'quality': _0x220587,
              'file': _0x483dde.proxyStream(_0x1536f5, "rezka2")
            };
          });
          _0x425b57.sort(function (_0x2a4ff8, _0x187e6f) {
            if (_0x187e6f.quality > _0x2a4ff8.quality) {
              return 0x1;
            }
            if (_0x187e6f.quality < _0x2a4ff8.quality) {
              return -0x1;
            }
            if (_0x187e6f.label > _0x2a4ff8.label) {
              return 0x1;
            }
            if (_0x187e6f.label < _0x2a4ff8.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x425b57;
        } catch (_0xf94148) {}
        return [];
      }
      function _0x5de528(_0x4f1460) {
        var _0x2e9a8a = [];
        if (_0x4f1460) {
          _0x2e9a8a = _0x483dde.parsePlaylist(_0x4f1460).map(function (_0xab164e) {
            var _0x4b2113 = _0xab164e.links[0x0] || '';
            _0x4b2113 = _0x483dde.fixLinkProtocol(_0x4b2113, _0x40ad53, "full");
            return {
              'label': _0xab164e.label,
              'url': _0x483dde.processSubs(_0x4b2113)
            };
          });
        }
        return _0x2e9a8a.length ? _0x2e9a8a : false;
      }
      function _0xd187e5() {
        var _0x5a20da = [];
        if (_0x170645.is_series) {
          var _0x5c2274 = _0xebd81c.season[_0x5ed9f4.season];
          var _0x35677f;
          _0x170645.season.forEach(function (_0x5f0f11) {
            if (_0x5f0f11.name == _0x5c2274) {
              _0x35677f = _0x5f0f11.id;
            }
          });
          var _0x22e71d = _0xebd81c.voice[_0x5ed9f4.voice];
          _0x170645.episode.forEach(function (_0x4fddc9) {
            if (_0x4fddc9.season_id == _0x35677f) {
              _0x5a20da.push({
                'title': _0x483dde.formatEpisodeTitle(_0x4fddc9.season_id, null, _0x4fddc9.name),
                'quality': "360p ~ 1080p",
                'info': " / " + _0x22e71d,
                'season': parseInt(_0x4fddc9.season_id),
                'episode': parseInt(_0x4fddc9.episode_id),
                'media': _0x4fddc9
              });
            }
          });
        } else {
          _0x170645.voice.forEach(function (_0x74e144) {
            _0x5a20da.push({
              'title': _0x74e144.name || _0x11a9e3,
              'quality': "360p ~ 1080p",
              'info': '',
              'media': _0x74e144
            });
          });
        }
        return _0x5a20da;
      }
      function _0x67ee57(_0x4f63c2) {
        _0x483dde.reset();
        var _0x1dad15 = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x5899b0 = _0x483dde.getLastEpisode(_0x4f63c2);
        _0x4f63c2.forEach(function (_0x265ea2) {
          if (_0x265ea2.season) {
            _0x265ea2.translate_episode_end = _0x5899b0;
            _0x265ea2.translate_voice = _0xebd81c.voice[_0x5ed9f4.voice];
          }
          var _0x479bf2 = Lampa.Utils.hash(_0x265ea2.season ? [_0x265ea2.season, _0x265ea2.season > 0xa ? ':' : '', _0x265ea2.episode, _0x2dcc81.movie.original_title].join('') : _0x2dcc81.movie.original_title);
          var _0x51b460 = Lampa.Timeline.view(_0x479bf2);
          var _0x5983bd = Lampa.Template.get("online_mod", _0x265ea2);
          var _0x34e093 = Lampa.Utils.hash(_0x265ea2.season ? [_0x265ea2.season, _0x265ea2.season > 0xa ? ':' : '', _0x265ea2.episode, _0x2dcc81.movie.original_title, _0xebd81c.voice[_0x5ed9f4.voice]].join('') : _0x2dcc81.movie.original_title + _0x265ea2.title);
          _0x265ea2.timeline = _0x51b460;
          _0x5983bd.append(Lampa.Timeline.render(_0x51b460));
          if (Lampa.Timeline.details) {
            _0x5983bd.find('.online__quality').append(Lampa.Timeline.details(_0x51b460, " / "));
          }
          if (_0x1dad15.indexOf(_0x34e093) !== -0x1) {
            _0x5983bd.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x5983bd.on('hover:enter', function () {
            if (_0x265ea2.loading) {
              return;
            }
            if (_0x2dcc81.movie.id) {
              Lampa.Favorite.add("history", _0x2dcc81.movie, 0x64);
            }
            _0x265ea2.loading = true;
            _0x41251c(_0x265ea2, function (_0x9c57e) {
              _0x9c57e.loading = false;
              var _0x356319 = {
                'url': _0x483dde.getDefaultQuality(_0x9c57e.qualitys, _0x9c57e.stream),
                'quality': _0x483dde.renameQualityMap(_0x9c57e.qualitys),
                'subtitles': _0x9c57e.subtitles,
                'timeline': _0x9c57e.timeline,
                'title': _0x9c57e.season ? _0x9c57e.title : _0x11a9e3 + (_0x9c57e.title == _0x11a9e3 ? '' : " / " + _0x9c57e.title)
              };
              Lampa.Player.play(_0x356319);
              if (_0x9c57e.season && Lampa.Platform.version) {
                var _0xccd192 = [];
                _0x4f63c2.forEach(function (_0x3da582) {
                  if (_0x3da582 == _0x9c57e) {
                    _0xccd192.push(_0x356319);
                  } else {
                    var _0x5cb352 = {
                      'url': function _0x120b70(_0x354b04) {
                        _0x41251c(_0x3da582, function (_0x563d84) {
                          _0x5cb352.url = _0x483dde.getDefaultQuality(_0x563d84.qualitys, _0x563d84.stream);
                          _0x5cb352.quality = _0x483dde.renameQualityMap(_0x563d84.qualitys);
                          _0x5cb352.subtitles = _0x563d84.subtitles;
                          _0x354b04();
                        }, function () {
                          _0x5cb352.url = '';
                          _0x354b04();
                        });
                      },
                      'timeline': _0x3da582.timeline,
                      'title': _0x3da582.title
                    };
                    _0xccd192.push(_0x5cb352);
                  }
                });
                Lampa.Player.playlist(_0xccd192);
              } else {
                Lampa.Player.playlist([_0x356319]);
              }
              if (_0x1dad15.indexOf(_0x34e093) == -0x1) {
                _0x1dad15.push(_0x34e093);
                _0x5983bd.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x1dad15);
              }
            }, function (_0x1c017e) {
              _0x265ea2.loading = false;
              Lampa.Noty.show(_0x1c017e || Lampa.Lang.translate(_0x170645.blocked ? "online_mod_blockedlink" : "online_mod_nolink"));
            });
          });
          _0x483dde.append(_0x5983bd);
          _0x483dde.contextmenu({
            'item': _0x5983bd,
            'view': _0x51b460,
            'viewed': _0x1dad15,
            'hash_file': _0x34e093,
            'element': _0x265ea2,
            'file': function _0x18b5a6(_0x1571e8) {
              _0x41251c(_0x265ea2, function (_0x1d9c16) {
                _0x1571e8({
                  'file': _0x1d9c16.stream,
                  'quality': _0x1d9c16.qualitys
                });
              }, function (_0x44d6cd) {
                Lampa.Noty.show(_0x44d6cd || Lampa.Lang.translate(_0x170645.blocked ? "online_mod_blockedlink" : "online_mod_nolink"));
              });
            }
          });
        });
        _0x483dde.start(true);
      }
    }
    function _0x56654d(_0x11e26d, _0x534687) {
      var _0x4d251f = new Lampa.Reguest();
      var _0x4ebf49 = [];
      var _0x1c02c4 = _0x534687;
      var _0x4aecec = '';
      var _0x1dec59 = false;
      var _0x14fd66 = '';
      var _0x51cda0 = '';
      var _0x1e7d37 = Lampa.Storage.field("online_mod_prefer_mp4") === true;
      var _0xe5bb70 = _0x1e7d37 ? 'mp4' : 'hls';
      var _0x56a7f0 = _0x11e26d.proxy("kinobase");
      var _0x41ce0e = _0x56a7f0 ? "https://kinobase.org" : _0x59443e.kinobaseMirror();
      var _0x175833 = _0x41ce0e + '/';
      var _0xa1ae5e = !(_0x56a7f0 || Lampa.Platform.is("android"));
      var _0x8ab7ef = _0x59443e.baseUserAgent();
      var _0x9b9b0c = Lampa.Storage.get("online_mod_kinobase_cookie", '') + '';
      var _0x32e17f = '';
      var _0xe04823 = _0x59443e.decodeSecret([0x6e, 0x3e, 0x16, 0x13, 0x42, 0x49, 0x33, 0x7, 0x1b, 0x3b, 0x38, 0x69, 0x5e, 0x56, 0x4a, 0x5c, 0x32, 0x1b, 0x11, 0x2c, 0x25, 0x24, 0xb, 0x5e, 0x11, 0x59, 0x35, 0x1c, 0x2, 0x2c, 0x7d, 0x67, 0x45, 0x5, 0x1, 0x48, 0x2e, 0x5, 0x6, 0x6a, 0x60, 0x6b, 0x16, 0x2, 0x10, 0x16, 0x67, 0x25, 0x3e, 0x19, 0x15, 0xe, 0x37, 0x29, 0x36, 0x63, 0x17, 0x30, 0x5e, 0x78, 0xa, 0x2, 0x29, 0x33, 0x3d, 0x6e, 0x1e, 0x25, 0x37, 0x74, 0x6c, 0x3e, 0x16, 0x13, 0x10, 0x16, 0x67, 0x3, 0x1d, 0x3c, 0x65, 0x30, 0x45, 0x0, 0x3, 0x48, 0x67, 0x7, 0x17, 0x2b, 0x6c, 0x76, 0x45, 0x2d, 0x3f, 0x1, 0x67, 0x3, 0x13, 0x2a, 0x6c, 0x3b, 0x9, 0x17, 0x1b, 0x5f, 0x35, 0x55, 0x4f, 0x78, 0x22, 0x3e, 0x9, 0x1a, 0x59, 0x1a, 0x31, 0x14, 0x0, 0x78, 0x28, 0x24, 0x6, 0x3, 0xf, 0x5f, 0x29, 0x1, 0x52, 0x65, 0x6c, 0x63, 0xb, 0x13, 0x15, 0x1a, 0x3, 0x3a, 0x3f, 0x8, 0x2d, 0x39, 0x16, 0x13, 0x10, 0x13, 0x69, 0x5, 0x13, 0x2a, 0x3f, 0x2e, 0x23, 0x4, 0xd, 0x57, 0x14, 0x1, 0x0, 0x31, 0x22, 0x2c, 0x4d, 0x54, 0x5e, 0x52, 0x22, 0x14, 0x16, 0x66, 0x70, 0x64, 0xd, 0x13, 0x3, 0x5e, 0x79, 0x49, 0x10, 0x37, 0x28, 0x32, 0x5b, 0x4a, 0x4d, 0x58, 0x28, 0x11, 0xb, 0x66, 0x6e, 0x67, 0x45, 0x54, 0x16, 0x5f, 0x3f, 0x1, 0x5d, 0x30, 0x38, 0x26, 0x9, 0x54, 0x4b, 0x1, 0x67, 0x3, 0x13, 0x2a, 0x6c, 0x3b, 0x4, 0x3, 0x11, 0x5f, 0x18, 0x1, 0x1b, 0x35, 0x29, 0x6b, 0x58, 0x56, 0x52, 0x1, 0x67, 0x3, 0x13, 0x2a, 0x6c, 0x2d, 0x33, 0x19, 0xb, 0x5e, 0x67, 0x48, 0x52, 0x3e, 0x39, 0x25, 0x6, 0x2, 0xb, 0x55, 0x29, 0x5d, 0x5b, 0x23, 0x31, 0x70, 0x45, 0x0, 0x3, 0x48, 0x67, 0x13, 0x3b, 0x36, 0x38, 0x6b, 0x58, 0x56, 0x4, 0x4f, 0x29, 0x16, 0x6, 0x31, 0x23, 0x25, 0x4d, 0x5f, 0x19, 0x1a, 0x35, 0x10, 0x6, 0x2d, 0x3e, 0x25, 0x45, 0x47, 0x59, 0x1a, 0x3a, 0x4e, 0x52, 0x2e, 0x2d, 0x39, 0x45, 0x2e, 0x2f, 0x76, 0xf, 0x1, 0x6, 0x28, 0x1e, 0x2e, 0x14, 0x3, 0x7, 0x49, 0x33, 0x55, 0x4f, 0x78, 0x2a, 0x3e, 0xb, 0x15, 0x16, 0x53, 0x28, 0x1b, 0x52, 0x0, 0x1, 0x7, 0x2d, 0x2, 0x16, 0x4a, 0x15, 0x10, 0x3, 0x2d, 0x29, 0x38, 0x11, 0x5e, 0x4b, 0x41, 0x67, 0x1, 0x1a, 0x31, 0x3f, 0x65, 0xa, 0x6, 0x7, 0x54, 0x67, 0x48, 0x52, 0x3e, 0x39, 0x25, 0x6, 0x2, 0xb, 0x55, 0x29, 0x5d, 0x1f, 0x74, 0x6c, 0x3e, 0x4c, 0xd, 0x42, 0x48, 0x22, 0x6, 0x5c, 0x28, 0x39, 0x38, 0xd, 0x5e, 0x19, 0x1a, 0x32, 0x7, 0x1e, 0x62, 0x6c, 0x3e, 0x45, 0xb, 0x4b, 0x1, 0x67, 0x8, 0x49, 0x78, 0x38, 0x23, 0xc, 0x5, 0x4c, 0x49, 0x22, 0x1b, 0x16, 0x78, 0x71, 0x6b, 0x3, 0x3, 0xc, 0x59, 0x33, 0x1c, 0x1d, 0x36, 0x64, 0x62, 0x1e, 0xb, 0x59, 0x1a, 0x3a, 0x4e, 0x52, 0x2e, 0x2d, 0x39, 0x45, 0x26, 0xe, 0x5b, 0x3e, 0x10, 0x0, 0x32, 0x3f, 0x6b, 0x58, 0x56, 0x4, 0x4f, 0x29, 0x16, 0x6, 0x31, 0x23, 0x25, 0x45, 0x26, 0xe, 0x5b, 0x3e, 0x10, 0x0, 0x32, 0x3f, 0x63, 0xa, 0x6, 0x16, 0x13, 0x3c, 0x55, 0x2, 0x34, 0x2d, 0x32, 0x0, 0x4, 0x42, 0x7, 0x67, 0x1a, 0x2, 0x2c, 0x77, 0x6b, 0x18, 0x4d, 0x42, 0x4c, 0x26, 0x7, 0x52, 0x3a, 0x2d, 0x20, 0x54, 0x44, 0x51, 0x1a, 0x7a, 0x55, 0x9, 0x78, 0x2d, 0x21, 0x4, 0xe, 0x31, 0x5f, 0x33, 0x0, 0x2, 0x62, 0x6c, 0x6f, 0x4b, 0x17, 0x8, 0x5b, 0x3f, 0x26, 0x17, 0x2c, 0x39, 0x3b, 0x49, 0x56, 0x1, 0x55, 0x28, 0x1e, 0x1b, 0x3d, 0x76, 0x6b, 0x41, 0x58, 0x1, 0x55, 0x28, 0x1e, 0x1b, 0x3d, 0x60, 0x6b, 0x4, 0x1c, 0x3, 0x42, 0x7d, 0x55, 0x56, 0x76, 0x2d, 0x21, 0x4, 0xe, 0x4e, 0x1a, 0x20, 0x10, 0x6, 0x62, 0x6c, 0x6f, 0x4b, 0x11, 0x7, 0x4e, 0x6b, 0x55, 0x2, 0x37, 0x3f, 0x3f, 0x5f, 0x56, 0x46, 0x14, 0x37, 0x1a, 0x1, 0x2c, 0x60, 0x6b, 0x2, 0x13, 0x16, 0x69, 0x24, 0x7, 0x1b, 0x28, 0x38, 0x71, 0x45, 0x52, 0x4c, 0x5d, 0x22, 0x1, 0x21, 0x3b, 0x3e, 0x22, 0x15, 0x2, 0x4e, 0x1a, 0x34, 0x10, 0x6, 0xc, 0x25, 0x26, 0x0, 0x19, 0x17, 0x4e, 0x7d, 0x55, 0x5, 0x31, 0x22, 0x2f, 0xa, 0x1, 0x4c, 0x49, 0x22, 0x1, 0x26, 0x31, 0x21, 0x2e, 0xa, 0x3, 0x16, 0x16, 0x67, 0x16, 0x1e, 0x3d, 0x2d, 0x39, 0x31, 0x1f, 0xf, 0x5f, 0x28, 0x0, 0x6, 0x62, 0x6c, 0x3c, 0xc, 0x18, 0x6, 0x55, 0x30, 0x5b, 0x11, 0x34, 0x29, 0x2a, 0x17, 0x22, 0xb, 0x57, 0x22, 0x1a, 0x7, 0x2c, 0x60, 0x6b, 0x16, 0x13, 0x16, 0x73, 0x29, 0x1, 0x17, 0x2a, 0x3a, 0x2a, 0x9, 0x4c, 0x42, 0x4d, 0x2e, 0x1b, 0x16, 0x37, 0x3b, 0x65, 0x16, 0x13, 0x16, 0x73, 0x29, 0x1, 0x17, 0x2a, 0x3a, 0x2a, 0x9, 0x5a, 0x42, 0x59, 0x2b, 0x10, 0x13, 0x2a, 0x5, 0x25, 0x11, 0x13, 0x10, 0x4c, 0x26, 0x19, 0x48, 0x78, 0x3b, 0x22, 0xb, 0x12, 0xd, 0x4d, 0x69, 0x16, 0x1e, 0x3d, 0x2d, 0x39, 0x2c, 0x18, 0x16, 0x5f, 0x35, 0x3, 0x13, 0x34, 0x60, 0x6b, 0x6, 0x19, 0xc, 0x49, 0x28, 0x19, 0x17, 0x62, 0x6c, 0x3c, 0xc, 0x18, 0x6, 0x55, 0x30, 0x5b, 0x11, 0x37, 0x22, 0x38, 0xa, 0x1a, 0x7, 0x16, 0x67, 0x25, 0x1e, 0x39, 0x35, 0x2e, 0x17, 0x1c, 0x11, 0x0, 0x67, 0x2, 0x1b, 0x36, 0x28, 0x24, 0x12, 0x58, 0x32, 0x56, 0x26, 0xc, 0x17, 0x2a, 0x26, 0x38, 0x49, 0x56, 0x4, 0x54, 0x18, 0x1c, 0x1c, 0x31, 0x38, 0x71, 0x45, 0x52, 0x4c, 0x5c, 0x29, 0x5b, 0x1b, 0x36, 0x25, 0x3f, 0x49, 0x56, 0x4, 0x54, 0x18, 0x7, 0x17, 0x39, 0x28, 0x32, 0x5f, 0x56, 0x46, 0x14, 0x21, 0x1b, 0x5c, 0x2a, 0x29, 0x2a, 0x1, 0xf, 0x4e, 0x1a, 0x18, 0x4f, 0x52, 0x7a, 0x6e, 0x6b, 0x18, 0x4d, 0x42, 0x4e, 0x35, 0xc, 0x52, 0x23, 0x6c, 0x3f, 0x17, 0xf, 0x42, 0x41, 0x67, 0x51, 0x5c, 0x39, 0x26, 0x2a, 0x1d, 0x25, 0x7, 0x4e, 0x32, 0x5, 0x52, 0x65, 0x6c, 0x6f, 0x4b, 0x15, 0xd, 0x55, 0x2c, 0x1c, 0x17, 0x78, 0x71, 0x6b, 0x3, 0x20, 0xd, 0x53, 0x23, 0x4e, 0x52, 0x7c, 0x62, 0x2a, 0xf, 0x17, 0x1a, 0x1a, 0x7a, 0x55, 0x14, 0x2d, 0x22, 0x28, 0x11, 0x1f, 0xd, 0x54, 0x6f, 0x6, 0x17, 0x2c, 0x38, 0x22, 0xb, 0x11, 0x11, 0x13, 0x3c, 0x55, 0x1b, 0x3e, 0x6c, 0x63, 0x16, 0x13, 0x16, 0x4e, 0x2e, 0x1b, 0x15, 0x2b, 0x62, 0x26, 0x0, 0x2, 0xa, 0x55, 0x23, 0x55, 0x4f, 0x65, 0x71, 0x6b, 0x47, 0x3e, 0x27, 0x7b, 0x3, 0x57, 0x52, 0x24, 0x30, 0x6b, 0x16, 0x13, 0x16, 0x4e, 0x2e, 0x1b, 0x15, 0x2b, 0x62, 0x3f, 0x1c, 0x6, 0x7, 0x1a, 0x7a, 0x48, 0x4f, 0x78, 0x6e, 0x3, 0x20, 0x37, 0x26, 0x18, 0x6e, 0xe, 0x52, 0x31, 0x2a, 0x6b, 0x4d, 0x5, 0x7, 0x4e, 0x33, 0x1c, 0x1c, 0x3f, 0x3f, 0x65, 0x16, 0x3, 0x1, 0x59, 0x22, 0x6, 0x1, 0x71, 0x6c, 0x38, 0x0, 0x2, 0x16, 0x53, 0x29, 0x12, 0x1, 0x76, 0x3f, 0x3e, 0x6, 0x15, 0x7, 0x49, 0x34, 0x5d, 0x1c, 0x2d, 0x20, 0x27, 0x49, 0x56, 0x40, 0x49, 0x32, 0x16, 0x11, 0x3d, 0x3f, 0x38, 0x47, 0x5a, 0x42, 0x41, 0x3a, 0x5c, 0x49, 0x78, 0x25, 0x2d, 0x45, 0x5e, 0x11, 0x5f, 0x33, 0x1, 0x1b, 0x36, 0x2b, 0x38, 0x4b, 0x15, 0xd, 0x57, 0x37, 0x19, 0x17, 0x2c, 0x29, 0x62, 0x45, 0x5, 0x7, 0x4e, 0x33, 0x1c, 0x1c, 0x3f, 0x3f, 0x65, 0x6, 0x19, 0xf, 0x4a, 0x2b, 0x10, 0x6, 0x3d, 0x64, 0x30, 0x18, 0x5a, 0x42, 0x18, 0x34, 0x0, 0x11, 0x3b, 0x29, 0x38, 0x16, 0x54, 0x4b, 0x1, 0x67, 0x8, 0x52, 0x3d, 0x20, 0x38, 0x0, 0x56, 0xb, 0x5c, 0x67, 0x5d, 0x7, 0x2b, 0x29, 0x39, 0x45, 0x50, 0x44, 0x1a, 0x6f, 0x5a, 0x2e, 0x77, 0x39, 0x38, 0x0, 0x4, 0x3d, 0x5e, 0x26, 0x1, 0x13, 0x77, 0x65, 0x65, 0x11, 0x13, 0x11, 0x4e, 0x6f, 0x6, 0x17, 0x2c, 0x38, 0x22, 0xb, 0x11, 0x11, 0x14, 0x32, 0x7, 0x1e, 0x71, 0x65, 0x30, 0x45, 0x1f, 0x4, 0x1a, 0x6f, 0x6, 0x17, 0x2c, 0x38, 0x22, 0xb, 0x11, 0x11, 0x14, 0x34, 0x0, 0x11, 0x3b, 0x29, 0x38, 0x16, 0x5f, 0x42, 0x49, 0x22, 0x1, 0x6, 0x31, 0x22, 0x2c, 0x16, 0x58, 0x11, 0x4f, 0x24, 0x16, 0x17, 0x2b, 0x3f, 0x63, 0x10, 0x5, 0x7, 0x48, 0x6b, 0x55, 0x50, 0x2b, 0x39, 0x28, 0x6, 0x13, 0x11, 0x49, 0x65, 0x59, 0x52, 0x23, 0x31, 0x62, 0x5e, 0x56, 0x1f, 0x1a, 0x22, 0x19, 0x1, 0x3d, 0x6c, 0x22, 0x3, 0x56, 0x4a, 0x4c, 0x28, 0x11, 0x52, 0x7e, 0x6a, 0x6b, 0x4d, 0x59, 0x3e, 0x15, 0x1c, 0x2b, 0x2e, 0x77, 0x11, 0x61, 0x39, 0x59, 0x3e, 0x5e, 0x6c, 0x5a, 0x5b, 0x76, 0x38, 0x2e, 0x16, 0x2, 0x4a, 0x49, 0x22, 0x1, 0x6, 0x31, 0x22, 0x2c, 0x16, 0x58, 0x17, 0x48, 0x2b, 0x5c, 0x5b, 0x23, 0x6c, 0x22, 0x3, 0x56, 0x4a, 0x49, 0x22, 0x1, 0x6, 0x31, 0x22, 0x2c, 0x16, 0x58, 0x11, 0x4f, 0x24, 0x16, 0x17, 0x2b, 0x3f, 0x62, 0x45, 0x5, 0x7, 0x4e, 0x33, 0x1c, 0x1c, 0x3f, 0x3f, 0x65, 0x16, 0x3, 0x1, 0x59, 0x22, 0x6, 0x1, 0x70, 0x3a, 0x24, 0x1, 0x5a, 0x42, 0x18, 0x34, 0x0, 0x11, 0x3b, 0x29, 0x38, 0x16, 0x54, 0x4e, 0x1a, 0x3c, 0x8, 0x5b, 0x63, 0x6c, 0x36, 0x45, 0x13, 0xe, 0x49, 0x22, 0x55, 0x1b, 0x3e, 0x6c, 0x63, 0x16, 0x13, 0x16, 0x4e, 0x2e, 0x1b, 0x15, 0x2b, 0x62, 0x3e, 0x17, 0x1a, 0x4b, 0x1a, 0x35, 0x10, 0x1, 0x76, 0x3c, 0x3e, 0x16, 0x1e, 0x4a, 0x41, 0x33, 0xc, 0x2, 0x3d, 0x76, 0x6b, 0x47, 0x17, 0x8, 0x5b, 0x3f, 0x57, 0x5e, 0x78, 0x39, 0x39, 0x9, 0x4c, 0x42, 0x49, 0x22, 0x1, 0x6, 0x31, 0x22, 0x2c, 0x16, 0x58, 0x17, 0x48, 0x2b, 0x59, 0x52, 0x28, 0x2d, 0x39, 0x4, 0x1b, 0x11, 0x0, 0x67, 0x6, 0x17, 0x2c, 0x38, 0x22, 0xb, 0x11, 0x11, 0x14, 0x23, 0x14, 0x6, 0x39, 0x31, 0x62, 0x5e, 0x56, 0x1f, 0x1, 0x67, 0x51, 0x5c, 0x3f, 0x29, 0x3f, 0x45, 0x4b, 0x42, 0x5c, 0x32, 0x1b, 0x11, 0x2c, 0x25, 0x24, 0xb, 0x5e, 0x17, 0x48, 0x2b, 0x59, 0x52, 0x3c, 0x2d, 0x3f, 0x4, 0x5f, 0x19, 0x1a, 0x35, 0x10, 0x1, 0x76, 0x3c, 0x3e, 0x16, 0x1e, 0x4a, 0x41, 0x33, 0xc, 0x2, 0x3d, 0x76, 0x6b, 0x47, 0x11, 0x7, 0x4e, 0x65, 0x59, 0x52, 0x2d, 0x3e, 0x27, 0x5f, 0x56, 0x17, 0x48, 0x2b, 0x59, 0x52, 0x28, 0x2d, 0x39, 0x4, 0x1b, 0x11, 0x0, 0x67, 0x11, 0x13, 0x2c, 0x2d, 0x36, 0x4c, 0x4d, 0x42, 0x47, 0x7c, 0x55, 0x56, 0x76, 0x3c, 0x24, 0x16, 0x2, 0x42, 0x7, 0x67, 0x13, 0x7, 0x36, 0x2f, 0x3f, 0xc, 0x19, 0xc, 0x12, 0x32, 0x7, 0x1e, 0x74, 0x6c, 0x2f, 0x4, 0x2, 0x3, 0x13, 0x3c, 0x55, 0x0, 0x3d, 0x3f, 0x65, 0x15, 0x3, 0x11, 0x52, 0x6f, 0xe, 0x6, 0x21, 0x3c, 0x2e, 0x5f, 0x56, 0x40, 0x4a, 0x28, 0x6, 0x6, 0x7a, 0x60, 0x6b, 0x10, 0x4, 0xe, 0x0, 0x67, 0x0, 0x0, 0x34, 0x60, 0x6b, 0x15, 0x17, 0x10, 0x5b, 0x2a, 0x6, 0x48, 0x78, 0x28, 0x2a, 0x11, 0x17, 0x1f, 0x13, 0x7c, 0x55, 0xf, 0x63, 0x6c, 0x6f, 0x4b, 0x11, 0x7, 0x4e, 0x14, 0x16, 0x0, 0x31, 0x3c, 0x3f, 0x45, 0x4b, 0x42, 0x5c, 0x32, 0x1b, 0x11, 0x2c, 0x25, 0x24, 0xb, 0x5e, 0x17, 0x48, 0x2b, 0x5c, 0x9, 0x78, 0x3e, 0x2e, 0x16, 0x58, 0x12, 0x4f, 0x34, 0x1d, 0x5a, 0x23, 0x38, 0x32, 0x15, 0x13, 0x58, 0x1a, 0x65, 0x12, 0x17, 0x2c, 0x1f, 0x28, 0x17, 0x1f, 0x12, 0x4e, 0x65, 0x59, 0x52, 0x2d, 0x3e, 0x27, 0x5f, 0x56, 0x17, 0x48, 0x2b, 0x59, 0x52, 0x28, 0x2d, 0x39, 0x4, 0x1b, 0x11, 0x0, 0x67, 0xe, 0x50, 0x7, 0x6e, 0x71, 0x45, 0x32, 0x3, 0x4e, 0x22, 0x5b, 0x1c, 0x37, 0x3b, 0x63, 0x4c, 0xb, 0x1f, 0x13, 0x7c, 0x55, 0xf, 0x63, 0x6c, 0x3c, 0xc, 0x18, 0x6, 0x55, 0x30, 0x5b, 0x1, 0x3d, 0x38, 0x1f, 0xc, 0x1b, 0x7, 0x55, 0x32, 0x1, 0x52, 0x65, 0x6c, 0x3c, 0xc, 0x18, 0x6, 0x55, 0x30, 0x5b, 0x1, 0x3d, 0x38, 0x2, 0xb, 0x2, 0x7, 0x48, 0x31, 0x14, 0x1e, 0x78, 0x71, 0x6b, 0x3, 0x3f, 0xc, 0x4e, 0x7c, 0x55, 0x5, 0x31, 0x22, 0x2f, 0xa, 0x1, 0x4c, 0x59, 0x2b, 0x10, 0x13, 0x2a, 0x18, 0x22, 0x8, 0x13, 0xd, 0x4f, 0x33, 0x55, 0x4f, 0x78, 0x3b, 0x22, 0xb, 0x12, 0xd, 0x4d, 0x69, 0x16, 0x1e, 0x3d, 0x2d, 0x39, 0x2c, 0x18, 0x16, 0x5f, 0x35, 0x3, 0x13, 0x34, 0x6c, 0x76, 0x45, 0x10, 0x34, 0x55, 0x2e, 0x11, 0x49, 0x78, 0x3b, 0x22, 0xb, 0x12, 0xd, 0x4d, 0x69, 0x16, 0x1d, 0x36, 0x3f, 0x24, 0x9, 0x13, 0x42, 0x7, 0x67, 0xe, 0xf, 0x63, 0x6c, 0x3c, 0xc, 0x18, 0x6, 0x55, 0x30, 0x5b, 0x22, 0x34, 0x2d, 0x32, 0x0, 0x4, 0x8, 0x49, 0x67, 0x48, 0x52, 0x8, 0x20, 0x2a, 0x1c, 0x13, 0x10, 0x50, 0x34, 0x4e, 0x52, 0x7c, 0x62, 0x2d, 0xb, 0x58, 0xb, 0x54, 0x2e, 0x1, 0x52, 0x65, 0x6c, 0x2d, 0x10, 0x18, 0x1, 0x4e, 0x2e, 0x1a, 0x1c, 0x70, 0x3f, 0x67, 0x45, 0x15, 0x4e, 0x1a, 0x35, 0x5c, 0x9, 0x78, 0x2f, 0x6b, 0x58, 0x56, 0x1, 0x1a, 0x3b, 0x9, 0x52, 0x3c, 0x23, 0x28, 0x10, 0x1b, 0x7, 0x54, 0x33, 0x4e, 0x52, 0x2a, 0x29, 0x3f, 0x10, 0x4, 0xc, 0x1a, 0x29, 0x10, 0x5, 0x78, 0x2e, 0x2a, 0xe, 0x47, 0x50, 0x9, 0x69, 0x13, 0x1c, 0x7, 0x25, 0x25, 0xc, 0x2, 0x4a, 0x49, 0x6b, 0x55, 0x11, 0x74, 0x6c, 0x39, 0x4c, 0x4d, 0x42, 0x47, 0x7c, 0x55, 0x56, 0x76, 0x2a, 0x25, 0x4b, 0x4, 0x7, 0x5b, 0x23, 0xc, 0x52, 0x65, 0x6c, 0x2d, 0x10, 0x18, 0x1, 0x4e, 0x2e, 0x1a, 0x1c, 0x70, 0x24, 0x62, 0x1e, 0x56, 0x10, 0x5f, 0x33, 0x0, 0x0, 0x36, 0x6c, 0x23, 0x45, 0x50, 0x44, 0x1a, 0x2f, 0x5d, 0x5b, 0x63, 0x6c, 0x36, 0x5e, 0x56, 0x15, 0x53, 0x29, 0x11, 0x1d, 0x2f, 0x62, 0x1b, 0x29, 0x37, 0x3b, 0x7f, 0x15, 0x2a, 0x26, 0x1, 0x1c, 0xe, 0x45, 0x4b, 0x42, 0x6a, 0xb, 0x34, 0x2b, 0x1d, 0x1e, 0x14, 0x31, 0x2f, 0x32, 0x7f, 0x7c, 0x55, 0x5, 0x31, 0x22, 0x2f, 0xa, 0x1, 0x4c, 0x7c, 0xe, 0x39, 0x37, 0x7, 0x18, 0x12, 0x35, 0x33, 0x42, 0x7, 0x67, 0x33, 0x3b, 0x14, 0x9, 0x14, 0x31, 0x2f, 0x32, 0x7f, 0x7c, 0x55, 0x1b, 0x3e, 0x6c, 0x63, 0x16, 0x15, 0x10, 0x53, 0x37, 0x1, 0x43, 0x71, 0x6c, 0x63, 0x55, 0x5a, 0x42, 0x5f, 0x31, 0x14, 0x1e, 0x71, 0x64, 0x38, 0x6, 0x4, 0xb, 0x4a, 0x33, 0x44, 0x5b, 0x63, 0x6c, 0x22, 0x3, 0x56, 0x4a, 0x49, 0x24, 0x7, 0x1b, 0x28, 0x38, 0x79, 0x4c, 0x56, 0x4a, 0xa, 0x6b, 0x55, 0x17, 0x2e, 0x2d, 0x27, 0x4c, 0x5e, 0x11, 0x59, 0x35, 0x1c, 0x2, 0x2c, 0x7e, 0x62, 0x5e, 0x56, 0x7, 0x4c, 0x26, 0x19, 0x5a, 0x2b, 0x38, 0x39, 0x4c, 0x4d, 0x42, 0x47, 0x67, 0x13, 0x1b, 0x36, 0x2d, 0x27, 0x9, 0xf, 0x42, 0x41, 0x67, 0x51, 0x5c, 0x39, 0x26, 0x2a, 0x1d, 0x25, 0x7, 0x4e, 0x32, 0x5, 0x52, 0x65, 0x6c, 0x29, 0x4, 0x1d, 0x53, 0x8, 0x74, 0x5b, 0x13, 0x32, 0x2d, 0x33, 0x36, 0x13, 0x16, 0x4f, 0x37, 0x4e, 0x52, 0x7c, 0x62, 0x28, 0xa, 0x19, 0x9, 0x53, 0x22, 0x55, 0x4f, 0x78, 0x2e, 0x2a, 0xe, 0x47, 0x50, 0x9, 0x69, 0x16, 0x1d, 0x37, 0x27, 0x22, 0x0, 0x4d, 0x42, 0x1e, 0x69, 0x14, 0x18, 0x39, 0x34, 0x6b, 0x58, 0x56, 0x0, 0x5b, 0x2c, 0x44, 0x40, 0x6b, 0x62, 0x2a, 0xf, 0x17, 0x1a, 0x1, 0x67, 0x51, 0x5c, 0x3f, 0x29, 0x3f, 0x45, 0x4b, 0x42, 0x58, 0x26, 0x1e, 0x43, 0x6a, 0x7f, 0x65, 0x2, 0x13, 0x16, 0x1, 0x67, 0x51, 0x5c, 0x28, 0x23, 0x38, 0x11, 0x56, 0x5f, 0x1a, 0x25, 0x14, 0x19, 0x69, 0x7e, 0x78, 0x4b, 0x6, 0xd, 0x49, 0x33, 0x4e, 0x52, 0x7c, 0x62, 0x2c, 0x0, 0x2, 0x31, 0x59, 0x35, 0x1c, 0x2, 0x2c, 0x6c, 0x76, 0x45, 0x14, 0x3, 0x51, 0x76, 0x47, 0x41, 0x76, 0x2b, 0x2e, 0x11, 0x25, 0x1, 0x48, 0x2e, 0x5, 0x6, 0x63, 0x6c, 0x3c, 0xc, 0x18, 0x6, 0x55, 0x30, 0x5b, 0x1, 0x3d, 0x38, 0x1f, 0xc, 0x1b, 0x7, 0x55, 0x32, 0x1, 0x52, 0x65, 0x6c, 0x29, 0x4, 0x1d, 0x53, 0x8, 0x74, 0x5b, 0x1, 0x3d, 0x38, 0x1f, 0xc, 0x1b, 0x7, 0x55, 0x32, 0x1, 0x49, 0x78, 0x3b, 0x22, 0xb, 0x12, 0xd, 0x4d, 0x69, 0x16, 0x1e, 0x3d, 0x2d, 0x39, 0x31, 0x1f, 0xf, 0x5f, 0x28, 0x0, 0x6, 0x78, 0x71, 0x6b, 0x7, 0x17, 0x9, 0xb, 0x75, 0x46, 0x5c, 0x3b, 0x20, 0x2e, 0x4, 0x4, 0x36, 0x53, 0x2a, 0x10, 0x1d, 0x2d, 0x38, 0x70, 0x45, 0x1, 0xb, 0x54, 0x23, 0x1a, 0x5, 0x76, 0x3f, 0x2e, 0x11, 0x3f, 0xc, 0x4e, 0x22, 0x7, 0x4, 0x39, 0x20, 0x6b, 0x58, 0x56, 0x0, 0x5b, 0x2c, 0x44, 0x40, 0x6b, 0x62, 0x38, 0x0, 0x2, 0x2b, 0x54, 0x33, 0x10, 0x0, 0x2e, 0x2d, 0x27, 0x5e, 0x56, 0x15, 0x53, 0x29, 0x11, 0x1d, 0x2f, 0x62, 0x28, 0x9, 0x13, 0x3, 0x48, 0xe, 0x1b, 0x6, 0x3d, 0x3e, 0x3d, 0x4, 0x1a, 0x42, 0x7, 0x67, 0x17, 0x13, 0x33, 0x7d, 0x79, 0x56, 0x58, 0x1, 0x56, 0x22, 0x14, 0x0, 0x11, 0x22, 0x3f, 0x0, 0x4, 0x14, 0x5b, 0x2b, 0x4e, 0x52, 0x2f, 0x25, 0x25, 0x1, 0x19, 0x15, 0x14, 0x24, 0x1a, 0x1c, 0x2b, 0x23, 0x27, 0x0, 0x56, 0x5f, 0x1a, 0x25, 0x14, 0x19, 0x69, 0x7e, 0x78, 0x4b, 0x15, 0xd, 0x54, 0x34, 0x1a, 0x1e, 0x3d, 0x77, 0x6b, 0x12, 0x1f, 0xc, 0x5e, 0x28, 0x2, 0x5c, 0x8, 0x20, 0x2a, 0x1c, 0x13, 0x10, 0x50, 0x34, 0x55, 0x4f, 0x78, 0x2e, 0x2a, 0xe, 0x47, 0x50, 0x9, 0x69, 0x25, 0x1e, 0x39, 0x35, 0x2e, 0x17, 0x1c, 0x11, 0x1, 0x67, 0x51, 0x5c, 0x3e, 0x22, 0x65, 0xc, 0x18, 0xb, 0x4e, 0x67, 0x48, 0x52, 0x3a, 0x2d, 0x20, 0x54, 0x44, 0x51, 0x14, 0x21, 0x1b, 0x2d, 0x31, 0x22, 0x22, 0x11, 0x4d, 0x42, 0x1e, 0x69, 0x13, 0x1c, 0x76, 0x3e, 0x2e, 0x4, 0x12, 0x1b, 0x1a, 0x7a, 0x55, 0x10, 0x39, 0x27, 0x7a, 0x57, 0x45, 0x4c, 0x48, 0x22, 0x14, 0x16, 0x21, 0x77, 0x6b, 0x18, 0x56, 0x1f, 0x1a, 0x24, 0x14, 0x6, 0x3b, 0x24, 0x6b, 0x4d, 0x13, 0x4b, 0x41, 0x67, 0x8, 0x52, 0x2e, 0x2d, 0x39, 0x45, 0x6, 0x3, 0x48, 0x26, 0x18, 0x1, 0x78, 0x71, 0x6b, 0x1e, 0xb, 0x59, 0x1a, 0x35, 0x10, 0x1, 0x76, 0x2a, 0x24, 0x17, 0x33, 0x3, 0x59, 0x2f, 0x5d, 0x14, 0x2d, 0x22, 0x28, 0x11, 0x1f, 0xd, 0x54, 0x67, 0x5d, 0x2, 0x71, 0x37, 0x6b, 0xc, 0x10, 0x42, 0x12, 0x6f, 0x5a, 0x2e, 0x77, 0x39, 0x38, 0x0, 0x4, 0x3d, 0x5e, 0x26, 0x1, 0x13, 0x77, 0x65, 0x65, 0x11, 0x13, 0x11, 0x4e, 0x6f, 0x5, 0x5c, 0x2d, 0x3e, 0x27, 0x4c, 0x5f, 0x42, 0x4a, 0x26, 0x7, 0x13, 0x35, 0x3f, 0x65, 0x10, 0x5, 0x7, 0x48, 0x67, 0x48, 0x52, 0x28, 0x77, 0x6b, 0xc, 0x10, 0x42, 0x12, 0x6f, 0x5a, 0x2e, 0x77, 0x17, 0x15, 0x39, 0x59, 0x3f, 0x10, 0x1b, 0x5a, 0x2e, 0x3c, 0x67, 0x64, 0x4c, 0x58, 0x16, 0x5f, 0x34, 0x1, 0x5a, 0x28, 0x62, 0x3e, 0x17, 0x1a, 0x4b, 0x13, 0x67, 0x5, 0x13, 0x2a, 0x2d, 0x26, 0x16, 0x58, 0x14, 0x55, 0x23, 0x55, 0x4f, 0x78, 0x3c, 0x70, 0x45, 0xb, 0x4b, 0x1, 0x67, 0x5, 0x13, 0x2a, 0x2d, 0x26, 0x16, 0x58, 0x12, 0x56, 0x26, 0xc, 0x17, 0x2a, 0x6c, 0x76, 0x45, 0x6, 0xe, 0x5b, 0x3e, 0x10, 0x0, 0x63, 0x6c, 0x39, 0x0, 0x2, 0x17, 0x48, 0x29, 0x55, 0x2, 0x39, 0x3e, 0x2a, 0x8, 0x5, 0x59, 0x1a, 0x3a, 0x5c, 0x5c, 0x3b, 0x2d, 0x27, 0x9, 0x5e, 0x19, 0x47, 0x6b]);
      var _0xf0f0ce = {};
      var _0xb5ced9 = {
        'season': 0x0,
        'voice': 0x0
      };
      this.search = function (_0x3c0c08, _0x13ca76, _0x9f3abb) {
        var _0x33267e = this;
        _0x1c02c4 = _0x3c0c08;
        _0x4aecec = _0x1c02c4.search || _0x1c02c4.movie.title;
        if (this.wait_similars && _0x9f3abb && _0x9f3abb[0x0].is_similars) {
          return _0x19265d(_0x9f3abb[0x0].link);
        }
        var _0x3e5cd5 = _0x175833 + "search?query=" + encodeURIComponent(_0x11e26d.cleanTitle(_0x4aecec));
        var _0x402b3b = Lampa.Platform.is("android") ? {
          'Origin': _0x41ce0e,
          'Referer': _0x175833,
          'User-Agent': _0x8ab7ef,
          'Cookie': _0x9b9b0c
        } : {};
        var _0x5c5ed9 = '';
        if (_0x56a7f0) {
          _0x5c5ed9 += "param/Origin=" + encodeURIComponent(_0x41ce0e) + '/';
          _0x5c5ed9 += "param/Referer=" + encodeURIComponent(_0x175833) + '/';
          _0x5c5ed9 += "param/User-Agent=" + encodeURIComponent(_0x8ab7ef) + '/';
          _0x32e17f = _0x5c5ed9;
          _0x5c5ed9 += "param/Cookie=" + encodeURIComponent(_0x9b9b0c) + '/';
        }
        _0x4d251f.clear();
        _0x4d251f.timeout(10000);
        _0x4d251f.native(_0x11e26d.proxyLink(_0x3e5cd5, _0x56a7f0, _0x5c5ed9), function (_0x409160) {
          _0x409160 = (_0x409160 || '').replace(/\n/g, '');
          var _0x51daf4 = _0x1c02c4.movie.number_of_seasons ? _0x409160.match(/<div class="title"><a href="\/(serial|tv_show)\/([^"]*)"[^>]*>(.*?)<\/a><\/div>/g) : _0x409160.match(/<div class="title"><a href="\/film\/([^"]*)"[^>]*>(.*?)<\/a><\/div>/g);
          var _0x44610e = _0x1c02c4.search_date || !_0x1c02c4.clarification && (_0x1c02c4.movie.release_date || _0x1c02c4.movie.first_air_date || _0x1c02c4.movie.last_air_date) || "0000";
          var _0x19e388 = parseInt((_0x44610e + '').slice(0x0, 0x4));
          if (_0x51daf4) {
            var _0x369036 = false;
            var _0xe82f63 = _0x51daf4.map(function (_0x508b36) {
              var _0x1f1aae = $(_0x508b36);
              var _0x3e245f = $('a', _0x1f1aae);
              var _0x38b27e = _0x3e245f.attr("title") || _0x3e245f.text() || '';
              var _0x594456;
              var _0xde3f15 = _0x38b27e.match(/^(.*)\((\d{4})\)$/);
              if (_0xde3f15) {
                _0x594456 = parseInt(_0xde3f15[0x2]);
                _0x38b27e = _0xde3f15[0x1].trim();
              }
              return {
                'year': _0x594456,
                'title': _0x38b27e,
                'link': _0x3e245f.attr("href") || ''
              };
            });
            var _0x15a11f = _0xe82f63;
            if (_0x15a11f.length) {
              if (_0x4aecec) {
                var _0xc49fdc = _0x15a11f.filter(function (_0x5222fa) {
                  return _0x11e26d.containsTitle(_0x5222fa.title, _0x4aecec);
                });
                if (_0xc49fdc.length) {
                  _0x15a11f = _0xc49fdc;
                  _0x369036 = true;
                }
              }
              if (_0x15a11f.length > 0x1 && _0x19e388) {
                var _0xddb377 = _0x15a11f.filter(function (_0x30d224) {
                  return _0x30d224.year == _0x19e388;
                });
                if (!_0xddb377.length) {
                  _0xddb377 = _0x15a11f.filter(function (_0x15a0d5) {
                    return _0x15a0d5.year && _0x15a0d5.year > _0x19e388 - 0x2 && _0x15a0d5.year < _0x19e388 + 0x2;
                  });
                }
                if (_0xddb377.length) {
                  _0x15a11f = _0xddb377;
                }
              }
            }
            if (_0x15a11f.length == 0x1 && _0x369036) {
              if (_0x19e388 && _0x15a11f[0x0].year) {
                _0x369036 = _0x15a11f[0x0].year > _0x19e388 - 0x2 && _0x15a11f[0x0].year < _0x19e388 + 0x2;
              }
              if (_0x369036) {
                _0x369036 = false;
                if (_0x4aecec) {
                  _0x369036 |= _0x11e26d.equalTitle(_0x15a11f[0x0].title, _0x4aecec);
                }
              }
            }
            if (_0x15a11f.length == 0x1 && _0x369036) {
              _0x19265d(_0x15a11f[0x0].link);
            } else {
              if (_0xe82f63.length) {
                _0x33267e.wait_similars = true;
                _0xe82f63.forEach(function (_0x3ea09c) {
                  _0x3ea09c.is_similars = true;
                });
                _0x11e26d.similars(_0xe82f63);
                _0x11e26d.loading(false);
              } else {
                _0x11e26d.emptyForQuery(_0x4aecec);
              }
            }
          } else {
            if (_0x409160.indexOf("/recaptcha/api.js") !== -0x1 || _0x409160.indexOf("form action=\"/check?") !== -0x1) {
              if (_0x56a7f0) {
                _0x11e26d.empty(Lampa.Lang.translate("online_mod_captcha_proxy"));
              } else {
                _0x11e26d.empty(Lampa.Lang.translate("online_mod_captcha_address") + _0x175833);
              }
            } else {
              _0x11e26d.emptyForQuery(_0x4aecec);
            }
          }
        }, function (_0x163658, _0x35b616) {
          _0x11e26d.empty(_0x4d251f.errorDecode(_0x163658, _0x35b616));
        }, false, {
          'dataType': 'text',
          'withCredentials': _0xa1ae5e,
          'headers': _0x402b3b
        });
      };
      this.extendChoice = function (_0x1451ca) {
        Lampa.Arrays.extend(_0xb5ced9, _0x1451ca, true);
      };
      this.reset = function () {
        _0x11e26d.reset();
        _0xb5ced9 = {
          'season': 0x0,
          'voice': 0x0
        };
        _0xc66020();
        _0x283d51(_0x1bfb3d());
        _0x11e26d.saveChoice(_0xb5ced9);
      };
      this.filter = function (_0x56e139, _0x238af4, _0x4c41bd) {
        _0xb5ced9[_0x238af4.stype] = _0x4c41bd.index;
        _0x11e26d.reset();
        _0xc66020();
        _0x283d51(_0x1bfb3d());
        _0x11e26d.saveChoice(_0xb5ced9);
      };
      this.destroy = function () {
        _0x4d251f.clear();
        _0x4ebf49 = null;
      };
      function _0xc66020() {
        _0xf0f0ce = {
          'season': [],
          'voice': []
        };
        if (_0x1dec59) {
          _0x4ebf49.forEach(function (_0x1e66f6) {
            if (_0x1e66f6.playlist || _0x1e66f6.folder) {
              _0xf0f0ce.season.push(_0x1e66f6.title || _0x1e66f6.comment || '');
            }
          });
        }
        if (!_0xf0f0ce.season[_0xb5ced9.season]) {
          _0xb5ced9.season = 0x0;
        }
        if (_0x1dec59) {
          _0x4ebf49.forEach(function (_0x5ced77, _0x13898f) {
            var _0x2dc655 = _0x5ced77.playlist || _0x5ced77.folder;
            if (_0x2dc655) {
              if (_0x13898f == _0xb5ced9.season) {
                _0x2dc655.forEach(function (_0x46f0b5) {
                  if (_0x46f0b5.file) {
                    _0x11e26d.parsePlaylist(_0x46f0b5.file).forEach(function (_0x49f373) {
                      if (_0x49f373.voice && _0xf0f0ce.voice.indexOf(_0x49f373.voice) == -0x1) {
                        _0xf0f0ce.voice.push(_0x49f373.voice);
                      }
                    });
                  }
                });
              }
            } else if (_0x5ced77.file) {
              _0x11e26d.parsePlaylist(_0x5ced77.file).forEach(function (_0x2a574d) {
                if (_0x2a574d.voice && _0xf0f0ce.voice.indexOf(_0x2a574d.voice) == -0x1) {
                  _0xf0f0ce.voice.push(_0x2a574d.voice);
                }
              });
            }
          });
        }
        if (!_0xf0f0ce.voice[_0xb5ced9.voice]) {
          _0xb5ced9.voice = 0x0;
        }
        _0x11e26d.filter(_0xf0f0ce, _0xb5ced9);
      }
      function _0x1bfb3d() {
        var _0x4b21f2 = [];
        if (_0x1dec59) {
          var _0x2b4239 = _0x4ebf49;
          var _0x5bbd4c = _0x1c02c4.movie.number_of_seasons && 0x1;
          if (_0x4ebf49[_0xb5ced9.season] && (_0x4ebf49[_0xb5ced9.season].playlist || _0x4ebf49[_0xb5ced9.season].folder)) {
            _0x2b4239 = _0x4ebf49[_0xb5ced9.season].playlist || _0x4ebf49[_0xb5ced9.season].folder;
            _0x5bbd4c = parseInt(_0x4ebf49[_0xb5ced9.season].title || _0x4ebf49[_0xb5ced9.season].comment || '');
            if (isNaN(_0x5bbd4c)) {
              _0x5bbd4c = 0x1;
            }
          }
          _0x2b4239.forEach(function (_0x33e121, _0x1dece8) {
            var _0x32caf3 = _0x718b3(_0x33e121.file, _0xf0f0ce.voice[_0xb5ced9.voice]);
            if (_0x32caf3.length) {
              var _0x122419 = _0x33e121.title || _0x33e121.comment || '';
              var _0x48d706 = _0x122419.match(/\d+ серия (.*)$/i);
              var _0x5a0e99 = _0x32caf3[0x0].voice || _0x48d706 && _0x48d706[0x1].trim() || _0x51cda0;
              if (_0x5a0e99 == _0x122419) {
                _0x5a0e99 = '';
              }
              if (_0x5bbd4c) {
                var _0x593002 = parseInt(_0x122419);
                if (isNaN(_0x593002)) {
                  _0x593002 = _0x1dece8 + 0x1;
                }
                _0x4b21f2.push({
                  'title': _0x11e26d.formatEpisodeTitle(_0x5bbd4c, null, _0x122419),
                  'quality': _0x32caf3[0x0].quality + 'p' + (_0x14fd66 ? " - " + _0x14fd66 : ''),
                  'info': _0x5a0e99 ? " / " + _0x5a0e99 : '',
                  'season': _0x5bbd4c,
                  'episode': _0x593002,
                  'file': _0x33e121.file,
                  'voice': _0x32caf3[0x0].voice,
                  'subtitles': _0x32412b(_0x33e121.subtitle)
                });
              } else {
                _0x4b21f2.push({
                  'title': _0x122419 || _0x4aecec,
                  'quality': _0x32caf3[0x0].quality + 'p' + (_0x14fd66 ? " - " + _0x14fd66 : ''),
                  'info': _0x5a0e99 ? " / " + _0x5a0e99 : '',
                  'file': _0x33e121.file,
                  'voice': _0x32caf3[0x0].voice,
                  'subtitles': _0x32412b(_0x33e121.subtitle)
                });
              }
            }
          });
        } else {
          _0x4b21f2 = _0x4ebf49;
        }
        return _0x4b21f2;
      }
      function _0x32412b(_0x301d5a) {
        if (!_0x301d5a) {
          return false;
        }
        var _0x271def = _0x11e26d.parsePlaylist(_0x301d5a).map(function (_0x63c3d2) {
          var _0x50b3cf = _0x63c3d2.links[0x0] || '';
          return {
            'label': _0x63c3d2.label,
            'url': _0x11e26d.processSubs(_0x11e26d.proxyLink(_0x50b3cf, _0x56a7f0, _0x32e17f))
          };
        });
        return _0x271def.length ? _0x271def : false;
      }
      function _0x5be51a(_0x5bc8ad, _0x2bc497) {
        var _0x4c6624 = _0x2bc497.match(/<li><b>Качество:<\/b>([^<,]+)<\/li>/i);
        var _0x23c0d0 = _0x2bc497.match(/<li><b>Перевод:<\/b>([^<,]+)<\/li>/i);
        _0x14fd66 = _0x4c6624 ? _0x4c6624[0x1].trim() : '';
        _0x51cda0 = _0x23c0d0 ? _0x23c0d0[0x1].trim() : '';
        var _0x32e3f7 = _0x5bc8ad && _0x5bc8ad.file && Lampa.Arrays.decodeJson(_0x5bc8ad.file, []) || [];
        if (_0x32e3f7.length) {
          _0x4ebf49 = _0x32e3f7;
          _0x1dec59 = true;
        } else {
          if (_0x5bc8ad && _0x5bc8ad.file) {
            var _0x3344f0 = _0x5bc8ad.file;
            var _0x102f01 = [];
            var _0x408b6c = _0x32412b(_0x5bc8ad.subtitle);
            if (_0x3344f0) {
              var _0x2ff8f9 = {};
              _0x11e26d.parsePlaylist(_0x3344f0).forEach(function (_0x4287fc) {
                var _0x4d4025 = _0x2ff8f9[_0x4287fc.voice || ''];
                var _0x4fd785 = _0x4287fc.label.match(/(\d\d\d+)/);
                var _0xdad5b1 = _0x4fd785 ? parseInt(_0x4fd785[0x1]) : NaN;
                if (!_0x4d4025 || _0xdad5b1 > _0x4d4025.quality) {
                  _0x2ff8f9[_0x4287fc.voice || ''] = {
                    'quality': _0xdad5b1
                  };
                }
              });
              for (var _0x30b118 in _0x2ff8f9) {
                var _0x32138f = _0x2ff8f9[_0x30b118];
                _0x102f01.push({
                  'title': _0x30b118 || _0x51cda0 || _0x4aecec,
                  'quality': _0x32138f.quality + 'p' + (_0x14fd66 ? " - " + _0x14fd66 : ''),
                  'info': '',
                  'file': _0x3344f0,
                  'voice': _0x30b118,
                  'subtitles': _0x408b6c
                });
              }
            }
            _0x4ebf49 = _0x102f01;
            _0x1dec59 = false;
          } else {
            _0x11e26d.emptyForQuery(_0x4aecec);
          }
        }
      }
      function _0x3a734c(_0x4a0c4d, _0x1fd034) {
        _0x4a0c4d = _0x4a0c4d || '';
        _0x4a0c4d = _0x11e26d.fixLink(_0x4a0c4d, _0x175833);
        if (_0x1fd034) {
          for (var _0x5142d1 in _0x1fd034) {
            var _0x3b464b = _0x1fd034[_0x5142d1];
            _0x4a0c4d = Lampa.Utils.addUrlComponent(_0x4a0c4d, encodeURIComponent(_0x5142d1) + '=' + encodeURIComponent(_0x3b464b));
          }
        }
        return _0x4a0c4d;
      }
      function _0x3ab1f1(_0x503399) {
        var _0x1cc190 = /<script src="([^"]*\/movie\.js\b[^"]*)"/g;
        var _0x38ec0e;
        while ((_0x38ec0e = _0x1cc190.exec(_0x503399)) !== null) {
          var _0x147532 = _0x503399.lastIndexOf("<!--", _0x38ec0e.index);
          var _0x484102 = _0x503399.lastIndexOf("-->", _0x38ec0e.index);
          if (_0x484102 >= _0x147532) {
            return _0x38ec0e[0x1];
          }
        }
        return '';
      }
      function _0x19265d(_0x10a835) {
        _0x10a835 = _0x11e26d.fixLink(_0x10a835, _0x175833);
        var _0x1ce2fc = (_0x9b9b0c ? _0x9b9b0c + "; " : '') + "player_type=new; file_type=" + _0xe5bb70;
        var _0x304e84 = Lampa.Platform.is("android") ? {
          'Origin': _0x41ce0e,
          'Referer': _0x10a835,
          'User-Agent': _0x8ab7ef,
          'Cookie': _0x1ce2fc
        } : {};
        var _0x4ebbdf = '';
        if (_0x56a7f0) {
          _0x4ebbdf += "param/Origin=" + encodeURIComponent(_0x41ce0e) + '/';
          _0x4ebbdf += "param/Referer=" + encodeURIComponent(_0x10a835) + '/';
          _0x32e17f = _0x4ebbdf;
          _0x4ebbdf += "param/User-Agent=" + encodeURIComponent(_0x8ab7ef) + '/';
          _0x4ebbdf += "param/Cookie=" + encodeURIComponent(_0x1ce2fc) + '/';
        }
        _0x4d251f.clear();
        _0x4d251f.timeout(10000);
        _0x4d251f.native(_0x11e26d.proxyLink(_0x10a835, _0x56a7f0, _0x4ebbdf), function (_0x3bad17) {
          _0x3bad17 = (_0x3bad17 || '').replace(/\n/g, '');
          var _0x211842 = _0x3bad17.match(/var MOVIE_ID = (\d+);/);
          var _0x3e5277 = _0x3bad17.match(/var PLAYER_CUID = "([^"]+)";/);
          var _0x4016ae = _0x3bad17.match(/var IDENTIFIER = "([^"]+)";/);
          var _0x42ace9 = _0x3bad17.match(/<script[^>]*>([^<]*var IMAGES_URL = [^<]*)<\/script>/);
          var _0x56318d = _0x3bad17.match(/<script[^>]*>([^<]*var MOVIE_ID = [^<]*)<\/script>/);
          var _0x5654d3 = _0x3ab1f1(_0x3bad17);
          if (_0x211842 && _0x3e5277 && _0x4016ae && _0x56318d && _0x5654d3) {
            var _0x55c85b = _0x42ace9 ? _0x42ace9.index > _0x56318d.index ? [_0x56318d[0x1], _0x42ace9[0x1]] : [_0x42ace9[0x1], _0x56318d[0x1]] : [_0x56318d[0x1], ''];
            if (_0x55c85b[0x1] === _0x55c85b[0x0]) {
              _0x55c85b[0x1] = '';
            }
            var _0xc91254 = _0x11e26d.fixLink(_0x5654d3, _0x175833);
            _0x4d251f.clear();
            _0x4d251f.timeout(10000);
            _0x4d251f.native(_0x11e26d.proxyLink(_0xc91254, _0x56a7f0, _0x4ebbdf), function (_0x235cf9) {
              var _0x4a6bcb = {};
              try {
                _0x4a6bcb = (0x0, eval)(_0xe04823 + [JSON.stringify(_0x11e26d.decodeHtml(_0x55c85b[0x0])), JSON.stringify(_0x11e26d.decodeHtml(_0x55c85b[0x1])), JSON.stringify(_0x235cf9 || ''), JSON.stringify("new"), JSON.stringify(_0xe5bb70)].join(',') + ');');
              } catch (_0x18983b) {}
              var _0x48c175 = _0x4a6bcb.user && _0x4a6bcb.user.url;
              if (!_0x48c175) {
                _0x11e26d.empty("No user_url");
                return;
              }
              var _0x4e66df = _0x4a6bcb.user && _0x4a6bcb.user.params || {};
              _0x4e66df._ = Date.now();
              _0x48c175 = _0x3a734c(_0x48c175 || "/user_data", _0x4e66df);
              _0x4d251f.clear();
              _0x4d251f.timeout(10000);
              _0x4d251f.native(_0x11e26d.proxyLink(_0x48c175, _0x56a7f0, _0x4ebbdf), function (_0x4c7e71) {
                if (_0x4c7e71 && !_0x4c7e71.error) {
                  var _0x5eacf1 = {};
                  try {
                    _0x5eacf1 = (0x0, eval)(_0xe04823 + [JSON.stringify(_0x11e26d.decodeHtml(_0x55c85b[0x0])), JSON.stringify(_0x11e26d.decodeHtml(_0x55c85b[0x1])), JSON.stringify(_0x235cf9), JSON.stringify("new"), JSON.stringify(_0xe5bb70), JSON.stringify(_0x4c7e71)].join(',') + ');');
                  } catch (_0x4d2d4e) {}
                  if (_0x4c7e71.allow_watch != null && !_0x4c7e71.allow_watch) {
                    Lampa.Noty.show(Lampa.Lang.translate("online_mod_blockedlink") + (_0x4c7e71.client_country ? ": " + _0x4c7e71.client_country : ''));
                    _0x11e26d.emptyForQuery(_0x4aecec);
                    return;
                  } else {
                    if (!_0x5eacf1.vod) {
                      Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
                      _0x11e26d.emptyForQuery(_0x4aecec);
                      return;
                    }
                  }
                  var _0x1329ad = _0x5eacf1.vod.url || '';
                  if (!_0x1329ad) {
                    _0x11e26d.empty("No vod_url");
                    return;
                  }
                  var _0x14f743 = _0x5eacf1.vod && _0x5eacf1.vod.params || {};
                  _0x14f743._ = Date.now();
                  _0x1329ad = _0x3a734c(_0x1329ad || "/vod/" + _0x211842[0x1], _0x14f743);
                  _0x4d251f.clear();
                  _0x4d251f.timeout(10000);
                  _0x4d251f.native(_0x11e26d.proxyLink(_0x1329ad, _0x56a7f0, _0x4ebbdf), function (_0x586f1b) {
                    _0x11e26d.loading(false);
                    var _0x5b089d = {};
                    try {
                      _0x5b089d = (0x0, eval)(_0xe04823 + [JSON.stringify(_0x11e26d.decodeHtml(_0x55c85b[0x0])), JSON.stringify(_0x11e26d.decodeHtml(_0x55c85b[0x1])), JSON.stringify(_0x235cf9), JSON.stringify("new"), JSON.stringify(_0xe5bb70), JSON.stringify(_0x4c7e71), JSON.stringify(_0x586f1b)].join(',') + ');');
                    } catch (_0x45a58b) {}
                    _0x5be51a(_0x5b089d.player, _0x3bad17);
                    _0xc66020();
                    _0x283d51(_0x1bfb3d());
                  }, function (_0xd14874, _0xd0c53d) {
                    _0x11e26d.empty(_0x4d251f.errorDecode(_0xd14874, _0xd0c53d));
                  }, false, {
                    'dataType': "text",
                    'withCredentials': _0xa1ae5e,
                    'headers': _0x304e84
                  });
                } else {
                  if (_0x4c7e71 && _0x4c7e71.error) {
                    if (_0x56a7f0) {
                      _0x11e26d.empty(Lampa.Lang.translate("online_mod_captcha_proxy"));
                    } else {
                      _0x11e26d.empty(Lampa.Lang.translate("online_mod_captcha_address") + _0x175833);
                    }
                  } else {
                    _0x11e26d.emptyForQuery(_0x4aecec);
                  }
                }
              }, function (_0x595567, _0x23baab) {
                _0x11e26d.empty(_0x4d251f.errorDecode(_0x595567, _0x23baab));
              }, false, {
                'dataType': "text",
                'withCredentials': _0xa1ae5e,
                'headers': _0x304e84
              });
            }, function (_0x4ffd6c, _0x3fc824) {
              _0x11e26d.empty(_0x4d251f.errorDecode(_0x4ffd6c, _0x3fc824));
            }, false, {
              'dataType': "text",
              'withCredentials': _0xa1ae5e,
              'headers': _0x304e84
            });
          } else {
            _0x11e26d.emptyForQuery(_0x4aecec);
          }
        }, function (_0x310043, _0x1217bf) {
          _0x11e26d.empty(_0x4d251f.errorDecode(_0x310043, _0x1217bf));
        }, false, {
          'dataType': 'text',
          'withCredentials': _0xa1ae5e,
          'headers': _0x304e84
        });
      }
      function _0x718b3(_0xca7285, _0x1e4fa9) {
        if (!_0xca7285) {
          return [];
        }
        try {
          var _0x2c4a88 = _0x11e26d.parsePlaylist(_0xca7285);
          if (_0x1e4fa9) {
            var _0x59ac02 = _0x2c4a88.filter(function (_0x5aeaf9) {
              return _0x5aeaf9.voice == _0x1e4fa9;
            });
            if (_0x59ac02.length) {
              _0x2c4a88 = _0x59ac02;
            } else {
              _0x2c4a88 = _0x2c4a88.filter(function (_0x50598a) {
                return typeof _0x50598a.voice === "undefined";
              });
            }
          }
          var _0x62874b = _0x2c4a88.map(function (_0x34e7cb) {
            var _0x2a896f = _0x34e7cb.label.match(/(\d\d\d+)/);
            var _0x2a1e17 = _0x34e7cb.links[0x0] || '';
            return {
              'label': _0x34e7cb.label,
              'voice': _0x34e7cb.voice,
              'quality': _0x2a896f ? parseInt(_0x2a896f[0x1]) : NaN,
              'file': _0x11e26d.proxyLink(_0x2a1e17, _0x56a7f0, _0x32e17f)
            };
          });
          _0x62874b.sort(function (_0x31938b, _0x487367) {
            if (_0x487367.quality > _0x31938b.quality) {
              return 0x1;
            }
            if (_0x487367.quality < _0x31938b.quality) {
              return -0x1;
            }
            if (_0x487367.label > _0x31938b.label) {
              return 0x1;
            }
            if (_0x487367.label < _0x31938b.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x62874b;
        } catch (_0x1b0214) {}
        return [];
      }
      function _0x13f439(_0x435cd3) {
        var _0x301305 = '';
        var _0x16797d = false;
        var _0x1a96d9 = _0x718b3(_0x435cd3.file, _0x435cd3.voice);
        if (_0x1a96d9 && _0x1a96d9.length) {
          _0x301305 = _0x1a96d9[0x0].file;
          _0x16797d = {};
          _0x1a96d9.forEach(function (_0xf76ba5) {
            _0x16797d[_0xf76ba5.label] = _0xf76ba5.file;
          });
        }
        _0x435cd3.stream = _0x301305;
        _0x435cd3.qualitys = _0x16797d;
        return {
          'file': _0x301305,
          'quality': _0x16797d
        };
      }
      function _0x283d51(_0x1ec2a9) {
        _0x11e26d.reset();
        var _0x58360c = Lampa.Storage.cache('online_view', 0x1388, []);
        var _0x2c1857 = _0x11e26d.getLastEpisode(_0x1ec2a9);
        _0x1ec2a9.forEach(function (_0x559f1f) {
          if (_0x559f1f.season) {
            _0x559f1f.translate_episode_end = _0x2c1857;
            _0x559f1f.translate_voice = _0xf0f0ce.voice[_0xb5ced9.voice];
          }
          var _0x39a01b = Lampa.Utils.hash(_0x559f1f.season ? [_0x559f1f.season, _0x559f1f.season > 0xa ? ':' : '', _0x559f1f.episode, _0x1c02c4.movie.original_title].join('') : _0x1c02c4.movie.original_title);
          var _0x8b0739 = Lampa.Timeline.view(_0x39a01b);
          var _0x201d3d = Lampa.Template.get("online_mod", _0x559f1f);
          var _0x84fe16 = Lampa.Utils.hash(_0x559f1f.season ? [_0x559f1f.season, _0x559f1f.season > 0xa ? ':' : '', _0x559f1f.episode, _0x1c02c4.movie.original_title, _0x559f1f.title, "kinobase"].join('') : _0x1c02c4.movie.original_title + _0x559f1f.quality + "kinobase");
          _0x559f1f.timeline = _0x8b0739;
          _0x201d3d.append(Lampa.Timeline.render(_0x8b0739));
          if (Lampa.Timeline.details) {
            _0x201d3d.find(".online__quality").append(Lampa.Timeline.details(_0x8b0739, " / "));
          }
          if (_0x58360c.indexOf(_0x84fe16) !== -0x1) {
            _0x201d3d.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x201d3d.on("hover:enter", function () {
            if (_0x1c02c4.movie.id) {
              Lampa.Favorite.add("history", _0x1c02c4.movie, 0x64);
            }
            _0x13f439(_0x559f1f);
            if (_0x559f1f.stream) {
              var _0xfcc03e = [];
              var _0x542d51 = {
                'url': _0x11e26d.getDefaultQuality(_0x559f1f.qualitys, _0x559f1f.stream),
                'quality': _0x11e26d.renameQualityMap(_0x559f1f.qualitys),
                'subtitles': _0x559f1f.subtitles,
                'timeline': _0x559f1f.timeline,
                'title': _0x559f1f.season ? _0x559f1f.title : _0x4aecec + (_0x559f1f.title == _0x4aecec ? '' : " / " + _0x559f1f.title)
              };
              if (_0x559f1f.season) {
                _0x1ec2a9.forEach(function (_0x1c7e89) {
                  _0x13f439(_0x1c7e89);
                  _0xfcc03e.push({
                    'url': _0x11e26d.getDefaultQuality(_0x1c7e89.qualitys, _0x1c7e89.stream),
                    'quality': _0x11e26d.renameQualityMap(_0x1c7e89.qualitys),
                    'subtitles': _0x1c7e89.subtitles,
                    'timeline': _0x1c7e89.timeline,
                    'title': _0x1c7e89.title
                  });
                });
              } else {
                _0xfcc03e.push(_0x542d51);
              }
              if (_0xfcc03e.length > 0x1) {
                _0x542d51.playlist = _0xfcc03e;
              }
              Lampa.Player.play(_0x542d51);
              Lampa.Player.playlist(_0xfcc03e);
              if (_0x58360c.indexOf(_0x84fe16) == -0x1) {
                _0x58360c.push(_0x84fe16);
                _0x201d3d.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
                Lampa.Storage.set("online_view", _0x58360c);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0x11e26d.append(_0x201d3d);
          _0x11e26d.contextmenu({
            'item': _0x201d3d,
            'view': _0x8b0739,
            'viewed': _0x58360c,
            'hash_file': _0x84fe16,
            'element': _0x559f1f,
            'file': function _0xa456fd(_0x54563d) {
              _0x54563d(_0x13f439(_0x559f1f));
            }
          });
        });
        _0x11e26d.start(true);
      }
    }
    function _0x3369bb(_0x201f84, _0x2b957b, _0x1ad0cc) {
      var _0x2da3ec = new Lampa.Reguest();
      var _0x58c581 = {};
      var _0x42609a = _0x2b957b;
      var _0xac9be1 = '';
      var _0x13d5be = Lampa.Storage.field('online_mod_prefer_http') === true;
      var _0x203ff4 = Lampa.Storage.field("online_mod_collaps_lampa_player") === true;
      var _0xe53f81 = _0x201f84.proxy('collaps');
      var _0x487097 = _0x59443e.baseUserAgent();
      var _0x5bd2a5 = (_0x13d5be ? "http:" : "https:") + '//' + "api.ortified.ws" + "/embed/";
      var _0x50a6d8 = (_0x13d5be ? 'http:' : "https:") + "//api.kinogram.best/embed/";
      var _0x466558 = '';
      if (_0xe53f81) {
        _0x466558 += 'param/User-Agent=' + encodeURIComponent(_0x487097) + '/';
      }
      var _0xf9f714 = _0x466558;
      if (_0xe53f81) {
        _0x466558 += "ip/";
        _0xf9f714 += 'param/Origin=' + encodeURIComponent("https://api.ortified.ws") + '/';
        _0xf9f714 += 'param/Referer=' + encodeURIComponent("https://api.ortified.ws/") + '/';
      }
      var _0x1c03e0 = _0x203ff4 ? "silent" : 'native';
      var _0x1f6b71 = !_0xe53f81 && !_0x203ff4 && Lampa.Platform.is("android") ? {
        'User-Agent': _0x487097,
        'Origin': "https://api.ortified.ws",
        'Referer': "https://api.ortified.ws/"
      } : {};
      var _0x5db098 = {};
      var _0x17ecc3 = {
        'season': 0x0,
        'voice': 0x0
      };
      function _0x3644f9(_0x2917a2, _0x1ca301, _0x19f6cd) {
        _0x2da3ec.clear();
        _0x2da3ec.timeout(0x2710);
        _0x2da3ec[_0x1c03e0](_0x201f84.proxyLink(_0x5bd2a5 + _0x2917a2, _0xe53f81, _0x466558, "enc2t"), function (_0x29124e) {
          if (_0x1ca301) {
            _0x1ca301(_0x29124e || '');
          }
        }, function (_0x2cd963, _0x240131) {
          if (_0x2cd963.status == 0x194 && (!_0x2cd963.responseText || _0x2cd963.responseText.indexOf("видео недоступно") !== -0x1)) {
            if (_0x1ca301) {
              _0x1ca301('');
            }
          } else {
            _0x2da3ec.clear();
            _0x2da3ec.timeout(0x2710);
            _0x2da3ec[_0x1c03e0](_0x201f84.proxyLink(_0x50a6d8 + _0x2917a2, _0xe53f81, _0x466558, "enc2t"), function (_0x5b8db8) {
              if (_0x1ca301) {
                _0x1ca301(_0x5b8db8 || '');
              }
            }, function (_0x1c3352, _0x3ee020) {
              if (_0x1c3352.status == 0x194 && (!_0x1c3352.responseText || _0x1c3352.responseText.indexOf("видео недоступно") !== -0x1) || _0x1c3352.status == 0x0 && _0x1c3352.statusText !== "timeout") {
                if (_0x1ca301) {
                  _0x1ca301('');
                }
              } else {
                if (_0x19f6cd) {
                  _0x19f6cd(_0x2da3ec.errorDecode(_0x1c3352, _0x3ee020));
                }
              }
            }, false, {
              'dataType': "text",
              'headers': _0x1f6b71
            });
          }
        }, false, {
          'dataType': "text",
          'headers': _0x1f6b71
        });
      }
      this.search = function (_0x16d92e, _0x5c1824) {
        _0x42609a = _0x16d92e;
        _0xac9be1 = _0x42609a.search || _0x42609a.movie.title;
        var _0x484d51 = _0x201f84.empty.bind(_0x201f84);
        var _0x109438 = (+_0x5c1824 ? 'kp/' : "imdb/") + _0x5c1824;
        _0x3644f9(_0x109438, function (_0x4349e8) {
          if (_0x4349e8) {
            _0x225d7f(_0x4349e8);
          } else {
            if (!_0x42609a.clarification && _0x42609a.movie.imdb_id && _0x5c1824 != _0x42609a.movie.imdb_id) {
              _0x3644f9("imdb/" + _0x42609a.movie.imdb_id, function (_0x315992) {
                if (_0x315992) {
                  _0x225d7f(_0x315992);
                } else {
                  _0x201f84.emptyForQuery(_0xac9be1);
                }
              }, _0x484d51);
            } else {
              _0x201f84.emptyForQuery(_0xac9be1);
            }
          }
        }, _0x484d51);
      };
      this.extendChoice = function (_0x4b4f83) {
        Lampa.Arrays.extend(_0x17ecc3, _0x4b4f83, true);
      };
      this.reset = function () {
        _0x201f84.reset();
        _0x17ecc3 = {
          'season': 0x0,
          'voice': 0x0
        };
        _0x4baf7f();
        _0x32ef0e(_0x5f899());
        _0x201f84.saveChoice(_0x17ecc3);
      };
      this.filter = function (_0x7fe2e, _0x1e3d69, _0x1085ae) {
        _0x17ecc3[_0x1e3d69.stype] = _0x1085ae.index;
        _0x201f84.reset();
        _0x4baf7f();
        _0x32ef0e(_0x5f899());
        _0x201f84.saveChoice(_0x17ecc3);
      };
      this.destroy = function () {
        _0x2da3ec.clear();
        _0x58c581 = null;
      };
      function _0x225d7f(_0x31dc6a) {
        _0x201f84.loading(false);
        _0x31dc6a = (_0x31dc6a || '').replace(/\n/g, '');
        var _0x53eac2 = _0x31dc6a.match(/makePlayer\(({.*?})\);/);
        var _0x3ec6ba;
        try {
          _0x3ec6ba = _0x53eac2 && (0x0, eval)("\"use strict\"; (" + _0x53eac2[0x1] + ');');
        } catch (_0xa2e38e) {}
        if (_0x3ec6ba) {
          _0x58c581 = _0x3ec6ba;
          if (_0x58c581.playlist && _0x58c581.playlist.seasons) {
            _0x58c581.playlist.seasons.sort(function (_0x1e2a24, _0x535e8f) {
              return _0x1e2a24.season - _0x535e8f.season;
            });
          }
          _0x4baf7f();
          _0x32ef0e(_0x5f899());
        } else {
          _0x201f84.emptyForQuery(_0xac9be1);
        }
      }
      function _0x4baf7f() {
        _0x5db098 = {
          'season': [],
          'voice': []
        };
        if (_0x58c581.playlist && _0x58c581.playlist.seasons) {
          _0x58c581.playlist.seasons.forEach(function (_0x5f4865) {
            _0x5db098.season.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x5f4865.season);
          });
        }
        if (!_0x5db098.season[_0x17ecc3.season]) {
          _0x17ecc3.season = 0x0;
        }
        _0x201f84.filter(_0x5db098, _0x17ecc3);
      }
      function _0xc009a8(_0x54e34c, _0x161c7f) {
        _0x54e34c = _0x54e34c || '';
        if (_0x54e34c && _0x161c7f) {
          _0x54e34c += atob("JnZw");
        }
        _0x54e34c = _0x201f84.fixLinkProtocol(_0x54e34c, _0x13d5be, true);
        return _0x54e34c;
      }
      function _0x5f899() {
        var _0x12bbbc = [];
        if (_0x58c581.playlist) {
          _0x58c581.playlist.seasons.forEach(function (_0x578b6b, _0x29e89b) {
            if (_0x29e89b == _0x17ecc3.season) {
              _0x578b6b.episodes.forEach(function (_0x4a02a5) {
                var _0x220aa2 = _0x4a02a5.audio.names.map(function (_0x19044a) {
                  return {
                    'language': _0x19044a
                  };
                });
                var _0x4fb1a8 = _0x4a02a5.audio.names.map(function (_0x49953c, _0x53b8ec) {
                  var _0x3b6482 = _0x4a02a5.audio.order && _0x4a02a5.audio.order[_0x53b8ec];
                  return {
                    'name': _0x49953c,
                    'order': _0x3b6482 != null ? _0x3b6482 : 0x3e8
                  };
                });
                _0x4fb1a8.sort(function (_0x521b6c, _0x3b7633) {
                  return _0x521b6c.order - _0x3b7633.order;
                });
                var _0x529787 = _0x4fb1a8.map(function (_0xd8795c) {
                  return _0xd8795c.name;
                }).filter(function (_0x547c71) {
                  return _0x547c71 && _0x547c71 !== 'delete';
                });
                var _0x535da3 = _0xc009a8(_0x1ad0cc && (_0x4a02a5.dasha || _0x4a02a5.dash) || _0x4a02a5.hls || '', true);
                _0x12bbbc.push({
                  'title': _0x4a02a5.title,
                  'quality': "360p ~ " + (_0x1ad0cc ? "1080p" : "720p"),
                  'info': _0x529787.length ? " / " + _0x201f84.uniqueNamesShortText(_0x529787, 0x50) : '',
                  'season': _0x578b6b.season,
                  'episode': parseInt(_0x4a02a5.episode),
                  'file': _0x201f84.proxyLink(_0x535da3, _0xe53f81, _0xf9f714),
                  'subtitles': _0x4a02a5.cc ? _0x4a02a5.cc.map(function (_0x4e9952) {
                    var _0x73aadf = _0xc009a8(_0x4e9952.url || '');
                    return {
                      'label': _0x4e9952.name,
                      'url': _0x201f84.processSubs(_0x201f84.proxyLink(_0x73aadf, _0xe53f81, _0xf9f714))
                    };
                  }) : false,
                  'audio_tracks': _0x220aa2.length ? _0x220aa2 : false
                });
              });
            }
          });
        } else {
          if (_0x58c581.source) {
            var _0x5bf7ba = 0x0;
            if (_0x58c581.qualityByWidth) {
              Lampa.Arrays.getKeys(_0x58c581.qualityByWidth).forEach(function (_0x44cb98) {
                var _0x402470 = _0x58c581.qualityByWidth[_0x44cb98] || 0x0;
                if (!_0x1ad0cc && _0x402470 > 0x2d0) {
                  _0x402470 = 0x0;
                }
                if (_0x402470 > _0x5bf7ba) {
                  _0x5bf7ba = _0x402470;
                }
              });
            }
            var _0x26c189 = _0x58c581.source.audio.names.map(function (_0x513a5c) {
              return {
                'language': _0x513a5c
              };
            });
            var _0x38747d = _0x58c581.source.audio.names.map(function (_0x21f6e4, _0x4889c3) {
              var _0x14874b = _0x58c581.source.audio.order && _0x58c581.source.audio.order[_0x4889c3];
              return {
                'name': _0x21f6e4,
                'order': _0x14874b != null ? _0x14874b : 0x3e8
              };
            });
            _0x38747d.sort(function (_0x1ec190, _0x41c188) {
              return _0x1ec190.order - _0x41c188.order;
            });
            var _0x5c0b3c = _0x38747d.map(function (_0xb69ad1) {
              return _0xb69ad1.name;
            }).filter(function (_0x46a5d1) {
              return _0x46a5d1 && _0x46a5d1 !== "delete";
            });
            var _0x17a61b = _0xc009a8(_0x1ad0cc && (_0x58c581.source.dasha || _0x58c581.source.dash) || _0x58c581.source.hls || '', true);
            _0x12bbbc.push({
              'title': _0x58c581.title || _0xac9be1,
              'quality': _0x5bf7ba ? _0x5bf7ba + 'p' : "360p ~ " + (_0x1ad0cc ? '1080p' : "720p"),
              'info': _0x5c0b3c.length ? " / " + _0x201f84.uniqueNamesShortText(_0x5c0b3c, 0x50) : '',
              'file': _0x201f84.proxyLink(_0x17a61b, _0xe53f81, _0xf9f714),
              'subtitles': _0x58c581.source.cc ? _0x58c581.source.cc.map(function (_0x9bd276) {
                var _0x241c60 = _0xc009a8(_0x9bd276.url || '');
                return {
                  'label': _0x9bd276.name,
                  'url': _0x201f84.processSubs(_0x201f84.proxyLink(_0x241c60, _0xe53f81, _0xf9f714))
                };
              }) : false,
              'audio_tracks': _0x26c189.length ? _0x26c189 : false
            });
          }
        }
        return _0x12bbbc;
      }
      function _0x32ef0e(_0x3d6463) {
        _0x201f84.reset();
        var _0x6d6dc7 = Lampa.Storage.cache('online_view', 0x1388, []);
        _0x3d6463.forEach(function (_0x3cbbee) {
          var _0x23f979 = Lampa.Utils.hash(_0x3cbbee.season ? [_0x3cbbee.season, _0x3cbbee.season > 0xa ? ':' : '', _0x3cbbee.episode, _0x42609a.movie.original_title].join('') : _0x42609a.movie.original_title);
          var _0x275827 = Lampa.Timeline.view(_0x23f979);
          var _0x49297d = Lampa.Template.get("online_mod", _0x3cbbee);
          var _0x41560e = Lampa.Utils.hash(_0x3cbbee.season ? [_0x3cbbee.season, _0x3cbbee.season > 0xa ? ':' : '', _0x3cbbee.episode, _0x42609a.movie.original_title, _0x3cbbee.title].join('') : _0x42609a.movie.original_title + "collaps");
          _0x3cbbee.timeline = _0x275827;
          _0x49297d.append(Lampa.Timeline.render(_0x275827));
          if (Lampa.Timeline.details) {
            _0x49297d.find(".online__quality").append(Lampa.Timeline.details(_0x275827, " / "));
          }
          if (_0x6d6dc7.indexOf(_0x41560e) !== -0x1) {
            _0x49297d.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x49297d.on("hover:enter", function (_0x509159, _0x55863e) {
            if (_0x42609a.movie.id) {
              Lampa.Favorite.add("history", _0x42609a.movie, 0x64);
            }
            if (_0x3cbbee.file) {
              var _0x43566e = [];
              var _0x407541 = {
                'url': _0x201f84.getDefaultQuality(null, _0x3cbbee.file),
                'subtitles': _0x3cbbee.subtitles,
                'translate': {
                  'tracks': _0x3cbbee.audio_tracks
                },
                'timeline': _0x3cbbee.timeline,
                'title': _0x3cbbee.season ? _0x3cbbee.title : _0xac9be1 + (_0x3cbbee.title == _0xac9be1 ? '' : " / " + _0x3cbbee.title),
                'headers': _0x1f6b71
              };
              if (_0x3cbbee.season) {
                _0x3d6463.forEach(function (_0x68699) {
                  _0x43566e.push({
                    'url': _0x201f84.getDefaultQuality(null, _0x68699.file),
                    'subtitles': _0x68699.subtitles,
                    'translate': {
                      'tracks': _0x68699.audio_tracks
                    },
                    'timeline': _0x68699.timeline,
                    'title': _0x68699.title,
                    'headers': _0x1f6b71
                  });
                });
              } else {
                _0x43566e.push(_0x407541);
              }
              if (_0x43566e.length > 0x1) {
                _0x407541.playlist = _0x43566e;
              }
              if (_0x55863e && _0x55863e.runas) {
                Lampa.Player.runas(_0x55863e.runas);
              } else {
                if (_0x203ff4) {
                  Lampa.Player.runas('lampa');
                }
              }
              Lampa.Player.play(_0x407541);
              Lampa.Player.playlist(_0x43566e);
              if (_0x6d6dc7.indexOf(_0x41560e) == -0x1) {
                _0x6d6dc7.push(_0x41560e);
                _0x49297d.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get('icon_star', {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x6d6dc7);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0x201f84.append(_0x49297d);
          _0x201f84.contextmenu({
            'item': _0x49297d,
            'view': _0x275827,
            'viewed': _0x6d6dc7,
            'hash_file': _0x41560e,
            'file': function _0x51f985(_0x321e26) {
              _0x321e26({
                'file': _0x3cbbee.file
              });
            }
          });
        });
        _0x201f84.start(true);
      }
    }
    function _0x532573(_0x4abb70, _0x4c83c5) {
      var _0x4c01be = new Lampa.Reguest();
      var _0x37639f = [];
      var _0x122429 = _0x4c83c5;
      var _0x52f547 = '';
      var _0x4da184 = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x24a84e = Lampa.Storage.field("online_mod_prefer_mp4") === true;
      var _0x18c76e = _0x4abb70.proxy("cdnmovies");
      var _0x4d8478 = _0x59443e.decodeSecret([0x24, 0x3f, 0x11, 0x6, 0x11, 0x0, 0x68, 0x5a, 0x4, 0x31, 0x28, 0x2e, 0xa, 0x1e, 0x6, 0x14, 0x28, 0x1b, 0x1e, 0x31, 0x22, 0x2e]);
      var _0x172472 = _0x4d8478 + '/';
      var _0x56dc73 = Lampa.Platform.is("android") ? {
        'Origin': _0x4d8478,
        'Referer': _0x172472,
        'User-Agent': "Mozilla/5.0 (Linux; Android 10; K; client) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.178 Mobile Safari/537.36"
      } : {};
      var _0x2dee07 = '';
      if (_0x18c76e) {
        _0x2dee07 += "param/Origin=" + encodeURIComponent(_0x4d8478) + '/';
        _0x2dee07 += "param/Referer=" + encodeURIComponent(_0x172472) + '/';
        _0x2dee07 += 'param/User-Agent=' + encodeURIComponent("Mozilla/5.0 (Linux; Android 10; K; client) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.178 Mobile Safari/537.36") + '/';
      }
      var _0x2b5dea = '';
      if (_0x18c76e) {
        _0x2b5dea += "param/Origin=" + encodeURIComponent("https://cdnmovies-stream.online") + '/';
        _0x2b5dea += "param/Referer=" + encodeURIComponent("https://cdnmovies-stream.online/") + '/';
        _0x2b5dea += "param/User-Agent=" + encodeURIComponent("Mozilla/5.0 (Linux; Android 10; K; client) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.178 Mobile Safari/537.36") + '/';
      }
      var _0x2eda9f = {};
      var _0x3467f5 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      function _0x59d5e5(_0x4fa237, _0x2de9f4, _0x1a6f4c) {
        var _0x3c7d39 = function _0x548e3d(_0x38a619) {
          if (_0x2de9f4) {
            _0x2de9f4(_0x38a619 || '');
          }
        };
        var _0x4bcaa7 = function _0x4041d8(_0x41ab75, _0x265cb7) {
          if ((_0x41ab75.status == 0x194 || _0x41ab75.status == 0x193) && (!_0x41ab75.responseText || _0x41ab75.responseText.indexOf("<title>Not Found</title>") !== -0x1 || _0x41ab75.responseText.indexOf("Не найдено!") !== -0x1 || _0x41ab75.responseText.indexOf("Контент не найден или недоступен в вашем регионе!") !== -0x1) || _0x41ab75.status == 0x0 && _0x41ab75.statusText !== "timeout") {
            if (_0x2de9f4) {
              _0x2de9f4('');
            }
          } else {
            if (_0x1a6f4c) {
              _0x1a6f4c(_0x4c01be.errorDecode(_0x41ab75, _0x265cb7));
            }
          }
        };
        {
          var _0x4f80a9 = $("head meta[name=\"referrer\"]");
          var _0xe4e092 = _0x4f80a9.attr("content") || "never";
          _0x4f80a9.attr("content", "origin");
          try {
            _0x4c01be.clear();
            _0x4c01be.timeout(0x2710);
            _0x4c01be.native(_0x4abb70.proxyLink("https://cdnmovies-stream.online/" + _0x4fa237, _0x18c76e, _0x2dee07), _0x3c7d39, _0x4bcaa7, false, {
              'dataType': "text",
              'headers': _0x56dc73
            });
          } finally {
            _0x4f80a9.attr("content", _0xe4e092);
          }
        }
      }
      this.search = function (_0x34e752, _0x591a9b) {
        _0x122429 = _0x34e752;
        _0x52f547 = _0x122429.search || _0x122429.movie.title;
        var _0x1cde6f = function _0x57abab() {
          _0x4abb70.emptyForQuery(_0x52f547);
        };
        var _0x2abd3d = _0x4abb70.empty.bind(_0x4abb70);
        var _0x4e7044 = (+_0x591a9b ? "kinopoisk/" : "imdb/") + _0x591a9b + "/iframe";
        _0x59d5e5(_0x4e7044, function (_0x47427b) {
          _0x58331a(_0x47427b || '', function () {
            if (!_0x122429.clarification && _0x122429.movie.imdb_id && _0x591a9b != _0x122429.movie.imdb_id) {
              _0x59d5e5("imdb/" + _0x122429.movie.imdb_id + "/iframe", function (_0x33bb27) {
                _0x58331a(_0x33bb27 || '', _0x1cde6f);
              }, _0x2abd3d);
            } else {
              _0x1cde6f();
            }
          });
        }, _0x2abd3d);
      };
      this.extendChoice = function (_0x3c7a85) {
        Lampa.Arrays.extend(_0x3467f5, _0x3c7a85, true);
      };
      this.reset = function () {
        _0x4abb70.reset();
        _0x3467f5 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x1339ec();
        _0x49eb6e(_0x2aaee5());
        _0x4abb70.saveChoice(_0x3467f5);
      };
      this.filter = function (_0x2775dc, _0x5eb041, _0x125fc9) {
        _0x3467f5[_0x5eb041.stype] = _0x125fc9.index;
        if (_0x5eb041.stype == "voice") {
          _0x3467f5.voice_name = _0x2eda9f.voice[_0x125fc9.index];
        }
        _0x4abb70.reset();
        _0x1339ec();
        _0x49eb6e(_0x2aaee5());
        _0x4abb70.saveChoice(_0x3467f5);
      };
      this.destroy = function () {
        _0x4c01be.clear();
        _0x37639f = null;
      };
      function _0x58331a(_0x44ba62, _0x3727b8) {
        _0x44ba62 = (_0x44ba62 || '').replace(/\n/g, '');
        var _0x353e7b = _0x44ba62.match(/Playerjs\(({.*?})\);/);
        var _0xc4d880;
        try {
          _0xc4d880 = _0x353e7b && (0x0, eval)("\"use strict\"; (function(){ return " + _0x353e7b[0x1] + "; })();");
        } catch (_0x3d8f85) {}
        var _0x1a27bb;
        var _0x374ac7 = _0xc4d880 && _0xc4d880.file && _0x469404(_0xc4d880.file);
        try {
          _0x1a27bb = _0x374ac7 && JSON.parse(_0x374ac7);
        } catch (_0x1a4423) {}
        if (_0x1a27bb && _0x1a27bb.forEach) {
          _0x4abb70.loading(false);
          _0x37639f = _0x1a27bb;
          _0x1339ec();
          _0x49eb6e(_0x2aaee5());
        } else {
          _0x3727b8();
        }
      }
      function _0x469404(_0x5537b0) {
        if (!(_0x5537b0.lastIndexOf('#', 0x0) === 0x0)) {
          return _0x5537b0;
        }
        var _0x46626f = function _0x4318b5(_0x358516) {
          return btoa(encodeURIComponent(_0x358516).replace(/%([0-9A-F]{2})/g, function (_0x5d3bae, _0x1bb1e1) {
            return String.fromCharCode('0x' + _0x1bb1e1);
          }));
        };
        var _0x19a1cb = function _0x1b683c(_0x549f74) {
          return decodeURIComponent(atob(_0x549f74).split('').map(function (_0xb1691f) {
            return '%' + ('00' + _0xb1691f.charCodeAt(0x0).toString(0x10)).slice(-0x2);
          }).join(''));
        };
        var _0x4183c5 = ["wNp2wBTNcPRQvTC0_CpxCsq_8T1u9Q", "md-Od2G9RWOgSa5HoBSSbWrCyIqQyY", "kzuOYQqB_QSOL-xzN_Kz3kkgkHhHit", '6-xQWMh7ertLp8t_M9huUDk1M0VrYJ', 'RyTwtf15_GLEsXxnpU4Ljjd0ReY-VH'];
        var _0x2e208d = _0x5537b0.substring(0x2);
        _0x4183c5.forEach(function (_0x2dff64) {
          _0x2e208d = _0x2e208d.replace('//' + _0x46626f(_0x2dff64), '');
        });
        try {
          _0x2e208d = _0x19a1cb(_0x2e208d);
        } catch (_0x13a5a3) {
          _0x2e208d = '';
        }
        return _0x2e208d;
      }
      function _0x2a9008(_0x178968, _0x372e1f) {
        if (!_0x178968) {
          return [];
        }
        try {
          var _0x168d2b = _0x4abb70.parsePlaylist(_0x178968).map(function (_0x482403) {
            var _0x51f0f5 = _0x482403.label.match(/(\d\d\d+)/);
            var _0x48bfca = _0x482403.links[0x0] || '';
            _0x48bfca = _0x48bfca.replace("/sundb.coldcdn.xyz/", "/sundb.nl/");
            _0x48bfca = _0x4abb70.fixLinkProtocol(_0x48bfca, _0x4da184, true);
            if (_0x24a84e) {
              _0x48bfca = _0x48bfca.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
            }
            return {
              'label': _0x482403.label,
              'quality': _0x51f0f5 ? parseInt(_0x51f0f5[0x1]) : NaN,
              'file': _0x4abb70.proxyLink(_0x48bfca, _0x18c76e, _0x2b5dea)
            };
          });
          _0x168d2b.sort(function (_0x3d2618, _0x51e8e0) {
            if (_0x51e8e0.quality > _0x3d2618.quality) {
              return 0x1;
            }
            if (_0x51e8e0.quality < _0x3d2618.quality) {
              return -0x1;
            }
            if (_0x51e8e0.label > _0x3d2618.label) {
              return 0x1;
            }
            if (_0x51e8e0.label < _0x3d2618.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x168d2b;
        } catch (_0x51192a) {}
        return [];
      }
      function _0x41461e(_0x3c20a5, _0x31e20b, _0x5d095c, _0x232d06, _0x172e16, _0x622837) {
        var _0x1bff64 = '';
        var _0x940c4f = false;
        var _0x41af42 = _0x232d06(_0x172e16, _0x622837);
        if (_0x41af42 && _0x41af42.length) {
          _0x1bff64 = _0x41af42[0x0].file;
          _0x940c4f = {};
          _0x41af42.forEach(function (_0xa1c3b1) {
            _0x940c4f[_0xa1c3b1.label] = _0xa1c3b1.file;
          });
        }
        if (_0x1bff64) {
          _0x3c20a5.stream = _0x1bff64;
          _0x3c20a5.qualitys = _0x940c4f;
          _0x31e20b(_0x3c20a5);
        } else {
          _0x5d095c();
        }
      }
      function _0xcbb82a(_0x1a8560, _0x3eff45, _0x9a93a6) {
        if (_0x1a8560.stream) {
          return _0x3eff45(_0x1a8560);
        }
        var _0x38cf67 = _0x1a8560.file || '';
        if (_0x38cf67.lastIndexOf('[', 0x0) === 0x0) {
          _0x41461e(_0x1a8560, _0x3eff45, _0x9a93a6, _0x2a9008, _0x38cf67, '');
          return;
        }
        _0x38cf67 = _0x38cf67.replace("/sundb.coldcdn.xyz/", "/sundb.nl/");
        _0x38cf67 = _0x4abb70.fixLinkProtocol(_0x38cf67, _0x4da184, true);
        if (_0x24a84e) {
          _0x38cf67 = _0x38cf67.replace(/(\.mp4):hls:manifest\.m3u8$/i, '$1');
        }
        if (_0x38cf67) {
          _0x1a8560.stream = _0x4abb70.proxyLink(_0x38cf67, _0x18c76e, _0x2b5dea);
          _0x1a8560.qualitys = false;
          _0x3eff45(_0x1a8560);
        } else {
          _0x9a93a6();
        }
      }
      function _0x1339ec() {
        _0x2eda9f = {
          'season': [],
          'voice': []
        };
        var _0x307bcc = [];
        _0x37639f.forEach(function (_0x5e7ed0) {
          if (_0x5e7ed0.folder) {
            _0x5e7ed0.title = _0x5e7ed0.title || _0x5e7ed0.comment || '';
            _0x5e7ed0.season_num = parseInt(_0x5e7ed0.title.match(/\d+/));
            _0x307bcc.push(_0x5e7ed0);
          }
        });
        _0x307bcc.sort(function (_0x185b05, _0x24be0e) {
          var _0x445de3 = _0x185b05.season_num - _0x24be0e.season_num;
          if (_0x445de3) {
            return _0x445de3;
          }
          if (_0x185b05.title > _0x24be0e.title) {
            return 0x1;
          }
          if (_0x185b05.title < _0x24be0e.title) {
            return -0x1;
          }
          return 0x0;
        });
        _0x2eda9f.season = _0x307bcc.map(function (_0xca827e) {
          return _0xca827e.title;
        });
        if (!_0x2eda9f.season[_0x3467f5.season]) {
          _0x3467f5.season = 0x0;
        }
        var _0x454d68 = _0x307bcc[_0x3467f5.season];
        if (_0x454d68 && _0x454d68.folder) {
          _0x454d68.folder.forEach(function (_0x5506f9) {
            if (_0x5506f9.folder) {
              _0x5506f9.folder.forEach(function (_0x1006cc) {
                var _0x27dc33 = _0x1006cc.title || _0x1006cc.comment || '';
                if (_0x2eda9f.voice.indexOf(_0x27dc33) == -0x1) {
                  _0x2eda9f.voice.push(_0x27dc33);
                }
              });
            }
          });
        }
        if (!_0x2eda9f.voice[_0x3467f5.voice]) {
          _0x3467f5.voice = 0x0;
        }
        if (_0x3467f5.voice_name) {
          var _0x3b5152 = _0x2eda9f.voice.indexOf(_0x3467f5.voice_name);
          if (_0x3b5152 == -0x1) {
            _0x3467f5.voice = 0x0;
          } else if (_0x3b5152 !== _0x3467f5.voice) {
            _0x3467f5.voice = _0x3b5152;
          }
        }
        _0x4abb70.filter(_0x2eda9f, _0x3467f5);
      }
      function _0x2f1fd8(_0x4e6445) {
        if (!_0x4e6445) {
          return false;
        }
        var _0x415289 = _0x4abb70.parsePlaylist(_0x4e6445).map(function (_0x125bf9) {
          var _0xb143b = _0x125bf9.links[0x0] || '';
          _0xb143b = _0xb143b.replace('/sundb.coldcdn.xyz/', "/sundb.nl/");
          _0xb143b = _0x4abb70.fixLinkProtocol(_0xb143b, _0x4da184, true);
          return {
            'label': _0x125bf9.label,
            'url': _0x4abb70.processSubs(_0x4abb70.proxyLink(_0xb143b, _0x18c76e, _0x2b5dea))
          };
        });
        return _0x415289.length ? _0x415289 : false;
      }
      function _0x2aaee5() {
        var _0x26f8e8 = [];
        _0x37639f.forEach(function (_0x441972) {
          if (_0x441972.folder) {
            var _0x3618ce = _0x441972.title || _0x441972.comment || '';
            if (_0x3618ce == _0x2eda9f.season[_0x3467f5.season]) {
              _0x441972.folder.forEach(function (_0xb4cdf5) {
                if (_0xb4cdf5.folder) {
                  var _0x21d456 = _0xb4cdf5.title || _0xb4cdf5.comment || '';
                  var _0x4560b7 = false;
                  var _0x513787 = false;
                  _0xb4cdf5.folder.forEach(function (_0x1a65c3) {
                    var _0x91d9ce = _0x1a65c3.title || _0x1a65c3.comment || '';
                    if (!_0x4560b7 && _0x91d9ce == _0x2eda9f.voice[_0x3467f5.voice] && _0x1a65c3.file) {
                      if (_0x1a65c3.file.indexOf("//sarnage.cc/") !== -0x1) {
                        _0x513787 = true;
                      } else {
                        _0x4560b7 = true;
                        var _0xcd93db = parseInt(_0x21d456.match(/\d+/));
                        var _0x321ba2 = parseInt(_0x3618ce.match(/\d+/));
                        _0x26f8e8.push({
                          'title': _0x4abb70.formatEpisodeTitle(_0x321ba2, _0xcd93db),
                          'quality': "360p ~ 1080p",
                          'info': " / " + Lampa.Utils.shortText(_0x91d9ce, 0x32),
                          'season': _0x321ba2,
                          'episode': _0xcd93db,
                          'file': _0x1a65c3.file,
                          'subtitles': _0x2f1fd8(_0x1a65c3.subtitle)
                        });
                      }
                    }
                  });
                  if (!_0x4560b7 && _0x513787) {
                    _0xb4cdf5.folder.forEach(function (_0x2b326e) {
                      var _0x140a48 = _0x2b326e.title || _0x2b326e.comment || '';
                      if (!_0x4560b7 && _0x140a48 == _0x2eda9f.voice[_0x3467f5.voice] && _0x2b326e.file) {
                        _0x4560b7 = true;
                        var _0x133028 = parseInt(_0x21d456.match(/\d+/));
                        var _0x9d89b0 = parseInt(_0x3618ce.match(/\d+/));
                        _0x26f8e8.push({
                          'title': _0x4abb70.formatEpisodeTitle(_0x9d89b0, _0x133028),
                          'quality': "360p ~ 1080p",
                          'info': " / " + Lampa.Utils.shortText(_0x140a48, 0x32),
                          'season': _0x9d89b0,
                          'episode': _0x133028,
                          'file': _0x2b326e.file,
                          'subtitles': _0x2f1fd8(_0x2b326e.subtitle)
                        });
                      }
                    });
                  }
                }
              });
            }
          } else {
            _0x26f8e8.push({
              'title': _0x441972.title || _0x441972.comment || _0x52f547,
              'quality': "360p ~ 1080p",
              'info': '',
              'file': _0x441972.file,
              'subtitles': _0x2f1fd8(_0x441972.subtitle)
            });
          }
        });
        return _0x26f8e8;
      }
      function _0x49eb6e(_0x598c6d) {
        _0x4abb70.reset();
        var _0x17bdad = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x1cdc94 = _0x4abb70.getLastEpisode(_0x598c6d);
        _0x598c6d.forEach(function (_0x49bb89) {
          if (_0x49bb89.season) {
            _0x49bb89.translate_episode_end = _0x1cdc94;
            _0x49bb89.translate_voice = _0x2eda9f.voice[_0x3467f5.voice];
          }
          var _0xc94ba3 = Lampa.Utils.hash(_0x49bb89.season ? [_0x49bb89.season, _0x49bb89.season > 0xa ? ':' : '', _0x49bb89.episode, _0x122429.movie.original_title].join('') : _0x122429.movie.original_title);
          var _0x9daa99 = Lampa.Timeline.view(_0xc94ba3);
          var _0x5f4f0f = Lampa.Template.get('online_mod', _0x49bb89);
          var _0xbbf1d0 = Lampa.Utils.hash(_0x49bb89.season ? [_0x49bb89.season, _0x49bb89.season > 0xa ? ':' : '', _0x49bb89.episode, _0x122429.movie.original_title, _0x2eda9f.voice[_0x3467f5.voice]].join('') : _0x122429.movie.original_title + _0x49bb89.title);
          _0x49bb89.timeline = _0x9daa99;
          _0x5f4f0f.append(Lampa.Timeline.render(_0x9daa99));
          if (Lampa.Timeline.details) {
            _0x5f4f0f.find('.online__quality').append(Lampa.Timeline.details(_0x9daa99, " / "));
          }
          if (_0x17bdad.indexOf(_0xbbf1d0) !== -0x1) {
            _0x5f4f0f.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
          }
          _0x5f4f0f.on("hover:enter", function () {
            if (_0x49bb89.loading) {
              return;
            }
            if (_0x122429.movie.id) {
              Lampa.Favorite.add('history', _0x122429.movie, 0x64);
            }
            _0x49bb89.loading = true;
            _0xcbb82a(_0x49bb89, function (_0x38a043) {
              _0x38a043.loading = false;
              var _0x31a5a5 = {
                'url': _0x4abb70.getDefaultQuality(_0x38a043.qualitys, _0x38a043.stream),
                'quality': _0x4abb70.renameQualityMap(_0x38a043.qualitys),
                'subtitles': _0x38a043.subtitles,
                'timeline': _0x38a043.timeline,
                'title': _0x38a043.season ? _0x38a043.title : _0x52f547 + (_0x38a043.title == _0x52f547 ? '' : " / " + _0x38a043.title)
              };
              Lampa.Player.play(_0x31a5a5);
              if (_0x38a043.season && Lampa.Platform.version) {
                var _0x4fb25c = [];
                _0x598c6d.forEach(function (_0x10bf9b) {
                  if (_0x10bf9b == _0x38a043) {
                    _0x4fb25c.push(_0x31a5a5);
                  } else {
                    var _0x5c4da0 = {
                      'url': function _0x534e17(_0x108f58) {
                        _0xcbb82a(_0x10bf9b, function (_0x30a3c7) {
                          _0x5c4da0.url = _0x4abb70.getDefaultQuality(_0x30a3c7.qualitys, _0x30a3c7.stream);
                          _0x5c4da0.quality = _0x4abb70.renameQualityMap(_0x30a3c7.qualitys);
                          _0x5c4da0.subtitles = _0x30a3c7.subtitles;
                          _0x108f58();
                        }, function () {
                          _0x5c4da0.url = '';
                          _0x108f58();
                        });
                      },
                      'timeline': _0x10bf9b.timeline,
                      'title': _0x10bf9b.title
                    };
                    _0x4fb25c.push(_0x5c4da0);
                  }
                });
                Lampa.Player.playlist(_0x4fb25c);
              } else {
                Lampa.Player.playlist([_0x31a5a5]);
              }
              if (_0x17bdad.indexOf(_0xbbf1d0) == -0x1) {
                _0x17bdad.push(_0xbbf1d0);
                _0x5f4f0f.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x17bdad);
              }
            }, function () {
              _0x49bb89.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0x4abb70.append(_0x5f4f0f);
          _0x4abb70.contextmenu({
            'item': _0x5f4f0f,
            'view': _0x9daa99,
            'viewed': _0x17bdad,
            'hash_file': _0xbbf1d0,
            'element': _0x49bb89,
            'file': function _0x159a33(_0x358930) {
              _0xcbb82a(_0x49bb89, function (_0xf42d70) {
                _0x358930({
                  'file': _0xf42d70.stream,
                  'quality': _0xf42d70.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0x4abb70.start(true);
      }
    }
    function _0x57dfa8(_0x2a0fc9, _0x18f979, _0x6a22d1) {
      var _0x291872 = new Lampa.Reguest();
      var _0x43614b = {};
      var _0x1e1bc4 = _0x18f979;
      var _0x1ee09f = _0x2a0fc9.proxy('filmix');
      var _0x2fca36 = _0x2a0fc9.proxy("filmix_site");
      var _0x3f31d9 = _0x2a0fc9.proxy('filmix_abuse');
      var _0x298577 = _0x59443e.filmixHost();
      var _0x269999 = _0x298577 + '/';
      var _0x2a963b = _0x59443e.baseUserAgent();
      var _0x2e95b6 = _0x59443e.filmixAppHost() + '/api/v2/';
      var _0x1e9ffc = Lampa.Platform.is('android') ? {
        'User-Agent': _0x59443e.filmixUserAgent()
      } : {};
      var _0x494572 = '';
      if (_0x1ee09f) {
        _0x494572 += "param/User-Agent=" + encodeURIComponent(_0x59443e.filmixUserAgent()) + '/';
      }
      var _0x2c6f9b = Lampa.Platform.is('android') ? {
        'Origin': _0x298577,
        'Referer': _0x269999,
        'User-Agent': _0x2a963b,
        'X-Requested-With': "XMLHttpRequest"
      } : {
        'X-Requested-With': "XMLHttpRequest"
      };
      var _0x8a2a12 = '';
      if (_0x2fca36) {
        _0x8a2a12 += 'param/Origin=' + encodeURIComponent(_0x298577) + '/';
        _0x8a2a12 += "param/Referer=" + encodeURIComponent(_0x269999) + '/';
        _0x8a2a12 += "param/User-Agent=" + encodeURIComponent(_0x2a963b) + '/';
      }
      var _0x4907b9 = '';
      var _0x3ee367 = Lampa.Storage.field('online_mod_prefer_http') === true;
      var _0x5b1899 = {};
      var _0x4aefd5 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      var _0x212241 = '';
      var _0x810aa8 = '';
      function _0x23ed38(_0x58bc16) {
        {
          if (_0x58bc16) {
            _0x58bc16();
          }
          return;
        }
      }
      if (!window.mod_filmix) {
        window.mod_filmix = {
          'max_qualitie': 0x1e0,
          'is_max_qualitie': false
        };
      }
      var _0x2172ab = Lampa.Storage.get("filmix_token", '') + '';
      var _0x22c455 = _0x59443e.filmixToken(_0x59443e.randomHex(0x10), _0x2172ab || "aaaabbbbccccddddeeeeffffaaaabbbb");
      var _0x216ab4 = _0x3f31d9 ? _0x59443e.filmixToken(_0x59443e.randomHex(0x10), "aaaabbbbccccddddeeeeffffaaaabbbb") : '';
      this.search = function (_0x5cd20e, _0x2d70e7, _0x54cebf) {
        var _0x3aed7c = this;
        _0x1e1bc4 = _0x5cd20e;
        _0x4907b9 = _0x1e1bc4.search || _0x1e1bc4.movie.title;
        if (this.wait_similars && _0x54cebf && _0x54cebf[0x0].is_similars) {
          return _0x2b8003(_0x54cebf[0x0].id);
        }
        var _0x3bebce = _0x1e1bc4.search_date || !_0x1e1bc4.clarification && (_0x1e1bc4.movie.release_date || _0x1e1bc4.movie.first_air_date || _0x1e1bc4.movie.last_air_date) || "0000";
        var _0xe84fc3 = parseInt((_0x3bebce + '').slice(0x0, 0x4));
        var _0x846413 = [];
        if (_0x1e1bc4.movie.alternative_titles && _0x1e1bc4.movie.alternative_titles.results) {
          _0x846413 = _0x1e1bc4.movie.alternative_titles.results.map(function (_0x588a5b) {
            return _0x588a5b.title;
          });
        }
        if (_0x1e1bc4.movie.original_title) {
          _0x846413.push(_0x1e1bc4.movie.original_title);
        }
        if (_0x1e1bc4.movie.original_name) {
          _0x846413.push(_0x1e1bc4.movie.original_name);
        }
        var _0x5b856e = _0x2a0fc9.cleanTitle(_0x4907b9).replace(/\b(\d\d\d\d+)\b/g, "+$1");
        var _0x5f4914 = _0x1e1bc4.movie.release_date || _0x1e1bc4.movie.first_air_date || _0x1e1bc4.movie.last_air_date || '0000';
        var _0x272913 = parseInt((_0x5f4914 + '').slice(0x0, 0x4));
        if (_0x272913) {
          _0x5b856e = _0x5b856e.replace(new RegExp(" \\+(" + _0x272913 + ')$'), " $1");
        }
        var _0x41a493 = function _0x3fb9c9(_0x7e77d) {
          if (_0x7e77d && _0x7e77d.length && _0x7e77d.forEach) {
            var _0x3a6a3c = false;
            _0x7e77d.forEach(function (_0x293eb7) {
              if (!_0x293eb7.orig_title) {
                _0x293eb7.orig_title = _0x293eb7.original_title || _0x293eb7.original_name;
              }
              if (!_0x293eb7.year && _0x293eb7.alt_name) {
                _0x293eb7.year = parseInt(_0x293eb7.alt_name.split('-').pop());
              }
            });
            var _0x4d2abe = _0x7e77d;
            if (_0x4d2abe.length) {
              if (_0x846413.length) {
                var _0xb6a892 = _0x4d2abe.filter(function (_0x41b796) {
                  return _0x2a0fc9.containsAnyTitle([_0x41b796.orig_title, _0x41b796.title], _0x846413);
                });
                if (_0xb6a892.length) {
                  _0x4d2abe = _0xb6a892;
                  _0x3a6a3c = true;
                }
              }
              if (_0x4907b9) {
                var _0x5c434f = _0x4d2abe.filter(function (_0x3e8349) {
                  return _0x2a0fc9.containsAnyTitle([_0x3e8349.title, _0x3e8349.orig_title], [_0x4907b9]);
                });
                if (_0x5c434f.length) {
                  _0x4d2abe = _0x5c434f;
                  _0x3a6a3c = true;
                }
              }
              if (_0x4d2abe.length > 0x1 && _0xe84fc3) {
                var _0x514b7a = _0x4d2abe.filter(function (_0x44c70e) {
                  return _0x44c70e.year == _0xe84fc3;
                });
                if (!_0x514b7a.length) {
                  _0x514b7a = _0x4d2abe.filter(function (_0x313d74) {
                    return _0x313d74.year && _0x313d74.year > _0xe84fc3 - 0x2 && _0x313d74.year < _0xe84fc3 + 0x2;
                  });
                }
                if (_0x514b7a.length) {
                  _0x4d2abe = _0x514b7a;
                }
              }
            }
            if (_0x4d2abe.length == 0x1 && _0x3a6a3c) {
              if (_0xe84fc3 && _0x4d2abe[0x0].year) {
                _0x3a6a3c = _0x4d2abe[0x0].year > _0xe84fc3 - 0x2 && _0x4d2abe[0x0].year < _0xe84fc3 + 0x2;
              }
              if (_0x3a6a3c) {
                _0x3a6a3c = false;
                if (_0x846413.length) {
                  _0x3a6a3c |= _0x2a0fc9.equalAnyTitle([_0x4d2abe[0x0].orig_title, _0x4d2abe[0x0].title], _0x846413);
                }
                if (_0x4907b9) {
                  _0x3a6a3c |= _0x2a0fc9.equalAnyTitle([_0x4d2abe[0x0].title, _0x4d2abe[0x0].orig_title], [_0x4907b9]);
                }
              }
            }
            if (_0x4d2abe.length == 0x1 && _0x3a6a3c) {
              _0x2b8003(_0x4d2abe[0x0].id);
            } else {
              if (_0x7e77d.length) {
                _0x3aed7c.wait_similars = true;
                _0x7e77d.forEach(function (_0x3a2663) {
                  _0x3a2663.is_similars = true;
                  _0x3a2663.seasons_count = _0x3a2663.last_episode && _0x3a2663.last_episode.season;
                  _0x3a2663.episodes_count = _0x3a2663.last_episode && _0x3a2663.last_episode.episode;
                });
                _0x2a0fc9.similars(_0x7e77d);
                _0x2a0fc9.loading(false);
              } else {
                _0x2a0fc9.emptyForQuery(_0x4907b9);
              }
            }
          } else {
            _0x2a0fc9.emptyForQuery(_0x4907b9);
          }
        };
        var _0x37616c = function _0x1d05fc() {
          var _0x2e7450 = _0x269999 + "api/v2/suggestions?search_word=" + encodeURIComponent(_0x5b856e);
          _0x291872.clear();
          _0x291872.timeout(0x3a98);
          _0x291872.native(_0x2a0fc9.proxyLink(_0x2e7450, _0x2fca36, _0x8a2a12, "enc2t"), function (_0x48aa37) {
            _0x41a493(_0x48aa37 && _0x48aa37.posts || []);
          }, function (_0x287748, _0x116823) {
            _0x2a0fc9.empty(_0x291872.errorDecode(_0x287748, _0x116823));
          }, false, {
            'headers': _0x2c6f9b
          });
        };
        var _0x3b6b62 = function _0x22fd57(_0x5de2c0) {
          var _0x3bc5cf = _0x2e95b6 + 'search' + (_0x5de2c0 ? _0x216ab4 : _0x22c455);
          _0x3bc5cf = Lampa.Utils.addUrlComponent(_0x3bc5cf, 'story=' + encodeURIComponent(_0x5b856e));
          _0x3bc5cf = _0x5de2c0 ? _0x2a0fc9.proxyLink(_0x3bc5cf, _0x3f31d9, '', '') : _0x2a0fc9.proxyLink(_0x3bc5cf, _0x1ee09f, _0x494572, "enc2t");
          _0x291872.clear();
          _0x291872.timeout(0x3a98);
          _0x291872.native(_0x3bc5cf, function (_0x3ce3dd) {
            if (_0x3ce3dd && _0x3ce3dd.length && _0x3ce3dd.forEach) {
              _0x41a493(_0x3ce3dd);
            } else {
              _0x37616c();
            }
          }, function (_0x389bca, _0xf3dea3) {
            if (!_0x5de2c0 && _0x216ab4) {
              _0x22fd57(true);
            } else {
              _0x37616c();
            }
          }, false, {
            'headers': _0x1e9ffc
          });
        };
        _0x23ed38(function () {
          return _0x3b6b62();
        });
      };
      function _0x2b8003(_0x5626db, _0xe9378c, _0x165cb1, _0x5e4829) {
        if (!_0x6a22d1 && !window.mod_filmix.is_max_qualitie) {
          window.mod_filmix.is_max_qualitie = true;
          _0x2172ab = Lampa.Storage.get("filmix_token", '') + '';
          _0x22c455 = _0x59443e.filmixToken(_0x59443e.randomHex(0x10), _0x2172ab || "aaaabbbbccccddddeeeeffffaaaabbbb");
          if (_0x2172ab) {
            var _0x4c60b7 = _0x2e95b6 + "user_profile" + _0x22c455;
            _0x291872.clear();
            _0x291872.timeout(0x3a98);
            _0x291872.native(_0x2a0fc9.proxyLink(_0x4c60b7, _0x1ee09f, _0x494572, 'enc2t'), function (_0x33f5d8) {
              if (_0x33f5d8 && _0x33f5d8.user_data) {
                window.mod_filmix.max_qualitie = 0x2d0;
                if (_0x33f5d8.user_data.is_pro) {
                  window.mod_filmix.max_qualitie = 0x438;
                }
                if (_0x33f5d8.user_data.is_pro_plus) {
                  window.mod_filmix.max_qualitie = 0x870;
                }
              }
              _0x52254a();
            }, function (_0x56bcbf, _0x4a07df) {
              _0x52254a();
            }, false, {
              'headers': _0x1e9ffc
            });
          } else {
            _0x52254a();
          }
        } else {
          _0x52254a();
        }
        function _0x52254a() {
          var _0x585a89 = _0x2e95b6 + "post/" + _0x5626db + (_0xe9378c ? _0x216ab4 : _0x22c455);
          _0x585a89 = _0xe9378c ? _0x2a0fc9.proxyLink(_0x585a89, _0x3f31d9, '', '') : _0x2a0fc9.proxyLink(_0x585a89, _0x1ee09f, _0x494572, "enc2t");
          var _0x5b3d27 = function _0x2ddd9b(_0x133c5) {
            if (_0xe9378c && _0x165cb1) {
              _0x5d6695(_0x165cb1);
            } else {
              if (!_0xe9378c && _0x216ab4) {
                _0x2b8003(_0x5626db, true, null, true);
              } else {
                if (_0x133c5) {
                  _0x2a0fc9.empty(_0x133c5);
                } else {
                  _0x2a0fc9.emptyForQuery(_0x4907b9);
                }
              }
            }
          };
          _0x291872.clear();
          _0x291872.timeout(0x3a98);
          _0x291872.native(_0x585a89, function (_0x17ce53) {
            var _0x4c23dc = _0x17ce53 && _0x17ce53.player_links || {};
            if (_0x4c23dc.movie && Object.keys(_0x4c23dc.movie).length > 0x0 || _0x4c23dc.playlist && Object.keys(_0x4c23dc.playlist).length > 0x0) {
              if (!_0xe9378c && _0x216ab4 && _0x3b34f9(_0x17ce53)) {
                _0x2b8003(_0x5626db, true, _0x17ce53);
              } else {
                _0x5d6695(_0x17ce53, _0x5e4829);
              }
            } else {
              console.log("Filmix", "not found:", _0x5626db, _0x4c23dc.movie, _0x4c23dc.playlist);
              _0x5b3d27();
            }
          }, function (_0x28fea7, _0x52ae5c) {
            console.log("Filmix", "error:", _0x5626db, _0x291872.errorDecode(_0x28fea7, _0x52ae5c));
            _0x5b3d27(_0x291872.errorDecode(_0x28fea7, _0x52ae5c));
          }, false, {
            'headers': _0x1e9ffc
          });
        }
      }
      this.extendChoice = function (_0x54b9a2) {
        Lampa.Arrays.extend(_0x4aefd5, _0x54b9a2, true);
      };
      this.reset = function () {
        _0x2a0fc9.reset();
        _0x4aefd5 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x191f85();
        _0x3b7942(_0x22ba09());
        _0x2a0fc9.saveChoice(_0x4aefd5);
      };
      this.filter = function (_0x57f960, _0x5d5049, _0x32e03b) {
        _0x4aefd5[_0x5d5049.stype] = _0x32e03b.index;
        if (_0x5d5049.stype == "voice") {
          _0x4aefd5.voice_name = _0x5b1899.voice[_0x32e03b.index];
        }
        _0x2a0fc9.reset();
        _0x191f85();
        _0x3b7942(_0x22ba09());
        _0x2a0fc9.saveChoice(_0x4aefd5);
      };
      this.destroy = function () {
        _0x291872.clear();
        _0x43614b = null;
      };
      function _0x5d6695(_0x9a31b, _0x49de34) {
        _0x2a0fc9.loading(false);
        _0x582878(_0x9a31b, _0x49de34);
        _0x191f85();
        _0x3b7942(_0x22ba09());
      }
      function _0x3b34f9(_0x1d4918) {
        var _0x5392d5 = _0x1d4918.player_links || {};
        if (_0x5392d5.movie && Object.keys(_0x5392d5.movie).length > 0x0) {
          for (var _0x4b9ec2 in _0x5392d5.movie) {
            var _0x2a6a8a = _0x5392d5.movie[_0x4b9ec2];
            var _0x17c119 = _0x2a6a8a.link || '';
            if (_0x2a6a8a.translation === "Заблокировано правообладателем!" && _0x17c119.indexOf("/abuse_") !== -0x1) {
              var _0x49dc3e = _0x17c119.match(/https?:\/\/[^\/]+(\/s\/[^\/]*\/)/);
              if (_0x49dc3e) {
                {
                  _0x212241 = '$1' + _0x49dc3e[0x1];
                  _0x810aa8 = '';
                }
                console.log("Filmix", 'abuse:', _0x1d4918.id, Object.keys(_0x5392d5.movie).length);
                return true;
              }
            }
          }
        }
        return false;
      }
      function _0x582878(_0x36eb36, _0x124159) {
        _0x43614b = {};
        var _0x42d5ae = _0x124159 ? 0x1e0 : _0x6a22d1 ? 0x870 : window.mod_filmix.max_qualitie;
        var _0xe66d93 = _0x36eb36.player_links || {};
        if (_0xe66d93.playlist && Object.keys(_0xe66d93.playlist).length > 0x0) {
          var _0x338739 = [];
          var _0x4deaeb = 0x0;
          for (var _0x498d96 in _0xe66d93.playlist) {
            var _0x141d2c = _0xe66d93.playlist[_0x498d96];
            var _0x120e8f = [];
            ++_0x4deaeb;
            for (var _0x15fe95 in _0x141d2c) {
              var _0x54967a = _0x141d2c[_0x15fe95];
              var _0x15f1ee = [];
              var _0x543b78 = 0x0;
              for (var _0x34f753 in _0x54967a) {
                var _0x15f435 = _0x54967a[_0x34f753];
                ++_0x543b78;
                var _0xfcf4a9 = _0x15f435.qualities.filter(function (_0x8d12d) {
                  return !isNaN(_0x8d12d) && _0x8d12d <= _0x42d5ae;
                });
                _0xfcf4a9.sort(function (_0x4df57e, _0x30731b) {
                  return _0x30731b - _0x4df57e;
                });
                var _0x452a90 = _0xfcf4a9[0x0];
                if (_0x452a90) {
                  var _0x4d7477 = _0x15f435.link || '';
                  _0x4d7477 = _0x2a0fc9.fixLinkProtocol(_0x4d7477, _0x3ee367, true);
                  if (_0x212241) {
                    _0x4d7477 = _0x4d7477.replace(/(https?:\/\/[^\/]+)\/s\/[^\/]*\//, _0x212241);
                    if (_0x810aa8) {
                      _0x4d7477 = _0x4d7477.replace(/^https?:\/\//, _0x810aa8);
                    }
                  }
                  var _0x23ce67 = parseInt(_0x498d96);
                  var _0x41f085 = parseInt(_0x34f753);
                  if (isNaN(_0x23ce67) || isNaN(_0x41f085)) {
                    var _0x2e4523 = _0x4d7477.substring(_0x4d7477.lastIndexOf('/'));
                    var _0x36380f = _0x2e4523.match(/s(\d+)e(\d+)_%s\.mp4/i);
                    if (_0x36380f) {
                      _0x23ce67 = parseInt(_0x36380f[0x1]);
                      _0x41f085 = parseInt(_0x36380f[0x2]);
                    }
                  }
                  if (isNaN(_0x23ce67)) {
                    _0x23ce67 = _0x4deaeb;
                  }
                  if (isNaN(_0x41f085)) {
                    _0x41f085 = _0x543b78;
                  }
                  _0x15f1ee.push({
                    'season': _0x23ce67,
                    'episode': _0x41f085,
                    'file': _0x4d7477,
                    'quality': _0x452a90,
                    'qualities': _0xfcf4a9
                  });
                }
              }
              if (_0x15f1ee.length) {
                _0x120e8f.push({
                  'id': _0x15fe95,
                  'items': _0x15f1ee
                });
              }
            }
            if (_0x120e8f.length) {
              _0x338739.push({
                'id': _0x498d96,
                'title': Lampa.Lang.translate("torrent_serial_season") + " " + (isNaN(_0x498d96) ? _0x4deaeb : _0x498d96),
                'voices': _0x120e8f
              });
            }
          }
          _0x43614b.seasons = _0x338739;
        } else {
          if (_0xe66d93.movie && Object.keys(_0xe66d93.movie).length > 0x0) {
            var _0x808ce9 = [];
            for (var _0x444041 in _0xe66d93.movie) {
              var _0x1e502a = _0xe66d93.movie[_0x444041];
              var _0x4ac049 = _0x42d5ae;
              var _0x5a6cea = _0x1e502a.link || '';
              _0x5a6cea = _0x2a0fc9.fixLinkProtocol(_0x5a6cea, _0x3ee367, true);
              if (_0x212241) {
                _0x5a6cea = _0x5a6cea.replace(/(https?:\/\/[^\/]+)\/s\/[^\/]*\//, _0x212241);
                if (_0x810aa8) {
                  _0x5a6cea = _0x5a6cea.replace(/^https?:\/\//, _0x810aa8);
                }
              }
              var _0x3f717d = _0x5a6cea.match(/\[([\d,]*)\]\.mp4/i);
              if (_0x3f717d) {
                _0x3f717d = _0x3f717d[0x1].split(',').map(function (_0x59aeae) {
                  return parseInt(_0x59aeae);
                }).filter(function (_0x3a6cc1) {
                  return !isNaN(_0x3a6cc1) && _0x3a6cc1 <= _0x42d5ae;
                });
                _0x3f717d.sort(function (_0x57baed, _0x207ce4) {
                  return _0x207ce4 - _0x57baed;
                });
                _0x4ac049 = _0x3f717d[0x0];
              }
              if (_0x4ac049) {
                var _0x14e3c1 = _0x5a6cea.replace(/\[[\d,]*\](\.mp4)/i, '%s$1');
                _0x808ce9.push({
                  'translation': _0x1e502a.translation,
                  'file': _0x14e3c1,
                  'quality': _0x4ac049,
                  'qualities': _0x3f717d
                });
              }
            }
            _0x43614b.movies = _0x808ce9;
          }
        }
      }
      function _0x50eb64(_0x55e3f7) {
        var _0x56161d = _0x55e3f7.media || {};
        var _0x326e88 = _0x56161d.file;
        var _0x31e71d = false;
        if (_0x326e88) {
          _0x31e71d = {};
          if (_0x56161d.qualities) {
            _0x56161d.qualities.forEach(function (_0x3ea856) {
              _0x31e71d[_0x3ea856 + 'p'] = _0x326e88.replace(/%s(\.mp4)/i, _0x3ea856 + '$1');
            });
            _0x326e88 = _0x326e88.replace(/%s(\.mp4)/i, _0x56161d.qualities[0x0] + '$1');
          }
        }
        return {
          'file': _0x326e88,
          'quality': _0x31e71d
        };
      }
      function _0x191f85() {
        _0x5b1899 = {
          'season': _0x43614b.seasons ? _0x43614b.seasons.map(function (_0x2c13e4) {
            return _0x2c13e4.title;
          }) : [],
          'voice': []
        };
        if (!_0x5b1899.season[_0x4aefd5.season]) {
          _0x4aefd5.season = 0x0;
        }
        if (_0x43614b.seasons && _0x43614b.seasons[_0x4aefd5.season]) {
          _0x5b1899.voice = _0x43614b.seasons[_0x4aefd5.season].voices.map(function (_0x5026be) {
            return _0x5026be.id;
          });
        }
        if (!_0x5b1899.voice[_0x4aefd5.voice]) {
          _0x4aefd5.voice = 0x0;
        }
        if (_0x4aefd5.voice_name) {
          var _0x19f755 = _0x5b1899.voice.indexOf(_0x4aefd5.voice_name);
          if (_0x19f755 == -0x1) {
            _0x4aefd5.voice = 0x0;
          } else if (_0x19f755 !== _0x4aefd5.voice) {
            _0x4aefd5.voice = _0x19f755;
          }
        }
        _0x2a0fc9.filter(_0x5b1899, _0x4aefd5);
      }
      function _0x22ba09() {
        var _0x5564c7 = [];
        if (_0x43614b.seasons) {
          var _0x305c44 = _0x43614b.seasons[_0x4aefd5.season] || {};
          var _0x1ce633 = _0x305c44.voices || [];
          var _0x4ed7fc = _0x1ce633[_0x4aefd5.voice] || {};
          var _0x542d94 = Lampa.Utils.shortText(_0x5b1899.voice[_0x4aefd5.voice] || '', 0x32);
          var _0x597dcb = _0x4ed7fc.items || [];
          _0x597dcb.forEach(function (_0x5e4c7b) {
            _0x5564c7.push({
              'title': _0x2a0fc9.formatEpisodeTitle(_0x5e4c7b.season, _0x5e4c7b.episode),
              'quality': _0x5e4c7b.quality + 'p',
              'info': _0x542d94 ? " / " + _0x542d94 : '',
              'season': _0x5e4c7b.season,
              'episode': _0x5e4c7b.episode,
              'media': _0x5e4c7b
            });
          });
        } else if (_0x43614b.movies) {
          _0x43614b.movies.forEach(function (_0x3ee6a1) {
            _0x5564c7.push({
              'title': _0x3ee6a1.translation || _0x4907b9,
              'quality': _0x3ee6a1.quality + 'p',
              'info': '',
              'media': _0x3ee6a1
            });
          });
        }
        return _0x5564c7;
      }
      function _0x3b7942(_0x3e0610) {
        _0x2a0fc9.reset();
        var _0x280845 = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x783d18 = _0x2a0fc9.getLastEpisode(_0x3e0610);
        _0x3e0610.forEach(function (_0x3c5303) {
          if (_0x3c5303.season) {
            _0x3c5303.translate_episode_end = _0x783d18;
            _0x3c5303.translate_voice = _0x5b1899.voice[_0x4aefd5.voice];
          }
          var _0x214cad = Lampa.Utils.hash(_0x3c5303.season ? [_0x3c5303.season, _0x3c5303.season > 0xa ? ':' : '', _0x3c5303.episode, _0x1e1bc4.movie.original_title].join('') : _0x1e1bc4.movie.original_title);
          var _0xaa5bd1 = Lampa.Timeline.view(_0x214cad);
          var _0x359cea = Lampa.Template.get("online_mod", _0x3c5303);
          var _0xe90af = Lampa.Utils.hash(_0x3c5303.season ? [_0x3c5303.season, _0x3c5303.season > 0xa ? ':' : '', _0x3c5303.episode, _0x1e1bc4.movie.original_title, _0x5b1899.voice[_0x4aefd5.voice]].join('') : _0x1e1bc4.movie.original_title + _0x3c5303.title);
          _0x3c5303.timeline = _0xaa5bd1;
          _0x359cea.append(Lampa.Timeline.render(_0xaa5bd1));
          if (Lampa.Timeline.details) {
            _0x359cea.find(".online__quality").append(Lampa.Timeline.details(_0xaa5bd1, " / "));
          }
          if (_0x280845.indexOf(_0xe90af) !== -0x1) {
            _0x359cea.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x359cea.on("hover:enter", function () {
            if (_0x1e1bc4.movie.id) {
              Lampa.Favorite.add("history", _0x1e1bc4.movie, 0x64);
            }
            var _0x347e05 = _0x50eb64(_0x3c5303);
            if (_0x347e05.file) {
              var _0x999841 = [];
              var _0xb41328 = {
                'url': _0x2a0fc9.getDefaultQuality(_0x347e05.quality, _0x347e05.file),
                'quality': _0x2a0fc9.renameQualityMap(_0x347e05.quality),
                'timeline': _0x3c5303.timeline,
                'title': _0x3c5303.season ? _0x3c5303.title : _0x4907b9 + (_0x3c5303.title == _0x4907b9 ? '' : " / " + _0x3c5303.title)
              };
              if (_0x3c5303.season) {
                _0x3e0610.forEach(function (_0x2a881d) {
                  var _0x10521f = _0x50eb64(_0x2a881d);
                  _0x999841.push({
                    'url': _0x2a0fc9.getDefaultQuality(_0x10521f.quality, _0x10521f.file),
                    'quality': _0x2a0fc9.renameQualityMap(_0x10521f.quality),
                    'timeline': _0x2a881d.timeline,
                    'title': _0x2a881d.title
                  });
                });
              } else {
                _0x999841.push(_0xb41328);
              }
              if (_0x999841.length > 0x1) {
                _0xb41328.playlist = _0x999841;
              }
              Lampa.Player.play(_0xb41328);
              Lampa.Player.playlist(_0x999841);
              if (_0x280845.indexOf(_0xe90af) == -0x1) {
                _0x280845.push(_0xe90af);
                _0x359cea.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x280845);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0x2a0fc9.append(_0x359cea);
          _0x2a0fc9.contextmenu({
            'item': _0x359cea,
            'view': _0xaa5bd1,
            'viewed': _0x280845,
            'hash_file': _0xe90af,
            'element': _0x3c5303,
            'file': function _0x3b1cb3(_0x51d29c) {
              _0x51d29c(_0x50eb64(_0x3c5303));
            }
          });
        });
        _0x2a0fc9.start(true);
      }
    }
    function _0xc9aedc(_0x5d3467, _0x5bc12d) {
      var _0x10c403 = new Lampa.Reguest();
      var _0x5334f9 = [];
      var _0x13c3e2 = _0x5bc12d;
      var _0x1b33bc = '';
      var _0x23e6c1 = '';
      var _0x1efeb1 = Lampa.Storage.field('online_mod_prefer_http') === true;
      var _0x1e7c7f = _0x5d3467.proxy('zetflix');
      var _0x4a1c31 = (_0x1efeb1 ? "http:" : "https:") + "//hidxlglk.deploy.cx/lite/zetflix";
      var _0x2e66ad = {};
      var _0x4fea0e = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      this.search = function (_0x2b8e1c, _0x285ce7) {
        _0x13c3e2 = _0x2b8e1c;
        _0x23e6c1 = _0x285ce7;
        _0x1b33bc = _0x13c3e2.search || _0x13c3e2.movie.title;
        if (isNaN(_0x23e6c1)) {
          _0x5d3467.emptyForQuery(_0x1b33bc);
          return;
        }
        _0x5334f9 = [];
        _0x5cebbc();
      };
      function _0x5cebbc() {
        var _0x384fe0 = _0x13c3e2.movie.number_of_seasons ? _0x4fea0e.season + 0x1 : 0x0;
        if (_0x5334f9[_0x384fe0]) {
          _0x5d3467.loading(false);
          _0x5dd281();
          _0x3cfaa1(_0x5ed088());
          return;
        }
        var _0x16a103 = Lampa.Utils.addUrlComponent(_0x4a1c31, "kinopoisk_id=" + _0x23e6c1);
        if (_0x384fe0) {
          _0x16a103 = Lampa.Utils.addUrlComponent(_0x16a103, 's=' + _0x384fe0);
        }
        _0x16a103 = Lampa.Utils.addUrlComponent(_0x16a103, "orightml=true");
        var _0x158c8 = function _0x202c06(_0x5c2e60) {
          _0x3fe02f(_0x5c2e60);
        };
        var _0x3acd58 = function _0x1340fd(_0x5c4672, _0x5a6e9b) {
          _0x5d3467.empty(_0x10c403.errorDecode(_0x5c4672, _0x5a6e9b));
        };
        {
          var _0x83ab91 = $("head meta[name=\"referrer\"]");
          var _0xa52090 = _0x83ab91.attr("content") || "never";
          _0x83ab91.attr("content", "origin");
          try {
            _0x10c403.clear();
            _0x10c403.timeout(0x2710);
            _0x10c403.silent(_0x16a103, _0x158c8, _0x3acd58, false, {
              'dataType': "text"
            });
          } finally {
            _0x83ab91.attr("content", _0xa52090);
          }
        }
      }
      this.extendChoice = function (_0x59aaf5) {
        Lampa.Arrays.extend(_0x4fea0e, _0x59aaf5, true);
      };
      this.reset = function () {
        _0x5d3467.reset();
        _0x4fea0e = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x5d3467.loading(true);
        _0x5cebbc();
        _0x5d3467.saveChoice(_0x4fea0e);
      };
      this.filter = function (_0x5487f2, _0x4b4fc8, _0x28fb45) {
        _0x4fea0e[_0x4b4fc8.stype] = _0x28fb45.index;
        if (_0x4b4fc8.stype == 'voice') {
          _0x4fea0e.voice_name = _0x2e66ad.voice[_0x28fb45.index];
        }
        _0x5d3467.reset();
        _0x5d3467.loading(true);
        _0x5cebbc();
        _0x5d3467.saveChoice(_0x4fea0e);
        setTimeout(_0x5d3467.closeFilter, 0xa);
      };
      this.destroy = function () {
        _0x10c403.clear();
        _0x5334f9 = null;
      };
      function _0x357864(_0x58988f) {
        if (!_0x58988f) {
          return [];
        }
        try {
          var _0x6a6e8a = _0x5d3467.parsePlaylist(_0x58988f).map(function (_0x5382f2) {
            var _0x52a58c = _0x5382f2.label.match(/(\d\d\d+)/);
            var _0x23f428 = _0x5382f2.links[0x0] || '';
            _0x23f428 = _0x5d3467.fixLinkProtocol(_0x23f428, _0x1efeb1, true);
            return {
              'label': _0x5382f2.label,
              'quality': _0x52a58c ? parseInt(_0x52a58c[0x1]) : NaN,
              'file': _0x5d3467.proxyLink(_0x23f428, _0x1e7c7f, '')
            };
          });
          _0x6a6e8a.sort(function (_0x22a569, _0x1c9d9f) {
            if (_0x1c9d9f.quality > _0x22a569.quality) {
              return 0x1;
            }
            if (_0x1c9d9f.quality < _0x22a569.quality) {
              return -0x1;
            }
            if (_0x1c9d9f.label > _0x22a569.label) {
              return 0x1;
            }
            if (_0x1c9d9f.label < _0x22a569.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x6a6e8a;
        } catch (_0x34745a) {}
        return [];
      }
      function _0x3fe02f(_0x193f08) {
        _0x5d3467.loading(false);
        _0x193f08 = (_0x193f08 || '').replace(/\n/g, '');
        var _0x2dd212 = _0x193f08.match(/Playerjs\(({.*?})\);/);
        var _0x1d7cd8;
        try {
          _0x1d7cd8 = _0x2dd212 && (0x0, eval)("\"use strict\"; (function(){ var sign = function(){}; return " + _0x2dd212[0x1] + "; })();");
        } catch (_0x4cc939) {}
        if (_0x1d7cd8 && _0x1d7cd8.file) {
          var _0x3b063a = _0x13c3e2.movie.number_of_seasons ? _0x4fea0e.season + 0x1 : 0x0;
          _0x5334f9[_0x3b063a] = typeof _0x1d7cd8.file === "string" ? [_0x1d7cd8] : _0x1d7cd8.file;
          _0x5334f9[_0x3b063a].forEach(function (_0x5710fb) {
            if (_0x5710fb.folder) {
              _0x5710fb.folder.forEach(function (_0x1871da) {
                _0x1871da.media = {
                  'items': _0x357864(_0x1871da.file)
                };
              });
            } else {
              _0x5710fb.media = {
                'items': _0x357864(_0x5710fb.file)
              };
            }
          });
          _0x5dd281();
          _0x3cfaa1(_0x5ed088());
        } else {
          _0x5d3467.emptyForQuery(_0x1b33bc);
        }
      }
      function _0x5dd281() {
        _0x2e66ad = {
          'season': [],
          'voice': []
        };
        if (_0x13c3e2.movie.number_of_seasons) {
          for (var _0x581214 = 0x1; _0x581214 <= _0x13c3e2.movie.number_of_seasons; _0x581214++) {
            _0x2e66ad.season.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x581214);
          }
        }
        if (!_0x2e66ad.season[_0x4fea0e.season]) {
          _0x4fea0e.season = 0x0;
        }
        var _0x5e62c8 = _0x5334f9[_0x13c3e2.movie.number_of_seasons ? _0x4fea0e.season + 0x1 : 0x0] || [];
        _0x5e62c8.forEach(function (_0x130dc5) {
          if (_0x130dc5.folder) {
            var _0x380514 = _0x130dc5.title || _0x130dc5.comment || '';
            if (_0x2e66ad.voice.indexOf(_0x380514) == -0x1) {
              _0x2e66ad.voice.push(_0x380514);
            }
          }
        });
        if (!_0x2e66ad.voice[_0x4fea0e.voice]) {
          _0x4fea0e.voice = 0x0;
        }
        if (_0x4fea0e.voice_name) {
          var _0x17ef30 = _0x2e66ad.voice.indexOf(_0x4fea0e.voice_name);
          if (_0x17ef30 == -0x1) {
            _0x4fea0e.voice = 0x0;
          } else if (_0x17ef30 !== _0x4fea0e.voice) {
            _0x4fea0e.voice = _0x17ef30;
          }
        }
        _0x5d3467.filter(_0x2e66ad, _0x4fea0e);
      }
      function _0x5ed088() {
        var _0x49fadc = [];
        var _0x4524b3 = _0x5334f9[_0x13c3e2.movie.number_of_seasons ? _0x4fea0e.season + 0x1 : 0x0] || [];
        _0x4524b3.forEach(function (_0x559262) {
          if (_0x559262.folder) {
            var _0x54f95d = _0x559262.title || _0x559262.comment || '';
            if (_0x54f95d == _0x2e66ad.voice[_0x4fea0e.voice]) {
              _0x559262.folder.forEach(function (_0x15a507) {
                if (_0x15a507.file) {
                  var _0x169dbb = _0x15a507.title || _0x15a507.comment || '';
                  var _0x53ba93 = _0x15a507.media.items[0x0] || {};
                  var _0x14111b = parseInt(_0x169dbb.match(/\d+/));
                  var _0x126aac = _0x4fea0e.season + 0x1;
                  _0x49fadc.push({
                    'title': _0x5d3467.formatEpisodeTitle(_0x126aac, _0x14111b),
                    'quality': _0x53ba93.label || "360p ~ 1080p",
                    'info': " / " + Lampa.Utils.shortText(_0x54f95d, 0x32),
                    'season': _0x126aac,
                    'episode': _0x14111b,
                    'media': _0x15a507.media
                  });
                }
              });
            }
            _0x49fadc.sort(function (_0x2e0993, _0x11ed8f) {
              return _0x2e0993.episode - _0x11ed8f.episode;
            });
          } else {
            if (_0x559262.file) {
              var _0x523a52 = _0x559262.media.items[0x0] || {};
              _0x49fadc.push({
                'title': _0x559262.title || _0x559262.comment || _0x1b33bc,
                'quality': _0x523a52.label || "360p ~ 1080p",
                'info': '',
                'media': _0x559262.media
              });
            }
          }
        });
        return _0x49fadc;
      }
      function _0x46de55(_0x140e56) {
        var _0x442c2e = '';
        var _0x5004b0 = false;
        var _0x461fc2 = _0x140e56.media.items;
        if (_0x461fc2 && _0x461fc2.length) {
          _0x442c2e = _0x461fc2[0x0].file;
          _0x5004b0 = {};
          _0x461fc2.forEach(function (_0x4dd512) {
            _0x5004b0[_0x4dd512.label] = _0x4dd512.file;
          });
        }
        return {
          'file': _0x442c2e,
          'quality': _0x5004b0
        };
      }
      function _0x3cfaa1(_0x20203b) {
        _0x5d3467.reset();
        var _0x21e134 = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x1188b4 = _0x5d3467.getLastEpisode(_0x20203b);
        _0x20203b.forEach(function (_0x339400) {
          if (_0x339400.season) {
            _0x339400.translate_episode_end = _0x1188b4;
            _0x339400.translate_voice = _0x2e66ad.voice[_0x4fea0e.voice];
          }
          var _0x24e529 = Lampa.Utils.hash(_0x339400.season ? [_0x339400.season, _0x339400.season > 0xa ? ':' : '', _0x339400.episode, _0x13c3e2.movie.original_title].join('') : _0x13c3e2.movie.original_title);
          var _0x3acc83 = Lampa.Timeline.view(_0x24e529);
          var _0x1583de = Lampa.Template.get("online_mod", _0x339400);
          var _0x220484 = Lampa.Utils.hash(_0x339400.season ? [_0x339400.season, _0x339400.season > 0xa ? ':' : '', _0x339400.episode, _0x13c3e2.movie.original_title, _0x2e66ad.voice[_0x4fea0e.voice]].join('') : _0x13c3e2.movie.original_title + _0x339400.title);
          _0x339400.timeline = _0x3acc83;
          _0x1583de.append(Lampa.Timeline.render(_0x3acc83));
          if (Lampa.Timeline.details) {
            _0x1583de.find(".online__quality").append(Lampa.Timeline.details(_0x3acc83, " / "));
          }
          if (_0x21e134.indexOf(_0x220484) !== -0x1) {
            _0x1583de.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x1583de.on('hover:enter', function () {
            if (_0x13c3e2.movie.id) {
              Lampa.Favorite.add('history', _0x13c3e2.movie, 0x64);
            }
            var _0x1a9b0b = _0x46de55(_0x339400);
            if (_0x1a9b0b.file) {
              var _0x332946 = [];
              var _0x4f3a63 = {
                'url': _0x5d3467.getDefaultQuality(_0x1a9b0b.quality, _0x1a9b0b.file),
                'quality': _0x5d3467.renameQualityMap(_0x1a9b0b.quality),
                'timeline': _0x339400.timeline,
                'title': _0x339400.season ? _0x339400.title : _0x1b33bc + (_0x339400.title == _0x1b33bc ? '' : " / " + _0x339400.title)
              };
              if (_0x339400.season) {
                _0x20203b.forEach(function (_0x1be9f8) {
                  var _0x50d24f = _0x46de55(_0x1be9f8);
                  _0x332946.push({
                    'url': _0x5d3467.getDefaultQuality(_0x50d24f.quality, _0x50d24f.file),
                    'quality': _0x5d3467.renameQualityMap(_0x50d24f.quality),
                    'timeline': _0x1be9f8.timeline,
                    'title': _0x1be9f8.title
                  });
                });
              } else {
                _0x332946.push(_0x4f3a63);
              }
              if (_0x332946.length > 0x1) {
                _0x4f3a63.playlist = _0x332946;
              }
              Lampa.Player.play(_0x4f3a63);
              Lampa.Player.playlist(_0x332946);
              if (_0x21e134.indexOf(_0x220484) == -0x1) {
                _0x21e134.push(_0x220484);
                _0x1583de.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x21e134);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0x5d3467.append(_0x1583de);
          _0x5d3467.contextmenu({
            'item': _0x1583de,
            'view': _0x3acc83,
            'viewed': _0x21e134,
            'hash_file': _0x220484,
            'file': function _0x38690d(_0x266bb7) {
              _0x266bb7(_0x46de55(_0x339400));
            }
          });
        });
        _0x5d3467.start(true);
      }
    }
    function _0x26ba8d(_0x52e04d, _0x411bab) {
      var _0x5a2b2c = new Lampa.Reguest();
      var _0x40caf0 = [];
      var _0x4c114a = _0x411bab;
      var _0x2460b9 = '';
      var _0x2cccc0 = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x1f20bc = _0x52e04d.proxy("fancdn");
      var _0x1312af = _0x59443e.fanserialsHost();
      var _0x4d7e87 = _0x1312af + '/';
      var _0x3fb228 = _0x59443e.baseUserAgent();
      var _0x3a8469 = Lampa.Platform.is("android") ? {
        'Origin': _0x1312af,
        'Referer': _0x4d7e87,
        'User-Agent': _0x3fb228
      } : {};
      var _0x497b07 = '';
      if (_0x1f20bc) {
        _0x497b07 += "param/Origin=" + encodeURIComponent(_0x1312af) + '/';
        _0x497b07 += 'param/Referer=' + encodeURIComponent(_0x4d7e87) + '/';
        _0x497b07 += 'param/User-Agent=' + encodeURIComponent(_0x3fb228) + '/';
      }
      var _0x44f03d = Lampa.Storage.get("online_mod_fancdn_cookie", '') + '';
      var _0x437da1 = !_0x44f03d;
      if (_0x44f03d.indexOf("PHPSESSID=") == -0x1) {
        _0x44f03d = "PHPSESSID=" + _0x59443e.randomHex(0x20) + (_0x44f03d ? "; " + _0x44f03d : '');
      }
      if (_0x44f03d) {
        if (Lampa.Platform.is('android')) {
          _0x3a8469.Cookie = _0x44f03d;
        }
        if (_0x1f20bc) {
          _0x497b07 += "param/Cookie=" + encodeURIComponent(_0x44f03d) + '/';
        }
      }
      var _0x1b4d36 = {};
      var _0x16b12c = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      this.search = function (_0x36fa83, _0x4ba37c, _0x3dac0d) {
        var _0x4b7f16 = this;
        _0x4c114a = _0x36fa83;
        _0x2460b9 = _0x4c114a.search || _0x4c114a.movie.title;
        if (this.wait_similars && _0x3dac0d && _0x3dac0d[0x0].is_similars) {
          return _0x4e235b(_0x3dac0d[0x0].link);
        }
        var _0x461810 = _0x4c114a.search_date || !_0x4c114a.clarification && (_0x4c114a.movie.release_date || _0x4c114a.movie.first_air_date || _0x4c114a.movie.last_air_date) || '0000';
        var _0xe5105 = parseInt((_0x461810 + '').slice(0x0, 0x4));
        var _0x445563 = [];
        if (_0x4c114a.movie.alternative_titles && _0x4c114a.movie.alternative_titles.results) {
          _0x445563 = _0x4c114a.movie.alternative_titles.results.map(function (_0x56ec5b) {
            return _0x56ec5b.title;
          });
        }
        if (_0x4c114a.movie.original_title) {
          _0x445563.push(_0x4c114a.movie.original_title);
        }
        if (_0x4c114a.movie.original_name) {
          _0x445563.push(_0x4c114a.movie.original_name);
        }
        var _0x3c32e4 = function _0x17e105(_0x363d99) {
          if (_0x363d99 && _0x363d99.length && _0x363d99.forEach) {
            var _0x44097f = false;
            var _0x144718 = _0x363d99.map(function (_0x1e48eb) {
              var _0x22b838 = $(_0x1e48eb + '</div>');
              var _0x3d97d1 = $('a', _0x22b838);
              var _0x5a8610 = $('div.name-origin-search', _0x22b838);
              var _0x4531e8 = _0x3d97d1.text().trim() || '';
              var _0x4d6a34 = _0x5a8610.text().trim() || '';
              var _0x51b9f3;
              var _0x251225 = _0x4d6a34.match(/^(.*)\((\d{4}\s*)\)$/);
              if (_0x251225) {
                _0x51b9f3 = parseInt(_0x251225[0x2]);
                _0x4d6a34 = _0x251225[0x1].trim();
              }
              return {
                'year': _0x51b9f3,
                'title': _0x4531e8,
                'orig_title': _0x4d6a34,
                'link': _0x3d97d1.attr("href") || ''
              };
            });
            var _0x3afb7c = _0x144718;
            if (_0x3afb7c.length) {
              if (_0x445563.length) {
                var _0x4440d2 = _0x3afb7c.filter(function (_0x5f4369) {
                  return _0x52e04d.containsAnyTitle([_0x5f4369.orig_title, _0x5f4369.title], _0x445563);
                });
                if (_0x4440d2.length) {
                  _0x3afb7c = _0x4440d2;
                  _0x44097f = true;
                }
              }
              if (_0x2460b9) {
                var _0x32af51 = _0x3afb7c.filter(function (_0x5df551) {
                  return _0x52e04d.containsAnyTitle([_0x5df551.title, _0x5df551.orig_title], [_0x2460b9]);
                });
                if (_0x32af51.length) {
                  _0x3afb7c = _0x32af51;
                  _0x44097f = true;
                }
              }
              if (_0x3afb7c.length > 0x1 && _0xe5105) {
                var _0x5a0926 = _0x3afb7c.filter(function (_0x1b7450) {
                  return _0x1b7450.year == _0xe5105;
                });
                if (!_0x5a0926.length) {
                  _0x5a0926 = _0x3afb7c.filter(function (_0x5dda8c) {
                    return _0x5dda8c.year && _0x5dda8c.year > _0xe5105 - 0x2 && _0x5dda8c.year < _0xe5105 + 0x2;
                  });
                }
                if (_0x5a0926.length) {
                  _0x3afb7c = _0x5a0926;
                }
              }
            }
            if (_0x3afb7c.length == 0x1 && _0x44097f) {
              if (_0xe5105 && _0x3afb7c[0x0].year) {
                _0x44097f = _0x3afb7c[0x0].year > _0xe5105 - 0x2 && _0x3afb7c[0x0].year < _0xe5105 + 0x2;
              }
              if (_0x44097f) {
                _0x44097f = false;
                if (_0x445563.length) {
                  _0x44097f |= _0x52e04d.equalAnyTitle([_0x3afb7c[0x0].orig_title, _0x3afb7c[0x0].title], _0x445563);
                }
                if (_0x2460b9) {
                  _0x44097f |= _0x52e04d.equalAnyTitle([_0x3afb7c[0x0].title, _0x3afb7c[0x0].orig_title], [_0x2460b9]);
                }
              }
            }
            if (_0x3afb7c.length == 0x1 && _0x44097f) {
              _0x4e235b(_0x3afb7c[0x0].link);
            } else {
              if (_0x144718.length) {
                _0x4b7f16.wait_similars = true;
                _0x144718.forEach(function (_0x513e60) {
                  _0x513e60.is_similars = true;
                });
                _0x52e04d.similars(_0x144718);
                _0x52e04d.loading(false);
              } else {
                _0x52e04d.emptyForQuery(_0x2460b9);
              }
            }
          } else {
            if (_0x437da1) {
              _0x52e04d.empty(Lampa.Lang.translate('online_mod_authorization_required') + " FanSerials");
            } else {
              _0x52e04d.emptyForQuery(_0x2460b9);
            }
          }
        };
        var _0x385ee1 = _0x4d7e87 + 'index.php?do=search';
        var _0x3b80f7 = "do=search&subaction=search&search_start=0&full_search=1&result_from=1&story=" + encodeURIComponent(_0x2460b9) + "&titleonly=3&searchuser=&replyless=0&replylimit=0&searchdate=0&beforeafter=after&sortby=title&resorder=asc&showposts=0&catlist%5B%5D=10";
        _0x5a2b2c.clear();
        _0x5a2b2c.timeout(0x2710);
        _0x5a2b2c.native(_0x52e04d.proxyLink(_0x385ee1, _0x1f20bc, _0x497b07, 'enc2t'), function (_0x4f77e9) {
          _0x4f77e9 = (_0x4f77e9 || '').replace(/\n/g, '');
          var _0x534d53 = _0x4f77e9.match(/<div class="item-search-header">\s*<h2>\s*<a [^>]*>[^<]*<\/a>\s*<\/h2>\s*<div class="name-origin-search">[^<]*<\/div>/g);
          _0x3c32e4(_0x534d53);
        }, function (_0x47df62, _0x365255) {
          _0x52e04d.empty(_0x5a2b2c.errorDecode(_0x47df62, _0x365255));
        }, _0x3b80f7, {
          'dataType': 'text',
          'headers': _0x3a8469
        });
      };
      function _0x4e235b(_0xcdb2ec) {
        _0xcdb2ec = _0x52e04d.fixLink(_0xcdb2ec, _0x4d7e87);
        _0x5a2b2c.clear();
        _0x5a2b2c.timeout(0x2710);
        _0x5a2b2c.native(_0x52e04d.proxyLink(_0xcdb2ec, _0x1f20bc, _0x497b07, 'enc2t'), function (_0x2d4e32) {
          _0x2d4e32 = (_0x2d4e32 || '').replace(/\n/g, '');
          var _0x40bd46 = _0x2d4e32.match(/<iframe +id="iframe-player" +src=" *(\/movies\/(\d+)[^"]*)"/);
          if (_0x40bd46) {
            var _0x5315ff = Lampa.Utils.addUrlComponent(_0x4d7e87 + atob("ZmlsbS5waHA="), 'kp=' + _0x40bd46[0x2]);
            var _0x356eb3 = _0x40bd46[0x1].indexOf('?');
            if (_0x356eb3 !== -0x1) {
              var _0x3c394d = _0x40bd46[0x1].substring(_0x356eb3 + 0x1);
              if (_0x3c394d) {
                Lampa.Storage.set("online_mod_fancdn_token", _0x3c394d);
                _0x5315ff += '&' + _0x3c394d;
              }
            }
            _0x5a2b2c.clear();
            _0x5a2b2c.timeout(0x2710);
            _0x5a2b2c.native(_0x52e04d.proxyLink(_0x5315ff, _0x1f20bc, _0x497b07, "enc2t"), function (_0x3f0a14) {
              _0x327c07(_0x3f0a14, function () {
                _0x52e04d.emptyForQuery(_0x2460b9);
              });
            }, function (_0x4bb229, _0x2aee98) {
              _0x52e04d.empty(_0x5a2b2c.errorDecode(_0x4bb229, _0x2aee98));
            }, false, {
              'headers': _0x3a8469
            });
          } else {
            if (_0x437da1) {
              _0x52e04d.empty(Lampa.Lang.translate('online_mod_authorization_required') + " FanSerials");
            } else {
              _0x52e04d.emptyForQuery(_0x2460b9);
            }
          }
        }, function (_0x5c5c59, _0x5431f5) {
          _0x52e04d.empty(_0x5a2b2c.errorDecode(_0x5c5c59, _0x5431f5));
        }, false, {
          'dataType': "text",
          'headers': _0x3a8469
        });
      }
      this.extendChoice = function (_0x1e83e1) {
        Lampa.Arrays.extend(_0x16b12c, _0x1e83e1, true);
      };
      this.reset = function () {
        _0x52e04d.reset();
        _0x16b12c = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x38a9c3();
        _0x42a45f(_0x2058e5());
        _0x52e04d.saveChoice(_0x16b12c);
      };
      this.filter = function (_0x2e83b6, _0x256ffa, _0x1b9ee5) {
        _0x16b12c[_0x256ffa.stype] = _0x1b9ee5.index;
        if (_0x256ffa.stype == "voice") {
          _0x16b12c.voice_name = _0x1b4d36.voice[_0x1b9ee5.index];
        }
        _0x52e04d.reset();
        _0x38a9c3();
        _0x42a45f(_0x2058e5());
        _0x52e04d.saveChoice(_0x16b12c);
      };
      this.destroy = function () {
        _0x5a2b2c.clear();
        _0x40caf0 = null;
      };
      function _0x24e6c8(_0x582e32, _0x529775) {
        if (!_0x582e32) {
          return [];
        }
        try {
          var _0x50d458 = _0x52e04d.parseM3U(_0x582e32).map(function (_0x450d81) {
            var _0x56ccde = _0x450d81.link;
            var _0x208b23 = _0x450d81.height;
            var _0x31a845 = _0x56ccde.match(/\b(\d\d\d+)\./);
            if (_0x31a845) {
              var _0x344381 = parseInt(_0x31a845[0x1]);
              if (_0x344381 > _0x208b23 && _0x344381 <= 0x10e0) {
                _0x208b23 = _0x344381;
              }
            }
            return {
              'label': _0x208b23 ? _0x208b23 + 'p' : "360p ~ 1080p",
              'quality': _0x208b23,
              'file': _0x52e04d.proxyStream(_0x52e04d.fixLink(_0x56ccde, _0x529775), "fancdn")
            };
          });
          _0x50d458.sort(function (_0x591158, _0x29b33e) {
            if (_0x29b33e.quality > _0x591158.quality) {
              return 0x1;
            }
            if (_0x29b33e.quality < _0x591158.quality) {
              return -0x1;
            }
            if (_0x29b33e.label > _0x591158.label) {
              return 0x1;
            }
            if (_0x29b33e.label < _0x591158.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x50d458;
        } catch (_0x53b7a5) {}
        return [];
      }
      function _0x37a55b(_0x3120e1, _0x329f78) {
        if (!_0x3120e1) {
          return [];
        }
        try {
          var _0x35fb5c = _0x52e04d.parsePlaylist(_0x3120e1).map(function (_0x22491b) {
            var _0xa69bda = _0x22491b.label.match(/(\d\d\d+)/);
            var _0x586c81 = _0x22491b.links[0x0] || '';
            _0x586c81 = _0x52e04d.fixLinkProtocol(_0x586c81, _0x2cccc0, true);
            return {
              'label': _0x22491b.label,
              'quality': _0xa69bda ? parseInt(_0xa69bda[0x1]) : NaN,
              'file': _0x52e04d.proxyStream(_0x586c81, 'fancdn')
            };
          });
          _0x35fb5c.sort(function (_0x55181d, _0x4c5e07) {
            if (_0x4c5e07.quality > _0x55181d.quality) {
              return 0x1;
            }
            if (_0x4c5e07.quality < _0x55181d.quality) {
              return -0x1;
            }
            if (_0x4c5e07.label > _0x55181d.label) {
              return 0x1;
            }
            if (_0x4c5e07.label < _0x55181d.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x35fb5c;
        } catch (_0x5e3021) {}
        return [];
      }
      function _0x4f090e(_0xd125e8, _0x38faa1, _0x5cacdf, _0x23e543, _0x4d60cf, _0x5efb03) {
        var _0x57e653 = '';
        var _0x37e9a6 = false;
        var _0x4eca16 = _0x23e543(_0x4d60cf, _0x5efb03);
        if (_0x4eca16 && _0x4eca16.length) {
          _0x57e653 = _0x4eca16[0x0].file;
          _0x37e9a6 = {};
          _0x4eca16.forEach(function (_0x2f7bea) {
            _0x37e9a6[_0x2f7bea.label] = _0x2f7bea.file;
          });
        }
        if (_0x57e653) {
          _0xd125e8.stream = _0x57e653;
          _0xd125e8.qualitys = _0x37e9a6;
          _0xd125e8.subtitles = _0x55b8f9(_0xd125e8.media.subtitles, _0x5efb03);
          _0x38faa1(_0xd125e8);
        } else {
          _0x5cacdf();
        }
      }
      function _0x559e6a(_0x578d5b, _0x115f1c, _0x3d33d4, _0x4fff59) {
        _0x4fff59 = _0x4fff59.replace(/\.mp4:hls:manifest/, '');
        var _0x3b2573 = _0x4fff59.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, '/hls$1');
        _0x5a2b2c.clear();
        _0x5a2b2c.timeout(0x1388);
        _0x5a2b2c.native(_0x52e04d.proxyStream(_0x3b2573, "fancdn"), function (_0x3eebd1) {
          _0x4f090e(_0x578d5b, _0x115f1c, _0x3d33d4, _0x24e6c8, _0x3eebd1, _0x3b2573);
        }, function (_0x1ed1c7, _0x41ccd8) {
          if (_0x4fff59 != _0x3b2573) {
            _0x5a2b2c.clear();
            _0x5a2b2c.timeout(0x1388);
            _0x5a2b2c.native(_0x52e04d.proxyStream(_0x4fff59, "fancdn"), function (_0x447aeb) {
              _0x4f090e(_0x578d5b, _0x115f1c, _0x3d33d4, _0x24e6c8, _0x447aeb, _0x4fff59);
            }, function (_0x5d6ff6, _0x4cc6e7) {
              _0x3d33d4();
            }, false, {
              'dataType': "text"
            });
          } else {
            _0x3d33d4();
          }
        }, false, {
          'dataType': "text"
        });
      }
      function _0x5e2c39(_0x5c878b, _0x1e5407, _0x4c1450) {
        if (_0x5c878b.stream) {
          return _0x1e5407(_0x5c878b);
        }
        var _0x2bbb86 = _0x5c878b.media.file || '';
        if (_0x2bbb86.lastIndexOf('[', 0x0) === 0x0) {
          _0x4f090e(_0x5c878b, _0x1e5407, _0x4c1450, _0x37a55b, _0x2bbb86, '');
          return;
        }
        _0x2bbb86 = _0x52e04d.fixLinkProtocol(_0x2bbb86, _0x2cccc0, true);
        if (_0x42558b(_0x2bbb86, ".m3u8")) {
          _0x559e6a(_0x5c878b, _0x1e5407, _0x4c1450, _0x2bbb86);
          return;
        }
        if (_0x2bbb86) {
          _0x5c878b.stream = _0x52e04d.proxyStream(_0x2bbb86, "fancdn");
          _0x5c878b.qualitys = false;
          _0x5c878b.subtitles = _0x55b8f9(_0x5c878b.media.subtitles, _0x2bbb86);
          _0x1e5407(_0x5c878b);
        } else {
          _0x4c1450();
        }
      }
      function _0x55b8f9(_0x57e67a, _0xdd7e18) {
        if (!_0x57e67a) {
          return false;
        }
        var _0x1177a9 = _0x52e04d.parsePlaylist(_0x57e67a).map(function (_0xa41dc3) {
          var _0x1e2697 = _0xa41dc3.links[0x0] || '';
          _0x1e2697 = _0x52e04d.fixLinkProtocol(_0x1e2697, _0x2cccc0, true);
          return {
            'label': _0xa41dc3.label,
            'url': _0x52e04d.proxyStreamSubs(_0x52e04d.fixLink(_0x1e2697, _0xdd7e18), "fancdn")
          };
        });
        return _0x1177a9.length ? _0x1177a9 : false;
      }
      function _0x327c07(_0x4be16e, _0x22dd1c) {
        if (_0x4be16e && _0x4be16e.forEach && _0x4be16e.length) {
          _0x52e04d.loading(false);
          _0x40caf0 = _0x4be16e;
          _0x38a9c3();
          _0x42a45f(_0x2058e5());
        } else {
          _0x22dd1c();
        }
      }
      function _0x38a9c3() {
        _0x1b4d36 = {
          'season': [],
          'season_num': [],
          'voice': [],
          'voice_info': []
        };
        _0x40caf0.forEach(function (_0x5f4c94) {
          if (_0x5f4c94.folder) {
            for (var _0x4731dd in _0x5f4c94.folder) {
              if (_0x1b4d36.season_num.indexOf(_0x4731dd) == -0x1) {
                _0x1b4d36.season_num.push(_0x4731dd);
              }
            }
          }
        });
        _0x1b4d36.season_num.sort(function (_0x31f933, _0x288905) {
          return _0x31f933 - _0x288905;
        });
        _0x1b4d36.season_num.forEach(function (_0x406577) {
          _0x1b4d36.season.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x406577);
        });
        if (!_0x1b4d36.season[_0x16b12c.season]) {
          _0x16b12c.season = 0x0;
        }
        if (_0x1b4d36.season[_0x16b12c.season]) {
          var _0x3393ee = _0x1b4d36.season_num[_0x16b12c.season];
          _0x40caf0.forEach(function (_0x38fe07) {
            if (_0x38fe07.folder && _0x38fe07.folder[_0x3393ee]) {
              var _0x22379c = _0x38fe07.id || '';
              if (!_0x1b4d36.voice_info.some(function (_0x28acb5) {
                return _0x28acb5.id == _0x22379c;
              })) {
                _0x1b4d36.voice.push(_0x38fe07.title || _0x38fe07.comment || '');
                _0x1b4d36.voice_info.push({
                  'id': _0x22379c
                });
              }
            }
          });
        }
        if (!_0x1b4d36.voice[_0x16b12c.voice]) {
          _0x16b12c.voice = 0x0;
        }
        if (_0x16b12c.voice_name) {
          var _0x4da0a9 = _0x1b4d36.voice.indexOf(_0x16b12c.voice_name);
          if (_0x4da0a9 == -0x1) {
            _0x16b12c.voice = 0x0;
          } else if (_0x4da0a9 !== _0x16b12c.voice) {
            _0x16b12c.voice = _0x4da0a9;
          }
        }
        _0x52e04d.filter(_0x1b4d36, _0x16b12c);
      }
      function _0x2058e5() {
        var _0x3603fc = [];
        _0x40caf0.forEach(function (_0x5cdaef) {
          if (_0x5cdaef.folder) {
            var _0x38bc35 = _0x1b4d36.voice_info[_0x16b12c.voice];
            if (_0x38bc35 && _0x5cdaef.id == _0x38bc35.id) {
              var _0x270a70 = _0x1b4d36.voice[_0x16b12c.voice];
              var _0x3f1706 = _0x1b4d36.season_num[_0x16b12c.season];
              var _0x3b85ac = _0x5cdaef.folder[_0x3f1706] || {};
              if (_0x3b85ac.folder) {
                for (var _0x434215 in _0x3b85ac.folder) {
                  var _0x5dbf31 = _0x3b85ac.folder[_0x434215] || {};
                  if (_0x5dbf31.file) {
                    _0x3603fc.push({
                      'title': _0x52e04d.formatEpisodeTitle(_0x3f1706, _0x434215),
                      'quality': "360p ~ 1080p",
                      'info': " / " + Lampa.Utils.shortText(_0x270a70, 0x32),
                      'season': parseInt(_0x3f1706),
                      'episode': parseInt(_0x434215),
                      'media': _0x5dbf31
                    });
                  }
                }
              }
            }
          } else if (_0x5cdaef.file) {
            _0x3603fc.push({
              'title': _0x5cdaef.title || _0x5cdaef.comment || _0x2460b9,
              'quality': "360p ~ 1080p",
              'info': '',
              'media': _0x5cdaef
            });
          }
        });
        return _0x3603fc;
      }
      function _0x42a45f(_0x936f46) {
        _0x52e04d.reset();
        var _0x5762ed = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x17eb87 = _0x52e04d.getLastEpisode(_0x936f46);
        _0x936f46.forEach(function (_0x4bb7d5) {
          if (_0x4bb7d5.season) {
            _0x4bb7d5.translate_episode_end = _0x17eb87;
            _0x4bb7d5.translate_voice = _0x1b4d36.voice[_0x16b12c.voice];
          }
          var _0x49d7cc = Lampa.Utils.hash(_0x4bb7d5.season ? [_0x4bb7d5.season, _0x4bb7d5.season > 0xa ? ':' : '', _0x4bb7d5.episode, _0x4c114a.movie.original_title].join('') : _0x4c114a.movie.original_title);
          var _0x200bfa = Lampa.Timeline.view(_0x49d7cc);
          var _0x486104 = Lampa.Template.get("online_mod", _0x4bb7d5);
          var _0x38e817 = Lampa.Utils.hash(_0x4bb7d5.season ? [_0x4bb7d5.season, _0x4bb7d5.season > 0xa ? ':' : '', _0x4bb7d5.episode, _0x4c114a.movie.original_title, _0x1b4d36.voice[_0x16b12c.voice]].join('') : _0x4c114a.movie.original_title + _0x4bb7d5.title);
          _0x4bb7d5.timeline = _0x200bfa;
          _0x486104.append(Lampa.Timeline.render(_0x200bfa));
          if (Lampa.Timeline.details) {
            _0x486104.find(".online__quality").append(Lampa.Timeline.details(_0x200bfa, " / "));
          }
          if (_0x5762ed.indexOf(_0x38e817) !== -0x1) {
            _0x486104.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x486104.on('hover:enter', function () {
            if (_0x4bb7d5.loading) {
              return;
            }
            if (_0x4c114a.movie.id) {
              Lampa.Favorite.add("history", _0x4c114a.movie, 0x64);
            }
            _0x4bb7d5.loading = true;
            _0x5e2c39(_0x4bb7d5, function (_0x52395f) {
              _0x52395f.loading = false;
              var _0xd63d01 = {
                'url': _0x52e04d.getDefaultQuality(_0x52395f.qualitys, _0x52395f.stream),
                'quality': _0x52e04d.renameQualityMap(_0x52395f.qualitys),
                'subtitles': _0x52395f.subtitles,
                'timeline': _0x52395f.timeline,
                'title': _0x52395f.season ? _0x52395f.title : _0x2460b9 + (_0x52395f.title == _0x2460b9 ? '' : " / " + _0x52395f.title)
              };
              Lampa.Player.play(_0xd63d01);
              if (_0x52395f.season && Lampa.Platform.version) {
                var _0xf64589 = [];
                _0x936f46.forEach(function (_0x49cd0f) {
                  if (_0x49cd0f == _0x52395f) {
                    _0xf64589.push(_0xd63d01);
                  } else {
                    var _0x450cf6 = {
                      'url': function _0x4d11ff(_0x47d770) {
                        _0x5e2c39(_0x49cd0f, function (_0x20f5c9) {
                          _0x450cf6.url = _0x52e04d.getDefaultQuality(_0x20f5c9.qualitys, _0x20f5c9.stream);
                          _0x450cf6.quality = _0x52e04d.renameQualityMap(_0x20f5c9.qualitys);
                          _0x450cf6.subtitles = _0x20f5c9.subtitles;
                          _0x47d770();
                        }, function () {
                          _0x450cf6.url = '';
                          _0x47d770();
                        });
                      },
                      'timeline': _0x49cd0f.timeline,
                      'title': _0x49cd0f.title
                    };
                    _0xf64589.push(_0x450cf6);
                  }
                });
                Lampa.Player.playlist(_0xf64589);
              } else {
                Lampa.Player.playlist([_0xd63d01]);
              }
              if (_0x5762ed.indexOf(_0x38e817) == -0x1) {
                _0x5762ed.push(_0x38e817);
                _0x486104.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x5762ed);
              }
            }, function () {
              _0x4bb7d5.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0x52e04d.append(_0x486104);
          _0x52e04d.contextmenu({
            'item': _0x486104,
            'view': _0x200bfa,
            'viewed': _0x5762ed,
            'hash_file': _0x38e817,
            'element': _0x4bb7d5,
            'file': function _0x35665a(_0x5c6269) {
              _0x5e2c39(_0x4bb7d5, function (_0x35400d) {
                _0x5c6269({
                  'file': _0x35400d.stream,
                  'quality': _0x35400d.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0x52e04d.start(true);
      }
    }
    function _0x49b2a6(_0x22145, _0x2b41b7) {
      var _0x2c9bfb = new Lampa.Reguest();
      var _0x5447ae = [];
      var _0x225e42 = _0x2b41b7;
      var _0x152265 = '';
      var _0x4811e = Lampa.Storage.field('online_mod_prefer_http') === true;
      var _0x9adf52 = _0x22145.proxy("fancdn2");
      var _0x4125bd = _0x59443e.fancdnHost();
      var _0x4e7b3f = _0x4125bd + '/';
      var _0x35660e = _0x59443e.baseUserAgent();
      var _0x3ac809 = Lampa.Platform.is("android") ? {
        'Origin': _0x4125bd,
        'Referer': _0x4e7b3f,
        'User-Agent': _0x35660e
      } : {};
      var _0x158dcc = '';
      if (_0x9adf52) {
        _0x158dcc += "param/Origin=" + encodeURIComponent(_0x4125bd) + '/';
        _0x158dcc += "param/Referer=" + encodeURIComponent(_0x4e7b3f) + '/';
        _0x158dcc += "param/User-Agent=" + encodeURIComponent(_0x35660e) + '/';
      }
      var _0x1e88c0 = _0x4125bd + atob("L2ZpbG0ucGhw");
      var _0x1d2204 = {};
      var _0x3f1205 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      function _0x4bd2b3(_0x414288, _0x134d0e, _0x4f3a31) {
        var _0x1a5e3e = Lampa.Utils.addUrlComponent(_0x1e88c0, _0x414288);
        var _0x41d3ac = Lampa.Storage.get('online_mod_fancdn_token', '') + '';
        if (_0x41d3ac) {
          _0x1a5e3e += '&' + _0x41d3ac;
        }
        _0x2c9bfb.clear();
        _0x2c9bfb.timeout(0x2710);
        _0x2c9bfb.native(_0x22145.proxyLink(_0x1a5e3e, _0x9adf52, _0x158dcc, "enc2t"), function (_0x5e253d) {
          if (_0x134d0e) {
            _0x134d0e(_0x5e253d);
          }
        }, function (_0x5507a9, _0x304b68) {
          if (_0x4f3a31) {
            _0x4f3a31(_0x2c9bfb.errorDecode(_0x5507a9, _0x304b68));
          }
        }, false, {
          'headers': _0x3ac809
        });
      }
      this.search = function (_0x1a3652, _0x470e82) {
        _0x225e42 = _0x1a3652;
        _0x152265 = _0x225e42.search || _0x225e42.movie.title;
        if (isNaN(_0x470e82)) {
          _0x22145.emptyForQuery(_0x152265);
          return;
        }
        var _0x2daa9c = _0x22145.empty.bind(_0x22145);
        _0x4bd2b3("kp=" + encodeURIComponent(_0x470e82), function (_0x5cbe09) {
          _0x2f5a4e(_0x5cbe09, function () {
            _0x22145.emptyForQuery(_0x152265);
          });
        }, _0x2daa9c);
      };
      this.extendChoice = function (_0x426638) {
        Lampa.Arrays.extend(_0x3f1205, _0x426638, true);
      };
      this.reset = function () {
        _0x22145.reset();
        _0x3f1205 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x4ec380();
        _0x559094(_0x2141c0());
        _0x22145.saveChoice(_0x3f1205);
      };
      this.filter = function (_0xb4bfd8, _0x234919, _0x430334) {
        _0x3f1205[_0x234919.stype] = _0x430334.index;
        if (_0x234919.stype == 'voice') {
          _0x3f1205.voice_name = _0x1d2204.voice[_0x430334.index];
        }
        _0x22145.reset();
        _0x4ec380();
        _0x559094(_0x2141c0());
        _0x22145.saveChoice(_0x3f1205);
      };
      this.destroy = function () {
        _0x2c9bfb.clear();
        _0x5447ae = null;
      };
      function _0x4755bd(_0x4e9123, _0x17bee1) {
        if (!_0x4e9123) {
          return [];
        }
        try {
          var _0x462cca = _0x22145.parseM3U(_0x4e9123).map(function (_0x592ab4) {
            var _0x40934d = _0x592ab4.link;
            var _0x4b32aa = _0x592ab4.height;
            var _0x303234 = _0x40934d.match(/\b(\d\d\d+)\./);
            if (_0x303234) {
              var _0xec0238 = parseInt(_0x303234[0x1]);
              if (_0xec0238 > _0x4b32aa && _0xec0238 <= 0x10e0) {
                _0x4b32aa = _0xec0238;
              }
            }
            return {
              'label': _0x4b32aa ? _0x4b32aa + 'p' : "360p ~ 1080p",
              'quality': _0x4b32aa,
              'file': _0x22145.proxyStream(_0x22145.fixLink(_0x40934d, _0x17bee1), "fancdn")
            };
          });
          _0x462cca.sort(function (_0xbe44bc, _0x2cee47) {
            if (_0x2cee47.quality > _0xbe44bc.quality) {
              return 0x1;
            }
            if (_0x2cee47.quality < _0xbe44bc.quality) {
              return -0x1;
            }
            if (_0x2cee47.label > _0xbe44bc.label) {
              return 0x1;
            }
            if (_0x2cee47.label < _0xbe44bc.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x462cca;
        } catch (_0xc12e41) {}
        return [];
      }
      function _0x1dc44c(_0x42d719, _0x3cff81) {
        if (!_0x42d719) {
          return [];
        }
        try {
          var _0x54468c = _0x22145.parsePlaylist(_0x42d719).map(function (_0x55ba10) {
            var _0x1d2a85 = _0x55ba10.label.match(/(\d\d\d+)/);
            var _0x552b54 = _0x55ba10.links[0x0] || '';
            _0x552b54 = _0x22145.fixLinkProtocol(_0x552b54, _0x4811e, true);
            return {
              'label': _0x55ba10.label,
              'quality': _0x1d2a85 ? parseInt(_0x1d2a85[0x1]) : NaN,
              'file': _0x22145.proxyStream(_0x552b54, "fancdn")
            };
          });
          _0x54468c.sort(function (_0x1b4156, _0x20c1ca) {
            if (_0x20c1ca.quality > _0x1b4156.quality) {
              return 0x1;
            }
            if (_0x20c1ca.quality < _0x1b4156.quality) {
              return -0x1;
            }
            if (_0x20c1ca.label > _0x1b4156.label) {
              return 0x1;
            }
            if (_0x20c1ca.label < _0x1b4156.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x54468c;
        } catch (_0x5f3200) {}
        return [];
      }
      function _0x4023b9(_0x50e370, _0x29fe27, _0x14778f, _0x5b82af, _0x43abbf, _0x567979) {
        var _0x59a9cc = '';
        var _0x29b96c = false;
        var _0x2739ed = _0x5b82af(_0x43abbf, _0x567979);
        if (_0x2739ed && _0x2739ed.length) {
          _0x59a9cc = _0x2739ed[0x0].file;
          _0x29b96c = {};
          _0x2739ed.forEach(function (_0x45affa) {
            _0x29b96c[_0x45affa.label] = _0x45affa.file;
          });
        }
        if (_0x59a9cc) {
          _0x50e370.stream = _0x59a9cc;
          _0x50e370.qualitys = _0x29b96c;
          _0x50e370.subtitles = _0x1a05f3(_0x50e370.media.subtitles, _0x567979);
          _0x29fe27(_0x50e370);
        } else {
          _0x14778f();
        }
      }
      function _0x1ced98(_0x14ee53, _0x1bf08d, _0x4f73d3, _0x39cd54) {
        _0x39cd54 = _0x39cd54.replace(/\.mp4:hls:manifest/, '');
        var _0x2fce04 = _0x39cd54.replace(/\/\d\d\d+([^\/]*\.m3u8)$/, "/hls$1");
        _0x2c9bfb.clear();
        _0x2c9bfb.timeout(0x1388);
        _0x2c9bfb.native(_0x22145.proxyStream(_0x2fce04, 'fancdn'), function (_0xae3f3e) {
          _0x4023b9(_0x14ee53, _0x1bf08d, _0x4f73d3, _0x4755bd, _0xae3f3e, _0x2fce04);
        }, function (_0x468959, _0xb47e19) {
          if (_0x39cd54 != _0x2fce04) {
            _0x2c9bfb.clear();
            _0x2c9bfb.timeout(0x1388);
            _0x2c9bfb.native(_0x22145.proxyStream(_0x39cd54, "fancdn"), function (_0x43469f) {
              _0x4023b9(_0x14ee53, _0x1bf08d, _0x4f73d3, _0x4755bd, _0x43469f, _0x39cd54);
            }, function (_0x27fb02, _0x1a5c5a) {
              _0x4f73d3();
            }, false, {
              'dataType': "text"
            });
          } else {
            _0x4f73d3();
          }
        }, false, {
          'dataType': "text"
        });
      }
      function _0x9fecc1(_0x15588b, _0x2073e1, _0x49029a) {
        if (_0x15588b.stream) {
          return _0x2073e1(_0x15588b);
        }
        var _0x3dcc70 = _0x15588b.media.file || '';
        if (_0x3dcc70.lastIndexOf('[', 0x0) === 0x0) {
          _0x4023b9(_0x15588b, _0x2073e1, _0x49029a, _0x1dc44c, _0x3dcc70, '');
          return;
        }
        _0x3dcc70 = _0x22145.fixLinkProtocol(_0x3dcc70, _0x4811e, true);
        if (_0x42558b(_0x3dcc70, ".m3u8")) {
          _0x1ced98(_0x15588b, _0x2073e1, _0x49029a, _0x3dcc70);
          return;
        }
        if (_0x3dcc70) {
          _0x15588b.stream = _0x22145.proxyStream(_0x3dcc70, "fancdn");
          _0x15588b.qualitys = false;
          _0x15588b.subtitles = _0x1a05f3(_0x15588b.media.subtitles, _0x3dcc70);
          _0x2073e1(_0x15588b);
        } else {
          _0x49029a();
        }
      }
      function _0x1a05f3(_0x2fb803, _0x10a306) {
        if (!_0x2fb803) {
          return false;
        }
        var _0x5a8162 = _0x22145.parsePlaylist(_0x2fb803).map(function (_0x230f61) {
          var _0x20df8e = _0x230f61.links[0x0] || '';
          _0x20df8e = _0x22145.fixLinkProtocol(_0x20df8e, _0x4811e, true);
          return {
            'label': _0x230f61.label,
            'url': _0x22145.proxyStreamSubs(_0x22145.fixLink(_0x20df8e, _0x10a306), 'fancdn')
          };
        });
        return _0x5a8162.length ? _0x5a8162 : false;
      }
      function _0x2f5a4e(_0x2fdc42, _0x52de3b) {
        if (_0x2fdc42 && _0x2fdc42.forEach && _0x2fdc42.length) {
          _0x22145.loading(false);
          _0x5447ae = _0x2fdc42;
          _0x4ec380();
          _0x559094(_0x2141c0());
        } else {
          _0x52de3b();
        }
      }
      function _0x4ec380() {
        _0x1d2204 = {
          'season': [],
          'season_num': [],
          'voice': [],
          'voice_info': []
        };
        _0x5447ae.forEach(function (_0x3e8d8f) {
          if (_0x3e8d8f.folder) {
            for (var _0x4e3aea in _0x3e8d8f.folder) {
              if (_0x1d2204.season_num.indexOf(_0x4e3aea) == -0x1) {
                _0x1d2204.season_num.push(_0x4e3aea);
              }
            }
          }
        });
        _0x1d2204.season_num.sort(function (_0x4ea3dc, _0x5a20fc) {
          return _0x4ea3dc - _0x5a20fc;
        });
        _0x1d2204.season_num.forEach(function (_0x37852d) {
          _0x1d2204.season.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x37852d);
        });
        if (!_0x1d2204.season[_0x3f1205.season]) {
          _0x3f1205.season = 0x0;
        }
        if (_0x1d2204.season[_0x3f1205.season]) {
          var _0x1f6e89 = _0x1d2204.season_num[_0x3f1205.season];
          _0x5447ae.forEach(function (_0x57b5c9) {
            if (_0x57b5c9.folder && _0x57b5c9.folder[_0x1f6e89]) {
              var _0x536392 = _0x57b5c9.id || '';
              if (!_0x1d2204.voice_info.some(function (_0x2f6d1d) {
                return _0x2f6d1d.id == _0x536392;
              })) {
                _0x1d2204.voice.push(_0x57b5c9.title || _0x57b5c9.comment || '');
                _0x1d2204.voice_info.push({
                  'id': _0x536392
                });
              }
            }
          });
        }
        if (!_0x1d2204.voice[_0x3f1205.voice]) {
          _0x3f1205.voice = 0x0;
        }
        if (_0x3f1205.voice_name) {
          var _0x2cab66 = _0x1d2204.voice.indexOf(_0x3f1205.voice_name);
          if (_0x2cab66 == -0x1) {
            _0x3f1205.voice = 0x0;
          } else if (_0x2cab66 !== _0x3f1205.voice) {
            _0x3f1205.voice = _0x2cab66;
          }
        }
        _0x22145.filter(_0x1d2204, _0x3f1205);
      }
      function _0x2141c0() {
        var _0x5ae4f7 = [];
        _0x5447ae.forEach(function (_0x4ffc96) {
          if (_0x4ffc96.folder) {
            var _0x5923bc = _0x1d2204.voice_info[_0x3f1205.voice];
            if (_0x5923bc && _0x4ffc96.id == _0x5923bc.id) {
              var _0x41722e = _0x1d2204.voice[_0x3f1205.voice];
              var _0x9084a5 = _0x1d2204.season_num[_0x3f1205.season];
              var _0x2c34eb = _0x4ffc96.folder[_0x9084a5] || {};
              if (_0x2c34eb.folder) {
                for (var _0xc8f604 in _0x2c34eb.folder) {
                  var _0x997aa8 = _0x2c34eb.folder[_0xc8f604] || {};
                  if (_0x997aa8.file) {
                    _0x5ae4f7.push({
                      'title': _0x22145.formatEpisodeTitle(_0x9084a5, _0xc8f604),
                      'quality': "360p ~ 1080p",
                      'info': " / " + Lampa.Utils.shortText(_0x41722e, 0x32),
                      'season': parseInt(_0x9084a5),
                      'episode': parseInt(_0xc8f604),
                      'media': _0x997aa8
                    });
                  }
                }
              }
            }
          } else if (_0x4ffc96.file) {
            _0x5ae4f7.push({
              'title': _0x4ffc96.title || _0x4ffc96.comment || _0x152265,
              'quality': "360p ~ 1080p",
              'info': '',
              'media': _0x4ffc96
            });
          }
        });
        return _0x5ae4f7;
      }
      function _0x559094(_0x4f0952) {
        _0x22145.reset();
        var _0x4b50a5 = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x150058 = _0x22145.getLastEpisode(_0x4f0952);
        _0x4f0952.forEach(function (_0x2e028f) {
          if (_0x2e028f.season) {
            _0x2e028f.translate_episode_end = _0x150058;
            _0x2e028f.translate_voice = _0x1d2204.voice[_0x3f1205.voice];
          }
          var _0x596a74 = Lampa.Utils.hash(_0x2e028f.season ? [_0x2e028f.season, _0x2e028f.season > 0xa ? ':' : '', _0x2e028f.episode, _0x225e42.movie.original_title].join('') : _0x225e42.movie.original_title);
          var _0x1ff530 = Lampa.Timeline.view(_0x596a74);
          var _0x3e59a8 = Lampa.Template.get('online_mod', _0x2e028f);
          var _0x57c2e3 = Lampa.Utils.hash(_0x2e028f.season ? [_0x2e028f.season, _0x2e028f.season > 0xa ? ':' : '', _0x2e028f.episode, _0x225e42.movie.original_title, _0x1d2204.voice[_0x3f1205.voice]].join('') : _0x225e42.movie.original_title + _0x2e028f.title);
          _0x2e028f.timeline = _0x1ff530;
          _0x3e59a8.append(Lampa.Timeline.render(_0x1ff530));
          if (Lampa.Timeline.details) {
            _0x3e59a8.find('.online__quality').append(Lampa.Timeline.details(_0x1ff530, " / "));
          }
          if (_0x4b50a5.indexOf(_0x57c2e3) !== -0x1) {
            _0x3e59a8.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x3e59a8.on("hover:enter", function () {
            if (_0x2e028f.loading) {
              return;
            }
            if (_0x225e42.movie.id) {
              Lampa.Favorite.add("history", _0x225e42.movie, 0x64);
            }
            _0x2e028f.loading = true;
            _0x9fecc1(_0x2e028f, function (_0x184d54) {
              _0x184d54.loading = false;
              var _0x421bb0 = {
                'url': _0x22145.getDefaultQuality(_0x184d54.qualitys, _0x184d54.stream),
                'quality': _0x22145.renameQualityMap(_0x184d54.qualitys),
                'subtitles': _0x184d54.subtitles,
                'timeline': _0x184d54.timeline,
                'title': _0x184d54.season ? _0x184d54.title : _0x152265 + (_0x184d54.title == _0x152265 ? '' : " / " + _0x184d54.title)
              };
              Lampa.Player.play(_0x421bb0);
              if (_0x184d54.season && Lampa.Platform.version) {
                var _0x6e5ef5 = [];
                _0x4f0952.forEach(function (_0x115c2f) {
                  if (_0x115c2f == _0x184d54) {
                    _0x6e5ef5.push(_0x421bb0);
                  } else {
                    var _0x45ef90 = {
                      'url': function _0x14110a(_0x2b7484) {
                        _0x9fecc1(_0x115c2f, function (_0x19b583) {
                          _0x45ef90.url = _0x22145.getDefaultQuality(_0x19b583.qualitys, _0x19b583.stream);
                          _0x45ef90.quality = _0x22145.renameQualityMap(_0x19b583.qualitys);
                          _0x45ef90.subtitles = _0x19b583.subtitles;
                          _0x2b7484();
                        }, function () {
                          _0x45ef90.url = '';
                          _0x2b7484();
                        });
                      },
                      'timeline': _0x115c2f.timeline,
                      'title': _0x115c2f.title
                    };
                    _0x6e5ef5.push(_0x45ef90);
                  }
                });
                Lampa.Player.playlist(_0x6e5ef5);
              } else {
                Lampa.Player.playlist([_0x421bb0]);
              }
              if (_0x4b50a5.indexOf(_0x57c2e3) == -0x1) {
                _0x4b50a5.push(_0x57c2e3);
                _0x3e59a8.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set('online_view', _0x4b50a5);
              }
            }, function () {
              _0x2e028f.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0x22145.append(_0x3e59a8);
          _0x22145.contextmenu({
            'item': _0x3e59a8,
            'view': _0x1ff530,
            'viewed': _0x4b50a5,
            'hash_file': _0x57c2e3,
            'element': _0x2e028f,
            'file': function _0x54fd38(_0x46683e) {
              _0x9fecc1(_0x2e028f, function (_0x15a893) {
                _0x46683e({
                  'file': _0x15a893.stream,
                  'quality': _0x15a893.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
              });
            }
          });
        });
        _0x22145.start(true);
      }
    }
    function _0x20f352(_0x30731a, _0x44d137) {
      var _0x586cc5 = new Lampa.Reguest();
      var _0x14c0ac = [];
      var _0x385a3e = _0x44d137;
      var _0x17697a = '';
      var _0x3c6dd3 = '';
      var _0x2bcd8f = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x58f375 = _0x30731a.proxy("fanserials");
      var _0x2b145a = _0x30731a.proxy("fanserials_cdn");
      var _0x46272f = _0x59443e.decodeSecret([0x5f, 0x39, 0x1c, 0x2a, 0x37, 0x7d, 0x1c, 0x7c, 0x19, 0x5d, 0x42, 0x29, 0x7, 0x2e, 0x30, 0x31, 0x5c, 0x21, 0x19, 0x4c, 0x1a, 0x21, 0x7, 0x28, 0x20, 0x21, 0x5a, 0x3f, 0x17, 0x1b, 0x45, 0x38], atob('RnVja0Zhbg=='));
      var _0x49da63 = _0x46272f + '/';
      var _0x376b04 = _0x59443e.baseUserAgent();
      var _0x5291be = Lampa.Platform.is('android') ? {
        'Origin': _0x46272f,
        'Referer': _0x49da63,
        'User-Agent': _0x376b04
      } : {};
      var _0x5cf5bf = '';
      if (_0x58f375) {
        _0x5cf5bf += "param/Origin=" + encodeURIComponent(_0x46272f) + '/';
        _0x5cf5bf += "param/Referer=" + encodeURIComponent(_0x49da63) + '/';
        _0x5cf5bf += "param/User-Agent=" + encodeURIComponent(_0x376b04) + '/';
      }
      var _0x3d2f94 = (_0x2bcd8f ? "http:" : 'https:') + atob("Ly9sb21vbnQuc2l0ZS9ndC8=");
      var _0x40858d = {};
      var _0x4d9091 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      this.search = function (_0x3e3d9b, _0x652352) {
        _0x385a3e = _0x3e3d9b;
        _0x3c6dd3 = _0x652352;
        _0x17697a = _0x385a3e.search || _0x385a3e.movie.title;
        if (isNaN(_0x3c6dd3)) {
          _0x30731a.emptyForQuery(_0x17697a);
          return;
        }
        var _0x1e34dc = _0x3d2f94 + _0x3c6dd3;
        _0x1e34dc = Lampa.Utils.addUrlComponent(_0x1e34dc, "season=1");
        _0x1e34dc = Lampa.Utils.addUrlComponent(_0x1e34dc, "episode=1");
        _0x1e34dc = Lampa.Utils.addUrlComponent(_0x1e34dc, 'alloff=true');
        _0x586cc5.clear();
        _0x586cc5.timeout(0x2710);
        _0x586cc5.native(_0x30731a.proxyLink(_0x1e34dc, _0x58f375, _0x5cf5bf, "enc2t"), function (_0x3dd1f4) {
          _0x48514e(_0x3dd1f4);
        }, function (_0x2315e5, _0x54b0a6) {
          if (_0x2315e5.status == 0x194 && (!_0x2315e5.responseText || _0x2315e5.responseText.indexOf("Сериал не найден :(") !== -0x1) || _0x2315e5.status == 0x0 && _0x2315e5.statusText !== "timeout") {
            _0x30731a.emptyForQuery(_0x17697a);
          } else {
            _0x30731a.empty(_0x586cc5.errorDecode(_0x2315e5, _0x54b0a6));
          }
        }, false, {
          'dataType': "text",
          'headers': _0x5291be
        });
      };
      this.extendChoice = function (_0xdb87b6) {
        Lampa.Arrays.extend(_0x4d9091, _0xdb87b6, true);
      };
      this.reset = function () {
        _0x30731a.reset();
        _0x4d9091 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x55211f();
        _0x18be12(_0x3e4d62());
        _0x30731a.saveChoice(_0x4d9091);
      };
      this.filter = function (_0x124e84, _0x33c123, _0x500332) {
        _0x4d9091[_0x33c123.stype] = _0x500332.index;
        if (_0x33c123.stype == "voice") {
          _0x4d9091.voice_name = _0x40858d.voice[_0x500332.index];
        }
        _0x30731a.reset();
        _0x55211f();
        _0x18be12(_0x3e4d62());
        _0x30731a.saveChoice(_0x4d9091);
      };
      this.destroy = function () {
        _0x586cc5.clear();
        _0x14c0ac = null;
      };
      function _0x35d527(_0x455cb8, _0x15315e, _0x2c7a15, _0x399ede, _0x2ef339) {
        var _0x2b32b5 = '';
        var _0x4d2b59 = [];
        _0x2ef339 = (_0x2ef339 || '').replace(/\n/g, '');
        var _0x17bff8 = _0x2ef339.match(/<div id="videoplayer[^>]*data-config=[^>]*>/);
        var _0x11c7d2 = _0x17bff8 && $(_0x17bff8[0x0]);
        if (_0x11c7d2) {
          var _0x2fd85e = _0x11c7d2.attr("data-config");
          var _0x3e7a97;
          try {
            _0x3e7a97 = _0x2fd85e && Lampa.Arrays.decodeJson(_0x2fd85e, {});
          } catch (_0x3482a3) {}
          if (_0x3e7a97 && _0x3e7a97.hls) {
            _0x2b32b5 = _0x30731a.fixLink(_0x3e7a97.hls, _0x399ede);
            if (_0x58f375 && !_0x2b145a) {
              _0x2b32b5 = _0x2b32b5.replace(/\/\/cdn(\d+)\./, "//s$1.");
            }
          }
          ["data-original_subtitle", "data-ru_subtitle", 'data-en_subtitle', "data-ua_subtitle"].forEach(function (_0x1219f0) {
            var _0x262bd5 = _0x11c7d2.attr(_0x1219f0);
            if (_0x262bd5) {
              _0x4d2b59.push({
                'label': _0x1219f0.replace("data-", '').replace('_subtitle', ''),
                'url': _0x30731a.processSubs(_0x30731a.fixLink(_0x262bd5, _0x399ede))
              });
            }
          });
        }
        if (_0x2b32b5) {
          _0x455cb8.stream = _0x2b32b5;
          _0x455cb8.qualitys = false;
          _0x455cb8.subtitles = _0x4d2b59.length ? _0x4d2b59 : false;
          _0x15315e(_0x455cb8);
        } else {
          _0x2c7a15();
        }
      }
      function _0x151bda(_0x48c3bc, _0x25d59a, _0x38798b) {
        if (_0x48c3bc.stream) {
          return _0x25d59a(_0x48c3bc);
        }
        var _0x3b1b09 = _0x3d2f94 + _0x3c6dd3;
        _0x3b1b09 = Lampa.Utils.addUrlComponent(_0x3b1b09, "season=" + _0x48c3bc.media.season);
        _0x3b1b09 = Lampa.Utils.addUrlComponent(_0x3b1b09, "episode=" + _0x48c3bc.media.episode);
        _0x3b1b09 = Lampa.Utils.addUrlComponent(_0x3b1b09, 'voice=' + _0x48c3bc.media.voice_id);
        _0x3b1b09 = Lampa.Utils.addUrlComponent(_0x3b1b09, 'alloff=true');
        _0x586cc5.clear();
        _0x586cc5.timeout(0x2710);
        _0x586cc5.native(_0x30731a.proxyLink(_0x3b1b09, _0x58f375, _0x5cf5bf, "enc2t"), function (_0x599697) {
          _0x35d527(_0x48c3bc, _0x25d59a, _0x38798b, _0x3b1b09, _0x599697);
        }, function (_0x4857ed, _0x16ecb3) {
          _0x38798b();
        }, false, {
          'dataType': "text",
          'headers': _0x5291be
        });
      }
      function _0x2c9731(_0x3cbffc, _0x54e3a1, _0x193b47) {
        _0x151bda(_0x3cbffc, function (_0x3d6ca5) {
          var _0x2befd6 = _0x3d6ca5.stream || '';
          if (_0x3d6ca5.qualitys || _0x3d6ca5.parsed || !_0x42558b(_0x2befd6, ".m3u8")) {
            return _0x54e3a1(_0x3d6ca5);
          }
          _0x586cc5.clear();
          _0x586cc5.timeout(0x2710);
          _0x586cc5.native(_0x30731a.proxyLink(_0x2befd6, _0x2b145a, '', "enc2t"), function (_0x1c8984) {
            var _0x3bfcf9 = _0x1f2eef(_0x1c8984, _0x2befd6);
            _0x3bfcf9 = _0x3bfcf9.filter(function (_0x18baea) {
              return _0x18baea.quality > 0x0;
            });
            if (_0x3bfcf9.length) {
              _0x2befd6 = _0x3bfcf9[0x0].file;
              var _0x39bab5 = {};
              _0x3bfcf9.forEach(function (_0x25025c) {
                if (!_0x39bab5[_0x25025c.label]) {
                  _0x39bab5[_0x25025c.label] = _0x25025c.file;
                }
              });
              _0x3d6ca5.stream = _0x2befd6;
              _0x3d6ca5.qualitys = _0x39bab5;
            }
            _0x3d6ca5.parsed = true;
            _0x54e3a1(_0x3d6ca5);
          }, function (_0x2559dd, _0x477daf) {
            _0x54e3a1(_0x3d6ca5);
          }, false, {
            'dataType': 'text'
          });
        }, _0x193b47);
      }
      function _0x1f2eef(_0x40bdfb, _0x1f56bc) {
        if (!_0x40bdfb) {
          return [];
        }
        try {
          var _0x34831a = _0x30731a.parseM3U(_0x40bdfb).filter(function (_0x4c143e) {
            return _0x4c143e.xstream;
          }).map(function (_0x43a931) {
            var _0x4f11a0 = _0x43a931.link;
            var _0x3bc3ca = _0x43a931.height;
            if (_0x3bc3ca > 0x5a0 && _0x3bc3ca <= 0x870) {
              _0x3bc3ca = 0x870;
            } else {
              if (_0x3bc3ca > 0x438 && _0x3bc3ca <= 0x5a0) {
                _0x3bc3ca = 0x5a0;
              } else {
                if (_0x3bc3ca > 0x2d0 && _0x3bc3ca <= 0x438) {
                  _0x3bc3ca = 0x438;
                } else {
                  if (_0x3bc3ca > 0x1e0 && _0x3bc3ca <= 0x2d0) {
                    _0x3bc3ca = 0x2d0;
                  } else {
                    if (_0x3bc3ca > 0x168 && _0x3bc3ca <= 0x1e0) {
                      _0x3bc3ca = 0x1e0;
                    } else {
                      if (_0x3bc3ca > 0xf0 && _0x3bc3ca <= 0x168) {
                        _0x3bc3ca = 0x168;
                      }
                    }
                  }
                }
              }
            }
            return {
              'label': _0x3bc3ca ? _0x3bc3ca + 'p' : "360p ~ 1080p",
              'quality': _0x3bc3ca,
              'bandwidth': _0x43a931.bandwidth,
              'codecs': _0x43a931.codecs,
              'file': _0x30731a.fixLink(_0x4f11a0, _0x1f56bc)
            };
          });
          _0x34831a.sort(function (_0x582e69, _0x5f4a8c) {
            if (_0x5f4a8c.quality > _0x582e69.quality) {
              return 0x1;
            }
            if (_0x5f4a8c.quality < _0x582e69.quality) {
              return -0x1;
            }
            if (_0x5f4a8c.bandwidth > _0x582e69.bandwidth) {
              return 0x1;
            }
            if (_0x5f4a8c.bandwidth < _0x582e69.bandwidth) {
              return -0x1;
            }
            if (_0x5f4a8c.label > _0x582e69.label) {
              return 0x1;
            }
            if (_0x5f4a8c.label < _0x582e69.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x34831a;
        } catch (_0xf059d0) {}
        return [];
      }
      function _0x48514e(_0x315072) {
        _0x30731a.loading(false);
        _0x315072 = (_0x315072 || '').replace(/\n/g, '');
        var _0xf680ec = _0x315072.match(/<div id="inputData"[^>]*>(\{.*?\})<\/div>/);
        var _0x439311;
        try {
          _0x439311 = _0xf680ec && Lampa.Arrays.decodeJson(_0xf680ec[0x1], {});
        } catch (_0x27a5b6) {}
        if (_0x439311) {
          _0x14c0ac = _0x439311;
          _0x55211f();
          _0x18be12(_0x3e4d62());
        } else {
          _0x30731a.emptyForQuery(_0x17697a);
        }
      }
      function _0x55211f() {
        _0x40858d = {
          'season': [],
          'season_num': [],
          'voice': [],
          'voice_info': []
        };
        for (var _0x15fff3 in _0x14c0ac) {
          if (_0x40858d.season_num.indexOf(_0x15fff3) == -0x1) {
            _0x40858d.season_num.push(_0x15fff3);
          }
        }
        _0x40858d.season_num.sort(function (_0x28e8d0, _0x392a45) {
          return _0x28e8d0 - _0x392a45;
        });
        _0x40858d.season_num.forEach(function (_0x55d1e6) {
          _0x40858d.season.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x55d1e6);
        });
        if (!_0x40858d.season[_0x4d9091.season]) {
          _0x4d9091.season = 0x0;
        }
        if (_0x40858d.season[_0x4d9091.season]) {
          var _0x504f2d = _0x40858d.season_num[_0x4d9091.season];
          var _0x121aea = _0x14c0ac[_0x504f2d] || {};
          for (var _0xa2b03b in _0x121aea) {
            var _0x185147 = _0x121aea[_0xa2b03b] || [];
            _0x185147.forEach(function (_0x364c9c) {
              var _0x2eedfd = _0x364c9c.voice_id || '';
              if (!_0x40858d.voice_info.some(function (_0x1ecb8e) {
                return _0x1ecb8e.id == _0x2eedfd;
              })) {
                _0x40858d.voice.push(_0x364c9c.voice_name || '');
                _0x40858d.voice_info.push({
                  'id': _0x2eedfd
                });
              }
            });
          }
        }
        if (!_0x40858d.voice[_0x4d9091.voice]) {
          _0x4d9091.voice = 0x0;
        }
        if (_0x4d9091.voice_name) {
          var _0x31c175 = _0x40858d.voice.indexOf(_0x4d9091.voice_name);
          if (_0x31c175 == -0x1) {
            _0x4d9091.voice = 0x0;
          } else if (_0x31c175 !== _0x4d9091.voice) {
            _0x4d9091.voice = _0x31c175;
          }
        }
        _0x30731a.filter(_0x40858d, _0x4d9091);
      }
      function _0x3e4d62() {
        var _0x4d8207 = [];
        if (_0x40858d.season[_0x4d9091.season] && _0x40858d.voice_info[_0x4d9091.voice]) {
          (function () {
            var _0x14ec28 = _0x40858d.season_num[_0x4d9091.season];
            var _0x310593 = _0x40858d.voice_info[_0x4d9091.voice].id;
            var _0x145d77 = _0x40858d.voice[_0x4d9091.voice];
            var _0x21dcc9 = _0x14c0ac[_0x14ec28] || {};
            var _0x238b8c = function _0x17101d(_0x21401e) {
              var _0x3ff679 = _0x21dcc9[_0x21401e] || [];
              _0x3ff679.forEach(function (_0x54b86c) {
                if (_0x54b86c.voice_id == _0x310593) {
                  _0x4d8207.push({
                    'title': _0x30731a.formatEpisodeTitle(_0x14ec28, _0x21401e),
                    'quality': "360p ~ 1080p",
                    'info': " / " + Lampa.Utils.shortText(_0x145d77, 0x32),
                    'season': _0x14ec28,
                    'episode': _0x21401e,
                    'media': _0x54b86c
                  });
                }
              });
            };
            for (var _0x556c76 in _0x21dcc9) {
              _0x238b8c(_0x556c76);
            }
          })();
        }
        return _0x4d8207;
      }
      function _0x18be12(_0xeeb41d) {
        _0x30731a.reset();
        var _0x33837c = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x36b27c = _0x30731a.getLastEpisode(_0xeeb41d);
        _0xeeb41d.forEach(function (_0x47a68c) {
          if (_0x47a68c.season) {
            _0x47a68c.translate_episode_end = _0x36b27c;
            _0x47a68c.translate_voice = _0x40858d.voice[_0x4d9091.voice];
          }
          var _0xd1787e = Lampa.Utils.hash(_0x47a68c.season ? [_0x47a68c.season, _0x47a68c.season > 0xa ? ':' : '', _0x47a68c.episode, _0x385a3e.movie.original_title].join('') : _0x385a3e.movie.original_title);
          var _0x3aa80b = Lampa.Timeline.view(_0xd1787e);
          var _0xb67898 = Lampa.Template.get('online_mod', _0x47a68c);
          var _0x2b4973 = Lampa.Utils.hash(_0x47a68c.season ? [_0x47a68c.season, _0x47a68c.season > 0xa ? ':' : '', _0x47a68c.episode, _0x385a3e.movie.original_title, _0x40858d.voice[_0x4d9091.voice]].join('') : _0x385a3e.movie.original_title + _0x47a68c.title);
          _0x47a68c.timeline = _0x3aa80b;
          _0xb67898.append(Lampa.Timeline.render(_0x3aa80b));
          if (Lampa.Timeline.details) {
            _0xb67898.find('.online__quality').append(Lampa.Timeline.details(_0x3aa80b, " / "));
          }
          if (_0x33837c.indexOf(_0x2b4973) !== -0x1) {
            _0xb67898.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
          }
          _0xb67898.on("hover:enter", function () {
            if (_0x47a68c.loading) {
              return;
            }
            if (_0x385a3e.movie.id) {
              Lampa.Favorite.add('history', _0x385a3e.movie, 0x64);
            }
            _0x47a68c.loading = true;
            _0x2c9731(_0x47a68c, function (_0x304b27) {
              _0x304b27.loading = false;
              var _0x251782 = {
                'url': _0x30731a.getDefaultQuality(_0x304b27.qualitys, _0x304b27.stream),
                'quality': _0x30731a.renameQualityMap(_0x304b27.qualitys),
                'subtitles': _0x304b27.subtitles,
                'timeline': _0x304b27.timeline,
                'title': _0x304b27.season ? _0x304b27.title : _0x17697a + (_0x304b27.title == _0x17697a ? '' : " / " + _0x304b27.title)
              };
              Lampa.Player.play(_0x251782);
              if (_0x304b27.season && Lampa.Platform.version) {
                var _0x59340c = [];
                _0xeeb41d.forEach(function (_0x42a548) {
                  if (_0x42a548 == _0x304b27) {
                    _0x59340c.push(_0x251782);
                  } else {
                    var _0x48dfc7 = {
                      'url': function _0x19198b(_0x115708) {
                        _0x2c9731(_0x42a548, function (_0x31c680) {
                          _0x48dfc7.url = _0x30731a.getDefaultQuality(_0x31c680.qualitys, _0x31c680.stream);
                          _0x48dfc7.quality = _0x30731a.renameQualityMap(_0x31c680.qualitys);
                          _0x48dfc7.subtitles = _0x31c680.subtitles;
                          _0x115708();
                        }, function () {
                          _0x48dfc7.url = '';
                          _0x115708();
                        });
                      },
                      'timeline': _0x42a548.timeline,
                      'title': _0x42a548.title
                    };
                    _0x59340c.push(_0x48dfc7);
                  }
                });
                Lampa.Player.playlist(_0x59340c);
              } else {
                Lampa.Player.playlist([_0x251782]);
              }
              if (_0x33837c.indexOf(_0x2b4973) == -0x1) {
                _0x33837c.push(_0x2b4973);
                _0xb67898.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set('online_view', _0x33837c);
              }
            }, function () {
              _0x47a68c.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            });
          });
          _0x30731a.append(_0xb67898);
          _0x30731a.contextmenu({
            'item': _0xb67898,
            'view': _0x3aa80b,
            'viewed': _0x33837c,
            'hash_file': _0x2b4973,
            'element': _0x47a68c,
            'file': function _0x19ebb8(_0xd2f4f7) {
              _0x2c9731(_0x47a68c, function (_0x41417a) {
                _0xd2f4f7({
                  'file': _0x41417a.stream,
                  'quality': _0x41417a.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0x30731a.start(true);
      }
    }
    function _0x281070(_0x100891, _0x1546fc) {
      var _0x35be7f = new Lampa.Reguest();
      var _0x5218ab = {};
      var _0x1f3c14 = _0x1546fc;
      var _0x393c84 = '';
      var _0x1e9b9b = _0x100891.proxy('videoseed');
      var _0x17b07a = atob('aHR0cHM6Ly9raW5vc2VyaWFscy5uZXQ=');
      var _0x2eff86 = _0x17b07a + '/';
      var _0x3d9ad7 = _0x59443e.baseUserAgent();
      var _0x20d233 = atob("aHR0cHM6Ly9hcGkudmlkZW9zZWVkLnR2L2FwaXYyLnBocA==");
      var _0x4b2c25 = _0x59443e.decodeSecret([0x38, 0x24, 0xe, 0x13, 0xc, 0x7, 0x23, 0x16, 0x16, 0x3a, 0x7f, 0x2d, 0x52, 0x13, 0x53, 0xa, 0x76, 0x46, 0x42, 0x39, 0x79, 0x7c, 0x5d, 0x47, 0x0, 0xc, 0x7e, 0x14, 0x40, 0x6d, 0x7a, 0x2f, 0x3, 0x44, 0x50, 0x9, 0x22, 0x47]);
      var _0x435988 = Lampa.Platform.is("android") ? {
        'Origin': _0x17b07a,
        'Referer': _0x2eff86,
        'User-Agent': _0x3d9ad7
      } : {};
      var _0x4e93e4 = '';
      if (_0x1e9b9b) {
        _0x4e93e4 += 'param/Origin=' + encodeURIComponent(_0x17b07a) + '/';
        _0x4e93e4 += 'param/Referer=' + encodeURIComponent(_0x2eff86) + '/';
        _0x4e93e4 += "param/User-Agent=" + encodeURIComponent(_0x3d9ad7) + '/';
      }
      var _0xda4c2c = {};
      var _0x51d415 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      this.search = function (_0x1d8074, _0x4f9823) {
        _0x1f3c14 = _0x1d8074;
        _0x393c84 = _0x1f3c14.search || _0x1f3c14.movie.title;
        if (isNaN(_0x4f9823)) {
          _0x100891.emptyForQuery(_0x393c84);
          return;
        }
        var _0x3c23ac = function _0x2e2d4c() {
          _0x100891.emptyForQuery(_0x393c84);
        };
        var _0x4858c9 = _0x100891.empty.bind(_0x100891);
        var _0x955859 = _0x20d233;
        _0x955859 = Lampa.Utils.addUrlComponent(_0x955859, "item=" + (_0x1f3c14.movie.number_of_seasons ? "serial" : 'movie'));
        _0x955859 = Lampa.Utils.addUrlComponent(_0x955859, "kp=" + encodeURIComponent(_0x4f9823));
        _0x955859 = Lampa.Utils.addUrlComponent(_0x955859, _0x4b2c25);
        _0x35be7f.clear();
        _0x35be7f.timeout(0x2710);
        _0x35be7f.native(_0x100891.proxyLink(_0x955859, _0x1e9b9b, _0x4e93e4, "enc2t"), function (_0x464518) {
          if (_0x464518 && _0x464518.data && _0x464518.data[0x0] && _0x464518.data[0x0].iframe) {
            var _0x43afe7 = _0x17b07a + _0x59443e.parseURL(_0x464518.data[0x0].iframe).pathname;
            _0x43afe7 = Lampa.Utils.addUrlComponent(_0x43afe7, "token=" + _0x59443e.randomHex(0x20));
            _0x35be7f.clear();
            _0x35be7f.timeout(0x2710);
            _0x35be7f.native(_0x100891.proxyLink(_0x43afe7, _0x1e9b9b, _0x4e93e4, "enc2t"), function (_0x45a75c) {
              _0x23adab(_0x45a75c || '', _0x3c23ac);
            }, function (_0xc54d83, _0x299571) {
              _0x4858c9(_0x35be7f.errorDecode(_0xc54d83, _0x299571));
            }, false, {
              'dataType': "text",
              'headers': _0x435988
            });
          } else {
            _0x3c23ac();
          }
        }, function (_0x291985, _0x1553ab) {
          _0x4858c9(_0x35be7f.errorDecode(_0x291985, _0x1553ab));
        }, false, {
          'headers': _0x435988
        });
      };
      this.extendChoice = function (_0x2586ae) {
        Lampa.Arrays.extend(_0x51d415, _0x2586ae, true);
      };
      this.reset = function () {
        _0x100891.reset();
        _0x51d415 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x5fcc25();
        _0x1e3f2b(_0x535f5b());
        _0x100891.saveChoice(_0x51d415);
      };
      this.filter = function (_0x3deb45, _0x5ae866, _0x20ad38) {
        _0x51d415[_0x5ae866.stype] = _0x20ad38.index;
        if (_0x5ae866.stype == "voice") {
          _0x51d415.voice_name = _0xda4c2c.voice[_0x20ad38.index];
        }
        _0x100891.reset();
        _0x5fcc25();
        _0x1e3f2b(_0x535f5b());
        _0x100891.saveChoice(_0x51d415);
      };
      this.destroy = function () {
        _0x35be7f.clear();
        _0x5218ab = null;
      };
      function _0x23adab(_0x536310, _0x28a244) {
        _0x536310 = (_0x536310 || '').replace(/\n/g, '');
        var _0x2ac78b;
        var _0x19dee5 = _0x536310.match(/Playerjs\(({.*?})\);/) || _0x536310.match(/var +plr_config *= *({.*?});/);
        if (_0x19dee5) {
          try {
            _0x2ac78b = _0x19dee5 && (0x0, eval)("\"use strict\"; (function(){ var token = \"\", domain_name = \"\"; return " + _0x19dee5[0x1] + "; })();");
          } catch (_0xbc41) {}
        } else {
          _0x19dee5 = _0x536310.match(/Playerjs\("([^"]*)"\);/) || _0x536310.match(/var +plr_config *= *"([^"]*)";/);
          var _0x3ed544 = _0x19dee5 && _0x286cfc(_0x19dee5[0x1]);
          try {
            _0x2ac78b = _0x3ed544 && JSON.parse(_0x3ed544);
          } catch (_0x5b9722) {}
        }
        if (_0x2ac78b && _0x2ac78b.file && typeof _0x2ac78b.file === 'string') {
          _0x2ac78b.file = _0x286cfc(_0x2ac78b.file);
          try {
            _0x2ac78b.file = JSON.parse(_0x2ac78b.file);
          } catch (_0x5b95c6) {
            _0x2ac78b = {
              'file': [_0x2ac78b]
            };
          }
        }
        if (_0x2ac78b && _0x2ac78b.file && _0x2ac78b.file.forEach) {
          _0x100891.loading(false);
          _0x5218ab = _0x2ac78b;
          _0x5fcc25();
          _0x1e3f2b(_0x535f5b());
        } else {
          _0x28a244();
        }
      }
      function _0x286cfc(_0x35ba0b) {
        if (!(_0x35ba0b.lastIndexOf('#', 0x0) === 0x0)) {
          return _0x35ba0b;
        }
        var _0x3862ec = function _0x4d9d62(_0x586aac) {
          return btoa(encodeURIComponent(_0x586aac).replace(/%([0-9A-F]{2})/g, function (_0x29e12e, _0x3ac028) {
            return String.fromCharCode('0x' + _0x3ac028);
          }));
        };
        var _0x32cd54 = function _0x338d03(_0x39c322) {
          return decodeURIComponent(atob(_0x39c322).split('').map(function (_0x4eb548) {
            return '%' + ('00' + _0x4eb548.charCodeAt(0x0).toString(0x10)).slice(-0x2);
          }).join(''));
        };
        var _0x5f61a1 = [atob("YTBCZnREaUZaVXNLV3A2d0o5VnloMmxIcWoxQ2JjOGVuTVlQQVQ3VGFialpqdkcySWZaRU9XYm9ZdDFvUTZPSw=="), atob("NnNlbFdvNUcwcjczNGttWm5hSHZZSmpFU3VpY1BJTGRYVGJ0WHUwcTR4Q3hWbmJaaDRKWFRKRElOeXNJRXY2aQ=="), atob("U0hiTkJZa085VkNoeTNtMjg1NnF3WEljS0ZUQXAwTTdXbjFyUllvY1lVbmFLeThXNkJsekdlUUhnMjFYNmZGbg=="), atob("QWw2aXhzYlZuQ1dlZHBSd0hjdjdHTGhNWTFUeTl6YXIwU1pmS29PNk9rM3c1ejRJbUVqNjFidkRCdEhQSXF0Mg=="), atob("WEV6bjVZUE9sRnM5VndjdThKMzRmdEh5R1FheDFXNzZoQUNlWjBEb0RNckg4TGQ1aGhqNVd6em5Md2c3amZnVg==")];
        var _0x5f56fb = _0x35ba0b.substring(0x2);
        _0x5f61a1.forEach(function (_0x7482e0) {
          _0x5f56fb = _0x5f56fb.replace("|||" + _0x3862ec(_0x7482e0), '');
        });
        try {
          _0x5f56fb = _0x32cd54(_0x5f56fb);
        } catch (_0x4f62b9) {
          _0x5f56fb = '';
        }
        return _0x5f56fb;
      }
      function _0x54b921(_0x18380b) {
        var _0x33e5c5 = {};
        var _0x1da8e5 = _0x4917ee(_0x18380b);
        _0x1da8e5.forEach(function (_0x120865) {
          var _0x105256 = _0x33e5c5[_0x120865.voice || ''];
          var _0x49c1f3 = _0x105256 && _0x105256.items || [];
          _0x49c1f3.push(_0x120865);
          if (!_0x105256 || _0x120865.quality > _0x105256.quality) {
            _0x33e5c5[_0x120865.voice || ''] = {
              'quality': _0x120865.quality,
              'items': _0x49c1f3
            };
          }
        });
        return _0x33e5c5;
      }
      function _0x5fcc25() {
        _0xda4c2c = {
          'season': [],
          'voice': []
        };
        var _0x4b51ab = [];
        _0x5218ab.file.forEach(function (_0x55d8fa) {
          if (_0x55d8fa.folder) {
            _0x55d8fa.title = _0x55d8fa.title || _0x55d8fa.comment || '';
            _0x55d8fa.season_num = parseInt(_0x55d8fa.title.match(/\d+/));
            _0x4b51ab.push(_0x55d8fa);
          }
        });
        _0x4b51ab.sort(function (_0x9fe467, _0x477d12) {
          var _0x1db358 = _0x9fe467.season_num - _0x477d12.season_num;
          if (_0x1db358) {
            return _0x1db358;
          }
          if (_0x9fe467.title > _0x477d12.title) {
            return 0x1;
          }
          if (_0x9fe467.title < _0x477d12.title) {
            return -0x1;
          }
          return 0x0;
        });
        _0xda4c2c.season = _0x4b51ab.map(function (_0x1501d2) {
          return _0x1501d2.title;
        });
        if (!_0xda4c2c.season[_0x51d415.season]) {
          _0x51d415.season = 0x0;
        }
        var _0xbd88d4 = _0x4b51ab[_0x51d415.season];
        if (_0xbd88d4 && _0xbd88d4.folder) {
          _0xbd88d4.folder.forEach(function (_0x11f53d) {
            if (_0x11f53d.folder) {
              _0x11f53d.folder.forEach(function (_0x212fb0) {
                var _0x6374fd = _0x212fb0.title || _0x212fb0.comment || '';
                if (_0xda4c2c.voice.indexOf(_0x6374fd) == -0x1) {
                  _0xda4c2c.voice.push(_0x6374fd);
                }
              });
            } else {
              if (typeof _0x11f53d.file === "string") {
                _0x11f53d.file_voices = _0x54b921(_0x11f53d.file);
                for (var _0x20fbdb in _0x11f53d.file_voices) {
                  if (_0x20fbdb && _0xda4c2c.voice.indexOf(_0x20fbdb) == -0x1) {
                    _0xda4c2c.voice.push(_0x20fbdb);
                  }
                }
              }
            }
          });
        }
        if (!_0xda4c2c.voice[_0x51d415.voice]) {
          _0x51d415.voice = 0x0;
        }
        if (_0x51d415.voice_name) {
          var _0x878009 = _0xda4c2c.voice.indexOf(_0x51d415.voice_name);
          if (_0x878009 == -0x1) {
            _0x51d415.voice = 0x0;
          } else if (_0x878009 !== _0x51d415.voice) {
            _0x51d415.voice = _0x878009;
          }
        }
        _0x100891.filter(_0xda4c2c, _0x51d415);
      }
      function _0x4917ee(_0x511a26, _0x30d3bb) {
        if (!_0x511a26) {
          return [];
        }
        try {
          if (!(_0x511a26.lastIndexOf('[', 0x0) === 0x0)) {
            _0x511a26 = '[]' + _0x511a26;
          }
          var _0x1c30f9 = _0x100891.parsePlaylist(_0x511a26);
          _0x1c30f9.forEach(function (_0x4b2ba7) {
            if (_0x4b2ba7.voice) {
              _0x4b2ba7.voice = _0x4b2ba7.voice.trim();
            }
          });
          if (_0x30d3bb) {
            var _0xa88d5b = _0x1c30f9.filter(function (_0xa3ef09) {
              return _0xa3ef09.voice == _0x30d3bb;
            });
            if (_0xa88d5b.length) {
              _0x1c30f9 = _0xa88d5b;
            } else {
              _0x1c30f9 = _0x1c30f9.filter(function (_0x43e7e3) {
                return typeof _0x43e7e3.voice === 'undefined';
              });
            }
          }
          var _0x1c29e4 = _0x1c30f9.map(function (_0x48e6b9) {
            var _0x9765cc = _0x48e6b9.label.match(/(\d\d\d+)/);
            var _0x4e9b93 = _0x48e6b9.links[0x0] || '';
            return {
              'label': _0x48e6b9.label,
              'quality': _0x9765cc ? parseInt(_0x9765cc[0x1]) : NaN,
              'voice': _0x48e6b9.voice,
              'file': _0x4e9b93
            };
          });
          _0x1c29e4.sort(function (_0x474044, _0x4fe7de) {
            if (_0x4fe7de.quality > _0x474044.quality) {
              return 0x1;
            }
            if (_0x4fe7de.quality < _0x474044.quality) {
              return -0x1;
            }
            if (_0x4fe7de.label > _0x474044.label) {
              return 0x1;
            }
            if (_0x4fe7de.label < _0x474044.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x1c29e4;
        } catch (_0xccd222) {}
        return [];
      }
      function _0x281609(_0x50babf) {
        if (!_0x50babf) {
          return false;
        }
        var _0x4c37d5 = _0x100891.parsePlaylist(_0x50babf).map(function (_0x2a4667) {
          var _0x5d1285 = _0x2a4667.links[0x0] || '';
          return {
            'label': _0x2a4667.label,
            'url': _0x100891.processSubs(_0x5d1285)
          };
        });
        return _0x4c37d5.length ? _0x4c37d5 : false;
      }
      function _0x535f5b() {
        var _0x15d780 = [];
        _0x5218ab.file.forEach(function (_0x483c80) {
          if (_0x483c80.folder) {
            var _0x67bf04 = _0x483c80.title || _0x483c80.comment || '';
            if (_0x67bf04 == _0xda4c2c.season[_0x51d415.season]) {
              var _0x2c47ec = parseInt(_0x67bf04.match(/\d+/));
              _0x483c80.folder.forEach(function (_0x204d56) {
                var _0x479645 = _0x204d56.title || _0x204d56.comment || '';
                var _0x565689 = parseInt(_0x479645.match(/\d+/));
                _0x479645 = _0x479645.replace(/\d+/, '').replace(/серия/i, '').trim();
                if (_0x204d56.folder) {
                  _0x204d56.folder.forEach(function (_0x38957b) {
                    var _0x4f94ac = _0x38957b.title || _0x38957b.comment || '';
                    if (_0x4f94ac == _0xda4c2c.voice[_0x51d415.voice] && _0x38957b.file) {
                      var _0x4708dd = _0x4917ee(_0x38957b.file);
                      _0x15d780.push({
                        'title': _0x100891.formatEpisodeTitle(_0x2c47ec, _0x565689, _0x479645),
                        'quality': _0x4708dd[0x0] && _0x4708dd[0x0].quality ? _0x4708dd[0x0].quality + 'p' : "360p ~ 1080p",
                        'info': " / " + Lampa.Utils.shortText(_0x4f94ac, 0x32),
                        'season': _0x2c47ec,
                        'episode': _0x565689,
                        'media': _0x4708dd,
                        'subtitles': _0x281609(_0x38957b.subtitle)
                      });
                    }
                  });
                } else {
                  if (_0x204d56.file_voices) {
                    var _0x2b2402 = _0xda4c2c.voice[_0x51d415.voice] || '';
                    var _0x5ec8c5 = _0x204d56.file_voices[_0x2b2402];
                    if (!_0x5ec8c5) {
                      _0x2b2402 = '';
                      _0x5ec8c5 = _0x204d56.file_voices[_0x2b2402];
                    }
                    if (_0x5ec8c5) {
                      _0x15d780.push({
                        'title': _0x100891.formatEpisodeTitle(_0x2c47ec, _0x565689, _0x479645),
                        'quality': _0x5ec8c5.quality ? _0x5ec8c5.quality + 'p' : "360p ~ 1080p",
                        'info': _0x2b2402 ? " / " + Lampa.Utils.shortText(_0x2b2402, 0x32) : '',
                        'season': _0x2c47ec,
                        'episode': _0x565689,
                        'media': _0x5ec8c5.items,
                        'subtitles': _0x281609(_0x204d56.subtitle)
                      });
                    }
                  }
                }
              });
            }
          } else {
            if (!_0x483c80.file_voices && _0x483c80.file && typeof _0x483c80.file === "string") {
              _0x483c80.file_voices = _0x54b921(_0x483c80.file);
            }
            if (_0x483c80.file_voices) {
              var _0xa5bdb8 = _0x281609(_0x483c80.subtitle);
              for (var _0x2d82a4 in _0x483c80.file_voices) {
                var _0x4618fc = _0x483c80.file_voices[_0x2d82a4];
                _0x15d780.push({
                  'title': _0x2d82a4 || _0x483c80.title || _0x483c80.comment || _0x393c84,
                  'quality': _0x4618fc.quality ? _0x4618fc.quality + 'p' : "360p ~ 1080p",
                  'info': '',
                  'media': _0x4618fc.items,
                  'subtitles': _0xa5bdb8
                });
              }
            }
          }
        });
        return _0x15d780;
      }
      function _0x4d2a7b(_0x521431) {
        var _0x484877 = '';
        var _0x2fded1 = false;
        var _0x242ca5 = _0x521431.media;
        if (_0x242ca5 && _0x242ca5.length) {
          _0x484877 = _0x242ca5[0x0].file;
          _0x2fded1 = {};
          _0x242ca5.forEach(function (_0x47ead9) {
            _0x2fded1[_0x47ead9.label] = _0x47ead9.file;
          });
        }
        return {
          'file': _0x484877,
          'quality': _0x2fded1
        };
      }
      function _0x1e3f2b(_0x21a4f8) {
        _0x100891.reset();
        var _0x4a84d8 = Lampa.Storage.cache("online_view", 0x1388, []);
        _0x21a4f8.forEach(function (_0x3219c5) {
          var _0x53ac5d = Lampa.Utils.hash(_0x3219c5.season ? [_0x3219c5.season, _0x3219c5.season > 0xa ? ':' : '', _0x3219c5.episode, _0x1f3c14.movie.original_title].join('') : _0x1f3c14.movie.original_title);
          var _0x2ae8a6 = Lampa.Timeline.view(_0x53ac5d);
          var _0x441c1a = Lampa.Template.get("online_mod", _0x3219c5);
          var _0x413021 = Lampa.Utils.hash(_0x3219c5.season ? [_0x3219c5.season, _0x3219c5.season > 0xa ? ':' : '', _0x3219c5.episode, _0x1f3c14.movie.original_title, _0xda4c2c.voice[_0x51d415.voice]].join('') : _0x1f3c14.movie.original_title + _0x3219c5.title);
          _0x3219c5.timeline = _0x2ae8a6;
          _0x441c1a.append(Lampa.Timeline.render(_0x2ae8a6));
          if (Lampa.Timeline.details) {
            _0x441c1a.find(".online__quality").append(Lampa.Timeline.details(_0x2ae8a6, " / "));
          }
          if (_0x4a84d8.indexOf(_0x413021) !== -0x1) {
            _0x441c1a.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get('icon_star', {}, true) + "</div>");
          }
          _0x441c1a.on("hover:enter", function () {
            if (_0x1f3c14.movie.id) {
              Lampa.Favorite.add("history", _0x1f3c14.movie, 0x64);
            }
            var _0x40e03b = _0x4d2a7b(_0x3219c5);
            if (_0x40e03b.file) {
              var _0x169058 = [];
              var _0x27d583 = {
                'url': _0x100891.getDefaultQuality(_0x40e03b.quality, _0x40e03b.file),
                'quality': _0x100891.renameQualityMap(_0x40e03b.quality),
                'subtitles': _0x3219c5.subtitles,
                'timeline': _0x3219c5.timeline,
                'title': _0x3219c5.season ? _0x3219c5.title : _0x393c84 + (_0x3219c5.title == _0x393c84 ? '' : " / " + _0x3219c5.title)
              };
              if (_0x3219c5.season) {
                _0x21a4f8.forEach(function (_0x52ef58) {
                  var _0x12f192 = _0x4d2a7b(_0x52ef58);
                  _0x169058.push({
                    'url': _0x100891.getDefaultQuality(_0x12f192.quality, _0x12f192.file),
                    'quality': _0x100891.renameQualityMap(_0x12f192.quality),
                    'subtitles': _0x52ef58.subtitles,
                    'timeline': _0x52ef58.timeline,
                    'title': _0x52ef58.title
                  });
                });
              } else {
                _0x169058.push(_0x27d583);
              }
              if (_0x169058.length > 0x1) {
                _0x27d583.playlist = _0x169058;
              }
              Lampa.Player.play(_0x27d583);
              Lampa.Player.playlist(_0x169058);
              if (_0x4a84d8.indexOf(_0x413021) == -0x1) {
                _0x4a84d8.push(_0x413021);
                _0x441c1a.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
                Lampa.Storage.set("online_view", _0x4a84d8);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            }
          });
          _0x100891.append(_0x441c1a);
          _0x100891.contextmenu({
            'item': _0x441c1a,
            'view': _0x2ae8a6,
            'viewed': _0x4a84d8,
            'hash_file': _0x413021,
            'file': function _0x19d245(_0x4ddc65) {
              _0x4ddc65(_0x4d2a7b(_0x3219c5));
            }
          });
        });
        _0x100891.start(true);
      }
    }
    function _0xb8c3a6(_0x523069, _0x6a62bd) {
      var _0x32be72 = new Lampa.Reguest();
      var _0x3346e3 = {};
      var _0x4e2353 = _0x6a62bd;
      var _0x33943b = '';
      var _0x1c3aae = _0x523069.proxy("vibix");
      var _0x37fc1d = _0x59443e.baseUserAgent();
      var _0x58a867 = _0x59443e.decodeSecret([0x2c, 0x17, 0x51, 0x20, 0x3f, 0x20, 0x74, 0x5a, 0x0, 0x73, 0x59, 0xe, 0x74, 0xa, 0x1e, 0x31, 0x1, 0x3d, 0x3, 0x73, 0x39, 0x40, 0x8, 0x39, 0x2d, 0x15, 0x1c, 0x58, 0x71, 0xe, 0x5e, 0x1d, 0x76, 0x38, 0x19, 0x66, 0x5, 0xf, 0x5a, 0x1d, 0x21, 0x44, 0x7b, 0x6, 0x28, 0x23, 0x21, 0x5b, 0x7f, 0x3e, 0x1c, 0x41, 0x9, 0x31, 0x68, 0x37, 0x61, 0xe, 0x8, 0x2e], atob("VmliaXhBdXRo"));
      var _0x10ceaa = _0x59443e.decodeSecret([0x3c, 0xb, 0x63, 0x36, 0x2c, 0x31, 0x2d, 0x19, 0x5, 0x22, 0x3a, 0x27, 0x48, 0x3c, 0x63, 0x65, 0x22, 0x2, 0x4, 0x3, 0x19, 0x1d, 0x5e, 0x3b, 0x2d, 0x35, 0x2c, 0xd, 0x73, 0x32, 0x0, 0x33], atob("VmliaXhBdXRo"));
      var _0x261995 = _0x59443e.decodeSecret([0x3c, 0x26, 0x71, 0x18, 0xe, 0x3f, 0x3e, 0x2a, 0x55, 0x2c, 0x34, 0x14, 0x48, 0x2b, 0x34, 0x3, 0x6d, 0x59, 0x75, 0x3c, 0xa, 0x1d, 0x41, 0xb, 0x28, 0x3, 0x66, 0x38, 0x5, 0x11, 0x24, 0x37], atob("VmliaXhBdXRo"));
      var _0x55b6e3 = Lampa.Platform.is("android") ? {
        'User-Agent': _0x37fc1d,
        'Authorization': _0x58a867
      } : {};
      var _0x237791 = '';
      if (_0x1c3aae) {
        _0x237791 += "param/User-Agent=" + encodeURIComponent(_0x37fc1d) + '/';
        _0x237791 += "param/Authorization=" + encodeURIComponent(_0x58a867) + '/';
      }
      var _0x3aa50b = atob("aHR0cHM6Ly92aWJpeC5vcmcvYXBpL3YxL3B1Ymxpc2hlci92aWRlb3Mv");
      var _0x4c53ee = {};
      var _0x408790 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      function _0x32b948(_0x220831, _0x45e077, _0x4feb66) {
        _0x32be72.clear();
        _0x32be72.timeout(0x3a98);
        _0x32be72.native(_0x523069.proxyLink(_0x3aa50b + _0x220831, _0x1c3aae, _0x237791, "enc2t"), function (_0x56492f) {
          if (_0x45e077) {
            _0x45e077(_0x56492f);
          }
        }, function (_0x344df7, _0x369644) {
          if (_0x344df7.status == 0x194 && (!_0x344df7.responseText || _0x344df7.responseText.indexOf("\"Video not found\"") !== -0x1)) {
            if (_0x45e077) {
              _0x45e077('');
            }
          } else {
            if (_0x4feb66) {
              _0x4feb66(_0x32be72.errorDecode(_0x344df7, _0x369644));
            }
          }
        }, false, {
          'headers': _0x55b6e3
        });
      }
      this.search = function (_0x226a6a, _0x1ff7d8) {
        _0x4e2353 = _0x226a6a;
        _0x33943b = _0x4e2353.search || _0x4e2353.movie.title;
        var _0x5ac09d = function _0x2c0e8b() {
          _0x523069.emptyForQuery(_0x33943b);
        };
        var _0x2975d4 = _0x523069.empty.bind(_0x523069);
        var _0x195f90 = (+_0x1ff7d8 ? "kp/" : "imdb/") + encodeURIComponent(_0x1ff7d8);
        _0x32b948(_0x195f90, function (_0xa472f8) {
          _0x2e4cc9(_0xa472f8, function () {
            if (!_0x4e2353.clarification && _0x4e2353.movie.imdb_id && _0x1ff7d8 != _0x4e2353.movie.imdb_id) {
              _0x32b948("imdb/" + encodeURIComponent(_0x4e2353.movie.imdb_id), function (_0xc0bd61) {
                _0x2e4cc9(_0xc0bd61, _0x5ac09d);
              }, _0x2975d4);
            } else {
              _0x5ac09d();
            }
          });
        }, _0x2975d4);
      };
      this.extendChoice = function (_0x5aa848) {
        Lampa.Arrays.extend(_0x408790, _0x5aa848, true);
      };
      this.reset = function () {
        _0x523069.reset();
        _0x408790 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x241d64();
        _0x5e5b84(_0x1594c9());
        _0x523069.saveChoice(_0x408790);
      };
      this.filter = function (_0x2a25d8, _0x4701c2, _0x16d40a) {
        _0x408790[_0x4701c2.stype] = _0x16d40a.index;
        if (_0x4701c2.stype == "voice") {
          _0x408790.voice_name = _0x4c53ee.voice[_0x16d40a.index];
        }
        _0x523069.reset();
        _0x241d64();
        _0x5e5b84(_0x1594c9());
        _0x523069.saveChoice(_0x408790);
      };
      this.destroy = function () {
        _0x32be72.clear();
        _0x3346e3 = null;
      };
      function _0xb6f127(_0x4a3008) {
        var _0x5dc314 = _0x4a3008.match(/\/embed-serials\/(\d+)/);
        var _0x39c37e = _0x4a3008.match(/\/embed\/(\d+)/);
        if (_0x5dc314) {
          return {
            'type': "serial",
            'id': _0x5dc314[0x1]
          };
        } else {
          if (_0x39c37e) {
            return {
              'type': "movie",
              'id': _0x39c37e[0x1]
            };
          }
        }
        return null;
      }
      function _0x3730e7(_0xe0da5b) {
        var _0x5e79f3 = _0x10ceaa.length;
        var _0xcb309a = _0xe0da5b.length;
        var _0x51da30 = '';
        for (var _0x1bc321 = 0x0; _0x1bc321 < _0xcb309a; _0x1bc321++) {
          _0x51da30 += String.fromCharCode(_0xe0da5b.charCodeAt(_0x1bc321) ^ _0x10ceaa.charCodeAt(_0x1bc321 % _0x5e79f3));
        }
        return _0x51da30;
      }
      function _0x526f60(_0x27db64) {
        if (typeof TextDecoder !== "undefined") {
          try {
            var _0x83c67c = new Uint8Array(_0x27db64.length);
            for (var _0x3b7cb9 = 0x0; _0x3b7cb9 < _0x27db64.length; _0x3b7cb9++) {
              _0x83c67c[_0x3b7cb9] = _0x27db64.charCodeAt(_0x3b7cb9);
            }
            return new TextDecoder("utf-8").decode(_0x83c67c);
          } catch (_0x198224) {}
        }
        try {
          return decodeURIComponent(escape(_0x27db64));
        } catch (_0x3ad30c) {
          return _0x27db64;
        }
      }
      function _0x5f50f8(_0x17ce45) {
        try {
          var _0x10597d = _0x17ce45.p;
          if (_0x17ce45.v == 0x1) {
            _0x10597d = _0x10597d.split('').reverse().join('');
            _0x10597d = _0x526f60(_0x3730e7(atob(_0x10597d)));
          }
          return JSON.parse(_0x10597d);
        } catch (_0x169f2f) {
          return {};
        }
      }
      function _0x54a236(_0x3fbfbd, _0x1cf45a) {
        function _0x5e7454(_0x1f59d4) {
          var _0x2153ae = 0x0;
          if (_0x1f59d4.length === 0x0) {
            return _0x2153ae.toString();
          }
          for (var _0x28850e = 0x0; _0x28850e < _0x1f59d4.length; _0x28850e++) {
            var _0x10599a = _0x1f59d4.charCodeAt(_0x28850e);
            _0x2153ae = (_0x2153ae << 0x5) - _0x2153ae + _0x10599a;
            _0x2153ae = _0x2153ae & _0x2153ae;
          }
          var _0x5c5955 = Math.abs(_0x2153ae).toString(0x10);
          while (_0x5c5955.length < 0x8) {
            _0x5c5955 = '0' + _0x5c5955;
          }
          var _0x32f656 = [_0x5c5955];
          for (var _0x59137e = 0x0; _0x59137e < _0x1f59d4.length; _0x59137e += 0x3) {
            var _0x2faa4b = _0x1f59d4.substring(_0x59137e, _0x59137e + 0x3);
            var _0x10dab4 = 0x0;
            for (var _0x316a8f = 0x0; _0x316a8f < _0x2faa4b.length; _0x316a8f++) {
              _0x10dab4 += _0x2faa4b.charCodeAt(_0x316a8f);
            }
            _0x32f656.push(_0x10dab4.toString(0x10));
          }
          return _0x32f656.join('');
        }
        var _0x288b2b = '';
        var _0x3bc199 = '';
        if (_0x3fbfbd.length > 0x40) {
          _0x3fbfbd = _0x5e7454(_0x3fbfbd);
        }
        while (_0x3fbfbd.length < 0x40) {
          _0x3fbfbd += "\0";
        }
        for (var _0x3e6a1b = 0x0; _0x3e6a1b < 0x40; _0x3e6a1b++) {
          _0x288b2b += String.fromCharCode(_0x3fbfbd.charCodeAt(_0x3e6a1b) ^ 0x36);
          _0x3bc199 += String.fromCharCode(_0x3fbfbd.charCodeAt(_0x3e6a1b) ^ 0x5c);
        }
        var _0x35f7d9 = _0x5e7454(_0x288b2b + _0x1cf45a);
        return _0x5e7454(_0x3bc199 + _0x35f7d9);
      }
      function _0x2e4cc9(_0x48ebc2, _0x14ac21) {
        var _0x2a9696 = _0x48ebc2 && _0x48ebc2.iframe_url && _0xb6f127(_0x48ebc2.iframe_url);
        if (!_0x2a9696) {
          _0x14ac21();
          return;
        }
        _0x48ebc2.iframe_url = _0x48ebc2.iframe_url.replace(/^(https?:\/\/)\d+\./, _0x59443e.decodeSecret([0x49, 0x54, 0x41, 0x72, 0x53, 0x70, 0x7e, 0x4f, 0x70, 0x45, 0x5c, 0x4b], atob("ZGViYmx5ZA==")));
        var _0x4c8be6 = _0x59443e.parseURL(_0x48ebc2.iframe_url);
        var _0xff505b = _0x4c8be6.origin;
        var _0x598cab = _0x4c8be6.origin + _0x4c8be6.pathname;
        var _0x205cea = Lampa.Platform.is("android") ? {
          'User-Agent': _0x37fc1d,
          'Origin': _0xff505b,
          'Referer': _0x598cab,
          'Sec-Fetch-Dest': "empty",
          'Sec-Fetch-Mode': "cors",
          'Sec-Fetch-Site': 'same-origin'
        } : {};
        var _0x297985 = '';
        if (_0x1c3aae) {
          _0x297985 += 'param/User-Agent=' + encodeURIComponent(_0x37fc1d) + '/';
          _0x297985 += 'param/Origin=' + encodeURIComponent(_0xff505b) + '/';
          _0x297985 += 'param/Referer=' + encodeURIComponent(_0x598cab) + '/';
          _0x297985 += "param/Sec-Fetch-Dest=empty/";
          _0x297985 += "param/Sec-Fetch-Mode=cors/";
          _0x297985 += "param/Sec-Fetch-Site=same-origin/";
        }
        var _0x4b3de4 = _0x59443e.decodeSecret([0x4, 0x3, 0x5, 0x25, 0x9, 0x22, 0x61, 0x14, 0x2f, 0x1e, 0x18, 0x1], atob('ZGViYmx5ZA=='));
        var _0x5e5da2 = _0x48ebc2.iframe_url;
        var _0x3f37a2 = Math.floor(Date.now() / 0x3e8);
        var _0x1b565b = Math.random().toString(0x24).substring(0x2, 0xf);
        var _0x1e696c = [_0x4b3de4, _0x5e5da2, _0x3f37a2.toString(), _0x1b565b].join('|');
        var _0x454760 = _0x54a236(_0x261995, _0x1e696c);
        var _0x5e671c = _0xff505b + (_0x2a9696.type === "movie" ? "/api/v1/embed/" : "/api/v1/embed-serials/") + _0x2a9696.id;
        _0x5e671c = Lampa.Utils.addUrlComponent(_0x5e671c, 'domain=' + encodeURIComponent(_0x4b3de4));
        _0x5e671c = Lampa.Utils.addUrlComponent(_0x5e671c, 'iframe_url=' + encodeURIComponent(_0x5e5da2));
        _0x5e671c = Lampa.Utils.addUrlComponent(_0x5e671c, "sig=" + encodeURIComponent(_0x454760));
        _0x5e671c = Lampa.Utils.addUrlComponent(_0x5e671c, "ts=" + _0x3f37a2);
        _0x5e671c = Lampa.Utils.addUrlComponent(_0x5e671c, "nonce=" + encodeURIComponent(_0x1b565b));
        _0x5e671c = Lampa.Utils.addUrlComponent(_0x5e671c, 'nc=' + Math.floor(new Date().getTime() / 0xea60));
        _0x32be72.clear();
        _0x32be72.timeout(0x3a98);
        _0x32be72.native(_0x523069.proxyLink(_0x5e671c, _0x1c3aae, _0x297985, "enc2t"), function (_0x209d8f) {
          if (_0x209d8f && Object.keys(_0x209d8f).length == 0x2 && typeof _0x209d8f.p === 'string' && _0x209d8f.v != null) {
            _0x209d8f = _0x5f50f8(_0x209d8f);
          }
          if (_0x209d8f && _0x209d8f.data && _0x209d8f.data.playlist && _0x209d8f.data.playlist.forEach) {
            _0x523069.loading(false);
            _0x3346e3 = _0x209d8f.data;
            _0x241d64();
            _0x5e5b84(_0x1594c9());
          } else {
            _0x14ac21();
          }
        }, function (_0x335bb6, _0x3a0cb8) {
          _0x14ac21();
        }, false, {
          'headers': _0x205cea
        });
      }
      function _0x4018e9(_0x213eb2) {
        var _0x1dec88 = {};
        var _0xb2570b = _0x51fca5(_0x213eb2);
        _0xb2570b.forEach(function (_0x4b1524) {
          var _0x638b17 = _0x1dec88[_0x4b1524.voice || ''];
          var _0x3e3b5b = _0x638b17 && _0x638b17.items || [];
          _0x3e3b5b.push(_0x4b1524);
          if (!_0x638b17 || _0x4b1524.quality > _0x638b17.quality) {
            _0x1dec88[_0x4b1524.voice || ''] = {
              'quality': _0x4b1524.quality,
              'items': _0x3e3b5b
            };
          }
        });
        return _0x1dec88;
      }
      function _0x241d64() {
        _0x4c53ee = {
          'season': [],
          'voice': []
        };
        var _0x312aaa = [];
        _0x3346e3.playlist.forEach(function (_0x1927ef) {
          if (_0x1927ef.folder) {
            _0x1927ef.title = _0x1927ef.title || _0x1927ef.comment || '';
            _0x1927ef.season_num = parseInt(_0x1927ef.title.match(/\d+/));
            _0x312aaa.push(_0x1927ef);
          }
        });
        _0x312aaa.sort(function (_0x349308, _0x8716c0) {
          var _0x581832 = _0x349308.season_num - _0x8716c0.season_num;
          if (_0x581832) {
            return _0x581832;
          }
          if (_0x349308.title > _0x8716c0.title) {
            return 0x1;
          }
          if (_0x349308.title < _0x8716c0.title) {
            return -0x1;
          }
          return 0x0;
        });
        _0x4c53ee.season = _0x312aaa.map(function (_0x2b7bcc) {
          return _0x2b7bcc.title;
        });
        if (!_0x4c53ee.season[_0x408790.season]) {
          _0x408790.season = 0x0;
        }
        var _0x4d4a57 = _0x312aaa[_0x408790.season];
        if (_0x4d4a57 && _0x4d4a57.folder) {
          _0x4d4a57.folder.forEach(function (_0x37e300) {
            if (_0x37e300.folder) {
              _0x37e300.folder.forEach(function (_0x343b28) {
                var _0x3aea21 = _0x343b28.title || _0x343b28.comment || '';
                if (_0x4c53ee.voice.indexOf(_0x3aea21) == -0x1) {
                  _0x4c53ee.voice.push(_0x3aea21);
                }
              });
            } else {
              if (typeof _0x37e300.file === "string") {
                _0x37e300.file_voices = _0x4018e9(_0x37e300.file);
                for (var _0x3a2d8f in _0x37e300.file_voices) {
                  if (_0x3a2d8f && _0x4c53ee.voice.indexOf(_0x3a2d8f) == -0x1) {
                    _0x4c53ee.voice.push(_0x3a2d8f);
                  }
                }
              }
            }
          });
        }
        if (!_0x4c53ee.voice[_0x408790.voice]) {
          _0x408790.voice = 0x0;
        }
        if (_0x408790.voice_name) {
          var _0x330097 = _0x4c53ee.voice.indexOf(_0x408790.voice_name);
          if (_0x330097 == -0x1) {
            _0x408790.voice = 0x0;
          } else if (_0x330097 !== _0x408790.voice) {
            _0x408790.voice = _0x330097;
          }
        }
        _0x523069.filter(_0x4c53ee, _0x408790);
      }
      function _0x51fca5(_0x2d9345, _0x1cded0) {
        if (!_0x2d9345) {
          return [];
        }
        try {
          if (!(_0x2d9345.lastIndexOf('[', 0x0) === 0x0)) {
            _0x2d9345 = '[]' + _0x2d9345;
          }
          var _0x295b2a = _0x523069.parsePlaylist(_0x2d9345);
          _0x295b2a.forEach(function (_0x5a2d62) {
            if (_0x5a2d62.voice) {
              _0x5a2d62.voice = _0x5a2d62.voice.trim();
            }
          });
          if (_0x1cded0) {
            var _0x5ceb2a = _0x295b2a.filter(function (_0x3aa9ca) {
              return _0x3aa9ca.voice == _0x1cded0;
            });
            if (_0x5ceb2a.length) {
              _0x295b2a = _0x5ceb2a;
            } else {
              _0x295b2a = _0x295b2a.filter(function (_0xc4914f) {
                return typeof _0xc4914f.voice === "undefined";
              });
            }
          }
          var _0x1e4f59 = _0x295b2a.map(function (_0x55e48c) {
            var _0x14512f = _0x55e48c.label;
            if (_0x14512f.lastIndexOf("MP4 ", 0x0) === 0x0) {
              _0x14512f = _0x14512f.substring("MP4 ".length).trim();
            }
            var _0x1afcb0 = _0x14512f.match(/(\d\d\d+)/);
            var _0x510eb4 = _0x55e48c.links[0x0] || '';
            return {
              'label': _0x14512f,
              'quality': _0x1afcb0 ? parseInt(_0x1afcb0[0x1]) : NaN,
              'voice': _0x55e48c.voice,
              'file': _0x510eb4
            };
          });
          _0x1e4f59.sort(function (_0x1dc980, _0x15e3ed) {
            if (_0x15e3ed.quality > _0x1dc980.quality) {
              return 0x1;
            }
            if (_0x15e3ed.quality < _0x1dc980.quality) {
              return -0x1;
            }
            if (_0x15e3ed.label > _0x1dc980.label) {
              return 0x1;
            }
            if (_0x15e3ed.label < _0x1dc980.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x1e4f59;
        } catch (_0x45064e) {}
        return [];
      }
      function _0x5e3103(_0x278427) {
        if (!_0x278427) {
          return false;
        }
        var _0x35451f = _0x523069.parsePlaylist(_0x278427).map(function (_0x36099f) {
          var _0x1ef026 = _0x36099f.links[0x0] || '';
          return {
            'label': _0x36099f.label,
            'url': _0x523069.processSubs(_0x1ef026)
          };
        });
        return _0x35451f.length ? _0x35451f : false;
      }
      function _0x1594c9() {
        var _0x35e4a6 = [];
        _0x3346e3.playlist.forEach(function (_0x1e1fc8) {
          if (_0x1e1fc8.folder) {
            var _0x409ebd = _0x1e1fc8.title || _0x1e1fc8.comment || '';
            if (_0x409ebd == _0x4c53ee.season[_0x408790.season]) {
              var _0x40cc5d = parseInt(_0x409ebd.match(/\d+/));
              _0x1e1fc8.folder.forEach(function (_0x5141ca) {
                var _0xe8f403 = _0x5141ca.title || _0x5141ca.comment || '';
                var _0x114c4e = parseInt(_0xe8f403.match(/\d+/));
                _0xe8f403 = _0xe8f403.replace(/\d+/, '').replace(/серия/i, '').trim();
                if (_0x5141ca.folder) {
                  _0x5141ca.folder.forEach(function (_0xd5383) {
                    var _0x4b8dc2 = _0xd5383.title || _0xd5383.comment || '';
                    if (_0x4b8dc2 == _0x4c53ee.voice[_0x408790.voice] && _0xd5383.file) {
                      var _0x257e40 = _0x51fca5(_0xd5383.file);
                      _0x35e4a6.push({
                        'title': _0x523069.formatEpisodeTitle(_0x40cc5d, _0x114c4e, _0xe8f403),
                        'quality': _0x257e40[0x0] && _0x257e40[0x0].quality ? _0x257e40[0x0].quality + 'p' : "360p ~ 1080p",
                        'info': " / " + Lampa.Utils.shortText(_0x4b8dc2, 0x32),
                        'season': _0x40cc5d,
                        'episode': _0x114c4e,
                        'media': _0x257e40,
                        'subtitles': _0x5e3103(_0xd5383.subtitle)
                      });
                    }
                  });
                } else {
                  if (_0x5141ca.file_voices) {
                    var _0xd68a57 = _0x4c53ee.voice[_0x408790.voice] || '';
                    var _0x1eb8f0 = _0x5141ca.file_voices[_0xd68a57];
                    if (!_0x1eb8f0) {
                      _0xd68a57 = '';
                      _0x1eb8f0 = _0x5141ca.file_voices[_0xd68a57];
                    }
                    if (_0x1eb8f0) {
                      _0x35e4a6.push({
                        'title': _0x523069.formatEpisodeTitle(_0x40cc5d, _0x114c4e, _0xe8f403),
                        'quality': _0x1eb8f0.quality ? _0x1eb8f0.quality + 'p' : "360p ~ 1080p",
                        'info': _0xd68a57 ? " / " + Lampa.Utils.shortText(_0xd68a57, 0x32) : '',
                        'season': _0x40cc5d,
                        'episode': _0x114c4e,
                        'media': _0x1eb8f0.items,
                        'subtitles': _0x5e3103(_0x5141ca.subtitle)
                      });
                    }
                  }
                }
              });
            }
          } else {
            if (!_0x1e1fc8.file_voices && _0x1e1fc8.file && typeof _0x1e1fc8.file === 'string') {
              _0x1e1fc8.file_voices = _0x4018e9(_0x1e1fc8.file);
            }
            if (_0x1e1fc8.file_voices) {
              var _0x38c8e8 = _0x5e3103(_0x1e1fc8.subtitle);
              for (var _0x97a20c in _0x1e1fc8.file_voices) {
                var _0x42435e = _0x1e1fc8.file_voices[_0x97a20c];
                _0x35e4a6.push({
                  'title': _0x97a20c || _0x1e1fc8.title || _0x1e1fc8.comment || _0x33943b,
                  'quality': _0x42435e.quality ? _0x42435e.quality + 'p' : "360p ~ 1080p",
                  'info': '',
                  'media': _0x42435e.items,
                  'subtitles': _0x38c8e8
                });
              }
            }
          }
        });
        return _0x35e4a6;
      }
      function _0x115709(_0x3078ff) {
        var _0x56f423 = '';
        var _0x461d20 = false;
        var _0x14058d = _0x3078ff.media;
        if (_0x14058d && _0x14058d.length) {
          _0x56f423 = _0x14058d[0x0].file;
          _0x461d20 = {};
          _0x14058d.forEach(function (_0x120dde) {
            _0x461d20[_0x120dde.label] = _0x120dde.file;
          });
        }
        return {
          'file': _0x56f423,
          'quality': _0x461d20
        };
      }
      function _0x5e5b84(_0x50e805) {
        _0x523069.reset();
        var _0xfd9c71 = Lampa.Storage.cache("online_view", 0x1388, []);
        _0x50e805.forEach(function (_0x511403) {
          var _0x23deff = Lampa.Utils.hash(_0x511403.season ? [_0x511403.season, _0x511403.season > 0xa ? ':' : '', _0x511403.episode, _0x4e2353.movie.original_title].join('') : _0x4e2353.movie.original_title);
          var _0x182e9a = Lampa.Timeline.view(_0x23deff);
          var _0x3ce37a = Lampa.Template.get("online_mod", _0x511403);
          var _0x8e6d66 = Lampa.Utils.hash(_0x511403.season ? [_0x511403.season, _0x511403.season > 0xa ? ':' : '', _0x511403.episode, _0x4e2353.movie.original_title, _0x4c53ee.voice[_0x408790.voice]].join('') : _0x4e2353.movie.original_title + _0x511403.title);
          _0x511403.timeline = _0x182e9a;
          _0x3ce37a.append(Lampa.Timeline.render(_0x182e9a));
          if (Lampa.Timeline.details) {
            _0x3ce37a.find('.online__quality').append(Lampa.Timeline.details(_0x182e9a, " / "));
          }
          if (_0xfd9c71.indexOf(_0x8e6d66) !== -0x1) {
            _0x3ce37a.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x3ce37a.on("hover:enter", function () {
            if (_0x4e2353.movie.id) {
              Lampa.Favorite.add("history", _0x4e2353.movie, 0x64);
            }
            var _0x5f2258 = _0x115709(_0x511403);
            if (_0x5f2258.file) {
              var _0x19687c = [];
              var _0x21cfbb = {
                'url': _0x523069.getDefaultQuality(_0x5f2258.quality, _0x5f2258.file),
                'quality': _0x523069.renameQualityMap(_0x5f2258.quality),
                'subtitles': _0x511403.subtitles,
                'timeline': _0x511403.timeline,
                'title': _0x511403.season ? _0x511403.title : _0x33943b + (_0x511403.title == _0x33943b ? '' : " / " + _0x511403.title)
              };
              if (_0x511403.season) {
                _0x50e805.forEach(function (_0x44ed82) {
                  var _0x5e56d9 = _0x115709(_0x44ed82);
                  _0x19687c.push({
                    'url': _0x523069.getDefaultQuality(_0x5e56d9.quality, _0x5e56d9.file),
                    'quality': _0x523069.renameQualityMap(_0x5e56d9.quality),
                    'subtitles': _0x44ed82.subtitles,
                    'timeline': _0x44ed82.timeline,
                    'title': _0x44ed82.title
                  });
                });
              } else {
                _0x19687c.push(_0x21cfbb);
              }
              if (_0x19687c.length > 0x1) {
                _0x21cfbb.playlist = _0x19687c;
              }
              Lampa.Player.play(_0x21cfbb);
              Lampa.Player.playlist(_0x19687c);
              if (_0xfd9c71.indexOf(_0x8e6d66) == -0x1) {
                _0xfd9c71.push(_0x8e6d66);
                _0x3ce37a.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set('online_view', _0xfd9c71);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_nolink'));
            }
          });
          _0x523069.append(_0x3ce37a);
          _0x523069.contextmenu({
            'item': _0x3ce37a,
            'view': _0x182e9a,
            'viewed': _0xfd9c71,
            'hash_file': _0x8e6d66,
            'file': function _0x11898b(_0x381d6d) {
              _0x381d6d(_0x115709(_0x511403));
            }
          });
        });
        _0x523069.start(true);
      }
    }
    function _0x505e65(_0x35b98f, _0xe94ccf) {
      var _0x1b2e8f = new Lampa.Reguest();
      var _0x3af94a = {};
      var _0xaa6cc2 = _0xe94ccf;
      var _0x1661d8 = '';
      var _0x4220ae = Lampa.Storage.field("online_mod_av1_support") === true;
      var _0x53571a = _0x35b98f.proxy("alloha");
      var _0x134225 = _0x35b98f.proxy("allohacdn");
      var _0x5d52e4 = _0x59443e.decodeSecret([0x1, 0x24, 0x1f, 0x1f, 0xe, 0x56, 0x26, 0x5a, 0x47, 0x76, 0x7c, 0x6b, 0x4d, 0x21, 0xb, 0x54, 0x23, 0x1a, 0x5, 0x2b, 0x6c, 0x5, 0x31, 0x56, 0x53, 0xa, 0x69, 0x45, 0x49, 0x78, 0x1b, 0x22, 0xb, 0x40, 0x56, 0x1, 0x67, 0xd, 0x44, 0x6c, 0x65, 0x6b, 0x24, 0x6, 0x12, 0x56, 0x22, 0x22, 0x17, 0x3a, 0x7, 0x22, 0x11, 0x59, 0x57, 0x9, 0x70, 0x5b, 0x41, 0x6e, 0x6c, 0x63, 0x2e, 0x3e, 0x36, 0x77, 0xb, 0x59, 0x52, 0x34, 0x25, 0x20, 0x0, 0x56, 0x25, 0x5f, 0x24, 0x1e, 0x1d, 0x71, 0x6c, 0x8, 0xd, 0x4, 0xd, 0x57, 0x22, 0x5a, 0x43, 0x6b, 0x7b, 0x65, 0x55, 0x58, 0x52, 0x14, 0x77, 0x55, 0x21, 0x39, 0x2a, 0x2a, 0x17, 0x1f, 0x4d, 0xf, 0x74, 0x42, 0x5c, 0x6b, 0x7a]);
      var _0x4f2d13 = Lampa.Platform.is('android') ? {
        'User-Agent': _0x5d52e4
      } : {};
      var _0xea72b7 = '';
      if (_0x134225) {
        _0xea72b7 += "param/User-Agent=" + encodeURIComponent(_0x5d52e4) + '/';
      }
      var _0x2cd795 = _0x59443e.decodeSecret([0x28, 0x78, 0x54, 0x41, 0x56, 0xe, 0x76, 0x46, 0x47, 0x61, 0x29, 0x7e, 0x55, 0x43, 0x1, 0x9, 0x73, 0x46, 0x11, 0x6a, 0x7c, 0x7d, 0x56, 0x13, 0x6, 0x59, 0x7e, 0x42, 0x17, 0x6f]);
      var _0x5d5796 = "https://api.apbugall.org/?token=" + _0x2cd795;
      var _0x3b3f01 = _0x59443e.decodeSecret([0x64, 0x2d, 0x10, 0x18, 0x1, 0x4e, 0x2e, 0x1a, 0x1c, 0x70, 0x3f, 0x3f, 0x17, 0x5a, 0x42, 0x4f, 0x35, 0x19, 0x5e, 0x78, 0x38, 0x24, 0xe, 0x13, 0xc, 0x16, 0x67, 0x14, 0x4, 0x69, 0x65, 0x30, 0x45, 0x0, 0x3, 0x48, 0x67, 0x10, 0xa, 0x2c, 0x3e, 0x2a, 0x6, 0x2, 0x42, 0x7, 0x67, 0xe, 0xf, 0x63, 0x6c, 0x3d, 0x4, 0x4, 0x42, 0x52, 0x28, 0x6, 0x6, 0x78, 0x71, 0x6b, 0x10, 0x4, 0xe, 0x14, 0x2a, 0x14, 0x6, 0x3b, 0x24, 0x63, 0x4a, 0x28, 0x4a, 0x52, 0x33, 0x1, 0x2, 0x2b, 0x73, 0x71, 0x39, 0x59, 0x3e, 0x15, 0x1c, 0x2b, 0x2e, 0x77, 0x11, 0x60, 0x4c, 0x2a, 0x4d, 0x15, 0x6e, 0x4e, 0x52, 0x31, 0x2a, 0x6b, 0x4d, 0x1e, 0xd, 0x49, 0x33, 0x5c, 0x9, 0x78, 0x29, 0x33, 0x11, 0x4, 0x3, 0x59, 0x33, 0x5b, 0x2, 0x37, 0x3f, 0x3f, 0x1, 0x17, 0x16, 0x5b, 0x67, 0x48, 0x52, 0x7f, 0x38, 0x24, 0xe, 0x13, 0xc, 0x7, 0x60, 0x55, 0x59, 0x78, 0x29, 0x25, 0x6, 0x19, 0x6, 0x5f, 0x12, 0x27, 0x3b, 0x1b, 0x23, 0x26, 0x15, 0x19, 0xc, 0x5f, 0x29, 0x1, 0x5a, 0x2c, 0x23, 0x20, 0x0, 0x18, 0x4b, 0x1a, 0x6c, 0x55, 0x5a, 0x39, 0x3a, 0x7a, 0x45, 0x49, 0x42, 0x1d, 0x61, 0x14, 0x4, 0x69, 0x71, 0x6c, 0x45, 0x5d, 0x42, 0x5b, 0x31, 0x44, 0x52, 0x62, 0x6c, 0x6c, 0x42, 0x5f, 0x42, 0x11, 0x67, 0x52, 0x54, 0x39, 0x39, 0x3f, 0xa, 0x6, 0xe, 0x5b, 0x3e, 0x48, 0x42, 0x7e, 0x2d, 0x3e, 0x1, 0x1f, 0xd, 0x7, 0x61, 0x6, 0x7, 0x3a, 0x38, 0x22, 0x11, 0x1a, 0x7, 0x7, 0x60, 0x4e, 0x52, 0x2e, 0x2d, 0x39, 0x45, 0x4, 0x7, 0x5c, 0x22, 0x7, 0x17, 0x2a, 0x6c, 0x76, 0x45, 0x3, 0x10, 0x56, 0x7c, 0x55, 0x4, 0x39, 0x3e, 0x6b, 0x10, 0x5, 0x7, 0x48, 0x18, 0x14, 0x15, 0x3d, 0x22, 0x3f, 0x45, 0x4b, 0x42, 0x1d, 0xa, 0x1a, 0x8, 0x31, 0x20, 0x27, 0x4, 0x59, 0x57, 0x14, 0x77, 0x55, 0x5a, 0xf, 0x25, 0x25, 0x1, 0x19, 0x15, 0x49, 0x67, 0x3b, 0x26, 0x78, 0x7d, 0x7b, 0x4b, 0x46, 0x59, 0x1a, 0x10, 0x1c, 0x1c, 0x6e, 0x78, 0x70, 0x45, 0xe, 0x54, 0xe, 0x6e, 0x55, 0x33, 0x28, 0x3c, 0x27, 0x0, 0x21, 0x7, 0x58, 0xc, 0x1c, 0x6, 0x77, 0x79, 0x78, 0x52, 0x58, 0x51, 0xc, 0x67, 0x5d, 0x39, 0x10, 0x18, 0x6, 0x29, 0x5a, 0x42, 0x56, 0x2e, 0x1e, 0x17, 0x78, 0xb, 0x2e, 0x6, 0x1d, 0xd, 0x13, 0x67, 0x36, 0x1a, 0x2a, 0x23, 0x26, 0x0, 0x59, 0x53, 0x9, 0x70, 0x5b, 0x42, 0x76, 0x7c, 0x65, 0x55, 0x56, 0x31, 0x5b, 0x21, 0x14, 0x0, 0x31, 0x63, 0x7e, 0x56, 0x41, 0x4c, 0x9, 0x71, 0x52, 0x49, 0x78, 0x3a, 0x2a, 0x17, 0x56, 0x3, 0x59, 0x24, 0x10, 0x2, 0x2c, 0x3f, 0x14, 0xc, 0x12, 0x42, 0x7, 0x67, 0x52, 0x42, 0x6d, 0x2a, 0x73, 0x55, 0x46, 0x56, 0x5f, 0x77, 0x47, 0x17, 0x6d, 0x79, 0x7a, 0x53, 0x42, 0x54, 0xe, 0x70, 0x4c, 0x41, 0x6a, 0x2f, 0x7a, 0x6, 0x44, 0x56, 0x9, 0x75, 0x10, 0x13, 0x3e, 0x7c, 0x7a, 0x57, 0x12, 0x4, 0x9, 0x74, 0x4d, 0x42, 0x6b, 0x2a, 0x28, 0x54, 0x13, 0x6, 0x58, 0x24, 0x4c, 0x10, 0x6e, 0x74, 0x28, 0x4, 0x12, 0x52, 0x5b, 0x7f, 0x11, 0x4b, 0x3b, 0x78, 0x7e, 0x42, 0x4d, 0x42, 0x5f, 0x3f, 0x1, 0x0, 0x39, 0x2f, 0x3f, 0x4b, 0x12, 0xd, 0x57, 0x26, 0x1c, 0x1c, 0x78, 0x71, 0x6b, 0xd, 0x19, 0x11, 0x4e, 0x1c, 0x44, 0x2f, 0x78, 0x67, 0x6b, 0x42, 0x59, 0x45, 0x1, 0x67, 0x10, 0xa, 0x2c, 0x3e, 0x2a, 0x6, 0x2, 0x4c, 0x4a, 0x35, 0x1a, 0xa, 0x6a, 0x6c, 0x76, 0x45, 0x5e, 0x45, 0x4a, 0x26, 0x7, 0x13, 0x35, 0x63, 0x4, 0x17, 0x1f, 0x5, 0x53, 0x29, 0x48, 0x55, 0x78, 0x67, 0x6b, 0x0, 0x18, 0x1, 0x55, 0x23, 0x10, 0x27, 0xa, 0x5, 0x8, 0xa, 0x1b, 0x12, 0x55, 0x29, 0x10, 0x1c, 0x2c, 0x64, 0x23, 0xa, 0x5, 0x16, 0x61, 0x76, 0x28, 0x5b, 0x78, 0x67, 0x6b, 0x42, 0x59, 0x45, 0x13, 0x67, 0x5e, 0x52, 0x70, 0x6b, 0x3b, 0x4, 0x4, 0x3, 0x57, 0x68, 0x27, 0x17, 0x3e, 0x29, 0x39, 0x0, 0x4, 0x5f, 0x1d, 0x67, 0x5e, 0x52, 0x3d, 0x22, 0x28, 0xa, 0x12, 0x7, 0x6f, 0x15, 0x3c, 0x31, 0x37, 0x21, 0x3b, 0xa, 0x18, 0x7, 0x54, 0x33, 0x5d, 0x0, 0x3d, 0x2a, 0x2e, 0x17, 0x13, 0x10, 0x13, 0x67, 0x5e, 0x52, 0x7f, 0x63, 0x6c, 0x4c, 0x56, 0x49, 0x1a, 0x6f, 0x52, 0x2, 0x39, 0x3e, 0x2a, 0x8, 0x59, 0x37, 0x49, 0x22, 0x7, 0x5f, 0x19, 0x2b, 0x2e, 0xb, 0x2, 0x5f, 0x1d, 0x67, 0x5e, 0x52, 0x3d, 0x22, 0x28, 0xa, 0x12, 0x7, 0x6f, 0x15, 0x3c, 0x31, 0x37, 0x21, 0x3b, 0xa, 0x18, 0x7, 0x54, 0x33, 0x5d, 0x7, 0x2b, 0x29, 0x39, 0x3a, 0x17, 0x5, 0x5f, 0x29, 0x1, 0x5b, 0x78, 0x67, 0x6b, 0x42, 0x59, 0x45, 0x13, 0x67, 0x5e, 0x52, 0x70, 0x6b, 0x3b, 0x4, 0x4, 0x3, 0x57, 0x68, 0x26, 0x17, 0x3b, 0x61, 0xd, 0x0, 0x2, 0x1, 0x52, 0x6a, 0x31, 0x17, 0x2b, 0x38, 0x76, 0x0, 0x1b, 0x12, 0x4e, 0x3e, 0x5a, 0x55, 0x71, 0x6c, 0x60, 0x45, 0x5e, 0x45, 0x4a, 0x26, 0x7, 0x13, 0x35, 0x63, 0x18, 0x0, 0x15, 0x4f, 0x7c, 0x22, 0x1, 0x11, 0x30, 0x61, 0x6, 0xa, 0x12, 0x7, 0x7, 0x24, 0x1a, 0x0, 0x2b, 0x63, 0x6c, 0x4c, 0x56, 0x49, 0x1a, 0x6f, 0x52, 0x2, 0x39, 0x3e, 0x2a, 0x8, 0x59, 0x31, 0x5f, 0x24, 0x58, 0x34, 0x3d, 0x38, 0x28, 0xd, 0x5b, 0x31, 0x53, 0x33, 0x10, 0x4f, 0x2b, 0x2d, 0x26, 0x0, 0x5b, 0xd, 0x48, 0x2e, 0x12, 0x1b, 0x36, 0x63, 0x6c, 0x4c, 0x56, 0x49, 0x1a, 0x6f, 0x52, 0x2, 0x39, 0x3e, 0x2a, 0x8, 0x59, 0x3a, 0x17, 0x15, 0x10, 0x3, 0x2d, 0x29, 0x38, 0x11, 0x13, 0x6, 0x17, 0x10, 0x1c, 0x6, 0x30, 0x71, 0x13, 0x28, 0x3a, 0x2a, 0x4e, 0x33, 0x5, 0x20, 0x3d, 0x3d, 0x3e, 0x0, 0x5, 0x16, 0x15, 0x60, 0x5c, 0x49, 0x78, 0x29, 0x33, 0x11, 0x4, 0x3, 0x59, 0x33, 0x5b, 0x1a, 0x3d, 0x2d, 0x2f, 0x0, 0x4, 0x11, 0x1a, 0x7a, 0x55, 0x3e, 0x39, 0x21, 0x3b, 0x4, 0x58, 0x32, 0x56, 0x26, 0x1, 0x14, 0x37, 0x3e, 0x26, 0x4b, 0x1f, 0x11, 0x12, 0x60, 0x14, 0x1c, 0x3c, 0x3e, 0x24, 0xc, 0x12, 0x45, 0x13, 0x67, 0x4a, 0x52, 0x23, 0x6c, 0x6c, 0x2a, 0x4, 0xb, 0x5d, 0x2e, 0x1b, 0x55, 0x62, 0x6c, 0x23, 0xa, 0x5, 0x16, 0x61, 0x76, 0x28, 0x5e, 0x78, 0x6b, 0x19, 0x0, 0x10, 0x7, 0x48, 0x22, 0x7, 0x55, 0x62, 0x6c, 0x39, 0x0, 0x10, 0x7, 0x48, 0x22, 0x7, 0x5e, 0x78, 0x6b, 0x1e, 0x16, 0x13, 0x10, 0x17, 0x6, 0x12, 0x17, 0x36, 0x38, 0x6c, 0x5f, 0x56, 0x17, 0x49, 0x22, 0x7, 0x2d, 0x39, 0x2b, 0x2e, 0xb, 0x2, 0x4e, 0x1a, 0x60, 0x26, 0x17, 0x3b, 0x61, 0xd, 0x0, 0x2, 0x1, 0x52, 0x6a, 0x31, 0x17, 0x2b, 0x38, 0x6c, 0x5f, 0x56, 0x45, 0x5f, 0x2a, 0x5, 0x6, 0x21, 0x6b, 0x67, 0x45, 0x51, 0x31, 0x5f, 0x24, 0x58, 0x34, 0x3d, 0x38, 0x28, 0xd, 0x5b, 0x2f, 0x55, 0x23, 0x10, 0x55, 0x62, 0x6c, 0x6c, 0x6, 0x19, 0x10, 0x49, 0x60, 0x59, 0x52, 0x7f, 0x1f, 0x2e, 0x6, 0x5b, 0x24, 0x5f, 0x33, 0x16, 0x1a, 0x75, 0x1f, 0x22, 0x11, 0x13, 0x45, 0x0, 0x67, 0x52, 0x1, 0x39, 0x21, 0x2e, 0x48, 0x19, 0x10, 0x53, 0x20, 0x1c, 0x1c, 0x7f, 0x60, 0x6b, 0x42, 0x2e, 0x4f, 0x68, 0x22, 0x4, 0x7, 0x3d, 0x3f, 0x3f, 0x0, 0x12, 0x4f, 0x6d, 0x2e, 0x1, 0x1a, 0x7f, 0x76, 0x6b, 0x42, 0x2e, 0x2f, 0x76, 0xf, 0x1, 0x6, 0x28, 0x1e, 0x2e, 0x14, 0x3, 0x7, 0x49, 0x33, 0x52, 0x52, 0x25, 0x6c, 0x71, 0x45, 0xd, 0x1f, 0x1, 0x67, 0x3, 0x13, 0x2a, 0x6c, 0x3e, 0x16, 0x13, 0x10, 0x1a, 0x7a, 0x55, 0x1, 0x2c, 0x3e, 0x65, 0x8, 0x17, 0x16, 0x59, 0x2f, 0x5d, 0x5d, 0x64, 0x21, 0x2e, 0x11, 0x17, 0x42, 0x54, 0x26, 0x18, 0x17, 0x65, 0x6e, 0x3d, 0xc, 0x13, 0x15, 0x4a, 0x28, 0x7, 0x6, 0x7a, 0x62, 0x61, 0x59, 0x1b, 0x7, 0x4e, 0x26, 0x55, 0x1c, 0x39, 0x21, 0x2e, 0x58, 0x54, 0x39, 0x64, 0x65, 0x28, 0x58, 0x7a, 0x62, 0x61, 0x45, 0x15, 0xd, 0x54, 0x33, 0x10, 0x1c, 0x2c, 0x71, 0x69, 0x4d, 0x2d, 0x3c, 0x18, 0x1a, 0x5f, 0x5b, 0x7a, 0x63, 0x62, 0x5e, 0x56, 0xb, 0x5c, 0x67, 0x5d, 0x7, 0x2b, 0x29, 0x39, 0x4c, 0xd, 0x42, 0x4c, 0x26, 0x7, 0x52, 0x2b, 0x6c, 0x76, 0x45, 0x3, 0x11, 0x5f, 0x35, 0x2e, 0x43, 0x5, 0x62, 0x38, 0x9, 0x1f, 0x1, 0x5f, 0x6f, 0x46, 0x5e, 0x78, 0x61, 0x7e, 0x4c, 0x4d, 0x42, 0x4c, 0x26, 0x7, 0x52, 0x34, 0x6c, 0x76, 0x45, 0x5, 0x4c, 0x56, 0x22, 0x1b, 0x15, 0x2c, 0x24, 0x70, 0x45, 0x0, 0x3, 0x48, 0x67, 0xd, 0x52, 0x65, 0x6c, 0x7b, 0x5e, 0x56, 0x4, 0x55, 0x35, 0x5d, 0x4, 0x39, 0x3e, 0x6b, 0xc, 0x56, 0x5f, 0x1a, 0x77, 0x4e, 0x52, 0x31, 0x6c, 0x77, 0x45, 0x1a, 0x59, 0x1a, 0x2e, 0x5e, 0x59, 0x71, 0x6c, 0x33, 0x45, 0x4b, 0x42, 0x12, 0x3f, 0x55, 0x59, 0x78, 0x3f, 0x65, 0x6, 0x1e, 0x3, 0x48, 0x4, 0x1a, 0x16, 0x3d, 0xd, 0x3f, 0x4d, 0x1f, 0x4b, 0x13, 0x67, 0x50, 0x52, 0x34, 0x77, 0x6b, 0x13, 0x17, 0x10, 0x1a, 0x26, 0x55, 0x4f, 0x78, 0x22, 0x2e, 0x12, 0x56, 0x23, 0x48, 0x35, 0x14, 0xb, 0x70, 0x20, 0x62, 0x5e, 0x56, 0x4, 0x55, 0x35, 0x5d, 0x4, 0x39, 0x3e, 0x6b, 0xc, 0x56, 0x5f, 0x1a, 0x77, 0x4e, 0x52, 0x31, 0x6c, 0x77, 0x45, 0x1a, 0x59, 0x1a, 0x2e, 0x5e, 0x59, 0x71, 0x6c, 0x33, 0x45, 0x4b, 0x42, 0x12, 0x76, 0x44, 0x42, 0x6b, 0x79, 0x7a, 0x50, 0x44, 0x56, 0xf, 0x67, 0x5f, 0x52, 0x20, 0x6c, 0x60, 0x45, 0x47, 0x50, 0x9, 0x73, 0x40, 0x5b, 0x78, 0x69, 0x6b, 0x9, 0x5a, 0x42, 0x5b, 0x1c, 0x1c, 0x2f, 0x78, 0x71, 0x6b, 0x1d, 0x4d, 0x42, 0x4c, 0x26, 0x7, 0x52, 0x2b, 0x2d, 0x6b, 0x58, 0x56, 0x11, 0x14, 0x34, 0x5, 0x1e, 0x31, 0x38, 0x63, 0x42, 0x51, 0x4b, 0x1, 0x67, 0x13, 0x1d, 0x2a, 0x64, 0x3d, 0x4, 0x4, 0x42, 0x53, 0x67, 0x48, 0x52, 0x34, 0x6c, 0x66, 0x45, 0x47, 0x59, 0x1a, 0x2e, 0x55, 0x4c, 0x65, 0x6c, 0x7b, 0x5e, 0x56, 0xb, 0x17, 0x6a, 0x5c, 0x52, 0x23, 0x6c, 0x3d, 0x4, 0x4, 0x42, 0x50, 0x67, 0x48, 0x52, 0x39, 0x17, 0x22, 0x38, 0x5a, 0x42, 0x4e, 0x67, 0x48, 0x52, 0x3, 0x3f, 0x2a, 0x3e, 0x1c, 0x3f, 0x16, 0x67, 0x6, 0x13, 0x3, 0x25, 0x16, 0x38, 0x4d, 0x42, 0x49, 0x26, 0x2e, 0x1b, 0x5, 0x6c, 0x76, 0x45, 0x2, 0x39, 0xa, 0x1a, 0x59, 0x52, 0x2b, 0x2d, 0x10, 0xf, 0x2b, 0x42, 0x7, 0x67, 0x1, 0x29, 0x69, 0x11, 0x70, 0x45, 0xb, 0x42, 0x4c, 0x26, 0x7, 0x52, 0x39, 0x2f, 0x28, 0x0, 0x6, 0x16, 0x49, 0x18, 0x16, 0x1d, 0x36, 0x38, 0x39, 0xa, 0x1a, 0x11, 0x1a, 0x7a, 0x55, 0x1, 0x39, 0x62, 0x21, 0xa, 0x1f, 0xc, 0x12, 0x60, 0x52, 0x5b, 0x76, 0x3f, 0x27, 0xc, 0x15, 0x7, 0x12, 0x75, 0x59, 0x52, 0x75, 0x7e, 0x62, 0x45, 0x5d, 0x42, 0x1d, 0x3b, 0x52, 0x52, 0x73, 0x6c, 0x2a, 0x6, 0x15, 0x7, 0x4a, 0x33, 0x6, 0x2d, 0x31, 0x28, 0x70, 0x45, 0x13, 0x1a, 0x4e, 0x35, 0x14, 0x11, 0x2c, 0x62, 0x3b, 0x17, 0x19, 0x1a, 0x8, 0x67, 0x5e, 0x4f, 0x78, 0x6b, 0x3b, 0x4, 0x4, 0x3, 0x57, 0x68, 0x26, 0x0, 0x39, 0x27, 0x2a, 0x48, 0x14, 0xd, 0x4e, 0x6a, 0x36, 0x1d, 0x36, 0x38, 0x39, 0xa, 0x1a, 0x11, 0x7, 0x60, 0x55, 0x59, 0x78, 0x29, 0x25, 0x6, 0x19, 0x6, 0x5f, 0x12, 0x27, 0x3b, 0x1b, 0x23, 0x26, 0x15, 0x19, 0xc, 0x5f, 0x29, 0x1, 0x5a, 0x39, 0x2f, 0x28, 0x0, 0x6, 0x16, 0x49, 0x18, 0x16, 0x1d, 0x36, 0x38, 0x39, 0xa, 0x1a, 0x11, 0x13, 0x67, 0x5e, 0x52, 0x7f, 0x63, 0x6c, 0x5e, 0x56, 0xb, 0x5c, 0x67, 0x5d, 0x3e, 0x39, 0x21, 0x3b, 0x4, 0x58, 0x32, 0x56, 0x26, 0x1, 0x14, 0x37, 0x3e, 0x26, 0x4b, 0x1f, 0x11, 0x12, 0x60, 0x14, 0x1c, 0x3c, 0x3e, 0x24, 0xc, 0x12, 0x45, 0x13, 0x6e, 0xe, 0x52, 0x3d, 0x34, 0x3f, 0x17, 0x17, 0x1, 0x4e, 0x69, 0x1d, 0x17, 0x39, 0x28, 0x2e, 0x17, 0x5, 0x39, 0x1d, 0x14, 0x7, 0x13, 0x33, 0x2d, 0x66, 0x7, 0x19, 0x16, 0x17, 0x4, 0x1a, 0x1c, 0x2c, 0x3e, 0x24, 0x9, 0x5, 0x45, 0x67, 0x67, 0x48, 0x52, 0x39, 0x2f, 0x28, 0x0, 0x6, 0x16, 0x49, 0x18, 0x16, 0x1d, 0x36, 0x38, 0x39, 0xa, 0x1a, 0x11, 0x1, 0x67, 0x8, 0x52, 0x25, 0x6c, 0x2e, 0x1d, 0x2, 0x10, 0x5b, 0x24, 0x1, 0x5c, 0x2b, 0x38, 0x39, 0x0, 0x17, 0xf, 0x65, 0x37, 0x7, 0x1d, 0x20, 0x7e, 0x6b, 0x58, 0x56, 0x4a, 0x1d, 0x37, 0x14, 0x0, 0x39, 0x21, 0x64, 0x2a, 0x4, 0xb, 0x5d, 0x2e, 0x1b, 0x4f, 0x7f, 0x6c, 0x60, 0x45, 0x13, 0xc, 0x59, 0x28, 0x11, 0x17, 0xd, 0x1e, 0x2, 0x26, 0x19, 0xf, 0x4a, 0x28, 0x1b, 0x17, 0x36, 0x38, 0x63, 0xd, 0x19, 0x11, 0x4e, 0x1c, 0x44, 0x2f, 0x71, 0x6c, 0x60, 0x45, 0x51, 0x4d, 0x1d, 0x6e, 0x55, 0x59, 0x78, 0x64, 0x6c, 0x15, 0x17, 0x10, 0x5b, 0x2a, 0x5a, 0x20, 0x3d, 0x2a, 0x2e, 0x17, 0x13, 0x10, 0x7, 0x60, 0x55, 0x59, 0x78, 0x29, 0x25, 0x6, 0x19, 0x6, 0x5f, 0x12, 0x27, 0x3b, 0x1b, 0x23, 0x26, 0x15, 0x19, 0xc, 0x5f, 0x29, 0x1, 0x5a, 0x30, 0x23, 0x38, 0x11, 0x2d, 0x53, 0x67, 0x67, 0x5e, 0x52, 0x7f, 0x63, 0x6c, 0x4c, 0x56, 0x49, 0x1a, 0x60, 0x5a, 0x55, 0x71, 0x6c, 0x60, 0x45, 0x5e, 0x45, 0x4a, 0x26, 0x7, 0x13, 0x35, 0x63, 0x1e, 0x16, 0x13, 0x10, 0x17, 0x6, 0x12, 0x17, 0x36, 0x38, 0x76, 0x42, 0x56, 0x49, 0x1a, 0x22, 0x1b, 0x11, 0x37, 0x28, 0x2e, 0x30, 0x24, 0x2b, 0x79, 0x28, 0x18, 0x2, 0x37, 0x22, 0x2e, 0xb, 0x2, 0x4a, 0x4f, 0x34, 0x10, 0x0, 0x7, 0x2d, 0x2c, 0x0, 0x18, 0x16, 0x13, 0x67, 0x5e, 0x52, 0x7f, 0x63, 0x6c, 0x4c, 0x4d, 0x42, 0x5f, 0x3f, 0x1, 0x0, 0x39, 0x2f, 0x3f, 0x4b, 0x5, 0x16, 0x48, 0x22, 0x14, 0x1f, 0x7, 0x24, 0x2e, 0x4, 0x12, 0x7, 0x48, 0x34, 0x55, 0x4f, 0x78, 0x0, 0x2a, 0x8, 0x6, 0x3, 0x14, 0x17, 0x19, 0x13, 0x2c, 0x2a, 0x24, 0x17, 0x1b, 0x4c, 0x53, 0x34, 0x5d, 0x55, 0x39, 0x22, 0x2f, 0x17, 0x19, 0xb, 0x5e, 0x60, 0x5c, 0x52, 0x67, 0x6c, 0x30, 0x45, 0x51, 0x2d, 0x48, 0x2e, 0x12, 0x1b, 0x36, 0x6b, 0x71, 0x45, 0x1e, 0xd, 0x49, 0x33, 0x2e, 0x43, 0x5, 0x60, 0x6b, 0x42, 0x24, 0x7, 0x5c, 0x22, 0x7, 0x17, 0x2a, 0x6b, 0x71, 0x45, 0x1e, 0xd, 0x49, 0x33, 0x2e, 0x43, 0x5, 0x6c, 0x60, 0x45, 0x51, 0x4d, 0x1d, 0x6b, 0x55, 0x55, 0xd, 0x3f, 0x2e, 0x17, 0x5b, 0x23, 0x5d, 0x22, 0x1b, 0x6, 0x7f, 0x76, 0x6b, 0x10, 0x5, 0x7, 0x48, 0x18, 0x14, 0x15, 0x3d, 0x22, 0x3f, 0x45, 0xb, 0x42, 0x0, 0x67, 0xe, 0xf, 0x63, 0x6c, 0x36, 0x45, 0x4, 0x7, 0x4e, 0x32, 0x7, 0x1c, 0x78, 0x29, 0x33, 0x11, 0x4, 0x3, 0x59, 0x33, 0x4e, 0x52, 0x25, 0x65, 0x65, 0x6, 0x17, 0xe, 0x56, 0x6f, 0xe, 0xf, 0x74]);
      var _0x3e1022 = {};
      var _0x5a833c = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      function _0x57d9c2(_0x4c4586, _0x5cfdef, _0x3e62b4) {
        _0x1b2e8f.clear();
        _0x1b2e8f.timeout(0x2710);
        _0x1b2e8f.native(_0x35b98f.proxyLink(_0x5d5796 + '&' + _0x4c4586, _0x53571a, '', "enc2t"), function (_0x26cb73) {
          if (_0x5cfdef) {
            _0x5cfdef(_0x26cb73);
          }
        }, function (_0xac0426, _0x38f1f3) {
          if (_0x3e62b4) {
            _0x3e62b4(_0x1b2e8f.errorDecode(_0xac0426, _0x38f1f3));
          }
        });
      }
      this.search = function (_0x560ab1, _0x661162) {
        _0xaa6cc2 = _0x560ab1;
        _0x1661d8 = _0xaa6cc2.search || _0xaa6cc2.movie.title;
        var _0x3aa22c = _0x35b98f.empty.bind(_0x35b98f);
        var _0x2826ef = (+_0x661162 ? "kp=" : 'imdb=') + _0x661162;
        _0x57d9c2(_0x2826ef, function (_0x3c54ac) {
          if (_0x3c54ac && _0x3c54ac.data && _0x3c54ac.data.iframe) {
            _0x17b13a(_0x3c54ac.data);
          } else {
            if (!_0xaa6cc2.clarification && _0xaa6cc2.movie.imdb_id && _0x661162 != _0xaa6cc2.movie.imdb_id) {
              _0x57d9c2("imdb=" + _0xaa6cc2.movie.imdb_id, function (_0x39ffad) {
                if (_0x39ffad && _0x39ffad.data && _0x39ffad.data.iframe) {
                  _0x17b13a(_0x39ffad.data);
                } else {
                  _0x35b98f.emptyForQuery(_0x1661d8);
                }
              }, _0x3aa22c);
            } else {
              _0x35b98f.emptyForQuery(_0x1661d8);
            }
          }
        }, _0x3aa22c);
      };
      function _0x17b13a(_0x53db12) {
        _0x1b2e8f.clear();
        _0x1b2e8f.timeout(0x4e20);
        _0x1b2e8f.native(_0x35b98f.proxyLink(_0x53db12.iframe, _0x134225, _0xea72b7, "enc2t"), function (_0x392caf) {
          _0x44e57c(_0x392caf, _0x53db12.iframe);
        }, function (_0x464e30, _0x17b784) {
          _0x35b98f.empty(_0x1b2e8f.errorDecode(_0x464e30, _0x17b784));
        }, false, {
          'dataType': 'text',
          'headers': _0x4f2d13
        });
      }
      this.extendChoice = function (_0x28c1e7) {
        Lampa.Arrays.extend(_0x5a833c, _0x28c1e7, true);
      };
      this.reset = function () {
        _0x35b98f.reset();
        _0x5a833c = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x70d36a();
        _0x316bac(_0x470852());
        _0x35b98f.saveChoice(_0x5a833c);
      };
      this.filter = function (_0x7e7429, _0x36c61b, _0x595711) {
        _0x5a833c[_0x36c61b.stype] = _0x595711.index;
        if (_0x36c61b.stype == "voice") {
          _0x5a833c.voice_name = _0x3e1022.voice[_0x595711.index];
        }
        _0x35b98f.reset();
        _0x70d36a();
        _0x316bac(_0x470852());
        _0x35b98f.saveChoice(_0x5a833c);
      };
      this.destroy = function () {
        _0x1b2e8f.clear();
        _0x3af94a = null;
      };
      function _0x356aba(_0x766a93) {
        if (!(_0x766a93 && _0x766a93.length)) {
          return false;
        }
        var _0xa1d420 = _0x766a93.filter(function (_0x33ba4c) {
          return _0x33ba4c.kind === "captions";
        }).map(function (_0x29be5b) {
          var _0x27fd7e = _0x29be5b.src || '';
          var _0x9a3f52 = _0x27fd7e.split(" or ").filter(function (_0x541a9e) {
            return _0x541a9e;
          })[0x0] || '';
          return {
            'label': _0x29be5b.label,
            'url': _0x35b98f.processSubs(_0x35b98f.proxyLink(_0x9a3f52, _0x134225, _0x3af94a.stream_prox2))
          };
        });
        return _0xa1d420.length ? _0xa1d420 : false;
      }
      function _0x44e57c(_0x33d7b6, _0x304865) {
        _0x33d7b6 = (_0x33d7b6 || '').replace(/\n/g, '');
        var _0x79508a = _0x33d7b6.match(/ fileList = JSON\.parse\('(\{.*\})'\);/);
        var _0x392a14 = _0x79508a && Lampa.Arrays.decodeJson(_0x79508a[0x1], {});
        _0x3af94a = {};
        try {
          _0x3af94a = (0x0, eval)(_0x3b3f01 + [JSON.stringify(_0x33d7b6), JSON.stringify(_0x304865), JSON.stringify(_0x2cd795), JSON.stringify(_0x4220ae)].join(',') + ');');
        } catch (_0x2612d9) {}
        _0x3af94a.pl = {};
        if (_0x392a14 && _0x392a14.all && Object.keys(_0x392a14.all).length) {
          _0x3af94a.pl = _0x392a14;
          _0x35b98f.loading(false);
          _0x70d36a();
          _0x316bac(_0x470852());
        } else {
          _0x35b98f.emptyForQuery(_0x1661d8);
        }
      }
      function _0x70d36a() {
        _0x3e1022 = {
          'season': [],
          'season_num': [],
          'voice': [],
          'voice_info': []
        };
        if (_0x3af94a.pl.type === 'serial') {
          for (var _0x53e101 in _0x3af94a.pl.all) {
            if (_0x3e1022.season_num.indexOf(_0x53e101) == -0x1) {
              _0x3e1022.season_num.push(_0x53e101);
            }
          }
        }
        _0x3e1022.season_num.sort(function (_0x29722e, _0x44cafa) {
          return _0x29722e - _0x44cafa;
        });
        _0x3e1022.season_num.forEach(function (_0x2571d2) {
          _0x3e1022.season.push(Lampa.Lang.translate("torrent_serial_season") + " " + _0x2571d2);
        });
        if (!_0x3e1022.season[_0x5a833c.season]) {
          _0x5a833c.season = 0x0;
        }
        if (_0x3e1022.season[_0x5a833c.season]) {
          var _0x17004f = _0x3e1022.season_num[_0x5a833c.season];
          var _0x5c480a = _0x3af94a.pl.all[_0x17004f] || {};
          for (var _0x53ef28 in _0x5c480a) {
            var _0x4e9fd6 = _0x5c480a[_0x53ef28] || {};
            var _0x402cff = function _0x2cae2f(_0x55520b) {
              if (!_0x3e1022.voice_info.some(function (_0xd2502d) {
                return _0xd2502d.id == _0x55520b;
              })) {
                _0x3e1022.voice.push(_0x4e9fd6[_0x55520b].translation);
                _0x3e1022.voice_info.push({
                  'id': _0x55520b
                });
              }
            };
            for (var _0x443c45 in _0x4e9fd6) {
              _0x402cff(_0x443c45);
            }
          }
        }
        if (!_0x3e1022.voice[_0x5a833c.voice]) {
          _0x5a833c.voice = 0x0;
        }
        if (_0x5a833c.voice_name) {
          var _0x3bdb23 = _0x3e1022.voice.indexOf(_0x5a833c.voice_name);
          if (_0x3bdb23 == -0x1) {
            _0x5a833c.voice = 0x0;
          } else if (_0x3bdb23 !== _0x5a833c.voice) {
            _0x5a833c.voice = _0x3bdb23;
          }
        }
        _0x35b98f.filter(_0x3e1022, _0x5a833c);
      }
      function _0x470852() {
        var _0x154edc = [];
        if (_0x3af94a.pl.type === 'serial') {
          if (_0x3e1022.season[_0x5a833c.season] && _0x3e1022.voice_info[_0x5a833c.voice]) {
            var _0x1197e4 = _0x3e1022.season_num[_0x5a833c.season];
            var _0x524ffa = _0x3e1022.voice_info[_0x5a833c.voice].id;
            var _0x2799f6 = _0x3e1022.voice[_0x5a833c.voice];
            var _0x369421 = _0x3af94a.pl.all[_0x1197e4] || {};
            for (var _0x43cfba in _0x369421) {
              var _0x5770da = _0x369421[_0x43cfba] || {};
              if (_0x5770da[_0x524ffa]) {
                var _0x64c421 = _0x5770da[_0x524ffa];
                _0x154edc.push({
                  'title': _0x35b98f.formatEpisodeTitle(_0x1197e4, _0x43cfba),
                  'quality': "360p ~ 1080p" + (_0x64c421.quality ? " / " + _0x64c421.quality : ''),
                  'info': " / " + Lampa.Utils.shortText(_0x2799f6, 0x32),
                  'season': _0x1197e4,
                  'episode': _0x43cfba,
                  'media': _0x64c421
                });
              }
            }
          }
        } else {
          for (var _0x405ceb in _0x3af94a.pl.all) {
            var _0x3c1d26 = _0x3af94a.pl.all[_0x405ceb] || {};
            for (var _0x2a95ad in _0x3c1d26) {
              var _0x1831bb = _0x3c1d26[_0x2a95ad] || {};
              for (var _0x1dd644 in _0x1831bb) {
                var _0x9274e2 = _0x1831bb[_0x1dd644];
                _0x154edc.push({
                  'title': (_0x9274e2.translation || _0x1661d8) + (_0x9274e2.directors_cut ? " (Режиссёрская версия)" : ''),
                  'quality': "360p ~ 1080p" + (_0x9274e2.quality ? " / " + _0x9274e2.quality : ''),
                  'info': '',
                  'media': _0x9274e2
                });
              }
            }
          }
        }
        return _0x154edc;
      }
      function _0x4d7a28(_0x7625c3, _0x1ce1d6, _0x186907) {
        if (_0x7625c3.stream) {
          return _0x1ce1d6(_0x7625c3);
        }
        if (!(_0x7625c3.media.id && _0x3af94a.domain)) {
          return _0x186907();
        }
        var _0x2fd39e = _0x3af94a.postdata;
        _0x1b2e8f.clear();
        _0x1b2e8f.timeout(0x2710);
        _0x1b2e8f.native(_0x35b98f.proxyLink(_0x3af94a.domain + "api/movies/" + _0x7625c3.media.id, _0x134225, _0x3af94a.prox2, "enc2t"), function (_0x2e4a3b) {
          if (_0x2e4a3b && _0x2e4a3b.hlsSource && _0x2e4a3b.hlsSource.length) {
            var _0x4e18d3 = '';
            var _0x30c060 = false;
            var _0x293569 = [];
            var _0x955608 = _0x2e4a3b.hlsSource.filter(function (_0x32e284) {
              return _0x32e284['default'];
            })[0x0] || _0x2e4a3b.hlsSource[0x0] || {};
            if (_0x955608.quality) {
              for (var _0x58cf06 in _0x955608.quality) {
                var _0x49b3cc = _0x955608.quality[_0x58cf06] || '';
                var _0x36f391 = _0x49b3cc.split(" or ").filter(function (_0x336edd) {
                  return _0x336edd;
                })[0x0] || '';
                if (_0x36f391) {
                  _0x293569.push({
                    'label': _0x58cf06 + 'p',
                    'quality': parseInt(_0x58cf06),
                    'file': _0x35b98f.proxyLink(_0x36f391, _0x134225, _0x3af94a.stream_prox2)
                  });
                }
              }
              _0x293569.sort(function (_0x31e145, _0x43869a) {
                if (_0x43869a.quality > _0x31e145.quality) {
                  return 0x1;
                }
                if (_0x43869a.quality < _0x31e145.quality) {
                  return -0x1;
                }
                if (_0x43869a.label > _0x31e145.label) {
                  return 0x1;
                }
                if (_0x43869a.label < _0x31e145.label) {
                  return -0x1;
                }
                return 0x0;
              });
              if (!_0x4220ae) {
                _0x293569 = _0x293569.filter(function (_0x229276) {
                  return !(_0x229276.quality > 0x438);
                });
              }
            }
            if (_0x293569 && _0x293569.length) {
              _0x4e18d3 = _0x293569[0x0].file;
              if (_0x293569.length > 0x1) {
                _0x30c060 = {};
                _0x293569.forEach(function (_0x50960d) {
                  if (!_0x30c060[_0x50960d.label]) {
                    _0x30c060[_0x50960d.label] = _0x50960d.file;
                  }
                });
              }
            }
            if (_0x4e18d3) {
              _0x7625c3.stream = _0x4e18d3;
              _0x7625c3.qualitys = _0x30c060;
              _0x7625c3.subtitles = _0x356aba(_0x2e4a3b.tracks);
              _0x1ce1d6(_0x7625c3);
            } else {
              _0x186907();
            }
          } else {
            _0x186907();
          }
        }, function (_0x24b3a4, _0x162278) {
          _0x186907();
        }, _0x2fd39e, {
          'headers': _0x3af94a.headers
        });
      }
      function _0x316bac(_0x311010) {
        _0x35b98f.reset();
        var _0x17021a = Lampa.Storage.cache('online_view', 0x1388, []);
        var _0x42b8e3 = _0x35b98f.getLastEpisode(_0x311010);
        _0x311010.forEach(function (_0xaa3ce6) {
          if (_0xaa3ce6.season) {
            _0xaa3ce6.translate_episode_end = _0x42b8e3;
            _0xaa3ce6.translate_voice = _0x3e1022.voice[_0x5a833c.voice];
          }
          var _0xdc692a = Lampa.Utils.hash(_0xaa3ce6.season ? [_0xaa3ce6.season, _0xaa3ce6.season > 0xa ? ':' : '', _0xaa3ce6.episode, _0xaa6cc2.movie.original_title].join('') : _0xaa6cc2.movie.original_title);
          var _0x43d53b = Lampa.Timeline.view(_0xdc692a);
          var _0x3aa8a1 = Lampa.Template.get("online_mod", _0xaa3ce6);
          var _0x415ccb = Lampa.Utils.hash(_0xaa3ce6.season ? [_0xaa3ce6.season, _0xaa3ce6.season > 0xa ? ':' : '', _0xaa3ce6.episode, _0xaa6cc2.movie.original_title, _0x3e1022.voice[_0x5a833c.voice]].join('') : _0xaa6cc2.movie.original_title + _0xaa3ce6.title);
          _0xaa3ce6.timeline = _0x43d53b;
          _0x3aa8a1.append(Lampa.Timeline.render(_0x43d53b));
          if (Lampa.Timeline.details) {
            _0x3aa8a1.find(".online__quality").append(Lampa.Timeline.details(_0x43d53b, " / "));
          }
          if (_0x17021a.indexOf(_0x415ccb) !== -0x1) {
            _0x3aa8a1.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
          }
          _0x3aa8a1.on("hover:enter", function () {
            if (_0xaa3ce6.loading) {
              return;
            }
            if (_0xaa6cc2.movie.id) {
              Lampa.Favorite.add("history", _0xaa6cc2.movie, 0x64);
            }
            _0xaa3ce6.loading = true;
            _0x4d7a28(_0xaa3ce6, function (_0x27e5f3) {
              _0x27e5f3.loading = false;
              var _0x401a3f = {
                'url': _0x35b98f.getDefaultQuality(_0x27e5f3.qualitys, _0x27e5f3.stream),
                'quality': _0x35b98f.renameQualityMap(_0x27e5f3.qualitys),
                'subtitles': _0x27e5f3.subtitles,
                'timeline': _0x27e5f3.timeline,
                'title': _0x27e5f3.season ? _0x27e5f3.title : _0x1661d8 + (_0x27e5f3.title == _0x1661d8 ? '' : " / " + _0x27e5f3.title)
              };
              Lampa.Player.play(_0x401a3f);
              if (_0x27e5f3.season && Lampa.Platform.version) {
                var _0x52f898 = [];
                _0x311010.forEach(function (_0x2b8a56) {
                  if (_0x2b8a56 == _0x27e5f3) {
                    _0x52f898.push(_0x401a3f);
                  } else {
                    var _0x24e73f = {
                      'url': function _0x5771be(_0x267684) {
                        _0x4d7a28(_0x2b8a56, function (_0x45c32d) {
                          _0x24e73f.url = _0x35b98f.getDefaultQuality(_0x45c32d.qualitys, _0x45c32d.stream);
                          _0x24e73f.quality = _0x35b98f.renameQualityMap(_0x45c32d.qualitys);
                          _0x24e73f.subtitles = _0x45c32d.subtitles;
                          _0x267684();
                        }, function () {
                          _0x24e73f.url = '';
                          _0x267684();
                        });
                      },
                      'timeline': _0x2b8a56.timeline,
                      'title': _0x2b8a56.title
                    };
                    _0x52f898.push(_0x24e73f);
                  }
                });
                Lampa.Player.playlist(_0x52f898);
              } else {
                Lampa.Player.playlist([_0x401a3f]);
              }
              if (_0x17021a.indexOf(_0x415ccb) == -0x1) {
                _0x17021a.push(_0x415ccb);
                _0x3aa8a1.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x17021a);
              }
            }, function () {
              _0xaa3ce6.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0x35b98f.append(_0x3aa8a1);
          _0x35b98f.contextmenu({
            'item': _0x3aa8a1,
            'view': _0x43d53b,
            'viewed': _0x17021a,
            'hash_file': _0x415ccb,
            'element': _0xaa3ce6,
            'file': function _0x5812f1(_0x574cc1) {
              _0x4d7a28(_0xaa3ce6, function (_0x1367c8) {
                _0x574cc1({
                  'file': _0x1367c8.stream,
                  'quality': _0x1367c8.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0x35b98f.start(true);
      }
    }
    function _0x1d5b38(_0xa6228d, _0x384a36, _0x2974ab) {
      var _0x372ac5 = new Lampa.Reguest();
      var _0x44c960 = [];
      var _0x27a2cf = _0x384a36;
      var _0x13eff7 = '';
      var _0x23aca4 = '';
      var _0x1cc7ef = _0xa6228d.proxy("redheadsound");
      var _0x1eae75 = _0x59443e.baseUserAgent();
      var _0x24b4b5 = Lampa.Platform.is("android") ? {
        'Origin': "https://redheadsound.studio",
        'Referer': "https://redheadsound.studio/",
        'User-Agent': _0x1eae75
      } : {};
      var _0x1f468c = '';
      if (_0x1cc7ef) {
        _0x1f468c += "param/Origin=" + encodeURIComponent("https://redheadsound.studio") + '/';
        _0x1f468c += 'param/Referer=' + encodeURIComponent("https://redheadsound.studio/") + '/';
        _0x1f468c += "param/User-Agent=" + encodeURIComponent(_0x1eae75) + '/';
      }
      var _0x3a4b92 = {};
      var _0x314334 = {
        'season': 0x0,
        'voice': 0x0
      };
      var _0x3a64b1 = atob("MWM2MzYyNTY3ZjNmNzQ5ZDVkOTZjOWVmYjZlM2UwYmRhYzY4NjI3OA==");
      var _0x38e127 = null;
      function _0x26b47e(_0x299019) {
        var _0x4571de = new Date().getTime();
        var _0x50c941 = _0x4571de - 600000;
        if (_0x3a64b1 && _0x38e127 && _0x38e127 > _0x50c941) {
          if (_0x299019) {
            _0x299019();
          }
          return;
        }
        _0x372ac5.clear();
        _0x372ac5.timeout(0x2710);
        _0x372ac5.native(_0xa6228d.proxyLink("https://redheadsound.studio/", _0x1cc7ef), function (_0x3cc48e) {
          _0x3cc48e = (_0x3cc48e || '').replace(/\n/g, '');
          var _0x252c2f = _0x3cc48e.match(/\bdle_login_hash = '([^']+)'/);
          if (_0x252c2f) {
            _0x3a64b1 = _0x252c2f[0x1];
            _0x38e127 = _0x4571de;
          }
          if (_0x299019) {
            _0x299019();
          }
        }, function (_0x575caa, _0x58a343) {
          if (_0x299019) {
            _0x299019();
          }
        }, false, {
          'dataType': "text"
        });
      }
      this.search = function (_0x217cce, _0x12c89d, _0x9f4459) {
        var _0x3709f6 = this;
        _0x27a2cf = _0x217cce;
        _0x13eff7 = _0x27a2cf.search || _0x27a2cf.movie.title;
        if (this.wait_similars && _0x9f4459 && _0x9f4459[0x0].is_similars) {
          return _0x26993c(_0x9f4459[0x0]);
        }
        var _0x48a74 = _0x27a2cf.search_date || !_0x27a2cf.clarification && (_0x27a2cf.movie.release_date || _0x27a2cf.movie.first_air_date || _0x27a2cf.movie.last_air_date) || '0000';
        var _0x2b9c8b = parseInt((_0x48a74 + '').slice(0x0, 0x4));
        var _0x4db388 = [];
        if (_0x27a2cf.movie.alternative_titles && _0x27a2cf.movie.alternative_titles.results) {
          _0x4db388 = _0x27a2cf.movie.alternative_titles.results.map(function (_0x210873) {
            return _0x210873.title;
          });
        }
        if (_0x27a2cf.movie.original_title) {
          _0x4db388.push(_0x27a2cf.movie.original_title);
        }
        if (_0x27a2cf.movie.original_name) {
          _0x4db388.push(_0x27a2cf.movie.original_name);
        }
        var _0x13147f = function _0x1583e5(_0x5ac1de) {
          if (_0x5ac1de && _0x5ac1de.length && _0x5ac1de.forEach) {
            var _0x45c114 = false;
            var _0x2faafe = _0x5ac1de.map(function (_0x4ba561) {
              var _0x40c5fa = $(_0x4ba561.link);
              var _0x589726 = $('a', _0x40c5fa);
              var _0x534ced = _0x589726.text().trim() || '';
              var _0x384465 = $(_0x4ba561.year);
              var _0x58c62c = parseInt(_0x384465.text().trim() || '');
              return {
                'year': _0x58c62c,
                'title': _0x534ced,
                'orig_title': '',
                'link': _0x589726.attr('href') || ''
              };
            });
            var _0x37cb7a = _0x2faafe;
            if (_0x37cb7a.length) {
              if (_0x4db388.length) {
                var _0x35e5ff = _0x37cb7a.filter(function (_0x79b8f8) {
                  return _0xa6228d.containsAnyTitle([_0x79b8f8.orig_title, _0x79b8f8.title], _0x4db388);
                });
                if (_0x35e5ff.length) {
                  _0x37cb7a = _0x35e5ff;
                  _0x45c114 = true;
                }
              }
              if (_0x13eff7) {
                var _0x1247a8 = _0x37cb7a.filter(function (_0x5f4b1b) {
                  return _0xa6228d.containsAnyTitle([_0x5f4b1b.title, _0x5f4b1b.orig_title], [_0x13eff7]);
                });
                if (_0x1247a8.length) {
                  _0x37cb7a = _0x1247a8;
                  _0x45c114 = true;
                }
              }
              {
                var _0x3cb0c8 = _0x37cb7a.filter(function (_0x2603e0) {
                  return !_0x42558b(_0x2603e0.title, " - обзор");
                });
                if (_0x3cb0c8.length) {
                  _0x37cb7a = _0x3cb0c8;
                }
              }
              if (_0x37cb7a.length > 0x1 && _0x2b9c8b) {
                var _0x436618 = _0x37cb7a.filter(function (_0x25ba42) {
                  return _0x25ba42.year == _0x2b9c8b;
                });
                if (!_0x436618.length) {
                  _0x436618 = _0x37cb7a.filter(function (_0xdd3664) {
                    return _0xdd3664.year && _0xdd3664.year > _0x2b9c8b - 0x2 && _0xdd3664.year < _0x2b9c8b + 0x2;
                  });
                }
                if (_0x436618.length) {
                  _0x37cb7a = _0x436618;
                }
              }
            }
            if (_0x37cb7a.length == 0x1 && _0x45c114) {
              if (_0x2b9c8b && _0x37cb7a[0x0].year) {
                _0x45c114 = _0x37cb7a[0x0].year > _0x2b9c8b - 0x2 && _0x37cb7a[0x0].year < _0x2b9c8b + 0x2;
              }
              if (_0x45c114) {
                _0x45c114 = false;
                if (_0x4db388.length) {
                  _0x45c114 |= _0xa6228d.equalAnyTitle([_0x37cb7a[0x0].orig_title, _0x37cb7a[0x0].title], _0x4db388);
                }
                if (_0x13eff7) {
                  _0x45c114 |= _0xa6228d.equalAnyTitle([_0x37cb7a[0x0].title, _0x37cb7a[0x0].orig_title], [_0x13eff7]);
                }
              }
            }
            if (_0x37cb7a.length == 0x1 && _0x45c114) {
              _0x26993c(_0x37cb7a[0x0]);
            } else {
              if (_0x2faafe.length) {
                _0x3709f6.wait_similars = true;
                _0x2faafe.forEach(function (_0x43ae32) {
                  _0x43ae32.is_similars = true;
                });
                _0xa6228d.similars(_0x2faafe);
                _0xa6228d.loading(false);
              } else {
                _0xa6228d.emptyForQuery(_0x13eff7);
              }
            }
          } else {
            _0xa6228d.emptyForQuery(_0x13eff7);
          }
        };
        var _0x3e76f7 = function _0xc3669f(_0x8bac06, _0x392e5e, _0x2921a7) {
          var _0x23cf34 = "query=" + encodeURIComponent(_0x8bac06);
          _0x23cf34 += "&skin=rhs_new";
          _0x23cf34 += "&user_hash=" + _0x3a64b1;
          _0x372ac5.clear();
          _0x372ac5.timeout(0x2710);
          _0x372ac5.native(_0xa6228d.proxyLink("https://redheadsound.studio/engine/ajax/controller.php?mod=search", _0x1cc7ef), function (_0x6c6b8) {
            _0x6c6b8 = (_0x6c6b8 || '').replace(/\n/g, '');
            var _0x23f04e = _0x6c6b8.indexOf("<div class=\"move-item\">");
            if (_0x23f04e !== -0x1) {
              _0x6c6b8.substring(_0x23f04e + "<div class=\"move-item\">".length).split("<div class=\"move-item\">").forEach(function (_0x13c9f9) {
                var _0x5b5e75 = _0x13c9f9.match(/<div class="move-item__content">\s*(<h4 class="title">\s*<a [^>]*>[^<]*<\/a>[^<]*<\/h4>)/);
                var _0x17a2fb = _0x13c9f9.match(/(<span class="year [^>]*>\s*(<a [^>]*>[^<]*<\/a>)?[^<]*<\/span>)/);
                if (_0x5b5e75) {
                  _0x392e5e.push({
                    'link': _0x5b5e75[0x1],
                    'year': _0x17a2fb && _0x17a2fb[0x1] || ''
                  });
                }
              });
            }
            if (_0x2921a7) {
              _0x2921a7(_0x392e5e);
            }
          }, function (_0xd76abd, _0x275cbc) {
            _0xa6228d.empty(_0x372ac5.errorDecode(_0xd76abd, _0x275cbc));
          }, _0x23cf34, {
            'dataType': "text"
          });
        };
        var _0x1455ff = function _0x28f6f6() {
          _0x3e76f7(_0xa6228d.cleanTitle(_0x13eff7), [], function (_0x1c6ecf) {
            if (_0x1c6ecf && _0x1c6ecf.length && _0x1c6ecf.forEach) {
              _0x13147f(_0x1c6ecf);
            } else {
              _0x13147f([]);
            }
          });
        };
        var _0x463c38 = function _0x2851c5() {
          _0x1455ff();
        };
        _0x26b47e(function () {
          return _0x463c38();
        });
      };
      function _0x26993c(_0x4b896a) {
        _0x23aca4 = _0x4b896a.title || _0x4b896a.orig_title || _0x13eff7;
        var _0x29888a = _0xa6228d.fixLink(_0x4b896a.link, "https://redheadsound.studio/");
        _0x372ac5.clear();
        _0x372ac5.timeout(0x2710);
        _0x372ac5.native(_0xa6228d.proxyLink(_0x29888a, _0x1cc7ef), function (_0xa3ac5e) {
          _0xa3ac5e = (_0xa3ac5e || '').replace(/\n/g, '');
          var _0x258d0c = _0xa3ac5e.match(/\bvideoUrl = '(http[^']*)'/);
          var _0x1f950e = _0x258d0c && _0x258d0c[0x1];
          if (_0x1f950e) {
            _0x372ac5.clear();
            _0x372ac5.timeout(0x2710);
            _0x372ac5.native(_0xa6228d.proxyLink(_0x1f950e, _0x1cc7ef, _0x1f468c), function (_0x558834) {
              _0x38d7c8(_0x558834);
            }, function (_0x34ba89, _0x5af454) {
              _0xa6228d.empty(_0x372ac5.errorDecode(_0x34ba89, _0x5af454));
            }, false, {
              'dataType': "text",
              'headers': _0x24b4b5
            });
          } else {
            _0xa6228d.emptyForQuery(_0x13eff7);
          }
        }, function (_0x1e1035, _0x4f5e5f) {
          _0xa6228d.empty(_0x372ac5.errorDecode(_0x1e1035, _0x4f5e5f));
        }, false, {
          'dataType': "text"
        });
      }
      this.extendChoice = function (_0x3816e6) {
        Lampa.Arrays.extend(_0x314334, _0x3816e6, true);
      };
      this.reset = function () {
        _0xa6228d.reset();
        _0x314334 = {
          'season': 0x0,
          'voice': 0x0
        };
        _0xbd244d();
        _0x47c35a(_0x199c88());
        _0xa6228d.saveChoice(_0x314334);
      };
      this.filter = function (_0x30b38b, _0x102510, _0x162964) {
        _0x314334[_0x102510.stype] = _0x162964.index;
        _0xa6228d.reset();
        _0xbd244d();
        _0x47c35a(_0x199c88());
        _0xa6228d.saveChoice(_0x314334);
      };
      this.destroy = function () {
        _0x372ac5.clear();
        _0x44c960 = null;
      };
      function _0x38d7c8(_0x5b7753, _0x3e788e) {
        _0xa6228d.loading(false);
        _0x5b7753 = (_0x5b7753 || '').replace(/\n/g, '');
        var _0x3cd176 = _0x5b7753.match(/var playerOptions = ({.*?});/);
        var _0x526da9;
        try {
          _0x526da9 = _0x3cd176 && (0x0, eval)("\"use strict\"; (function(){ return " + _0x3cd176[0x1] + "; })();");
        } catch (_0x473907) {}
        if (_0x526da9 && _0x526da9.playlist && _0x526da9.playlist.forEach) {
          _0x44c960 = _0x526da9.playlist;
          _0xbd244d();
          _0x47c35a(_0x199c88());
        } else {
          _0xa6228d.emptyForQuery(_0x13eff7);
        }
      }
      function _0xbd244d() {
        _0x3a4b92 = {
          'season': [],
          'voice': []
        };
        _0xa6228d.filter(_0x3a4b92, _0x314334);
      }
      function _0x199c88() {
        var _0x45d0d6 = [];
        _0x44c960.forEach(function (_0x2a1168) {
          var _0x4333e7 = _0x2a1168.sources && (_0x2974ab && _0x2a1168.sources.shakadash && _0x2a1168.sources.shakadash.src || _0x2a1168.sources.hls && _0x2a1168.sources.hls.src) || '';
          _0x45d0d6.push({
            'title': _0x2a1168.title || _0x2a1168.comment || _0x13eff7,
            'quality': "360p ~ 1080p",
            'info': '',
            'file': _0x4333e7
          });
        });
        return _0x45d0d6;
      }
      function _0x47c35a(_0x12fb9e) {
        _0xa6228d.reset();
        var _0x28a4dc = Lampa.Storage.cache("online_view", 0x1388, []);
        _0x12fb9e.forEach(function (_0x1b3739) {
          var _0x81ae7f = Lampa.Utils.hash(_0x27a2cf.movie.original_title + _0x23aca4 + _0x1b3739.title);
          var _0x53372a = Lampa.Timeline.view(_0x81ae7f);
          var _0x34ae25 = Lampa.Template.get('online_mod', _0x1b3739);
          var _0x3baf2e = Lampa.Utils.hash(_0x27a2cf.movie.original_title + _0x23aca4 + _0x1b3739.title);
          _0x1b3739.timeline = _0x53372a;
          _0x34ae25.append(Lampa.Timeline.render(_0x53372a));
          if (Lampa.Timeline.details) {
            _0x34ae25.find(".online__quality").append(Lampa.Timeline.details(_0x53372a, " / "));
          }
          if (_0x28a4dc.indexOf(_0x3baf2e) !== -0x1) {
            _0x34ae25.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get('icon_star', {}, true) + "</div>");
          }
          _0x34ae25.on("hover:enter", function () {
            if (_0x27a2cf.movie.id) {
              Lampa.Favorite.add('history', _0x27a2cf.movie, 0x64);
            }
            var _0x108deb = {
              'file': _0x1b3739.file,
              'quality': false,
              'subtitles': false
            };
            if (_0x108deb.file) {
              var _0x12e857 = [];
              var _0x55e314 = {
                'url': _0xa6228d.getDefaultQuality(false, _0x108deb.file),
                'quality': _0xa6228d.renameQualityMap(false),
                'subtitles': false,
                'timeline': _0x1b3739.timeline,
                'title': _0x12fb9e.length > 0x1 ? _0x1b3739.title : _0x13eff7 + (_0x1b3739.title == _0x13eff7 ? '' : " / " + _0x1b3739.title)
              };
              if (_0x12fb9e.length > 0x1) {
                _0x12fb9e.forEach(function (_0x263c42) {
                  var _0x2b2303 = {
                    'file': _0x263c42.file,
                    'quality': false,
                    'subtitles': false
                  };
                  _0x12e857.push({
                    'url': _0xa6228d.getDefaultQuality(false, _0x2b2303.file),
                    'quality': _0xa6228d.renameQualityMap(false),
                    'subtitles': false,
                    'timeline': _0x263c42.timeline,
                    'title': _0x263c42.title
                  });
                });
              } else {
                _0x12e857.push(_0x55e314);
              }
              if (_0x12e857.length > 0x1) {
                _0x55e314.playlist = _0x12e857;
              }
              Lampa.Player.play(_0x55e314);
              Lampa.Player.playlist(_0x12e857);
              if (_0x28a4dc.indexOf(_0x3baf2e) == -0x1) {
                _0x28a4dc.push(_0x3baf2e);
                _0x34ae25.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x28a4dc);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0xa6228d.append(_0x34ae25);
          _0xa6228d.contextmenu({
            'item': _0x34ae25,
            'view': _0x53372a,
            'viewed': _0x28a4dc,
            'hash_file': _0x3baf2e,
            'file': function _0x5c2059(_0x1c5bb8) {
              _0x1c5bb8({
                'file': _0x1b3739.file,
                'quality': false,
                'subtitles': false
              });
            }
          });
        });
        _0xa6228d.start(true);
      }
    }
    function _0x4f340b(_0x58584b, _0x554123) {
      var _0x1d11e1 = new Lampa.Reguest();
      var _0x57c9c3 = {};
      var _0xcfb1ae = _0x554123;
      var _0x4c3cc3 = '';
      var _0x86ee8e = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x3de758 = _0x58584b.proxy("cdnvideohub");
      var _0x391c34 = _0x59443e.baseUserAgent();
      var _0x42017d = '';
      if (_0x3de758) {
        _0x42017d += "param/Origin=/";
        _0x42017d += "param/Referer=/";
        _0x42017d += "param/User-Agent=" + encodeURIComponent(_0x391c34) + '/';
      }
      var _0x39ed2f = atob('aHR0cHM6Ly9wbGFwaS5jZG52aWRlb2h1Yi5jb20vYXBpL3YxL3BsYXllci9zdi8=');
      var _0x1cca33 = {};
      var _0x4c8f5d = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      this.search = function (_0x4a60a6, _0x393a72) {
        _0xcfb1ae = _0x4a60a6;
        _0x4c3cc3 = _0xcfb1ae.search || _0xcfb1ae.movie.title;
        if (isNaN(_0x393a72)) {
          _0x58584b.emptyForQuery(_0x4c3cc3);
          return;
        }
        var _0x5ecf83 = Lampa.Utils.addUrlComponent(_0x39ed2f + atob("cGxheWxpc3Q/cHViPTEyJmFnZ3I9a3A="), "id=" + _0x393a72);
        _0x1d11e1.clear();
        _0x1d11e1.timeout(0x2710);
        _0x1d11e1.native(_0x58584b.proxyLink(_0x5ecf83, _0x3de758, _0x42017d), function (_0x4c6b9b) {
          _0x12e94d(_0x4c6b9b);
        }, function (_0x2a69ee, _0x55f9ac) {
          if (_0x2a69ee.status == 0x1f4 && !_0x2a69ee.responseText || _0x2a69ee.status == 0x0 && _0x2a69ee.statusText !== "timeout") {
            _0x12e94d(null);
          } else {
            _0x58584b.empty(_0x1d11e1.errorDecode(_0x2a69ee, _0x55f9ac));
          }
        });
      };
      this.extendChoice = function (_0x51f0b4) {
        Lampa.Arrays.extend(_0x4c8f5d, _0x51f0b4, true);
      };
      this.reset = function () {
        _0x58584b.reset();
        _0x4c8f5d = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x1ff754();
        _0x24edcf(_0x53e67c());
        _0x58584b.saveChoice(_0x4c8f5d);
      };
      this.filter = function (_0x3afc0b, _0x5abfae, _0x23baeb) {
        _0x4c8f5d[_0x5abfae.stype] = _0x23baeb.index;
        if (_0x5abfae.stype == "voice") {
          _0x4c8f5d.voice_name = _0x1cca33.voice[_0x23baeb.index];
        }
        _0x58584b.reset();
        _0x1ff754();
        _0x24edcf(_0x53e67c());
        _0x58584b.saveChoice(_0x4c8f5d);
      };
      this.destroy = function () {
        _0x1d11e1.clear();
        _0x57c9c3 = null;
      };
      function _0x12e94d(_0x539d1f) {
        _0x58584b.loading(false);
        if (_0x539d1f && _0x539d1f.items && _0x539d1f.items.forEach) {
          var _0x107361 = [];
          var _0x501803 = _0x539d1f.items;
          _0x501803.sort(function (_0x1c13e9, _0x1db205) {
            var _0x4f0d0d = (_0x1c13e9.season || 0x0) - (_0x1db205.season || 0x0);
            if (_0x4f0d0d) {
              return _0x4f0d0d;
            }
            _0x4f0d0d = (_0x1c13e9.episode || 0x0) - (_0x1db205.episode || 0x0);
            if (_0x4f0d0d) {
              return _0x4f0d0d;
            }
            if ((_0x1c13e9.voiceStudio || _0x1c13e9.voiceType || '') > (_0x1db205.voiceStudio || _0x1db205.voiceType || '')) {
              return 0x1;
            }
            if ((_0x1c13e9.voiceStudio || _0x1c13e9.voiceType || '') < (_0x1db205.voiceStudio || _0x1db205.voiceType || '')) {
              return -0x1;
            }
            _0x4f0d0d = (_0x1c13e9.vkId || 0x0) - (_0x1db205.vkId || 0x0);
            return _0x4f0d0d;
          });
          _0x501803.forEach(function (_0x39d9cf) {
            if (_0x39d9cf.season != null) {
              var _0x11e78f = _0x107361.filter(function (_0x396ef2) {
                return _0x396ef2.id === _0x39d9cf.season;
              })[0x0];
              if (!_0x11e78f) {
                _0x11e78f = {
                  'id': _0x39d9cf.season,
                  'title': Lampa.Lang.translate("torrent_serial_season") + " " + _0x39d9cf.season,
                  'voices': []
                };
                _0x107361.push(_0x11e78f);
              }
              var _0xb94ba9 = _0x39d9cf.voiceStudio || _0x39d9cf.voiceType || '';
              if (_0x11e78f.voices.indexOf(_0xb94ba9) == -0x1) {
                _0x11e78f.voices.push(_0xb94ba9);
              }
            }
          });
          _0x57c9c3 = {
            'title_name': _0x539d1f.title_name || _0x4c3cc3,
            'items': _0x501803,
            'seasons': _0x107361
          };
          _0x1ff754();
          _0x24edcf(_0x53e67c());
        } else {
          _0x58584b.emptyForQuery(_0x4c3cc3);
        }
      }
      function _0x1ff754() {
        _0x1cca33 = {
          'season': _0x57c9c3.seasons.map(function (_0x3d383e) {
            return _0x3d383e.title;
          }),
          'voice': []
        };
        if (!_0x1cca33.season[_0x4c8f5d.season]) {
          _0x4c8f5d.season = 0x0;
        }
        var _0x3d0ed7 = _0x57c9c3.seasons[_0x4c8f5d.season];
        if (_0x3d0ed7) {
          _0x1cca33.voice = _0x3d0ed7.voices;
        }
        if (!_0x1cca33.voice[_0x4c8f5d.voice]) {
          _0x4c8f5d.voice = 0x0;
        }
        if (_0x4c8f5d.voice_name) {
          var _0xe617d1 = _0x1cca33.voice.indexOf(_0x4c8f5d.voice_name);
          if (_0xe617d1 == -0x1) {
            _0x4c8f5d.voice = 0x0;
          } else if (_0xe617d1 !== _0x4c8f5d.voice) {
            _0x4c8f5d.voice = _0xe617d1;
          }
        }
        _0x58584b.filter(_0x1cca33, _0x4c8f5d);
      }
      function _0x53e67c() {
        var _0x50532d = [];
        if (_0x57c9c3.seasons.length) {
          var _0x5cd187 = _0x57c9c3.seasons[_0x4c8f5d.season] && _0x57c9c3.seasons[_0x4c8f5d.season].id;
          _0x57c9c3.items.forEach(function (_0x49042d) {
            var _0x4b4e07 = _0x49042d.voiceStudio || _0x49042d.voiceType || '';
            if (_0x49042d.season == _0x5cd187 && _0x4b4e07 == _0x1cca33.voice[_0x4c8f5d.voice]) {
              _0x50532d.push({
                'title': _0x58584b.formatEpisodeTitle(_0x5cd187, _0x49042d.episode),
                'quality': "360p ~ 1080p",
                'info': " / " + Lampa.Utils.shortText(_0x4b4e07, 0x32) + (_0x49042d.vkId ? " / id: " + _0x49042d.vkId : ''),
                'data_id': _0x49042d.vkId,
                'season': '' + _0x5cd187,
                'episode': _0x49042d.episode,
                'media': _0x49042d
              });
            }
          });
        } else {
          _0x57c9c3.items.forEach(function (_0x5d358e) {
            _0x50532d.push({
              'title': _0x5d358e.voiceStudio || _0x5d358e.voiceType || _0x57c9c3.title_name,
              'quality': "360p ~ 1080p",
              'info': _0x5d358e.vkId ? " / id: " + _0x5d358e.vkId : '',
              'data_id': _0x5d358e.vkId,
              'media': _0x5d358e
            });
          });
        }
        return _0x50532d;
      }
      function _0x3005bf(_0x1d8c1c) {
        if (!_0x1d8c1c) {
          return [];
        }
        var _0x126d2d = [];
        if (_0x1d8c1c.mpeg2kUrl) {
          _0x126d2d.push({
            'label': '4K',
            'quality': 0x870,
            'file': _0x1d8c1c.mpeg2kUrl
          });
        }
        if (_0x1d8c1c.mpeg4kUrl) {
          _0x126d2d.push({
            'label': '2K',
            'quality': 0x5a0,
            'file': _0x1d8c1c.mpeg4kUrl
          });
        }
        if (_0x1d8c1c.mpegQhdUrl) {
          _0x126d2d.push({
            'label': "1440p",
            'quality': 0x5a0,
            'file': _0x1d8c1c.mpegQhdUrl
          });
        }
        if (_0x1d8c1c.mpegFullHdUrl) {
          _0x126d2d.push({
            'label': "1080p",
            'quality': 0x438,
            'file': _0x1d8c1c.mpegFullHdUrl
          });
        }
        if (_0x1d8c1c.mpegHighUrl) {
          _0x126d2d.push({
            'label': "720p",
            'quality': 0x2d0,
            'file': _0x1d8c1c.mpegHighUrl
          });
        }
        if (_0x1d8c1c.mpegMediumUrl) {
          _0x126d2d.push({
            'label': "480p",
            'quality': 0x1e0,
            'file': _0x1d8c1c.mpegMediumUrl
          });
        }
        if (_0x1d8c1c.mpegLowUrl) {
          _0x126d2d.push({
            'label': "360p",
            'quality': 0x168,
            'file': _0x1d8c1c.mpegLowUrl
          });
        }
        if (_0x1d8c1c.mpegLowestUrl) {
          _0x126d2d.push({
            'label': "240p",
            'quality': 0xf0,
            'file': _0x1d8c1c.mpegLowestUrl
          });
        }
        if (_0x1d8c1c.mpegTinyUrl) {
          _0x126d2d.push({
            'label': "144p",
            'quality': 0x90,
            'file': _0x1d8c1c.mpegTinyUrl
          });
        }
        if (!_0x126d2d.length && _0x1d8c1c.hlsUrl) {
          _0x126d2d.push({
            'label': "HLS",
            'quality': NaN,
            'file': _0x1d8c1c.hlsUrl
          });
        }
        _0x126d2d.forEach(function (_0x1f55f9) {
          _0x1f55f9.file = _0x58584b.proxyLink(_0x58584b.fixLinkProtocol(_0x1f55f9.file, _0x86ee8e, true), _0x3de758, _0x42017d);
        });
        return _0x126d2d;
      }
      function _0x585f0b(_0x395ff9, _0x4ed59e, _0xc2d333) {
        if (_0x395ff9.stream) {
          return _0x4ed59e(_0x395ff9);
        }
        if (!_0x395ff9.data_id) {
          return _0xc2d333();
        }
        var _0x2e8ba4 = _0x39ed2f + 'video/' + _0x395ff9.data_id;
        _0x1d11e1.clear();
        _0x1d11e1.timeout(0x2710);
        _0x1d11e1.native(_0x58584b.proxyLink(_0x2e8ba4, _0x3de758, _0x42017d), function (_0x5e4cbf) {
          if (_0x5e4cbf && _0x5e4cbf.sources) {
            var _0x30bca5 = '';
            var _0x27afec = false;
            var _0x47ff5c = _0x3005bf(_0x5e4cbf.sources);
            if (_0x47ff5c && _0x47ff5c.length) {
              _0x30bca5 = _0x47ff5c[0x0].file;
              _0x27afec = {};
              _0x47ff5c.forEach(function (_0xf08fa4) {
                _0x27afec[_0xf08fa4.label] = _0xf08fa4.file;
              });
            }
            if (_0x30bca5) {
              _0x395ff9.stream = _0x30bca5;
              _0x395ff9.qualitys = _0x27afec;
              _0x4ed59e(_0x395ff9);
            } else {
              _0xc2d333();
            }
          } else {
            _0xc2d333();
          }
        }, function (_0x3890b3, _0x1e4c50) {
          _0xc2d333();
        });
      }
      function _0x24edcf(_0x2f950c) {
        _0x58584b.reset();
        var _0x1f9794 = Lampa.Storage.cache("online_view", 0x1388, []);
        _0x2f950c.forEach(function (_0x3820f5) {
          var _0x39a87e = Lampa.Utils.hash(_0x3820f5.season ? [_0x3820f5.season, _0x3820f5.season > 0xa ? ':' : '', _0x3820f5.episode, _0xcfb1ae.movie.original_title].join('') : _0xcfb1ae.movie.original_title);
          var _0x1f29a7 = Lampa.Timeline.view(_0x39a87e);
          var _0x308794 = Lampa.Template.get('online_mod', _0x3820f5);
          var _0x2bd835 = Lampa.Utils.hash(_0x3820f5.season ? [_0x3820f5.season, _0x3820f5.season > 0xa ? ':' : '', _0x3820f5.episode, _0xcfb1ae.movie.original_title, _0x1cca33.voice[_0x4c8f5d.voice]].join('') : _0xcfb1ae.movie.original_title + _0x3820f5.data_id);
          _0x3820f5.timeline = _0x1f29a7;
          _0x308794.append(Lampa.Timeline.render(_0x1f29a7));
          if (Lampa.Timeline.details) {
            _0x308794.find('.online__quality').append(Lampa.Timeline.details(_0x1f29a7, " / "));
          }
          if (_0x1f9794.indexOf(_0x2bd835) !== -0x1) {
            _0x308794.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get('icon_star', {}, true) + "</div>");
          }
          _0x308794.on('hover:enter', function () {
            if (_0x3820f5.loading) {
              return;
            }
            if (_0xcfb1ae.movie.id) {
              Lampa.Favorite.add("history", _0xcfb1ae.movie, 0x64);
            }
            _0x3820f5.loading = true;
            _0x585f0b(_0x3820f5, function (_0x2e5da4) {
              _0x2e5da4.loading = false;
              var _0x14d968 = {
                'url': _0x58584b.getDefaultQuality(_0x2e5da4.qualitys, _0x2e5da4.stream),
                'quality': _0x58584b.renameQualityMap(_0x2e5da4.qualitys),
                'timeline': _0x2e5da4.timeline,
                'title': _0x2e5da4.season ? _0x2e5da4.title : _0x4c3cc3 + (_0x2e5da4.title == _0x4c3cc3 ? '' : " / " + _0x2e5da4.title)
              };
              Lampa.Player.play(_0x14d968);
              if (_0x2e5da4.season && Lampa.Platform.version) {
                var _0x5bcc13 = [];
                _0x2f950c.forEach(function (_0x17c4a9) {
                  if (_0x17c4a9 == _0x2e5da4) {
                    _0x5bcc13.push(_0x14d968);
                  } else {
                    var _0x3e13d7 = {
                      'url': function _0x3e3370(_0x8beffc) {
                        _0x585f0b(_0x17c4a9, function (_0x3e9440) {
                          _0x3e13d7.url = _0x58584b.getDefaultQuality(_0x3e9440.qualitys, _0x3e9440.stream);
                          _0x3e13d7.quality = _0x58584b.renameQualityMap(_0x3e9440.qualitys);
                          _0x8beffc();
                        }, function () {
                          _0x3e13d7.url = '';
                          _0x8beffc();
                        });
                      },
                      'timeline': _0x17c4a9.timeline,
                      'title': _0x17c4a9.title
                    };
                    _0x5bcc13.push(_0x3e13d7);
                  }
                });
                Lampa.Player.playlist(_0x5bcc13);
              } else {
                Lampa.Player.playlist([_0x14d968]);
              }
              if (_0x1f9794.indexOf(_0x2bd835) == -0x1) {
                _0x1f9794.push(_0x2bd835);
                _0x308794.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x1f9794);
              }
            }, function () {
              _0x3820f5.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0x58584b.append(_0x308794);
          _0x58584b.contextmenu({
            'item': _0x308794,
            'view': _0x1f29a7,
            'viewed': _0x1f9794,
            'hash_file': _0x2bd835,
            'file': function _0x32b2cc(_0x41df6a) {
              _0x585f0b(_0x3820f5, function (_0x545553) {
                _0x41df6a({
                  'file': _0x545553.stream,
                  'quality': _0x545553.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0x58584b.start(true);
      }
    }
    function _0x5b3f6f(_0x1ed652, _0x316a98) {
      var _0x420458 = new Lampa.Reguest();
      var _0x4c3f6e = {};
      var _0x15642e = _0x316a98;
      var _0x22b0fa = '';
      var _0x3502b5 = _0x1ed652.proxy("anilibria");
      var _0x57d34c = {};
      var _0x291b10 = {
        'season': 0x0,
        'voice': 0x0
      };
      this.search = function (_0x1c87f7, _0x5f3dcc, _0x12b207) {
        var _0x218bf6 = this;
        _0x15642e = _0x1c87f7;
        _0x22b0fa = _0x15642e.search || _0x15642e.movie.title;
        if (this.wait_similars && _0x12b207 && _0x12b207[0x0].is_similars) {
          return _0x24b73e(_0x12b207[0x0]);
        }
        var _0x177746 = _0x15642e.search_date;
        var _0x54de56 = [];
        if (_0x15642e.movie.alternative_titles && _0x15642e.movie.alternative_titles.results) {
          _0x54de56 = _0x15642e.movie.alternative_titles.results.map(function (_0x418687) {
            return _0x418687.title;
          });
        }
        if (_0x15642e.movie.original_title) {
          _0x54de56.push(_0x15642e.movie.original_title);
        }
        if (_0x15642e.movie.original_name) {
          _0x54de56.push(_0x15642e.movie.original_name);
        }
        var _0x779a90 = function _0x222579(_0x2b6211) {
          if (_0x2b6211 && _0x2b6211.length && _0x2b6211.forEach) {
            var _0x48eae1 = false;
            _0x2b6211.forEach(function (_0x4e7eeb) {
              _0x4e7eeb.ru_title = _0x4e7eeb.names && _0x4e7eeb.names.ru;
              _0x4e7eeb.en_title = _0x4e7eeb.names && _0x4e7eeb.names.en;
              _0x4e7eeb.alt_title = _0x4e7eeb.names && _0x4e7eeb.names.alternative;
              _0x4e7eeb.year = _0x4e7eeb.season && _0x4e7eeb.season.year && parseInt(_0x4e7eeb.season.year) || 0x0;
            });
            var _0x2c00e = _0x2b6211;
            if (_0x2c00e.length) {
              if (_0x54de56.length) {
                var _0x4950d0 = _0x2c00e.filter(function (_0x1f936c) {
                  return _0x1ed652.containsAnyTitle([_0x1f936c.en_title, _0x1f936c.ru_title, _0x1f936c.alt_title], _0x54de56);
                });
                if (_0x4950d0.length) {
                  _0x2c00e = _0x4950d0;
                  _0x48eae1 = true;
                }
              }
              if (_0x22b0fa) {
                var _0x61570a = _0x2c00e.filter(function (_0x2c04ad) {
                  return _0x1ed652.containsAnyTitle([_0x2c04ad.ru_title, _0x2c04ad.en_title, _0x2c04ad.alt_title], [_0x22b0fa]);
                });
                if (_0x61570a.length) {
                  _0x2c00e = _0x61570a;
                  _0x48eae1 = true;
                }
              }
              if (_0x2c00e.length > 0x1 && _0x177746) {
                var _0x3447ea = _0x2c00e.filter(function (_0x4059d2) {
                  return _0x4059d2.year == _0x177746;
                });
                if (!_0x3447ea.length) {
                  _0x3447ea = _0x2c00e.filter(function (_0x16ca78) {
                    return _0x16ca78.year && _0x16ca78.year > _0x177746 - 0x2 && _0x16ca78.year < _0x177746 + 0x2;
                  });
                }
                if (_0x3447ea.length) {
                  _0x2c00e = _0x3447ea;
                }
              }
            }
            if (_0x2c00e.length == 0x1 && _0x48eae1) {
              if (_0x177746 && _0x2c00e[0x0].year) {
                _0x48eae1 = _0x2c00e[0x0].year > _0x177746 - 0x2 && _0x2c00e[0x0].year < _0x177746 + 0x2;
              }
              if (_0x48eae1) {
                _0x48eae1 = false;
                if (_0x54de56.length) {
                  _0x48eae1 |= _0x1ed652.equalAnyTitle([_0x2c00e[0x0].en_title, _0x2c00e[0x0].ru_title, _0x2c00e[0x0].alt_title], _0x54de56);
                }
                if (_0x22b0fa) {
                  _0x48eae1 |= _0x1ed652.equalAnyTitle([_0x2c00e[0x0].ru_title, _0x2c00e[0x0].en_title, _0x2c00e[0x0].alt_title], [_0x22b0fa]);
                }
              }
            }
            if (_0x2c00e.length == 0x1 && _0x48eae1) {
              _0x24b73e(_0x2c00e[0x0]);
            } else {
              _0x218bf6.wait_similars = true;
              _0x2b6211.forEach(function (_0x29ed89) {
                _0x29ed89.is_similars = true;
                if (!(_0x29ed89.type && _0x29ed89.type.string === 'MOVIE')) {
                  _0x29ed89.episodes_count = _0x29ed89.player && _0x29ed89.player.episodes && _0x29ed89.player.episodes.last;
                }
              });
              _0x1ed652.similars(_0x2b6211);
              _0x1ed652.loading(false);
            }
          } else {
            _0x1ed652.emptyForQuery(_0x22b0fa);
          }
        };
        var _0x53548f = "https://api.anilibria.tv/v3/title/search";
        _0x53548f = Lampa.Utils.addUrlComponent(_0x53548f, 'filter=names,season,type,player');
        _0x53548f = Lampa.Utils.addUrlComponent(_0x53548f, "limit=20");
        _0x53548f = Lampa.Utils.addUrlComponent(_0x53548f, "search=" + encodeURIComponent(_0x22b0fa));
        _0x420458.clear();
        _0x420458.timeout(30000);
        _0x420458.silent(_0x1ed652.proxyLink(_0x53548f, _0x3502b5), function (_0x27d473) {
          _0x779a90(_0x27d473 && _0x27d473.list);
        }, function (_0x4836de, _0x50e1ef) {
          _0x1ed652.empty(_0x420458.errorDecode(_0x4836de, _0x50e1ef));
        });
      };
      this.extendChoice = function (_0x470dc6) {
        Lampa.Arrays.extend(_0x291b10, _0x470dc6, true);
      };
      this.reset = function () {
        _0x1ed652.reset();
        _0x291b10 = {
          'season': 0x0,
          'voice': 0x0
        };
        _0x2f8e84();
        _0x12a5c3(_0x3652b5());
        _0x1ed652.saveChoice(_0x291b10);
      };
      this.filter = function (_0x42d15c, _0x79e939, _0x38f842) {
        _0x291b10[_0x79e939.stype] = _0x38f842.index;
        _0x1ed652.reset();
        _0x2f8e84();
        _0x12a5c3(_0x3652b5());
        _0x1ed652.saveChoice(_0x291b10);
      };
      this.destroy = function () {
        _0x420458.clear();
        _0x4c3f6e = null;
      };
      function _0x24b73e(_0x2c6c2f) {
        if (_0x2c6c2f.player && _0x2c6c2f.player.host && _0x2c6c2f.player.list && Object.keys(_0x2c6c2f.player.list).length) {
          _0x55d5ef(_0x2c6c2f);
        } else {
          _0x1ed652.emptyForQuery(_0x22b0fa);
          Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink_copyright'));
        }
      }
      function _0x55d5ef(_0x447008) {
        _0x1ed652.loading(false);
        _0x4c3f6e = _0x447008;
        _0x2f8e84();
        _0x12a5c3(_0x3652b5());
      }
      function _0x2f8e84() {
        _0x57d34c = {
          'season': [],
          'voice': []
        };
        _0x1ed652.filter(_0x57d34c, _0x291b10);
      }
      function _0x585822(_0x298b5f, _0x29ea6d) {
        var _0x778e8e = [];
        if (_0x29ea6d) {
          if (_0x29ea6d.fhd) {
            _0x778e8e.push({
              'label': "1080p",
              'quality': 0x438,
              'file': _0x298b5f + _0x29ea6d.fhd
            });
          }
          if (_0x29ea6d.hd) {
            _0x778e8e.push({
              'label': "720p",
              'quality': 0x2d0,
              'file': _0x298b5f + _0x29ea6d.hd
            });
          }
          if (_0x29ea6d.sd) {
            _0x778e8e.push({
              'label': "480p",
              'quality': 0x1e0,
              'file': _0x298b5f + _0x29ea6d.sd
            });
          }
        }
        return _0x778e8e;
      }
      function _0x3652b5() {
        var _0x450659 = [];
        if (_0x4c3f6e.player && _0x4c3f6e.player.host && _0x4c3f6e.player.list && Object.keys(_0x4c3f6e.player.list).length) {
          var _0x2f8b08 = "https://" + _0x4c3f6e.player.host;
          if (_0x4c3f6e.type && _0x4c3f6e.type.string === "MOVIE" && Object.keys(_0x4c3f6e.player.list).length === 0x1) {
            for (var _0x3ac690 in _0x4c3f6e.player.list) {
              var _0x370e68 = _0x4c3f6e.player.list[_0x3ac690];
              var _0x2c1bdf = _0x585822(_0x2f8b08, _0x370e68.hls);
              _0x450659.push({
                'title': _0x4c3f6e.ru_title || _0x4c3f6e.en_title || _0x22b0fa,
                'orig_title': _0x4c3f6e.en_title || _0x4c3f6e.ru_title || _0x22b0fa,
                'quality': _0x2c1bdf[0x0] ? _0x2c1bdf[0x0].label : "360p ~ 1080p",
                'info': '',
                'media': _0x2c1bdf
              });
            }
          } else {
            for (var _0xa5de93 in _0x4c3f6e.player.list) {
              var _0x36b91a = _0x4c3f6e.player.list[_0xa5de93];
              var _0x483a67 = _0x585822(_0x2f8b08, _0x36b91a.hls);
              _0x450659.push({
                'title': _0x1ed652.formatEpisodeTitle(null, _0x36b91a.episode, _0x36b91a.name),
                'orig_title': _0x4c3f6e.en_title || _0x4c3f6e.ru_title || _0x22b0fa,
                'quality': _0x483a67[0x0] ? _0x483a67[0x0].label : "360p ~ 1080p",
                'info': '',
                'season': 0x1,
                'episode': _0x36b91a.episode,
                'media': _0x483a67
              });
            }
          }
        }
        return _0x450659;
      }
      function _0x53ae70(_0x4e5552) {
        var _0x5d7844 = '';
        var _0x38aae5 = false;
        var _0x5eab41 = _0x4e5552.media;
        if (_0x5eab41 && _0x5eab41.length) {
          _0x5d7844 = _0x5eab41[0x0].file;
          _0x38aae5 = {};
          _0x5eab41.forEach(function (_0x14a691) {
            _0x38aae5[_0x14a691.label] = _0x14a691.file;
          });
        }
        return {
          'file': _0x5d7844,
          'quality': _0x38aae5
        };
      }
      function _0x12a5c3(_0x413a78) {
        _0x1ed652.reset();
        var _0x79744e = Lampa.Storage.cache('online_view', 0x1388, []);
        _0x413a78.forEach(function (_0x178dd3) {
          var _0x111e4e = Lampa.Utils.hash(_0x178dd3.season ? [_0x178dd3.season, _0x178dd3.season > 0xa ? ':' : '', _0x178dd3.episode, _0x15642e.movie.original_title, _0x178dd3.orig_title].join('') : _0x15642e.movie.original_title + _0x178dd3.orig_title);
          var _0x42eeaf = Lampa.Timeline.view(_0x111e4e);
          var _0x3d11ca = Lampa.Template.get('online_mod', _0x178dd3);
          var _0x5d12ab = Lampa.Utils.hash(_0x178dd3.season ? [_0x178dd3.season, _0x178dd3.season > 0xa ? ':' : '', _0x178dd3.episode, _0x15642e.movie.original_title, _0x178dd3.orig_title].join('') : _0x15642e.movie.original_title + _0x178dd3.orig_title + _0x178dd3.title);
          _0x178dd3.timeline = _0x42eeaf;
          _0x3d11ca.append(Lampa.Timeline.render(_0x42eeaf));
          if (Lampa.Timeline.details) {
            _0x3d11ca.find(".online__quality").append(Lampa.Timeline.details(_0x42eeaf, " / "));
          }
          if (_0x79744e.indexOf(_0x5d12ab) !== -0x1) {
            _0x3d11ca.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x3d11ca.on("hover:enter", function () {
            if (_0x15642e.movie.id) {
              Lampa.Favorite.add("history", _0x15642e.movie, 0x64);
            }
            var _0x3a73e8 = _0x53ae70(_0x178dd3);
            if (_0x3a73e8.file) {
              var _0x491670 = [];
              var _0x37737d = {
                'url': _0x1ed652.getDefaultQuality(_0x3a73e8.quality, _0x3a73e8.file),
                'quality': _0x1ed652.renameQualityMap(_0x3a73e8.quality),
                'timeline': _0x178dd3.timeline,
                'title': _0x178dd3.title
              };
              if (_0x178dd3.season) {
                _0x413a78.forEach(function (_0x506e1a) {
                  var _0x59281c = _0x53ae70(_0x506e1a);
                  _0x491670.push({
                    'url': _0x1ed652.getDefaultQuality(_0x59281c.quality, _0x59281c.file),
                    'quality': _0x1ed652.renameQualityMap(_0x59281c.quality),
                    'timeline': _0x506e1a.timeline,
                    'title': _0x506e1a.title
                  });
                });
              } else {
                _0x491670.push(_0x37737d);
              }
              if (_0x491670.length > 0x1) {
                _0x37737d.playlist = _0x491670;
              }
              Lampa.Player.play(_0x37737d);
              Lampa.Player.playlist(_0x491670);
              if (_0x79744e.indexOf(_0x5d12ab) == -0x1) {
                _0x79744e.push(_0x5d12ab);
                _0x3d11ca.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x79744e);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0x1ed652.append(_0x3d11ca);
          _0x1ed652.contextmenu({
            'item': _0x3d11ca,
            'view': _0x42eeaf,
            'viewed': _0x79744e,
            'hash_file': _0x5d12ab,
            'file': function _0x540d56(_0x16f7ae) {
              _0x16f7ae(_0x53ae70(_0x178dd3));
            }
          });
        });
        _0x1ed652.start(true);
      }
    }
    function _0x17b940(_0x21f55f, _0x25b48b) {
      var _0x3cbb14 = new Lampa.Reguest();
      var _0x31b729 = {};
      var _0x194968 = _0x25b48b;
      var _0xbca313 = '';
      var _0x9542dd = _0x21f55f.proxy("anilibria2");
      var _0x4a77e0 = {};
      var _0x4d3e3f = {
        'season': 0x0,
        'voice': 0x0
      };
      this.search = function (_0xb76038, _0x4aac97, _0x4b4b6c) {
        var _0x517116 = this;
        _0x194968 = _0xb76038;
        _0xbca313 = _0x194968.search || _0x194968.movie.title;
        if (this.wait_similars && _0x4b4b6c && _0x4b4b6c[0x0].is_similars) {
          return _0x3ee0ad(_0x4b4b6c[0x0]);
        }
        var _0x455fcc = _0x194968.search_date;
        var _0x29a354 = [];
        if (_0x194968.movie.alternative_titles && _0x194968.movie.alternative_titles.results) {
          _0x29a354 = _0x194968.movie.alternative_titles.results.map(function (_0x28ba40) {
            return _0x28ba40.title;
          });
        }
        if (_0x194968.movie.original_title) {
          _0x29a354.push(_0x194968.movie.original_title);
        }
        if (_0x194968.movie.original_name) {
          _0x29a354.push(_0x194968.movie.original_name);
        }
        var _0x36b640 = function _0x231bec(_0x2e87a) {
          if (_0x2e87a && _0x2e87a.length && _0x2e87a.forEach) {
            var _0x4ff3da = false;
            _0x2e87a.forEach(function (_0x49a9be) {
              _0x49a9be.ru_title = _0x49a9be.name && _0x49a9be.name.main;
              _0x49a9be.en_title = _0x49a9be.name && _0x49a9be.name.english;
              _0x49a9be.alt_title = _0x49a9be.name && _0x49a9be.name.alternative;
            });
            var _0x1864a4 = _0x2e87a;
            if (_0x1864a4.length) {
              if (_0x29a354.length) {
                var _0x8c87e8 = _0x1864a4.filter(function (_0x3ad867) {
                  return _0x21f55f.containsAnyTitle([_0x3ad867.en_title, _0x3ad867.ru_title, _0x3ad867.alt_title], _0x29a354);
                });
                if (_0x8c87e8.length) {
                  _0x1864a4 = _0x8c87e8;
                  _0x4ff3da = true;
                }
              }
              if (_0xbca313) {
                var _0x4d2275 = _0x1864a4.filter(function (_0x41b005) {
                  return _0x21f55f.containsAnyTitle([_0x41b005.ru_title, _0x41b005.en_title, _0x41b005.alt_title], [_0xbca313]);
                });
                if (_0x4d2275.length) {
                  _0x1864a4 = _0x4d2275;
                  _0x4ff3da = true;
                }
              }
              if (_0x1864a4.length > 0x1 && _0x455fcc) {
                var _0x546f4e = _0x1864a4.filter(function (_0x5ea18c) {
                  return _0x5ea18c.year == _0x455fcc;
                });
                if (!_0x546f4e.length) {
                  _0x546f4e = _0x1864a4.filter(function (_0x376a20) {
                    return _0x376a20.year && _0x376a20.year > _0x455fcc - 0x2 && _0x376a20.year < _0x455fcc + 0x2;
                  });
                }
                if (_0x546f4e.length) {
                  _0x1864a4 = _0x546f4e;
                }
              }
            }
            if (_0x1864a4.length == 0x1 && _0x4ff3da) {
              if (_0x455fcc && _0x1864a4[0x0].year) {
                _0x4ff3da = _0x1864a4[0x0].year > _0x455fcc - 0x2 && _0x1864a4[0x0].year < _0x455fcc + 0x2;
              }
              if (_0x4ff3da) {
                _0x4ff3da = false;
                if (_0x29a354.length) {
                  _0x4ff3da |= _0x21f55f.equalAnyTitle([_0x1864a4[0x0].en_title, _0x1864a4[0x0].ru_title, _0x1864a4[0x0].alt_title], _0x29a354);
                }
                if (_0xbca313) {
                  _0x4ff3da |= _0x21f55f.equalAnyTitle([_0x1864a4[0x0].ru_title, _0x1864a4[0x0].en_title, _0x1864a4[0x0].alt_title], [_0xbca313]);
                }
              }
            }
            if (_0x1864a4.length == 0x1 && _0x4ff3da) {
              _0x3ee0ad(_0x1864a4[0x0]);
            } else {
              _0x517116.wait_similars = true;
              _0x2e87a.forEach(function (_0x302e28) {
                _0x302e28.is_similars = true;
                if (!(_0x302e28.type && _0x302e28.type.value === 'MOVIE')) {
                  _0x302e28.episodes_count = _0x302e28.episodes_total;
                }
              });
              _0x21f55f.similars(_0x2e87a);
              _0x21f55f.loading(false);
            }
          } else {
            _0x21f55f.emptyForQuery(_0xbca313);
          }
        };
        var _0x54c65d = "https://api.anilibria.app/api/v1/app/search/releases";
        _0x54c65d = Lampa.Utils.addUrlComponent(_0x54c65d, "query=" + encodeURIComponent(_0xbca313));
        _0x3cbb14.clear();
        _0x3cbb14.timeout(15000);
        _0x3cbb14.silent(_0x21f55f.proxyLink(_0x54c65d, _0x9542dd), function (_0x4d31b1) {
          _0x36b640(_0x4d31b1);
        }, function (_0x526d6d, _0x1b411f) {
          _0x21f55f.empty(_0x3cbb14.errorDecode(_0x526d6d, _0x1b411f));
        });
      };
      this.extendChoice = function (_0x3c2b20) {
        Lampa.Arrays.extend(_0x4d3e3f, _0x3c2b20, true);
      };
      this.reset = function () {
        _0x21f55f.reset();
        _0x4d3e3f = {
          'season': 0x0,
          'voice': 0x0
        };
        _0x5d20f9();
        _0xd8d9bb(_0x2638fe());
        _0x21f55f.saveChoice(_0x4d3e3f);
      };
      this.filter = function (_0x5cdda2, _0x43bccf, _0x51a61b) {
        _0x4d3e3f[_0x43bccf.stype] = _0x51a61b.index;
        _0x21f55f.reset();
        _0x5d20f9();
        _0xd8d9bb(_0x2638fe());
        _0x21f55f.saveChoice(_0x4d3e3f);
      };
      this.destroy = function () {
        _0x3cbb14.clear();
        _0x31b729 = null;
      };
      function _0x3ee0ad(_0x1b7a74) {
        var _0x5500e4 = "https://api.anilibria.app/api/v1/anime/releases/" + _0x1b7a74.id;
        _0x3cbb14.clear();
        _0x3cbb14.timeout(15000);
        _0x3cbb14.silent(_0x21f55f.proxyLink(_0x5500e4, _0x9542dd), function (_0x820888) {
          if (_0x820888 && _0x820888.episodes && _0x820888.episodes.length) {
            _0x820888.ru_title = _0x820888.name && _0x820888.name.main;
            _0x820888.en_title = _0x820888.name && _0x820888.name.english;
            _0x820888.alt_title = _0x820888.name && _0x820888.name.alternative;
            _0x2f53f8(_0x820888);
          } else {
            _0x21f55f.emptyForQuery(_0xbca313);
          }
          if (_0x820888 && _0x820888.is_blocked_by_copyrights) {
            Lampa.Noty.show(Lampa.Lang.translate("online_mod_blockedlink_copyright"));
          } else {
            if (_0x820888 && _0x820888.is_blocked_by_geo) {
              Lampa.Noty.show(Lampa.Lang.translate('online_mod_blockedlink'));
            }
          }
        }, function (_0x16d65e, _0x2e3706) {
          _0x21f55f.empty(_0x3cbb14.errorDecode(_0x16d65e, _0x2e3706));
        });
      }
      function _0x2f53f8(_0x5e9e5a) {
        _0x21f55f.loading(false);
        _0x31b729 = _0x5e9e5a;
        _0x5d20f9();
        _0xd8d9bb(_0x2638fe());
      }
      function _0x5d20f9() {
        _0x4a77e0 = {
          'season': [],
          'voice': []
        };
        _0x21f55f.filter(_0x4a77e0, _0x4d3e3f);
      }
      function _0x39dda1(_0x2403d2) {
        var _0x2e081b = [];
        if (_0x2403d2.hls_1080) {
          _0x2e081b.push({
            'label': "1080p",
            'quality': 0x438,
            'file': _0x2403d2.hls_1080
          });
        }
        if (_0x2403d2.hls_720) {
          _0x2e081b.push({
            'label': "720p",
            'quality': 0x2d0,
            'file': _0x2403d2.hls_720
          });
        }
        if (_0x2403d2.hls_480) {
          _0x2e081b.push({
            'label': "480p",
            'quality': 0x1e0,
            'file': _0x2403d2.hls_480
          });
        }
        return _0x2e081b;
      }
      function _0x2638fe() {
        var _0x2565fb = [];
        if (_0x31b729.episodes && _0x31b729.episodes.length) {
          if (_0x31b729.type && _0x31b729.type.value === "MOVIE" && _0x31b729.episodes.length === 0x1) {
            _0x31b729.episodes.forEach(function (_0x1dcb16) {
              var _0x1101af = _0x39dda1(_0x1dcb16);
              _0x2565fb.push({
                'title': _0x31b729.ru_title || _0x31b729.en_title || _0xbca313,
                'orig_title': _0x31b729.en_title || _0x31b729.ru_title || _0xbca313,
                'quality': _0x1101af[0x0] ? _0x1101af[0x0].label : "360p ~ 1080p",
                'info': '',
                'media': _0x1101af
              });
            });
          } else {
            _0x31b729.episodes.forEach(function (_0x12b5f3) {
              var _0x1f769a = _0x39dda1(_0x12b5f3);
              _0x2565fb.push({
                'title': _0x21f55f.formatEpisodeTitle(null, _0x12b5f3.ordinal, _0x12b5f3.name),
                'orig_title': _0x31b729.en_title || _0x31b729.ru_title || _0xbca313,
                'quality': _0x1f769a[0x0] ? _0x1f769a[0x0].label : "360p ~ 1080p",
                'info': '',
                'season': 0x1,
                'episode': _0x12b5f3.ordinal,
                'media': _0x1f769a
              });
            });
          }
        }
        return _0x2565fb;
      }
      function _0x5988cd(_0x1a2e7a) {
        var _0x232acd = '';
        var _0x24fe8b = false;
        var _0xa29640 = _0x1a2e7a.media;
        if (_0xa29640 && _0xa29640.length) {
          _0x232acd = _0xa29640[0x0].file;
          _0x24fe8b = {};
          _0xa29640.forEach(function (_0x2fc1d4) {
            _0x24fe8b[_0x2fc1d4.label] = _0x2fc1d4.file;
          });
        }
        return {
          'file': _0x232acd,
          'quality': _0x24fe8b
        };
      }
      function _0xd8d9bb(_0x516506) {
        _0x21f55f.reset();
        var _0x46a682 = Lampa.Storage.cache('online_view', 0x1388, []);
        _0x516506.forEach(function (_0x3d3fef) {
          var _0xfb712b = Lampa.Utils.hash(_0x3d3fef.season ? [_0x3d3fef.season, _0x3d3fef.season > 0xa ? ':' : '', _0x3d3fef.episode, _0x194968.movie.original_title, _0x3d3fef.orig_title].join('') : _0x194968.movie.original_title + _0x3d3fef.orig_title);
          var _0x5b3ffa = Lampa.Timeline.view(_0xfb712b);
          var _0x13e357 = Lampa.Template.get("online_mod", _0x3d3fef);
          var _0x368376 = Lampa.Utils.hash(_0x3d3fef.season ? [_0x3d3fef.season, _0x3d3fef.season > 0xa ? ':' : '', _0x3d3fef.episode, _0x194968.movie.original_title, _0x3d3fef.orig_title].join('') : _0x194968.movie.original_title + _0x3d3fef.orig_title + _0x3d3fef.title);
          _0x3d3fef.timeline = _0x5b3ffa;
          _0x13e357.append(Lampa.Timeline.render(_0x5b3ffa));
          if (Lampa.Timeline.details) {
            _0x13e357.find('.online__quality').append(Lampa.Timeline.details(_0x5b3ffa, " / "));
          }
          if (_0x46a682.indexOf(_0x368376) !== -0x1) {
            _0x13e357.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x13e357.on('hover:enter', function () {
            if (_0x194968.movie.id) {
              Lampa.Favorite.add("history", _0x194968.movie, 0x64);
            }
            var _0x2e563b = _0x5988cd(_0x3d3fef);
            if (_0x2e563b.file) {
              var _0x4662d4 = [];
              var _0x522653 = {
                'url': _0x21f55f.getDefaultQuality(_0x2e563b.quality, _0x2e563b.file),
                'quality': _0x21f55f.renameQualityMap(_0x2e563b.quality),
                'timeline': _0x3d3fef.timeline,
                'title': _0x3d3fef.title
              };
              if (_0x3d3fef.season) {
                _0x516506.forEach(function (_0x2d0bc8) {
                  var _0x546d0e = _0x5988cd(_0x2d0bc8);
                  _0x4662d4.push({
                    'url': _0x21f55f.getDefaultQuality(_0x546d0e.quality, _0x546d0e.file),
                    'quality': _0x21f55f.renameQualityMap(_0x546d0e.quality),
                    'timeline': _0x2d0bc8.timeline,
                    'title': _0x2d0bc8.title
                  });
                });
              } else {
                _0x4662d4.push(_0x522653);
              }
              if (_0x4662d4.length > 0x1) {
                _0x522653.playlist = _0x4662d4;
              }
              Lampa.Player.play(_0x522653);
              Lampa.Player.playlist(_0x4662d4);
              if (_0x46a682.indexOf(_0x368376) == -0x1) {
                _0x46a682.push(_0x368376);
                _0x13e357.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set('online_view', _0x46a682);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0x21f55f.append(_0x13e357);
          _0x21f55f.contextmenu({
            'item': _0x13e357,
            'view': _0x5b3ffa,
            'viewed': _0x46a682,
            'hash_file': _0x368376,
            'file': function _0x1aa6be(_0x2fcb40) {
              _0x2fcb40(_0x5988cd(_0x3d3fef));
            }
          });
        });
        _0x21f55f.start(true);
      }
    }
    function _0x4039fd(_0x215306, _0x293ba9) {
      var _0x130597 = new Lampa.Reguest();
      var _0x1ae998 = {};
      var _0x5ab609 = _0x293ba9;
      var _0x2215e7 = '';
      var _0x1a70b4 = _0x215306.proxy("animelib");
      var _0x1d070e = _0x59443e.baseUserAgent();
      var _0x53ac56 = '';
      if (_0x1a70b4) {
        _0x53ac56 += "param/Origin=" + encodeURIComponent("https://anilib.me") + '/';
        _0x53ac56 += "param/Referer=" + encodeURIComponent("https://anilib.me/") + '/';
        _0x53ac56 += "param/User-Agent=" + encodeURIComponent(_0x1d070e) + '/';
      }
      var _0x2b0141 = [{
        'name': "Основной",
        'url': "https://video1.anilib.me/.%D0%B0s/"
      }, {
        'name': "Резервный 1",
        'url': "https://video2.anilib.me/.%D0%B0s/"
      }, {
        'name': "Резервный 2",
        'url': "https://video3.anilib.me/.%D0%B0s/"
      }];
      var _0x6bbf83 = {};
      var _0x2dd8f4 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': '',
        'server': 0x0
      };
      this.search = function (_0x3ebf5e, _0x304062, _0x4eaba6) {
        var _0x485506 = this;
        _0x5ab609 = _0x3ebf5e;
        _0x2215e7 = _0x5ab609.search || _0x5ab609.movie.title;
        if (this.wait_similars && _0x4eaba6 && _0x4eaba6[0x0].is_similars) {
          return _0x309145(_0x4eaba6[0x0]);
        }
        var _0x501d03 = _0x5ab609.search_date;
        var _0x43fc47 = [];
        if (_0x5ab609.movie.alternative_titles && _0x5ab609.movie.alternative_titles.results) {
          _0x43fc47 = _0x5ab609.movie.alternative_titles.results.map(function (_0x3e9c6e) {
            return _0x3e9c6e.title;
          });
        }
        if (_0x5ab609.movie.original_title) {
          _0x43fc47.push(_0x5ab609.movie.original_title);
        }
        if (_0x5ab609.movie.original_name) {
          _0x43fc47.push(_0x5ab609.movie.original_name);
        }
        var _0xb0ed09 = function _0x45b425(_0x3a0417) {
          if (_0x3a0417 && _0x3a0417.length && _0x3a0417.forEach) {
            var _0x14a8e5 = false;
            _0x3a0417.forEach(function (_0x5a85ca) {
              _0x5a85ca.orig_title = _0x5a85ca.name;
              _0x5a85ca.ru_title = _0x5a85ca.rus_name;
              _0x5a85ca.en_title = _0x5a85ca.eng_name;
              var _0x5aab21 = _0x5a85ca.releaseDate || "0000";
              _0x5a85ca.year = parseInt((_0x5aab21 + '').slice(0x0, 0x4));
            });
            var _0x2c0e2c = _0x3a0417;
            if (_0x2c0e2c.length) {
              if (_0x43fc47.length) {
                var _0x2631cf = _0x2c0e2c.filter(function (_0x3980f9) {
                  return _0x215306.containsAnyTitle([_0x3980f9.orig_title, _0x3980f9.en_title, _0x3980f9.ru_title], _0x43fc47);
                });
                if (_0x2631cf.length) {
                  _0x2c0e2c = _0x2631cf;
                  _0x14a8e5 = true;
                }
              }
              if (_0x2215e7) {
                var _0x362202 = _0x2c0e2c.filter(function (_0x2821dd) {
                  return _0x215306.containsAnyTitle([_0x2821dd.ru_title, _0x2821dd.en_title, _0x2821dd.orig_title], [_0x2215e7]);
                });
                if (_0x362202.length) {
                  _0x2c0e2c = _0x362202;
                  _0x14a8e5 = true;
                }
              }
              if (_0x2c0e2c.length > 0x1 && _0x501d03) {
                var _0x560c20 = _0x2c0e2c.filter(function (_0x4144ef) {
                  return _0x4144ef.year == _0x501d03;
                });
                if (!_0x560c20.length) {
                  _0x560c20 = _0x2c0e2c.filter(function (_0x18b68d) {
                    return _0x18b68d.year && _0x18b68d.year > _0x501d03 - 0x2 && _0x18b68d.year < _0x501d03 + 0x2;
                  });
                }
                if (_0x560c20.length) {
                  _0x2c0e2c = _0x560c20;
                }
              }
            }
            if (_0x2c0e2c.length == 0x1 && _0x14a8e5) {
              if (_0x501d03 && _0x2c0e2c[0x0].year) {
                _0x14a8e5 = _0x2c0e2c[0x0].year > _0x501d03 - 0x2 && _0x2c0e2c[0x0].year < _0x501d03 + 0x2;
              }
              if (_0x14a8e5) {
                _0x14a8e5 = false;
                if (_0x43fc47.length) {
                  _0x14a8e5 |= _0x215306.equalAnyTitle([_0x2c0e2c[0x0].orig_title, _0x2c0e2c[0x0].en_title, _0x2c0e2c[0x0].ru_title], _0x43fc47);
                }
                if (_0x2215e7) {
                  _0x14a8e5 |= _0x215306.equalAnyTitle([_0x2c0e2c[0x0].ru_title, _0x2c0e2c[0x0].en_title, _0x2c0e2c[0x0].orig_title], [_0x2215e7]);
                }
              }
            }
            if (_0x2c0e2c.length == 0x1 && _0x14a8e5) {
              _0x309145(_0x2c0e2c[0x0]);
            } else {
              _0x485506.wait_similars = true;
              _0x3a0417.forEach(function (_0x2ed6e0) {
                _0x2ed6e0.is_similars = true;
              });
              _0x215306.similars(_0x3a0417);
              _0x215306.loading(false);
            }
          } else {
            _0x215306.emptyForQuery(_0x2215e7);
          }
        };
        var _0xac3c60 = "https://api2.mangalib.me/api/anime?fields[]=rate_avg&fields[]=rate&fields[]=releaseDate";
        _0xac3c60 = Lampa.Utils.addUrlComponent(_0xac3c60, 'q=' + encodeURIComponent(_0x2215e7));
        _0x130597.clear();
        _0x130597.timeout(15000);
        _0x130597.silent(_0x215306.proxyLink(_0xac3c60, _0x1a70b4, _0x53ac56), function (_0x15eb01) {
          _0xb0ed09(_0x15eb01 && _0x15eb01.data);
        }, function (_0x37f284, _0x307d5c) {
          _0x215306.empty(_0x130597.errorDecode(_0x37f284, _0x307d5c));
        });
      };
      this.extendChoice = function (_0x268725) {
        Lampa.Arrays.extend(_0x2dd8f4, _0x268725, true);
      };
      this.reset = function () {
        _0x215306.reset();
        _0x2dd8f4 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': '',
          'server': 0x0
        };
        _0x31b44c();
        _0x50deeb(_0x46612e());
        _0x215306.saveChoice(_0x2dd8f4);
      };
      this.filter = function (_0x58c85e, _0x569c46, _0x4a581b) {
        _0x2dd8f4[_0x569c46.stype] = _0x4a581b.index;
        if (_0x569c46.stype == "voice") {
          _0x2dd8f4.voice_name = _0x6bbf83.voice[_0x4a581b.index];
        }
        _0x215306.reset();
        _0x31b44c();
        _0x50deeb(_0x46612e());
        _0x215306.saveChoice(_0x2dd8f4);
      };
      this.destroy = function () {
        _0x130597.clear();
        _0x1ae998 = null;
      };
      function _0x309145(_0x16cbe6) {
        var _0x1f5639 = "https://api2.mangalib.me/api/episodes";
        _0x1f5639 = Lampa.Utils.addUrlComponent(_0x1f5639, "anime_id=" + encodeURIComponent(_0x16cbe6.slug_url));
        _0x130597.clear();
        _0x130597.timeout(15000);
        _0x130597.silent(_0x215306.proxyLink(_0x1f5639, _0x1a70b4, _0x53ac56), function (_0x429c11) {
          if (_0x429c11 && _0x429c11.data && _0x429c11.data.length) {
            _0x16cbe6.episodes = _0x429c11.data;
            _0x8a32d4(_0x16cbe6.episodes[0x0], function () {
              if (_0x16cbe6.episodes[0x0].players && _0x16cbe6.episodes[0x0].players.length) {
                _0x483c8d(_0x16cbe6);
              } else {
                _0x215306.emptyForQuery(_0x2215e7);
              }
            });
          } else {
            _0x215306.emptyForQuery(_0x2215e7);
          }
        }, function (_0x47d17c, _0x574f1d) {
          _0x215306.empty(_0x130597.errorDecode(_0x47d17c, _0x574f1d));
        });
      }
      function _0x8a32d4(_0x35a3d3, _0x466f52) {
        if (_0x35a3d3.players) {
          _0x466f52();
          return;
        }
        var _0x492e64 = "https://api2.mangalib.me/api/episodes/" + _0x35a3d3.id;
        _0x130597.clear();
        _0x130597.timeout(15000);
        _0x130597.silent(_0x215306.proxyLink(_0x492e64, _0x1a70b4, _0x53ac56), function (_0x3b270b) {
          if (_0x3b270b && _0x3b270b.data && _0x3b270b.data.players) {
            _0x35a3d3.players = _0x3b270b.data.players.filter(function (_0x16b56e) {
              return _0x16b56e.player === "Animelib";
            });
          }
          _0x466f52();
        }, function (_0x2144ef, _0x4f0d96) {
          _0x466f52();
        });
      }
      function _0x483c8d(_0x4cb2d) {
        _0x215306.loading(false);
        _0x1ae998 = _0x4cb2d;
        _0x1ae998.is_film = _0x1ae998.episodes && _0x1ae998.episodes.length === 0x1 && _0x1ae998.type && ['Фильм', "Неизвестный"].indexOf(_0x1ae998.type.label) !== -0x1;
        _0x31b44c();
        _0x50deeb(_0x46612e());
      }
      function _0x31b44c() {
        _0x6bbf83 = {
          'season': [],
          'voice': [],
          'voice_info': [],
          'server': _0x2b0141.map(function (_0x1c9954) {
            return _0x1c9954.name;
          })
        };
        if (!_0x1ae998.is_film) {
          _0x1ae998.episodes.forEach(function (_0x38b0d2) {
            if (_0x38b0d2.players) {
              _0x38b0d2.players.forEach(function (_0x4b32a6) {
                if (_0x4b32a6.team && !_0x6bbf83.voice_info.some(function (_0x192839) {
                  return _0x192839.id == _0x4b32a6.team.id;
                })) {
                  _0x6bbf83.voice.push(_0x4b32a6.team.name);
                  _0x6bbf83.voice_info.push(_0x4b32a6.team);
                }
              });
            }
          });
        }
        if (!_0x6bbf83.voice[_0x2dd8f4.voice]) {
          _0x2dd8f4.voice = 0x0;
        }
        if (_0x2dd8f4.voice_name) {
          var _0x848f68 = _0x6bbf83.voice.indexOf(_0x2dd8f4.voice_name);
          if (_0x848f68 == -0x1) {
            _0x2dd8f4.voice = 0x0;
          } else if (_0x848f68 !== _0x2dd8f4.voice) {
            _0x2dd8f4.voice = _0x848f68;
          }
        }
        _0x215306.filter(_0x6bbf83, _0x2dd8f4);
      }
      function _0x13b57f(_0x386ae2) {
        try {
          var _0x1240bd = [];
          if (_0x386ae2 && _0x386ae2.video && _0x386ae2.video.quality) {
            var _0x10de3e = _0x2b0141[_0x2dd8f4.server] || _0x2b0141[0x0];
            _0x1240bd = _0x386ae2.video.quality.map(function (_0x472548) {
              return {
                'label': _0x472548.quality ? _0x472548.quality + 'p' : "360p ~ 1080p",
                'quality': _0x472548.quality,
                'file': _0x472548.href ? _0x215306.proxyLink(_0x10de3e.url + _0x472548.href, _0x1a70b4, _0x53ac56) : ''
              };
            });
            _0x1240bd.sort(function (_0x80b84f, _0x5630af) {
              if (_0x5630af.quality > _0x80b84f.quality) {
                return 0x1;
              }
              if (_0x5630af.quality < _0x80b84f.quality) {
                return -0x1;
              }
              if (_0x5630af.label > _0x80b84f.label) {
                return 0x1;
              }
              if (_0x5630af.label < _0x80b84f.label) {
                return -0x1;
              }
              return 0x0;
            });
          }
          return _0x1240bd;
        } catch (_0x500538) {}
        return [];
      }
      function _0x4f9f3c(_0x562e0b) {
        try {
          var _0x6c3524 = [];
          if (_0x562e0b && _0x562e0b.subtitles) {
            _0x6c3524 = _0x562e0b.subtitles.map(function (_0x53bb55) {
              return {
                'label': _0x53bb55.format || _0x53bb55.filename || '',
                'url': _0x215306.processSubs(_0x53bb55.src || '')
              };
            });
          }
          return _0x6c3524.length ? _0x6c3524 : false;
        } catch (_0x178924) {}
        return false;
      }
      function _0x46612e() {
        var _0x2cb094 = [];
        var _0x1cb086 = _0x2b0141[_0x2dd8f4.server] || _0x2b0141[0x0];
        if (_0x1ae998.episodes) {
          if (_0x1ae998.is_film) {
            _0x1ae998.episodes.forEach(function (_0x1cf00e) {
              if (_0x1cf00e.players) {
                _0x1cf00e.players.forEach(function (_0x3f86fd) {
                  var _0x130bf5 = _0x3f86fd && _0x3f86fd.team && _0x3f86fd.team.name || '';
                  var _0x571567 = _0x3f86fd && _0x3f86fd.team && _0x3f86fd.team.id || null;
                  var _0x7e3ae4 = _0x13b57f(_0x3f86fd);
                  _0x2cb094.push({
                    'title': _0x130bf5 || _0x1ae998.ru_title || _0x1ae998.en_title || _0x1ae998.orig_title || _0x2215e7,
                    'orig_title': _0x1ae998.orig_title || _0x1ae998.en_title || _0x1ae998.ru_title || _0x2215e7,
                    'quality': _0x7e3ae4[0x0] ? _0x7e3ae4[0x0].label : "???",
                    'info': " / " + _0x1cb086.name,
                    'media': {
                      'episode': _0x1cf00e,
                      'player': _0x3f86fd,
                      'voice_id': _0x571567
                    }
                  });
                });
              }
            });
          } else {
            var _0x5e7529 = _0x6bbf83.voice_info[_0x2dd8f4.voice] && _0x6bbf83.voice_info[_0x2dd8f4.voice].id;
            _0x1ae998.episodes.forEach(function (_0x2933c5) {
              var _0xc08c06 = null;
              if (_0x2933c5.players && _0x2933c5.players.length) {
                _0xc08c06 = _0x2933c5.players.filter(function (_0x560142) {
                  return _0x560142.team && _0x560142.team.id == _0x5e7529;
                })[0x0] || _0x2933c5.players[0x0];
              }
              var _0xc3dc27 = _0xc08c06 && _0xc08c06.team && _0xc08c06.team.name || "???";
              var _0x3db002 = _0x13b57f(_0xc08c06);
              _0x2cb094.push({
                'title': _0x215306.formatEpisodeTitle(null, _0x2933c5.item_number, _0x2933c5.name),
                'orig_title': _0x1ae998.orig_title || _0x1ae998.en_title || _0x1ae998.ru_title || _0x2215e7,
                'quality': _0x3db002[0x0] ? _0x3db002[0x0].label : "???",
                'info': " / " + _0xc3dc27 + " / " + _0x1cb086.name,
                'season': 0x1,
                'episode': _0x2933c5.item_number,
                'media': {
                  'episode': _0x2933c5,
                  'player': _0xc08c06,
                  'voice_id': _0x5e7529
                }
              });
            });
          }
        }
        return _0x2cb094;
      }
      function _0x40389f(_0x57c229, _0xe4d60f, _0x545543) {
        if (_0x57c229.stream) {
          return _0xe4d60f(_0x57c229);
        }
        var _0x1131bc = _0x57c229.media.episode;
        var _0xb4f8ad = _0x57c229.media.player;
        _0x8a32d4(_0x1131bc, function () {
          var _0x343616 = _0x57c229.media.player;
          if (!_0x343616) {
            var _0x2e8371 = _0x57c229.media.voice_id;
            if (_0x1131bc.players && _0x1131bc.players.length) {
              _0x343616 = _0x1131bc.players.filter(function (_0x4c974a) {
                return _0x4c974a.team && _0x4c974a.team.id == _0x2e8371;
              })[0x0] || _0x1131bc.players[0x0];
            }
          }
          var _0x15eb80 = _0x13b57f(_0x343616);
          var _0x1f72a2 = '';
          var _0x2e5b28 = false;
          if (_0x15eb80 && _0x15eb80.length) {
            _0x1f72a2 = _0x15eb80[0x0].file;
            _0x2e5b28 = {};
            _0x15eb80.forEach(function (_0x297af3) {
              _0x2e5b28[_0x297af3.label] = _0x297af3.file;
            });
          }
          if (!_0xb4f8ad && _0x343616) {
            var _0x5c3e4a = _0x343616 && _0x343616.team && _0x343616.team.name || "???";
            var _0x296d02 = _0x2b0141[_0x2dd8f4.server] || _0x2b0141[0x0];
            _0x57c229.quality = _0x15eb80[0x0] ? _0x15eb80[0x0].label : '???';
            _0x57c229.info = " / " + _0x5c3e4a + " / " + _0x296d02.name;
            var _0x4a9c55 = _0x57c229.template && _0x57c229.template.find(".online__quality");
            if (_0x4a9c55 && _0x4a9c55.length) {
              var _0x244c33 = Lampa.Template.get('online_mod', _0x57c229).find(".online__quality");
              if (_0x244c33 && _0x244c33.length) {
                if (Lampa.Timeline.details) {
                  _0x244c33.append(Lampa.Timeline.details(_0x57c229.timeline, " / "));
                }
                _0x4a9c55[0x0].innerHTML = _0x244c33[0x0].innerHTML;
              }
            }
          }
          if (_0x1f72a2) {
            _0x57c229.stream = _0x1f72a2;
            _0x57c229.qualitys = _0x2e5b28;
            _0x57c229.subtitles = _0x4f9f3c(_0x343616);
            _0xe4d60f(_0x57c229);
          } else {
            _0x545543();
          }
        });
      }
      function _0x50deeb(_0x589dd6) {
        _0x215306.reset();
        var _0x566822 = Lampa.Storage.cache("online_view", 0x1388, []);
        var _0x403b55 = _0x215306.getLastEpisode(_0x589dd6);
        _0x589dd6.forEach(function (_0x26d967) {
          if (_0x26d967.season) {
            _0x26d967.translate_episode_end = _0x403b55;
            _0x26d967.translate_voice = _0x6bbf83.voice[_0x2dd8f4.voice];
          }
          var _0x361c86 = Lampa.Utils.hash(_0x26d967.season ? [_0x26d967.season, _0x26d967.season > 0xa ? ':' : '', _0x26d967.episode, _0x5ab609.movie.original_title, _0x26d967.orig_title].join('') : _0x5ab609.movie.original_title + _0x26d967.orig_title);
          var _0x262f22 = Lampa.Timeline.view(_0x361c86);
          var _0x15787e = Lampa.Template.get("online_mod", _0x26d967);
          var _0x53365c = Lampa.Utils.hash(_0x26d967.season ? [_0x26d967.season, _0x26d967.season > 0xa ? ':' : '', _0x26d967.episode, _0x5ab609.movie.original_title, _0x26d967.orig_title, _0x6bbf83.voice[_0x2dd8f4.voice]].join('') : _0x5ab609.movie.original_title + _0x26d967.orig_title + _0x26d967.title);
          _0x26d967.timeline = _0x262f22;
          _0x26d967.template = _0x15787e;
          _0x15787e.append(Lampa.Timeline.render(_0x262f22));
          if (Lampa.Timeline.details) {
            _0x15787e.find(".online__quality").append(Lampa.Timeline.details(_0x262f22, " / "));
          }
          if (_0x566822.indexOf(_0x53365c) !== -0x1) {
            _0x15787e.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
          }
          _0x15787e.on("hover:enter", function () {
            if (_0x26d967.loading) {
              return;
            }
            if (_0x5ab609.movie.id) {
              Lampa.Favorite.add("history", _0x5ab609.movie, 0x64);
            }
            _0x26d967.loading = true;
            _0x40389f(_0x26d967, function (_0x575b69) {
              _0x575b69.loading = false;
              var _0x143e69 = {
                'url': _0x215306.getDefaultQuality(_0x575b69.qualitys, _0x575b69.stream),
                'quality': _0x215306.renameQualityMap(_0x575b69.qualitys),
                'subtitles': _0x575b69.subtitles,
                'timeline': _0x575b69.timeline,
                'title': _0x575b69.season ? _0x575b69.title : _0x2215e7 + (_0x575b69.title == _0x2215e7 ? '' : " / " + _0x575b69.title)
              };
              Lampa.Player.play(_0x143e69);
              if (_0x575b69.season && Lampa.Platform.version) {
                var _0x452697 = [];
                _0x589dd6.forEach(function (_0x2dbd6b) {
                  if (_0x2dbd6b == _0x575b69) {
                    _0x452697.push(_0x143e69);
                  } else {
                    var _0x317b4b = {
                      'url': function _0x3a3a7f(_0x252f73) {
                        _0x40389f(_0x2dbd6b, function (_0x4919a9) {
                          _0x317b4b.url = _0x215306.getDefaultQuality(_0x4919a9.qualitys, _0x4919a9.stream);
                          _0x317b4b.quality = _0x215306.renameQualityMap(_0x4919a9.qualitys);
                          _0x317b4b.subtitles = _0x4919a9.subtitles;
                          _0x252f73();
                        }, function () {
                          _0x317b4b.url = '';
                          _0x252f73();
                        });
                      },
                      'timeline': _0x2dbd6b.timeline,
                      'title': _0x2dbd6b.title
                    };
                    _0x452697.push(_0x317b4b);
                  }
                });
                Lampa.Player.playlist(_0x452697);
              } else {
                Lampa.Player.playlist([_0x143e69]);
              }
              if (_0x566822.indexOf(_0x53365c) == -0x1) {
                _0x566822.push(_0x53365c);
                _0x15787e.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
                Lampa.Storage.set("online_view", _0x566822);
              }
            }, function () {
              _0x26d967.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0x215306.append(_0x15787e);
          _0x215306.contextmenu({
            'item': _0x15787e,
            'view': _0x262f22,
            'viewed': _0x566822,
            'hash_file': _0x53365c,
            'element': _0x26d967,
            'file': function _0x488575(_0x31404c) {
              _0x40389f(_0x26d967, function (_0x3b2258) {
                _0x31404c({
                  'file': _0x3b2258.stream,
                  'quality': _0x3b2258.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0x215306.start(true);
      }
    }
    function _0x50316d(_0xcda7c9, _0x29db34) {
      var _0x4fedc3 = new Lampa.Reguest();
      var _0x42b818 = {};
      var _0x7275bd = _0x29db34;
      var _0x28bbaa = '';
      var _0x1c8933 = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x4f4f29 = _0xcda7c9.proxy("kodik");
      var _0x36dcba = _0x59443e.decodeSecret([0x7c, 0x7d, 0x1, 0x56, 0x5a, 0x40, 0xc, 0x7b, 0x6c, 0x3b, 0x7a, 0x7d, 0x52, 0x3, 0x5a, 0x17, 0x5a, 0x7a, 0x3c, 0x6e, 0x2b, 0x7b, 0x54, 0x3, 0x5b, 0x47, 0x58, 0x70, 0x6f, 0x39, 0x7a, 0x79], atob("ZmluZCB5b3VyIG93biB0b2tlbg=="));
      var _0xaa4d59 = '';
      var _0x1b033b = '';
      var _0x141c49 = {};
      var _0x3dd544 = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      function _0x2814b3(_0xa47856, _0x113de4, _0x469e3e) {
        _0x4fedc3.clear();
        _0x4fedc3.timeout(0x2710);
        _0x4fedc3.native(_0xcda7c9.proxyLink('https://kodik-api.com/search' + _0xa47856, _0x4f4f29), function (_0x350fc5) {
          if (_0x113de4) {
            _0x113de4(_0x350fc5);
          }
        }, function (_0x4ff7aa, _0x29abf6) {
          if (_0x469e3e) {
            _0x469e3e(_0x4fedc3.errorDecode(_0x4ff7aa, _0x29abf6));
          }
        });
      }
      this.search = function (_0x1160f5, _0x1389b5, _0xa2061e) {
        var _0x3d004d = this;
        _0x7275bd = _0x1160f5;
        _0x28bbaa = _0x7275bd.search || _0x7275bd.movie.title;
        if (this.wait_similars && _0xa2061e && _0xa2061e[0x0].is_similars) {
          return _0x3c82d4(_0xa2061e[0x0]);
        }
        var _0x444b90 = _0x7275bd.search_date;
        var _0x4e6c91 = [];
        if (_0x7275bd.movie.alternative_titles && _0x7275bd.movie.alternative_titles.results) {
          _0x4e6c91 = _0x7275bd.movie.alternative_titles.results.map(function (_0x15eca6) {
            return _0x15eca6.title;
          });
        }
        if (_0x7275bd.movie.original_title) {
          _0x4e6c91.push(_0x7275bd.movie.original_title);
        }
        if (_0x7275bd.movie.original_name) {
          _0x4e6c91.push(_0x7275bd.movie.original_name);
        }
        var _0x2da0df = function _0x156351(_0x7759a6, _0x770b08) {
          if (_0x7759a6 && _0x7759a6.length && _0x7759a6.forEach) {
            var _0x2fa75a = false;
            var _0x2e67a2 = false;
            var _0x2ca257 = {};
            _0x7759a6.forEach(function (_0x26b728) {
              var _0x13ba5a;
              if (_0x26b728.shikimori_id) {
                _0x13ba5a = 'sm_' + _0x26b728.shikimori_id;
              } else {
                if (_0x26b728.worldart_link) {
                  _0x13ba5a = 'wa_' + _0x26b728.worldart_link;
                } else {
                  if (_0x26b728.kinopoisk_id) {
                    _0x13ba5a = "kp_" + _0x26b728.kinopoisk_id;
                  } else {
                    if (_0x26b728.imdb_id) {
                      _0x13ba5a = "im_" + _0x26b728.imdb_id;
                    } else {
                      if (_0x26b728.id) {
                        _0x13ba5a = 'k_' + _0x26b728.id;
                      } else {
                        _0x13ba5a = '';
                      }
                    }
                  }
                }
              }
              if (!_0x13ba5a) {
                return;
              }
              _0x13ba5a += _0x26b728.title;
              var _0x292a2e = _0x2ca257[_0x13ba5a] || [];
              _0x292a2e.push(_0x26b728);
              _0x2ca257[_0x13ba5a] = _0x292a2e;
            });
            var _0x24b406 = [];
            for (var _0x153a23 in _0x2ca257) {
              var _0x155f95 = _0x2ca257[_0x153a23];
              _0x24b406.push({
                'title': _0x155f95[0x0].title,
                'orig_title': _0x155f95[0x0].title_orig,
                'other_title': _0x155f95[0x0].other_title,
                'year': _0x155f95[0x0].year,
                'kinopoisk_id': _0x155f95[0x0].kinopoisk_id,
                'imdb_id': _0x155f95[0x0].imdb_id,
                'episodes_count': _0x155f95[0x0].episodes_count,
                'media': _0x155f95[0x0]
              });
            }
            if (!_0x7275bd.clarification && (_0x7275bd.movie.imdb_id || +_0x1389b5)) {
              var _0x117372 = _0x7275bd.movie.imdb_id;
              var _0x2408be = +_0x1389b5;
              var _0x892d18 = _0x24b406.filter(function (_0x2830d6) {
                return _0x117372 && _0x2830d6.imdb_id == _0x117372 || _0x2408be && _0x2830d6.kinopoisk_id == _0x2408be;
              });
              if (_0x892d18.length) {
                _0x24b406 = _0x892d18;
                _0x2fa75a = true;
                _0x2e67a2 = true;
              }
            }
            var _0x4932f8 = _0x24b406;
            if (_0x4932f8.length) {
              if (_0x4e6c91.length) {
                var _0x3ddf32 = _0x4932f8.filter(function (_0x466215) {
                  return _0xcda7c9.containsAnyTitle([_0x466215.orig_title, _0x466215.title, _0x466215.other_title], _0x4e6c91);
                });
                if (_0x3ddf32.length) {
                  _0x4932f8 = _0x3ddf32;
                  _0x2fa75a = true;
                }
              }
              if (_0x28bbaa) {
                var _0x4aedc1 = _0x4932f8.filter(function (_0x1100d3) {
                  return _0xcda7c9.containsAnyTitle([_0x1100d3.title, _0x1100d3.orig_title, _0x1100d3.other_title], [_0x28bbaa]);
                });
                if (_0x4aedc1.length) {
                  _0x4932f8 = _0x4aedc1;
                  _0x2fa75a = true;
                }
              }
              if (!_0x2fa75a) {
                _0x4932f8 = [];
              }
              _0x24b406 = _0x4932f8;
              if (_0x4932f8.length > 0x1 && _0x444b90) {
                var _0x3921d1 = _0x4932f8.filter(function (_0x3ff350) {
                  return _0x3ff350.year == _0x444b90;
                });
                if (!_0x3921d1.length) {
                  _0x3921d1 = _0x4932f8.filter(function (_0x80e575) {
                    return _0x80e575.year && _0x80e575.year > _0x444b90 - 0x2 && _0x80e575.year < _0x444b90 + 0x2;
                  });
                }
                if (_0x3921d1.length) {
                  _0x4932f8 = _0x3921d1;
                }
              }
            }
            if (_0x4932f8.length == 0x1 && _0x2fa75a && !_0x2e67a2) {
              if (_0x444b90 && _0x4932f8[0x0].year) {
                _0x2fa75a = _0x4932f8[0x0].year > _0x444b90 - 0x2 && _0x4932f8[0x0].year < _0x444b90 + 0x2;
              }
              if (_0x2fa75a) {
                _0x2fa75a = false;
                if (_0x4e6c91.length) {
                  _0x2fa75a |= _0xcda7c9.equalAnyTitle([_0x4932f8[0x0].orig_title, _0x4932f8[0x0].title, _0x4932f8[0x0].other_title], _0x4e6c91);
                }
                if (_0x28bbaa) {
                  _0x2fa75a |= _0xcda7c9.equalAnyTitle([_0x4932f8[0x0].title, _0x4932f8[0x0].orig_title, _0x4932f8[0x0].other_title], [_0x28bbaa]);
                }
              }
            }
            if (_0x4932f8.length == 0x1 && _0x2fa75a) {
              _0x3c82d4(_0x4932f8[0x0]);
            } else {
              if (_0x24b406.length) {
                _0x3d004d.wait_similars = true;
                _0x24b406.forEach(function (_0x32471f) {
                  _0x32471f.is_similars = true;
                });
                _0xcda7c9.similars(_0x24b406);
                _0xcda7c9.loading(false);
              } else {
                _0x770b08();
              }
            }
          } else {
            _0x770b08();
          }
        };
        var _0x4966f2 = function _0x37420c(_0x3d1e27, _0x47d538) {
          var _0x48cff6 = Lampa.Utils.addUrlComponent('', "token=" + _0x36dcba);
          _0x48cff6 = Lampa.Utils.addUrlComponent(_0x48cff6, "limit=100");
          _0x48cff6 = Lampa.Utils.addUrlComponent(_0x48cff6, "translation_type=voice");
          _0x48cff6 = Lampa.Utils.addUrlComponent(_0x48cff6, "title=" + encodeURIComponent(_0x28bbaa));
          _0x2814b3(_0x48cff6, _0x3d1e27, _0x47d538);
        };
        var _0x1910e1 = function _0x39c8bd(_0x325d27, _0x3be9e0) {
          var _0x171682 = Lampa.Utils.addUrlComponent('', "token=" + _0x36dcba);
          _0x171682 = Lampa.Utils.addUrlComponent(_0x171682, "limit=100");
          _0x171682 = Lampa.Utils.addUrlComponent(_0x171682, 'translation_type=voice');
          var _0x1fc62f = _0xcda7c9.cleanTitle(_0x28bbaa || '').replace(/[\s—\-+]+/g, " ").trim().split(" ");
          _0x1fc62f.sort(function (_0x51a997, _0xd19e0a) {
            return _0xd19e0a.length - _0x51a997.length;
          });
          var _0x58665d = _0x1fc62f.splice(0x0, 0x1).join(" ");
          if (_0x58665d !== _0x28bbaa) {
            _0x171682 = Lampa.Utils.addUrlComponent(_0x171682, "title=" + encodeURIComponent(_0x58665d));
            _0x2814b3(_0x171682, _0x325d27, _0x3be9e0);
          } else {
            _0x325d27({});
          }
        };
        var _0x53dd67 = function _0x960f06(_0x214427, _0x5d23f6) {
          if (!_0x7275bd.clarification && (_0x7275bd.movie.imdb_id || +_0x1389b5)) {
            var _0xd45775 = Lampa.Utils.addUrlComponent('', 'token=' + _0x36dcba);
            _0xd45775 = Lampa.Utils.addUrlComponent(_0xd45775, "limit=100");
            var _0x3561ba = +_0x1389b5 ? Lampa.Utils.addUrlComponent(_0xd45775, "kinopoisk_id=" + encodeURIComponent(+_0x1389b5)) : '';
            var _0x3dd789 = _0x7275bd.movie.imdb_id ? Lampa.Utils.addUrlComponent(_0xd45775, "imdb_id=" + encodeURIComponent(_0x7275bd.movie.imdb_id)) : '';
            _0x2814b3(_0x3561ba || _0x3dd789, function (_0x3d0da2) {
              if (_0x3d0da2.results && _0x3d0da2.results.length) {
                _0x214427(_0x3d0da2);
              } else {
                if (_0x3561ba && _0x3dd789) {
                  _0x2814b3(_0x3dd789, _0x214427, _0x5d23f6);
                } else {
                  _0x214427({});
                }
              }
            }, _0x5d23f6);
          } else {
            _0x214427({});
          }
        };
        var _0x36712f = _0xcda7c9.empty.bind(_0xcda7c9);
        _0x53dd67(function (_0x2e6d40) {
          _0x2da0df(_0x2e6d40 && _0x2e6d40.results, function () {
            _0x1910e1(function (_0xae1335) {
              _0x2da0df(_0xae1335 && _0xae1335.results, function () {
                _0x4966f2(function (_0x50b2cd) {
                  _0x2da0df(_0x50b2cd && _0x50b2cd.results, function () {
                    _0xcda7c9.emptyForQuery(_0x28bbaa);
                  });
                }, _0x36712f);
              });
            }, _0x36712f);
          });
        }, _0x36712f);
      };
      this.extendChoice = function (_0x2014ab) {
        Lampa.Arrays.extend(_0x3dd544, _0x2014ab, true);
      };
      this.reset = function () {
        _0xcda7c9.reset();
        _0x3dd544 = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x2859e2();
        _0x147282(_0x3d9d94());
        _0xcda7c9.saveChoice(_0x3dd544);
      };
      this.filter = function (_0x1e030e, _0x70611d, _0x2e3223) {
        _0x3dd544[_0x70611d.stype] = _0x2e3223.index;
        if (_0x70611d.stype == 'voice') {
          _0x3dd544.voice_name = _0x141c49.voice[_0x2e3223.index];
        }
        _0xcda7c9.reset();
        _0x2859e2();
        _0x147282(_0x3d9d94());
        _0xcda7c9.saveChoice(_0x3dd544);
      };
      this.destroy = function () {
        _0x4fedc3.clear();
        _0x42b818 = null;
      };
      function _0x3c82d4(_0x5b33a7) {
        var _0x4431c0 = _0x5b33a7.media || {};
        var _0x57d18a = Lampa.Utils.addUrlComponent('', "token=" + _0x36dcba);
        _0x57d18a = Lampa.Utils.addUrlComponent(_0x57d18a, "limit=100");
        _0x57d18a = Lampa.Utils.addUrlComponent(_0x57d18a, "with_episodes=true");
        if (_0x4431c0.shikimori_id) {
          _0x57d18a = Lampa.Utils.addUrlComponent(_0x57d18a, "shikimori_id=" + encodeURIComponent(_0x4431c0.shikimori_id));
        } else {
          if (_0x4431c0.worldart_link) {
            _0x57d18a = Lampa.Utils.addUrlComponent(_0x57d18a, 'worldart_link=' + encodeURIComponent(_0x4431c0.worldart_link));
          } else {
            if (_0x4431c0.kinopoisk_id) {
              _0x57d18a = Lampa.Utils.addUrlComponent(_0x57d18a, 'kinopoisk_id=' + encodeURIComponent(_0x4431c0.kinopoisk_id));
            } else {
              if (_0x4431c0.imdb_id) {
                _0x57d18a = Lampa.Utils.addUrlComponent(_0x57d18a, 'imdb_id=' + encodeURIComponent(_0x4431c0.imdb_id));
              } else {
                if (_0x4431c0.id) {
                  _0x57d18a = Lampa.Utils.addUrlComponent(_0x57d18a, "id=" + encodeURIComponent(_0x4431c0.id));
                } else {
                  _0xcda7c9.emptyForQuery(_0x28bbaa);
                  return;
                }
              }
            }
          }
        }
        var _0x553393 = _0xcda7c9.empty.bind(_0xcda7c9);
        _0x2814b3(_0x57d18a, function (_0x2ee437) {
          _0xcda7c9.loading(false);
          _0x4a9bfe(_0x2ee437 && _0x2ee437.results ? _0x2ee437.results.filter(function (_0x2561a3) {
            return _0x2561a3.title === _0x4431c0.title;
          }) : []);
          _0x2859e2();
          _0x147282(_0x3d9d94());
        }, _0x553393);
      }
      function _0x4a9bfe(_0x292be6) {
        var _0x52ad0e = [];
        _0x292be6.forEach(function (_0x515df8) {
          if (_0x515df8.seasons) {
            var _0x12adcc = function _0x3270ab(_0x422464) {
              var _0x1237c8 = _0x515df8.seasons[_0x422464];
              if (_0x1237c8) {
                if (!_0x52ad0e.some(function (_0x39eb1c) {
                  return _0x39eb1c.id === _0x422464;
                })) {
                  _0x52ad0e.push({
                    'id': _0x422464,
                    'title': Lampa.Lang.translate("torrent_serial_season") + " " + _0x422464 + (_0x1237c8.title ? " - " + _0x1237c8.title : '')
                  });
                }
              }
            };
            for (var _0x782224 in _0x515df8.seasons) {
              _0x12adcc(_0x782224);
            }
          }
        });
        _0x52ad0e.sort(function (_0x29e99a, _0x10ee76) {
          return _0x29e99a.id - _0x10ee76.id;
        });
        _0x42b818 = {
          'items': _0x292be6,
          'seasons': _0x52ad0e
        };
      }
      function _0x2859e2() {
        _0x141c49 = {
          'season': _0x42b818.seasons.map(function (_0x534f8a) {
            return _0x534f8a.title;
          }),
          'voice': [],
          'voice_info': []
        };
        if (!_0x141c49.season[_0x3dd544.season]) {
          _0x3dd544.season = 0x0;
        }
        if (_0x42b818.seasons.length) {
          var _0x516b20 = _0x42b818.seasons[_0x3dd544.season] && _0x42b818.seasons[_0x3dd544.season].id;
          _0x42b818.items.forEach(function (_0x156ee6) {
            if (!(_0x156ee6.seasons && _0x156ee6.seasons[_0x516b20])) {
              return;
            }
            if (_0x156ee6.translation && !_0x141c49.voice_info.some(function (_0xa476b) {
              return _0xa476b.id == _0x156ee6.translation.id;
            })) {
              _0x141c49.voice.push(_0x156ee6.translation.title);
              _0x141c49.voice_info.push(_0x156ee6.translation);
            }
          });
        }
        if (!_0x141c49.voice[_0x3dd544.voice]) {
          _0x3dd544.voice = 0x0;
        }
        if (_0x3dd544.voice_name) {
          var _0x212695 = _0x141c49.voice.indexOf(_0x3dd544.voice_name);
          if (_0x212695 == -0x1) {
            _0x3dd544.voice = 0x0;
          } else if (_0x212695 !== _0x3dd544.voice) {
            _0x3dd544.voice = _0x212695;
          }
        }
        _0xcda7c9.filter(_0x141c49, _0x3dd544);
      }
      function _0x3d9d94() {
        var _0x5b2150 = [];
        if (_0x42b818.seasons.length) {
          var _0x2d827a = _0x42b818.seasons[_0x3dd544.season] && _0x42b818.seasons[_0x3dd544.season].id;
          var _0x5ec958 = _0x141c49.voice[_0x3dd544.voice];
          var _0x2af789 = _0x141c49.voice_info[_0x3dd544.voice] && _0x141c49.voice_info[_0x3dd544.voice].id;
          var _0xad8a31 = _0x42b818.items.filter(function (_0x21732b) {
            return _0x21732b.seasons && _0x21732b.seasons[_0x2d827a] && _0x21732b.translation && _0x21732b.translation.id == _0x2af789;
          })[0x0];
          if (_0xad8a31) {
            var _0x28569c = _0xad8a31.seasons[_0x2d827a] && _0xad8a31.seasons[_0x2d827a].episodes || {};
            for (var _0x58ea58 in _0x28569c) {
              var _0x2748bd = _0x28569c[_0x58ea58];
              _0x5b2150.push({
                'title': _0xcda7c9.formatEpisodeTitle(_0x2d827a, _0x58ea58),
                'orig_title': _0xad8a31.title_orig || _0xad8a31.title || _0x28bbaa,
                'quality': _0xad8a31.quality || "360p ~ 1080p",
                'info': " / " + _0x5ec958,
                'season': '' + _0x2d827a,
                'episode': parseInt(_0x58ea58),
                'link': _0x2748bd
              });
            }
          }
        } else {
          _0x42b818.items.forEach(function (_0xd9e537) {
            if (_0xd9e537.seasons) {
              return;
            }
            _0x5b2150.push({
              'title': _0xd9e537.translation && _0xd9e537.translation.title || _0x28bbaa,
              'orig_title': _0xd9e537.title_orig || _0xd9e537.title || _0x28bbaa,
              'quality': _0xd9e537.quality || "360p ~ 1080p",
              'info': '',
              'link': _0xd9e537.link
            });
          });
        }
        return _0x5b2150;
      }
      function _0x4cd11e(_0x4c85c1, _0x222898, _0x243a26) {
        if (_0x4c85c1.stream) {
          return _0x222898(_0x4c85c1);
        }
        if (!_0x4c85c1.link) {
          return _0x243a26();
        }
        var _0x5b5ed0 = _0x4c85c1.link.match(/^((https?:)?\/\/[^\/]+)\/.*$/);
        var _0x3fb687 = _0xcda7c9.fixLinkProtocol(_0x5b5ed0 ? _0x5b5ed0[0x1] : "//kodikplayer.com", false);
        var _0xb4521c = _0xcda7c9.fixLinkProtocol(_0x4c85c1.link, false);
        _0x4fedc3.clear();
        _0x4fedc3.timeout(0x2710);
        _0x4fedc3.native(_0xcda7c9.proxyLink(_0xb4521c, _0x4f4f29), function (_0x5cd7fe) {
          _0x5cd7fe = (_0x5cd7fe || '').replace(/\n/g, '');
          var _0x1abd3c = _0x5cd7fe.match(/\burlParams = '([^']+)'/);
          var _0x44ccf9 = _0x5cd7fe.match(/\b(?:videoInfo|vInfo)\.type = '([^']+)'/);
          var _0x365f88 = _0x5cd7fe.match(/\b(?:videoInfo|vInfo)\.hash = '([^']+)'/);
          var _0x4a9042 = _0x5cd7fe.match(/\b(?:videoInfo|vInfo)\.id = '([^']+)'/);
          var _0x2b273b = _0x5cd7fe.match(/<script [^>]*\bsrc="(\/assets\/js\/app\.player_single[^"]+)"/);
          var _0x1b8d49;
          try {
            _0x1b8d49 = _0x1abd3c && _0x1abd3c[0x1] && JSON.parse(_0x1abd3c[0x1]);
          } catch (_0x2d555c) {}
          var _0x262f60 = '';
          if (_0x1b8d49 && _0x44ccf9 && _0x365f88 && _0x4a9042) {
            _0x262f60 = 'd=' + _0x1b8d49.d;
            _0x262f60 += "&d_sign=" + _0x1b8d49.d_sign;
            _0x262f60 += "&pd=" + _0x1b8d49.pd;
            _0x262f60 += "&pd_sign=" + _0x1b8d49.pd_sign;
            _0x262f60 += "&ref=" + _0x1b8d49.ref;
            _0x262f60 += "&ref_sign=" + _0x1b8d49.ref_sign;
            _0x262f60 += "&bad_user=true";
            _0x262f60 += "&cdn_is_working=true";
            _0x262f60 += "&type=" + _0x44ccf9[0x1];
            _0x262f60 += "&hash=" + _0x365f88[0x1];
            _0x262f60 += "&id=" + _0x4a9042[0x1];
            _0x262f60 += "&info=%7B%7D";
          }
          if (_0x262f60 && _0x2b273b) {
            var _0x3f30df = function _0x29949a() {
              _0x4fedc3.clear();
              _0x4fedc3.timeout(0x2710);
              _0x4fedc3.native(_0xcda7c9.proxyLink(_0x1b033b, _0x4f4f29), function (_0x1a600e) {
                if (_0x1a600e && _0x1a600e.links) {
                  var _0x4a037a = _0x26ce41(_0x1a600e.links);
                  var _0x6786f4 = '';
                  var _0x1ef7a3 = false;
                  if (_0x4a037a && _0x4a037a.length) {
                    _0x6786f4 = _0x4a037a[0x0].file;
                    _0x1ef7a3 = {};
                    _0x4a037a.forEach(function (_0x3c7d61) {
                      _0x1ef7a3[_0x3c7d61.label] = _0x3c7d61.file;
                    });
                  }
                  if (_0x6786f4) {
                    _0x4c85c1.stream = _0x6786f4;
                    _0x4c85c1.qualitys = _0x1ef7a3;
                    _0x222898(_0x4c85c1);
                  } else {
                    _0x243a26();
                  }
                } else {
                  _0x243a26();
                }
              }, function (_0xd9c35, _0x1b627b) {
                _0x243a26();
              }, _0x262f60);
            };
            var _0x2f5d50 = _0x3fb687 + _0x2b273b[0x1];
            if (_0x2f5d50 !== _0xaa4d59) {
              _0x4fedc3.clear();
              _0x4fedc3.timeout(0x2710);
              _0x4fedc3.native(_0xcda7c9.proxyLink(_0x2f5d50, _0x4f4f29), function (_0x1ae9a6) {
                _0x1ae9a6 = (_0x1ae9a6 || '').replace(/\n/g, '');
                var _0x10ab86 = _0x1ae9a6.match(/\$\.ajax\({type: *"POST", *url: *atob\("([^"]+)"\)/);
                var _0x2abc0d;
                try {
                  _0x2abc0d = _0x10ab86 && atob(_0x10ab86[0x1]);
                } catch (_0xaa7c2d) {}
                if (_0x2abc0d && _0x2abc0d.lastIndexOf('/', 0x0) === 0x0) {
                  _0x1b033b = _0x3fb687 + _0x2abc0d;
                  _0xaa4d59 = _0x2f5d50;
                  _0x3f30df();
                } else {
                  _0x243a26();
                }
              }, function (_0x7a14ab, _0x110d09) {
                _0x243a26();
              }, false, {
                'dataType': 'text'
              });
            } else {
              _0x3f30df();
            }
          } else {
            _0x243a26();
          }
        }, function (_0x16a3d6, _0x2b819b) {
          _0x243a26();
        }, false, {
          'dataType': "text"
        });
      }
      function _0x26ce41(_0x195bfa) {
        try {
          var _0x33df67 = [];
          Object.keys(_0x195bfa).forEach(function (_0x5dcd7f) {
            var _0x537a51 = _0x195bfa[_0x5dcd7f];
            var _0x1e77ee = parseInt(_0x5dcd7f);
            var _0x256e0b = _0x57dcee(_0x537a51 && _0x537a51[0x0] && _0x537a51[0x0].src || '');
            _0x256e0b = _0xcda7c9.fixLinkProtocol(_0x256e0b, _0x1c8933, true);
            _0x33df67.push({
              'label': _0x1e77ee ? _0x1e77ee + 'p' : "360p ~ 1080p",
              'quality': _0x1e77ee,
              'file': _0xcda7c9.proxyStream(_0x256e0b, 'kodik')
            });
          });
          _0x33df67.sort(function (_0x334850, _0x6e7cbb) {
            if (_0x6e7cbb.quality > _0x334850.quality) {
              return 0x1;
            }
            if (_0x6e7cbb.quality < _0x334850.quality) {
              return -0x1;
            }
            if (_0x6e7cbb.label > _0x334850.label) {
              return 0x1;
            }
            if (_0x6e7cbb.label < _0x334850.label) {
              return -0x1;
            }
            return 0x0;
          });
          return _0x33df67;
        } catch (_0x1c9378) {}
        return [];
      }
      function _0x57dcee(_0xdd6dd9) {
        try {
          if (_0xdd6dd9.lastIndexOf("http", 0x0) === 0x0 || _0xdd6dd9.lastIndexOf('//', 0x0) === 0x0) {
            return _0xdd6dd9;
          }
          return atob(_0xdd6dd9.replace(/[a-zA-Z]/g, function (_0x588e28) {
            return String.fromCharCode((_0x588e28 <= 'Z' ? 0x5a : 0x7a) >= (_0x588e28 = _0x588e28.charCodeAt(0x0) + 0x12) ? _0x588e28 : _0x588e28 - 0x1a);
          }));
        } catch (_0x166152) {
          return '';
        }
      }
      function _0x147282(_0x55a264) {
        _0xcda7c9.reset();
        var _0x2efbbc = Lampa.Storage.cache('online_view', 0x1388, []);
        var _0x26433d = _0xcda7c9.getLastEpisode(_0x55a264);
        _0x55a264.forEach(function (_0x5b803d) {
          if (_0x5b803d.season) {
            _0x5b803d.translate_episode_end = _0x26433d;
            _0x5b803d.translate_voice = _0x141c49.voice[_0x3dd544.voice];
          }
          var _0x1c2749 = Lampa.Utils.hash(_0x5b803d.season ? [_0x5b803d.season, _0x5b803d.season > 0xa ? ':' : '', _0x5b803d.episode, _0x7275bd.movie.original_title, _0x5b803d.orig_title].join('') : _0x7275bd.movie.original_title + _0x5b803d.orig_title);
          var _0x329718 = Lampa.Timeline.view(_0x1c2749);
          var _0x2687f0 = Lampa.Template.get('online_mod', _0x5b803d);
          var _0x5093da = Lampa.Utils.hash(_0x5b803d.season ? [_0x5b803d.season, _0x5b803d.season > 0xa ? ':' : '', _0x5b803d.episode, _0x7275bd.movie.original_title, _0x5b803d.orig_title, _0x141c49.voice[_0x3dd544.voice]].join('') : _0x7275bd.movie.original_title + _0x5b803d.orig_title + _0x5b803d.title);
          _0x5b803d.timeline = _0x329718;
          _0x2687f0.append(Lampa.Timeline.render(_0x329718));
          if (Lampa.Timeline.details) {
            _0x2687f0.find('.online__quality').append(Lampa.Timeline.details(_0x329718, " / "));
          }
          if (_0x2efbbc.indexOf(_0x5093da) !== -0x1) {
            _0x2687f0.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
          }
          _0x2687f0.on("hover:enter", function () {
            if (_0x5b803d.loading) {
              return;
            }
            if (_0x7275bd.movie.id) {
              Lampa.Favorite.add("history", _0x7275bd.movie, 0x64);
            }
            _0x5b803d.loading = true;
            _0x4cd11e(_0x5b803d, function (_0x2ec1a0) {
              _0x2ec1a0.loading = false;
              var _0x51b6f8 = {
                'url': _0xcda7c9.getDefaultQuality(_0x2ec1a0.qualitys, _0x2ec1a0.stream),
                'quality': _0xcda7c9.renameQualityMap(_0x2ec1a0.qualitys),
                'timeline': _0x2ec1a0.timeline,
                'title': _0x2ec1a0.season ? _0x2ec1a0.title : _0x28bbaa + (_0x2ec1a0.title == _0x28bbaa ? '' : " / " + _0x2ec1a0.title)
              };
              Lampa.Player.play(_0x51b6f8);
              if (_0x2ec1a0.season && Lampa.Platform.version) {
                var _0x43054b = [];
                _0x55a264.forEach(function (_0x2e0a9f) {
                  if (_0x2e0a9f == _0x2ec1a0) {
                    _0x43054b.push(_0x51b6f8);
                  } else {
                    var _0x4ce46d = {
                      'url': function _0x32af6a(_0x2d7b95) {
                        _0x4cd11e(_0x2e0a9f, function (_0x24341c) {
                          _0x4ce46d.url = _0xcda7c9.getDefaultQuality(_0x24341c.qualitys, _0x24341c.stream);
                          _0x4ce46d.quality = _0xcda7c9.renameQualityMap(_0x24341c.qualitys);
                          _0x2d7b95();
                        }, function () {
                          _0x4ce46d.url = '';
                          _0x2d7b95();
                        });
                      },
                      'timeline': _0x2e0a9f.timeline,
                      'title': _0x2e0a9f.title
                    };
                    _0x43054b.push(_0x4ce46d);
                  }
                });
                Lampa.Player.playlist(_0x43054b);
              } else {
                Lampa.Player.playlist([_0x51b6f8]);
              }
              if (_0x2efbbc.indexOf(_0x5093da) == -0x1) {
                _0x2efbbc.push(_0x5093da);
                _0x2687f0.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
                Lampa.Storage.set("online_view", _0x2efbbc);
              }
            }, function () {
              _0x5b803d.loading = false;
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            });
          });
          _0xcda7c9.append(_0x2687f0);
          _0xcda7c9.contextmenu({
            'item': _0x2687f0,
            'view': _0x329718,
            'viewed': _0x2efbbc,
            'hash_file': _0x5093da,
            'element': _0x5b803d,
            'file': function _0x118565(_0x3e6601) {
              _0x4cd11e(_0x5b803d, function (_0x46f3dd) {
                _0x3e6601({
                  'file': _0x46f3dd.stream,
                  'quality': _0x46f3dd.qualitys
                });
              }, function () {
                Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
              });
            }
          });
        });
        _0xcda7c9.start(true);
      }
    }
    function _0xc72683(_0x2e3f00, _0x2c63ea) {
      var _0x3ca66d = new Lampa.Reguest();
      var _0x20b616 = {};
      var _0x767fee = _0x2c63ea;
      var _0x24d07b = '';
      var _0x88b1e = Lampa.Storage.field('online_mod_prefer_http') === true;
      var _0x5a2c87 = _0x2e3f00.proxy("kinopub");
      var _0xde6497 = _0x59443e.decodeSecret([0x38, 0x20, 0x0, 0x42, 0x12, 0x56, 0x31, 0x1, 0x46, 0x3f, 0x28, 0x2e, 0x53, 0x4e, 0x16, 0x4e, 0x77, 0x42, 0x14, 0x33, 0x21, 0x3b, 0x10, 0x1c, 0x5b, 0x56, 0x29, 0x2, 0x40, 0x2f, 0x7d, 0x7d]);
      var _0x5e30ff = /\/(pd|http|hls4|hls2|hls)\/[^\/]*/;
      var _0x2e89e0 = {};
      var _0x139fec = {
        'season': 0x0,
        'voice': 0x0,
        'voice_name': ''
      };
      function _0x117bff(_0x4f2e72) {
        {
          if (_0x4f2e72) {
            _0x4f2e72();
          }
          return;
        }
      }
      function _0x22d3c6(_0x578a91, _0x53bc3a, _0x3d4ec0) {
        _0x3ca66d.clear();
        _0x3ca66d.timeout(0x2710);
        _0x3ca66d.native(_0x2e3f00.proxyLink("https://api.srvkp.com/v1/" + _0x578a91, _0x5a2c87), function (_0xc6f815) {
          if (_0x53bc3a) {
            _0x53bc3a(_0xc6f815);
          }
        }, function (_0x382968, _0x591ad8) {
          if (_0x3d4ec0) {
            _0x3d4ec0(_0x3ca66d.errorDecode(_0x382968, _0x591ad8));
          }
        });
      }
      this.search = function (_0x152cd3, _0xc76e74, _0x546d36) {
        var _0x26b03f = this;
        _0x767fee = _0x152cd3;
        _0x24d07b = _0x767fee.search || _0x767fee.movie.title;
        if (this.wait_similars && _0x546d36 && _0x546d36[0x0].is_similars) {
          return _0xb3fe21(_0x546d36[0x0]);
        }
        var _0xc123a0 = _0x767fee.search_date || !_0x767fee.clarification && (_0x767fee.movie.release_date || _0x767fee.movie.first_air_date || _0x767fee.movie.last_air_date) || "0000";
        var _0x4101e = parseInt((_0xc123a0 + '').slice(0x0, 0x4));
        var _0x271b7a = [];
        if (_0x767fee.movie.alternative_titles && _0x767fee.movie.alternative_titles.results) {
          _0x271b7a = _0x767fee.movie.alternative_titles.results.map(function (_0x8b623b) {
            return _0x8b623b.title;
          });
        }
        if (_0x767fee.movie.original_title) {
          _0x271b7a.push(_0x767fee.movie.original_title);
        }
        if (_0x767fee.movie.original_name) {
          _0x271b7a.push(_0x767fee.movie.original_name);
        }
        var _0x3a2fa5 = function _0x37092c(_0x2f932e) {
          if (_0x2f932e && _0x2f932e.length && _0x2f932e.forEach) {
            var _0x4a2ec6 = false;
            var _0x198a55 = false;
            _0x2f932e.forEach(function (_0x1d62ee) {
              var _0x193159 = (_0x1d62ee.title || '').split(" / ");
              if (_0x193159.length === 0x2) {
                _0x1d62ee.full_title = _0x1d62ee.title;
                _0x1d62ee.title = _0x193159[0x0].trim();
                _0x1d62ee.orig_title = _0x193159[0x1].trim();
              }
            });
            if (!_0x767fee.clarification && (_0x767fee.movie.imdb_id || +_0x767fee.movie.kinopoisk_id)) {
              var _0x3b0ad1 = _0x767fee.movie.imdb_id && parseInt(_0x767fee.movie.imdb_id.substring(0x2));
              var _0x736d87 = +_0x767fee.movie.kinopoisk_id;
              var _0xb414bd = _0x2f932e.filter(function (_0x32253e) {
                return _0x3b0ad1 && _0x32253e.imdb == _0x3b0ad1 || _0x736d87 && _0x32253e.kinopoisk == _0x736d87;
              });
              if (_0xb414bd.length) {
                _0x2f932e = _0xb414bd;
                _0x4a2ec6 = true;
                _0x198a55 = true;
              }
            }
            var _0x2e19ed = _0x2f932e;
            if (_0x2e19ed.length) {
              if (_0x271b7a.length) {
                var _0x495b61 = _0x2e19ed.filter(function (_0xb078cd) {
                  return _0x2e3f00.containsAnyTitle([_0xb078cd.orig_title, _0xb078cd.title, _0xb078cd.full_title], _0x271b7a);
                });
                if (_0x495b61.length) {
                  _0x2e19ed = _0x495b61;
                  _0x4a2ec6 = true;
                }
              }
              if (_0x24d07b) {
                var _0x4c7ef5 = _0x2e19ed.filter(function (_0x5e897f) {
                  return _0x2e3f00.containsAnyTitle([_0x5e897f.title, _0x5e897f.orig_title, _0x5e897f.full_title], [_0x24d07b]);
                });
                if (_0x4c7ef5.length) {
                  _0x2e19ed = _0x4c7ef5;
                  _0x4a2ec6 = true;
                }
              }
              if (_0x2e19ed.length > 0x1 && _0x4101e) {
                var _0x1c9872 = _0x2e19ed.filter(function (_0x4dc384) {
                  return _0x4dc384.year == _0x4101e;
                });
                if (!_0x1c9872.length) {
                  _0x1c9872 = _0x2e19ed.filter(function (_0x473d9b) {
                    return _0x473d9b.year && _0x473d9b.year > _0x4101e - 0x2 && _0x473d9b.year < _0x4101e + 0x2;
                  });
                }
                if (_0x1c9872.length) {
                  _0x2e19ed = _0x1c9872;
                }
              }
            }
            if (_0x2e19ed.length == 0x1 && _0x4a2ec6 && !_0x198a55) {
              if (_0x4101e && _0x2e19ed[0x0].year) {
                _0x4a2ec6 = _0x2e19ed[0x0].year > _0x4101e - 0x2 && _0x2e19ed[0x0].year < _0x4101e + 0x2;
              }
              if (_0x4a2ec6) {
                _0x4a2ec6 = false;
                if (_0x271b7a.length) {
                  _0x4a2ec6 |= _0x2e3f00.equalAnyTitle([_0x2e19ed[0x0].orig_title, _0x2e19ed[0x0].title, _0x2e19ed[0x0].full_title], _0x271b7a);
                }
                if (_0x24d07b) {
                  _0x4a2ec6 |= _0x2e3f00.equalAnyTitle([_0x2e19ed[0x0].title, _0x2e19ed[0x0].orig_title, _0x2e19ed[0x0].full_title], [_0x24d07b]);
                }
              }
            }
            if (_0x2e19ed.length == 0x1 && _0x4a2ec6) {
              _0xb3fe21(_0x2e19ed[0x0]);
            } else {
              _0x26b03f.wait_similars = true;
              _0x2f932e.forEach(function (_0x37abcc) {
                _0x37abcc.is_similars = true;
              });
              _0x2e3f00.similars(_0x2f932e);
              _0x2e3f00.loading(false);
            }
          } else {
            _0x2e3f00.emptyForQuery(_0x24d07b);
          }
        };
        var _0x44b5e2 = _0x2e3f00.empty.bind(_0x2e3f00);
        var _0x52fdbe = Lampa.Utils.addUrlComponent("items/search", "access_token=" + _0xde6497);
        _0x52fdbe = Lampa.Utils.addUrlComponent(_0x52fdbe, "perpage=100");
        _0x52fdbe = Lampa.Utils.addUrlComponent(_0x52fdbe, "field=title");
        _0x52fdbe = Lampa.Utils.addUrlComponent(_0x52fdbe, 'q=' + encodeURIComponent(_0x24d07b));
        _0x117bff(function () {
          _0x22d3c6(_0x52fdbe, function (_0x3c17e6) {
            _0x3a2fa5(_0x3c17e6 && _0x3c17e6.items);
          }, _0x44b5e2);
        });
      };
      this.extendChoice = function (_0x4902f7) {
        Lampa.Arrays.extend(_0x139fec, _0x4902f7, true);
      };
      this.reset = function () {
        _0x2e3f00.reset();
        _0x139fec = {
          'season': 0x0,
          'voice': 0x0,
          'voice_name': ''
        };
        _0x5d2cd0();
        _0x3b302f(_0x28ca9b());
        _0x2e3f00.saveChoice(_0x139fec);
      };
      this.filter = function (_0x4d5bec, _0x322cc1, _0x36c19a) {
        _0x139fec[_0x322cc1.stype] = _0x36c19a.index;
        if (_0x322cc1.stype == "voice") {
          _0x139fec.voice_name = _0x2e89e0.voice[_0x36c19a.index];
        }
        _0x2e3f00.reset();
        _0x5d2cd0();
        _0x3b302f(_0x28ca9b());
        _0x2e3f00.saveChoice(_0x139fec);
      };
      this.destroy = function () {
        _0x3ca66d.clear();
        _0x20b616 = null;
      };
      function _0xb3fe21(_0x144648) {
        var _0x5cb50d = Lampa.Utils.addUrlComponent('items/' + _0x144648.id, "access_token=" + _0xde6497);
        var _0x548268 = _0x2e3f00.empty.bind(_0x2e3f00);
        _0x22d3c6(_0x5cb50d, function (_0x4c40a9) {
          if (_0x4c40a9 && _0x4c40a9.item && (_0x4c40a9.item.videos && _0x4c40a9.item.videos.length || _0x4c40a9.item.seasons && _0x4c40a9.item.seasons.length)) {
            _0x2e3f00.loading(false);
            _0x282496(_0x4c40a9.item);
            _0x5d2cd0();
            _0x3b302f(_0x28ca9b());
          } else {
            _0x2e3f00.emptyForQuery(_0x24d07b);
          }
        }, _0x548268);
      }
      function _0x282496(_0x57d72b) {
        _0x20b616 = _0x57d72b;
        if (_0x20b616.seasons) {
          _0x20b616.seasons.forEach(function (_0x40a046) {
            var _0x26697a = _0x40a046.episodes || [];
            _0x26697a.forEach(function (_0x6cf5b) {
              _0x6cf5b.streams = _0x2c8ee7(_0x6cf5b);
            });
          });
        } else if (_0x20b616.videos) {
          _0x20b616.videos.forEach(function (_0x453443) {
            _0x453443.streams = _0x2c8ee7(_0x453443);
          });
        }
      }
      function _0x2c8ee7(_0x3493d4) {
        var _0x1423a1 = [];
        var _0x36690c = _0x3493d4.files || [];
        _0x36690c.forEach(function (_0x3fac15) {
          var _0x484cb7 = _0x3fac15.quality || _0x3fac15.h && _0x3fac15.h + 'p' || "360p ~ 1080p";
          if (_0x3fac15.url) {
            var _0x924d0d = false;
            if (_0x3fac15.url.http && _0x3fac15.file) {
              var _0x58da6e = _0x3fac15.url.http.match(/^(.*)\/demo\/demo\.mp4(.*)$/);
              if (!_0x58da6e) {
                var _0x36c7a3 = _0x3fac15.url.http.indexOf((_0x3fac15.file.lastIndexOf('/', 0x0) === 0x0 ? '' : '/') + _0x3fac15.file);
                if (_0x36c7a3 !== -0x1) {
                  _0x58da6e = [_0x3fac15.url.http, _0x3fac15.url.http.substring(0x0, _0x36c7a3)];
                }
              }
              if (_0x58da6e) {
                var _0x54b1d5 = _0x58da6e[0x1];
                if (_0x5e30ff && '') {
                  _0x54b1d5 = _0x54b1d5.replace(_0x5e30ff, '');
                }
                _0x54b1d5 = _0x2e3f00.fixLinkProtocol(_0x54b1d5, _0x88b1e, "full");
                if (_0x3493d4.subtitles) {
                  _0x924d0d = _0x3493d4.subtitles.map(function (_0xc4b6a) {
                    return {
                      'label': _0xc4b6a.lang + (_0xc4b6a.forced ? " - forced" : ''),
                      'url': _0x2e3f00.processSubs(_0xc4b6a.file ? _0x54b1d5 + "/subtitles" + (_0xc4b6a.file.lastIndexOf('/', 0x0) === 0x0 ? '' : '/') + _0xc4b6a.file + "?loc=" + 'ru' : '')
                    };
                  });
                  if (!_0x924d0d.length) {
                    _0x924d0d = false;
                  }
                }
                _0x1423a1.push({
                  'height': _0x3fac15.h,
                  'quality_id': _0x3fac15.quality_id,
                  'label': _0x484cb7,
                  'codec': _0x3fac15.codec,
                  'type': "http",
                  'params': _0x58da6e[0x2],
                  'file': _0x54b1d5 + (_0x3fac15.file.lastIndexOf('/', 0x0) === 0x0 ? '' : '/') + _0x3fac15.file,
                  'subtitles': _0x924d0d
                });
              }
            }
            if (_0x3fac15.url.hls4) {
              var _0x23af98 = _0x3fac15.url.hls4.match(/^(.*)\/demo\.m3u8(.*)$/);
              if (!_0x23af98) {
                var _0x47c13b = _0x3fac15.url.hls4.indexOf('/' + _0x3493d4.id + ".m3u8");
                if (_0x47c13b !== -0x1) {
                  _0x23af98 = [_0x3fac15.url.hls4, _0x3fac15.url.hls4.substring(0x0, _0x47c13b)];
                }
              }
              if (_0x23af98) {
                var _0xde88a8 = _0x23af98[0x1];
                if (_0x5e30ff && '') {
                  _0xde88a8 = _0xde88a8.replace(_0x5e30ff, '');
                }
                _0xde88a8 = _0x2e3f00.fixLinkProtocol(_0xde88a8, _0x88b1e, "full");
                _0x1423a1.push({
                  'height': _0x3fac15.h,
                  'quality_id': _0x3fac15.quality_id,
                  'label': _0x484cb7,
                  'codec': _0x3fac15.codec,
                  'type': "hls4",
                  'params': _0x23af98[0x2],
                  'file': _0xde88a8 + '/' + _0x3493d4.id + '.m3u8',
                  'subtitles': _0x924d0d
                });
              }
            }
            if (_0x3fac15.url.hls2) {
              var _0x3e4781 = _0x3fac15.url.hls2.match(/^(.*)\/demo\.m3u8(.*)$/);
              if (!_0x3e4781) {
                var _0x1d70e5 = _0x3fac15.url.hls2.indexOf('/' + _0x3493d4.id + ".m3u8");
                if (_0x1d70e5 !== -0x1) {
                  _0x3e4781 = [_0x3fac15.url.hls2, _0x3fac15.url.hls2.substring(0x0, _0x1d70e5)];
                }
              }
              if (_0x3e4781) {
                var _0x2091cc = _0x3e4781[0x1];
                if (_0x5e30ff && '') {
                  _0x2091cc = _0x2091cc.replace(_0x5e30ff, '');
                }
                _0x2091cc = _0x2e3f00.fixLinkProtocol(_0x2091cc, _0x88b1e, "full");
                _0x1423a1.push({
                  'height': _0x3fac15.h,
                  'quality_id': _0x3fac15.quality_id,
                  'label': _0x484cb7,
                  'codec': _0x3fac15.codec,
                  'type': 'hls2',
                  'params': _0x3e4781[0x2],
                  'file': _0x2091cc + '/' + _0x3493d4.id + '.m3u8',
                  'subtitles': _0x924d0d
                });
              }
            }
            if (_0x3fac15.url.hls && _0x3fac15.file) {
              var _0x3c56f1 = _0x3fac15.url.hls.match(/^(.*)\/demo\/master-v1a1\.m3u8(.*)$/);
              if (!_0x3c56f1) {
                var _0x4040e1 = _0x3fac15.url.hls.indexOf((_0x3fac15.file.lastIndexOf('/', 0x0) === 0x0 ? '' : '/') + _0x3fac15.file);
                if (_0x4040e1 !== -0x1) {
                  _0x3c56f1 = [_0x3fac15.url.hls, _0x3fac15.url.hls.substring(0x0, _0x4040e1)];
                }
              }
              if (_0x3c56f1) {
                var _0x42c1d0 = _0x3c56f1[0x1];
                if (_0x5e30ff && '') {
                  _0x42c1d0 = _0x42c1d0.replace(_0x5e30ff, '');
                }
                _0x42c1d0 = _0x2e3f00.fixLinkProtocol(_0x42c1d0, _0x88b1e, "full");
                _0x1423a1.push({
                  'height': _0x3fac15.h,
                  'quality_id': _0x3fac15.quality_id,
                  'label': _0x484cb7,
                  'codec': _0x3fac15.codec,
                  'type': 'hls',
                  'params': _0x3c56f1[0x2],
                  'file': _0x42c1d0 + (_0x3fac15.file.lastIndexOf('/', 0x0) === 0x0 ? '' : '/') + _0x3fac15.file,
                  'subtitles': _0x924d0d
                });
              }
            }
          }
        });
        _0x1423a1.sort(function (_0x5d7a23, _0x586c46) {
          var _0x53402e = _0x586c46.height - _0x5d7a23.height;
          if (_0x53402e) {
            return _0x53402e;
          }
          _0x53402e = _0x586c46.quality_id - _0x5d7a23.quality_id;
          if (_0x53402e) {
            return _0x53402e;
          }
          if (_0x586c46.label > _0x5d7a23.label) {
            return 0x1;
          }
          if (_0x586c46.label < _0x5d7a23.label) {
            return -0x1;
          }
          if (_0x586c46.codec > _0x5d7a23.codec) {
            return 0x1;
          }
          if (_0x586c46.codec < _0x5d7a23.codec) {
            return -0x1;
          }
          if (_0x586c46.type > _0x5d7a23.type) {
            return 0x1;
          }
          if (_0x586c46.type < _0x5d7a23.type) {
            return -0x1;
          }
          return 0x0;
        });
        return _0x1423a1;
      }
      function _0x49f74f(_0x35b630, _0x3059c4) {
        var _0x2b8605;
        if (_0x3059c4) {
          _0x2b8605 = [_0x35b630.type && _0x35b630.type.title, _0x35b630.author && _0x35b630.author.title].filter(function (_0x347268) {
            return _0x347268;
          }).join(" - ");
        } else {
          var _0x14be64 = _0x35b630.type && _0x35b630.type.title || '';
          _0x2b8605 = _0x14be64 === "Оригинал" ? _0x14be64 : _0x35b630.author && _0x35b630.author.title || _0x14be64;
        }
        if (_0x2b8605) {
          _0x2b8605 += _0x35b630.lang && _0x35b630.lang !== 'und' && _0x35b630.lang !== "rus" ? " (" + _0x35b630.lang + ')' : '';
        } else {
          _0x2b8605 = _0x35b630.lang || '';
        }
        return _0x2b8605;
      }
      function _0x2d92af(_0x22e6d2, _0x9571dd) {
        var _0x3bd94f = _0x2e89e0.voice_info[_0x139fec.voice];
        if (_0x3bd94f) {
          var _0x10e0a0 = _0x3bd94f.type && _0x3bd94f.type.title || '';
          var _0x47ed39 = !_0x9571dd && _0x10e0a0 === "Оригинал" ? '' : _0x3bd94f.author && _0x3bd94f.author.title;
          var _0x21784f = _0x3bd94f.lang || '';
          if (_0x47ed39) {
            var _0x4b0dac = _0x22e6d2.filter(function (_0x31708f) {
              return _0x31708f.author && _0x31708f.author.title === _0x47ed39;
            });
            if (_0x4b0dac.length) {
              _0x22e6d2 = _0x4b0dac;
            }
            if (_0x10e0a0 && _0x9571dd) {
              _0x4b0dac = _0x4b0dac.filter(function (_0x4ee119) {
                return _0x4ee119.type && _0x4ee119.type.title === _0x10e0a0;
              });
              if (_0x4b0dac.length) {
                _0x22e6d2 = _0x4b0dac;
              }
            }
          }
          if (_0x21784f) {
            var _0x20a729 = _0x22e6d2.filter(function (_0x5008a4) {
              return _0x5008a4.lang === _0x21784f;
            });
            if (_0x20a729.length) {
              _0x22e6d2 = _0x20a729;
            }
          }
          if (!_0x47ed39) {
            var _0x4ea2a4 = _0x22e6d2.filter(function (_0x51eb9b) {
              return !_0x9571dd && _0x51eb9b.type && _0x51eb9b.type.title === "Оригинал" || !(_0x51eb9b.author && _0x51eb9b.author.title);
            });
            if (_0x4ea2a4.length) {
              _0x22e6d2 = _0x4ea2a4;
            }
            if (_0x10e0a0) {
              _0x4ea2a4 = _0x4ea2a4.filter(function (_0x31087f) {
                return _0x31087f.type && _0x31087f.type.title === _0x10e0a0;
              });
              if (_0x4ea2a4.length) {
                _0x22e6d2 = _0x4ea2a4;
              }
            }
          }
        }
        return _0x22e6d2.length == 0x1 ? _0x22e6d2[0x0] : null;
      }
      function _0x5d2cd0() {
        _0x2e89e0 = {
          'season': _0x20b616.seasons ? _0x20b616.seasons.map(function (_0x48fd33) {
            return Lampa.Lang.translate("torrent_serial_season") + " " + _0x48fd33.number + (_0x48fd33.title ? " - " + _0x48fd33.title : '');
          }) : [],
          'voice': [],
          'voice_info': []
        };
        if (!_0x2e89e0.season[_0x139fec.season]) {
          _0x139fec.season = 0x0;
        }
        if (_0x20b616.seasons || _0x20b616.videos && _0x20b616.videos.length > 0x1) {
          var _0x43c6be;
          if (_0x20b616.seasons) {
            var _0x408c53 = _0x20b616.seasons[_0x139fec.season];
            _0x43c6be = _0x408c53 && _0x408c53.episodes || [];
          } else {
            _0x43c6be = _0x20b616.videos;
          }
          _0x43c6be.forEach(function (_0x14beea) {
            var _0x54dcae = _0x14beea.audios || [];
            _0x54dcae.forEach(function (_0x11ba0a) {
              var _0x408bd0 = _0x49f74f(_0x11ba0a);
              if (_0x408bd0 && _0x2e89e0.voice.indexOf(_0x408bd0) == -0x1) {
                _0x2e89e0.voice.push(_0x408bd0);
                _0x2e89e0.voice_info.push(_0x11ba0a);
              }
            });
          });
        }
        if (!_0x2e89e0.voice[_0x139fec.voice]) {
          _0x139fec.voice = 0x0;
        }
        if (_0x139fec.voice_name) {
          var _0x18a945 = _0x2e89e0.voice.indexOf(_0x139fec.voice_name);
          if (_0x18a945 == -0x1) {
            _0x139fec.voice = 0x0;
          } else if (_0x18a945 !== _0x139fec.voice) {
            _0x139fec.voice = _0x18a945;
          }
        }
        _0x2e3f00.filter(_0x2e89e0, _0x139fec);
      }
      function _0x28ca9b() {
        var _0x40ea17 = [];
        if (_0x20b616.seasons) {
          var _0x38bc66 = _0x20b616.seasons[_0x139fec.season];
          var _0xf1418b = _0x38bc66 && _0x38bc66.episodes || [];
          _0xf1418b.forEach(function (_0x3e42d5) {
            var _0x51b851 = _0x3e42d5.audios || [];
            var _0xd12237 = _0x2d92af(_0x51b851);
            var _0x5ca913;
            if (_0xd12237) {
              _0x5ca913 = _0x49f74f(_0xd12237);
            } else {
              _0xd12237 = {};
              var _0x5716e7 = _0x51b851.map(function (_0x37e261) {
                return _0x49f74f(_0x37e261);
              }).filter(function (_0x3ba55e) {
                return _0x3ba55e;
              });
              _0x5ca913 = _0x2e3f00.uniqueNamesShortText(_0x5716e7, 0x50);
            }
            _0x40ea17.push({
              'title': _0x2e3f00.formatEpisodeTitle(_0x38bc66.number, _0x3e42d5.number, _0x3e42d5.title),
              'orig_title': _0x20b616.title || _0x24d07b,
              'quality': _0x20b616.quality ? _0x20b616.quality + 'p' : "360p ~ 1080p",
              'info': _0x5ca913 ? " / " + _0x5ca913 : '',
              'season': '' + _0x38bc66.number,
              'episode': parseInt(_0x3e42d5.number),
              'audio_index': _0xd12237.index,
              'media': _0x3e42d5
            });
          });
        } else {
          if (_0x20b616.videos && _0x20b616.videos.length > 0x1) {
            _0x20b616.videos.forEach(function (_0x26ea60, _0x92c8ae) {
              var _0x55867d = _0x26ea60.audios || [];
              var _0xd2e110 = _0x2d92af(_0x55867d);
              var _0x35742f;
              if (_0xd2e110) {
                _0x35742f = _0x49f74f(_0xd2e110);
              } else {
                _0xd2e110 = {};
                var _0x190bc4 = _0x55867d.map(function (_0x49218f) {
                  return _0x49f74f(_0x49218f);
                }).filter(function (_0x1e1788) {
                  return _0x1e1788;
                });
                _0x35742f = _0x2e3f00.uniqueNamesShortText(_0x190bc4, 0x50);
              }
              var _0x29b658 = _0x26ea60.number != null ? _0x26ea60.number : _0x92c8ae + 0x1;
              var _0x2a9062 = _0x29b658 + (_0x26ea60.title ? " - " + _0x26ea60.title : '');
              _0x40ea17.push({
                'title': _0x2a9062,
                'orig_title': _0x20b616.title || _0x24d07b,
                'quality': _0x20b616.quality ? _0x20b616.quality + 'p' : "360p ~ 1080p",
                'info': _0x35742f ? " / " + _0x35742f : '',
                'season': 0x1,
                'episode': parseInt(_0x29b658),
                'audio_index': _0xd2e110.index,
                'media': _0x26ea60
              });
            });
          } else if (_0x20b616.videos) {
            _0x20b616.videos.forEach(function (_0x1f09e3) {
              var _0x1837e5 = _0x1f09e3.audios || [];
              if (!_0x1837e5.length) {
                _0x1837e5.push({});
              }
              _0x1837e5.forEach(function (_0x684e4e) {
                _0x40ea17.push({
                  'title': _0x49f74f(_0x684e4e, true) || _0x1f09e3.title || _0x24d07b,
                  'orig_title': _0x20b616.title || _0x24d07b,
                  'quality': _0x20b616.quality ? _0x20b616.quality + 'p' : "360p ~ 1080p",
                  'info': _0x684e4e.codec && _0x684e4e.codec !== "aac" ? " / " + _0x684e4e.codec : '',
                  'audio_index': _0x684e4e.index,
                  'media': _0x1f09e3
                });
              });
            });
          }
        }
        return _0x40ea17;
      }
      function _0x20f8ef(_0x2b4561) {
        var _0x1a8ad6 = '';
        var _0x2653b8 = false;
        var _0x3b1b0c = false;
        var _0x4f0fcb = _0x2b4561.media.streams || [];
        _0x4f0fcb = _0x4f0fcb.filter(function (_0x717caa) {
          return _0x717caa.type === "hls";
        });
        {
          var _0x79392d = _0x4f0fcb.filter(function (_0x3274e7) {
            return _0x3274e7.codec === "h265";
          });
          if (_0x79392d.length) {
            _0x4f0fcb = _0x79392d;
          }
        }
        {
          var _0x52774e = _0x4f0fcb.filter(function (_0x5dd749) {
            return _0x5dd749.codec === 'h264';
          });
          if (_0x52774e.length) {
            _0x4f0fcb = _0x52774e;
          }
        }
        if (_0x4f0fcb && _0x4f0fcb.length) {
          var _0x540731 = _0x4f0fcb[0x0].type === 'hls' ? _0x2b4561.audio_index ? "/master-v1a" + _0x2b4561.audio_index + ".m3u8" : "/master.m3u8" : '';
          _0x540731 += "?loc=ru";
          _0x1a8ad6 = _0x4f0fcb[0x0].file + _0x540731;
          _0x3b1b0c = _0x4f0fcb[0x0].subtitles;
          if (_0x4f0fcb.some(function (_0x1ac711) {
            return _0x1ac711.file != _0x4f0fcb[0x0].file;
          })) {
            _0x2653b8 = {};
            _0x4f0fcb.forEach(function (_0x37dc5c) {
              _0x2653b8[_0x37dc5c.label] = _0x37dc5c.file + _0x540731;
            });
          }
        }
        return {
          'file': _0x1a8ad6,
          'quality': _0x2653b8,
          'subtitles': _0x3b1b0c
        };
      }
      function _0x3b302f(_0x5b97be) {
        _0x2e3f00.reset();
        var _0x5ba0a8 = Lampa.Storage.cache("online_view", 0x1388, []);
        _0x5b97be.forEach(function (_0x16e051) {
          var _0x38b8bb = Lampa.Utils.hash(_0x16e051.season ? [_0x16e051.season, _0x16e051.season > 0xa ? ':' : '', _0x16e051.episode, _0x767fee.movie.original_title, _0x16e051.orig_title].join('') : _0x767fee.movie.original_title + _0x16e051.orig_title);
          var _0x2ce21f = Lampa.Timeline.view(_0x38b8bb);
          var _0x24295e = Lampa.Template.get('online_mod', _0x16e051);
          var _0x416339 = Lampa.Utils.hash(_0x16e051.season ? [_0x16e051.season, _0x16e051.season > 0xa ? ':' : '', _0x16e051.episode, _0x767fee.movie.original_title, _0x16e051.orig_title, _0x2e89e0.voice[_0x139fec.voice]].join('') : _0x767fee.movie.original_title + _0x16e051.orig_title + _0x16e051.title);
          _0x16e051.timeline = _0x2ce21f;
          _0x24295e.append(Lampa.Timeline.render(_0x2ce21f));
          if (Lampa.Timeline.details) {
            _0x24295e.find(".online__quality").append(Lampa.Timeline.details(_0x2ce21f, " / "));
          }
          if (_0x5ba0a8.indexOf(_0x416339) !== -0x1) {
            _0x24295e.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + '</div>');
          }
          _0x24295e.on("hover:enter", function () {
            if (_0x767fee.movie.id) {
              Lampa.Favorite.add('history', _0x767fee.movie, 0x64);
            }
            var _0x8c2b02 = _0x20f8ef(_0x16e051);
            if (_0x8c2b02.file) {
              var _0x3b2727 = [];
              var _0x5d1e33 = {
                'url': _0x2e3f00.getDefaultQuality(_0x8c2b02.quality, _0x8c2b02.file),
                'quality': _0x2e3f00.renameQualityMap(_0x8c2b02.quality),
                'subtitles': _0x8c2b02.subtitles,
                'timeline': _0x16e051.timeline,
                'title': _0x16e051.season ? _0x16e051.title : _0x24d07b + (_0x16e051.title == _0x24d07b ? '' : " / " + _0x16e051.title)
              };
              if (_0x16e051.season) {
                _0x5b97be.forEach(function (_0x1f874f) {
                  var _0x10fe1f = _0x20f8ef(_0x1f874f);
                  _0x3b2727.push({
                    'url': _0x2e3f00.getDefaultQuality(_0x10fe1f.quality, _0x10fe1f.file),
                    'quality': _0x2e3f00.renameQualityMap(_0x10fe1f.quality),
                    'subtitles': _0x10fe1f.subtitles,
                    'timeline': _0x1f874f.timeline,
                    'title': _0x1f874f.title
                  });
                });
              } else {
                _0x3b2727.push(_0x5d1e33);
              }
              if (_0x3b2727.length > 0x1) {
                _0x5d1e33.playlist = _0x3b2727;
              }
              Lampa.Player.play(_0x5d1e33);
              Lampa.Player.playlist(_0x3b2727);
              if (_0x5ba0a8.indexOf(_0x416339) == -0x1) {
                _0x5ba0a8.push(_0x416339);
                _0x24295e.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                Lampa.Storage.set("online_view", _0x5ba0a8);
              }
            } else {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_nolink"));
            }
          });
          _0x2e3f00.append(_0x24295e);
          _0x2e3f00.contextmenu({
            'item': _0x24295e,
            'view': _0x2ce21f,
            'viewed': _0x5ba0a8,
            'hash_file': _0x416339,
            'file': function _0x1ccc00(_0x2c3af1) {
              _0x2c3af1(_0x20f8ef(_0x16e051));
            }
          });
        });
        _0x2e3f00.start(true);
      }
    }
    var _0x24923f = {};
    var _0x2a1ded = {};
    var _0x238c49 = {};
    function _0x2e5f9f(_0x418a20) {
      var _0x3c1919 = new Lampa.Reguest();
      var _0x57dd49 = new Lampa.Scroll({
        'mask': true,
        'over': true
      });
      var _0x435f01 = new Lampa.Explorer(_0x418a20);
      var _0xfcc631 = new Lampa.Filter(_0x418a20);
      var _0x53dc78 = Lampa.Storage.get("online_mod_balanser", "cdnvideohub") + '';
      var _0x227819 = Lampa.Storage.field("online_mod_save_last_balanser") === true ? Lampa.Storage.cache("online_mod_last_balanser", 0xc8, {}) : {};
      var _0x253aa1 = Lampa.Storage.field("online_mod_use_stream_proxy") === true;
      var _0x58602b = '//' + (Lampa.Storage.field("online_mod_rezka2_prx_ukr") || "prx.ukrtelcdn.net") + '/';
      var _0x5967d7 = Lampa.Storage.field("online_mod_rezka2_fix_stream") === true;
      var _0x16474d = Lampa.Storage.field("online_mod_prefer_http") === true;
      var _0x1ccf81 = '';
      var _0x29e5c4 = {
        'title': Lampa.Lang.translate("settings_player_quality"),
        'subtitle': '',
        'items': [],
        'stype': "quality"
      };
      var _0x17c607 = [];
      if (_0x227819[_0x418a20.movie.id]) {
        _0x53dc78 = _0x227819[_0x418a20.movie.id];
      }
      this.proxy = function (_0x126835) {
        return _0x59443e.proxy(_0x126835);
      };
      this.fixLink = function (_0x5cee37, _0x11ce1b) {
        return _0x59443e.fixLink(_0x5cee37, _0x11ce1b);
      };
      this.fixLinkProtocol = function (_0x1ad0fe, _0x7da9dc, _0x6cb1e5) {
        return _0x59443e.fixLinkProtocol(_0x1ad0fe, _0x7da9dc, _0x6cb1e5);
      };
      this.proxyLink = function (_0x3fb3e0, _0x3f1f51, _0x49bd7e, _0x3f0b40) {
        return _0x59443e.proxyLink(_0x3fb3e0, _0x3f1f51, _0x49bd7e, _0x3f0b40);
      };
      this.proxyStream = function (_0x332cc9, _0x10732d) {
        if (_0x332cc9 && _0x253aa1) {
          if (_0x10732d === "lumex") {
            return _0x332cc9;
          }
          if (_0x10732d === 'rezka2') {
            return _0x332cc9.replace(/\/\/(stream\.voidboost\.(cc|top|link|club)|[^\/]*.ukrtelcdn.net|vdbmate.org|sambray.org|rumbegg.org|laptostack.org|frntroy.org|femeretes.org)\//, _0x58602b);
          }
          return (_0x16474d ? "http://apn.cfhttp.top/" : "https://apn.watch/") + _0x332cc9;
        }
        if (_0x332cc9 && _0x5967d7 && _0x10732d === "rezka2") {
          return _0x332cc9.replace(/\/\/(stream\.voidboost\.(cc|top|link|club)|[^\/]*.ukrtelcdn.net)\//, '//femeretes.org/');
        }
        return _0x332cc9;
      };
      this.processSubs = function (_0x160e8e) {
        return _0x160e8e;
      };
      this.proxyStreamSubs = function (_0x33b91d, _0x359078) {
        if (_0x359078 === "lumex") {
          return _0x33b91d;
        }
        var _0x1c45e9 = this.processSubs(_0x33b91d);
        if (_0x1c45e9 !== _0x33b91d) {
          return _0x1c45e9;
        }
        return this.proxyStream(_0x33b91d, _0x359078);
      };
      this.checkMyIp = function (_0x3fd842) {
        _0x59443e.checkMyIp(_0x3c1919, _0x3fd842);
      };
      var _0x38e72a;
      var _0x574752;
      var _0x543bfa;
      var _0x14b49f = {
        'season': Lampa.Lang.translate("torrent_serial_season"),
        'voice': Lampa.Lang.translate("torrent_parser_voice"),
        'source': Lampa.Lang.translate("settings_rest_source")
      };
      var _0x3363a5 = Lampa.Platform.is("android");
      if (_0x3363a5) {
        _0x59443e.checkAndroidVersion(0x153);
      }
      var _0x2ea8d8 = [{
        'name': 'lumex',
        'title': 'Lumex',
        'source': new _0x1db8f3(this, _0x418a20),
        'search': false,
        'kp': false,
        'imdb': true,
        'disabled': true
      }, {
        'name': "lumex2",
        'title': "Lumex (Ads)",
        'source': new _0x42c9ee(this, _0x418a20),
        'search': false,
        'kp': false,
        'imdb': true,
        'disabled': true
      }, {
        'name': "rezka2",
        'title': "HDrezka",
        'source': new _0x4b1506(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': false
      }, {
        'name': "kinobase",
        'title': "Kinobase",
        'source': new _0x56654d(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': false,
        'disabled': true
      }, {
        'name': "collaps",
        'title': "Collaps",
        'source': new _0x3369bb(this, _0x418a20, false),
        'search': false,
        'kp': true,
        'imdb': true
      }, {
        'name': "collaps-dash",
        'title': "Collaps (DASH)",
        'source': new _0x3369bb(this, _0x418a20, true),
        'search': false,
        'kp': true,
        'imdb': true
      }, {
        'name': "cdnmovies",
        'title': "CDNMovies",
        'source': new _0x532573(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': true,
        'disabled': true
      }, {
        'name': 'filmix',
        'title': "Filmix",
        'source': new _0x57dfa8(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': false
      }, {
        'name': "zetflix",
        'title': "Zetflix",
        'source': new _0xc9aedc(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': false,
        'disabled': true
      }, {
        'name': 'fancdn',
        'title': "FanCDN",
        'source': new _0x26ba8d(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': false
      }, {
        'name': "fancdn2",
        'title': "FanCDN (ID)",
        'source': new _0x49b2a6(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': true
      }, {
        'name': "fanserials",
        'title': "FanSerials",
        'source': new _0x20f352(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': false
      }, {
        'name': "videoseed",
        'title': "VideoSeed",
        'source': new _0x281070(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': true,
        'disabled': true
      }, {
        'name': "vibix",
        'title': "Vibix",
        'source': new _0xb8c3a6(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': true,
        'disabled': true
      }, {
        'name': "redheadsound",
        'title': 'RedHeadSound',
        'source': new _0x1d5b38(this, _0x418a20, false),
        'search': true,
        'kp': false,
        'imdb': true,
        'disabled': true
      }, {
        'name': "redheadsound-dash",
        'title': "RedHeadSound (DASH)",
        'source': new _0x1d5b38(this, _0x418a20, true),
        'search': true,
        'kp': false,
        'imdb': true,
        'disabled': true
      }, {
        'name': 'cdnvideohub',
        'title': "CDNVideoHub",
        'source': new _0x4f340b(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': false
      }, {
        'name': "anilibria",
        'title': "AniLibria",
        'source': new _0x5b3f6f(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': false,
        'disabled': true
      }, {
        'name': "anilibria2",
        'title': 'AniLibria.top',
        'source': new _0x17b940(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': false
      }, {
        'name': 'animelib',
        'title': "AnimeLib",
        'source': new _0x4039fd(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': false,
        'disabled': true
      }, {
        'name': 'kodik',
        'title': 'Kodik',
        'source': new _0x50316d(this, _0x418a20),
        'search': true,
        'kp': true,
        'imdb': true
      }, {
        'name': "alloha",
        'title': "Alloha",
        'source': new _0x505e65(this, _0x418a20),
        'search': false,
        'kp': true,
        'imdb': true,
        'disabled': true
      }, {
        'name': "kinopub",
        'title': "KinoPub",
        'source': new _0xc72683(this, _0x418a20),
        'search': true,
        'kp': false,
        'imdb': true,
        'disabled': true
      }];
      var _0x34a561 = _0x2ea8d8.filter(function (_0x1cdec0) {
        return !_0x1cdec0.disabled;
      });
      var _0x537bb6 = _0x34a561.map(function (_0x4d65b2) {
        return _0x4d65b2.name;
      });
      var _0x45bfc0 = {};
      _0x34a561.forEach(function (_0x11525f) {
        _0x45bfc0[_0x11525f.name] = _0x11525f.source;
      });
      var _0x3e3346 = _0x2ea8d8.filter(function (_0x24f463) {
        return _0x24f463.search;
      }).map(function (_0x1f4292) {
        return _0x1f4292.name;
      });
      var _0x54f6ff = _0x2ea8d8.filter(function (_0x3796ae) {
        return _0x3796ae.kp;
      }).map(function (_0x1638db) {
        return _0x1638db.name;
      });
      var _0x782fa8 = _0x2ea8d8.filter(function (_0x5cf4cc) {
        return _0x5cf4cc.imdb;
      }).map(function (_0x47237a) {
        return _0x47237a.name;
      });
      if (_0x537bb6.indexOf(_0x53dc78) == -0x1) {
        _0x53dc78 = "cdnvideohub";
        if (_0x537bb6.indexOf(_0x53dc78) == -0x1) {
          _0x53dc78 = _0x537bb6[0x0];
        }
        Lampa.Storage.set("online_mod_balanser", _0x53dc78);
      }
      _0x57dd49.body().addClass("torrent-list");
      _0x57dd49.minus(_0x435f01.render().find('.explorer__files-head'));
      this.create = function () {
        var _0x59aa44 = this;
        this.activity.loader(true);
        _0xfcc631.onSearch = function (_0x4e03e8) {
          Lampa.Activity.replace({
            'search': _0x4e03e8,
            'search_date': '',
            'clarification': true
          });
        };
        _0xfcc631.onBack = function () {
          _0x59aa44.start();
        };
        _0xfcc631.onSelect = function (_0x3eff82, _0x50d1da, _0x20ca13) {
          if (_0x3eff82 == 'filter') {
            if (_0x50d1da.reset) {
              if (_0x574752) {
                _0x45bfc0[_0x53dc78].reset();
              } else {
                _0x59aa44.start();
              }
            } else {
              if (_0x50d1da.stype == "source") {
                _0x59aa44.changeBalanser(_0x537bb6[_0x20ca13.index]);
              } else if (_0x50d1da.stype == 'quality') {
                _0x1ccf81 = _0x20ca13.title;
                _0x59aa44.updateQualityFilter();
              } else {
                _0x45bfc0[_0x53dc78].filter(_0x3eff82, _0x50d1da, _0x20ca13);
              }
            }
          } else if (_0x3eff82 == "sort") {
            _0x59aa44.changeBalanser(_0x50d1da.source);
          }
        };
        _0xfcc631.render().find(".filter--sort span").text(Lampa.Lang.translate('online_mod_balanser'));
        _0x435f01.appendHead(_0xfcc631.render());
        _0x435f01.appendFiles(_0x57dd49.render());
        this.search();
        return this.render();
      };
      this.changeBalanser = function (_0x2a5896) {
        _0x53dc78 = _0x2a5896;
        Lampa.Storage.set("online_mod_balanser", _0x53dc78);
        _0x227819[_0x418a20.movie.id] = _0x53dc78;
        if (Lampa.Storage.field("online_mod_save_last_balanser") === true) {
          Lampa.Storage.set("online_mod_last_balanser", _0x227819);
        }
        this.search();
        setTimeout(this.closeFilter, 0xa);
      };
      this.updateQualityFilter = function () {
        var _0xd96c16 = _0x1ccf81;
        if (!_0xd96c16) {
          _0xd96c16 = Lampa.Storage.get("video_quality_default", "1080") + 'p';
          if (_0xd96c16 === "1080p") {
            _0xd96c16 = "1080p Ultra";
          }
        }
        var _0x3fed94 = ["2160p", "1440p", "1080p Ultra", "1080p", "720p", "480p"].map(function (_0x2a79d8, _0x40f69d) {
          return {
            'title': _0x2a79d8,
            'selected': _0x2a79d8 === _0xd96c16,
            'index': _0x40f69d
          };
        });
        _0x29e5c4.subtitle = _0xd96c16;
        _0x29e5c4.items = _0x3fed94;
        setTimeout(this.closeFilter, 0xa);
      };
      this.search = function () {
        this.activity.loader(true);
        this.filter({
          'source': _0x537bb6
        }, {
          'source': 0x0
        });
        this.reset();
        this.find();
      };
      this.cleanTitle = function (_0x12322e) {
        return _0x12322e.replace(/[\s.,:;’'`!?]+/g, " ").trim();
      };
      this.kpCleanTitle = function (_0x57e554) {
        return this.cleanTitle(_0x57e554).replace(/^[ \/\\]+/, '').replace(/[ \/\\]+$/, '').replace(/\+( *[+\/\\])+/g, '+').replace(/([+\/\\] *)+\+/g, '+').replace(/( *[\/\\]+ *)+/g, '+');
      };
      this.normalizeTitle = function (_0x584fb5) {
        return this.cleanTitle(_0x584fb5.toLowerCase().replace(/[\-\u2010-\u2015\u2E3A\u2E3B\uFE58\uFE63\uFF0D]+/g, '-').replace(/ё/g, 'е'));
      };
      this.equalTitle = function (_0xde0ee8, _0x5d2d96) {
        return typeof _0xde0ee8 === "string" && typeof _0x5d2d96 === 'string' && this.normalizeTitle(_0xde0ee8) === this.normalizeTitle(_0x5d2d96);
      };
      this.containsTitle = function (_0x5db36d, _0xc0a831) {
        return typeof _0x5db36d === "string" && typeof _0xc0a831 === "string" && this.normalizeTitle(_0x5db36d).indexOf(this.normalizeTitle(_0xc0a831)) !== -0x1;
      };
      this.equalAnyTitle = function (_0x20fe37, _0x4d6f2e) {
        var _0x508c7e = this;
        return _0x4d6f2e.some(function (_0x4c24c6) {
          return _0x4c24c6 && _0x20fe37.some(function (_0x1e0a55) {
            return _0x1e0a55 && _0x508c7e.equalTitle(_0x1e0a55, _0x4c24c6);
          });
        });
      };
      this.containsAnyTitle = function (_0xe876cb, _0x23cc69) {
        var _0x8119d5 = this;
        return _0x23cc69.some(function (_0x2d7d1c) {
          return _0x2d7d1c && _0xe876cb.some(function (_0x261ea5) {
            return _0x261ea5 && _0x8119d5.containsTitle(_0x261ea5, _0x2d7d1c);
          });
        });
      };
      this.uniqueNamesShortText = function (_0x41e7be, _0x2a8ba9) {
        var _0x4fb9cd = [];
        _0x41e7be.forEach(function (_0x31d4cf) {
          if (_0x31d4cf && _0x4fb9cd.indexOf(_0x31d4cf) == -0x1) {
            _0x4fb9cd.push(_0x31d4cf);
          }
        });
        if (_0x2a8ba9 && _0x4fb9cd.length > 0x1) {
          var _0xf33998 = 0x0;
          var _0x3cefff = -0x1;
          var _0x25036e = _0x4fb9cd.length - 0x1;
          _0x4fb9cd.forEach(function (_0x23be46, _0x2e5937) {
            _0xf33998 += _0x23be46.length;
            if (_0x3cefff == -0x1 && _0xf33998 > _0x2a8ba9 - (_0x2e5937 == _0x25036e ? 0x0 : 0x5)) {
              _0x3cefff = _0x2e5937;
            }
            _0xf33998 += 0x2;
          });
          if (_0x3cefff != -0x1) {
            _0x4fb9cd = _0x4fb9cd.splice(0x0, Math.max(_0x3cefff, 0x1));
            _0x4fb9cd.push("...");
          }
        }
        return _0x4fb9cd.join(", ");
      };
      this.decodeHtml = function (_0x1a38c2) {
        var _0x301fa5 = document.createElement("textarea");
        _0x301fa5.innerHTML = _0x1a38c2;
        return _0x301fa5.value;
      };
      this.vcdn_api_search = function (_0x76cb52, _0x179732, _0x93bd56, _0x394b8b) {
        if (_0x93bd56) {
          _0x93bd56(_0x179732);
        }
        return;
      };
      this.kp_api_search = function (_0x29daf9, _0x2ccac4, _0x358cac) {
        _0x581995.clear();
        _0x581995.getFromCache(_0x29daf9, function (_0x4f03c0, _0xf5001f) {
          var _0x18e615 = [];
          if (_0x4f03c0.items && _0x4f03c0.items.length) {
            _0x18e615 = _0x4f03c0.items;
          } else {
            if (_0x4f03c0.films && _0x4f03c0.films.length) {
              _0x18e615 = _0x4f03c0.films;
            }
          }
          if (!_0xf5001f && _0x18e615.length) {
            _0x581995.setCache(_0x29daf9, _0x4f03c0);
          }
          if (_0x2ccac4) {
            _0x2ccac4(_0x18e615);
          }
        }, function (_0x3d2d75, _0x3302c3) {
          if (_0x358cac) {
            _0x358cac(_0x3c1919.errorDecode(_0x3d2d75, _0x3302c3));
          }
        });
      };
      this.find = function () {
        var _0x28b16b = this;
        var _0x27e1b4 = _0x418a20.search || _0x418a20.movie.title;
        var _0x32172d = _0x418a20.search_date || !_0x418a20.clarification && (_0x418a20.movie.release_date || _0x418a20.movie.first_air_date || _0x418a20.movie.last_air_date) || "0000";
        var _0x59d63a = parseInt((_0x32172d + '').slice(0x0, 0x4));
        var _0x28d655 = [];
        if (_0x418a20.movie.alternative_titles && _0x418a20.movie.alternative_titles.results) {
          _0x28d655 = _0x418a20.movie.alternative_titles.results.map(function (_0x52e395) {
            return _0x52e395.title;
          });
        }
        if (_0x418a20.movie.original_title) {
          _0x28d655.push(_0x418a20.movie.original_title);
        }
        if (_0x418a20.movie.original_name) {
          _0x28d655.push(_0x418a20.movie.original_name);
        }
        var _0x3b8d8b = function _0x34f368(_0x554a3e, _0xa8ad49, _0x57fe70) {
          if (_0x554a3e && _0x554a3e.length && _0x554a3e.forEach) {
            var _0x25c804 = false;
            var _0x5ebb62 = false;
            _0x554a3e.forEach(function (_0xf3adee) {
              if (_0xf3adee.start_date === "1969-12-31") {
                _0xf3adee.start_date = '';
              }
              if (_0xf3adee.year === "1969-12-31") {
                _0xf3adee.year = '';
              }
              var _0x2837d1 = _0xf3adee.start_date || _0xf3adee.year || "0000";
              _0xf3adee.tmp_year = parseInt((_0x2837d1 + '').slice(0x0, 0x4));
            });
            if (!_0x418a20.clarification && (_0x418a20.movie.imdb_id || +_0x418a20.movie.kinopoisk_id)) {
              var _0x25fec2 = _0x418a20.movie.imdb_id;
              var _0x22d65d = +_0x418a20.movie.kinopoisk_id;
              var _0x1fdc21 = _0x554a3e.filter(function (_0x54da00) {
                return _0x25fec2 && (_0x54da00.imdb_id || _0x54da00.imdbId) == _0x25fec2 || _0x22d65d && (_0x54da00.kp_id || _0x54da00.kinopoisk_id || _0x54da00.kinopoiskId || _0x54da00.filmId) == _0x22d65d;
              });
              if (_0x1fdc21.length) {
                _0x554a3e = _0x1fdc21;
                _0x25c804 = true;
                _0x5ebb62 = true;
              }
            }
            var _0x5a5e64 = _0x554a3e;
            if (_0x5a5e64.length) {
              if (_0x28d655.length) {
                var _0x489843 = _0x5a5e64.filter(function (_0xe6327f) {
                  return _0x28b16b.containsAnyTitle([_0xe6327f.orig_title || _0xe6327f.nameOriginal, _0xe6327f.en_title || _0xe6327f.nameEn, _0xe6327f.title || _0xe6327f.ru_title || _0xe6327f.nameRu], _0x28d655);
                });
                if (_0x489843.length) {
                  _0x5a5e64 = _0x489843;
                  _0x25c804 = true;
                }
              }
              if (_0x27e1b4) {
                var _0x207295 = _0x5a5e64.filter(function (_0x4326f1) {
                  return _0x28b16b.containsAnyTitle([_0x4326f1.title || _0x4326f1.ru_title || _0x4326f1.nameRu, _0x4326f1.en_title || _0x4326f1.nameEn, _0x4326f1.orig_title || _0x4326f1.nameOriginal], [_0x27e1b4]);
                });
                if (_0x207295.length) {
                  _0x5a5e64 = _0x207295;
                  _0x25c804 = true;
                }
              }
              if (_0x5a5e64.length > 0x1 && _0x59d63a) {
                var _0x292883 = _0x5a5e64.filter(function (_0x170618) {
                  return _0x170618.tmp_year == _0x59d63a;
                });
                if (!_0x292883.length) {
                  _0x292883 = _0x5a5e64.filter(function (_0x483e48) {
                    return _0x483e48.tmp_year && _0x483e48.tmp_year > _0x59d63a - 0x2 && _0x483e48.tmp_year < _0x59d63a + 0x2;
                  });
                }
                if (_0x292883.length) {
                  _0x5a5e64 = _0x292883;
                }
              }
            }
            if (_0x5a5e64.length == 0x1 && _0x25c804 && !_0x5ebb62) {
              if (_0x59d63a && _0x5a5e64[0x0].tmp_year) {
                _0x25c804 = _0x5a5e64[0x0].tmp_year > _0x59d63a - 0x2 && _0x5a5e64[0x0].tmp_year < _0x59d63a + 0x2;
              }
              if (_0x25c804) {
                _0x25c804 = false;
                if (_0x28d655.length) {
                  _0x25c804 |= _0x28b16b.equalAnyTitle([_0x5a5e64[0x0].orig_title || _0x5a5e64[0x0].nameOriginal, _0x5a5e64[0x0].en_title || _0x5a5e64[0x0].nameEn, _0x5a5e64[0x0].title || _0x5a5e64[0x0].ru_title || _0x5a5e64[0x0].nameRu], _0x28d655);
                }
                if (_0x27e1b4) {
                  _0x25c804 |= _0x28b16b.equalAnyTitle([_0x5a5e64[0x0].title || _0x5a5e64[0x0].ru_title || _0x5a5e64[0x0].nameRu, _0x5a5e64[0x0].en_title || _0x5a5e64[0x0].nameEn, _0x5a5e64[0x0].orig_title || _0x5a5e64[0x0].nameOriginal], [_0x27e1b4]);
                }
              }
            }
            if (_0x5a5e64.length == 0x1 && _0x25c804) {
              _0xa8ad49(_0x5a5e64);
            } else {
              _0x57fe70(_0x554a3e);
            }
          } else {
            _0x57fe70([]);
          }
        };
        var _0x4f00ec = function _0x129ec3(_0x4f9a60) {
          _0x3b8d8b(_0x4f9a60, function (_0x38f9eb) {
            _0x28b16b.extendChoice();
            _0x45bfc0[_0x53dc78].search(_0x418a20, _0x38f9eb[0x0].kp_id || _0x38f9eb[0x0].kinopoisk_id || _0x38f9eb[0x0].kinopoiskId || _0x38f9eb[0x0].filmId || _0x38f9eb[0x0].imdb_id, _0x38f9eb);
          }, function (_0x45655f) {
            if (_0x45655f.length) {
              _0x45655f.forEach(function (_0x493023) {
                if (_0x493023.episodes) {
                  var _0x1864e8 = 0x1;
                  _0x493023.episodes.forEach(function (_0x2ef856) {
                    if (_0x2ef856.season_num > _0x1864e8) {
                      _0x1864e8 = _0x2ef856.season_num;
                    }
                  });
                  _0x493023.seasons_count = _0x1864e8;
                  _0x493023.episodes_count = _0x493023.episodes.length;
                }
              });
              _0x28b16b.similars(_0x45655f);
              _0x28b16b.loading(false);
            } else {
              _0x28b16b.emptyForQuery(_0x27e1b4);
            }
          });
        };
        var _0x31334a = function _0x1e770b(_0x16abf9, _0xfa43cc) {
          var _0x48fc97 = Lampa.Utils.addUrlComponent('', _0x59443e.vcdnToken());
          _0x48fc97 = Lampa.Utils.addUrlComponent(_0x48fc97, "query=" + encodeURIComponent(_0x27e1b4));
          _0x48fc97 = Lampa.Utils.addUrlComponent(_0x48fc97, "field=title");
          _0x28b16b.vcdn_api_search("movies" + _0x48fc97, [], function (_0x48cb43) {
            _0x28b16b.vcdn_api_search("animes" + _0x48fc97, _0x48cb43, function (_0x49b6e8) {
              _0x28b16b.vcdn_api_search("tv-series" + _0x48fc97, _0x49b6e8, function (_0x10200e) {
                _0x28b16b.vcdn_api_search("anime-tv-series" + _0x48fc97, _0x10200e, function (_0x324d9e) {
                  _0x28b16b.vcdn_api_search("show-tv-series" + _0x48fc97, _0x324d9e, _0x16abf9, _0xfa43cc);
                }, _0xfa43cc);
              }, _0xfa43cc);
            }, _0xfa43cc);
          }, _0xfa43cc);
        };
        var _0x278947 = function _0x3ec71d(_0x5d97bb, _0x1336fe) {
          if (!_0x418a20.clarification && (_0x418a20.movie.imdb_id || +_0x418a20.movie.kinopoisk_id)) {
            var _0x22ac79 = Lampa.Utils.addUrlComponent('', _0x59443e.vcdnToken());
            var _0x50ccf7 = _0x418a20.movie.imdb_id ? Lampa.Utils.addUrlComponent(_0x22ac79, 'imdb_id=' + encodeURIComponent(_0x418a20.movie.imdb_id)) : '';
            var _0x513228 = +_0x418a20.movie.kinopoisk_id ? Lampa.Utils.addUrlComponent(_0x22ac79, "kinopoisk_id=" + encodeURIComponent(+_0x418a20.movie.kinopoisk_id)) : '';
            _0x28b16b.vcdn_api_search('short' + (_0x50ccf7 || _0x513228), [], function (_0x1195f6) {
              if (_0x1195f6 && _0x1195f6.length) {
                _0x5d97bb(_0x1195f6);
              } else {
                if (_0x50ccf7 && _0x513228) {
                  _0x28b16b.vcdn_api_search("short" + _0x513228, [], _0x5d97bb, _0x1336fe);
                } else {
                  _0x5d97bb([]);
                }
              }
            }, _0x1336fe);
          } else {
            _0x5d97bb([]);
          }
        };
        var _0x1e457e = function _0x36f14f(_0x4bb6c4) {
          var _0x10fb3c = function _0x5486d2() {
            if (_0x4bb6c4) {
              _0x4bb6c4();
            } else {
              _0x4f00ec([]);
            }
          };
          _0x278947(function (_0x1c734f) {
            if (_0x1c734f && _0x1c734f.length && _0x1c734f.forEach) {
              _0x4f00ec(_0x1c734f);
            } else {
              _0x31334a(function (_0x48e63c) {
                if (_0x48e63c && _0x48e63c.length && _0x48e63c.forEach) {
                  _0x4f00ec(_0x48e63c);
                } else {
                  _0x10fb3c();
                }
              }, _0x10fb3c);
            }
          }, _0x10fb3c);
        };
        var _0x5d6078 = function _0x135f36(_0x5d00a0, _0x4761eb) {
          var _0x362376 = 'api/v2.1/films/search-by-keyword?keyword=' + encodeURIComponent(_0x28b16b.kpCleanTitle(_0x27e1b4));
          _0x28b16b.kp_api_search(_0x362376, _0x5d00a0, _0x4761eb);
        };
        var _0x324006 = function _0x42c9fc(_0x82dde2, _0x14eaed) {
          if (!_0x418a20.clarification && _0x418a20.movie.imdb_id) {
            var _0x4f614b = "api/v2.2/films?imdbId=" + encodeURIComponent(_0x418a20.movie.imdb_id);
            _0x28b16b.kp_api_search(_0x4f614b, _0x82dde2, _0x14eaed);
          } else {
            _0x82dde2([]);
          }
        };
        var _0x463056 = function _0x22d29a(_0x5bc77c) {
          var _0x586579 = function _0x1a78b() {
            if (_0x5bc77c) {
              _0x5bc77c();
            } else {
              _0x4f00ec([]);
            }
          };
          _0x324006(function (_0x23da75) {
            if (_0x23da75 && _0x23da75.length && _0x23da75.forEach) {
              _0x4f00ec(_0x23da75);
            } else {
              _0x5d6078(function (_0x33c883) {
                if (_0x33c883 && _0x33c883.length && _0x33c883.forEach) {
                  _0x4f00ec(_0x33c883);
                } else {
                  _0x586579();
                }
              }, _0x586579);
            }
          }, _0x586579);
        };
        var _0x5a4f04 = function _0x465041() {
          var _0x1bf232 = function _0x13110() {
            if (_0x782fa8.indexOf(_0x53dc78) >= 0x0) {
              var _0x147a35 = function _0x39f321() {
                _0x28b16b.extendChoice();
                _0x45bfc0[_0x53dc78].search(_0x418a20, _0x418a20.movie.imdb_id);
              };
              if (_0x3e3346.indexOf(_0x53dc78) >= 0x0) {
                _0x147a35();
              } else {
                _0x5d6078(function (_0x48f781) {
                  _0x3b8d8b(_0x48f781, function (_0x4ca777) {
                    _0x28b16b.extendChoice();
                    _0x45bfc0[_0x53dc78].search(_0x418a20, _0x4ca777[0x0].kp_id || _0x4ca777[0x0].kinopoisk_id || _0x4ca777[0x0].kinopoiskId || _0x4ca777[0x0].filmId || _0x4ca777[0x0].imdb_id, _0x4ca777);
                  }, function (_0xe240ef) {
                    _0x147a35();
                  });
                }, _0x147a35);
              }
            } else {
              if (_0x3e3346.indexOf(_0x53dc78) >= 0x0) {
                _0x28b16b.extendChoice();
                _0x45bfc0[_0x53dc78].search(_0x418a20);
              } else {
                var _0x32e3f2 = function _0x1c6637() {
                  _0x4f00ec([]);
                };
                _0x5d6078(function (_0x4cee77) {
                  if (_0x4cee77 && _0x4cee77.length && _0x4cee77.forEach) {
                    _0x4f00ec(_0x4cee77);
                  } else {
                    _0x32e3f2();
                  }
                }, _0x32e3f2);
              }
            }
          };
          _0x278947(function (_0x248630) {
            if (_0x248630 && _0x248630.length && _0x248630.forEach) {
              _0x4f00ec(_0x248630);
            } else {
              _0x1bf232();
            }
          }, _0x1bf232);
        };
        var _0x5aa577 = function _0x11ad1a() {
          _0x324006(function (_0x43029d) {
            if (_0x43029d && _0x43029d.length && _0x43029d.forEach) {
              _0x4f00ec(_0x43029d);
            } else {
              _0x5a4f04();
            }
          }, _0x5a4f04);
        };
        var _0x5ad0bd = function _0x4df423() {
          if (!_0x418a20.clarification && +_0x418a20.movie.kinopoisk_id && _0x54f6ff.indexOf(_0x53dc78) >= 0x0) {
            _0x28b16b.extendChoice();
            _0x45bfc0[_0x53dc78].search(_0x418a20, +_0x418a20.movie.kinopoisk_id);
          } else {
            if (!_0x418a20.clarification && _0x418a20.movie.imdb_id && _0x54f6ff.indexOf(_0x53dc78) >= 0x0) {
              _0x5aa577();
            } else {
              if (_0x3e3346.indexOf(_0x53dc78) >= 0x0) {
                _0x28b16b.extendChoice();
                _0x45bfc0[_0x53dc78].search(_0x418a20);
              } else {
                if (_0x53dc78 == "lumex" || _0x53dc78 == "lumex2") {
                  var _0x2ce971 = function _0x30ed71() {
                    if (!_0x418a20.clarification && (+_0x418a20.movie.kinopoisk_id || _0x418a20.movie.imdb_id)) {
                      _0x28b16b.extendChoice();
                      _0x45bfc0[_0x53dc78].search(_0x418a20, +_0x418a20.movie.kinopoisk_id || _0x418a20.movie.imdb_id);
                    } else {
                      if (Lampa.Storage.field("online_mod_skip_kp_search") !== true) {
                        _0x463056();
                      } else {
                        _0x4f00ec([]);
                      }
                    }
                  };
                  _0x1e457e(_0x2ce971);
                } else {
                  _0x463056(_0x1e457e);
                }
              }
            }
          }
        };
        if (!_0x418a20.movie.imdb_id && (_0x418a20.movie.source == "tmdb" || _0x418a20.movie.source == "cub") && (_0x782fa8.indexOf(_0x53dc78) >= 0x0 || _0x54f6ff.indexOf(_0x53dc78) >= 0x0)) {
          var _0x2de19f = (_0x418a20.movie.name ? 'tv' : "movie") + '/' + _0x418a20.movie.id + "/external_ids?api_key=4ef0d7355d9ffb5151e987764708ce96&language=ru";
          var _0x1f99ee = typeof Lampa.TMDB !== "undefined" ? Lampa.TMDB.api(_0x2de19f) : "http://api.themoviedb.org/3/" + _0x2de19f;
          _0x3c1919.clear();
          _0x3c1919.timeout(15000);
          _0x3c1919.silent(_0x1f99ee, function (_0x11f9d0) {
            _0x418a20.movie.imdb_id = _0x11f9d0.imdb_id;
            _0x5ad0bd();
          }, function (_0x43fc8e, _0x2bb9e5) {
            _0x5ad0bd();
          });
        } else {
          _0x5ad0bd();
        }
      };
      this.parsePlaylist = function (_0x19190d) {
        var _0x3dbad0 = [];
        try {
          if (_0x19190d.lastIndexOf('[', 0x0) === 0x0) {
            _0x19190d.substring(0x1).split(/, *\[/).forEach(function (_0x56e453) {
              _0x56e453 = _0x56e453.trim();
              if (_0x42558b(_0x56e453, ',')) {
                _0x56e453 = _0x56e453.substring(0x0, _0x56e453.length - 0x1).trim();
              }
              var _0x3d2196 = _0x56e453.indexOf(']');
              if (_0x3d2196 >= 0x0) {
                var _0x3dd796 = _0x56e453.substring(0x0, _0x3d2196).trim();
                if (_0x56e453.charAt(_0x3d2196 + 0x1) === '{') {
                  _0x56e453.substring(_0x3d2196 + 0x2).split(/; *\{/).forEach(function (_0x536e28) {
                    _0x536e28 = _0x536e28.trim();
                    if (_0x42558b(_0x536e28, ';')) {
                      _0x536e28 = _0x536e28.substring(0x0, _0x536e28.length - 0x1).trim();
                    }
                    var _0x543ca8 = _0x536e28.indexOf('}');
                    if (_0x543ca8 >= 0x0) {
                      var _0x3b3248 = _0x536e28.substring(0x0, _0x543ca8).trim();
                      _0x3dbad0.push({
                        'label': _0x3dd796,
                        'voice': _0x3b3248,
                        'links': _0x536e28.substring(_0x543ca8 + 0x1).split(" or ").map(function (_0xfa3899) {
                          return _0xfa3899.trim();
                        }).filter(function (_0x4318db) {
                          return _0x4318db;
                        })
                      });
                    }
                  });
                } else {
                  _0x3dbad0.push({
                    'label': _0x3dd796,
                    'links': _0x56e453.substring(_0x3d2196 + 0x1).split(" or ").map(function (_0x2bb53b) {
                      return _0x2bb53b.trim();
                    }).filter(function (_0xb08fd5) {
                      return _0xb08fd5;
                    })
                  });
                }
              }
            });
            _0x3dbad0 = _0x3dbad0.filter(function (_0x4a2da9) {
              return _0x4a2da9.links.length;
            });
          }
        } catch (_0xe3f929) {}
        return _0x3dbad0;
      };
      this.parseM3U = function (_0x255bdd) {
        var _0x6f1452 = [];
        try {
          var _0x25bbb0 = false;
          var _0x289562 = 0x0;
          var _0x348672 = 0x0;
          var _0x1d595c = 0x0;
          var _0x43cbc2 = '';
          _0x255bdd.split("\n").forEach(function (_0x417498) {
            _0x417498 = _0x417498.trim();
            if (_0x417498.lastIndexOf('#', 0x0) === 0x0) {
              if (_0x417498.lastIndexOf("#EXT-X-STREAM-INF", 0x0) === 0x0) {
                _0x25bbb0 = true;
                var _0x41d7a1 = _0x417498.match(/\bBANDWIDTH=(\d+)\b/);
                if (_0x41d7a1) {
                  _0x289562 = _0x41d7a1[0x1];
                }
                var _0x5d901e = _0x417498.match(/\bRESOLUTION=(\d+)x(\d+)\b/);
                if (_0x5d901e) {
                  _0x348672 = parseInt(_0x5d901e[0x1]);
                  _0x1d595c = parseInt(_0x5d901e[0x2]);
                }
                var _0x51ae59 = _0x417498.match(/\bCODECS="([^"]+)"/);
                if (_0x51ae59) {
                  _0x43cbc2 = _0x51ae59[0x1];
                }
              }
            } else if (_0x417498.length) {
              _0x6f1452.push({
                'xstream': _0x25bbb0,
                'bandwidth': _0x289562,
                'width': _0x348672,
                'height': _0x1d595c,
                'codecs': _0x43cbc2,
                'link': _0x417498
              });
              _0x25bbb0 = false;
              _0x289562 = 0x0;
              _0x348672 = 0x0;
              _0x1d595c = 0x0;
              _0x43cbc2 = '';
            }
          });
        } catch (_0x5ecbca) {}
        return _0x6f1452;
      };
      this.formatEpisodeTitle = function (_0x1a9e97, _0x566dbc, _0x391ea9) {
        var _0x519766 = '';
        var _0x3ad50d = Lampa.Storage.field("online_mod_full_episode_title") === true;
        if (_0x1a9e97 != null && _0x1a9e97 !== '') {
          _0x519766 = (_0x3ad50d ? Lampa.Lang.translate("torrent_serial_season") + " " : 'S') + _0x1a9e97 + " / ";
        }
        if (_0x391ea9 == null || _0x391ea9 === '') {
          _0x391ea9 = Lampa.Lang.translate("torrent_serial_episode") + " " + _0x566dbc;
        } else {
          if (_0x566dbc != null && _0x566dbc !== '') {
            _0x391ea9 = Lampa.Lang.translate("torrent_serial_episode") + " " + _0x566dbc + " - " + _0x391ea9;
          }
        }
        _0x519766 += _0x391ea9;
        return _0x519766;
      };
      this.proxyUrlCall = function (_0x2816bd, _0x3a7b97, _0x17e786, _0x423705, _0xf63d74, _0x423c37, _0x5d5dfc, _0x3b7aa4) {
        _0x2816bd = this.proxy("iframe") + _0x2816bd;
        var _0x27b367 = function _0x6e5ff0() {
          if (_0x2a1ded[_0x2816bd]) {
            _0x423705 = _0x423705 || 60000;
            var _0x1871c9;
            try {
              _0x1871c9 = crypto.getRandomValues(new Uint8Array(0x10)).toString();
            } catch (_0x3143ac) {}
            if (!_0x1871c9) {
              _0x1871c9 = Math.random().toString();
            }
            _0x238c49[_0x1871c9] = {
              'success': _0x423c37,
              'fail': _0x5d5dfc
            };
            _0x2a1ded[_0x2816bd].postMessage({
              'message': "proxyMessage",
              'message_id': _0x1871c9,
              'method': _0x3a7b97,
              'url': _0x17e786,
              'timeout': _0x423705,
              'post_data': _0xf63d74,
              'withCredentials': _0x3b7aa4
            }, '*');
            setTimeout(function () {
              var _0x1dd1bb = _0x238c49[_0x1871c9];
              if (_0x1dd1bb) {
                delete _0x238c49[_0x1871c9];
                if (_0x1dd1bb.fail) {
                  _0x1dd1bb.fail({
                    'status': 0x0,
                    'statusText': "timeout",
                    'responseText': ''
                  }, "timeout");
                }
              }
            }, _0x423705 + 0x3e8);
          } else {
            if (_0x5d5dfc) {
              _0x5d5dfc({
                'status': 0x0,
                'statusText': "abort",
                'responseText': ''
              }, "abort");
            }
          }
        };
        if (!_0x24923f[_0x2816bd]) {
          _0x24923f[_0x2816bd] = true;
          var _0x5572d7 = _0x2816bd.replace(/(https?:\/\/[^\/]+)\/.*/, '$1');
          var _0x3ff553 = document.createElement("iframe");
          _0x3ff553.setAttribute("src", _0x2816bd);
          _0x3ff553.setAttribute("width", '0');
          _0x3ff553.setAttribute("height", '0');
          _0x3ff553.setAttribute("tabindex", '-1');
          _0x3ff553.setAttribute("title", "empty");
          _0x3ff553.setAttribute("style", "display:none");
          _0x3ff553.addEventListener('load', function () {
            _0x2a1ded[_0x2816bd] = _0x3ff553.contentWindow;
            window.addEventListener("message", function (_0x40621e) {
              var _0x3c10a2 = _0x40621e.data;
              if (_0x40621e.origin === _0x5572d7 && _0x3c10a2 && _0x3c10a2.message === "proxyResponse" && _0x3c10a2.message_id) {
                var _0x406002 = _0x238c49[_0x3c10a2.message_id];
                if (_0x406002) {
                  delete _0x238c49[_0x3c10a2.message_id];
                  if (_0x3c10a2.status === 0xc8) {
                    if (_0x406002.success) {
                      _0x406002.success(_0x3c10a2.responseText);
                    }
                  } else {
                    if (_0x406002.fail) {
                      _0x406002.fail({
                        'status': _0x3c10a2.status,
                        'statusText': _0x3c10a2.statusText,
                        'responseText': _0x3c10a2.responseText
                      });
                    }
                  }
                }
              }
            });
            if (_0x27b367) {
              _0x27b367();
            }
            _0x27b367 = null;
          });
          document.body.appendChild(_0x3ff553);
          setTimeout(function () {
            if (_0x27b367) {
              _0x27b367();
            }
            _0x27b367 = null;
          }, 0x2710);
        } else {
          _0x27b367();
        }
      };
      this.proxyCall = function (_0x49ab07, _0xd69ad2, _0x3afabb, _0x52cfcc, _0x4796b9, _0x41de50, _0x1cec62) {
        var _0x557e5a = (window.location.protocol === "https:" ? "https://" : 'http://') + "nb557.surge.sh/proxy.html";
        this.proxyUrlCall(_0x557e5a, _0x49ab07, _0xd69ad2, _0x3afabb, _0x52cfcc, _0x4796b9, _0x41de50, _0x1cec62);
      };
      this.proxyCall2 = function (_0x5b15d2, _0x4a62f0, _0x5c2202, _0x5d7a21, _0x2af414, _0x2defaa, _0x16e2e7) {
        var _0x3a4a9e = (window.location.protocol === "https:" ? "https://" : 'http://') + "lampa.stream/proxy.html";
        this.proxyUrlCall(_0x3a4a9e, _0x5b15d2, _0x4a62f0, _0x5c2202, _0x5d7a21, _0x2af414, _0x2defaa, _0x16e2e7);
      };
      this.proxyCall3 = function (_0x43618a, _0x2d3dec, _0x46ec66, _0xa70170, _0x127a29, _0x3a6d9d, _0x5de1e3) {
        this.proxyUrlCall("https://nb557.github.io/plugins/proxy.html", _0x43618a, _0x2d3dec, _0x46ec66, _0xa70170, _0x127a29, _0x3a6d9d, _0x5de1e3);
      };
      this.extendChoice = function () {
        var _0x1b82da = Lampa.Storage.cache("online_mod_choice_" + _0x53dc78, 0x1f4, {});
        var _0xb3b463 = _0x1b82da[_0x543bfa || _0x418a20.movie.id] || {};
        _0x574752 = true;
        _0x45bfc0[_0x53dc78].extendChoice(_0xb3b463);
      };
      this.saveChoice = function (_0xdba451) {
        var _0x2029d5 = Lampa.Storage.cache("online_mod_choice_" + _0x53dc78, 0x1f4, {});
        _0x2029d5[_0x543bfa || _0x418a20.movie.id] = _0xdba451;
        Lampa.Storage.set('online_mod_choice_' + _0x53dc78, _0x2029d5);
      };
      this.similars = function (_0x1c0b66, _0x4656fc, _0x38ea7a) {
        var _0x77d706 = this;
        _0x1c0b66.forEach(function (_0x1597a3) {
          var _0x3c7da4 = _0x1597a3.title || _0x1597a3.ru_title || _0x1597a3.nameRu || _0x1597a3.en_title || _0x1597a3.nameEn || _0x1597a3.orig_title || _0x1597a3.nameOriginal;
          var _0x42038e = _0x1597a3.orig_title || _0x1597a3.nameOriginal || _0x1597a3.en_title || _0x1597a3.nameEn;
          var _0x9ee4c8 = _0x1597a3.start_date || _0x1597a3.year || '';
          var _0x53226a = [];
          if (_0x42038e && _0x42038e != _0x1597a3.title) {
            _0x53226a.push(_0x42038e);
          }
          if (_0x1597a3.seasons_count) {
            _0x53226a.push(Lampa.Lang.translate("online_mod_seasons_count") + ": " + _0x1597a3.seasons_count);
          }
          if (_0x1597a3.episodes_count) {
            _0x53226a.push(Lampa.Lang.translate("online_mod_episodes_count") + ": " + _0x1597a3.episodes_count);
          }
          _0x1597a3.title = _0x3c7da4;
          _0x1597a3.quality = _0x9ee4c8 ? (_0x9ee4c8 + '').slice(0x0, 0x4) : "----";
          _0x1597a3.info = _0x53226a.length ? " / " + _0x53226a.join(" / ") : '';
          var _0x3fa825 = Lampa.Template.get("online_mod_folder", _0x1597a3);
          _0x3fa825.on("hover:enter", function () {
            _0x77d706.activity.loader(true);
            _0x77d706.reset();
            _0x418a20.search = _0x1597a3.title;
            _0x418a20.search_date = _0x9ee4c8;
            _0x543bfa = _0x1597a3.id;
            _0x77d706.extendChoice();
            _0x45bfc0[_0x53dc78].search(_0x418a20, _0x1597a3.kp_id || _0x1597a3.kinopoisk_id || _0x1597a3.kinopoiskId || _0x1597a3.filmId || _0x1597a3.imdb_id, [_0x1597a3]);
          });
          _0x77d706.append(_0x3fa825);
        });
        if (_0x4656fc) {
          var _0x15b883 = {
            'title': Lampa.Lang.translate("online_mod_show_more"),
            'quality': "...",
            'info': ''
          };
          var _0x3208e4 = Lampa.Template.get("online_mod_folder", _0x15b883);
          _0x3208e4.on("hover:enter", function () {
            _0x77d706.activity.loader(true);
            _0x77d706.reset();
            _0x4656fc(_0x38ea7a);
          });
          this.append(_0x3208e4);
        }
      };
      this.reset = function () {
        _0x17c607 = [];
        _0x38e72a = _0xfcc631.render().find(".selector").eq(0x0)[0x0];
        _0x57dd49.render().find(".empty").remove();
        _0x57dd49.clear();
        _0x57dd49.reset();
      };
      this.inActivity = function () {
        var _0x3bdb01 = $("body");
        return !(_0x3bdb01.hasClass("settings--open") || _0x3bdb01.hasClass('menu--open') || _0x3bdb01.hasClass("keyboard-input--visible") || _0x3bdb01.hasClass("selectbox--open") || _0x3bdb01.hasClass("search--open") || _0x3bdb01.hasClass('ambience--enable') || $("div.modal").length);
      };
      this.loading = function (_0x1053f2) {
        if (_0x1053f2) {
          this.activity.loader(true);
        } else {
          this.activity.loader(false);
          if (Lampa.Activity.active().activity === this.activity && this.inActivity()) {
            this.activity.toggle();
          }
        }
      };
      this.getDefaultQuality = function (_0x3d7853, _0x2085c8) {
        {
          if (_0x3d7853) {
            for (var _0xe3943 in _0x3d7853) {
              if (_0x3d7853[_0xe3943] && _0x42558b(_0x3d7853[_0xe3943], ".m3u8") && _0x3d7853[_0xe3943].lastIndexOf('?') <= _0x3d7853[_0xe3943].lastIndexOf('/')) {
                _0x3d7853[_0xe3943] += '?';
              }
            }
          }
          if (_0x2085c8 && _0x42558b(_0x2085c8, ".m3u8") && _0x2085c8.lastIndexOf('?') <= _0x2085c8.lastIndexOf('/')) {
            _0x2085c8 += '?';
          }
        }
        if (_0x3d7853) {
          var _0x23b657 = _0x1ccf81;
          if (!_0x23b657) {
            _0x23b657 = Lampa.Storage.get("video_quality_default", "1080") + 'p';
            if (_0x23b657 === "1080p") {
              _0x23b657 = "1080p Ultra";
            }
          }
          var _0x575772 = ["2160p", '2160', '4K', "1440p", "1440", '2K', "1080p Ultra", "1080p", '1080', "720p", "720", "480p", "480", "360p", '360', "240p", '240'];
          var _0x4f4cf7 = _0x575772.indexOf(_0x23b657);
          if (_0x4f4cf7 !== -0x1) {
            for (var _0x3dab34 = _0x4f4cf7; _0x3dab34 < _0x575772.length; _0x3dab34++) {
              var _0x1fd628 = _0x575772[_0x3dab34];
              if (_0x3d7853[_0x1fd628]) {
                return _0x3d7853[_0x1fd628];
              }
            }
            for (var _0x2c5770 = _0x4f4cf7 - 0x1; _0x2c5770 >= 0x0; _0x2c5770--) {
              var _0x1bcaf0 = _0x575772[_0x2c5770];
              if (_0x3d7853[_0x1bcaf0]) {
                return _0x3d7853[_0x1bcaf0];
              }
            }
          }
        }
        return _0x2085c8;
      };
      this.renameQualityMap = function (_0x5d0300) {
        if (!_0x5d0300) {
          return _0x5d0300;
        }
        var _0x388bba = {};
        for (var _0x4bf906 in _0x5d0300) {
          _0x388bba['​' + _0x4bf906] = _0x5d0300[_0x4bf906];
        }
        return _0x388bba;
      };
      this.filter = function (_0x361bb5, _0x95e173) {
        var _0x5206b7 = [];
        var _0x46bf9c = function _0x4e3deb(_0x55a878, _0x2d0165) {
          var _0x3e9dce = Lampa.Storage.get("online_mod_filter", '{}');
          var _0x210305 = _0x361bb5[_0x55a878];
          var _0x59d286 = [];
          var _0x44a39c = _0x3e9dce[_0x55a878];
          _0x210305.forEach(function (_0x387d55, _0x246a54) {
            _0x59d286.push({
              'title': _0x387d55,
              'selected': _0x44a39c == _0x246a54,
              'index': _0x246a54
            });
          });
          _0x5206b7.push({
            'title': _0x2d0165,
            'subtitle': _0x210305[_0x44a39c],
            'items': _0x59d286,
            'stype': _0x55a878
          });
        };
        _0x95e173.source = _0x537bb6.indexOf(_0x53dc78);
        Lampa.Storage.set('online_mod_filter', _0x95e173);
        _0x5206b7.push({
          'title': Lampa.Lang.translate('torrent_parser_reset'),
          'reset': true
        });
        _0x361bb5.source = _0x34a561.map(function (_0x306ef8) {
          return _0x306ef8.title;
        });
        _0x46bf9c("source", Lampa.Lang.translate("online_mod_balanser"));
        if (_0x361bb5.voice && _0x361bb5.voice.length) {
          _0x46bf9c('voice', Lampa.Lang.translate('torrent_parser_voice'));
        }
        if (_0x361bb5.season && _0x361bb5.season.length) {
          _0x46bf9c('season', Lampa.Lang.translate("torrent_serial_season"));
        }
        if (_0x361bb5.server && _0x361bb5.server.length) {
          _0x46bf9c("server", Lampa.Lang.translate('online_mod_server'));
        }
        this.updateQualityFilter();
        _0x5206b7.push(_0x29e5c4);
        _0xfcc631.set("filter", _0x5206b7);
        _0xfcc631.set("sort", _0x34a561.map(function (_0x36f4f5) {
          return {
            'source': _0x36f4f5.name,
            'title': _0x36f4f5.title,
            'selected': _0x36f4f5.name === _0x53dc78
          };
        }));
        this.selected(_0x361bb5);
      };
      this.closeFilter = function () {
        if ($("body").hasClass('selectbox--open')) {
          Lampa.Select.close();
        }
      };
      this.selected = function (_0x5461a3) {
        var _0x2e419d = Lampa.Storage.get("online_mod_filter", '{}');
        var _0x4132c1 = [];
        for (var _0x5234ba in _0x2e419d) {
          if (_0x5234ba !== "source" && _0x14b49f[_0x5234ba] && _0x5461a3[_0x5234ba] && _0x5461a3[_0x5234ba].length > 0x1) {
            _0x4132c1.push(_0x14b49f[_0x5234ba] + ": " + _0x5461a3[_0x5234ba][_0x2e419d[_0x5234ba]]);
          }
        }
        var _0x391a2e = _0x34a561.filter(function (_0x25ec7a) {
          return _0x25ec7a.name === _0x53dc78;
        })[0x0];
        _0xfcc631.chosen("filter", _0x4132c1);
        _0xfcc631.chosen("sort", [_0x391a2e ? _0x391a2e.title : _0x53dc78]);
      };
      this.append = function (_0x522faa) {
        _0x522faa.on("hover:focus", function (_0x286c7f) {
          _0x38e72a = _0x286c7f.target;
          _0x57dd49.update($(_0x286c7f.target), true);
        });
        _0x57dd49.append(_0x522faa);
      };
      this.contextmenu = function (_0x17f58d) {
        _0x17c607.push(_0x17f58d);
        _0x17f58d.item.on("hover:long", function () {
          function _0x3bddae(_0x227b58, _0x124ea8) {
            return function (_0x265b99) {
              if (_0x265b99.quality) {
                var _0x4b7b5a = [];
                for (var _0x17186e in _0x265b99.quality) {
                  _0x4b7b5a.push({
                    'title': _0x17186e,
                    'file': _0x265b99.quality[_0x17186e]
                  });
                }
                Lampa.Select.show({
                  'title': _0x227b58,
                  'items': _0x4b7b5a,
                  'onBack': function _0x149f50() {
                    Lampa.Controller.toggle(_0x166dda);
                  },
                  'onSelect': _0x124ea8
                });
              } else {
                _0x124ea8(null, _0x265b99);
              }
            };
          }
          var _0x166dda = Lampa.Controller.enabled().name;
          var _0x5733e9 = [{
            'title': Lampa.Lang.translate("torrent_parser_label_title"),
            'mark': true
          }, {
            'title': Lampa.Lang.translate('torrent_parser_label_cancel_title'),
            'clearmark': true
          }, {
            'title': Lampa.Lang.translate("online_mod_clearmark_all"),
            'clearmark_all': true
          }, {
            'title': Lampa.Lang.translate("time_reset"),
            'timeclear': true
          }, {
            'title': Lampa.Lang.translate("online_mod_timeclear_all"),
            'timeclear_all': true
          }];
          if (Lampa.Platform.is("webos")) {
            _0x5733e9.push({
              'title': Lampa.Lang.translate("player_lauch") + " - Webos",
              'player': "webos"
            });
          }
          if (Lampa.Platform.is('android')) {
            _0x5733e9.push({
              'title': Lampa.Lang.translate('player_lauch') + " - Android",
              'player': "android"
            });
          }
          _0x5733e9.push({
            'title': Lampa.Lang.translate("player_lauch") + " - Lampa",
            'player': 'lampa'
          });
          if (_0x17f58d.file) {
            _0x5733e9.push({
              'title': Lampa.Lang.translate('copy_link'),
              'copylink': true
            });
          }
          if (Lampa.Account.working() && _0x17f58d.element && typeof _0x17f58d.element.season !== "undefined" && Lampa.Account.subscribeToTranslation) {
            _0x5733e9.push({
              'title': Lampa.Lang.translate("online_mod_voice_subscribe"),
              'subscribe': true
            });
          }
          Lampa.Select.show({
            'title': Lampa.Lang.translate("title_action"),
            'items': _0x5733e9,
            'onBack': function _0x1928b1() {
              Lampa.Controller.toggle(_0x166dda);
            },
            'onSelect': function _0x13b7fb(_0x13aecb) {
              if (_0x13aecb.clearmark) {
                Lampa.Arrays.remove(_0x17f58d.viewed, _0x17f58d.hash_file);
                Lampa.Storage.set('online_view', _0x17f58d.viewed);
                _0x17f58d.item.find(".torrent-item__viewed").remove();
              }
              if (_0x13aecb.clearmark_all) {
                _0x17c607.forEach(function (_0xb35e61) {
                  Lampa.Arrays.remove(_0xb35e61.viewed, _0xb35e61.hash_file);
                  Lampa.Storage.set("online_view", _0xb35e61.viewed);
                  _0xb35e61.item.find(".torrent-item__viewed").remove();
                });
              }
              if (_0x13aecb.mark) {
                if (_0x17f58d.viewed.indexOf(_0x17f58d.hash_file) == -0x1) {
                  _0x17f58d.viewed.push(_0x17f58d.hash_file);
                  _0x17f58d.item.append("<div class=\"torrent-item__viewed\">" + Lampa.Template.get("icon_star", {}, true) + "</div>");
                  Lampa.Storage.set('online_view', _0x17f58d.viewed);
                }
              }
              if (_0x13aecb.timeclear) {
                _0x17f58d.view.percent = 0x0;
                _0x17f58d.view.time = 0x0;
                _0x17f58d.view.duration = 0x0;
                Lampa.Timeline.update(_0x17f58d.view);
              }
              if (_0x13aecb.timeclear_all) {
                _0x17c607.forEach(function (_0x235ac1) {
                  _0x235ac1.view.percent = 0x0;
                  _0x235ac1.view.time = 0x0;
                  _0x235ac1.view.duration = 0x0;
                  Lampa.Timeline.update(_0x235ac1.view);
                });
              }
              Lampa.Controller.toggle(_0x166dda);
              if (_0x13aecb.player) {
                Lampa.Player.runas(_0x13aecb.player);
                _0x17f58d.item.trigger('hover:enter', {
                  'runas': _0x13aecb.player
                });
              }
              if (_0x13aecb.copylink) {
                _0x17f58d.file(_0x3bddae("Ссылки", function (_0x573710, _0x47e18c) {
                  Lampa.Utils.copyTextToClipboard(_0x573710 && _0x573710.file || _0x47e18c && _0x47e18c.file, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
                  }, function () {
                    Lampa.Noty.show(Lampa.Lang.translate('copy_error'));
                  });
                }));
              }
              if (_0x13aecb.subscribe) {
                Lampa.Account.subscribeToTranslation({
                  'card': _0x418a20.movie,
                  'season': _0x17f58d.element.season,
                  'episode': _0x17f58d.element.translate_episode_end,
                  'voice': _0x17f58d.element.translate_voice
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate("online_mod_voice_success"));
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate("online_mod_voice_error"));
                });
              }
            }
          });
        }).on("hover:focus", function () {
          if (Lampa.Helper) {
            Lampa.Helper.show("online_file", Lampa.Lang.translate("online_mod_file_helper"), _0x17f58d.item);
          }
        });
      };
      this.empty = function (_0x261b74) {
        var _0x5aa881 = Lampa.Template.get("list_empty");
        if (_0x261b74) {
          _0x5aa881.find(".empty__descr").text(_0x261b74);
        }
        _0x57dd49.append(_0x5aa881);
        this.loading(false);
      };
      this.emptyForQuery = function (_0x55e490) {
        this.empty(Lampa.Lang.translate("online_mod_query_start") + " (" + _0x55e490 + ") " + Lampa.Lang.translate('online_mod_query_end'));
      };
      this.getLastEpisode = function (_0x9c3c9) {
        var _0x161f4d = 0x0;
        _0x9c3c9.forEach(function (_0x1d6eb8) {
          if (typeof _0x1d6eb8.episode !== "undefined") {
            _0x161f4d = Math.max(_0x161f4d, parseInt(_0x1d6eb8.episode));
          }
        });
        return _0x161f4d;
      };
      this.start = function (_0x4c4961) {
        if (Lampa.Activity.active().activity !== this.activity) {
          return;
        }
        if (_0x4c4961) {
          var _0x2248cb = _0x57dd49.render().find(".selector.online").find(".torrent-item__viewed").parent().last();
          if (_0x418a20.movie.number_of_seasons && _0x2248cb.length) {
            _0x38e72a = _0x2248cb.eq(0x0)[0x0];
          } else {
            _0x38e72a = _0x57dd49.render().find(".selector").eq(0x0)[0x0];
          }
        }
        Lampa.Background.immediately(Lampa.Utils.cardImgBackground(_0x418a20.movie));
        Lampa.Controller.add("content", {
          'toggle': function _0x13f4c9() {
            Lampa.Controller.collectionSet(_0x57dd49.render(), _0x435f01.render());
            Lampa.Controller.collectionFocus(_0x38e72a || false, _0x57dd49.render());
          },
          'up': function _0x5a84b3() {
            if (Navigator.canmove('up')) {
              Navigator.move('up');
            } else {
              Lampa.Controller.toggle("head");
            }
          },
          'down': function _0x341c12() {
            Navigator.move("down");
          },
          'right': function _0x4b46d3() {
            if (Navigator.canmove("right")) {
              Navigator.move("right");
            } else {
              _0xfcc631.show(Lampa.Lang.translate("title_filter"), 'filter');
            }
          },
          'left': function _0x184ab5() {
            if (Navigator.canmove("left")) {
              Navigator.move("left");
            } else {
              Lampa.Controller.toggle("menu");
            }
          },
          'back': this.back
        });
        if (this.inActivity()) {
          Lampa.Controller.toggle('content');
        }
      };
      this.render = function () {
        return _0x435f01.render();
      };
      this.back = function () {
        Lampa.Activity.backward();
      };
      this.pause = function () {};
      this.stop = function () {};
      this.destroy = function () {
        _0x3c1919.clear();
        _0x435f01.destroy();
        _0x57dd49.destroy();
        _0x3c1919 = null;
        _0x2ea8d8.forEach(function (_0x4f7dc7) {
          _0x4f7dc7.source.destroy();
        });
      };
    }
    var _0x29b802 = !!(window.TVXHost || window.TVXManager);
    var _0x219600 = navigator.userAgent.toLowerCase().indexOf("tizen") !== -0x1;
    var _0x18fa8d = window.parent !== window;
    var _0x4974b7 = !(window.location.protocol.lastIndexOf('http', 0x0) === 0x0);
    var _0x1b2cae = Lampa.Platform.is('android') && _0x59443e.checkAndroidVersion(0x153);
    var _0x546469 = _0x59443e.filmixHost();
    var _0x2f9c6c = new Lampa.Reguest();
    var _0x532456 = false;
    function _0x371ee7() {
      console.log("App", "start address:", window.location.href);
      console.log("App", "is MSX:", _0x29b802);
      console.log("App", "is Tizen:", _0x219600);
      console.log('App', "is iframe:", _0x18fa8d);
      console.log("App", "is local:", _0x4974b7);
      console.log("App", "supports headers:", _0x1b2cae);
    }
    function _0x322a58() {
      Lampa.Storage.set("online_mod_proxy_lumex", "true");
      Lampa.Storage.set("online_mod_proxy_rezka2", "false");
      Lampa.Storage.set('online_mod_proxy_kinobase', "true");
      Lampa.Storage.set("online_mod_proxy_collaps", "true");
      Lampa.Storage.set("online_mod_proxy_cdnmovies", "true");
      Lampa.Storage.set("online_mod_proxy_fancdn", "true");
      Lampa.Storage.set("online_mod_proxy_fancdn2", "true");
      Lampa.Storage.set("online_mod_proxy_fanserials", "true");
      Lampa.Storage.set("online_mod_proxy_fanserials_cdn", "true");
      Lampa.Storage.set("online_mod_proxy_animelib", "true");
      if (!Lampa.Platform.is("android")) {
        Lampa.Storage.set("online_mod_proxy_filmix", 'true');
      }
      Lampa.Storage.set('online_mod_proxy_videoseed', Lampa.Platform.is("android") || _0x4974b7 ? 'false' : "true");
      Lampa.Storage.set('online_mod_proxy_vibix', Lampa.Platform.is("android") ? 'false' : "true");
      Lampa.Storage.set("online_mod_proxy_redheadsound", Lampa.Platform.is('android') ? "false" : "true");
      Lampa.Storage.set('online_mod_proxy_cdnvideohub', "false");
      Lampa.Storage.set('online_mod_proxy_videodb', "false");
      Lampa.Storage.set('online_mod_proxy_zetflix', "false");
      Lampa.Storage.set("online_mod_proxy_kinopub", "true");
      Lampa.Storage.set("online_mod_proxy_alloha", 'false');
      Lampa.Storage.set("online_mod_proxy_hdvb", "false");
      Lampa.Storage.set("online_mod_proxy_kp", 'false');
      Lampa.Params.trigger('online_mod_iframe_proxy', !_0x219600 || _0x4974b7);
      Lampa.Params.trigger("online_mod_proxy_iframe", false);
      Lampa.Params.trigger('online_mod_use_stream_proxy', false);
      Lampa.Params.trigger("online_mod_proxy_find_ip", false);
      Lampa.Params.trigger('online_mod_proxy_other', false);
      Lampa.Params.trigger('online_mod_proxy_lumex', false);
      Lampa.Params.trigger("online_mod_proxy_rezka", false);
      Lampa.Params.trigger('online_mod_proxy_rezka2', false);
      Lampa.Params.trigger("online_mod_proxy_rezka2_mirror", false);
      Lampa.Params.trigger('online_mod_proxy_kinobase', false);
      Lampa.Params.trigger("online_mod_proxy_collaps", false);
      Lampa.Params.trigger('online_mod_proxy_cdnmovies', false);
      Lampa.Params.trigger("online_mod_proxy_filmix", false);
      Lampa.Params.trigger("online_mod_proxy_videodb", false);
      Lampa.Params.trigger('online_mod_proxy_zetflix', false);
      Lampa.Params.trigger("online_mod_proxy_fancdn", false);
      Lampa.Params.trigger("online_mod_proxy_fancdn2", false);
      Lampa.Params.trigger("online_mod_proxy_fanserials", false);
      Lampa.Params.trigger("online_mod_proxy_fanserials_cdn", false);
      Lampa.Params.trigger("online_mod_proxy_videoseed", false);
      Lampa.Params.trigger("online_mod_proxy_vibix", false);
      Lampa.Params.trigger('online_mod_proxy_redheadsound', false);
      Lampa.Params.trigger("online_mod_proxy_cdnvideohub", false);
      Lampa.Params.trigger("online_mod_proxy_anilibria", false);
      Lampa.Params.trigger("online_mod_proxy_anilibria2", false);
      Lampa.Params.trigger("online_mod_proxy_animelib", false);
      Lampa.Params.trigger("online_mod_proxy_kodik", false);
      Lampa.Params.trigger("online_mod_proxy_kinopub", false);
      Lampa.Params.trigger("online_mod_proxy_alloha", false);
      Lampa.Params.trigger("online_mod_proxy_hdvb", false);
      Lampa.Params.trigger("online_mod_proxy_kp", false);
      Lampa.Params.trigger('online_mod_skip_kp_search', false);
      Lampa.Params.trigger("online_mod_prefer_http", window.location.protocol !== "https:");
      Lampa.Params.trigger("online_mod_prefer_mp4", true);
      Lampa.Params.trigger("online_mod_prefer_dash", false);
      Lampa.Params.trigger("online_mod_collaps_lampa_player", false);
      Lampa.Params.trigger('online_mod_full_episode_title', false);
      Lampa.Params.trigger("online_mod_av1_support", true);
      Lampa.Params.trigger("online_mod_save_last_balanser", false);
      Lampa.Params.trigger("online_mod_rezka2_fix_stream", false);
      Lampa.Params.select('online_mod_kinobase_mirror', '', '');
      Lampa.Params.select('online_mod_kinobase_cookie', '', '');
      Lampa.Params.select("online_mod_rezka2_mirror", '', '');
      Lampa.Params.select('online_mod_rezka2_name', '', '');
      Lampa.Params.select('online_mod_rezka2_password', '', '');
      Lampa.Params.select("online_mod_rezka2_cookie", '', '');
      Lampa.Params.select('online_mod_rezka2_prx_ukr', {
        'prx.ukrtelcdn.net': "prx.ukrtelcdn.net",
        'prx-cogent.ukrtelcdn.net': "prx-cogent.ukrtelcdn.net",
        'prx2-cogent.ukrtelcdn.net': "prx2-cogent.ukrtelcdn.net",
        'prx3-cogent.ukrtelcdn.net': "prx3-cogent.ukrtelcdn.net",
        'prx4-cogent.ukrtelcdn.net': "prx4-cogent.ukrtelcdn.net",
        'prx-ams.ukrtelcdn.net': 'prx-ams.ukrtelcdn.net',
        'prx2-ams.ukrtelcdn.net': 'prx2-ams.ukrtelcdn.net'
      }, "prx.ukrtelcdn.net");
      Lampa.Params.select("online_mod_fancdn_name", '', '');
      Lampa.Params.select("online_mod_fancdn_password", '', '');
      Lampa.Params.select("online_mod_fancdn_cookie", '', '');
      Lampa.Params.select('online_mod_fancdn_token', '', '');
      Lampa.Params.select("online_mod_proxy_other_url", '', '');
      Lampa.Params.select("online_mod_secret_password", '', '');
      if (window.location.protocol === "https:") {
        Lampa.Storage.set("online_mod_prefer_http", "false");
      }
      if (Lampa.Storage.get('online_mod_proxy_reset', '') != 0x7) {
        Lampa.Storage.set("online_mod_proxy_lumex", 'true');
        Lampa.Storage.set("online_mod_proxy_reset", '7');
      }
    }
    function _0x2b74b6() {
      if (!Lampa.Lang) {
        var _0x405b85 = {};
        Lampa.Lang = {
          'add': function _0x35a543(_0x77efe0) {
            _0x405b85 = _0x77efe0;
          },
          'translate': function _0x5c85f5(_0x52f05b) {
            return _0x405b85[_0x52f05b] ? _0x405b85[_0x52f05b].ru : _0x52f05b;
          }
        };
      }
      Lampa.Lang.add({
        'online_mod_watch': {
          'ru': "Смотреть онлайн",
          'uk': "Дивитися онлайн",
          'be': "Глядзець анлайн",
          'en': "Watch online",
          'zh': "在线观看"
        },
        'online_mod_nolink': {
          'ru': "Не удалось извлечь ссылку",
          'uk': "Неможливо отримати посилання",
          'be': "Не ўдалося атрымаць спасылку",
          'en': "Failed to fetch link",
          'zh': '获取链接失败'
        },
        'online_mod_blockedlink': {
          'ru': "К сожалению, это видео не доступно в вашем регионе",
          'uk': "На жаль, це відео не доступне у вашому регіоні",
          'be': "Нажаль, гэта відэа не даступна ў вашым рэгіёне",
          'en': "Sorry, this video is not available in your region",
          'zh': "抱歉，您所在的地区无法观看该视频"
        },
        'online_mod_blockedlink_copyright': {
          'ru': "К сожалению, это видео не доступно по запросу правообладателей",
          'uk': "На жаль, це відео не доступне за запитом правовласників",
          'be': "Нажаль, гэта відэа не даступна па запыце праваўладальнікаў",
          'en': "Sorry, this video is not available due to copyright holder request",
          'zh': "抱歉，由于版权所有者的要求，该视频无法播放。"
        },
        'online_mod_waitlink': {
          'ru': "Работаем над извлечением ссылки, подождите...",
          'uk': "Працюємо над отриманням посилання, зачекайте...",
          'be': "Працуем над выманнем спасылкі, пачакайце...",
          'en': "Working on extracting the link, please wait...",
          'zh': '正在提取链接，请稍候...'
        },
        'online_mod_captcha_address': {
          'ru': "Требуется пройти капчу по адресу: ",
          'uk': "Потрібно пройти капчу за адресою: ",
          'be': "Патрабуецца прайсці капчу па адрасе: ",
          'en': "It is required to pass the captcha at: ",
          'zh': "您需要完成验证码： "
        },
        'online_mod_captcha_proxy': {
          'ru': "Требуется пройти капчу. Попробуйте использовать зеркало вместо прокси",
          'uk': "Потрібно пройти капчу. Спробуйте використовувати дзеркало замість проксі",
          'be': "Патрабуецца прайсці капчу. Паспрабуйце выкарыстоўваць люстэрка замест проксі",
          'en': "It is required to pass the captcha. Try to use a mirror instead of a proxy",
          'zh': "您需要通过验证码。 尝试使用镜子而不是代理"
        },
        'online_mod_balanser': {
          'ru': "Балансер",
          'uk': "Балансер",
          'be': "Балансер",
          'en': "Balancer",
          'zh': "平衡器"
        },
        'online_mod_file_helper': {
          'ru': "Удерживайте клавишу \"ОК\" для вызова контекстного меню",
          'uk': "Утримуйте клавішу \"ОК\" для виклику контекстного меню",
          'be': "Утрымлівайце клавішу \"ОК\" для выкліку кантэкстнага меню",
          'en': "Hold the \"OK\" key to bring up the context menu",
          'zh': '按住“确定”键调出上下文菜单'
        },
        'online_mod_clearmark_all': {
          'ru': "Снять отметку у всех",
          'uk': "Зняти позначку у всіх",
          'be': "Зняць адзнаку ва ўсіх",
          'en': "Uncheck all",
          'zh': '取消所有'
        },
        'online_mod_timeclear_all': {
          'ru': "Сбросить тайм-код у всех",
          'uk': "Скинути тайм-код у всіх",
          'be': "Скінуць тайм-код ва ўсіх",
          'en': "Reset timecode for all",
          'zh': '为所有人重置时间码'
        },
        'online_mod_query_start': {
          'ru': "По запросу",
          'uk': "На запит",
          'be': "Па запыце",
          'en': "On request",
          'zh': "根据要求"
        },
        'online_mod_query_end': {
          'ru': "нет результатов",
          'uk': "немає результатів",
          'be': "няма вынікаў",
          'en': "no results",
          'zh': "没有结果"
        },
        'online_mod_title': {
          'ru': "Онлайн",
          'uk': "Онлайн",
          'be': "Анлайн",
          'en': "Online",
          'zh': '在线的'
        },
        'online_mod_title_full': {
          'ru': "Онлайн Мод",
          'uk': "Онлайн Мод",
          'be': "Анлайн Мод",
          'en': "Online Mod",
          'zh': "在线的 Mod"
        },
        'online_mod_use_stream_proxy': {
          'ru': "Проксировать видеопоток (Укр)",
          'uk': "Проксирувати відеопотік (Укр)",
          'be': "Праксіраваць відэаструмень (Укр)",
          'en': "Proxy video stream (Ukr)",
          'zh': "代理视频流 （乌克兰）"
        },
        'online_mod_proxy_find_ip': {
          'ru': "Передавать свой IP прокси",
          'uk': "Передавати свій IP проксі",
          'be': "Перадаваць свой IP проксі",
          'en': "Send your IP to proxy",
          'zh': "将您的 IP 发送给代理"
        },
        'online_mod_proxy_other': {
          'ru': "Использовать альтернативный прокси",
          'uk': "Використовувати альтернативний проксі",
          'be': "Выкарыстоўваць альтэрнатыўны проксі",
          'en': "Use an alternative proxy",
          'zh': "使用备用代理"
        },
        'online_mod_proxy_other_url': {
          'ru': "Альтернативный прокси",
          'uk': "Альтернативний проксі",
          'be': "Альтэрнатыўны проксі",
          'en': "Alternative proxy",
          'zh': "备用代理"
        },
        'online_mod_proxy_balanser': {
          'ru': "Проксировать",
          'uk': 'Проксирувати',
          'be': "Праксіраваць",
          'en': "Proxy",
          'zh': '代理'
        },
        'online_mod_proxy_kp': {
          'ru': "Проксировать КиноПоиск",
          'uk': "Проксирувати КиноПоиск",
          'be': "Праксіраваць КиноПоиск",
          'en': "Proxy KinoPoisk",
          'zh': "代理 KinoPoisk"
        },
        'online_mod_skip_kp_search': {
          'ru': "Не искать в КиноПоиск",
          'uk': "Не шукати у КиноПоиск",
          'be': "Не шукаць у КиноПоиск",
          'en': "Skip search in KinoPoisk",
          'zh': "在 KinoPoisk 中跳过搜索"
        },
        'online_mod_iframe_proxy': {
          'ru': "Использовать iframe-прокси",
          'uk': "Використовувати iframe-проксі",
          'be': "Выкарыстоўваць iframe-проксі",
          'en': "Use iframe proxy",
          'zh': "使用 iframe 代理"
        },
        'online_mod_prefer_http': {
          'ru': "Предпочитать поток по HTTP",
          'uk': "Віддавати перевагу потіку по HTTP",
          'be': "Аддаваць перавагу патоку па HTTP",
          'en': "Prefer stream over HTTP",
          'zh': "优先于 HTTP 流式传输"
        },
        'online_mod_prefer_mp4': {
          'ru': "Предпочитать поток MP4",
          'uk': "Віддавати перевагу потіку MP4",
          'be': "Аддаваць перавагу патоку MP4",
          'en': "Prefer MP4 stream",
          'zh': "更喜欢 MP4 流"
        },
        'online_mod_prefer_dash': {
          'ru': "Предпочитать DASH вместо HLS",
          'uk': "Віддавати перевагу DASH замість HLS",
          'be': "Аддаваць перавагу DASH замест HLS",
          'en': "Prefer DASH over HLS",
          'zh': "更喜欢 DASH 而不是 HLS"
        },
        'online_mod_collaps_lampa_player': {
          'ru': "Collaps: Встроенный плеер",
          'uk': "Collaps: Вбудований плеєр",
          'be': "Collaps: Убудаваны плэер",
          'en': "Collaps: Lampa player",
          'zh': "Collaps： Lampa播放器"
        },
        'online_mod_full_episode_title': {
          'ru': "Полный формат названия серии",
          'uk': "Повний формат назви серії",
          'be': "Поўны фармат назвы серыі",
          'en': "Full episode title format",
          'zh': "完整剧集标题格式"
        },
        'online_mod_av1_support': {
          'ru': "AV1 поддерживается",
          'uk': "AV1 підтримується",
          'be': "AV1 падтрымліваецца",
          'en': "AV1 supported",
          'zh': "AV1 支持"
        },
        'online_mod_save_last_balanser': {
          'ru': "Сохранять историю балансеров",
          'uk': "Зберігати історію балансерів",
          'be': "Захоўваць гісторыю балансараў",
          'en': "Save history of balancers",
          'zh': "保存平衡器的历史记录"
        },
        'online_mod_clear_last_balanser': {
          'ru': "Очистить историю балансеров",
          'uk': "Очистити історію балансерів",
          'be': "Ачысціць гісторыю балансараў",
          'en': "Clear history of balancers",
          'zh': '清除平衡器的历史记录'
        },
        'online_mod_kinobase_mirror': {
          'ru': "Зеркало для Kinobase",
          'uk': "Дзеркало для Kinobase",
          'be': "Люстэрка для Kinobase",
          'en': "Mirror for Kinobase",
          'zh': "Kinobase的镜子"
        },
        'online_mod_kinobase_cookie': {
          'ru': "Куки для Kinobase",
          'uk': "Кукі для Kinobase",
          'be': "Кукі для Kinobase",
          'en': "Cookie for Kinobase",
          'zh': "Kinobase 的 Cookie"
        },
        'online_mod_rezka2_mirror': {
          'ru': "Зеркало для HDrezka",
          'uk': "Дзеркало для HDrezka",
          'be': "Люстэрка для HDrezka",
          'en': "Mirror for HDrezka",
          'zh': "HDrezka的镜子"
        },
        'online_mod_proxy_rezka2_mirror': {
          'ru': "Проксировать зеркало HDrezka",
          'uk': "Проксирувати дзеркало HDrezka",
          'be': "Праксіраваць люстэрка HDrezka",
          'en': "Proxy HDrezka mirror",
          'zh': '代理HDrezka镜子'
        },
        'online_mod_rezka2_name': {
          'ru': "Логин или email для HDrezka",
          'uk': "Логін чи email для HDrezka",
          'be': "Лагін ці email для HDrezka",
          'en': "Login or email for HDrezka",
          'zh': "HDrezka的登录名或电子邮件"
        },
        'online_mod_rezka2_password': {
          'ru': "Пароль для HDrezka",
          'uk': "Пароль для HDrezka",
          'be': "Пароль для HDrezka",
          'en': "Password for HDrezka",
          'zh': "HDrezka的密码"
        },
        'online_mod_rezka2_login': {
          'ru': "Войти в HDrezka",
          'uk': "Увійти до HDrezka",
          'be': "Увайсці ў HDrezka",
          'en': "Log in to HDrezka",
          'zh': '登录HDrezka'
        },
        'online_mod_rezka2_logout': {
          'ru': "Выйти из HDrezka",
          'uk': "Вийти з HDrezka",
          'be': "Выйсці з HDrezka",
          'en': "Log out of HDrezka",
          'zh': "注销HDrezka"
        },
        'online_mod_rezka2_cookie': {
          'ru': "Куки для HDrezka",
          'uk': "Кукі для HDrezka",
          'be': "Кукі для HDrezka",
          'en': "Cookie for HDrezka",
          'zh': "HDrezka 的 Cookie"
        },
        'online_mod_rezka2_fill_cookie': {
          'ru': "Заполнить куки для HDrezka",
          'uk': "Заповнити кукі для HDrezka",
          'be': "Запоўніць кукі для HDrezka",
          'en': "Fill cookie for HDrezka",
          'zh': "为HDrezka填充Cookie"
        },
        'online_mod_rezka2_fix_stream': {
          'ru': "Фикс видеопотока для HDrezka",
          'uk': "Фікс відеопотоку для HDrezka",
          'be': "Фікс відэаструменю для HDrezka",
          'en': "Fix video stream for HDrezka",
          'zh': "修复 HDrezka 的视频流"
        },
        'online_mod_rezka2_prx_ukr': {
          'ru': "Прокси-сервер для HDrezka (Укр)",
          'uk': "Проксі-сервер для HDrezka (Укр)",
          'be': "Проксі-сервер для HDrezka (Укр)",
          'en': "Proxy server for HDrezka (Ukr)",
          'zh': "HDrezka 的代理服务器 （乌克兰）"
        },
        'online_mod_fancdn_name': {
          'ru': "Логин для FanSerials",
          'uk': "Логін для FanSerials",
          'be': "Лагін для FanSerials",
          'en': "Login for FanSerials",
          'zh': 'FanSerials的登录名'
        },
        'online_mod_fancdn_password': {
          'ru': "Пароль для FanSerials",
          'uk': "Пароль для FanSerials",
          'be': "Пароль для FanSerials",
          'en': "Password for FanSerials",
          'zh': "FanSerials的密码"
        },
        'online_mod_fancdn_cookie': {
          'ru': "Куки для FanSerials",
          'uk': "Кукі для FanSerials",
          'be': "Кукі для FanSerials",
          'en': "Cookie for FanSerials",
          'zh': "FanSerials 的 Cookie"
        },
        'online_mod_fancdn_fill_cookie': {
          'ru': "Заполнить куки для FanSerials",
          'uk': "Заповнити кукі для FanSerials",
          'be': "Запоўніць кукі для FanSerials",
          'en': "Fill cookie for FanSerials",
          'zh': "为FanSerials填充Cookie"
        },
        'online_mod_fancdn_token': {
          'ru': "Токен для FanCDN",
          'uk': "Токен для FanCDN",
          'be': "Токен для FanCDN",
          'en': "Token for FanCDN",
          'zh': "FanCDN 代币"
        },
        'online_mod_authorization_required': {
          'ru': "Требуется авторизация",
          'uk': "Потрібна авторизація",
          'be': "Патрабуецца аўтарызацыя",
          'en': "Authorization required",
          'zh': '需要授权'
        },
        'online_mod_unsupported_mirror': {
          'ru': "Неподдерживаемое зеркало",
          'uk': "Непідтримуване дзеркало",
          'be': "Непадтрымоўванае люстэрка",
          'en': "Unsupported mirror",
          'zh': '不支持的镜子'
        },
        'online_mod_secret_password': {
          'ru': "Секретный пароль",
          'uk': "Секретний пароль",
          'be': "Сакрэтны пароль",
          'en': "Secret password",
          'zh': "秘密密码"
        },
        'online_mod_seasons_count': {
          'ru': "Сезонов",
          'uk': "Сезонів",
          'be': 'Сезонаў',
          'en': "Seasons",
          'zh': '季'
        },
        'online_mod_episodes_count': {
          'ru': 'Эпизодов',
          'uk': "Епізодів",
          'be': "Эпізодаў",
          'en': "Episodes",
          'zh': '集'
        },
        'online_mod_show_more': {
          'ru': "Показать ещё",
          'uk': "Показати ще",
          'be': "Паказаць яшчэ",
          'en': "Show more",
          'zh': "展示更多"
        },
        'online_mod_server': {
          'ru': "Сервер",
          'uk': "Сервер",
          'be': "Сервер",
          'en': 'Server',
          'zh': "服务器"
        },
        'online_mod_filmix_param_add_title': {
          'ru': "Добавить ТОКЕН от Filmix",
          'uk': "Додати ТОКЕН від Filmix",
          'be': "Дадаць ТОКЕН ад Filmix",
          'en': "Add TOKEN from Filmix",
          'zh': "从 Filmix 添加 TOKEN"
        },
        'online_mod_filmix_param_add_descr': {
          'ru': "Добавьте ТОКЕН для подключения подписки",
          'uk': "Додайте ТОКЕН для підключення передплати",
          'be': "Дадайце ТОКЕН для падлучэння падпіскі",
          'en': "Add a TOKEN to connect a subscription",
          'zh': "添加 TOKEN 以连接订阅"
        },
        'online_mod_filmix_param_placeholder': {
          'ru': "Например: nxjekeb57385b..",
          'uk': "Наприклад: nxjekeb57385b..",
          'be': "Напрыклад: nxjekeb57385b..",
          'en': "For example: nxjekeb57385b..",
          'zh': "例如： nxjekeb57385b.."
        },
        'online_mod_filmix_param_add_device': {
          'ru': "Добавить устройство на Filmix",
          'uk': "Додати пристрій на Filmix",
          'be': "Дадаць прыладу на Filmix",
          'en': "Add Device to Filmix",
          'zh': "将设备添加到 Filmix"
        },
        'online_mod_filmix_modal_text': {
          'ru': "Введите его на странице " + _0x546469 + "/consoles в вашем авторизованном аккаунте!",
          'uk': "Введіть його на сторінці " + _0x546469 + "/consoles у вашому авторизованому обліковому записі!",
          'be': "Увядзіце яго на старонцы " + _0x546469 + "/consoles у вашым аўтарызаваным акаўнце!",
          'en': "Enter it at " + _0x546469 + "/consoles in your authorized account!",
          'zh': "在您的授权帐户中的 " + _0x546469 + "/consoles 中输入！"
        },
        'online_mod_filmix_modal_wait': {
          'ru': "Ожидаем код",
          'uk': "Очікуємо код",
          'be': "Чакаем код",
          'en': "Waiting for the code",
          'zh': "等待代码"
        },
        'online_mod_filmix_copy_secuses': {
          'ru': "Код скопирован в буфер обмена",
          'uk': "Код скопійовано в буфер обміну",
          'be': "Код скапіяваны ў буфер абмену",
          'en': "Code copied to clipboard",
          'zh': "代码复制到剪贴板"
        },
        'online_mod_filmix_copy_fail': {
          'ru': "Ошибка при копировании",
          'uk': "Помилка при копіюванні",
          'be': "Памылка пры капіяванні",
          'en': "Copy error",
          'zh': "复制错误"
        },
        'online_mod_filmix_nodevice': {
          'ru': "Устройство не авторизовано",
          'uk': "Пристрій не авторизований",
          'be': "Прылада не аўтарызавана",
          'en': "Device not authorized",
          'zh': "设备未授权"
        },
        'online_mod_filmix_status': {
          'ru': "Статус",
          'uk': "Статус",
          'be': "Статус",
          'en': "Status",
          'zh': '状态'
        },
        'online_mod_voice_subscribe': {
          'ru': "Подписаться на перевод",
          'uk': "Підписатися на переклад",
          'be': "Падпісацца на пераклад",
          'en': "Subscribe to translation",
          'zh': "订阅翻译"
        },
        'online_mod_voice_success': {
          'ru': "Вы успешно подписались",
          'uk': "Ви успішно підписалися",
          'be': "Вы паспяхова падпісаліся",
          'en': "You have successfully subscribed",
          'zh': "您已成功订阅"
        },
        'online_mod_voice_error': {
          'ru': "Возникла ошибка",
          'uk': "Виникла помилка",
          'be': "Узнікла памылка",
          'en': "An error has occurred",
          'zh': "发生了错误"
        }
      });
    }
    function _0x305765() {
      Lampa.Template.add("online_mod", "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 128\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <circle cx=\"64\" cy=\"64\" r=\"56\" stroke=\"white\" stroke-width=\"16\"/>\n                    <path d=\"M90.5 64.3827L50 87.7654L50 41L90.5 64.3827Z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
      Lampa.Template.add('online_mod_folder', "<div class=\"online selector\">\n        <div class=\"online__body\">\n            <div style=\"position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em\">\n                <svg style=\"height: 2.4em; width:  2.4em;\" viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"/>\n                    <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"/>\n                    <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"/>\n                </svg>\n            </div>\n            <div class=\"online__title\" style=\"padding-left: 2.1em;\">{title}</div>\n            <div class=\"online__quality\" style=\"padding-left: 3.4em;\">{quality}{info}</div>\n        </div>\n    </div>");
    }
    function _0x30b764(_0x188bb4) {
      if (Lampa.Storage.field("online_mod_proxy_find_ip") !== true) {
        _0x188bb4();
        return;
      }
      _0x59443e.checkMyIp(_0x2f9c6c, _0x188bb4);
    }
    function _0x40d961(_0x2bf157) {
      var _0x4a6124 = _0x59443e.getCurrentFanserialsHost();
      if (_0x4a6124) {
        _0x2bf157();
        return;
      }
      var _0x3f7f9b = _0x59443e.proxy('cookie');
      var _0x1565bb = '';
      var _0x4a6161 = _0x1b2cae;
      if (!_0x3f7f9b && !_0x4a6161) {
        _0x2bf157();
        return;
      }
      var _0xb61756 = _0x59443e.baseUserAgent();
      var _0x3f3eac = Lampa.Platform.is("android") ? {
        'User-Agent': _0xb61756
      } : {};
      if (_0x3f7f9b) {
        _0x1565bb += "param/User-Agent=" + encodeURIComponent(_0xb61756) + '/';
        _0x1565bb += 'cookie_plus/param/Cookie=/head/';
        _0x4a6161 = false;
      }
      var _0x1c472d = _0x59443e.fanserialsHost() + '/';
      _0x2f9c6c.clear();
      _0x2f9c6c.timeout(0x2710);
      _0x2f9c6c.native(_0x59443e.proxyLink(_0x1c472d, _0x3f7f9b, _0x1565bb, "enc2t"), function (_0x333c52) {
        if (_0x333c52 && _0x333c52.currentUrl) {
          var _0x2da1ed = _0x59443e.parseURL(_0x333c52.currentUrl);
          _0x59443e.setCurrentFanserialsHost(_0x2da1ed.origin);
        }
        _0x2bf157();
      }, function (_0x4c6fce, _0x2c9fd3) {
        _0x2bf157();
      }, false, {
        'headers': _0x3f3eac,
        'returnHeaders': _0x4a6161
      });
    }
    function _0x29dc47(_0x303ae4) {
      if (_0x532456) {
        return;
      }
      _0x532456 = true;
      _0x59443e.setMyIp('');
      _0x30b764(function () {
        _0x40d961(function () {
          _0x532456 = false;
          _0x305765();
          Lampa.Component.add('online_mod', _0x2e5f9f);
          Lampa.Activity.push({
            'url': '',
            'title': Lampa.Lang.translate("online_mod_title_full"),
            'component': "online_mod",
            'search': _0x303ae4.title,
            'search_one': _0x303ae4.title,
            'search_two': _0x303ae4.original_title,
            'movie': _0x303ae4,
            'page': 0x1
          });
        });
      });
    }
    function _0x50cece() {
      Lampa.Component.add("online_mod", _0x2e5f9f);
      _0x305765();
      var _0x16631a = {
        'type': "video",
        'version': "02.07.2026",
        'name': Lampa.Lang.translate("online_mod_title_full") + " - " + "02.07.2026",
        'description': Lampa.Lang.translate("online_mod_watch"),
        'component': 'online_mod',
        'onContextMenu': function _0x75a474(_0x3e352e) {
          return {
            'name': Lampa.Lang.translate('online_mod_watch'),
            'description': ''
          };
        },
        'onContextLauch': function _0x5b465e(_0x288e41) {
          _0x532456 = false;
          _0x29dc47(_0x288e41);
        }
      };
      Lampa.Manifest.plugins = _0x16631a;
      Lampa.Listener.follow('full', function (_0x4e2fdd) {
        if (_0x4e2fdd.type == "complite") {
          var _0x10a070 = $(Lampa.Lang.translate("<div class=\"full-start__button selector view--online_mod\" data-subtitle=\"online_mod 02.07.2026\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" version=\"1.1\" width=\"512\" height=\"512\" x=\"0\" y=\"0\" viewBox=\"0 0 244 260\" style=\"enable-background:new 0 0 512 512\" xml:space=\"preserve\" class=\"\">\n        <g xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M242,88v170H10V88h41l-38,38h37.1l38-38h38.4l-38,38h38.4l38-38h38.3l-38,38H204L242,88L242,88z M228.9,2l8,37.7l0,0 L191.2,10L228.9,2z M160.6,56l-45.8-29.7l38-8.1l45.8,29.7L160.6,56z M84.5,72.1L38.8,42.4l38-8.1l45.8,29.7L84.5,72.1z M10,88 L2,50.2L47.8,80L10,88z\" fill=\"currentColor\"/>\n        </g></svg>\n\n        <span>#{online_mod_title}</span>\n        </div>"));
          _0x532456 = false;
          _0x10a070.on('hover:enter', function () {
            _0x29dc47(_0x4e2fdd.data.movie);
          });
          _0x4e2fdd.object.activity.render().find('.view--torrent').after(_0x10a070);
        }
      });
      if (Lampa.VPN) {
        try {
          if (Lampa.VPN.region) {
            Lampa.VPN.region = function (_0x324bce) {
              if (_0x324bce) {
                _0x324bce('de');
              }
            };
          }
          if (Lampa.VPN.code) {
            Lampa.VPN.code = function () {
              return 'de';
            };
          }
        } catch (_0x2f441e) {}
      }
    }
    var _0xf6827 = Lampa.Platform.is("android") ? {
      'User-Agent': _0x59443e.filmixUserAgent()
    } : {};
    var _0x56bbd7 = _0x59443e.filmixAppHost() + "/api/v2/";
    var _0x42718c = _0x59443e.randomHex(0x10);
    var _0x3bc540;
    function _0x5913e4() {
      if (Lampa.Settings.main && Lampa.Settings.main() && !Lampa.Settings.main().render().find("[data-component=\"filmix\"]").length) {
        var _0x1abb36 = $("<div class=\"settings-folder selector\" data-component=\"filmix\">\n            <div class=\"settings-folder__icon\">\n                <svg height=\"57\" viewBox=\"0 0 58 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M20 20.3735V45H26.8281V34.1262H36.724V26.9806H26.8281V24.3916C26.8281 21.5955 28.9062 19.835 31.1823 19.835H39V13H26.8281C23.6615 13 20 15.4854 20 20.3735Z\" fill=\"white\"/>\n                <rect x=\"2\" y=\"2\" width=\"54\" height=\"53\" rx=\"5\" stroke=\"white\" stroke-width=\"4\"/>\n                </svg>\n            </div>\n            <div class=\"settings-folder__name\">Filmix</div>\n        </div>");
        Lampa.Settings.main().render().find("[data-component=\"more\"]").after(_0x1abb36);
        Lampa.Settings.main().update();
      }
    }
    function _0x53fa0d() {
      var _0x233c06 = Lampa.Storage.get('filmix_status', '{}');
      var _0x2acecd = Lampa.Lang.translate("online_mod_filmix_nodevice");
      if (_0x233c06.login) {
        if (_0x233c06.is_pro) {
          _0x2acecd = _0x233c06.login + " - PRO " + Lampa.Lang.translate("filter_rating_to") + " - " + _0x233c06.pro_date;
        } else {
          if (_0x233c06.is_pro_plus) {
            _0x2acecd = _0x233c06.login + " - PRO_PLUS " + Lampa.Lang.translate('filter_rating_to') + " - " + _0x233c06.pro_date;
          } else {
            _0x2acecd = _0x233c06.login + " - NO PRO";
          }
        }
      }
      var _0x219ad9 = $(Lampa.Lang.translate("\n        <div class=\"settings-param\" data-name=\"filmix_status\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_status}</div>\n            <div class=\"settings-param__value\">".concat(_0x2acecd, "</div>\n        </div>")));
      $(".settings [data-name=\"filmix_status\"]").remove();
      $(".settings [data-name=\"filmix_add\"]").after(_0x219ad9);
    }
    function _0x586ad6(_0xd65b41, _0x4e159f) {
      var _0xb9c2d7 = _0x59443e.proxy("filmix");
      var _0x10914b = '';
      if (_0xb9c2d7) {
        _0x10914b += "param/User-Agent=" + encodeURIComponent(_0x59443e.filmixUserAgent()) + '/';
      }
      _0x2f9c6c.clear();
      _0x2f9c6c.timeout(0x1f40);
      _0x2f9c6c.native(_0x59443e.proxyLink(_0x56bbd7 + "user_profile" + _0x59443e.filmixToken(_0x42718c, _0xd65b41), _0xb9c2d7, _0x10914b, "enc2t"), function (_0x488c69) {
        if (_0x488c69) {
          if (_0x488c69.user_data) {
            Lampa.Storage.set("filmix_status", _0x488c69.user_data);
            if (_0x4e159f) {
              _0x4e159f();
            }
          } else {
            Lampa.Storage.set('filmix_status', {});
          }
          _0x53fa0d();
        }
      }, function (_0x2eab09, _0x4bfd5c) {
        Lampa.Noty.show(_0x2f9c6c.errorDecode(_0x2eab09, _0x4bfd5c));
      }, false, {
        'headers': _0xf6827
      });
    }
    function _0x5ac47b() {
      Lampa.Params.select('filmix_token', '', '');
      Lampa.Template.add('settings_filmix', "<div>\n        <div class=\"settings-param selector\" data-name=\"filmix_token\" data-type=\"input\" placeholder=\"#{online_mod_filmix_param_placeholder}\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_param_add_title}</div>\n            <div class=\"settings-param__value\"></div>\n            <div class=\"settings-param__descr\">#{online_mod_filmix_param_add_descr}</div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"filmix_add\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_filmix_param_add_device}</div>\n        </div>\n    </div>");
      Lampa.Storage.listener.follow("change", function (_0x3bc421) {
        if (_0x3bc421.name == "filmix_token") {
          window.mod_filmix = {
            'max_qualitie': 0x1e0,
            'is_max_qualitie': false
          };
          if (_0x3bc421.value) {
            _0x586ad6(_0x3bc421.value);
          } else {
            Lampa.Storage.set("filmix_status", {});
            _0x53fa0d();
          }
        }
      });
      if (window.appready) {
        _0x5913e4();
      } else {
        Lampa.Listener.follow('app', function (_0x6206a9) {
          if (_0x6206a9.type == "ready") {
            _0x5913e4();
          }
        });
      }
      Lampa.Settings.listener.follow('open', function (_0x1fb884) {
        if (_0x1fb884.name == "filmix") {
          _0x1fb884.body.find("[data-name=\"filmix_add\"]").unbind("hover:enter").on("hover:enter", function () {
            var _0x3379d0 = '';
            var _0x491ff3 = '';
            var _0x67a2f6 = _0x59443e.proxy('filmix');
            var _0x3ba78d = '';
            if (_0x67a2f6) {
              _0x3ba78d += "param/User-Agent=" + encodeURIComponent(_0x59443e.filmixUserAgent()) + '/';
            }
            var _0x3c273e = $("<div><div class=\"broadcast__text\">" + Lampa.Lang.translate("online_mod_filmix_modal_text") + "</div><div class=\"broadcast__device selector\" style=\"text-align: center\">" + Lampa.Lang.translate("online_mod_filmix_modal_wait") + "...</div><br><div class=\"broadcast__scan\"><div></div></div></div></div>");
            Lampa.Modal.open({
              'title': '',
              'html': _0x3c273e,
              'onBack': function _0x2e4c51() {
                clearInterval(_0x3bc540);
                Lampa.Modal.close();
                Lampa.Controller.toggle('settings_component');
              },
              'onSelect': function _0x171d8f() {
                Lampa.Utils.copyTextToClipboard(_0x3379d0, function () {
                  Lampa.Noty.show(Lampa.Lang.translate("online_mod_filmix_copy_secuses"));
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate("online_mod_filmix_copy_fail"));
                });
              }
            });
            _0x3bc540 = setInterval(function () {
              _0x586ad6(_0x491ff3, function () {
                clearInterval(_0x3bc540);
                Lampa.Modal.close();
                Lampa.Storage.set('filmix_token', _0x491ff3);
                _0x1fb884.body.find("[data-name=\"filmix_token\"] .settings-param__value").text(_0x491ff3);
                Lampa.Controller.toggle('settings_component');
              });
            }, 0x2710);
            _0x2f9c6c.clear();
            _0x2f9c6c.timeout(0x2710);
            _0x2f9c6c.native(_0x59443e.proxyLink(_0x56bbd7 + "token_request" + _0x59443e.filmixToken(_0x42718c, ''), _0x67a2f6, _0x3ba78d, 'enc2t'), function (_0x533878) {
              if (_0x533878 && _0x533878.status == 'ok') {
                _0x491ff3 = _0x533878.code;
                _0x3379d0 = _0x533878.user_code;
                _0x3c273e.find(".selector").text(_0x3379d0);
              } else {
                clearInterval(_0x3bc540);
                _0x3c273e.find(".selector").text(Lampa.Lang.translate("network_401"));
                _0x3c273e.find('.broadcast__scan').remove();
                Lampa.Noty.show(Lampa.Lang.translate("network_401"));
              }
            }, function (_0x476476, _0x1f8a4e) {
              clearInterval(_0x3bc540);
              _0x3c273e.find('.selector').text(Lampa.Lang.translate("network_noconnect") + ": " + _0x2f9c6c.errorCode(_0x476476));
              _0x3c273e.find(".broadcast__scan").remove();
              Lampa.Noty.show(_0x2f9c6c.errorDecode(_0x476476, _0x1f8a4e));
            }, false, {
              'headers': _0xf6827
            });
          });
          _0x53fa0d();
        }
      });
    }
    function _0x2949d6(_0x21c6ff, _0x14a3fe) {
      var _0x244c88 = _0x59443e.rezka2Mirror();
      var _0x4b12c6 = _0x244c88 + "/ajax/login/";
      var _0x3dc573 = "login_name=" + encodeURIComponent(Lampa.Storage.get("online_mod_rezka2_name", ''));
      _0x3dc573 += "&login_password=" + encodeURIComponent(Lampa.Storage.get('online_mod_rezka2_password', ''));
      _0x3dc573 += "&login_not_save=0";
      _0x2f9c6c.clear();
      _0x2f9c6c.timeout(0x1f40);
      _0x2f9c6c.silent(_0x4b12c6, function (_0x1e02aa) {
        if (_0x1e02aa && (_0x1e02aa.success || _0x1e02aa.message == "Уже авторизован на сайте. Необходимо обновить страницу!")) {
          Lampa.Storage.set("online_mod_rezka2_status", "true");
          _0x2f9c6c.clear();
          _0x2f9c6c.timeout(0x1f40);
          _0x2f9c6c.silent(_0x244c88 + '/', function (_0x35f2bd) {
            _0x35f2bd = (_0x35f2bd || '').replace(/\n/g, '');
            var _0x167399 = _0x35f2bd.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);
            if (_0x167399) {
              Lampa.Noty.show(_0x167399[0x0]);
              if (_0x14a3fe) {
                _0x14a3fe();
              }
              return;
            }
            var _0x9a924f = _0x35f2bd.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);
            if (_0x9a924f) {
              Lampa.Noty.show(Lampa.Lang.translate("online_mod_unsupported_mirror") + " HDrezka");
              _0x295ab8(_0x14a3fe, _0x14a3fe);
              return;
            }
            if (_0x21c6ff) {
              _0x21c6ff();
            }
          }, function (_0x123d19, _0x52f92c) {
            if (_0x21c6ff) {
              _0x21c6ff();
            }
          }, false, {
            'dataType': "text",
            'withCredentials': true
          });
        } else {
          Lampa.Storage.set("online_mod_rezka2_status", "false");
          if (_0x1e02aa && _0x1e02aa.message) {
            Lampa.Noty.show(_0x1e02aa.message);
          }
          if (_0x14a3fe) {
            _0x14a3fe();
          }
        }
      }, function (_0x20133f, _0xe265e4) {
        Lampa.Noty.show(_0x2f9c6c.errorDecode(_0x20133f, _0xe265e4));
        if (_0x14a3fe) {
          _0x14a3fe();
        }
      }, _0x3dc573, {
        'withCredentials': true
      });
    }
    function _0x295ab8(_0x24be3b, _0x556e3f) {
      var _0x5f4446 = _0x59443e.rezka2Mirror() + "/logout/";
      _0x2f9c6c.clear();
      _0x2f9c6c.timeout(0x1f40);
      _0x2f9c6c.silent(_0x5f4446, function (_0x426340) {
        Lampa.Storage.set("online_mod_rezka2_status", "false");
        if (_0x24be3b) {
          _0x24be3b();
        }
      }, function (_0x2380a8, _0x1b6b17) {
        Lampa.Storage.set("online_mod_rezka2_status", 'false');
        Lampa.Noty.show(_0x2f9c6c.errorDecode(_0x2380a8, _0x1b6b17));
        if (_0x556e3f) {
          _0x556e3f();
        }
      }, false, {
        'dataType': "text",
        'withCredentials': true
      });
    }
    function _0x20b6c8(_0x47a436, _0x20a6b0) {
      var _0x57456a = _0x59443e.proxy("rezka2");
      var _0x562b6e = '';
      var _0x543713 = _0x1b2cae;
      var _0x3b1f3d = Lampa.Storage.field("online_mod_proxy_rezka2_mirror") === true;
      var _0x46663a = _0x57456a && !_0x3b1f3d ? "https://rezka.ag" : _0x59443e.rezka2Mirror();
      if (!_0x57456a && !_0x543713) {
        _0x57456a = _0x59443e.proxy("cookie");
      }
      if (!_0x57456a && !_0x543713) {
        if (_0x20a6b0) {
          _0x20a6b0();
        }
        return;
      }
      var _0x311b2f = _0x59443e.baseUserAgent();
      var _0x59d24f = Lampa.Platform.is('android') ? {
        'User-Agent': _0x311b2f
      } : {};
      if (_0x57456a) {
        _0x562b6e += "param/User-Agent=" + encodeURIComponent(_0x311b2f) + '/';
        _0x562b6e += 'cookie_plus/param/Cookie=/';
        _0x543713 = false;
      }
      var _0x1f8c83 = _0x46663a + '/ajax/login/';
      var _0x576629 = "login_name=" + encodeURIComponent(Lampa.Storage.get("online_mod_rezka2_name", ''));
      _0x576629 += "&login_password=" + encodeURIComponent(Lampa.Storage.get("online_mod_rezka2_password", ''));
      _0x576629 += '&login_not_save=0';
      _0x2f9c6c.clear();
      _0x2f9c6c.timeout(0x1f40);
      _0x2f9c6c.native(_0x59443e.proxyLink(_0x1f8c83, _0x57456a, _0x562b6e, "enc2t"), function (_0x50d76d) {
        var _0x4ad379 = '';
        var _0x197835 = {};
        var _0x1584d9 = '';
        var _0x2944e7 = _0x50d76d && _0x50d76d.body || {};
        _0x2944e7 = typeof _0x2944e7 === "string" ? Lampa.Arrays.decodeJson(_0x2944e7, {}) : _0x2944e7;
        if (!_0x2944e7.success) {
          if (_0x2944e7.message) {
            Lampa.Noty.show(_0x2944e7.message);
          }
          if (_0x20a6b0) {
            _0x20a6b0();
          }
          return;
        }
        var _0x593121 = _0x50d76d && _0x50d76d.headers && _0x50d76d.headers["set-cookie"] || null;
        if (_0x593121 && _0x593121.forEach) {
          _0x593121.forEach(function (_0x5ac255) {
            var _0x5d986e = _0x5ac255.split(';')[0x0].split('=');
            if (_0x5d986e[0x0]) {
              if (_0x5d986e[0x1] === "deleted") {
                delete _0x197835[_0x5d986e[0x0]];
              } else {
                _0x197835[_0x5d986e[0x0]] = _0x5d986e[0x1] || '';
              }
            }
          });
          _0x1584d9 = _0x197835.PHPSESSID;
          delete _0x197835.PHPSESSID;
          var _0x5ae049 = [];
          for (var _0x754cde in _0x197835) {
            _0x5ae049.push(_0x754cde + '=' + _0x197835[_0x754cde]);
          }
          _0x4ad379 = _0x5ae049.join("; ");
        }
        if (_0x4ad379) {
          Lampa.Storage.set("online_mod_rezka2_cookie", _0x4ad379);
          if (_0x4ad379.indexOf('PHPSESSID=') == -0x1) {
            _0x4ad379 = "PHPSESSID=" + (_0x1584d9 || _0x59443e.randomId(0x1a)) + (_0x4ad379 ? "; " + _0x4ad379 : '');
          }
          var _0x836a6a = _0x562b6e;
          if (_0x57456a) {
            _0x836a6a += "param/Cookie=" + encodeURIComponent(_0x4ad379) + '/';
          } else {
            _0x59d24f.Cookie = _0x4ad379;
          }
          _0x2f9c6c.clear();
          _0x2f9c6c.timeout(0x1f40);
          _0x2f9c6c.native(_0x59443e.proxyLink(_0x46663a + '/', _0x57456a, _0x836a6a, "enc2t"), function (_0x2e455f) {
            var _0x3f5f62 = typeof _0x2e455f === 'string' ? Lampa.Arrays.decodeJson(_0x2e455f, {}) : _0x2e455f;
            var _0x4ed302 = (_0x3f5f62 && _0x3f5f62.body || '').replace(/\n/g, '');
            var _0x241ab5 = _0x4ed302.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);
            if (_0x241ab5) {
              Lampa.Noty.show(_0x241ab5[0x0]);
              if (_0x20a6b0) {
                _0x20a6b0();
              }
              return;
            }
            var _0x231e66 = _0x3f5f62 && _0x3f5f62.headers && _0x3f5f62.headers["set-cookie"] || null;
            if (_0x231e66 && _0x231e66.forEach) {
              _0x231e66.forEach(function (_0x1ec18d) {
                var _0x3de5c3 = _0x1ec18d.split(';')[0x0].split('=');
                if (_0x3de5c3[0x0]) {
                  if (_0x3de5c3[0x1] === 'deleted') {
                    delete _0x197835[_0x3de5c3[0x0]];
                  } else {
                    _0x197835[_0x3de5c3[0x0]] = _0x3de5c3[0x1] || '';
                  }
                }
              });
              _0x1584d9 = _0x197835.PHPSESSID || _0x1584d9;
              delete _0x197835.PHPSESSID;
              var _0x35873b = [];
              for (var _0x473a3f in _0x197835) {
                _0x35873b.push(_0x473a3f + '=' + _0x197835[_0x473a3f]);
              }
              _0x4ad379 = _0x35873b.join("; ");
              if (_0x4ad379) {
                Lampa.Storage.set("online_mod_rezka2_cookie", _0x4ad379);
              }
            }
            var _0x323017 = _0x4ed302.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);
            if (_0x323017) {
              var _0x82497e;
              try {
                _0x82497e = (0x0, eval)("\"use strict\"; (function(name, value){ return {name: name, value: value}; })" + _0x323017[0x1] + ';');
              } catch (_0x4bc4d3) {}
              if (_0x82497e) {
                _0x197835[_0x82497e.name] = _0x82497e.value;
                var _0x5966b9 = [];
                for (var _0x9c82b7 in _0x197835) {
                  _0x5966b9.push(_0x9c82b7 + '=' + _0x197835[_0x9c82b7]);
                }
                _0x4ad379 = _0x5966b9.join("; ");
                if (_0x4ad379) {
                  Lampa.Storage.set("online_mod_rezka2_cookie", _0x4ad379);
                }
                if (_0x4ad379.indexOf('PHPSESSID=') == -0x1) {
                  _0x4ad379 = "PHPSESSID=" + (_0x1584d9 || _0x59443e.randomId(0x1a)) + (_0x4ad379 ? "; " + _0x4ad379 : '');
                }
                var _0x18b274 = _0x562b6e;
                if (_0x57456a) {
                  _0x18b274 += "param/Cookie=" + encodeURIComponent(_0x4ad379) + '/';
                } else {
                  _0x59d24f.Cookie = _0x4ad379;
                }
                _0x2f9c6c.clear();
                _0x2f9c6c.timeout(0x1f40);
                _0x2f9c6c.native(_0x59443e.proxyLink(_0x46663a + '/', _0x57456a, _0x18b274, 'enc2t'), function (_0x104a91) {
                  var _0x287534 = typeof _0x104a91 === "string" ? Lampa.Arrays.decodeJson(_0x104a91, {}) : _0x104a91;
                  var _0x24a2ff = (_0x287534 && _0x287534.body || '').replace(/\n/g, '');
                  var _0x229dc3 = _0x24a2ff.match(/(<div class="error-code">[^<]*<div>[^<]*<\/div>[^<]*<\/div>)\s*(<div class="error-title">[^<]*<\/div>)/);
                  if (_0x229dc3) {
                    Lampa.Noty.show(_0x229dc3[0x0]);
                    if (_0x20a6b0) {
                      _0x20a6b0();
                    }
                    return;
                  }
                  var _0x239a95 = _0x24a2ff.match(/<span>MIRROR<\/span>.*<button type="submit" onclick="\$\.cookie(\([^)]*\))/);
                  if (_0x239a95) {
                    Lampa.Storage.set("online_mod_rezka2_cookie", '');
                    Lampa.Noty.show(Lampa.Lang.translate('online_mod_unsupported_mirror') + " HDrezka");
                    if (_0x20a6b0) {
                      _0x20a6b0();
                    }
                    return;
                  }
                  var _0x32f058 = _0x287534 && _0x287534.headers && _0x287534.headers["set-cookie"] || null;
                  if (_0x32f058 && _0x32f058.forEach) {
                    _0x32f058.forEach(function (_0x28142a) {
                      var _0x3b401c = _0x28142a.split(';')[0x0].split('=');
                      if (_0x3b401c[0x0]) {
                        if (_0x3b401c[0x1] === "deleted") {
                          delete _0x197835[_0x3b401c[0x0]];
                        } else {
                          _0x197835[_0x3b401c[0x0]] = _0x3b401c[0x1] || '';
                        }
                      }
                    });
                    _0x1584d9 = _0x197835.PHPSESSID || _0x1584d9;
                    delete _0x197835.PHPSESSID;
                    var _0x40655e = [];
                    for (var _0x220124 in _0x197835) {
                      _0x40655e.push(_0x220124 + '=' + _0x197835[_0x220124]);
                    }
                    _0x4ad379 = _0x40655e.join("; ");
                    if (_0x4ad379) {
                      Lampa.Storage.set("online_mod_rezka2_cookie", _0x4ad379);
                    }
                  }
                  if (_0x47a436) {
                    _0x47a436();
                  }
                }, function (_0x4a9a16, _0x45b543) {
                  if (_0x47a436) {
                    _0x47a436();
                  }
                }, false, {
                  'dataType': 'text',
                  'headers': _0x59d24f,
                  'returnHeaders': _0x543713
                });
                return;
              }
            }
            if (_0x47a436) {
              _0x47a436();
            }
          }, function (_0x2e4faf, _0x5aaa5a) {
            if (_0x47a436) {
              _0x47a436();
            }
          }, false, {
            'dataType': "text",
            'headers': _0x59d24f,
            'returnHeaders': _0x543713
          });
        } else {
          if (_0x20a6b0) {
            _0x20a6b0();
          }
        }
      }, function (_0x5222fb, _0x743fae) {
        Lampa.Noty.show(_0x2f9c6c.errorDecode(_0x5222fb, _0x743fae));
        if (_0x20a6b0) {
          _0x20a6b0();
        }
      }, _0x576629, {
        'headers': _0x59d24f,
        'returnHeaders': _0x543713
      });
    }
    function _0x4a4117(_0x45421e, _0x3a1bf0) {
      var _0x4e4802 = _0x59443e.proxy("fancdn");
      var _0x438878 = '';
      var _0x3a957e = _0x1b2cae;
      if (!_0x4e4802 && !_0x3a957e) {
        if (_0x3a1bf0) {
          _0x3a1bf0();
        }
        return;
      }
      var _0x20bf50 = _0x59443e.fanserialsHost();
      var _0x18a7e1 = _0x59443e.baseUserAgent();
      var _0x5ab5a1 = Lampa.Platform.is("android") ? {
        'User-Agent': _0x18a7e1
      } : {};
      if (_0x4e4802) {
        _0x438878 += "param/User-Agent=" + encodeURIComponent(_0x18a7e1) + '/';
        _0x438878 += 'cookie_plus/param/Cookie=/';
        _0x3a957e = false;
      }
      var _0x28fdce = _0x20bf50 + '/';
      var _0x5607c7 = "login_name=" + encodeURIComponent(Lampa.Storage.get("online_mod_fancdn_name", ''));
      _0x5607c7 += '&login_password=' + encodeURIComponent(Lampa.Storage.get("online_mod_fancdn_password", ''));
      _0x5607c7 += "&login=submit";
      _0x2f9c6c.clear();
      _0x2f9c6c.timeout(0x1f40);
      _0x2f9c6c.native(_0x59443e.proxyLink(_0x28fdce, _0x4e4802, _0x438878, "enc2t"), function (_0x526e9d) {
        var _0x5a7118 = '';
        var _0x1fde9c = {};
        var _0x5ee7c9 = '';
        var _0x32f87c = typeof _0x526e9d === 'string' ? Lampa.Arrays.decodeJson(_0x526e9d, {}) : _0x526e9d;
        var _0x22a89f = (_0x32f87c && _0x32f87c.body || '').replace(/\n/g, '');
        var _0xd73801 = _0x22a89f.match(/(<div class="berrors-inner">[^<]*<b class="berrors-title">[^<]*<\/b>[^<]*<\/div>)/);
        if (_0xd73801) {
          Lampa.Noty.show(_0xd73801[0x0]);
          if (_0x3a1bf0) {
            _0x3a1bf0();
          }
          return;
        }
        var _0x1e2f5a = _0x32f87c && _0x32f87c.headers && _0x32f87c.headers["set-cookie"] || null;
        if (_0x1e2f5a && _0x1e2f5a.forEach) {
          _0x1e2f5a.forEach(function (_0x3cf9f1) {
            var _0x18c86b = _0x3cf9f1.split(';')[0x0].split('=');
            if (_0x18c86b[0x0]) {
              if (_0x18c86b[0x1] === 'deleted') {
                delete _0x1fde9c[_0x18c86b[0x0]];
              } else {
                _0x1fde9c[_0x18c86b[0x0]] = _0x18c86b[0x1] || '';
              }
            }
          });
          _0x5ee7c9 = _0x1fde9c.PHPSESSID;
          delete _0x1fde9c.PHPSESSID;
          var _0x2900af = [];
          for (var _0xf6f83b in _0x1fde9c) {
            _0x2900af.push(_0xf6f83b + '=' + _0x1fde9c[_0xf6f83b]);
          }
          _0x5a7118 = _0x2900af.join("; ");
        }
        if (_0x5a7118) {
          Lampa.Storage.set("online_mod_fancdn_cookie", _0x5a7118);
          if (_0x5a7118.indexOf("PHPSESSID=") == -0x1) {
            _0x5a7118 = "PHPSESSID=" + (_0x5ee7c9 || _0x59443e.randomHex(0x20)) + (_0x5a7118 ? "; " + _0x5a7118 : '');
          }
          var _0x521b45 = _0x438878;
          if (_0x4e4802) {
            _0x521b45 += "param/Cookie=" + encodeURIComponent(_0x5a7118) + '/';
          } else {
            _0x5ab5a1.Cookie = _0x5a7118;
          }
          _0x2f9c6c.clear();
          _0x2f9c6c.timeout(0x1f40);
          _0x2f9c6c.native(_0x59443e.proxyLink(_0x20bf50 + '/', _0x4e4802, _0x521b45, "enc2t"), function (_0x4e9c62) {
            var _0x435d8c = typeof _0x4e9c62 === "string" ? Lampa.Arrays.decodeJson(_0x4e9c62, {}) : _0x4e9c62;
            var _0x2d0585 = (_0x435d8c && _0x435d8c.body || '').replace(/\n/g, '');
            var _0x1235fc = _0x2d0585.match(/(<div class="berrors-inner">[^<]*<b class="berrors-title">[^<]*<\/b>[^<]*<\/div>)/);
            if (_0x1235fc) {
              Lampa.Noty.show(_0x1235fc[0x0]);
              if (_0x3a1bf0) {
                _0x3a1bf0();
              }
              return;
            }
            var _0x29612c = _0x435d8c && _0x435d8c.headers && _0x435d8c.headers["set-cookie"] || null;
            if (_0x29612c && _0x29612c.forEach) {
              _0x29612c.forEach(function (_0x23a76a) {
                var _0x467e98 = _0x23a76a.split(';')[0x0].split('=');
                if (_0x467e98[0x0]) {
                  if (_0x467e98[0x1] === 'deleted') {
                    delete _0x1fde9c[_0x467e98[0x0]];
                  } else {
                    _0x1fde9c[_0x467e98[0x0]] = _0x467e98[0x1] || '';
                  }
                }
              });
              delete _0x1fde9c.PHPSESSID;
              var _0x4f160a = [];
              for (var _0x221d3b in _0x1fde9c) {
                _0x4f160a.push(_0x221d3b + '=' + _0x1fde9c[_0x221d3b]);
              }
              _0x5a7118 = _0x4f160a.join("; ");
              if (_0x5a7118) {
                Lampa.Storage.set('online_mod_fancdn_cookie', _0x5a7118);
              }
            }
            if (_0x45421e) {
              _0x45421e();
            }
          }, function (_0x282f4e, _0x1024db) {
            if (_0x45421e) {
              _0x45421e();
            }
          }, false, {
            'dataType': "text",
            'headers': _0x5ab5a1,
            'returnHeaders': _0x3a957e
          });
        } else {
          if (_0x3a1bf0) {
            _0x3a1bf0();
          }
        }
      }, function (_0x1e96b3, _0x55a3ea) {
        Lampa.Noty.show(_0x2f9c6c.errorDecode(_0x1e96b3, _0x55a3ea));
        if (_0x3a1bf0) {
          _0x3a1bf0();
        }
      }, _0x5607c7, {
        'dataType': "text",
        'headers': _0x5ab5a1,
        'returnHeaders': _0x3a957e
      });
    }
    function _0x5079c4() {
      if (Lampa.Settings.main && Lampa.Settings.main() && !Lampa.Settings.main().render().find("[data-component=\"online_mod\"]").length) {
        var _0x218111 = $(Lampa.Lang.translate("<div class=\"settings-folder selector\" data-component=\"online_mod\">\n            <div class=\"settings-folder__icon\">\n                <svg height=\"260\" viewBox=\"0 0 244 260\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M242,88v170H10V88h41l-38,38h37.1l38-38h38.4l-38,38h38.4l38-38h38.3l-38,38H204L242,88L242,88z M228.9,2l8,37.7l0,0 L191.2,10L228.9,2z M160.6,56l-45.8-29.7l38-8.1l45.8,29.7L160.6,56z M84.5,72.1L38.8,42.4l38-8.1l45.8,29.7L84.5,72.1z M10,88 L2,50.2L47.8,80L10,88z\" fill=\"white\"/>\n                </svg>\n            </div>\n            <div class=\"settings-folder__name\">#{online_mod_title_full}</div>\n        </div>"));
        Lampa.Settings.main().render().find("[data-component=\"more\"]").after(_0x218111);
        Lampa.Settings.main().update();
      }
    }
    function _0x2d5dfe() {
      var _0xe3e1e2 = "<div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_lumex\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Lumex</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_rezka2\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} HDrezka</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_kinobase\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Kinobase</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_collaps\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Collaps</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_cdnmovies\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} CDNMovies</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_filmix\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Filmix</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fancdn\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanCDN</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fancdn2\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanCDN (ID)</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fanserials\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanSerials</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_fanserials_cdn\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} FanSerials CDN</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_videoseed\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} VideoSeed</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_vibix\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Vibix</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_redheadsound\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} RedHeadSound</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_cdnvideohub\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} CDNVideoHub</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_anilibria\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} AniLibria</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_anilibria2\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} AniLibria.top</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_animelib\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} AnimeLib</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_kodik\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} Kodik</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_skip_kp_search\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_skip_kp_search}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_iframe_proxy\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_iframe_proxy}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_iframe\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_balanser} iframe</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_prefer_http\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_prefer_http}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_prefer_mp4\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_prefer_mp4}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      {
        _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_collaps_lampa_player\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_collaps_lampa_player}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_full_episode_title\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_full_episode_title}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_save_last_balanser\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_save_last_balanser}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_clear_last_balanser\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_clear_last_balanser}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_kinobase_mirror\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_kinobase_mirror}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_kinobase_cookie\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_kinobase_cookie}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_mirror\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_mirror}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_rezka2_mirror\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_rezka2_mirror}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_name\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_name}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_password\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_password}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      if (Lampa.Platform.is("android")) {
        Lampa.Storage.set("online_mod_rezka2_status", "false");
      } else {
        _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_login\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_login}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_logout\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_logout}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";
      }
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_cookie\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_cookie}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_fill_cookie\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_fill_cookie}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";
      {
        _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_fix_stream\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_fix_stream}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      }
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_name\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_name}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_password\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_password}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_cookie\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_cookie}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_fill_cookie\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_fill_cookie}</div>\n            <div class=\"settings-param__status\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_fancdn_token\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_fancdn_token}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_use_stream_proxy\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_use_stream_proxy}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_rezka2_prx_ukr\" data-type=\"select\">\n            <div class=\"settings-param__name\">#{online_mod_rezka2_prx_ukr}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_find_ip\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_find_ip}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_other\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_other}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_proxy_other_url\" data-type=\"input\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_proxy_other_url}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"online_mod_secret_password\" data-type=\"input\" data-string=\"true\" placeholder=\"#{settings_cub_not_specified}\">\n            <div class=\"settings-param__name\">#{online_mod_secret_password}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n        <div class=\"settings-param selector\" data-name=\"online_mod_av1_support\" data-type=\"toggle\">\n            <div class=\"settings-param__name\">#{online_mod_av1_support}</div>\n            <div class=\"settings-param__value\"></div>\n        </div>";
      _0xe3e1e2 += "\n    </div>";
      Lampa.Template.add("settings_online_mod", _0xe3e1e2);
      if (window.appready) {
        _0x5079c4();
      } else {
        Lampa.Listener.follow("app", function (_0x46b06a) {
          if (_0x46b06a.type == 'ready') {
            _0x5079c4();
          }
        });
      }
      Lampa.Settings.listener.follow("open", function (_0x440d77) {
        if (_0x440d77.name == "online_mod") {
          var _0x577243 = _0x440d77.body.find("[data-name=\"online_mod_clear_last_balanser\"]");
          _0x577243.unbind("hover:enter").on("hover:enter", function () {
            Lampa.Storage.set('online_last_balanser', {});
            Lampa.Storage.set("online_balanser", '');
            Lampa.Storage.set("online_mod_last_balanser", {});
            Lampa.Storage.set("online_mod_balanser", '');
            $(".settings-param__status", _0x577243).removeClass("active error wait").addClass("active");
          });
          var _0x5d7af0 = _0x440d77.body.find("[data-name=\"online_mod_rezka2_login\"]");
          _0x5d7af0.unbind("hover:enter").on("hover:enter", function () {
            var _0x3166e2 = $(".settings-param__status", _0x5d7af0).removeClass("active error wait").addClass("wait");
            _0x2949d6(function () {
              _0x3166e2.removeClass("active error wait").addClass("active");
            }, function () {
              _0x3166e2.removeClass("active error wait").addClass("error");
            });
          });
          var _0x753912 = _0x440d77.body.find("[data-name=\"online_mod_rezka2_logout\"]");
          _0x753912.unbind("hover:enter").on("hover:enter", function () {
            var _0x20bb99 = $(".settings-param__status", _0x753912).removeClass("active error wait").addClass("wait");
            _0x295ab8(function () {
              _0x20bb99.removeClass("active error wait").addClass("active");
            }, function () {
              _0x20bb99.removeClass("active error wait").addClass("error");
            });
          });
          var _0x4a7453 = _0x440d77.body.find("[data-name=\"online_mod_rezka2_fill_cookie\"]");
          _0x4a7453.unbind("hover:enter").on("hover:enter", function () {
            var _0x41fe33 = $(".settings-param__status", _0x4a7453).removeClass("active error wait").addClass("wait");
            _0x20b6c8(function () {
              _0x41fe33.removeClass("active error wait").addClass("active");
              Lampa.Params.update(_0x440d77.body.find("[data-name=\"online_mod_rezka2_cookie\"]"), [], _0x440d77.body);
            }, function () {
              _0x41fe33.removeClass("active error wait").addClass("error");
              Lampa.Params.update(_0x440d77.body.find("[data-name=\"online_mod_rezka2_cookie\"]"), [], _0x440d77.body);
            });
          });
          var _0x476f3e = _0x440d77.body.find("[data-name=\"online_mod_fancdn_fill_cookie\"]");
          _0x476f3e.unbind("hover:enter").on("hover:enter", function () {
            var _0x5bba29 = $('.settings-param__status', _0x476f3e).removeClass("active error wait").addClass("wait");
            _0x4a4117(function () {
              _0x5bba29.removeClass("active error wait").addClass("active");
              Lampa.Params.update(_0x440d77.body.find("[data-name=\"online_mod_fancdn_cookie\"]"), [], _0x440d77.body);
            }, function () {
              _0x5bba29.removeClass("active error wait").addClass('error');
              Lampa.Params.update(_0x440d77.body.find("[data-name=\"online_mod_fancdn_cookie\"]"), [], _0x440d77.body);
            });
          });
        }
      });
    }
    function _0x2da5d8() {
      if (Lampa.Manifest.origin !== 'bylampa') {
        Lampa.Noty.show("Ошибка доступа");
        return;
      }
      _0x371ee7();
      _0x322a58();
      _0x2b74b6();
      _0x50cece();
      _0x5ac47b();
      _0x2d5dfe();
    }
    _0x2da5d8();
  })();
})();
