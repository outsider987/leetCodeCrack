
/*
EX: output
[
  [
    { id: 1, to: 'bob' },
    { id: 2, to: 'jane' },
    { id: 4, to: 'john' },
    { id: 5, to: 'amber' },
    { id: 7, to: 'carry' },
  ],
  [
    { id: 3, to: 'bob' },
    { id: 6, to: 'jane' },
    { id: 8, to: 'amber' },
  ],
  [{ id: 9, to: 'bob' }],
];

*/

const data = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'jane' },
    { id: 3, name: 'bob' },
    { id: 4, name: 'john' },
    { id: 5, name: 'amber' },
    { id: 6, name: 'jane' },
    { id: 7, name: 'carry' },
    { id: 8, name: 'amber' },
    { id: 9, name: 'bob' },
    { id: 10, name: 'bob' },
  ];
  
  
  
  function getBatch() {
    let mapNameCount = new Map();

    const  Batchs = [];
    // count name number 
    for( const item of data)
    {
        mapNameCount.set(item.name, (mapNameCount.get(item.name) || 0) +1)
       
    }
    
    // sort DESC
    // mapNameCount = new Map([...mapNameCount.entries()].sort((a, b) => b[1] - a[1]));
    
    // console.log(Math.max(...mapNameCount.values()))
    
    
    // name will be target to insert to Batchs array
    for (let [key] of mapNameCount)
    {
        const dataByNameCollect = data.filter((item)=>item.name===key)
        
        for(const [index,batchs] of dataByNameCollect.entries())
        {
            if(Batchs[index] === undefined)
                Batchs.push([batchs])
            else 
             Batchs[index].push(batchs)
        }
      
       
    }
    // console.log(Batchs);
  }
  getBatch();
  