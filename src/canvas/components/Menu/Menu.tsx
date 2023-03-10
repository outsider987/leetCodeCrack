import React, { useRef, useEffect, useState } from 'react';
import { Brush, PanTool as PanIcon, DeleteForever, AutoFixNormal } from '@mui/icons-material';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
import Panel from '../Panel/Panel';
import { useGlobalContext } from '~/store/context';
interface Props {
  ViewsRef: React.MutableRefObject<Views>;
  setFile: React.Dispatch<React.SetStateAction<File>>;
  file: File;
}
const Menu = ({ ViewsRef, setFile, file }: Props) => {
  const menuRef = useRef(null);
  const [mode, setMode] = useState<keyof typeof Tools>(null);
  const { setShowPanel } = useGlobalContext();

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
      setShowPanel(true);
      const ToolClass = dynamicClass(mode);
      let tool = new ToolClass(ViewsRef.current);
      return () => {
        tool.unRegisterEvent(ViewsRef.current.canvas);
      };
    }
  }, [mode]);
  const tools = [
    <Brush onClick={onDraw}></Brush>,
    <PanIcon onClick={onPan}></PanIcon>,
    <AutoFixNormal onClick={onErase}></AutoFixNormal>,
    <DeleteForever onClick={onDeleteFile}></DeleteForever>,
  ];
  return (
    <>
      <div className=" inset-y-0 left-0 flex w-menu-width min-w-[2.5rem] flex-col items-center  space-y-3 text-white">
        {tools.map((tool, index) => (
          <div className=" cursor-pointer" key={index}>
            {tool}
          </div>
        ))}
      </div>
      <Panel title={mode} className=" "></Panel>
    </>
  );
};

export default Menu;
