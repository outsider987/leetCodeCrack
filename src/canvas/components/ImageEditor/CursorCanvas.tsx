import React, { useEffect } from 'react';
import CursorCanvasClass from '~/canvas/ImageEditor/Canvas/CanvasCursor';
import { Tools } from '~/canvas/ImageEditor/Tool';
import { LAYOUT_SIZE } from '~/utils/canvas/constants';
import { getCurrentZoom } from '~/utils/canvas/mainCanvas';
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
  const isShowCursor = mode === 'BrushTool' || mode === 'EraseTool';
  const { brushSize, eraseSize } = globalState || {};

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

    canvasCursorRef.current.width = Math.max(size, 15) * level;
    canvasCursorRef.current.height = Math.max(size, 15) * level;
    CursorRef.current.initializeCanvas(canvasCursorRef.current);
  }

  function handleMouseMove(e) {
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    canvasCursorRef.current.style.left = `${offsetX - canvasCursorRef.current.width / 2}px`;
    canvasCursorRef.current.style.top = `${offsetY - canvasCursorRef.current.height / 2}px`;
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
