"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_canvas_ImageEditor_Point_ts-src_canvas_ImageEditor_Rect_ts-src_canvas_ImageEditor_StateCo-d9f966"],{

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


/***/ })

}]);
//# sourceMappingURL=js/691e44add122f1e2008c.js.map