import React, { useRef, useEffect } from 'react';
import {
  drawPie,
  drawSegmentLabel,
  accumlateOfPercentange,
  getAngleOfPercentage,
  drawLine,
  drawBar,
} from '~/utils/canvas/canvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const ChartBar = (props: CanvasProps) => {
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

      function drawGridLines() {
        let canvasActualHeight = ch - options.padding * 2;
        let canvasActualWidth = cw - options.padding * 2;
        let gridValue = 0;
        while (gridValue <= maxValue) {
          var gridY = canvasActualHeight * (1 - gridValue / maxValue) + options.padding;
          drawLine(ctx, 0, gridY, canvas.width, gridY, options.gridColor);
          drawLine(
            ctx,
            options.padding / 2,
            options.padding / 2,
            options.padding / 2,
            gridY + options.padding / 2,
            options.gridColor,
          );
          // Writing grid markers
          ctx.save();
          ctx.fillStyle = options.gridColor;
          ctx.textBaseline = 'bottom';
          ctx.font = 'bold 10px Arial';
          ctx.fillText(String(gridValue), +20, gridY - 2);
          ctx.restore();
          gridValue += options.gridScale;
        }
      }
      function drawBars() {
        let canvasActualWidth = cw - options.padding * 2;
        let canvasActualHeight = ch - options.padding * 2;
        let barIndex = 0;
        let numberOfBars = Object.keys(options.data).length;
        let baseBarSize = canvasActualWidth / numberOfBars / options.spaceScale;
        let barSize = baseBarSize;
        let space = barSize / 2;

        let values = Object.values(options.data);

        for (const [i, val] of values.entries()) {
          let barHeight = Math.round((canvasActualHeight * val.data) / maxValue);
          let leftSpace = space * (i + 1);
          let rightSpace = space * i;
          drawBar(
            ctx,
            options.padding + barIndex * barSize + leftSpace + rightSpace,
            canvas.height - barHeight - options.padding,
            barSize,
            barHeight,
            val.color,
          );
          barIndex++;
        }
      }

      drawBars();
      drawGridLines();
    }
  }, []);

  return <canvas {...props} ref={canvasRef} />;
};

export default ChartBar;
