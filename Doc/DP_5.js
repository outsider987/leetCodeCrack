/**
//  * @param {string} s
//  * @return {string}
//  */
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
let  s = "babad";




var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    var len = s.length;
    var num = 0;
    for (var i = 0; i < len; i++) {
      num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
      if (num > end - start) {
        start = i - Math.floor((num - 1) / 2);
        end = i + Math.floor(num / 2);
      }
    }
    return s.slice(start, end + 1);
  };
  
  var expandAroundCenter = function (s, left, right) {
    var l = left;
    var r = right;
    var len = s.length;
    while (l >= 0 && r < len && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  };
  longestPalindrome(s);