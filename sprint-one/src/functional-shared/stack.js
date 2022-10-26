var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    // Get the length of storage object
    let counter = this.size();
    // Set counter as key and argument as value
    this.storage[counter] = value;
  },

  pop: function() {
    // Get the last key
    let lastKey = this.size() - 1;
    // Store the last value
    let lastValue = this.storage[lastKey];
    // Delete the last key from storage
    delete this.storage[lastKey];
    // Return the last value
    return lastValue;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


