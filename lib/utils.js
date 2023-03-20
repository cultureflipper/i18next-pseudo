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
  A: 'À[코]',
  B: 'β[인]',
  C: 'Ḉ[텔]',
  D: 'Ḍ[레]',
  E: 'Ḛ[그]',
  F: 'Ḟ[래]',
  G: 'Ḡ[프]',
  H: 'Ḥ[탈]',
  I: 'Ḭ[중]',
  J: 'Ĵ[앙]',
  K: 'Ḱ[화]',
  L: 'Ḻ[플]',
  M: 'Ṁ[랫]',
  N: 'Ṅ[폼]',
  O: 'Ṏ[찬]',
  P: 'Ṕ[성]',
  Q: 'Ǫ[률]',
  R: 'Ṛ[마]',
  S: 'Ṣ[켓]',
  T: 'Ṫ[플]',
  U: 'Ṳ[레]',
  V: 'Ṿ[이]',
  W: 'Ŵ[스]',
  X: 'Ẋ[직]',
  Y: 'Ŷ[면]',
  Z: 'Ż[했]'
};

var vowels = exports.vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

var stringWrapper = exports.stringWrapper = function stringWrapper(_ref) {
  var shouldWrap = _ref.shouldWrap,
      string = _ref.string;
  return shouldWrap ? '<[' + string + ']>' : string;
};