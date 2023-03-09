import React, { useRef, useEffect, useState } from 'react';
import { Brush, PanTool, DeleteForever, AutoFixNormal } from '@mui/icons-material';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
interface Props {
  ViewsRef: React.MutableRefObject<Views>;
  setFile: React.Dispatch<React.SetStateAction<File>>;
  file: File;
}
const Menu = ({ ViewsRef, setFile, file }: Props) => {
  const menuRef = useRef(null);
  const [mode, setMode] = useState<keyof typeof Tools>(null);

  const onDeleteFile = (e) => {
    setFile(null);
  };
  const onDraw = () => {
    setMode('PaintTool');
  };
  const onErase = () => {
    setMode('EraseTool');
  };
  const onPan = () => {
    setMode('PanTool');
  };

  useEffect(() => {
    if (ViewsRef.current.canvas && file !== null) {
      // const ctx = paintCanvasRef.current.getContext('2d');
      const ToolClass = dynamicClass(mode);
      let tool = new ToolClass(ViewsRef.current);
      return () => {
        tool.unRegisterEvent(ViewsRef.current.canvas);
      };
    }
  }, [mode]);
  const tools = [
    <Brush onClick={onDraw}></Brush>,
    <PanTool onClick={onPan}></PanTool>,
    <AutoFixNormal onClick={onErase}></AutoFixNormal>,
    <DeleteForever onClick={onDeleteFile}></DeleteForever>,
  ];
  return (
    <div className=" inset-y-0 left-0 flex w-[2vw] flex-col items-center space-y-2 text-white">
      {tools.map((tool, index) => (
        <div className=" cursor-pointer" key={index}>
          {tool}
        </div>
      ))}
    </div>
  );
};

export default Menu;
