function collect_same_elements(collection_a, collection_b) {
  var i, j, s;
  var result = [];
  for (i = 0; i < collection_a.length; i++)
  {
    for (j = 0; j < collection_b.length; j++)
    {
      for (s = 0; s < collection_b[j].length; s++)
      {
        if (collection_a[i] === collection_b[j][s])
          result.push (collection_a[i]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
