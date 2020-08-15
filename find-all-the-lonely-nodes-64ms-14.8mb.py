class Solution:
  # define function getLonelyNodes that takes in the class instance, an argument called right 
  # that's of type TreeNode, and returns a list of integers
  def getLonelyNodes(self, root: TreeNode) -> List[int]:
    # create empty list called result
    result = []

    # define function traverse that takes in two arguments: node and parent
    def traverse(node, parent):
      # if node is equal to None or is falsy
      if not node:
        return
      # if parent is not equal to None or is not falsy
      if parent:
        # if either parent.left or parent.right is equal to None or is falsy
        if not parent.left or not parent.right:
          # add value of current node to result
          result.append(node.val)
      # call traverse with node.left as node, and node as parent
      traverse(node.left, node)
      # call traverse with node.right as node, and node as parent
      traverse(node.right, node)
    # initialize traversal with root as node, and parent set to None
    traverse(root, None)
    return result
