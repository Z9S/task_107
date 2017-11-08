'use strict';
var rank_desc = function(collection){
  var i, j, m;
  for (i = 0; i < collection.length - 1; i++) {
    for (j = i + 1; j < collection.length; j++) {
      if (collection[i] > collection[j]) {
        m = collection[i];
        collection[i] = collection[j];
        collection[j] =m;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;
