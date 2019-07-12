/*
 * geeks for geeks defines this as an example of a binary search tree node. They declare it as a
 * class.
 * 
 * as in the below code snippet, we define a node class having three properties: data, left, and 
 * right. left and right are pointers to the left and right nodes in a binary search tree. data is 
 * initiliazed with the passed-in "data" argument, which is passed when the object for this node is
 * created, and left and right are both set to null. 
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
 * the leetcode problem says:
 * 
 * definition for a binary tree node:
 *  function treeNode(val) {
 *  this.val = val;
 *  this.left = this.right = null;
 * } 
 * 
 * this definition is virtually identical to the khan definition below.
 * 
 * the geeks for geeks definition defines the Node as a class rather than a function.
 */

/*
 * from https://khan4019.github.io/front-end-Interview-Questions/bst.html : to create a tree, you
 * need a node. A node in a tree looks like:
 */
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

/*
 * khan defines this as a constructor. It's a constructor that doesn't take in any arguments and
 * declares a single value, root, which is set to null.
 */
 function BinarySearchTree() {
   this.root = null;
 }

 /*
  * while inserting a value, you have to find the appropriate location: 
  * 
  * adds a push() method to the BinarySearchTree constructor.
  */
 BinarySearchTree.prototype.push = function(val) {

  // sets var root to this.root. this.root may or may not be null.
  var root = this.root;

  // if root is null
  if(!root) {
    // make root a new Node. use the val that was passed in to the push() method.
    this.root = new Node(val);
    // because we've identified where the new val should be placed, we can exit out of the push()
    // method.
    return;
  }

  // this temp variable will help us traverse the binary search tree by setting currentNode to the 
  // current root.
  var currentNode = root;
  // make a new Node to be placed.
  var newNode = new Node(val);

  // while currentNode is not null
  while(currentNode) {
    // if the passed in val is less than currentNode.val
    if(val < currentNode.value) {
      // and if currentNode.left is null
      if(!currentNode.left) {
        // assign the previously created newNode to currentNode.left
        currentNode.left = newNode;
        // exit out of the while loop. we're done here
        break;
      }
      // else if currentNode.left has a value
      else {
        // assign currentNode the value of currentNode.left and perform the while loop with the new
        // currentNode.
        currentNode = currentNode.left;
      }
    }
    // else get in here when the val is greater than currentNode.val
    else {
      // if currentNode.right is null
      if(!currentNode.right) {
        // assign the previously created newNode to currentNode.left
        currentNode.right = newNode;
        // exit out of the while loop. we're done here
        break;
      }
      // else do this when currentNode.right has a value
      else {
        // assign currentNode the value of currentNode.right and perform the while loop with the 
        // new currentNode.
        currentNode = currentNode.right;
      }
    }
  }
 }