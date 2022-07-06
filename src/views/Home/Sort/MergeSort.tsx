import React, { useEffect, useState, useRef, useCallback } from 'react';
import Button from '~/components/Button';
import SortBox from '~/components/SortBox';

export interface BoxState {
  sort_index: number;
  value: number;
}

const MergeSort = () => {
  const refArray = useRef<number[]>(getRandomNoDuplicateArray(99));
  const [tempArray, setTempArray] = useState(refArray.current);

  const merge = async (left: number[], right: number[]) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let pivot = refArray.current.findIndex((item)=>item===left[0])
    console.log(pivot);
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    const t =result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); 
 
    refArray.current = replaceOrignalPartArray(refArray.current,pivot, t);
    setTempArray(refArray.current);
    await sleep(200);
    // console
    return t;
  };

  const mergeSort = async (array: number[]): Promise<number[]> => {
    if (array.length === 1) {
      return array;
    }
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);


    // refArray.current = replaceOrignalPartArray(refArray.current, right);
    // setTempArray(refArray.current);
    // await sleep(100);


    return merge(await mergeSort(left), await mergeSort(right));
  };
  const onStart = async () => {
    setTempArray(await mergeSort(refArray.current));
  };
  const replaceOrignalPartArray = (
    orgArray: number[],
    pivot:number,
    changeArray: number[]
  ): number[] => {
    const temp = new Array(...orgArray);
    temp.splice(
        pivot ,
      changeArray.length,
      ...changeArray
    );
    return temp;
  };

  return (
    <div className="flex flex-row">
      <span className=" flex flex-col font-bold text-lg text-white">
        <span>MergeDort</span>
        <span>count:{tempArray.length}</span>
      </span>
      <div className="w-full flex items-end mr-2 mb-2">
        <Button onClick={onStart}> start</Button>
      </div>

      <div className="flex w-full flex-row items-end max-h-[94vh]">
        {tempArray.map((item, index) => (
          <SortBox key={index} height={item} width={2} />
        ))}
      </div>
    </div>
  );
};
export default MergeSort;

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
function getRandomNoDuplicateArray(maxValue: number): number[] {
  let result: any = [];
  while (result.length < maxValue) {
    const randomValu = Math.floor(Math.random() * maxValue) + 1;
    if (result.indexOf(randomValu) === -1) result.push(randomValu);
  }
  return result;
}
