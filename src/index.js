export default (value, precision = 2, decPoint = ',', thousandsStep = '.', round = true) => {
  value = value || 0;
  precision = precision || 0;
  if (typeof value === 'string') value = parseFloat(value);
  let power = Math.pow(10, precision),
    absValue = Math.abs((round) ? Math.round(value * power) : Math.floor(value * power)),
    num = String(Math.floor(absValue / power)),
    f = '';

  if (precision > 0) {
    f = String(absValue % power);
    if (absValue > power) {
      f += new Array(Math.max(precision - f.length, 0) + 1).join('0');
    } else {
      f = new Array(Math.max(precision - f.length, 0) + 1).join('0') + f;
    }
  }

  let r = '\\d(?=(\\d{3})+$)';
  return (value < 0 && absValue !== 0 ? '-' : '') + num.replace(new RegExp(r, 'g'), '$&' + thousandsStep) + ((f.length > 0) ? decPoint + f : '');
};

export const pad = (value, length = 2) => {
  let neg = '';
  if (value < 0) {
    value = value * -1;
    neg = '-';
  }
  value = '' + value;
  length += 1 - value.length;
  return neg + (length > 0 ? new Array(length).join('0') + value : value);
};
