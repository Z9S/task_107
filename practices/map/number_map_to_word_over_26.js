'use strict';
var number_map_to_word_over_26 = function(collection){
  var result = [];
  var M = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var i, j = 0, m;
  for (i = 0; i < collection.length; i++) {
    if (collection[i] > 26) {
        m = parseInt((collection[i] - 1) / 26);
        result[j] = M[m - 1];
        result[j] += M[(collection[i] - 1) % 26];
        j++;
      }
      else
        result[j++] = M[collection[i] - 1];
  }
  return result;
};

module.exports = number_map_to_word_over_26;
