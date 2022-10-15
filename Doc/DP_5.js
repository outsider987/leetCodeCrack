/**
 * @param {string} s
 * @return {string}
 */
const getDrome=(left,right,s)=>{
    while(left >=0 && right< s.length){
        if(s[left]!== s[right]) break;
        left--;
        right++;
    }
    return [left+1,right]
}

 var longestPalindrome = function(s) {
  
    let max = [0,1];
    for (let i = 0; i < s.length; i++) {
        let even = getDrome(i-1,i,s);
        let old = getDrome(i-1,i+1,s);
        let curMax = old[1] - old[0] > even[1] - even[0]? old:even;

        max = max[1] - max[0] > curMax[1] - curMax[0] ?max :curMax;
    }
    return s.slice(max[0],max[1])

};