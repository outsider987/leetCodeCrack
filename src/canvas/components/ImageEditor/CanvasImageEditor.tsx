import React, { useRef, useEffect, useState, ChangeEvent, useMemo } from 'react';
import { json } from 'react-router-dom';
import Button from '../../../components/Button';
import { cv } from 'react-opencv';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';

import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import Menu from '../Menu/Menu';
import { getCurrentZoom, updateCanvasSize } from '~/utils/canvas/mainCanvas';
import { LAYOUT_SIZE } from '~/utils/canvas/constants';
import { useGlobalContext } from '~/store/context';
import clsx from 'clsx';
import CanvasMain from './Maincanvas';
import CursorCanvas from './CursorCanvas';
import StateController from '~/canvas/ImageEditor/StateController/StateController';
import RasterViews from '~/canvas/ImageEditor/Canvas/RasterCanvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const CanvasImageEditor = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rasterCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ContentRef = useRef<HTMLDivElement>();

  const ViewsRef = useRef(new Views());
  const stateController = useRef(new StateController());
  const rasterViewsRef = useRef(new RasterViews());

  const { isShowPanel, mode, globalState } = useGlobalContext();
  const { MENU_WIDTH, PANEL_WIDTH } = LAYOUT_SIZE;
  const [file, setFile] = useState<File>(null);

  const onClickFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  const contentMaxSize = useMemo(() => {
    const panelWidth = isShowPanel ? PANEL_WIDTH : 0;
    return `calc(100% - ${panelWidth || MENU_WIDTH})`;
  }, [isShowPanel]);

  const menuClasses = clsx('flex', 'min-w-[2.5rem]', 'text-white');
  const contentClasses = clsx(
    'flex-1',
    'border',
    'border-solid',
    'border-yellow-400',
    'w-full',
    'relative',
    'overflow-hidden',
  );

  return (
    <>
      <div ref={containerRef} className={`${props.className} h-[100vh] `}>
        <div className={menuClasses}>
          <Menu
            ViewsRef={ViewsRef}
            setFile={setFile}
            rasterViewsRef={rasterViewsRef}
            file={file}
            stateController={stateController.current}
          ></Menu>
        </div>

        <div ref={ContentRef} className={contentClasses} style={{ maxWidth: contentMaxSize }}>
          {file === null && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" text-white">please click or drag file</div>
              <input
                onChange={onClickFile}
                className={`absolute inset-0 z-10 cursor-pointer opacity-0 `}
                type="file"
                accept="image/*"
              />
            </div>
          )}

          <CanvasMain
            canvasRef={canvasRef}
            ContentRef={ContentRef}
            ViewsRef={ViewsRef}
            rasterViewsRef={rasterViewsRef}
            rasterCanvasRef={rasterCanvasRef}
            file={file}
            mode={mode}
            stateController={stateController.current}
          />
          <CursorCanvas
            mode={mode}
            ContentRef={ContentRef}
            canvasRef={canvasRef}
            globalState={globalState}
          ></CursorCanvas>
        </div>
      </div>
    </>
  );
};

export default CanvasImageEditor;
