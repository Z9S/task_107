'use strict';
var even_asc_odd_desc = function(collection){
  var result = [];
  var i, j = 0, s, m;
  for (i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      result[j++] = collection[i];
    }
  }
  for (i = 0; i < result.length - 1; i++) {
    for (j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        s = result[i];
        result[i] = result[j];
        result[j] = s;
      }
    }
  }
  m = j;
  for (i = 0; i < collection.length; i++) {
    if (collection[i] % 2 != 0) {
      result[j++] = collection[i];
    }
  }
  for (i = m; i < result.length - 1; i++) {
    for (j = i + 1; j < result.length; j++) {
      if (result[i] < result[j]) {
        s = result[i];
        result[i] = result[j];
        result[j] = s;
      }
    }
  }
  return result;
};
module.exports = even_asc_odd_desc;
