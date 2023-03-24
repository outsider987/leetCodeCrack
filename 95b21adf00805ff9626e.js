"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_canvas_ImageEditor_StateController_StateController_ts-src_canvas_ImageEditor_Tool_index_ts"],{

/***/ "./src/canvas/ImageEditor/Point.ts":
/*!*****************************************!*\
  !*** ./src/canvas/ImageEditor/Point.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setPoint(x, y) {
        this.x = x;
        this.y = y;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


/***/ }),

/***/ "./src/canvas/ImageEditor/Rect.ts":
/*!****************************************!*\
  !*** ./src/canvas/ImageEditor/Rect.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Rect {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    setRect(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    getWidth() {
        return this.right - this.left;
    }
    getHeight() {
        return this.bottom - this.top;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);


/***/ }),

/***/ "./src/canvas/ImageEditor/StateController/StateController.ts":
/*!*******************************************************************!*\
  !*** ./src/canvas/ImageEditor/StateController/StateController.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/image */ "./src/utils/image.ts");

class StateController {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
        this.mouseDown = (e) => { };
        this.mouseMove = (e) => { };
        this.mouseUp = (e) => { };
        this.onKeyDown = (e) => {
            if (e.ctrlKey) {
                if (e.key === 'z') {
                    this.undo.apply(this);
                }
                if (e.key === 'y') {
                    this.redo.apply(this);
                }
            }
        };
        this.undoStack = [];
        this.redoStack = [];
    }
    initializeCanvas(views) {
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
        if (this.undoStack.length <= 1)
            return;
        // Remove current state from undo stack and push onto redo stack
        const currentState = undoStack.pop();
        redoStack.push(currentState);
        // Load previous state from undo stack onto canvas
        const previousState = undoStack[undoStack.length - 1] || currentState;
        const img = new Image();
        img.src = previousState;
        await (0,_utils_image__WEBPACK_IMPORTED_MODULE_0__.onload2promise)(img);
        bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);
        bufferCtx.drawImage(img, 0, 0, bufferCanvas.width, bufferCanvas.height, 0, 0, bufferCanvas.width, bufferCanvas.height);
        this.draw();
    }
    async redo() {
        const { undoStack, redoStack, bufferCtx, bufferCanvas } = this;
        if (redoStack.length === 0)
            return;
        // Remove current state from redo stack and push onto undo stack
        const currentState = redoStack.pop();
        undoStack.push(currentState);
        // Load next state from redo stack onto canvas
        const nextImage = new Image();
        nextImage.src = currentState;
        await (0,_utils_image__WEBPACK_IMPORTED_MODULE_0__.onload2promise)(nextImage);
        bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);
        bufferCtx.drawImage(nextImage, 0, 0, bufferCanvas.width, bufferCanvas.height, 0, 0, bufferCanvas.width, bufferCanvas.height);
        this.draw();
    }
    cleanState() {
        this.unRegisterEvent(this.canvas);
        console.log('cleanState');
        this.undoStack = [];
        this.redoStack = [];
    }
    pushUndoStack() {
        const { undoStack, canvas, bufferCanvas } = this;
        if (bufferCanvas) {
            undoStack.push(bufferCanvas.toDataURL());
            this.redoStack = [];
        }
    }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateController);


/***/ }),

/***/ "./src/canvas/ImageEditor/Tool/BaselTool.ts":
/*!**************************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/BaselTool.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class BaseTool {
    constructor(views, stateController, rasterViews) {
        this.mouseDown = (e) => { };
        this.mouseMove = (e) => { };
        this.mouseUp = (e) => { };
        this.views = views;
        this.canvas = views.canvas;
        this.bufferCanvas = views.bufferCanvas;
        this.bufferCtx = views.bufferCtx;
        this.ctx = views.ctx;
        this.stateController = stateController;
        this.rasterCanvas = rasterViews.rasterCanvas;
        this.rasterCtx = rasterViews.rasterCtx;
        this.rasterViews = rasterViews;
    }
    draw(e) {
        const { views } = this;
        views.draw();
    }
    zoom(e) { }
    doCmd() {
        const { stateController } = this;
        stateController.pushUndoStack();
    }
    registerEvent(canvas) {
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
        canvas.addEventListener('wheel', this.zoom);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseTool);


/***/ }),

/***/ "./src/canvas/ImageEditor/Tool/Brush.ts":
/*!**********************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/Brush.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");
/* harmony import */ var _BaselTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaselTool */ "./src/canvas/ImageEditor/Tool/BaselTool.ts");



class BrushTool extends _BaselTool__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(views, stateController, rasterViews) {
        super(views, stateController, rasterViews);
        this.isDrawStart = false;
        this.setColor = (color) => {
            this.color = color;
        };
        this.setSize = (size) => {
            this.size = size;
        };
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isDrawStart = true;
            const { canvas, ctx } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
            this.draw(e);
        };
        this.mouseMove = (e) => {
            if (!this.isDrawStart)
                return;
            this.draw(e);
        };
        this.mouseUp = (e) => {
            this.isDrawStart = false;
            this.draw(e);
            super.doCmd();
        };
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.setColor('black');
        this.size = 5;
    }
    draw(e) {
        const { bufferCtx, canvas, ctx } = this;
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
        bufferCtx.beginPath();
        bufferCtx.moveTo(this.lastPoint.x, this.lastPoint.y);
        bufferCtx.lineTo(currentTransformedCursor.x, currentTransformedCursor.y);
        bufferCtx.strokeStyle = this.color;
        bufferCtx.lineWidth = this.size;
        bufferCtx.lineCap = 'round';
        bufferCtx.stroke();
        bufferCtx.closePath();
        this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
        super.draw(e);
    }
    registerEvent() {
        const { canvas } = this;
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
    }
    unRegisterEvent() {
        const { canvas } = this;
        canvas.removeEventListener('mousedown', this.mouseDown);
        canvas.removeEventListener('mousemove', this.mouseMove);
        canvas.removeEventListener('mouseup', this.mouseUp);
        canvas.removeEventListener('touchstart', this.mouseDown);
        canvas.removeEventListener('touchmove', this.mouseMove);
        canvas.removeEventListener('touchend', this.mouseUp);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrushTool);


/***/ }),

/***/ "./src/canvas/ImageEditor/Tool/Crop.ts":
/*!*********************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/Crop.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");
/* harmony import */ var _utils_canvas_rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utils/canvas/rect */ "./src/utils/canvas/rect.ts");
/* harmony import */ var _BaselTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaselTool */ "./src/canvas/ImageEditor/Tool/BaselTool.ts");
/* harmony import */ var _utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/canvas/mainCanvas */ "./src/utils/canvas/mainCanvas.ts");
/* harmony import */ var _utils_canvas_rasterCanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utils/canvas/rasterCanvas */ "./src/utils/canvas/rasterCanvas.ts");
/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Rect */ "./src/canvas/ImageEditor/Rect.ts");







class CropTool extends _BaselTool__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(views, stateController, rasterViews) {
        super(views, stateController, rasterViews);
        this.isStart = false;
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isStart = true;
            const { canvas, ctx } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
        };
        this.mouseMove = (e) => {
            const { canvas, ctx, originalRect } = this;
            const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
            const point = { x: offsetX, y: offsetY };
            (0,_utils_canvas_rasterCanvas__WEBPACK_IMPORTED_MODULE_5__.cropCursorChange)(canvas, point, originalRect);
            e.preventDefault();
            if (!this.isStart)
                return;
            const isOutside = !(0,_utils_canvas_rect__WEBPACK_IMPORTED_MODULE_2__.IsInRect)(point.x, point.y, originalRect.left, originalRect.top, originalRect.right, originalRect.bottom);
            if (isOutside) {
                const isleft = point.x < originalRect.left;
                const isTop = point.y < originalRect.top;
                const isRight = point.x > originalRect.right;
                const isBottom = point.y > originalRect.bottom;
                if (isTop && isRight) {
                }
                if (isBottom && isRight) {
                }
                if (isleft && isTop) {
                }
                if (isRight && isBottom) {
                }
                if (isTop) {
                    this.focusRect.top = offsetY;
                }
                if (isBottom) {
                    this.focusRect.bottom = offsetY;
                }
                if (isleft) {
                    this.focusRect.left = offsetX;
                }
                if (isRight) {
                    this.focusRect.right = offsetX;
                }
            }
            this.draw(e);
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            const { ctx } = this;
            this.isStart = false;
            this.draw(e);
        };
        const { ctx, bufferCanvas } = this;
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.zoomBindObject = this.zoom.bind(this, views.canvas);
        const transform = ctx.getTransform();
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_4__.getCurrentZoom)(ctx);
        this.originalRect = new _Rect__WEBPACK_IMPORTED_MODULE_6__["default"](transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        this.focusRect = new _Rect__WEBPACK_IMPORTED_MODULE_6__["default"](transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
    }
    draw(e) {
        const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas, isStart, focusRect } = this;
        (0,_utils_canvas_rasterCanvas__WEBPACK_IMPORTED_MODULE_5__.drawCropFiled)(ctx, bufferCanvas, rasterCtx, rasterCanvas, isStart, focusRect);
        const transform = ctx.getTransform();
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_4__.getCurrentZoom)(ctx);
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
    }
    resetRect() {
        const { ctx, bufferCanvas } = this;
        const transform = ctx.getTransform();
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_4__.getCurrentZoom)(ctx);
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        this.focusRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
    }
    zoom(e) {
        const { ctx, rasterCanvas, canvas, rasterCtx: rasterCtx, bufferCanvas } = this;
        this.draw(e);
    }
    cleanCanvas() {
        this.rasterCtx.clearRect(0, 0, this.rasterCanvas.width, this.rasterCanvas.height);
    }
    registerEvent() {
        const { canvas } = this;
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
        canvas.addEventListener('wheel', this.zoomBindObject);
        canvas.addEventListener('resize', this.zoomBindObject);
    }
    unRegisterEvent() {
        const { canvas } = this;
        canvas.removeEventListener('mousedown', this.mouseDown);
        canvas.removeEventListener('mousemove', this.mouseMove);
        canvas.removeEventListener('mouseup', this.mouseUp);
        canvas.removeEventListener('touchstart', this.mouseDown);
        canvas.removeEventListener('touchmove', this.mouseMove);
        canvas.removeEventListener('touchend', this.mouseUp);
        canvas.removeEventListener('wheel', this.zoomBindObject);
        canvas.removeEventListener('resize', this.zoomBindObject);
        this.cleanCanvas();
        this.canvas.style.cursor = 'default';
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CropTool);


/***/ }),

/***/ "./src/canvas/ImageEditor/Tool/Erase.ts":
/*!**********************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/Erase.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");
/* harmony import */ var _BaselTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaselTool */ "./src/canvas/ImageEditor/Tool/BaselTool.ts");



class EraseTool extends _BaselTool__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(views, stateController, rasterViews) {
        super(views, stateController, rasterViews);
        this.isDrawStart = false;
        this.setSize = (size) => {
            this.size = size;
        };
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isDrawStart = true;
            const { canvas, ctx } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
            this.draw(e);
        };
        this.mouseMove = (e) => {
            if (!this.isDrawStart)
                return;
            this.draw(e);
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            const { bufferCtx } = this;
            this.draw(e);
            this.isDrawStart = false;
            bufferCtx.globalCompositeOperation = 'source-over';
            super.doCmd();
        };
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.size = 5;
    }
    draw(e) {
        const { bufferCtx, size, canvas, ctx } = this;
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
        bufferCtx.beginPath();
        bufferCtx.globalCompositeOperation = 'destination-out';
        bufferCtx.moveTo(this.lastPoint.x, this.lastPoint.y);
        bufferCtx.lineTo(currentTransformedCursor.x, currentTransformedCursor.y);
        bufferCtx.lineWidth = size;
        bufferCtx.lineCap = 'round';
        bufferCtx.stroke();
        bufferCtx.closePath();
        this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
        super.draw(e);
    }
    registerEvent() {
        const { canvas } = this;
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
    }
    unRegisterEvent() {
        const { canvas } = this;
        canvas.removeEventListener('mousedown', this.mouseDown);
        canvas.removeEventListener('mousemove', this.mouseMove);
        canvas.removeEventListener('mouseup', this.mouseUp);
        canvas.removeEventListener('touchstart', this.mouseDown);
        canvas.removeEventListener('touchmove', this.mouseMove);
        canvas.removeEventListener('touchend', this.mouseUp);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EraseTool);


/***/ }),

/***/ "./src/canvas/ImageEditor/Tool/Pan.ts":
/*!********************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/Pan.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");
/* harmony import */ var _BaselTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaselTool */ "./src/canvas/ImageEditor/Tool/BaselTool.ts");



class PanTool extends _BaselTool__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(views, stateController, rasterViews) {
        super(views, stateController, rasterViews);
        this.isPanStart = false;
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isPanStart = true;
            const { canvas, ctx } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
        };
        this.mouseMove = (e) => {
            const { canvas, ctx } = this;
            e.preventDefault();
            if (!this.isPanStart)
                return;
            this.draw(e);
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            const { ctx } = this;
            this.isPanStart = false;
            super.doCmd();
        };
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    }
    draw(e) {
        const { ctx, canvas } = this;
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
        ctx.translate(currentTransformedCursor.x - this.lastPoint.x, currentTransformedCursor.y - this.lastPoint.y);
        super.draw(e);
    }
    registerEvent() {
        const { canvas } = this;
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
    }
    unRegisterEvent() {
        const { canvas } = this;
        canvas.removeEventListener('mousedown', this.mouseDown);
        canvas.removeEventListener('mousemove', this.mouseMove);
        canvas.removeEventListener('mouseup', this.mouseUp);
        canvas.removeEventListener('touchstart', this.mouseDown);
        canvas.removeEventListener('touchmove', this.mouseMove);
        canvas.removeEventListener('touchend', this.mouseUp);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanTool);


/***/ }),

/***/ "./src/canvas/ImageEditor/Tool/index.ts":
/*!**********************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tools": () => (/* binding */ Tools),
/* harmony export */   "default": () => (/* binding */ dynamicClass)
/* harmony export */ });
/* harmony import */ var _Erase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Erase */ "./src/canvas/ImageEditor/Tool/Erase.ts");
/* harmony import */ var _Brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brush */ "./src/canvas/ImageEditor/Tool/Brush.ts");
/* harmony import */ var _Pan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pan */ "./src/canvas/ImageEditor/Tool/Pan.ts");
/* harmony import */ var _Crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Crop */ "./src/canvas/ImageEditor/Tool/Crop.ts");




const Tools = {
    BrushTool: _Brush__WEBPACK_IMPORTED_MODULE_1__["default"],
    EraseTool: _Erase__WEBPACK_IMPORTED_MODULE_0__["default"],
    PanTool: _Pan__WEBPACK_IMPORTED_MODULE_2__["default"],
    CropTool: _Crop__WEBPACK_IMPORTED_MODULE_3__["default"],
};
function dynamicClass(name) {
    return Tools[name];
}


/***/ })

}]);
//# sourceMappingURL=js/95b21adf00805ff9626e.js.map