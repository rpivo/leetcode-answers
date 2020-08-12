// create mutable variable thats an array of numbers called ret
let ret: number[];
// declare function getLonelyNodes that takes in an argument called root that's either a TreeNode 
// or null, and returns an array of numbers
function getLonelyNodes(root: TreeNode | null): number[] {
  // set ret to a new Array
  ret = new Array();
  // call function getNodes with boolean value false as the first argument and 
  // root<TreeNode | null> as the second argument
  getNodes(false, root);
  return ret;
};

// declare function getNodes that takes in a boolean called isOneChildParent and an argument 
// called node that's either a TreeNode or null
function getNodes(isOneChildParent: boolean, node: TreeNode | null) {
  // if the value of node is null, return
  if (node === null) return;
  // if isOneChildParent is true, and the node is not null, push node.val to ret
  if (isOneChildParent && node !== null) ret.push(node.val);
  // create mutable variable bLeft that's a boolean. if node.left is equal to either undefined or 
  // null, then bLeft is false. else, it's true
  let bLeft = node.left === undefined || node.left === null ? false : true;
  // create mutable variable bRight that's a boolean. if node.right is equal to either undefined
  // or null, then bRight is false. else, it's true
  let bRight = node.right === undefined || node.right === null ? false : true;
  // call getNodes for each of node.left and node.right. For the value of isOneChildParent, we check to see if the left and right values are not equal to each other. If they're not equal to each other, then isOneChildParent is true.
  getNodes(bLeft !== bRight, node.left);
  getNodes(bLeft !== bRight, node.right);
}