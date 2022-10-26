class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(value) {
    var counter = this.size();
    this.storage[counter] = value;
  }

  pop() {
    var lastKey = this.size() - 1;
    var lastValue = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}