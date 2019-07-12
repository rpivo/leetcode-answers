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
 * geeks for geeks defines this as an example of a binary search tree node. They declare it as a
 * class.
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
 * this definition is virtually identical to the khan definition above.
 * 
 * the geeks for geeks definition defines the Node as a class rather than a function.
 */

/*
 * khan defines this as a "constructor", although it appears to not be a constructor. 
 */
 function BinarySearchTree() {
   this.root = null;
 }