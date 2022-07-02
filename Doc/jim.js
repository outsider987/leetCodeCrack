const processBatch = (arrayOfEmails) => {
    const ref = {}
    const finalBatch = []
  
    for(let email of arrayOfEmails) {
      // if email never exist, we init it with 0 (batch number)
      if (ref[email.to] === undefined) {
        ref[email.to] = 0
      } else {
        // if exist we record it to the next batch
        ref[email.to]++
      }
  
      // make sure the new batch exist
      if (ref[email.to] > finalBatch.length - 1) {
        finalBatch.push([])
      }
  
      finalBatch[ref[email.to]].push(email)
    }
  
    return finalBatch
  }
  
  const data = [
    { id: 1, to: 'bob' },
    { id: 2, to: 'jane' },
    { id: 3, to: 'bob' },
    { id: 4, to: 'john' },
    { id: 5, to: 'amber' },
    { id: 6, to: 'jane' },
    { id: 7, to: 'carry' },
    { id: 8, to: 'amber' },
    { id: 9, to: 'bob' },
  ]
  
  console.log(processBatch(data))
