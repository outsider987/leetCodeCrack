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
 var minDepth = function(root) {
    if(root ===null)
        return 0;
    const queue = [root];
    const result = [];
    let count = 0;
    while(queue.length>0){
        let size = queue.length;
        const level = [];
        count++;
        while(size--){
            const node =queue.shift();
            level.push();
            if(node.left) 
                queue.push(node.left)
            
            if(node.right) 
                queue.push(node.right)
            if(!node.right && !node.left)
                return count;
        }
        
    }
  
    
    
};