/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    if(n === 1 ) return 1
let pre = 1,cur = 1
for(let i = 2; i <= n; i++){
  const temp = cur
  cur += pre
    console.log(cur)
  pre = temp
}
return cur
  
};
climbStairs(10)