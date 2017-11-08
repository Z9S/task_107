'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = [];
  var i;
  for (i = 0; i < collection.length; i++) {
    result[i] = collection[i] * 4 + 1;
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
