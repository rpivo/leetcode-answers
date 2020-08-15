function getLonelyNodes(root: TreeNode | null): number[] {
  const result: number[] = [];
  const search = (tree = root) => {
    if (tree?.left) {
      if (tree?.right === null) result.push(tree.left.val);
      search(tree.left);
    }
    if (tree?.right) {
      if (tree?.left === null) result.push(tree.right.val);
      search(tree.right);
    }
  };
  search(root);
  return result;
};