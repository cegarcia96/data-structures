var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value) {
    var counter = this.size();
    this[counter] = value;
  },

  pop: function() {
    var lastKey = this.size() - 1;
    var lastValue = this[lastKey];
    delete this[lastKey];
    return lastValue;
  },

  size: function() {
    return Object.keys(this).length;
  }
};
