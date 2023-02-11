import { getClientOffset } from '~/utils/canvas/coordinate';
import Point from './../Point';

class CanvasPaint {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  lastPoint: Point;
  private isDrawStart: boolean = false;

  lastView = null;
  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx;
    this.lastPoint = new Point(0, 0);
    this.canvas = canvas;
    console.log();

    this.registerEvent(this.canvas);
  }
  draw(file) {
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

  zoom(e) {
    const { canvas, ctx } = this;

    let zoom = 1;
    e.preventDefault();
    const clientPoint = getClientOffset(e, canvas);

    if (e.deltaY < 0) {
      zoom *= 1.1;
    } else {
      zoom *= 0.9;
    }

    // ctx.translate(clientPoint.x, clientPoint.y);

    const lastView = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.scale(zoom, zoom);

    // ctx.setTransform(zoom, 0, 0, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ctx.setTransform(9, 9, 9, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
    ctx.putImageData(lastView, 0, 0);

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
    e.preventDefault();
    const clientPoint = getClientOffset(e, this.canvas);
    this.lastPoint.setPoint(clientPoint.x, clientPoint.y);

    this.isDrawStart = true;
  };

  mouseMove = (e) => {
    e.preventDefault();
    if (!this.isDrawStart) return;

    this.draw(e);
    // this.lineCoordinates = this.getClientOffset(event);
    this.clearCanvas();
  };

  mouseUp = (e) => {
    e.preventDefault();

    this.isDrawStart = false;
  };

  clearCanvas = () => {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  registerEvent(canvas) {
    canvas.addEventListener('mousedown', this.mouseDown);
    canvas.addEventListener('mousemove', this.mouseMove);
    canvas.addEventListener('mouseup', this.mouseUp);
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp);
    canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    canvas.removeEventListener('mousedown', this.mouseDown);
    canvas.removeEventListener('mousemove', this.mouseMove);
    canvas.removeEventListener('mouseup', this.mouseUp);
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp);
    canvas.removeEventListener('wheel', this.zoom);
  }
}
export default CanvasPaint;
