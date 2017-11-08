'use strict';

function choose_even(collection) {
  var result = [];
  var i, j = 0;
  for (i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      result[j++] = collection[i];
    }
  }
  return result;
}

module.exports = choose_even;
