/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

 var allPossibleFBT = function(n) {
    const ans = [];
  if (n % 2 ===0 ) return ans;
  if (n ===1){
      ans.push(new TreeNode(0));
      return ans
  }

  for (var i = 1; i <n; i+=2) {

    for (let ltree of allPossibleFBT(i)) {
      for (let rtree of allPossibleFBT(n-i-1)) {
        const root = new TreeNode(0);
        root.left = ltree;
        root.right = rtree;
        ans.push(root);
      }
    }
  }
  return ans;
};