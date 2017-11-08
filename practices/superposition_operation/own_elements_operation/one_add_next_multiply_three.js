'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  var i, j = 0;
  for (i = 0; i < collection.length - 1; i++) {
    result[j++] = (collection[i] + collection[i + 1]) * 3;
  }
  return result;
}
module.exports = one_add_next_multiply_three;
