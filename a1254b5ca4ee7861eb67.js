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
    scaleRect(level) {
        const width = this.right - this.left;
        const height = this.bottom - this.top;
        // Scale the width and height based on the scaleX and scaleY parameters
        const scaledWidth = width * level;
        const scaledHeight = height * level;
        // Calculate the new coordinates for the scaled rectangle
        const scaledLeft = this.left - (scaledWidth - width) / 2;
        const scaledTop = this.top - (scaledHeight - height) / 2;
        const scaledRight = scaledLeft + scaledWidth;
        const scaledBottom = scaledTop + scaledHeight;
        this.left = scaledLeft;
        this.top = scaledTop;
        this.right = scaledRight;
        this.bottom = scaledBottom;
    }
    IsOverBoundRect(innerLeft, innerTop, innerRight, innerBottom, outerLeft, outerTop, outerRight, outerBottom) {
        return innerLeft < outerLeft || innerTop < outerTop || innerRight > outerRight || innerBottom > outerBottom;
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
/* harmony export */   "CursorPoint": () => (/* binding */ CursorPoint),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");
/* harmony import */ var _BaselTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaselTool */ "./src/canvas/ImageEditor/Tool/BaselTool.ts");
/* harmony import */ var _utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/canvas/mainCanvas */ "./src/utils/canvas/mainCanvas.ts");
/* harmony import */ var _utils_canvas_rasterCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/canvas/rasterCanvas */ "./src/utils/canvas/rasterCanvas.ts");
/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Rect */ "./src/canvas/ImageEditor/Rect.ts");






var CursorPoint;
(function (CursorPoint) {
    CursorPoint["left"] = "left";
    CursorPoint["right"] = "right";
    CursorPoint["top"] = "top";
    CursorPoint["bottom"] = "bottom";
    CursorPoint["topLeft"] = "topLeft";
    CursorPoint["topRight"] = "topRight";
    CursorPoint["bottomLeft"] = "bottomLeft";
    CursorPoint["bottomRight"] = "bottomRight";
    CursorPoint["move"] = "move";
})(CursorPoint || (CursorPoint = {}));
class CropTool extends _BaselTool__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(views, stateController, rasterViews) {
        super(views, stateController, rasterViews);
        this.isDrag = false;
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isDrag = true;
            const { canvas, ctx } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
            const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
            this.currentCusorPoint = (0,_utils_canvas_rasterCanvas__WEBPACK_IMPORTED_MODULE_4__.getCursorPoint)({ x: offsetX, y: offsetY }, this.focusRect);
            this.lastPoint.setPoint(offsetX, offsetY);
        };
        this.mouseMove = (e) => {
            const { canvas, ctx, originalRect, focusRect } = this;
            const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
            const point = { x: offsetX, y: offsetY };
            e.preventDefault();
            if (!this.isDrag) {
                (0,_utils_canvas_rasterCanvas__WEBPACK_IMPORTED_MODULE_4__.cropCursorChange)(canvas, point, focusRect);
                return;
            }
            if (this.currentCusorPoint === CursorPoint.move) {
                let dx = offsetX - this.lastPoint.x;
                let dy = offsetY - this.lastPoint.y;
                // calculate new position
                const newLeft = focusRect.left + dx;
                const newRight = focusRect.right + dx;
                const newTop = focusRect.top + dy;
                const newBottom = focusRect.bottom + dy;
                // check whether new position is within bounds sides
                if (newLeft < originalRect.left) {
                    dx = originalRect.left - focusRect.left;
                }
                if (newTop < originalRect.top) {
                    dy = originalRect.top - focusRect.top;
                }
                if (newRight > originalRect.right) {
                    dx = originalRect.right - focusRect.right;
                }
                if (newBottom > originalRect.bottom) {
                    dy = originalRect.bottom - focusRect.bottom;
                }
                // update focusRect with modified dx and dy
                this.focusRect.left += dx;
                this.focusRect.right += dx;
                this.focusRect.top += dy;
                this.focusRect.bottom += dy;
                this.lastPoint.setPoint(offsetX, offsetY);
            }
            const MIN_DISTANCE = 50;
            if (this.currentCusorPoint === CursorPoint.left) {
                this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), originalRect.right);
            }
            if (this.currentCusorPoint === CursorPoint.top) {
                this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), originalRect.bottom);
            }
            if (this.currentCusorPoint === CursorPoint.right) {
                this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), originalRect.left);
            }
            if (this.currentCusorPoint === CursorPoint.bottom) {
                this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), originalRect.top);
            }
            if (this.currentCusorPoint === CursorPoint.topLeft) {
                this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), originalRect.right);
                this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), originalRect.bottom);
            }
            if (this.currentCusorPoint === CursorPoint.topRight) {
                this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), originalRect.left);
                this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), originalRect.bottom);
            }
            if (this.currentCusorPoint === CursorPoint.bottomLeft) {
                this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), originalRect.right);
                this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), originalRect.top);
            }
            if (this.currentCusorPoint === CursorPoint.bottomRight) {
                this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), originalRect.left);
                this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), originalRect.top);
            }
            this.draw(e);
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            const { ctx } = this;
            this.isDrag = false;
            this.draw(e);
        };
        const { ctx, bufferCanvas } = this;
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.zoomBindObject = this.zoom.bind(this, views.canvas);
        const transform = ctx.getTransform();
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ctx);
        this.originalRect = new _Rect__WEBPACK_IMPORTED_MODULE_5__["default"](transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        this.focusRect = new _Rect__WEBPACK_IMPORTED_MODULE_5__["default"](transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
    }
    draw(e) {
        const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas, isDrag: isStart, focusRect } = this;
        (0,_utils_canvas_rasterCanvas__WEBPACK_IMPORTED_MODULE_4__.drawCropFiled)(ctx, bufferCanvas, rasterCtx, rasterCanvas, isStart, focusRect);
        const transform = ctx.getTransform();
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ctx);
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
    }
    resetRect() {
        const { ctx, bufferCanvas } = this;
        const transform = ctx.getTransform();
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ctx);
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        this.focusRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
    }
    zoom(e) {
        const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas, originalRect, focusRect } = this;
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ctx); // helper function to get current zoom level
        const transform = ctx.getTransform();
        const currentOriginalRect = this.originalRect;
        const currentFocusRect = this.focusRect;
        const currentdLeft = currentOriginalRect.left - currentFocusRect.left;
        const currentdRight = currentOriginalRect.right - currentFocusRect.right;
        const currentdTop = currentOriginalRect.top - currentFocusRect.top;
        const currentdBottom = currentOriginalRect.bottom - currentFocusRect.bottom;
        // // debugger;
        // const dLeft = transform.e - currentOriginalRect.left;
        // const dRight = transform.e + bufferCanvas.width * currentZoom - currentOriginalRect.right;
        // const dTop = transform.f - currentOriginalRect.top;
        // const dBottom = transform.f + bufferCanvas.height * currentZoom - currentOriginalRect.bottom;
        console.log(this.originalRect);
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        console.log(this.originalRect);
        console.log(currentOriginalRect.getWidth());
        console.log(currentFocusRect.getWidth());
        const widthRatio = currentOriginalRect.getWidth() / currentFocusRect.getWidth();
        const heightRatio = currentOriginalRect.getHeight() / currentFocusRect.getHeight();
        debugger;
        this.focusRect.setRect(this.originalRect.left + widthRatio * currentdLeft, this.originalRect.top + heightRatio * currentdTop, this.originalRect.right + widthRatio * currentdRight, this.originalRect.bottom + heightRatio * currentdBottom);
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
//# sourceMappingURL=js/a1254b5ca4ee7861eb67.js.map