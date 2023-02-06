import React, { useRef, useEffect } from 'react';
import Ball from '~/canvas/Ball';
import Brick from '~/canvas/Brick';
import Game from '~/canvas/Game';
import Paddle from '~/canvas/Paddle';
import { drawPie, drawSegmentLabel, accumlateOfPercentange, getAngleOfPercentage } from '~/utils/canvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const Breakout = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const game = new Game(ctx, canvas);

      function animate() {
        game.draw();
        game.update();
        if (game.checkWin()) {
          alert('win');
          window.location.reload();
          return false;
        }
        requestAnimationFrame(animate);
      }
      function start() {
        requestAnimationFrame(animate);
      }
      start();
    }
  }, []);

  return <canvas {...props} ref={canvasRef} />;
};

export default Breakout;
