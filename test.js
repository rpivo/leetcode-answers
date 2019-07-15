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

/*-------------------------------------------------------------------------------------------------*/

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
  // makes new BinarySearchTree, which has a root property that is initialized to null.
  constructor() {
    this.root = null;
  }

  // insert method takes in data and creates a new node with it called newNode, which is just a
  // new instance of the Node class above. new is a reserved keyword to define a new class
  // instance.
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // insertNode method takes in a new node called newNode and the current node being traversed over
  // with recursion.
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

  // remove takes in a data point and sets this.root to the return of
  // this.removeNode(this.root, data) . removeNode() takes in the current value of this.root and
  // the data that was passed in from remove() .
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // removeNode() takes in the current node and a key, which is the data that was requested to be
  // removed by the user.
  removeNode(node, key) {
    if (node === null) return null;

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = node.left;
      return node;
    }

    const aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.removeNode(node.right, aux.data);
    return node;
  }
}
/*-------------------------------------------------------------------------------------------------*/

const bst = new BinarySearchTree();
bst.insert(0);
bst.insert(-1);
bst.insert(3);
bst.insert(4);
bst.remove(-1);
console.log(bst);
