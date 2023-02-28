import React, { useRef, useEffect } from 'react';
import { drawPie, drawSegmentLabel, accumlateOfPercentange, getAngleOfPercentage } from '~/utils/canvas/chart';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const ChartPie = (props: CanvasProps) => {
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

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      let cw = (canvas.width = canvasRef.current.clientWidth);
      let ch = (canvas.height = canvasRef.current.clientHeight);

      // ctx.fillStyle = 'white';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      let endingPct = 100;
      let radius = canvasRef.current.clientWidth / 4;
      let pct = 0;
      let cx = Math.ceil(cw / 2);
      let cy = Math.ceil(ch / 2);

      // let img = new Image();
      // img.onload = start;
      // img.src = require('~/assets/img/me.jpg');

      function start() {
        requestAnimationFrame(animate);
      }

      function animate(time) {
        draw(pct);
        pct++;
        if (pct <= endingPct) {
          requestAnimationFrame(animate);
        }
      }

      function draw(pct) {
        var endRadians = -Math.PI / 2 + (Math.PI * 2 * pct) / 100;

        for (const [index, moodValue] of datas.entries()) {
          ctx.fillStyle = moodValue.color;

          if (endRadians >= moodValue.startAngle && pct <= moodValue.accumlatePercentage) {
            if (moodValue.color === '#0a9627') {
              // debugger;
            }
            drawPie(ctx, {
              radius,
              startAngle: moodValue.startAngle,
              endAngle: endRadians,
              cx,
              cy,
              color: moodValue.color,
            });
            drawSegmentLabel(ctx, {
              cx,
              cy,
              startAngle: moodValue.startAngle,
              endAngle: getAngleOfPercentage(moodValue.accumlatePercentage),
              radius,
              percentage: moodValue.accumlatePercentage,
              text: String(moodValue.percentage),
            });
          }
        }
      }
      start();
    }
  }, []);

  return <canvas {...props} ref={canvasRef} />;
};

export default ChartPie;
