import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Brush, PanTool as PanIcon, DeleteForever, AutoFixNormal, Undo, Redo, Crop, Camera } from '@mui/icons-material';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
import Panel from '../Panel/Panel';
import { useGlobalContext } from '~/store/context';

import { LAYOUT_SIZE } from '~/utils/canvas/constants';
import clsx from 'clsx';
import StateController from '~/canvas/ImageEditor/StateController/StateController';
import RasterViews from '~/canvas/ImageEditor/Canvas/RasterCanvas';

interface Props {
  ViewsRef: React.MutableRefObject<Views>;
  rasterViewsRef: React.MutableRefObject<RasterViews>;
  setFile: React.Dispatch<React.SetStateAction<File>>;
  file: File;
  stateController: StateController;
}
const Menu = ({ ViewsRef, setFile, file, stateController, rasterViewsRef }: Props) => {
  const { mode, setMode, setShowPanel, isShowPanel } = useGlobalContext();
  const [tool, setTool] = useState<any>(null);

  const { MENU_WIDTH } = LAYOUT_SIZE;

  useEffect(() => {
    if (ViewsRef.current && file !== null && mode !== null) {
      setShowPanel(true);
      const ToolClass = dynamicClass(mode);
      const toolInstance = new ToolClass(ViewsRef.current, stateController, rasterViewsRef.current);
      setTool(toolInstance);

      if (mode === 'CropTool') rasterViewsRef.current.setInstance(toolInstance);
      else rasterViewsRef.current.setInstance(null);
      toolInstance.registerEvent();

      return () => {
        toolInstance.unRegisterEvent();
        setTool(null);
      };
    }
  }, [mode]);

  function exportCanvas() {
    const dataURL = ViewsRef.current.bufferCanvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataURL;

    link.download = 'canvas_image.png';

    link.click();
  }

  useEffect(() => {
    !isShowPanel && setMode(null);
  }, [isShowPanel]);

  const handleDelte = () => {
    setFile(null);
    setTool(null);
    setMode(null);
    setShowPanel(false);
  };

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
      icon: <Crop />,
      onClick: () => setMode(Tools.CropTool.name),
    },

    {
      icon: <DeleteForever />,
      onClick: () => handleDelte(),
    },
    {
      icon: <Undo />,
      onClick: () => stateController.undo(),
    },
    {
      icon: <Redo />,
      onClick: () => stateController.redo(),
    },
    {
      icon: <Camera />,
      onClick: () => exportCanvas(),
    },
  ];
  const menuClass = clsx('inset-y-0', 'flex', 'flex-col', 'items-center', 'text-white');

  return (
    file && (
      <>
        <div className={menuClass} style={{ maxWidth: MENU_WIDTH }}>
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
