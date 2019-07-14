/*
 * the below code is an implementation of the binary search tree data structure in javascript.
 * 
 * a tree is a non-linear data structure that is a collection of nodes. 
 * 
 * a binary search tree is a binary tree in which nodes that have a lesser value are stored on the
 * left, while nodes with a greater value are stored on the right.
 * 
 * to make nodes for the binary search tree, we can define a Node class. the Node class has three
 * properties: data, left, and right. left and right are pointers to the left and right nodes in a
 * binary search tree.
 * 
 * when an object of Node is created, (data) is passed in as a value. it's stored within the
 * instance's data property under certain conditions. Both the left and right properties are
 * initially set to null.
 */
// Node class
class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/*
 * example of a binary search tree class. this is just the framework. we will have to build these
 * methods: 
 * 
 * insert(data)
 * remove(data)
 * 
 * helper functions:
 * findMinNode()
 * getRootNode()
 * inorder(node)
 * preorder(node)
 * postorder(node)
 * search(node, data)
 * 
 * the BinarySearchTree class contains a private variable `root`, which holds the root of a tree. 
 * `root` is initialzed to null.
 */
class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  // helper method which creates a new node to be inserted and calls insertNode
  insert(data) {

    // creating a node and initializing with data
    var newNode = new Node(data);

    // if root is null, then node will be added to the tree and made root.
    if (this.root === null) {
      this.root = newNode;
    // if root is not null, find the correct position in the tree and add the node.
    } else {
      this.insertNode(this.root, newNode);
    }

  }

  // method to insert a node in a tree. it moves over the tree to find the location to insert a
  // node with given data.
  insertNode(node, newNode) {

    // if the new node's data value is less than the current node's data value, move left in the
    // tree.
    if (newNode.data < node.data) {
      // if left node is null, insert new node here
      if (node.left === null) {
        node.left = newNode;
      // if left node is not null, recur and traverse down this left node.
      } else {
        this.insertNode(node.left, newNode);
      }
    }

  }
}