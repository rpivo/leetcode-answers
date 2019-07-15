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

const rangeSumBST = function (root, L, R) {
  // declare variable sum and initialize it to 0.
  let sum = 0;
  // if root of binary search tree is null
  if (root == null) {
    // then sum is 0 since binary search tree is empty.
    return 0;
  }
  // if the first value of the binary search tree is greater than L and less than R.
  // in other words, if it's within range.
  if (L <= root.val && root.val <= R) {
    // sum variable is equal to the first value in the binary search tree.
    sum = root.val;
  }

  // at the top level of the binary search tree, both of these recursive loops will run.

  // if the value of the current root node is greater than L or greater than R
  if (L <= root.val || R <= root.val) {
    // sum plus equals the return value of rangeSumBST(root.left, L, R). this
    // recursively runs through the nodes that satisfy these conditions.
    sum += rangeSumBST(root.left, L, R);
  }
  // if the value of the current root node is less than L or less than R
  if (root.val <= L || root.val <= R) {
    // sum plus equals the return value of rangeSumBST(root.right, L, R). this
    // recursively runs through the nodes that satisfy these conditions.
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};
