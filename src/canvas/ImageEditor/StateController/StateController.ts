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
  }
  undo() {
    debugger;
    const { undoStack, redoStack, bufferCtx, bufferCanvas, canvas } = this;
    if (undoStack.length < 2) return;
    // Remove current state from undo stack and push onto redo stack
    const currentState = undoStack.pop();
    redoStack.push(currentState);
    // Load previous state from undo stack onto canvas
    const previousState = undoStack[undoStack.length - 1];
    const img = new Image();
    img.onload = function () {
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
    };
    img.src = previousState;
  }

  redo() {
    debugger;
    const { undoStack, redoStack, bufferCtx, bufferCanvas } = this;
    if (redoStack.length === 0) return;
    // Remove current state from redo stack and push onto undo stack
    const currentState = redoStack.pop();
    undoStack.push(currentState);
    // Load next state from redo stack onto canvas
    const nextImage = new Image();
    nextImage.onload = function () {
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
    };
    nextImage.src = currentState;
  }

  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {
    const { undoStack, canvas, bufferCanvas } = this;
    debugger;
    if (bufferCanvas) undoStack.push(bufferCanvas.toDataURL());
  };

  onKeyDown = (e) => {
    const { undo, redo } = this;

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
    debugger;
    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp.bind(this));
    canvas.addEventListener('mouseup', this.mouseUp.bind(this));
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    // canvas.addEventListener('wheel', this.zoom.bind);
  }
  unRegisterEvent(canvas) {
    canvas.removeEventListener('touchstart', this.mouseDown);
    canvas.removeEventListener('touchmove', this.mouseMove);
    canvas.removeEventListener('touchend', this.mouseUp.bind(this));
    canvas.removeEventListener('mouseup', this.mouseUp.bind(this));
    window.removeEventListener('keydown', this.onKeyDown.bind(this));
    // canvas.removeEventListener('wheel', this.zoom(this));
  }
}

export default StateController;
