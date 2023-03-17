import { getTransformedPoint } from '~/utils/canvas/coordinate';
import FileLayer from '../Layer/FileLayer';
import Point from './../Point';
import BackgroundLayer from '../Layer/BackgroundLayer';
import { getCurrentZoom, redrawBoundBackGround } from '~/utils/canvas/mainCanvas';
import { onload2promise } from '~/utils/image';
import { getNewSize } from '~/utils/canvas/rect';

class CursorCanvasClass {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  lastPoint: Point;

  zoomLevel = 1;
  lastView = null;

  cameraOffsetX: number = 0;
  cameraOffsetY: number = 0;
  width: number;
  height: number;

  constructor() {}

  initializeCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;

    this.zoomLevel = 0;
    this.cameraOffsetX = 0;
    this.cameraOffsetY = 0;

    this.registerEvent(this.canvas);
  }

  draw() {
    const { ctx, canvas } = this;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 50;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    // redrawBoundBackGround(this.canvas);
  }

  zoom(e) {}

  mouseDown = (e) => {};

  mouseMove = (e) => {
    const transformedCursorPosition = getTransformedPoint(e, this.canvas, this.ctx);
  };

  mouseUp = (e) => {};

  cleanCanvas() {
    const { canvas, ctx } = this;
    // debugger;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  registerEvent(canvas) {
    // canvas.addEventListener('mousedown', this.mouseDown);
    // canvas.addEventListener('mousemove', this.mouseMove);
    // canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    // canvas.removeEventListener('mousedown', this.mouseDown(this));
    // canvas.removeEventListener('mousemove', this.mouseMove(this));
    // canvas.removeEventListener('mouseup', this.mouseUp(this));
    canvas.removeEventListener('touchstart', this.mouseDown(this));
    canvas.removeEventListener('touchmove', this.mouseMove(this));
    canvas.removeEventListener('touchend', this.mouseUp(this));
    canvas.removeEventListener('wheel', this.zoom(this));
  }
}
export default CursorCanvasClass;
