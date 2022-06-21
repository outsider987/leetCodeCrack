let numsValue = [3, 2, 1, 5, 6, 4];
let k2 = 2;
let findMaxvalue = (nums, k) => {
    return quickSelect(nums,0,nums.length-1,k);
};
numsValue.concat(numsValue);
/** 
 * @param {number[]} nums 
 */
let quickSelect = function (nums, left, right, k) {
    var le = left;
    var ri = right;
    var mid = nums[right];
    
 
    while (le < ri) {
        if (nums[le++] > mid) swap(nums, --le, --ri);
    
    }

    swap(nums, le, right);
    
       console.log(`le:${le}`);
       console.log(`k:${k}`);
    
    if (len  === k-1) return nums[le];
    else if (len < k - 1) return quickSelect(nums, left, le - 1, k - len - 1);
    else return quickSelect(nums, le + 1, right, k);
};
let swap = (nums, smaller, larger) => {
    
    let temp = nums[smaller];
    nums[smaller] = nums[larger];
    nums[ larger ] = temp;
    
};
findMaxvalue(numsValue, k2)