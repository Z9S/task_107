'use strict';

function average_uneven(collection) {
  var sum = 0, average = 0;
  var result  = [];
  var j = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 != 0) {
      result[j++] = collection[i];
      sum += collection[i];
    }
  }
  average = sum / result.length;
  return average;
}

module.exports = average_uneven;
