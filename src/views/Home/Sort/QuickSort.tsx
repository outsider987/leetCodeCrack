import React, { useEffect, useState, useRef, useCallback } from 'react';
import Button from '~/components/Button';
import LayoutDivider from '~/components/LayoutDivider';
import SortBox from '~/components/SortBox';

export interface BoxState {
  sort_index: number;
  value: number;
}

const QuickSort = () => {
  const refArray = useRef<number[]>(getRandomNoDuplicateArray(99));
  const [tempArray, setTempArray] = useState(refArray.current);
  const onStart = async () => {
    await quickSort(refArray.current);
  };

  const quickSort = async (
    array: number[],
    length = array.length - 1,
    start = 0
  ): Promise<number[]> => {
    if (array.length < 2) return array; // base case

    let left: number[] = [];
    let right: number[] = [];
    let pivot = array[length];

    while (start < length) {
      if (array[start] < pivot) {
        left.push(array[start]);
      } else {
        right.push(array[start]);
      }

      start++;
    }

    refArray.current = replaceOrignalPartArray(refArray.current, pivot, [
      ...left,
      pivot,
      ...right,
    ]);
    setTempArray(refArray.current);
    await sleep(100);

    return [...(await quickSort(left)), pivot, ...(await quickSort(right))];
  };
  const replaceOrignalPartArray = (
    orgArray: number[],
    pivot: number,
    changeArray: number[]
  ): number[] => {
    const temp = new Array(...orgArray);
    temp.splice(
      temp.findIndex((i) => i === pivot) - (changeArray.length - 1),
      changeArray.length,
      ...changeArray
    );
    return temp;
  };

  const content = {
    desktop: () => {
      return (
        <div className="flex flex-row">
          <span className=" flex flex-col font-bold text-lg text-white space-y-3 mr-2">
            <span>MergeDort</span>
            <span>count:{tempArray.length}</span>
            <div className="w-full flex items-end mr-2 mb-2">
              <Button onClick={onStart}> start</Button>
            </div>
          </span>

          <div className="flex w-full flex-row items-end max-h-[94vh]">
            {tempArray.map((item, index) => (
              <SortBox key={index} height={item} width={2} />
            ))}
          </div>
        </div>
      );
    },
    mobile: () => {
      return (
        <div className="flex flex-col">
          <div className=" flex flex-row font-bold text-lg text-white justify-around">
            <span>QickSort</span>
            <span>count:{tempArray.length}</span>
            <div className=" flex items-end mr-2 mb-2">
            <Button onClick={onStart}> start</Button>
          </div>
          </div>
         

          <div className="flex w-full flex-row items-end max-h-[94vh]">
            {tempArray.map((item, index) => (
              <SortBox key={index} height={item*0.9} width={2} />
            ))}
          </div>
         
        </div>
      );
    },
  };

  return <LayoutDivider {...content} />;
};
export default QuickSort;

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
