import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { json } from 'react-router-dom';
import Button from '../Button';
import { cv } from 'react-opencv';
import Line from '~/canvas/ImageEditor/Line';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const CanvasImageEditor = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File>(null);
  const [mode, setMode] = useState<string>(null);
  const modes = [Line];

  const onClickFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };
  const onDeleteFile = (e) => {
    setFile(null);
  };
  const onDraw = () => {
    setMode('draw');
  };

  useEffect(() => {
    if (canvasRef.current && file !== null) {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext('2d');

      const image = new Image();
      image.onload = () => {
        let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
        let x = (canvas.width - image.width * ratio) / 2;
        let y = (canvas.height - image.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
      };
      image.src = URL.createObjectURL(file);

      // const canvas = canvasRef.current;
      // const ctx = canvasRef.current.getContext('2d');
      const line = new modes[0](ctx, 'white', canvas) as Line;
    } else {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [file]);

  useEffect(() => {
    if (canvasRef.current && file !== null) {
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
      </div>
      <div className="flex w-full space-x-3">
        <Button onClick={onDeleteFile}> delete File</Button>
        <Button onClick={onDraw}> draw mode</Button>
      </div>
    </>
  );
};

export default CanvasImageEditor;
