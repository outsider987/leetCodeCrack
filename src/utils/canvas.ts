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
  ctx.beginPath();
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';

  let theta = (dto.startAngle + dto.endAngle) / 2;
  let deltaY = Math.sin(theta) * 1.5 * 100;
  let deltaX = Math.cos(theta) * 1.5 * 100;

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
  ctx.lineTo(dto.cx, dto.cy);
  ctx.stroke();
  ctx.save();
  ctx.clip();
  ctx.fillStyle = dto.color;
  ctx.fill();
  ctx.restore();
  ctx.closePath;
  ctx.closePath();
}

export const getStartAngleOfPercentage = (percentage) => {
  return Math.round((-Math.PI / 2 + (Math.PI * 2 * percentage) / 100) * 100) / 100;
};
export const getEndAngleOfPercentage = (data, percentage, totalNumber) => {
  return Math.round(percentage + (data / totalNumber) * 100);
};
