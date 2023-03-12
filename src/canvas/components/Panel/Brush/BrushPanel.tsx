import React, { useRef, useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import CanvasColorPicker from './ColorPicker';
import { Tools } from '~/canvas/ImageEditor/Tool';
import BrushTool from '~/canvas/ImageEditor/Tool/Brush';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tool: BrushTool;
}

const BrushPanel = (props: Props) => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000');
  const { tool } = props;
  console.log(tool);
  return (
    <div>
      <CanvasColorPicker setColorCallBack={tool.setColor}></CanvasColorPicker>
    </div>
  );
};

export default BrushPanel;
