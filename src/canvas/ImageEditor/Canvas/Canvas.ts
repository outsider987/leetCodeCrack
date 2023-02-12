import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from './../Point';

class Views {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;
  drawCanvas: HTMLCanvasElement;

  drawCtx: CanvasRenderingContext2D;

  lastView = null;
  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.lastPoint = new Point(0, 0);
    this.canvas = canvas;

    this.bufferCanvas = document.createElement('canvas');
    this.bufferCtx = this.bufferCanvas.getContext('2d');
    this.drawCanvas = document.createElement('canvas');
    this.drawCtx = this.drawCanvas.getContext('2d');

    this.registerEvent(this.canvas);
  }
  loadFile(file) {
    const image = new Image();
    const { ctx, canvas } = this;
    image.onload = function res() {
      let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
      let x = (canvas.width - image.width * ratio) / 2;
      let y = (canvas.height - image.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
    };
    image.src = URL.createObjectURL(file);
  }

  redraw() {}

  zoom(e) {
    const { canvas, ctx } = this;

    let zoom = 1;
    // e.preventDefault();
    const clientPoint = getClientOffset(e, canvas);

    if (e.deltaY < 0) {
      zoom *= 1.1;
    } else {
      zoom *= 0.9;
    }

    // ctx.translate(clientPoint.x, clientPoint.y);
    let backeupCanvas = document.createElement('canvas');
    backeupCanvas.width = canvas.width;
    backeupCanvas.height = canvas.height;
    let newContext = backeupCanvas.getContext('2d');

    const lastImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    newContext.putImageData(lastImageData, 0, 0);

    const lastView = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.scale(zoom, zoom);

    // ctx.setTransform(zoom, 0, 0, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = Math.min(canvas.width / backeupCanvas.width, canvas.height / backeupCanvas.height);
    let x = (canvas.width - backeupCanvas.width * ratio) / 2;
    let y = (canvas.height - backeupCanvas.height * ratio) / 2;
    // ctx.setTransform(9, 9, 9, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
    ctx.drawImage(
      backeupCanvas,
      0,
      0,
      backeupCanvas.width,
      backeupCanvas.height,
      x,
      y,
      backeupCanvas.width * ratio,
      backeupCanvas.height * ratio,
    );

    // ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
    // ctx.scale(zoom, zoom);
    // ctx.translate(-window.innerWidth / 2 + clientPoint.x, -window.innerHeight / 2 + clientPoint.y);

    // const image = new Image();

    // const file = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // image.onload = () => {
    //   let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
    //   let x = (canvas.width - image.width * ratio) / 2;
    //   let y = (canvas.height - image.height * ratio) / 2;

    //   ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   // ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
    //   // let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
    //   // let x = (canvas.width - image.width * ratio) / 2;
    //   // let y = (canvas.height - image.height * ratio) / 2;
    //   // ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   // ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
    // };
    // let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
    // let x = (canvas.width - image.width * ratio) / 2;
    // let y = (canvas.height - image.height * ratio) / 2;

    // const lastImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // // console.log(lastImageData);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.putImageData(lastImageData, 0, 0);

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the content of the canvas
    // draw();
  }

  mouseDown = (e) => {
    // e.preventDefault();
    const clientPoint = getClientOffset(e, this.canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);

    this.isDrawStart = true;
  };

  mouseMove = (e) => {
    // e.preventDefault();
    if (!this.isDrawStart) return;

    this.loadFile(e);
    // this.lineCoordinates = this.getClientOffset(event);
    this.clearCanvas();
  };

  mouseUp = (e) => {
    // e.preventDefault();

    this.isDrawStart = false;
  };

  clearCanvas = () => {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  registerEvent(canvas) {
    // canvas.addEventListener('mousedown', this.mouseDown);
    canvas.addEventListener('mousemove', this.mouseMove);
    canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    // canvas.removeEventListener('mousedown', this.mouseDown(this));
    canvas.removeEventListener('mousemove', this.mouseMove(this));
    canvas.removeEventListener('mouseup', this.mouseUp(this));
    canvas.removeEventListener('touchstart', this.mouseDown(this));
    canvas.removeEventListener('touchmove', this.mouseMove(this));
    canvas.removeEventListener('touchend', this.mouseUp(this));
    canvas.removeEventListener('wheel', this.zoom(this));
  }
}
export default Views;
