import React, { useRef, useEffect } from 'react';
import {
  drawPie,
  drawSegmentLabel,
  accumlateOfPercentange,
  getAngleOfPercentage,
  drawLine,
  drawBar,
} from '~/utils/canvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const ChartStock = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const results = [
    { mood: 'Angry', total: 1499, color: '#0a9627' },
    { mood: 'Happy', total: 478, color: '#960A2C' },
    { mood: 'Melancholic', total: 332, color: '#332E2E' },
    { mood: 'Gloomy', total: 195, color: '#F73809' },
    { mood: 'Gloomy', total: 195, color: 'pink' },
  ];

  let totalNumber = results.reduce((sum, { total }) => sum + total, 0);
  let lastValue = 0;
  const datas = results.map((result) => {
    const lastPercentage = (lastValue / totalNumber) * 100;
    const accumlatePercentage = accumlateOfPercentange(result.total, lastPercentage, totalNumber);
    lastValue += result.total;

    return {
      accumlatePercentage: accumlatePercentage,
      percentage: Math.round((result.total / totalNumber) * 100),
      data: result.total,
      color: result.color,
      startAngle: getAngleOfPercentage(lastPercentage),
    };
  });

  const options = {
    padding: 30,
    gridColor: 'white',
    gridScale: 300,
    data: datas,
    spaceScale: 2,
  };

  useEffect(() => {
    let maxValue = 2000;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      let cw = (canvas.width = canvasRef.current.clientWidth);
      let ch = (canvas.height = canvasRef.current.clientHeight);
      ctx.beginPath();
      ctx.moveTo(50, 50);
      for (let i = 0; i < results.length; i++) {
        ctx.lineTo(50 + i * 50, 50 + (results[i].total - 50));
      }
      ctx.stroke();
    }
  }, []);

  return <canvas {...props} ref={canvasRef} />;
};

export default ChartStock;
