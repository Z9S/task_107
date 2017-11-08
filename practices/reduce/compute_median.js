'use strict';

function compute_median(collection) {
  var i, j, m, t;
  for (i = 1; i < collection.length; i++) {
    for (j = 0; j < collection.length; j++) {
      if (collection[i] > collection[j]) {
        m = collection[i];
        collection[i] = collection[j];
        collection[j] = m;
      }
    }
  }
  if (collection.length % 2 != 0)
    t = collection[(collection.length - 1) / 2];
  else
    t = (collection[(collection.length / 2) - 1] + collection[collection.length / 2]) / 2;
  return t;
}

module.exports = compute_median;


