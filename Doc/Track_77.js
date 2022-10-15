/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    // const numbers =Array.from({length:n},(_,i)=>i+1);
    // let size = numbers.length;
    // let count = 0;
    let result = [];
    function backeTrack(index,current){
         console.log(index)
        if(current.length===k){
            result.push([...current])
             console.log('in')
        }
        for(let i = index; i<=n;i++){
           
            current.push(i);
            backeTrack(i+1,current);
            current.pop();
        }
        
    }
    backeTrack(1,[]);
    return result
};