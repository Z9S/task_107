'use strict';
var calculate_median = function(collection){
  var s = 0;
  var result = [];
  var j = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result[j++] = collection[i];
    }
  }
  if (result.length % 2 === 0) {
    s = (result[result.length / 2] + result[result.length / 2 - 1]) / 2;
  }
  else
    s = result[(result.length - 1) / 2];
  return s;
};
module.exports = calculate_median;
