import React, { useEffect } from 'react';
import Views from '~/canvas/ImageEditor/Canvas/Canvas';
import { getCurrentZoom, updateCanvasSize } from '~/utils/canvas/mainCanvas';

interface Props extends React.HTMLAttributes<HTMLCanvasElement> {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
  ContentRef: React.MutableRefObject<HTMLDivElement>;

  ViewsRef: React.MutableRefObject<Views>;
  file: File;
}
const CanvasMain = (props: Props) => {
  const { canvasRef, ContentRef, ViewsRef, file } = props;

  useEffect(() => {
    if (!canvasRef.current || !ContentRef.current || file === null) return;

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

  const resizeCanvas = () => {
    if (canvasRef.current && canvasRef.current && file !== null) {
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
  return <canvas ref={canvasRef} />;
};

export default CanvasMain;
