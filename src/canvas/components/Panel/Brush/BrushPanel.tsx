import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import CanvasColorPicker from './ColorPicker';
import { Tools } from '~/canvas/ImageEditor/Tool';
import BrushTool from '~/canvas/ImageEditor/Tool/Brush';
import Slider from '~/components/Slider';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tool: BrushTool;
}

const BrushPanel = (props: Props) => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000');
  const { tool } = props;
  useCallback(() => {}, []);
  return (
    <div>
      <CanvasColorPicker colorValue={color} setColorCallBack={tool.setColor}></CanvasColorPicker>
      <Slider setSizeCallBack={tool.setSize}></Slider>
    </div>
  );
};

export default BrushPanel;
