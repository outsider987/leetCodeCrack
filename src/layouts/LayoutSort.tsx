import React, { useState } from 'react';
import Button from '../components/Button';
import SortBox from '../components/SortBox';

interface Props {
  boxDatas: number[];
  onStart: () => void;
  isDesktop: boolean;
}

const LayoutSort: React.FC<Props> = (props) => {
    
  if (props.isDesktop) {
    <div className="flex flex-row">
      <span className=" flex flex-col font-bold text-lg text-white space-y-3 mr-2">
        <span>MergeDort</span>
        <span>count:{props.boxDatas.length}</span>
        <div className="w-full flex items-end mr-2 mb-2">
          <Button onClick={props.onStart}> start</Button>
        </div>
      </span>

      <div className="flex w-full flex-row items-end max-h-[94vh]">
        {props.boxDatas.map((item, index) => (
          <SortBox key={index} height={item} width={2} />
        ))}
      </div>
    </div>;
  }
  return (
    <div className="flex flex-col">
      <div className=" flex flex-row font-bold text-lg text-white justify-around">
        <span>QickSort</span>
        <span>count:{props.boxDatas.length}</span>
        <div className=" flex items-end mr-2 mb-2">
          <Button onClick={props.onStart}> start</Button>
        </div>
      </div>

      <div className="flex w-full flex-row items-end max-h-[94vh]">
        {props.boxDatas.map((item, index) => (
          <SortBox key={index} height={item * 0.9} width={2} />
        ))}
      </div>
    </div>
  );
};
export default LayoutSort;
