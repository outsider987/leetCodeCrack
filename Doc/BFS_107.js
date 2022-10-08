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

var levelOrderBottom = function(root) {
    if(root === null)
        return [];
    
    const queue = [root];
    const result = [];
    let count =0;
    while(queue.length>0){
        let size = queue.length;
        result.push(queue.map(node=>node.val));
        count++;
        
        while(size--){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
              
    }
    result.reverse();
    return result
    
    
};