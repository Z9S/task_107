'use strict';

function hybrid_operation_to_uneven(collection) {
  var result = [];
  var j = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 != 0)
      result[j++] = collection[i] * 3 +2;
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

