/*!
 * i18next-pseudo v2.2.1 - http://matthewboatman.com/
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["psuedo"] = factory();
	else
		root["psuedo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pseudo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Pseudo = function () {
  function Pseudo() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$languageToPseudo = _ref.languageToPseudo,
        languageToPseudo = _ref$languageToPseudo === undefined ? 'en' : _ref$languageToPseudo,
        _ref$letterMultiplier = _ref.letterMultiplier,
        letterMultiplier = _ref$letterMultiplier === undefined ? 2 : _ref$letterMultiplier,
        _ref$repeatedLetters = _ref.repeatedLetters,
        repeatedLetters = _ref$repeatedLetters === undefined ? __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* vowels */] : _ref$repeatedLetters,
        _ref$uglifedLetterObj = _ref.uglifedLetterObject,
        uglifedLetterObject = _ref$uglifedLetterObj === undefined ? __WEBPACK_IMPORTED_MODULE_0__utils__["b" /* uglifiedAlphabet */] : _ref$uglifedLetterObj,
        _ref$wrapped = _ref.wrapped,
        wrapped = _ref$wrapped === undefined ? false : _ref$wrapped,
        _ref$enabled = _ref.enabled,
        enabled = _ref$enabled === undefined ? true : _ref$enabled;

    _classCallCheck(this, Pseudo);

    this.name = 'pseudo';
    this.type = 'postProcessor';
    this.options = {
      languageToPseudo: languageToPseudo,
      letterMultiplier: letterMultiplier,
      wrapped: wrapped,
      repeatedLetters: repeatedLetters,
      letters: uglifedLetterObject,
      enabled: enabled
    };
  }

  Pseudo.prototype.configurePseudo = function configurePseudo(options) {
    this.options = _extends({}, this.options, options);
  };

  Pseudo.prototype.process = function process(value, key, options, translator) {
    var _this = this;

    if (translator.language && this.options.languageToPseudo !== translator.language || !this.options.enabled) {
      return value;
    }
    var bracketCount = 0;
    var processedValue = value.split('').map(function (letter) {
      if (letter === '}') {
        bracketCount = 0;
        return letter;
      }
      if (letter === '{') {
        bracketCount++;
        return letter;
      }
      if (bracketCount === 2) return letter;

      return _this.options.repeatedLetters.indexOf(letter) !== -1 ? _this.options.letters[letter].repeat(_this.options.letterMultiplier) : _this.options.letters[letter] || letter;
    }).join('');
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* stringWrapper */])({ shouldWrap: this.options.wrapped, string: processedValue });
  };

  return Pseudo;
}();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uglifiedAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vowels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stringWrapper; });
var uglifiedAlphabet = {
  a: 'α',
  b: 'ḅ',
  c: 'ͼ',
  d: 'ḍ',
  e: 'ḛ',
  f: 'ϝ',
  g: 'ḡ',
  h: 'ḥ',
  i: 'ḭ',
  j: 'ĵ',
  k: 'ḳ',
  l: 'ḽ',
  m: 'ṃ',
  n: 'ṇ',
  o: 'ṓ',
  p: 'ṗ',
  q: 'ʠ',
  r: 'ṛ',
  s: 'ṡ',
  t: 'ţ',
  u: 'ṵ',
  v: 'ṽ',
  w: 'ẁ',
  x: 'ẋ',
  y: 'ẏ',
  z: 'ẓ',
  A: 'À',
  B: 'β',
  C: 'Ḉ',
  D: 'Ḍ',
  E: 'Ḛ',
  F: 'Ḟ',
  G: 'Ḡ',
  H: 'Ḥ',
  I: 'Ḭ',
  J: 'Ĵ',
  K: 'Ḱ',
  L: 'Ḻ',
  M: 'Ṁ',
  N: 'Ṅ',
  O: 'Ṏ',
  P: 'Ṕ',
  Q: 'Ǫ',
  R: 'Ṛ',
  S: 'Ṣ',
  T: 'Ṫ',
  U: 'Ṳ',
  V: 'Ṿ',
  W: 'Ŵ',
  X: 'Ẋ',
  Y: 'Ŷ',
  Z: 'Ż'
};

var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

var stringWrapper = function stringWrapper(_ref) {
  var shouldWrap = _ref.shouldWrap,
      string = _ref.string;
  return shouldWrap ? '<[' + string + ']>' : string;
};

/***/ })
/******/ ])["default"];
});