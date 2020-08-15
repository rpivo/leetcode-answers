# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def getLonelyNodes(self, root: TreeNode) -> List[int]:
    result = []
    def search(tree: TreeNode):
      if (tree.left != None):
        if (tree.right == None): result.append(tree.left.val)
        search(tree.left)
      if (tree.right != None):
        if (tree.left == None): result.append(tree.right.val)
        search(tree.right)
    search(root)
    return result