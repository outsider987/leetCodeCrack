import React, { useEffect, useState, useRef, useCallback } from 'react';
import Button from '~/components/Button';
import LayoutDivider from '~/components/LayoutDivider';
import SortBox from '~/components/SortBox';
import LayoutSort from '~/layouts/LayoutSort';
import { getRandomNoDuplicateArray, sleep } from '~/utils/regular';

export interface BoxState {
  sort_index: number;
  value: number;
}

const MergeSort = () => {
  console.log('Merge Rerender');
  const refArray = useRef<number[]>(getRandomNoDuplicateArray(80));
  const [tempArray, setTempArray] = useState(refArray.current);

  const merge = async (left: number[], right: number[]) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let pivot = refArray.current.findIndex((item) => item === left[0]);
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    const t = result
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));

    refArray.current = replaceOrignalPartArray(refArray.current, pivot, t);
    setTempArray(refArray.current);
    await sleep(100);
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
    pivot: number,
    changeArray: number[]
  ): number[] => {
    const temp = new Array(...orgArray);
    temp.splice(pivot, changeArray.length, ...changeArray);
    return temp;
  };
  const content = {
    desktop: () => (
      <LayoutSort
        title="MergeSort"
        isDesktop={true}
        boxDatas={refArray.current}
        onStart={onStart}
      />
    ),
    mobile: () => (
      <LayoutSort
        title="MergeSort"
        isDesktop={false}
        boxDatas={refArray.current}
        onStart={onStart}
      />
    ),
  };

  return <LayoutDivider {...content} />;
};
export default MergeSort;
