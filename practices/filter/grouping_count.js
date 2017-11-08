'use strict';

function grouping_count(collection) {
  var result = new Object();
  var i, j, m, t, k = 0;
  var count = [], s = [];
  s[0] = collection[0], count[0] = 1;
  for (i = 1; i < collection.length; i++) {
    for (j = 0; j < s.length; j++)
      if (collection[i] === s[j]) {
        count[collection[i]-1]++;
        break;
      }
    if (j === s.length) {
      s[collection[i]-1] = collection[i];
      count[collection[i]-1] = 1;
    }
  }
  console.log(s);
  console.log(count);
  for (i = 0; i < s.length; i++) {
    m = (s[i]).toString();
    t = count[i];
    result[m] = t;
  }
  return result;
}

module.exports = grouping_count;
