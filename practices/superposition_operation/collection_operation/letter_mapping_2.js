'use strict';

function average_to_letter(collection) {
  var m = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result;
  var i, sum = 0, average = 0;
  for (i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  average = sum / collection.length;
  result = m[Math.ceil(average) - 1];
  return result;
}

module.exports = average_to_letter;

