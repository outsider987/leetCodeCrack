import React, { useEffect, useState } from 'react';
import Button from '~/components/Button';
import SortBox from '~/components/SortBox';

export interface BoxState {
  sort_index: number;
  value: number;
}

const Js = () => {
  const [randomArray, setRandomArray] = useState<[]>([]);
  const onStart = () => {
    // setRandomArray(quickSort(randomArray));
    quickSort(randomArray)
    console.log(randomArray);
  };
  const getRandomNoDuplicateArray = (maxValue: number) => {
    let result: any = [];
    while (result.length < maxValue) {
      const randomValu = Math.floor(Math.random() * maxValue) + 1;
      if (result.indexOf(randomValu) === -1) result.push(randomValu);
    }
    return result;
  };
  useEffect(() => {
    setRandomArray(getRandomNoDuplicateArray(99));
  }, []);

  const quickSort = (array: [], length = array.length - 1, start = 0):any => {
    if (array.length < 2) return array; // base case

    let left: [] = [];
    let right: [] = [];
    let pivot = array[length];

    while (start < length) {
      if (array[start] < pivot) {
        left.push(array[start]);
      } else {
        right.push(array[start]);
      }

      start++;
    }
    setTimeout(async ()=>{
        setRandomArray(replaceOrignalPartArray(start,[...quickSort(left), pivot, ...quickSort(right)] as []))
    },1000)
    setRandomArray(replaceOrignalPartArray(start,[...quickSort(left), pivot, ...quickSort(right)] as []))
    // setRandomArray([...quickSort(left), pivot, ...quickSort(right)] as any);
    return [...quickSort(left), pivot, ...quickSort(right)] ;
  };
  const replaceOrignalPartArray = (start:number,chandArray:[]):[]=>{
    console.log(`start:${start},${randomArray.slice(start,chandArray.length-1,...chandArray )}`);
    console.log(chandArray);
    return chandArray
  }

  return (
    <div className="flex flex-row">
      <div>JS</div>
    </div>
  );
};
export default Js;
