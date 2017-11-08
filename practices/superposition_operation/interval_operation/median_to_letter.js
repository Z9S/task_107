'use strict';

function median_to_letter(collection) {
  var result, m, i, t;
  var M = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (collection.length % 2 != 0)
    result = collection[(collection.length - 1) / 2];
  else
    result = (collection[(collection.length / 2) - 1] + collection[collection.length / 2]) / 2;
  result = Math.ceil (result);
  console.log(result);
  if (result > 26) {
      m = parseInt((result - 1) / 26);
      t = M[m - 1];
      result = t + M[(result - 1) % 26];
  }
  else
      result = M[result - 1];
  return result;
}

module.exports = median_to_letter;
