import React, { useEffect, useRef } from 'react';
import BreakoutCanvas from '~/components/Chart/Breakout';

const Breakout = () => {
  return (
    <div className="m-auto flex w-full flex-col items-center justify-center">
      <BreakoutCanvas className="h-[50vh] w-[65vw]" />
    </div>
  );
};

export default Breakout;
