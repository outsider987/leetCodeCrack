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
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    let maxDepth = 0
   const depthSum = {}
 
   const traverse = (node, depth = 0) => {
     if (!node) return
 
     depthSum[depth] = (depthSum[depth] || 0) + node.val
     maxDepth = Math.max(maxDepth, depth)
     traverse(node.left, depth + 1)
     traverse(node.right, depth + 1)
   }
 
   traverse(root)
 
   return depthSum[maxDepth]
 };