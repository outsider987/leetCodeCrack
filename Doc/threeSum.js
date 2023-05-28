/**
 *  Frank thank you so much give me one more chance  
 *
 */
const input = [2, 7, 11, 15, 8, 2, 21]
const target = 30;



function twoSum(input, target) {

    const map = new Map();
    const result = [];

    for (let i = 0; i < input.length; i++) {
        const curValue = input[i];
        const complement = target - curValue;



        if (map.has(complement)) {
            result.push([complement, curValue])
        }
        else {
            map.set(curValue, i)
        }


    }
    return result


}

function threeSum(input, target) {
    const result = [];
    const seen = new Set();

    for (let i = 0; i < input.length - 2; i++) {
        const curValue = input[i];
        const remainingTarget = target - curValue;
        const twoSumPairs = twoSum(input.slice(i + 1), remainingTarget);

        for (const pair of twoSumPairs) {
            const triplet = [curValue, ...pair].sort((a, b) => a - b);
            const key = triplet.join(',');

            if (!seen.has(key)) {
                result.push(triplet);
                seen.add(key);
            }
        }
    }

    return result;

}

console.log(threeSum(input, target));