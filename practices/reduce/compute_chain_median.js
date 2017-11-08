'use strict';

function compute_chain_median(collection) {
  var result = [];
  var i, j, m, t;
  result = collection.split ("->");
  for (i = 0; i < result.length; i++) {
    result[i] = parseInt (result[i]);
  }
  for (i = 1; i < result.length; i++) {
    for (j = 0; j < result.length; j++) {
      if (result[i] > result[j]) {
        m = result[i];
        result[i] = result[j];
        result[j] = m;
      }
    }
  }
  t = (result[(result.length / 2) - 1] + result[result.length / 2]) / 2;
  return t;
}

module.exports = compute_chain_median;
