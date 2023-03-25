import React, { useEffect } from 'react';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import RasterViews from '~/canvas/ImageEditor/Canvas/RasterCanvas';
import StateController from '~/canvas/ImageEditor/StateController/StateController';
import { Tools } from '~/canvas/ImageEditor/Tool';
import { getCurrentZoom, updateCanvasSize } from '~/utils/canvas/mainCanvas';

interface Props extends React.HTMLAttributes<HTMLCanvasElement> {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
  ContentRef: React.MutableRefObject<HTMLDivElement>;
  stateController: StateController;
  ViewsRef: React.MutableRefObject<Views>;
  rasterViewsRef: React.MutableRefObject<RasterViews>;
  rasterCanvasRef: React.MutableRefObject<HTMLCanvasElement>;
  file: File;
  mode: keyof typeof Tools;
}
const CanvasMain = (props: Props) => {
  const { canvasRef, ContentRef, ViewsRef, file, stateController, rasterCanvasRef, rasterViewsRef, mode } = props;

  useEffect(() => {
    if (!canvasRef.current || !ContentRef.current || file === null) return;

    ViewsRef.current.initializeCanvas(canvasRef.current);
    stateController.initializeCanvas(ViewsRef.current);
    rasterViewsRef.current.initializeCanvas(canvasRef.current, rasterCanvasRef.current, ViewsRef.current.bufferCanvas);

    updateCanvasSize(
      canvasRef.current,
      rasterCanvasRef.current,
      ContentRef.current.offsetWidth,
      ContentRef.current.offsetHeight,
    );

    ViewsRef.current.loadFile(file).then(() => {
      stateController.pushUndoStack();
    });
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (ViewsRef.current) resizeCanvas();

        // if (file === null) ViewsRef.current.cleanCanvas();
      });
    });

    observer.observe(ContentRef.current);

    return () => {
      observer.unobserve;

      stateController.cleanState();
      rasterViewsRef.current.cleanCanvas();
      rasterViewsRef.current = null;
      ViewsRef.current.cleanCanvas();
      ViewsRef.current = null;
    };
  }, [file]);

  useEffect(() => {
    if (!canvasRef.current || !ContentRef.current || file === null) return;
    rasterViewsRef.current.cleanCanvas();
  }, [mode]);

  const resizeCanvas = () => {
    if (canvasRef.current && canvasRef.current && file !== null) {
      // adjust the canvas size to match the size of its container

      const zoomLevel = getCurrentZoom(ViewsRef.current.ctx);
      const x = ViewsRef.current.ctx.getTransform().e + ContentRef.current.offsetWidth - canvasRef.current.width;
      const y = ViewsRef.current.ctx.getTransform().f + ContentRef.current.offsetHeight - canvasRef.current.height;

      updateCanvasSize(
        canvasRef.current,
        rasterCanvasRef.current,
        ContentRef.current.offsetWidth,
        ContentRef.current.offsetHeight,
      );

      ViewsRef.current.ctx.translate(x, y);
      ViewsRef.current.ctx.scale(zoomLevel, zoomLevel);

      ViewsRef.current.draw();
      rasterViewsRef.current.draw();
    }
  };
  return (
    <>
      <canvas ref={canvasRef} />
      <canvas className="pointer-events-none absolute inset-0 select-none" ref={rasterCanvasRef} />
    </>
  );
};

export default CanvasMain;
