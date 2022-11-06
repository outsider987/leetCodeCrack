/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];
    function dfs(cur,left,right){
        if(cur.length===2*n ){
            result.push(cur);
            return ;
        }
        if(left<n){
            dfs(cur+'(',left+1,right)
        }
        if(right<left){
            dfs(cur+')',left,right+1)
        }
  
    }
    dfs('',0,0);
    return result;
};