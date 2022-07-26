/*
Koko loves to eat bananas. There are n piles of bananas, 
the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour,
she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, 
she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.


Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

*/
const piles = [3, 6, 7, 11];
const h = 8;

function checkCondition(piles, H, mid) {
    let h = 0;
    for (let pile of piles) {
        h += Math.ceil(pile / mid);
    }
    
    return h <= H;
}

function findMinEatSpeed(piles, h) {
    let right = Math.max(...piles);
   
    let left = 1;
    // binary search 
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
      
        if (checkCondition(piles, h, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
console.log(findMinEatSpeed(piles, h));

