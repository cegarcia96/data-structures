var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(binarySearchMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = {};
  binarySearchTree.right = {};
  return binarySearchTree;
};

var binarySearchMethods = {};

binarySearchMethods.insert = function(value) {
  if (value < this.value) {
    if (Object.keys(this.left).length === 0) {
      this.left = BinarySearchTree(value);
    } else {
      var leftValue = this.left;
      leftValue.insert(value);
    }
  } else {
    if (Object.keys(this.right).length === 0) {
      this.right = BinarySearchTree(value);
    } else {
      var rightValue = this.right;
      rightValue.insert(value);
    }
  }

};

binarySearchMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (Object.keys(this.left).length === 0) {
      return false;
    }
    var leftValue = this.left;
    if (leftValue.contains(value)) {
      return true;
    }
  } else if (value > this.value) {
    if (Object.keys(this.right).length === 0) {
      return false;
    }
    var rightValue = this.right;
    if (rightValue.contains(value)) {
      return true;
    }
  }
  return false;
};

binarySearchMethods.depthFirstLog = function(cb) {
  var leftValue = this.left;
  var rightValue = this.right;

  var result = cb(this.value);
  if (Object.keys(leftValue).length === 0 && Object.keys(rightValue).length === 0) {
    return result;
  }

  if (Object.keys(leftValue).length !== 0) {
    leftValue.depthFirstLog(cb);
  }

  if (Object.keys(rightValue).length !== 0) {
    rightValue.depthFirstLog(cb);
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions? O(log n)
 */

