import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import CanvasColorPicker from './ColorPicker';
import { Tools } from '~/canvas/ImageEditor/Tool';
import BrushTool from '~/canvas/ImageEditor/Tool/Brush';
import Slider from '~/components/Slider';
import { useBrushStorage } from '~/utils/storage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tool: BrushTool;
}

const BrushPanel = (props: Props) => {
  const { tool } = props;
  const brushStorage = useBrushStorage();

  const lastColor = brushStorage.getBrushStorage();
  const currentColor = lastColor || tool.color;

  const [color, setColor] = useState(currentColor);
  const [size, setSize] = useState(tool.size);
  useEffect(() => {
    tool.setColor(color);
  }, [tool]);
  useEffect(() => {
    tool.setSize(size);
  }, [size]);

  const handleSetColor = (newColor) => {
    setColor(newColor);
    tool.setColor(newColor);
    brushStorage.setBrushStorage(newColor);
  };

  return (
    <div>
      <CanvasColorPicker colorValue={color} setColorCallBack={handleSetColor}></CanvasColorPicker>
      <Slider size={size} setSizeCallBack={setSize} max={1000}></Slider>
    </div>
  );
};

export default BrushPanel;
