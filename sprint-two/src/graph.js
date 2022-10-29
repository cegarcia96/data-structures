

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // Add node to storage
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Iterate over storage
  for (var keys in this.storage) {
    if (keys === node.toString()) {
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Iterate over all nodes
  for (var nodes in this.storage) {
    // Call removeEdge on node
    this.removeEdge(nodes, node);
  }
  // Delete node
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Check if fromNodes adj list includes toNode
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Push toNode into fromNode adj list
  this.storage[fromNode].push(toNode);
  // Push fromNode into toNode adj list
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Iterate through fromNode adj list and remove toNode
  this.storage[fromNode] = this.storage[fromNode].filter(function (node) {
    return !node;
  });
  // Iterate through toNode adj list and remove fromNode
  this.storage[toNode] = this.storage[toNode].filter(function (node) {
    return !node;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // Iterate through graph
  for (var node in this.storage) {
    // Call cb on each node
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
// O(log n)
 */