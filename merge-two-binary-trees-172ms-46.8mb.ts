// declare function mergeTrees that takes in variable t1 that's a TreeNode or null, variable t2 
// that's a TreeNode or null, and returns either a TreeNode or null
function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  // if t1 is null, return t2
  if (t1 === null) return t2
  // if t2 is null, return t1
  if (t2 === null) return t1
  // set t1.val equal to t1.val plus t2.val
  t1.val += t2.val
  // set t1.left equal to the result of mergeTrees(), passing in t1.left and t2.left as arguments
  t1.left = mergeTrees(t1.left, t2.left)
  // set t1.right equal to the result of mergeTrees(), passing in t1.right and t2.right as 
  // arguments
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
}
