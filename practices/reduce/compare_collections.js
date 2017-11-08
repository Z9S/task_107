'use strict';

function compare_collections(collection_a, collection_b) {
  var i, j, status = true;
  for (i = 0; i < collection_a.length; i++) {
    for (j = 0; j < collection_b.length; j++) {
      if (collection_a[i] === collection_b[j])
        break;
    }
    if (j === collection_b.length) {
      status = false;
      return false;
    }
  }
  return status;
}

module.exports = compare_collections;


