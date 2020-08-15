function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
  let result = 0;
  const search = (node = root) => {
    if (!node) return;
    if (node.val >= L && node.val <= R) result += node.val;
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  };
  search(root);
  return result;
};