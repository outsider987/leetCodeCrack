import Point from '../Point';
import Layer from './Layer';

class FileLayer extends Layer {
  image: HTMLImageElement = new Image();

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.ctx = canvas.getContext('2d');
    this.lastPoint = new Point(0, 0);
    this.bufferCanvas = canvas;
  }
  async loadFile(file) {
    const { ctx, bufferCanvas: canvas, position, image } = this;
  }

  redraw() {}
}
export default FileLayer;
