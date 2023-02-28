import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from '../Point';

class Layer {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  position = { x: 0, y: 0 };

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    this.lastPoint = new Point(0, 0);
    this.canvas = canvas;
  }

  draw() {}
}
export default Layer;
