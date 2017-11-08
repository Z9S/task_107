'use strict';

function collect_last_element(collection) {
  var result, length;
  length = collection.length;
  result = collection[length-1];
  return result;
}

module.exports = collect_last_element;
