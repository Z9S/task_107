'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  var i, j = 0;
  if (number_a < number_b) {
    for (i = number_a; i <= number_b; i++) {
      result[j++] = i;
    }
  }
  else if (number_a > number_b) {
    for (i = number_a; i >= number_b; i--) {
      result[j++] = i;
    }
  }
  else {
    result[j] = number_a;
  }
  return result;
}

module.exports = get_integer_interval;

