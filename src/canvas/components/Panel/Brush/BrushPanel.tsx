import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import CanvasColorPicker from './ColorPicker';
import { Tools } from '~/canvas/ImageEditor/Tool';
import BrushTool from '~/canvas/ImageEditor/Tool/Brush';
import Slider from '~/components/Slider';
import { useGlobalStorage } from '~/utils/storage';
import NumberInput from '~/components/NumberInput';
import Input from '~/components/Input';
import { useGlobalContext } from '~/store/context';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tool: BrushTool;
}

const BrushPanel = (props: Props) => {
  const { tool } = props;
  const { globalState, setGlobalState } = useGlobalContext();
  const { brushColor, brushSize } = globalState || {};
  const currentColor = brushColor || tool.color;
  const currentSize = brushSize || tool.size;

  const [color, setColor] = useState(currentColor);
  const [size, setSize] = useState(currentSize);
  useEffect(() => {
    tool.setColor(color);
  }, [tool]);
  useEffect(() => {
    tool.setSize(size);
  }, [size]);

  const handleSetColor = (newColor) => {
    setColor(newColor);
    tool.setColor(newColor);
    setGlobalState({ ...globalState, brushColor: newColor });
  };

  const handleSetSize = (newSize) => {
    setSize(newSize);
    tool.setSize(newSize);
    setGlobalState({ ...globalState, brushSize: newSize });
  };

  return (
    <div className="flex-1 flex-col space-y-2">
      <CanvasColorPicker colorValue={color} setColorCallBack={handleSetColor}></CanvasColorPicker>
      <Slider size={size} setSizeCallBack={handleSetSize} max={1000}></Slider>
      <NumberInput max={1000} value={size} setValue={handleSetSize}></NumberInput>
    </div>
  );
};

export default BrushPanel;
