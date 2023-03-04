"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_ImageEditor_tsx"],{

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
/* harmony import */ var _utils_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/canvas/canvas */ "./src/utils/canvas/canvas.ts");




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
        this.bufferCanvas.width = canvas.width;
        this.bufferCanvas.height = canvas.height;
        this.bufferCtx = this.bufferCanvas.getContext('2d');
        this.backgroundLayer = new _Layer_BackgroundLayer__WEBPACK_IMPORTED_MODULE_2__["default"](canvas);
        this.zoomLevel = 0;
        this.cameraOffsetX = 0;
        this.cameraOffsetY = 0;
        this.backgroundLayer.draw();
        this.registerEvent(this.canvas);
    }
    async loadFile(file) {
        const { bufferCanvas, bufferCtx } = this;
        const layer = new _Layer_FileLayer__WEBPACK_IMPORTED_MODULE_1__["default"](bufferCanvas);
        this.layerArray.push(layer);
        await layer.loadFile(file);
        this.draw();
    }
    draw() {
        const { ctx, bufferCanvas } = this;
        (0,_utils_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__.redrawBoundBackGround)(this.canvas);
        ctx.drawImage(this.backgroundLayer.getLayerCanvas(), 0, 0);
        ctx.drawImage(bufferCanvas, 0, 0);
    }
    zoom(e) {
        const { canvas, ctx } = this;
        const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoint)(e, canvas, this.ctx);
        const zoom = e.deltaY < 0 ? 1.1 : 0.9;
        const maxZoom = 10; // maximum zoom level
        const minZoom = 0.1; // minimum zoom level
        const currentZoom = (0,_utils_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ctx); // helper function to get current zoom level
        // Calculate the new zoom level, making sure it stays within the maximum and minimum bounds
        const newZoom = Math.min(Math.max(currentZoom * zoom, minZoom), maxZoom);
        // Calculate the difference in zoom level between the new and old zoom levels
        const zoomDiff = newZoom / currentZoom;
        if (newZoom < 0.3) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.scale(newZoom, newZoom);
            ctx.translate(-canvas.width / 2, -canvas.height / 2);
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
        image.src = URL.createObjectURL(file);
        await onload2promise(image);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
        let x = (canvas.width - image.width * ratio) / 2;
        let y = (canvas.height - image.height * ratio) / 2;
        position.x = x;
        position.y = y;
        ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
    }
    redraw() { }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileLayer);
function onload2promise(obj) {
    return new Promise((resolve, reject) => {
        obj.onload = () => resolve(obj);
        obj.onerror = reject;
    });
}


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
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isDrawStart = true;
            const { canvas, views, eraserPath } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
            eraserPath.push({ x: currentTransformedCursor.x, y: currentTransformedCursor.y });
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
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
        const { ctx, views, eraserPath } = this;
        ctx.beginPath();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();
        this.lastPoint.setPoint(point.x, point.y);
        eraserPath.push({ x: point.x, y: point.y });
        // const testBuifferCanvas = document.getElementById('buffer') as HTMLCanvasElement;
        // const ctx2 = testBuifferCanvas.getContext('2d');
        // ctx2.putImageData(views.bufferCtx.getImageData(0, 0, views.bufferCanvas.width, views.bufferCanvas.height), 0, 0);
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

/***/ "./src/canvas/ImageEditor/Tool/Paint.ts":
/*!**********************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/Paint.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Point */ "./src/canvas/ImageEditor/Point.ts");


class PaintTool {
    constructor(views) {
        this.isDrawStart = false;
        this.setColor = (color) => {
            this.color = color;
        };
        this.mouseDown = (e) => {
            // e.preventDefault();
            this.isDrawStart = true;
            const { canvas, views, ctx } = this;
            const currentTransformedCursor = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getTransformedPoints)(e, views.canvas, views.ctx);
            this.lastPoint.setPoint(currentTransformedCursor.x, currentTransformedCursor.y);
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
        views.bufferCtx.lineWidth = 5;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaintTool);


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
/* harmony import */ var _Paint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paint */ "./src/canvas/ImageEditor/Tool/Paint.ts");
/* harmony import */ var _Pan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pan */ "./src/canvas/ImageEditor/Tool/Pan.ts");



const Tools = {
    PaintTool: _Paint__WEBPACK_IMPORTED_MODULE_1__["default"],
    EraseTool: _Erase__WEBPACK_IMPORTED_MODULE_0__["default"],
    PanTool: _Pan__WEBPACK_IMPORTED_MODULE_2__["default"],
};
function dynamicClass(name) {
    return Tools[name];
}


/***/ }),

/***/ "./src/components/Chart/CanvasImageEditor.tsx":
/*!****************************************************!*\
  !*** ./src/components/Chart/CanvasImageEditor.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./src/components/Button.tsx");
/* harmony import */ var _canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool */ "./src/canvas/ImageEditor/Tool/index.ts");
/* harmony import */ var _canvas_ImageEditor_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/canvas/ImageEditor/Canvas/Canvas */ "./src/canvas/ImageEditor/Canvas/Canvas.ts");




const CanvasImageEditor = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const bufferCanvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const paintCanvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const ViewsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new _canvas_ImageEditor_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_3__["default"]());
    const requestRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    const onClickFile = (e) => {
        setFile(e.target.files[0]);
    };
    const onDeleteFile = (e) => {
        setFile(null);
    };
    const onDraw = () => {
        setMode('PaintTool');
    };
    const onErase = () => {
        setMode('EraseTool');
    };
    const onPan = () => {
        setMode('PanTool');
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current && file !== null) {
            ViewsRef.current.loadFile(file);
        }
        return () => ViewsRef.current.cleanCanvas();
    }, [file]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current && file !== null) {
            // const ctx = paintCanvasRef.current.getContext('2d');
            const ToolClass = (0,_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_2__["default"])(mode);
            let tool = new ToolClass(ViewsRef.current);
            return () => {
                tool.unRegisterEvent(ViewsRef.current.canvas);
            };
        }
    }, [mode]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current) {
            ViewsRef.current.initializeCanvas(canvasRef.current);
            // requestRef.current = requestAnimationFrame(ViewsRef.current.draw);
            // return () => cancelAnimationFrame(requestRef.current);
            // function start() {
            //   requestAnimationFrame(animate);
            // }
            // function animate() {
            //   ViewsRef.current.draw();
            //   requestAnimationFrame(animate);
            // }
            // start();
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: ` relative border-solid border-yellow-400` },
            file === null && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-white" }, "please click or drag file"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { onChange: onClickFile, className: " absolute inset-0 z-10 cursor-pointer opacity-0", type: "file", accept: "image/*" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef, width: window.innerWidth * 0.6, height: window.innerHeight / 2 })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full space-x-3" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onDeleteFile }, " delete File"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onDraw }, " draw mode"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onPan }, " Pan mode"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onErase }, " Erase mode"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasImageEditor);


/***/ }),

/***/ "./src/pages/Home/Canvas/ImageEditor.tsx":
/*!***********************************************!*\
  !*** ./src/pages/Home/Canvas/ImageEditor.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chart_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Chart/CanvasImageEditor */ "./src/components/Chart/CanvasImageEditor.tsx");


const ImageEditor = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto flex w-full flex-col items-center justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Chart_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__["default"], { className: " border border-solid border-white " })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageEditor);


/***/ }),

/***/ "./src/utils/canvas/canvas.ts":
/*!************************************!*\
  !*** ./src/utils/canvas/canvas.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentZoom": () => (/* binding */ getCurrentZoom),
/* harmony export */   "redrawBoundBackGround": () => (/* binding */ redrawBoundBackGround)
/* harmony export */ });
function getCurrentZoom(ctx) {
    // Extract the current transformation matrix from the context
    const matrix = ctx.getTransform();
    // Calculate the current zoom level as the square root of the determinant of the transformation matrix
    // (see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/determinant)
    return Math.sqrt(Math.abs(matrix.a * matrix.d - matrix.b * matrix.c));
}
function redrawBoundBackGround(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}


/***/ }),

/***/ "./src/utils/canvas/coordinate.ts":
/*!****************************************!*\
  !*** ./src/utils/canvas/coordinate.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClientOffset": () => (/* binding */ getClientOffset),
/* harmony export */   "getTransformedPaintPoint": () => (/* binding */ getTransformedPaintPoint),
/* harmony export */   "getTransformedPoint": () => (/* binding */ getTransformedPoint),
/* harmony export */   "getTransformedPoints": () => (/* binding */ getTransformedPoints)
/* harmony export */ });
function getClientOffset(e, canvas, scale = 1, offsetPoint) {
    const { pageX, pageY } = e.touches ? e.touches[0] : e;
    // var offsetX=canvasOffset.left;
    // var offsetY=canvasOffset.top;
    const rect = canvas.getBoundingClientRect();
    // console.log(rect);
    console.log(`pageX: ${pageX}`);
    console.log(`offsetLeft: ${e}`);
    console.log(`scale:${scale}`);
    // const x = pageX - rect.left;
    // const y = pageY - rect.top;
    const x = (pageX - rect.left - canvas.width / 2) / scale + canvas.width / 2;
    const y = (pageY - rect.top - canvas.height / 2) / scale + canvas.height / 2;
    console.log(`final:${x}`);
    return {
        x,
        y,
    };
}
// export function getTransformedPoint(e, ctx: CanvasRenderingContext2D) {
//   const { offsetx: pageX, offsetY: pageY } = e.touches ? e.touches[0] : e;
//   const originalPoint = new DOMPoint(e.offsetx, e.offsetY);
//   return ctx.getTransform().invertSelf().transformPoint(originalPoint);
// }
function getTransformedPoint(e, canvas, ctx) {
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    const originalPoint = new DOMPoint(offsetX, offsetY);
    // const t = ctx.getTransform();
    // console.log(t);
    return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}
function getTransformedPaintPoint(e, canvas, ctx, scale = 1) {
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    const rect = canvas.getBoundingClientRect();
    console.log(ctx.getTransform());
    const originalPoint = new DOMPoint(offsetX - rect.left, offsetY, rect.top);
    return ctx.getTransform().invertSelf().transformPoint(originalPoint);
}
function getTransformedPoints(e, canvas, ctx) {
    const { pageX, pageY } = e.touches ? e.touches[0] : e;
    const rect = canvas.getBoundingClientRect();
    const originalPoint = new DOMPoint(pageX - rect.left, pageY - rect.top);
    const point = ctx.getTransform().invertSelf().transformPoint(originalPoint);
    const x = point.x;
    const y = point.y;
    return { x: x, y: y };
}


/***/ })

}]);
//# sourceMappingURL=js/b866be72c14d5da253b8.js.map