import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Brush, PanTool as PanIcon, DeleteForever, AutoFixNormal } from '@mui/icons-material';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
import Panel from '../Panel/Panel';
import { useGlobalContext } from '~/store/context';
import BrushTool from './Brush';
import PanTool from './Pan';
import { LAYOUT_SIZE } from '~/utils/canvas/constants';

interface Props {
  ViewsRef: React.MutableRefObject<Views>;
  setFile: React.Dispatch<React.SetStateAction<File>>;
  file: File;
}
const Menu = ({ ViewsRef, setFile, file }: Props) => {
  const { mode, setMode, setShowPanel } = useGlobalContext();

  const [tool, setTool] = useState<any>(null);

  const { MENU_WIDTH } = LAYOUT_SIZE;

  useEffect(() => {
    if (ViewsRef.current.canvas && file !== null) {
      setShowPanel(true);

      const ToolClass = dynamicClass(mode);
      const toolInstance = new ToolClass(ViewsRef.current);
      setTool(toolInstance);
      return () => {
        toolInstance.unRegisterEvent(ViewsRef.current.canvas);
      };
    }
  }, [mode]);

  const tools = [
    {
      icon: <Brush />,
      onClick: () => setMode(Tools.BrushTool.name),
    },

    {
      icon: <PanIcon />,
      onClick: () => setMode(Tools.PanTool.name),
    },
    {
      icon: <AutoFixNormal />,
      onClick: () => setMode(Tools.EraseTool.name),
    },
    {
      icon: <DeleteForever />,
      onClick: () => setFile(null),
    },
  ];
  return (
    file && (
      <>
        <div
          className={`inset-y-0 left-0 flex min-w-[${MENU_WIDTH}] flex-col  items-center  text-white`}
          style={{ maxWidth: MENU_WIDTH }}
        >
          {tools.map(({ icon, onClick }, index) => (
            <button key={index} onClick={onClick} className=" row-auto cursor-pointer p-2  hover:bg-slate-500">
              {icon}
            </button>
          ))}
        </div>
        <Panel title={mode} mode={mode} tool={tool} className=" "></Panel>
      </>
    )
  );
};

export default Menu;
