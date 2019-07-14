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
  constructor(data) {
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
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
}
