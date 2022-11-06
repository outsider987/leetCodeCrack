var maxSubArray = function(nums) {
    let arr = [];
    arr[0] = nums[0]; // 子序列必須至少包含一個元素
    let max = arr[0];
    for(let i = 1; i < nums.length; i++) {
        arr[i] = Math.max(arr[i - 1] + nums[i], nums[i]);
        max = Math.max(arr[i], max);
    }
    return max;
};


// greedy
var maxSubArray = function(nums) {
    let max = -Infinity; // 當前最大子序列的總和
    let sum = 0; // 當前總和
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        
        if (sum < 0) sum = 0;
    }
    
    return max;
};