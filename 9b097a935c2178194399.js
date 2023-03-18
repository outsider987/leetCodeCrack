"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_canvas_ImageEditor_Canvas_Canvas_ts-src_canvas_ImageEditor_StateController_StateControlle-78a8c4"],{

/***/ "./src/canvas/ImageEditor/Canvas/Canvas.ts":
/*!*************************************************!*\
  !*** ./src/canvas/ImageEditor/Canvas/Canvas.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Layer_FileLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer/FileLayer */ "./src/canvas/ImageEditor/Layer/FileLayer.ts");
/* harmony import */ var _Layer_BackgroundLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer/BackgroundLayer */ "./src/canvas/ImageEditor/Layer/BackgroundLayer.ts");
/* harmony import */ var _utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/canvas/mainCanvas */ "./src/utils/canvas/mainCanvas.ts");
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/image */ "./src/utils/image.ts");
/* harmony import */ var _utils_canvas_rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utils/canvas/rect */ "./src/utils/canvas/rect.ts");






class Views {
    constructor() {
        this.isDrawStart = false;
        this.zoomLevel = 1;
        this.lastView = null;
        this.layerArray = [];
        this.cameraOffsetX = 0;
        this.cameraOffsetY = 0;
        this.mouseDown = (e) => { };
        this.mouseMove = (e) => { };
        this.mouseUp = (e) => { };
    }
    initializeCanvas(canvas) {
        // initialize canvas
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.bufferCanvas = document.createElement('canvas');
        this.bufferCtx = this.bufferCanvas.getContext('2d');
        this.zoomLevel = 0;
        this.cameraOffsetX = 0;
        this.cameraOffsetY = 0;
        this.registerEvent(this.canvas);
    }
    async loadFile(file) {
        const { bufferCanvas, bufferCtx, canvas, ctx } = this;
        const layer = new _Layer_FileLayer__WEBPACK_IMPORTED_MODULE_1__["default"](bufferCanvas);
        this.layerArray.push(layer);
        const image = new Image();
        image.src = URL.createObjectURL(file);
        await (0,_utils_image__WEBPACK_IMPORTED_MODULE_4__.onload2promise)(image);
        const newSize = (0,_utils_canvas_rect__WEBPACK_IMPORTED_MODULE_5__.getNewSize)(canvas, image);
        bufferCanvas.width = newSize.newWidth;
        bufferCanvas.height = newSize.newHeight;
        bufferCtx.clearRect(0, 0, canvas.width, canvas.height);
        bufferCtx.fillStyle = 'black';
        bufferCtx.fillRect(0, 0, canvas.width, canvas.height);
        let ratio = Math.min(bufferCanvas.width / image.width, bufferCanvas.height / image.height);
        let x = (bufferCanvas.width - image.width * ratio) / 2;
        let y = (bufferCanvas.height - image.height * ratio) / 2;
        bufferCtx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(0.5, 0.5);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        ctx.transform(1, 0, 0, 1, (canvas.width - bufferCanvas.width) / 2, (canvas.height - bufferCanvas.height) / 2);
        this.backgroundLayer = await new _Layer_BackgroundLayer__WEBPACK_IMPORTED_MODULE_2__["default"](this.bufferCanvas);
        this.draw();
    }
    draw() {
        const { ctx, bufferCanvas, canvas, bufferCtx } = this;
        (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__.redrawBoundBackGround)(this.canvas);
        ctx.drawImage(this.backgroundLayer.getLayerCanvas(), 0, 0);
        ctx.drawImage(bufferCanvas, 0, 0);
    }
    zoom(e) {
        const { canvas, ctx, bufferCanvas } = this;
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoint)(e, canvas, this.ctx);
        const zoom = e.deltaY < 0 ? 1.1 : 0.9;
        const maxZoom = 15; // maximum zoom level
        const minZoom = 0.1; // minimum zoom level
        const currentZoom = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ctx); // helper function to get current zoom level
        // Calculate the new zoom level, making sure it stays within the maximum and minimum bounds
        const newZoom = Math.min(Math.max(currentZoom * zoom, minZoom), maxZoom);
        // Calculate the difference in zoom level between the new and old zoom levels
        const zoomDiff = newZoom / currentZoom;
        if (newZoom < 0.11) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.scale(newZoom, newZoom);
            ctx.translate(-canvas.width / 2, -canvas.height / 2);
            ctx.transform(1, 0, 0, 1, (canvas.width - bufferCanvas.width) / 2, (canvas.height - bufferCanvas.height) / 2);
        }
        else {
            ctx.translate(currentTransformedCursor.x, currentTransformedCursor.y);
            ctx.scale(zoomDiff, zoomDiff);
            ctx.translate(-currentTransformedCursor.x, -currentTransformedCursor.y);
        }
        this.backgroundLayer.zoom(e, newZoom);
        this.draw();
    }
    cleanCanvas() {
        const { canvas, ctx, bufferCanvas, bufferCtx } = this;
        // debugger;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    registerEvent(canvas) {
        // canvas.addEventListener('mousedown', this.mouseDown);
        // canvas.addEventListener('mousemove', this.mouseMove);
        // canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
        canvas.addEventListener('wheel', this.zoom.bind(this));
    }
    unRegisterEvent(canvas) {
        // canvas.removeEventListener('mousedown', this.mouseDown(this));
        // canvas.removeEventListener('mousemove', this.mouseMove(this));
        // canvas.removeEventListener('mouseup', this.mouseUp(this));
        canvas.removeEventListener('touchstart', this.mouseDown(this));
        canvas.removeEventListener('touchmove', this.mouseMove(this));
        canvas.removeEventListener('touchend', this.mouseUp(this));
        canvas.removeEventListener('wheel', this.zoom(this));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Views);


/***/ }),

/***/ "./src/canvas/ImageEditor/Layer/BackgroundLayer.ts":
/*!*********************************************************!*\
  !*** ./src/canvas/ImageEditor/Layer/BackgroundLayer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer */ "./src/canvas/ImageEditor/Layer/Layer.ts");


class BackgroundLayer extends _Layer__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(canvas) {
        super(canvas);
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
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
                }
                else {
                    backgroundCtx.fillStyle = '#ffffff';
                }
                backgroundCtx.fillRect(x, y, rectWidth, rectHeight);
            }
        }
    }
    zoom(e, zoomLevel) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundLayer);


/***/ }),

/***/ "./src/canvas/ImageEditor/Layer/FileLayer.ts":
/*!***************************************************!*\
  !*** ./src/canvas/ImageEditor/Layer/FileLayer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer */ "./src/canvas/ImageEditor/Layer/Layer.ts");


class FileLayer extends _Layer__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(canvas) {
        super(canvas);
        this.image = new Image();
        this.ctx = canvas.getContext('2d');
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.canvas = canvas;
    }
    async loadFile(file) {
        const { ctx, canvas, position, image } = this;
    }
    redraw() { }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileLayer);


/***/ }),

/***/ "./src/canvas/ImageEditor/Layer/Layer.ts":
/*!***********************************************!*\
  !*** ./src/canvas/ImageEditor/Layer/Layer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");

class Layer {
    constructor(canvas) {
        this.isDrawStart = false;
        this.position = { x: 0, y: 0 };
        this.ctx = canvas.getContext('2d');
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.canvas = canvas;
    }
    draw() { }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layer);


/***/ }),

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

/***/ "./src/canvas/ImageEditor/StateController/StateController.ts":
/*!*******************************************************************!*\
  !*** ./src/canvas/ImageEditor/StateController/StateController.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class StateController {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
        this.mouseDown = (e) => { };
        this.mouseMove = (e) => { };
        this.mouseUp = (e) => {
            const { undoStack, canvas, bufferCanvas } = this;
            debugger;
            if (bufferCanvas)
                undoStack.push(bufferCanvas.toDataURL());
        };
        this.onKeyDown = (e) => {
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
        this.undoStack = [];
        this.redoStack = [];
    }
    initializeCanvas(views) {
        this.canvas = views.canvas;
        this.bufferCanvas = views.bufferCanvas;
        this.bufferCtx = views.bufferCtx;
    }
    undo() {
        debugger;
        const { undoStack, redoStack, bufferCtx, bufferCanvas, canvas } = this;
        if (undoStack.length < 2)
            return;
        // Remove current state from undo stack and push onto redo stack
        const currentState = undoStack.pop();
        redoStack.push(currentState);
        // Load previous state from undo stack onto canvas
        const previousState = undoStack[undoStack.length - 1];
        const img = new Image();
        img.onload = function () {
            bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);
            bufferCtx.drawImage(img, 0, 0, bufferCanvas.width, bufferCanvas.height, 0, 0, bufferCanvas.width, bufferCanvas.height);
        };
        img.src = previousState;
    }
    redo() {
        debugger;
        const { undoStack, redoStack, bufferCtx, bufferCanvas } = this;
        if (redoStack.length === 0)
            return;
        // Remove current state from redo stack and push onto undo stack
        const currentState = redoStack.pop();
        undoStack.push(currentState);
        // Load next state from redo stack onto canvas
        const nextImage = new Image();
        nextImage.onload = function () {
            bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);
            bufferCtx.drawImage(nextImage, 0, 0, bufferCanvas.width, bufferCanvas.height, 0, 0, bufferCanvas.width, bufferCanvas.height);
        };
        nextImage.src = currentState;
    }
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
    constructor(views) {
        this.mouseDown = (e) => { };
        this.mouseMove = (e) => { };
        this.mouseUp = (e) => { };
        this.views = views;
        this.canvas = views.canvas;
        this.bufferCanvas = views.bufferCanvas;
        this.bufferCtx = views.bufferCtx;
        this.ctx = views.ctx;
    }
    draw(e) {
        const { views } = this;
        views.draw();
    }
    registerEvent(canvas) {
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
    }
    unRegisterEvent(canvas) {
        canvas.removeEventListener('mousedown', this.mouseDown);
        canvas.removeEventListener('mousemove', this.mouseMove);
        canvas.removeEventListener('mouseup', this.mouseUp);
        canvas.removeEventListener('touchstart', this.mouseDown);
        canvas.removeEventListener('touchmove', this.mouseMove);
        canvas.removeEventListener('touchend', this.mouseUp);
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
    constructor(views) {
        super(views);
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
        };
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.setColor('black');
        this.size = 5;
        this.registerEvent(views.canvas);
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
    registerEvent(canvas) {
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
    }
    unRegisterEvent(canvas) {
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
    constructor(views) {
        super(views);
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
        };
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.size = 5;
        this.registerEvent(views.canvas);
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
    registerEvent(canvas) {
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
    }
    unRegisterEvent(canvas) {
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
    constructor(views) {
        super(views);
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
        };
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.registerEvent(views.canvas);
    }
    draw(e) {
        const { ctx, canvas } = this;
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, ctx);
        ctx.translate(currentTransformedCursor.x - this.lastPoint.x, currentTransformedCursor.y - this.lastPoint.y);
        super.draw(e);
    }
    registerEvent(canvas) {
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
    }
    unRegisterEvent(canvas) {
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



const Tools = {
    BrushTool: _Brush__WEBPACK_IMPORTED_MODULE_1__["default"],
    EraseTool: _Erase__WEBPACK_IMPORTED_MODULE_0__["default"],
    PanTool: _Pan__WEBPACK_IMPORTED_MODULE_2__["default"],
};
function dynamicClass(name) {
    return Tools[name];
}


/***/ })

}]);
//# sourceMappingURL=js/9b097a935c2178194399.js.map