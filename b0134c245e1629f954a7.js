"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_canvas_ImageEditor_Canvas_Canvas_ts-src_canvas_ImageEditor_Canvas_RasterCanvas_ts"],{

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
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, canvas, this.ctx);
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
        // ;
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

/***/ "./src/canvas/ImageEditor/Canvas/RasterCanvas.ts":
/*!*******************************************************!*\
  !*** ./src/canvas/ImageEditor/Canvas/RasterCanvas.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/rect */ "./src/utils/canvas/rect.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tool */ "./src/canvas/ImageEditor/Tool/index.ts");


const modeType = {
    crop: _Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.CropTool.name,
};
class RasterViews {
    constructor() {
        this.zoomLevel = 1;
        this.lastView = null;
        this.layerArray = [];
        this.cameraOffsetX = 0;
        this.cameraOffsetY = 0;
        this.mouseDown = (e) => { };
        this.mouseMove = (e) => { };
        this.mouseUp = (e) => { };
    }
    initializeCanvas(canvas, rasterCanvas, bufferCanvas) {
        // initialize canvas
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.rasterCanvas = rasterCanvas;
        const image = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
        const newSize = (0,_utils_canvas_rect__WEBPACK_IMPORTED_MODULE_0__.getNewSize)(canvas, image);
        this.rasterCanvas.width = newSize.newWidth;
        this.rasterCanvas.height = newSize.newHeight;
        this.rasterCtx = rasterCanvas.getContext('2d');
        this.bufferCanvas = bufferCanvas;
        this.bufferCtx = bufferCanvas.getContext('2d');
        this.zoomLevel = 0;
        this.cameraOffsetX = 0;
        this.cameraOffsetY = 0;
        // this.registerEvent(this.canvas);
    }
    draw() {
        const { ctx, rasterCanvas, canvas, rasterCtx, bufferCanvas } = this;
        this.currentInstance.resetRect();
        this.currentInstance.draw();
        // rasterCtx.drawImage(rasterCanvas, 0, 0);
    }
    zoom(e) {
        // this.draw();
    }
    setInstance(instance) {
        this.currentInstance = instance;
    }
    cleanCanvas() {
        const { canvas, ctx, rasterCanvas, rasterCtx } = this;
        rasterCtx.setTransform(1, 0, 0, 1, 0, 0);
        rasterCtx.clearRect(0, 0, rasterCanvas.width, rasterCanvas.height);
    }
    registerEvent(canvas) {
        canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
        // canvas.addEventListener('wheel', this.zoom.bind(this));
    }
    unRegisterEvent(canvas) {
        canvas.removeEventListener('mousedown', this.mouseDown);
        canvas.removeEventListener('mousemove', this.mouseMove);
        canvas.removeEventListener('mouseup', this.mouseUp);
        canvas.removeEventListener('touchstart', this.mouseDown);
        canvas.removeEventListener('touchmove', this.mouseMove);
        canvas.removeEventListener('touchend', this.mouseUp);
        // canvas.removeEventListener('wheel', this.zoom);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RasterViews);


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


/***/ })

}]);
//# sourceMappingURL=js/b0134c245e1629f954a7.js.map