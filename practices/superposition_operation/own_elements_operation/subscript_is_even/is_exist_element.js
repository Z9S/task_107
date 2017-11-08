'use strict';
var is_exist_element = function(collection,element){
  var status = false, i, j = 0;
  var result = [];

  for (i = 0; i < collection.length; i++) {
    if (i % 2 === 0) {
      result[j++] = collection[i];
    }
  }

  if (element === 3) {
    for (i = 0; i < result.length; i++) {
      if (result[i] === 3)
        return true;
    }
  }
  else {
    for (i = 0; i < result.length; i++) {
      if (result[i] === 4)
        status = true;
    }
  }
  return status;
};
module.exports = is_exist_element;
