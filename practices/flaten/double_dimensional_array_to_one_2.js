'use strict';

function double_to_one(collection) {
  var s = [], result = [];
  var i, j, m = 0, k = 1;
  for (i = 0; i < collection.length; i++) {
    for (j = 0; j < collection[i].length; j++)
      s[m++] = collection[i][j];
  }
  result[0] = s[0];
  for (i = 1; i < s.length; i++) {
    for (j = 0; j < result.length; j++) {
      if (s[i] === result[j])
        break;
    }
    if (j === result.length)
      result[k++] = s[i];
  }
  return result;
}

module.exports = double_to_one;
