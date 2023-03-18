class StateController {
  undoStack = [];
  redoStack = [];
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  constructor(canvas: HTMLCanvasElement) {
    this.undoStack = [];
    this.redoStack = [];
    this.registerEvent(canvas);
  }

  undo() {
    debugger;
    const { undoStack, redoStack, ctx, canvas } = this;
    if (undoStack.length < 2) return;
    // Remove current state from undo stack and push onto redo stack
    const currentState = undoStack.pop();
    redoStack.push(currentState);
    // Load previous state from undo stack onto canvas
    const previousState = undoStack[undoStack.length - 1];
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    };
    img.src = previousState;
  }

  redo() {
    debugger;
    const { undoStack, redoStack, ctx, canvas } = this;
    if (redoStack.length === 0) return;
    // Remove current state from redo stack and push onto undo stack
    const currentState = redoStack.pop();
    undoStack.push(currentState);
    // Load next state from redo stack onto canvas
    const nextImage = new Image();
    nextImage.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(nextImage, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    };
    nextImage.src = currentState;
  }

  mouseDown = (e) => {};

  mouseMove = (e) => {};

  mouseUp = (e) => {
    const { undoStack, canvas } = this;
    if (canvas) undoStack.push(canvas.toDataURL());
  };

  registerEvent(canvas) {
    const { undo, redo } = this;

    canvas.addEventListener('touchstart', this.mouseDown);
    canvas.addEventListener('touchmove', this.mouseMove);
    canvas.addEventListener('touchend', this.mouseUp(this));
    canvas.addEventListener('keydown', function (event) {
      console.log('keydow');
      if (event.ctrlKey) {
        if (event.key === 'z') {
          undo();
        }

        if (event.key === 'y') {
          redo();
        }
      }
    });
    // canvas.addEventListener('wheel', this.zoom.bind(this));
  }
  unRegisterEvent(canvas) {
    canvas.removeEventListener('touchstart', this.mouseDown(this));
    canvas.removeEventListener('touchmove', this.mouseMove(this));
    canvas.removeEventListener('touchend', this.mouseUp(this));
    canvas.removeEventListener('keydown', this.mouseUp(this));
    // canvas.removeEventListener('wheel', this.zoom(this));
  }
}

export default StateController;
