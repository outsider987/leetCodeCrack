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
import CursorCanvas from '~/canvas/ImageEditor/Canvas/CanvasCursor';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const CanvasImageEditor = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCursorRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { MENU_WIDTH, PANEL_WIDTH } = LAYOUT_SIZE;
  const [file, setFile] = useState<File>(null);
  const ViewsRef = useRef(new Views());
  const CursorRef = useRef(new CursorCanvas());
  const ContentRef = useRef<HTMLDivElement>();
  const { isShowPanel, mode } = useGlobalContext();

  const onClickFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!canvasRef.current || !canvasCursorRef.current || !ContentRef.current || file === null) return;

    ViewsRef.current.initializeCanvas(canvasRef.current);
    updateCanvasSize(canvasRef.current, ContentRef.current.offsetWidth, ContentRef.current.offsetHeight);

    ViewsRef.current.loadFile(file);
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        ViewsRef.current.backgroundLayer && resizeCanvas();
      });
    });

    observer.observe(ContentRef.current);

    return () => {
      observer.unobserve(ContentRef.current);
      ViewsRef.current.cleanCanvas();
    };
  }, [file]);

  const contentMaxSize = useMemo(() => {
    const panelWidth = isShowPanel ? PANEL_WIDTH : 0;
    return `calc(100% - ${panelWidth || MENU_WIDTH})`;
  }, [isShowPanel]);

  const resizeCanvas = () => {
    if (canvasRef.current && canvasCursorRef.current && file !== null) {
      // adjust the canvas size to match the size of its container
      const zoomLevel = getCurrentZoom(ViewsRef.current.ctx);
      const x = ViewsRef.current.ctx.getTransform().e + ContentRef.current.offsetWidth - canvasRef.current.width;
      const y = ViewsRef.current.ctx.getTransform().f + ContentRef.current.offsetHeight - canvasRef.current.height;

      updateCanvasSize(canvasRef.current, ContentRef.current.offsetWidth, ContentRef.current.offsetHeight);

      ViewsRef.current.ctx.translate(x, y);
      ViewsRef.current.ctx.scale(zoomLevel, zoomLevel);
      ViewsRef.current.draw();
    }
  };

  useEffect(() => {
    CursorRef.current.initializeCanvas(canvasCursorRef.current);
    canvasCursorRef.current.width = 100;
    canvasCursorRef.current.height = 100;
    function handleMouseMove(e) {
      const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
      CursorRef.current.draw();
      canvasCursorRef.current.style.left = `${offsetX}px`;
      canvasCursorRef.current.style.top = `${offsetY}px`;
    }

    ContentRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      ContentRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const menuClasses = clsx('flex', 'min-w-[2.5rem]');
  const canvasClasses = clsx('flex-1', 'border', 'border-solid', 'border-yellow-400', 'w-full');

  return (
    <>
      <div ref={containerRef} className={`${props.className} h-[100vh] `}>
        <div className={menuClasses}>
          <Menu ViewsRef={ViewsRef} setFile={setFile} file={file}></Menu>
        </div>
        <div ref={ContentRef} className={canvasClasses} style={{ maxWidth: contentMaxSize }}>
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

          <canvas ref={canvasRef} />
          <canvas className="pointer-events-none absolute inset-0 z-10 flex-1 select-none" ref={canvasCursorRef} />
        </div>
      </div>
    </>
  );
};

export default CanvasImageEditor;
