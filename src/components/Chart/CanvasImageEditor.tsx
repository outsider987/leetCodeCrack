import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { json } from 'react-router-dom';
import Button from '../Button';
import { cv } from 'react-opencv';
import dynamicClass, { Tools } from '~/canvas/ImageEditor/Tool';
import { getClientOffset } from '~/utils/canvas/coordinate';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const CanvasImageEditor = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File>(null);
  const [mode, setMode] = useState<keyof typeof Tools>(null);

  const onClickFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };
  const onDeleteFile = (e) => {
    setFile(null);
  };
  const onDraw = () => {
    setMode('LineTool');
  };
  const onErase = () => {
    setMode('EraseTool');
  };

  useEffect(() => {
    if (canvasRef.current && file !== null) {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext('2d');
      // debugger;
      const main = new Views(ctx, canvas);

      main.loadFile(file);
      // image.onload = () => {
      //   let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
      //   let x = (canvas.width - image.width * ratio) / 2;
      //   let y = (canvas.height - image.height * ratio) / 2;
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      //   ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);

      //   const lastImageData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);
      //   console.log(lastImageData2);
      // };
      // canvas.addEventListener('wheel', (e) => {
      //   let zoom = 1;
      //   e.preventDefault();
      //   const clientPoint = getClientOffset(e, canvas);

      //   if (e.deltaY < 0) {
      //     zoom *= 1.1;
      //   } else {
      //     zoom *= 0.9;
      //   }

      //   // ctx.translate(clientPoint.x, clientPoint.y);

      //   const lastView = ctx.getImageData(0, 0, canvas.width, canvas.height);
      //   ctx.scale(zoom, zoom);

      //   // ctx.setTransform(zoom, 0, 0, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);

      //   let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
      //   let x = (canvas.width - image.width * ratio) / 2;
      //   let y = (canvas.height - image.height * ratio) / 2;
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      //   ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
      // });

      // image.src = URL.createObjectURL(file);
    } else {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [file]);

  useEffect(() => {
    if (canvasRef.current && file !== null) {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext('2d');

      const ToolClass = dynamicClass(mode);

      let tool = new ToolClass(ctx, canvas);

      return () => {
        tool.unRegisterEvent(canvas);
      };
    }
  }, [mode]);

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
      </div>
      <div className="flex w-full space-x-3">
        <Button onClick={onDeleteFile}> delete File</Button>
        <Button onClick={onDraw}> draw mode</Button>
        <Button onClick={onErase}> Erase mode</Button>
      </div>
    </>
  );
};

export default CanvasImageEditor;
