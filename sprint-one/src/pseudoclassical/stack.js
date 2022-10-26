var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var counter = this.size();
  this.storage[counter] = value;
};

Stack.prototype.pop = function() {
  var lastKey = this.size() - 1;
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastValue;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
