class Solution:
  # define function rangeSumBST that takes in the class instance, an argument called root that's 
  # of type TreeNode, an integer called L, and an integer called R, and returns an integer
  def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
    # if root is None
    if root is None:
      # sum is assumed to be 0
      return 0
    # else if root.val is greater than or equal to L and less than or equal to R
    elif root.val >= L and root.val <= R:
      # return the sum of root.val plus self.rangeSumBST with args root.Right, L, and R, and 
      # self.rangeSumBST with args root.left, L, and R
      return root.val + self.rangeSumBST(root.right, L, R) + self.rangeSumBST(root.left, L, R)
    # else if root.val is less than L
    elif root.val < L:
      # perform no addition, and return a call to self.rangeSumBST with args root.right, L, and R
      return self.rangeSumBST(root.right, L, R)
    # else if root.val is greater than R
    else:
      # perform no addition, and return a call to self.rangeSumBST with args root.right, L, and R
      return self.rangeSumBST(root.left, L, R)
