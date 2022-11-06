/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows<1) return [];
    if(numRows===1) return [[1]];
    
    const triangle = [[1]];
    for(let i =1; i<numRows; i++){
        let prevRows = triangle[i-1];
        const curRows = [];
        curRows.push(1)
        for(let j = 1; j<prevRows.length;j++){
            curRows[j]=prevRows[j]+ prevRows[j-1];
        }
        curRows.push(1);
        triangle.push(curRows);
        
    }
    return triangle
};