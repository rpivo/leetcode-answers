// declare function mergeTrees that takes in TreeNode t1 and TreeNode t2
const mergeTrees = function(t1: TreeNode | null, t2: TreeNode | null) {
  // if t1 is falsy, return t2
  if (!t1) return t2
  // if t2 is falsy, return t1
  if (!t2) return t1
  // set t1.val equal to t1.val plus t2.val
  t1.val += t2.val
  // set t1.left equal to the result of mergeTrees, passing in t1.left and t2.left
  t1.left = mergeTrees(t1.left, t2.left)
  // set t1.right equal to the result of mergeTrees, passing in t1.right and t2.right
  t1.right = mergeTrees(t1.right, t2.right)
  return t1
}
