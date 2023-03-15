import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Tools } from '~/canvas/ImageEditor/Tool';
import EraseTool from '~/canvas/ImageEditor/Tool/Erase';
import Slider from '~/components/Slider';
import { useGlobalStorage } from '~/utils/storage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tool: EraseTool;
}

const ErasePanel = (props: Props) => {
  const { tool } = props;
  const { getGlobalStorage } = useGlobalStorage();

  const globalState = getGlobalStorage();
  const { eraseSize } = globalState || {};
  const currentSize = eraseSize || tool.size;

  const [size, setSize] = useState(currentSize);

  useEffect(() => {
    tool.setSize(size);
  }, [size]);

  return (
    <div>
      <Slider size={size} setSizeCallBack={setSize} max={1000}></Slider>
    </div>
  );
};

export default ErasePanel;
