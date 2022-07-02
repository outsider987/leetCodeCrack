import React, { useEffect, useState } from 'react';

interface Props {
  height: number,
  width:number
}

const SortBox: React.FC<Props> = ({ height ,width}) => {
  return (
    <div
      className="border-black border-2 bg-gray-300"
      style={{ height: `${height}vh`,width:`${width}vw` }}
    ></div>
  );
};
export default SortBox;
