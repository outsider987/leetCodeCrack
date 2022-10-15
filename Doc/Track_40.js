/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const result = [];
    
    candidates.sort((a,b)=> a > b ? -1 : 0);
  
    function dfs(i,candidates,target,slate){
        if(target<0) return;
        
        if(target===0){
            result.push(slate.slice());
        }
        
        for(let j=i; j<candidates.length;j++ ){
            if(i!==j && candidates[j] === candidates[j-1])continue;
            slate.push(candidates[j]);
            dfs(j+1,candidates,target - candidates[j],slate);
            slate.pop();
        }
    }
    dfs(0,candidates,target,[]);
    return result;
};