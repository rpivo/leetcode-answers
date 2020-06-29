/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class Codec {
  constructor() {}
  
  encode = function(root) {
    // if root is effectively not a Node
    if (root === null) return null;
    // create a new TreeNode that will eventually be returned. the first value is root.val
    const result = new TreeNode(root.val);
    // if root has children, pull off the first child and set result.left to this child
    // this will be run once per row of children
    if (root.children.length) result.left = this.encode(root.children.shift());
    // create a reference variable that points at result.left;
    let current = result.left;
    // while there are still children on root.children
    while (root.children.length) {
      // get the 'right' property on current and set it to the first child that can be pulled off
      // of root.children. This will add the rest of root.children as .right nodes on current.
      current.right = this.encode(root.children.shift());
      // once we add the new node, we then update current to point to current.right.
      current = current.right;
    }
    return result;
  }

  decode = function(root) {
    // if root is effectively not a TreeNode
    if (root === null) return null;
    // create a new root Node that sets its val to root.val, and creates an empty children array.
    const result = new Node(root.val, []);
    // create a reference variable that points to root.left.
    let current = root.left;
    // while the reference variable 'current' is not null
    while (current !== null) {
      // push a new child to result.children. to get this child we call decode with current,
      // which will start as root.left. After the first pass, 'current' becomes current.right.
      result.children.push(this.decode(current));
      // after initial pass, set current to current.right since current.right holds the
      // remaining children.
      current = current.right;
    }
    return result;
  }
}

/*
* Your Codec object will be instantiated and called as such:
* codec = Codec()
* codec.decode(codec.encode(root))
*/