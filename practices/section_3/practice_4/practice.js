function create_updated_collection(collection_a, object_b) {
  var i, j = 0, m = 0, x;
  var collectionC = [];
  collectionC[0] = new Object();
  collectionC[0].key = 'a';
  collectionC[0].count = 1;
  for (i = 1; i < collection_a.length; i++)
  {
    if (collection_a[i].length == 1)
    {
      if (collection_a[i] === collection_a[i-1])
        collectionC[j].count++;
      else
      {
        j++;
        collectionC[j] = new Object();
        collectionC[j].key = collection_a[i];
        collectionC[j].count = 1;
      }
    }
    else
    {
      for (m = 0; m < collection_a[i].length; m++)
      {
        if (collection_a[i][m] === collection_a[i-1])
        {
          while (collection_a[i][m] != '-')
            m++;
          collectinC[j].count = collection_a[i][m+1];
          break;
        }
        else
        {
          j++;
          collectionC[j] = new Object();
          collectionC[j].key = collection_a[i][m];
          while (collection_a[i][m] != '-')
            m++;
          collectionC[j].count = parseInt(collection_a[i][m+1]);
          break;
        }
      }
    }
  }
  for (i = 0; i < collectionC.length; i++) {
    for (j = 0; j < object_b.value.length; j++) {
      if (collectionC[i].key === object_b.value[j]) {
        x = parseInt(collectionC[i].count / 3);
        collectionC[i].count -= x;
      }
    }
  }
  return collectionC;
}

module.exports = create_updated_collection;
