class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  enqueue(value) {
    var counter = this.size();
    this.storage[counter] = value;
  }

  dequeue() {
    var firstValue = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
      delete this.storage[key];
    }
    return firstValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
