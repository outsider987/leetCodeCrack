/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        // Keep track of the farthest jump
        newMax = Math.max(newMax, i+nums[i]);
        // When we get to the index where we had our previous farthest jump, we increase our jump count by 1
          console.log(oldMax);
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
          
        }
    }
    return jump;
};