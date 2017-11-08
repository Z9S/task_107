'use strict';
function rank_by_two_large_one_small(collection){
  var i, j, m;
  for (i = 0; i < collection.length - 1; i++) {
    for (j = i; j < collection.length; j++) {
      if (collection[i] > collection[j]) {
        m = collection[i];
        collection[i] = collection[j];
        collection[j] = m;
      }
    }
  }
  for (i = 0; i < collection.length; i++) {
    if ((i + 1) % 3 === 0 ) {
      m = collection[i - 2];
      collection[i - 2] = collection [i - 1];
      collection[i - 1] = collection[i];
      collection[i] = m;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
