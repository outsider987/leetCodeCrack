var canFinish = function (numCourses, prerequisites) {
  let degree = new Array(numCourses).fill(0);
  let map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    degree[prerequisites[i][0]]++;
    map.has(prerequisites[i][1])
      ? map.get(prerequisites[i][1]).push(prerequisites[i][0])
      : map.set(prerequisites[i][1], [prerequisites[i][0]]);
  }
  let count = 0;
  let q = new Array();
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] == 0) q.push(i);
  }
  while (q.length) {
    let top = q.shift();
    count++;
    let key = map.get(top);
    if (key && key.length) {
      for (let i = 0; i < key.length; i++) {
        degree[key[i]]--;
        if (degree[key[i]] == 0) {
          q.push(key[i]);
        }
      }
    }
  }
  return count == numCourses;
};

var canFinish2 = function (numCourses, prerequisites) {
    const degrees = Array(numCourses).fill(0),
    map = Array(numCourses),
    queue=[];
    for (let i = 0; i < prerequisites.length; i++) {
        const [a,b] = prerequisites[i];
        
        degrees[a]++;
        console.log(map)
        console.log(a)
        console.log(b)
        if(map[b]) map[b].push(a)
        else map[b] = [a]
        
    }
    console.log(map)
    console.log(degrees);
    for(let i= 0; i<numCourses; i++){
        if(degrees[i]===0) queue.push(i);
    }
    console.log(queue);
    let count = 0;
    while(queue.length){
        const cur = queue.shift(),
        list= map[cur];
        count++;
        if(list){
            for (let i = 0; i < list.length; i++) {
                degrees[list[i]]--;
                if (degrees[list[i]] == 0) {
                    queue.push(list[i]);
                  }
            }
        }
    }
    return count == numCourses;
   };
   
   canFinish2(2,[[1,0]])
//    [1,0],[0,1]