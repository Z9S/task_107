'use strict';
function map_to_even(collection){
  var result = [];
  var i;
  for (i = 0; i < collection.length; i++) {
    result[i] = collection[i] * 2;
  }
  return result;
}
module.exports = map_to_even;
