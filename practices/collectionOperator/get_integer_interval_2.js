'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  var i, j = 0;
  if (number_a < number_b) {
    for (i = number_a; i <= number_b; i++) {
      if (i % 2 === 0) {
        result[j++] = i;
      }
    }
  }
  else if (number_a > number_b) {
    for (i = number_a; i >= number_b; i--) {
      if (i % 2 === 0) {
        result[j++] = i;
      }
    }
  }
  else {
    if (number_a % 2 === 0)
    result[j] = number_a;
  }
  return result;
}

module.exports = get_integer_interval_2;
