class Solution:
  def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
    sum = 0
    def search(node: TreeNode):
      nonlocal sum
      if node.val >= L and node.val <= R: sum += node.val
      if (node.left): search(node.left)
      if (node.right): search(node.right)
    search(root)
    return sum