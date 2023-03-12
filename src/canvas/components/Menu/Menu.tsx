import React, { useRef, useEffect, useState } from 'react';
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
  const ToolRef = useRef(null);

  const { MENU_WIDTH } = LAYOUT_SIZE;

  useEffect(() => {
    if (ViewsRef.current.canvas && file !== null) {
      setShowPanel(true);
      const ToolClass = dynamicClass(mode);
      ToolRef.current = new ToolClass(ViewsRef.current);

      return () => {
        ToolRef.current.unRegisterEvent(ViewsRef.current.canvas);
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
          className={`inset-y-0 left-0 flex min-w-[${MENU_WIDTH}] flex-col  items-center  space-y-3 text-white`}
          style={{ maxWidth: MENU_WIDTH }}
        >
          {tools.map(({ icon, onClick }, index) => (
            <button key={index} onClick={onClick} className="cursor-pointer">
              {icon}
            </button>
          ))}
        </div>
        <Panel title={mode} mode={mode} tool={ToolRef.current} className=" "></Panel>
      </>
    )
  );
};

export default Menu;
