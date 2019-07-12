/*
 * given the root node of a binary search tree, return the sum of values of all nodes with value
 * between L and R (inclusive). The binary search tree is guaranteed to have unique values. 
 * 
 * a binary search tree is a node-based binary tree data structure which has the following properties:
 * - the left subtree of a node contains only nodes with keys lesser than the node's key.
 * - the right subtree of a node contains only nodes with keys greater than the node's key.
 * - the left and right subtree each must also be a binary search tree.
 * 
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 * 
 * definition for a binary tree node:
 * function treeNode(val) {
 *  this.val = val;
 *  this.left = this.right = null;
 * }
 * 
 */

 var rangeSumBST = function(node, L, R) {
  let sum = 0;
  node.forEach((number) => {
    if (number >= L && number <= R) {
      sum += number;
    }
  });
  return sum;
 };

node = [10,5,15,3,7,null,18];

L = 7;
R = 15;

console.log(rangeSumBST(node, L, R));