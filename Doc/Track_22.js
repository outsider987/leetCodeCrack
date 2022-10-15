/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];
    function dfs(i,n,slate,oCount,cCount){
        if(oCount>n)return ;
        if(cCount>oCount) return ;
        
        if(i===n*2){
            result.push(slate.join(''));
            return ;
        }
        
        slate.push('(');
        dfs(i+1,n,slate,oCount+1,cCount);
        slate.pop();
        
        slate.push(')');
        dfs(i+1,n,slate,oCount,cCount+1);
        slate.pop();
    }
    dfs(0,n,[],0,0);
    return result;
};