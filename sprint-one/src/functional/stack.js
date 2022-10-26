var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Get a counter for storage length
    let counter = someInstance.size();
    // Set counter as key and argument as value
    storage[counter] = value;
  };

  someInstance.pop = function() {
    // Go to the last key value pair in storage
    let lastKey = someInstance.size() - 1;
    // Store the value at last key
    let lastValue = storage[lastKey];
    // Delete the key-value pair from the storage object
    delete storage[lastKey];
    // Return the value
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
