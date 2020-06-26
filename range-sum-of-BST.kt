class Solution {
  fun rangeSumBST(root: TreeNode?, L: Int, R: Int): Int {
    var result = 0
    fun traverse(root: TreeNode?, L: Int, R: Int): Unit? {
      if (root?.`val` == null) return null
      if (root.`val` >= L && root.`val` <= R) result += root.`val`
      if (root.left != null) traverse(root.left, L, R)
      if (root.right != null) traverse(root.right, L, R)
      return null
    }
    
    traverse(root, L, R)
    return result
  }
}