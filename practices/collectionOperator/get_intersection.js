'use strict';

function get_intersection(collection_a, collection_b) {
  var i, j, m = 0;
  var collection_c = [];
  for (i = 0; i < collection_b.length; i++) {
    for (j = 0; j < collection_a.length; j++) {
      if (collection_b[i] === collection_a[j]) {
        collection_c[m++] = collection_b[i];
      }
    }
  }
  return collection_c;
}

module.exports = get_intersection;
