/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let map = {};
  let level = 0;
  let is_bst_valid = true;
  let prev_node = new TreeNode(-Infinity, null, null);
  const dfs = (node, level) => {
    if (!node) return;

    dfs(node.left, level + 1);
    if (node.val <= prev_node.val) return (is_bst_valid = false);
    prev_node = node;
    dfs(node.right);
  };
  dfs(root);
  return is_bst_valid;
};
