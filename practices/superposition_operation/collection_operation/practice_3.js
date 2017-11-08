'use strict';

function hybrid_operation_to_uneven(collection) {
  var result = [];
  var j = 0, sum = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 != 0)
      result[j++] = collection[i] * 3 + 5;
  }
  for (var i = 0; i < result.length; i++)
    sum += result[i];
  return sum;
}

module.exports = hybrid_operation_to_uneven;

