var canFinish = function (numCourses, prerequisites) {
    const nums = Array(numCourses).fill(0),
 map = Array(numCourses),
 queue=[];
 for (let i = 0; i < prerequisites.length; i++) {
     const [a,b] = prerequisites[i];
     nums[a]++;
    
     if(map[b]) map[b].push(a)
     else map[b] = [a]
     
 }

 for(let i= 0; i<numCourses; i++){
     if(nums[i]===0) queue.push(i);
 }
 let count = 0;
 while(queue.length){
     const cur = queue.shift(),
     list= map[cur];
     count++;
     if(list){
         for (let i = 0; i < list.length; i++) {
             nums[list[i]]--;
             if (nums[list[i]] == 0) {
                 queue.push(list[i]);
               }
         }
     }
 }
 return count == numCourses;

};