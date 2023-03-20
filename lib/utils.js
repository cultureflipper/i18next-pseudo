'use strict';

exports.__esModule = true;
var uglifiedAlphabet = exports.uglifiedAlphabet = {
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

var vowels = exports.vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

var stringWrapper = exports.stringWrapper = function stringWrapper(_ref) {
  var shouldWrap = _ref.shouldWrap,
      string = _ref.string;
  return shouldWrap ? '<[' + string + ']>' : string;
};