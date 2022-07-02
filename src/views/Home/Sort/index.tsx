import React, { useEffect, useState } from 'react';
import SortBox from '~/components/SortBox';

const Sort = () => {
  let randomArray: any[] = [];

  const getRandomNoDuplicateArray = (maxValue: number) => {
    let result: number[] = [];
    while (result.length < maxValue) {
      const randomValu = Math.floor(Math.random() * maxValue) + 1;
      if (result.indexOf(randomValu) === -1) result.push(randomValu);
    }
    return result 
  };
  randomArray = getRandomNoDuplicateArray(99);

  

  

  return (
    <div className='flex flex-row items-end max-h-[94vh]'>
      {randomArray.map((item, index) => (
        <SortBox height={item} width={2} />
      ))}
    </div>
  );
};
export default Sort;
