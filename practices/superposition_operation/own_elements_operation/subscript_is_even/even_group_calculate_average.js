'use strict';
var even_group_calculate_average = function(collection){
  var i, j = 0, sum1 = 0, sum2 = 0, sum3 = 0, average1 = 0, average2 = 0, average3 = 0;
  var len1 = 0, len2 = 0, len3 = 0;
  var s = [], t = [], ans = [];
  for (i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
     s[j++] = collection[i];
    }
  }
  j = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] % 2 === 0)
      t[j++] = s[i];
  }
  j = 0;
  if (t.length === 0) {
    ans[j] = 0;
    return ans;
  }
  else {
    for (i = 0; i < t.length; i++) {
      if (t[i] >= 0 && t[i] <= 9) {
        sum1 += t[i];
        len1++;
      }
      else if (t[i] >= 10 && t[i] <= 99) {
        sum2 += t[i];
        len2++;
      }
      else {
        sum3 += t[i];
        len3++;
      }
    }
  }
  console.log(sum3);
  console.log(len3);
  if (len1 === 0 && len2 === 0)
    ans[j] = sum3 / len3;
  else {
    ans[j++] = sum1 / len1;
    ans[j++] = sum2 / len2;
    ans[j] = sum3 / len3;
  }
  return ans;
};
module.exports = even_group_calculate_average;
