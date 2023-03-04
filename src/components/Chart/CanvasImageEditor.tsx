import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { json } from 'react-router-dom';
import Button from '../Button';
import { cv } from 'react-opencv';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
import { getClientOffset } from '~/utils/canvas/coordinate';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import FileLayer from '~/canvas/ImageEditor/Layer/FileLayer';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const CanvasImageEditor = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bufferCanvasRef = useRef<HTMLCanvasElement>(null);
  const paintCanvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File>(null);
  const [mode, setMode] = useState<keyof typeof Tools>(null);
  const ViewsRef = useRef(new Views());
  const requestRef = React.useRef(null);

  const onClickFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };
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
    if (canvasRef.current && file !== null) {
      ViewsRef.current.loadFile(file);
    }
    return () => ViewsRef.current.cleanCanvas();
  }, [file]);

  useEffect(() => {
    if (canvasRef.current && file !== null) {
      // const ctx = paintCanvasRef.current.getContext('2d');
      const ToolClass = dynamicClass(mode);
      let tool = new ToolClass(ViewsRef.current);
      return () => {
        tool.unRegisterEvent(ViewsRef.current.canvas);
      };
    }
  }, [mode]);

  useEffect(() => {
    if (canvasRef.current) {
      ViewsRef.current.initializeCanvas(canvasRef.current);
      // requestRef.current = requestAnimationFrame(ViewsRef.current.draw);
      // return () => cancelAnimationFrame(requestRef.current);
      // function start() {
      //   requestAnimationFrame(animate);
      // }

      // function animate() {
      //   ViewsRef.current.draw();
      //   requestAnimationFrame(animate);
      // }
      // start();
    }
  }, []);

  return (
    <>
      <div className={` relative border-solid border-yellow-400`}>
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

        <canvas {...props} ref={canvasRef} width={window.innerWidth * 0.6} height={window.innerHeight / 2} />
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
      <div className="flex w-full space-x-3">
        <Button onClick={onDeleteFile}> delete File</Button>
        <Button onClick={onDraw}> draw mode</Button>
        <Button onClick={onPan}> Pan mode</Button>
        <Button onClick={onErase}> Erase mode</Button>
      </div>
    </>
  );
};

export default CanvasImageEditor;
