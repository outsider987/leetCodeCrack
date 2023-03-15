"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_canvas_ImageEditor_Canvas_Canvas_ts-src_canvas_ImageEditor_Tool_index_ts"],{

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
        this.mouseMove = (e) => {
            const transformedCursorPosition = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoint)(e, this.canvas, this.ctx);
        };
        this.mouseUp = (e) => { };
    }
    initializeCanvas(canvas) {
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
        bufferCtx.fillStyle = 'white';
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


class BrushTool {
    constructor(views) {
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
            const { canvas, views, ctx } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
            this.draw(e);
        };
        this.mouseMove = (e) => {
            // e.preventDefault();
            if (!this.isDrawStart)
                return;
            this.draw(e);
        };
        this.mouseUp = (e) => {
            // e.preventDefault();
            this.isDrawStart = false;
            this.views.draw();
        };
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.setColor('black');
        this.size = 5;
        this.views = views;
        this.registerEvent(views.canvas);
    }
    draw(e) {
        const { canvas, ctx, views } = this;
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
        views.bufferCtx.beginPath();
        views.bufferCtx.moveTo(this.lastPoint.x, this.lastPoint.y);
        views.bufferCtx.lineTo(currentTransformedCursor.x, currentTransformedCursor.y);
        views.bufferCtx.strokeStyle = this.color;
        views.bufferCtx.lineWidth = this.size;
        views.bufferCtx.lineCap = 'round';
        views.bufferCtx.stroke();
        views.bufferCtx.closePath();
        this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
        this.views.draw();
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


class EraseTool {
    constructor(views) {
        this.isDrawStart = false;
        this.setSize = (size) => {
            this.size = size;
        };
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isDrawStart = true;
            const { canvas, views, eraserPath } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
            eraserPath.push({ x: currentTransformedCursor.x, y: currentTransformedCursor.y });
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
            const point = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](currentTransformedCursor.x, currentTransformedCursor.y);
            this.erase(point);
        };
        this.mouseMove = (e) => {
            const { canvas, ctx, views } = this;
            e.preventDefault();
            if (!this.isDrawStart)
                return;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
            const point = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](currentTransformedCursor.x, currentTransformedCursor.y);
            this.erase(point);
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            const { ctx, views } = this;
            views.bufferCtx.globalCompositeOperation = 'source-over';
            views.draw();
            this.isDrawStart = false;
        };
        this.canvas = views.bufferCanvas;
        this.ctx = views.bufferCtx;
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.views = views;
        this.registerEvent(views.canvas);
        this.eraserPath = [];
    }
    erase(point) {
        const { ctx, views, eraserPath, size } = this;
        ctx.beginPath();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();
        this.lastPoint.setPoint(point.x, point.y);
        eraserPath.push({ x: point.x, y: point.y });
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


class PanTool {
    constructor(views) {
        this.isPanStart = false;
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isPanStart = true;
            const { canvas, views } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
        };
        this.mouseMove = (e) => {
            const { canvas, ctx, views } = this;
            e.preventDefault();
            if (!this.isPanStart)
                return;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
            const point = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](currentTransformedCursor.x, currentTransformedCursor.y);
            this.paning(point);
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            const { ctx, views } = this;
            this.isPanStart = false;
        };
        this.canvas = views.canvas;
        this.ctx = views.ctx;
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.views = views;
        this.registerEvent(views.canvas);
    }
    paning(point) {
        const { ctx, views, canvas } = this;
        const OutsideRect = canvas.getBoundingClientRect();
        ctx.translate(point.x - this.lastPoint.x, point.y - this.lastPoint.y);
        const materix = ctx.getTransform();
        // if (
        //   IsOverBoundRect(
        //     materix.e,
        //     materix.f,
        //     materix.e + canvas.width * materix.a,
        //     materix.f + canvas.height * materix.d,
        //     0,
        //     0,
        //     canvas.width,
        //     canvas.height,
        //   ) &&
        //   getCurrentZoom(ctx) < 1
        // ) {
        //   return;
        // }
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
//# sourceMappingURL=js/e89c50f3f65a75d3d503.js.map