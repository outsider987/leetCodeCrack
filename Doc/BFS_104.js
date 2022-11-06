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
 var maxDepth = function(root) {
    if(root ===null)
        return 0;
    let count = 0;
    const queue = [root];
     while (queue.length){
         let len =queue.length;
         count++;
         while(len--){
             let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
         }
     }
    return count
};