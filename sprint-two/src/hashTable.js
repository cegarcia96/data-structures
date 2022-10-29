

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = [k, v];
  if (this._storage.get(index)) {
    var parentArray = this._storage.get(index);
    // iterate through the parentArray and check that k is not already the first index of some array inside
    for (var i = 0; i < parentArray.length; i++) {
      // If we find k update v and set parentArray
      if (parentArray[i][0] === k) {
        parentArray[i] = tupleArray;
        this._storage.set(index, parentArray);
        return;
      }
    }
    parentArray.push(tupleArray);
    this._storage.set(index, parentArray);
  } else {
    var topArray = [];
    topArray.push(tupleArray);
    this._storage.set(index, topArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var topArray = this._storage.get(index);
  for (var i = 0; i < topArray.length; i++) {
    if (topArray[i][0] === k) {
      return topArray[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var topArray = this._storage.get(index);
  topArray = topArray.filter(function (array) {
    return array[0] !== k;
  });
  this._storage.set(index, topArray);
};


/*
 * Complexity: What is the time complexity of the above functions?
// O(1) -> O(n) as it gets bigger
 */


