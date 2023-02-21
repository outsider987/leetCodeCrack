import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from './../Point';

class Layer {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  position = { x: 0, y: 0 };
  image: HTMLImageElement = new Image();

  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.lastPoint = new Point(0, 0);
    this.canvas = canvas;
  }
  async loadFile(file) {
    const { ctx, canvas, position, image } = this;
    image.src = URL.createObjectURL(file);
    await onload2promise(image);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
    let x = (canvas.width - image.width * ratio) / 2;
    let y = (canvas.height - image.height * ratio) / 2;
    position.x = x;
    position.y = y;
    ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
  }

  redraw() {}

  mouseDown = (e) => {
    // e.preventDefault();
    const clientPoint = getClientOffset(e, this.canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);

    this.isDrawStart = true;
  };
}
export default Layer;

function onload2promise(obj) {
  return new Promise((resolve, reject) => {
    obj.onload = () => resolve(obj);
    obj.onerror = reject;
  });
}
