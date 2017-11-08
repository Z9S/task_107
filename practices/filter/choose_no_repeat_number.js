'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  var i, j, k = 1;
  result[0] = collection[0];
  for (i = 1; i < collection.length; i++) {
    for (j = 0; j < result.length; j++)
      if (collection[i] === result[j]) {
        break;
    }
    if (j === result.length)
      result[k++] = collection[i];
  }
  return result;
}

module.exports = choose_no_repeat_number;
