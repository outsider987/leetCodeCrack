import React, {  useState } from 'react';
import Button from '../components/Button';
import SortBox from '../components/SortBox';

interface Props {
  boxDatas: [],
  onStart:()=>void
  width:number
}

const D_Box: React.FC<Props> = (props) => {
  return (
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
  </div>
  );
};
export default D_Box;
