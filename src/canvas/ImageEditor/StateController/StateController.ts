import { onload2promise } from '~/utils/image';
import Views from '../Canvas/Canvas';

class StateController {
  undoStack = [];
  redoStack = [];
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  bufferCanvas: HTMLCanvasElement;
  bufferCtx: CanvasRenderingContext2D;
  views: Views;
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }
  initializeCanvas(views: Views) {
    this.canvas = views.canvas;
    this.bufferCanvas = views.bufferCanvas;
    this.bufferCtx = views.bufferCtx;
    this.views = views;
    this.registerEvent(this.canvas);
  }
  draw() {
    const { views } = this;
    views.draw();
  }
  async undo() {
    const { undoStack, redoStack, bufferCtx, bufferCanvas, views } = this;
    if (this.undoStack.length <= 1) return;
    // Remove current state from undo stack and push onto redo stack
    const currentState = undoStack.pop();
    redoStack.push(currentState);
    // Load previous state from undo stack onto canvas
    const previousState = undoStack[undoStack.length - 1] || currentState;
    const img = new Image();
    img.src = previousState;
    await onload2promise(img);
    bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);
    bufferCtx.drawImage(
      img,
      0,
      0,
      bufferCanvas.width,
      bufferCanvas.height,
      0,
      0,
      bufferCanvas.width,
      bufferCanvas.height,
    );

    this.draw();
  }

  async redo() {
    const { undoStack, redoStack, bufferCtx, bufferCanvas } = this;

    if (redoStack.length === 0) return;
    // Remove current state from redo stack and push onto undo stack
    const currentState = redoStack.pop();
    undoStack.push(currentState);
    // Load next state from redo stack onto canvas
    const nextImage = new Image();
    nextImage.src = currentState;
    await onload2promise(nextImage);
    bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);
    bufferCtx.drawImage(
      nextImage,
      0,
      0,
      bufferCanvas.width,
      bufferCanvas.height,
      0,
      0,
      bufferCanvas.width,
      bufferCanvas.height,
    );

    this.draw();
  }

  cleanState() {
    debugger;
    this.unRegisterEvent(this.canvas);
    console.log('cleanState');
    this.undoStack = [];
    this.redoStack = [];
  }

  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {};

  pushUndoStack() {
    const { undoStack, canvas, bufferCanvas } = this;

    if (bufferCanvas) {
      undoStack.push(bufferCanvas.toDataURL());
      this.redoStack = [];
    }
  }

  onKeyDown = (e) => {
    if (e.ctrlKey) {
      if (e.key === 'z') {
        this.undo.apply(this);
      }

      if (e.key === 'y') {
        this.redo.apply(this);
      }
    }
  };

  registerEvent(canvas) {
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp.bind(this));
    canvas.addEventListener('mouseup', this.mouseUp.bind(this));
    window.addEventListener('keydown', this.onKeyDown);
    // canvas.addEventListener('wheel', this.zoom.bind);
  }
  unRegisterEvent(canvas) {
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp.bind(this));
    canvas.removeEventListener('mouseup', this.mouseUp.bind(this));
    window.removeEventListener('keydown', this.onKeyDown);
    // canvas.removeEventListener('wheel', this.zoom(this));
  }
}

export default StateController;
