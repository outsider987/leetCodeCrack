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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const res = [];
    if (root === null) return res;
    
    const queue = [];
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        let level = []; // store same level nodes
          console.log(size)
        while(size--) {
            // console.log(size)
            let cur = queue.shift();
            level.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        res.push(level.concat());
    }
    return res;
    
};