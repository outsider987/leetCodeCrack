/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let result = []
     
     let dic = {
         '2': ['a', 'b', 'c'],
         '3': ['d', 'e', 'f'],
         '4': ['g', 'h', 'i'],
         '5': ['j', 'k', 'l'],
         '6': ['m', 'n', 'o'],
         '7': ['p', 'q', 'r', 's'],
         '8': ['t', 'u', 'v'],
         '9': ['w', 'x', 'y', 'z']
     }
     function dfs (digits,str){
         if(digits===''){
             result.push(str);
         }
         else{
             for (var i = 0; i < dic[digits[0]].length; i++) {
                 // 扣掉2之後的字串3與a遞迴
                 dfs(digits.substr(1), str + dic[digits[0]][i]);
             }
         }
             
     }
     if (digits.length !== 0) {
         // 呼叫遞迴
         dfs(digits,'');
     }
    
     return result
 };