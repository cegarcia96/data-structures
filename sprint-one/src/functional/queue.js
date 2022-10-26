var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Declare a counter for storage length
    let counter = someInstance.size();
    // Set counter as key and argument as value
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    // Store the value at key 0
    let firstValue = storage[0];
    // Delete key 0
    delete storage[0];
    // Subtract 1 from all keys
    for (let key in storage) {
      storage[key - 1] = storage[key];
      delete storage[key];
    }
    // Return value originally at key 0
    return firstValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
