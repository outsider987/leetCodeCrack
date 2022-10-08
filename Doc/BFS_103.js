/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Given the root of a binary tree, return the zigzag level order 
 * traversal of its nodes' values. (i.e., from left to right,
 *  then right to left for the next level and alternate between).
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if(root==null)
        return [];

    const queue = [];
    queue.push(root);
     const result=[];
     let count =0;
    while(queue.length>0){
        let size = queue.length;
        let level = [];

        console.log(queue);
        if(count %2 ===0)
            result.push(queue.map(node=>node.val));
        else
        result.push(queue.map(node=>node.val).reverse());
        console.log(result);
        count++;
          
        while(size--){
          
            let node = queue.shift();
        

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)

        }
        // result.push(level.concat());
    }
    return result;
};