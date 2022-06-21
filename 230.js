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
 * @param {number} k
 * @return {number}
 */

//  var kthSmallest = function(root, k) {
//     let stack = [];
//     while (stack.length > 0 || root!==null)
//         {
//             if(root!== null){
//                 stack.push(root);
//                root = root.left
//             }
//             else{
//                 k--;
//                 root = stack.pop();
//                 if(k===0){
//                     return root.val
//                 }
//                 root = root.right
//             }
//         }
//     return -1;
// };

var kthSmallest = function (root, k) {
    let stack = [];
    DFS(root);
    return stack[k - 1];
    function DFS(node) {
        if (!node || stack.length > k) return null;

        DFS(node.left);
        stack.push(node.val);
        DFS(node.right);
    }
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
