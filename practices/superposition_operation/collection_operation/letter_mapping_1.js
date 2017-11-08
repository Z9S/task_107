'use strict';

function even_to_letter(collection) {
  var m = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  var i, t = 0;
  for (i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      result[t++] = m[collection[i] - 1];
    }
  }
  return result;
}

module.exports = even_to_letter;
