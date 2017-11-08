'use strict';
var single_element = function(collection){
  var i, j = 0, t = 0;
  var a = [], result = [];
  for (i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      a[j++] = collection[i];
    }
  }
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
      if (a[j] === a[i] && j != i) {
        break;
      }
    }
    if (j === a.length)
      result[t++] = a[i];
  }
  return result;
};
module.exports = single_element;
