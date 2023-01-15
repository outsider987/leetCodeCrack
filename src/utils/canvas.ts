export function drawSegmentLabel(
  ctx: CanvasRenderingContext2D,
  dto: {
    startAngle;
    endAngle;
    text;
    percentage;
    radius;
    cx;
    cy;
  },
) {
  const centerDistance = 0.5;

  ctx.beginPath();
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';

  let theta = (dto.startAngle + dto.endAngle) / 2;
  let deltaY = Math.ceil(Math.sin(theta) * centerDistance * 100);
  let deltaX = Math.ceil(Math.cos(theta) * centerDistance * 100);

  ctx.fillText(dto.text, deltaX + dto.cx, deltaY + dto.cy);
  ctx.closePath();
}
export function drawPie(
  ctx: CanvasRenderingContext2D,
  dto: {
    startAngle;
    endAngle;
    cx;
    cy;
    color;
  },
) {
  ctx.beginPath();

  ctx.arc(dto.cx, dto.cy, 100, dto.startAngle, dto.endAngle);
  // ctx.stroke();
  ctx.lineTo(dto.cx, dto.cy);
  ctx.save();
  ctx.clip();
  ctx.fillStyle = dto.color;
  ctx.fill();
  ctx.restore();

  ctx.closePath();
}

export const getAngleOfPercentage = (percentage) => {
  return Math.ceil((-Math.PI / 2 + (Math.PI * 2 * percentage) / 100) * 100) / 100;
};
export const accumlateOfPercentange = (data, percentage, totalNumber) => {
  return Math.ceil(percentage + (data / totalNumber) * 100);
};
