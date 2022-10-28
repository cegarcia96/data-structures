var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
    }
    var temp = list.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = Node(value);
    list.tail = temp.next;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return list.head;
    }
    // Store the rest of the list
    var restOfList = list.head.next.next;
    // Delete the original list and keep the head
    list.head.next = null;
    // Reassign head to restOfList
    var originalHead = list.head.value;
    list.head = restOfList;
    // Return just the original head
    return originalHead;
  };

  list.contains = function(target) {
    // Iterate through the list starting at the head
    if (list.head.next === null) {
      if (list.head.value === target) {
        return true;
      }
    }
    var currentNode = list.head;
    while (currentNode.next !== null) {
      // If value = target
      if (currentNode.value === target) {
        // Return true
        return true;
      }
      currentNode = currentNode.next;
    }

    if (list.tail.value === target) {
      return true;
    }
    // Return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
// O(n)
 */
