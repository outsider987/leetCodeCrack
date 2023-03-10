import Point from '../Point';
import Layer from './Layer';

class BackgroundLayer extends Layer {
  private backgroundCanvas: HTMLCanvasElement;
  private backgroundCtx: CanvasRenderingContext2D;
  private rectSize: number;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.lastPoint = new Point(0, 0);
    this.canvas = canvas;

    this.backgroundCanvas = document.createElement('canvas');
    this.backgroundCanvas.width = canvas.width;
    this.backgroundCanvas.height = canvas.height;
    this.backgroundCtx = this.backgroundCanvas.getContext('2d');
    this.registerEvent(this.backgroundCanvas);
    this.rectSize = 20;
    this.draw();
  }

  draw() {
    const { backgroundCanvas, backgroundCtx, rectSize } = this;

    const numRows = Math.floor(backgroundCanvas.height / rectSize);
    const numCols = Math.floor(backgroundCanvas.width / rectSize);

    const rectWidth = backgroundCanvas.width / numCols;
    const rectHeight = backgroundCanvas.height / numRows;

    // loop through the rows
    for (let i = 0; i < numRows; i++) {
      // loop through the columns
      for (let j = 0; j < numCols; j++) {
        // calculate the x and y coordinates of the rectangle
        const x = j * rectWidth;
        const y = i * rectHeight;

        // fill the rectangle with grey or white depending on the row and column
        if ((i + j) % 2 === 0) {
          backgroundCtx.fillStyle = '#dddddd';
        } else {
          backgroundCtx.fillStyle = '#ffffff';
        }
        backgroundCtx.fillRect(x, y, rectWidth, rectHeight);
      }
    }
  }

  zoom(e, zoomLevel: number) {
    this.rectSize = Math.min(40 / zoomLevel, 20);
    this.draw();
  }

  getLayerCanvas() {
    return this.backgroundCanvas;
  }
  registerEvent(canvas) {
    // canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    // canvas.removeEventListener('wheel', this.zoom(this));
  }
}
export default BackgroundLayer;
