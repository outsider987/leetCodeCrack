import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Tools } from '~/canvas/ImageEditor/Tool';
import CropTool from '~/canvas/ImageEditor/Tool/Crop';
import EraseTool from '~/canvas/ImageEditor/Tool/Erase';
import Button from '~/components/Button';
import NumberInput from '~/components/NumberInput';
import Slider from '~/components/Slider';
import { useGlobalContext } from '~/store/context';
import { useGlobalStorage } from '~/utils/storage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tool: CropTool;
}

const CropPanel = (props: Props) => {
  const { tool } = props;
  const { globalState, setGlobalState } = useGlobalContext();

  const { eraseSize } = globalState || {};
  const currentSize = eraseSize || tool.size;

  const [size, setSize] = useState(currentSize);

  useEffect(() => {
    tool.draw();
  }, [tool]);

  const onConfirm = () => {
    tool.onConfirm();
  };

  return (
    <div className="flex-1 flex-col space-y-2">
      <Button onClick={onConfirm}>confirm</Button>
    </div>
  );
};

export default CropPanel;
