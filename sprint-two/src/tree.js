var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Push a new tree object to parent array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // Base case is no children
  if (this.value === target) {
    return true;
  }
  // Iterate over the children
  for (var i = 0; i < this.children.length; i++) {
    // Check value of each child
    var currentChild = this.children[i];
    // Call contains on child
    if (currentChild.contains(target)) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
// O(n)
*/
