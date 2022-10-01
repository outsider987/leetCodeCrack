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
    var isSymmetric = function(root) {
        if(root == null || (root.right == null && root.left == null) ){
             return true;
         }
    
         // 先將right反轉，再比對是否相等
         root.right = revertTree(root.right);
         return isSameTree(root.left,root.right);
    
         // 反轉樹
         function revertTree(node){
             if(node == null || node.left == null && node.right == null){
                 return node;
             }
             var temp = revertTree(node.left);
             node.left = revertTree(node.right);
             node.right = temp;
             return node;
         }
    
    
         // 比對是否相等
         function isSameTree(left,right){
             if(left == null && right== null){
                 return true;
             }
    
             if(left == null && right != null || right == null &&left != null){
                 return false;
             }
    
             if(left.val != right.val){
                 return false;
             }
    
             return isSameTree(left.right, right.right) && isSameTree(left.left, right.left)
         }


      

    };