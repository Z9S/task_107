function create_updated_collection(collection_a, object_b) {
  var i, j, x;
  for (i = 0; i < collection_a.length; i++)
  {
    for (j = 0; j < object_b.value.length; j++)
    {
      if (collection_a[i].key === object_b.value[j])
      {
        if (collection_a[i].count >= 3)
        {
          x = parseInt(collection_a[i].count / 3);
          collection_a[i].count -= x;
        }
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
