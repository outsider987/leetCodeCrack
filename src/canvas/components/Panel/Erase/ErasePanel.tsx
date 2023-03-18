import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Tools } from '~/canvas/ImageEditor/Tool';
import EraseTool from '~/canvas/ImageEditor/Tool/Erase';
import NumberInput from '~/components/NumberInput';
import Slider from '~/components/Slider';
import { useGlobalContext } from '~/store/context';
import { useGlobalStorage } from '~/utils/storage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tool: EraseTool;
}

const ErasePanel = (props: Props) => {
  const { tool } = props;
  const { globalState, setGlobalState } = useGlobalContext();

  const { eraseSize } = globalState || {};
  const currentSize = eraseSize || tool.size;

  const [size, setSize] = useState(currentSize);

  useEffect(() => {
    tool.setSize(size);
  }, [size]);

  const handleSetSize = (newSize) => {
    setSize(newSize);
    tool.setSize(newSize);
    setGlobalState({ ...globalState, eraseSize: newSize });
  };

  return (
    <div className="flex-1 flex-col space-y-2">
      <Slider size={size} setSizeCallBack={handleSetSize} max={1000}></Slider>
      <NumberInput max={1000} value={size} setValue={handleSetSize}></NumberInput>
    </div>
  );
};

export default ErasePanel;
