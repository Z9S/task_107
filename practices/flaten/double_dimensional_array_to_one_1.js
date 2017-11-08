'use strict';

function double_to_one(collection) {
  var result = [], v = [];
  var i, j, m = 1;
  result[0] = collection[0];
  for (i = 1; i < collection.length; i++) {
    if (collection[i].length === 1)
      result[m++] = collection[i][0];
    else {
      for (j = 0; j < collection[i].length; j++)
        result[m++] = collection[i][j];
    }
  }
  return result;
}

module.exports = double_to_one;
