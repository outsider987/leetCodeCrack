/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result =[];
    function dfs(i,nums,slate){
        if(slate.length===nums.length)
        {
           
            result.push([...slate]);
            return ;
        }
            
        for (let j = 0; j < nums.length; j++) {
            if(slate.includes(nums[j])) continue;
            slate.push(nums[j]);
           
            dfs(j+1,nums,slate);
            slate.pop();
        }   
    }
    dfs(0,nums, [])
    return result;
};