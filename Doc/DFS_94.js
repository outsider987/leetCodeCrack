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
 * @return {number[]}
 */
    
 var inorderTraversal = function(root) {
    let result =[];
    const travse = (node)=>{
        if(node=== null) return ;
        if(node.left) travse(node.left);
        console.log(result);
        result.push(node.val);
        if(node.right) travse(node.right)
    
        
    }
    travse(root)
    return result 
    
};