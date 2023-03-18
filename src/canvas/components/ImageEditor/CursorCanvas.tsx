import React, { useEffect, useState } from 'react';
import CursorCanvasClass from '~/canvas/ImageEditor/Canvas/CanvasCursor';
import { Tools } from '~/canvas/ImageEditor/Tool';
import { LAYOUT_SIZE } from '~/utils/canvas/constants';
import { getCurrentZoom } from '~/utils/canvas/mainCanvas';
import { IsOutRect } from '~/utils/canvas/rect';
import { initialGlobalState } from '~/utils/initializeState';

interface Props extends React.HTMLAttributes<HTMLCanvasElement> {
  canvasCursorRef: React.MutableRefObject<HTMLCanvasElement>;
  containerRef: React.MutableRefObject<HTMLDivElement>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
  ContentRef: React.MutableRefObject<HTMLDivElement>;
  CursorRef: React.MutableRefObject<CursorCanvasClass>;
  mode: keyof typeof Tools;
  globalState: typeof initialGlobalState;
}

const CursorCanvas = (props: Props) => {
  const { canvasCursorRef, containerRef, CursorRef, canvasRef, ContentRef, mode, globalState } = props;

  const { brushSize, eraseSize } = globalState || {};
  const [isShowCursor, setShowCursor] = useState(mode === 'BrushTool' || mode === 'EraseTool');
  useEffect(() => {
    if (!canvasCursorRef.current) return;
    handleChangSize();
    canvasRef.current.addEventListener('mousemove', handleMouseMove);
    canvasRef.current.addEventListener('wheel', handleChangSize);

    return () => {
      canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      canvasRef.current.removeEventListener('wheel', handleChangSize);
    };
  }, [mode, brushSize, eraseSize]);

  function handleChangSize(e?) {
    let size = 1;

    switch (mode) {
      case 'BrushTool':
        size = brushSize | 1;
        break;
      case 'EraseTool':
        size = eraseSize | 1;
        break;

      default:
        break;
    }
    const ctx = canvasRef.current.getContext('2d');
    const level = getCurrentZoom(ctx);

    canvasCursorRef.current.width = Math.max(size, 3) * level;
    canvasCursorRef.current.height = Math.max(size, 3) * level;
    CursorRef.current.initializeCanvas(canvasCursorRef.current);
  }

  function handleMouseMove(e) {
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    const newX = offsetX - canvasCursorRef.current.width / 2;
    const newY = offsetY - canvasCursorRef.current.height / 2;
    canvasCursorRef.current.style.left = `${newX}px`;
    canvasCursorRef.current.style.top = `${newY}px`;
    setShowCursor(
      !IsOutRect(
        newX,
        newY,
        canvasRef.current.clientLeft,
        canvasRef.current.clientTop,
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight,
      ),
    );
  }

  return (
    <canvas
      className="pointer-events-none absolute left-0 top-0 z-10 flex select-none rounded-full border  border-solid border-yellow-400"
      ref={canvasCursorRef}
      style={{ display: isShowCursor ? 'block' : 'none' }}
    />
  );
};

export default CursorCanvas;
