'use strict';
var number_map_to_word = function(collection){
  var m = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  var i;
  for (i = 0; i < collection.length; i++) {
    result[i] = m[collection[i] - 1];
  }
  return result;
};

module.exports = number_map_to_word;
