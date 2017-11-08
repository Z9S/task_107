'use strict';

function compute_average(collection) {
  var sum = 0, average = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  average = sum / collection.length;
  return average;
}

module.exports = compute_average;

