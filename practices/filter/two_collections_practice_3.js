'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];
  var i, j, m = 0;
  for (i = 0; i < collection_a.length; i++) {
    for (j = 0; j < collection_b.length; j++) {
      if (collection_a[i] % collection_b[j] === 0)
        break;
    }
    if (j < collection_b.length)
      result[m++] = collection_a[i];
  }
  return result;
}

module.exports = choose_divisible_integer;
