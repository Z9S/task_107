'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  var M = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var i, j = 0, m, t;
  if (number_a < number_b) {
    for (i = number_a; i <= number_b; i++) {
      if (i > 26) {
        m = parseInt((i - 1) / 26);
        result[j] = M[m - 1];
        result[j] += M[(i - 1) % 26];
        j++;
      }
      else
        result[j++] = M[i-1];
    }
  }
  else if(number_a > number_b) {
    for (i = number_a; i >= number_b; i--) {
      if (i > 26) {
        m = parseInt((i - 1) / 26);
        result[j] = M[m - 1];
        result[j] += M[(i - 1) % 26];
        j++;
      }
      else
        result[j++] = M[i - 1];
    }
  }
  else {
    if (number_a > 26) {
      m = parseInt((number_a - 1) / 26);
      result[j] = M[m - 1];
      result[j] += M[(number_a - 1) % 26];
    }
    else
      result[j] = M[number_a - 1];
  }
  return result;
}

module.exports = get_letter_interval_2;

