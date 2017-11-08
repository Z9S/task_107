'use strict';
var calculate_average = function(collection){
  var sum = 0, average = 0;
  var result = [];
  var j = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result[j++] = collection[i];
      sum += collection[i];
    }
  }
  average = sum / result.length;
  return average;
};
module.exports = calculate_average;
