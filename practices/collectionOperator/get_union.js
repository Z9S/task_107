'use strict';

function get_union(collection_a, collection_b) {
  var collection_c = new Array();
  var i, j, k = 0;
  for (i = 0; i < collection_a.length; i++)
    collection_c[k++] = collection_a[i];
  for (i = 0; i < collection_b.length; i++) {
    for (j = 0; j < collection_a.length; j++) {
      if (collection_a[j] === collection_b[i])
        break;
    }
    if (j === collection_a.length)
      collection_c[k++] = collection_b[i];
  }
  return collection_c;
}

module.exports = get_union;

