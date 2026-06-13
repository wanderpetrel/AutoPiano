webpackJsonp([0],Array(376).concat([
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AutoPianoPC_vue__ = __webpack_require__(442);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_057eb2d9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AutoPianoPC_vue__ = __webpack_require__(542);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(550)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AutoPianoPC_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_057eb2d9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AutoPianoPC_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/AutoPianoPC.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-057eb2d9", Component.options)
  } else {
    hotAPI.reload("data-v-057eb2d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 377 */,
/* 378 */
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
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(398)('wks');
var uid = __webpack_require__(389);
var Symbol = __webpack_require__(101).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(394);
var defined = __webpack_require__(386);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(72);


var ob = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]();

/* harmony default export */ __webpack_exports__["a"] = (ob);

/***/ }),
/* 382 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(401);
var enumBugKeys = __webpack_require__(393);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(386);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 386 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 387 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 388 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 389 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 390 */
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
/* 391 */
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
/* 392 */
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
/* 393 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(382);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 396 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(398)('keys');
var uid = __webpack_require__(389);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 398 */
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
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotesMap; });
var noteBaseUrl = '/static/notes/';

/* harmony default export */ __webpack_exports__["a"] = ([{ id: 1, name: 'C2', keyCode: '49', key: '1', url: noteBaseUrl + 'a49.mp3', type: 'white' }, { id: 2, name: 'D2', keyCode: '50', key: '2', url: noteBaseUrl + 'a50.mp3', type: 'white' }, { id: 3, name: 'E2', keyCode: '51', key: '3', url: noteBaseUrl + 'a51.mp3', type: 'white' }, { id: 4, name: 'F2', keyCode: '52', key: '4', url: noteBaseUrl + 'a52.mp3', type: 'white' }, { id: 5, name: 'G2', keyCode: '53', key: '5', url: noteBaseUrl + 'a53.mp3', type: 'white' }, { id: 6, name: 'A2', keyCode: '54', key: '6', url: noteBaseUrl + 'a54.mp3', type: 'white' }, { id: 7, name: 'B2', keyCode: '55', key: '7', url: noteBaseUrl + 'a55.mp3', type: 'white' }, { id: 8, name: 'C3', keyCode: '56', key: '8', url: noteBaseUrl + 'a56.mp3', type: 'white' }, { id: 9, name: 'D3', keyCode: '57', key: '9', url: noteBaseUrl + 'a57.mp3', type: 'white' }, { id: 10, name: 'E3', keyCode: '48', key: '0', url: noteBaseUrl + 'a48.mp3', type: 'white' }, { id: 26, name: 'F3', keyCode: '81', key: 'Q', url: noteBaseUrl + 'a81.mp3', type: 'white' }, { id: 32, name: 'G3', keyCode: '87', key: 'W', url: noteBaseUrl + 'a87.mp3', type: 'white' }, { id: 14, name: 'A3', keyCode: '69', key: 'E', url: noteBaseUrl + 'a69.mp3', type: 'white' }, { id: 27, name: 'B3', keyCode: '82', key: 'R', url: noteBaseUrl + 'a82.mp3', type: 'white' }, { id: 29, name: 'C4', keyCode: '84', key: 'T', url: noteBaseUrl + 'a84.mp3', type: 'white' }, { id: 34, name: 'D4', keyCode: '89', key: 'Y', url: noteBaseUrl + 'a89.mp3', type: 'white' }, { id: 30, name: 'E4', keyCode: '85', key: 'U', url: noteBaseUrl + 'a85.mp3', type: 'white' }, { id: 18, name: 'F4', keyCode: '73', key: 'I', url: noteBaseUrl + 'a73.mp3', type: 'white' }, { id: 24, name: 'G4', keyCode: '79', key: 'O', url: noteBaseUrl + 'a79.mp3', type: 'white' }, { id: 25, name: 'A4', keyCode: '80', key: 'P', url: noteBaseUrl + 'a80.mp3', type: 'white' }, { id: 10, name: 'B4', keyCode: '65', key: 'A', url: noteBaseUrl + 'a65.mp3', type: 'white' }, { id: 28, name: 'C5', keyCode: '83', key: 'S', url: noteBaseUrl + 'a83.mp3', type: 'white' }, { id: 13, name: 'D5', keyCode: '68', key: 'D', url: noteBaseUrl + 'a68.mp3', type: 'white' }, { id: 15, name: 'E5', keyCode: '70', key: 'F', url: noteBaseUrl + 'a70.mp3', type: 'white' }, { id: 16, name: 'F5', keyCode: '71', key: 'G', url: noteBaseUrl + 'a71.mp3', type: 'white' }, { id: 17, name: 'G5', keyCode: '72', key: 'H', url: noteBaseUrl + 'a72.mp3', type: 'white' }, { id: 19, name: 'A5', keyCode: '74', key: 'J', url: noteBaseUrl + 'a74.mp3', type: 'white' }, { id: 20, name: 'B5', keyCode: '75', key: 'K', url: noteBaseUrl + 'a75.mp3', type: 'white' }, { id: 21, name: 'C6', keyCode: '76', key: 'L', url: noteBaseUrl + 'a76.mp3', type: 'white' }, { id: 35, name: 'D6', keyCode: '90', key: 'Z', url: noteBaseUrl + 'a90.mp3', type: 'white' }, { id: 33, name: 'E6', keyCode: '88', key: 'X', url: noteBaseUrl + 'a88.mp3', type: 'white' }, { id: 12, name: 'F6', keyCode: '67', key: 'C', url: noteBaseUrl + 'a67.mp3', type: 'white' }, { id: 31, name: 'G6', keyCode: '86', key: 'V', url: noteBaseUrl + 'a86.mp3', type: 'white' }, { id: 11, name: 'A6', keyCode: '66', key: 'B', url: noteBaseUrl + 'a66.mp3', type: 'white' }, { id: 23, name: 'B6', keyCode: '78', key: 'N', url: noteBaseUrl + 'a78.mp3', type: 'white' }, { id: 22, name: 'C7', keyCode: '77', key: 'M', url: noteBaseUrl + 'a77.mp3', type: 'white' }, { id: 36, name: 'C#2', keyCode: 'b49', key: '⇧<br>+<br>1', url: noteBaseUrl + 'b49.mp3', type: 'black' }, { id: 37, name: 'D#2', keyCode: 'b50', key: '⇧<br>+<br>2', url: noteBaseUrl + 'b50.mp3', type: 'black' }, { id: 38, name: 'F#2', keyCode: 'b52', key: '⇧<br>+<br>4', url: noteBaseUrl + 'b52.mp3', type: 'black' }, { id: 39, name: 'G#2', keyCode: 'b53', key: '⇧<br>+<br>5', url: noteBaseUrl + 'b53.mp3', type: 'black' }, { id: 40, name: 'A#2', keyCode: 'b54', key: '⇧<br>+<br>6', url: noteBaseUrl + 'b54.mp3', type: 'black' }, { id: 41, name: 'C#3', keyCode: 'b56', key: '⇧<br>+<br>8', url: noteBaseUrl + 'b56.mp3', type: 'black' }, { id: 42, name: 'D#3', keyCode: 'b57', key: '⇧<br>+<br>9', url: noteBaseUrl + 'b57.mp3', type: 'black' }, { id: 43, name: 'F#3', keyCode: 'b81', key: '⇧<br>+<br>Q', url: noteBaseUrl + 'b81.mp3', type: 'black' }, { id: 44, name: 'G#3', keyCode: 'b87', key: '⇧<br>+<br>W', url: noteBaseUrl + 'b87.mp3', type: 'black' }, { id: 45, name: 'A#3', keyCode: 'b69', key: '⇧<br>+<br>E', url: noteBaseUrl + 'b69.mp3', type: 'black' }, { id: 46, name: 'C#4', keyCode: 'b84', key: '⇧<br>+<br>T', url: noteBaseUrl + 'b84.mp3', type: 'black' }, { id: 47, name: 'D#4', keyCode: 'b89', key: '⇧<br>+<br>Y', url: noteBaseUrl + 'b89.mp3', type: 'black' }, { id: 48, name: 'F#4', keyCode: 'b73', key: '⇧<br>+<br>I', url: noteBaseUrl + 'b73.mp3', type: 'black' }, { id: 49, name: 'G#4', keyCode: 'b79', key: '⇧<br>+<br>O', url: noteBaseUrl + 'b79.mp3', type: 'black' }, { id: 50, name: 'A#4', keyCode: 'b80', key: '⇧<br>+<br>P', url: noteBaseUrl + 'b80.mp3', type: 'black' }, { id: 51, name: 'C#5', keyCode: 'b83', key: '⇧<br>+<br>S', url: noteBaseUrl + 'b83.mp3', type: 'black' }, { id: 52, name: 'D#5', keyCode: 'b68', key: '⇧<br>+<br>D', url: noteBaseUrl + 'b68.mp3', type: 'black' }, { id: 53, name: 'F#5', keyCode: 'b71', key: '⇧<br>+<br>G', url: noteBaseUrl + 'b71.mp3', type: 'black' }, { id: 54, name: 'G#5', keyCode: 'b72', key: '⇧<br>+<br>H', url: noteBaseUrl + 'b72.mp3', type: 'black' }, { id: 55, name: 'A#5', keyCode: 'b74', key: '⇧<br>+<br>J', url: noteBaseUrl + 'b74.mp3', type: 'black' }, { id: 56, name: 'C#6', keyCode: 'b76', key: '⇧<br>+<br>L', url: noteBaseUrl + 'b76.mp3', type: 'black' }, { id: 57, name: 'D#6', keyCode: 'b90', key: '⇧<br>+<br>Z', url: noteBaseUrl + 'b90.mp3', type: 'black' }, { id: 58, name: 'F#6', keyCode: 'b67', key: '⇧<br>+<br>C', url: noteBaseUrl + 'b67.mp3', type: 'black' }, { id: 59, name: 'G#6', keyCode: 'b86', key: '⇧<br>+<br>V', url: noteBaseUrl + 'b86.mp3', type: 'black' }, { id: 60, name: 'A#6', keyCode: 'b66', key: '⇧<br>+<br>B', url: noteBaseUrl + 'b66.mp3', type: 'black' }]);

var NotesMap = [{ name: 'C2', file: 'a49.mp3' }, { name: 'D2', file: 'a50.mp3' }, { name: 'E2', file: 'a51.mp3' }, { name: 'F2', file: 'a52.mp3' }, { name: 'G2', file: 'a53.mp3' }, { name: 'A2', file: 'a54.mp3' }, { name: 'B2', file: 'a55.mp3' }, { name: 'C3', file: 'a56.mp3' }, { name: 'D3', file: 'a57.mp3' }, { name: 'E3', file: 'a48.mp3' }, { name: 'F3', file: 'a81.mp3' }, { name: 'G3', file: 'a87.mp3' }, { name: 'A3', file: 'a69.mp3' }, { name: 'B3', file: 'a82.mp3' }, { name: 'C4', file: 'a84.mp3' }, { name: 'D4', file: 'a89.mp3' }, { name: 'E4', file: 'a85.mp3' }, { name: 'F4', file: 'a73.mp3' }, { name: 'G4', file: 'a79.mp3' }, { name: 'A4', file: 'a80.mp3' }, { name: 'B4', file: 'a65.mp3' }, { name: 'C5', file: 'a83.mp3' }, { name: 'D5', file: 'a68.mp3' }, { name: 'E5', file: 'a70.mp3' }, { name: 'F5', file: 'a71.mp3' }, { name: 'G5', file: 'a72.mp3' }, { name: 'A5', file: 'a74.mp3' }, { name: 'B5', file: 'a75.mp3' }, { name: 'C6', file: 'a76.mp3' }, { name: 'D6', file: 'a90.mp3' }, { name: 'E6', file: 'a88.mp3' }, { name: 'F6', file: 'a67.mp3' }, { name: 'G6', file: 'a86.mp3' }, { name: 'A6', file: 'a66.mp3' }, { name: 'B6', file: 'a78.mp3' }, { name: 'C7', file: 'a77.mp3' }, { name: 'C#2', file: 'b49.mp3' }, { name: 'D#2', file: 'b50.mp3' }, { name: 'F#2', file: 'b52.mp3' }, { name: 'G#2', file: 'b53.mp3' }, { name: 'A#2', file: 'b54.mp3' }, { name: 'C#3', file: 'b56.mp3' }, { name: 'D#3', file: 'b57.mp3' }, { name: 'F#3', file: 'b81.mp3' }, { name: 'G#3', file: 'b87.mp3' }, { name: 'A#3', file: 'b69.mp3' }, { name: 'C#4', file: 'b84.mp3' }, { name: 'D#4', file: 'b89.mp3' }, { name: 'F#4', file: 'b73.mp3' }, { name: 'G#4', file: 'b79.mp3' }, { name: 'A#4', file: 'b80.mp3' }, { name: 'C#5', file: 'b83.mp3' }, { name: 'D#5', file: 'b68.mp3' }, { name: 'F#5', file: 'b71.mp3' }, { name: 'G#5', file: 'b72.mp3' }, { name: 'A#5', file: 'b74.mp3' }, { name: 'C#6', file: 'b76.mp3' }, { name: 'D#6', file: 'b90.mp3' }, { name: 'F#6', file: 'b67.mp3' }, { name: 'G#6', file: 'b86.mp3' }, { name: 'A#6', file: 'b66.mp3' }];

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(414), __esModule: true };

/***/ }),
/* 401 */
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
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(102).f;
var has = __webpack_require__(147);
var TAG = __webpack_require__(379)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(388);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.keySignatureKeys = void 0;
var BinarySearch_1 = __webpack_require__(433);
var privatePPQMap = new WeakMap();
/**
 * @hidden
 */
exports.keySignatureKeys = [
    "Cb",
    "Gb",
    "Db",
    "Ab",
    "Eb",
    "Bb",
    "F",
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "C#",
];
/**
 * The parsed MIDI file header.
 */
var Header = /** @class */ (function () {
    function Header(midiData) {
        var _this = this;
        /**
         * The array of all the tempo events.
         */
        this.tempos = [];
        /**
         * The time signatures.
         */
        this.timeSignatures = [];
        /**
         * The time signatures.
         */
        this.keySignatures = [];
        /**
         * Additional meta events.
         */
        this.meta = [];
        /**
         * The name of the MIDI file;
         */
        this.name = "";
        // Look through all the tracks for tempo changes.
        privatePPQMap.set(this, 480);
        if (midiData) {
            privatePPQMap.set(this, midiData.header.ticksPerBeat);
            // Check time signature and tempo events from all of the tracks.
            midiData.tracks.forEach(function (track) {
                track.forEach(function (event) {
                    if (event.meta) {
                        if (event.type === "timeSignature") {
                            _this.timeSignatures.push({
                                ticks: event.absoluteTime,
                                timeSignature: [
                                    event.numerator,
                                    event.denominator,
                                ],
                            });
                        }
                        else if (event.type === "setTempo") {
                            _this.tempos.push({
                                bpm: 60000000 / event.microsecondsPerBeat,
                                ticks: event.absoluteTime,
                            });
                        }
                        else if (event.type === "keySignature") {
                            _this.keySignatures.push({
                                key: exports.keySignatureKeys[event.key + 7],
                                scale: event.scale === 0 ? "major" : "minor",
                                ticks: event.absoluteTime,
                            });
                        }
                    }
                });
            });
            // Check the first track for other relevant data.
            var firstTrackCurrentTicks_1 = 0; // Used for absolute times.
            midiData.tracks[0].forEach(function (event) {
                firstTrackCurrentTicks_1 += event.deltaTime;
                if (event.meta) {
                    if (event.type === "trackName") {
                        _this.name = event.text;
                    }
                    else if (event.type === "text" ||
                        event.type === "cuePoint" ||
                        event.type === "marker" ||
                        event.type === "lyrics") {
                        _this.meta.push({
                            text: event.text,
                            ticks: firstTrackCurrentTicks_1,
                            type: event.type,
                        });
                    }
                }
            });
            this.update();
        }
    }
    /**
     * This must be invoked after any changes are made to the tempo array
     * or the timeSignature array for the updated values to be reflected.
     */
    Header.prototype.update = function () {
        var _this = this;
        var currentTime = 0;
        var lastEventBeats = 0;
        // Make sure it's sorted;
        this.tempos.sort(function (a, b) { return a.ticks - b.ticks; });
        this.tempos.forEach(function (event, index) {
            var lastBPM = index > 0 ? _this.tempos[index - 1].bpm : _this.tempos[0].bpm;
            var beats = event.ticks / _this.ppq - lastEventBeats;
            var elapsedSeconds = (60 / lastBPM) * beats;
            event.time = elapsedSeconds + currentTime;
            currentTime = event.time;
            lastEventBeats += beats;
        });
        this.timeSignatures.sort(function (a, b) { return a.ticks - b.ticks; });
        this.timeSignatures.forEach(function (event, index) {
            var lastEvent = index > 0
                ? _this.timeSignatures[index - 1]
                : _this.timeSignatures[0];
            var elapsedBeats = (event.ticks - lastEvent.ticks) / _this.ppq;
            var elapsedMeasures = elapsedBeats /
                lastEvent.timeSignature[0] /
                (lastEvent.timeSignature[1] / 4);
            lastEvent.measures = lastEvent.measures || 0;
            event.measures = elapsedMeasures + lastEvent.measures;
        });
    };
    /**
     * Convert ticks into seconds based on the tempo changes.
     */
    Header.prototype.ticksToSeconds = function (ticks) {
        // Find the relevant position.
        var index = (0, BinarySearch_1.search)(this.tempos, ticks);
        if (index !== -1) {
            var tempo = this.tempos[index];
            var tempoTime = tempo.time;
            var elapsedBeats = (ticks - tempo.ticks) / this.ppq;
            return tempoTime + (60 / tempo.bpm) * elapsedBeats;
        }
        else {
            // Assume 120.
            var beats = ticks / this.ppq;
            return (60 / 120) * beats;
        }
    };
    /**
     * Convert ticks into measures based off of the time signatures.
     */
    Header.prototype.ticksToMeasures = function (ticks) {
        var index = (0, BinarySearch_1.search)(this.timeSignatures, ticks);
        if (index !== -1) {
            var timeSigEvent = this.timeSignatures[index];
            var elapsedBeats = (ticks - timeSigEvent.ticks) / this.ppq;
            return (timeSigEvent.measures +
                elapsedBeats /
                    (timeSigEvent.timeSignature[0] /
                        timeSigEvent.timeSignature[1]) /
                    4);
        }
        else {
            return ticks / this.ppq / 4;
        }
    };
    Object.defineProperty(Header.prototype, "ppq", {
        /**
         * The number of ticks per quarter note.
         */
        get: function () {
            return privatePPQMap.get(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Convert seconds to ticks based on the tempo events.
     */
    Header.prototype.secondsToTicks = function (seconds) {
        // Find the relevant position.
        var index = (0, BinarySearch_1.search)(this.tempos, seconds, "time");
        if (index !== -1) {
            var tempo = this.tempos[index];
            var tempoTime = tempo.time;
            var elapsedTime = seconds - tempoTime;
            var elapsedBeats = elapsedTime / (60 / tempo.bpm);
            return Math.round(tempo.ticks + elapsedBeats * this.ppq);
        }
        else {
            // Assume 120.
            var beats = seconds / (60 / 120);
            return Math.round(beats * this.ppq);
        }
    };
    /**
     * Convert the header into an object.
     */
    Header.prototype.toJSON = function () {
        return {
            keySignatures: this.keySignatures,
            meta: this.meta,
            name: this.name,
            ppq: this.ppq,
            tempos: this.tempos.map(function (t) {
                return {
                    bpm: t.bpm,
                    ticks: t.ticks,
                };
            }),
            timeSignatures: this.timeSignatures,
        };
    };
    /**
     * Parse a header json object.
     */
    Header.prototype.fromJSON = function (json) {
        this.name = json.name;
        // Clone all the attributes.
        this.tempos = json.tempos.map(function (t) { return Object.assign({}, t); });
        this.timeSignatures = json.timeSignatures.map(function (t) {
            return Object.assign({}, t);
        });
        this.keySignatures = json.keySignatures.map(function (t) {
            return Object.assign({}, t);
        });
        this.meta = json.meta.map(function (t) { return Object.assign({}, t); });
        privatePPQMap.set(this, json.ppq);
        this.update();
    };
    /**
     * Update the tempo of the midi to a single tempo. Will remove and replace
     * any other tempos currently set and update all of the event timing.
     * @param bpm The tempo in beats per second.
     */
    Header.prototype.setTempo = function (bpm) {
        this.tempos = [
            {
                bpm: bpm,
                ticks: 0,
            },
        ];
        this.update();
    };
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=Header.js.map

/***/ }),
/* 405 */
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
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var FriendLinks = [{
  title: "自由钢琴 - AutoPiano",
  desc: "自由钢琴 让你听见内心的声音",
  url: "http://www.autopiano.cn"
}];

/* harmony default export */ __webpack_exports__["a"] = (FriendLinks);

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lyrics = ["\u957F\u4EAD\u5916\uFF0C\u53E4\u9053\u8FB9\uFF0C\u82B3\u8349\u78A7\u8FDE\u5929\uFF0C\u665A\u98CE\u62C2\u67F3\u7B1B\u58F0\u6B8B\uFF0C\u5915\u9633\u5C71\u5916\u5C71...", "\u4F60\u53EF\u77E5Macau\uFF0C\u4E0D\u662F\u6211\u771F\u59D3...", "what time will you be here now? it's a quater past seven now...", "\u541B\u306E\u524D\u524D\u524D\u4E16\u304B\u3089\u4EC6\u306F, \u541B\u3092\u63A2\u3057\u306F\u3058\u3081\u305F\u3088", "\u4F60\u4F1A\u4E0D\u4F1A\u5FFD\u7136\u7684\u51FA\u73B0\uFF0C\u5728\u8857\u89D2\u7684\u5496\u5561\u5E97", "\u65F6\u95F4\u5B83\u603B\u8BF4\u8C0E\uFF0C\u6211\u4ECE\u4E0D\u66FE\u5931\u53BB\u90A3\u4E9B\u80A9\u8180\u3002", "\u4E0D\u6015\u8981\u591A\u5C11\u65F6\u95F4\u591A\u5C11\u4EE3\u4EF7\uFF0C\u9752\u6625\u662F\u6211\u7684\u7B79\u7801\u3002", "\u5982\u679C\u8FD8\u6709\u68A6\u5C31\u8FFD\uFF0C\u81F3\u5C11\u4E0D\u4F1A\u9057\u61BE\u540E\u6094", "Believe me I can fly  I'm singing in the sky", "\u6211\u76F8\u4FE1\u5341\u5E74\u540E\u7684\u516B\u6708 \u6211\u4EEC\u8FD8\u80FD\u518D\u76F8\u9047 \u4F60\u6700\u540E\u4E00\u76F4\u5728\u5FC3\u5E95\u547C\u558A\u8457\u300E\u8C22\u8C22\u4F60\u300F", "\u957F\u5927\u540E \u4E16\u754C\u50CF\u4E00\u5F20\u7F51 \u7F51\u4F4F\u6211\u4EEC\u7684\u7FC5\u8180", "\u6709\u4E86\u4F60\u5F00\u5FC3D \u4E5C\u90FD\u79F0\u5FC3\u6EE1\u610F \u54B8\u9C7C\u767D\u83DC\u4E5F\u597D\u597D\u5473", "Now please don't go Most nights I hardly sleep when I'm alone ", "\u6211\u4F9D\u7136\u7231\u4F60 \u5C31\u662F\u552F\u4E00\u7684\u9000\u8DEF \u6211\u4F9D\u7136\u73CD\u60DC \u65F6\u65F6\u523B\u523B\u7684\u5E78\u798F", "\u53EA\u4F1A\u50BB\u50BB\u7684\u770B\u7740\u5929\u4E0A\u7684\u661F\u661F \u4F60\u5C31\u662F\u90A3\u4E48\u7684\u7EAF\u9759", "\u6211\u7684\u773C\u775B\u671B\u5411\u7A97\u5916 \u5E7B\u60F3\u6211\u5BF9\u4F60\u7684\u8868\u767D", "\u8BA9\u8721\u70DB\u4EE3\u66FF\u6240\u6709\u706F \u8BA9\u97F3\u4E50\u4EE3\u66FF\u8BDD\u8BED\u58F0 \u6B64\u65F6\u65E0\u58F0\u80DC\u6709\u58F0", "\u5F53\u4F60\u89C9\u5F97\u5916\u9762\u7684\u4E16\u754C\u5F88\u7CBE\u5F69 \u6211\u4F1A\u5728\u8FD9\u91CC\u8877\u5FC3\u7684\u795D\u798F\u4F60", "\u82E6\u6D77\u7FFB\u8D77\u7231\u6068 \u5728\u4E16\u95F4\u96BE\u9003\u907F\u547D\u8FD0", "\u4E0D\u7BA1\u6309\u600E\u8FC7\u6309\u600E\u53D8 \u6309\u600E\u7684\u4EBA \u6C38\u8FDC\u7684\u6C38\u8FDC\u6211\u662F\u5F7C\u4E2A\u4EBA", "Rage your dream \u98A8\u3082\u3000\u5149\u6E80\u3061\u3066\u3086\u304F Rage your dream \u5FD8\u308C\u306A\u3044\u3067\u3044\u3066 ", "\u6211\u559C\u6B22 \u5165\u5B66\u65F6\u6211\u4EEC\u7A1A\u6C14\u7684\u8138\u5E9E \u6211\u559C\u6B22 \u6BD5\u4E1A\u5B63\u4E0A\u5199\u6EE1\u7559\u8A00\u7684\u5899", "\u5982\u4ECA\u8FD9\u91CC\u8352\u8349\u4E1B\u751F \u6CA1\u6709\u4E86\u9C9C\u82B1 \u597D\u5728\u66FE\u7ECF\u62E5\u6709\u4F60\u4EEC\u7684\u6625\u79CB\u548C\u51AC\u590F", "\u767D\u4E91\u5C71\u9AD8 \u73E0\u6C5F\u6C34\u957F \u543E\u6821\u77D7\u7ACB \u851A\u4E3A\u56FD\u5149", "\u7A81\u7136\u597D\u60F3\u4F60 \u7A81\u7136\u950B\u5229\u7684\u56DE\u5FC6 \u7A81\u7136\u6A21\u7CCA\u7684\u773C\u775B", "\u6211\u7AD9\u5728\u4F60\u5DE6\u4FA7\uFF0C\u5374\u50CF\u9694\u7740\u94F6\u6CB3", "\u591A\u5C11\u4EBA\u66FE\u7231\u6155\u4F60\u5E74\u8F7B\u65F6\u7684\u5BB9\u989C\uFF0C\u53EF\u77E5\u8C01\u613F\u627F\u53D7\u5C81\u6708\u65E0\u60C5\u7684\u53D8\u8FC1\u3002", "\u5F80\u4E8B\u4E0D\u8981\u518D\u63D0\uFF0C\u4EBA\u751F\u5DF2\u591A\u98CE\u96E8", "\u5929\u7A7A\u6D77\u9614\u4F60\u4E0E\u6211\uFF0C\u53EF\u4F1A\u53D8", "\u4E00\u751F\u4F55\u6C42,\u5E38\u5224\u65AD\u653E\u5F03\u4E0E\u62E5\u6709", "\u8BA9\u6211\u518D\u770B\u4F60\u4E00\u773C \u661F\u7A7A\u548C\u9ED1\u591C \u897F\u53BB\u800C\u65CB\u8F6C\u7684\u98DE\u9E1F", "\u4F46\u662F\u6BCF\u4E00\u5929\uFF0C\u5F53\u6211\u5728\u5DE6\u8F6C\uFF0C\u4F60\u4FBF\u884C\u5411\u53F3\uFF0C\u7EC8\u4E0D\u4F1A\u9047\u89C1", "\u56DE\u5FC6\u8FD9\u7406\u60F3\u4E0D\u591F\u7406\u60F3 \u6CBF\u9014\u901B\u4E16\u95F4\u4E00\u8D9F\u53EA\u6709\u5411\u4E0A", "\u6A21\u7CCA\u7684\u8FF7\u604B\u4F60\u4E00\u573A\u5C31\u5F53\u98CE\u96E8\u4E0B\u6F6E\u6DA8", "\u5982\u8774\u8776\u7834\u8327\u5439\u8FC7\u6625\u98CE \u6211\u5C55\u7FC5 \u53EF\u4E0D\u53EF\u5F97\u5230\u8BA4\u540C", "\u526A\u5F71\u7684\u4F60\u8F6E\u5ED3\u592A\u597D\u770B \u51DD\u4F4F\u773C\u6CEA\u624D\u6562\u7EC6\u770B", "\u5C71\u9876\u4E00\u8D77\u4FEF\u77B0\u8FC7 \u8FD9\u82B1\u82B1\u4E16\u754C\u706F\u706B\u5904\u5904", "\u5F7C\u6B64\u4E4B\u95F4\u5373\u4F7F\u5404\u6709\u8F66\u7968 \u5931\u6563\u4E8E\u51E1\u56A3 \u7070\u98CE\u7684\u521D\u543B \u81F3\u5C11\u611F\u52A8 \u4E00\u4E24\u79D2", "\u9759\u5F85\u7D2B\u8272\u5929\u7A7A \u95EA\u51FA\u6E05\u98CE \u6709\u964D\u96EA\u8DF3\u52A8", "\u4F60\u672A\u5FD8 \u6211\u672A\u5FD8 \u72B9\u80DC\u4F34\u5728\u65C1", "\u51B7\u96E8\u72C2\u98CE\u5386\u5C3D\uFF0C\u4EBA\u683C\u66F4\u5149\u8000\uFF0C\u62AB\u8346\u65A9\u68D8\u6C49\u5B50\u5FC3\u91CC\u78CA\u843D\u6C38\u4E0D\u6298\u8170", "\u4F60\u662F\u7A7A\u6C14\u4F46\u662F\u597D\u95FB\u80DC\u8FC7\u4E86\u7A7A\u6C14\uFF0C\u4F60\u662F\u9633\u5149\u4F46\u662F\u5374\u80FD\u7167\u8FDB\u534A\u591C\u91CC", "\u6211\u5FC3\u5982\u6708\u62C2\u8FC7\u957F\u591C\u672A\u6709\u58F0 \u4E45\u7167\u957F\u95E8\u6D41\u5149\u53EA\u5F71\u5411\u4E00\u4EBA", "\u6240\u8C13\u7684\u5F69\u8679\uFF0C\u4E0D\u8FC7\u5C31\u662F\u5149\uFF0C\u53EA\u8981\u5FC3\u8FD8\u900F\u660E\uFF0C\u5C31\u80FD\u6298\u5C04\u5E0C\u671B", "\u672C\u6765\u5C31\u4E00\u65E0\u6240\u6709\uFF0C\u624D\u4F1A\u5E7B\u60F3\u5B83\u662F\u767D\u9E3D\uFF0C\u98DE\u5230\u6E34\u671B\u7684\u5C3D\u5934\uFF0C\u5760\u843D\u5230\u65E0\u540D\u7684\u5C71\u4E18", "\u6211\u82E5\u662F\u6E38\u5B50\uFF0C\u4F60\u4FBF\u662F\u4EBA\u95F4", "\u6211\u628A\u7F8E\u68A6\u653E\u51B0\u7BB1 \u957F\u5927\u518D\u62FF\u884C\u4E0D\u884C", "\u5929\u7A7A\u597D\u60F3\u4E0B\u96E8 \u6211\u597D\u60F3\u4F4F\u4F60\u9694\u58C1", "\u8BB8\u591A\u5E74\u524D \u4F60\u6709\u4E00\u53CC\u6E05\u6F88\u7684\u53CC\u773C \u5954\u8DD1\u8D77\u6765 \u50CF\u662F\u4E00\u9053\u6625\u5929\u7684\u95EA\u7535", "\u4E71\u4E16\u6177\u6168\u6211\u884C\u6B4C\uFF0C\u5343\u4E07\u4EBA\u4E2D\u6709\u76F8\u548C", "\u5C06\u5FC3\u613F\u79CD\u5728\u51FA\u53D1\u4E4B\u524D\uFF0C\u6211\u4EEC\u8BF4\u597D\u8D70\u591A\u8FDC\u4E5F\u4E0D\u6539\u53D8", "\u6625\u70DF\u67F3\u7EFF\uFF0C\u4E0D\u5982\u671B\u4F60\u3002\u53F9\u8FD9\u5929\u4E0B\u8C01\u4EBA\u4E0D\u8BC6\u541B", "\u65F6\u95F4\u662F\u661F\u661F\u7684\u773C\u775B \u671B\u7A7F\u6211\u7684\u56F0\u60D1", "\u786E\u8BA4\u8FC7\u773C\u795E\uFF0C\u6211\u9047\u4E0A\u5BF9\u7684\u4EBA", "\u5982\u679C\u5168\u4E16\u754C\u90FD\u5BF9\u4F60\u6076\u8BED\u76F8\u52A0\uFF0C\u6211\u5C31\u5BF9\u4F60\u8BF4\u4E0A\u4E00\u4E16\u60C5\u8BDD", "\u8D70\u5728\u5730\u5B89\u95E8\u5916\uFF0C\u6CA1\u6709\u4EBA\u4E0D\u52A8\u771F\u60C5", "\u6211\u672A\u5165\u8FC7\u7E41\u534E\u4E4B\u5883 \u672A\u542C\u8FC7\u55A7\u56A3\u7684\u58F0\u97F3", "\u95EE\u541B\u6B64\u53BB\u51E0\u65F6\u8FD8\uFF0C\u6765\u65F6\u83AB\u5F98\u5F8A\u3002", "\u4E58\u7740\u98CE\u6E38\u8361\u5728\u84DD\u5929\u8FB9 \u4E00\u7247\u4E91\u6389\u843D\u5728\u6211\u9762\u524D", "\u90A3\u4E9B\u4F60\u5F88\u5192\u9669\u7684\u68A6\uFF0C\u6211\u966A\u4F60\u53BB\u75AF\u3002", "\u98CE\u7B5D\u6709\u98CE \u6D77\u8C5A\u6709\u6D77 \u800C\u4F60\u6709\u6211", "\u6CBF\u8DEF\u65C5\u9014\u5982\u6B4C\u53D8\u5E7B \u5728\u6E38\u89C8\uFF0C\u8FD8\u7ED9\u5927\u5730\u6628\u5929\u7684\u559C\u6012\u548C\u70E6\u5FE7", "\u5929\u96E8\u7C9F\uFF0C\u9B3C\u591C\u54ED\uFF0C\u601D\u5FF5\u6F2B\u592A\u53E4", "\u6C38\u8FDC\u81EA\u7531\u81EA\u6211\uFF0C\u6C38\u8FDC\u9AD8\u5531\u6211\u6B4C\uFF0C\u8D70\u904D\u5343\u91CC", "\u6A90\u4E0B\u7A97\u68C2\u659C\u6620\u679D\u4E2B \u4E0E\u4F60\u5E2D\u5730\u5BF9\u5750\u996E\u8336", "\u60C5\u6DF1\u6DF1\u96E8\u8499\u8499 \u591A\u5C11\u697C\u53F0\u70DF\u96E8\u4E2D \u8BB0\u5F97\u5F53\u521D\u4F60\u4FAC\u6211\u4FAC \u8F66\u5982\u6D41\u6C34\u9A6C\u5982\u9F99"];

/* harmony default export */ __webpack_exports__["a"] = (lyrics);

/***/ }),
/* 408 */
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
/* 409 */
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
/* 410 */
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
/* 411 */
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
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var wallpaper = ['bg_default.jpg', 'bg_eiffel.jpg', 'bg_girl.jpg'];

wallpaper = wallpaper.map(function (item) {
  return '/static/images/' + item;
});

/* harmony default export */ __webpack_exports__["a"] = (wallpaper);

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(488), __esModule: true };

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(422);
module.exports = __webpack_require__(100).Object.assign;


/***/ }),
/* 415 */
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
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(150);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 417 */
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
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(145);
var core = __webpack_require__(100);
var fails = __webpack_require__(103);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(388);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(101);
var core = __webpack_require__(100);
var LIBRARY = __webpack_require__(383);
var wksExt = __webpack_require__(421);
var defineProperty = __webpack_require__(102).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(379);


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(145);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(417) });


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-page-footer {\n  width: 100%;\n  min-width: 1280px;\n  height: 40px;\n  line-height: 40px;\n  background: rgba(255, 255, 255, 0.8);\n  border-top: solid 1px #ccc;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n}\n.component-page-footer .footer-ul {\n  width: auto;\n  height: 100%;\n}\n.component-page-footer .footer-ul .footer-item {\n  display: inline;\n  list-style: none;\n  position: relative;\n}\n.component-page-footer .footer-ul .footer-item a:hover {\n  color: #fff;\n  background: #1295DB;\n}\n.component-page-footer .footer-ul .footer-item a.em {\n  color: #EF496F;\n}\n.component-page-footer .footer-ul .footer-item a.em:hover {\n  color: #fff;\n  background: #EF496F;\n}\n.component-page-footer .footer-ul.left-section {\n  float: left;\n  margin-left: 5%;\n}\n.component-page-footer .footer-ul.right-section {\n  float: right;\n  margin-right: 5%;\n}\n.component-page-footer .popup-container {\n  width: 200px;\n  height: 260px;\n  position: absolute;\n  top: -285px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 200;\n  background: #ffffff;\n  -webkit-box-shadow: 1px 1px 10px 1px #ddd;\n          box-shadow: 1px 1px 10px 1px #ddd;\n}\n.component-page-footer .popup-container::after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 50%;\n  bottom: -10px;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n          transform: translateX(-50%) rotate(45deg);\n  z-index: 150;\n  background: #ffffff;\n}\n.component-page-footer .popup-container .tab-wrap {\n  width: 100%;\n  height: 60px;\n}\n.component-page-footer .popup-container .tab-wrap .tab {\n  width: 50%;\n  height: 100%;\n  float: left;\n  cursor: pointer;\n}\n.component-page-footer .popup-container .tab-wrap .tab.active-tab {\n  border-bottom: solid 5px #1295DB;\n}\n.component-page-footer .popup-container .tab-wrap .tab .icon {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n  margin-top: 14px;\n}\n.component-page-footer .popup-container .qrcode-wrap {\n  width: 100%;\n  padding: 12px 18px;\n}\n.component-page-footer .popup-container .qrcode-wrap .money {\n  width: 100%;\n  height: 14px;\n  line-height: 14px;\n  font-size: 14px;\n  margin: 0;\n}\n.component-page-footer .popup-container .qrcode-wrap .qrcode {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-page-header {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  margin: 10px auto;\n  padding: 0 5%;\n}\n.component-page-header .trade-mark {\n  display: block;\n  width: 350px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  float: left;\n}\n.component-page-header .trade-mark .icon-piano {\n  display: block;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  -webkit-transform-origin: 50% 30%;\n          transform-origin: 50% 30%;\n}\n.component-page-header .trade-mark .trade-mark-txt {\n  font-size: 28px;\n  font-weight: 500;\n  color: #000;\n  margin: 0 0 0 10px;\n}\n.component-page-header .trade-mark .trade-mark-txt .trade-mark-txt--en {\n  font-style: italic;\n  font-size: 20px;\n  color: #666;\n  margin-left: 7px;\n}\n.component-page-header .menu {\n  float: right;\n  height: 45px;\n  line-height: 45px;\n  margin-top: 5px;\n}\n.component-page-header .menu .menu-item {\n  display: inline-block;\n  width: 80px;\n  margin: 0 7px;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.component-page-header .menu .menu-item::before {\n  content: '';\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: #ccc;\n}\n.component-page-header .menu .menu-item::after {\n  content: '';\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: #1295DB;\n}\n.component-page-header .menu .menu-item-active::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n.component-page-header .menu .menu-item:hover::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n", ""]);

// exports


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/aliqr.7bf1e6c.png";

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/wxqr.543cb70.png";

/***/ }),
/* 427 */
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
/* 428 */
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
/* 429 */
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
/* 430 */
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
/* 431 */
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
/* 432 */
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
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = exports.search = void 0;
/**
 * Return the index of the element at or before the given property
 * @hidden
 */
function search(array, value, prop) {
    if (prop === void 0) { prop = "ticks"; }
    var beginning = 0;
    var len = array.length;
    var end = len;
    if (len > 0 && array[len - 1][prop] <= value) {
        return len - 1;
    }
    while (beginning < end) {
        // calculate the midpoint for roughly equal partition
        var midPoint = Math.floor(beginning + (end - beginning) / 2);
        var event_1 = array[midPoint];
        var nextEvent = array[midPoint + 1];
        if (event_1[prop] === value) {
            // choose the last one that has the same value
            for (var i = midPoint; i < array.length; i++) {
                var testEvent = array[i];
                if (testEvent[prop] === value) {
                    midPoint = i;
                }
            }
            return midPoint;
        }
        else if (event_1[prop] < value && nextEvent[prop] > value) {
            return midPoint;
        }
        else if (event_1[prop] > value) {
            // search lower
            end = midPoint;
        }
        else if (event_1[prop] < value) {
            // search upper
            beginning = midPoint + 1;
        }
    }
    return -1;
}
exports.search = search;
/**
 * Does a binary search to insert the note
 * in the correct spot in the array
 * @hidden
 */
function insert(array, event, prop) {
    if (prop === void 0) { prop = "ticks"; }
    if (array.length) {
        var index = search(array, event[prop], prop);
        array.splice(index + 1, 0, event);
    }
    else {
        array.push(event);
    }
}
exports.insert = insert;
//# sourceMappingURL=BinarySearch.js.map

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlChange = exports.controlChangeIds = exports.controlChangeNames = void 0;
/**
 * A map of values to control change names
 * @hidden
 */
exports.controlChangeNames = {
    1: "modulationWheel",
    2: "breath",
    4: "footController",
    5: "portamentoTime",
    7: "volume",
    8: "balance",
    10: "pan",
    64: "sustain",
    65: "portamentoTime",
    66: "sostenuto",
    67: "softPedal",
    68: "legatoFootswitch",
    84: "portamentoControl",
};
/**
 * swap the keys and values
 * @hidden
 */
exports.controlChangeIds = Object.keys(exports.controlChangeNames).reduce(function (obj, key) {
    obj[exports.controlChangeNames[key]] = key;
    return obj;
}, {});
var privateHeaderMap = new WeakMap();
var privateCCNumberMap = new WeakMap();
/**
 * Represents a control change event
 */
var ControlChange = /** @class */ (function () {
    /**
     * @param event
     * @param header
     */
    function ControlChange(event, header) {
        privateHeaderMap.set(this, header);
        privateCCNumberMap.set(this, event.controllerType);
        this.ticks = event.absoluteTime;
        this.value = event.value;
    }
    Object.defineProperty(ControlChange.prototype, "number", {
        /**
         * The controller number
         */
        get: function () {
            return privateCCNumberMap.get(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ControlChange.prototype, "name", {
        /**
         * return the common name of the control number if it exists
         */
        get: function () {
            if (exports.controlChangeNames[this.number]) {
                return exports.controlChangeNames[this.number];
            }
            else {
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ControlChange.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: false,
        configurable: true
    });
    ControlChange.prototype.toJSON = function () {
        return {
            number: this.number,
            ticks: this.ticks,
            time: this.time,
            value: this.value,
        };
    };
    return ControlChange;
}());
exports.ControlChange = ControlChange;
//# sourceMappingURL=ControlChange.js.map

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
var BinarySearch_1 = __webpack_require__(433);
var ControlChange_1 = __webpack_require__(434);
var ControlChanges_1 = __webpack_require__(467);
var PitchBend_1 = __webpack_require__(473);
var Instrument_1 = __webpack_require__(469);
var Note_1 = __webpack_require__(472);
var privateHeaderMap = new WeakMap();
/**
 * A Track is a collection of 'notes' and 'controlChanges'.
 */
var Track = /** @class */ (function () {
    function Track(trackData, header) {
        var _this = this;
        /**
         * The name of the track.
         */
        this.name = "";
        /**
         * The track's note events.
         */
        this.notes = [];
        /**
         * The control change events.
         */
        this.controlChanges = (0, ControlChanges_1.createControlChanges)();
        /**
         * The pitch bend events.
         */
        this.pitchBends = [];
        privateHeaderMap.set(this, header);
        if (trackData) {
            // Get the name of the track.
            var nameEvent = trackData.find(function (e) { return e.type === "trackName"; });
            // Set empty name if 'trackName' event isn't found.
            this.name = nameEvent ? nameEvent.text : "";
        }
        this.instrument = new Instrument_1.Instrument(trackData, this);
        // Defaults to 0.
        this.channel = 0;
        if (trackData) {
            var noteOns = trackData.filter(function (event) { return event.type === "noteOn"; });
            var noteOffs = trackData.filter(function (event) { return event.type === "noteOff"; });
            var _loop_1 = function () {
                var currentNote = noteOns.shift();
                // Set the channel based on the note.
                this_1.channel = currentNote.channel;
                // Find the corresponding note off.
                var offIndex = noteOffs.findIndex(function (note) {
                    return note.noteNumber === currentNote.noteNumber &&
                        note.absoluteTime >= currentNote.absoluteTime;
                });
                if (offIndex !== -1) {
                    // Once it's got the note off, add it.
                    var noteOff = noteOffs.splice(offIndex, 1)[0];
                    this_1.addNote({
                        durationTicks: noteOff.absoluteTime - currentNote.absoluteTime,
                        midi: currentNote.noteNumber,
                        noteOffVelocity: noteOff.velocity / 127,
                        ticks: currentNote.absoluteTime,
                        velocity: currentNote.velocity / 127,
                    });
                }
            };
            var this_1 = this;
            while (noteOns.length) {
                _loop_1();
            }
            var controlChanges = trackData.filter(function (event) { return event.type === "controller"; });
            controlChanges.forEach(function (event) {
                _this.addCC({
                    number: event.controllerType,
                    ticks: event.absoluteTime,
                    value: event.value / 127,
                });
            });
            var pitchBends = trackData.filter(function (event) { return event.type === "pitchBend"; });
            pitchBends.forEach(function (event) {
                _this.addPitchBend({
                    ticks: event.absoluteTime,
                    // Scale the value between -2^13 to 2^13 to -2 to 2.
                    value: event.value / Math.pow(2, 13),
                });
            });
            var endOfTrackEvent = trackData.find(function (event) {
                return event.type === "endOfTrack";
            });
            this.endOfTrackTicks =
                endOfTrackEvent !== undefined
                    ? endOfTrackEvent.absoluteTime
                    : undefined;
        }
    }
    /**
     * Add a note to the notes array.
     * @param props The note properties to add.
     */
    Track.prototype.addNote = function (props) {
        var header = privateHeaderMap.get(this);
        var note = new Note_1.Note({
            midi: 0,
            ticks: 0,
            velocity: 1,
        }, {
            ticks: 0,
            velocity: 0,
        }, header);
        Object.assign(note, props);
        (0, BinarySearch_1.insert)(this.notes, note, "ticks");
        return this;
    };
    /**
     * Add a control change to the track.
     * @param props
     */
    Track.prototype.addCC = function (props) {
        var header = privateHeaderMap.get(this);
        var cc = new ControlChange_1.ControlChange({
            controllerType: props.number,
        }, header);
        delete props.number;
        Object.assign(cc, props);
        if (!Array.isArray(this.controlChanges[cc.number])) {
            this.controlChanges[cc.number] = [];
        }
        (0, BinarySearch_1.insert)(this.controlChanges[cc.number], cc, "ticks");
        return this;
    };
    /**
     * Add a control change to the track.
     */
    Track.prototype.addPitchBend = function (props) {
        var header = privateHeaderMap.get(this);
        var pb = new PitchBend_1.PitchBend({}, header);
        Object.assign(pb, props);
        (0, BinarySearch_1.insert)(this.pitchBends, pb, "ticks");
        return this;
    };
    Object.defineProperty(Track.prototype, "duration", {
        /**
         * The end time of the last event in the track.
         */
        get: function () {
            if (!this.notes.length) {
                return 0;
            }
            var maxDuration = this.notes[this.notes.length - 1].time +
                this.notes[this.notes.length - 1].duration;
            for (var i = 0; i < this.notes.length - 1; i++) {
                var duration = this.notes[i].time + this.notes[i].duration;
                if (maxDuration < duration) {
                    maxDuration = duration;
                }
            }
            return maxDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "durationTicks", {
        /**
         * The end time of the last event in the track in ticks.
         */
        get: function () {
            if (!this.notes.length) {
                return 0;
            }
            var maxDuration = this.notes[this.notes.length - 1].ticks +
                this.notes[this.notes.length - 1].durationTicks;
            for (var i = 0; i < this.notes.length - 1; i++) {
                var duration = this.notes[i].ticks + this.notes[i].durationTicks;
                if (maxDuration < duration) {
                    maxDuration = duration;
                }
            }
            return maxDuration;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Assign the JSON values to this track.
     */
    Track.prototype.fromJSON = function (json) {
        var _this = this;
        this.name = json.name;
        this.channel = json.channel;
        this.instrument = new Instrument_1.Instrument(undefined, this);
        this.instrument.fromJSON(json.instrument);
        if (json.endOfTrackTicks !== undefined) {
            this.endOfTrackTicks = json.endOfTrackTicks;
        }
        for (var number in json.controlChanges) {
            if (json.controlChanges[number]) {
                json.controlChanges[number].forEach(function (cc) {
                    _this.addCC({
                        number: cc.number,
                        ticks: cc.ticks,
                        value: cc.value,
                    });
                });
            }
        }
        json.notes.forEach(function (n) {
            _this.addNote({
                durationTicks: n.durationTicks,
                midi: n.midi,
                ticks: n.ticks,
                velocity: n.velocity,
            });
        });
    };
    /**
     * Convert the track into a JSON format.
     */
    Track.prototype.toJSON = function () {
        // Convert all the CCs to JSON.
        var controlChanges = {};
        for (var i = 0; i < 127; i++) {
            if (this.controlChanges.hasOwnProperty(i)) {
                controlChanges[i] = this.controlChanges[i].map(function (c) {
                    return c.toJSON();
                });
            }
        }
        var json = {
            channel: this.channel,
            controlChanges: controlChanges,
            pitchBends: this.pitchBends.map(function (pb) { return pb.toJSON(); }),
            instrument: this.instrument.toJSON(),
            name: this.name,
            notes: this.notes.map(function (n) { return n.toJSON(); }),
        };
        if (this.endOfTrackTicks !== undefined) {
            json.endOfTrackTicks = this.endOfTrackTicks;
        }
        return json;
    };
    return Track;
}());
exports.Track = Track;
//# sourceMappingURL=Track.js.map

/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_observe__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config__ = __webpack_require__(378);

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
  name: 'AutoPlayScoreList',
  data: function data() {
    return {
      ScoreNum: __WEBPACK_IMPORTED_MODULE_2_config__["e" /* ScoreNum */],
      ScoreXml: __WEBPACK_IMPORTED_MODULE_2_config__["f" /* ScoreXml */],
      ScoreMidi: __WEBPACK_IMPORTED_MODULE_2_config__["g" /* ScoreMidi */],
      playingItem: {
        name: ''
      },
      currentView: 'LIST'
    };
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$on(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].MUSIC_END, function () {
      setTimeout(function () {
        _this.stopMusicPlayer();
      }, 2e3);
    });
  },

  methods: {
    clickScoreItem: function clickScoreItem(item, scoreType) {
      if (!item || !item.name) return;
      if (item == this.playingItem) return;
      if (this.playingItem) {
        this.stopMusicPlayer(this.playingItem);
      }
      item.playing = true;
      this.playingItem = item;

      if (scoreType === 'numscore') {
        __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].AUTO_PLAY_NUM_SCORE, item.name);
      } else if (scoreType === 'midi') {
        __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].SHOW_GLOBAL_LOADING);
        __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].AUTO_PLAY_MIDI, item.url);
      } else if (scoreType === 'musicxml') {
        __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].SHOW_GLOBAL_LOADING);
        $.ajax({
          type: 'GET',
          url: item.url || '',
          success: function success(score) {
            if (score) {
              if (score && (typeof score === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(score)) == 'object') {
                setTimeout(function () {
                  __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].HIDE_GLOBAL_LOADING);
                  __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].AUTO_PLAY_XML_SCORE, score);
                }, 200);
              }
            }
          },
          fail: function fail() {
            alert('加载乐谱出错，请检查网络');
          }
        });
      }
    },

    // 停止播放器
    stopMusicPlayer: function stopMusicPlayer(item) {
      item = item || this.playingItem;
      item.playing = false;
      this.currentView = 'LIST';
      __WEBPACK_IMPORTED_MODULE_1_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].STOP_AUTO_PLAY, item);
      this.playingItem = {
        name: '',
        url: ''
      };
    }
  }
});

/***/ }),
/* 437 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CommodityCard',
  components: {},
  mixins: [],
  props: ['product'],
  data: function data() {
    return {};
  },

  computed: {},
  watch: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_CommodityCard_vue__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(378);
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
  name: 'CommodityList',
  components: {
    CommodityCard: __WEBPACK_IMPORTED_MODULE_0__components_CommodityCard_vue__["a" /* default */]
  },
  mixins: [],
  props: [],
  data: function data() {
    return {
      AllGoods: __WEBPACK_IMPORTED_MODULE_1__config__["d" /* Goods */]
    };
  },

  computed: {
    ValidGoods: function ValidGoods() {
      return this.AllGoods.filter(function (g) {
        return g.valid;
      });
    }
  },
  watch: {},
  mounted: function mounted() {
    this.fetchRemoteData();
  },

  methods: {
    fetchRemoteData: function fetchRemoteData() {
      var _this = this;

      $.ajax({
        type: 'GET',
        url: '/static/data/goods.json',
        success: function success(goodsList) {
          if (goodsList && goodsList.length > 0) {
            _this.AllGoods = goodsList;
          }
        }
      });
    },
    scrollList: function scrollList() {
      var _this2 = this;

      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'left';

      if (this.scrollList.timer) {
        clearTimeout(this.scrollList.timer);
      }
      this.scrollList.timer = setTimeout(function () {
        var listWrap = _this2.$refs.listWrap;
        var scrollContent = _this2.$refs.scroll;
        var curLeft = scrollContent.scrollLeft || 0;
        var delta = 0;
        var itemWidth = listWrap.offsetWidth / 4;
        if (dir == 'left') {
          delta = -itemWidth;
        } else if (dir == 'right') {
          delta = itemWidth;
        }
        $(scrollContent).animate({
          scrollLeft: curLeft + delta
        }, 100);
      }, 200);
    }
  }
});

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(378);
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



var defaultTitle = '快速入门';
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ManualPlayScoreList',
  data: function data() {
    return {
      scores: __WEBPACK_IMPORTED_MODULE_0_config__["h" /* ScoreManual */],
      sectionTitle: defaultTitle,
      showItem: {},
      listShow: true
    };
  },
  mounted: function mounted() {
    this.showItem = this.scores[0];
  },

  methods: {
    clickScoreItem: function clickScoreItem(item) {
      if (!item) return;
      this.toggleListShow();
      this.showItem = item;
      this.showItem.content = item.content.toUpperCase();
      this.sectionTitle = item.name || defaultTitle;
    },
    toggleListShow: function toggleListShow() {
      this.listShow = !this.listShow;
      if (this.listShow) {
        this.sectionTitle = defaultTitle;
      }
    }
  }
});

/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tone__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_observe__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_config__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_Tonejs_Instruments__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_wutils__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_pianoAutoPlayMixin__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_xmlAutoPlayMixin__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mixins_midiAutoPlayMixin__ = __webpack_require__(477);


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
  name: 'Piano',
  mixins: [__WEBPACK_IMPORTED_MODULE_8__mixins_pianoAutoPlayMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__mixins_xmlAutoPlayMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__mixins_midiAutoPlayMixin__["a" /* default */]],
  components: {},
  data: function data() {
    return {
      DEV: false,
      pianoShow: false,
      bandImg: __webpack_require__(531),
      enableBlackKey: false, // 启用黑色按键
      showKeyName: true, // 显示键名
      showNoteName: false, // 显示音符名
      Notes: __WEBPACK_IMPORTED_MODULE_5_config__["i" /* Notes */],
      synth: null,
      keydownTimer: null,
      keyLock: false,
      lastKeyCode: '',
      lastKeyTime: 0
    };
  },
  mounted: function mounted() {
    this.initPiano();
  },
  beforeDestroy: function beforeDestroy() {
    this.keydownTimer = null;
  },

  methods: {
    // 钢琴初始化
    initPiano: function initPiano() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setTimeout(function () {
                  _this.computeEleSize();
                  _this.pianoShow = true;
                }, 300);
                _this.bindKeyBoradEvent();
                _this.setListener();

                _this.synth = __WEBPACK_IMPORTED_MODULE_6__lib_Tonejs_Instruments__["a" /* default */].load({
                  instruments: "piano"
                }).toMaster();

                // this.synth = new Tone.PolySynth( 10 ).toMaster()

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    computeEleSize: function computeEleSize() {
      var wkey_width = $('.piano-key-wrap').width() / 36;
      var wkey_height = wkey_width * 7;
      var bkey_height = wkey_height * 0.7;
      $('.piano-key-wrap').height(wkey_height);
      $('.bkey').height(bkey_height);
    },
    setListener: function setListener() {
      var _this2 = this;

      window.onresize = this.computeEleSize;
      window.onorientationchange = this.computeEleSize;

      // 数字简谱自动播放
      __WEBPACK_IMPORTED_MODULE_4_observe__["a" /* default */].$on(__WEBPACK_IMPORTED_MODULE_5_config__["b" /* OBEvent */].AUTO_PLAY_NUM_SCORE, function (scorename) {
        _this2.playScoreByName(scorename);
      });
      // XML乐谱自动播放
      __WEBPACK_IMPORTED_MODULE_4_observe__["a" /* default */].$on(__WEBPACK_IMPORTED_MODULE_5_config__["b" /* OBEvent */].AUTO_PLAY_XML_SCORE, function (musicScore) {
        _this2.addToPlayQueue(musicScore);
        // try {
        //   this.playXMLScore(musicScore)
        // } catch (e) {
        //   console.log(e)
        // }
      });
      // MIDI 自动播放
      __WEBPACK_IMPORTED_MODULE_4_observe__["a" /* default */].$on(__WEBPACK_IMPORTED_MODULE_5_config__["b" /* OBEvent */].AUTO_PLAY_MIDI, function (midiUrl) {
        _this2.loadMidiAndPlay(midiUrl);
      });
      // 暂停自动播放
      __WEBPACK_IMPORTED_MODULE_4_observe__["a" /* default */].$on(__WEBPACK_IMPORTED_MODULE_5_config__["b" /* OBEvent */].STOP_AUTO_PLAY, function (scoreItem) {
        _this2.pauseAutoPlay(scoreItem);
        _this2.pauseXMLPlay();
        _this2.pauseXMLPlay();
        _this2.stopMidiPlay();
      });
    },
    getNoteByKeyCode: function getNoteByKeyCode(keyCode) {
      // 改为更高性能的写法
      var target = void 0;
      var len = this.Notes.length || 0;
      for (var i = 0; i < len; i++) {
        var note = this.Notes[i];
        if (note.keyCode == keyCode) {
          target = note;
          break;
        }
      }
      return target;
    },
    getNoteByName: function getNoteByName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'C4';

      // 改为更高性能的写法
      var target = void 0;
      var len = this.Notes.length || 0;
      for (var i = 0; i < len; i++) {
        var note = this.Notes[i];
        if (note.name == name) {
          target = note;
          break;
        }
      }
      return target;
    },

    // 键盘操作 核心代码
    bindKeyBoradEvent: function bindKeyBoradEvent() {
      var _this3 = this;

      var ShiftKeyCode = 16;
      document.addEventListener('keydown', function (e) {
        var keyCode = e.keyCode;
        if (_this3.DEV) console.log('keydown', keyCode);
        // 按住Shfit键，则启用黑色按键
        if (keyCode == ShiftKeyCode) {
          _this3.enableBlackKey = true;
        }
        if (_this3.enableBlackKey) keyCode = 'b' + keyCode;

        if (keyCode == _this3.lastKeyCode) {
          // 连续触发同一个键时，应节流 + 延音
          if (!_this3.keyLock) {
            _this3.playNoteByKeyCode(keyCode);
            // 这里应该延音，解决中...
            _this3.lastKeyCode = keyCode;
            _this3.keyLock = true;
          }
          if (_this3.keydownTimer) {
            clearTimeout(_this3.keydownTimer);
            _this3.keydownTimer = null;
          }
          _this3.keydownTimer = setTimeout(function () {
            _this3.keyLock = false;
          }, 120);
        } else {
          _this3.playNoteByKeyCode(keyCode);
          _this3.lastKeyCode = keyCode;
        }
      }, false);
      // document.addEventListener('keydown', debounce((e) => {
      //   let keyCode = e.keyCode;
      //   let time = +new Date()
      //   if (this.DEV) console.log('keydown', keyCode);
      //   // 按住Shfit键，则启用黑色按键
      //   if (keyCode == ShiftKeyCode) {
      //     this.enableBlackKey = true
      //   }
      //   if (this.enableBlackKey) keyCode = 'b' + keyCode
      //   this.playNoteByKeyCode(keyCode)
      //   this.lastKeyCode = keyCode
      //   this.lastKeyTime = +new Date()
      // }, 100, { leading: true, trailing: false }), false)

      document.addEventListener('keyup', function (e) {
        // console.log('keyup');
        var keyCode = e.keyCode;
        // 松开Shfit键，则禁用黑色按键
        if (keyCode == ShiftKeyCode) {
          _this3.enableBlackKey = false;
        }
        $('.wkey').removeClass('wkey-active');
        $('.bkey').removeClass('bkey-active');
      }, false);
    },

    // 鼠标操作，点击按键播放
    clickPianoKey: function clickPianoKey(e, keyCode) {
      var pressedNote = this.getNoteByKeyCode(keyCode);
      if (pressedNote) {
        this.playNote(pressedNote.name);
      }
    },


    // 根据键值播放音符
    playNoteByKeyCode: function playNoteByKeyCode(keyCode) {
      var pressedNote = this.getNoteByKeyCode(keyCode);
      if (pressedNote) {
        this.playNote(pressedNote.name);
        var keyType = pressedNote.type;
        if (keyType == 'white') {
          $('[data-keyCode=' + pressedNote.keyCode + ']').addClass('wkey-active');
        } else if (keyType == 'black') {
          $('[data-keyCode=' + pressedNote.keyCode + ']').addClass('bkey-active');
        }
      }
    },

    // 触发单个音符播放
    playNote: function playNote() {
      var notename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'C4';
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1n';

      if (!this.synth) return;
      try {
        this.synth.triggerAttackRelease(notename, duration);
      } catch (e) {}
    }
  }
});

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config___ = __webpack_require__(378);
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
  name: 'RandomLyric',
  components: {},
  mixins: [],
  props: [],
  data: function data() {
    return {
      randomLyric: '', // 随机歌词显示
      randomIndex: 0,
      lyricTimer: null
    };
  },

  computed: {},
  mounted: function mounted() {
    clearInterval(this.lyricTimer);
    this.lyricTimer = null;
    this.setRandomLyric();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.lyricTimer);
    this.lyricTimer = null;
  },

  watch: {},
  methods: {
    setRandomLyric: function setRandomLyric() {
      var _this = this;

      if (this.lyricTimer) return;
      this.randomIndex = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0_config___["j" /* Lyrics */].length);
      var set = function set() {
        $('#randomLyric').hide();
        if (_this.randomIndex < __WEBPACK_IMPORTED_MODULE_0_config___["j" /* Lyrics */].length - 1) {
          ++_this.randomIndex;
        } else {
          _this.randomIndex = 0;
        }
        _this.randomLyric = '"' + __WEBPACK_IMPORTED_MODULE_0_config___["j" /* Lyrics */][_this.randomIndex] + '"';
        $('#randomLyric').fadeIn(1000);
      };
      set();
      this.lyricTimer = setInterval(function () {
        set();
      }, 7e3);
    },

    // 歌词搜索、查询
    searchLyric: function searchLyric() {
      var music163 = 'https://music.163.com/#/search/m/?s=';
      var lyricSearchUrl = music163 + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_config___["j" /* Lyrics */][this.randomIndex]);
      window.open(lyricSearchUrl, '_blank');
    }
  }
});

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_observe__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PageHeader__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_RandomLyric__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Piano__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ManualPlayScoreList__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_AutoPlayScoreList__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CommodityList_vue__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuex__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(378);

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
  name: "AutoPianoPC",
  components: {
    PageHeader: __WEBPACK_IMPORTED_MODULE_2__components_PageHeader__["a" /* default */],
    PageFooter: __WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */],
    RandomLyric: __WEBPACK_IMPORTED_MODULE_4__components_RandomLyric__["a" /* default */],
    Piano: __WEBPACK_IMPORTED_MODULE_5__components_Piano__["a" /* default */],
    ManualPlayScoreList: __WEBPACK_IMPORTED_MODULE_6__components_ManualPlayScoreList__["a" /* default */],
    AutoPlayScoreList: __WEBPACK_IMPORTED_MODULE_7__components_AutoPlayScoreList__["a" /* default */],
    CommodityList: __WEBPACK_IMPORTED_MODULE_8__components_CommodityList_vue__["a" /* default */]
  },
  data: function data() {
    return {
      percent: 0,
      rightDrawerShow: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_vuex__["b" /* mapGetters */])(["$currentWallpaper"]), {
    appBgStyle: function appBgStyle() {
      return "background-image: url(" + this.$currentWallpaper + ");";
    }
  }),
  mounted: function mounted() {
    // setTimeout(() => {
    //   let winHeight = window.innerHeight
    //   document.documentElement.style.height = winHeight + 'px'
    // }, 0)
  },

  methods: {
    toggleRightDrawer: function toggleRightDrawer() {
      this.rightDrawerShow = !this.rightDrawerShow;
    },
    hideRightDrawer: function hideRightDrawer() {
      this.rightDrawerShow = false;
    }
  }
});

/***/ }),
/* 443 */,
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(487), __esModule: true };

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(489), __esModule: true };

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(490), __esModule: true };

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(413);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(446);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(445);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(483);


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(382);
var TAG = __webpack_require__(379)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(101).document;
module.exports = document && document.documentElement;


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(383);
var $export = __webpack_require__(145);
var redefine = __webpack_require__(459);
var hide = __webpack_require__(148);
var Iterators = __webpack_require__(395);
var $iterCreate = __webpack_require__(499);
var setToStringTag = __webpack_require__(402);
var getPrototypeOf = __webpack_require__(456);
var ITERATOR = __webpack_require__(379)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(389)('meta');
var isObject = __webpack_require__(71);
var has = __webpack_require__(147);
var setDesc = __webpack_require__(102).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(103)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(146);
var dPs = __webpack_require__(503);
var enumBugKeys = __webpack_require__(393);
var IE_PROTO = __webpack_require__(397)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(153)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(451).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(401);
var hiddenKeys = __webpack_require__(393).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(147);
var toObject = __webpack_require__(385);
var IE_PROTO = __webpack_require__(397)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 457 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(146);
var isObject = __webpack_require__(71);
var newPromiseCapability = __webpack_require__(416);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(146);
var aFunction = __webpack_require__(150);
var SPECIES = __webpack_require__(379)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(151);
var invoke = __webpack_require__(495);
var html = __webpack_require__(451);
var cel = __webpack_require__(153);
var global = __webpack_require__(101);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(382)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 462 */
/***/ (function(module, exports) {



/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(508)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(452)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(511);
var global = __webpack_require__(101);
var hide = __webpack_require__(148);
var Iterators = __webpack_require__(395);
var TO_STRING_TAG = __webpack_require__(379)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

exports.parseMidi = __webpack_require__(529)
exports.writeMidi = __webpack_require__(530)


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tone=e():t.Tone=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=148)}([function(t,e,i){"use strict";i.r(e),function(t){var s=i(93),n=function(){if(!(this instanceof n))throw new Error("constructor needs to be called with the 'new' keyword")};
/**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2019 Yotam Mann
 */n.prototype.toString=function(){for(var t in n){var e=t[0].match(/^[A-Z]$/),i=n[t]===this.constructor;if(n.isFunction(n[t])&&e&&i)return t}return"Tone"},n.prototype.dispose=function(){return this},n.prototype.set=function(t,e){if(n.isString(t)){var i={};i[t]=e,t=i}t:for(var s in t){e=t[s];var o=this;if(-1!==s.indexOf(".")){for(var a=s.split("."),r=0;r<a.length-1;r++)if((o=o[a[r]])instanceof n){a.splice(0,r+1);var l=a.join(".");o.set(l,e);continue t}s=a[a.length-1]}var u=o[s];n.isUndef(u)||(n.Signal&&u instanceof n.Signal||n.Param&&u instanceof n.Param?u.value!==e&&(u.value=e):u instanceof AudioParam?u.value!==e&&(u.value=e):n.TimeBase&&u instanceof n.TimeBase?o[s]=e:u instanceof n?u.set(e):u!==e&&(o[s]=e))}return this},n.prototype.get=function(t){n.isUndef(t)?t=this._collectDefaults(this.constructor):n.isString(t)&&(t=[t]);for(var e={},i=0;i<t.length;i++){var s=t[i],o=this,a=e;if(-1!==s.indexOf(".")){for(var r=s.split("."),l=0;l<r.length-1;l++){var u=r[l];a[u]=a[u]||{},a=a[u],o=o[u]}s=r[r.length-1]}var d=o[s];n.isObject(t[s])?a[s]=d.get():n.Signal&&d instanceof n.Signal?a[s]=d.value:n.Param&&d instanceof n.Param?a[s]=d.value:d instanceof AudioParam?a[s]=d.value:d instanceof n?a[s]=d.get():!n.isFunction(d)&&n.isDefined(d)&&(a[s]=d)}return e},n.prototype._collectDefaults=function(t){var e=[];if(n.isDefined(t.defaults)&&(e=Object.keys(t.defaults)),n.isDefined(t._super))for(var i=this._collectDefaults(t._super),s=0;s<i.length;s++)-1===e.indexOf(i[s])&&e.push(i[s]);return e},n.defaults=function(t,e,i){var s={};if(1===t.length&&n.isObject(t[0]))s=t[0];else for(var o=0;o<e.length;o++)s[e[o]]=t[o];return n.isDefined(i.defaults)?n.defaultArg(s,i.defaults):n.isObject(i)?n.defaultArg(s,i):s},n.defaultArg=function(t,e){if(n.isObject(t)&&n.isObject(e)){var i={};for(var s in t)i[s]=n.defaultArg(e[s],t[s]);for(var o in e)i[o]=n.defaultArg(t[o],e[o]);return i}return n.isUndef(t)?e:t},n.prototype.log=function(){if(this.debug||this.toString()===n.global.TONE_DEBUG_CLASS){var t=Array.from(arguments);t.unshift(this.toString()+":"),console.log.apply(void 0,t)}},n.prototype.assert=function(t,e){if(!t)throw new Error(e)},n.connectSeries=function(){for(var t=arguments[0],e=1;e<arguments.length;e++){var i=arguments[e];n.connect(t,i),t=i}return n},n.connect=function(t,e,i,s){for(;n.isDefined(e.input);)n.isArray(e.input)?(s=n.defaultArg(s,0),e=e.input[s],s=0):e.input&&(e=e.input);return e instanceof AudioParam?t.connect(e,i):e instanceof AudioNode&&t.connect(e,i,s),n},n.disconnect=function(t,e,i,s){if(e){for(var o=!1;!o;)n.isArray(e.input)?(n.isDefined(s)?n.disconnect(t,e.input[s],i):e.input.forEach(function(e){try{n.disconnect(t,e,i)}catch(t){}}),o=!0):e.input?e=e.input:o=!0;e instanceof AudioParam?t.disconnect(e,i):e instanceof AudioNode&&t.disconnect(e,i,s)}else t.disconnect();return n},n.isUndef=function(t){return void 0===t},n.isDefined=function(t){return!n.isUndef(t)},n.isFunction=function(t){return"function"==typeof t},n.isNumber=function(t){return"number"==typeof t},n.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object},n.isBoolean=function(t){return"boolean"==typeof t},n.isArray=function(t){return Array.isArray(t)},n.isString=function(t){return"string"==typeof t},n.isNote=function(t){return n.isString(t)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)},n.noOp=function(){},n.prototype._readOnly=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._readOnly(t[e]);else Object.defineProperty(this,t,{writable:!1,enumerable:!0})},n.prototype._writable=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._writable(t[e]);else Object.defineProperty(this,t,{writable:!0})},n.State={Started:"started",Stopped:"stopped",Paused:"paused"},n.global=n.isUndef(t)?window:t,n.equalPowerScale=function(t){var e=.5*Math.PI;return Math.sin(t*e)},n.dbToGain=function(t){return Math.pow(10,t/20)},n.gainToDb=function(t){return Math.log(t)/Math.LN10*20},n.intervalToFrequencyRatio=function(t){return Math.pow(2,t/12)},n.prototype.now=function(){return n.context.now()},n.now=function(){return n.context.now()},n.prototype.immediate=function(){return n.context.currentTime},n.immediate=function(){return n.context.currentTime},n.extend=function(t,e){function i(){}n.isUndef(e)&&(e=n),i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t,t._super=e},n._audioContext=null,n.start=function(){return n.context.resume()},Object.defineProperty(n,"context",{get:function(){return n._audioContext},set:function(t){t.isContext?n._audioContext=t:n._audioContext=new n.Context(t),n.Context.emit("init",n._audioContext)}}),Object.defineProperty(n.prototype,"context",{get:function(){return n.context}}),n.setContext=function(t){n.context=t},Object.defineProperty(n.prototype,"blockTime",{get:function(){return 128/this.context.sampleRate}}),Object.defineProperty(n.prototype,"sampleTime",{get:function(){return 1/this.context.sampleRate}}),Object.defineProperty(n,"supported",{get:function(){var t=n.global.hasOwnProperty("AudioContext")||n.global.hasOwnProperty("webkitAudioContext"),e=n.global.hasOwnProperty("Promise");return t&&e}}),Object.defineProperty(n,"initialized",{get:function(){return Boolean(n.context)}}),n.getContext=function(t){if(n.initialized)t(n.context);else{var e=function(){t(n.context),n.Context.off("init",e)};n.Context.on("init",e)}return n},n.version=s.a,e.default=n}.call(this,i(147))},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20);if(s.default.supported){var n=new OfflineAudioContext(2,1,44100),o=n.createGain(),a=n.createGain();if(o.connect(a)!==a){var r=AudioNode.prototype.connect;AudioNode.prototype.connect=function(){return r.apply(this,arguments),arguments[0]}}}s.default.AudioNode=function(){s.default.call(this);var t=s.default.defaults(arguments,["context"],{context:s.default.context});this._context=t.context},s.default.extend(s.default.AudioNode),Object.defineProperty(s.default.AudioNode.prototype,"context",{get:function(){return this._context}}),s.default.AudioNode.prototype.createInsOuts=function(t,e){1===t?this.input=this.context.createGain():t>1&&(this.input=new Array(t)),1===e?this.output=this.context.createGain():e>1&&(this.output=new Array(e))},Object.defineProperty(s.default.AudioNode.prototype,"channelCount",{get:function(){return this.output.channelCount},set:function(t){return this.output.channelCount=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelCountMode",{get:function(){return this.output.channelCountMode},set:function(t){return this.output.channelCountMode=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelInterpretation",{get:function(){return this.output.channelInterpretation},set:function(t){return this.output.channelInterpretation=t}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfInputs",{get:function(){return this.input?s.default.isArray(this.input)?this.input.length:1:0}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfOutputs",{get:function(){return this.output?s.default.isArray(this.output)?this.output.length:1:0}}),s.default.AudioNode.prototype.connect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].connect(t,0,i)):s.default.connect(this.output,t,e,i),this},s.default.AudioNode.prototype.disconnect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].disconnect(t,0,i)):s.default.disconnect(this.output,t,e,i),this},s.default.AudioNode.prototype.chain=function(){var t=Array.from(arguments);return t.unshift(this),s.default.connectSeries.apply(void 0,t),this},s.default.AudioNode.prototype.fan=function(){for(var t=0;t<arguments.length;t++)this.connect(arguments[t]);return this},s.default.AudioNode.prototype.dispose=function(){return s.default.isDefined(this.input)&&(this.input instanceof AudioNode&&this.input.disconnect(),this.input=null),s.default.isDefined(this.output)&&(this.output instanceof AudioNode&&this.output.disconnect(),this.output=null),this._context=null,this};e.default=s.default.AudioNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(14),i(30),i(44),i(20),i(3);if(s.default.supported&&!s.default.global.AudioContext.prototype.createConstantSource){var n=function(t){this.context=t;for(var e=t.createBuffer(1,128,t.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=1;this._bufferSource=t.createBufferSource(),this._bufferSource.channelCount=1,this._bufferSource.channelCountMode="explicit",this._bufferSource.buffer=e,this._bufferSource.loop=!0;var n=this._output=t.createGain();this.offset=n.gain,this._bufferSource.connect(n)};n.prototype.start=function(t){return this._bufferSource.start(t),this},n.prototype.stop=function(t){return this._bufferSource.stop(t),this},n.prototype.connect=function(){return this._output.connect.apply(this._output,arguments),this},n.prototype.disconnect=function(){return this._output.disconnect.apply(this._output,arguments),this},AudioContext.prototype.createConstantSource=function(){return new n(this)},s.default.Context.prototype.createConstantSource=function(){return new n(this)}}s.default.Signal=function(){var t=s.default.defaults(arguments,["value","units"],s.default.Signal);s.default.Param.call(this,t),this._constantSource=this.context.createConstantSource(),this._constantSource.start(0),this._param=this._constantSource.offset,this.value=t.value,this.output=this._constantSource,this.input=this._param=this.output.offset},s.default.extend(s.default.Signal,s.default.Param),s.default.Signal.defaults={value:0,units:s.default.Type.Default,convert:!0},s.default.Signal.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Signal.prototype.disconnect=s.default.SignalBase.prototype.disconnect,s.default.Signal.prototype.getValueAtTime=function(t){return this._param.getValueAtTime?this._param.getValueAtTime(t):s.default.Param.prototype.getValueAtTime.call(this,t)},s.default.Signal.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._constantSource.stop(),this._constantSource.disconnect(),this._constantSource=null,this};e.default=s.default.Signal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(4),i(1);s.default.Gain=function(){var t=s.default.defaults(arguments,["gain","units"],s.default.Gain);s.default.AudioNode.call(this,t),this.input=this.output=this._gainNode=this.context.createGain(),this.gain=new s.default.Param({param:this._gainNode.gain,units:t.units,value:t.gain,convert:t.convert}),this._readOnly("gain")},s.default.extend(s.default.Gain,s.default.AudioNode),s.default.Gain.defaults={gain:1,convert:!0},s.default.Gain.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._gainNode.disconnect(),this._gainNode=null,this._writable("gain"),this.gain.dispose(),this.gain=null},e.default=s.default.Gain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63),i(46),i(45),i(20);s.default.Type={Default:"number",Time:"time",Frequency:"frequency",TransportTime:"transportTime",Ticks:"ticks",NormalRange:"normalRange",AudioRange:"audioRange",Decibels:"db",Interval:"interval",BPM:"bpm",Positive:"positive",Gain:"gain",Cents:"cents",Degrees:"degrees",MIDI:"midi",BarsBeatsSixteenths:"barsBeatsSixteenths",Samples:"samples",Hertz:"hertz",Note:"note",Milliseconds:"milliseconds",Seconds:"seconds",Notation:"notation"},s.default.prototype.toSeconds=function(t){return s.default.isNumber(t)?t:s.default.isUndef(t)?this.now():s.default.isString(t)||s.default.isObject(t)?new s.default.Time(t).toSeconds():t instanceof s.default.TimeBase?t.toSeconds():void 0},s.default.prototype.toFrequency=function(t){return s.default.isNumber(t)?t:s.default.isString(t)||s.default.isUndef(t)||s.default.isObject(t)?new s.default.Frequency(t).valueOf():t instanceof s.default.TimeBase?t.toFrequency():void 0},s.default.prototype.toTicks=function(t){return s.default.isNumber(t)||s.default.isString(t)||s.default.isObject(t)?new s.default.TransportTime(t).toTicks():s.default.isUndef(t)?s.default.Transport.ticks:t instanceof s.default.TimeBase?t.toTicks():void 0},e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(3),i(30);s.default.Multiply=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._mult=this.input[0]=this.output=new s.default.Gain,this._param=this.input[1]=this.output.gain,this.value=s.default.defaultArg(t,0)},s.default.extend(s.default.Multiply,s.default.Signal),s.default.Multiply.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._mult.dispose(),this._mult=null,this._param=null,this},e.default=s.default.Multiply},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(27),i(40),i(4),i(34),i(2),i(1);s.default.Source=function(t){t=s.default.defaultArg(t,s.default.Source.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.memory=100,this._synced=!1,this._scheduled=[],this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=t.mute},s.default.extend(s.default.Source,s.default.AudioNode),s.default.Source.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Source.prototype,"state",{get:function(){return this._synced?s.default.Transport.state===s.default.State.Started?this._state.getValueAtTime(s.default.Transport.seconds):s.default.State.Stopped:this._state.getValueAtTime(this.now())}}),Object.defineProperty(s.default.Source.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Source.prototype._start=s.default.noOp,s.default.Source.prototype.restart=s.default.noOp,s.default.Source.prototype._stop=s.default.noOp,s.default.Source.prototype.start=function(t,e,i){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),this._synced||(t=Math.max(t,this.context.currentTime))),this._state.getValueAtTime(t)===s.default.State.Started)this._state.cancel(t),this._state.setStateAtTime(s.default.State.Started,t),this.restart(t,e,i);else if(this._state.setStateAtTime(s.default.State.Started,t),this._synced){var n=this._state.get(t);n.offset=s.default.defaultArg(e,0),n.duration=i;var o=s.default.Transport.schedule(function(t){this._start(t,e,i)}.bind(this),t);this._scheduled.push(o),s.default.Transport.state===s.default.State.Started&&this._syncedStart(this.now(),s.default.Transport.seconds)}else this._start.apply(this,arguments);return this},s.default.Source.prototype.stop=function(t){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),t=Math.max(t,this.context.currentTime)),this._synced){var e=s.default.Transport.schedule(this._stop.bind(this),t);this._scheduled.push(e)}else this._stop.apply(this,arguments);return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this},s.default.Source.prototype.sync=function(){return this._synced=!0,this._syncedStart=function(t,e){if(e>0){var i=this._state.get(e);if(i&&i.state===s.default.State.Started&&i.time!==e){var n,o=e-this.toSeconds(i.time);i.duration&&(n=this.toSeconds(i.duration)-o),this._start(t,this.toSeconds(i.offset)+o,n)}}}.bind(this),this._syncedStop=function(t){var e=s.default.Transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)===s.default.State.Started&&this._stop(t)}.bind(this),s.default.Transport.on("start loopStart",this._syncedStart),s.default.Transport.on("stop pause loopEnd",this._syncedStop),this},s.default.Source.prototype.unsync=function(){this._synced&&(s.default.Transport.off("stop pause loopEnd",this._syncedStop),s.default.Transport.off("start loopStart",this._syncedStart)),this._synced=!1;for(var t=0;t<this._scheduled.length;t++){var e=this._scheduled[t];s.default.Transport.clear(e)}return this._scheduled=[],this._state.cancel(0),this},s.default.Source.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this.unsync(),this._scheduled=null,this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this._state.dispose(),this._state=null},e.default=s.default.Source},function(t,e,i){"use strict";i.r(e);var s=i(0);i(30),i(44);if(s.default.supported&&!s.default.global.AudioContext.prototype._native_createWaveShaper){var n=navigator.userAgent.toLowerCase();if(n.includes("safari")&&!n.includes("chrome")){var o=function(t){for(var e in this._internalNode=this.input=this.output=t._native_createWaveShaper(),this._curve=null,this._internalNode)this._defineProperty(this._internalNode,e)};Object.defineProperty(o.prototype,"curve",{get:function(){return this._curve},set:function(t){this._curve=t;var e=new Float32Array(t.length+1);e.set(t,1),e[0]=t[0],this._internalNode.curve=e}}),o.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return"function"==typeof t[e]?t[e].bind(t):t[e]},set:function(i){t[e]=i}})},s.default.global.AudioContext.prototype._native_createWaveShaper=s.default.global.AudioContext.prototype.createWaveShaper,s.default.global.AudioContext.prototype.createWaveShaper=function(){return new o(this)}}}s.default.WaveShaper=function(t,e){s.default.SignalBase.call(this),this._shaper=this.input=this.output=this.context.createWaveShaper(),this._curve=null,Array.isArray(t)?this.curve=t:isFinite(t)||s.default.isUndef(t)?this._curve=new Float32Array(s.default.defaultArg(t,1024)):s.default.isFunction(t)&&(this._curve=new Float32Array(s.default.defaultArg(e,1024)),this.setMap(t))},s.default.extend(s.default.WaveShaper,s.default.SignalBase),s.default.WaveShaper.prototype.setMap=function(t){for(var e=new Array(this._curve.length),i=0,s=this._curve.length;i<s;i++){var n=i/(s-1)*2-1;e[i]=t(n,i)}return this.curve=e,this},Object.defineProperty(s.default.WaveShaper.prototype,"curve",{get:function(){return this._shaper.curve},set:function(t){this._curve=new Float32Array(t),this._shaper.curve=this._curve}}),Object.defineProperty(s.default.WaveShaper.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){if(!["none","2x","4x"].includes(t))throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");this._shaper.oversample=t}}),s.default.WaveShaper.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.disconnect(),this._shaper=null,this._curve=null,this};e.default=s.default.WaveShaper},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(1);s.default.Effect=function(){var t=s.default.defaults(arguments,["wet"],s.default.Effect);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this.effectSend=new s.default.Gain,this.effectReturn=new s.default.Gain,s.default.connect(this.input,this._dryWet.a),s.default.connect(this.input,this.effectSend),this.effectReturn.connect(this._dryWet.b),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.Effect,s.default.AudioNode),s.default.Effect.defaults={wet:1},s.default.Effect.prototype.connectEffect=function(t){return this.effectSend.chain(t,this.effectReturn),this},s.default.Effect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this.effectSend.dispose(),this.effectSend=null,this.effectReturn.dispose(),this.effectReturn=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.Effect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(1);s.default.Filter=function(){var t=s.default.defaults(arguments,["frequency","type","rolloff"],s.default.Filter);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._filters=[],this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(0,s.default.Type.Cents),this.gain=new s.default.Signal({value:t.gain,convert:!0,type:s.default.Type.Decibels}),this.Q=new s.default.Signal(t.Q),this._type=t.type,this._rolloff=t.rolloff,this.rolloff=t.rolloff,this._readOnly(["detune","frequency","gain","Q"])},s.default.extend(s.default.Filter,s.default.AudioNode),s.default.Filter.defaults={type:"lowpass",frequency:350,rolloff:-12,Q:1,gain:0},Object.defineProperty(s.default.Filter.prototype,"type",{get:function(){return this._type},set:function(t){if(-1===["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t))throw new TypeError("Tone.Filter: invalid type "+t);this._type=t;for(var e=0;e<this._filters.length;e++)this._filters[e].type=t}}),Object.defineProperty(s.default.Filter.prototype,"rolloff",{get:function(){return this._rolloff},set:function(t){t=parseInt(t,10);var e=[-12,-24,-48,-96].indexOf(t);if(-1===e)throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");e+=1,this._rolloff=t,this.input.disconnect();for(var i=0;i<this._filters.length;i++)this._filters[i].disconnect(),this._filters[i]=null;this._filters=new Array(e);for(var n=0;n<e;n++){var o=this.context.createBiquadFilter();o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[n]=o}var a=[this.input].concat(this._filters).concat([this.output]);s.default.connectSeries.apply(s.default,a)}}),s.default.Filter.prototype.getFrequencyResponse=function(t){t=s.default.defaultArg(t,128);for(var e=new Float32Array(t).map(function(){return 1}),i=new Float32Array(t),n=0;n<t;n++){var o=19980*Math.pow(n/t,2)+20;i[n]=o}var a=new Float32Array(t),r=new Float32Array(t);return this._filters.forEach(function(){var t=this.context.createBiquadFilter();t.type=this._type,t.Q.value=this.Q.value,t.frequency.value=this.frequency.value,t.gain.value=this.gain.value,t.getFrequencyResponse(i,a,r),a.forEach(function(t,i){e[i]*=t})}.bind(this)),e},s.default.Filter.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this);for(var t=0;t<this._filters.length;t++)this._filters[t].disconnect(),this._filters[t]=null;return this._filters=null,this._writable(["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.frequency=null,this.Q=null,this.detune.dispose(),this.detune=null,this.gain.dispose(),this.gain=null,this},e.default=s.default.Filter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.Merge=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(t,0),this._merger=this.output=this.context.createChannelMerger(t);for(var e=0;e<t;e++)this.input[e]=new s.default.Gain,this.input[e].connect(this._merger,0,e),this.input[e].channelCount=1,this.input[e].channelCountMode="explicit";this.left=this.input[0],this.right=this.input[1]},s.default.extend(s.default.Merge,s.default.AudioNode),s.default.Merge.prototype.dispose=function(){return this.input.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this.left=null,this.right=null,this._merger.disconnect(),this._merger=null,this},e.default=s.default.Merge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(35),i(4);s.default.supported&&(AudioBuffer.prototype.copyToChannel||(AudioBuffer.prototype.copyToChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<s.length;n++)s[n+i]=t[n]},AudioBuffer.prototype.copyFromChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<t.length;n++)t[n]=s[n+i]})),s.default.Buffer=function(){var t=s.default.defaults(arguments,["url","onload","onerror"],s.default.Buffer);s.default.call(this),this._buffer=null,this._reversed=t.reverse,this._xhr=null,this.onload=s.default.noOp,t.url instanceof AudioBuffer||t.url instanceof s.default.Buffer?(this.set(t.url),this.loaded||(this.onload=t.onload)):s.default.isString(t.url)&&this.load(t.url).then(t.onload).catch(t.onerror)},s.default.extend(s.default.Buffer),s.default.Buffer.defaults={url:void 0,reverse:!1,onload:s.default.noOp,onerror:s.default.noOp},s.default.Buffer.prototype.set=function(t){return t instanceof s.default.Buffer?t.loaded?this._buffer=t.get():t.onload=function(){this.set(t),this.onload(this)}.bind(this):this._buffer=t,this._reversed&&this._reverse(),this},s.default.Buffer.prototype.get=function(){return this._buffer},s.default.Buffer.prototype.load=function(t,e,i){return new Promise(function(n,o){this._xhr=s.default.Buffer.load(t,function(t){this._xhr=null,this.set(t),n(this),this.onload(this),e&&e(this)}.bind(this),function(t){this._xhr=null,o(t),i&&i(t)}.bind(this))}.bind(this))},s.default.Buffer.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._buffer=null,this._xhr&&(s.default.Buffer._removeFromDownloadQueue(this._xhr),this._xhr.abort(),this._xhr=null),this},Object.defineProperty(s.default.Buffer.prototype,"loaded",{get:function(){return this.length>0}}),Object.defineProperty(s.default.Buffer.prototype,"duration",{get:function(){return this._buffer?this._buffer.duration:0}}),Object.defineProperty(s.default.Buffer.prototype,"length",{get:function(){return this._buffer?this._buffer.length:0}}),Object.defineProperty(s.default.Buffer.prototype,"numberOfChannels",{get:function(){return this._buffer?this._buffer.numberOfChannels:0}}),s.default.Buffer.prototype.fromArray=function(t){var e=t[0].length>0,i=e?t.length:1,s=e?t[0].length:t.length,n=this.context.createBuffer(i,s,this.context.sampleRate);e||1!==i||(t=[t]);for(var o=0;o<i;o++)n.copyToChannel(t[o],o);return this._buffer=n,this},s.default.Buffer.prototype.toMono=function(t){if(s.default.isNumber(t))this.fromArray(this.toArray(t));else{for(var e=new Float32Array(this.length),i=this.numberOfChannels,n=0;n<i;n++)for(var o=this.toArray(n),a=0;a<o.length;a++)e[a]+=o[a];e=e.map(function(t){return t/i}),this.fromArray(e)}return this},s.default.Buffer.prototype.toArray=function(t){if(s.default.isNumber(t))return this.getChannelData(t);if(1===this.numberOfChannels)return this.toArray(0);for(var e=[],i=0;i<this.numberOfChannels;i++)e[i]=this.getChannelData(i);return e},s.default.Buffer.prototype.getChannelData=function(t){return this._buffer.getChannelData(t)},s.default.Buffer.prototype.slice=function(t,e){e=s.default.defaultArg(e,this.duration);for(var i=Math.floor(this.context.sampleRate*this.toSeconds(t)),n=Math.floor(this.context.sampleRate*this.toSeconds(e)),o=[],a=0;a<this.numberOfChannels;a++)o[a]=this.toArray(a).slice(i,n);return(new s.default.Buffer).fromArray(o)},s.default.Buffer.prototype._reverse=function(){if(this.loaded)for(var t=0;t<this.numberOfChannels;t++)Array.prototype.reverse.call(this.getChannelData(t));return this},Object.defineProperty(s.default.Buffer.prototype,"reverse",{get:function(){return this._reversed},set:function(t){this._reversed!==t&&(this._reversed=t,this._reverse())}}),s.default.Emitter.mixin(s.default.Buffer),s.default.Buffer._downloadQueue=[],s.default.Buffer.baseUrl="",s.default.Buffer.fromArray=function(t){return(new s.default.Buffer).fromArray(t)},s.default.Buffer.fromUrl=function(t){var e=new s.default.Buffer;return e.load(t).then(function(){return e})},s.default.Buffer._removeFromDownloadQueue=function(t){var e=s.default.Buffer._downloadQueue.indexOf(t);-1!==e&&s.default.Buffer._downloadQueue.splice(e,1)},s.default.Buffer.load=function(t,e,i){e=s.default.defaultArg(e,s.default.noOp);var n=t.match(/\[(.+\|?)+\]$/);if(n){for(var o=n[1].split("|"),a=o[0],r=0;r<o.length;r++)if(s.default.Buffer.supportsType(o[r])){a=o[r];break}t=t.replace(n[0],a)}function l(t){if(s.default.Buffer._removeFromDownloadQueue(d),s.default.Buffer.emit("error",t),!i)throw t;i(t)}function u(){for(var t=0,e=0;e<s.default.Buffer._downloadQueue.length;e++)t+=s.default.Buffer._downloadQueue[e].progress;s.default.Buffer.emit("progress",t/s.default.Buffer._downloadQueue.length)}var d=new XMLHttpRequest;return d.open("GET",s.default.Buffer.baseUrl+t,!0),d.responseType="arraybuffer",d.progress=0,s.default.Buffer._downloadQueue.push(d),d.addEventListener("load",function(){200===d.status?s.default.context.decodeAudioData(d.response).then(function(t){d.progress=1,u(),e(t),s.default.Buffer._removeFromDownloadQueue(d),0===s.default.Buffer._downloadQueue.length&&s.default.Buffer.emit("load")}).catch(function(){s.default.Buffer._removeFromDownloadQueue(d),l("Tone.Buffer: could not decode audio data: "+t)}):l("Tone.Buffer: could not locate file: "+t)}),d.addEventListener("error",l),d.addEventListener("progress",function(t){t.lengthComputable&&(d.progress=t.loaded/t.total*.95,u())}),d.send(),d},s.default.Buffer.cancelDownloads=function(){return s.default.Buffer._downloadQueue.slice().forEach(function(t){s.default.Buffer._removeFromDownloadQueue(t),t.abort()}),s.default.Buffer},s.default.Buffer.supportsType=function(t){var e=t.split(".");return e=e[e.length-1],""!==document.createElement("audio").canPlayType("audio/"+e)},s.default.loaded=function(){var t,e;function i(){s.default.Buffer.off("load",t),s.default.Buffer.off("error",e)}return new Promise(function(i,n){t=function(){i()},e=function(){n()},s.default.Buffer.on("load",t),s.default.Buffer.on("error",e)}).then(i).catch(function(t){throw i(),new Error(t)})};e.default=s.default.Buffer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(17),i(26),i(1),i(2),i(22),i(4),i(28);s.default.LFO=function(){var t=s.default.defaults(arguments,["frequency","min","max"],s.default.LFO);s.default.AudioNode.call(this),this._oscillator=new s.default.Oscillator({frequency:t.frequency,type:t.type}),this.frequency=this._oscillator.frequency,this.amplitude=this._oscillator.volume,this.amplitude.units=s.default.Type.NormalRange,this.amplitude.value=t.amplitude,this._stoppedSignal=new s.default.Signal(0,s.default.Type.AudioRange),this._zeros=new s.default.Zero,this._stoppedValue=0,this._a2g=new s.default.AudioToGain,this._scaler=this.output=new s.default.Scale(t.min,t.max),this._units=s.default.Type.Default,this.units=t.units,this._oscillator.chain(this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),this._readOnly(["amplitude","frequency"]),this.phase=t.phase},s.default.extend(s.default.LFO,s.default.AudioNode),s.default.LFO.defaults={type:"sine",min:0,max:1,phase:0,frequency:"4n",amplitude:1,units:s.default.Type.Default},s.default.LFO.prototype.start=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this},s.default.LFO.prototype.stop=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this},s.default.LFO.prototype.sync=function(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this},s.default.LFO.prototype.unsync=function(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this},Object.defineProperty(s.default.LFO.prototype,"min",{get:function(){return this._toUnits(this._scaler.min)},set:function(t){t=this._fromUnits(t),this._scaler.min=t}}),Object.defineProperty(s.default.LFO.prototype,"max",{get:function(){return this._toUnits(this._scaler.max)},set:function(t){t=this._fromUnits(t),this._scaler.max=t}}),Object.defineProperty(s.default.LFO.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"units",{get:function(){return this._units},set:function(t){var e=this.min,i=this.max;this._units=t,this.min=e,this.max=i}}),Object.defineProperty(s.default.LFO.prototype,"state",{get:function(){return this._oscillator.state}}),s.default.LFO.prototype.connect=function(t){return t.constructor!==s.default.Signal&&t.constructor!==s.default.Param||(this.convert=t.convert,this.units=t.units),s.default.SignalBase.prototype.connect.apply(this,arguments),this},s.default.LFO.prototype._fromUnits=s.default.Param.prototype._fromUnits,s.default.LFO.prototype._toUnits=s.default.Param.prototype._toUnits,s.default.LFO.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["amplitude","frequency"]),this._oscillator.dispose(),this._oscillator=null,this._stoppedSignal.dispose(),this._stoppedSignal=null,this._zeros.dispose(),this._zeros=null,this._scaler.dispose(),this._scaler=null,this._a2g.dispose(),this._a2g=null,this.frequency=null,this.amplitude=null,this},e.default=s.default.LFO},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(90),i(2),i(3);s.default.Subtract=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.output=new s.default.Gain,this._neg=new s.default.Negate,this._param=this.input[1]=new s.default.Signal(t),this._param.chain(this._neg,this._sum)},s.default.extend(s.default.Subtract,s.default.Signal),s.default.Subtract.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._neg.dispose(),this._neg=null,this._sum.disconnect(),this._sum=null,this},e.default=s.default.Subtract},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(1),i(24);s.default.Param=function(){var t=s.default.defaults(arguments,["param","units","convert"],s.default.Param);s.default.AudioNode.call(this,t),this._param=this.input=t.param,this.units=t.units,this.convert=t.convert,this.overridden=!1,this._events=new s.default.Timeline(1e3),s.default.isDefined(t.value)&&this._param&&this.setValueAtTime(t.value,0)},s.default.extend(s.default.Param,s.default.AudioNode),s.default.Param.defaults={units:s.default.Type.Default,convert:!0,param:void 0},Object.defineProperty(s.default.Param.prototype,"value",{get:function(){var t=this.now();return this._toUnits(this.getValueAtTime(t))},set:function(t){this._initialValue=this._fromUnits(t),this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}}),Object.defineProperty(s.default.Param.prototype,"minValue",{get:function(){return this.units===s.default.Type.Time||this.units===s.default.Type.Frequency||this.units===s.default.Type.NormalRange||this.units===s.default.Type.Positive||this.units===s.default.Type.BPM?0:this.units===s.default.Type.AudioRange?-1:this.units===s.default.Type.Decibels?-1/0:this._param.minValue}}),Object.defineProperty(s.default.Param.prototype,"maxValue",{get:function(){return this.units===s.default.Type.NormalRange||this.units===s.default.Type.AudioRange?1:this._param.maxValue}}),s.default.Param.prototype._fromUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert)||this.overridden)return t;switch(this.units){case s.default.Type.Time:return this.toSeconds(t);case s.default.Type.Frequency:return this.toFrequency(t);case s.default.Type.Decibels:return s.default.dbToGain(t);case s.default.Type.NormalRange:return Math.min(Math.max(t,0),1);case s.default.Type.AudioRange:return Math.min(Math.max(t,-1),1);case s.default.Type.Positive:return Math.max(t,0);default:return t}},s.default.Param.prototype._toUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert))return t;switch(this.units){case s.default.Type.Decibels:return s.default.gainToDb(t);default:return t}},s.default.Param.prototype._minOutput=1e-5,s.default.Param.AutomationType={Linear:"linearRampToValueAtTime",Exponential:"exponentialRampToValueAtTime",Target:"setTargetAtTime",SetValue:"setValueAtTime",Cancel:"cancelScheduledValues"},s.default.Param.prototype.setValueAtTime=function(t,e){return e=this.toSeconds(e),t=this._fromUnits(t),this._events.add({type:s.default.Param.AutomationType.SetValue,value:t,time:e}),this.log(s.default.Param.AutomationType.SetValue,t,e),this._param.setValueAtTime(t,e),this},s.default.Param.prototype.getValueAtTime=function(t){t=this.toSeconds(t);var e=this._events.getAfter(t),i=this._events.get(t),n=s.default.defaultArg(this._initialValue,this._param.defaultValue),o=n;if(null===i)o=n;else if(i.type===s.default.Param.AutomationType.Target){var a,r=this._events.getBefore(i.time);a=null===r?n:r.value,o=this._exponentialApproach(i.time,a,i.value,i.constant,t)}else o=null===e?i.value:e.type===s.default.Param.AutomationType.Linear?this._linearInterpolate(i.time,i.value,e.time,e.value,t):e.type===s.default.Param.AutomationType.Exponential?this._exponentialInterpolate(i.time,i.value,e.time,e.value,t):i.value;return o},s.default.Param.prototype.setRampPoint=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),0===e&&(e=this._minOutput),this.setValueAtTime(this._toUnits(e),t),this},s.default.Param.prototype.linearRampToValueAtTime=function(t,e){return t=this._fromUnits(t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Linear,value:t,time:e}),this.log(s.default.Param.AutomationType.Linear,t,e),this._param.linearRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampToValueAtTime=function(t,e){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Exponential,time:e,value:t}),this.log(s.default.Param.AutomationType.Exponential,t,e),this._param.exponentialRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.linearRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.linearRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.targetRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialApproachValueAtTime(t,i,e),this},s.default.Param.prototype.exponentialApproachValueAtTime=function(t,e,i){var s=Math.log(this.toSeconds(i)+1)/Math.log(200);return e=this.toSeconds(e),this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+.9*i),this.linearRampToValueAtTime(t,e+i),this},s.default.Param.prototype.setTargetAtTime=function(t,e,i){if(t=this._fromUnits(t),i<=0)throw new Error("timeConstant must be greater than 0");return e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Target,value:t,time:e,constant:i}),this.log(s.default.Param.AutomationType.Target,t,e,i),this._param.setTargetAtTime(t,e,i),this},s.default.Param.prototype.setValueCurveAtTime=function(t,e,i,n){n=s.default.defaultArg(n,1),i=this.toSeconds(i),e=this.toSeconds(e),this.setValueAtTime(t[0]*n,e);for(var o=i/(t.length-1),a=1;a<t.length;a++)this.linearRampToValueAtTime(t[a]*n,e+a*o);return this},s.default.Param.prototype.cancelScheduledValues=function(t){return t=this.toSeconds(t),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(s.default.Param.AutomationType.Cancel,t),this},s.default.Param.prototype.cancelAndHoldAtTime=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);this.log("cancelAndHoldAtTime",t,"value="+e),this._param.cancelScheduledValues(t);var i=this._events.get(t),n=this._events.getAfter(t);return i&&i.time===t?n?this._events.cancel(n.time):this._events.cancel(t+this.sampleTime):n&&(this._events.cancel(n.time),n.type===s.default.Param.AutomationType.Linear?this.linearRampToValueAtTime(e,t):n.type===s.default.Param.AutomationType.Exponential&&this.exponentialRampToValueAtTime(e,t)),this._events.add({type:s.default.Param.AutomationType.SetValue,value:e,time:t}),this._param.setValueAtTime(e,t),this},s.default.Param.prototype.rampTo=function(t,e,i){return e=s.default.defaultArg(e,.1),this.units===s.default.Type.Frequency||this.units===s.default.Type.BPM||this.units===s.default.Type.Decibels?this.exponentialRampTo(t,e,i):this.linearRampTo(t,e,i),this},s.default.Param.prototype._exponentialApproach=function(t,e,i,s,n){return i+(e-i)*Math.exp(-(n-t)/s)},s.default.Param.prototype._linearInterpolate=function(t,e,i,s,n){return e+(n-t)/(i-t)*(s-e)},s.default.Param.prototype._exponentialInterpolate=function(t,e,i,s,n){return e*Math.pow(s/e,(n-t)/(i-t))},s.default.Param.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._param=null,this._events=null,this},e.default=s.default.Param},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(19),i(10),i(23);s.default.StereoEffect=function(){s.default.AudioNode.call(this);var t=s.default.defaults(arguments,["wet"],s.default.Effect);this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this._split=new s.default.Split,this.effectSendL=this._split.left,this.effectSendR=this._split.right,this._merge=new s.default.Merge,this.effectReturnL=this._merge.left,this.effectReturnR=this._merge.right,s.default.connect(this.input,this._split),s.default.connect(this.input,this._dryWet,0,0),this._merge.connect(this._dryWet,0,1),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.StereoEffect,s.default.Effect),s.default.StereoEffect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this._split.dispose(),this._split=null,this._merge.dispose(),this._merge=null,this.effectSendL=null,this.effectSendR=null,this.effectReturnL=null,this.effectReturnR=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.StereoEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(83),i(4),i(24),i(35),i(3),i(81),i(80),i(56);s.default.Transport=function(){s.default.Emitter.call(this),s.default.getContext(function(){this.loop=!1,this._loopStart=0,this._loopEnd=0,this._ppq=n.defaults.PPQ,this._clock=new s.default.Clock({callback:this._processTick.bind(this),frequency:0}),this._bindClockEvents(),this.bpm=this._clock.frequency,this.bpm._toUnits=this._toUnits.bind(this),this.bpm._fromUnits=this._fromUnits.bind(this),this.bpm.units=s.default.Type.BPM,this.bpm.value=n.defaults.bpm,this._readOnly("bpm"),this._timeSignature=n.defaults.timeSignature,this._scheduledEvents={},this._timeline=new s.default.Timeline,this._repeatedEvents=new s.default.IntervalTimeline,this._syncedSignals=[],this._swingTicks=n.defaults.PPQ/2,this._swingAmount=0,this.context.transport=this}.bind(this))},s.default.extend(s.default.Transport,s.default.Emitter),s.default.Transport.defaults={bpm:120,swing:0,swingSubdivision:"8n",timeSignature:4,loopStart:0,loopEnd:"4m",PPQ:192},s.default.Transport.prototype.isTransport=!0,s.default.Transport.prototype._processTick=function(t,e){if(this._swingAmount>0&&e%this._ppq!=0&&e%(2*this._swingTicks)!=0){var i=e%(2*this._swingTicks)/(2*this._swingTicks),n=Math.sin(i*Math.PI)*this._swingAmount;t+=s.default.Ticks(2*this._swingTicks/3).toSeconds()*n}this.loop&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._timeline.forEachAtTime(e,function(e){e.invoke(t)})},s.default.Transport.prototype.schedule=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.scheduleRepeat=function(t,e,i,n){var o=new s.default.TransportRepeatEvent(this,{callback:t,interval:s.default.Time(e),time:s.default.TransportTime(i),duration:s.default.Time(s.default.defaultArg(n,1/0))});return this._addEvent(o,this._repeatedEvents)},s.default.Transport.prototype.scheduleOnce=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t,once:!0});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.clear=function(t){if(this._scheduledEvents.hasOwnProperty(t)){var e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this},s.default.Transport.prototype._addEvent=function(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id},s.default.Transport.prototype.cancel=function(t){return t=s.default.defaultArg(t,0),t=this.toTicks(t),this._timeline.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this._repeatedEvents.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this},s.default.Transport.prototype._bindClockEvents=function(){this._clock.on("start",function(t,e){e=s.default.Ticks(e).toSeconds(),this.emit("start",t,e)}.bind(this)),this._clock.on("stop",function(t){this.emit("stop",t)}.bind(this)),this._clock.on("pause",function(t){this.emit("pause",t)}.bind(this))},Object.defineProperty(s.default.Transport.prototype,"state",{get:function(){return this._clock.getStateAtTime(this.now())}}),s.default.Transport.prototype.start=function(t,e){return s.default.isDefined(e)&&(e=this.toTicks(e)),this._clock.start(t,e),this},s.default.Transport.prototype.stop=function(t){return this._clock.stop(t),this},s.default.Transport.prototype.pause=function(t){return this._clock.pause(t),this},s.default.Transport.prototype.toggle=function(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!==s.default.State.Started?this.start(t):this.stop(t),this},Object.defineProperty(s.default.Transport.prototype,"timeSignature",{get:function(){return this._timeSignature},set:function(t){s.default.isArray(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}}),Object.defineProperty(s.default.Transport.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t)}}),s.default.Transport.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Transport.prototype,"swing",{get:function(){return this._swingAmount},set:function(t){this._swingAmount=t}}),Object.defineProperty(s.default.Transport.prototype,"swingSubdivision",{get:function(){return s.default.Ticks(this._swingTicks).toNotation()},set:function(t){this._swingTicks=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"position",{get:function(){var t=this.now(),e=this._clock.getTicksAtTime(t);return s.default.Ticks(e).toBarsBeatsSixteenths()},set:function(t){var e=this.toTicks(t);this.ticks=e}}),Object.defineProperty(s.default.Transport.prototype,"seconds",{get:function(){return this._clock.seconds},set:function(t){var e=this.now(),i=this.bpm.timeToTicks(t,e);this.ticks=i}}),Object.defineProperty(s.default.Transport.prototype,"progress",{get:function(){if(this.loop){var t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}return 0}}),Object.defineProperty(s.default.Transport.prototype,"ticks",{get:function(){return this._clock.ticks},set:function(t){if(this._clock.ticks!==t){var e=this.now();this.state===s.default.State.Started?(this.emit("stop",e),this._clock.setTicksAtTime(t,e),this.emit("start",e,this.seconds)):this._clock.setTicksAtTime(t,e)}}}),s.default.Transport.prototype.getTicksAtTime=function(t){return Math.round(this._clock.getTicksAtTime(t))},s.default.Transport.prototype.getSecondsAtTime=function(t){return this._clock.getSecondsAtTime(t)},Object.defineProperty(s.default.Transport.prototype,"PPQ",{get:function(){return this._ppq},set:function(t){var e=this.bpm.value;this._ppq=t,this.bpm.value=e}}),s.default.Transport.prototype._fromUnits=function(t){return 1/(60/t/this.PPQ)},s.default.Transport.prototype._toUnits=function(t){return t/this.PPQ*60},s.default.Transport.prototype.nextSubdivision=function(t){if(t=this.toTicks(t),this.state!==s.default.State.Started)return 0;var e=this.now(),i=t-this.getTicksAtTime(e)%t;return this._clock.nextTickTime(i,e)},s.default.Transport.prototype.syncSignal=function(t,e){if(!e){var i=this.now();e=0!==t.getValueAtTime(i)?t.getValueAtTime(i)/this.bpm.getValueAtTime(i):0}var n=new s.default.Gain(e);return this.bpm.chain(n,t._param),this._syncedSignals.push({ratio:n,signal:t,initial:t.value}),t.value=0,this},s.default.Transport.prototype.unsyncSignal=function(t){for(var e=this._syncedSignals.length-1;e>=0;e--){var i=this._syncedSignals[e];i.signal===t&&(i.ratio.dispose(),i.signal.value=i.initial,this._syncedSignals.splice(e,1))}return this},s.default.Transport.prototype.dispose=function(){return s.default.Emitter.prototype.dispose.call(this),this._clock.dispose(),this._clock=null,this._writable("bpm"),this.bpm=null,this._timeline.dispose(),this._timeline=null,this._repeatedEvents.dispose(),this._repeatedEvents=null,this};var n=s.default.Transport;s.default.Transport=new n,s.default.Context.on("init",function(t){t.transport&&t.transport.isTransport?s.default.Transport=t.transport:s.default.Transport=new n}),s.default.Context.on("close",function(t){t.transport&&t.transport.isTransport&&t.transport.dispose()}),e.default=s.default.Transport},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(6),i(16),i(64);s.default.Oscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.Oscillator);s.default.Source.call(this,t),this._oscillator=null,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._wave=null,this._partials=t.partials,this._partialCount=t.partialCount,this._phase=t.phase,this._type=t.type,t.partialCount&&t.type!==s.default.Oscillator.Type.Custom&&(this._type=this.baseType+t.partialCount.toString()),this.phase=this._phase,this._readOnly(["frequency","detune"])},s.default.extend(s.default.Oscillator,s.default.Source),s.default.Oscillator.defaults={type:"sine",frequency:440,detune:0,phase:0,partials:[],partialCount:0},s.default.Oscillator.Type={Sine:"sine",Triangle:"triangle",Sawtooth:"sawtooth",Square:"square",Custom:"custom"},s.default.Oscillator.prototype._start=function(t){this.log("start",t);var e=new s.default.OscillatorNode;this._oscillator=e,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),t=this.toSeconds(t),this._oscillator.start(t)},s.default.Oscillator.prototype._stop=function(t){return this.log("stop",t),this._oscillator&&(t=this.toSeconds(t),this._oscillator.stop(t)),this},s.default.Oscillator.prototype.restart=function(t){return this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(this.toSeconds(t)),this},s.default.Oscillator.prototype.syncFrequency=function(){return s.default.Transport.syncSignal(this.frequency),this},s.default.Oscillator.prototype.unsyncFrequency=function(){return s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Oscillator.prototype,"type",{get:function(){return this._type},set:function(t){var e=[s.default.Oscillator.Type.Sine,s.default.Oscillator.Type.Square,s.default.Oscillator.Type.Triangle,s.default.Oscillator.Type.Sawtooth].includes(t);if(0===this._phase&&e)this._wave=null,this._partialCount=0,null!==this._oscillator&&(this._oscillator.type=t);else{var i=this._getRealImaginary(t,this._phase),n=this.context.createPeriodicWave(i[0],i[1]);this._wave=n,null!==this._oscillator&&this._oscillator.setPeriodicWave(this._wave)}this._type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"baseType",{get:function(){return this._type.replace(this.partialCount,"")},set:function(t){this.partialCount&&this._type!==s.default.Oscillator.Type.Custom&&t!==s.default.Oscillator.Type.Custom?this.type=t+this.partialCount:this.type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"partialCount",{get:function(){return this._partialCount},set:function(t){var e=this._type,i=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);i&&(e=i[1]),this._type!==s.default.Oscillator.Type.Custom&&(this.type=0===t?e:e+t.toString())}}),s.default.Oscillator.prototype.get=function(){var t=s.default.prototype.get.apply(this,arguments);return t.type!==s.default.Oscillator.Type.Custom&&delete t.partials,t},s.default.Oscillator.prototype._getRealImaginary=function(t,e){var i=2048,n=new Float32Array(i),o=new Float32Array(i),a=1;if(t===s.default.Oscillator.Type.Custom)a=this._partials.length+1,this._partialCount=this._partials.length,i=a;else{var r=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);r?(a=parseInt(r[2])+1,this._partialCount=parseInt(r[2]),t=r[1],i=a=Math.max(a,2)):this._partialCount=0,this._partials=[]}for(var l=1;l<i;++l){var u,d=2/(l*Math.PI);switch(t){case s.default.Oscillator.Type.Sine:u=l<=a?1:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Square:u=1&l?2*d:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Sawtooth:u=d*(1&l?1:-1),this._partials[l-1]=u;break;case s.default.Oscillator.Type.Triangle:u=1&l?d*d*2*(l-1>>1&1?-1:1):0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Custom:u=this._partials[l-1];break;default:throw new TypeError("Tone.Oscillator: invalid type: "+t)}0!==u?(n[l]=-u*Math.sin(e*l),o[l]=u*Math.cos(e*l)):(n[l]=0,o[l]=0)}return[n,o]},s.default.Oscillator.prototype._inverseFFT=function(t,e,i){for(var s=0,n=t.length,o=0;o<n;o++)s+=t[o]*Math.cos(o*i)+e[o]*Math.sin(o*i);return s},s.default.Oscillator.prototype._getInitialValue=function(){for(var t=this._getRealImaginary(this._type,0),e=t[0],i=t[1],s=0,n=2*Math.PI,o=0;o<8;o++)s=Math.max(this._inverseFFT(e,i,o/8*n),s);return-this._inverseFFT(e,i,this._phase)/s},Object.defineProperty(s.default.Oscillator.prototype,"partials",{get:function(){return this._partials},set:function(t){this._partials=t,this.type=s.default.Oscillator.Type.Custom}}),Object.defineProperty(s.default.Oscillator.prototype,"phase",{get:function(){return this._phase*(180/Math.PI)},set:function(t){this._phase=t*Math.PI/180,this.type=this._type}}),s.default.Oscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._oscillator&&(this._oscillator.dispose(),this._oscillator=null),this._wave=null,this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._partials=null,this},e.default=s.default.Oscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Delay=function(){var t=s.default.defaults(arguments,["delayTime","maxDelay"],s.default.Delay);s.default.AudioNode.call(this,t),this._maxDelay=Math.max(this.toSeconds(t.maxDelay),this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(this._maxDelay),this.delayTime=new s.default.Param({param:this._delayNode.delayTime,units:s.default.Type.Time,value:t.delayTime}),this._readOnly("delayTime")},s.default.extend(s.default.Delay,s.default.AudioNode),s.default.Delay.defaults={maxDelay:1,delayTime:0},Object.defineProperty(s.default.Delay.prototype,"maxDelay",{get:function(){return this._maxDelay}}),s.default.Delay.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._delayNode.disconnect(),this._delayNode=null,this._writable("delayTime"),this.delayTime=null,this},e.default=s.default.Delay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Split=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(0,t),this._splitter=this.input=this.context.createChannelSplitter(t);for(var e=0;e<t;e++)this.output[e]=new s.default.Gain,s.default.connect(this._splitter,this.output[e],e,0),this.output[e].channelCount=1,this.output[e].channelCountMode="explicit";this.left=this.output[0],this.right=this.output[1]},s.default.extend(s.default.Split,s.default.AudioNode),s.default.Split.prototype.dispose=function(){return this.output.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this._splitter.disconnect(),this.left=null,this.right=null,this._splitter=null,this},e.default=s.default.Split},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(35),i(24),i(44),["baseLatency","destination","currentTime","sampleRate","listener","state"]),o=["suspend","close","resume","getOutputTimestamp","createMediaElementSource","createMediaStreamSource","createMediaStreamDestination","createBuffer","decodeAudioData","createBufferSource","createConstantSource","createGain","createDelay","createBiquadFilter","createIIRFilter","createWaveShaper","createPanner","createConvolver","createDynamicsCompressor","createAnalyser","createScriptProcessor","createStereoPanner","createOscillator","createPeriodicWave","createChannelSplitter","createChannelMerger","audioWorklet"];s.default.Context=function(){s.default.Emitter.call(this);var t=s.default.defaults(arguments,["context"],s.default.Context);if(!t.context&&(t.context=new s.default.global.AudioContext,!t.context))throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");for(this._context=t.context;this._context.rawContext;)this._context=this._context.rawContext;n.forEach(function(t){this._defineProperty(this._context,t)}.bind(this)),o.forEach(function(t){this._defineMethod(this._context,t)}.bind(this)),this._latencyHint=t.latencyHint,this._constants={},this.lookAhead=t.lookAhead,this._computedUpdateInterval=0,this._ticker=new a(this.emit.bind(this,"tick"),t.clockSource,t.updateInterval),this._timeouts=new s.default.Timeline,this._timeoutIds=0,this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=function(t){this.emit("statechange",t)}.bind(this)},s.default.extend(s.default.Context,s.default.Emitter),s.default.Emitter.mixin(s.default.Context),s.default.Context.defaults={clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.03},s.default.Context.prototype.isContext=!0,s.default.Context.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e]},set:function(i){t[e]=i}})},s.default.Context.prototype._defineMethod=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e].bind(t)}})},s.default.Context.prototype.now=function(){return this._context.currentTime+this.lookAhead},Object.defineProperty(s.default.Context.prototype,"destination",{get:function(){return this.master?this.master:this._context.destination}}),s.default.Context.prototype.resume=function(){return"suspended"===this._context.state&&this._context instanceof AudioContext?this._context.resume():Promise.resolve()},s.default.Context.prototype.close=function(){var t=Promise.resolve();return this!==s.default.global.TONE_AUDIO_CONTEXT&&(t=this.rawContext.close()),t.then(function(){s.default.Context.emit("close",this)}.bind(this))},s.default.Context.prototype.getConstant=function(t){if(this._constants[t])return this._constants[t];for(var e=this._context.createBuffer(1,128,this._context.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=t;var n=this._context.createBufferSource();return n.channelCount=1,n.channelCountMode="explicit",n.buffer=e,n.loop=!0,n.start(0),this._constants[t]=n,n},s.default.Context.prototype._timeoutLoop=function(){for(var t=this.now();this._timeouts&&this._timeouts.length&&this._timeouts.peek().time<=t;)this._timeouts.shift().callback()},s.default.Context.prototype.setTimeout=function(t,e){this._timeoutIds++;var i=this.now();return this._timeouts.add({callback:t,time:i+e,id:this._timeoutIds}),this._timeoutIds},s.default.Context.prototype.clearTimeout=function(t){return this._timeouts.forEach(function(e){e.id===t&&this.remove(e)}),this},Object.defineProperty(s.default.Context.prototype,"updateInterval",{get:function(){return this._ticker.updateInterval},set:function(t){this._ticker.updateInterval=t}}),Object.defineProperty(s.default.Context.prototype,"rawContext",{get:function(){return this._context}}),Object.defineProperty(s.default.Context.prototype,"clockSource",{get:function(){return this._ticker.type},set:function(t){this._ticker.type=t}}),Object.defineProperty(s.default.Context.prototype,"latencyHint",{get:function(){return this._latencyHint},set:function(t){var e=t;if(this._latencyHint=t,s.default.isString(t))switch(t){case"interactive":e=.1,this._context.latencyHint=t;break;case"playback":e=.8,this._context.latencyHint=t;break;case"balanced":e=.25,this._context.latencyHint=t;break;case"fastest":this._context.latencyHint="interactive",e=.01}this.lookAhead=e,this.updateInterval=e/3}}),s.default.Context.prototype.dispose=function(){return this.close().then(function(){for(var t in s.default.Emitter.prototype.dispose.call(this),this._ticker.dispose(),this._ticker=null,this._timeouts.dispose(),this._timeouts=null,this._constants)this._constants[t].disconnect();this._constants=null}.bind(this))};var a=function(t,e,i){this._type=e,this._updateInterval=i,this._callback=s.default.defaultArg(t,s.default.noOp),this._createClock()};if(a.Type={Worker:"worker",Timeout:"timeout",Offline:"offline"},a.prototype._createWorker=function(){s.default.global.URL=s.default.global.URL||s.default.global.webkitURL;var t=new Blob(["var timeoutTime = "+(1e3*this._updateInterval).toFixed(1)+";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),e=URL.createObjectURL(t),i=new Worker(e);i.onmessage=this._callback.bind(this),this._worker=i},a.prototype._createTimeout=function(){this._timeout=setTimeout(function(){this._createTimeout(),this._callback()}.bind(this),1e3*this._updateInterval)},a.prototype._createClock=function(){if(this._type===a.Type.Worker)try{this._createWorker()}catch(t){this._type=a.Type.Timeout,this._createClock()}else this._type===a.Type.Timeout&&this._createTimeout()},Object.defineProperty(a.prototype,"updateInterval",{get:function(){return this._updateInterval},set:function(t){this._updateInterval=Math.max(t,128/44100),this._type===a.Type.Worker&&this._worker.postMessage(Math.max(1e3*t,1))}}),Object.defineProperty(a.prototype,"type",{get:function(){return this._type},set:function(t){this._disposeClock(),this._type=t,this._createClock()}}),a.prototype._disposeClock=function(){this._timeout&&(clearTimeout(this._timeout),this._timeout=null),this._worker&&(this._worker.terminate(),this._worker.onmessage=null,this._worker=null)},a.prototype.dispose=function(){this._disposeClock(),this._callback=null},s.default.supported&&!s.default.initialized){if(s.default.global.TONE_AUDIO_CONTEXT||(s.default.global.TONE_AUDIO_CONTEXT=new s.default.Context),s.default.context=s.default.global.TONE_AUDIO_CONTEXT,!s.default.global.TONE_SILENCE_LOGGING){var r="v";"dev"===s.default.version&&(r="");var l=" * Tone.js "+r+s.default.version+" * ";console.log("%c"+l,"background: #000; color: #fff")}}else s.default.supported||s.default.global.TONE_SILENCE_LOGGING||console.warn("This browser does not support Tone.js");e.default=s.default.Context},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(40);s.default.Instrument=function(t){t=s.default.defaultArg(t,s.default.Instrument.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._scheduledEvents=[]},s.default.extend(s.default.Instrument,s.default.AudioNode),s.default.Instrument.defaults={volume:0},s.default.Instrument.prototype.triggerAttack=s.default.noOp,s.default.Instrument.prototype.triggerRelease=s.default.noOp,s.default.Instrument.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this},s.default.Instrument.prototype._syncMethod=function(t,e){var i=this["_original_"+t]=this[t];this[t]=function(){var t=Array.prototype.slice.call(arguments),n=t[e],o=s.default.Transport.schedule(function(s){t[e]=s,i.apply(this,t)}.bind(this),n);this._scheduledEvents.push(o)}.bind(this)},s.default.Instrument.prototype.unsync=function(){return this._scheduledEvents.forEach(function(t){s.default.Transport.clear(t)}),this._scheduledEvents=[],this._original_triggerAttack&&(this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this},s.default.Instrument.prototype.triggerAttackRelease=function(t,e,i,s){return i=this.toSeconds(i),e=this.toSeconds(e),this.triggerAttack(t,i,s),this.triggerRelease(i+e),this},s.default.Instrument.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable(["volume"]),this.volume=null,this.unsync(),this._scheduledEvents=null,this},e.default=s.default.Instrument},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.AudioToGain=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return(t+1)/2})},s.default.extend(s.default.AudioToGain,s.default.SignalBase),s.default.AudioToGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.AudioToGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(89),i(3),i(1);s.default.CrossFade=function(t){s.default.AudioNode.call(this),this.createInsOuts(2,1),this.a=this.input[0]=new s.default.Gain,this.b=this.input[1]=new s.default.Gain,this.fade=new s.default.Signal(s.default.defaultArg(t,.5),s.default.Type.NormalRange),this._equalPowerA=new s.default.EqualPowerGain,this._equalPowerB=new s.default.EqualPowerGain,this._one=this.context.getConstant(1),this._invert=new s.default.Subtract,this.a.connect(this.output),this.b.connect(this.output),this.fade.chain(this._equalPowerB,this.b.gain),s.default.connect(this._one,this._invert,0,0),this.fade.connect(this._invert,0,1),this._invert.chain(this._equalPowerA,this.a.gain),this._readOnly("fade")},s.default.extend(s.default.CrossFade,s.default.AudioNode),s.default.CrossFade.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("fade"),this._equalPowerA.dispose(),this._equalPowerA=null,this._equalPowerB.dispose(),this._equalPowerB=null,this.fade.dispose(),this.fade=null,this._invert.dispose(),this._invert=null,this._one=null,this.a.dispose(),this.a=null,this.b.dispose(),this.b=null,this},e.default=s.default.CrossFade},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Timeline=function(){var t=s.default.defaults(arguments,["memory"],s.default.Timeline);s.default.call(this),this._timeline=[],this.memory=t.memory},s.default.extend(s.default.Timeline),s.default.Timeline.defaults={memory:1/0},Object.defineProperty(s.default.Timeline.prototype,"length",{get:function(){return this._timeline.length}}),s.default.Timeline.prototype.add=function(t){if(s.default.isUndef(t.time))throw new Error("Tone.Timeline: events must have a time attribute");t.time=t.time.valueOf();var e=this._search(t.time);if(this._timeline.splice(e+1,0,t),this.length>this.memory){var i=this.length-this.memory;this._timeline.splice(0,i)}return this},s.default.Timeline.prototype.remove=function(t){var e=this._timeline.indexOf(t);return-1!==e&&this._timeline.splice(e,1),this},s.default.Timeline.prototype.get=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return-1!==i?this._timeline[i]:null},s.default.Timeline.prototype.peek=function(){return this._timeline[0]},s.default.Timeline.prototype.shift=function(){return this._timeline.shift()},s.default.Timeline.prototype.getAfter=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return i+1<this._timeline.length?this._timeline[i+1]:null},s.default.Timeline.prototype.getBefore=function(t,e){e=s.default.defaultArg(e,"time");var i=this._timeline.length;if(i>0&&this._timeline[i-1][e]<t)return this._timeline[i-1];var n=this._search(t,e);return n-1>=0?this._timeline[n-1]:null},s.default.Timeline.prototype.cancel=function(t){if(this._timeline.length>1){var e=this._search(t);if(e>=0)if(this._timeline[e].time===t){for(var i=e;i>=0&&this._timeline[i].time===t;i--)e=i;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else 1===this._timeline.length&&this._timeline[0].time>=t&&(this._timeline=[]);return this},s.default.Timeline.prototype.cancelBefore=function(t){var e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this},s.default.Timeline.prototype.previousEvent=function(t){var e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null},s.default.Timeline.prototype._search=function(t,e){if(0===this._timeline.length)return-1;e=s.default.defaultArg(e,"time");var i=0,n=this._timeline.length,o=n;if(n>0&&this._timeline[n-1][e]<=t)return n-1;for(;i<o;){var a=Math.floor(i+(o-i)/2),r=this._timeline[a],l=this._timeline[a+1];if(r[e]===t){for(var u=a;u<this._timeline.length;u++){this._timeline[u][e]===t&&(a=u)}return a}if(r[e]<t&&l[e]>t)return a;r[e]>t?o=a:i=a+1}return-1},s.default.Timeline.prototype._iterate=function(t,e,i){e=s.default.defaultArg(e,0),i=s.default.defaultArg(i,this._timeline.length-1),this._timeline.slice(e,i+1).forEach(function(e){t.call(this,e)}.bind(this))},s.default.Timeline.prototype.forEach=function(t){return this._iterate(t),this},s.default.Timeline.prototype.forEachBefore=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(e,0,i),this},s.default.Timeline.prototype.forEachAfter=function(t,e){var i=this._search(t);return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachBetween=function(t,e,i){var s=this._search(t),n=this._search(e);return-1!==s&&-1!==n?(this._timeline[s].time!==t&&(s+=1),this._timeline[n].time===e&&(n-=1),this._iterate(i,s,n)):-1===s&&this._iterate(i,0,n),this},s.default.Timeline.prototype.forEachFrom=function(t,e){for(var i=this._search(t);i>=0&&this._timeline[i].time>=t;)i--;return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachAtTime=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(function(i){i.time===t&&e.call(this,i)},0,i),this},s.default.Timeline.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._timeline=null,this},e.default=s.default.Timeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(2);s.default.Monophonic=function(t){t=s.default.defaultArg(t,s.default.Monophonic.defaults),s.default.Instrument.call(this,t),this.portamento=t.portamento},s.default.extend(s.default.Monophonic,s.default.Instrument),s.default.Monophonic.defaults={portamento:0},s.default.Monophonic.prototype.triggerAttack=function(t,e,i){return this.log("triggerAttack",t,e,i),e=this.toSeconds(e),this._triggerEnvelopeAttack(e,i),this.setNote(t,e),this},s.default.Monophonic.prototype.triggerRelease=function(t){return this.log("triggerRelease",t),t=this.toSeconds(t),this._triggerEnvelopeRelease(t),this},s.default.Monophonic.prototype._triggerEnvelopeAttack=function(){},s.default.Monophonic.prototype._triggerEnvelopeRelease=function(){},s.default.Monophonic.prototype.getLevelAtTime=function(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)},s.default.Monophonic.prototype.setNote=function(t,e){if(e=this.toSeconds(e),this.portamento>0&&this.getLevelAtTime(e)>.05){var i=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(t,i,e)}else this.frequency.setValueAtTime(t,e);return this},e.default=s.default.Monophonic},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5),i(2);s.default.Scale=function(t,e){s.default.SignalBase.call(this),this._outputMin=s.default.defaultArg(t,0),this._outputMax=s.default.defaultArg(e,1),this._scale=this.input=new s.default.Multiply(1),this._add=this.output=new s.default.Add(0),this._scale.connect(this._add),this._setRange()},s.default.extend(s.default.Scale,s.default.SignalBase),Object.defineProperty(s.default.Scale.prototype,"min",{get:function(){return this._outputMin},set:function(t){this._outputMin=t,this._setRange()}}),Object.defineProperty(s.default.Scale.prototype,"max",{get:function(){return this._outputMax},set:function(t){this._outputMax=t,this._setRange()}}),s.default.Scale.prototype._setRange=function(){this._add.value=this._outputMin,this._scale.value=this._outputMax-this._outputMin},s.default.Scale.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._add.dispose(),this._add=null,this._scale.dispose(),this._scale=null,this},e.default=s.default.Scale},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3),i(1);s.default.Volume=function(){var t=s.default.defaults(arguments,["volume"],s.default.Volume);s.default.AudioNode.call(this,t),this.output=this.input=new s.default.Gain(t.volume,s.default.Type.Decibels),this._unmutedVolume=t.volume,this.volume=this.output.gain,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.Volume,s.default.AudioNode),s.default.Volume.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Volume.prototype,"mute",{get:function(){return this.volume.value===-1/0},set:function(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}}),s.default.Volume.prototype.dispose=function(){return this.input.dispose(),s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this.volume.dispose(),this.volume=null,this},e.default=s.default.Volume},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(30);s.default.Zero=function(){s.default.SignalBase.call(this),this._gain=this.input=this.output=new s.default.Gain,s.default.connect(this.context.getConstant(0),this._gain)},s.default.extend(s.default.Zero,s.default.SignalBase),s.default.Zero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._gain.dispose(),this._gain=null,this},e.default=s.default.Zero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3);s.default.Add=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.input[1]=this.output=new s.default.Gain,this._param=this.input[1]=new s.default.Signal(t),this._param.connect(this._sum)},s.default.extend(s.default.Add,s.default.Signal),s.default.Add.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._sum.dispose(),this._sum=null,this},e.default=s.default.Add},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.SignalBase=function(){s.default.AudioNode.call(this)},s.default.extend(s.default.SignalBase,s.default.AudioNode),s.default.SignalBase.prototype.connect=function(t,e,i){return s.default.Signal&&s.default.Signal===t.constructor||s.default.Param&&s.default.Param===t.constructor?(t._param.cancelScheduledValues(0),t._param.setValueAtTime(0,0),t.overridden=!0):t instanceof AudioParam&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0)),s.default.AudioNode.prototype.connect.call(this,t,e,i),this},e.default=s.default.SignalBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(3);s.default.AmplitudeEnvelope=function(){s.default.Envelope.apply(this,arguments),this.input=this.output=new s.default.Gain,this._sig.connect(this.output.gain)},s.default.extend(s.default.AmplitudeEnvelope,s.default.Envelope),s.default.AmplitudeEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this},e.default=s.default.AmplitudeEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.BufferSource=function(){var t=s.default.defaults(arguments,["buffer","onload"],s.default.BufferSource);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._sourceStarted=!1,this._sourceStopped=!1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._source=this.context.createBufferSource(),s.default.connect(this._source,this._gainNode),this._source.onended=this._onended.bind(this),this._buffer=new s.default.Buffer(t.buffer,t.onload),this.playbackRate=new s.default.Param({param:this._source.playbackRate,units:s.default.Type.Positive,value:t.playbackRate}),this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut,this.curve=t.curve,this._onendedTimeout=-1,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd},s.default.extend(s.default.BufferSource,s.default.AudioNode),s.default.BufferSource.defaults={onended:s.default.noOp,onload:s.default.noOp,loop:!1,loopStart:0,loopEnd:0,fadeIn:0,fadeOut:0,curve:"linear",playbackRate:1},Object.defineProperty(s.default.BufferSource.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.BufferSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&this._startTime<=t&&(-1===this._stopTime||t<this._stopTime)&&!this._sourceStopped?s.default.State.Started:s.default.State.Stopped},s.default.BufferSource.prototype.start=function(t,e,i,n){this.log("start",t,e,i,n),this.assert(-1===this._startTime,"can only be started once"),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),e=this.loop?s.default.defaultArg(e,this.loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),e=Math.max(e,0),n=s.default.defaultArg(n,1);var o=this.toSeconds(this.fadeIn);if(o>0?(this._gainNode.gain.setValueAtTime(0,t),"linear"===this.curve?this._gainNode.gain.linearRampToValueAtTime(n,t+o):this._gainNode.gain.exponentialApproachValueAtTime(n,t,o)):this._gainNode.gain.setValueAtTime(n,t),this._startTime=t,s.default.isDefined(i)){var a=this.toSeconds(i);a=Math.max(a,0),this.stop(t+a)}if(this.loop){var r=this.loopEnd||this.buffer.duration,l=this.loopStart;e>=r&&(e=(e-l)%(r-l)+l)}return this._source.buffer=this.buffer.get(),this._source.loopEnd=this.loopEnd||this.buffer.duration,e<this.buffer.duration&&(this._sourceStarted=!0,this._source.start(t,e)),this},s.default.BufferSource.prototype.stop=function(t){this.log("stop",t),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),-1!==this._stopTime&&this.cancelStop();var e=this.toSeconds(this.fadeOut);return this._stopTime=t+e,e>0?"linear"===this.curve?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),s.default.context.clearTimeout(this._onendedTimeout),this._onendedTimeout=s.default.context.setTimeout(this._onended.bind(this),this._stopTime-this.now()),this},s.default.BufferSource.prototype.cancelStop=function(){if(-1!==this._startTime&&!this._sourceStopped){var t=this.toSeconds(this.fadeIn);this._gainNode.gain.cancelScheduledValues(this._startTime+t+this.sampleTime),this.context.clearTimeout(this._onendedTimeout),this._stopTime=-1}return this},s.default.BufferSource.prototype._onended=function(){if(!this._sourceStopped){this._sourceStopped=!0;var t="exponential"===this.curve?2*this.fadeOut:0;this._sourceStarted&&-1!==this._stopTime&&this._source.stop(this._stopTime+t),this.onended(this),setTimeout(function(){this._source&&(this._source.disconnect(),this._gainNode.disconnect())}.bind(this),1e3*t+100)}},Object.defineProperty(s.default.BufferSource.prototype,"loopStart",{get:function(){return this._source.loopStart},set:function(t){this._source.loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loopEnd",{get:function(){return this._source.loopEnd},set:function(t){this._source.loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loop",{get:function(){return this._source.loop},set:function(t){this._source.loop=t,this.cancelStop()}}),s.default.BufferSource.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._source.onended=null,this._source.disconnect(),this._source=null,this._gainNode.dispose(),this._gainNode=null,this._buffer.dispose(),this._buffer=null,this._startTime=-1,this.playbackRate=null,s.default.context.clearTimeout(this._onendedTimeout)),this},e.default=s.default.BufferSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(2),i(5),i(3);s.default.FeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.Effect.call(this,t),this._feedbackGain=new s.default.Gain(t.feedback,s.default.Type.NormalRange),this.feedback=this._feedbackGain.gain,this.effectReturn.chain(this._feedbackGain,this.effectSend),this._readOnly(["feedback"])},s.default.extend(s.default.FeedbackEffect,s.default.Effect),s.default.FeedbackEffect.defaults={feedback:.125},s.default.FeedbackEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._writable(["feedback"]),this._feedbackGain.dispose(),this._feedbackGain=null,this.feedback=null,this},e.default=s.default.FeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24),i(4);s.default.TimelineState=function(t){s.default.Timeline.call(this),this._initial=t},s.default.extend(s.default.TimelineState,s.default.Timeline),s.default.TimelineState.prototype.getValueAtTime=function(t){var e=this.get(t);return null!==e?e.state:this._initial},s.default.TimelineState.prototype.setStateAtTime=function(t,e){return this.add({state:t,time:e}),this},s.default.TimelineState.prototype.getLastState=function(t,e){e=this.toSeconds(e);for(var i=this._search(e);i>=0;i--){var s=this._timeline[i];if(s.state===t)return s}},s.default.TimelineState.prototype.getNextState=function(t,e){e=this.toSeconds(e);var i=this._search(e);if(-1!==i)for(var s=i;s<this._timeline.length;s++){var n=this._timeline[s];if(n.state===t)return n}},e.default=s.default.TimelineState},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Emitter=function(){s.default.call(this),this._events={}},s.default.extend(s.default.Emitter),s.default.Emitter.prototype.on=function(t,e){for(var i=t.split(/\W+/),s=0;s<i.length;s++){var n=i[s];this._events.hasOwnProperty(n)||(this._events[n]=[]),this._events[n].push(e)}return this},s.default.Emitter.prototype.once=function(t,e){var i=function(){e.apply(this,arguments),this.off(t,i)}.bind(this);return this.on(t,i),this},s.default.Emitter.prototype.off=function(t,e){for(var i=t.split(/\W+/),n=0;n<i.length;n++)if(t=i[n],this._events.hasOwnProperty(t))if(s.default.isUndef(e))this._events[t]=[];else for(var o=this._events[t],a=0;a<o.length;a++)o[a]===e&&o.splice(a,1);return this},s.default.Emitter.prototype.emit=function(t){if(this._events){var e=Array.apply(null,arguments).slice(1);if(this._events.hasOwnProperty(t))for(var i=this._events[t].slice(0),s=0,n=i.length;s<n;s++)i[s].apply(this,e)}return this},s.default.Emitter.mixin=function(t){var e=["on","once","off","emit"];t._events={};for(var i=0;i<e.length;i++){var n=e[i],o=s.default.Emitter.prototype[n];t[n]=o}return s.default.Emitter},s.default.Emitter.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._events=null,this},e.default=s.default.Emitter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1),i(44);s.default.supported&&(AnalyserNode.prototype.getFloatTimeDomainData||(AnalyserNode.prototype.getFloatTimeDomainData=function(t){var e=new Uint8Array(t.length);this.getByteTimeDomainData(e);for(var i=0;i<e.length;i++)t[i]=(e[i]-128)/128})),s.default.Analyser=function(){var t=s.default.defaults(arguments,["type","size"],s.default.Analyser);s.default.AudioNode.call(this),this._analyser=this.input=this.output=this.context.createAnalyser(),this._type=t.type,this._buffer=null,this.size=t.size,this.type=t.type},s.default.extend(s.default.Analyser,s.default.AudioNode),s.default.Analyser.defaults={size:1024,type:"fft",smoothing:.8},s.default.Analyser.Type={Waveform:"waveform",FFT:"fft"},s.default.Analyser.prototype.getValue=function(){return this._type===s.default.Analyser.Type.FFT?this._analyser.getFloatFrequencyData(this._buffer):this._type===s.default.Analyser.Type.Waveform&&this._analyser.getFloatTimeDomainData(this._buffer),this._buffer},Object.defineProperty(s.default.Analyser.prototype,"size",{get:function(){return this._analyser.frequencyBinCount},set:function(t){this._analyser.fftSize=2*t,this._buffer=new Float32Array(t)}}),Object.defineProperty(s.default.Analyser.prototype,"type",{get:function(){return this._type},set:function(t){if(t!==s.default.Analyser.Type.Waveform&&t!==s.default.Analyser.Type.FFT)throw new TypeError("Tone.Analyser: invalid type: "+t);this._type=t}}),Object.defineProperty(s.default.Analyser.prototype,"smoothing",{get:function(){return this._analyser.smoothingTimeConstant},set:function(t){this._analyser.smoothingTimeConstant=t}}),s.default.Analyser.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.disconnect(),this._analyser=null,this._buffer=null};e.default=s.default.Analyser},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(50),i(69),i(49),i(68),i(67);s.default.OmniOscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OmniOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._sourceType=void 0,this._oscillator=null,this.type=t.type,this._readOnly(["frequency","detune"]),this.set(t)},s.default.extend(s.default.OmniOscillator,s.default.Source),s.default.OmniOscillator.defaults={frequency:440,detune:0,type:"sine",phase:0};var n="PulseOscillator",o="PWMOscillator",a="Oscillator",r="FMOscillator",l="AMOscillator",u="FatOscillator";s.default.OmniOscillator.prototype._start=function(t){this._oscillator.start(t)},s.default.OmniOscillator.prototype._stop=function(t){this._oscillator.stop(t)},s.default.OmniOscillator.prototype.restart=function(t){this._oscillator.restart(t)},Object.defineProperty(s.default.OmniOscillator.prototype,"type",{get:function(){var t="";return this._sourceType===r?t="fm":this._sourceType===l?t="am":this._sourceType===u&&(t="fat"),t+this._oscillator.type},set:function(t){"fm"===t.substr(0,2)?(this._createNewOscillator(r),this._oscillator.type=t.substr(2)):"am"===t.substr(0,2)?(this._createNewOscillator(l),this._oscillator.type=t.substr(2)):"fat"===t.substr(0,3)?(this._createNewOscillator(u),this._oscillator.type=t.substr(3)):"pwm"===t?this._createNewOscillator(o):"pulse"===t?this._createNewOscillator(n):(this._createNewOscillator(a),this._oscillator.type=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partials",{get:function(){return this._oscillator.partials},set:function(t){this._oscillator.partials=t}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partialCount",{get:function(){return this._oscillator.partialCount},set:function(t){this._oscillator.partialCount=t}}),s.default.OmniOscillator.prototype.set=function(t,e){return"type"===t?this.type=e:s.default.isObject(t)&&t.hasOwnProperty("type")&&(this.type=t.type),s.default.prototype.set.apply(this,arguments),this},s.default.OmniOscillator.prototype.get=function(t){var e=this._oscillator.get(t);return e.type=this.type,e},s.default.OmniOscillator.prototype._createNewOscillator=function(t){if(t!==this._sourceType){this._sourceType=t;var e=s.default[t],i=this.now();if(null!==this._oscillator){var n=this._oscillator;n.stop(i),this.context.setTimeout(function(){n.dispose(),n=null},this.blockTime)}this._oscillator=new e,this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this.state===s.default.State.Started&&this._oscillator.start(i)}},Object.defineProperty(s.default.OmniOscillator.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t}});var d={PulseOscillator:"pulse",PWMOscillator:"pwm",Oscillator:"oscillator",FMOscillator:"fm",AMOscillator:"am",FatOscillator:"fat"};Object.defineProperty(s.default.OmniOscillator.prototype,"sourceType",{get:function(){return d[this._sourceType]},set:function(t){var e="sine";"pwm"!==this._oscillator.type&&"pulse"!==this._oscillator.type&&(e=this._oscillator.type),t===d.FMOscillator?this.type="fm"+e:t===d.AMOscillator?this.type="am"+e:t===d.FatOscillator?this.type="fat"+e:t===d.Oscillator?this.type=e:t===d.PulseOscillator?this.type="pulse":t===d.PWMOscillator&&(this.type="pwm")}}),Object.defineProperty(s.default.OmniOscillator.prototype,"baseType",{get:function(){return this._oscillator.baseType},set:function(t){this.sourceType!==d.PulseOscillator&&this.sourceType!==d.PWMOscillator&&(this._oscillator.baseType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"width",{get:function(){return this._sourceType===n?this._oscillator.width:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"count",{get:function(){return this._sourceType===u?this._oscillator.count:void 0},set:function(t){this._sourceType===u&&(this._oscillator.count=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"spread",{get:function(){return this._sourceType===u?this._oscillator.spread:void 0},set:function(t){this._sourceType===u&&(this._oscillator.spread=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationType",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.modulationType:void 0},set:function(t){this._sourceType!==r&&this._sourceType!==l||(this._oscillator.modulationType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationIndex",{get:function(){return this._sourceType===r?this._oscillator.modulationIndex:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"harmonicity",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.harmonicity:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationFrequency",{get:function(){return this._sourceType===o?this._oscillator.modulationFrequency:void 0}}),s.default.OmniOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.detune.dispose(),this.detune=null,this.frequency.dispose(),this.frequency=null,this._oscillator.dispose(),this._oscillator=null,this._sourceType=null,this},e.default=s.default.OmniOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(37),i(25);s.default.Synth=function(t){t=s.default.defaultArg(t,s.default.Synth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","frequency","detune","envelope"])},s.default.extend(s.default.Synth,s.default.Monophonic),s.default.Synth.defaults={oscillator:{type:"triangle"},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},s.default.Synth.prototype._triggerEnvelopeAttack=function(t,e){return this.envelope.triggerAttack(t,e),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this},s.default.Synth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release)),this},s.default.Synth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.frequency=null,this.detune=null,this},e.default=s.default.Synth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.Noise=function(){var t=s.default.defaults(arguments,["type"],s.default.Noise);s.default.Source.call(this,t),this._source=null,this._type=t.type,this._playbackRate=t.playbackRate},s.default.extend(s.default.Noise,s.default.Source),s.default.Noise.defaults={type:"white",playbackRate:1},Object.defineProperty(s.default.Noise.prototype,"type",{get:function(){return this._type},set:function(t){if(this._type!==t){if(!(t in n))throw new TypeError("Tone.Noise: invalid type: "+t);if(this._type=t,this.state===s.default.State.Started){var e=this.now();this._stop(e),this._start(e)}}}}),Object.defineProperty(s.default.Noise.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}}),s.default.Noise.prototype._start=function(t){var e=n[this._type];this._source=new s.default.BufferSource(e).connect(this.output),this._source.loop=!0,this._source.playbackRate.value=this._playbackRate,this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))},s.default.Noise.prototype._stop=function(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)},s.default.Noise.prototype.restart=function(t){return this._stop(t),this._start(t),this},s.default.Noise.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._source&&(this._source.disconnect(),this._source=null),this._buffer=null,this};var n={},o={};Object.defineProperty(n,"pink",{get:function(){if(!o.pink){for(var t=[],e=0;e<2;e++){var i,n,a,r,l,u,d,f=new Float32Array(220500);t[e]=f,i=n=a=r=l=u=d=0;for(var h=0;h<220500;h++){var c=2*Math.random()-1;i=.99886*i+.0555179*c,n=.99332*n+.0750759*c,a=.969*a+.153852*c,r=.8665*r+.3104856*c,l=.55*l+.5329522*c,u=-.7616*u-.016898*c,f[h]=i+n+a+r+l+u+d+.5362*c,f[h]*=.11,d=.115926*c}}o.pink=(new s.default.Buffer).fromArray(t)}return o.pink}}),Object.defineProperty(n,"brown",{get:function(){if(!o.brown){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0,a=0;a<220500;a++){var r=2*Math.random()-1;i[a]=(n+.02*r)/1.02,n=i[a],i[a]*=3.5}}o.brown=(new s.default.Buffer).fromArray(t)}return o.brown}}),Object.defineProperty(n,"white",{get:function(){if(!o.white){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0;n<220500;n++)i[n]=2*Math.random()-1}o.white=(new s.default.Buffer).fromArray(t)}return o.white}}),e.default=s.default.Noise},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(20),i(1);s.default.Master=function(){s.default.AudioNode.call(this),s.default.getContext(function(){this.createInsOuts(1,0),this._volume=this.output=new s.default.Volume,this.volume=this._volume.volume,this._readOnly("volume"),s.default.connectSeries(this.input,this.output,this.context.destination),this.context.master=this}.bind(this))},s.default.extend(s.default.Master,s.default.AudioNode),s.default.Master.defaults={volume:0,mute:!1},s.default.Master.prototype.isMaster=!0,Object.defineProperty(s.default.Master.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Master.prototype.chain=function(){this.input.disconnect();var t=Array.from(arguments);t.unshift(this.input),t.push(this.output),s.default.connectSeries.apply(void 0,t)},s.default.Master.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null},s.default.AudioNode.prototype.toMaster=function(){return this.connect(this.context.master),this};var n=s.default.Master;s.default.Master=new n,s.default.Context.on("init",function(t){t.master&&t.master.isMaster?s.default.Master=t.master:s.default.Master=new n}),s.default.Context.on("close",function(t){t.master&&t.master.isMaster&&t.master.dispose()}),e.default=s.default.Master},function(t,e,i){"use strict";i.r(e);var s=i(0);i(86),i(47);s.default.FrequencyEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);t=s.default.defaultArg(t,s.default.FrequencyEnvelope.defaults),s.default.ScaledEnvelope.call(this,t),this._octaves=t.octaves,this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this.exponent=t.exponent},s.default.extend(s.default.FrequencyEnvelope,s.default.Envelope),s.default.FrequencyEnvelope.defaults={baseFrequency:200,octaves:4,exponent:1},Object.defineProperty(s.default.FrequencyEnvelope.prototype,"baseFrequency",{get:function(){return this._scale.min},set:function(t){this._scale.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._scale.max=this.baseFrequency*Math.pow(2,t)}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.FrequencyEnvelope.prototype.dispose=function(){return s.default.ScaledEnvelope.prototype.dispose.call(this),this},e.default=s.default.FrequencyEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(26),i(61);s.default.ScaleExp=function(t,e,i){s.default.SignalBase.call(this),this._scale=this.output=new s.default.Scale(t,e),this._exp=this.input=new s.default.Pow(s.default.defaultArg(i,2)),this._exp.connect(this._scale)},s.default.extend(s.default.ScaleExp,s.default.SignalBase),Object.defineProperty(s.default.ScaleExp.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),s.default.ScaleExp.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaleExp},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Compressor=function(){var t=s.default.defaults(arguments,["threshold","ratio"],s.default.Compressor);s.default.AudioNode.call(this),this._compressor=this.input=this.output=this.context.createDynamicsCompressor(),this.threshold=new s.default.Param({param:this._compressor.threshold,units:s.default.Type.Decibels,convert:!1}),this.attack=new s.default.Param(this._compressor.attack,s.default.Type.Time),this.release=new s.default.Param(this._compressor.release,s.default.Type.Time),this.knee=new s.default.Param({param:this._compressor.knee,units:s.default.Type.Decibels,convert:!1}),this.ratio=new s.default.Param({param:this._compressor.ratio,convert:!1}),this._readOnly(["knee","release","attack","ratio","threshold"]),this.set(t)},s.default.extend(s.default.Compressor,s.default.AudioNode),s.default.Compressor.defaults={ratio:12,threshold:-24,release:.25,attack:.003,knee:30},s.default.Compressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["knee","release","attack","ratio","threshold"]),this._compressor.disconnect(),this._compressor=null,this.attack.dispose(),this.attack=null,this.release.dispose(),this.release=null,this.threshold.dispose(),this.threshold=null,this.ratio.dispose(),this.ratio=null,this.knee.dispose(),this.knee=null,this},e.default=s.default.Compressor},function(t,e,i){"use strict";var s=i(0);i(92);if(s.default.supported){!s.default.global.hasOwnProperty("AudioContext")&&s.default.global.hasOwnProperty("webkitAudioContext")&&(s.default.global.AudioContext=s.default.global.webkitAudioContext),AudioContext.prototype.close||(AudioContext.prototype.close=function(){return s.default.isFunction(this.suspend)&&this.suspend(),Promise.resolve()}),AudioContext.prototype.resume||(AudioContext.prototype.resume=function(){var t=this.createBuffer(1,1,this.sampleRate),e=this.createBufferSource();return e.buffer=t,e.connect(this.destination),e.start(0),Promise.resolve()}),!AudioContext.prototype.createGain&&AudioContext.prototype.createGainNode&&(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),!AudioContext.prototype.createDelay&&AudioContext.prototype.createDelayNode&&(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode);var n=!1,o=new OfflineAudioContext(1,1,44100),a=new Uint32Array([1179011410,48,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,8,0,0,0,0]).buffer;try{var r=o.decodeAudioData(a);r&&s.default.isFunction(r.then)&&(n=!0)}catch(t){n=!1}n||(AudioContext.prototype._native_decodeAudioData=AudioContext.prototype.decodeAudioData,AudioContext.prototype.decodeAudioData=function(t){return new Promise(function(e,i){this._native_decodeAudioData(t,e,i)}.bind(this))})}},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63);s.default.TransportTime=function(t,e){if(!(this instanceof s.default.TransportTime))return new s.default.TransportTime(t,e);s.default.Time.call(this,t,e)},s.default.extend(s.default.TransportTime,s.default.Time),s.default.TransportTime.prototype._now=function(){return s.default.Transport.seconds},e.default=s.default.TransportTime},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62);s.default.Frequency=function(t,e){if(!(this instanceof s.default.Frequency))return new s.default.Frequency(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Frequency,s.default.TimeBase),s.default.Frequency.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method:function(t){return"midi"===this._defaultUnits?t:s.default.Frequency.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method:function(t,e){var i=n[t.toLowerCase()]+12*(parseInt(e)+1);return"midi"===this._defaultUnits?i:s.default.Frequency.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method:function(t,e,i){var s=1;return t&&"0"!==t&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s*=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s*=this._beatsToUnits(parseFloat(i)/4)),s}}}),s.default.Frequency.prototype.transpose=function(t){return new this.constructor(this.valueOf()*s.default.intervalToFrequencyRatio(t))},s.default.Frequency.prototype.harmonize=function(t){return t.map(function(t){return this.transpose(t)}.bind(this))},s.default.Frequency.prototype.toMidi=function(){return s.default.Frequency.ftom(this.valueOf())},s.default.Frequency.prototype.toNote=function(){var t=this.toFrequency(),e=Math.log2(t/s.default.Frequency.A4),i=Math.round(12*e)+57,n=Math.floor(i/12);return n<0&&(i+=-12*n),o[i%12]+n.toString()},s.default.Frequency.prototype.toSeconds=function(){return 1/s.default.TimeBase.prototype.toSeconds.call(this)},s.default.Frequency.prototype.toFrequency=function(){return s.default.TimeBase.prototype.toFrequency.call(this)},s.default.Frequency.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*s.default.Transport.PPQ)},s.default.Frequency.prototype._noArg=function(){return 0},s.default.Frequency.prototype._frequencyToUnits=function(t){return t},s.default.Frequency.prototype._ticksToUnits=function(t){return 1/(60*t/(s.default.Transport.bpm.value*s.default.Transport.PPQ))},s.default.Frequency.prototype._beatsToUnits=function(t){return 1/s.default.TimeBase.prototype._beatsToUnits.call(this,t)},s.default.Frequency.prototype._secondsToUnits=function(t){return 1/t},s.default.Frequency.prototype._defaultUnits="hz";var n={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},o=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];s.default.Frequency.A4=440,s.default.Frequency.mtof=function(t){return s.default.Frequency.A4*Math.pow(2,(t-69)/12)},s.default.Frequency.ftom=function(t){return 69+Math.round(12*Math.log2(t/s.default.Frequency.A4))},e.default=s.default.Frequency},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(61),i(4),i(1);s.default.Envelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.AudioNode.call(this),this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this._attackCurve="linear",this._releaseCurve="exponential",this._sig=this.output=new s.default.Signal(0),this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve},s.default.extend(s.default.Envelope,s.default.AudioNode),s.default.Envelope.defaults={attack:.01,decay:.1,sustain:.5,release:1,attackCurve:"linear",decayCurve:"exponential",releaseCurve:"exponential"},Object.defineProperty(s.default.Envelope.prototype,"value",{get:function(){return this.getValueAtTime(this.now())}}),s.default.Envelope.prototype._getCurve=function(t,e){if(s.default.isString(t))return t;if(s.default.isArray(t))for(var i in s.default.Envelope.Type)if(s.default.Envelope.Type[i][e]===t)return i},s.default.Envelope.prototype._setCurve=function(t,e,i){if(s.default.Envelope.Type.hasOwnProperty(i)){var n=s.default.Envelope.Type[i];s.default.isObject(n)?this[t]=n[e]:this[t]=n}else{if(!s.default.isArray(i))throw new Error("Tone.Envelope: invalid curve: "+i);this[t]=i}},Object.defineProperty(s.default.Envelope.prototype,"attackCurve",{get:function(){return this._getCurve(this._attackCurve,"In")},set:function(t){this._setCurve("_attackCurve","In",t)}}),Object.defineProperty(s.default.Envelope.prototype,"releaseCurve",{get:function(){return this._getCurve(this._releaseCurve,"Out")},set:function(t){this._setCurve("_releaseCurve","Out",t)}}),Object.defineProperty(s.default.Envelope.prototype,"decayCurve",{get:function(){return this._decayCurve},set:function(t){if(!["linear","exponential"].includes(t))throw new Error("Tone.Envelope: invalid curve: "+t);this._decayCurve=t}}),s.default.Envelope.prototype.triggerAttack=function(t,e){this.log("triggerAttack",t,e),t=this.toSeconds(t);var i=this.toSeconds(this.attack),n=this.toSeconds(this.decay);e=s.default.defaultArg(e,1);var o=this.getValueAtTime(t);o>0&&(i=(1-o)/(1/i));if(0===i)this._sig.setValueAtTime(e,t);else if("linear"===this._attackCurve)this._sig.linearRampTo(e,i,t);else if("exponential"===this._attackCurve)this._sig.targetRampTo(e,i,t);else if(i>0){this._sig.cancelAndHoldAtTime(t);for(var a=this._attackCurve,r=1;r<a.length;r++)if(a[r-1]<=o&&o<=a[r]){(a=this._attackCurve.slice(r))[0]=o;break}this._sig.setValueCurveAtTime(a,t,i,e)}if(n){var l=e*this.sustain,u=t+i;this.log("decay",u),"linear"===this._decayCurve?this._sig.linearRampTo(l,n,u+this.sampleTime):"exponential"===this._decayCurve&&this._sig.exponentialApproachValueAtTime(l,u,n)}return this},s.default.Envelope.prototype.triggerRelease=function(t){this.log("triggerRelease",t),t=this.toSeconds(t);var e=this.getValueAtTime(t);if(e>0){var i=this.toSeconds(this.release);if("linear"===this._releaseCurve)this._sig.linearRampTo(0,i,t);else if("exponential"===this._releaseCurve)this._sig.targetRampTo(0,i,t);else{var n=this._releaseCurve;s.default.isArray(n)&&(this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(n,t,i,e))}}return this},s.default.Envelope.prototype.getValueAtTime=function(t){return this._sig.getValueAtTime(t)},s.default.Envelope.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),this.triggerAttack(e,i),this.triggerRelease(e+this.toSeconds(t)),this},s.default.Envelope.prototype.cancel=function(t){return this._sig.cancelScheduledValues(t),this},s.default.Envelope.prototype.connect=s.default.SignalBase.prototype.connect,function(){var t,e,i=[];for(t=0;t<128;t++)i[t]=Math.sin(t/127*(Math.PI/2));var n=[];for(t=0;t<127;t++){e=t/127;var o=Math.sin(e*(2*Math.PI)*6.4-Math.PI/2)+1;n[t]=o/10+.83*e}n[127]=1;var a=[];for(t=0;t<128;t++)a[t]=Math.ceil(t/127*5)/5;var r=[];for(t=0;t<128;t++)e=t/127,r[t]=.5*(1-Math.cos(Math.PI*e));var l,u=[];for(t=0;t<128;t++){e=t/127;var d=4*Math.pow(e,3)+.2,f=Math.cos(d*Math.PI*2*e);u[t]=Math.abs(f*(1-e))}function h(t){for(var e=new Array(t.length),i=0;i<t.length;i++)e[i]=1-t[i];return e}s.default.Envelope.Type={linear:"linear",exponential:"exponential",bounce:{In:h(u),Out:u},cosine:{In:i,Out:(l=i,l.slice(0).reverse())},step:{In:a,Out:h(a)},ripple:{In:n,Out:h(n)},sine:{In:r,Out:h(r)}}}(),s.default.Envelope.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._sig.dispose(),this._sig=null,this._attackCurve=null,this._releaseCurve=null,this},e.default=s.default.Envelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(7),i(28),i(3),i(2),i(20);if(s.default.supported&&!s.default.global.AudioContext.prototype.createStereoPanner){var n=function(t){this.context=t,this.pan=new s.default.Signal(0,s.default.Type.AudioRange);var e=new s.default.WaveShaper(function(t){return s.default.equalPowerScale((t+1)/2)},4096),i=new s.default.WaveShaper(function(t){return s.default.equalPowerScale(1-(t+1)/2)},4096),n=new s.default.Gain,o=new s.default.Gain,a=this.input=new s.default.Split;a._splitter.channelCountMode="explicit",(new s.default.Zero).fan(e,i);var r=this.output=new s.default.Merge;a.left.chain(n,r.left),a.right.chain(o,r.right),this.pan.chain(i,n.gain),this.pan.chain(e,o.gain)};n.prototype.disconnect=function(){this.output.disconnect.apply(this.output,arguments)},n.prototype.connect=function(){this.output.connect.apply(this.output,arguments)},AudioContext.prototype.createStereoPanner=function(){return new n(this)},s.default.Context.prototype.createStereoPanner=function(){return new n(this)}}i(22),i(1);s.default.Panner=function(){var t=s.default.defaults(arguments,["pan"],s.default.Panner);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createStereoPanner(),this.pan=this._panner.pan,this.pan.value=t.pan,this._readOnly("pan")},s.default.extend(s.default.Panner,s.default.AudioNode),s.default.Panner.defaults={pan:0},s.default.Panner.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("pan"),this._panner.disconnect(),this._panner=null,this.pan=null,this};e.default=s.default.Panner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.FMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=this._carrier.detune,this.detune.value=t.detune,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),this.phase=t.phase,this._readOnly(["modulationIndex","frequency","detune","harmonicity"])},s.default.extend(s.default.FMOscillator,s.default.Source),s.default.FMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationIndex:2,modulationType:"square",harmonicity:1},s.default.FMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.FMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.FMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.FMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.FMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["modulationIndex","frequency","detune","harmonicity"]),this.frequency.dispose(),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this.modulationIndex.dispose(),this.modulationIndex=null,this},e.default=s.default.FMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(2),i(7),i(3);s.default.PulseOscillator=function(){var t=s.default.defaults(arguments,["frequency","width"],s.default.Oscillator);s.default.Source.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._widthGate=new s.default.Gain(0),this._sawtooth=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,type:"sawtooth",phase:t.phase}),this.frequency=this._sawtooth.frequency,this.detune=this._sawtooth.detune,this._thresh=new s.default.WaveShaper(function(t){return t<0?-1:1}),this._sawtooth.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),this._readOnly(["width","frequency","detune"])},s.default.extend(s.default.PulseOscillator,s.default.Source),s.default.PulseOscillator.defaults={frequency:440,detune:0,phase:0,width:.2},s.default.PulseOscillator.prototype._start=function(t){t=this.toSeconds(t),this._sawtooth.start(t),this._widthGate.gain.setValueAtTime(1,t)},s.default.PulseOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._sawtooth.stop(t),this._widthGate.gain.setValueAtTime(0,t)},s.default.PulseOscillator.prototype.restart=function(t){this._sawtooth.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)},Object.defineProperty(s.default.PulseOscillator.prototype,"phase",{get:function(){return this._sawtooth.phase},set:function(t){this._sawtooth.phase=t}}),Object.defineProperty(s.default.PulseOscillator.prototype,"type",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"baseType",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"partials",{get:function(){return[]}}),s.default.PulseOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._sawtooth.dispose(),this._sawtooth=null,this._writable(["width","frequency","detune"]),this.width.dispose(),this.width=null,this._widthGate.dispose(),this._widthGate=null,this._thresh.dispose(),this._thresh=null,this.frequency=null,this.detune=null,this},e.default=s.default.PulseOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(4),i(34);s.default.Event=function(){var t=s.default.defaults(arguments,["callback","value"],s.default.Event);s.default.call(this),this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._state=new s.default.TimelineState(s.default.State.Stopped),this._playbackRate=1,this._startOffset=0,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this.playbackRate=t.playbackRate},s.default.extend(s.default.Event),s.default.Event.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,value:null,probability:1,mute:!1,humanize:!1},s.default.Event.prototype._rescheduleEvents=function(t){return t=s.default.defaultArg(t,-1),this._state.forEachFrom(t,function(t){var e;if(t.state===s.default.State.Started){s.default.isDefined(t.id)&&s.default.Transport.clear(t.id);var i=t.time+Math.round(this.startOffset/this._playbackRate);if(!0===this._loop||s.default.isNumber(this._loop)&&this._loop>1){e=1/0,s.default.isNumber(this._loop)&&(e=this._loop*this._getLoopDuration());var n=this._state.getAfter(i);null!==n&&(e=Math.min(e,n.time-i)),e!==1/0&&(this._state.setStateAtTime(s.default.State.Stopped,i+e+1),e=s.default.Ticks(e));var o=s.default.Ticks(this._getLoopDuration());t.id=s.default.Transport.scheduleRepeat(this._tick.bind(this),o,s.default.Ticks(i),e)}else t.id=s.default.Transport.schedule(this._tick.bind(this),s.default.Ticks(i))}}.bind(this)),this},Object.defineProperty(s.default.Event.prototype,"state",{get:function(){return this._state.getValueAtTime(s.default.Transport.ticks)}}),Object.defineProperty(s.default.Event.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t}}),Object.defineProperty(s.default.Event.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t}}),Object.defineProperty(s.default.Event.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t}}),s.default.Event.prototype.start=function(t){return t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Stopped&&(this._state.add({state:s.default.State.Started,time:t,id:void 0}),this._rescheduleEvents(t)),this},s.default.Event.prototype.stop=function(t){if(this.cancel(t),t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Started){this._state.setStateAtTime(s.default.State.Stopped,t);var e=this._state.getBefore(t),i=t;null!==e&&(i=e.time),this._rescheduleEvents(i)}return this},s.default.Event.prototype.cancel=function(t){return t=s.default.defaultArg(t,-1/0),t=this.toTicks(t),this._state.forEachFrom(t,function(t){s.default.Transport.clear(t.id)}),this._state.cancel(t),this},s.default.Event.prototype._tick=function(t){var e=s.default.Transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)===s.default.State.Started){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){var i=.02;s.default.isBoolean(this.humanize)||(i=this.toSeconds(this.humanize)),t+=(2*Math.random()-1)*i}this.callback(t,this.value)}},s.default.Event.prototype._getLoopDuration=function(){return Math.round((this._loopEnd-this._loopStart)/this._playbackRate)},Object.defineProperty(s.default.Event.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"progress",{get:function(){if(this._loop){var t=s.default.Transport.ticks,e=this._state.get(t);if(null!==e&&e.state===s.default.State.Started){var i=this._getLoopDuration();return(t-e.time)%i/i}return 0}return 0}}),s.default.Event.prototype.dispose=function(){this.cancel(),this._state.dispose(),this._state=null,this.callback=null,this.value=null},e.default=s.default.Event},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(29),i(10),i(3),i(1);s.default.MidSideMerge=function(){s.default.AudioNode.call(this),this.createInsOuts(2,0),this.mid=this.input[0]=new s.default.Gain,this._left=new s.default.Add,this._timesTwoLeft=new s.default.Multiply(Math.SQRT1_2),this.side=this.input[1]=new s.default.Gain,this._right=new s.default.Subtract,this._timesTwoRight=new s.default.Multiply(Math.SQRT1_2),this._merge=this.output=new s.default.Merge,this.mid.connect(this._left,0,0),this.side.connect(this._left,0,1),this.mid.connect(this._right,0,0),this.side.connect(this._right,0,1),this._left.connect(this._timesTwoLeft),this._right.connect(this._timesTwoRight),this._timesTwoLeft.connect(this._merge,0,0),this._timesTwoRight.connect(this._merge,0,1)},s.default.extend(s.default.MidSideMerge,s.default.AudioNode),s.default.MidSideMerge.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._left.dispose(),this._left=null,this._timesTwoLeft.dispose(),this._timesTwoLeft=null,this._right.dispose(),this._right=null,this._timesTwoRight.dispose(),this._timesTwoRight=null,this._merge.dispose(),this._merge=null,this},e.default=s.default.MidSideMerge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(13),i(2),i(19),i(1);s.default.MidSideSplit=function(){s.default.AudioNode.call(this),this.createInsOuts(0,2),this._split=this.input=new s.default.Split,this._midAdd=new s.default.Add,this.mid=this.output[0]=new s.default.Multiply(Math.SQRT1_2),this._sideSubtract=new s.default.Subtract,this.side=this.output[1]=new s.default.Multiply(Math.SQRT1_2),this._split.connect(this._midAdd,0,0),this._split.connect(this._midAdd,1,1),this._split.connect(this._sideSubtract,0,0),this._split.connect(this._sideSubtract,1,1),this._midAdd.connect(this.mid),this._sideSubtract.connect(this.side)},s.default.extend(s.default.MidSideSplit,s.default.AudioNode),s.default.MidSideSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midAdd.dispose(),this._midAdd=null,this._sideSubtract.dispose(),this._sideSubtract=null,this._split.dispose(),this._split=null,this},e.default=s.default.MidSideSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(9),i(1),i(59);s.default.LowpassCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance","dampening"],s.default.LowpassCombFilter);s.default.AudioNode.call(this),this._combFilter=this.output=new s.default.FeedbackCombFilter(t.delayTime,t.resonance),this.delayTime=this._combFilter.delayTime,this._lowpass=this.input=new s.default.Filter({frequency:t.dampening,type:"lowpass",Q:0,rolloff:-12}),this.dampening=this._lowpass.frequency,this.resonance=this._combFilter.resonance,this._lowpass.connect(this._combFilter),this._readOnly(["dampening","resonance","delayTime"])},s.default.extend(s.default.LowpassCombFilter,s.default.AudioNode),s.default.LowpassCombFilter.defaults={delayTime:.1,resonance:.5,dampening:3e3},s.default.LowpassCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["dampening","resonance","delayTime"]),this._combFilter.dispose(),this._combFilter=null,this.resonance=null,this.delayTime=null,this._lowpass.dispose(),this._lowpass=null,this.dampening=null,this},e.default=s.default.LowpassCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(45);s.default.Ticks=function(t,e){if(!(this instanceof s.default.Ticks))return new s.default.Ticks(t,e);s.default.TransportTime.call(this,t,e)},s.default.extend(s.default.Ticks,s.default.TransportTime),s.default.Ticks.prototype._defaultUnits="i",s.default.Ticks.prototype._now=function(){return s.default.Transport.ticks},s.default.Ticks.prototype._beatsToUnits=function(t){return this._getPPQ()*t},s.default.Ticks.prototype._secondsToUnits=function(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())},s.default.Ticks.prototype._ticksToUnits=function(t){return t},s.default.Ticks.prototype.toTicks=function(){return this.valueOf()},s.default.Ticks.prototype.toSeconds=function(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())},e.default=s.default.Ticks},function(t,e,i){"use strict";i.r(e);var s=i(0);i(55);s.default.TransportEvent=function(t,e){e=s.default.defaultArg(e,s.default.TransportEvent.defaults),s.default.call(this),this.Transport=t,this.id=s.default.TransportEvent._eventId++,this.time=s.default.Ticks(e.time),this.callback=e.callback,this._once=e.once},s.default.extend(s.default.TransportEvent),s.default.TransportEvent.defaults={once:!1,callback:s.default.noOp},s.default.TransportEvent._eventId=0,s.default.TransportEvent.prototype.invoke=function(t){this.callback&&(this.callback(t),this._once&&this.Transport&&this.Transport.clear(this.id))},s.default.TransportEvent.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this.Transport=null,this.callback=null,this.time=null,this},e.default=s.default.TransportEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(82),i(34),i(24),i(14);s.default.TickSource=function(){var t=s.default.defaults(arguments,["frequency"],s.default.TickSource);this.frequency=new s.default.TickSignal(t.frequency),this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._tickOffset=new s.default.Timeline,this.setTicksAtTime(0,0)},s.default.extend(s.default.TickSource),s.default.TickSource.defaults={frequency:1},Object.defineProperty(s.default.TickSource.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.TickSource.prototype.start=function(t,e){return t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),s.default.isDefined(e)&&this.setTicksAtTime(e,t)),this},s.default.TickSource.prototype.stop=function(t){if(t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Stopped){var e=this._state.get(t);e.time>0&&(this._tickOffset.cancel(e.time),this._state.cancel(e.time))}return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this.setTicksAtTime(0,t),this},s.default.TickSource.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&this._state.setStateAtTime(s.default.State.Paused,t),this},s.default.TickSource.prototype.cancel=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this},s.default.TickSource.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.ticks,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=this.frequency.getTicksAtTime(t.time)-this.frequency.getTicksAtTime(e)),n=t}.bind(this)),this._state.remove(i),o},Object.defineProperty(s.default.TickSource.prototype,"ticks",{get:function(){return this.getTicksAtTime(this.now())},set:function(t){this.setTicksAtTime(t,this.now())}}),Object.defineProperty(s.default.TickSource.prototype,"seconds",{get:function(){return this.getSecondsAtTime(this.now())},set:function(t){var e=this.now(),i=this.frequency.timeToTicks(t,e);this.setTicksAtTime(i,e)}}),s.default.TickSource.prototype.getSecondsAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.seconds,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=t.time-e),n=t}.bind(this)),this._state.remove(i),o},s.default.TickSource.prototype.setTicksAtTime=function(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({time:e,ticks:t,seconds:this.frequency.getDurationOfTicks(t,e)}),this},s.default.TickSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.TickSource.prototype.getTimeOfTick=function(t,e){e=s.default.defaultArg(e,this.now());var i=this._tickOffset.get(e),n=this._state.get(e),o=Math.max(i.time,n.time),a=this.frequency.getTicksAtTime(o)+t-i.ticks;return this.frequency.getTimeOfTick(a)},s.default.TickSource.prototype.forEachTickBetween=function(t,e,i){var n=this._state.get(t);if(this._state.forEachBetween(t,e,function(e){n.state===s.default.State.Started&&e.state!==s.default.State.Started&&this.forEachTickBetween(Math.max(n.time,t),e.time-this.sampleTime,i),n=e}.bind(this)),t=Math.max(n.time,t),n.state===s.default.State.Started&&this._state){var o=this.frequency.getTicksAtTime(t),a=(o-this.frequency.getTicksAtTime(n.time))%1;0!==a&&(a=1-a);for(var r=this.frequency.getTimeOfTick(o+a),l=null;r<e&&this._state;){try{i(r,Math.round(this.getTicksAtTime(r)))}catch(t){l=t;break}this._state&&(r+=this.frequency.getDurationOfTicks(1,r))}}if(l)throw l;return this},s.default.TickSource.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._state.dispose(),this._state=null,this._tickOffset.dispose(),this._tickOffset=null,this._writable("frequency"),this.frequency.dispose(),this.frequency=null,this},e.default=s.default.TickSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(87),i(13),i(2),i(4),i(18),i(1);s.default.Follower=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Follower);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._abs=new s.default.Abs,this._filter=this.context.createBiquadFilter(),this._filter.type="lowpass",this._filter.frequency.value=0,this._filter.Q.value=0,this._sub=new s.default.Subtract,this._delay=new s.default.Delay(this.blockTime),this._smoothing=t.smoothing,s.default.connect(this.input,this._delay),s.default.connect(this.input,this._sub,0,1),this._sub.chain(this._abs,this._filter,this.output),this.smoothing=t.smoothing},s.default.extend(s.default.Follower,s.default.AudioNode),s.default.Follower.defaults={smoothing:.05},Object.defineProperty(s.default.Follower.prototype,"smoothing",{get:function(){return this._smoothing},set:function(t){this._smoothing=t,this._filter.frequency.value=.5*s.default.Time(t).toFrequency()}}),s.default.Follower.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Follower.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._filter.disconnect(),this._filter=null,this._delay.dispose(),this._delay=null,this._sub.disconnect(),this._sub=null,this._abs.dispose(),this._abs=null,this},e.default=s.default.Follower},function(t,e,i){"use strict";i.r(e);var s=i(0);i(42),i(2),i(14),i(18),i(3),i(1);s.default.FeedbackCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance"],s.default.FeedbackCombFilter);s.default.AudioNode.call(this),this._delay=this.input=this.output=new s.default.Delay(t.delayTime),this.delayTime=this._delay.delayTime,this._feedback=new s.default.Gain(t.resonance,s.default.Type.NormalRange),this.resonance=this._feedback.gain,this._delay.chain(this._feedback,this._delay),this._readOnly(["resonance","delayTime"])},s.default.extend(s.default.FeedbackCombFilter,s.default.AudioNode),s.default.FeedbackCombFilter.defaults={delayTime:.1,resonance:.5},s.default.FeedbackCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["resonance","delayTime"]),this._delay.dispose(),this._delay=null,this.delayTime=null,this._feedback.dispose(),this._feedback=null,this.resonance=null,this},e.default=s.default.FeedbackCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(9),i(2),i(3),i(1);s.default.MultibandSplit=function(){var t=s.default.defaults(arguments,["lowFrequency","highFrequency"],s.default.MultibandSplit);s.default.AudioNode.call(this),this.input=new s.default.Gain,this.output=new Array(3),this.low=this.output[0]=new s.default.Filter(0,"lowpass"),this._lowMidFilter=new s.default.Filter(0,"highpass"),this.mid=this.output[1]=new s.default.Filter(0,"lowpass"),this.high=this.output[2]=new s.default.Filter(0,"highpass"),this.lowFrequency=new s.default.Signal(t.lowFrequency,s.default.Type.Frequency),this.highFrequency=new s.default.Signal(t.highFrequency,s.default.Type.Frequency),this.Q=new s.default.Signal(t.Q),this.input.fan(this.low,this.high),this.input.chain(this._lowMidFilter,this.mid),this.lowFrequency.connect(this.low.frequency),this.lowFrequency.connect(this._lowMidFilter.frequency),this.highFrequency.connect(this.mid.frequency),this.highFrequency.connect(this.high.frequency),this.Q.connect(this.low.Q),this.Q.connect(this._lowMidFilter.Q),this.Q.connect(this.mid.Q),this.Q.connect(this.high.Q),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandSplit,s.default.AudioNode),s.default.MultibandSplit.defaults={lowFrequency:400,highFrequency:2500,Q:1},s.default.MultibandSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.low=null,this._lowMidFilter.dispose(),this._lowMidFilter=null,this.mid.dispose(),this.mid=null,this.high.dispose(),this.high=null,this.lowFrequency.dispose(),this.lowFrequency=null,this.highFrequency.dispose(),this.highFrequency=null,this.Q.dispose(),this.Q=null,this},e.default=s.default.MultibandSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.Pow=function(t){s.default.SignalBase.call(this),this._exp=s.default.defaultArg(t,1),this._expScaler=this.input=this.output=new s.default.WaveShaper(this._expFunc(this._exp),8192)},s.default.extend(s.default.Pow,s.default.SignalBase),Object.defineProperty(s.default.Pow.prototype,"value",{get:function(){return this._exp},set:function(t){this._exp=t,this._expScaler.setMap(this._expFunc(this._exp))}}),s.default.Pow.prototype._expFunc=function(t){return function(e){return Math.pow(Math.abs(e),t)}},s.default.Pow.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._expScaler.dispose(),this._expScaler=null,this},e.default=s.default.Pow},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.TimeBase=function(t,e){if(!(this instanceof s.default.TimeBase))return new s.default.TimeBase(t,e);if(this._val=t,this._units=e,s.default.isUndef(this._units)&&s.default.isString(this._val)&&parseFloat(this._val)==this._val&&"+"!==this._val.charAt(0))this._val=parseFloat(this._val),this._units=this._defaultUnits;else if(t&&t.constructor===this.constructor)this._val=t._val,this._units=t._units;else if(t instanceof s.default.TimeBase)switch(this._defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break;default:throw new Error("Unrecognized default units "+this._defaultUnits)}},s.default.extend(s.default.TimeBase),s.default.TimeBase.prototype._expressions={n:{regexp:/^(\d+)n(\.?)$/i,method:function(t,e){t=parseInt(t);var i="."===e?1.5:1;return 1===t?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/t)*i}},t:{regexp:/^(\d+)t$/i,method:function(t){return t=parseInt(t),this._beatsToUnits(8/(3*parseInt(t)))}},m:{regexp:/^(\d+)m$/i,method:function(t){return this._beatsToUnits(parseInt(t)*this._getTimeSignature())}},i:{regexp:/^(\d+)i$/i,method:function(t){return this._ticksToUnits(parseInt(t))}},hz:{regexp:/^(\d+(?:\.\d+)?)hz$/i,method:function(t){return this._frequencyToUnits(parseFloat(t))}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,method:function(t,e,i){var s=0;return t&&"0"!==t&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s+=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s+=this._beatsToUnits(parseFloat(i)/4)),s}},s:{regexp:/^(\d+(?:\.\d+)?)s$/,method:function(t){return this._secondsToUnits(parseFloat(t))}},samples:{regexp:/^(\d+)samples$/,method:function(t){return parseInt(t)/this.context.sampleRate}},default:{regexp:/^(\d+(?:\.\d+)?)$/,method:function(t){return this._expressions[this._defaultUnits].method.call(this,t)}}},s.default.TimeBase.prototype._defaultUnits="s",s.default.TimeBase.prototype._getBpm=function(){return s.default.Transport?s.default.Transport.bpm.value:120},s.default.TimeBase.prototype._getTimeSignature=function(){return s.default.Transport?s.default.Transport.timeSignature:4},s.default.TimeBase.prototype._getPPQ=function(){return s.default.Transport?s.default.Transport.PPQ:192},s.default.TimeBase.prototype._now=function(){return this.now()},s.default.TimeBase.prototype._frequencyToUnits=function(t){return 1/t},s.default.TimeBase.prototype._beatsToUnits=function(t){return 60/this._getBpm()*t},s.default.TimeBase.prototype._secondsToUnits=function(t){return t},s.default.TimeBase.prototype._ticksToUnits=function(t){return t*(this._beatsToUnits(1)/this._getPPQ())},s.default.TimeBase.prototype._noArg=function(){return this._now()},s.default.TimeBase.prototype.valueOf=function(){if(s.default.isUndef(this._val))return this._noArg();if(s.default.isString(this._val)&&s.default.isUndef(this._units)){for(var t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(s.default.isObject(this._val)){var e=0;for(var i in this._val){var n=this._val[i];e+=new this.constructor(i).valueOf()*n}return e}if(s.default.isDefined(this._units)){var o=this._expressions[this._units],a=this._val.toString().trim().match(o.regexp);return a?o.method.apply(this,a.slice(1)):o.method.call(this,parseFloat(this._val))}return this._val},s.default.TimeBase.prototype.toSeconds=function(){return this.valueOf()},s.default.TimeBase.prototype.toFrequency=function(){return 1/this.toSeconds()},s.default.TimeBase.prototype.toSamples=function(){return this.toSeconds()*this.context.sampleRate},s.default.TimeBase.prototype.toMilliseconds=function(){return 1e3*this.toSeconds()},s.default.TimeBase.prototype.dispose=function(){this._val=null,this._units=null},e.default=s.default.TimeBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62),i(46);s.default.Time=function(t,e){if(!(this instanceof s.default.Time))return new s.default.Time(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Time,s.default.TimeBase),s.default.Time.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{quantize:{regexp:/^@(.+)/,method:function(t){if(s.default.Transport){var e=new this.constructor(t);return this._secondsToUnits(s.default.Transport.nextSubdivision(e))}return 0}},now:{regexp:/^\+(.+)/,method:function(t){return this._now()+new this.constructor(t)}}}),s.default.Time.prototype.quantize=function(t,e){e=s.default.defaultArg(e,1);var i=new this.constructor(t),n=this.valueOf();return n+(Math.round(n/i)*i-n)*e},s.default.Time.prototype.toNotation=function(){for(var t=this.toSeconds(),e=["1m"],i=1;i<8;i++){var n=Math.pow(2,i);e.push(n+"n."),e.push(n+"n"),e.push(n+"t")}e.push("0");var o=e[0],a=s.default.Time(e[0]).toSeconds();return e.forEach(function(e){var i=s.default.Time(e).toSeconds();Math.abs(i-t)<Math.abs(a-t)&&(o=e,a=i)}),o},s.default.Time.prototype.toBarsBeatsSixteenths=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;e=parseFloat(e.toFixed(4));var i=Math.floor(e/this._getTimeSignature()),s=e%1*4;return e=Math.floor(e)%this._getTimeSignature(),(s=s.toString()).length>3&&(s=parseFloat(parseFloat(s).toFixed(3))),[i,e,s].join(":")},s.default.Time.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.round(e*this._getPPQ())},s.default.Time.prototype.toSeconds=function(){return this.valueOf()},s.default.Time.prototype.toMidi=function(){return s.default.Frequency.ftom(this.toFrequency())},e.default=s.default.Time},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.supported&&(OscillatorNode.prototype.setPeriodicWave||(OscillatorNode.prototype.setPeriodicWave=OscillatorNode.prototype.setWaveTable),AudioContext.prototype.createPeriodicWave||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable)),s.default.OscillatorNode=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OscillatorNode);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._oscillator=this.context.createOscillator(),s.default.connect(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new s.default.Param({param:this._oscillator.frequency,units:s.default.Type.Frequency,value:t.frequency}),this.detune=new s.default.Param({param:this._oscillator.detune,units:s.default.Type.Cents,value:t.detune}),this._gain=1},s.default.extend(s.default.OscillatorNode,s.default.AudioNode),s.default.OscillatorNode.defaults={frequency:440,detune:0,type:"sine",onended:s.default.noOp},Object.defineProperty(s.default.OscillatorNode.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.OscillatorNode.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&t>=this._startTime&&(-1===this._stopTime||t<=this._stopTime)?s.default.State.Started:s.default.State.Stopped},s.default.OscillatorNode.prototype.start=function(t){if(this.log("start",t),-1!==this._startTime)throw new Error("cannot call OscillatorNode.start more than once");return this._startTime=this.toSeconds(t),this._startTime=Math.max(this._startTime,this.context.currentTime),this._oscillator.start(this._startTime),this._gainNode.gain.setValueAtTime(1,this._startTime),this},s.default.OscillatorNode.prototype.setPeriodicWave=function(t){return this._oscillator.setPeriodicWave(t),this},s.default.OscillatorNode.prototype.stop=function(t){return this.log("stop",t),this.assert(-1!==this._startTime,"'start' must be called before 'stop'"),this.cancelStop(),this._stopTime=this.toSeconds(t),this._stopTime=Math.max(this._stopTime,this.context.currentTime),this._stopTime>this._startTime?(this._gainNode.gain.setValueAtTime(0,this._stopTime),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(function(){this._oscillator.stop(this.now()),this.onended(),setTimeout(function(){this._oscillator&&(this._oscillator.disconnect(),this._gainNode.disconnect())}.bind(this),100)}.bind(this),this._stopTime-this.context.currentTime)):this._gainNode.gain.cancelScheduledValues(this._startTime),this},s.default.OscillatorNode.prototype.cancelStop=function(){return-1!==this._startTime&&(this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1),this},Object.defineProperty(s.default.OscillatorNode.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t}}),s.default.OscillatorNode.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,this.context.clearTimeout(this._timeout),s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._oscillator.disconnect(),this._oscillator=null,this._gainNode.dispose(),this._gainNode=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null),this};e.default=s.default.OscillatorNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(57),i(32);s.default.Player=function(t){var e;t instanceof s.default.Buffer&&t.loaded?(t=t.get(),e=s.default.Player.defaults):e=s.default.defaults(arguments,["url","onload"],s.default.Player),s.default.Source.call(this,e),this.autostart=e.autostart,this._buffer=new s.default.Buffer({url:e.url,onload:this._onload.bind(this,e.onload),reverse:e.reverse}),t instanceof AudioBuffer&&this._buffer.set(t),this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this._activeSources=[],this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut},s.default.extend(s.default.Player,s.default.Source),s.default.Player.defaults={onload:s.default.noOp,playbackRate:1,loop:!1,autostart:!1,loopStart:0,loopEnd:0,reverse:!1,fadeIn:0,fadeOut:0},s.default.Player.prototype.load=function(t,e){return this._buffer.load(t,this._onload.bind(this,e))},s.default.Player.prototype._onload=function(t){(t=s.default.defaultArg(t,s.default.noOp))(this),this.autostart&&this.start()},s.default.Player.prototype._onSourceEnd=function(t){var e=this._activeSources.indexOf(t);this._activeSources.splice(e,1),0!==this._activeSources.length||this._synced||this._state.setStateAtTime(s.default.State.Stopped,s.default.now())},s.default.Player.prototype._start=function(t,e,i){e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),this._synced&&(e*=this._playbackRate);var n=s.default.defaultArg(i,Math.max(this._buffer.duration-e,0));n=this.toSeconds(n),n/=this._playbackRate,t=this.toSeconds(t);var o=new s.default.BufferSource({buffer:this._buffer,loop:this._loop,loopStart:this._loopStart,loopEnd:this._loopEnd,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate,fadeIn:this.fadeIn,fadeOut:this.fadeOut}).connect(this.output);return this._loop||this._synced||this._state.setStateAtTime(s.default.State.Stopped,t+n),this._activeSources.push(o),this._loop&&s.default.isUndef(i)?o.start(t,e):o.start(t,e,n-this.toSeconds(this.fadeOut)),this},s.default.Player.prototype._stop=function(t){return t=this.toSeconds(t),this._activeSources.forEach(function(e){e.stop(t)}),this},s.default.Player.prototype.restart=function(t,e,i){return this._stop(t),this._start(t,e,i),this},s.default.Player.prototype.seek=function(t,e){return e=this.toSeconds(e),this._state.getValueAtTime(e)===s.default.State.Started&&(t=this.toSeconds(t),this._stop(e),this._start(e,t)),this},s.default.Player.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Player.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=t,this._activeSources.forEach(function(e){e.loopStart=t})}}),Object.defineProperty(s.default.Player.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=t,this._activeSources.forEach(function(e){e.loopEnd=t})}}),Object.defineProperty(s.default.Player.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.Player.prototype,"loop",{get:function(){return this._loop},set:function(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(function(e){e.loop=t}),t)){var e=this._state.getNextState(s.default.State.Stopped,this.now());e&&this._state.cancel(e.time)}}}),Object.defineProperty(s.default.Player.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t;var e=this.now(),i=this._state.getNextState(s.default.State.Stopped,e);i&&this._state.cancel(i.time),this._activeSources.forEach(function(i){i.cancelStop(),i.playbackRate.setValueAtTime(t,e)})}}),Object.defineProperty(s.default.Player.prototype,"reverse",{get:function(){return this._buffer.reverse},set:function(t){this._buffer.reverse=t}}),Object.defineProperty(s.default.Player.prototype,"loaded",{get:function(){return this._buffer.loaded}}),s.default.Player.prototype.dispose=function(){return this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,s.default.Source.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this},e.default=s.default.Player},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(37),i(2),i(9),i(25);s.default.MonoSynth=function(t){t=s.default.defaultArg(t,s.default.MonoSynth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new s.default.Filter(t.filter),this.filter.frequency.value=5e3,this.filterEnvelope=new s.default.FrequencyEnvelope(t.filterEnvelope),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),this._readOnly(["oscillator","frequency","detune","filter","filterEnvelope","envelope"])},s.default.extend(s.default.MonoSynth,s.default.Monophonic),s.default.MonoSynth.defaults={frequency:"C4",detune:0,oscillator:{type:"square"},filter:{Q:6,type:"lowpass",rolloff:-24},envelope:{attack:.005,decay:.1,sustain:.9,release:1},filterEnvelope:{attack:.06,decay:.2,sustain:.5,release:2,baseFrequency:200,octaves:7,exponent:2}},s.default.MonoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.filterEnvelope.triggerAttack(t),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.MonoSynth.prototype._triggerEnvelopeRelease=function(t){return this.envelope.triggerRelease(t),this.filterEnvelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MonoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","filter","filterEnvelope","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.filterEnvelope.dispose(),this.filterEnvelope=null,this.filter.dispose(),this.filter=null,this.frequency=null,this.detune=null,this},e.default=s.default.MonoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FatOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","spread"],s.default.FatOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._oscillators=[],this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,this._readOnly(["frequency","detune"])},s.default.extend(s.default.FatOscillator,s.default.Source),s.default.FatOscillator.defaults={frequency:440,detune:0,phase:0,spread:20,count:3,type:"sawtooth",partials:[],partialCount:0},s.default.FatOscillator.prototype._start=function(t){t=this.toSeconds(t),this._forEach(function(e){e.start(t)})},s.default.FatOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._forEach(function(e){e.stop(t)})},s.default.FatOscillator.prototype.restart=function(t){t=this.toSeconds(t),this._forEach(function(e){e.restart(t)})},s.default.FatOscillator.prototype._forEach=function(t){for(var e=0;e<this._oscillators.length;e++)t.call(this,this._oscillators[e],e)},Object.defineProperty(s.default.FatOscillator.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._forEach(function(e){e.type=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"spread",{get:function(){return this._spread},set:function(t){if(this._spread=t,this._oscillators.length>1){var e=-t/2,i=t/(this._oscillators.length-1);this._forEach(function(t,s){t.detune.value=e+i*s})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"count",{get:function(){return this._oscillators.length},set:function(t){if(t=Math.max(t,1),this._oscillators.length!==t){this._forEach(function(t){t.dispose()}),this._oscillators=[];for(var e=0;e<t;e++){var i=new s.default.Oscillator;this.type===s.default.Oscillator.Type.Custom?i.partials=this._partials:i.type=this._type,i.partialCount=this._partialCount,i.phase=this._phase+e/t*360,i.volume.value=-6-1.1*t,this.frequency.connect(i.frequency),this.detune.connect(i.detune),i.connect(this.output),this._oscillators[e]=i}this.spread=this._spread,this.state===s.default.State.Started&&this._forEach(function(t){t.start()})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"phase",{get:function(){return this._phase},set:function(t){this._phase=t,this._forEach(function(e){e.phase=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"baseType",{get:function(){return this._oscillators[0].baseType},set:function(t){this._forEach(function(e){e.baseType=t}),this._type=this._oscillators[0].type}}),Object.defineProperty(s.default.FatOscillator.prototype,"partials",{get:function(){return this._oscillators[0].partials},set:function(t){this._partials=t,this._type=s.default.Oscillator.Type.Custom,this._forEach(function(e){e.partials=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"partialCount",{get:function(){return this._oscillators[0].partialCount},set:function(t){this._partialCount=t,this._forEach(function(e){e.partialCount=t}),this._type=this._oscillators[0].type}}),s.default.FatOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._forEach(function(t){t.dispose()}),this._oscillators=null,this._partials=null,this},e.default=s.default.FatOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3),i(22);s.default.AMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.AMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this.detune.value=t.detune,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this._modulationScale=new s.default.AudioToGain,this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.connect(this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this.phase=t.phase,this._readOnly(["frequency","detune","harmonicity"])},s.default.extend(s.default.AMOscillator,s.default.Oscillator),s.default.AMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationType:"square",harmonicity:1},s.default.AMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.AMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.AMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.AMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.AMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune","harmonicity"]),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this._modulationScale.dispose(),this._modulationScale=null,this},e.default=s.default.AMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(50),i(17),i(5);s.default.PWMOscillator=function(){var t=s.default.defaults(arguments,["frequency","modulationFrequency"],s.default.PWMOscillator);s.default.Source.call(this,t),this._pulse=new s.default.PulseOscillator(t.modulationFrequency),this._pulse._sawtooth.type="sine",this._modulator=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,phase:t.phase}),this._scale=new s.default.Multiply(2),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this.modulationFrequency=this._pulse.frequency,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),this._readOnly(["modulationFrequency","frequency","detune"])},s.default.extend(s.default.PWMOscillator,s.default.Source),s.default.PWMOscillator.defaults={frequency:440,detune:0,phase:0,modulationFrequency:.4},s.default.PWMOscillator.prototype._start=function(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)},s.default.PWMOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)},s.default.PWMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._pulse.restart(t)},Object.defineProperty(s.default.PWMOscillator.prototype,"type",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"baseType",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"partials",{get:function(){return[]}}),Object.defineProperty(s.default.PWMOscillator.prototype,"phase",{get:function(){return this._modulator.phase},set:function(t){this._modulator.phase=t}}),s.default.PWMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._pulse.dispose(),this._pulse=null,this._scale.dispose(),this._scale=null,this._modulator.dispose(),this._modulator=null,this._writable(["modulationFrequency","frequency","detune"]),this.frequency=null,this.detune=null,this.modulationFrequency=null,this},e.default=s.default.PWMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51),i(4),i(16);s.default.Part=function(){var t=s.default.defaults(arguments,["callback","events"],s.default.Part);s.default.Event.call(this,t),this._events=[];for(var e=0;e<t.events.length;e++)Array.isArray(t.events[e])?this.add(t.events[e][0],t.events[e][1]):this.add(t.events[e])},s.default.extend(s.default.Part,s.default.Event),s.default.Part.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,probability:1,humanize:!1,mute:!1,events:[]},s.default.Part.prototype.start=function(t,e){var i=this.toTicks(t);return this._state.getValueAtTime(i)!==s.default.State.Started&&(e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toTicks(e),this._state.add({state:s.default.State.Started,time:i,offset:e}),this._forEach(function(t){this._startNote(t,i,e)})),this},s.default.Part.prototype._startNote=function(t,e,i){e-=i,this._loop?t.startOffset>=this._loopStart&&t.startOffset<this._loopEnd?(t.startOffset<i&&(e+=this._getLoopDuration()),t.start(s.default.Ticks(e))):t.startOffset<this._loopStart&&t.startOffset>=i&&(t.loop=!1,t.start(s.default.Ticks(e))):t.startOffset>=i&&t.start(s.default.Ticks(e))},Object.defineProperty(s.default.Part.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t,this._forEach(function(t){t.startOffset+=this._startOffset})}}),s.default.Part.prototype.stop=function(t){var e=this.toTicks(t);return this._state.cancel(e),this._state.setStateAtTime(s.default.State.Stopped,e),this._forEach(function(e){e.stop(t)}),this},s.default.Part.prototype.at=function(t,e){t=s.default.TransportTime(t);for(var i=s.default.Ticks(1).toSeconds(),n=0;n<this._events.length;n++){var o=this._events[n];if(Math.abs(t.toTicks()-o.startOffset)<i)return s.default.isDefined(e)&&(o.value=e),o}return s.default.isDefined(e)?(this.add(t,e),this._events[this._events.length-1]):null},s.default.Part.prototype.add=function(t,e){var i;return t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t),e instanceof s.default.Event?(i=e).callback=this._tick.bind(this):i=new s.default.Event({callback:this._tick.bind(this),value:e}),i.startOffset=t,i.set({loopEnd:this.loopEnd,loopStart:this.loopStart,loop:this.loop,humanize:this.humanize,playbackRate:this.playbackRate,probability:this.probability}),this._events.push(i),this._restartEvent(i),this},s.default.Part.prototype._restartEvent=function(t){this._state.forEach(function(e){e.state===s.default.State.Started?this._startNote(t,e.time,e.offset):t.stop(s.default.Ticks(e.time))}.bind(this))},s.default.Part.prototype.remove=function(t,e){t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n.startOffset===t&&(s.default.isUndef(e)||s.default.isDefined(e)&&n.value===e)&&(this._events.splice(i,1),n.dispose())}return this},s.default.Part.prototype.removeAll=function(){return this._forEach(function(t){t.dispose()}),this._events=[],this},s.default.Part.prototype.cancel=function(t){return this._forEach(function(e){e.cancel(t)}),this._state.cancel(this.toTicks(t)),this},s.default.Part.prototype._forEach=function(t,e){if(this._events){e=s.default.defaultArg(e,this);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n instanceof s.default.Part?n._forEach(t,e):t.call(e,n)}}return this},s.default.Part.prototype._setAll=function(t,e){this._forEach(function(i){i[t]=e})},s.default.Part.prototype._tick=function(t,e){this.mute||this.callback(t,e)},s.default.Part.prototype._testLoopBoundries=function(t){this._loop&&(t.startOffset<this._loopStart||t.startOffset>=this._loopEnd)?t.cancel(0):t.state===s.default.State.Stopped&&this._restartEvent(t)},Object.defineProperty(s.default.Part.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t,this._setAll("probability",t)}}),Object.defineProperty(s.default.Part.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t,this._setAll("humanize",t)}}),Object.defineProperty(s.default.Part.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._forEach(function(e){e._loopStart=this._loopStart,e._loopEnd=this._loopEnd,e.loop=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._forEach(function(e){e.loopEnd=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._forEach(function(t){t.loopStart=this.loopStart,this._testLoopBoundries(t)})}}),Object.defineProperty(s.default.Part.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._setAll("playbackRate",t)}}),Object.defineProperty(s.default.Part.prototype,"length",{get:function(){return this._events.length}}),s.default.Part.prototype.dispose=function(){return s.default.Event.prototype.dispose.call(this),this.removeAll(),this.callback=null,this._events=null,this},e.default=s.default.Part},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51);s.default.Loop=function(){var t=s.default.defaults(arguments,["callback","interval"],s.default.Loop);s.default.call(this),this._event=new s.default.Event({callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations},s.default.extend(s.default.Loop),s.default.Loop.defaults={interval:"4n",callback:s.default.noOp,playbackRate:1,iterations:1/0,probability:!0,mute:!1},s.default.Loop.prototype.start=function(t){return this._event.start(t),this},s.default.Loop.prototype.stop=function(t){return this._event.stop(t),this},s.default.Loop.prototype.cancel=function(t){return this._event.cancel(t),this},s.default.Loop.prototype._tick=function(t){this.callback(t)},Object.defineProperty(s.default.Loop.prototype,"state",{get:function(){return this._event.state}}),Object.defineProperty(s.default.Loop.prototype,"progress",{get:function(){return this._event.progress}}),Object.defineProperty(s.default.Loop.prototype,"interval",{get:function(){return this._event.loopEnd},set:function(t){this._event.loopEnd=t}}),Object.defineProperty(s.default.Loop.prototype,"playbackRate",{get:function(){return this._event.playbackRate},set:function(t){this._event.playbackRate=t}}),Object.defineProperty(s.default.Loop.prototype,"humanize",{get:function(){return this._event.humanize},set:function(t){this._event.humanize=t}}),Object.defineProperty(s.default.Loop.prototype,"probability",{get:function(){return this._event.probability},set:function(t){this._event.probability=t}}),Object.defineProperty(s.default.Loop.prototype,"mute",{get:function(){return this._event.mute},set:function(t){this._event.mute=t}}),Object.defineProperty(s.default.Loop.prototype,"iterations",{get:function(){return!0===this._event.loop?1/0:this._event.loop},set:function(t){this._event.loop=t===1/0||t}}),s.default.Loop.prototype.dispose=function(){this._event.dispose(),this._event=null,this.callback=null},e.default=s.default.Loop},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33);s.default.StereoXFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackLR=new s.default.Gain,this._feedbackRL=new s.default.Gain,this.effectReturnL.chain(this._feedbackLR,this.effectSendR),this.effectReturnR.chain(this._feedbackRL,this.effectSendL),this.feedback.fan(this._feedbackLR.gain,this._feedbackRL.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoXFeedbackEffect,s.default.StereoEffect),s.default.StereoXFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackLR.dispose(),this._feedbackLR=null,this._feedbackRL.dispose(),this._feedbackRL=null,this},e.default=s.default.StereoXFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(53),i(52);s.default.MidSideEffect=function(){s.default.Effect.apply(this,arguments),this._midSideSplit=new s.default.MidSideSplit,this._midSideMerge=new s.default.MidSideMerge,this.midSend=this._midSideSplit.mid,this.sideSend=this._midSideSplit.side,this.midReturn=this._midSideMerge.mid,this.sideReturn=this._midSideMerge.side,this.effectSend.connect(this._midSideSplit),this._midSideMerge.connect(this.effectReturn)},s.default.extend(s.default.MidSideEffect,s.default.Effect),s.default.MidSideEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this.midSend=null,this.sideSend=null,this.midReturn=null,this.sideReturn=null,this},e.default=s.default.MidSideEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(8);s.default.Convolver=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.Convolver);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this._buffer=new s.default.Buffer(t.url,function(e){this.buffer=e.get(),t.onload()}.bind(this)),this._buffer.loaded&&(this.buffer=this._buffer),this.normalize=t.normalize,this.connectEffect(this._convolver)},s.default.extend(s.default.Convolver,s.default.Effect),s.default.Convolver.defaults={onload:s.default.noOp,normalize:!0},Object.defineProperty(s.default.Convolver.prototype,"buffer",{get:function(){return this._buffer.length?this._buffer:null},set:function(t){this._buffer.set(t),this._convolver.buffer&&(this.effectSend.disconnect(),this._convolver.disconnect(),this._convolver=this.context.createConvolver(),this.connectEffect(this._convolver)),this._convolver.buffer=this._buffer.get()}}),Object.defineProperty(s.default.Convolver.prototype,"normalize",{get:function(){return this._convolver.normalize},set:function(t){this._convolver.normalize=t}}),s.default.Convolver.prototype.load=function(t,e){return this._buffer.load(t,function(t){this.buffer=t,e&&e()}.bind(this))},s.default.Convolver.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Convolver},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(5),i(13);s.default.Modulo=function(t){s.default.SignalBase.call(this),this.createInsOuts(1,0),this._shaper=new s.default.WaveShaper(Math.pow(2,16)),this._multiply=new s.default.Multiply,this._subtract=this.output=new s.default.Subtract,this._modSignal=new s.default.Signal(t),s.default.connect(this.input,this._shaper),s.default.connect(this.input,this._subtract),this._modSignal.connect(this._multiply,0,0),this._shaper.connect(this._multiply,0,1),this._multiply.connect(this._subtract,0,1),this._setWaveShaper(t)},s.default.extend(s.default.Modulo,s.default.SignalBase),s.default.Modulo.prototype._setWaveShaper=function(t){this._shaper.setMap(function(e){return Math.floor((e+1e-4)/t)})},Object.defineProperty(s.default.Modulo.prototype,"value",{get:function(){return this._modSignal.value},set:function(t){this._modSignal.value=t,this._setWaveShaper(t)}}),s.default.Modulo.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this._multiply.dispose(),this._multiply=null,this._subtract.dispose(),this._subtract=null,this._modSignal.dispose(),this._modSignal=null,this},e.default=s.default.Modulo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20),i(92);s.default.OfflineContext=function(t,e,i){var n=new OfflineAudioContext(t,e*i,i);s.default.Context.call(this,{context:n,clockSource:"offline",lookAhead:0,updateInterval:128/i}),this._duration=e,this._currentTime=0},s.default.extend(s.default.OfflineContext,s.default.Context),s.default.OfflineContext.prototype.now=function(){return this._currentTime},s.default.OfflineContext.prototype.resume=function(){return Promise.resolve()},s.default.OfflineContext.prototype.render=function(){for(;this._duration-this._currentTime>=0;)this.emit("tick"),this._currentTime+=.005;return this._context.startRendering()},s.default.OfflineContext.prototype.close=function(){return this._context=null,Promise.resolve()},e.default=s.default.OfflineContext},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(11),i(76),i(40);s.default.Offline=function(t,e){var i=s.default.context.sampleRate,n=s.default.context,o=new s.default.OfflineContext(2,e,i);s.default.context=o;var a=t(s.default.Transport),r=null;return r=a&&s.default.isFunction(a.then)?a.then(function(){return o.render()}):o.render(),s.default.context=n,r.then(function(t){return new s.default.Buffer(t)})},e.default=s.default.Offline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11);s.default.Buffers=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Buffers);for(var n in s.default.call(this),this._buffers={},this.baseUrl=i.baseUrl,this._loadingCount=0,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Buffers),s.default.Buffers.defaults={onload:s.default.noOp,baseUrl:""},s.default.Buffers.prototype.has=function(t){return this._buffers.hasOwnProperty(t)},s.default.Buffers.prototype.get=function(t){if(this.has(t))return this._buffers[t];throw new Error("Tone.Buffers: no buffer named "+t)},s.default.Buffers.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Buffers.prototype,"loaded",{get:function(){var t=!0;for(var e in this._buffers){var i=this.get(e);t=t&&i.loaded}return t}}),s.default.Buffers.prototype.add=function(t,e,i){return i=s.default.defaultArg(i,s.default.noOp),e instanceof s.default.Buffer?(this._buffers[t]=e,i(this)):e instanceof AudioBuffer?(this._buffers[t]=new s.default.Buffer(e),i(this)):s.default.isString(e)&&(this._buffers[t]=new s.default.Buffer(this.baseUrl+e,i)),this},s.default.Buffers.prototype.dispose=function(){for(var t in s.default.prototype.dispose.call(this),this._buffers)this._buffers[t].dispose();return this._buffers=null,this},e.default=s.default.Buffers},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlPattern=function(){var t=s.default.defaults(arguments,["values","type"],s.default.CtrlPattern);s.default.call(this),this.values=t.values,this.index=0,this._type=null,this._shuffled=null,this._direction=null,this.type=t.type},s.default.extend(s.default.CtrlPattern),s.default.CtrlPattern.Type={Up:"up",Down:"down",UpDown:"upDown",DownUp:"downUp",AlternateUp:"alternateUp",AlternateDown:"alternateDown",Random:"random",RandomWalk:"randomWalk",RandomOnce:"randomOnce"},s.default.CtrlPattern.defaults={type:s.default.CtrlPattern.Type.Up,values:[]},Object.defineProperty(s.default.CtrlPattern.prototype,"value",{get:function(){if(0!==this.values.length){if(1===this.values.length)return this.values[0];this.index=Math.min(this.index,this.values.length-1);var t=this.values[this.index];return this.type===s.default.CtrlPattern.Type.RandomOnce&&(this.values.length!==this._shuffled.length&&this._shuffleValues(),t=this.values[this._shuffled[this.index]]),t}}}),Object.defineProperty(s.default.CtrlPattern.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._shuffled=null,this._type===s.default.CtrlPattern.Type.Up||this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.RandomOnce||this._type===s.default.CtrlPattern.Type.AlternateUp?this.index=0:this._type!==s.default.CtrlPattern.Type.Down&&this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this.index=this.values.length-1),this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.AlternateUp?this._direction=s.default.CtrlPattern.Type.Up:this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this._direction=s.default.CtrlPattern.Type.Down),this._type===s.default.CtrlPattern.Type.RandomOnce?this._shuffleValues():this._type===s.default.CtrlPattern.Type.Random&&(this.index=Math.floor(Math.random()*this.values.length))}}),s.default.CtrlPattern.prototype.next=function(){var t=this.type;return t===s.default.CtrlPattern.Type.Up?(this.index++,this.index>=this.values.length&&(this.index=0)):t===s.default.CtrlPattern.Type.Down?(this.index--,this.index<0&&(this.index=this.values.length-1)):t===s.default.CtrlPattern.Type.UpDown||t===s.default.CtrlPattern.Type.DownUp?(this._direction===s.default.CtrlPattern.Type.Up?this.index++:this.index--,this.index<0?(this.index=1,this._direction=s.default.CtrlPattern.Type.Up):this.index>=this.values.length&&(this.index=this.values.length-2,this._direction=s.default.CtrlPattern.Type.Down)):t===s.default.CtrlPattern.Type.Random?this.index=Math.floor(Math.random()*this.values.length):t===s.default.CtrlPattern.Type.RandomWalk?Math.random()<.5?(this.index--,this.index=Math.max(this.index,0)):(this.index++,this.index=Math.min(this.index,this.values.length-1)):t===s.default.CtrlPattern.Type.RandomOnce?(this.index++,this.index>=this.values.length&&(this.index=0,this._shuffleValues())):t===s.default.CtrlPattern.Type.AlternateUp?(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=2,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=1,this._direction=s.default.CtrlPattern.Type.Up),this.index>=this.values.length&&(this.index=0,this._direction=s.default.CtrlPattern.Type.Up)):t===s.default.CtrlPattern.Type.AlternateDown&&(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=1,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=2,this._direction=s.default.CtrlPattern.Type.Up),this.index<0&&(this.index=this.values.length-1,this._direction=s.default.CtrlPattern.Type.Down)),this.value},s.default.CtrlPattern.prototype._shuffleValues=function(){var t=[];this._shuffled=[];for(var e=0;e<this.values.length;e++)t[e]=e;for(;t.length>0;){var i=t.splice(Math.floor(t.length*Math.random()),1);this._shuffled.push(i[0])}},s.default.CtrlPattern.prototype.dispose=function(){this._shuffled=null,this.values=null},e.default=s.default.CtrlPattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(56),i(55);s.default.TransportRepeatEvent=function(t,e){s.default.TransportEvent.call(this,t,e),e=s.default.defaultArg(e,s.default.TransportRepeatEvent.defaults),this.duration=s.default.Ticks(e.duration),this._interval=s.default.Ticks(e.interval),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this),this.Transport.on("start loopStart",this._boundRestart),this._restart()},s.default.extend(s.default.TransportRepeatEvent,s.default.TransportEvent),s.default.TransportRepeatEvent.defaults={duration:1/0,interval:1},s.default.TransportRepeatEvent.prototype.invoke=function(t){this._createEvents(t),s.default.TransportEvent.prototype.invoke.call(this,t)},s.default.TransportRepeatEvent.prototype._createEvents=function(t){var e=this.Transport.getTicksAtTime(t);e>=this.time&&e>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)))},s.default.TransportRepeatEvent.prototype._restart=function(t){this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this._nextTick=this.time;var e=this.Transport.getTicksAtTime(t);e>this.time&&(this._nextTick=this.time+Math.ceil((e-this.time)/this._interval)*this._interval),this._currentId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)),this._nextTick+=this._interval,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick))},s.default.TransportRepeatEvent.prototype.dispose=function(){return this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this.Transport.off("start loopStart",this._boundRestart),this._boundCreateEvents=null,s.default.TransportEvent.prototype.dispose.call(this),this.duration=null,this._interval=null,this},e.default=s.default.TransportRepeatEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.IntervalTimeline=function(){s.default.call(this),this._root=null,this._length=0},s.default.extend(s.default.IntervalTimeline),s.default.IntervalTimeline.prototype.add=function(t){if(s.default.isUndef(t.time)||s.default.isUndef(t.duration))throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");t.time=t.time.valueOf();var e=new n(t.time,t.time+t.duration,t);for(null===this._root?this._root=e:this._root.insert(e),this._length++;null!==e;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this},s.default.IntervalTimeline.prototype.remove=function(t){if(null!==this._root){var e=[];this._root.search(t.time,e);for(var i=0;i<e.length;i++){var s=e[i];if(s.event===t){this._removeNode(s),this._length--;break}}}return this},Object.defineProperty(s.default.IntervalTimeline.prototype,"length",{get:function(){return this._length}}),s.default.IntervalTimeline.prototype.cancel=function(t){return this.forEachFrom(t,function(t){this.remove(t)}.bind(this)),this},s.default.IntervalTimeline.prototype._setRoot=function(t){this._root=t,null!==this._root&&(this._root.parent=null)},s.default.IntervalTimeline.prototype._replaceNodeInParent=function(t,e){null!==t.parent?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)},s.default.IntervalTimeline.prototype._removeNode=function(t){if(null===t.left&&null===t.right)this._replaceNodeInParent(t,null);else if(null===t.right)this._replaceNodeInParent(t,t.left);else if(null===t.left)this._replaceNodeInParent(t,t.right);else{var e,i;if(t.getBalance()>0)if(null===t.left.right)(e=t.left).right=t.right,i=e;else{for(e=t.left.right;null!==e.right;)e=e.right;e.parent.right=e.left,i=e.parent,e.left=t.left,e.right=t.right}else if(null===t.right.left)(e=t.right).left=t.left,i=e;else{for(e=t.right.left;null!==e.left;)e=e.left;e.parent.left=e.right,i=e.parent,e.left=t.left,e.right=t.right}null!==t.parent?t.isLeftChild()?t.parent.left=e:t.parent.right=e:this._setRoot(e),this._rebalance(i)}t.dispose()},s.default.IntervalTimeline.prototype._rotateLeft=function(t){var e=t.parent,i=t.isLeftChild(),s=t.right;t.right=s.left,s.left=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rotateRight=function(t){var e=t.parent,i=t.isLeftChild(),s=t.left;t.left=s.right,s.right=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rebalance=function(t){var e=t.getBalance();e>1?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))},s.default.IntervalTimeline.prototype.get=function(t){if(null!==this._root){var e=[];if(this._root.search(t,e),e.length>0){for(var i=e[0],s=1;s<e.length;s++)e[s].low>i.low&&(i=e[s]);return i.event}}return null},s.default.IntervalTimeline.prototype.forEach=function(t){if(null!==this._root){var e=[];this._root.traverse(function(t){e.push(t)});for(var i=0;i<e.length;i++){var s=e[i].event;s&&t(s)}}return this},s.default.IntervalTimeline.prototype.forEachAtTime=function(t,e){if(null!==this._root){var i=[];this._root.search(t,i);for(var s=i.length-1;s>=0;s--){var n=i[s].event;n&&e(n)}}return this},s.default.IntervalTimeline.prototype.forEachFrom=function(t,e){if(null!==this._root){var i=[];this._root.searchAfter(t,i);for(var s=i.length-1;s>=0;s--){e(i[s].event)}}return this},s.default.IntervalTimeline.prototype.dispose=function(){var t=[];null!==this._root&&this._root.traverse(function(e){t.push(e)});for(var e=0;e<t.length;e++)t[e].dispose();return t=null,this._root=null,this};var n=function(t,e,i){this.event=i,this.low=t,this.high=e,this.max=this.high,this._left=null,this._right=null,this.parent=null,this.height=0};n.prototype.insert=function(t){t.low<=this.low?null===this.left?this.left=t:this.left.insert(t):null===this.right?this.right=t:this.right.insert(t)},n.prototype.search=function(t,e){t>this.max||(null!==this.left&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),this.low>t||null!==this.right&&this.right.search(t,e))},n.prototype.searchAfter=function(t,e){this.low>=t&&(e.push(this),null!==this.left&&this.left.searchAfter(t,e)),null!==this.right&&this.right.searchAfter(t,e)},n.prototype.traverse=function(t){t(this),null!==this.left&&this.left.traverse(t),null!==this.right&&this.right.traverse(t)},n.prototype.updateHeight=function(){null!==this.left&&null!==this.right?this.height=Math.max(this.left.height,this.right.height)+1:null!==this.right?this.height=this.right.height+1:null!==this.left?this.height=this.left.height+1:this.height=0},n.prototype.updateMax=function(){this.max=this.high,null!==this.left&&(this.max=Math.max(this.max,this.left.max)),null!==this.right&&(this.max=Math.max(this.max,this.right.max))},n.prototype.getBalance=function(){var t=0;return null!==this.left&&null!==this.right?t=this.left.height-this.right.height:null!==this.left?t=this.left.height+1:null!==this.right&&(t=-(this.right.height+1)),t},n.prototype.isLeftChild=function(){return null!==this.parent&&this.parent.left===this},Object.defineProperty(n.prototype,"left",{get:function(){return this._left},set:function(t){this._left=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),Object.defineProperty(n.prototype,"right",{get:function(){return this._right},set:function(t){this._right=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),n.prototype.dispose=function(){this.parent=null,this._left=null,this._right=null,this.event=null},e.default=s.default.IntervalTimeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2);function n(t){return function(e,i){i=this.toSeconds(i),t.apply(this,arguments);var s=this._events.get(i),n=this._events.previousEvent(s),o=this._getTicksUntilEvent(n,i);return s.ticks=Math.max(o,0),this}}s.default.TickSignal=function(t){t=s.default.defaultArg(t,1),s.default.Signal.call(this,{units:s.default.Type.Ticks,value:t}),this._events.memory=1/0,this.cancelScheduledValues(0),this._events.add({type:s.default.Param.AutomationType.SetValue,time:0,value:t})},s.default.extend(s.default.TickSignal,s.default.Signal),s.default.TickSignal.prototype.setValueAtTime=n(s.default.Signal.prototype.setValueAtTime),s.default.TickSignal.prototype.linearRampToValueAtTime=n(s.default.Signal.prototype.linearRampToValueAtTime),s.default.TickSignal.prototype.setTargetAtTime=function(t,e,i){e=this.toSeconds(e),this.setRampPoint(e),t=this._fromUnits(t);for(var s=this._events.get(e),n=Math.round(Math.max(1/i,1)),o=0;o<=n;o++){var a=i*o+e,r=this._exponentialApproach(s.time,s.value,t,i,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype.exponentialRampToValueAtTime=function(t,e){e=this.toSeconds(e),t=this._fromUnits(t);for(var i=this._events.get(e),s=Math.round(Math.max(10*(e-i.time),1)),n=(e-i.time)/s,o=0;o<=s;o++){var a=n*o+i.time,r=this._exponentialInterpolate(i.time,i.value,e,t,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype._getTicksUntilEvent=function(t,e){if(null===t)t={ticks:0,time:0};else if(s.default.isUndef(t.ticks)){var i=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(i,t.time)}var n=this.getValueAtTime(t.time),o=this.getValueAtTime(e);return this._events.get(e).time===e&&this._events.get(e).type===s.default.Param.AutomationType.SetValue&&(o=this.getValueAtTime(e-this.sampleTime)),.5*(e-t.time)*(n+o)+t.ticks},s.default.TickSignal.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._events.get(t);return Math.max(this._getTicksUntilEvent(e,t),0)},s.default.TickSignal.prototype.getDurationOfTicks=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this.getTimeOfTick(i+t)-e},s.default.TickSignal.prototype.getTimeOfTick=function(t){var e=this._events.get(t,"ticks"),i=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&i&&i.type===s.default.Param.AutomationType.Linear&&e.value!==i.value){var n=this.getValueAtTime(e.time),o=(this.getValueAtTime(i.time)-n)/(i.time-e.time),a=Math.sqrt(Math.pow(n,2)-2*o*(e.ticks-t)),r=(-n+a)/o;return(r>0?r:(-n-a)/o)+e.time}return e?0===e.value?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue},s.default.TickSignal.prototype.ticksToTime=function(t,e){return e=this.toSeconds(e),new s.default.Time(this.getDurationOfTicks(t,e))},s.default.TickSignal.prototype.timeToTicks=function(t,e){e=this.toSeconds(e),t=this.toSeconds(t);var i=this.getTicksAtTime(e),n=this.getTicksAtTime(e+t);return new s.default.Ticks(n-i)},e.default=s.default.TickSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(57),i(34),i(35),i(20);s.default.Clock=function(){var t=s.default.defaults(arguments,["callback","frequency"],s.default.Clock);s.default.Emitter.call(this),this.callback=t.callback,this._nextTick=0,this._tickSource=new s.default.TickSource(t.frequency),this._lastUpdate=0,this.frequency=this._tickSource.frequency,this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._boundLoop=this._loop.bind(this),this.context.on("tick",this._boundLoop)},s.default.extend(s.default.Clock,s.default.Emitter),s.default.Clock.defaults={callback:s.default.noOp,frequency:1},Object.defineProperty(s.default.Clock.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.Clock.prototype.start=function(t,e){return this.context.resume(),t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),this._tickSource.start(t,e),t<this._lastUpdate&&this.emit("start",t,e)),this},s.default.Clock.prototype.stop=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this},s.default.Clock.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Paused,t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this},Object.defineProperty(s.default.Clock.prototype,"ticks",{get:function(){return Math.ceil(this.getTicksAtTime(this.now()))},set:function(t){this._tickSource.ticks=t}}),Object.defineProperty(s.default.Clock.prototype,"seconds",{get:function(){return this._tickSource.seconds},set:function(t){this._tickSource.seconds=t}}),s.default.Clock.prototype.getSecondsAtTime=function(t){return this._tickSource.getSecondsAtTime(t)},s.default.Clock.prototype.setTicksAtTime=function(t,e){return this._tickSource.setTicksAtTime(t,e),this},s.default.Clock.prototype.getTicksAtTime=function(t){return this._tickSource.getTicksAtTime(t)},s.default.Clock.prototype.nextTickTime=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this._tickSource.getTimeOfTick(i+t,e)},s.default.Clock.prototype._loop=function(){var t=this._lastUpdate,e=this.now();this._lastUpdate=e,t!==e&&(this._state.forEachBetween(t,e,function(t){switch(t.state){case s.default.State.Started:var e=this._tickSource.getTicksAtTime(t.time);this.emit("start",t.time,e);break;case s.default.State.Stopped:0!==t.time&&this.emit("stop",t.time);break;case s.default.State.Paused:this.emit("pause",t.time)}}.bind(this)),this._tickSource.forEachTickBetween(t,e,function(t,e){this.callback(t,e)}.bind(this)))},s.default.Clock.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.Clock.prototype.dispose=function(){s.default.Emitter.prototype.dispose.call(this),this.context.off("tick",this._boundLoop),this._writable("frequency"),this._tickSource.dispose(),this._tickSource=null,this.frequency=null,this._boundLoop=null,this._nextTick=1/0,this.callback=null,this._state.dispose(),this._state=null},e.default=s.default.Clock},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(5),i(7);s.default.GreaterThanZero=function(){s.default.SignalBase.call(this),this._thresh=this.output=new s.default.WaveShaper(function(t){return t<=0?0:1},127),this._scale=this.input=new s.default.Multiply(1e4),this._scale.connect(this._thresh)},s.default.extend(s.default.GreaterThanZero,s.default.SignalBase),s.default.GreaterThanZero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._thresh.dispose(),this._thresh=null,this},e.default=s.default.GreaterThanZero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(84),i(13),i(2);s.default.GreaterThan=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._param=this.input[0]=new s.default.Subtract(t),this.input[1]=this._param.input[1],this._gtz=this.output=new s.default.GreaterThanZero,this._param.connect(this._gtz)},s.default.extend(s.default.GreaterThan,s.default.Signal),s.default.GreaterThan.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._gtz.dispose(),this._gtz=null,this},e.default=s.default.GreaterThan},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(26);s.default.ScaledEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.Envelope.call(this,t),t=s.default.defaultArg(t,s.default.ScaledEnvelope.defaults),this._exp=this.output=new s.default.Pow(t.exponent),this._scale=this.output=new s.default.Scale(t.min,t.max),this._sig.chain(this._exp,this._scale)},s.default.extend(s.default.ScaledEnvelope,s.default.Envelope),s.default.ScaledEnvelope.defaults={min:0,max:1,exponent:1},Object.defineProperty(s.default.ScaledEnvelope.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.ScaledEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaledEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(30);s.default.Abs=function(){s.default.SignalBase.call(this),this._abs=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:Math.abs(t)},1024)},s.default.extend(s.default.Abs,s.default.SignalBase),s.default.Abs.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._abs.dispose(),this._abs=null,this},e.default=s.default.Abs},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Solo=function(){var t=s.default.defaults(arguments,["solo"],s.default.Solo);s.default.AudioNode.call(this),this.input=this.output=new s.default.Gain,this._soloBind=this._soloed.bind(this),this.context.on("solo",this._soloBind),this.solo=t.solo},s.default.extend(s.default.Solo,s.default.AudioNode),s.default.Solo.defaults={solo:!1},Object.defineProperty(s.default.Solo.prototype,"solo",{get:function(){return this._isSoloed()},set:function(t){t?this._addSolo():this._removeSolo(),this.context.emit("solo",this)}}),Object.defineProperty(s.default.Solo.prototype,"muted",{get:function(){return 0===this.input.gain.value}}),s.default.Solo.prototype._addSolo=function(){s.default.isArray(this.context._currentSolo)||(this.context._currentSolo=[]),this._isSoloed()||this.context._currentSolo.push(this)},s.default.Solo.prototype._removeSolo=function(){if(this._isSoloed()){var t=this.context._currentSolo.indexOf(this);this.context._currentSolo.splice(t,1)}},s.default.Solo.prototype._isSoloed=function(){return!!s.default.isArray(this.context._currentSolo)&&(0!==this.context._currentSolo.length&&-1!==this.context._currentSolo.indexOf(this))},s.default.Solo.prototype._noSolos=function(){return!s.default.isArray(this.context._currentSolo)||0===this.context._currentSolo.length},s.default.Solo.prototype._soloed=function(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0},s.default.Solo.prototype.dispose=function(){return this.context.off("solo",this._soloBind),this._removeSolo(),this._soloBind=null,s.default.AudioNode.prototype.dispose.call(this),this},e.default=s.default.Solo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.EqualPowerGain=function(){s.default.SignalBase.call(this),this._eqPower=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:s.default.equalPowerScale(t)}.bind(this),4096)},s.default.extend(s.default.EqualPowerGain,s.default.SignalBase),s.default.EqualPowerGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._eqPower.dispose(),this._eqPower=null,this},e.default=s.default.EqualPowerGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(5),i(2);s.default.Negate=function(){s.default.SignalBase.call(this),this._multiply=this.input=this.output=new s.default.Multiply(-1)},s.default.extend(s.default.Negate,s.default.SignalBase),s.default.Negate.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._multiply.dispose(),this._multiply=null,this},e.default=s.default.Negate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(48),i(27),i(1);s.default.PanVol=function(){var t=s.default.defaults(arguments,["pan","volume"],s.default.PanVol);s.default.AudioNode.call(this),this._panner=this.input=new s.default.Panner(t.pan),this.pan=this._panner.pan,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,this._readOnly(["pan","volume"])},s.default.extend(s.default.PanVol,s.default.AudioNode),s.default.PanVol.defaults={pan:0,volume:0,mute:!1},Object.defineProperty(s.default.PanVol.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.PanVol.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panner.dispose(),this._panner=null,this.pan=null,this._volume.dispose(),this._volume=null,this.volume=null,this},e.default=s.default.PanVol},function(t,e,i){"use strict";var s=i(0);if(s.default.supported){!s.default.global.hasOwnProperty("OfflineAudioContext")&&s.default.global.hasOwnProperty("webkitOfflineAudioContext")&&(s.default.global.OfflineAudioContext=s.default.global.webkitOfflineAudioContext);var n=new OfflineAudioContext(1,1,44100).startRendering();n&&s.default.isFunction(n.then)||(OfflineAudioContext.prototype._native_startRendering=OfflineAudioContext.prototype.startRendering,OfflineAudioContext.prototype.startRendering=function(){return new Promise(function(t){this.oncomplete=function(e){t(e.renderedBuffer)},this._native_startRendering()}.bind(this))})}},function(t,e,i){"use strict";e.a="13.8.34"},function(t,e,i){"use strict";i.r(e);var s=i(0);i(46);s.default.Midi=function(t,e){if(!(this instanceof s.default.Midi))return new s.default.Midi(t,e);s.default.Frequency.call(this,t,e)},s.default.extend(s.default.Midi,s.default.Frequency),s.default.Midi.prototype._defaultUnits="midi",s.default.Midi.prototype._frequencyToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._frequencyToUnits.call(this,t))},s.default.Midi.prototype._ticksToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._ticksToUnits.call(this,t))},s.default.Midi.prototype._beatsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._beatsToUnits.call(this,t))},s.default.Midi.prototype._secondsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._secondsToUnits.call(this,t))},s.default.Midi.prototype.toMidi=function(){return this.valueOf()},s.default.Midi.prototype.toFrequency=function(){return s.default.Frequency.mtof(this.toMidi())},s.default.Midi.prototype.transpose=function(t){return new this.constructor(this.toMidi()+t)},e.default=s.default.Midi},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(1);s.default.UserMedia=function(){var t=s.default.defaults(arguments,["volume"],s.default.UserMedia);s.default.AudioNode.call(this),this._mediaStream=null,this._stream=null,this._device=null,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.UserMedia,s.default.AudioNode),s.default.UserMedia.defaults={volume:0,mute:!1},s.default.UserMedia.prototype.open=function(t){return this.state===s.default.State.Started&&this.close(),s.default.UserMedia.enumerateDevices().then(function(e){var i;if(s.default.isNumber(t))i=e[t];else if(!(i=e.find(function(e){return e.label===t||e.deviceId===t}))&&e.length>0)i=e[0];else if(!i&&s.default.isDefined(t))throw new Error("Tone.UserMedia: no matching device: "+t);this._device=i;var n={audio:{echoCancellation:!1,sampleRate:this.context.sampleRate,noiseSuppression:!1,mozNoiseSuppression:!1}};return i&&(n.audio.deviceId=i.deviceId),navigator.mediaDevices.getUserMedia(n).then(function(t){return this._stream||(this._stream=t,this._mediaStream=this.context.createMediaStreamSource(t),s.default.connect(this._mediaStream,this.output)),this}.bind(this))}.bind(this))},s.default.UserMedia.prototype.close=function(){return this._stream&&(this._stream.getAudioTracks().forEach(function(t){t.stop()}),this._stream=null,this._mediaStream.disconnect(),this._mediaStream=null),this._device=null,this},s.default.UserMedia.enumerateDevices=function(){return navigator.mediaDevices.enumerateDevices().then(function(t){return t.filter(function(t){return"audioinput"===t.kind})})},Object.defineProperty(s.default.UserMedia.prototype,"state",{get:function(){return this._stream&&this._stream.active?s.default.State.Started:s.default.State.Stopped}}),Object.defineProperty(s.default.UserMedia.prototype,"deviceId",{get:function(){return this._device?this._device.deviceId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"groupId",{get:function(){return this._device?this._device.groupId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"label",{get:function(){return this._device?this._device.label:null}}),Object.defineProperty(s.default.UserMedia.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.UserMedia.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.close(),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this},Object.defineProperty(s.default.UserMedia,"supported",{get:function(){return s.default.isDefined(navigator.mediaDevices)&&s.default.isFunction(navigator.mediaDevices.getUserMedia)}}),e.default=s.default.UserMedia},function(t,e,i){"use strict";i.r(e);var s=i(0);i(65),i(27),i(1);s.default.Players=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload"],s.default.Players);for(var n in s.default.AudioNode.call(this,i),this._volume=this.output=new s.default.Volume(i.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=i.mute,this._players={},this._loadingCount=0,this._fadeIn=i.fadeIn,this._fadeOut=i.fadeOut,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Players,s.default.AudioNode),s.default.Players.defaults={volume:0,mute:!1,onload:s.default.noOp,fadeIn:0,fadeOut:0},s.default.Players.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Players.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),Object.defineProperty(s.default.Players.prototype,"fadeIn",{get:function(){return this._fadeIn},set:function(t){this._fadeIn=t,this._forEach(function(e){e.fadeIn=t})}}),Object.defineProperty(s.default.Players.prototype,"fadeOut",{get:function(){return this._fadeOut},set:function(t){this._fadeOut=t,this._forEach(function(e){e.fadeOut=t})}}),Object.defineProperty(s.default.Players.prototype,"state",{get:function(){var t=!1;return this._forEach(function(e){t=t||e.state===s.default.State.Started}),t?s.default.State.Started:s.default.State.Stopped}}),s.default.Players.prototype.has=function(t){return this._players.hasOwnProperty(t)},s.default.Players.prototype.get=function(t){if(this.has(t))return this._players[t];throw new Error("Tone.Players: no player named "+t)},s.default.Players.prototype._forEach=function(t){for(var e in this._players)t(this._players[e],e);return this},Object.defineProperty(s.default.Players.prototype,"loaded",{get:function(){var t=!0;return this._forEach(function(e){t=t&&e.loaded}),t}}),s.default.Players.prototype.add=function(t,e,i){return this._players[t]=new s.default.Player(e,i).connect(this.output),this._players[t].fadeIn=this._fadeIn,this._players[t].fadeOut=this._fadeOut,this},s.default.Players.prototype.stopAll=function(t){this._forEach(function(e){e.stop(t)})},s.default.Players.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable("volume"),this.volume=null,this.output=null,this._forEach(function(t){t.dispose()}),this._players=null,this},e.default=s.default.Players},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.GrainPlayer=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.GrainPlayer);s.default.Source.call(this,t),this.buffer=new s.default.Buffer(t.url,t.onload.bind(void 0,this)),this._clock=new s.default.Clock(this._tick.bind(this),t.grainSize),this._loopStart=0,this._loopEnd=0,this._activeSources=[],this._playbackRate=t.playbackRate,this._grainSize=t.grainSize,this._overlap=t.overlap,this.detune=t.detune,this.overlap=t.overlap,this.loop=t.loop,this.playbackRate=t.playbackRate,this.grainSize=t.grainSize,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.reverse=t.reverse,this._clock.on("stop",this._onstop.bind(this))},s.default.extend(s.default.GrainPlayer,s.default.Source),s.default.GrainPlayer.defaults={onload:s.default.noOp,overlap:.1,grainSize:.2,playbackRate:1,detune:0,loop:!1,loopStart:0,loopEnd:0,reverse:!1},s.default.GrainPlayer.prototype._start=function(t,e,i){e=s.default.defaultArg(e,0),e=this.toSeconds(e),t=this.toSeconds(t),this._offset=e,this._clock.start(t),i&&this.stop(t+this.toSeconds(i))},s.default.GrainPlayer.prototype._stop=function(t){this._clock.stop(t)},s.default.GrainPlayer.prototype._onstop=function(t){this._activeSources.forEach(function(e){e.fadeOut=0,e.stop(t)})},s.default.GrainPlayer.prototype._tick=function(t){if(!this.loop&&this._offset>this.buffer.duration)this.stop(t);else{var e=this._offset<this._overlap?0:this._overlap,i=new s.default.BufferSource({buffer:this.buffer,fadeIn:e,fadeOut:this._overlap,loop:this.loop,loopStart:this._loopStart,loopEnd:this._loopEnd,playbackRate:s.default.intervalToFrequencyRatio(this.detune/100)}).connect(this.output);i.start(t,this._offset),this._offset+=this.grainSize,i.stop(t+this.grainSize/this.playbackRate),this._activeSources.push(i),i.onended=function(){var t=this._activeSources.indexOf(i);-1!==t&&this._activeSources.splice(t,1)}.bind(this)}},Object.defineProperty(s.default.GrainPlayer.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this.grainSize=this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"reverse",{get:function(){return this.buffer.reverse},set:function(t){this.buffer.reverse=t}}),Object.defineProperty(s.default.GrainPlayer.prototype,"grainSize",{get:function(){return this._grainSize},set:function(t){this._grainSize=this.toSeconds(t),this._clock.frequency.value=this._playbackRate/this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"overlap",{get:function(){return this._overlap},set:function(t){this._overlap=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loaded",{get:function(){return this.buffer.loaded}}),s.default.GrainPlayer.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this.buffer.dispose(),this.buffer=null,this._clock.dispose(),this._clock=null,this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,this},e.default=s.default.GrainPlayer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(2),i(45);s.default.TransportTimelineSignal=function(){s.default.Signal.apply(this,arguments),this.output=this._outputSig=new s.default.Signal(this._initialValue),this._lastVal=this.value,this._synced=s.default.Transport.scheduleRepeat(this._onTick.bind(this),"1i"),this._bindAnchorValue=this._anchorValue.bind(this),s.default.Transport.on("start stop pause",this._bindAnchorValue),this._events.memory=1/0},s.default.extend(s.default.TransportTimelineSignal,s.default.Signal),s.default.TransportTimelineSignal.prototype._onTick=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);this._lastVal!==e&&(this._lastVal=e,this._outputSig.linearRampToValueAtTime(e,t))},s.default.TransportTimelineSignal.prototype._anchorValue=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);return this._lastVal=e,this._outputSig.cancelScheduledValues(t),this._outputSig.setValueAtTime(e,t),this},s.default.TransportTimelineSignal.prototype.getValueAtTime=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.getValueAtTime.call(this,t)},s.default.TransportTimelineSignal.prototype.setValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.setValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.linearRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.linearRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.exponentialRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.setTargetAtTime=function(t,e,i){return e=s.default.TransportTime(e),s.default.Signal.prototype.setTargetAtTime.call(this,t,e,i),this},s.default.TransportTimelineSignal.prototype.cancelScheduledValues=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.cancelScheduledValues.call(this,t),this},s.default.TransportTimelineSignal.prototype.setValueCurveAtTime=function(t,e,i,n){return e=s.default.TransportTime(e),i=s.default.TransportTime(i),s.default.Signal.prototype.setValueCurveAtTime.call(this,t,e,i,n),this},s.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime=function(t){return s.default.Signal.prototype.cancelAndHoldAtTime.call(this,s.default.TransportTime(t))},s.default.TransportTimelineSignal.prototype.dispose=function(){s.default.Transport.clear(this._synced),s.default.Transport.off("start stop pause",this._syncedCallback),this._events.cancel(0),s.default.Signal.prototype.dispose.call(this),this._outputSig.dispose(),this._outputSig=null},e.default=s.default.TransportTimelineSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5);s.default.Normalize=function(t,e){s.default.SignalBase.call(this),this._inputMin=s.default.defaultArg(t,0),this._inputMax=s.default.defaultArg(e,1),this._sub=this.input=new s.default.Add(0),this._div=this.output=new s.default.Multiply(1),this._sub.connect(this._div),this._setRange()},s.default.extend(s.default.Normalize,s.default.SignalBase),Object.defineProperty(s.default.Normalize.prototype,"min",{get:function(){return this._inputMin},set:function(t){this._inputMin=t,this._setRange()}}),Object.defineProperty(s.default.Normalize.prototype,"max",{get:function(){return this._inputMax},set:function(t){this._inputMax=t,this._setRange()}}),s.default.Normalize.prototype._setRange=function(){this._sub.value=-this._inputMin,this._div.value=1/(this._inputMax-this._inputMin)},s.default.Normalize.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._sub.dispose(),this._sub=null,this._div.dispose(),this._div=null,this},e.default=s.default.Normalize},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.GainToAudio=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return 2*Math.abs(t)-1})},s.default.extend(s.default.GainToAudio,s.default.SignalBase),s.default.GainToAudio.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.GainToAudio},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(78),i(32);s.default.Sampler=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Sampler);s.default.Instrument.call(this,i);var n={};for(var o in t)if(s.default.isNote(o)){n[s.default.Frequency(o).toMidi()]=t[o]}else{if(isNaN(parseFloat(o)))throw new Error("Tone.Sampler: url keys must be the note's pitch");n[o]=t[o]}this._buffers=new s.default.Buffers(n,i.onload,i.baseUrl),this._activeSources={},this.attack=i.attack,this.release=i.release,this.curve=i.curve},s.default.extend(s.default.Sampler,s.default.Instrument),s.default.Sampler.defaults={attack:0,release:.1,onload:s.default.noOp,baseUrl:"",curve:"exponential"},s.default.Sampler.prototype._findClosest=function(t){for(var e=0;e<96;){if(this._buffers.has(t+e))return-e;if(this._buffers.has(t-e))return e;e++}throw new Error("No available buffers for note: "+t)},s.default.Sampler.prototype.triggerAttack=function(t,e,i){this.log("triggerAttack",t,e,i),Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var o=s.default.Frequency(t[n]).toMidi(),a=this._findClosest(o),r=o-a,l=this._buffers.get(r),u=s.default.intervalToFrequencyRatio(a),d=new s.default.BufferSource({buffer:l,playbackRate:u,fadeIn:this.attack,fadeOut:this.release,curve:this.curve}).connect(this.output);d.start(e,0,l.duration/u,i),s.default.isArray(this._activeSources[o])||(this._activeSources[o]=[]),this._activeSources[o].push(d),d.onended=function(){if(this._activeSources&&this._activeSources[o]){var t=this._activeSources[o].indexOf(d);-1!==t&&this._activeSources[o].splice(t,1)}}.bind(this)}return this},s.default.Sampler.prototype.triggerRelease=function(t,e){this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=s.default.Frequency(t[i]).toMidi();this._activeSources[n]&&this._activeSources[n].length&&(e=this.toSeconds(e),this._activeSources[n].forEach(function(t){t.stop(e)}),this._activeSources[n]=[])}return this},s.default.Sampler.prototype.releaseAll=function(t){for(var e in t=this.toSeconds(t),this._activeSources)for(var i=this._activeSources[e];i.length;){i.shift().stop(t)}return this},s.default.Sampler.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.Sampler.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.Sampler.prototype.add=function(t,e,i){if(s.default.isNote(t)){var n=s.default.Frequency(t).toMidi();this._buffers.add(n,e,i)}else{if(isNaN(parseFloat(t)))throw new Error("Tone.Sampler: note must be the note's pitch. Instead got "+t);this._buffers.add(t,e,i)}},Object.defineProperty(s.default.Sampler.prototype,"loaded",{get:function(){return this._buffers.loaded}}),s.default.Sampler.prototype.dispose=function(){for(var t in s.default.Instrument.prototype.dispose.call(this),this._buffers.dispose(),this._buffers=null,this._activeSources)this._activeSources[t].forEach(function(t){t.dispose()});return this._activeSources=null,this},e.default=s.default.Sampler},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(6);s.default.PolySynth=function(){var t=s.default.defaults(arguments,["polyphony","voice"],s.default.PolySynth);s.default.Instrument.call(this,t),(t=s.default.defaultArg(t,s.default.Instrument.defaults)).polyphony=Math.min(s.default.PolySynth.MAX_POLYPHONY,t.polyphony),this.voices=new Array(t.polyphony),this.assert(t.polyphony>0,"polyphony must be greater than 0"),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._readOnly("detune");for(var e=0;e<t.polyphony;e++){var i=new t.voice(arguments[2],arguments[3]);if(!(i instanceof s.default.Monophonic))throw new Error("Synth constructor must be instance of Tone.Monophonic");this.voices[e]=i,i.index=e,i.connect(this.output),i.hasOwnProperty("detune")&&this.detune.connect(i.detune)}},s.default.extend(s.default.PolySynth,s.default.Instrument),s.default.PolySynth.defaults={polyphony:4,volume:0,detune:0,voice:s.default.Synth},s.default.PolySynth.prototype._getClosestVoice=function(t,e){var i=this.voices.find(function(i){if(Math.abs(i.frequency.getValueAtTime(t)-s.default.Frequency(e))<1e-4&&i.getLevelAtTime(t)>1e-5)return i});return i||this.voices.slice().sort(function(e,i){var s=e.getLevelAtTime(t+this.blockTime),n=i.getLevelAtTime(t+this.blockTime);return s<1e-5&&(s=0),n<1e-5&&(n=0),s-n}.bind(this))[0]},s.default.PolySynth.prototype.triggerAttack=function(t,e,i){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var s=this._getClosestVoice(e,t);s.triggerAttack(t,e,i),this.log("triggerAttack",s.index,t)}.bind(this)),this},s.default.PolySynth.prototype.triggerRelease=function(t,e){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var i=this._getClosestVoice(e,t);this.log("triggerRelease",i.index,t),i.triggerRelease(e)}.bind(this)),this},s.default.PolySynth.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.PolySynth.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.PolySynth.prototype.set=function(t,e,i){for(var s=0;s<this.voices.length;s++)this.voices[s].set(t,e,i);return this},s.default.PolySynth.prototype.get=function(t){return this.voices[0].get(t)},s.default.PolySynth.prototype.releaseAll=function(t){return t=this.toSeconds(t),this.voices.forEach(function(e){e.triggerRelease(t)}),this},s.default.PolySynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this.voices.forEach(function(t){t.dispose()}),this._writable("detune"),this.detune.dispose(),this.detune=null,this.voices=null,this},s.default.PolySynth.MAX_POLYPHONY=20,e.default=s.default.PolySynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(39),i(54);s.default.PluckSynth=function(t){t=s.default.defaultArg(t,s.default.PluckSynth.defaults),s.default.Instrument.call(this,t),this._noise=new s.default.Noise("pink"),this.attackNoise=t.attackNoise,this._lfcf=new s.default.LowpassCombFilter({resonance:t.resonance,dampening:t.dampening}),this.resonance=this._lfcf.resonance,this.dampening=this._lfcf.dampening,this._noise.connect(this._lfcf),this._lfcf.connect(this.output),this._readOnly(["resonance","dampening"])},s.default.extend(s.default.PluckSynth,s.default.Instrument),s.default.PluckSynth.defaults={attackNoise:1,dampening:4e3,resonance:.7},s.default.PluckSynth.prototype.triggerAttack=function(t,e){t=this.toFrequency(t),e=this.toSeconds(e);var i=1/t;return this._lfcf.delayTime.setValueAtTime(i,e),this._noise.start(e),this._noise.stop(e+i*this.attackNoise),this},s.default.PluckSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._noise.dispose(),this._lfcf.dispose(),this._noise=null,this._lfcf=null,this._writable(["resonance","dampening"]),this.dampening=null,this.resonance=null,this},e.default=s.default.PluckSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(39),i(2),i(9),i(21);s.default.NoiseSynth=function(t){t=s.default.defaultArg(t,s.default.NoiseSynth.defaults),s.default.Instrument.call(this,t),this.noise=new s.default.Noise(t.noise),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.noise.chain(this.envelope,this.output),this._readOnly(["noise","envelope"])},s.default.extend(s.default.NoiseSynth,s.default.Instrument),s.default.NoiseSynth.defaults={noise:{type:"white"},envelope:{attack:.005,decay:.1,sustain:0}},s.default.NoiseSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),0===this.envelope.sustain&&this.noise.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.NoiseSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.envelope.release),this},s.default.NoiseSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.NoiseSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},s.default.NoiseSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["noise","envelope"]),this.noise.dispose(),this.noise=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.NoiseSynth},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(21),i(49),i(9),i(41),i(31),i(3),i(26),i(5),[1,1.483,1.932,2.546,2.63,3.897]);s.default.MetalSynth=function(t){t=s.default.defaultArg(t,s.default.MetalSynth.defaults),s.default.Instrument.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this._oscillators=[],this._freqMultipliers=[],this._amplitue=new s.default.Gain(0).connect(this.output),this._highpass=new s.default.Filter({type:"highpass",Q:-3.0102999566398125}).connect(this._amplitue),this._octaves=t.octaves,this._filterFreqScaler=new s.default.Scale(t.resonance,7e3),this.envelope=new s.default.Envelope({attack:t.envelope.attack,attackCurve:"linear",decay:t.envelope.decay,sustain:0,release:t.envelope.release}).chain(this._filterFreqScaler,this._highpass.frequency),this.envelope.connect(this._amplitue.gain);for(var e=0;e<n.length;e++){var i=new s.default.FMOscillator({type:"square",modulationType:"square",harmonicity:t.harmonicity,modulationIndex:t.modulationIndex});i.connect(this._highpass),this._oscillators[e]=i;var o=new s.default.Multiply(n[e]);this._freqMultipliers[e]=o,this.frequency.chain(o,i.frequency)}this.octaves=t.octaves},s.default.extend(s.default.MetalSynth,s.default.Instrument),s.default.MetalSynth.defaults={frequency:200,envelope:{attack:.001,decay:1.4,release:.2},harmonicity:5.1,modulationIndex:32,resonance:4e3,octaves:1.5},s.default.MetalSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),e=s.default.defaultArg(e,1),this.envelope.triggerAttack(t,e),this._oscillators.forEach(function(e){e.start(t)}),0===this.envelope.sustain&&this._oscillators.forEach(function(e){e.stop(t+this.envelope.attack+this.envelope.decay)}.bind(this)),this},s.default.MetalSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this._oscillators.forEach(function(e){e.stop(t+this.envelope.release)}.bind(this)),this},s.default.MetalSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.MetalSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},Object.defineProperty(s.default.MetalSynth.prototype,"modulationIndex",{get:function(){return this._oscillators[0].modulationIndex.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].modulationIndex.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"harmonicity",{get:function(){return this._oscillators[0].harmonicity.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].harmonicity.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"resonance",{get:function(){return this._filterFreqScaler.min},set:function(t){this._filterFreqScaler.min=t,this.octaves=this._octaves}}),Object.defineProperty(s.default.MetalSynth.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._filterFreqScaler.max=this._filterFreqScaler.min*Math.pow(2,t)}}),s.default.MetalSynth.prototype.dispose=function(){s.default.Instrument.prototype.dispose.call(this);for(var t=0;t<this._oscillators.length;t++)this._oscillators[t].dispose(),this._freqMultipliers[t].dispose();this._oscillators=null,this._freqMultipliers=null,this.frequency.dispose(),this.frequency=null,this._filterFreqScaler.dispose(),this._filterFreqScaler=null,this._amplitue.dispose(),this._amplitue=null,this.envelope.dispose(),this.envelope=null,this._highpass.dispose(),this._highpass=null},e.default=s.default.MetalSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(37),i(21),i(31);s.default.MembraneSynth=function(t){t=s.default.defaultArg(t,s.default.MembraneSynth.defaults),s.default.Instrument.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.octaves=t.octaves,this.pitchDecay=t.pitchDecay,this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","envelope"])},s.default.extend(s.default.MembraneSynth,s.default.Instrument),s.default.MembraneSynth.defaults={pitchDecay:.05,octaves:10,oscillator:{type:"sine"},envelope:{attack:.001,decay:.4,sustain:.01,release:1.4,attackCurve:"exponential"}},s.default.MembraneSynth.prototype.triggerAttack=function(t,e,i){e=this.toSeconds(e);var s=(t=this.toFrequency(t))*this.octaves;return this.oscillator.frequency.setValueAtTime(s,e),this.oscillator.frequency.exponentialRampToValueAtTime(t,e+this.toSeconds(this.pitchDecay)),this.envelope.triggerAttack(e,i),this.oscillator.start(e),0===this.envelope.sustain&&this.oscillator.stop(e+this.envelope.attack+this.envelope.decay),this},s.default.MembraneSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MembraneSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["oscillator","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.MembraneSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25);s.default.FMSynth=function(t){t=s.default.defaultArg(t,s.default.FMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth(t.carrier),this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth(t.modulator),this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this._readOnly(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.FMSynth,s.default.Monophonic),s.default.FMSynth.defaults={harmonicity:3,modulationIndex:10,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.FMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.FMSynth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.FMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.modulationIndex.dispose(),this.modulationIndex=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.FMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(66),i(12),i(2),i(5),i(25),i(14);s.default.DuoSynth=function(t){t=s.default.defaultArg(t,s.default.DuoSynth.defaults),s.default.Monophonic.call(this,t),this.voice0=new s.default.MonoSynth(t.voice0),this.voice0.volume.value=-10,this.voice1=new s.default.MonoSynth(t.voice1),this.voice1.volume.value=-10,this._vibrato=new s.default.LFO(t.vibratoRate,-50,50),this._vibrato.start(),this.vibratoRate=this._vibrato.frequency,this._vibratoGain=new s.default.Gain(t.vibratoAmount,s.default.Type.Positive),this.vibratoAmount=this._vibratoGain.gain,this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.frequency.connect(this.voice0.frequency),this.frequency.chain(this.harmonicity,this.voice1.frequency),this._vibrato.connect(this._vibratoGain),this._vibratoGain.fan(this.voice0.detune,this.voice1.detune),this.voice0.connect(this.output),this.voice1.connect(this.output),this._readOnly(["voice0","voice1","frequency","vibratoAmount","vibratoRate"])},s.default.extend(s.default.DuoSynth,s.default.Monophonic),s.default.DuoSynth.defaults={vibratoAmount:.5,vibratoRate:5,harmonicity:1.5,voice0:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}},voice1:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}}},s.default.DuoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.voice0._triggerEnvelopeAttack(t,e),this.voice1._triggerEnvelopeAttack(t,e),this},s.default.DuoSynth.prototype._triggerEnvelopeRelease=function(t){return this.voice0._triggerEnvelopeRelease(t),this.voice1._triggerEnvelopeRelease(t),this},s.default.DuoSynth.prototype.getLevelAtTime=function(t){return(this.voice0.getLevelAtTime(t)+this.voice1.getLevelAtTime(t))/2},s.default.DuoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["voice0","voice1","frequency","vibratoAmount","vibratoRate"]),this.voice0.dispose(),this.voice0=null,this.voice1.dispose(),this.voice1=null,this.frequency.dispose(),this.frequency=null,this._vibratoGain.dispose(),this._vibratoGain=null,this._vibrato=null,this.harmonicity.dispose(),this.harmonicity=null,this.vibratoAmount.dispose(),this.vibratoAmount=null,this.vibratoRate=null,this},e.default=s.default.DuoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25),i(22),i(3);s.default.AMSynth=function(t){t=s.default.defaultArg(t,s.default.AMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth,this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator.set(t.oscillator),this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth,this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationScale=new s.default.AudioToGain,this._modulationNode=new s.default.Gain,this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this._readOnly(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.AMSynth,s.default.Monophonic),s.default.AMSynth.defaults={harmonicity:3,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.AMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.AMSynth.prototype._triggerEnvelopeRelease=function(t){return this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.AMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationScale.dispose(),this._modulationScale=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.AMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(70),i(16);s.default.Sequence=function(){var t=s.default.defaults(arguments,["callback","events","subdivision"],s.default.Sequence),e=t.events;if(delete t.events,s.default.Part.call(this,t),this._subdivision=this.toTicks(t.subdivision),s.default.isUndef(t.loopEnd)&&s.default.isDefined(e)&&(this._loopEnd=e.length*this._subdivision),this._loop=!0,s.default.isDefined(e))for(var i=0;i<e.length;i++)this.add(i,e[i])},s.default.extend(s.default.Sequence,s.default.Part),s.default.Sequence.defaults={subdivision:"4n"},Object.defineProperty(s.default.Sequence.prototype,"subdivision",{get:function(){return s.default.Ticks(this._subdivision).toSeconds()}}),s.default.Sequence.prototype.at=function(t,e){return s.default.isArray(e)&&this.remove(t),s.default.Part.prototype.at.call(this,this._indexTime(t),e)},s.default.Sequence.prototype.add=function(t,e){if(null===e)return this;if(s.default.isArray(e)){var i=Math.round(this._subdivision/e.length);e=new s.default.Sequence(this._tick.bind(this),e,s.default.Ticks(i))}return s.default.Part.prototype.add.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype.remove=function(t,e){return s.default.Part.prototype.remove.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype._indexTime=function(t){return t instanceof s.default.TransportTime?t:s.default.Ticks(t*this._subdivision+this.startOffset).toSeconds()},s.default.Sequence.prototype.dispose=function(){return s.default.Part.prototype.dispose.call(this),this},e.default=s.default.Sequence},function(t,e,i){"use strict";i.r(e);var s=i(0);i(71),i(79);s.default.Pattern=function(){var t=s.default.defaults(arguments,["callback","values","pattern"],s.default.Pattern);s.default.Loop.call(this,t),this._pattern=new s.default.CtrlPattern({values:t.values,type:t.pattern,index:t.index})},s.default.extend(s.default.Pattern,s.default.Loop),s.default.Pattern.defaults={pattern:s.default.CtrlPattern.Type.Up,callback:s.default.noOp,values:[]},s.default.Pattern.prototype._tick=function(t){this.callback(t,this._pattern.value),this._pattern.next()},Object.defineProperty(s.default.Pattern.prototype,"index",{get:function(){return this._pattern.index},set:function(t){this._pattern.index=t}}),Object.defineProperty(s.default.Pattern.prototype,"values",{get:function(){return this._pattern.values},set:function(t){this._pattern.values=t}}),Object.defineProperty(s.default.Pattern.prototype,"value",{get:function(){return this._pattern.value}}),Object.defineProperty(s.default.Pattern.prototype,"pattern",{get:function(){return this._pattern.type},set:function(t){this._pattern.type=t}}),s.default.Pattern.prototype.dispose=function(){s.default.Loop.prototype.dispose.call(this),this._pattern.dispose(),this._pattern=null},e.default=s.default.Pattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(18),i(12);s.default.Vibrato=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Vibrato);s.default.Effect.call(this,t),this._delayNode=new s.default.Delay(0,t.maxDelay),this._lfo=new s.default.LFO({type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,this._readOnly(["frequency","depth"]),this.effectSend.chain(this._delayNode,this.effectReturn)},s.default.extend(s.default.Vibrato,s.default.Effect),s.default.Vibrato.defaults={maxDelay:.005,frequency:5,depth:.1,type:"sine"},Object.defineProperty(s.default.Vibrato.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.Vibrato.prototype.dispose=function(){s.default.Effect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._lfo.dispose(),this._lfo=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null},e.default=s.default.Vibrato},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15);s.default.Tremolo=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Tremolo);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO({phase:t.spread,min:1,max:0}),this._lfoR=new s.default.LFO({phase:t.spread,min:1,max:0}),this._amplitudeL=new s.default.Gain,this._amplitudeR=new s.default.Gain,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.depth=new s.default.Signal(t.depth,s.default.Type.NormalRange),this._readOnly(["frequency","depth"]),this.effectSendL.chain(this._amplitudeL,this.effectReturnL),this.effectSendR.chain(this._amplitudeR,this.effectReturnR),this._lfoL.connect(this._amplitudeL.gain),this._lfoR.connect(this._amplitudeR.gain),this.frequency.fan(this._lfoL.frequency,this._lfoR.frequency),this.depth.fan(this._lfoR.amplitude,this._lfoL.amplitude),this.type=t.type,this.spread=t.spread},s.default.extend(s.default.Tremolo,s.default.StereoEffect),s.default.Tremolo.defaults={frequency:10,type:"sine",depth:.5,spread:180},s.default.Tremolo.prototype.start=function(t){return this._lfoL.start(t),this._lfoR.start(t),this},s.default.Tremolo.prototype.stop=function(t){return this._lfoL.stop(t),this._lfoR.stop(t),this},s.default.Tremolo.prototype.sync=function(t){return this._lfoL.sync(t),this._lfoR.sync(t),s.default.Transport.syncSignal(this.frequency),this},s.default.Tremolo.prototype.unsync=function(){return this._lfoL.unsync(),this._lfoR.unsync(),s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Tremolo.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Tremolo.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Tremolo.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","depth"]),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._amplitudeL.dispose(),this._amplitudeL=null,this._amplitudeR.dispose(),this._amplitudeR=null,this.frequency=null,this.depth=null,this},e.default=s.default.Tremolo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(73),i(2),i(5),i(13);s.default.StereoWidener=function(){var t=s.default.defaults(arguments,["width"],s.default.StereoWidener);s.default.MidSideEffect.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._readOnly(["width"]),this._twoTimesWidthMid=new s.default.Multiply(2),this._twoTimesWidthSide=new s.default.Multiply(2),this._midMult=new s.default.Multiply,this._twoTimesWidthMid.connect(this._midMult,0,1),this.midSend.chain(this._midMult,this.midReturn),this._oneMinusWidth=new s.default.Subtract,this._oneMinusWidth.connect(this._twoTimesWidthMid),s.default.connect(this.context.getConstant(1),this._oneMinusWidth,0,0),this.width.connect(this._oneMinusWidth,0,1),this._sideMult=new s.default.Multiply,this.width.connect(this._twoTimesWidthSide),this._twoTimesWidthSide.connect(this._sideMult,0,1),this.sideSend.chain(this._sideMult,this.sideReturn)},s.default.extend(s.default.StereoWidener,s.default.MidSideEffect),s.default.StereoWidener.defaults={width:.5},s.default.StereoWidener.prototype.dispose=function(){return s.default.MidSideEffect.prototype.dispose.call(this),this._writable(["width"]),this.width.dispose(),this.width=null,this._midMult.dispose(),this._midMult=null,this._sideMult.dispose(),this._sideMult=null,this._twoTimesWidthMid.dispose(),this._twoTimesWidthMid=null,this._twoTimesWidthSide.dispose(),this._twoTimesWidthSide=null,this._oneMinusWidth.dispose(),this._oneMinusWidth=null,this},e.default=s.default.StereoWidener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33),i(3);s.default.StereoFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackL=new s.default.Gain,this._feedbackR=new s.default.Gain,this.effectReturnL.chain(this._feedbackL,this.effectSendL),this.effectReturnR.chain(this._feedbackR,this.effectSendR),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoFeedbackEffect,s.default.StereoEffect),s.default.StereoFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackL.dispose(),this._feedbackL=null,this._feedbackR.dispose(),this._feedbackR=null,this},e.default=s.default.StereoFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(77),i(9),i(10),i(39),i(3),i(74);s.default.Reverb=function(){var t=s.default.defaults(arguments,["decay"],s.default.Reverb);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this.decay=t.decay,this.preDelay=t.preDelay,this.connectEffect(this._convolver)},s.default.extend(s.default.Reverb,s.default.Effect),s.default.Reverb.defaults={decay:1.5,preDelay:.01},s.default.Reverb.prototype.generate=function(){return s.default.Offline(function(){var t=new s.default.Noise,e=new s.default.Noise,i=new s.default.Merge;t.connect(i.left),e.connect(i.right);var n=(new s.default.Gain).toMaster();i.connect(n),t.start(0),e.start(0),n.gain.setValueAtTime(0,0),n.gain.setValueAtTime(1,this.preDelay),n.gain.exponentialApproachValueAtTime(0,this.preDelay,this.decay+this.preDelay)}.bind(this),this.decay+this.preDelay).then(function(t){return this._convolver.buffer=t.get(),this}.bind(this))},s.default.Reverb.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Reverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(23),i(2),i(33),i(18);s.default.PitchShift=function(){var t=s.default.defaults(arguments,["pitch"],s.default.PitchShift);s.default.FeedbackEffect.call(this,t),this._frequency=new s.default.Signal(0),this._delayA=new s.default.Delay(0,1),this._lfoA=new s.default.LFO({min:0,max:.1,type:"sawtooth"}).connect(this._delayA.delayTime),this._delayB=new s.default.Delay(0,1),this._lfoB=new s.default.LFO({min:0,max:.1,type:"sawtooth",phase:180}).connect(this._delayB.delayTime),this._crossFade=new s.default.CrossFade,this._crossFadeLFO=new s.default.LFO({min:0,max:1,type:"triangle",phase:90}).connect(this._crossFade.fade),this._feedbackDelay=new s.default.Delay(t.delayTime),this.delayTime=this._feedbackDelay.delayTime,this._readOnly("delayTime"),this._pitch=t.pitch,this._windowSize=t.windowSize,this._delayA.connect(this._crossFade.a),this._delayB.connect(this._crossFade.b),this._frequency.fan(this._lfoA.frequency,this._lfoB.frequency,this._crossFadeLFO.frequency),this.effectSend.fan(this._delayA,this._delayB),this._crossFade.chain(this._feedbackDelay,this.effectReturn);var e=this.now();this._lfoA.start(e),this._lfoB.start(e),this._crossFadeLFO.start(e),this.windowSize=this._windowSize},s.default.extend(s.default.PitchShift,s.default.FeedbackEffect),s.default.PitchShift.defaults={pitch:0,windowSize:.1,delayTime:0,feedback:0},Object.defineProperty(s.default.PitchShift.prototype,"pitch",{get:function(){return this._pitch},set:function(t){this._pitch=t;var e=0;t<0?(this._lfoA.min=0,this._lfoA.max=this._windowSize,this._lfoB.min=0,this._lfoB.max=this._windowSize,e=s.default.intervalToFrequencyRatio(t-1)+1):(this._lfoA.min=this._windowSize,this._lfoA.max=0,this._lfoB.min=this._windowSize,this._lfoB.max=0,e=s.default.intervalToFrequencyRatio(t)-1),this._frequency.value=e*(1.2/this._windowSize)}}),Object.defineProperty(s.default.PitchShift.prototype,"windowSize",{get:function(){return this._windowSize},set:function(t){this._windowSize=this.toSeconds(t),this.pitch=this._pitch}}),s.default.PitchShift.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._frequency.dispose(),this._frequency=null,this._delayA.disconnect(),this._delayA=null,this._delayB.disconnect(),this._delayB=null,this._lfoA.dispose(),this._lfoA=null,this._lfoB.dispose(),this._lfoB=null,this._crossFade.dispose(),this._crossFade=null,this._crossFadeLFO.dispose(),this._crossFadeLFO=null,this._writable("delayTime"),this._feedbackDelay.dispose(),this._feedbackDelay=null,this.delayTime=null,this},e.default=s.default.PitchShift},function(t,e,i){"use strict";i.r(e);var s=i(0);i(72),i(2),i(18);s.default.PingPongDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.PingPongDelay);s.default.StereoXFeedbackEffect.call(this,t),this._leftDelay=new s.default.Delay(0,t.maxDelayTime),this._rightDelay=new s.default.Delay(0,t.maxDelayTime),this._rightPreDelay=new s.default.Delay(0,t.maxDelayTime),this.delayTime=new s.default.Signal(t.delayTime,s.default.Type.Time),this.effectSendL.chain(this._leftDelay,this.effectReturnL),this.effectSendR.chain(this._rightPreDelay,this._rightDelay,this.effectReturnR),this.delayTime.fan(this._leftDelay.delayTime,this._rightDelay.delayTime,this._rightPreDelay.delayTime),this._feedbackLR.disconnect(),this._feedbackLR.connect(this._rightDelay),this._readOnly(["delayTime"])},s.default.extend(s.default.PingPongDelay,s.default.StereoXFeedbackEffect),s.default.PingPongDelay.defaults={delayTime:.25,maxDelayTime:1},s.default.PingPongDelay.prototype.dispose=function(){return s.default.StereoXFeedbackEffect.prototype.dispose.call(this),this._leftDelay.dispose(),this._leftDelay=null,this._rightDelay.dispose(),this._rightDelay=null,this._rightPreDelay.dispose(),this._rightPreDelay=null,this._writable(["delayTime"]),this.delayTime.dispose(),this.delayTime=null,this},e.default=s.default.PingPongDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(9),i(15);s.default.Phaser=function(){var t=s.default.defaults(arguments,["frequency","octaves","baseFrequency"],s.default.Phaser);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO(t.frequency,0,1),this._lfoR=new s.default.LFO(t.frequency,0,1),this._lfoR.phase=180,this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this.Q=new s.default.Signal(t.Q,s.default.Type.Positive),this._filtersL=this._makeFilters(t.stages,this._lfoL,this.Q),this._filtersR=this._makeFilters(t.stages,this._lfoR,this.Q),this.frequency=this._lfoL.frequency,this.frequency.value=t.frequency,this.effectSendL.connect(this._filtersL[0]),this.effectSendR.connect(this._filtersR[0]),s.default.connect(this._filtersL[t.stages-1],this.effectReturnL),s.default.connect(this._filtersR[t.stages-1],this.effectReturnR),this._lfoL.frequency.connect(this._lfoR.frequency),this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this._lfoL.start(),this._lfoR.start(),this._readOnly(["frequency","Q"])},s.default.extend(s.default.Phaser,s.default.StereoEffect),s.default.Phaser.defaults={frequency:.5,octaves:3,stages:10,Q:10,baseFrequency:350},s.default.Phaser.prototype._makeFilters=function(t,e,i){for(var n=new Array(t),o=0;o<t;o++){var a=this.context.createBiquadFilter();a.type="allpass",i.connect(a.Q),e.connect(a.frequency),n[o]=a}return s.default.connectSeries.apply(s.default,n),n},Object.defineProperty(s.default.Phaser.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t;var e=this._baseFrequency*Math.pow(2,t);this._lfoL.max=e,this._lfoR.max=e}}),Object.defineProperty(s.default.Phaser.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._lfoL.min=t,this._lfoR.min=t,this.octaves=this._octaves}}),s.default.Phaser.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","Q"]),this.Q.dispose(),this.Q=null,this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null;for(var t=0;t<this._filtersL.length;t++)this._filtersL[t].disconnect(),this._filtersL[t]=null;this._filtersL=null;for(var e=0;e<this._filtersR.length;e++)this._filtersR[e].disconnect(),this._filtersR[e]=null;return this._filtersR=null,this.frequency=null,this},e.default=s.default.Phaser},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(59),i(15),i(26),[.06748,.06404,.08212,.09004]),o=[.773,.802,.753,.733],a=[347,113,37];s.default.JCReverb=function(){var t=s.default.defaults(arguments,["roomSize"],s.default.JCReverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this._scaleRoomSize=new s.default.Scale(-.733,.197),this._allpassFilters=[],this._feedbackCombFilters=[];for(var e=0;e<a.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=a[e],this._allpassFilters.push(i)}for(var r=0;r<n.length;r++){var l=new s.default.FeedbackCombFilter(n[r],.1);this._scaleRoomSize.connect(l.resonance),l.resonance.value=o[r],s.default.connect(this._allpassFilters[this._allpassFilters.length-1],l),r<n.length/2?l.connect(this.effectReturnL):l.connect(this.effectReturnR),this._feedbackCombFilters.push(l)}this.roomSize.connect(this._scaleRoomSize),s.default.connectSeries.apply(s.default,this._allpassFilters),this.effectSendL.connect(this._allpassFilters[0]),this.effectSendR.connect(this._allpassFilters[0]),this._readOnly(["roomSize"])},s.default.extend(s.default.JCReverb,s.default.StereoEffect),s.default.JCReverb.defaults={roomSize:.5},s.default.JCReverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFilters.length;t++)this._allpassFilters[t].disconnect(),this._allpassFilters[t]=null;this._allpassFilters=null;for(var e=0;e<this._feedbackCombFilters.length;e++)this._feedbackCombFilters[e].dispose(),this._feedbackCombFilters[e]=null;return this._feedbackCombFilters=null,this._writable(["roomSize"]),this.roomSize.dispose(),this.roomSize=null,this._scaleRoomSize.dispose(),this._scaleRoomSize=null,this},e.default=s.default.JCReverb},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(54),i(15),i(2),i(19),i(10),i(42),[1557/44100,1617/44100,1491/44100,1422/44100,1277/44100,1356/44100,1188/44100,1116/44100]),o=[225,556,441,341];s.default.Freeverb=function(){var t=s.default.defaults(arguments,["roomSize","dampening"],s.default.Freeverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this.dampening=new s.default.Signal(t.dampening,s.default.Type.Frequency),this._combFilters=[],this._allpassFiltersL=[],this._allpassFiltersR=[];for(var e=0;e<o.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=o[e],this._allpassFiltersL.push(i)}for(var a=0;a<o.length;a++){var r=this.context.createBiquadFilter();r.type="allpass",r.frequency.value=o[a],this._allpassFiltersR.push(r)}for(var l=0;l<n.length;l++){var u=new s.default.LowpassCombFilter(n[l]);l<n.length/2?this.effectSendL.chain(u,this._allpassFiltersL[0]):this.effectSendR.chain(u,this._allpassFiltersR[0]),this.roomSize.connect(u.resonance),this.dampening.connect(u.dampening),this._combFilters.push(u)}s.default.connectSeries.apply(s.default,this._allpassFiltersL),s.default.connectSeries.apply(s.default,this._allpassFiltersR),s.default.connect(this._allpassFiltersL[this._allpassFiltersL.length-1],this.effectReturnL),s.default.connect(this._allpassFiltersR[this._allpassFiltersR.length-1],this.effectReturnR),this._readOnly(["roomSize","dampening"])},s.default.extend(s.default.Freeverb,s.default.StereoEffect),s.default.Freeverb.defaults={roomSize:.7,dampening:3e3},s.default.Freeverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFiltersL.length;t++)this._allpassFiltersL[t].disconnect(),this._allpassFiltersL[t]=null;this._allpassFiltersL=null;for(var e=0;e<this._allpassFiltersR.length;e++)this._allpassFiltersR[e].disconnect(),this._allpassFiltersR[e]=null;this._allpassFiltersR=null;for(var i=0;i<this._combFilters.length;i++)this._combFilters[i].dispose(),this._combFilters[i]=null;return this._combFilters=null,this._writable(["roomSize","dampening"]),this.roomSize.dispose(),this.roomSize=null,this.dampening.dispose(),this.dampening=null,this},e.default=s.default.Freeverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(33),i(2),i(18);s.default.FeedbackDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.FeedbackDelay);s.default.FeedbackEffect.call(this,t),this._delayNode=new s.default.Delay(t.delayTime,t.maxDelay),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),this._readOnly(["delayTime"])},s.default.extend(s.default.FeedbackDelay,s.default.FeedbackEffect),s.default.FeedbackDelay.defaults={delayTime:.25,maxDelay:1},s.default.FeedbackDelay.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._writable(["delayTime"]),this.delayTime=null,this},e.default=s.default.FeedbackDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Distortion=function(){var t=s.default.defaults(arguments,["distortion"],s.default.Distortion);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._distortion=t.distortion,this.connectEffect(this._shaper),this.distortion=t.distortion,this.oversample=t.oversample},s.default.extend(s.default.Distortion,s.default.Effect),s.default.Distortion.defaults={distortion:.4,oversample:"none"},Object.defineProperty(s.default.Distortion.prototype,"distortion",{get:function(){return this._distortion},set:function(t){this._distortion=t;var e=100*t,i=Math.PI/180;this._shaper.setMap(function(t){return Math.abs(t)<.001?0:(3+e)*t*20*i/(Math.PI+e*Math.abs(t))})}}),Object.defineProperty(s.default.Distortion.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Distortion.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Distortion},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15),i(18);s.default.Chorus=function(){var t=s.default.defaults(arguments,["frequency","delayTime","depth"],s.default.Chorus);s.default.StereoEffect.call(this,t),this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new s.default.LFO({frequency:t.frequency,min:0,max:1}),this._lfoR=new s.default.LFO({frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new s.default.Delay,this._delayNodeR=new s.default.Delay,this.frequency=this._lfoL.frequency,this.effectSendL.chain(this._delayNodeL,this.effectReturnL),this.effectSendR.chain(this._delayNodeR,this.effectReturnR),this.effectSendL.connect(this.effectReturnL),this.effectSendR.connect(this.effectReturnR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this._lfoL.start(),this._lfoR.start(),this._lfoL.frequency.connect(this._lfoR.frequency),this.depth=this._depth,this.frequency.value=t.frequency,this.type=t.type,this._readOnly(["frequency"]),this.spread=t.spread},s.default.extend(s.default.Chorus,s.default.StereoEffect),s.default.Chorus.defaults={frequency:1.5,delayTime:3.5,depth:.7,type:"sine",spread:180},Object.defineProperty(s.default.Chorus.prototype,"depth",{get:function(){return this._depth},set:function(t){this._depth=t;var e=this._delayTime*t;this._lfoL.min=Math.max(this._delayTime-e,0),this._lfoL.max=this._delayTime+e,this._lfoR.min=Math.max(this._delayTime-e,0),this._lfoR.max=this._delayTime+e}}),Object.defineProperty(s.default.Chorus.prototype,"delayTime",{get:function(){return 1e3*this._delayTime},set:function(t){this._delayTime=t/1e3,this.depth=this._depth}}),Object.defineProperty(s.default.Chorus.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Chorus.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Chorus.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._delayNodeL.dispose(),this._delayNodeL=null,this._delayNodeR.dispose(),this._delayNodeR=null,this._writable("frequency"),this.frequency=null,this},e.default=s.default.Chorus},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Chebyshev=function(){var t=s.default.defaults(arguments,["order"],s.default.Chebyshev);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._order=t.order,this.connectEffect(this._shaper),this.order=t.order,this.oversample=t.oversample},s.default.extend(s.default.Chebyshev,s.default.Effect),s.default.Chebyshev.defaults={order:1,oversample:"none"},s.default.Chebyshev.prototype._getCoefficient=function(t,e,i){return i.hasOwnProperty(e)?i[e]:(i[e]=0===e?0:1===e?t:2*t*this._getCoefficient(t,e-1,i)-this._getCoefficient(t,e-2,i),i[e])},Object.defineProperty(s.default.Chebyshev.prototype,"order",{get:function(){return this._order},set:function(t){this._order=t;for(var e=new Array(4096),i=e.length,s=0;s<i;++s){var n=2*s/i-1;e[s]=0===n?0:this._getCoefficient(n,t,{})}this._shaper.curve=e}}),Object.defineProperty(s.default.Chebyshev.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Chebyshev.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Chebyshev},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(13),i(75);s.default.BitCrusher=function(){var t=s.default.defaults(arguments,["bits"],s.default.BitCrusher);s.default.Effect.call(this,t);var e=1/Math.pow(2,t.bits-1);this._subtract=new s.default.Subtract,this._modulo=new s.default.Modulo(e),this._bits=t.bits,this.effectSend.fan(this._subtract,this._modulo),this._modulo.connect(this._subtract,0,1),this._subtract.connect(this.effectReturn)},s.default.extend(s.default.BitCrusher,s.default.Effect),s.default.BitCrusher.defaults={bits:4},Object.defineProperty(s.default.BitCrusher.prototype,"bits",{get:function(){return this._bits},set:function(t){this._bits=t;var e=1/Math.pow(2,t-1);this._modulo.value=e}}),s.default.BitCrusher.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._subtract.dispose(),this._subtract=null,this._modulo.dispose(),this._modulo=null,this},e.default=s.default.BitCrusher},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(42),i(8),i(9);s.default.AutoWah=function(){var t=s.default.defaults(arguments,["baseFrequency","octaves","sensitivity"],s.default.AutoWah);s.default.Effect.call(this,t),this.follower=new s.default.Follower(t.follower),this._sweepRange=new s.default.ScaleExp(0,1,.5),this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this._inputBoost=new s.default.Gain,this._bandpass=new s.default.Filter({rolloff:-48,frequency:0,Q:t.Q}),this._peaking=new s.default.Filter(0,"peaking"),this._peaking.gain.value=t.gain,this.gain=this._peaking.gain,this.Q=this._bandpass.Q,this.effectSend.chain(this._inputBoost,this.follower,this._sweepRange),this._sweepRange.connect(this._bandpass.frequency),this._sweepRange.connect(this._peaking.frequency),this.effectSend.chain(this._bandpass,this._peaking,this.effectReturn),this._setSweepRange(),this.sensitivity=t.sensitivity,this._readOnly(["gain","Q"])},s.default.extend(s.default.AutoWah,s.default.Effect),s.default.AutoWah.defaults={baseFrequency:100,octaves:6,sensitivity:0,Q:2,gain:2,follower:{attack:.3,release:.5}},Object.defineProperty(s.default.AutoWah.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"sensitivity",{get:function(){return s.default.gainToDb(1/this._inputBoost.gain.value)},set:function(t){this._inputBoost.gain.value=1/s.default.dbToGain(t)}}),s.default.AutoWah.prototype._setSweepRange=function(){this._sweepRange.min=this._baseFrequency,this._sweepRange.max=Math.min(this._baseFrequency*Math.pow(2,this._octaves),this.context.sampleRate/2)},s.default.AutoWah.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this.follower.dispose(),this.follower=null,this._sweepRange.dispose(),this._sweepRange=null,this._bandpass.dispose(),this._bandpass=null,this._peaking.dispose(),this._peaking=null,this._inputBoost.dispose(),this._inputBoost=null,this._writable(["gain","Q"]),this.gain=null,this.Q=null,this},e.default=s.default.AutoWah},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(48);s.default.AutoPanner=function(){var t=s.default.defaults(arguments,["frequency"],s.default.AutoPanner);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth,min:-1,max:1}),this.depth=this._lfo.amplitude,this._panner=new s.default.Panner,this.frequency=this._lfo.frequency,this.connectEffect(this._panner),this._lfo.connect(this._panner.pan),this.type=t.type,this._readOnly(["depth","frequency"])},s.default.extend(s.default.AutoPanner,s.default.Effect),s.default.AutoPanner.defaults={frequency:1,type:"sine",depth:1},s.default.AutoPanner.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoPanner.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoPanner.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoPanner.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoPanner.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.AutoPanner.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this._panner.dispose(),this._panner=null,this._writable(["depth","frequency"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoPanner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(9);s.default.AutoFilter=function(){var t=s.default.defaults(arguments,["frequency","baseFrequency","octaves"],s.default.AutoFilter);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth}),this.depth=this._lfo.amplitude,this.frequency=this._lfo.frequency,this.filter=new s.default.Filter(t.filter),this._octaves=0,this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.type=t.type,this._readOnly(["frequency","depth"]),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency},s.default.extend(s.default.AutoFilter,s.default.Effect),s.default.AutoFilter.defaults={frequency:1,type:"sine",depth:1,baseFrequency:200,octaves:2.6,filter:{type:"lowpass",rolloff:-12,Q:1}},s.default.AutoFilter.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoFilter.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoFilter.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoFilter.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoFilter.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),Object.defineProperty(s.default.AutoFilter.prototype,"baseFrequency",{get:function(){return this._lfo.min},set:function(t){this._lfo.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.AutoFilter.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._lfo.max=this.baseFrequency*Math.pow(2,t)}}),s.default.AutoFilter.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this.filter.dispose(),this.filter=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28);s.default.Listener=function(){s.default.call(this),this._orientation=[0,0,0,0,0,0],this._position=[0,0,0],s.default.getContext(function(){this.set(n.defaults)}.bind(this))},s.default.extend(s.default.Listener),s.default.Listener.defaults={positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:1,upX:0,upY:1,upZ:0},s.default.Listener.prototype.isListener=!0,s.default.Listener.prototype._rampTimeConstant=.01,s.default.Listener.prototype.setPosition=function(t,e,i){if(this.context.rawContext.listener.positionX){var s=this.now();this.context.rawContext.listener.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this.context.rawContext.listener.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this.context.rawContext.listener.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this.context.rawContext.listener.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Listener.prototype.setOrientation=function(t,e,i,s,n,o){if(this.context.rawContext.listener.forwardX){var a=this.now();this.context.rawContext.listener.forwardX.setTargetAtTime(t,a,this._rampTimeConstant),this.context.rawContext.listener.forwardY.setTargetAtTime(e,a,this._rampTimeConstant),this.context.rawContext.listener.forwardZ.setTargetAtTime(i,a,this._rampTimeConstant),this.context.rawContext.listener.upX.setTargetAtTime(s,a,this._rampTimeConstant),this.context.rawContext.listener.upY.setTargetAtTime(n,a,this._rampTimeConstant),this.context.rawContext.listener.upZ.setTargetAtTime(o,a,this._rampTimeConstant)}else this.context.rawContext.listener.setOrientation(t,e,i,s,n,o);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Listener.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Listener.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Listener.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Listener.prototype,"forwardX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Listener.prototype,"forwardY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Listener.prototype,"forwardZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),Object.defineProperty(s.default.Listener.prototype,"upX",{set:function(t){this._orientation[3]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[3]}}),Object.defineProperty(s.default.Listener.prototype,"upY",{set:function(t){this._orientation[4]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[4]}}),Object.defineProperty(s.default.Listener.prototype,"upZ",{set:function(t){this._orientation[5]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[5]}}),s.default.Listener.prototype.dispose=function(){return this._orientation=null,this._position=null,this};var n=s.default.Listener;s.default.Listener=new n,s.default.Context.on("init",function(t){t.listener&&t.listener.isListener?s.default.Listener=t.listener:s.default.Listener=new n}),e.default=s.default.Listener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24);s.default.Draw=function(){s.default.call(this),this._events=new s.default.Timeline,this.expiration=.25,this.anticipation=.008,this._boundDrawLoop=this._drawLoop.bind(this)},s.default.extend(s.default.Draw),s.default.Draw.prototype.schedule=function(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),1===this._events.length&&requestAnimationFrame(this._boundDrawLoop),this},s.default.Draw.prototype.cancel=function(t){return this._events.cancel(this.toSeconds(t)),this},s.default.Draw.prototype._drawLoop=function(){for(var t=s.default.context.currentTime;this._events.length&&this._events.peek().time-this.anticipation<=t;){var e=this._events.shift();t-e.time<=this.expiration&&e.callback()}this._events.length>0&&requestAnimationFrame(this._boundDrawLoop)},s.default.Draw=new s.default.Draw,e.default=s.default.Draw},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(3),{});s.default.prototype.send=function(t,e){n.hasOwnProperty(t)||(n[t]=this.context.createGain()),e=s.default.defaultArg(e,0);var i=new s.default.Gain(e,s.default.Type.Decibels);return this.connect(i),i.connect(n[t]),i},s.default.prototype.receive=function(t,e){return n.hasOwnProperty(t)||(n[t]=this.context.createGain()),s.default.connect(n[t],this,0,e),this},s.default.Context.on("init",function(t){t.buses?n=t.buses:(n={},t.buses=n)}),e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlRandom=function(){var t=s.default.defaults(arguments,["min","max"],s.default.CtrlRandom);s.default.call(this),this.min=t.min,this.max=t.max,this.integer=t.integer},s.default.extend(s.default.CtrlRandom),s.default.CtrlRandom.defaults={min:0,max:1,integer:!1},Object.defineProperty(s.default.CtrlRandom.prototype,"value",{get:function(){var t=this.toSeconds(this.min),e=this.toSeconds(this.max),i=Math.random(),s=i*t+(1-i)*e;return this.integer&&(s=Math.floor(s)),s}}),e.default=s.default.CtrlRandom},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlMarkov=function(t,e){s.default.call(this),this.values=s.default.defaultArg(t,{}),this.value=s.default.defaultArg(e,Object.keys(this.values)[0])},s.default.extend(s.default.CtrlMarkov),s.default.CtrlMarkov.prototype.next=function(){if(this.values.hasOwnProperty(this.value)){var t=this.values[this.value];if(s.default.isArray(t))for(var e=this._getProbDistribution(t),i=Math.random(),n=0,o=0;o<e.length;o++){var a=e[o];if(i>n&&i<n+a){var r=t[o];s.default.isObject(r)?this.value=r.value:this.value=r}n+=a}else this.value=t}return this.value},s.default.CtrlMarkov.prototype._getProbDistribution=function(t){for(var e=[],i=0,n=!1,o=0;o<t.length;o++){var a=t[o];s.default.isObject(a)?(n=!0,e[o]=a.probability):e[o]=1/t.length,i+=e[o]}if(n)for(var r=0;r<e.length;r++)e[r]=e[r]/i;return e},s.default.CtrlMarkov.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlMarkov},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlInterpolate=function(){var t=s.default.defaults(arguments,["values","index"],s.default.CtrlInterpolate);s.default.call(this),this.values=t.values,this.index=t.index},s.default.extend(s.default.CtrlInterpolate),s.default.CtrlInterpolate.defaults={index:0,values:[]},Object.defineProperty(s.default.CtrlInterpolate.prototype,"value",{get:function(){var t=this.index;t=Math.min(t,this.values.length-1);var e=Math.floor(t),i=this.values[e],s=this.values[Math.ceil(t)];return this._interpolate(t-e,i,s)}}),s.default.CtrlInterpolate.prototype._interpolate=function(t,e,i){if(s.default.isArray(e)){for(var n=[],o=0;o<e.length;o++)n[o]=this._interpolate(t,e[o],i[o]);return n}if(s.default.isObject(e)){var a={};for(var r in e)a[r]=this._interpolate(t,e[r],i[r]);return a}return(1-t)*(e=this._toNumber(e))+t*(i=this._toNumber(i))},s.default.CtrlInterpolate.prototype._toNumber=function(t){return s.default.isNumber(t)?t:this.toSeconds(t)},s.default.CtrlInterpolate.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlInterpolate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Waveform=function(){var t=s.default.defaults(arguments,["size"],s.default.Waveform);t.type=s.default.Analyser.Type.Waveform,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.Waveform,s.default.AudioNode),s.default.Waveform.defaults={size:1024},s.default.Waveform.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.Waveform.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.Waveform.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.Waveform},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28),i(1);s.default.Panner3D=function(){var t=s.default.defaults(arguments,["positionX","positionY","positionZ"],s.default.Panner3D);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createPanner(),this._panner.panningModel=t.panningModel,this._panner.maxDistance=t.maxDistance,this._panner.distanceModel=t.distanceModel,this._panner.coneOuterGain=t.coneOuterGain,this._panner.coneOuterAngle=t.coneOuterAngle,this._panner.coneInnerAngle=t.coneInnerAngle,this._panner.refDistance=t.refDistance,this._panner.rolloffFactor=t.rolloffFactor,this._orientation=[t.orientationX,t.orientationY,t.orientationZ],this._position=[t.positionX,t.positionY,t.positionZ],this.orientationX=t.orientationX,this.orientationY=t.orientationY,this.orientationZ=t.orientationZ,this.positionX=t.positionX,this.positionY=t.positionY,this.positionZ=t.positionZ},s.default.extend(s.default.Panner3D,s.default.AudioNode),s.default.Panner3D.defaults={positionX:0,positionY:0,positionZ:0,orientationX:0,orientationY:0,orientationZ:0,panningModel:"equalpower",maxDistance:1e4,distanceModel:"inverse",coneOuterGain:0,coneOuterAngle:360,coneInnerAngle:360,refDistance:1,rolloffFactor:1},s.default.Panner3D.prototype._rampTimeConstant=.01,s.default.Panner3D.prototype.setPosition=function(t,e,i){if(this._panner.positionX){var s=this.now();this._panner.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Panner3D.prototype.setOrientation=function(t,e,i){if(this._panner.orientationX){var s=this.now();this._panner.orientationX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.orientationY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.orientationZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setOrientation(t,e,i);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Panner3D.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),s.default.Panner3D._aliasProperty=function(t){Object.defineProperty(s.default.Panner3D.prototype,t,{set:function(e){this._panner[t]=e},get:function(){return this._panner[t]}})},s.default.Panner3D._aliasProperty("panningModel"),s.default.Panner3D._aliasProperty("refDistance"),s.default.Panner3D._aliasProperty("rolloffFactor"),s.default.Panner3D._aliasProperty("distanceModel"),s.default.Panner3D._aliasProperty("coneInnerAngle"),s.default.Panner3D._aliasProperty("coneOuterAngle"),s.default.Panner3D._aliasProperty("coneOuterGain"),s.default.Panner3D._aliasProperty("maxDistance"),s.default.Panner3D.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._panner.disconnect(),this._panner=null,this._orientation=null,this._position=null,this},e.default=s.default.Panner3D},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(43),i(1);s.default.MultibandCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(arguments,s.default.MultibandCompressor.defaults),this._splitter=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this.lowFrequency=this._splitter.lowFrequency,this.highFrequency=this._splitter.highFrequency,this.output=new s.default.Gain,this.low=new s.default.Compressor(t.low),this.mid=new s.default.Compressor(t.mid),this.high=new s.default.Compressor(t.high),this._splitter.low.chain(this.low,this.output),this._splitter.mid.chain(this.mid,this.output),this._splitter.high.chain(this.high,this.output),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandCompressor,s.default.AudioNode),s.default.MultibandCompressor.defaults={low:s.default.Compressor.defaults,mid:s.default.Compressor.defaults,high:s.default.Compressor.defaults,lowFrequency:250,highFrequency:2e3},s.default.MultibandCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._splitter.dispose(),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this._splitter=null,this.low=null,this.mid=null,this.high=null,this.lowFrequency=null,this.highFrequency=null,this},e.default=s.default.MultibandCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(10),i(1);s.default.Mono=function(){s.default.AudioNode.call(this),this.createInsOuts(1,0),this._merge=this.output=new s.default.Merge,s.default.connect(this.input,this._merge,0,0),s.default.connect(this.input,this._merge,0,1)},s.default.extend(s.default.Mono,s.default.AudioNode),s.default.Mono.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._merge.dispose(),this._merge=null,this},e.default=s.default.Mono},function(t,e,i){"use strict";i.r(e);var s=i(0);i(53),i(52),i(43),i(1);s.default.MidSideCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(t,s.default.MidSideCompressor.defaults),this._midSideSplit=this.input=new s.default.MidSideSplit,this._midSideMerge=this.output=new s.default.MidSideMerge,this.mid=new s.default.Compressor(t.mid),this.side=new s.default.Compressor(t.side),this._midSideSplit.mid.chain(this.mid,this._midSideMerge.mid),this._midSideSplit.side.chain(this.side,this._midSideMerge.side),this._readOnly(["mid","side"])},s.default.extend(s.default.MidSideCompressor,s.default.AudioNode),s.default.MidSideCompressor.defaults={mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},side:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10}},s.default.MidSideCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["mid","side"]),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this},e.default=s.default.MidSideCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Meter=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Meter);s.default.AudioNode.call(this),this.smoothing=t.smoothing,this._rms=0,this.input=this.output=this._analyser=new s.default.Analyser("waveform",256)},s.default.extend(s.default.Meter,s.default.AudioNode),s.default.Meter.defaults={smoothing:.8},s.default.Meter.prototype.getLevel=function(){for(var t=this._analyser.getValue(),e=0,i=0;i<t.length;i++){var n=t[i];e+=n*n}var o=Math.sqrt(e/t.length);return this._rms=Math.max(o,this._rms*this.smoothing),s.default.gainToDb(this._rms)},s.default.Meter.prototype.getValue=function(){return this._analyser.getValue()[0]},s.default.Meter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null,this},e.default=s.default.Meter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(43),i(1);s.default.Limiter=function(){var t=s.default.defaults(arguments,["threshold"],s.default.Limiter);s.default.AudioNode.call(this),this._compressor=this.input=this.output=new s.default.Compressor({attack:.001,decay:.001,threshold:t.threshold}),this.threshold=this._compressor.threshold,this._readOnly("threshold")},s.default.extend(s.default.Limiter,s.default.AudioNode),s.default.Limiter.defaults={threshold:-12},s.default.Limiter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._compressor.dispose(),this._compressor=null,this._writable("threshold"),this.threshold=null,this},e.default=s.default.Limiter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(85),i(1);s.default.Gate=function(){var t=s.default.defaults(arguments,["threshold","smoothing"],s.default.Gate);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._follower=new s.default.Follower(t.smoothing),this._gt=new s.default.GreaterThan(s.default.dbToGain(t.threshold)),s.default.connect(this.input,this.output),s.default.connectSeries(this.input,this._follower,this._gt,this.output.gain)},s.default.extend(s.default.Gate,s.default.AudioNode),s.default.Gate.defaults={smoothing:.1,threshold:-40},Object.defineProperty(s.default.Gate.prototype,"threshold",{get:function(){return s.default.gainToDb(this._gt.value)},set:function(t){this._gt.value=s.default.dbToGain(t)}}),Object.defineProperty(s.default.Gate.prototype,"smoothing",{get:function(){return this._follower.smoothing},set:function(t){this._follower.smoothing=t}}),s.default.Gate.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._follower.dispose(),this._gt.dispose(),this._follower=null,this._gt=null,this},e.default=s.default.Gate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.FFT=function(){var t=s.default.defaults(arguments,["size"],s.default.FFT);t.type=s.default.Analyser.Type.FFT,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.FFT,s.default.AudioNode),s.default.FFT.defaults={size:1024},s.default.FFT.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.FFT.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.FFT.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.FFT},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(3),i(1);s.default.EQ3=function(){var t=s.default.defaults(arguments,["low","mid","high"],s.default.EQ3);s.default.AudioNode.call(this),this.output=new s.default.Gain,this._multibandSplit=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this._lowGain=new s.default.Gain(t.low,s.default.Type.Decibels),this._midGain=new s.default.Gain(t.mid,s.default.Type.Decibels),this._highGain=new s.default.Gain(t.high,s.default.Type.Decibels),this.low=this._lowGain.gain,this.mid=this._midGain.gain,this.high=this._highGain.gain,this.Q=this._multibandSplit.Q,this.lowFrequency=this._multibandSplit.lowFrequency,this.highFrequency=this._multibandSplit.highFrequency,this._multibandSplit.low.chain(this._lowGain,this.output),this._multibandSplit.mid.chain(this._midGain,this.output),this._multibandSplit.high.chain(this._highGain,this.output),this._readOnly(["low","mid","high","lowFrequency","highFrequency"])},s.default.extend(s.default.EQ3,s.default.AudioNode),s.default.EQ3.defaults={low:0,mid:0,high:0,lowFrequency:400,highFrequency:2500},s.default.EQ3.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["low","mid","high","lowFrequency","highFrequency"]),this._multibandSplit.dispose(),this._multibandSplit=null,this.lowFrequency=null,this.highFrequency=null,this._lowGain.dispose(),this._lowGain=null,this._midGain.dispose(),this._midGain=null,this._highGain.dispose(),this._highGain=null,this.low=null,this.mid=null,this.high=null,this.Q=null,this},e.default=s.default.EQ3},function(t,e,i){"use strict";i.r(e);var s=i(0);i(91),i(88),i(1);s.default.Channel=function(){var t=s.default.defaults(arguments,["volume","pan"],s.default.PanVol);s.default.AudioNode.call(this,t),this._solo=this.input=new s.default.Solo(t.solo),this._panVol=this.output=new s.default.PanVol({pan:t.pan,volume:t.volume,mute:t.mute}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),this._readOnly(["pan","volume"])},s.default.extend(s.default.Channel,s.default.AudioNode),s.default.Channel.defaults={pan:0,volume:0,mute:!1,solo:!1},Object.defineProperty(s.default.Channel.prototype,"solo",{get:function(){return this._solo.solo},set:function(t){this._solo.solo=t}}),Object.defineProperty(s.default.Channel.prototype,"muted",{get:function(){return this._solo.muted||this.mute}}),Object.defineProperty(s.default.Channel.prototype,"mute",{get:function(){return this._panVol.mute},set:function(t){this._panVol.mute=t}}),s.default.Channel.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panVol.dispose(),this._panVol=null,this.pan=null,this.volume=null,this._solo.dispose(),this._solo=null,this},e.default=s.default.Channel},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){i(31),i(36),i(146),i(43),i(23),i(47),i(145),i(59),i(144),i(9),i(58),i(41),i(143),i(12),i(142),i(54),i(10),i(141),i(140),i(52),i(53),i(139),i(138),i(60),i(48),i(137),i(91),i(86),i(88),i(19),i(27),i(136),i(135),i(134),i(79),i(133),i(1),i(11),i(78),i(132),i(83),i(20),i(18),i(131),i(35),i(3),i(81),i(130),i(40),i(77),i(76),i(14),i(24),i(34),i(16),i(56),i(80),i(129),i(128),i(127),i(126),i(125),i(124),i(74),i(123),i(8),i(122),i(33),i(121),i(120),i(73),i(119),i(118),i(117),i(116),i(15),i(115),i(114),i(72),i(113),i(112),i(51),i(71),i(70),i(111),i(110),i(109),i(108),i(107),i(21),i(106),i(105),i(25),i(66),i(104),i(103),i(102),i(101),i(38),i(87),i(29),i(22),i(89),i(100),i(85),i(84),i(75),i(5),i(90),i(99),i(61),i(26),i(42),i(2),i(30),i(13),i(82),i(98),i(7),i(28),i(68),i(32),i(67),i(49),i(97),i(39),i(37),i(17),i(64),i(65),i(96),i(50),i(69),i(6),i(57),i(95),i(46),i(94),i(55),i(63),i(62),i(45),i(4),t.exports=i(0).default}])});
//# sourceMappingURL=Tone.js.map

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createControlChanges = void 0;
var ControlChange_1 = __webpack_require__(434);
/**
 * Automatically creates an alias for named control values using Proxies
 * @hidden
 */
function createControlChanges() {
    return new Proxy({}, {
        // tslint:disable-next-line: typedef
        get: function (target, handler) {
            if (target[handler]) {
                return target[handler];
            }
            else if (ControlChange_1.controlChangeIds.hasOwnProperty(handler)) {
                return target[ControlChange_1.controlChangeIds[handler]];
            }
        },
        // tslint:disable-next-line: typedef
        set: function (target, handler, value) {
            if (ControlChange_1.controlChangeIds.hasOwnProperty(handler)) {
                target[ControlChange_1.controlChangeIds[handler]] = value;
            }
            else {
                target[handler] = value;
            }
            return true;
        },
    });
}
exports.createControlChanges = createControlChanges;
//# sourceMappingURL=ControlChanges.js.map

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
var midi_file_1 = __webpack_require__(465);
var Header_1 = __webpack_require__(404);
var array_flatten_1 = __webpack_require__(474);
function encodeNote(note, channel) {
    return [{
            absoluteTime: note.ticks,
            channel: channel,
            deltaTime: 0,
            noteNumber: note.midi,
            type: "noteOn",
            velocity: Math.floor(note.velocity * 127),
        },
        {
            absoluteTime: note.ticks + note.durationTicks,
            channel: channel,
            deltaTime: 0,
            noteNumber: note.midi,
            type: "noteOff",
            velocity: Math.floor(note.noteOffVelocity * 127),
        }];
}
function encodeNotes(track) {
    return (0, array_flatten_1.flatten)(track.notes.map(function (note) { return encodeNote(note, track.channel); }));
}
function encodeControlChange(cc, channel) {
    return {
        absoluteTime: cc.ticks,
        channel: channel,
        controllerType: cc.number,
        deltaTime: 0,
        type: "controller",
        value: Math.floor(cc.value * 127),
    };
}
function encodeControlChanges(track) {
    var controlChanges = [];
    for (var i = 0; i < 127; i++) {
        if (track.controlChanges.hasOwnProperty(i)) {
            track.controlChanges[i].forEach(function (cc) {
                controlChanges.push(encodeControlChange(cc, track.channel));
            });
        }
    }
    return controlChanges;
}
function encodePitchBend(pb, channel) {
    return {
        absoluteTime: pb.ticks,
        channel: channel,
        deltaTime: 0,
        type: "pitchBend",
        value: pb.value,
    };
}
function encodePitchBends(track) {
    var pitchBends = [];
    track.pitchBends.forEach(function (pb) {
        pitchBends.push(encodePitchBend(pb, track.channel));
    });
    return pitchBends;
}
function encodeInstrument(track) {
    return {
        absoluteTime: 0,
        channel: track.channel,
        deltaTime: 0,
        programNumber: track.instrument.number,
        type: "programChange",
    };
}
function encodeTrackName(name) {
    return {
        absoluteTime: 0,
        deltaTime: 0,
        meta: true,
        text: name,
        type: "trackName",
    };
}
function encodeTempo(tempo) {
    return {
        absoluteTime: tempo.ticks,
        deltaTime: 0,
        meta: true,
        microsecondsPerBeat: Math.floor(60000000 / tempo.bpm),
        type: "setTempo",
    };
}
function encodeTimeSignature(timeSig) {
    return {
        absoluteTime: timeSig.ticks,
        deltaTime: 0,
        denominator: timeSig.timeSignature[1],
        meta: true,
        metronome: 24,
        numerator: timeSig.timeSignature[0],
        thirtyseconds: 8,
        type: "timeSignature",
    };
}
// function encodeMeta(event: )
function encodeKeySignature(keySig) {
    var keyIndex = Header_1.keySignatureKeys.indexOf(keySig.key);
    return {
        absoluteTime: keySig.ticks,
        deltaTime: 0,
        key: keyIndex + 7,
        meta: true,
        scale: keySig.scale === "major" ? 0 : 1,
        type: "keySignature",
    };
}
function encodeText(textEvent) {
    return {
        absoluteTime: textEvent.ticks,
        deltaTime: 0,
        meta: true,
        text: textEvent.text,
        type: textEvent.type,
    };
}
/**
 * Convert the MIDI object to an array.
 */
function encode(midi) {
    var midiData = {
        header: {
            format: 1,
            numTracks: midi.tracks.length + 1,
            ticksPerBeat: midi.header.ppq,
        },
        tracks: __spreadArray([
            __spreadArray(__spreadArray(__spreadArray(__spreadArray([
                // The name data.
                {
                    absoluteTime: 0,
                    deltaTime: 0,
                    meta: true,
                    text: midi.header.name,
                    type: "trackName",
                }
            ], midi.header.keySignatures.map(function (keySig) { return encodeKeySignature(keySig); }), true), midi.header.meta.map(function (e) { return encodeText(e); }), true), midi.header.tempos.map(function (tempo) { return encodeTempo(tempo); }), true), midi.header.timeSignatures.map(function (timeSig) { return encodeTimeSignature(timeSig); }), true)
        ], midi.tracks.map(function (track) {
            return __spreadArray(__spreadArray(__spreadArray([
                // Add the name
                encodeTrackName(track.name),
                // the instrument
                encodeInstrument(track)
            ], encodeNotes(track), true), encodeControlChanges(track), true), encodePitchBends(track), true);
        }), true),
    };
    // Sort and set `deltaTime` of all of the tracks.
    midiData.tracks = midiData.tracks.map(function (track) {
        track = track.sort(function (a, b) { return a.absoluteTime - b.absoluteTime; });
        var lastTime = 0;
        track.forEach(function (note) {
            note.deltaTime = note.absoluteTime - lastTime;
            lastTime = note.absoluteTime;
            delete note.absoluteTime;
        });
        // End of track.
        track.push({
            deltaTime: 0,
            meta: true,
            type: "endOfTrack",
        });
        return track;
    });
    // Rreturn `midiData`.
    return new Uint8Array((0, midi_file_1.writeMidi)(midiData));
}
exports.encode = encode;
//# sourceMappingURL=Encode.js.map

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrument = void 0;
var InstrumentMaps_1 = __webpack_require__(470);
/**
 * @hidden
 */
var privateTrackMap = new WeakMap();
/**
 * Describes the MIDI instrument of a track.
 */
var Instrument = /** @class */ (function () {
    /**
     * @param trackData
     * @param track
     */
    function Instrument(trackData, track) {
        /**
         * The instrument number. Defaults to 0.
         */
        this.number = 0;
        privateTrackMap.set(this, track);
        this.number = 0;
        if (trackData) {
            var programChange = trackData.find(function (e) { return e.type === "programChange"; });
            // Set 'number' from 'programNumber' if exists.
            if (programChange) {
                this.number = programChange.programNumber;
            }
        }
    }
    Object.defineProperty(Instrument.prototype, "name", {
        /**
         * The common name of the instrument.
         */
        get: function () {
            if (this.percussion) {
                return InstrumentMaps_1.DrumKitByPatchID[this.number];
            }
            else {
                return InstrumentMaps_1.instrumentByPatchID[this.number];
            }
        },
        set: function (n) {
            var patchNumber = InstrumentMaps_1.instrumentByPatchID.indexOf(n);
            if (patchNumber !== -1) {
                this.number = patchNumber;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "family", {
        /**
         * The instrument family, e.g. "piano".
         */
        get: function () {
            if (this.percussion) {
                return "drums";
            }
            else {
                return InstrumentMaps_1.InstrumentFamilyByID[Math.floor(this.number / 8)];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "percussion", {
        /**
         * If the instrument is a percussion instrument.
         */
        get: function () {
            var track = privateTrackMap.get(this);
            return track.channel === 9;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Convert it to JSON form.
     */
    Instrument.prototype.toJSON = function () {
        return {
            family: this.family,
            number: this.number,
            name: this.name
        };
    };
    /**
     * Convert from JSON form.
     */
    Instrument.prototype.fromJSON = function (json) {
        this.number = json.number;
    };
    return Instrument;
}());
exports.Instrument = Instrument;
//# sourceMappingURL=Instrument.js.map

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrumKitByPatchID = exports.InstrumentFamilyByID = exports.instrumentByPatchID = void 0;
exports.instrumentByPatchID = [
    "acoustic grand piano",
    "bright acoustic piano",
    "electric grand piano",
    "honky-tonk piano",
    "electric piano 1",
    "electric piano 2",
    "harpsichord",
    "clavi",
    "celesta",
    "glockenspiel",
    "music box",
    "vibraphone",
    "marimba",
    "xylophone",
    "tubular bells",
    "dulcimer",
    "drawbar organ",
    "percussive organ",
    "rock organ",
    "church organ",
    "reed organ",
    "accordion",
    "harmonica",
    "tango accordion",
    "acoustic guitar (nylon)",
    "acoustic guitar (steel)",
    "electric guitar (jazz)",
    "electric guitar (clean)",
    "electric guitar (muted)",
    "overdriven guitar",
    "distortion guitar",
    "guitar harmonics",
    "acoustic bass",
    "electric bass (finger)",
    "electric bass (pick)",
    "fretless bass",
    "slap bass 1",
    "slap bass 2",
    "synth bass 1",
    "synth bass 2",
    "violin",
    "viola",
    "cello",
    "contrabass",
    "tremolo strings",
    "pizzicato strings",
    "orchestral harp",
    "timpani",
    "string ensemble 1",
    "string ensemble 2",
    "synthstrings 1",
    "synthstrings 2",
    "choir aahs",
    "voice oohs",
    "synth voice",
    "orchestra hit",
    "trumpet",
    "trombone",
    "tuba",
    "muted trumpet",
    "french horn",
    "brass section",
    "synthbrass 1",
    "synthbrass 2",
    "soprano sax",
    "alto sax",
    "tenor sax",
    "baritone sax",
    "oboe",
    "english horn",
    "bassoon",
    "clarinet",
    "piccolo",
    "flute",
    "recorder",
    "pan flute",
    "blown bottle",
    "shakuhachi",
    "whistle",
    "ocarina",
    "lead 1 (square)",
    "lead 2 (sawtooth)",
    "lead 3 (calliope)",
    "lead 4 (chiff)",
    "lead 5 (charang)",
    "lead 6 (voice)",
    "lead 7 (fifths)",
    "lead 8 (bass + lead)",
    "pad 1 (new age)",
    "pad 2 (warm)",
    "pad 3 (polysynth)",
    "pad 4 (choir)",
    "pad 5 (bowed)",
    "pad 6 (metallic)",
    "pad 7 (halo)",
    "pad 8 (sweep)",
    "fx 1 (rain)",
    "fx 2 (soundtrack)",
    "fx 3 (crystal)",
    "fx 4 (atmosphere)",
    "fx 5 (brightness)",
    "fx 6 (goblins)",
    "fx 7 (echoes)",
    "fx 8 (sci-fi)",
    "sitar",
    "banjo",
    "shamisen",
    "koto",
    "kalimba",
    "bag pipe",
    "fiddle",
    "shanai",
    "tinkle bell",
    "agogo",
    "steel drums",
    "woodblock",
    "taiko drum",
    "melodic tom",
    "synth drum",
    "reverse cymbal",
    "guitar fret noise",
    "breath noise",
    "seashore",
    "bird tweet",
    "telephone ring",
    "helicopter",
    "applause",
    "gunshot",
];
exports.InstrumentFamilyByID = [
    "piano",
    "chromatic percussion",
    "organ",
    "guitar",
    "bass",
    "strings",
    "ensemble",
    "brass",
    "reed",
    "pipe",
    "synth lead",
    "synth pad",
    "synth effects",
    "world",
    "percussive",
    "sound effects",
];
exports.DrumKitByPatchID = {
    0: "standard kit",
    8: "room kit",
    16: "power kit",
    24: "electronic kit",
    25: "tr-808 kit",
    32: "jazz kit",
    40: "brush kit",
    48: "orchestra kit",
    56: "sound fx kit",
};
//# sourceMappingURL=InstrumentMaps.js.map

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.Track = exports.Midi = void 0;
var midi_file_1 = __webpack_require__(465);
var Header_1 = __webpack_require__(404);
var Track_1 = __webpack_require__(435);
var Encode_1 = __webpack_require__(468);
/**
 * The main midi parsing class.
 */
var Midi = /** @class */ (function () {
    /**
     * Parse the midi data
     */
    function Midi(midiArray) {
        var _this = this;
        // Parse the MIDI data if there is any.
        var midiData = null;
        if (midiArray) {
            // Transform midiArray to ArrayLike<number>
            // only if it's an ArrayBuffer.
            var midiArrayLike = midiArray instanceof ArrayBuffer
                ? new Uint8Array(midiArray)
                : midiArray;
            // Parse MIDI data.
            midiData = (0, midi_file_1.parseMidi)(midiArrayLike);
            // Add the absolute times to each of the tracks.
            midiData.tracks.forEach(function (track) {
                var currentTicks = 0;
                track.forEach(function (event) {
                    currentTicks += event.deltaTime;
                    event.absoluteTime = currentTicks;
                });
            });
            // Ensure at most one instrument per track.
            midiData.tracks = splitTracks(midiData.tracks);
        }
        this.header = new Header_1.Header(midiData);
        this.tracks = [];
        // Parse MIDI data.
        if (midiArray) {
            // Format 0, everything is on the same track.
            this.tracks = midiData.tracks.map(function (trackData) { return new Track_1.Track(trackData, _this.header); });
            // If it's format 1 and there are no notes on the first track, remove it.
            if (midiData.header.format === 1 && this.tracks[0].duration === 0) {
                this.tracks.shift();
            }
        }
    }
    /**
     * Download and parse the MIDI file. Returns a promise
     * which resolves to the generated MIDI file.
     * @param url The URL to fetch.
     */
    Midi.fromUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, arrayBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.arrayBuffer()];
                    case 2:
                        arrayBuffer = _a.sent();
                        return [2 /*return*/, new Midi(arrayBuffer)];
                    case 3: throw new Error("Could not load '".concat(url, "'"));
                }
            });
        });
    };
    Object.defineProperty(Midi.prototype, "name", {
        /**
         * The name of the midi file, taken from the first track.
         */
        get: function () {
            return this.header.name;
        },
        set: function (n) {
            this.header.name = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Midi.prototype, "duration", {
        /**
         * The total length of the file in seconds.
         */
        get: function () {
            // Get the max of the last note of all the tracks.
            var durations = this.tracks.map(function (t) { return t.duration; });
            return Math.max.apply(Math, durations);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Midi.prototype, "durationTicks", {
        /**
         * The total length of the file in ticks.
         */
        get: function () {
            // Get the max of the last note of all the tracks.
            var durationTicks = this.tracks.map(function (t) { return t.durationTicks; });
            return Math.max.apply(Math, durationTicks);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add a track to the MIDI file.
     */
    Midi.prototype.addTrack = function () {
        var track = new Track_1.Track(undefined, this.header);
        this.tracks.push(track);
        return track;
    };
    /**
     * Encode the MIDI as a Uint8Array.
     */
    Midi.prototype.toArray = function () {
        return (0, Encode_1.encode)(this);
    };
    /**
     * Convert the MIDI object to JSON.
     */
    Midi.prototype.toJSON = function () {
        return {
            header: this.header.toJSON(),
            tracks: this.tracks.map(function (track) { return track.toJSON(); }),
        };
    };
    /**
     * Parse a JSON representation of the object. Will overwrite the current
     * tracks and header.
     */
    Midi.prototype.fromJSON = function (json) {
        var _this = this;
        this.header = new Header_1.Header();
        this.header.fromJSON(json.header);
        this.tracks = json.tracks.map(function (trackJSON) {
            var track = new Track_1.Track(undefined, _this.header);
            track.fromJSON(trackJSON);
            return track;
        });
    };
    /**
     * Clone the entire object MIDI object.
     */
    Midi.prototype.clone = function () {
        var midi = new Midi();
        midi.fromJSON(this.toJSON());
        return midi;
    };
    return Midi;
}());
exports.Midi = Midi;
var Track_2 = __webpack_require__(435);
Object.defineProperty(exports, "Track", { enumerable: true, get: function () { return Track_2.Track; } });
var Header_2 = __webpack_require__(404);
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_2.Header; } });
/**
 * Given a list of MIDI tracks, make sure that each channel corresponds to at
 * most one channel and at most one instrument. This means splitting up tracks
 * that contain more than one channel or instrument.
 */
function splitTracks(tracks) {
    var newTracks = [];
    for (var i = 0; i < tracks.length; i++) {
        var defaultTrack = newTracks.length;
        // a map from [program, channel] tuples to new track numbers
        var trackMap = new Map();
        // a map from channel numbers to current program numbers
        var currentProgram = Array(16).fill(0);
        for (var _i = 0, _a = tracks[i]; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            var targetTrack = defaultTrack;
            // If the event has a channel, we need to find that channel's current
            // program number and the appropriate track for this [program, channel]
            // pair.
            var channel = event_1.channel;
            if (channel !== undefined) {
                if (event_1.type === "programChange") {
                    currentProgram[channel] = event_1.programNumber;
                }
                var program = currentProgram[channel];
                var trackKey = "".concat(program, " ").concat(channel);
                if (trackMap.has(trackKey)) {
                    targetTrack = trackMap.get(trackKey);
                }
                else {
                    targetTrack = defaultTrack + trackMap.size;
                    trackMap.set(trackKey, targetTrack);
                }
            }
            if (!newTracks[targetTrack]) {
                newTracks.push([]);
            }
            newTracks[targetTrack].push(event_1);
        }
    }
    return newTracks;
}
//# sourceMappingURL=Midi.js.map

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
/**
 * Convert a MIDI note into a pitch.
 */
function midiToPitch(midi) {
    var octave = Math.floor(midi / 12) - 1;
    return midiToPitchClass(midi) + octave.toString();
}
/**
 * Convert a MIDI note to a pitch class (just the pitch no octave).
 */
function midiToPitchClass(midi) {
    var scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var note = midi % 12;
    return scaleIndexToNote[note];
}
/**
 * Convert a pitch class to a MIDI note.
 */
function pitchClassToMidi(pitch) {
    var scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return scaleIndexToNote.indexOf(pitch);
}
/**
 * Convert a pitch to a MIDI number.
 */
// tslint:disable-next-line: only-arrow-functions typedef
var pitchToMidi = (function () {
    var regexp = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i;
    var noteToScaleIndex = {
        // tslint:disable-next-line: object-literal-sort-keys
        cbb: -2, cb: -1, c: 0, "c#": 1, cx: 2,
        dbb: 0, db: 1, d: 2, "d#": 3, dx: 4,
        ebb: 2, eb: 3, e: 4, "e#": 5, ex: 6,
        fbb: 3, fb: 4, f: 5, "f#": 6, fx: 7,
        gbb: 5, gb: 6, g: 7, "g#": 8, gx: 9,
        abb: 7, ab: 8, a: 9, "a#": 10, ax: 11,
        bbb: 9, bb: 10, b: 11, "b#": 12, bx: 13,
    };
    return function (note) {
        var split = regexp.exec(note);
        var pitch = split[1];
        var octave = split[2];
        var index = noteToScaleIndex[pitch.toLowerCase()];
        return index + (parseInt(octave, 10) + 1) * 12;
    };
}());
var privateHeaderMap = new WeakMap();
/**
 * A Note consists of a `noteOn` and `noteOff` event.
 */
var Note = /** @class */ (function () {
    function Note(noteOn, noteOff, header) {
        privateHeaderMap.set(this, header);
        this.midi = noteOn.midi;
        this.velocity = noteOn.velocity;
        this.noteOffVelocity = noteOff.velocity;
        this.ticks = noteOn.ticks;
        this.durationTicks = noteOff.ticks - noteOn.ticks;
    }
    Object.defineProperty(Note.prototype, "name", {
        /**
         * The note name and octave in scientific pitch notation, e.g. "C4".
         */
        get: function () {
            return midiToPitch(this.midi);
        },
        set: function (n) {
            this.midi = pitchToMidi(n);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "octave", {
        /**
         * The notes octave number.
         */
        get: function () {
            return Math.floor(this.midi / 12) - 1;
        },
        set: function (o) {
            var diff = o - this.octave;
            this.midi += diff * 12;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "pitch", {
        /**
         * The pitch class name. e.g. "A".
         */
        get: function () {
            return midiToPitchClass(this.midi);
        },
        set: function (p) {
            this.midi = 12 * (this.octave + 1) + pitchClassToMidi(p);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "duration", {
        /**
         * The duration of the segment in seconds.
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks + this.durationTicks) - header.ticksToSeconds(this.ticks);
        },
        set: function (d) {
            var header = privateHeaderMap.get(this);
            var noteEndTicks = header.secondsToTicks(this.time + d);
            this.durationTicks = noteEndTicks - this.ticks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "time", {
        /**
         * The time of the event in seconds.
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "bars", {
        /**
         * The number of measures (and partial measures) to this beat.
         * Takes into account time signature changes.
         * @readonly
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToMeasures(this.ticks);
        },
        enumerable: false,
        configurable: true
    });
    Note.prototype.toJSON = function () {
        return {
            duration: this.duration,
            durationTicks: this.durationTicks,
            midi: this.midi,
            name: this.name,
            ticks: this.ticks,
            time: this.time,
            velocity: this.velocity,
        };
    };
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=Note.js.map

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PitchBend = void 0;
var privateHeaderMap = new WeakMap();
/**
 * Represents a pitch bend event.
 */
var PitchBend = /** @class */ (function () {
    /**
     * @param event
     * @param header
     */
    function PitchBend(event, header) {
        privateHeaderMap.set(this, header);
        this.ticks = event.absoluteTime;
        this.value = event.value;
    }
    Object.defineProperty(PitchBend.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: false,
        configurable: true
    });
    PitchBend.prototype.toJSON = function () {
        return {
            ticks: this.ticks,
            time: this.time,
            value: this.value,
        };
    };
    return PitchBend;
}());
exports.PitchBend = PitchBend;
//# sourceMappingURL=PitchBend.js.map

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;
/**
 * Flatten an array indefinitely.
 */
function flatten(array) {
    var result = [];
    $flatten(array, result);
    return result;
}
/**
 * Internal flatten function recursively passes `result`.
 */
function $flatten(array, result) {
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (Array.isArray(value)) {
            $flatten(value, result);
        }
        else {
            result.push(value);
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tone__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_notes__ = __webpack_require__(399);

/**
* @fileoverview A sample library and quick-loader for tone.js
*
* @author N.P. Brosowsky (nbrosowsky@gmail.com)
* https://github.com/nbrosowsky/tonejs-instruments
*/




var mapFile = function mapFile(name) {
    var file = '';
    __WEBPACK_IMPORTED_MODULE_2__config_notes__["b" /* NotesMap */].forEach(function (note) {
        if (note.name == name) {
            file = note.file;
        }
    });
    return file;
};

var SampleLibrary = {
    minify: false,
    ext: '.[mp3|ogg]', // use setExt to change the extensions on all files // do not change this variable //
    // baseUrl: 'http://lc-SAs97Sjr.cn-n1.lcfile.com', // leancloud file
    baseUrl: '/static/samples/',
    list: ['bass-electric', 'bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'french-horn', 'guitar-acoustic', 'guitar-electric', 'guitar-nylon', 'harmonium', 'harp', 'organ', 'piano', 'saxophone', 'trombone', 'trumpet', 'tuba', 'violin', 'xylophone'],
    onload: null,

    setExt: function setExt(newExt) {
        var i;
        for (i = 0; i <= this.list.length - 1; i++) {
            for (var property in this[this.list[i]]) {
                this[this.list[i]][property] = this[this.list[i]][property].replace(this.ext, newExt);
            }
        }
        this.ext = newExt;
        return console.log("sample extensions set to " + this.ext);
    },

    load: function load(arg) {
        var t, rt, i;
        arg ? t = arg : t = {};
        t.instruments = t.instruments || this.list;
        t.baseUrl = t.baseUrl || this.baseUrl;
        t.onload = t.onload || this.onload;

        // update extensions if arg given
        if (t.ext) {
            if (t.ext != this.ext) {
                this.setExt(t.ext);
            }
            t.ext = this.ext;
        }

        rt = {};

        // if an array of instruments is passed...
        if (Array.isArray(t.instruments)) {
            for (i = 0; i <= t.instruments.length - 1; i++) {
                var newT = this[t.instruments[i]];
                //Minimize the number of samples to load
                if (this.minify === true || t.minify === true) {
                    var minBy = 1;
                    if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).length >= 17) {
                        minBy = 2;
                    }
                    if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).length >= 33) {
                        minBy = 4;
                    }
                    if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).length >= 49) {
                        minBy = 6;
                    }

                    var filtered = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).filter(function (_, i) {
                        return i % minBy != 0;
                    });
                    filtered.forEach(function (f) {
                        delete newT[f];
                    });
                }

                rt[t.instruments[i]] = new __WEBPACK_IMPORTED_MODULE_1_tone___default.a.Sampler(newT, {
                    baseUrl: t.baseUrl + t.instruments[i] + "/",
                    onload: t.onload
                });
            }

            return rt;

            // if a single instrument name is passed...
        } else {
            newT = this[t.instruments];

            //Minimize the number of samples to load
            if (this.minify === true || t.minify === true) {
                minBy = 1;
                if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).length >= 17) {
                    minBy = 2;
                }
                if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).length >= 33) {
                    minBy = 4;
                }
                if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).length >= 49) {
                    minBy = 6;
                }

                filtered = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(newT).filter(function (_, i) {
                    return i % minBy != 0;
                });
                filtered.forEach(function (f) {
                    delete newT[f];
                });
            }
            // cdn 路径适配
            // if (t.instruments == 'piano') {
            //     t.instruments = ''
            // }
            var s = new __WEBPACK_IMPORTED_MODULE_1_tone___default.a.Sampler(newT, {
                baseUrl: t.baseUrl + t.instruments + "/",
                onload: t.onload
            });
            return s;
        }
    },

    'bass-electric': {
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]',
        'A#5': 'As5.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'C#5': 'Cs5.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'E5': 'E5.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G4': 'G4.[mp3|ogg]',
        'G5': 'G5.[mp3|ogg]'
    },

    'bassoon': {
        'A3': 'A3.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'G1': 'G1.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'A1': 'A1.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]'

    },

    'cello': {
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F3': 'F3.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G4': 'G4.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]',
        'B2': 'B2.[mp3|ogg]',
        'B3': 'B3.[mp3|ogg]',
        'B4': 'B4.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]'

    },

    'clarinet': {
        'D3': 'D3.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D5': 'D5.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F3': 'F3.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]'

    },

    'contrabass': {
        'C1': 'C1.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'D1': 'D1.[mp3|ogg]',
        'E1': 'E1.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'F#0': 'Fs0.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        'G0': 'G0.[mp3|ogg]',
        'G#1': 'Gs1.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'A1': 'A1.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]',
        'B2': 'B2.[mp3|ogg]'

    },

    'flute': {
        'A5': 'A5.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'E5': 'E5.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]'

    },

    'french-horn': {
        'D2': 'D2.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'G1': 'G1.[mp3|ogg]',
        'A0': 'A0.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'C1': 'C1.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]'

    },

    'guitar-acoustic': {
        'F3': 'F3.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'G1': 'G1.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G#1': 'Gs1.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'A1': 'A1.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A#1': 'As1.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'B1': 'B1.[mp3|ogg]',
        'B2': 'B2.[mp3|ogg]',
        'B3': 'B3.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'D1': 'D1.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'E1': 'E1.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'F1': 'F1.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]'

    },

    'guitar-electric': {
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'D#5': 'Ds5.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A5': 'A5.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]'
    },

    'guitar-nylon': {
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G5': 'G3.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        'G#5': 'Gs5.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A5': 'A5.[mp3|ogg]',
        'A#5': 'As5.[mp3|ogg]',
        'B1': 'B1.[mp3|ogg]',
        'B2': 'B2.[mp3|ogg]',
        'B3': 'B3.[mp3|ogg]',
        'B4': 'B4.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'C#5': 'Cs5.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D5': 'D5.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'E5': 'E5.[mp3|ogg]'
    },

    'harmonium': {
        'C2': 'C2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'C#5': 'Cs5.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D5': 'D5.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F3': 'F3.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G4': 'G4.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]'
    },

    'harp': {
        'C5': 'C5.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D6': 'D6.[mp3|ogg]',
        'D7': 'D7.[mp3|ogg]',
        'E1': 'E1.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E5': 'E5.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'F6': 'F6.[mp3|ogg]',
        'F7': 'F7.[mp3|ogg]',
        'G1': 'G1.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G5': 'G5.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A6': 'A6.[mp3|ogg]',
        'B1': 'B1.[mp3|ogg]',
        'B3': 'B3.[mp3|ogg]',
        'B5': 'B5.[mp3|ogg]',
        'B6': 'B6.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]'

    },

    'organ': {
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'D#5': 'Ds5.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        'A1': 'A1.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A5': 'A5.[mp3|ogg]',
        'C1': 'C1.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]'
    },

    'piano': {
        'A2': mapFile('A2'),
        'A3': mapFile('A3'),
        'A4': mapFile('A4'),
        'A5': mapFile('A5'),
        'A6': mapFile('A6'),

        'A#3': mapFile('A#3'),
        'A#4': mapFile('A#4'),
        'A#5': mapFile('A#5'),
        'A#6': mapFile('A#6'),
        'B2': mapFile('B2'),
        'B3': mapFile('B3'),
        'B4': mapFile('B4'),
        'B5': mapFile('B5'),
        'B6': mapFile('B6'),
        'C2': mapFile('C2'),
        'C3': mapFile('C3'),
        'C4': mapFile('C4'),
        'C5': mapFile('C5'),
        'C6': mapFile('C6'),
        'C7': mapFile('C7'),
        'C#2': mapFile('C#2'),
        'C#3': mapFile('C#3'),
        'C#4': mapFile('C#4'),
        'C#5': mapFile('C#5'),
        'C#6': mapFile('C#6'),
        'D0': mapFile('D0'),
        'D1': mapFile('D1'),
        'D2': mapFile('D2'),
        'D3': mapFile('D3'),
        'D4': mapFile('D4'),
        'D5': mapFile('D5'),
        'D6': mapFile('D6'),
        'D#2': mapFile('D#2'),
        'D#3': mapFile('D#3'),
        'D#4': mapFile('D#4'),
        'D#5': mapFile('D#5'),
        'D#6': mapFile('D#6'),
        'E2': mapFile('E2'),
        'E3': mapFile('E3'),
        'E4': mapFile('E4'),
        'E5': mapFile('E5'),
        'E6': mapFile('E6'),
        'F2': mapFile('F2'),
        'F3': mapFile('F3'),
        'F4': mapFile('F4'),
        'F5': mapFile('F5'),
        'F6': mapFile('F6'),
        'F#2': mapFile('F#2'),
        'F#3': mapFile('F#3'),
        'F#4': mapFile('F#4'),
        'F#5': mapFile('F#5'),
        'F#6': mapFile('F#6'),
        'G2': mapFile('G2'),
        'G3': mapFile('G3'),
        'G4': mapFile('G4'),
        'G5': mapFile('G5'),
        'G6': mapFile('G6'),
        'G#2': mapFile('G#2'),
        'G#3': mapFile('G#3'),
        'G#4': mapFile('G#4'),
        'G#5': mapFile('G#5'),
        'G#6': mapFile('G#6')
    },

    'saxophone': {
        'D#4': 'Ds4.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F3': 'F3.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G4': 'G4.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'B2': 'B2.[mp3|ogg]',
        'B3': 'B3.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]'

    },

    'trombone': {
        'A#2': 'As2.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C#1': 'Cs1.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'F1': 'F1.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F3': 'F3.[mp3|ogg]',
        'G#1': 'Gs1.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]',
        'A#1': 'As1.[mp3|ogg]'

    },

    'trumpet': {
        'C5': 'C5.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F3': 'F3.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]'

    },

    'tuba': {
        'A#1': 'As1.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'F0': 'F0.[mp3|ogg]',
        'F1': 'F1.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]'

    },

    'violin': {
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A5': 'A5.[mp3|ogg]',
        'A6': 'A6.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]',
        'C7': 'C7.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'E5': 'E5.[mp3|ogg]',
        'E6': 'E6.[mp3|ogg]',
        'G4': 'G4.[mp3|ogg]',
        'G5': 'G5.[mp3|ogg]',
        'G6': 'G6.[mp3|ogg]'

    },

    'xylophone': {
        'C7': 'C7.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G4': 'G4.[mp3|ogg]',
        'G5': 'G5.[mp3|ogg]',
        'G6': 'G6.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]'

    }
};

/* harmony default export */ __webpack_exports__["a"] = (SampleLibrary);

/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isArr */
/* unused harmony export quickSortArr */
/* unused harmony export uniqueArr */
/* unused harmony export shuffleArr */
/* unused harmony export binarySearchArr */
/* unused harmony export $outlineAnything */
/* unused harmony export $getRate */
/* unused harmony export $uuid */
/* unused harmony export $isPrime */
/* unused harmony export $sleep */
/* unused harmony export formatDate */
/* unused harmony export getDateObj */
/* unused harmony export setClass */
/* unused harmony export hasClass */
/* unused harmony export addClass */
/* unused harmony export removeClass */
/* unused harmony export debounce */
/* unused harmony export throttle */
/* unused harmony export poll */
/* unused harmony export once */
/* unused harmony export isPlainObj */
/* unused harmony export isEmptyObj */
/* unused harmony export extend */
/* unused harmony export stringfyQueryString */
/* unused harmony export getOS */
/* unused harmony export getBrowser */
/* unused harmony export isWeixin */
/* unused harmony export chalkPrint */
/* unused harmony export randomColor */
/* unused harmony export randomInt */
/* unused harmony export randomString */
/* unused harmony export isEmail */
/* unused harmony export isIdCard */
/* unused harmony export isPhoneNum */
/* unused harmony export isUrl */
/* unused harmony export setCookie */
/* unused harmony export getCookie */
/* unused harmony export removeCookie */
/* unused harmony export cutString */
/* unused harmony export upcaseMoney */
/* unused harmony export replaceXSS */
/* unused harmony export parseQueryString */
/* unused harmony export b64EncodeUnicode */
/* unused harmony export b64DecodeUnicode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze__);








/**
 * 彩色控制台打印
 * @param {*} str
 * @param {*} colorStyle
 */
var chalkPrint = function chalkPrint(str) {
  var colorStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'green';
  str = toString(str) || '';
  console.log('%c' + str, "font-weight: bold; color: ".concat(colorStyle));
};

var _print = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  chalkPrint: chalkPrint
});

/**
 *
 * @desc 随机生成颜色
 * @return {String}
 */
var randomColor = function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
};
/**
 *
 * @desc 生成指定范围随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number} integer
 */

var randomInt = function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
};
/**
 * @desc 生成指定长度的随机字符串
 * @param {*} len
 */

var randomString = function randomString(len) {
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var tmp = '';

  for (var i = 0; i < len; i++) {
    tmp += str.charAt(Math.round(Math.random() * str.length));
  }

  return tmp;
};

var _random = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  randomColor: randomColor,
  randomInt: randomInt,
  randomString: randomString
});

/**
 * 数组判断
 */

var isArr = function isArr() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (Array.isArray) {
    return Array.isArray(arr);
  } else {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
};
/**
 * @description 数组快速排序
 * @param {Array} arr
 * @param {String} key 按对象的属性进行排序
 */

var quickSortArr = function quickSortArr() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!isArr(arr)) {
    chalkPrint('[quickSortArr] argument is not Array.', 'red');
    return [];
  } else if (arr.length <= 1) {
    return arr;
  } else {
    var middle = Math.floor(arr.length / 2);
    var pivot = arr.splice(middle, 1)[0];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
      if (key && pivot.hasOwnProperty(key)) {
        if (arr[i][key] < pivot[key]) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      } else {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }

    return quickSortArr(left, key).concat([pivot], quickSortArr(right, key));
  }
};
/**
 * 数组去重
 * @param {*} arr
 */

var uniqueArr = function uniqueArr() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!isArr(arr)) {
    chalkPrint('[uniqueArr] argument is not Array.', 'red');
    return [];
  } else if (arr.length <= 1) {
    return arr;
  } else {
    var result = [];
    var hash = {};

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      var exist = false;
      __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys___default()(hash).forEach(function (k) {
        if (item === hash[k]) {
          exist = true;
          return;
        }
      });

      if (!exist) {
        hash[i] = item;
        result.push(item);
      }
    }

    return result;
  }
};
/**
 * @desc 随机乱序
 * @param {Array} arr
 * @return {Array}
 */

var shuffleArr = function shuffleArr() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!isArr(arr)) {
    chalkPrint('[shuffleArr] argument is not Array.', 'red');
    return [];
  }

  var _arr = arr.slice();

  for (var i = 0, len = _arr.length; i < len; i++) {
    var j = randomInt(0, i);
    var temp = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = temp;
  }

  return _arr;
};
/**
 * 数组二分搜索算法，二分搜索适合在大量数据中搜索。如果数组长度小，直接用arr.indexOf()即可
 * @param {Array} arr 要搜索的数组
 * @param {Any} target 目标值
 * @return {Number} 数组下标
 */

var binarySearchArr = function binarySearchArr() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var target = arguments.length > 1 ? arguments[1] : undefined;

  if (!isArr(arr)) {
    chalkPrint('[binarySearchArr] argument is not Array.', 'red');
    return -1;
  } // arr前提要是从小到大排列的数组


  arr = quickSortArr(arr);
  var bottom = 0;
  var top = arr.length - 1;
  var position;

  while (bottom < top) {
    var middle = Math.floor((bottom + top) / 2);

    if (arr[middle] === target) {
      position = middle; // console.log("Find target at position: " + position);

      return position;
    } else if (arr[middle] < target) {
      bottom = middle + 1;
    } else if (arr[middle] > target) {
      top = middle;
    }
  }

  return position;
};

var _array = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  isArr: isArr,
  quickSortArr: quickSortArr,
  uniqueArr: uniqueArr,
  shuffleArr: shuffleArr,
  binarySearchArr: binarySearchArr
});

// 黑科技、奇技淫巧

/**
 * 给所有dom元素增加彩色边框
 */
var $outlineAnything = function $outlineAnything() {
  if (window && window.document) {
    [].forEach.call($$("*"), function (a) {
      a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
  }
};
/**
 * 单行写一个评级组件
 * @param {*} rate 评几分 0-10
 */

var $getRate = function $getRate(rate) {
  return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
};
/**
 * 生成动态不重复的一个32位的唯一标识
 */

var $uuid = function $uuid() {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  }).toUpperCase();
};
/**
 * 判断质数
 * @param {Number} n 数字
 */

var $isPrime = function $isPrime(n) {
  return !/^.?$|^(..+?)\1+$/.test('1'.repeat(n));
};
/**
 * 睡眠 e.g. await sleep(1000);
 * @param {Number} time 毫秒
 */

var $sleep = function $sleep(time) {
  return new __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise___default.a(function (resolve) {
    setTimeout(resolve, time);
  });
};

var _cooltech = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  $outlineAnything: $outlineAnything,
  $getRate: $getRate,
  $uuid: $uuid,
  $isPrime: $isPrime,
  $sleep: $sleep
});

/**
 *
 * @param {*} timestamp
 * @param {*} format
 * @param {*} isPhpTimeStamp
 */
var formatDate = function formatDate(timestamp) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy.MM.dd hh:mm:ss';
  var isPhpTimeStamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (isPhpTimeStamp) {
    date = date * 1000;
  }

  var date = new Date(timestamp);
  var map = {
    // 'y': date.getFullYear(),
    'M': date.getMonth() + 1,
    'd': date.getDate(),
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds(),
    'S': date.getMilliseconds(),
    'q': Math.floor((date.getMonth() + 3) / 3) // 季度

  };
  format = format.replace(/([yMdhmsSq])+/g, function (all, t) {
    var v = map[t];

    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length - 2);
      }

      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }

    return all;
  });
  return format;
};
/**
 * @desc 解析时间戳，并返回年月日等信息
 * @param {*} timestamp
 */

var getDateObj = function getDateObj(timestamp) {
  if (!timestamp || typeof timestamp !== 'number' && typeof timestamp !== 'string') {
    timestamp = +new Date();
  }

  var date = new Date(timestamp); // 缺 星期几

  return {
    'year': date.getFullYear(),
    'month': date.getMonth() + 1,
    'day': date.getDate(),
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds(),
    'millsecond': date.getMilliseconds(),
    'quarter': Math.floor((date.getMonth() + 3) / 3)
  };
};

var _date = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  formatDate: formatDate,
  getDateObj: getDateObj
});

/**
 * 设置元素类名
 */
function setClass(ele, cls) {
  if (ele.hasOwnProperty('className')) {
    ele.className = cls;
  } else {
    ele.setAttribute('class', cls);
  }
}
/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */

function hasClass(ele, cls) {
  return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
}
/**
 *
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 */

function addClass(el, cls) {
  if (el.classList) {
    var clsArr = cls.split(' ');
    clsArr.map(function (cl) {
      return el.classList.add(cl);
    });
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' ';

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}
/**
 *
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    setClass(el, cur.trim());
  }

  if (!el.className) {
    el.removeAttribute('class');
  }
}

var _dom = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  setClass: setClass,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
});

function _typeof(obj) {
  if (typeof __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default.a === "function" && __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol_iterator___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default.a === "function" && obj.constructor === __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default.a && obj !== __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default.a.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(obj);
    };
  }

  return _typeof(obj);
}

/**
 * @desc https://github.com/lodash/lodash/blob/master/debounce.js
 * @desc lodash 防抖，在等待n秒后，触发函数。如果在n秒内再次触发了这个函数，则重新计时，直到n秒后触发
 * @param {Function} func
 * @param {Number} wait 延迟：毫秒
 * @param {Object} options { leading, trailing, maxWait }
 * @example
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', debounce(calculateLayout, 150))
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }))
 */
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
  var lastInvokeTime = 0;
  var leading = false;
  var maxing = false;
  var trailing = true; // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.

  var useRAF = !wait && wait !== 0 && typeof requestAnimationFrame === 'function';

  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;

  if (_typeof(options) === 'object') {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs;
    var thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      return requestAnimationFrame(pendingFunc);
    }

    return setTimeout(pendingFunc, wait);
  }

  function cancelTimer(id) {
    if (useRAF) {
      return cancelAnimationFrame(id);
    }

    clearTimeout(id);
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = startTimer(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime;
    var timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = startTimer(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      cancelTimer(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now());
  }

  function pending() {
    return timerId !== undefined;
  }

  function debounced() {
    var time = Date.now();
    var isInvoking = shouldInvoke(time);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}
/**
 * @desc https://github.com/lodash/lodash/blob/master/throttle.js
 * @desc lodash 节流 如果你持续触发事件，每隔一段时间，只执行一次事件。
 * @param {Function} func
 * @param {Number} wait
 * @param {Object} options  { leading, trailing, maxWait }
 */

function throttle(func, wait, options) {
  var leading = true;
  var trailing = true;

  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }

  if (_typeof(options) === 'object') {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}
/**
 * 轮询，按一定的时间间隔轮询获取一个函数的执行状态
 * @param {*} func 要轮询的函数
 * @param {*} timeout 超时时间
 * @param {*} interval 轮询周期
 */

function poll(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  return new __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    if (typeof func != 'function') {
      reject(new Error(func + ' is not a function'));
    }

    var endTime = +new Date() + timeout(function p() {
      if (func()) {
        resolve(func());
      } else if (+new Date() < endTime) {
        return setTimeout(p, interval);
      } else {
        reject(new Error('timed out for ' + fn + ': ' + arguments));
      }
    })();
  });
}
/**
 * 函数只能执行一次
 * @param {*} func
 * @param {*} context
 */

function once() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var result = undefined;
  var fn = func;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = undefined;
    }

    return result;
  };
}

var _function = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  debounce: debounce,
  throttle: throttle,
  poll: poll,
  once: once
});

/**
 * 判断是否是纯对象
 * @param {*} value
 */

var isPlainObj = function isPlainObj(value) {
  if (_typeof(value) != 'object' || Object.prototype.toString.call(value) != '[object Object]') {
    return false;
  }

  if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(value) === null) {
    return true;
  }

  var proto = value;

  while (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(proto) !== null) {
    proto = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(proto);
  }

  return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(value) === proto;
};
/**
 * 判断是否是空对象
 * @param {*} obj
 */

var isEmptyObj = function isEmptyObj() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!isPlainObj(obj)) {
    return false;
  }

  for (var prop in obj) {
    return false;
  }

  return true;
};
/**
 * @desc jQuery extend method
 * @desc jQuery.extend( [deep ], target, object1 [, objectN ] )
 * @desc 可用于浅拷贝或深拷贝。注意：该方法会修改target对象本身
 */

var extend = function extend() {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false; // Handle a deep copy situation

  if (typeof target === "boolean") {
    deep = target; // Skip the boolean and the target

    target = arguments[i] || {};
    i++;
  } // Handle case when target is a string or something (possible in deep copy)


  if (_typeof(target) !== "object" && typeof target !== "function") {
    target = {};
  } // Extend jQuery itself if only one argument is passed


  if (i === length) {
    target = this;
    i--;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    options = arguments[i];

    if (options != null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name]; // Prevent never-ending loop

        if (target === copy) {
          continue;
        } // Recurse if we're merging plain objects or arrays


        copyIsArray = isArr(copy);

        if (deep && copy && (isPlainObj(copy) || copyIsArray)) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && isArr(src) ? src : [];
          } else {
            clone = src && isPlainObj(src) ? src : {};
          } // Never move original objects, clone them


          target[name] = extend(deep, clone, copy); // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  } // Return the modified object


  return target;
};
/**
 *
 * @desc   对象转换成 查询字符串
 * @param  {Object} obj
 * @return {String}
 */

var stringfyQueryString = function stringfyQueryString(obj) {
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }

      continue;
    }

    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
};

var _object = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  isPlainObj: isPlainObj,
  isEmptyObj: isEmptyObj,
  extend: extend,
  stringfyQueryString: stringfyQueryString
});

/**
 * 获取操作系统类型
 */
var getOS = function getOS() {
  var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
  var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
  var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
  if (/android/i.test(userAgent)) return 'android';
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
  if (/mac/i.test(appVersion)) return 'MacOSX';
  if (/win/i.test(appVersion)) return 'windows';
  if (/linux/i.test(appVersion)) return 'linux';
};
/**
 * 获取浏览器类型
 */

var getBrowser = function getBrowser() {
  var sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0; // 根据关系进行判断

  if (sys.ie) return 'IE: ' + sys.ie;
  if (sys.edge) return 'EDGE: ' + sys.edge;
  if (sys.firefox) return 'Firefox: ' + sys.firefox;
  if (sys.chrome) return 'Chrome: ' + sys.chrome;
  if (sys.opera) return 'Opera: ' + sys.opera;
  if (sys.safari) return 'Safari: ' + sys.safari;
  return 'unknown';
};
/**
 * 判断是否是微信环境
 */

var isWeixin = function isWeixin() {
  var ua = navigator.userAgent.toLowerCase();

  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
};

var _platform = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  getOS: getOS,
  getBrowser: getBrowser,
  isWeixin: isWeixin
});

/**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
function isEmail(str) {
  return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
  );
}
/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */

function isIdCard(str) {
  return (/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  );
}
/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */

function isPhoneNum(str) {
  return (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
  );
}
/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */

function isUrl(str) {
  return (/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str)
  );
}

var _regexp = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  isEmail: isEmail,
  isIdCard: isIdCard,
  isPhoneNum: isPhoneNum,
  isUrl: isUrl
});

// 本地存储相关模块

/**
 * 存储cookie值
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 * @param {String} path
 * @param {String} domain
 * @param {Boolean} secure
 */
var setCookie = function setCookie(name, value, days, path, domain, secure) {
  if (!name || !value) return false;
  var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  if (days) {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    cookieText += "; expires=" + exp.toGMTString();
  }

  if (path) {
    cookieText += "; path=" + path;
  }

  if (domain) {
    cookieText += "; domain=" + domain;
  }

  if (secure) {
    cookieText += "; secure";
  }

  document.cookie = cookieText;
  return true;
};
/**
 * 根据name获取cookie value
 * @param {String} name
 */

var getCookie = function getCookie(name) {
  if (!name) return '';
  var cookieName = encodeURIComponent(name) + "=";
  var cookieStart = document.cookie.indexOf(cookieName);
  var cookieValue = null;

  if (cookieStart > -1) {
    var cookieEnd = document.cookie.indexOf(";", cookieStart);

    if (cookieEnd == -1) {
      cookieEnd = document.cookie.length;
    }

    cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);
  }

  return cookieValue;
};
/**
 * 移除cookie
 */

var removeCookie = function removeCookie(name, path, domain) {
  var secure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!name) return false;
  var value = "";
  var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  var exp = new Date();
  exp.setTime(exp.getTime() + 0);
  cookieText += "; expires=" + exp.toGMTString();

  if (path) {
    cookieText += "; path=" + path;
  }

  if (domain) {
    cookieText += "; domain=" + domain;
  }

  if (secure) {
    cookieText += "; secure";
  }

  document.cookie = cookieText;
  return true;
};

var _storage = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  setCookie: setCookie,
  getCookie: getCookie,
  removeCookie: removeCookie
});

/**
 * 截取字符串，剩余部分用...替换
 * @param {*} str 要截取的字符串
 * @param {*} cutlen 要截取的长度
 */
var cutString = function cutString(str, cutlen) {
  var len = str.length;
  var result = str.substr(0, cutlen);

  if (cutlen < len) {
    return result + '...';
  } else {
    return result;
  }
};
/**
 *
 * @desc   现金额转大写
 * @param  {Number, String} n
 * @return {String}
 */

var upcaseMoney = function upcaseMoney(n) {
  n = parseFloat(n);
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';

  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }

  s = s || '整';
  n = Math.floor(n);

  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';

    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }

    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
};
/**
  * @desc XSS字符转义，将html标记转为 实体html编码
  * @param {String} markupStr [要转义的字符串]
 */

var replaceXSS = function replaceXSS(markupStr) {
  var _ENCODE_HTML_RULES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  };
  var _MATCH_HTML = /[&<>'"]/g;

  function encode_char(c) {
    return _ENCODE_HTML_RULES[c] || c;
  }

  return markupStr === undefined ? '' : String(markupStr).replace(_MATCH_HTML, encode_char);
};
/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */

var parseQueryString = function parseQueryString(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf('?') + 1);

  if (!search) {
    return {};
  }

  while (search[search.length - 1] == '&') {
    search = search.slice(0, search.length - 1);
  }

  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};
/**
 * @desc unicode字符串base64编码
 * @param {String} str
 */

var b64EncodeUnicode = function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
};
/**
 * @desc unicode字符串base64解码
 * @param {String} str
 */

var b64DecodeUnicode = function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
};

var _string = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_freeze___default()({
  cutString: cutString,
  upcaseMoney: upcaseMoney,
  replaceXSS: replaceXSS,
  parseQueryString: parseQueryString,
  b64EncodeUnicode: b64EncodeUnicode,
  b64DecodeUnicode: b64DecodeUnicode
});

var wutils = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _array, _cooltech, _date, _dom, _function, _object, _platform, _print, _random, _regexp, _storage, _string);

/* unused harmony default export */ var _unused_webpack_default_export = (wutils);


/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_observe__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tonejs_midi__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tonejs_midi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__tonejs_midi__);





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      currentMidiData: null,
      midiNotes: [],
      midiStop: false
    };
  },

  computed: {
    shouldShowNoteRain: function shouldShowNoteRain() {
      return !window.isMobile;
    }
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_observe__["a" /* default */].$on(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].PLAY_MIDI_NOTE, function (note) {
      setTimeout(function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isNoteNameValid */])(note.name)) {
          _this.playNote(note.name, '1n', note.velocity);
          $('[data-name="' + note.name + '"]').addClass('auto-key-active');
          setTimeout(function () {
            $('[data-name="' + note.name + '"]').removeClass('auto-key-active');
          }, note.duration * 900);
        }
      }, 0);
    });
  },

  methods: {
    loadMidiAndPlay: function loadMidiAndPlay(midi) {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3__tonejs_midi__["Midi"].fromUrl(midi).then(function (data) {
        _this2.currentMidiData = data;
        _this2.midiOffset = 0;
        _this2.playMidi();
      });
    },
    playMidi: function playMidi() {
      var _this3 = this;

      if (this.currentMidiData) {
        console.info('current midi data', this.currentMidiData);
        this.midiStop = false;
        this.midiNotes = [];
        this.currentMidiData.tracks.forEach(function (track, trackIndex) {
          console.info('current track instrument', trackIndex, track.instrument.family, track.instrument.name);
          // 需要是钢琴乐器 FIXME
          _this3.midiNotes = _this3.midiNotes.concat(track.notes);
        });
        this.startTime = +new Date();
        this.playLoop();
        console.log(this.midiNotes.length);
        __WEBPACK_IMPORTED_MODULE_0_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].HIDE_GLOBAL_LOADING);
      }
    },
    playLoop: function playLoop() {
      var _this4 = this;

      if (this.midiStop) return;
      var unPlayedNotes = this.midiNotes.filter(function (n) {
        return !n.played;
      });
      if (unPlayedNotes.length <= 0) {
        __WEBPACK_IMPORTED_MODULE_0_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].MUSIC_END);
        return;
      }
      var now = +new Date();
      var playedTime = now - this.startTime; // 单位毫秒ms
      unPlayedNotes.forEach(function (note) {
        if (playedTime >= note.time * 1000 && !note.played) {
          // 播放note
          note.played = true;
          __WEBPACK_IMPORTED_MODULE_0_observe__["a" /* default */].$emit(__WEBPACK_IMPORTED_MODULE_2_config__["b" /* OBEvent */].PLAY_MIDI_NOTE, note);
        }
      });
      setTimeout(function () {
        _this4.playLoop();
      }, 30);
    },
    stopMidiPlay: function stopMidiPlay() {
      this.midiStop = true;
      this.currentMidiData = null;
      this.midiNotes = [];
    }
  }
});

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(378);
// Mixin 说明：按照自定义简谱格式，触发piano组件的自动播放
// 简谱英文 numbered musical notation


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      ScoreNum: __WEBPACK_IMPORTED_MODULE_0_config__["e" /* ScoreNum */],
      playTimers: [],
      // 目前只有C调和 D调，待完善调整
      StepMap: {
        'C': { '1>>': 'C2', '2>>': 'D2', '3>>': 'E2', '4>>': 'F2', '5>>': 'G2', '6>>': 'A2', '7>>': 'B2',
          '1>': 'C3', '2>': 'D3', '3>': 'E3', '4>': 'F3', '5>': 'G3', '6>': 'A3', '7>': 'B3',
          '1': 'C4', '2': 'D4', '3': 'E4', '4': 'F4', '5': 'G4', '6': 'A4', '7': 'B4',
          '1<': 'C5', '2<': 'D5', '3<': 'E5', '4<': 'F5', '5<': 'G5', '6<': 'A5', '7<': 'B5',
          '1<<': 'C6', '2<<': 'D6', '3<<': 'E56', '4<<': 'F6', '5<<': 'G6', '6<<': 'A6', '7<<': 'B6'
        },
        'D': { '1>>': 'D2', '2>>': 'E2', '3>>': 'F#2', '4>>': 'G2', '5>>': 'A2', '6>>': 'B2', '7>>': 'C#3',
          '1>': 'D3', '2>': 'E3', '3>': 'F#3', '4>': 'G3', '5>': 'A3', '6>': 'B3', '7>': 'C#4',
          '1': 'D4', '2': 'E4', '3': 'F#4', '4': 'G4', '5': 'A4', '6': 'B4', '7': 'C#5',
          '1<': 'D5', '2<': 'E5', '3<': 'F#5', '4<': 'G5', '5<': 'A5', '6<': 'B5', '7<': 'C#6',
          '1<<': 'D6', '2<<': 'E6', '3<<': 'F#6', '4<<': 'G6', '5<<': 'A6', '6<<': 'B6', '7<<': 'C#7'
        }
      }
    };
  },

  methods: {
    // 将简谱numNotation映射为notename
    mapNum2NoteName: function mapNum2NoteName() {
      var stepname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var numNotation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var pitch = numNotation.match(/[#b]*[0-7][\<\>]*/g)[0];

      if (pitch && stepname && this.StepMap[stepname]) {
        var curStep = this.StepMap[stepname];
        if (curStep && curStep[pitch]) {
          var notename = curStep[pitch];
          return notename;
        }
      }
      return '';
    },

    // 获取音符持续时长
    getNoteDuration: function getNoteDuration(numNotation, timeUnit) {
      var factor = 1;
      if (numNotation.match(/\([0-9.]*\)/g)) {
        factor = numNotation.match(/\([0-9.]*\)/g)[0].replace(/[\)\(]/g, '');
      }
      return timeUnit * +factor;
    },

    // 自动播放简谱
    autoPlayNumberScore: function autoPlayNumberScore() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'C';

      var _this = this;

      var musicScore = arguments[1];
      var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 75;

      $('.piano-key').removeClass('auto-key-active');
      var timeUnit = 60 * 1000 / speed;
      var startStmp = new Date();
      var i = 0;
      var playedTime = 0;
      var pressedNote = void 0;

      var loop = function loop() {
        var curStmp = new Date();
        var deltaTime = curStmp - startStmp;
        if (deltaTime > playedTime) {
          // 播放下一个音符
          if (pressedNote) {
            $('[data-keyCode=' + pressedNote.keyCode + ']').removeClass('auto-key-active');
          }
          var numNotation = musicScore[i];
          var notename = _this.mapNum2NoteName(step, numNotation);
          pressedNote = _this.getNoteByName(notename);
          if (pressedNote) $('[data-keyCode=' + pressedNote.keyCode + ']').addClass('auto-key-active');
          _this.playNote(notename);
          playedTime += _this.getNoteDuration(numNotation, timeUnit);
          i++;
          if (i >= musicScore.length) {
            setTimeout(function () {
              $('.piano-key').removeClass('auto-key-active');
            }, 1000);
            clearInterval(loopTimer);
            return;
          }
        }
      };
      var loopTimer = setInterval(function () {
        loop();
      }, 20);

      this.playTimers.push(loopTimer);
    },

    // 点击简谱列表播放音乐
    playScoreByName: function playScoreByName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '天空之城';

      var targetScore = void 0;
      for (var k in this.ScoreNum) {
        var score = this.ScoreNum[k];
        if (score.name == name) {
          targetScore = score;
          break;
        }
      }
      if (targetScore) {
        this.pauseAutoPlay();
        var step = targetScore.step;
        var speed = targetScore.speed;
        if (this.StepMap[step]) {
          this.autoPlayNumberScore(step, targetScore.mainTrack, speed);
          if (targetScore.backingTrack) {
            this.autoPlayNumberScore(step, targetScore.backingTrack, speed);
          }
        }
      }
    },
    pauseAutoPlay: function pauseAutoPlay() {
      $('.piano-key').removeClass('auto-key-active');
      this.playTimers.forEach(function (timer) {
        clearInterval(timer);
        timer = null;
      });
      this.playTimers.splice(0);
    }
  }
});

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_observe__ = __webpack_require__(381);



// import testScore from '../../parsexml/score_output/下一个天亮.json'


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // 上一个音符
      lastNote: {
        noteName: ''
      },
      xmlstop: false,
      xmlPlayQueue: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_3_observe__["a" /* default */].$on('xml-music-stop', function () {
      if (_this.xmlPlayQueue && _this.xmlPlayQueue.length > 0) {
        _this.xmlPlayQueue.shift();
        if (_this.xmlPlayQueue[0]) {
          _this.playXMLScore(_this.xmlPlayQueue[0]);
        }
      }
    });

    setTimeout(function () {
      // this.addToPlayQueue(testScore)
    }, 1e3);
  },

  methods: {
    addToPlayQueue: function addToPlayQueue(score) {
      if (this.xmlPlayQueue.length <= 0) {
        this.playXMLScore(score);
      }
      this.xmlPlayQueue.push(score);
    },
    initXMLPlayState: function initXMLPlayState() {
      this.xmlstop = false;
      this.measures = [];
      this.measures_len = 0;
      this.lastNote = {
        noteName: ''
      };
    },
    pauseXMLPlay: function pauseXMLPlay() {
      this.xmlstop = true;
      // this.measures_len = 0
      $('.piano-key').removeClass('auto-key-active');
    },
    playXMLScore: function playXMLScore(musicScore) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var i, measure, awaitAll, staff_key, staff, voice_key, notes, playCurrentMeasure;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.initXMLPlayState();
                _this2.measures = musicScore.measures;
                _this2.measures_len = 0 || _this2.measures.length;

                i = 0;

              case 4:
                if (!(i < _this2.measures_len)) {
                  _context.next = 19;
                  break;
                }

                // 按小节处理，分小节播放
                measure = _this2.measures[i];
                awaitAll = [];


                for (staff_key in measure) {
                  // if (staff_key != 'staff1') continue
                  staff = measure[staff_key];


                  for (voice_key in staff) {
                    notes = staff[voice_key] || [];
                    // console.log(voice_key, ': ', notes);
                    // 每个音轨的播放序列推入数组

                    awaitAll.push(_this2.playNotesArr(notes));
                  }
                }
                playCurrentMeasure = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(awaitAll);
                _context.next = 11;
                return playCurrentMeasure;

              case 11:
                if (!_this2.xmlstop) {
                  _context.next = 15;
                  break;
                }

                playCurrentMeasure = null;
                __WEBPACK_IMPORTED_MODULE_3_observe__["a" /* default */].$emit('xml-music-stop');
                return _context.abrupt('break', 19);

              case 15:
                if (i == _this2.measures_len - 1) {
                  __WEBPACK_IMPORTED_MODULE_3_observe__["a" /* default */].$emit('xml-music-stop');
                }

              case 16:
                i++;
                _context.next = 4;
                break;

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    playNotesArr: function playNotesArr(noteArr) {
      var vm = this;
      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        // 初始化
        var i = 0;
        var initTime = new Date();
        var playedTime = 0;
        var pressedNotes = [];

        function loop() {
          // 监听到停止信号时，立即resolve
          if (vm.xmlstop) {
            clearInterval(playTimer);
            playTimer = null;
            resolve();
          }
          var curTime = new Date();
          var delta = curTime - initTime;
          if (delta >= playedTime) {
            // 播放下一个音符

            pressedNotes.forEach(function (pNote) {
              if (pNote && pNote.noteName) {
                // $(`[note=${ pNote.noteName }]`).removeClass('auto-key-active')
                $('[data-name="' + pNote.noteName + '"]').removeClass('auto-key-active');
              }
            });
            pressedNotes = [];
            var playNote = noteArr[i];
            if (!playNote || !playNote.duration) {
              // console.log(playNote, i);
              return;
            }
            var duration = playNote.duration ? playNote.duration : 0;
            playedTime += duration;
            // let volume = 1
            // if (noteArr[i].staff > '1') {
            //   volume = 0.8
            // }
            if (playNote.rest) {
              // 休止符
            } else if (playNote.tie != 'start' && playNote.noteName == vm.lastNote.noteName) {
              // 连音且同上一个音符
            } else if (playNote && playNote.noteName) {
              // 有音符名
              for (var j = 0; j < vm.Notes.length; j++) {
                var n = vm.Notes[j];
                if (playNote.noteName == n.name) {
                  // 音符存在，是合理的
                  vm.playNote(playNote.noteName);
                  $('[data-name="' + playNote.noteName + '"]').addClass('auto-key-active');
                  // $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('auto-key-active')
                  pressedNotes.push(playNote);
                  vm.lastNote = playNote;
                  break;
                }
              }
              // 循环看下个音符是否为和弦，直到找到非和弦为止
              while (noteArr[i + 1] && noteArr[i + 1].chord) {
                var chordNote = noteArr[i + 1];
                vm.playNote(chordNote.noteName);
                $('[data-name="' + chordNote.noteName + '"]').addClass('auto-key-active');
                pressedNotes.push(chordNote);
                i++;
              }
            }
            // vm.lastNote[voice] = noteArr[i]
            // if (!vm.lastNote[voice].noteName) vm.lastNote[voice].noteName = ''
            // 当前voice播放完毕
            i++;
            if (i >= noteArr.length) {
              clearInterval(playTimer);
              playTimer = null;
              // 最后一个音符播放完，才算结束，才能resolve
              var lastNoteDuration = Math.floor(noteArr[i - 1].duration || 0);
              setTimeout(function () {
                resolve();
                pressedNotes.forEach(function (pNote) {
                  if (pNote && pNote.noteName) {
                    $('[data-name="' + pNote.noteName + '"]').removeClass('auto-key-active');
                  }
                });
              }, lastNoteDuration);
            }
          }
        }
        var playTimer = setInterval(function () {
          loop();
        }, 17);
      });
    }
  }
});

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNoteNameValid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(378);


var isNoteNameValid = function isNoteNameValid(noteName) {
  return __WEBPACK_IMPORTED_MODULE_0__config__["i" /* Notes */].some(function (n) {
    return n.name == noteName;
  });
};

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(485), __esModule: true };

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(486), __esModule: true };

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(484);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 484 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(512);
module.exports = __webpack_require__(100).Object.freeze;


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(513);
module.exports = __webpack_require__(100).Object.getPrototypeOf;


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(514);
module.exports = __webpack_require__(100).Object.keys;


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(462);
__webpack_require__(463);
__webpack_require__(464);
__webpack_require__(515);
__webpack_require__(517);
__webpack_require__(518);
module.exports = __webpack_require__(100).Promise;


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(516);
__webpack_require__(462);
__webpack_require__(519);
__webpack_require__(520);
module.exports = __webpack_require__(100).Symbol;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(463);
__webpack_require__(464);
module.exports = __webpack_require__(421).f('iterator');


/***/ }),
/* 491 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 492 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(384);
var gOPS = __webpack_require__(396);
var pIE = __webpack_require__(387);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(151);
var call = __webpack_require__(498);
var isArrayIter = __webpack_require__(496);
var anObject = __webpack_require__(146);
var toLength = __webpack_require__(403);
var getIterFn = __webpack_require__(510);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 495 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(395);
var ITERATOR = __webpack_require__(379)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(382);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(146);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(454);
var descriptor = __webpack_require__(152);
var setToStringTag = __webpack_require__(402);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(148)(IteratorPrototype, __webpack_require__(379)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(379)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 501 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(101);
var macrotask = __webpack_require__(461).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(382)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(102);
var anObject = __webpack_require__(146);
var getKeys = __webpack_require__(384);

module.exports = __webpack_require__(54) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(387);
var createDesc = __webpack_require__(152);
var toIObject = __webpack_require__(380);
var toPrimitive = __webpack_require__(154);
var has = __webpack_require__(147);
var IE8_DOM_DEFINE = __webpack_require__(155);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(54) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(380);
var gOPN = __webpack_require__(455).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(148);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(101);
var core = __webpack_require__(100);
var dP = __webpack_require__(102);
var DESCRIPTORS = __webpack_require__(54);
var SPECIES = __webpack_require__(379)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(388);
var defined = __webpack_require__(386);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(101);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(450);
var ITERATOR = __webpack_require__(379)('iterator');
var Iterators = __webpack_require__(395);
module.exports = __webpack_require__(100).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(491);
var step = __webpack_require__(501);
var Iterators = __webpack_require__(395);
var toIObject = __webpack_require__(380);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(452)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(71);
var meta = __webpack_require__(453).onFreeze;

__webpack_require__(418)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(385);
var $getPrototypeOf = __webpack_require__(456);

__webpack_require__(418)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(385);
var $keys = __webpack_require__(384);

__webpack_require__(418)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(383);
var global = __webpack_require__(101);
var ctx = __webpack_require__(151);
var classof = __webpack_require__(450);
var $export = __webpack_require__(145);
var isObject = __webpack_require__(71);
var aFunction = __webpack_require__(150);
var anInstance = __webpack_require__(492);
var forOf = __webpack_require__(494);
var speciesConstructor = __webpack_require__(460);
var task = __webpack_require__(461).set;
var microtask = __webpack_require__(502)();
var newPromiseCapabilityModule = __webpack_require__(416);
var perform = __webpack_require__(457);
var userAgent = __webpack_require__(509);
var promiseResolve = __webpack_require__(458);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(379)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(506)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(402)($Promise, PROMISE);
__webpack_require__(507)(PROMISE);
Wrapper = __webpack_require__(100)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(500)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(101);
var has = __webpack_require__(147);
var DESCRIPTORS = __webpack_require__(54);
var $export = __webpack_require__(145);
var redefine = __webpack_require__(459);
var META = __webpack_require__(453).KEY;
var $fails = __webpack_require__(103);
var shared = __webpack_require__(398);
var setToStringTag = __webpack_require__(402);
var uid = __webpack_require__(389);
var wks = __webpack_require__(379);
var wksExt = __webpack_require__(421);
var wksDefine = __webpack_require__(420);
var enumKeys = __webpack_require__(493);
var isArray = __webpack_require__(497);
var anObject = __webpack_require__(146);
var isObject = __webpack_require__(71);
var toObject = __webpack_require__(385);
var toIObject = __webpack_require__(380);
var toPrimitive = __webpack_require__(154);
var createDesc = __webpack_require__(152);
var _create = __webpack_require__(454);
var gOPNExt = __webpack_require__(505);
var $GOPD = __webpack_require__(504);
var $GOPS = __webpack_require__(396);
var $DP = __webpack_require__(102);
var $keys = __webpack_require__(384);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(455).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(387).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(383)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(148)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(145);
var core = __webpack_require__(100);
var global = __webpack_require__(101);
var speciesConstructor = __webpack_require__(460);
var promiseResolve = __webpack_require__(458);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(145);
var newPromiseCapability = __webpack_require__(416);
var perform = __webpack_require__(457);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(420)('asyncIterator');


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(420)('observable');


/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-random-lyric {\n  width: 100%;\n  min-height: 40px;\n  padding: 5px 0;\n  margin: 0 auto;\n  text-align: center;\n}\n.component-random-lyric .lyric {\n  display: inline;\n  line-height: 30px;\n  font-size: 18px;\n  font-style: italic;\n  color: #1F6FB5;\n  cursor: pointer;\n  text-shadow: 2px 2px 8px #fff;\n}\n.component-random-lyric .lyric:hover {\n  color: #1295DB;\n}\n", ""]);

// exports


/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.page-pc {\n  width: 100%;\n  min-width: 1280px;\n  height: 100%;\n  padding: 1px;\n  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #2c3e50;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow-x: scroll;\n}\n.page-pc .app-bg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -100;\n  opacity: 0.5;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-transition: all 0.5s linear;\n  transition: all 0.5s linear;\n}\n.page-pc .app-content {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  position: relative;\n}\n.page-pc .app-content .piano-scroll-wrap {\n  overflow: hidden;\n}\n.page-pc .app-content .score-section {\n  width: 100%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.page-pc .app-content .section-title {\n  margin: 30px auto 20px;\n  font-size: 28px;\n  font-weight: 500;\n  color: #333;\n}\n.page-pc .app-content .right-drawer {\n  width: 500px;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  right: -500px;\n  z-index: 100;\n  border-left: solid 1px #ccc;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.page-pc .app-content .right-drawer .trigger {\n  width: 30px;\n  height: 86px;\n  font-size: 16px;\n  text-align: center;\n  padding-top: 7px;\n  position: absolute;\n  top: 50%;\n  left: -32px;\n  background: #EF496F;\n  color: #fff;\n  cursor: pointer;\n  z-index: 101;\n}\n.page-pc .app-content .right-drawer .close {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  background: #EF496F;\n  color: #fff;\n  cursor: pointer;\n  z-index: 101;\n}\n.page-pc .app-content .right-drawer .component-manual-list {\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 0;\n  border: none;\n}\n.page-pc .app-content .right-drawer.show {\n  right: 0;\n}\n", ""]);

// exports


/***/ }),
/* 523 */,
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.score-container.component-auto-list {\n  width: 40%;\n  min-width: 500px;\n  padding-bottom: 50%;\n  font-size: 14px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  border: solid 1px #ddd;\n  position: relative;\n}\n.score-container.component-auto-list .list-view {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 20px 15px;\n  overflow-y: scroll;\n}\n.score-container.component-auto-list .component-title {\n  margin: 0 0 10px 0;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 26px;\n  position: relative;\n}\n.score-container.component-auto-list .component-title .title-img {\n  display: inline-block;\n  width: 26px;\n  vertical-align: middle;\n}\n.score-container.component-auto-list .component-title .title {\n  vertical-align: middle;\n  margin-left: 5px;\n}\n.score-container.component-auto-list .component-title .degree {\n  width: 150px;\n  float: right;\n  text-align: left;\n}\n.score-container.component-auto-list .list {\n  width: 100%;\n  padding-left: 25px;\n  padding-bottom: 10px;\n  line-height: 32px;\n}\n.score-container.component-auto-list .list .list-item {\n  height: 32px;\n  line-height: 32px;\n  list-style: none;\n}\n.score-container.component-auto-list .list .list-item a {\n  display: inline-block;\n  min-width: 120px;\n  cursor: pointer;\n}\n.score-container.component-auto-list .list .list-item .icon-pause {\n  display: inline-block;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  cursor: pointer;\n}\n.score-container.component-auto-list .list .list-item .icon-pause:hover {\n  opacity: 0.8;\n}\n.score-container.component-auto-list .list .list-item a:hover {\n  color: #1295DB;\n  text-decoration: underline;\n}\n.score-container.component-auto-list .list .list-item .num {\n  float: left;\n  width: 35px;\n  height: 32px;\n  font-size: 16px;\n  margin-left: -35px;\n  text-align: center;\n  color: #EF496F;\n}\n.score-container.component-auto-list .list .list-item .difficulty-degree {\n  width: 150px;\n  float: right;\n  text-align: left;\n}\n.score-container.component-auto-list .list .list-item .difficulty-degree .icon-heartbeat {\n  display: inline-block;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  margin-left: -6px;\n}\n.score-container.component-auto-list .player-view {\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 20px 15px;\n  overflow-y: scroll;\n}\n.score-container.component-auto-list .player-view .top-bar .return-btn {\n  cursor: pointer;\n  width: 80px;\n  height: 32px;\n  line-height: 32px;\n  font-size: 14px;\n  color: #1F6FB5;\n}\n.score-container.component-auto-list .player-view .top-bar .return-btn:hover {\n  text-decoration: underline;\n  color: #1295DB;\n}\n.score-container.component-auto-list .player-view .top-bar h2 {\n  font-size: 18px;\n}\n.score-container.component-auto-list .player-view .cd-box {\n  width: 400px;\n  margin: 15% auto 10px;\n  padding: 10px;\n  border-radius: 15px;\n  position: relative;\n}\n.score-container.component-auto-list .player-view .cd-box .cd-reader-1 {\n  width: 100px;\n  height: 10px;\n  border-radius: 5px;\n  background: -webkit-gradient(linear, left top, right top, from(#333), color-stop(#aaa), to(#333));\n  background: linear-gradient(to right, #333, #aaa, #333);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.score-container.component-auto-list .player-view .cd-box .cd-reader-1::before {\n  content: '';\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #888;\n  position: absolute;\n  top: -6px;\n  left: -6px;\n  border: solid 2px #444;\n}\n.score-container.component-auto-list .player-view .cd-box .cd-reader-2 {\n  width: 80px;\n  height: 10px;\n  border-radius: 5px;\n  background: -webkit-gradient(linear, left top, right top, from(#333), color-stop(#666), to(#888));\n  background: linear-gradient(to right, #333, #666, #888);\n  -webkit-transform: rotate(20deg);\n          transform: rotate(20deg);\n  position: absolute;\n  top: 105px;\n  left: 50px;\n  z-index: 10;\n}\n.score-container.component-auto-list .player-view .cd-box .cd {\n  width: 220px;\n  height: 220px;\n  margin: 0 auto;\n  border-radius: 50%;\n  border: solid 5px #ccc;\n  background: -webkit-gradient(linear, left top, right top, from(#000), color-stop(#555), to(#000));\n  background: linear-gradient(to right, #000, #555, #000);\n  position: relative;\n}\n.score-container.component-auto-list .player-view .cd-box .cd .cd-inner {\n  width: 70px;\n  height: 70px;\n  line-height: 65px;\n  border-radius: 50%;\n  border: solid 3px #aaa;\n  background: #CD3F11;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n  color: #fff;\n  font-size: 12px;\n}\n.score-container.component-auto-list .player-view .music-name {\n  text-align: center;\n  padding: 15px 0 5px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.score-container.component-auto-list .player-view .difficulty-degree {\n  text-align: center;\n}\n.score-container.component-auto-list .player-view .difficulty-degree .icon-heartbeat {\n  display: inline-block;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  margin-left: -6px;\n}\n.score-container.component-auto-list .player-view .control-bar {\n  width: 100%;\n  text-align: center;\n  padding: 15px 0;\n}\n.score-container.component-auto-list .player-view .control-bar .stop-btn {\n  display: inline-block;\n  width: 70px;\n  height: 30px;\n  line-height: 30px;\n  background: #EF496F;\n  color: #fff;\n  cursor: pointer;\n}\n.score-container.component-auto-list .player-view .control-bar .stop-btn:hover {\n  opacity: 0.8;\n}\n@-webkit-keyframes spin {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes spin {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-autopiano {\n  width: 100%;\n  position: relative;\n  color: #000;\n}\n.component-autopiano #audioEffectCanvas {\n  display: none;\n}\n.component-autopiano .piano-scroll-wrap {\n  width: 100%;\n  overflow: scroll;\n}\n.component-autopiano .piano-wrap.visible {\n  opacity: 1;\n}\n.component-autopiano .piano-wrap {\n  width: 90%;\n  margin: 20px auto;\n  -webkit-box-shadow: 5px 5px 20px 5px #888;\n          box-shadow: 5px 5px 20px 5px #888;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  opacity: 0;\n}\n.component-autopiano .piano-wrap .piano-band {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  background: #000;\n  -webkit-box-shadow: inset 0px -1px 2px rgba(255, 255, 255, 0.4), 0 2px 3px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0px -1px 2px rgba(255, 255, 255, 0.4), 0 2px 3px rgba(0, 0, 0, 0.4);\n  border-width: 3px 2px 2px;\n  border-style: solid;\n  border-color: #555 #222 #111 #777;\n  position: relative;\n}\n.component-autopiano .piano-wrap .piano-band .piano-band-img {\n  width: 130px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.component-autopiano .piano-wrap .piano-band .piano-tip {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: #fff;\n  font-size: 14px;\n}\n.component-autopiano .piano-wrap .piano-key-wrap {\n  width: 100%;\n  background: #373737;\n  overflow: hidden;\n  position: relative;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .piano-key:hover {\n  cursor: pointer;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey {\n  display: inline-block;\n  width: 2.775%;\n  height: 100%;\n  margin: 0 auto;\n  background: #fff;\n  background: linear-gradient(-30deg, #f5f5f5, #fff);\n  border: 1px solid #ccc;\n  -webkit-box-shadow: inset 0 1px 0px #fff, inset 0 -1px 0px #fff, inset 1px 0px 0px #fff, inset -1px 0px 0px #fff, 0 4px 3px rgba(0, 0, 0, 0.7);\n          box-shadow: inset 0 1px 0px #fff, inset 0 -1px 0px #fff, inset 1px 0px 0px #fff, inset -1px 0px 0px #fff, 0 4px 3px rgba(0, 0, 0, 0.7);\n  border-radius: 0 0 5px 5px;\n  position: relative;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey:active {\n  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);\n  top: -1%;\n  height: 99%;\n  background: #efefef;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey:active:before {\n  content: \"\";\n  border-width: 250px 5px 0px;\n  border-style: solid;\n  border-color: transparent transparent transparent rgba(0, 0, 0, 0.1);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey:active:after {\n  content: \"\";\n  border-width: 250px 5px 0px;\n  border-style: solid;\n  border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip {\n  width: 100%;\n  color: #373737;\n  text-align: center;\n  font-size: 14px;\n  position: absolute;\n  bottom: 5%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip .keyname {\n  margin-bottom: 5px;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip .notename {\n  color: #1295DB;\n  font-weight: bold;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey-active {\n  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);\n  top: -1%;\n  height: 99%;\n  background: #efefef;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey-active:before {\n  content: \"\";\n  border-width: 250px 5px 0px;\n  border-style: solid;\n  border-color: transparent transparent transparent rgba(0, 0, 0, 0.1);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey-active:after {\n  content: \"\";\n  border-width: 250px 5px 0px;\n  border-style: solid;\n  border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey {\n  display: inline-block;\n  width: 10%;\n  height: 70%;\n  background: linear-gradient(-20deg, #333, #000, #333);\n  border-width: 1px 2px 7px;\n  border-style: solid;\n  border-color: #666 #222 #111 #555;\n  border-radius: 0 0 2px 2px;\n  -webkit-box-shadow: inset 0px -1px 2px rgba(255, 255, 255, 0.4), 0 2px 3px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0px -1px 2px rgba(255, 255, 255, 0.4), 0 2px 3px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey:active {\n  height: 101%;\n  border-bottom-width: 2px;\n  -webkit-box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0px rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0px #000;\n          box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0px rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0px #000;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey .keytip {\n  width: 100%;\n  color: #fff;\n  position: absolute;\n  left: 0;\n  bottom: 5%;\n  font-size: 14px;\n  overflow: hidden;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey .keytip .keyname {\n  width: 100%;\n  text-align: center;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey-active {\n  height: 101%;\n  border-bottom-width: 2px;\n  -webkit-box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0px rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0px #000;\n          box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0px rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0px #000;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active {\n  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);\n  top: 0%;\n  height: 100%;\n  background: #FACC94 !important;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active:before {\n  content: \"\";\n  border-width: 250px 5px 0px;\n  border-style: solid;\n  border-color: transparent transparent transparent rgba(0, 0, 0, 0.1);\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active:after {\n  content: \"\";\n  border-width: 250px 5px 0px;\n  border-style: solid;\n  border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey.auto-key-active {\n  height: 101%;\n  border-bottom-width: 2px;\n  -webkit-box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0px rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0px #000;\n          box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0px rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0px #000;\n  background: #FACC94 !important;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(1) {\n  left: 9%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(2) {\n  left: 23%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(3) {\n  left: 50%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(4) {\n  left: 65%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(5) {\n  left: 79%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap {\n  width: 20%;\n  height: 0;\n  position: absolute;\n  top: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap1 {\n  left: 0;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap2 {\n  left: 19.5%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap3 {\n  left: 39%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap4 {\n  left: 58.3%;\n}\n.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap5 {\n  left: 77.7%;\n}\n.component-autopiano .piano-options {\n  width: 90%;\n  height: 50px;\n  margin: 10px auto 15px;\n  padding: 0;\n  position: relative;\n}\n.component-autopiano .piano-options .option-item-wrap {\n  position: absolute;\n  right: 1%;\n}\n.component-autopiano .piano-options .option-item {\n  display: inline-block;\n  height: 50px;\n  line-height: 50px;\n  margin: 0 15px;\n}\n.component-autopiano .piano-options .option-item .label > input {\n  display: none;\n}\n.component-autopiano .piano-options .option-item .label i {\n  display: inline-block;\n  margin-left: 5px;\n  padding: 2px;\n  width: 40px;\n  height: 20px;\n  border-radius: 13px;\n  vertical-align: middle;\n  -webkit-transition: 0.25s 0.09s;\n  transition: 0.25s 0.09s;\n  position: relative;\n  background: #d8d9db;\n  -webkit-box-sizing: initial;\n          box-sizing: initial;\n}\n.component-autopiano .piano-options .option-item .label i:after {\n  content: \" \";\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  position: absolute;\n  left: 2px;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n}\n.component-autopiano .piano-options .option-item .label > input:checked + i {\n  background: #07E26D;\n}\n.component-autopiano .piano-options .option-item .label > input:checked + i:after {\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.component-autopiano .piano-options .option-item .label:hover {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-commodity-card {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  text-align: left;\n  background: #fff;\n}\n.component-commodity-card .pic-wrap {\n  width: 100%;\n  padding: 10px 20px;\n  overflow: hidden;\n}\n.component-commodity-card .pic-wrap .pic {\n  width: 100%;\n}\n.component-commodity-card .card-section {\n  padding: 5px 8px;\n}\n.component-commodity-card .commodity-name {\n  display: block;\n  width: 100%;\n  font-weight: bold;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  word-break: break-all;\n  white-space: nowrap;\n}\n.component-commodity-card .commodity-name:hover {\n  text-decoration: underline;\n}\n.component-commodity-card .em {\n  color: #EF496F;\n  font-weight: bold;\n}\n.component-commodity-card .price {\n  float: left;\n}\n.component-commodity-card .price .price-info {\n  font-size: 12px;\n  color: #888;\n}\n.component-commodity-card .sale-count {\n  float: right;\n}\n.component-commodity-card .seller-name {\n  font-size: 12px;\n  color: #888;\n}\n.component-commodity-card .btn-wrap {\n  text-align: center;\n  padding: 5px 0 15px;\n}\n.component-commodity-card .link-btn {\n  display: inline-block;\n  width: 100px;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 13px;\n  background: #EF496F;\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n}\n.component-commodity-card .link-btn:hover {\n  opacity: 0.8;\n}\n", ""]);

// exports


/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.score-container.component-manual-list {\n  width: 40%;\n  min-width: 500px;\n  padding-bottom: 50%;\n  font-size: 14px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  border: solid 1px #ddd;\n  position: relative;\n}\n.score-container.component-manual-list .list-view {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 20px 15px;\n  overflow-y: scroll;\n}\n.score-container.component-manual-list .component-title {\n  margin: 0 0 10px 0;\n  font-size: 18px;\n  font-weight: bold;\n  position: relative;\n}\n.score-container.component-manual-list .component-title a.join {\n  color: #EF496F;\n  font-size: 14px;\n  margin-left: 5px;\n  text-decoration: underline;\n}\n.score-container.component-manual-list .component-title a.join:hover {\n  opacity: 0.8;\n}\n.score-container.component-manual-list .component-title .degree {\n  width: 150px;\n  float: right;\n  text-align: left;\n}\n.score-container.component-manual-list .list {\n  width: 100%;\n  padding-left: 25px;\n  padding-bottom: 10px;\n  line-height: 32px;\n}\n.score-container.component-manual-list .list .list-item {\n  height: 32px;\n  line-height: 32px;\n  list-style: none;\n}\n.score-container.component-manual-list .list .list-item a {\n  display: inline-block;\n  min-width: 120px;\n  cursor: pointer;\n}\n.score-container.component-manual-list .list .list-item a:hover {\n  color: #1295DB;\n  text-decoration: underline;\n}\n.score-container.component-manual-list .list .list-item .num {\n  float: left;\n  width: 35px;\n  height: 32px;\n  font-size: 16px;\n  margin-left: -35px;\n  text-align: center;\n  color: #EF496F;\n}\n.score-container.component-manual-list .list .list-item .difficulty-degree {\n  width: 150px;\n  float: right;\n  text-align: left;\n}\n.score-container.component-manual-list .list .list-item .difficulty-degree .icon-star {\n  display: inline-block;\n  -webkit-transform: scale(0.7);\n          transform: scale(0.7);\n  margin-left: -6px;\n}\n.score-container.component-manual-list .content-wrap {\n  width: 100%;\n}\n.score-container.component-manual-list .content-wrap .info {\n  font-size: 14px;\n  margin: 5px 0;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  background: #1295DB;\n  color: #fff;\n  border-radius: 2px;\n}\n.score-container.component-manual-list .content-wrap .return-btn {\n  cursor: pointer;\n  width: 80px;\n  height: 32px;\n  line-height: 32px;\n  color: #1F6FB5;\n}\n.score-container.component-manual-list .content-wrap .return-btn:hover {\n  text-decoration: underline;\n  color: #1295DB;\n}\n.score-container.component-manual-list .content-wrap .author-info {\n  float: right;\n  line-height: 32px;\n}\n.score-container.component-manual-list .content-wrap .author-info a {\n  color: #1F6FB5;\n  margin-right: 7px;\n}\n.score-container.component-manual-list .content-wrap .score-item-content {\n  word-wrap: break-word;\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 26px;\n}\n.score-container.component-manual-list .content-wrap .score-item-lyrics {\n  word-wrap: break-word;\n  font-style: italic;\n  margin-top: 20px;\n  line-height: 26px;\n}\n", ""]);

// exports


/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "\n.component-commodity-list {\n  width: 100%;\n  height: auto;\n  margin: 30px auto;\n  padding: 0;\n  text-align: center;\n  letter-spacing: -20px;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  overflow: visible;\n  white-space: nowrap;\n  position: relative;\n}\n.component-commodity-list .scroll-wrap {\n  width: 100%;\n  padding: 20px 0;\n  overflow: scroll;\n}\n.component-commodity-list .card-wrap {\n  display: inline-block;\n  width: 20%;\n  margin: 0 2.5%;\n  -webkit-box-shadow: 1px 1px 10px 1px #ddd;\n          box-shadow: 1px 1px 10px 1px #ddd;\n  border-radius: 5px;\n  overflow: hidden;\n  letter-spacing: normal;\n}\n.component-commodity-list .arrow {\n  width: 35px;\n  height: 35px;\n  border-top: solid 6px rgba(239, 73, 111, 0.5);\n  border-right: solid 6px rgba(239, 73, 111, 0.5);\n  position: absolute;\n  top: calc(50% - 17.5px);\n  cursor: pointer;\n}\n.component-commodity-list .arrow:hover {\n  border-color: rgba(239, 73, 111, 0.8);\n}\n.component-commodity-list .left-arrow {\n  left: -10px;\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n.component-commodity-list .right-arrow {\n  right: -10px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n", ""]);

// exports


/***/ }),
/* 529 */
/***/ (function(module, exports) {

// data can be any array-like object.  It just needs to support .length, .slice, and an element getter []

function parseMidi(data) {
  var p = new Parser(data)

  var headerChunk = p.readChunk()
  if (headerChunk.id != 'MThd')
    throw "Bad MIDI file.  Expected 'MHdr', got: '" + headerChunk.id + "'"
  var header = parseHeader(headerChunk.data)

  var tracks = []
  for (var i=0; !p.eof() && i < header.numTracks; i++) {
    var trackChunk = p.readChunk()
    if (trackChunk.id != 'MTrk')
      throw "Bad MIDI file.  Expected 'MTrk', got: '" + trackChunk.id + "'"
    var track = parseTrack(trackChunk.data)
    tracks.push(track)
  }

  return {
    header: header,
    tracks: tracks
  }
}


function parseHeader(data) {
  var p = new Parser(data)

  var format = p.readUInt16()
  var numTracks = p.readUInt16()

  var result = {
    format: format,
    numTracks: numTracks
  }

  var timeDivision = p.readUInt16()
  if (timeDivision & 0x8000) {
    result.framesPerSecond = 0x100 - (timeDivision >> 8)
    result.ticksPerFrame = timeDivision & 0xFF
  } else {
    result.ticksPerBeat = timeDivision
  }

  return result
}

function parseTrack(data) {
  var p = new Parser(data)

  var events = []
  while (!p.eof()) {
    var event = readEvent()
    events.push(event)
  }

  return events

  var lastEventTypeByte = null

  function readEvent() {
    var event = {}
    event.deltaTime = p.readVarInt()

    var eventTypeByte = p.readUInt8()

    if ((eventTypeByte & 0xf0) === 0xf0) {
      // system / meta event
      if (eventTypeByte === 0xff) {
        // meta event
        event.meta = true
        var metatypeByte = p.readUInt8()
        var length = p.readVarInt()
        switch (metatypeByte) {
          case 0x00:
            event.type = 'sequenceNumber'
            if (length !== 2) throw "Expected length for sequenceNumber event is 2, got " + length
            event.number = p.readUInt16()
            return event
          case 0x01:
            event.type = 'text'
            event.text = p.readString(length)
            return event
          case 0x02:
            event.type = 'copyrightNotice'
            event.text = p.readString(length)
            return event
          case 0x03:
            event.type = 'trackName'
            event.text = p.readString(length)
            return event
          case 0x04:
            event.type = 'instrumentName'
            event.text = p.readString(length)
            return event
          case 0x05:
            event.type = 'lyrics'
            event.text = p.readString(length)
            return event
          case 0x06:
            event.type = 'marker'
            event.text = p.readString(length)
            return event
          case 0x07:
            event.type = 'cuePoint'
            event.text = p.readString(length)
            return event
          case 0x20:
            event.type = 'channelPrefix'
            if (length != 1) throw "Expected length for channelPrefix event is 1, got " + length
            event.channel = p.readUInt8()
            return event
          case 0x21:
            event.type = 'portPrefix'
            if (length != 1) throw "Expected length for portPrefix event is 1, got " + length
            event.port = p.readUInt8()
            return event
          case 0x2f:
            event.type = 'endOfTrack'
            if (length != 0) throw "Expected length for endOfTrack event is 0, got " + length
            return event
          case 0x51:
            event.type = 'setTempo';
            if (length != 3) throw "Expected length for setTempo event is 3, got " + length
            event.microsecondsPerBeat = p.readUInt24()
            return event
          case 0x54:
            event.type = 'smpteOffset';
            if (length != 5) throw "Expected length for smpteOffset event is 5, got " + length
            var hourByte = p.readUInt8()
            var FRAME_RATES = { 0x00: 24, 0x20: 25, 0x40: 29, 0x60: 30 }
            event.frameRate = FRAME_RATES[hourByte & 0x60]
            event.hour = hourByte & 0x1f
            event.min = p.readUInt8()
            event.sec = p.readUInt8()
            event.frame = p.readUInt8()
            event.subFrame = p.readUInt8()
            return event
          case 0x58:
            event.type = 'timeSignature'
            if (length != 2 && length != 4) throw "Expected length for timeSignature event is 4 or 2, got " + length
            event.numerator = p.readUInt8()
            event.denominator = (1 << p.readUInt8())
            if (length === 4) {
              event.metronome = p.readUInt8()
              event.thirtyseconds = p.readUInt8()
            } else {
              event.metronome = 0x24
              event.thirtyseconds = 0x08
            }
            return event
          case 0x59:
            event.type = 'keySignature'
            if (length != 2) throw "Expected length for keySignature event is 2, got " + length
            event.key = p.readInt8()
            event.scale = p.readUInt8()
            return event
          case 0x7f:
            event.type = 'sequencerSpecific'
            event.data = p.readBytes(length)
            return event
          default:
            event.type = 'unknownMeta'
            event.data = p.readBytes(length)
            event.metatypeByte = metatypeByte
            return event
        }
      } else if (eventTypeByte == 0xf0) {
        event.type = 'sysEx'
        var length = p.readVarInt()
        event.data = p.readBytes(length)
        return event
      } else if (eventTypeByte == 0xf7) {
        event.type = 'endSysEx'
        var length = p.readVarInt()
        event.data = p.readBytes(length)
        return event
      } else {
        throw "Unrecognised MIDI event type byte: " + eventTypeByte
      }
    } else {
      // channel event
      var param1
      if ((eventTypeByte & 0x80) === 0) {
        // running status - reuse lastEventTypeByte as the event type.
        // eventTypeByte is actually the first parameter
        if (lastEventTypeByte === null)
          throw "Running status byte encountered before status byte"
        param1 = eventTypeByte
        eventTypeByte = lastEventTypeByte
        event.running = true
      } else {
        param1 = p.readUInt8()
        lastEventTypeByte = eventTypeByte
      }
      var eventType = eventTypeByte >> 4
      event.channel = eventTypeByte & 0x0f
      switch (eventType) {
        case 0x08:
          event.type = 'noteOff'
          event.noteNumber = param1
          event.velocity = p.readUInt8()
          return event
        case 0x09:
          var velocity = p.readUInt8()
          event.type = velocity === 0 ? 'noteOff' : 'noteOn'
          event.noteNumber = param1
          event.velocity = velocity
          if (velocity === 0) event.byte9 = true
          return event
        case 0x0a:
          event.type = 'noteAftertouch'
          event.noteNumber = param1
          event.amount = p.readUInt8()
          return event
        case 0x0b:
          event.type = 'controller'
          event.controllerType = param1
          event.value = p.readUInt8()
          return event
        case 0x0c:
          event.type = 'programChange'
          event.programNumber = param1
          return event
        case 0x0d:
          event.type = 'channelAftertouch'
          event.amount = param1
          return event
        case 0x0e:
          event.type = 'pitchBend'
          event.value = (param1 + (p.readUInt8() << 7)) - 0x2000
          return event
        default:
          throw "Unrecognised MIDI event type: " + eventType
      }
    }
  }
}

function Parser(data) {
  this.buffer = data
  this.bufferLen = this.buffer.length
  this.pos = 0
}

Parser.prototype.eof = function() {
  return this.pos >= this.bufferLen
}

Parser.prototype.readUInt8 = function() {
  var result = this.buffer[this.pos]
  this.pos += 1
  return result
}

Parser.prototype.readInt8 = function() {
  var u = this.readUInt8()
  if (u & 0x80)
    return u - 0x100
  else
    return u
}

Parser.prototype.readUInt16 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8()

    return (b0 << 8) + b1
}

Parser.prototype.readInt16 = function() {
  var u = this.readUInt16()
  if (u & 0x8000)
    return u - 0x10000
  else
    return u
}

Parser.prototype.readUInt24 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8(),
      b2 = this.readUInt8()

    return (b0 << 16) + (b1 << 8) + b2
}

Parser.prototype.readInt24 = function() {
  var u = this.readUInt24()
  if (u & 0x800000)
    return u - 0x1000000
  else
    return u
}

Parser.prototype.readUInt32 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8(),
      b2 = this.readUInt8(),
      b3 = this.readUInt8()

    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3
}

Parser.prototype.readBytes = function(len) {
  var bytes = this.buffer.slice(this.pos, this.pos + len)
  this.pos += len
  return bytes
}

Parser.prototype.readString = function(len) {
  var bytes = this.readBytes(len)
  return String.fromCharCode.apply(null, bytes)
}

Parser.prototype.readVarInt = function() {
  var result = 0
  while (!this.eof()) {
    var b = this.readUInt8()
    if (b & 0x80) {
      result += (b & 0x7f)
      result <<= 7
    } else {
      // b is last byte
      return result + b
    }
  }
  // premature eof
  return result
}

Parser.prototype.readChunk = function() {
  var id = this.readString(4)
  var length = this.readUInt32()
  var data = this.readBytes(length)
  return {
    id: id,
    length: length,
    data: data
  }
}

module.exports = parseMidi


/***/ }),
/* 530 */
/***/ (function(module, exports) {

// data should be the same type of format returned by parseMidi
// for maximum compatibililty, returns an array of byte values, suitable for conversion to Buffer, Uint8Array, etc.

// opts:
// - running              reuse previous eventTypeByte when possible, to compress file
// - useByte9ForNoteOff   use 0x09 for noteOff when velocity is zero

function writeMidi(data, opts) {
  if (typeof data !== 'object')
    throw 'Invalid MIDI data'

  opts = opts || {}

  var header = data.header || {}
  var tracks = data.tracks || []
  var i, len = tracks.length

  var w = new Writer()
  writeHeader(w, header, len)

  for (i=0; i < len; i++) {
    writeTrack(w, tracks[i], opts)
  }

  return w.buffer
}

function writeHeader(w, header, numTracks) {
  var format = header.format == null ? 1 : header.format

  var timeDivision = 128
  if (header.timeDivision) {
    timeDivision = header.timeDivision
  } else if (header.ticksPerFrame && header.framesPerSecond) {
    timeDivision = (-(header.framesPerSecond & 0xFF) << 8) | (header.ticksPerFrame & 0xFF)
  } else if (header.ticksPerBeat) {
    timeDivision = header.ticksPerBeat & 0x7FFF
  }

  var h = new Writer()
  h.writeUInt16(format)
  h.writeUInt16(numTracks)
  h.writeUInt16(timeDivision)

  w.writeChunk('MThd', h.buffer)
}

function writeTrack(w, track, opts) {
  var t = new Writer()
  var i, len = track.length
  var eventTypeByte = null
  for (i=0; i < len; i++) {
    // Reuse last eventTypeByte when opts.running is set, or event.running is explicitly set on it.
    // parseMidi will set event.running for each event, so that we can get an exact copy by default.
    // Explicitly set opts.running to false, to override event.running and never reuse last eventTypeByte.
    if (opts.running === false || !opts.running && !track[i].running) eventTypeByte = null

    eventTypeByte = writeEvent(t, track[i], eventTypeByte, opts.useByte9ForNoteOff)
  }
  w.writeChunk('MTrk', t.buffer)
}

function writeEvent(w, event, lastEventTypeByte, useByte9ForNoteOff) {
  var type = event.type
  var deltaTime = event.deltaTime
  var text = event.text || ''
  var data = event.data || []
  var eventTypeByte = null
  w.writeVarInt(deltaTime)

  switch (type) {
    // meta events
    case 'sequenceNumber':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x00)
      w.writeVarInt(2)
      w.writeUInt16(event.number)
      break;

    case 'text':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x01)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'copyrightNotice':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x02)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'trackName':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x03)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'instrumentName':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x04)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'lyrics':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x05)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'marker':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x06)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'cuePoint':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x07)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'channelPrefix':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x20)
      w.writeVarInt(1)
      w.writeUInt8(event.channel)
      break;

    case 'portPrefix':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x21)
      w.writeVarInt(1)
      w.writeUInt8(event.port)
      break;

    case 'endOfTrack':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x2F)
      w.writeVarInt(0)
      break;

    case 'setTempo':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x51)
      w.writeVarInt(3)
      w.writeUInt24(event.microsecondsPerBeat)
      break;

    case 'smpteOffset':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x54)
      w.writeVarInt(5)
      var FRAME_RATES = { 24: 0x00, 25: 0x20, 29: 0x40, 30: 0x60 }
      var hourByte = (event.hour & 0x1F) | FRAME_RATES[event.frameRate]
      w.writeUInt8(hourByte)
      w.writeUInt8(event.min)
      w.writeUInt8(event.sec)
      w.writeUInt8(event.frame)
      w.writeUInt8(event.subFrame)
      break;

    case 'timeSignature':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x58)
      w.writeVarInt(4)
      w.writeUInt8(event.numerator)
      var denominator = Math.floor((Math.log(event.denominator) / Math.LN2)) & 0xFF
      w.writeUInt8(denominator)
      w.writeUInt8(event.metronome)
      w.writeUInt8(event.thirtyseconds || 8)
      break;

    case 'keySignature':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x59)
      w.writeVarInt(2)
      w.writeInt8(event.key)
      w.writeUInt8(event.scale)
      break;

    case 'sequencerSpecific':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x7F)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    case 'unknownMeta':
      if (event.metatypeByte != null) {
        w.writeUInt8(0xFF)
        w.writeUInt8(event.metatypeByte)
        w.writeVarInt(data.length)
        w.writeBytes(data)
      }
      break;

    // system-exclusive
    case 'sysEx':
      w.writeUInt8(0xF0)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    case 'endSysEx':
      w.writeUInt8(0xF7)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    // channel events
    case 'noteOff':
      // Use 0x90 when opts.useByte9ForNoteOff is set and velocity is zero, or when event.byte9 is explicitly set on it.
      // parseMidi will set event.byte9 for each event, so that we can get an exact copy by default.
      // Explicitly set opts.useByte9ForNoteOff to false, to override event.byte9 and always use 0x80 for noteOff events.
      var noteByte = ((useByte9ForNoteOff !== false && event.byte9) || (useByte9ForNoteOff && event.velocity == 0)) ? 0x90 : 0x80

      eventTypeByte = noteByte | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.velocity)
      break;

    case 'noteOn':
      eventTypeByte = 0x90 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.velocity)
      break;

    case 'noteAftertouch':
      eventTypeByte = 0xA0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.amount)
      break;

    case 'controller':
      eventTypeByte = 0xB0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.controllerType)
      w.writeUInt8(event.value)
      break;

    case 'programChange':
      eventTypeByte = 0xC0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.programNumber)
      break;

    case 'channelAftertouch':
      eventTypeByte = 0xD0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.amount)
      break;

    case 'pitchBend':
      eventTypeByte = 0xE0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      var value14 = 0x2000 + event.value
      var lsb14 = (value14 & 0x7F)
      var msb14 = (value14 >> 7) & 0x7F
      w.writeUInt8(lsb14)
      w.writeUInt8(msb14)
    break;

    default:
      throw 'Unrecognized event type: ' + type
  }
  return eventTypeByte
}


function Writer() {
  this.buffer = []
}

Writer.prototype.writeUInt8 = function(v) {
  this.buffer.push(v & 0xFF)
}
Writer.prototype.writeInt8 = Writer.prototype.writeUInt8

Writer.prototype.writeUInt16 = function(v) {
  var b0 = (v >> 8) & 0xFF,
      b1 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
}
Writer.prototype.writeInt16 = Writer.prototype.writeUInt16

Writer.prototype.writeUInt24 = function(v) {
  var b0 = (v >> 16) & 0xFF,
      b1 = (v >> 8) & 0xFF,
      b2 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
  this.writeUInt8(b2)
}
Writer.prototype.writeInt24 = Writer.prototype.writeUInt24

Writer.prototype.writeUInt32 = function(v) {
  var b0 = (v >> 24) & 0xFF,
      b1 = (v >> 16) & 0xFF,
      b2 = (v >> 8) & 0xFF,
      b3 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
  this.writeUInt8(b2)
  this.writeUInt8(b3)
}
Writer.prototype.writeInt32 = Writer.prototype.writeUInt32


Writer.prototype.writeBytes = function(arr) {
  this.buffer = this.buffer.concat(Array.prototype.slice.call(arr, 0))
}

Writer.prototype.writeString = function(str) {
  var i, len = str.length, arr = []
  for (i=0; i < len; i++) {
    arr.push(str.codePointAt(i))
  }
  this.writeBytes(arr)
}

Writer.prototype.writeVarInt = function(v) {
  if (v < 0) throw "Cannot write negative variable-length integer"

  if (v <= 0x7F) {
    this.writeUInt8(v)
  } else {
    var i = v
    var bytes = []
    bytes.push(i & 0x7F)
    i >>= 7
    while (i) {
      var b = i & 0x7F | 0x80
      bytes.push(b)
      i >>= 7
    }
    this.writeBytes(bytes.reverse())
  }
}

Writer.prototype.writeChunk = function(id, data) {
  this.writeString(id)
  this.writeUInt32(data.length)
  this.writeBytes(data)
}

module.exports = writeMidi


/***/ }),
/* 531 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAA9BAMAAAAqpSomAAAAMFBMVEUAAAD///8gICB/f38/Pz+/v7+fn5/f399eXl7r6+uMjIxXV1e3t7fPz8+bm5tzc3N0mYyLAAAEjUlEQVRYw+1Xy5LSQBS9Nh0mZZWlGeSxzBgFl+HhyDI45VDlijAwuuQ16FIYX8vM4KALN36Cn+DSjVX+med2EgyRLDK4cMGtoh803eee++qGdrKTnexkJxvkaNo3k9YeHvb7/fHlP8GRZ41sJ3Ft/ATd/eUJbS/6iSnOE9bKJ2YIOebWcrYBOjfpwtu89nQSYTciytjbmO6dSdm7CYxG0VnGERPaQs4cEs+dzWzfrM9ri22A2jY+881r8SDY87YAyvSgenFzhD9QB1tn/cBmYpLWS5FzxSma6mZKQtnuuIG48BGOaZQKRwyN8xVWBWpnEyhV+OuyAnmlvGZTOj9dFD4f5sK4Y7XdBC/11Om+Hbmpg1yq7CmY0DSoCFcYawmUsuylwEMazwfQMg3Sga0giILNIonSMdvO/IM0ZY+mQZr6zAbcjtkwCZSoCy3CWFsSoTA+dGZp4mEfTWAWzWZKCeVBQhcr4rKXtKzJYho32RT6WLzg3kgomVnnD6VMB/Wq7JFWSIGUdcIaRhUeuiXaLBp+E45bJlW9Edy0nwJJC604UBGuGV7yD0NKsoSIhWrSsK+BRIM2Uxrmkn8ozTADbWrNNc5Eug7S4ZxtaQyi0TLrRsxsrkY5rHiaeWzY10L6xCdV82vlJzqT4bH6e4e0PMlZsUdpJFRVTvkQo7NGKToLq6l0MRjuY1kW090SXnBtZzmmimYSJcS/oxi5EzSwW3IlpuSE5K6joTEiWWsdGud1J0pxioxavq9xBSsGLFNJx6dEGkisZe1VPl5O8M57pWjMoFF6aQZlD0huLmpWN+nFF43Q1MG3RL9+gJgmewEReh2Rtv9q09QBEvEmZkit4+Gc0L7fEMm6wUutAq+PG3voZd2GXz0+7eVbJw6w+mLi3xZlyQdcgEkFH/2QKT3NO5m/kVrsTp1T4NMH0ocwREO+1j35mlOgR/F0dgur6DXVbbrgeMiAjro3mkM0DxDMOsVFqHi4KmI9b9IeDGGZlW6NKrAGe9qLpdHMMEN2vZ6i5pZ852hAzJbRyBlq7n2CqDNDqRge9g/nWAedagf2F7MFFyhqF5EIMetpVWM1Hqq1U8SDVQUlRqwNS0TfARvYwjXsdUpNaNLK+U/Dj1DEpnaBlP3j5tYelFYxOwEnKAgz/MR+NtkzHXrf/trFvnsKwgjCMqwjonWXxNcBZnO66RArB4I/mHnNillvxVF+oDKgNOiT+Yb9j3OkewdQ9wsf2WwSy3OMg40+Jkx1K89haIqautQQgvovprTwYm7thkCn/Ag7fYKAskauQw+rA5jDHVDmgPcFAO2VXrOewsPFUcX6VYks/56u2nRZZEoUl7ZPSvZVLx8Zxf5E5Eh6bxFKlCdhH3iRm6IbFvIPqt/r0Ges65WB9FQI0QlZ9wB4RH+J6F+iOTr1AeHMNyaJO9QQ+9LmB1OTbpBoUihlVfCOZhN/esOxnBtQ5MBsEKnXVEe36Q5ZHm2AeoT/xY1wtqfeD/W6SWP+boyBXm9G/0af9Z+/HTuht1AUMq8apNVVVvBWbFvUPdrJTnayk/9OfgPpX7vwWLh13gAAAABJRU5ErkJggg=="

/***/ }),
/* 532 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABiCAMAAACRZYZ7AAAC+lBMVEUAAADT1djq6+zU1ti5vcIqUIIlSn0tVYS8wMS8wMUvU4TZ290pT4ErUIJsgqO7v8MUTYMpT4IqUIIqUILJzM3R0dpLaZIrUIK9wsbs7O28wcUoT4IrUYMkRH0nUIO9wcW9wcUqT4Lq6+wpUILp6uu9wsbs7e6/wsfr7Ozq6+y8wcW9wcYpT4K9wsYoT4G1ur7q6+wAKHUqUILt7u/r7O29wsW8wMTp6uwpT4Lr6+y+wsbp6uy7v8W8wMXp6eopUILp6uvp6+u9wcTp6+snT4Gcpbfu7+/o7OzS19wpT4K9wcQAO3nY2tyeqbuOma3s7u4oToEAAFhtgaAyVIQUT4Tb3d82V4UANnrEyMuttcGBk6tabJF+iKMADm/p6uv////n6er+/v6h0v6j1P/r7O3q6+zt7e78/f6l1v/u7+/m6OkAQnwsVIgAPnrx8vHw8PCm2P8uVIUAQ34iSn2n2f8qUobh4+a6vsIcSn8lTIAuUoPCxck3VoU0VIMpTYAfR3wAN3nz9PXd4eUxU4QaRXoANHj5+/z19vfY3eK9wcUAOnvj5urDyMwyVogBRX83XY33+PouV4svT4Cxusm/w8e8wMS7v8MAPn0VQXfP0tVSeadAZpU5WYgQRHvv8fTAyNO1vswASIEIRHybzPfFzdnLz9KTobd+j6onSXuYyPTf4+jFyc2lscOGla5geJxFa5sXSH4fQnfV2uHR1t7X2t3J0NrHy86tt8d3iqdyhaRlfJ5acpdUbpUzWoskUIQOSYAAMHeez/uGtN/O09tfiLUeU4gDTIQAIHLr7vPU19q4wM2qs8J/i6RPbpcfToIAO3ip2//n6/CUxPC9xdGircCJmbFrf6A7YJAAKXWOvOjZ3uaBrtrEy9WPnrYLPncTPXSRwOzc3uB8qNS4wtFpk79lj7tDY48EN3LJzdF4pNB0n8uptceeqbxagq9LcqFAW4fIzM+ap7yKuONvmsaWpLuapLdLZI1/k68AEW+r1v20wNBtlsNslL+ZqcAUuoz/AAAAXnRSTlMAAvsF/f4OCPzafA7HcP74/vS/rRcK/qIxvIhFOh4U/ejap5liRTYi4czBrWJcT/318bZrT0/y7u7Vz4CAai3rxLKShSrGiiMdzXb52NWjmo496+rp6NHDvrqugm9sQn89ewAAEgRJREFUaN61mgVcG2cUwCEkG6wrsK3t1lknlXXWbmvn7u4uIcDdESEJJBCFJEQIEoK7u1uRQtHiMmAtXkptdVttvv1+e98lkIY1+3VsfRBCjtz98+R7733vsPtPYm93/43w879dwyz/wKB5/0eKgwVmk+Gr8b578RTEcLhp89NPP7NmGVzFFkOp1fgvngKn3XSfvNRgMNTf8aYDvLwkY2/KoT2+pC6LY9g/7XLGkYok7sy9N8GBhW94kOablJLr04Uoi9XjxfpQF3mtiL0/n+pYf8cCCry69TpfbUox09Oz64gvWGxRkAdKHalH9W5IRAmOhicdFrzjtju9lZXFPh4enp6HkkAX+0UwljjJqfXBbu4khU2Nlz+DVLG3BPXD3tLJnT4engD5AyA3Xr0IyJpSx9AgYJikn1p6r52Dg4P9fOAt9ZZJz/khBvMQmOsyF4u9vRXkZjk12cyAJx5Vfsc68urLly1bstze7qo7I46c9yEZB/doLm9B2ls9IblPThUhgAkSVRr66ANrV7901wsrn1+/8oW7Xv3StaiymAmmYp6H4EKMy1FiyZrNy8jfLBC227wE51NXfbKR7xWs1wcFBemD9dskyuPIWD4HtLLLY8Cyu9fFcZXLk2ssB1+UU/dbNNHLxXI2izIn2G5VzGSxp6cHszhS2nIDXOIyMA88WhovFofK4252mI/gemq+BcKiJhgY9HnBxnOEXUwEOZQU8dnl+WONPI4al5xsoK46+iYEDnls3aPx4nA3d3A9PLzOiBOSMQsFa2rTdjDBWPsiY3qcHkFJ57a7b/tHFloS+VHu7sH91NBHYWWbKC8edYkjTJp49VPjQ0X4PANX/yShFQPE78BeTmEGb/1au9s+jb72dtsUsExoQmkwaZZkl+Q35yDr7jA4xquDooL1xFFqKLXfwmAQuyOUlblM8HtXdfZWHpvHeu/rtwL8r73KFgXMc7NhgwjsDt90x9L7QHfT4TWPhq6C3JhfKhbHi5OBMQ9hZbUqU7aDR3JPayPzCDBj1BPvPpTmjSi2IPflb8CBAMJfJX9yyRxk2dul4oR4MVUMIQF6XAw50Vbd5YFiKzV9xRbkKzZ/4ysPpZG62IC8WLoh3KQJw9Fg0gQerz3BEyUb4uND40qTwR+XgvgUR6Y3h+AMOIIR2CsP2bQYHHwmLgFSIZJkl/ybzYy19+gpOMbev3+/iE0Awwqy1dWsSSWpCYOf2cnC+e+Axa4HyiUhy5ziqMlB7u5REESr1sAB0O7Ze4IoOJ1Bx0DgaQFk4CKf7CbYWGZPcw3BQBR/m5TNhjhqfH5yKNUx/2kT43VgmC4IMn9xs7CxvDRTdG0/Vd2zlYWHRGolJAUsZoMC8oyjIR5iSC5/ETyCisl6PTCshEHHMRafh4TPZ/9U5Q/p0cPv2N6wH3lsfGBYltNcw6ITtilk7loVGrrKabM5C90VRVmAwAmMUVc2W/7tt9+Wj58dbZJop2Exftch5DaW4HRWVpsmvbmTIB57960A7+tR/TK51joL2y/b/MA6BzuTsR7hU6wRDFZ4/1iTrE3A4QhAsodlMu1xgDB3phb11PEZdCJWEJgOFgta+dVwxDUmxsvwbH+pemJy+kYWxVoN1u6GbI5EIeS29/7yS6+OI6TJlCkoQfp1FbVvJRhA2SoIzGmuowS/+o2JAT1A9N86JXsQM+4FvTWDKDnrygkQcNqaZrM6Q0Lqto4PSaTSyGIEmaEJh0QYHVGMAVOz8NtauATJ8A2wVZTh4KYgawarxlmVxs2eOLEjystcwoJ3VEikx/ygMG6fVHAzMQYK9hO6RhFO4T0Pl0AMb5rKFgUi6wkrjzD4oy3pgbqGPBPA3cuLTEDf9xad8gRhHlRWOWMEUHB6bC0Lwp2/2m45YgjTynUWygLIamtFwKUyyfBAFMo67oBA4u7lpu4J9J4GVZg7W2m08U4CLVkWDgyK/nnEiIgR1LldmArwRmXz75D1fCtbDXb/NLJCDTUFvkEHk3h5BZeH7T2OGgnPg3s1qh8KB0RsFoEjIfSbPvgoggYMN7ezvRqg/D1bbqJgFzNiwwIqnHeADmSR7CtR71KrSzKQvRJjUnN9YD1OD8sCJMa2yPLRTnV4eHjJlrwP29KquuvIE05wgHLVgghzsFqHDCIvO5BbEeVmQmwZHApr750K69k2uLvPa5sxaYaJ3AINtywnXchpd50oLCxsGDJKaO0rQkxpPRMgUDGtGyNI8BmUeQYmqpBUDfW5BSPErnL/KaWSI+BwtdopQXNBo0Ra6YGiuMM/pqqgUWPkatNHOFyuksOJLMswfa7v22WIYX/xely+7qrVwRSGxVhnVYGtJeAOKAS/uXJjBC3bvgWp6A5LV4bRZDTtMbL1ShFy/3TbETve1N0jEPS0NJ7oc0N6ACMs0PsNa8aym+91crqjloHPG6uuJyAsCxjQrozpNBLXgrwSPo/PU48ONvSoqmga7entKIpnlNLDqP3fUdOZl9e5JRhFOnz9nQEl3eloaWhcnPjMXBnEGT9zBROmxv4CxNhEHcbCUabH+bySmthtRolmz4Hv0IJMVRi/vzj2AAIvsoBhbSuoXGdcHA1ycQL1jNle2BZXjSCPVOR73Q/d5eEE3Vxb2HQ6C2NnNg+j0gWU49WJheh9XkgAgR59BbqA6IVZ/+Z8l3pcH8SWJ4hrMQZprbM5kgovpHpJhGykMBwzw/mD4zgOHF5nGi3pHIrifa0x3ruAAu81P3ZkTY5A8C5gLHeKi88w7aqoyWaXTLTpvif1n1VJtqkxlDrgBzYmaC/HYXGzWYWC6kMQX1Agi7izUW5zElV3ckWvIuK6pQsKit3roQkGd+QuXhy1no2j+K35SZFIBxu47TIGdu9GaQlTAwobV/2gKmRA+0BkDiuic1HtOjaiGW5uvBCbl5f3258NTa0qaaTshpetGcgljgly03ZHbobws7qVFRnIhVm9xnKCZDhX7CIY+LgOKKAUzmiWCGdQSzwdqZDlCIwcJAJjeo7O9eEHLQiLuZ6MWzVnrnzSubwyo6oAeV2/Tdk6gBRhNOo4EyEEHZtFFDZQLnCFp3zQTiglSRYp4HI4OTkcTlh3Y+bTFoSV4+tdDIwoL5YhIWE/xkCQk4m9sUiRjGjJT2ocxfSgMZA7EYIxiAKgNLAxojOsqNITrfpDQm5B7e6ssoKCsoHOEJHbI3YOl97tHnURx8cnxFPzcZMmP3J/yUTRn5Fd1UwegurHDZinhDWoWSGpwshpiC+fYwrOz9BrkEIQlOCnbDRfNznVy+MSwFhsC2Q3gvBVkibyEE7HtnICudtCCAarICynKYQoaeBID/gBpIMmaRLhDHPbQQl+yQpinVbukNejtLJAEyOCgJthpUC/gCgYUJrULDZ2sl15HBY9c5+v8LAIm8tHFK+nwFy2NsDLHmOZEKRPOHM+qfpJBGt8LLUWLmum0HFAsnmxU9XnUWbJjZC2AMTcolG8HrGzRYEG4DEWg2GG8MuydRdQdAUNKdN2E/iYquowUIg5i4FxANJe/YcZEmGGYKL+5P7Pn1lne9t1D58gMJPwBrrTnYMAEjzOzS7j07OyAyWTNaBLrEBDUpC2oMnv1prg/XFUMbU0/44HbLjlaruVfSH9WWOzZ0+Mdu7PPCyM7kP22t3LKWex+QNGE4WI5QTmVJB7H/xHnXCBT/LFaB+9gSo33GyjJb7ti/FuLmpFocJlD6VppkpQWglJVDRvIdj80WyZJLKTxcBijQrVKPSNmLpCS5tB0TVDk1SEQ3RgteJQar4IF52hhsZttlAsiJfvvjORE6MQIikqKtIqNCMnUKbJcNYmDvDYDF5mtkzY0kkwiNjhLIysaomK1Fy0GM8Lc35m4wycbYAkjtJwcO0Gw5Pg5IWMpY9Ht8QkSSdPnzp08GBXZWqklFa1zR3VoEFdTjl8TtClRyPrroHr1+I4GIvdmK7s8vEAyKki3VYMqZYgrveCuPdC05iFgzjowa/39lUcST04U8w0yfadx3ylmnCkyq40RU8NgaIp01VXEYLyPdlnnORoWveRM4PJmMRkFhyupYprzUWldkPoA3YO1jPLx6NpSakHdvr5ec6JD/NUUeIYWRkbBNwCFvSIQGlUsximdc0f4ETsOU/29seTJBW7gI33U8X7zZD9GwzPIIiFsZTmK5Qez/VB0z6POWF27BVMRKH4yuNoXAtCcBbBxskCCTiMlZk6WX0aNnVofxqjGuMzQLf9VHEynIBaj2Sxy2YEsTD8fbWT55hMEuHjh8THkzw5EdIXuLFJKONEzh4NIfgsBhKCry5zlZ5O3YcSvc+xvcMrtpAVRxSaEM8mKzCdHMPZWzMqdyIt4AyfnR0zMzMd0x7fMf3OJ3ELSVUye9NkUq5q6MesOgyaIrxzsCJMoxjeB2sEtlvRMg5SBARPFsMUBk5hyB2tFgowZNrTuaZZn0dHV2qrVCv1b0k52OE5HRmo20XmryGlTCaMkeoSDzdCe9d4WCcJTIo85/Prr3DWKaWkGTaOJIQtFzu6GPKPOlLrnZbbWTGSTAxAnJZqY2KEUqEwpkhJizxUqeCOk51U1lRAS0pqUnWMQpCYmCigxeyN6NoJ/eOvvzJ/3xNgzCTMaR4XGeKOxolD60ut5tVgK2ifmKjf9Di0R0jzNkYPDQ2tyG5PVyiKFDRZNjn16oMJ17niAwcr048kVVfvPZL6+7QfOgeaiCNpuguYZUyV8fZ9To863fu01eT9fggs0iHM7adgviu98cmQLSDJsYUtOQJJoIY7i2LF7WRiUYrnd8zi6Y4Dx4/NnNvpA2og+55PTdU1sC8auLFW2627ad3yBUX+QRiHR+7zYeamAOPaW+026QkkGFsdW3hYRZMcJqc74b5S4TRY1M8PFqqPHxnroPvBPYHREyILg8JbaR6YWS92RBG27NsODP/30Z/u0lMgQ2A4hrFqCtIC28vI5vDnHOEhuDQZgugnAk6n7ElTkX3fvKDdL4gFYaF4aysR4xo7ch//GIvCHxjE6IDilQkUzeROa0t7TKUHEwgmEKiz84/oIo2qUXQRgxL1qp2tGzq3gC5aYJinBatZ+IC3DigQLeoKRW8dWepTpbIDHts9mX5gMc/tuR1dkUmBnNaT7IsZQc8vsVURr7a75XFvYJhf2YPBGtoDwsowVPzOCtJ/DkYbjrGpACGsngMd5zoO/J4SrVTGSMKc8wj8IgZr41oyk9jS5TlvM+Oq66+BKdEOZy6ioJb4B0V2H6pddVMBNGkRhO+RI3urixTDVaqKrHBTtrREFsmwTVlqZlwb7b8U5l0kZRBRnKu4v5EbiEmpxr/NaBQkgmS3/tA4KuLjFzEo9KBHbNjKUrTmFPGmAeU1oHBIClbGySlEkOBvR9rKYi/MlhfCOOrkqJoO0ykrhv4p5NPLkqsfBso1MB/sm4CmdIyB9RurmrxQavlRNTUQxOLz0VyNBXNJhLAw8KCnLvv2mf0c5fUndjiPhJVjmHqFMm0XcsoJzkgBwyxWANLnxCO2GbYpS1b2NZbTcTy8IWc4D0G+z+YUQqm/lFCCNm4ibfWvKQ6vqjPQ0Hd2pI3c3Oa1pjuLsEsh6MHr19pi2KbcQFLsNq0PIij0syrBVgSpa02fKMEugeBRXlpCxu7iKMufekyPFYxkZ5k0qdr2NwiFEsRauRbyxGJul5IUGIs+e9djP3NdM1H2Gm1LbwjHFyL065HH7Rd3w/QGb//rXkYfcM2KKlN0bRVwx9m45fp0gh/Ee371EhNikRTag2RS/kDa1kQ2kidV7YMYxSx4hp6/8YmXnl1ustRiKVfdavrt+oiRMvI2YAM3rMYN3ZyLinLXb7xn5VPgCkBY1Fg8a6lvTPcOZK0tPYEf3wc3GuE243svrd70mnnQ+58BUAQepKX1ZpF9Z2zv5A129g5Llix3MP15ETrYKmcB3AY92XqlKnzvB6rp+g4OoMP/xojIGYJqAl9Z7RF3Xm1n9Z8Z/xujKjKcbOz7WhTeSy0Z8H9lcLxLSIZbOTfiDbDV/y7QXkhWhJsYY6pAWDb2/z/k1ud8pYd3kcPF38ICo9+/Egx7oESk96Ax8qhRFn391QhyJSiPRwi7Q9wyjTTLzPKKUDgrylqFLddeCYbFYr40Hc10h/pKydWgi2/AlWNYdLnSDHJJPvyfGX8BoxjtwOPqk94AAAAASUVORK5CYII="

/***/ }),
/* 533 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMOUlEQVR4Xu2de1BU1x3H78preRQEAvIy8oiCk6KitXbU+mhNNBOtiSl0pn844iN2JglCm8mo9ZGSFEyb1mKTGTNGm5IZ6oT4SDWJxnQKW9ZkcSogo4KK0LjIQ2HZDSAosp3jsJu7lwt7zrnPPfz4yxl/5/X7fu45957z+501cBL+Amc8/ZzBj9tr4AxzJFQDRWk94ORaOM6QO9BwpoK2CgNtQVTOmLGymTNwyVLqgLLSPODknD2DV7+IpK1FGgAzVzppG4Zy8nlg4OpZah2pCz6aAQAA+VSUUJNuAOg0HZAwDCiK64HYJXkepgAArucYsQMAGBGSdhgAAK3nGCkHADAiJO0wAABazzFSDgBgREjaYQAAtJ5jpBwAwIiQtMMAAGg9x0g5AIARIWmHAQDQeo6RcgAAI0LSDgMAoPUcI+UAAEaEpB0GAEDrOUbKAQCMCEk7DACA1nMKl7tQ33ztiWmxcZHhoeFKNgUAKOldyrrn5ey13Gq3LeA4zl5atKVl1eLM2ZRVeS0GAHh1kboGZ6rq69bvPOQWPCo8tK7hdDEAoK4M2rUGAIz4fqIGhQoBQO5Q0hewBGj3sIu2LAbAk2mJVcdLXp6lxAshAOADALi66O83yRoeGnI3Piai90ezUodfzF6WlpIUkyhlCACAFO8pUFZsBhivmajwsNrPDxbE0IIAACggopQqSQEYactuKdvdSwMBMwA0W++0Ls99q7d/8H66FAHULBsSFNhYc+x38fy1XQQAh7//pG+HhobHnerRTNBwuog4s5oZAJ7bdsB0vubGEjUFlKOtNctmVx4u3LTUVddYn4HN1k5rY0vH3cs3rL1XmtqGPjdfmi6EwlK2u5V0FgAA5FBRQh24AIg18fhTv7k2MPhghuv/Nq77sWlffjbRQ8AMAOgJWZr7Vj/fIRJ0UaUo2uX7qmxXcmR4aIS3GUCsQ5v2HK48VVHnnj2EMOEMghkAcAbrCzYkO4FCAJLioqovfvT6D0nGCQCQeEsFWxIALtQ3Nz770n73S++EXgJU0EaVJkgAQB0q/afZUvTeKeOiuTNsh9/YuIy0kzADkHpMYXtSAKR2hxkAbI4+x7pt71xqu2MPk+oUtcpnpMXbT5a84n6JQ+3iAFD6yfnqokOnA/n9RNvDNOcFzAAgfCFSS0Sp7QjXbRwAYpfk2TmOc385wGcgx3HLNxSbL99sWyRVELXL0+wDCJ9aV5+fTI03//uDHUQ+YGYGGHkjjuc4TtEYOjkB8fef1Gou3elMSYpNItkHGGPX0/HpuwVt8zNTiLbCmQGA58BaOUVSsq5VizNH7d3jLAGoT66tYVf/xOrC6TtzAOAMWs82uADINQYAQC5PylQPADDiSCXj4GTSiroadHRd8MejN6ovNaUNPRx2r/9T4yItU+MfGzhfc939aQhRwQRu3rG/3HTiXzWavwSGhgQM/j7v50axeH7Ux8Mn/oN9YicGAEoaee3PH3Xy9zye/2mWo7iA7CQQuZaZJWD7X8pNR47jO5aAK2pT4fk8TcyCGAAJy/Ot/JkD9gE4jpub83q1tb2b6CSMWlnMgqVFW+pcswBlqBcnBgDsA4gIcKaqvnb9zkPEIVGYWhKbGYMCrtUdK5ziOusXAup0Oh0hod+7GB4RGW8MDk6/19dbe/dOh2F4+KFHFpAYABmrd9R1O/pGZQuVFm2pJf0cZGYJcH0bv1duarrT7dD0tweWzk8PXrNsTgY/0EPo6IjJ0ebJUdGjdu2s/7tZ/fDhkHsmG+slEAFffvZCDxp3TFS4YWv2kjT+hhIusUwBgDtote3Epv9pqe5ILo/u9HR3me09XW4w4CtAbbUUaA/t2i345Zvuzz3URNK0NIefn9+oL5b221bT4EC/+ysBAFBAEC2qTPhJfis/infSJL/ahKnJqXwI+vv66jrbrckGg8F90kcT5UMyPlgCSLwlwVbsuNrpdNr9AwIa/P0DBgYHB+I4p3PUQY6lbJeVZm3H7SoAgOspiXY2R5999gt7OkiilmmifEm7CQCQekyCPTqyXrutJMxblg9qguZsn6ZrAACN1ySUQTPB89v+Wn+l6fZisWpQjMC+/Gzr+p8tQlfEKP4HACjuYvEGEAinKmobKi803nNZ/CpneTxpQIfU7gMAUj3o4+UnJADoNG1tXkkIOlBZmDW9UhiZ6+OaEnV/QgIg3Jf/9N2Ca/MzU8S35ojc6XvGExIA4WEK/9TO9ySU1mMAgOM4pXfbpEmkbGkAgOM4dPmS+cPfGkgvV1BWGnVqBwB4fkZXthiDAu8tnjvdHhMZZli34gdxrL8bAABeHjQ0O+zLz7m9fu1CXUUbyTU/AACYnty+8Rnzrzc8Q5R2hVm1pmbMAICyg1ds/sPVW+22DFfiJJrSC19eZxc+vSIhVQ6clDKxz0WUqbvnneMRGt9OZp8aF9nw5fuvzSS9TZQZAMaJuLV3mg54ZNKKfQamJ0+JRrdwucKszn19OUF4cid2QDNWpq4Wj/XCrCdMJ0vysEPOUR+ZAWC87GBhkgnuPoBIqLkHTGg/P331jlFp2lqIj9qkOUFkBoCxsoPXLJ1TIbw6BRcAsSdECNOm3UcqTlXWEl/NIjck6BTxk5JtvaSHScwA4HIoAqHL3vvohG3BrNQUfmSuy0YKAGLvAWgmsFy62Sy3qLj1RUeEBZMK76qbOQBwnEYCgODcwNF4utgpBhVOu3q0AQDQTVu8DB6hSGhG2frG33vu2r6NfPOVdTa1AjXUggUA8AKAWkJo1Q5TAGze87fKqovX3W/lKEv34O4NkcLtXJwlQFiXVgLhtou2r98vzPW4cQynLDMAjJMdjLUPwE/l1mOmMY6YNKeazAAg5z6Ar145N6H3AcbKDhZzirclwBdvHEMzBGQHj/yoAn+6FEuX9gYAKi+8hQtnCtbSJj15ymM0GUTMLAEkzscBgKQ+X7YFAOAz0IPfgatnDbRAUxdEDRpnrvS41EHqLWEoJ/9geUVPQ1NbRLejd47rN/fQZUr/+MwyhX98C0Gh30nu8wDw4gKwU6vEAEDn/Kb/fpe1Q/tUqFVuybz0YJqoJaaWACR+1gt720iDM4QAIPFf/dNRnwsBo4laYgqAeTl7LbfabdhPvuvpFAIA+wB085am7wAo3evZl/Z7ZPcYOENrRGRUc2Bg0KMfkbDbbfbBgXujtktZmQHefvUXFtLDKmZmAOFTi8RPnJYa5ufn5xGxY7d1VfXYujxSs8XeAc59deXG0c++ttI9C+qXyl45fzLpFXGol8wAIMz3Cw4OrYyNTxQ9HPnm5vVWJ+d0/xQrfAUw8BUgPAsIMoaY4hKSRAMkW5oa7fyLmAAABgAQnuChC5jiEh/vMBqDPd4Lbltbqh7cv++xBDSeLrazFOVDsgAxswSI3cWHHBEQGFgVGBDwEP27r79/1E1cNL+2SeJgvdsyAwByNMXnm8NStstBc4iid2Fx+8cUAGjQBL8e5igt2nKT5s0Z17m+YMccAMjp2/d/XHnkhClrrHQvdP3qh8UvGmlDqX1BWNw+MgkAGjz/Fq6axm+Cw0OND9KSYoe0uIkLVwwt7JgFQAtn+mKbAIBOVfvy/JWmzXuPDJEebEkdjs8fB0t1gF7Kp6/ZWWGz96qecwgA6IQA4dSsRrfQ5tlgwxeTadvS9DSQttN6LacFAJxzOHeg4dwHtD4BAGg9J1JOCMDWp6JNK74fJvk3EQs/bu+rvzU4+qobieKjIQAACgJQnp9ct3pe+KhfCiNpsvhkh7nwWIci4gMAJEpg2ApnAKkAKC0+AIAhKomJnACoIT4AQKIuhq1cAKglPgCAISqJiRwAqCk+AECiLoatVADUFh8AwBCVxEQKAFqIDwCQqIthSwuAVuIDABiikpjQAKCl+AAAiboYtqQAaC0+AIAhKokJCQB6EB8AIFEXwxYXAL2IDwBgiEpiggOAnsQHAEjUxbD1BoDexAcAMEQlMRkPAD2KDwCQqIthOxYAehUfAMAQlcREDID6W/d6lTzPJ+mfmC0EhEj1IK+8EIDMqUFmpSJ55Oo2ACCXJ0UubhCtWoYwLhm7DCFhcjrTa1CozsSHdwA51fc2A+hQfNkBkNmf7FSnU/EBADUQ07H4kgEIyni6h39vjxr+9Kk2dC6+ZACMGauWcQYnykqZ5lPCKNxZlK5l4Jz5UjJ2FO6iu/r/A1UudgitMdyAAAAAAElFTkSuQmCC"

/***/ }),
/* 534 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC8VBMVEUAAADGxsbNzc3h4eHNzc3Nzc3Nzc3Nzc3Nzc3Ozs7Nzc3Nzc3T09PV1dXNzc3Nzc3Nzc3Nzc3Nzc3Q0NDNzc3Nzc3Nzc3Ozs7S0tLNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7Nzc3Nzc3Nzc3Nzc3MzMzOzs7Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7MzMzNzc3Ozs7Nzc3Nzc1lcYLjVUQAAADLy8tkcIHPz89nc4RmcoPR0dHOzs7U1NRodIXT09NodYbW1tbhVERpdohhboBrdoZbaXxXZnrrV0bZ2dldan1kb39gaXlTY3hRYXbY2NhfbH9ZZ3vnVkTlVUToV0VeZHP5+Prd3uJWZXpVZHj7+vxXYW9SWWaOjo729vjKyspibHxOVmNJUFxHTVlVVFTh4ubIx8hZYnDz8vXn6Ovc3Ny+vr6co62Pl6Nzfo5teYmAf4BeZ3ZcZXQ+RVDr7O/S1Nm4u8O9vLyqqaqPj4+GhYZNX3RsbG0AJy3////9/P7e3t7Bxcu8wMeorbd7hJJ3dndWXmxCR1IpLjcmIyMBHCLO0NbHytCwtL2rsLmWnahga3tMU1/uWUY0O0XNTT8xNj/DSz4CDhcAAAbu7vHX2d7b29vFxcWlqrSip7GlpKWTmqWioaKXlpd/iZaTk5RbZHJDTFQ4P0rGSz0fKzeGMypqJR3h4eHDwsO1ucK2tra2tbaysrOvrq+Zn6pzcnNUXGlhYF9bWlk7Qk0rND68SDy3RjqqQDYuKyxCFQ2zt7+7ubqsq6yLk5+enp6IkJyKiotpaGhjYmNQVldOTExHRkXYUkPRUEK0Rzs9OzuYPDMiKS4LFygbHyd2KSAhHR1VAADg4ODLztR3gpGsRDmdPDMRIih+MCdbHxYcFxVPHBQ3FBEAABEABg/j5OjLysucnJyFjZk3TlCuQzilPzU2NDR4LiYVEBARCQZ2EwBBAAChoaGgoKGgn6A+VGwrOEEsAgC2iD4ZAAAAN3RSTlMAAvsE/fjw9Uce3BcKBtKshW4sJOtzYhMP4de9WVFNzsiUVTkztJ+Pd2pcQOfFp2e4f3vCwcC+0J0UfAAADRtJREFUaN69mndcU1cUx8lLGKIgyLAi4t6rO8/L2+8lZEEWBCkJQ0SGgLKXAxVR3LvWXUfV1rqr1rqqttZqWzus3Xvvvf7qfUla80aCSD89KCKE983vnHvPvfecG3RLplAoldLvKpUKRdB/ZArPo5QxYYPio+Oihg+MGhEdnxjWq8fNH3bRPM/o3u/ucWPDg6n0Q4fmT5s2/+1DaRTSZ0DPqMQYz2u6hlDCv91H3RkbTKWlczSNBAcj0OBnlZrSbuOQkLEjuymhSkWXZPRIGhbCcRSuRuBzBaZCEJqmOCa4Z2JviOmCo0b1ZdJpdUCjtWn9o3vcntN4RyUOwNMRJDCDl6TlInmMsvOMiH79cUYNER0bomKo8PF3dFIMfPGQO7WUWhCGgGrU+LTIMPiLnYmGIi5EKxTRsRxGPVwgpiMZve5lcMjoJIXWJgjEBGbEhTLQAZ02WsXRwyNuJf7QVcO0uDyiY4w6rS90WceMHkO1EHG7hqT37yamSBndB/iPeLKP+aVow4cIKVJGtwTI8EfAOcZrHKX2x0GYkNECioTROzIdkQOoaZzi6KM7906aNWnSpFl7dx5TMxROq5PlKVCLf0bEvVpEDkHRydNnzSn5Hvxr50uuzH5iMv+DZBlKeDd/YwzCe0KG1E2MesbelwD4bP++4rw8K8EW5uUVnd6/CYBXIYdRy1C0A+AY88MYqFVJGRT+bC0A14tPrtVpNARBoihJEBqNzrJ43RkAntw5lZOj3Kl0U6SQkVpagqCpJ+YA0PDoWo2GxDAM9Rr8kmR1FmsRAKdm4rjEZ0j6cB4iZcSE4LTYU9TDs38CSwpRloQAoWGo0ejC2HVQzQxc6jM8jKdIIH0ZlSTgx18CG+o0JHyixAjjmnd2EC2s5TQ4/xyOiygqLlwaFmVQNCdxFT4LgMUowRPkILsq5pUe0TnYsuug9ksJRTsQQkSMXiGUSsjAJy/iZQhUCCk1J7ZmV+wwYpYl4Op0MYWmkwTjGCKVQ9MRkY6pc0AxBmX4NQNqMu0qzd76bo5hCigRUxAuoXeQQgAJ04p1TL0KiuCA9W96Ww5KmB2ry7fssOvyZShpI0QOG0uJdEyeA6YQARCsaZfziC4HNdj3OHNXmXSLJRQaH9NbIKSfeFzhi6AONIAR+nZnwZaLpLnGiLXNW2CCWq6Ko8/dFaT0gdzDqAQQOK6KCRQLRCFR26Wm3NJLdgNmWsBTpoBaXDjAmPB/owJpg8Sp5BjYgJFoQMNyMsy2NRUFF00kASmr7IYl4DmhFER7d5DyZmJMQwTenPoiqCMC68iobq4yYTk1K+e16VHC1Ja7w2W5vmwGLoREdvdKUcA5gguFPA/yISMgxNxemtvUbra4VrWu0JOofmt5u74MzKFFUsKgFA9k/DREEJCjH29AOzJSX9PcWLAwg7Cvbm0zGcx7yp1GogHs5JIFo3hgkNciYNYSCFkEHmX9CMHc5qZgLdVNrSv1qH3VvIv2Gvv23IUmCzg1VaAFj4Wh96RfgcRk7tib6+UZML8TLKthPTmZNOhtzbkr9IRpZfYuh8HkbNTBnPwII3gal+SF3M0Jk85sYCVlGYTOUv8AtPpCjftdEGTLxdyVZkxTWqHDzJeym+0seOphwQjjenoh/TmBs2aAfaisaerXrf8cQNt8pqjMnXFIoqW5daHZdSL7SA5h2vqFBs0HT1C+EGoMzPj8TitWkFLwR0CZnLcIS/FycOHDbx9/6NyBT8Cm01bCHRlbU0G7xd60pRpzrGndbrKCWuHaFRrmhoSF4r7OSi65YSWkEKJ+KTi4MSUlMzU1KyXl5R/ABycJd3apbtxqNl8qWGAjNaUrjJb1y6bSAkp0kBJ+xAlWXfxh8JgcY/Fy8PSErIkTJ0xImTBxYmbWuU89CdTQ0pxbabZtrXAYjLsqM2BymekbFCRtWFAE/BjmO92TobemaDCpjuUXzqZO8LHUhw6Ck+53w5a22bH2SjjvjQ6UzQO1lAByPx95xb0QIpwkUiWWpeBsaoovJCX1oQvL6wg+wbRXW8gMOwnfCi/t9acgxHet58/6MeGcygfCPPU6Kxm7mmLw9IMeRkpmJnSYm3IW7ONHCGHOgJ9Y70t1Z1467Dsf6dDREDIkFlcJcuMZHSZikNa5H3kFZKVeezkr1YN78MNNeTyFJH3fT8ObMynBpB8EIaN9t1vJ1PFlDRoxBEbzXJb7wZkbP3zrrTdegfHn//MyKJa8ls0HuxnfoGhHQUiSIDlyv4EiadwbQEqm+7Hvgc8ee2EueM1NnJjyyf61pHiIlIFZAsj88RAyiKJ9Ib+DxYQ4m1jnvpEykffVRnD9OM48cx685xkF74MHxPOWRMEkX0jwoTgIiU9HfOO+G+RJIHWfv+YJwoHNz2qTk7kZcw96hvHjUgjKgueFSqIgZOT8YF/IJFAmhrAPgKcz3VH/+RsqmZf7wi8PZXkhGilkttYXMm34/wEZyLsrTeCuvR27i+mUu6bx7kpkVL6Bfw5CAgR++bMw8Ms6E/j5d0NIP1wwhH+VH8LXPDPjFbC5k0M4+FA0hIRBb3U8Gb/9ZzIeEEzGIrnJ+JXQXePl0spS37RCEt604s2OmQ9eu5aa6k0xP/BpRZzmGpYdF6aVfhDSLYGRT5AYC7/QO0hPgvzuZoJM8SbIc+C0KF9LEySNxw6GEMV96dJUzydVwuYgseqvM9xe3wDOPihO9Z9+INlwSFM9k9CN3wj33CZZtFCjiyQcJ6r0ju3ll838omGVWbQ2L5YKkSxa2rERPCSKUYmWX41jzY4Mwx/ORrOlunxFi4GPTdk/yy80fvl95dPN+ZAuhkiW3209IQKeTYKFG4lTm9bamrP3ZBgrCxbmOI7krslhvRuJj87B9T0rFa5aGw+CD2AilRhZuOG8cCNBjXBDesdSgp3wTPCosSp7lYl1lVagFsMXFTV60rMlmgv+OvD+xse/O3ABLG+wyjAwth7MFm2JYMnIfQISbu6mL1vP2poaYTFgV/Yqu74qe4ULdQdYY52ybxOAtunPdfUa+eNLkWhzx/VRejb1d0m2qYWOyoLVLtb4TsHXZuP23JUuC+tehnVY3QPQ6gp18icL0gKuirapQ73b1MGi0wnccBtszi01GNy4OTWk6UjuCp3JQEIKhhIsNEJaBPHORMmGm4n3Qnr0p2jR0aFef7lggavGVZnbBDe527NLq1r0pPDogMqFHZyaLNiq0KH8UctNiRMdgmYsW4rmLJh3wmawLcxtc5HGqorsle/CWRnYMOI0mCk8BGmHQYQHMiRUeC7l9gI4B5xb2s0Ge/O8d4iMjJq2gvIqo5ginYhPik6m6f14Id6ah/hgWgKs5svlpaie1+Lck6N37Gne04EU0nrjvOhgyvx7MIWTJZEWHbGP/rgUda3JbuIplVvKV+sd+hwYlMAQmSP2zWoBhA1gVELKbrDE0LK6tQk1G3LeXdHq3JFhIQI7SyMtFnB9YCH6JiQeFxfeakGRwb4621mdUwMTTEVBY5WDDcjIB1cmi8sewwXFKGWCtIDDU06UN66xk6zDXOmstLOBGSWHRQw8BAoRVHAYSUmNp+RcLm1doHOhhLElYNg1/kpRopJwOiKlLEHNZFt240K9SW/wz8BIcp0Mg4kUVSGVQUNCcImWWrDUStqqnAUVq6uNhD8EqlnbAK4clpQHuUF8RISUKK1KUujc/SPIJzNs253Z5av8hAQjyMU3wGxxzOHwhSd4haROP1amZHv0RbCh3mBzVK1caGPlVJCsdR/4fidOi3VQvsMX2s1aES2poU99/mOwvpAwukwoJi2CsGjhEgAWPUxJi8+0uz4kpYzi5MroRxe9CZbUFcI6/c38y39FajSFjxYDcIUvo0sbQlG8DtmGQLpM0wGnjtUCcOOx/DqdTsMSBEkS7obA2pPFS2EJfSZOQYSE0Vfpr+2gvFO2tcGpZzxSAsDm/esfyy/LsxbmlZ0s3rf/M9ja2PvMZEaugaKNFJSEhZQ7+vtp0uDJh3c/eerVj4HXfnq1ZM6k6dCZMOBSBtMnJkgZoKXVR+u/3YRPn/kVbDfBP7t3PkNzfttNVOjgwE2tXn0CNM4giPEYlOa3ccaFJnXUnouJ7GILkBkz+hYajfekdamZGd7rllqmPRn6ttuy6QO8E73jBjPCIbfDQCh8YI9bbmOPDteqO41RIdqQxFu+xKCAgRmHMwjdSRlM316CxNuxmKQB6Xhnri/QaeHxsNjY2Rsr0WMoRu2V0/FFjNCo7vDXOn/3pndcf/U2HFF1hFCnUQlRMbd1D4f3rjJxXOx8LjCDmhY8dOQdt3+jiH9rvUb2pTmOw2kEUUHXub3H/6tCEDVMMxQVOWJwRJduEyn4342IGT+uTyielsbg/LODg3kazqRto0LHDI2DN7A8iK5f7lIMHjGsb2SsmtKmvf32Ni2lDkm4b9xdYf/RFS/fp3QfnDRoVHx0dPyoQUmDu3l+1CWC1HERitu+Dfc3oyfNm/h5TTsAAAAASUVORK5CYII="

/***/ }),
/* 535 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AutoPlayScoreList_vue__ = __webpack_require__(436);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b06418d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AutoPlayScoreList_vue__ = __webpack_require__(544);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(552)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AutoPlayScoreList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b06418d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AutoPlayScoreList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/AutoPlayScoreList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b06418d", Component.options)
  } else {
    hotAPI.reload("data-v-2b06418d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 536 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CommodityCard_vue__ = __webpack_require__(437);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5513755d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommodityCard_vue__ = __webpack_require__(546);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(554)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CommodityCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5513755d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommodityCard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CommodityCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5513755d", Component.options)
  } else {
    hotAPI.reload("data-v-5513755d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 537 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CommodityList_vue__ = __webpack_require__(438);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b473982a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommodityList_vue__ = __webpack_require__(548);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(556)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CommodityList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b473982a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommodityList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/CommodityList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b473982a", Component.options)
  } else {
    hotAPI.reload("data-v-b473982a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ManualPlayScoreList_vue__ = __webpack_require__(439);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d980e56_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ManualPlayScoreList_vue__ = __webpack_require__(547);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(555)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ManualPlayScoreList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d980e56_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ManualPlayScoreList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/ManualPlayScoreList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d980e56", Component.options)
  } else {
    hotAPI.reload("data-v-5d980e56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 539 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Piano_vue__ = __webpack_require__(440);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35479cc9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Piano_vue__ = __webpack_require__(545);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(553)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Piano_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35479cc9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Piano_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Piano.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35479cc9", Component.options)
  } else {
    hotAPI.reload("data-v-35479cc9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 540 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RandomLyric_vue__ = __webpack_require__(441);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_002b815c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RandomLyric_vue__ = __webpack_require__(541);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(549)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RandomLyric_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_002b815c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RandomLyric_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/RandomLyric.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-002b815c", Component.options)
  } else {
    hotAPI.reload("data-v-002b815c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 541 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "LyricComponent", staticClass: "component-random-lyric" },
    [
      _c(
        "div",
        {
          staticClass: "lyric",
          attrs: { id: "randomLyric" },
          on: { click: _vm.searchLyric }
        },
        [_vm._v(_vm._s(_vm.randomLyric))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-002b815c", esExports)
  }
}

/***/ }),
/* 542 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-pc" }, [
    _c("div", { staticClass: "app-bg", style: _vm.appBgStyle }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "app-content" },
      [
        _c("PageHeader"),
        _vm._v(" "),
        _c("RandomLyric"),
        _vm._v(" "),
        _c("Piano"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "score-section responsive-section-a" },
          [_c("ManualPlayScoreList"), _vm._v(" "), _c("AutoPlayScoreList")],
          1
        ),
        _vm._v(" "),
        _c("h2", { staticClass: "section-title responsive-section-a" }, [
          _vm._v("探索实体乐器")
        ]),
        _vm._v(" "),
        _c("CommodityList"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "right-drawer", class: { show: _vm.rightDrawerShow } },
          [
            _c(
              "div",
              { staticClass: "trigger", on: { click: _vm.toggleRightDrawer } },
              [_vm._v("歌曲列表")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "close", on: { click: _vm.hideRightDrawer } },
              [_vm._v("X")]
            ),
            _vm._v(" "),
            _c("ManualPlayScoreList")
          ],
          1
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "blank-page-pc",
          staticStyle: { height: "200px" }
        }),
        _vm._v(" "),
        _c("PageFooter")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-057eb2d9", esExports)
  }
}

/***/ }),
/* 543 */,
/* 544 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "score-container component-auto-list" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.currentView == "LIST",
            expression: "currentView=='LIST'"
          }
        ],
        staticClass: "list-view"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "ol",
          { staticClass: "list score-list" },
          _vm._l(_vm.ScoreNum, function(item, index) {
            return _c(
              "li",
              { key: index, staticClass: "list-item score-item" },
              [
                _c("span", { staticClass: "num" }, [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        return _vm.clickScoreItem(item, "numscore")
                      }
                    }
                  },
                  [_vm._v("\n          " + _vm._s(item.name) + "\n        ")]
                ),
                _vm._v(" "),
                _c("i", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: item.playing,
                      expression: "item.playing"
                    }
                  ],
                  staticClass: "pause icon-pause",
                  on: {
                    click: function($event) {
                      return _vm.stopMusicPlayer(item)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "difficulty-degree" },
                  _vm._l(new Array(item.degree), function(star, sindex) {
                    return _c("i", {
                      key: sindex,
                      staticClass: "icon-heartbeat"
                    })
                  }),
                  0
                )
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "ol",
          { staticClass: "list score-list" },
          _vm._l(_vm.ScoreMidi, function(item, index) {
            return _c(
              "li",
              { key: index, staticClass: "list-item score-item" },
              [
                _c("span", { staticClass: "num" }, [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        return _vm.clickScoreItem(item, "midi")
                      }
                    }
                  },
                  [_vm._v("\n          " + _vm._s(item.name) + "\n        ")]
                ),
                _vm._v(" "),
                _c("i", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: item.playing,
                      expression: "item.playing"
                    }
                  ],
                  staticClass: "pause icon-pause",
                  on: {
                    click: function($event) {
                      return _vm.stopMusicPlayer(item)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "difficulty-degree" },
                  _vm._l(new Array(item.degree), function(star, sindex) {
                    return _c("i", {
                      key: sindex,
                      staticClass: "icon-heartbeat"
                    })
                  }),
                  0
                )
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c(
          "ol",
          { staticClass: "list score-list" },
          _vm._l(_vm.ScoreXml, function(item, index) {
            return _c(
              "li",
              { key: index, staticClass: "list-item score-item" },
              [
                _c("span", { staticClass: "num" }, [_vm._v(_vm._s(index + 1))]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        return _vm.clickScoreItem(item, "musicxml")
                      }
                    }
                  },
                  [_vm._v("\n          " + _vm._s(item.name) + "\n        ")]
                ),
                _vm._v(" "),
                _c("i", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: item.playing,
                      expression: "item.playing"
                    }
                  ],
                  staticClass: "pause icon-pause",
                  on: {
                    click: function($event) {
                      return _vm.stopMusicPlayer(item)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "difficulty-degree" },
                  _vm._l(new Array(item.degree), function(star, sindex) {
                    return _c("i", {
                      key: sindex,
                      staticClass: "icon-heartbeat"
                    })
                  }),
                  0
                )
              ]
            )
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.currentView == "PLAYER",
            expression: "currentView=='PLAYER'"
          }
        ],
        staticClass: "player-view"
      },
      [
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("h2", { staticClass: "music-name" }, [
          _vm._v(_vm._s(_vm.playingItem.name))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "difficulty-degree" },
          _vm._l(new Array(_vm.playingItem.degree), function(star, sindex) {
            return _c("i", { key: sindex, staticClass: "icon-heartbeat" })
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "control-bar" }, [
          _c(
            "a",
            {
              staticClass: "stop-btn",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.stopMusicPlayer()
                }
              }
            },
            [_vm._v("停止")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "component-title" }, [
      _c("img", {
        staticClass: "title-img",
        attrs: { src: __webpack_require__(534), alt: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "title" }, [_vm._v("演奏示例")]),
      _vm._v(" "),
      _c("span", { staticClass: "degree" }, [_vm._v("热度")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "component-title" }, [
      _c("img", {
        staticClass: "title-img",
        attrs: { src: __webpack_require__(533), alt: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "title" }, [_vm._v("Midi实验室")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "component-title" }, [
      _c("img", {
        staticClass: "title-img",
        attrs: { src: __webpack_require__(532), alt: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "title" }, [
        _vm._v("MusicXML实验室"),
        _c("span", { staticStyle: { "font-size": "12px" } }, [_vm._v(" beta")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "top-bar" }, [
      _c("h2", [_vm._v("AutoPiano正在播放...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cd-box" }, [
      _c("div", { staticClass: "cd-reader-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "cd-reader-2" }),
      _vm._v(" "),
      _c("div", { staticClass: "cd" }, [
        _c("div", { staticClass: "cd-inner" }, [_vm._v("AutoPiano")])
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
    require("vue-hot-reload-api")      .rerender("data-v-2b06418d", esExports)
  }
}

/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "PianoComponent", staticClass: "component-autopiano" },
    [
      _c("div", { staticClass: "piano-scroll-wrap" }, [
        _c(
          "div",
          {
            staticClass: "piano-wrap responsive-section-a",
            class: { visible: _vm.pianoShow }
          },
          [
            _c("div", { staticClass: "piano-band" }, [
              _c("img", {
                staticClass: "piano-band-img",
                attrs: { src: _vm.bandImg, alt: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "piano-tip" }, [
                _vm._v("⇧ 代表 shift 键")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "piano-key-wrap" },
              [
                _vm._l(_vm.Notes, function(note) {
                  return note.type == "white"
                    ? _c(
                        "div",
                        {
                          key: note.keyCode,
                          staticClass: "piano-key wkey",
                          attrs: {
                            "data-keyCode": note.keyCode,
                            "data-name": note.name
                          },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.clickPianoKey($event, note.keyCode)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "keytip" }, [
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showKeyName,
                                    expression: "showKeyName"
                                  }
                                ],
                                staticClass: "keyname"
                              },
                              [_vm._v(_vm._s(note.key))]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showNoteName,
                                    expression: "showNoteName"
                                  }
                                ],
                                staticClass: "notename"
                              },
                              [_vm._v(_vm._s(note.name))]
                            )
                          ])
                        ]
                      )
                    : _vm._e()
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bkey-wrap bkey-wrap1" },
                  _vm._l(_vm.Notes, function(note) {
                    return note.type == "black" &&
                      note.id >= 36 &&
                      note.id <= 40
                      ? _c(
                          "div",
                          {
                            key: note.keyCode,
                            staticClass: "piano-key bkey",
                            attrs: {
                              "data-keyCode": note.keyCode,
                              "data-name": note.name
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.clickPianoKey($event, note.keyCode)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "keytip" }, [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showKeyName,
                                    expression: "showKeyName"
                                  }
                                ],
                                staticClass: "keyname",
                                domProps: { innerHTML: _vm._s(note.key) }
                              })
                            ])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bkey-wrap bkey-wrap2" },
                  _vm._l(_vm.Notes, function(note) {
                    return note.type == "black" &&
                      note.id >= 41 &&
                      note.id <= 45
                      ? _c(
                          "div",
                          {
                            key: note.keyCode,
                            staticClass: "piano-key bkey",
                            attrs: {
                              "data-keyCode": note.keyCode,
                              "data-name": note.name
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.clickPianoKey($event, note.keyCode)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "keytip" }, [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showKeyName,
                                    expression: "showKeyName"
                                  }
                                ],
                                staticClass: "keyname",
                                domProps: { innerHTML: _vm._s(note.key) }
                              })
                            ])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bkey-wrap bkey-wrap3" },
                  _vm._l(_vm.Notes, function(note) {
                    return note.type == "black" &&
                      note.id >= 46 &&
                      note.id <= 50
                      ? _c(
                          "div",
                          {
                            key: note.keyCode,
                            staticClass: "piano-key bkey",
                            attrs: {
                              "data-keyCode": note.keyCode,
                              "data-name": note.name
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.clickPianoKey($event, note.keyCode)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "keytip" }, [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showKeyName,
                                    expression: "showKeyName"
                                  }
                                ],
                                staticClass: "keyname",
                                domProps: { innerHTML: _vm._s(note.key) }
                              })
                            ])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bkey-wrap bkey-wrap4" },
                  _vm._l(_vm.Notes, function(note) {
                    return note.type == "black" &&
                      note.id >= 51 &&
                      note.id <= 55
                      ? _c(
                          "div",
                          {
                            key: note.keyCode,
                            staticClass: "piano-key bkey",
                            attrs: {
                              "data-keyCode": note.keyCode,
                              "data-name": note.name
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.clickPianoKey($event, note.keyCode)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "keytip" }, [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showKeyName,
                                    expression: "showKeyName"
                                  }
                                ],
                                staticClass: "keyname",
                                domProps: { innerHTML: _vm._s(note.key) }
                              })
                            ])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bkey-wrap bkey-wrap5" },
                  _vm._l(_vm.Notes, function(note) {
                    return note.type == "black" &&
                      note.id >= 56 &&
                      note.id <= 60
                      ? _c(
                          "div",
                          {
                            key: note.keyCode,
                            staticClass: "piano-key bkey",
                            attrs: {
                              "data-keyCode": note.keyCode,
                              "data-name": note.name
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.clickPianoKey($event, note.keyCode)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "keytip" }, [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.showKeyName,
                                    expression: "showKeyName"
                                  }
                                ],
                                staticClass: "keyname",
                                domProps: { innerHTML: _vm._s(note.key) }
                              })
                            ])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                )
              ],
              2
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "piano-options responsive-section-a" }, [
        _c("div", { staticClass: "option-item-wrap" }, [
          _c("div", { staticClass: "option-item" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("\n          显示按键提示\n          "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.showKeyName,
                    expression: "showKeyName"
                  }
                ],
                attrs: { type: "checkbox", id: "keyname" },
                domProps: {
                  checked: Array.isArray(_vm.showKeyName)
                    ? _vm._i(_vm.showKeyName, null) > -1
                    : _vm.showKeyName
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.showKeyName,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.showKeyName = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.showKeyName = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.showKeyName = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("i")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "option-item" }, [
            _c("label", { staticClass: "label" }, [
              _vm._v("\n          显示音名\n          "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.showNoteName,
                    expression: "showNoteName"
                  }
                ],
                attrs: { type: "checkbox", id: "notename" },
                domProps: {
                  checked: Array.isArray(_vm.showNoteName)
                    ? _vm._i(_vm.showNoteName, null) > -1
                    : _vm.showNoteName
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.showNoteName,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.showNoteName = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.showNoteName = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.showNoteName = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("i")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "canvas",
        { ref: "audioEffectCanvas", attrs: { id: "audioEffectCanvas" } },
        [
          _vm._v("您的浏览器不支持"),
          _c("pre", [_vm._v("Canvas")]),
          _vm._v("。请升级到最新版的chrome、firefox、edge等浏览器。")
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35479cc9", esExports)
  }
}

/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "component-commodity-card" }, [
    _c("div", { staticClass: "pic-wrap" }, [
      _c("img", {
        staticClass: "pic",
        attrs: {
          src: "/static/goodsImgs/" + _vm.product.pic,
          alt: _vm.product.name
        }
      })
    ]),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "card-section commodity-name",
        attrs: { href: _vm.product.link, target: "_blank" }
      },
      [_vm._v(_vm._s(_vm.product.name))]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card-section clearfix" }, [
      _c("div", { staticClass: "price" }, [
        _c("span", { staticClass: "em" }, [_vm._v(_vm._s(_vm.product.price))]),
        _vm._v(" "),
        _c("span", { staticClass: "price-info" }, [_vm._v("(仅供参考)")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sale-count" }, [
        _vm._v("月销 "),
        _c("span", { staticClass: "em" }, [
          _vm._v(_vm._s(_vm.product.salePerMonth))
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-section seller-name" }, [
      _vm._v(_vm._s(_vm.product.seller))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-section btn-wrap" }, [
      _c(
        "a",
        {
          staticClass: "link-btn",
          attrs: { href: _vm.product.link, target: "_blank" }
        },
        [_vm._v("去京东购买")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5513755d", esExports)
  }
}

/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "score-container component-manual-list" }, [
    _c("div", { staticClass: "list-view" }, [
      _c("p", { staticClass: "component-title" }, [
        _c("span", { staticClass: "title" }, [
          _vm._v(_vm._s(_vm.sectionTitle))
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.listShow,
                expression: "listShow"
              }
            ],
            staticClass: "degree"
          },
          [_vm._v("困难度")]
        )
      ]),
      _vm._v(" "),
      _c(
        "ol",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.listShow,
              expression: "listShow"
            }
          ],
          staticClass: "list score-list"
        },
        _vm._l(_vm.scores, function(item, index) {
          return _c("li", { key: index, staticClass: "list-item score-item" }, [
            _c("span", { staticClass: "num" }, [_vm._v(_vm._s(index + 1))]),
            _vm._v(" "),
            _c(
              "a",
              {
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    return _vm.clickScoreItem(item)
                  }
                }
              },
              [_vm._v(_vm._s(item.name))]
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "difficulty-degree" },
              _vm._l(new Array(item.degree), function(star, sindex) {
                return _c("i", { key: sindex, staticClass: "icon-star" })
              }),
              0
            )
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.listShow,
              expression: "!listShow"
            }
          ],
          staticClass: "content-wrap"
        },
        [
          _c("div", { staticClass: "section" }, [
            _c(
              "a",
              {
                staticClass: "return-btn",
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    return _vm.toggleListShow()
                  }
                }
              },
              [_vm._v("<< 返回列表")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showItem.author,
                    expression: "showItem.author"
                  }
                ],
                staticClass: "author-info"
              },
              [
                _c(
                  "a",
                  {
                    attrs: {
                      target: "_blank",
                      href: _vm.showItem.authorLink || "javascript:;"
                    }
                  },
                  [_vm._v(" " + _vm._s(_vm.showItem.author))]
                ),
                _vm._v("提供")
              ]
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "info" }, [
            _vm._v("在键盘上依次按以下键进行演奏，注意控制节奏。")
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "score-item-content",
            domProps: { innerHTML: _vm._s(_vm.showItem.content || "") }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "score-item-lyrics",
            domProps: { innerHTML: _vm._s(_vm.showItem.lyrics || "") }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d980e56", esExports)
  }
}

/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "listWrap",
      staticClass: "component-commodity-list responsive-section-a"
    },
    [
      _c("div", {
        staticClass: "arrow left-arrow",
        on: {
          click: function($event) {
            return _vm.scrollList("left")
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "scroll", staticClass: "scroll-wrap" },
        _vm._l(_vm.ValidGoods, function(product, index) {
          return _c(
            "div",
            { key: index, staticClass: "card-wrap" },
            [_c("CommodityCard", { attrs: { product: product } })],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "arrow right-arrow",
        on: {
          click: function($event) {
            return _vm.scrollList("right")
          }
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b473982a", esExports)
  }
}

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(521);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("36905f53", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-002b815c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RandomLyric.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-002b815c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RandomLyric.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("1d63ae92", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-057eb2d9\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutoPianoPC.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-057eb2d9\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutoPianoPC.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 551 */,
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(524);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("0ab4bfca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b06418d\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutoPlayScoreList.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b06418d\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutoPlayScoreList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(525);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("ca14cbbe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35479cc9\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Piano.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35479cc9\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Piano.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(526);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("40fb3eab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5513755d\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommodityCard.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5513755d\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommodityCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(527);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("d4dd3140", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d980e56\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ManualPlayScoreList.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d980e56\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ManualPlayScoreList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(144)("372b12b8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b473982a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommodityList.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b473982a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommodityList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
]));