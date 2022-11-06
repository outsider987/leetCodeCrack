/*
input : node
function Tree(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
}
*/

function TreeNode(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
}

function distribute(root){
    
    let countTotalNode =0;
    let coinTotal = 0;
    const queue= [root];
    const map = {};
    let level=0;
    while(queue.length){
        let len = queue.length;
        level++;
        while(len--){
            const node =queue.shift();
            
            if(node.val!==0){
                coinTotal+=node.val;
            }
            countTotalNode++;
            if(node.left) 
            {
               
                queue.push(node.left);
            } 
            
            if(node.right) 
            {
                
                queue.push(node.right);
            }
        }
    }
    const multiply =coinTotal/countTotalNode;

    let count =0;
    const dfs=(root,level)=>{
        if(root===null)
        {
            return;
        }
        
        if(root.val - multiply ===0)
            return 
        root.val--;
        count++;
        if(root.left)
            dfs(root.left,level+1)

        if(root.right)
            dfs(root.right,level+1)
        
    }
    dfs(root,0)
    

}