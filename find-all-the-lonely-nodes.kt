class Solution {
  fun getLonelyNodes(root: TreeNode?): List<Int> {
      var list = mutableListOf<Int>()
      
      fun traverse(root: TreeNode?, list: MutableList<Int>, isLonely: Boolean): Unit? {
        if (root == null) return null
      
        if (isLonely) list.add(root.`val`)
      
        traverse(root.left, list, root.right == null)
        traverse(root.right, list, root.left == null)
        return null
      }
      
      traverse(root, list, false)
      return list
  }
}