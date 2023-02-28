import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from '../Point';
import Layer from './Layer';

class FileLayer extends Layer {
  image: HTMLImageElement = new Image();

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.ctx = canvas.getContext('2d');
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
}
export default FileLayer;

function onload2promise(obj) {
  return new Promise((resolve, reject) => {
    obj.onload = () => resolve(obj);
    obj.onerror = reject;
  });
}
