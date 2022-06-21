let s = 'dvdf';

var lengthOfLongestSubstring = function (s) {
    let maxLen =0;
    let current_string = '';
    
    for (let index = 0; index < s.length; index++) {
        let char = s.charAt(i);
        let sub_string =current_string.indexOf(char);
        if(sub_string!==-1)
        {
            current_string= current_string.substring(pos+1);
        }
        current_string+=char;
        maxLen = Math.max(maxLen,sub_string.length)
        
    }
    return maxLen;

    // var max = 0, current_string = "", i, char, pos;

    // for (i = 0; i < s.length; i += 1) {
    //     char = s.charAt(i);
    //     pos = current_string.indexOf(char);
    //     if (pos !== -1) {
    //         // cut "dv" to "v" when you see another "d"
    //         current_string = current_string.substr(pos + 1);
    //     }
    //     current_string += char;
    //     max = Math.max(max, current_string.length);
    // }
    // return max;
};

console.log(lengthOfLongestSubstring(s));
// lengthOfLongestSubstring(s);