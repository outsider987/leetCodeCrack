/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    
    let left = 1;
    let right = Math.max(...piles);
    
    function checkCondition(piles, H, mid) {
        let h = 0;
        for (let pile of piles) {
            h += Math.ceil(pile / mid);
           
        }

        return h <= H;
    }
    
    while(left <right)
    {
        let mid=left+Math.floor((right-left)/2);
        if(checkCondition(piles,h,mid)){
            right = mid;
        }
        else
            left = mid + 1;
    }
    return left
    
};