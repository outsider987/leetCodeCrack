import React, { useRef, useEffect, useState, ChangeEvent, useMemo } from 'react';
import { json } from 'react-router-dom';
import Button from '../../../components/Button';
import { cv } from 'react-opencv';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';

import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import Menu from '../Menu/Menu';
import { getCurrentZoom } from '~/utils/canvas/canvas';
import { LAYOUT_SIZE } from '~/utils/canvas/constants';
import { useGlobalContext } from '~/store/context';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const CanvasImageEditor = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { MENU_WIDTH, PANEL_WIDTH } = LAYOUT_SIZE;
  const [file, setFile] = useState<File>(null);
  const ViewsRef = useRef(new Views());
  const ContentRef = useRef<HTMLDivElement>();
  const { isShowPanel } = useGlobalContext();

  const onClickFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!canvasRef.current || !ContentRef.current || file === null) return;

    ViewsRef.current.initializeCanvas(canvasRef.current);
    canvasRef.current.width = ContentRef.current.offsetWidth;
    canvasRef.current.height = ContentRef.current.offsetHeight;
    ViewsRef.current.loadFile(file);
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        updateDimensions();
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

  const updateDimensions = () => {
    if (canvasRef.current && file !== null) {
      // adjust the canvas size to match the size of its container
      const zoomLevel = getCurrentZoom(ViewsRef.current.ctx);
      const x = ViewsRef.current.ctx.getTransform().e + ContentRef.current.offsetWidth - canvasRef.current.width;
      const y = ViewsRef.current.ctx.getTransform().f + ContentRef.current.offsetHeight - canvasRef.current.height;

      // reset the transform matrix as it is cumulative
      canvasRef.current.width = ContentRef.current.offsetWidth;
      canvasRef.current.height = ContentRef.current.offsetHeight;

      ViewsRef.current.ctx.translate(x, y);
      ViewsRef.current.ctx.scale(zoomLevel, zoomLevel);
      ViewsRef.current.draw();
    }
  };

  return (
    <>
      <div className={`${props.className} h-[100vh] `}>
        <div className="flex min-w-[2.5rem]">
          <Menu ViewsRef={ViewsRef} setFile={setFile} file={file}></Menu>
        </div>
        <div
          ref={ContentRef}
          className={`relative flex-1  border  border-solid border-yellow-400`}
          style={{ maxWidth: contentMaxSize }}
        >
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

          {ContentRef.current && <canvas ref={canvasRef} />}
        </div>
      </div>
    </>
  );
};

export default CanvasImageEditor;
