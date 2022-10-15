/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let result =[];
    if(!root)
        return result;
    // console.log(root.children)
    const queque = [root];
    while(queque.length){
        let size = queque.length;
        let level = [];
        while(size--){
            let node = queque.shift();
            level.push(node.val);
            for(let i=0; i<node.children.length;i++){
                    queque.push(node.children[i])            
            }
        }
        result.push(level)
    }
    // console.log(result);
    return result
    
    
};