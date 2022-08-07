import React, { useEffect, useState, useRef, useCallback, memo } from 'react';
import Button from '~/components/Button';
import LayoutDivider from '~/components/LayoutDivider';
import SortBox from '~/components/SortBox';
import LayoutSort from '~/layouts/LayoutSort';

export interface BoxState {
  sort_index: number;
  value: number;
}
const MemoChild = memo(LayoutSort);
const QuickSort = () => {
  console.log('QuickSort Rerender');
  const refArray = useRef<number[]>(getRandomNoDuplicateArray(80));
  const [tempArray, setTempArray] = useState(refArray.current);
  const BoxDatas = useCallback(() => refArray.current, [refArray.current]);

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
    desktop: () => (
      <LayoutSort
        title="QuickSort"
        isDesktop={true}
        boxDatas={refArray.current}
        onStart={onStart}
      />
    ),
    mobile: () => (
      <LayoutSort
        title="QuickSort"
        isDesktop={false}
        boxDatas={refArray.current}
        onStart={onStart}
      />
    ),
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
