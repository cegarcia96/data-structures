var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    var counter = this.size();
    this[counter] = value;
  },

  dequeue: function() {
    var firstValue = this[0];
    delete (this[0]);
    for (var key in this) {
      if (this.hasOwnProperty(key)) {
        this[key - 1] = this[key];
        delete this[key];
      }
    }
    return firstValue;
  },

  size: function() {
    return Object.keys(this).length;
  }
};

