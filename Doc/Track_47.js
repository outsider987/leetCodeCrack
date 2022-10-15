var permuteUnique = function(nums) {
    let result =[];
     
     function dfs(i,nums){
         if(i===nums.length)
         {
            
             result.push([...nums]);
             return ;
         }
         const map={};
         for (let j = i; j < nums.length; j++) {
             if(map[nums[j]] ) continue;
             map[nums[j]]=true;
            
             [nums[i],nums[j]]=[nums[j],nums[i]]
             dfs(i+1,nums);
             [nums[i],nums[j]]=[nums[j],nums[i]]
          
         }   
     }
     dfs(0,nums)
     return result;
 };