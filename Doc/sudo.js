/*m=正整數,  [...n] n都是正整數 , 
ex:[2,4,6,8,10]
算出所有取法大於m
*/
let m = 0;
let ex = [2, 4, 6, 8, 10];

function reduceArraryNumber(X) {
    let count = 0;
    let rightIndex = X.length;
    const maxIndex = X.length;

    // 算出所有取法大於m
    for (let index = 0; index < X.length; index++) {
        let tempArray = X.slice(index);
        console.log(`round:${index} tempArray:${tempArray}`);
        console.log(`right:${rightIndex}`);
        while (rightIndex > index) {
            let childTempArray = X.slice(index, rightIndex);
            if (index === rightIndex || childTempArray.length === 0) {
                break;
            }
            const reduceValue = childTempArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            if (reduceValue > m) {
                count += 1;
                console.log(`round:${index},reduceValue:${reduceValue}
                array:${childTempArray}, count:${count}`);
            }

            rightIndex -= 1;
            if (index === rightIndex || childTempArray.length === 0) {
                console.log(`done, round:${index} had ${count}count`);

                rightIndex = maxIndex;
                console.log(`done,right:${rightIndex}`);
                break;
            }
        }
    }

    console.log(`total:${count}`);
    return count;
}
reduceArraryNumber(ex);
