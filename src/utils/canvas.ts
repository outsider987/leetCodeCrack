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
  let deltaY = Math.ceil(Math.sin(theta) * centerDistance * dto.radius);
  let deltaX = Math.ceil(Math.cos(theta) * centerDistance * dto.radius);

  ctx.fillText(dto.text, deltaX + dto.cx, deltaY + dto.cy);
  ctx.closePath();
}
export function drawPie(
  ctx: CanvasRenderingContext2D,
  dto: {
    radius: number;
    startAngle;
    endAngle;
    cx;
    cy;
    color;
  },
) {
  const strokeWidth = 2;
  ctx.beginPath();

  ctx.arc(dto.cx, dto.cy, dto.radius, dto.startAngle, dto.endAngle);
  ctx.lineWidth = strokeWidth;
  ctx.lineTo(dto.cx, dto.cy);
  ctx.closePath();
  ctx.save();
  ctx.clip();
  ctx.fillStyle = dto.color;

  ctx.fill();

  ctx.lineWidth = strokeWidth;
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.restore();
}

export function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

export function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  ctx.restore();
}

export const getAngleOfPercentage = (percentage) => {
  return -Math.PI / 2 + (Math.PI * 2 * percentage) / 100;
};
export const accumlateOfPercentange = (data, percentage, totalNumber) => {
  return Math.ceil(percentage + (data / totalNumber) * 100);
};
