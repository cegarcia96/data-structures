var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {
    storage: {}
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    // Get the length of the storage object
    let counter = this.size();
    // Add key value pair to storage
    this.storage[counter] = value;
  },

  dequeue: function() {
    // Store the first value
    let firstValue = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
      delete this.storage[key];
    }
    return firstValue;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


