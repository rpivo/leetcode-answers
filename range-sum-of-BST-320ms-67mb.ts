// declare function rangeSumBST that takes in an argument called root that's either a TreeNode or 
// null, a number called L, another number called R, and returns a number
function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
  // create mutable variable called sum and initialize as 0
  let sum = 0;
  // declare function traverse that takes in an argument called root that's of type TreeNode
  const traverse = (root: TreeNode) => {
    // if root.val is between (inclusive) the values of L and R, set sum equal to sum plus root.val
    if (root.val >= L && root.val <= R) sum += root.val;
    // if root.left is not falsy, call traverse with root.left
    if (root.left) traverse(root.left);
    // if root.right is not falsy, call traverse with root.right
    if (root.right) traverse(root.right);
  };
  // if root is not falsy, call traverse with root
  if (root) traverse(root);
  return sum;
}