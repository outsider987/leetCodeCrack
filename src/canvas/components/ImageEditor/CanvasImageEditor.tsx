import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { json } from 'react-router-dom';
import Button from '../../../components/Button';
import { cv } from 'react-opencv';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
import { getClientOffset } from '~/utils/canvas/coordinate';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import FileLayer from '~/canvas/ImageEditor/Layer/FileLayer';
import Menu from './Menu';
import { getCurrentZoom } from '~/utils/canvas/canvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const CanvasImageEditor = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File>(null);
  const ViewsRef = useRef(new Views());
  const ContentRef = useRef<HTMLDivElement>();

  const onClickFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (canvasRef.current && file !== null) {
      ViewsRef.current.loadFile(file);
      window.addEventListener('resize', updateDimensions);
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      ViewsRef.current.cleanCanvas();
    };
  }, [file]);

  useEffect(() => {
    if (canvasRef.current) {
      ViewsRef.current.initializeCanvas(canvasRef.current);
      canvasRef.current.width = ContentRef.current.offsetWidth;
      canvasRef.current.height = ContentRef.current.offsetHeight;
    }
  }, []);
  const updateDimensions = () => {
    if (canvasRef.current && file !== null) {
      const zoomLevel = getCurrentZoom(ViewsRef.current.ctx);
      canvasRef.current.width = ContentRef.current.offsetWidth;
      canvasRef.current.height = ContentRef.current.offsetHeight;

      ViewsRef.current.ctx.scale(zoomLevel, zoomLevel);
      ViewsRef.current.draw();
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex w-full space-x-3">
          <Menu ViewsRef={ViewsRef} setFile={setFile} file={file}></Menu>
        </div>
        <div ref={ContentRef} className={` relative flex border-solid border-yellow-400`}>
          {file === null && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" text-white">please click or drag file</div>
              <input
                onChange={onClickFile}
                className=" absolute inset-0 z-10 cursor-pointer opacity-0"
                type="file"
                accept="image/*"
              />
            </div>
          )}

          <canvas
            {...props}
            ref={canvasRef}
            // width={ContentRef.current.offsetWidth}
            // height={ContentRef.current.offsetHeight}
          />

          {/* <canvas
          {...props}
          id="buffer"
          ref={bufferCanvasRef}
          width={window.innerWidth * 0.6}
          height={window.innerHeight / 2}
        /> */}
          {/* <canvas
          {...props}
          id="paint"
          ref={paintCanvasRef}
          width={window.innerWidth * 0.6}
          height={window.innerHeight / 2}
        /> */}
        </div>
      </div>
    </>
  );
};

export default CanvasImageEditor;
