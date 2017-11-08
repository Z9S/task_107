'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  var i;
  for (i = 0; i < collections.length; i++) {
    result[i] = collections[i] * 3;
  }
  return result;
};

module.exports = map_to_three_multiples;
