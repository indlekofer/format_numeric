"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pad = exports["default"] = void 0;

var _default = function _default(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
  var thousandsStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  var round = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  value = value || 0;
  precision = precision || 0;
  if (typeof value === 'string') value = parseFloat(value);
  var power = Math.pow(10, precision),
      absValue = Math.abs(round ? Math.round(value * power) : Math.floor(value * power)),
      num = String(Math.floor(absValue / power)),
      f = '';

  if (precision > 0) {
    f = String(absValue % power);
    f += new Array(Math.max(precision - f.length, 0) + 1).join('0');
  }

  var r = '\\d(?=(\\d{3})+$)';
  return (value < 0 && absValue !== 0 ? '-' : '') + num.replace(new RegExp(r, 'g'), '$&' + thousandsStep) + (f.length > 0 ? decPoint + f : '');
};

exports["default"] = _default;

var pad = function pad(value) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var neg = '';

  if (value < 0) {
    value = value * -1;
    neg = '-';
  }

  value = '' + value;
  length += 1 - value.length;
  return neg + (length > 0 ? new Array(length).join('0') + value : value);
};

exports.pad = pad;