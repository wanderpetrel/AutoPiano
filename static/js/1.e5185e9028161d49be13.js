webpackJsonp([1],{

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FriendLinks_vue__ = __webpack_require__(443);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cc87347_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FriendLinks_vue__ = __webpack_require__(543);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(551)
}
var normalizeComponent = __webpack_require__(143)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FriendLinks_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0cc87347_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FriendLinks_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/FriendLinks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cc87347", Component.options)
  } else {
    hotAPI.reload("data-v-0cc87347", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Notes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Lyrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Wallpaper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ScoreManual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ScoreNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ScoreXml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ScoreMidi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Goods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OBEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notes__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lyrics__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallpaper__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__links__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scoremanual__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scorenum__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scorexml__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scoremidi__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__goods__ = __webpack_require__(405);









// Array
var Notes = __WEBPACK_IMPORTED_MODULE_0__notes__["a" /* default */];
var Lyrics = __WEBPACK_IMPORTED_MODULE_1__lyrics__["a" /* default */];
var Wallpaper = __WEBPACK_IMPORTED_MODULE_2__wallpaper__["a" /* default */];
var Links = __WEBPACK_IMPORTED_MODULE_3__links__["a" /* default */];
var ScoreManual = __WEBPACK_IMPORTED_MODULE_4__scoremanual__["a" /* default */];
var ScoreNum = __WEBPACK_IMPORTED_MODULE_5__scorenum__["a" /* default */];
var ScoreXml = __WEBPACK_IMPORTED_MODULE_6__scorexml__["a" /* default */];
var ScoreMidi = __WEBPACK_IMPORTED_MODULE_7__scoremidi__["a" /* default */];
var Goods = __WEBPACK_IMPORTED_MODULE_8__goods__["a" /* default */];
// Object
var OBEvent = {
  SHOW_GLOBAL_LOADING: 'SHOW_GLOBAL_LOADING',
  HIDE_GLOBAL_LOADING: 'HIDE_GLOBAL_LOADING',
  CHANGE_WALLPAPER: 'CHANGE_WALLPAPER',
  INSTRUMENT_LOADED: 'INSTRUMENT_LOADED',

  AUTO_PLAY_NUM_SCORE: 'AUTO_PLAY_NUM_SCORE',
  AUTO_PLAY_XML_SCORE: 'AUTO_PLAY_XML_SCORE',
  AUTO_PLAY_MIDI: 'AUTO_PLAY_MIDI',

  START_NOTE_RAIN: 'START_NOTE_RAIN',
  PLAY_MIDI_NOTE: 'PLAY_MIDI_NOTE',

  STOP_AUTO_PLAY: 'STOP_AUTO_PLAY',
  MUSIC_END: 'MUSIC_END'
};

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(394);
var defined = __webpack_require__(386);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(72);


var ob = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]();

/* harmony default export */ __webpack_exports__["a"] = (ob);

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(401);
var enumBugKeys = __webpack_require__(393);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(386);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 386:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 387:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 388:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 389:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "PageFooter",
  data: function data() {
    return {
      supportShow: false,
      payType: "WXPAY",
      aliPaySrc: __webpack_require__(425),
      wxPaySrc: __webpack_require__(426)
    };
  },
  mounted: function mounted() {},

  methods: {
    togglePayType: function togglePayType(type) {
      this.payType = type;
    },
    toggleSupportShow: function toggleSupportShow() {
      this.supportShow = !this.supportShow;
    }
  }
});

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_observe__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(378);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'PageHeader',
  components: {},
  mixins: [],
  props: [],
  data: function data() {
    return {
      wallpaperLoading: false
    };
  },

  computed: {},
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$on(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* OBEvent */].CHANGE_WALLPAPER, function () {
      _this.setRandomWallPaper();
    });
  },

  watch: {},
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapActions */])(['$setWallpaper']), {
    emitChangeWallPaper: function emitChangeWallPaper() {
      if (this.wallpaperLoading) return;
      __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* OBEvent */].CHANGE_WALLPAPER);
    },

    // 随机背景壁纸
    setRandomWallPaper: function setRandomWallPaper() {
      var _this2 = this;

      this.wallpaperLoading = true;
      var len = __WEBPACK_IMPORTED_MODULE_3__config__["c" /* Wallpaper */].length;
      var src = '';
      do {
        var random = Math.floor(Math.random() * len);
        src = __WEBPACK_IMPORTED_MODULE_3__config__["c" /* Wallpaper */][random];
      } while (!src || src == this.$currentWallpaper);

      var img = new Image();
      img.src = src;
      img.onload = function () {
        _this2.wallpaperLoading = false;
        _this2.$setWallpaper(src);
        img = null;
      };
    }
  })
});

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(400);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(382);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 396:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(398)('keys');
var uid = __webpack_require__(389);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(100);
var global = __webpack_require__(101);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(383) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotesMap; });
var noteBaseUrl = '/static/notes/';

/* harmony default export */ __webpack_exports__["a"] = ([{ id: 1, name: 'C2', keyCode: '49', key: '1', url: noteBaseUrl + 'a49.mp3', type: 'white' }, { id: 2, name: 'D2', keyCode: '50', key: '2', url: noteBaseUrl + 'a50.mp3', type: 'white' }, { id: 3, name: 'E2', keyCode: '51', key: '3', url: noteBaseUrl + 'a51.mp3', type: 'white' }, { id: 4, name: 'F2', keyCode: '52', key: '4', url: noteBaseUrl + 'a52.mp3', type: 'white' }, { id: 5, name: 'G2', keyCode: '53', key: '5', url: noteBaseUrl + 'a53.mp3', type: 'white' }, { id: 6, name: 'A2', keyCode: '54', key: '6', url: noteBaseUrl + 'a54.mp3', type: 'white' }, { id: 7, name: 'B2', keyCode: '55', key: '7', url: noteBaseUrl + 'a55.mp3', type: 'white' }, { id: 8, name: 'C3', keyCode: '56', key: '8', url: noteBaseUrl + 'a56.mp3', type: 'white' }, { id: 9, name: 'D3', keyCode: '57', key: '9', url: noteBaseUrl + 'a57.mp3', type: 'white' }, { id: 10, name: 'E3', keyCode: '48', key: '0', url: noteBaseUrl + 'a48.mp3', type: 'white' }, { id: 26, name: 'F3', keyCode: '81', key: 'Q', url: noteBaseUrl + 'a81.mp3', type: 'white' }, { id: 32, name: 'G3', keyCode: '87', key: 'W', url: noteBaseUrl + 'a87.mp3', type: 'white' }, { id: 14, name: 'A3', keyCode: '69', key: 'E', url: noteBaseUrl + 'a69.mp3', type: 'white' }, { id: 27, name: 'B3', keyCode: '82', key: 'R', url: noteBaseUrl + 'a82.mp3', type: 'white' }, { id: 29, name: 'C4', keyCode: '84', key: 'T', url: noteBaseUrl + 'a84.mp3', type: 'white' }, { id: 34, name: 'D4', keyCode: '89', key: 'Y', url: noteBaseUrl + 'a89.mp3', type: 'white' }, { id: 30, name: 'E4', keyCode: '85', key: 'U', url: noteBaseUrl + 'a85.mp3', type: 'white' }, { id: 18, name: 'F4', keyCode: '73', key: 'I', url: noteBaseUrl + 'a73.mp3', type: 'white' }, { id: 24, name: 'G4', keyCode: '79', key: 'O', url: noteBaseUrl + 'a79.mp3', type: 'white' }, { id: 25, name: 'A4', keyCode: '80', key: 'P', url: noteBaseUrl + 'a80.mp3', type: 'white' }, { id: 10, name: 'B4', keyCode: '65', key: 'A', url: noteBaseUrl + 'a65.mp3', type: 'white' }, { id: 28, name: 'C5', keyCode: '83', key: 'S', url: noteBaseUrl + 'a83.mp3', type: 'white' }, { id: 13, name: 'D5', keyCode: '68', key: 'D', url: noteBaseUrl + 'a68.mp3', type: 'white' }, { id: 15, name: 'E5', keyCode: '70', key: 'F', url: noteBaseUrl + 'a70.mp3', type: 'white' }, { id: 16, name: 'F5', keyCode: '71', key: 'G', url: noteBaseUrl + 'a71.mp3', type: 'white' }, { id: 17, name: 'G5', keyCode: '72', key: 'H', url: noteBaseUrl + 'a72.mp3', type: 'white' }, { id: 19, name: 'A5', keyCode: '74', key: 'J', url: noteBaseUrl + 'a74.mp3', type: 'white' }, { id: 20, name: 'B5', keyCode: '75', key: 'K', url: noteBaseUrl + 'a75.mp3', type: 'white' }, { id: 21, name: 'C6', keyCode: '76', key: 'L', url: noteBaseUrl + 'a76.mp3', type: 'white' }, { id: 35, name: 'D6', keyCode: '90', key: 'Z', url: noteBaseUrl + 'a90.mp3', type: 'white' }, { id: 33, name: 'E6', keyCode: '88', key: 'X', url: noteBaseUrl + 'a88.mp3', type: 'white' }, { id: 12, name: 'F6', keyCode: '67', key: 'C', url: noteBaseUrl + 'a67.mp3', type: 'white' }, { id: 31, name: 'G6', keyCode: '86', key: 'V', url: noteBaseUrl + 'a86.mp3', type: 'white' }, { id: 11, name: 'A6', keyCode: '66', key: 'B', url: noteBaseUrl + 'a66.mp3', type: 'white' }, { id: 23, name: 'B6', keyCode: '78', key: 'N', url: noteBaseUrl + 'a78.mp3', type: 'white' }, { id: 22, name: 'C7', keyCode: '77', key: 'M', url: noteBaseUrl + 'a77.mp3', type: 'white' }, { id: 36, name: 'C#2', keyCode: 'b49', key: '⇧<br>+<br>1', url: noteBaseUrl + 'b49.mp3', type: 'black' }, { id: 37, name: 'D#2', keyCode: 'b50', key: '⇧<br>+<br>2', url: noteBaseUrl + 'b50.mp3', type: 'black' }, { id: 38, name: 'F#2', keyCode: 'b52', key: '⇧<br>+<br>4', url: noteBaseUrl + 'b52.mp3', type: 'black' }, { id: 39, name: 'G#2', keyCode: 'b53', key: '⇧<br>+<br>5', url: noteBaseUrl + 'b53.mp3', type: 'black' }, { id: 40, name: 'A#2', keyCode: 'b54', key: '⇧<br>+<br>6', url: noteBaseUrl + 'b54.mp3', type: 'black' }, { id: 41, name: 'C#3', keyCode: 'b56', key: '⇧<br>+<br>8', url: noteBaseUrl + 'b56.mp3', type: 'black' }, { id: 42, name: 'D#3', keyCode: 'b57', key: '⇧<br>+<br>9', url: noteBaseUrl + 'b57.mp3', type: 'black' }, { id: 43, name: 'F#3', keyCode: 'b81', key: '⇧<br>+<br>Q', url: noteBaseUrl + 'b81.mp3', type: 'black' }, { id: 44, name: 'G#3', keyCode: 'b87', key: '⇧<br>+<br>W', url: noteBaseUrl + 'b87.mp3', type: 'black' }, { id: 45, name: 'A#3', keyCode: 'b69', key: '⇧<br>+<br>E', url: noteBaseUrl + 'b69.mp3', type: 'black' }, { id: 46, name: 'C#4', keyCode: 'b84', key: '⇧<br>+<br>T', url: noteBaseUrl + 'b84.mp3', type: 'black' }, { id: 47, name: 'D#4', keyCode: 'b89', key: '⇧<br>+<br>Y', url: noteBaseUrl + 'b89.mp3', type: 'black' }, { id: 48, name: 'F#4', keyCode: 'b73', key: '⇧<br>+<br>I', url: noteBaseUrl + 'b73.mp3', type: 'black' }, { id: 49, name: 'G#4', keyCode: 'b79', key: '⇧<br>+<br>O', url: noteBaseUrl + 'b79.mp3', type: 'black' }, { id: 50, name: 'A#4', keyCode: 'b80', key: '⇧<br>+<br>P', url: noteBaseUrl + 'b80.mp3', type: 'black' }, { id: 51, name: 'C#5', keyCode: 'b83', key: '⇧<br>+<br>S', url: noteBaseUrl + 'b83.mp3', type: 'black' }, { id: 52, name: 'D#5', keyCode: 'b68', key: '⇧<br>+<br>D', url: noteBaseUrl + 'b68.mp3', type: 'black' }, { id: 53, name: 'F#5', keyCode: 'b71', key: '⇧<br>+<br>G', url: noteBaseUrl + 'b71.mp3', type: 'black' }, { id: 54, name: 'G#5', keyCode: 'b72', key: '⇧<br>+<br>H', url: noteBaseUrl + 'b72.mp3', type: 'black' }, { id: 55, name: 'A#5', keyCode: 'b74', key: '⇧<br>+<br>J', url: noteBaseUrl + 'b74.mp3', type: 'black' }, { id: 56, name: 'C#6', keyCode: 'b76', key: '⇧<br>+<br>L', url: noteBaseUrl + 'b76.mp3', type: 'black' }, { id: 57, name: 'D#6', keyCode: 'b90', key: '⇧<br>+<br>Z', url: noteBaseUrl + 'b90.mp3', type: 'black' }, { id: 58, name: 'F#6', keyCode: 'b67', key: '⇧<br>+<br>C', url: noteBaseUrl + 'b67.mp3', type: 'black' }, { id: 59, name: 'G#6', keyCode: 'b86', key: '⇧<br>+<br>V', url: noteBaseUrl + 'b86.mp3', type: 'black' }, { id: 60, name: 'A#6', keyCode: 'b66', key: '⇧<br>+<br>B', url: noteBaseUrl + 'b66.mp3', type: 'black' }]);

var NotesMap = [{ name: 'C2', file: 'a49.mp3' }, { name: 'D2', file: 'a50.mp3' }, { name: 'E2', file: 'a51.mp3' }, { name: 'F2', file: 'a52.mp3' }, { name: 'G2', file: 'a53.mp3' }, { name: 'A2', file: 'a54.mp3' }, { name: 'B2', file: 'a55.mp3' }, { name: 'C3', file: 'a56.mp3' }, { name: 'D3', file: 'a57.mp3' }, { name: 'E3', file: 'a48.mp3' }, { name: 'F3', file: 'a81.mp3' }, { name: 'G3', file: 'a87.mp3' }, { name: 'A3', file: 'a69.mp3' }, { name: 'B3', file: 'a82.mp3' }, { name: 'C4', file: 'a84.mp3' }, { name: 'D4', file: 'a89.mp3' }, { name: 'E4', file: 'a85.mp3' }, { name: 'F4', file: 'a73.mp3' }, { name: 'G4', file: 'a79.mp3' }, { name: 'A4', file: 'a80.mp3' }, { name: 'B4', file: 'a65.mp3' }, { name: 'C5', file: 'a83.mp3' }, { name: 'D5', file: 'a68.mp3' }, { name: 'E5', file: 'a70.mp3' }, { name: 'F5', file: 'a71.mp3' }, { name: 'G5', file: 'a72.mp3' }, { name: 'A5', file: 'a74.mp3' }, { name: 'B5', file: 'a75.mp3' }, { name: 'C6', file: 'a76.mp3' }, { name: 'D6', file: 'a90.mp3' }, { name: 'E6', file: 'a88.mp3' }, { name: 'F6', file: 'a67.mp3' }, { name: 'G6', file: 'a86.mp3' }, { name: 'A6', file: 'a66.mp3' }, { name: 'B6', file: 'a78.mp3' }, { name: 'C7', file: 'a77.mp3' }, { name: 'C#2', file: 'b49.mp3' }, { name: 'D#2', file: 'b50.mp3' }, { name: 'F#2', file: 'b52.mp3' }, { name: 'G#2', file: 'b53.mp3' }, { name: 'A#2', file: 'b54.mp3' }, { name: 'C#3', file: 'b56.mp3' }, { name: 'D#3', file: 'b57.mp3' }, { name: 'F#3', file: 'b81.mp3' }, { name: 'G#3', file: 'b87.mp3' }, { name: 'A#3', file: 'b69.mp3' }, { name: 'C#4', file: 'b84.mp3' }, { name: 'D#4', file: 'b89.mp3' }, { name: 'F#4', file: 'b73.mp3' }, { name: 'G#4', file: 'b79.mp3' }, { name: 'A#4', file: 'b80.mp3' }, { name: 'C#5', file: 'b83.mp3' }, { name: 'D#5', file: 'b68.mp3' }, { name: 'F#5', file: 'b71.mp3' }, { name: 'G#5', file: 'b72.mp3' }, { name: 'A#5', file: 'b74.mp3' }, { name: 'C#6', file: 'b76.mp3' }, { name: 'D#6', file: 'b90.mp3' }, { name: 'F#6', file: 'b67.mp3' }, { name: 'G#6', file: 'b86.mp3' }, { name: 'A#6', file: 'b66.mp3' }];

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(414), __esModule: true };

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(147);
var toIObject = __webpack_require__(380);
var arrayIndexOf = __webpack_require__(415)(false);
var IE_PROTO = __webpack_require__(397)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(388);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var goods = [{
  esite: "jd",
  name: "简谱钢琴即兴伴奏教程",
  price: "￥26.7",
  salePerMonth: 132,
  seller: "湖南文艺出版社",
  pic: "5b3b338fNad1559cd.jpg",
  link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
  valid: true
}, {
  esite: "jd",
  name: "钢琴即兴弹奏流行歌曲100首（简谱版）",
  price: "￥31.10",
  salePerMonth: 57,
  seller: "化学工业出版社",
  pic: "5d4808c716acb007.jpg",
  link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
  valid: true
}, {
  esite: "jd",
  name: "拿起就会！流行钢琴曲超精选",
  price: "￥33.8",
  salePerMonth: 147,
  seller: "湖南文艺出版社",
  pic: "bc56ea5a17a35998.jpg",
  link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
  valid: true
}, {
  esite: "jd",
  name: "卡西欧(CASIO)电子琴 CTK-2500",
  price: "￥699",
  salePerMonth: 684,
  seller: "卡西欧京东自营旗舰店",
  pic: "b8b5a95542c993d2.jpg",
  link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
  valid: true
}, {
  esite: "jd",
  name: "卡西欧(CASIO)专业级电子琴 CT-X5000",
  price: "￥3198",
  salePerMonth: 527,
  seller: "卡西欧京东自营旗舰店",
  pic: "28026c18dc573bd5.jpg",
  link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
  valid: true
}, {
  esite: "jd",
  name: "卡西欧(CASIO)电钢琴 PX-160BK",
  price: "￥3268",
  salePerMonth: 535,
  seller: "卡西欧京东自营旗舰店",
  pic: "2817ecd689819de3.jpg",
  link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
  coupon: "https://union-click.jd.com/jdc?e=&p=AyIGZRtcFwYUBVQcWBEyEgBSHVIUBSJDCkMFSjJLQhBaGR4cDFwNRA1CVk0YDk5ER1xOGQ1eD0kdS0IJRlVXWFYLVRxcEwsTAEJbV2F7emAhUltRdRNwIngSdRYRcCJyCXZiS39QeBNta2tkKR0tbFdgcxxOH2IAamQiGisQdmtSJ285dkBmfgNLL3ZhV3ExbAZAe0wBM3kzd2VlDxRjIm1rZXQiRSxsakJ%2BJQ9ZYBYQcmUcBxYCUFwTaT5PQlpjLmZSCwdxeTZdVxkyEzdVGloVBBEBVBtZJTISAGVZNcG%2Bgt7BlYyIlMeP9M%2FzjNeZmoGt7M2zudDuv4ywjSIGZRtfEgYQA1cZUhYBFQ9lHFscMlleC18ATVtCWQ5OayUyETdlK1sWMhE3F3VYRlERVFJIWRJQFwBQH1tBCkdSU0sIQAJGBwAbXhFXEjdXGloRCw%3D%3D",
  valid: true
}, {
  esite: "jd",
  name: "德国布鲁诺高端立式钢琴UP122",
  price: "￥12989",
  salePerMonth: 396,
  seller: "BRUNO布鲁诺京东自营旗舰店",
  pic: "3c59fe8440c05e15.jpg",
  link: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
  valid: true
}];

/* harmony default export */ __webpack_exports__["a"] = (goods);

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var FriendLinks = [{
  title: "自由钢琴 - AutoPiano",
  desc: "自由钢琴 让你听见内心的声音",
  url: "http://www.autopiano.cn"
}];

/* harmony default export */ __webpack_exports__["a"] = (FriendLinks);

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lyrics = ["\u957F\u4EAD\u5916\uFF0C\u53E4\u9053\u8FB9\uFF0C\u82B3\u8349\u78A7\u8FDE\u5929\uFF0C\u665A\u98CE\u62C2\u67F3\u7B1B\u58F0\u6B8B\uFF0C\u5915\u9633\u5C71\u5916\u5C71...", "\u4F60\u53EF\u77E5Macau\uFF0C\u4E0D\u662F\u6211\u771F\u59D3...", "what time will you be here now? it's a quater past seven now...", "\u541B\u306E\u524D\u524D\u524D\u4E16\u304B\u3089\u4EC6\u306F, \u541B\u3092\u63A2\u3057\u306F\u3058\u3081\u305F\u3088", "\u4F60\u4F1A\u4E0D\u4F1A\u5FFD\u7136\u7684\u51FA\u73B0\uFF0C\u5728\u8857\u89D2\u7684\u5496\u5561\u5E97", "\u65F6\u95F4\u5B83\u603B\u8BF4\u8C0E\uFF0C\u6211\u4ECE\u4E0D\u66FE\u5931\u53BB\u90A3\u4E9B\u80A9\u8180\u3002", "\u4E0D\u6015\u8981\u591A\u5C11\u65F6\u95F4\u591A\u5C11\u4EE3\u4EF7\uFF0C\u9752\u6625\u662F\u6211\u7684\u7B79\u7801\u3002", "\u5982\u679C\u8FD8\u6709\u68A6\u5C31\u8FFD\uFF0C\u81F3\u5C11\u4E0D\u4F1A\u9057\u61BE\u540E\u6094", "Believe me I can fly  I'm singing in the sky", "\u6211\u76F8\u4FE1\u5341\u5E74\u540E\u7684\u516B\u6708 \u6211\u4EEC\u8FD8\u80FD\u518D\u76F8\u9047 \u4F60\u6700\u540E\u4E00\u76F4\u5728\u5FC3\u5E95\u547C\u558A\u8457\u300E\u8C22\u8C22\u4F60\u300F", "\u957F\u5927\u540E \u4E16\u754C\u50CF\u4E00\u5F20\u7F51 \u7F51\u4F4F\u6211\u4EEC\u7684\u7FC5\u8180", "\u6709\u4E86\u4F60\u5F00\u5FC3D \u4E5C\u90FD\u79F0\u5FC3\u6EE1\u610F \u54B8\u9C7C\u767D\u83DC\u4E5F\u597D\u597D\u5473", "Now please don't go Most nights I hardly sleep when I'm alone ", "\u6211\u4F9D\u7136\u7231\u4F60 \u5C31\u662F\u552F\u4E00\u7684\u9000\u8DEF \u6211\u4F9D\u7136\u73CD\u60DC \u65F6\u65F6\u523B\u523B\u7684\u5E78\u798F", "\u53EA\u4F1A\u50BB\u50BB\u7684\u770B\u7740\u5929\u4E0A\u7684\u661F\u661F \u4F60\u5C31\u662F\u90A3\u4E48\u7684\u7EAF\u9759", "\u6211\u7684\u773C\u775B\u671B\u5411\u7A97\u5916 \u5E7B\u60F3\u6211\u5BF9\u4F60\u7684\u8868\u767D", "\u8BA9\u8721\u70DB\u4EE3\u66FF\u6240\u6709\u706F \u8BA9\u97F3\u4E50\u4EE3\u66FF\u8BDD\u8BED\u58F0 \u6B64\u65F6\u65E0\u58F0\u80DC\u6709\u58F0", "\u5F53\u4F60\u89C9\u5F97\u5916\u9762\u7684\u4E16\u754C\u5F88\u7CBE\u5F69 \u6211\u4F1A\u5728\u8FD9\u91CC\u8877\u5FC3\u7684\u795D\u798F\u4F60", "\u82E6\u6D77\u7FFB\u8D77\u7231\u6068 \u5728\u4E16\u95F4\u96BE\u9003\u907F\u547D\u8FD0", "\u4E0D\u7BA1\u6309\u600E\u8FC7\u6309\u600E\u53D8 \u6309\u600E\u7684\u4EBA \u6C38\u8FDC\u7684\u6C38\u8FDC\u6211\u662F\u5F7C\u4E2A\u4EBA", "Rage your dream \u98A8\u3082\u3000\u5149\u6E80\u3061\u3066\u3086\u304F Rage your dream \u5FD8\u308C\u306A\u3044\u3067\u3044\u3066 ", "\u6211\u559C\u6B22 \u5165\u5B66\u65F6\u6211\u4EEC\u7A1A\u6C14\u7684\u8138\u5E9E \u6211\u559C\u6B22 \u6BD5\u4E1A\u5B63\u4E0A\u5199\u6EE1\u7559\u8A00\u7684\u5899", "\u5982\u4ECA\u8FD9\u91CC\u8352\u8349\u4E1B\u751F \u6CA1\u6709\u4E86\u9C9C\u82B1 \u597D\u5728\u66FE\u7ECF\u62E5\u6709\u4F60\u4EEC\u7684\u6625\u79CB\u548C\u51AC\u590F", "\u767D\u4E91\u5C71\u9AD8 \u73E0\u6C5F\u6C34\u957F \u543E\u6821\u77D7\u7ACB \u851A\u4E3A\u56FD\u5149", "\u7A81\u7136\u597D\u60F3\u4F60 \u7A81\u7136\u950B\u5229\u7684\u56DE\u5FC6 \u7A81\u7136\u6A21\u7CCA\u7684\u773C\u775B", "\u6211\u7AD9\u5728\u4F60\u5DE6\u4FA7\uFF0C\u5374\u50CF\u9694\u7740\u94F6\u6CB3", "\u591A\u5C11\u4EBA\u66FE\u7231\u6155\u4F60\u5E74\u8F7B\u65F6\u7684\u5BB9\u989C\uFF0C\u53EF\u77E5\u8C01\u613F\u627F\u53D7\u5C81\u6708\u65E0\u60C5\u7684\u53D8\u8FC1\u3002", "\u5F80\u4E8B\u4E0D\u8981\u518D\u63D0\uFF0C\u4EBA\u751F\u5DF2\u591A\u98CE\u96E8", "\u5929\u7A7A\u6D77\u9614\u4F60\u4E0E\u6211\uFF0C\u53EF\u4F1A\u53D8", "\u4E00\u751F\u4F55\u6C42,\u5E38\u5224\u65AD\u653E\u5F03\u4E0E\u62E5\u6709", "\u8BA9\u6211\u518D\u770B\u4F60\u4E00\u773C \u661F\u7A7A\u548C\u9ED1\u591C \u897F\u53BB\u800C\u65CB\u8F6C\u7684\u98DE\u9E1F", "\u4F46\u662F\u6BCF\u4E00\u5929\uFF0C\u5F53\u6211\u5728\u5DE6\u8F6C\uFF0C\u4F60\u4FBF\u884C\u5411\u53F3\uFF0C\u7EC8\u4E0D\u4F1A\u9047\u89C1", "\u56DE\u5FC6\u8FD9\u7406\u60F3\u4E0D\u591F\u7406\u60F3 \u6CBF\u9014\u901B\u4E16\u95F4\u4E00\u8D9F\u53EA\u6709\u5411\u4E0A", "\u6A21\u7CCA\u7684\u8FF7\u604B\u4F60\u4E00\u573A\u5C31\u5F53\u98CE\u96E8\u4E0B\u6F6E\u6DA8", "\u5982\u8774\u8776\u7834\u8327\u5439\u8FC7\u6625\u98CE \u6211\u5C55\u7FC5 \u53EF\u4E0D\u53EF\u5F97\u5230\u8BA4\u540C", "\u526A\u5F71\u7684\u4F60\u8F6E\u5ED3\u592A\u597D\u770B \u51DD\u4F4F\u773C\u6CEA\u624D\u6562\u7EC6\u770B", "\u5C71\u9876\u4E00\u8D77\u4FEF\u77B0\u8FC7 \u8FD9\u82B1\u82B1\u4E16\u754C\u706F\u706B\u5904\u5904", "\u5F7C\u6B64\u4E4B\u95F4\u5373\u4F7F\u5404\u6709\u8F66\u7968 \u5931\u6563\u4E8E\u51E1\u56A3 \u7070\u98CE\u7684\u521D\u543B \u81F3\u5C11\u611F\u52A8 \u4E00\u4E24\u79D2", "\u9759\u5F85\u7D2B\u8272\u5929\u7A7A \u95EA\u51FA\u6E05\u98CE \u6709\u964D\u96EA\u8DF3\u52A8", "\u4F60\u672A\u5FD8 \u6211\u672A\u5FD8 \u72B9\u80DC\u4F34\u5728\u65C1", "\u51B7\u96E8\u72C2\u98CE\u5386\u5C3D\uFF0C\u4EBA\u683C\u66F4\u5149\u8000\uFF0C\u62AB\u8346\u65A9\u68D8\u6C49\u5B50\u5FC3\u91CC\u78CA\u843D\u6C38\u4E0D\u6298\u8170", "\u4F60\u662F\u7A7A\u6C14\u4F46\u662F\u597D\u95FB\u80DC\u8FC7\u4E86\u7A7A\u6C14\uFF0C\u4F60\u662F\u9633\u5149\u4F46\u662F\u5374\u80FD\u7167\u8FDB\u534A\u591C\u91CC", "\u6211\u5FC3\u5982\u6708\u62C2\u8FC7\u957F\u591C\u672A\u6709\u58F0 \u4E45\u7167\u957F\u95E8\u6D41\u5149\u53EA\u5F71\u5411\u4E00\u4EBA", "\u6240\u8C13\u7684\u5F69\u8679\uFF0C\u4E0D\u8FC7\u5C31\u662F\u5149\uFF0C\u53EA\u8981\u5FC3\u8FD8\u900F\u660E\uFF0C\u5C31\u80FD\u6298\u5C04\u5E0C\u671B", "\u672C\u6765\u5C31\u4E00\u65E0\u6240\u6709\uFF0C\u624D\u4F1A\u5E7B\u60F3\u5B83\u662F\u767D\u9E3D\uFF0C\u98DE\u5230\u6E34\u671B\u7684\u5C3D\u5934\uFF0C\u5760\u843D\u5230\u65E0\u540D\u7684\u5C71\u4E18", "\u6211\u82E5\u662F\u6E38\u5B50\uFF0C\u4F60\u4FBF\u662F\u4EBA\u95F4", "\u6211\u628A\u7F8E\u68A6\u653E\u51B0\u7BB1 \u957F\u5927\u518D\u62FF\u884C\u4E0D\u884C", "\u5929\u7A7A\u597D\u60F3\u4E0B\u96E8 \u6211\u597D\u60F3\u4F4F\u4F60\u9694\u58C1", "\u8BB8\u591A\u5E74\u524D \u4F60\u6709\u4E00\u53CC\u6E05\u6F88\u7684\u53CC\u773C \u5954\u8DD1\u8D77\u6765 \u50CF\u662F\u4E00\u9053\u6625\u5929\u7684\u95EA\u7535", "\u4E71\u4E16\u6177\u6168\u6211\u884C\u6B4C\uFF0C\u5343\u4E07\u4EBA\u4E2D\u6709\u76F8\u548C", "\u5C06\u5FC3\u613F\u79CD\u5728\u51FA\u53D1\u4E4B\u524D\uFF0C\u6211\u4EEC\u8BF4\u597D\u8D70\u591A\u8FDC\u4E5F\u4E0D\u6539\u53D8", "\u6625\u70DF\u67F3\u7EFF\uFF0C\u4E0D\u5982\u671B\u4F60\u3002\u53F9\u8FD9\u5929\u4E0B\u8C01\u4EBA\u4E0D\u8BC6\u541B", "\u65F6\u95F4\u662F\u661F\u661F\u7684\u773C\u775B \u671B\u7A7F\u6211\u7684\u56F0\u60D1", "\u786E\u8BA4\u8FC7\u773C\u795E\uFF0C\u6211\u9047\u4E0A\u5BF9\u7684\u4EBA", "\u5982\u679C\u5168\u4E16\u754C\u90FD\u5BF9\u4F60\u6076\u8BED\u76F8\u52A0\uFF0C\u6211\u5C31\u5BF9\u4F60\u8BF4\u4E0A\u4E00\u4E16\u60C5\u8BDD", "\u8D70\u5728\u5730\u5B89\u95E8\u5916\uFF0C\u6CA1\u6709\u4EBA\u4E0D\u52A8\u771F\u60C5", "\u6211\u672A\u5165\u8FC7\u7E41\u534E\u4E4B\u5883 \u672A\u542C\u8FC7\u55A7\u56A3\u7684\u58F0\u97F3", "\u95EE\u541B\u6B64\u53BB\u51E0\u65F6\u8FD8\uFF0C\u6765\u65F6\u83AB\u5F98\u5F8A\u3002", "\u4E58\u7740\u98CE\u6E38\u8361\u5728\u84DD\u5929\u8FB9 \u4E00\u7247\u4E91\u6389\u843D\u5728\u6211\u9762\u524D", "\u90A3\u4E9B\u4F60\u5F88\u5192\u9669\u7684\u68A6\uFF0C\u6211\u966A\u4F60\u53BB\u75AF\u3002", "\u98CE\u7B5D\u6709\u98CE \u6D77\u8C5A\u6709\u6D77 \u800C\u4F60\u6709\u6211", "\u6CBF\u8DEF\u65C5\u9014\u5982\u6B4C\u53D8\u5E7B \u5728\u6E38\u89C8\uFF0C\u8FD8\u7ED9\u5927\u5730\u6628\u5929\u7684\u559C\u6012\u548C\u70E6\u5FE7", "\u5929\u96E8\u7C9F\uFF0C\u9B3C\u591C\u54ED\uFF0C\u601D\u5FF5\u6F2B\u592A\u53E4", "\u6C38\u8FDC\u81EA\u7531\u81EA\u6211\uFF0C\u6C38\u8FDC\u9AD8\u5531\u6211\u6B4C\uFF0C\u8D70\u904D\u5343\u91CC", "\u6A90\u4E0B\u7A97\u68C2\u659C\u6620\u679D\u4E2B \u4E0E\u4F60\u5E2D\u5730\u5BF9\u5750\u996E\u8336", "\u60C5\u6DF1\u6DF1\u96E8\u8499\u8499 \u591A\u5C11\u697C\u53F0\u70DF\u96E8\u4E2D \u8BB0\u5F97\u5F53\u521D\u4F60\u4FAC\u6211\u4FAC \u8F66\u5982\u6D41\u6C34\u9A6C\u5982\u9F99"];

/* harmony default export */ __webpack_exports__["a"] = (lyrics);

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 多种风格
/* harmony default export */ __webpack_exports__["a"] = ([{
  name: '\u795D\u4F60\u751F\u65E5\u5FEB\u4E50',
  content: 'oopo sa<br> oopo ds <br> oo h f s a p<br> gg f s d s<br>\n              oopo sa<br> oopo ds <br> oo h f s a p<br> gg f s d fs',
  degree: 1,
  lyrics: 'Happy Birthday to You <br>\n            Happy Birthday to You<br>\n            Happy Birthday to You <br>\n            Happy Birthday to You <br>',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '\u5C0F\u661F\u661F',
  content: 'sshhjjh ggffdds <br/> hhggffd hhggffd <br/> sshhjjh ggffdds',
  degree: 1,
  lyrics: 'Little Star <br>\n            Twinkle, twinkle, little star <br>\n            How I wonder what you are <br>\n            Up above the world so high <br>\n            Like a diamond in the sky <br>\n            When the blazing sun is gone',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '\u65B0\u5E74\u597D',
  content: 'ssso fffs sfhhgfd dfgg fdfs sfdo ads <br/> ssso fffs sfhhgfd dfgg fdfs sfdo ads',
  degree: 1,
  lyrics: '\u65B0\u5E74\u597D\u5440\uFF0C\u65B0\u5E74\u597D\u5440<br>\n            \u795D\u8D3A\u5927\u5BB6\u65B0\u5E74\u597D<br>\n            \u6211\u4EEC\u5531\u6B4C\uFF0C\u6211\u4EEC\u8DF3\u821E<br>\n            \u795D\u8D3A\u5927\u5BB6\u65B0\u5E74\u597D',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '\u56E0\u4E3A\u7231\u60C5',
  content: 'opsspsdfd spfdpfdsp passpfd fdd dff <br/>opsspsdfd spfdpfdsp passpfd spsfhd <br/> dfhf hhfdhh jklllklkkhf <br/> hfhj hjhhs psfdpfdpjh <br/> dfhf hhfdhh jklllklkkhf <br/> hfhj hjhhs psfdpfdpfd fdfs',
  degree: 3,
  lyrics: '',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '\u9690\u5F62\u7684\u7FC5\u8180',
  content: 'osf hf dsss spoo <br> osf hhh jh hdfd sdd <br> jhf hhhjh fdsdp <br> ops fd fs <br> fhl lk jhjl fds ss sl jh fd sdd <br> \u505C\u987F <br> fhl lk jhjl fds ss sl jh fd ds s',
  degree: 2,
  lyrics: '',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '\u84B2\u516C\u82F1\u7684\u7EA6\u5B9A',
  content: ' uio ooo pas ~ sadp ooo dsdf <br> sdff fgf df s ~ pasd ssp fg d <br> uo sf f gd dhas fghs sdf <br> uo sf f gd dhas fghs sd s <br> jh fds fgd jh as fghs sdf <br> uo sf f gd dhas fghs s d s',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '\u7EB8\u77ED\u60C5\u957F',
  content: 'o fffd fs ddds dh ~ ss spsp o dddf po <br>\n              gggf gs ddds dh ~ sssp sp o fddss <br>\n              ssd f ff fds a jh ~ hjkl ff lkl kfh <br>\n              hjlh j ~ jhg hf ds ~ ps fdds dh sd <br>\n              ssd ffdf fds hhfh ~ hjk llll lkjk jf h <br>\n              hjlh j jhg hf ds ~ ps fdds dsps',
  degree: 4,
  lyrics: '\u7EB8\u77ED\u60C5\u957F <br>\n    \u4F60\u966A\u6211\u6B65\u5165\u8749\u590F \u8D8A\u8FC7\u57CE\u5E02\u55A7\u56A3 <br>\n    \u6B4C\u58F0\u5728\u6E38\u8D70 \u4F60\u69B4\u82B1\u822C\u7684\u53CC\u7738 <br>\n    \u4E0D\u89C1\u4F60\u7684\u6E29\u67D4 \u4E22\u5931\u82B1\u95F4\u6B22\u7B11 <br>\n    \u5C81\u6708\u65E0\u6CD5\u505C\u7559 \u6D41\u4E91\u7684\u7B49\u5019 <br>\n    \u6211\u771F\u7684\u597D\u60F3\u4F60 \u5728\u6BCF\u4E00\u4E2A\u96E8\u5B63 <br>\n    \u4F60\u9009\u62E9\u9057\u5FD8\u7684 \u662F\u6211\u6700\u4E0D\u820D\u7684 <br>\n    \u7EB8\u77ED\u60C5\u957F\u554A \u9053\u4E0D\u5C3D\u592A\u591A\u6D9F\u6F2A <br>\n    \u6211\u7684\u6545\u4E8B\u90FD\u662F\u5173\u4E8E\u4F60\u5440 <br>\n    \u600E\u4E48\u4F1A\u7231\u4E0A\u4E86\u4ED6 \u5E76\u51B3\u5B9A\u8DDF\u4ED6\u56DE\u5BB6 <br>\n    \u653E\u5F03\u4E86\u6211\u7684\u6240\u6709\u6211\u7684\u4E00\u5207\u65E0\u6240\u8C13 <br>\n    \u7EB8\u77ED\u60C5\u957F\u554A \u8BC9\u4E0D\u5B8C\u5F53\u65F6\u5E74\u5C11 <br>\n    \u6211\u7684\u6545\u4E8B\u8FD8\u662F\u5173\u4E8E\u4F60\u554A <br>\n    \u6211\u771F\u7684\u597D\u60F3\u4F60 \u5728\u6BCF\u4E00\u4E2A\u96E8\u5B63 <br>\n    \u4F60\u9009\u62E9\u9057\u5FD8\u7684 \u662F\u6211\u6700\u4E0D\u820D\u7684 <br>\n    \u7EB8\u77ED\u60C5\u957F\u554A \u9053\u4E0D\u5C3D\u592A\u591A\u6D9F\u6F2A <br>\n    \u6211\u7684\u6545\u4E8B\u90FD\u662F\u5173\u4E8E\u4F60\u5440 <br>\n    \u5173\u4E8E\u4F60\u5440 <br>\n    \u600E\u4E48\u4F1A\u7231\u4E0A\u4E86\u4ED6 \u5E76\u51B3\u5B9A\u8DDF\u4ED6\u56DE\u5BB6 <br>\n    \u653E\u5F03\u4E86\u6211\u7684\u6240\u6709\u6211\u7684\u4E00\u5207\u65E0\u6240\u8C13 <br>\n    \u7EB8\u77ED\u60C5\u957F\u554A \u8BC9\u4E0D\u5B8C\u5F53\u65F6\u5E74\u5C11 <br>\n    \u6211\u7684\u6545\u4E8B\u8FD8\u662F\u5173\u4E8E\u4F60\u554A',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '\u540C\u684C\u7684\u4F60',
  content: 'ooo oui o a ~ ppp pip o <br>\n              ooo oap i i ~ iii iuy t <br>\n              sss sop s f ~ ddd d s ap <br>\n              aaa aas d o ~ aas d s as\n              sss sop s f ~ ddd d s ap <br>\n              aaa aas d o ~ aas d s as',
  degree: 1,
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '晴天',
  content: 'fdgf shk lkhs ~ sjj jhh hgf dfgf <br>\n              fghf ghk zkll ~ llh hjhg dfgh js j kk <br>\n              fdgf shk lkhs ~ sjj jhh hgf dfgf <br>\n              fghf ghk zkll ~ llh hjhg pasd fd s s<br>',
  degree: 2,
  lyrics: '\u6674\u5929 ~ \u5468\u6770\u4F26 <br>\n      \u522E\u98CE\u8FD9\u5929\u6211\u8BD5\u8FC7\u63E1\u7740\u4F60\u624B <br>\n      \u4F46\u504F\u504F\u96E8\u6E10\u6E10\u5927\u5230\u6211\u770B\u4F60\u4E0D\u89C1 <br>\n      \u8FD8\u8981\u591A\u4E45\u6211\u624D\u80FD\u5728\u4F60\u8EAB\u8FB9 <br>\n      \u7B49\u5230\u653E\u6674\u7684\u90A3\u5929\u4E5F\u8BB8\u6211\u4F1A\u6BD4\u8F83\u597D\u4E00\u70B9 <br>\n      \u4ECE\u524D\u4ECE\u524D\u6709\u4E2A\u4EBA\u7231\u4F60\u5F88\u4E45 <br>\n      \u4F46\u504F\u504F\u98CE\u6E10\u6E10\u628A\u8DDD\u79BB\u5439\u5F97\u597D\u8FDC <br>\n      \u597D\u4E0D\u5BB9\u6613\u53C8\u80FD\u518D\u591A\u7231\u4E00\u5929 <br>\n      \u4F46\u6545\u4E8B\u7684\u6700\u540E\u4F60\u597D\u50CF\u8FD8\u662F\u8BF4\u4E86\u62DC\u62DC',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '千与千寻主题曲',
  content: 'fg hhhh hjhg ffff fgfd ss sapa as d dfdf d <br>\n              fg hhhh hjhg ffff fgfd ss sapa asos df d ddss <br>\n              sdfs h f dhd spf sa sapa asos dfg gfds d <br>\n              sdfs h f dhd spp aso o p a sdos dfd ddss',
  degree: 3,
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: 'We Wish You A Merry Christmas',
  content: 'o s sdsa ppp ~ d dfds aoo <br>\n              f fgfd s p ~ oo pdas <br>\n              s s sa a s a p o ~ d f d s h o <br>\n              oo pdas ~',
  degree: 1,
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '明天你好',
  content: 'fhhfdhh sffsaff pssp ossf gfdsd <br>\n              ssdfd hh as ~ ppasa ff op <br>\n              psgf fs d fd ofd ~ ssdfd hh as <br>\n              ppasa ff op psgf hs dfg fgfgh fd ~ <br>\n              o dsf ssfjh hjkl llkjh hjkl llkjh hfs psdfd <br>\n              o dsf ssfjh hjkl llkjh hjkl llkjh hfs fd s a s ~',
  degree: 4,
  lyrics: '\u660E\u5929\u4F60\u597D <br>\n    \u770B\u6628\u5929\u7684\u6211\u4EEC \u8D70\u8FDC\u4E86<br>\n    \u5728\u547D\u8FD0\u5E7F\u573A\u4E2D\u592E \u7B49\u5F85<br>\n    \u90A3\u6A21\u7CCA\u7684 \u80A9\u8180<br>\n    \u8D8A\u5954\u8DD1 \u8D8A\u6E3A\u5C0F<br>\n    \u66FE\u7ECF \u5E76\u80A9\u5F80\u524D\u7684 \u4F19\u4F34<br>\n    \u5728\u4E3E\u676F \u795D\u798F\u540E\u90FD \u8D70\u6563<br>\n    \u53EA\u662F\u90A3\u4E2A \u591C\u665A<br>\n    \u6211\u6DF1\u6DF1 \u7684\u90FD\u7559\u85CF\u5728\u5FC3\u574E<br>\n    \u957F\u5927\u4EE5\u540E \u6211\u53EA\u80FD\u5954\u8DD1<br>\n    \u6211\u591A\u5BB3\u6015 \u9ED1\u6697\u4E2D\u8DCC\u5012<br>\n    \u660E\u5929\u4F60\u597D \u542B\u7740\u6CEA\u5FAE\u7B11<br>\n    \u8D8A\u7F8E\u597D \u8D8A\u5BB3\u6015\u5F97\u5230<br>\n    \u6BCF\u4E00\u6B21\u54ED \u53C8\u7B11\u7740 \u5954\u8DD1<br>\n    \u4E00\u8FB9\u5931\u53BB \u4E00\u8FB9\u5728\u5BFB\u627E<br>\n    \u660E\u5929\u4F60\u597D \u58F0\u97F3\u591A\u6E3A\u5C0F<br>\n    \u5374\u63D0\u9192\u6211 \u52C7\u6562\u662F\u4EC0\u4E48<br>\n    ...',
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '青花瓷',
  content: 'hhfdfdsp dfdso dfdsp sd of<br>\n              sdfh hf f d s ds p sdf h<br>\n              dsps sps spspo dsps sps sfdss<br>\n              opff fdf fdfhf fff dddd dsfd<br>\n              dsps sps spspo opfh hfh hfdss<br>\n              dsd fdds d sp dssp s s s<br>\n              hhfdfp dfhfd hhfdfo dfhds<br>\n              sdf hjhf hffd d sds d sd f hf<br>\n              hhfdfp dfhfd hhfdfo dfhds<br>\n              sdf hjhf hffd d o fd ds~',
  degree: 4,
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '一直很安静',
  content: 'fhdfs sa s p gf d~ fhdfs osd ss ss<br>\n              fhdfs ss j j jh f~ fhdfs df gfds psas s~<br>\n              fhlk lh j h f~ fgfds hhh df<br>\n              fhlk lh j h f~ fgfds s ass~<br>\n\n              fhdfs sa s p gf d~ fhdfs osd ss ss<br>\n              fhdfs ss j j jh f~ fhdfs df gfds psas s~<br>\n              fhlk lh j h f~ fgfds hhh jf~<br>\n              fhlk l z x x~ fgfds s ass~',
  degree: 3,
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '好好',
  content: 'fosf dgfd sdfs o~ gpsg fdgs spsf d<br>\n              dfg hhhd sp jf gfgh j~ jjkl lljs ddf gpsf f d ~<br>\n              \u505C\u987F<br>\n              fosf dgfd sdfs o~ gpsg fdgs spsf d<br>\n              dfg hhhd sp jf gfgh j~ jjkl lljl ll j xz~<br>\n              \u9AD8\u6F6E<br>\n              hlz xhcx zlz lk lf zl kjh jsgj jhh kl <br>\n              h cxzl h~<br>\n              hlz xhcx zlz lk lf zl kjh jsgj jhh kl <br>\n              h cxzl z~<br>\n              hlz xhcx zlz lk lf vv bv jsgj jhh kl <br>\n              h cxzl  xz bn m mmmmm~',
  degree: 5,
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '突然好想你(选段)',
  content: 'W U UT YT R T~ T I IU IU I O Y<br>\n    T R T PP A D S A P OO P U<br>\n    T R T O OO I E R T<br>\n    W U UT YT R T~ T I IU IU I O Y<br>\n    T R T P~ P A DSAP O OPU<br>\n    T R T O OO IERT<br>\n    P A S F D<br>\n    S D O D S<br>\n    P A S F D S F<br>\n    P A S F D<br>\n    H D G FDFS<br>\n    P A S F D S S',
  degree: 2,
  lyrics: '\n      \u6700\u6015\u7A7A\u6C14\u7A81\u7136\u5B89\u9759<br>\n      \u6700\u6015\u670B\u53CB\u7A81\u7136\u7684\u5173\u5FC3<br> \n      \u6700\u6015\u56DE\u5FC6\u7A81\u7136\u7FFB\u6EDA<br> \n      \u7EDE\u75DB\u7740\u4E0D\u5E73\u606F<br> \n      \u6700\u6015\u7A81\u7136\u542C\u5230\u4F60\u7684\u6D88\u606F<br> \n      \u60F3\u5FF5\u5982\u679C\u4F1A\u6709\u58F0\u97F3<br> \n      \u4E0D\u613F\u90A3\u662F\u60B2\u4F24\u7684\u54ED\u6CE3<br> \n      \u4E8B\u5230\u5982\u4ECA<br> \n      \u7EC8\u65BC\u8BA9\u81EA\u5DF2\u5C5E\u65BC\u6211\u81EA\u5DF2<br> \n      \u53EA\u5269\u773C\u6CEA\u8FD8\u9A97\u4E0D\u8FC7\u81EA\u5DF1<br> \n      \u7A81\u7136\u597D\u60F3\u4F60<br> \n      \u4F60\u4F1A\u5728\u54EA\u91CC<br> \n      \u8FC7\u7684\u5FEB\u4E50\u6216\u59D4\u5C48<br> \n      \u7A81\u7136\u597D\u60F3\u4F60<br> \n      \u7A81\u7136\u950B\u5229\u7684\u56DE\u5FC6<br> \n      \u7A81\u7136\u6A21\u7CCA\u7684\u773C\u775B',
  author: 'YuetAu',
  authorLink: 'https://yuetau.net/'
}, {
  name: '送别',
  content: 'O UOS P S O<br/>\n    O TYU YTY<br/>\n    O UOS AP S O<br/>\n    O YUI RT<br/>\n    PSS A PAS<br/>\n    PASPPOUTY<br/>\n    O UOS AP SO<br/>\n    O YUI RT',
  degree: 1,
  lyrics: '\u957F\u4EAD\u5916\uFF0C\u53E4\u9053\u8FB9\uFF0C<br/>\n    \u82B3\u8349\u78A7\u8FDE\u5929\u3002<br/>\n    \u665A\u98CE\u62C2\u67F3\u7B1B\u58F0\u6B8B\uFF0C<br/>\n    \u5915\u9633\u5C71\u5916\u5C71\u3002<br/>\n    \u5929\u4E4B\u6DAF\uFF0C\u5730\u4E4B\u89D2\uFF0C<br/>\n    \u77E5\u4EA4\u534A\u96F6\u843D\uFF1B<br/>\n    \u4E00\u58F6\u6D4A\u9152\u5C3D\u4F59\u6B22\uFF0C<br/>\n    \u4ECA\u5BB5\u522B\u68A6\u5BD2\u3002<br/>\n    \u957F\u4EAD\u5916\uFF0C\u53E4\u9053\u8FB9\uFF0C<br/>\n    \u82B3\u8349\u78A7\u8FDE\u5929\u3002<br/>\n    \u95EE\u541B\u6B64\u53BB\u51E0\u65F6\u8FD8\uFF0C<br/>\n    \u6765\u65F6\u83AB\u5F98\u5F8A\u3002<br/>\n    \u5929\u4E4B\u6DAF\uFF0C\u5730\u4E4B\u89D2\uFF0C<br/>\n    \u77E5\u4EA4\u534A\u96F6\u843D\uFF1B<br/>\n    \u4EBA\u751F\u96BE\u5F97\u662F\u6B22\u805A\uFF0C<br/>\n    \u60DF\u6709\u522B\u79BB\u591A\u3002',
  author: 'Fake'
}, {
  name: '天之大',
  content: 'JH JLJH LZX ZLJL<br/>\n    JHJLZXZLZ<br/>    \n    JH JLJH LZX ZLJL<br/>    \n    JHJLZXZLL<br/>    \n    XVV XVBMB XXVZL<br/>    \n    XVV XVBMBXZ<br/>    \n    XVV XVBMB XXVZL<br/>    \n    JHJLZXZLL',
  degree: 1,
  lyrics: '\u5988\u5988 \u6708\u5149\u4E4B\u4E0B \u9759\u9759\u7684 \u6211\u60F3\u4F60\u4E86<br/>\n    \u9759\u9759\u6DCC\u5728\u8840\u91CC\u7684\u7275\u6302<br/>    \n    \u5988\u5988 \u4F60\u7684\u6000\u62B1 \u6211\u4E00\u751F \u7231\u7684\u8941\u8913<br/>    \n    \u6709\u4F60\u6652\u8FC7\u7684\u8863\u670D\u5473\u9053<br/>    \n    \u5929\u4E4B\u5927 \u552F\u6709\u4F60\u7684\u7231 \u662F\u5B8C\u7F8E\u65E0\u7455<br/>    \n    \u5929\u4E4B\u5927 \u8BB0\u5F97\u4F60\u7528\u5FC3\u4F20\u8BDD<br/>    \n    \u5929\u4E4B\u5927 \u552F\u6709\u4F60\u7684\u7231 \u6211\u4EA4\u7ED9\u4E86\u4ED6<br/>    \n    \u8BA9\u4ED6\u7684\u7B11\u50CF\u6781\u4E86 \u5988\u5988',
  author: '翾'
}, {
  name: '天空之城',
  content: 'PAS ASFA~ UP OPSO~ IUI UISU SSSA (^I) IAA <br/>\n\n    PAS ASFA~ UP OPSO~ YUI SA SD FS~ SAP AOP <br/>\n    \n    SDF DFHD OOS ASFF <br/>\n    \n    PAS ASD SOO~ GFDSF~ F J J H H FDS<br/>\n    \n    S DS DHF~ F J J H H FDS ~ S DS DAP',
  degree: 2,
  author: 'ShawNa'
}, {
  name: '小幸运',
  content: 'uuo ossa apup~ ppa affa aouo<br/>\n              uuo ossa apup~ pa pa f d s<br>\n              uuo ossa apup~ ppa affa aouo<br>\n              uuo ossa asup~ pa pa f d s<br>\n              fdsa pppp pf d~ dsap ooou od s~<br>\n              sso ot u yp~ ppp sp sp ssss fd d~<br>\n              o fdsd fodf odf~ dd fgfda sups upa~<br>\n              aaf hfsa pgg~ hgf off~ gfs idd~ dsf ds f d s~<br>\n              fodf odf~ dd fghda sups upa~<br>\n              aaf hfsa pgg~ hgf off~ gfs idd~ fss f d s~',
  degree: 4,
  author: '棱镜jh',
  authorLink: 'https://github.com/WarpPrism/AutoPiano'
}, {
  name: '莫斯科郊外的晚上',
  content: 't(^y)o(^y)i ~ (^y)y oit <br>\n    (^y)o(^p)(^p)s(^p)(^o)o <br>\n    padso <br>\n    ytoi(^o) <br>\n    (^p)(^o)oi(^y) oit',
  degree: 2,
  lyrics: '\u300A\u83AB\u65AF\u79D1\u90CA\u5916\u7684\u665A\u4E0A\u300B<br/>\n    \u6DF1\u591C\u82B1\u56ED\u91CC\u56DB\u5904\u9759\u6084\u6084<br/>\n    \u53EA\u6709\u6811\u53F6\u5728\u6C99\u6C99\u54CD<br/>\n    \u591C\u8272\u591A\u4E48\u597D<br/>\n    \u4EE4\u4EBA\u5FC3\u795E\u5F80<br/>\n    \u591A\u4E48\u8FF7\u4EBA\u7684\u665A\u4E0A<br/>\n    \u6211\u7684\u5FC3\u4E0A\u4EBA\u5750\u5728\u6211\u8EAB\u65C1<br/>\n    \u6084\u6084\u770B\u7740\u6211\u4E0D\u58F0\u54CD<br/>\n    \u6211\u613F\u5BF9\u4F60\u8BB2<br/>\n    \u4E0D\u77E5\u600E\u6837\u8BB2<br/>\n    \u591A\u5C11\u8BDD\u513F\u7559\u5728\u5FC3\u4E0A<br/>\n    \u957F\u591C\u5FEB\u8FC7\u53BB\u5929\u8272\u8499\u8499\u4EAE<br/>\n    \u8877\u5FC3\u795D\u798F\u4F60\u597D\u59D1\u5A18<br/>\n    \u4F46\u613F\u4ECE\u4ECA\u540E<br/>\n    \u4F60\u6211\u6C38\u4E0D\u5FD8<br/>\n    \u83AB\u65AF\u79D1\u90CA\u5916\u7684\u665A\u4E0A',
  author: 'LalalalavaZ'
}, {
  name: 'Lemon【Unnatural主题曲】',
  content: 'SDF SP D A OU APOT OU<br/>\n    YUI S ASO IUI S APO<br/>\n    SD F SP D A OU A P OT O U<br/>\n    YUI O IO U O S F D DD SS<br/>\n    P AS AP OFF D FG FD SDO<br/>\n    I OP OI UOSS A AP AS<br/>\n    DFDS PS FH DS DFDS PS FH DS<br/>\n    DFDS PS FH JH HI KH FH D<br/>\n    DFDS PS FH DS SSDF GFDAS<br/>\n    SA PASD SOUO PDA SS<br/>\n    SA PASD SOSD FGD SS',
  degree: 3,
  author: 'Fake'
}, {
  name: "西海情歌",
  content: '\n    U OP SP D~ S DF FD DSP~ <br/>\n    U O PS D D D DS D DF FD DSP~ <br/>\n    U OP SP D~ DS S DF FD DSP~ <br/>\n    SS DF HHHF HJJH JJJHF HJLLLL LJJL JJJHF <br/>\n    HFDDDSP SDD DFHJJHF <br/>\n    SDHHHFHJJHJJJHF HJLLLLLJJLJJJHF <br/>\n    HFDDDSP SDD DFD S~ P~',
  degree: 2,
  author: 'javacBT'
}, {
  name: "绿色",
  content: '\n      fdfp ppph d dd <br/>\n      fdfooouoh f ff<br/>\n      fhfspss <br/>\n      fhfspsd <br/>\n      sdsgffddsdsg fdf',
  lyrics: '\n    \u82E5\u4E0D\u662F\u4F60\u7A81\u7136\u95EF\u8FDB \u6211\u751F\u6D3B <br/>\n\n    \u6211\u600E\u4F1A\u628A\u6B7B\u5B88\u7684\u5BC2\u5BDE \u653E\u4EFB\u4E86 <br/>\n    \n    \u7231\u6211\u7684\u8BDD\u4F60\u90FD\u8BF4 <br/>\n    \n    \u7231\u6211\u7684\u4E8B\u4F60\u4E0D\u505A <br/>\n    \n    \u6211\u5374\u628A\u751C\u8A00\u871C\u8BED\u5F53\u505A\u4F60\u7231\u6211\u7684\u8EAF\u58F3\n    ',
  degree: 1,
  author: 'iPeng6'
}, {
  name: '\u6211\u7684\u4E2D\u56FD\u5FC3',
  content: 'e uyutre upo uytyu uop apouy ttyu yurewe <br/>\n              e uyutre upo uytyu uop apouy ttyu yurewe <br/>\n              uouu uspp pspo tytyu <br/>\n              uspp psdf fdaop <br/>\n              e u yutre upouytyu <br/>\n              uop apo uy ttyu y u apop',
  degree: 2,
  author: 'HesperusArcher',
  authorLink: 'https://github.com/HesperusArcher',
  lyrics: '\u6CB3\u5C71\u53EA\u5728\u6211\u68A6\u8426 <br>\n             \u7956\u56FD\u5DF2\u591A\u5E74\u672A\u4EB2\u8FD1 <br>\n             \u53EF\u662F\u4E0D\u7BA1\u600E\u6837\u4E5F\u6539\u53D8\u4E0D\u4E86 <br>\n             \u6211\u7684\u4E2D\u56FD\u5FC3 <br>\n             \u6D0B\u88C5\u867D\u7136\u7A7F\u5728\u8EAB <br>\n             \u6211\u5FC3\u4F9D\u7136\u662F\u4E2D\u56FD\u5FC3 <br>\n             \u6211\u7684\u7956\u5148\u65E9\u5DF2\u628A\u6211\u7684\u4E00\u5207 <br>\n             \u70D9\u4E0A\u4E2D\u56FD\u5370 <br>\n             \u957F\u6C5F \u957F\u57CE \u9EC4\u5C71 \u9EC4\u6CB3 <br>\n             \u5728\u6211\u5FC3\u4E2D\u91CD\u5343\u65A4 <br>\n             \u65E0\u8BBA\u4F55\u65F6 \u65E0\u8BBA\u4F55\u5730 <br>\n             \u5FC3\u4E2D\u4E00\u6837\u4EB2 <br>\n             \u6D41\u5728\u5FC3\u91CC\u7684\u8840 <br>\n             \u6F8E\u6E43\u7740\u4E2D\u534E\u7684\u58F0\u97F3 <br>\n             \u5C31\u7B97\u8EAB\u5728\u4ED6\u4E61\u4E5F\u6539\u53D8\u4E0D\u4E86 <br>\n             \u6211\u7684\u4E2D\u56FD\u5FC3'
}, {
  name: "伊莎贝拉之歌《约定的梦幻岛》OST",
  content: '\n    E(^T)YUPOIU TURYE <br/>\n    WEUIOUYAO UOPUOPUYEOU <br/>  \n    E(^T)YUPOIU TURYE <br/> \n    WEUIOUYAO UOPUOPUYEOU <br/> \n    (^T)YUPOIU TUOUP <br/>\n    PSAOUPFA OPASAPASDAF <br/> \n    UPASAPOUYYTOU ERTYTYIUYU <br/>\n    UPASASDODGFDS ERTYUEWE <br/>\n    UPASAPOUYYTOU ERTYTYIUYU <br/>\n    UPASASDODGFDS HSPFAODAAP',
  lyrics: '',
  degree: 3,
  author: 'HikamaiC',
  authorLink: 'https://github.com/Gu-Miao'
}, {
  name: "cannon in D",
  content: '\n    [tf] [wd] [es] [0a] [qp] [8o] [qp] [wa] <br/>\n    [tsf] o [wad] o [eps] u [0oa] u [qip] t [8uo] t [qip] t [woa] y <br/>\n    [tus] a s [wa] [es] f [0h] j [qg] f d g [8f] d s a [qp] o i u [wy] u i <br/>\n    [tuo] o [wo] p o i [etu] u [0u] i u y [qt] E e E [8t] t [qt] E e t [wr] t y <br/>\n    [8wu] [5ry] [6et] [3r] [4e] [1w] [4e] [5t] r [18wtu]',
  lyrics: '',
  degree: 3,
  author: 'iamjiangmioamiao',
  authorLink: ''
}, { name: '遇见',
  content: 'OU OY UYT TRERTRTYU </br> OU OD SAS TRERTRTYT </br> OPASASAPOPO TYUIUIOTYU </br> OPASASADSDSFO TYUIUIUYTRT </br> OPASASDSAPO TYUIUIOTTPO </br> OPASASDSDFO  TYUIUIOTTPO </br> OPASASDSDFO  TYUYUYOTYUT </br> OPASASPAOIO </br> UUUIOUWW YYYUIYWW </br> TTTYUYRT RERTR </br> EWEPO YIUYT </br> TREYYTEERT ',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '婚礼进行曲',
  content: 'TIII TOUI TIAAPOIUIO TIII TOUI TIPSPIYOPIAPOYY UIOO APOYY UIOO TIII TOUI TIPSPIYOPIYOPII ',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '童话',
  content: 'OSASO OSASO OSAS SSPPOOSASO OFDDS OSASP PPSJH DDGGFF FFADSSAS SASG OHGFDDDGGFF FFLKJKL LDSJ JJHHHOHGFFGF FGF GFDSSFHJ JJHDDGF SFHJ JJHDDGFGFDS DFPPSSAS',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '菊花台',
  content: 'UUYU UOUYU TTYUOU YYTY </br>    U OUPO POOUO WUYYOUYYYTY </br>    UUYU UOUYU TTYUOU YYTY </br>    U OUPO POOUO UYUOUYYT </br>    TYUUOP PFFDSPO POUYT ETYYTY </br>    TYUUOP PFDSSDS OOUASTYUYT ',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '北京欢迎你',
  content: 'FHFDFDFFDPS FD </br>DSPSDFHDFJHHDS </br> DSPSDFHDFJHHF </br> DFDSHJFPFDDS </br> FHLHJJH FF HH FH JL ZL HF D H F F </br> FH LH JL ZL HF HLJ FD FH XZ LL </br> ',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '致爱丽斯',
  content: 'FDFDFADSPTUPAUOASUFDFDFADSPTUPAUSAPASDFOGFDIFDSUDSAAUFFFFDFDFADSPTUPAUOASUFDFDFADSPTUPAUSAPSGFFDDGJHGFDSAPPOPASDDFGPSDASDFHDASDFHDAFFFFFD ',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '约定',
  content: 'OSDFDSFDOO UPASAPSAUO POOIISUUDS </br>    DFGFFDSPD OSDFDSFDAO FPASAPSAUO </br>    POOIISDFS PASPSJHH DSHF FDSASPUP </br>    SDSJG GFGPASD FGHHHJS </br>    HADS DFPSGFGHD DSHF FDSASPUP </br>    SDSJG GFGPASD FGHHHJS </br>    HADS DFGPGFSDS ',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '美丽的神话',
  content: 'PFA PSDSF PJHJHDGF </br>    PJHDFGF S PFDAP </br>    PFAPSDSF PJHJHDGF </br>    PJHDFGFDS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS SSDFSAOSAPAJ',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '有没有人告诉你',
  content: 'UPPPPPPPPUIOI UOOOOOOOPAAU </br>    UPPPPPPPPFFD AAAAAUSASA </br>    UPPPPPPPPUIOI YOOOOOOOPAAU </br>    UPPPPPPPPFFD AAAAAAAPAP </br>    FJFFFFSPUUFD UHHHHHHHJKKF </br>    FJFFFFSPUUFD DDDDDUAAP ',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '好好恋爱',
  content: 'UIOOOOOIUYYO AASASSSDFAAO </br>    TPPPUPSOOOOUT IIIUIOPPPSPO </br>    UIUUIOOOOUYTTS APOPO </br>    UTTPPOOOIU SSSSASDD </br>    OGFOOGDOGFGFGFDS SAPPFPFPOOFOFO </br>    GFGFSD OGFOOGHDOGFFFGFDF </br>    SAPPFPFPOOFOFDSP SDAPAPAFDSS',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '安静-周杰伦',
  content: 'FFFFDSADDDS OFDSSSOFDSSD </br>    FFFFDSADDDS OFDSSSOFDSSDDFG </br>    GGGGFDSSSDD OHHHGFDDDFF </br>    PGFGFDSSASO FGFGFDSDH </br>    OFGHGFHOFGHGFH OFGHGFSDDDFS </br>    HHSSASSHHSSASS GGFFDDSGGFFDDS </br>    OFGHGFHOFGHGFH OFGHGFSDDDFS </br>    HHSSASSHHSSASS GGFFDDSSGFDSPSS',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '月亮代表我的心',
  content: 'OSFHSAFH HJKLJH FDSSS FDSSS DFDSPDFD OSFHSAFH HJKLJH </br>    DSSS FDSSS DFDPASDS FHFDSHA PAPAPOF HFDSHA PASSSDFD OSFHSAFH HJKLJH </br>    FDSSS FDSSS DFDPASDS',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '卡农　(括号是一起按) ',
  content: 'T-UOS W-YOA E-TUP 0-RYO </br>    Q-ETI 8-WTU Q-ETI W-RYO </br>    (TF)-UOS (WD)-RYO (SE)-TUP (A0)-RUO </br>    (PQ)-ETI (O8)-0WT (PQ)-ETI (AW)-RYO </br>    SAST (R 9 )OYU (0T)SAP (0A)FHJ </br>    (QG)FDG (F8)DSA (QP)OIU (WY)IUY </br>    (WT)YUI (WR)YOI (EU)POI (0O)IUY </br>    (QT)EPA (8S)APO (QI)UYP OPO </br>    (HU)FGH-FG(HW)OPASDFG </br>    (EF)SDF-UI(RO)POIOUIO </br>    (EI)POI-UY(UW)YTYUIOP </br>    (EI)POP-AS(RO)PASDFGH </br>    (HY)FGH-FG(HW)OPASDFG </br>    (EF)SDF-UI(RO)POIOUIO </br>    (EI)POI-UY(WU)YTYUIOP </br>    (EI)POP-AS(RO)PASDFGH </br>    (TF)-UOS (WD)-RYO (SE)-TUP (A0)-RUO </br>    (PQ)-ETI (O8)-0WT (PQ)-ETI (AW)-',
  degree: 5,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '不能说的秘密',
  content: 'WTTT WRRR WTTT WYYY WTTT WRRR WTTT WYYY WIIII IUU IIIOUYTRRT </br>    WOOOO OII OOOOOIIUUY WIIII IUU IIIOUYTRRYT ETOPT OOOOOIIUUY </br>    TSASSOOOOIIU TSASSOOOODDS TSASAPTAPAPO TPOPOIIUIOPPO </br>    TSASSOOOOIIU TSASSOOOODDS TSASAP TAPAPO TPOPOIIUIOPPO TOTIU TTOTIUT',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '往事难忘',
  content: 'T TYU UIO POU OIUY IUYT </br>    T TYU UIO POU OIUY UYT </br>    OIUY WWIUYT OIUY IUYT </br>    T TYU UIO POU OIUY UYT',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '梁祝',
  content: 'OUYT YREW </br>    APAOPIUO YUOYUIUYT </br>    ORYETW ETW </br>    0WETY ETW </br>    OSPOUOY </br>    YUREWETY0TEWETW </br>    UORYETW 0W0WERYE </br>    WETYOUYUYTEW0T ETEW0WETW </br>    UOYUYTREW',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '大海',
  content: 'EWTTTT WETTYT ETYYYY TEYYUY </br>    UOPPOP OUYUYTE WETTTTYT </br>    UOPPPPSPOOPO UYTTTTYU </br>    UYTTTTSPOOPO UOPSSPO </br>    UOPPPPSPOOPO UYTTTTOU </br>    UYTTTTYUOOUO UOP EUYTT',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '虫儿飞',
  content: 'UUUIOUYY TTTYUURR EUY EUY EUYTT </br>    UUUIOUYY TTTYUURR EUY EUY EUYTT </br>    UYO IUY OIUIOUY TEUY TEYT IUIUT TIUIUTYT',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '雪绒花',
  content: '0WY TWQ 000QWEW </br>    0WY TWQ 0WWERTT </br>    Y WWREW0WT </br>    ETYTRW </br>    0WY TWQ </br>    0WWERTT',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '痴心绝对',
  content: 'SDFFFGFDDSDDHD SASSSFFSSPAAFA </br>    POPPPGGFHS POPPPGGSSPD </br>    SSDFFFGFDDSDDHD SASSSFFSSPAAFA </br>    POPPGGFHS POPPPGGSSSAS',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '画心',
  content: 'OUU YTYYOU OUUYTYOmU OUUYTYTRTYRWE 0WE EUYTRWE WWEETREW90 00WERTWTYU </br>    OUU YTYTRTYRWE 0WEEUYTRWE 0WETREWE0 0WEERTWTYU OUU YTYTRTYRWE 0WEEUYTRWE </br>    OUU YTYTRTYRWE 0WEEUYTRWE OUUYTYYOU OUUYTYOmU OUUYTYTRTYRWE 0WEEUYTRWE',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '蜗牛',
  content: 'U UUIUYUYT TTI IYTTYU TTO OPOIUI RT WWU UIUYUT WWT TWTYUIO TSAA ASAPPAOTIOP PASDFO WEOI IOIUYTY WWT TWTYUIO TSAA ASAPPAO TIOP PASDFO WEOI IUYTTRT</br>    ',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '神秘园',
  content: 'UPAS AS SDAPA ASPOP OU UPAS AS SDAPA ASPOP OP ASHJ JKHGH ASFG GHFDF ASHJ JKHGH HJGFG GHFDF UPAS AS SDAPA ASPOP OU UPAS AS SDAPA ASPOP OP',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '无赖',
  content: 'TYUUYUIUYRW ERTTYUUPOUO UOPPPOI UIOOIU UIIOITY TYUUYUIUYRW ERTTYUUPOUO UOPPPOI UIOOIU UIUTYT TTWERTTYUTW WQQEWQW WEERUYYTRT TTEWER WWWUYTTYUTO UUOPPASOU UUOPPPIPAPOIOU UIUIOPOO WUYTTYUTO UUOPPASAU UUOPPPIPAPOUYT UIUIOPOOUYTT',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '海阔天空',
  content: 'FDS DFHHHHJH JKLLLLLLKJHJ </br>    JHH HFDS FGFDDFDD FDDDSSSS DSS </br>    JKLLLLLLKJHHHFDS </br>    LLLLZZZLZX XZL </br>    LLLLZZ HHXZL </br>    LLLLZZZZLKL </br>    JJKJKL LLZLZX XZXL',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '下一站天后',
  content: 'FFFHD DHSSSFP GFGJF GHDDPSD FDFHHDFLKHHJ GFGHPSFDS </br>    FHKLKJHH FGHJGGFD DSDFHH FJFDSD PSFDDFH </br>    LKJKJ HHSFHH JJJGFD DDKH FFHS FFDDD JFH LKJKJHH SFHH JJJJLKJKLHHFHJHHGPAS',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '红河谷',
  content: 'WTUUUUYUYT </br>    WTUTUOIUY </br>    OIUUYTYUOI </br>    EEWRTYUYT </br>    OTUUUYUYT </br>    WTUUUOIUY </br>    OIUUYTYUOII </br>    EEWRYUYT',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '一千年以后',
  content: 'STYUPO IUTUY STYUPAO UP AAASDSA SASFF</br>    APAO PPASDSDGFDDFS SASF APAOPS</br>    </br>    SSSDFGFSFD OSD FDSOD FDSAPUA</br>    </br>    SAPASDOFF FGFSDD OSD FDSOD DFDSAPDA</br>    </br>    SAPOPSODS FFGFD SDFDSDSODS',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '男儿当自强',
  content: 'PSPSPOP</br>    PSPSOPD</br>    FSDH FDFS</br>    DFSDP</br>    SDPSO</br>    PSDSPO PSO</br>    PSPOP SDSPO</br>    PSOPD FHDFJ</br>    FJHGFHFDF</br>    FHJKJHF FHJKHJK</br>    JKJHFHJKJHFHD</br>    FDSDHGFHD</br>    DFHJFHFDS PDS</br>    PSDFA AFDAP</br>    PSPOP</br>    PSPOP</br>    FHDFJ</br>    ',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '回到过去 ',
  content: 'TUUYYTRT </br> TRREEW0E </br> EWWTTUUY </br> YTTTREW </br> TUUYYTRYT </br> TRREEW0R </br> EWWW </br> WQ0WQ </br> TUUY </br> YYYTYUUY </br> WRTTRTPO </br> TYTUTTRWW </br> WTYTUTIIUY </br> WTYUU </br> UYUIIUUY </br> YTUUUYYTRT </br> TYTUUUU </br> TTOOUUU </br> TTYYTTTETETY </br> WTYRT',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '亲爱的那不是爱情 ',
  content: 'SSSAPPOPOOIUO </br> TPPPPOSUUYYTY </br> UYTRTOO </br> OTPOOO </br> PASSSOIUYTT </br> SSSAPPOPOOIUO </br> TPPPPOSUUYYTY </br> UYTRTOO </br> OTPOOO </br> PASSSOIUYTT </br> UUODFOAASP </br> IIPHGPSSDA </br> OOUDSDFDSU </br> SAOSAAOFFGD </br> UUODFOAASP </br> IIPHGPSSDA </br> OOUDSDFDSS </br> PSHGFDSS',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '哆啦A梦主题曲',
  content: 'WTTUPUO </br> OPOUIUY </br> EYYIAAPOIIUERTY </br> WTTUPUO </br> OPOUIUY </br> EYYIAAPOIIUERYT </br> PPOIOPO </br> YUIYO </br> POIYAPOPOI </br> OPUYT',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '想唱就唱',
  content: 'SASDSO UIIIOU </br>    SASDSO OPPPSA </br>    SASDFSOU SDSOU </br>    SASDFSOS GFDSF </br>    FGHJ SSDFD </br>    DFGH HGFDF </br>    FGHJHH KKLKHDF GFGH </br>    FGHJ SSDFD </br>    DFH FKKFL LKLJHSS JHGFGH JH </br>    FGHJ SSDFD </br>    DFGH HGFDF </br>    FGHJHH KKLKHDF GFGH </br>    FGHJ SSDFD </br>    DFH FKKFL LKLJHSS JHGFGH',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '星语心愿',
  content: 'JLKJHJF JHJLKLKJKL　　</br>    LZXXXXZ LKJKH JLKJHJ　　</br>    FHJXZLKL LKJJJJHHJF　　</br>    HHJXZLKLL LKJJHKJ',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '千千阙歌',
  content: 'TTYU OPSAAAOU YYYUI PSFDDAOTTYU OPSAAAOU YYYUI PSFDDAOPOPOPAAPA DDDDASDFFFDDDSF AOPOPSDFFDF FDSD SPP OPSD FFDF FHJHFFFFDDSDSP FFGFDSD FF F DDSD SPSS',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '欢乐颂',
  content: 'U U I O O I U Y T T Y U U Y YU U I O O I U Y T T Y U Y T T Y Y U T Y U I U T Y U I U Y T Y W U U I O O I U Y T T Y U Y T T ',
  degree: 1,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '会呼吸的痛',
  content: 'HJLJXXJZ ZZLKLZXZHL LKJKLGGGLLZLHHH HCXZXX HJLJXXJZ ZZLKLZXZHLL LKJKLGGGLLZLHHH HJKLLKLL ',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '夜曲',
  content: 'PA SSSSAFF JJJHGHSS</br>    GGGHFAFD DSASSA</br>    SSSSAFF JJJHGHSS</br>    GGG FDASP',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '暗香',
  content: 'UIURTUP SAOU UIURTUP </br>    SAOF PPPSFOIPD DFGDFGF </br>    PDFGDFGP PFGHFGHP DFGPG </br>    HIDFDFGF </br>    UIURTUPSAOU </br>    UIURTUPSAOP ',
  degree: 3,
  author: '',
  authorLink: '',
  lyrics: '' }, { name: '美丽的神话 ',
  content: 'PFA PSDSF PJHJHDGF </br>    PJHDFGF S PFDAP </br>    PFAPSDSF PJHJHDGF </br>    PJHDFGFDS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS SSDFSAOSAPAJ',
  degree: 2,
  author: '',
  authorLink: '',
  lyrics: '' }]);

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var scoremidi = [
// 周杰伦
{ name: '晴天', url: '晴天.mid', degree: 5 }, { name: '等你下课', url: '等你下课.mid', degree: 3 }];

scoremidi.forEach(function (score) {
  score.url = '/static/midi/' + score.url;
  score.playing = false;
});

/* harmony default export */ __webpack_exports__["a"] = (scoremidi);

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 示例音乐的简谱表示

var ScoreNum = [{
  name: '小星星',
  step: 'C',
  speed: '100',
  degree: 4,
  playing: false,
  mainTrack: ['1(1)', ' 1(1)', ' 5(1)', ' 5(1)', ' 6(1)', ' 6(1)', ' 5(2)', ' 4(1)', ' 4(1)', ' 3(1)', ' 3(1)', ' 2(1)', ' 2(1)', ' 1(2)', ' 5(1)', ' 5(1)', ' 4(1)', ' 4(1)', ' 3(1)', ' 3(1)', ' 2(2)', ' 5(1)', ' 5(1)', ' 4(1)', ' 4(1)', ' 3(1)', ' 3(1)', ' 2(2)', ' 1(1)', ' 1(1)', ' 5(1)', ' 5(1)', ' 6(1)', ' 6(1)', ' 5(2)', ' 4(1)', ' 4(1)', ' 3(1)', ' 3(1)', ' 2(1)', ' 2(1)', ' 1(2)', '1<(1)', '1<(1)', '5<(1)', '5<(1)', '6<(1)', '6<(1)', '5<(2)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(1)', '2<(1)', '1<(2)', '5<(1)', '5<(1)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(2)', '5<(1)', '5<(1)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(2)', '1<(1)', '1<(1)', '5<(1)', '5<(1)', '6<(1)', '6<(1)', '5<(2)', '4<(1)', '4<(1)', '3<(1)', '3<(1)', '2<(1)', '2<(1)', '1<(2)'],
  backingTrack: ['1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '7>>(0.5)', '5>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', ' 1(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', ' 1(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', ' 1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', ' 1(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', ' 1(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', ' 1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1>(0.5)', '6>(0.5)', '4>(0.5)', '6>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '7>>(0.5)', '5>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '5>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '7>(0.75)', '5(0.25)', '2(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '1(0.75)', '4(0.25)', '6(0.5)', '1<(0.5)', '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '5>(0.75)', '7>(0.25)', '2(0.5)', '5(0.5)', '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '1(0.75)', '4(0.25)', '6(0.5)', '1<(0.5)', '1(0.75)', '3(0.25)', '5(0.5)', '1<(0.5)', '5>(0.75)', '7>(0.25)', '2(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '1(0.75)', '6(0.25)', '4(0.5)', '6(0.5)', '1(0.75)', '5(0.25)', '3(0.5)', '5(0.5)', '7>(0.75)', '5(0.25)', '2(0.5)', '5(0.5)', '1>(2)']
}, {
  name: '童话镇',
  step: 'C',
  speed: '80',
  degree: 2,
  playing: false,
  mainTrack: ['0(0.5)', '7(0.25)', '1<(0.25)', '7(0.75)', '6(2)', '0(0.5)', '7(0.25)', '1<(0.25)', '7(0.75)', '6(0.75)', '5(0.5)', '3(1)', '7(0.25)', '1<(0.25)', '7(0.75)', '6(2)', '0(0.5)', '7(0.25)', '1<(0.25)', '2<(1)', '0(0.5)', '1<(0.5)', '7(1)', '0(0.5)', '6(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '6(0.5)', '3<(0.25)', '2<(1.25)', '0(0.5)', '6(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '6(0.5)', '7(0.25)', '3(1.25)', '0(0.5)', '6(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '6(0.5)', '3<(0.25)', '5<(1.25)', '0(0.5)', '3<(0.25)', '3<(0.25)', '2<(0.25)', '1<(0.25)', '2<(0.25)', '1<(0.25)', '2<(0.5)', '1<(0.25)', '7(1.25)', '0(0.5)', '6(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '6(0.5)', '3<(0.25)', '2<(1.25)', '0(0.5)', '6(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '6(0.5)', '7(0.25)', '3(1.25)', '0(0.5)', '6(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '7(0.25)', '6(0.5)', '3<(0.25)', '5<(1.25)', '0(0.25)', '3<(0.25)', '3<(0.25)', '5<(0.25)', '4<(0.25)', '4<(0.25)', '4<(0.25)', '4<(0.5)', '3<(0.25)', '4<(0.25)', '4<(0.5)', '3<(0.75)', '0(0.25)', '3<(0.25)', '3<(0.25)', '6<(0.25)', '5<(0.25)', '6<(0.25)', '5<(0.25)', '4<(0.5)', '6<(0.25)', '5<(1.25)', '0(0.25)', '3<(0.25)', '3<(0.25)', '3<(0.25)', '4<(0.25)', '4<(0.25)', '4<(0.25)', '3<(0.25)', '4<(0.25)', '3<(0.25)', '2<(0.25)', '4<(0.5)', '3<(0.75)', '0(0.25)', '3<(0.25)', '3<(0.25)', '6<(0.25)', '5<(0.25)', '6<(0.25)', '5<(0.25)', '4<(0.5)', '6<(0.25)', '5<(1.25)', '0(0.25)', '3<(0.25)', '3<(0.25)', '2<(0.5)', '2<(0.5)', '2<(0.5)', '1<(0.5)', '7(1)', '3<(0.5)', '2<(0.5)', '1<(0.5)', '6(0.5)', '1<(0.5)', '2<(0.5)', '3<(0.5)', '5<(0.5)', '3<(0.5)', '2<(0.5)', '1<(0.5)', '6(0.5)', '6(0.5)', '5(0.5)', '3(1)', '0(0.5)', '1<(0.25)', '7(0.25)', '6(0.5)', '5(0.5)', '6(0.5)', '1<(0.5)', '1<(0.5)', '5<(0.5)', '3<(0.5)', '3<(0.25)', '2<(0.25)', '1<(0.5)', '1<(0.5)', '1<(0.5)', '6(0.5)', '7(1)', '0(0.5)', '3<(0.25)', '2<(0.25)', '3<(0.5)', '2<(0.5)', '3<(0.5)', '5<(0.5)', '6<(0.5)', '5<(0.5)', '5<(0.25)', '5<(0.5)', '3<(0.25)', '6<(0.25)', '5<(0.5)', '4<(0.25)', '5<(0.25)', '4<(0.25)', '5<(0.25)', '4<(0.25)', '3<(0.5)', '0(0.5)', '2<(0.25)', '3<(0.25)', '4<(0.5)', '3<(0.5)', '2<(0.5).', '6(0.25)', '3<(0.5)', '2<(0.25)', '1<(0.5)', '1<(0.25)', '1<(0.25)', '2<(0.25)', '7(0.25)', '7(0.5)', '7(0.25)', '7(0.25)', '7(0.5)', '6(0.5)', '7(0.75)', '3<(0.5)', '2<(0.5)', '1<(0.5)', '6(0.5)', '1<(0.5)', '2<(0.5)', '3<(0.5)', '5<(0.5)', '3<(0.5)', '2<(0.5)', '1<(0.5)', '6(0.5)', '6(0.5)', '5(0.5)', '3(1)', '0(0.5)', '1<(0.25)', '7(0.25)', '6(0.5)', '5(0.5)', '6(0.5)', '1<(0.5)', '1<(0.5)', '5<(0.5)', '3<(0.5)', '3<(0.25)', '2<(0.25)', '0(0.25)', '1<(0.25)', '2<(0.25)', '1<(0.25)', '2<(0.25)', '1<(0.25)', '6(0.25)', '0(0.25)', '7(1)', '3<(0.25)', '2<(0.25)', '3<(0.5)', '2<(0.5)', '3<(0.5)', '5<(0.5)', '6<(0.5)', '5<(0.5)', '5<(0.25)', '5<(0.5)', '3<(0.25)', '6<(0.25)', '5<(0.5)', '4<(0.25)', '5<(0.25)', '4<(0.25)', '5<(0.25)', '4<(0.25)', '3<(0.5)', '0(0.5)', '2<(0.25)', '3<(0.25)', '4<(0.5)', '3<(0.5)', '2<(0.5).', '6(0.25)', '3<(0.5)', '2<(0.25)', '1<(0.5)', '1<(0.25)', '1<(0.25)', '2<(0.25)', '7(0.25)', '7(0.5)', '7(0.25)', '7(0.25)', '7(0.5)', '6(0.5)', '7(0.75)', '5(0.5)', '7(0.5)', '6(1)', '1<(0.5)', '2<(0.5)', '3<(1)', '0(0.5)', '3<(0.25)', '5<(0.25)', '6<(0.25)', '5<(0.25)', '3<(0.25)', '5<(0.25)', '5<(0.25)', '3<(0.25)', '2<(0.25)', '5<(0.25)', '3<(0.25)', '5<(0.25)', '3<(1)', '0(0.5)', '4<(0.75)', '3<(0.25)', '2<(0.5)', '4<(0.5)', '3<(0.5)', '2<(0.5)', '1<(1)', '7(0.75)', '6(0.25)', '7(0.5)', '1<(0.5)', '7(2)']
}, {
  name: 'Cannon in D (D大调卡农)',
  step: 'D',
  speed: '75',
  degree: 5,
  playing: false,
  mainTrack: ['0(0.5)', '3(0.5)', '5(0.5)', '1<(0.5)', '0(0.5)', '2(0.5)', '5(0.5)', '7(0.5)', '0(0.5)', '1(0.5)', '3(0.5)', '6(0.5)', '0(0.5)', '7>(0.5)', '3(0.5)', '5(0.5)', '0(0.5)', '6>(0.5)', '1(0.5)', '4(0.5)', '0(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '0(0.5)', '6>(0.5)', '1(0.5)', '4(0.5)', '0(0.5)', '7>(0.5)', '2(0.5)', '5(0.5)', '3<(2)', '2<(2)', '1<(2)', '7(2)', '6(2)', '5(2)', '6(2)', '7(2)', '1<(2)', '7(2)', '6(2)', '5(2)', '4(2)', '3(2)', '4(2)', '2(2)', '1<(0.5)', '7(0.5)', '1<(0.5)', '1(0.5)', '7>(0.5)', '5(0.5)', '2(0.5)', '3(0.5)', '1(0.5)', '1<(0.5)', '7(0.5)', '6(0.5)', '7(0.5)', '3<(0.5)', '5<(0.5)', '6<(0.5)', '4<(0.5)', '3<(0.5)', '2<(0.5)', '4<(0.5)', '3<(0.5)', '2<(0.5)', '1<(0.5)', '7(0.5)', '6(0.5)', '5(0.5)', '4(0.5)', '3(0.5)', '2(0.5)', '4(0.5)', '3(0.5)', '2(0.5)', '1(0.5)', '2(0.5)', '3(0.5)', '4(0.5)', '5(0.5)', '2(0.5)', '5(0.5)', '4(0.5)', '3(0.5)', '6(0.5)', '5(0.5)', '4(0.5)', '5(0.5)', '4(0.5)', '3(0.5)', '2(0.5)', '1(0.5)', '6>(0.5)', '6(0.5)', '7(0.5)', '1<(0.5)', '7(0.5)', '6(0.5)', '5(0.5)', '4(0.5)', '3(0.5)', '2(0.5)', '6(0.5)', '5(0.5)', '6(0.5)', '5(0.5)', '4(0.5)', '3(1)', '3<(1)', '2<(2)', '0(1)', '1<(1)', '3<(2)', '1<(1.5)', '1<(0.5)', '0(1)', '0(1)', '1<(1)', '4<(1)', '2<(1)', '5<(1)',
  /*高潮部分*/'5<(0.5)', '3<(0.25)', '4<(0.25)', '5<(0.5)', '3<(0.25)', '4<(0.25)', '5<(0.25)', '5(0.25)', '6(0.25)', '7(0.25)', '1<(0.25)', '2<(0.25)', '3<(0.25)', '4<(0.25)', '3<(0.5)', '1<(0.25)', '2<(0.25)', '3<(0.5)', '3(0.25)', '4(0.25)', '5(0.25)', '6(0.25)', '5(0.25)', '4(0.25)', '5(0.25)', '3(0.25)', '4(0.25)', '5(0.25)', '4(0.5)', '6(0.25)', '5(0.25)', '4(0.5)', '3(0.25)', '2(0.25)', '3(0.25)', '2(0.25)', '1(0.25)', '2(0.25)', '3(0.25)', '4(0.25)', '5(0.25)', '6(0.25)', '4(0.5)', '6(0.25)', '5(0.25)', '6(0.5)', '7(0.25)', '1<(0.25)', '5(0.25)', '6(0.25)', '7(0.25)', '1<(0.25)', '2<(0.25)', '3<(0.25)', '4<(0.25)', '5<(0.25)', '5<(0.5)', '3<(0.25)', '4<(0.25)', '5<(0.5)', '3<(0.25)', '4<(0.25)', '5<(0.25)', '5(0.25)', '6(0.25)', '7(0.25)', '1<(0.25)', '2<(0.25)', '3<(0.25)', '4<(0.25)', '3<(0.5)', '1<(0.25)', '2<(0.25)', '3<(0.5)', '3(0.25)', '4(0.25)', '5(0.25)', '6(0.25)', '5(0.25)', '4(0.25)', '5(0.25)', '3(0.25)', '4(0.25)', '5(0.25)', '4(0.5)', '6(0.25)', '5(0.25)', '4(0.5)', '3(0.25)', '2(0.25)', '3(0.25)', '2(0.25)', '1(0.25)', '2(0.25)', '3(0.25)', '4(0.25)', '5(0.25)', '6(0.25)', '4(0.5)', '6(0.25)', '5(0.25)', '6(0.5)', '7(0.25)', '1<(0.25)', '5(0.25)', '6(0.25)', '7(0.25)', '1<(0.25)', '2<(0.25)', '3<(0.25)', '4<(0.25)', '5<(0.25)', '3<(0.5)', '1<(0.25)', '2<(0.25)', '3<(0.5)', '2<(0.25)', '1<(0.25)', '2<(0.25)', '7(0.25)', '1<(0.25)', '2<(0.25)', '3<(0.25)', '2<(0.25)', '1<(0.25)', '7(0.25)', '1<(0.5)', '6(0.25)', '7(0.25)', '1<(0.5)', '1(0.25)', '2(0.25)', '3(0.25)', '4(0.25)', '3(0.25)', '2(0.25)', '3(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '6(0.5)', '1<(0.25)', '7(0.25)', '6(0.5)', '5(0.25)', '4(0.25)', '5(0.25)', '4(0.25)', '3(0.25)', '4(0.25)', '5(0.25)', '6(0.25)', '7(0.25)', '1<(0.25)', '6(0.5)', '1<(0.25)', '7(0.25)', '1<(0.5)', '7(0.25)', '6(0.25)', '7(0.25)', '1<(0.25)', '2<(0.25)', '1<(0.25)', '7(0.25)', '1<(0.25)', '6(0.25)', '7(0.25)', /*高潮结束*/
  '3<(0.5)', '3(0.5)', '4(0.5)', '3(0.5)', '2(0.5)', '2<(0.5)', '3<(0.5)', '2<(0.5)', '1<(0.5)', '3(0.5)', '1(0.5)', '6(0.5)', '5(0.5)', '5>(0.5)', '4>(0.5)', '5>(0.5)', '6>(0.5)', '6(0.5)', '7(0.5)', '6(0.5)', '5(0.5)', '5>(0.5)', '4>(0.5)', '5>(0.5)', '6>(0.5)', '6(0.5)', '5(0.5)', '6(0.5)', '7(0.5)', '7>(0.5)', '6>(0.5)', '7>(0.5)', '3(0.5)', '1<(0.25)', '7(0.25)', '1<(0.5)', '3(0.5)', '5(0.5)', '5(0.25)', '6(0.25)', '7(0.5)', '5(0.5)', '3(0.5)', '1<(0.25)', '2<(0.25)', '3<(0.5)', '1<(0.5)', '3<(0.5)', '3<(0.25)', '2<(0.25)', '1<(0.5)', '7(0.5)', '6(0.5)', '6(0.25)', '5(0.25)', '6(0.5)', '7(0.5)', '1<(0.5)', '3<(0.25)', '2<(0.25)', '1<(0.5)', '3<(0.5)', '4<(0.5)', '1<(0.25)', '7(0.25)', '6(0.5)', '6(0.5)', '5(1)', '5(0.5)', '4(0.5)', '3(1.5)', '3<(0.5)', '3<(0.5)', '4<(0.5)', '3<(0.5)', '2<(0.5)', '1<(1.5)', '1<(0.5)', '1<(0.5)', '2<(0.5)', '1<(0.5)', '7(0.5)', '6(2)', '1<(2)', '1<(0.5)', '7(0.5)', '6(0.5)', '7(0.5)', '5(1.5)', '5(0.5)', '5(1.5)', '5<(0.5)', '5<(0.5)', '6<(0.5)', '5<(0.5)', '4<(0.5)', '3<(1.5)', '3<(0.5)', '3<(0.5)', '4<(0.5)', '3<(0.5)', '2<(0.5)', '1<(0.5)', '7(0.5)', '6(0.5)', '7(0.5)', '5(1.5)', '5(0.5)', '4(1)', '1<(1)', '7(1.5)', '7(0.5)', '1<(1)', '1(1)', '7>(1)', '7(1)', '6(1)', '6>(1)', '5>(1)', '5(1)', '4(1)', '4<(1)', '3<(1)', '3(1)', '2(1)', '6(1)', '2(1)', '2<(1)', '3<(1)', '3(1)', '2(1)', '2<(1)', '1<(1)', '1(1)', '7>(1)', '7(1)', '6(1)', '6<(1)', '5<(1)', '5(1)', '4(1)', '1<(0.5)', '2<(0.5)', '6(1)', '7(1)', '1<(4)' //The End
  ],
  backingTrack: ['1(2)', '5>(2)', '6>(2)', '3>(2)', '4>(2)', '1>(2)', '4>(2)', '5>(2)', '1(0.5)', '3(0.5)', '5(0.5)', '1<(0.5)', '5>(0.5)', '7>(0.5)', '2(0.5)', '5(0.5)', '6>(0.5)', '1(0.5)', '3(0.5)', '6(0.5)', '3>(0.5)', '5>(0.5)', '7>(0.5)', '3(0.5)', '4>(0.5)', '6>(0.5)', '1(0.5)', '4(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '4>(0.5)', '6>(0.5)', '1(0.5)', '4(0.5)', '5>(0.5)', '7>(0.5)', '2(0.5)', '5(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '0(1)', '0(1)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1>(0.5)', '3>(0.5)', '5>(0.5)', '1(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '6>>(0.5)', '1>(0.5)', '3>(0.5)', '6>(0.5)', '3>>(0.5)', '5>>(0.5)', '7>>(0.5)', '3>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '1>>(0.5)', '3>>(0.5)', '5>>(0.5)', '1>(0.5)', '4>>(0.5)', '6>>(0.5)', '1>(0.5)', '4>(0.5)', '5>>(0.5)', '7>>(0.5)', '2>(0.5)', '5>(0.5)', '1(4)' //The End
  ]
}, {
  name: '天空之城',
  step: 'D',
  speed: '95',
  degree: 5,
  playing: false,
  mainTrack: ['6(0.5)', '7(0.5)', '1<(1.5)', '7(0.5)', '1<(1)', '3<(1)', '7(2)', '0(1)', '3(1)', '6(1.5)', '5(0.5)', '6(1)', '1<(1)', '5(2)', '0(1)', '4(0.5)', '3(0.5)', '4(1.5)', '3(0.5)', '4(1)', '1<(1)', '3(2)', '0(0.5)', '1<(0.5)', '1<(0.5)', '1<(0.5)', '7(1.5)', '3(0.5)', '4(1)', '7(1)', '7(2)', '0(1)', '6(0.5)', '7(0.5)', '1<(1.5)', '7(0.5)', '1<(1)', '3<(1)', '7(2)', '0(1)', '3(0.5)', '3(0.5)', '6(1.5)', '5(0.5)', '6(1)', '1<(1)', '5(2)', '0(1)', '3(1)', '4(1)', '1<(0.5)', '7(1.5)', '1<(1)', '2<(1)', '3<(0.5)', '1<(2.5)', '1<(0.5)', '7(0.5)', '6(1)', '7(1)', '5(1)', '6(3)', '1<(0.5)', '2<(0.5)', '3<(1.5)', '2<(0.5)', '3<(1)', '5<(1)', '2<(2)', '0(1)', '5(0.5)', '5(0.5)', '1<(1.5)', '7(0.5)', '1<(1)', '3<(1)', '3<(3)', '0(1)', '6(0.5)', '7(0.5)', '1<(1)', '7(0.5)', '1<(0.5)', '2<(1)', '1<(1.5)', '5(0.5)', '5(2)', '4<(1)', '3<(1)', '2<(1)', '1<(1)', '3<(4)', '3<(3)', '3<(1)', '6<(2)', '5<(2)', '3<(1)', '2<(0.5)', '1<(2.5)', '2<(1)', '1<(0.5)', '2<(1.5)', '5<(1)', '3<(3)', '3<(1)', '6<(2)', '5<(2)', '3<(1)', '2<(0.5)', '1<(2.5)', '2<(1)', '1<(0.5)', '2<(1.5)', '7(1)', '6(3)', '6(0.5)', '7(0.5)', '1<(1.5)', '7(0.5)', '1<(1)', '3<(1)', '7(2)', '0(1)', '3(1)', '6(1.5)', '5(0.5)', '6(1)', '1<(1)', '5(2)', '0(1)', '4(0.5)', '3(0.5)', '4(1.5)', '3(0.5)', '4(1)', '1<(1)', '3(2)', '0(0.5)', '1<(0.5)', '1<(0.5)', '1<(0.5)', '7(1.5)', '3(0.5)', '4(1)', '7(1)', '7(2)', '0(1)', '6(0.5)', '7(0.5)', '1<(1.5)', '7(0.5)', '1<(1)', '3<(1)', '7(2)', '0(1)', '3(0.5)', '3(0.5)', '6(1.5)', '5(0.5)', '6(1)', '1<(1)', '5(2)', '0(1)', '3(1)', '4(1)', '1<(0.5)', '7(1.5)', '1<(1)', '2<(1)', '3<(0.5)', '1<(2.5)', '1<(0.5)', '7(0.5)', '6(1)', '7(1)', '5(1)', '6(4)' // The End
  ],
  backingTrack: ['0(1)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', '1(2)', '1>(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '5(2)', '2>>(0.5)', '6>>(0.5)', '2>(0.5)', '4>(0.5)', '6>(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', '1(2)', '1>(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '5(2)', '2>>(0.5)', '6>>(0.5)', '2>(0.5)', '4>(0.5)', '6>(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', '1(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '1>(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '5(2)', '5>>(0.5)', '2>(0.5)', '5>(0.5)', '7>(0.5)', '2(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '1>(0.5)', '5>>(0.5)', '2>(0.5)', '5>(0.5)', '2>(0.5)', '1>(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '5(2)', '2>>(0.5)', '6>>(0.5)', '2>(0.5)', '4>(0.5)', '6>(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '3>(0.5)', '5>>(0.5)', '2>(0.5)', '5>(0.5)', '2>(0.5)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', '1(2)', '5>>(0.5)', '2>(0.5)', '5>(0.5)', '7>(0.5)', '2(2)', '1>(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '5(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '3>(0.5)', '5>>(0.5)', '2>(0.5)', '5>(0.5)', '2>(0.5)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', '1(2)', '5>>(0.5)', '2>(0.5)', '5>(0.5)', '7>(0.5)', '2(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', '1(2)', '1>(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '5(2)', '2>>(0.5)', '6>>(0.5)', '2>(0.5)', '4>(0.5)', '6>(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '7>>(0.5)', '4>(0.5)', '7>(0.5)', '2>(0.5)', '4>(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '3>>(0.5)', '7>>(0.5)', '3>(0.5)', '5>(0.5)', '7>(2)', '4>>(0.5)', '1>(0.5)', '4>(0.5)', '6>(0.5)', '1(2)', '1>(0.5)', '5>(0.5)', '1(0.5)', '3(0.5)', '5(2)', '2>>(0.5)', '6>>(0.5)', '2>(0.5)', '4>(0.5)', '6>(2)', '6>>(0.5)', '3>(0.5)', '6>(0.5)', '1(0.5)', '3(2)', '4>>(0.5)', '1>(0.5)', '4>>(0.5)', '1>(0.5)', '3>>(0.5)', '7>>(0.5)', '3>>(0.5)', '7>>(0.5)', '6>>(4)' // The End
  ]
}];

/* harmony default export */ __webpack_exports__["a"] = (ScoreNum);

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 所有的XML乐谱文件列表
 */
// const base = '/static/xmlscore/'
var ext = '.json';

var scorexml = [{
  name: '成都',
  url: '/static/xmlscore/成都.json',
  degree: 5
}, {
  name: '千与千寻 - Always With Me',
  url: '/static/xmlscore/千与千寻.json',
  degree: 4
}, {
  name: '后来',
  url: '/static/xmlscore/后来.json',
  degree: 3
}, {
  name: '告白气球',
  url: '/static/xmlscore/告白气球.json',
  degree: 2
}, {
  name: '蒲公英的约定',
  url: '/static/xmlscore/蒲公英的约定.json',
  degree: 5
}, {
  name: '时间煮雨',
  url: '/static/xmlscore/时间煮雨.json',
  degree: 4
}, {
  name: '下一个天亮',
  url: '/static/xmlscore/下一个天亮.json',
  degree: 2
}, {
  name: '海角七号 1945',
  url: '/static/xmlscore/海角七号.json',
  degree: 3
}];

scorexml.forEach(function (score) {
  score.playing = false;
});

/* harmony default export */ __webpack_exports__["a"] = (scorexml);

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var wallpaper = ['bg_default.jpg', 'bg_eiffel.jpg', 'bg_girl.jpg'];

wallpaper = wallpaper.map(function (item) {
  return '/static/images/' + item;
});

/* harmony default export */ __webpack_exports__["a"] = (wallpaper);

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(422);
module.exports = __webpack_require__(100).Object.assign;


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(380);
var toLength = __webpack_require__(403);
var toAbsoluteIndex = __webpack_require__(419);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(54);
var getKeys = __webpack_require__(384);
var gOPS = __webpack_require__(396);
var pIE = __webpack_require__(387);
var toObject = __webpack_require__(385);
var IObject = __webpack_require__(394);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(103)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(388);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(145);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(417) });


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-page-footer {\n  width: 100%;\n  min-width: 1280px;\n  height: 40px;\n  line-height: 40px;\n  background: rgba(255, 255, 255, 0.8);\n  border-top: solid 1px #ccc;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n}\n.component-page-footer .footer-ul {\n  width: auto;\n  height: 100%;\n}\n.component-page-footer .footer-ul .footer-item {\n  display: inline;\n  list-style: none;\n  position: relative;\n}\n.component-page-footer .footer-ul .footer-item a:hover {\n  color: #fff;\n  background: #1295DB;\n}\n.component-page-footer .footer-ul .footer-item a.em {\n  color: #EF496F;\n}\n.component-page-footer .footer-ul .footer-item a.em:hover {\n  color: #fff;\n  background: #EF496F;\n}\n.component-page-footer .footer-ul.left-section {\n  float: left;\n  margin-left: 5%;\n}\n.component-page-footer .footer-ul.right-section {\n  float: right;\n  margin-right: 5%;\n}\n.component-page-footer .popup-container {\n  width: 200px;\n  height: 260px;\n  position: absolute;\n  top: -285px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 200;\n  background: #ffffff;\n  -webkit-box-shadow: 1px 1px 10px 1px #ddd;\n          box-shadow: 1px 1px 10px 1px #ddd;\n}\n.component-page-footer .popup-container::after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 50%;\n  bottom: -10px;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n          transform: translateX(-50%) rotate(45deg);\n  z-index: 150;\n  background: #ffffff;\n}\n.component-page-footer .popup-container .tab-wrap {\n  width: 100%;\n  height: 60px;\n}\n.component-page-footer .popup-container .tab-wrap .tab {\n  width: 50%;\n  height: 100%;\n  float: left;\n  cursor: pointer;\n}\n.component-page-footer .popup-container .tab-wrap .tab.active-tab {\n  border-bottom: solid 5px #1295DB;\n}\n.component-page-footer .popup-container .tab-wrap .tab .icon {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n  margin-top: 14px;\n}\n.component-page-footer .popup-container .qrcode-wrap {\n  width: 100%;\n  padding: 12px 18px;\n}\n.component-page-footer .popup-container .qrcode-wrap .money {\n  width: 100%;\n  height: 14px;\n  line-height: 14px;\n  font-size: 14px;\n  margin: 0;\n}\n.component-page-footer .popup-container .qrcode-wrap .qrcode {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-page-header {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  margin: 10px auto;\n  padding: 0 5%;\n}\n.component-page-header .trade-mark {\n  display: block;\n  width: 350px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  float: left;\n}\n.component-page-header .trade-mark .icon-piano {\n  display: block;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  -webkit-transform-origin: 50% 30%;\n          transform-origin: 50% 30%;\n}\n.component-page-header .trade-mark .trade-mark-txt {\n  font-size: 28px;\n  font-weight: 500;\n  color: #000;\n  margin: 0 0 0 10px;\n}\n.component-page-header .trade-mark .trade-mark-txt .trade-mark-txt--en {\n  font-style: italic;\n  font-size: 20px;\n  color: #666;\n  margin-left: 7px;\n}\n.component-page-header .menu {\n  float: right;\n  height: 45px;\n  line-height: 45px;\n  margin-top: 5px;\n}\n.component-page-header .menu .menu-item {\n  display: inline-block;\n  width: 80px;\n  margin: 0 7px;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.component-page-header .menu .menu-item::before {\n  content: '';\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: #ccc;\n}\n.component-page-header .menu .menu-item::after {\n  content: '';\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: #1295DB;\n}\n.component-page-header .menu .menu-item-active::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n.component-page-header .menu .menu-item:hover::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n", ""]);

// exports


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/aliqr.7bf1e6c.png";

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/wxqr.543cb70.png";

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__ = __webpack_require__(390);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40ab164b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__ = __webpack_require__(429);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(431)
}
var normalizeComponent = __webpack_require__(143)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40ab164b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40ab164b", Component.options)
  } else {
    hotAPI.reload("data-v-40ab164b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageHeader_vue__ = __webpack_require__(391);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad84f3a8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PageHeader_vue__ = __webpack_require__(430);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(432)
}
var normalizeComponent = __webpack_require__(143)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad84f3a8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PageHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/PageHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ad84f3a8", Component.options)
  } else {
    hotAPI.reload("data-v-ad84f3a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "component-page-footer clearfix" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("ul", { staticClass: "footer-ul right-section" }, [
      _c("li", { staticClass: "footer-item" }, [
        _c(
          "a",
          {
            staticClass: "support-txt em",
            attrs: { href: "javascript:;" },
            on: {
              click: function($event) {
                return _vm.toggleSupportShow()
              }
            }
          },
          [_vm._v("赞赏支持")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.supportShow,
                expression: "supportShow"
              }
            ],
            staticClass: "popup-container"
          },
          [
            _c("div", { staticClass: "tab-wrap" }, [
              _c(
                "div",
                {
                  staticClass: "tab",
                  class: { "active-tab": _vm.payType == "WXPAY" },
                  on: {
                    click: function($event) {
                      return _vm.togglePayType("WXPAY")
                    }
                  }
                },
                [_c("i", { staticClass: "icon icon-wxpay" })]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab",
                  class: { "active-tab": _vm.payType == "ALIPAY" },
                  on: {
                    click: function($event) {
                      return _vm.togglePayType("ALIPAY")
                    }
                  }
                },
                [_c("i", { staticClass: "icon icon-alipay" })]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "qrcode-wrap" }, [
              _c("div", { staticClass: "money" }, [_vm._v("¥6.66 鼓励开发者")]),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.payType == "WXPAY",
                    expression: "payType == 'WXPAY'"
                  }
                ],
                staticClass: "qrcode wxpay",
                attrs: { src: _vm.wxPaySrc }
              }),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.payType == "ALIPAY",
                    expression: "payType == 'ALIPAY'"
                  }
                ],
                staticClass: "qrcode alipay",
                attrs: { src: _vm.aliPaySrc }
              })
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "footer-ul left-section" }, [
      _c("li", { staticClass: "footer-item" }, [
        _c(
          "a",
          { attrs: { target: "_blank", href: "http://www.autopiano.cn" } },
          [
            _c("span", { staticStyle: { "font-weight": "bold" } }, [
              _vm._v("autopiano.cn")
            ]),
            _vm._v(" ©\n        2019~2020")
          ]
        )
      ]),
      _vm._v("\n     | \n    "),
      _c("li", { staticClass: "footer-item" }, [
        _c(
          "a",
          {
            attrs: { target: "_blank", href: "http://www.beian.miit.gov.cn/" }
          },
          [_vm._v("粤ICP备19061906号-1")]
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40ab164b", esExports)
  }
}

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "PageHeaderComponent",
      staticClass: "component-page-header clearfix"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "menu" },
        [
          _c(
            "router-link",
            {
              staticClass: "menu-item",
              attrs: {
                to: { path: "/" },
                "active-class": "menu-item-active",
                exact: ""
              }
            },
            [_vm._v("首页")]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "menu-item",
              attrs: {
                to: { path: "/links" },
                "active-class": "menu-item-active",
                exact: ""
              }
            },
            [_vm._v("友情链接")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "menu-item",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.emitChangeWallPaper.apply(null, arguments)
                }
              }
            },
            [_vm._v("更换壁纸")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "trade-mark",
        attrs: { target: "_blank", href: "http://www.autopiano.cn" }
      },
      [
        _c("i", { staticClass: "icon-piano" }),
        _vm._v(" "),
        _c("h1", { staticClass: "trade-mark-txt" }, [
          _vm._v("自由钢琴"),
          _c("span", { staticClass: "trade-mark-txt--en" }, [
            _vm._v("AutoPiano.cn")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ad84f3a8", esExports)
  }
}

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("4400480a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40ab164b\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40ab164b\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(424);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("b4b7de02", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ad84f3a8\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PageHeader.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ad84f3a8\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PageHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PageHeader__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(378);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  name: '',
  components: {
    PageHeader: __WEBPACK_IMPORTED_MODULE_1__components_PageHeader__["a" /* default */],
    PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_Footer__["a" /* default */]
  },
  mixins: [],
  props: [],
  data: function data() {
    return {
      Links: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Links */]
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])(['$currentWallpaper']), {
    appBgStyle: function appBgStyle() {
      return 'background-image: url(' + this.$currentWallpaper + ');';
    }
  }),
  mounted: function mounted() {},

  watch: {},
  methods: {}
});

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.page-links {\n  width: 100%;\n  min-width: 1280px;\n  height: 100%;\n  padding: 1px;\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #2c3e50;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow-x: scroll;\n}\n.page-links .app-bg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -100;\n  opacity: 0.5;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.page-links .app-content {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  position: relative;\n}\n.page-links .app-content .links-wrap {\n  width: 1100px;\n  margin: 50px auto;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.page-links .app-content .links-wrap .left-section {\n  width: 70%;\n  min-height: 450px;\n  padding: 14px 0 0 16px;\n  float: left;\n  background: rgba(255, 255, 255, 0.5);\n}\n.page-links .app-content .links-wrap .left-section h2 {\n  color: #1295DB;\n  font-weight: 400;\n  font-size: 22px;\n}\n.page-links .app-content .links-wrap .left-section dl.links-list {\n  padding: 20px 0;\n}\n.page-links .app-content .links-wrap .left-section dl.links-list .link-item {\n  width: 230px;\n  float: left;\n  padding: 3px 10px;\n  margin: 0 5px 15px 0;\n}\n.page-links .app-content .links-wrap .left-section dl.links-list .link-item dt {\n  font-weight: 400;\n  font-size: 16px;\n}\n.page-links .app-content .links-wrap .left-section dl.links-list .link-item dt a {\n  display: inline-block;\n  border-bottom: solid 1px #EF496F;\n}\n.page-links .app-content .links-wrap .left-section dl.links-list .link-item dt a:hover {\n  color: #EF496F;\n}\n.page-links .app-content .links-wrap .left-section dl.links-list .link-item dd {\n  margin-top: 7px;\n  color: #555;\n  font-size: 13px;\n}\n.page-links .app-content .links-wrap .left-section dl.links-list .textclip {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.page-links .app-content .links-wrap .right-section {\n  width: 30%;\n  min-height: 450px;\n  padding: 13px 0 0 15px;\n  float: left;\n  background: rgba(255, 255, 255, 0.8);\n}\n.page-links .app-content .links-wrap .right-section .info {\n  margin: 0 10px 20px 0;\n}\n.page-links .app-content .links-wrap .right-section .info h2 {\n  margin: 5px 0 10px;\n  border-left: 3px solid #1295DB;\n  text-indent: 10px;\n  font-size: 16px;\n}\n.page-links .app-content .links-wrap .right-section .info li {\n  list-style: circle inside;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n.page-links .app-content .links-wrap .right-section .info span {\n  font-size: 13px;\n  color: #555;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n", ""]);

// exports


/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-links" }, [
    _c("div", { staticClass: "app-bg", style: _vm.appBgStyle }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "app-content clearfix" },
      [
        _c("PageHeader"),
        _vm._v(" "),
        _c("div", { staticClass: "links-wrap responsive-section-a clearfix" }, [
          _c("section", { staticClass: "left-section" }, [
            _c("h2", { staticClass: "links-title" }, [_vm._v("友情链接")]),
            _vm._v(" "),
            _c(
              "dl",
              { staticClass: "links-list clearfix" },
              _vm._l(_vm.Links, function(item, index) {
                return _c("div", { key: index, staticClass: "link-item" }, [
                  _c("dt", { staticClass: "textclip" }, [
                    _c("a", { attrs: { href: item.url, target: "_blank" } }, [
                      _vm._v(_vm._s(item.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "textclip" }, [
                    _vm._v(_vm._s(item.desc))
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "blank-page-links",
          staticStyle: { height: "80px" }
        }),
        _vm._v(" "),
        _c("PageFooter")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "right-section" }, [
      _c("div", { staticClass: "info site-info" }, [
        _c("h2", [_vm._v("本站信息")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("名称："),
            _c("span", [_vm._v("自由钢琴 - AutoPiano")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("网址："),
            _c("span", [_vm._v("http://www.autopiano.cn")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("简介："),
            _c("span", [_vm._v("自由钢琴 让你听见内心的声音")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info exchange-info" }, [
        _c("h2", [_vm._v("友情链接申请说明")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [_vm._v("欢迎与本站交换友链，以下为要求：")]),
          _vm._v(" "),
          _c("li", [
            _vm._v("添加步骤："),
            _c("span", [_vm._v("申请前请先添加AutoPiano为友链")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("域名年龄："),
            _c("span", [_vm._v("网站运营时间超过3个月")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("网站类型："),
            _c("span", [_vm._v("IT类、音乐类等等；内容积极向上，黄赌毒PASS")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("访问信息："),
            _c("span", [_vm._v("良好的访问速度；日IP、日PV有一定基础")])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("备注："),
            _c("span", [
              _vm._v(
                "排名不分先后，不符合要求会撤销友链。申请符合要求后，网站会不定期加上友链，请勿心急。"
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0cc87347", esExports)
  }
}

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(523);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("7a211882", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0cc87347\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FriendLinks.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0cc87347\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FriendLinks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});