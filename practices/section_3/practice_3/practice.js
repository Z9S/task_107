function create_updated_collection(collection_a, object_b) {
  var i, j = 0, x;
  var collectionC = [];
  collectionC[0] = new Object();
  collectionC[0].key = 'a';
  collectionC[0].count = 1;


  for (i = 1; i < collection_a.length; i++)
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
  for (i = 0; i < collectionC.length; i++) {
    for (j = 0; j < object_b.value.length; j++) {
      if (collectionC[i].key === object_b.value[j]) {
        if (collectionC[i].count >= 3) {
          x = parseInt(collectionC[i].count / 3);
          collectionC[i].count -= x;
        }
      }
    }
  }
  return collectionC;
}

module.exports = create_updated_collection;
