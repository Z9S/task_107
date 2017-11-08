'use strict';

function spilt_to_zero(number, interval) {
  var result = [];
  var i;
  var n = parseInt (number), int = parseInt (interval)
  if (n % int === 0) {
    result [0] = number;
    for (i = 0; result[i] >= 0; i++) {
      number -= interval;
      number = number.toFixed(1);
      result[i + 1] = parseFloat(number);
    }
  }
  else {
    result [0] = number;
    for (i = 0; result[i] > 0; i++) {
      number -= interval;
      number = number.toFixed(1);
      result[i + 1] = parseFloat(number);
    }
  }
  return result;
}

module.exports = spilt_to_zero;
