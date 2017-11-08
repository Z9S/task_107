'use strict';

function find_last_even(collection) {
  var result;
  for (var i = collection.length; i >= 0; i--) {
    if (collection[i] % 2 === 0) {
      result = collection[i];
      break;
    }
  }
  return result;
}

module.exports = find_last_even;
