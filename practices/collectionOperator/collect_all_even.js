'use strict';

function collect_all_even(collection) {
  var i, j = 0;
  var collection_b = [];
  for (i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0)
      collection_b[j++] = collection[i];
    console.log(collection_b[j]);
  }
  return collection_b;
}

module.exports = collect_all_even;
