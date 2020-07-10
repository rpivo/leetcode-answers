/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  const levs = S // take S
  // split string at digits
  .split(/\d/)
  // remove empty values
  .filter(s => s !== '')
  // convert each string to its integer length value
  .map(s => s.length);

  // get number values from string
  const nums = S.split(/-+/);

  // create root node from first item in nums
  const root = new TreeNode(nums.shift());
  // creates an array that contains the root node
  const nodeOnLevel = [root];

  // create mutable iterator
  let i = 0;

  // while iterator is less than nums.length
  while (i < nums.length) {
    // create immutable copy of nums value at iterator
    const val = nums[i];
    // create a new node with value
    const node = new TreeNode(val);
    // get the associated level of the node
    const lev = levs[i];
    // get the parent node which is in the nodeOnLevel array at index (lev - 1)
    const par = nodeOnLevel[lev - 1];

    // if parent's left node is empty, set the new node on parent's left node
    if (!par.left) par.left = node;
    // if parent's right node is empty, set the new node on parent's right node
    else if (!par.right) par.right = node

    // in the nodeOnLevel array, set the node at the index of lev
    nodeOnLevel[lev] = node;
    // iterate
    i++;
  }

  return root
};