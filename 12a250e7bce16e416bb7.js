"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_canvas_ImageEditor_Tool_index_ts"],{

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
            const MIN_DISTANCE = 50;
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
            if (this.currentCusorPoint === CursorPoint.left) {
                this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), focusRect.right - MIN_DISTANCE);
            }
            if (this.currentCusorPoint === CursorPoint.top) {
                this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), focusRect.bottom - MIN_DISTANCE);
            }
            if (this.currentCusorPoint === CursorPoint.right) {
                this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), focusRect.left + MIN_DISTANCE);
            }
            if (this.currentCusorPoint === CursorPoint.bottom) {
                this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), focusRect.top + MIN_DISTANCE);
            }
            if (this.currentCusorPoint === CursorPoint.topLeft) {
                this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), focusRect.right - MIN_DISTANCE);
                this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), focusRect.bottom - MIN_DISTANCE);
            }
            if (this.currentCusorPoint === CursorPoint.topRight) {
                this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), focusRect.left + MIN_DISTANCE);
                this.focusRect.top = Math.min(Math.max(offsetY, originalRect.top), focusRect.bottom - MIN_DISTANCE);
            }
            if (this.currentCusorPoint === CursorPoint.bottomLeft) {
                this.focusRect.left = Math.min(Math.max(offsetX, originalRect.left), focusRect.right - MIN_DISTANCE);
                this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), focusRect.top + MIN_DISTANCE);
            }
            if (this.currentCusorPoint === CursorPoint.bottomRight) {
                this.focusRect.right = Math.max(Math.min(offsetX, originalRect.right), focusRect.left + MIN_DISTANCE);
                this.focusRect.bottom = Math.max(Math.min(offsetY, originalRect.bottom), focusRect.top + MIN_DISTANCE);
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
    onConfirm() {
        const { ctx, bufferCanvas, focusRect, bufferCtx, canvas } = this;
        const transform = ctx.getTransform();
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ctx);
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        const { left, right, top, bottom } = focusRect;
        const dLeft = left - this.originalRect.left;
        const dRight = right - this.originalRect.right;
        const dTop = top - this.originalRect.top;
        const dBottom = bottom - this.originalRect.bottom;
        const widthRatio = bufferCanvas.width / this.originalRect.getWidth();
        const heightRatio = bufferCanvas.height / this.originalRect.getHeight();
        const imageData = bufferCtx.getImageData(dLeft * widthRatio, dTop * heightRatio, this.focusRect.getWidth() * widthRatio, this.focusRect.getHeight() * heightRatio);
        this.bufferCanvas.width = imageData.width;
        this.bufferCanvas.height = imageData.height;
        bufferCtx.putImageData(imageData, 0, 0);
        // refine the focusRect and originalRect
        super.draw();
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        this.focusRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        this.draw();
        this.stateController.pushUndoStack();
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
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        const widthRatio = currentOriginalRect.getWidth() / currentFocusRect.getWidth();
        const heightRatio = currentOriginalRect.getHeight() / currentFocusRect.getHeight();
        this.focusRect.setRect(this.originalRect.left + widthRatio * currentdLeft, this.originalRect.top + heightRatio * currentdTop, this.originalRect.right + widthRatio * currentdRight, this.originalRect.bottom + heightRatio * currentdBottom);
        const currentOriginalRect2 = this.originalRect;
        const currentFocusRect2 = this.focusRect;
        const currentdLeft2 = currentOriginalRect2.left - currentFocusRect2.left;
        const currentdRight2 = currentOriginalRect2.right - currentFocusRect2.right;
        const currentdTop2 = currentOriginalRect2.top - currentFocusRect2.top;
        const currentdBottom2 = currentOriginalRect2.bottom - currentFocusRect2.bottom;
        this.originalRect.setRect(transform.e, transform.f, transform.e + bufferCanvas.width * currentZoom, transform.f + bufferCanvas.height * currentZoom);
        const widthRatio2 = currentOriginalRect.getWidth() / currentFocusRect.getWidth();
        const heightRatio2 = currentOriginalRect.getHeight() / currentFocusRect.getHeight();
        this.focusRect.setRect(this.originalRect.left + widthRatio2 * currentdLeft2, this.originalRect.top + heightRatio2 * currentdTop2, this.originalRect.right + widthRatio2 * currentdRight2, this.originalRect.bottom + heightRatio2 * currentdBottom2);
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
//# sourceMappingURL=js/12a250e7bce16e416bb7.js.map