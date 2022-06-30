/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const k = 3;
const nums = [3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11];

var isPossibleDivide = function (nums, k) {
    const map = new Map();

    nums.sort((a, b) => a - b);

    for (const num of nums) {
        // console.log(num);
        // console.log(map.get(num) || 0) 
        map.set(
            num,
            (map.get(num) || 0) + 1,
        );
       
    }
    console.log(map);
    for (let [key, ] of map) {
        if (!map.get(key)) {
            continue;
        }

        let count = map.get(key);
        const targetKey = key + k - 1;
        // console.log(targetKey)
        while (key <= targetKey) {
            if (!map.has(key) || map.get(key) < count) {    
                return false;
            }
            map.set(key, map.get(key) - count);
            // console.log(map);
            // console.log(key);
            ++key;
        }
    }

    return true;

};
isPossibleDivide(nums, k);
