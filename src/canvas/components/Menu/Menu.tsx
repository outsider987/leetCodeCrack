import React, { useRef, useEffect, useState } from 'react';
import { Brush, PanTool as PanIcon, DeleteForever, AutoFixNormal } from '@mui/icons-material';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
import Panel from '../Panel/Panel';
import { useGlobalContext } from '~/store/context';
import BrushTool from './Brush';
interface Props {
  ViewsRef: React.MutableRefObject<Views>;
  setFile: React.Dispatch<React.SetStateAction<File>>;
  file: File;
}
const Menu = ({ ViewsRef, setFile, file }: Props) => {
  const [mode, setMode] = useState<keyof typeof Tools>(null);
  const { setShowPanel } = useGlobalContext();

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
    <BrushTool onClick={() => setMode('PaintTool')} />,

    // {
    //   tool: <PanIcon />,
    //   onClick: () => setMode('PanTool'),
    // },
    // {
    //   icon: <AutoFixNormal />,
    //   onClick: () => setMode('EraseTool'),
    // },
    // {
    //   icon: <DeleteForever />,
    //   onClick: () => setFile(null),
    // },
  ];
  return (
    file && (
      <>
        <div className=" inset-y-0 left-0 flex w-menu-width min-w-[2.5rem] flex-col items-center  space-y-3 text-white">
          {tools.map((Tool, index) => (
            <React.Fragment key={index}>{Tool}</React.Fragment>
          ))}
        </div>
        <Panel title={mode} className=" "></Panel>
      </>
    )
  );
};

export default Menu;
