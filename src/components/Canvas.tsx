import React, { useRef, useEffect } from 'react';
import { drawPie, drawSegmentLabel, getEndAngleOfPercentage, getStartAngleOfPercentage } from '~/utils/canvas';

interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const results = [
    { mood: 'Angry', total: 1499, color: '#0a9627' },
    { mood: 'Happy', total: 478, color: '#960A2C' },
    { mood: 'Melancholic', total: 332, color: '#332E2E' },
    { mood: 'Gloomy', total: 195, color: '#F73809' },
    { mood: 'Test', total: 195, color: 'pink' },
  ];

  let totalNumber = results.reduce((sum, { total }) => sum + total, 0);
  let lastValue = 0;
  const datas = results.map((result) => {
    const lastPercentage = (lastValue / totalNumber) * 100;
    const percentage = getEndAngleOfPercentage(result.total, lastPercentage, totalNumber);
    lastValue += result.total;

    return {
      percentage,
      data: result.total,
      color: result.color,
      startAngle: getStartAngleOfPercentage(lastPercentage),
    };
  });

  useEffect(() => {
    let currentAngle = 0;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      var cw = canvas.width;
      var ch = canvas.height;

      var nextTime = 0;
      var duration = 1000;
      var endingPct = 100;
      var pct = 0;
      var increment = duration / pct;
      var cx = cw / 2;
      var cy = ch / 2;

      var img = new Image();
      img.onload = start;
      img.src = require('~/assets/img/me.jpg');
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

          if (endRadians >= moodValue.startAngle && pct <= moodValue.percentage) {
            if (moodValue.color === '#0a9627') {
              // debugger;
            }
            drawPie(ctx, { startAngle: moodValue.startAngle, endAngle: endRadians, cx, cy, color: moodValue.color });
            drawSegmentLabel(ctx, {
              cx,
              cy,
              startAngle: moodValue.startAngle,
              endAngle: getStartAngleOfPercentage(moodValue.percentage),
              radius: endingPct,
              percentage: moodValue.percentage,
              text: String(
                datas[index - 1] === undefined
                  ? datas[index].percentage
                  : datas[index].percentage - datas[index - 1].percentage,
              ),
            });
          }
        }
      }
    }
  }, []);

  return <canvas {...props} ref={canvasRef} />;
};

Canvas.defaultProps = {
  width: window.innerWidth / 2,
  height: window.innerHeight / 2,
};

export default Canvas;

// import React, { useRef, useEffect } from 'react';

// interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}

// const Canvas = (props: CanvasProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const results = [
//     { mood: 'Angry', total: 1499, shade: '#0a9627' },
//     { mood: 'Happy', total: 478, shade: '#960A2C' },
//     { mood: 'Melancholic', total: 332, shade: '#332E2E' },
//     { mood: 'Gloomy', total: 195, shade: '#F73809' },
//   ];
//   let totalNumberOfPeople = results.reduce((sum, { total }) => sum + total, 0);

//   useEffect(() => {
//     let currentAngle = 0;
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       var cw = canvas.width;
//       var ch = canvas.height;

//       var nextTime = 0;
//       var duration = 1000;
//       var endingPct = 75;
//       var pct = 0;
//       var increment = duration / pct;
//       var cx = cw / 2;
//       var cy = ch / 2;

//       var img = new Image();
//       img.onload = start;
//       img.src = require('~/assets/img/me.jpg');
//       function start() {
//         requestAnimationFrame(animate);
//       }

//       function animate(time) {
//         draw(pct);
//         pct++;
//         if (pct <= endingPct) {
//           requestAnimationFrame(animate);
//         }
//       }

//       function draw(pct) {
//         // //
//         // var endRadians = -Math.PI / 2 + (Math.PI * 2 * pct) / 100;
//         // //
//         // ctx.fillStyle = 'black';
//         // ctx.fillRect(0, 0, cw, ch);
//         // //
//         // ctx.beginPath();
//         // ctx.arc(cx, cy, 100, -Math.PI / 2, endRadians);
//         // ctx.lineTo(cx, cy);
//         // ctx.save();
//         // ctx.clip();
//         // ctx.drawImage(img, cx - img.width / 2, cx - img.height / 2);
//         // ctx.restore();
//         for (let moodValue of results) {
//           //calculating the angle the slice (portion) will take in the chart
//           let portionAngle = (moodValue.total / totalNumberOfPeople) * 2 * Math.PI;
//           //drawing an arc and a line to the center to differentiate the slice from the rest
//           ctx.beginPath();
//           ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
//           currentAngle += portionAngle;
//           ctx.lineTo(100, 100);
//           ctx.save();
//           ctx.clip();
//           //filling the slices with the corresponding mood's color
//           ctx.fillStyle = moodValue.shade;
//           ctx.fill();
//           ctx.restore();
//         }
//       }
//       //   start();
//     }
//   }, []);

//   return <canvas {...props} ref={canvasRef} />;
// };

// Canvas.defaultProps = {
//   width: window.innerWidth / 2,
//   height: window.innerHeight / 2,
// };

// export default Canvas;
