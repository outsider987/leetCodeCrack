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

class Views {
    constructor() {
        this.isDrawStart = false;
        this.zoomLevel = 1;
        this.lastView = null;
        this.mouseDown = (e) => {
            // e.preventDefault();
            const clientPoint = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getClientOffset)(e, this.canvas);
            this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
            this.isDrawStart = true;
        };
        this.mouseMove = (e) => {
            // e.preventDefault();
            if (!this.isDrawStart)
                return;
            // this.lineCoordinates = this.getClientOffset(event);
            this.clearCanvas();
        };
        this.mouseUp = (e) => {
            // e.preventDefault();
            this.isDrawStart = false;
        };
        this.clearCanvas = () => {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
    }
    initializeCanvas(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    draw() { }
    zoom(e) {
        // const { canvas, ctx, bufferCanvas } = this;
        // let zoom = 1;
        // // e.preventDefault();
        // const clientPoint = getClientOffset(e, canvas);
        // if (e.deltaY < 0) {
        //   zoom *= 1.1;
        // } else {
        //   zoom *= 0.9;
        // }
        const { canvas, ctx, bufferCanvas } = this;
        let MAX_ZOOM = 5;
        let MIN_ZOOM = 0.1;
        let SCROLL_SENSITIVITY = 0.0005;
        // e.preventDefault();
        const clientPoint = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getClientOffset)(e, canvas);
        const zoomAmount = SCROLL_SENSITIVITY * e.deltaY;
        this.zoomLevel += zoomAmount;
        this.zoomLevel = Math.min(this.zoomLevel, MAX_ZOOM);
        this.zoomLevel = Math.max(this.zoomLevel, MIN_ZOOM);
        console.log(this.zoomLevel);
        // let backeupCanvas = document.createElement('canvas');
        // backeupCanvas.width = canvas.width;
        // backeupCanvas.height = canvas.height;
        // let newContext = backeupCanvas.getContext('2d');
        // const lastImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // newContext.putImageData(lastImageData, 0, 0);
        // const lastView = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // ctx.scale(zoom, zoom);
        // ctx.setTransform(zoom, 0, 0, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        // // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // let ratio = Math.min(canvas.width / backeupCanvas.width, canvas.height / backeupCanvas.height);
        // let x = (canvas.width - backeupCanvas.width * ratio) / 2;
        // let y = (canvas.height - backeupCanvas.height * ratio) / 2;
        // // ctx.setTransform(9, 9, 9, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        // ctx.drawImage(
        //   backeupCanvas,
        //   0,
        //   0,
        //   backeupCanvas.width,
        //   backeupCanvas.height,
        //   x,
        //   y,
        //   backeupCanvas.width * ratio,
        //   backeupCanvas.height * ratio,
        // );
        // test test
        let backeupCanvas = document.createElement('canvas');
        backeupCanvas.width = canvas.width;
        backeupCanvas.height = canvas.height;
        let newContext = backeupCanvas.getContext('2d');
        const lastImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        newContext.putImageData(lastImageData, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // ctx.setTransform(zoom, 0, 0, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        ctx.translate(clientPoint.x, clientPoint.y);
        ctx.scale(this.zoomLevel, this.zoomLevel);
        ctx.translate(-clientPoint.x, -clientPoint.y);
        // let ratio = Math.min(canvas.width / backeupCanvas.width, canvas.height / backeupCanvas.height);
        // let x = (canvas.width - backeupCanvas.width * ratio) / 2;
        // let y = (canvas.height - backeupCanvas.height * ratio) / 2;
        // ctx.setTransform(9, 9, 9, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        ctx.drawImage(bufferCanvas, 0, 0);
    }
    registerEvent(canvas) {
        // canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
        canvas.addEventListener('wheel', this.zoom.bind(this));
    }
    unRegisterEvent(canvas) {
        // canvas.removeEventListener('mousedown', this.mouseDown(this));
        canvas.removeEventListener('mousemove', this.mouseMove(this));
        canvas.removeEventListener('mouseup', this.mouseUp(this));
        canvas.removeEventListener('touchstart', this.mouseDown(this));
        canvas.removeEventListener('touchmove', this.mouseMove(this));
        canvas.removeEventListener('touchend', this.mouseUp(this));
        canvas.removeEventListener('wheel', this.zoom(this));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Views);


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
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Point */ "./src/canvas/ImageEditor/Point.ts");


class Layer {
    constructor(ctx, canvas) {
        this.isDrawStart = false;
        this.zoomLevel = 1;
        this.lastView = null;
        this.mouseDown = (e) => {
            // e.preventDefault();
            const clientPoint = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getClientOffset)(e, this.canvas);
            this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
            this.isDrawStart = true;
        };
        this.mouseMove = (e) => {
            // e.preventDefault();
            if (!this.isDrawStart)
                return;
            // this.loadFile(e);
            // this.lineCoordinates = this.getClientOffset(event);
            this.clearCanvas();
        };
        this.mouseUp = (e) => {
            // e.preventDefault();
            this.isDrawStart = false;
        };
        this.clearCanvas = () => {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
        this.ctx = ctx;
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.canvas = canvas;
        this.bufferCanvas = document.createElement('canvas');
        this.bufferCanvas.width = canvas.width;
        this.bufferCanvas.height = canvas.height;
        this.bufferCtx = this.bufferCanvas.getContext('2d');
        this.drawCanvas = document.createElement('canvas');
        this.drawCtx = this.drawCanvas.getContext('2d');
        this.registerEvent(this.canvas);
    }
    loadFile(file) {
        const { bufferCanvas, bufferCtx } = this;
        const image = new Image();
        const { ctx, canvas } = this;
        image.onload = function res() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
            let x = (canvas.width - image.width * ratio) / 2;
            let y = (canvas.height - image.height * ratio) / 2;
            ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
            bufferCtx.drawImage(canvas, 0, 0);
        };
        image.src = URL.createObjectURL(file);
    }
    redraw() { }
    zoom(e) {
        // const { canvas, ctx, bufferCanvas } = this;
        // let zoom = 1;
        // // e.preventDefault();
        // const clientPoint = getClientOffset(e, canvas);
        // if (e.deltaY < 0) {
        //   zoom *= 1.1;
        // } else {
        //   zoom *= 0.9;
        // }
        const { canvas, ctx, bufferCanvas } = this;
        let MAX_ZOOM = 5;
        let MIN_ZOOM = 0.1;
        let SCROLL_SENSITIVITY = 0.0005;
        // e.preventDefault();
        const clientPoint = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getClientOffset)(e, canvas);
        const zoomAmount = SCROLL_SENSITIVITY * e.deltaY;
        this.zoomLevel += zoomAmount;
        this.zoomLevel = Math.min(this.zoomLevel, MAX_ZOOM);
        this.zoomLevel = Math.max(this.zoomLevel, MIN_ZOOM);
        console.log(this.zoomLevel);
        // let backeupCanvas = document.createElement('canvas');
        // backeupCanvas.width = canvas.width;
        // backeupCanvas.height = canvas.height;
        // let newContext = backeupCanvas.getContext('2d');
        // const lastImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // newContext.putImageData(lastImageData, 0, 0);
        // const lastView = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // ctx.scale(zoom, zoom);
        // ctx.setTransform(zoom, 0, 0, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        // // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // let ratio = Math.min(canvas.width / backeupCanvas.width, canvas.height / backeupCanvas.height);
        // let x = (canvas.width - backeupCanvas.width * ratio) / 2;
        // let y = (canvas.height - backeupCanvas.height * ratio) / 2;
        // // ctx.setTransform(9, 9, 9, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        // ctx.drawImage(
        //   backeupCanvas,
        //   0,
        //   0,
        //   backeupCanvas.width,
        //   backeupCanvas.height,
        //   x,
        //   y,
        //   backeupCanvas.width * ratio,
        //   backeupCanvas.height * ratio,
        // );
        // test test
        let backeupCanvas = document.createElement('canvas');
        backeupCanvas.width = canvas.width;
        backeupCanvas.height = canvas.height;
        let newContext = backeupCanvas.getContext('2d');
        const lastImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        newContext.putImageData(lastImageData, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // ctx.setTransform(zoom, 0, 0, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        ctx.translate(clientPoint.x, clientPoint.y);
        ctx.scale(this.zoomLevel, this.zoomLevel);
        ctx.translate(-clientPoint.x, -clientPoint.y);
        // let ratio = Math.min(canvas.width / backeupCanvas.width, canvas.height / backeupCanvas.height);
        // let x = (canvas.width - backeupCanvas.width * ratio) / 2;
        // let y = (canvas.height - backeupCanvas.height * ratio) / 2;
        // ctx.setTransform(9, 9, 9, zoom, (1 - zoom) * clientPoint.x, (1 - zoom) * clientPoint.y);
        ctx.drawImage(bufferCanvas, 0, 0);
    }
    registerEvent(canvas) {
        // canvas.addEventListener('mousedown', this.mouseDown);
        canvas.addEventListener('mousemove', this.mouseMove);
        canvas.addEventListener('mouseup', this.mouseUp);
        canvas.addEventListener('touchstart', this.mouseDown);
        canvas.addEventListener('touchmove', this.mouseMove);
        canvas.addEventListener('touchend', this.mouseUp);
        canvas.addEventListener('wheel', this.zoom.bind(this));
    }
    unRegisterEvent(canvas) {
        // canvas.removeEventListener('mousedown', this.mouseDown(this));
        canvas.removeEventListener('mousemove', this.mouseMove(this));
        canvas.removeEventListener('mouseup', this.mouseUp(this));
        canvas.removeEventListener('touchstart', this.mouseDown(this));
        canvas.removeEventListener('touchmove', this.mouseMove(this));
        canvas.removeEventListener('touchend', this.mouseUp(this));
        canvas.removeEventListener('wheel', this.zoom(this));
    }
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
    constructor(ctx, canvas) {
        this.isDrawStart = false;
        this.getClientOffset = (e) => {
            const { canvas } = this;
            const { pageX, pageY } = e.touches ? e.touches[0] : e;
            const rect = canvas.getBoundingClientRect();
            const x = pageX - rect.left;
            const y = pageY - rect.top;
            return {
                x,
                y,
            };
        };
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isDrawStart = true;
            const clientPoint = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getClientOffset)(e, this.canvas);
            this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
        };
        this.mouseMove = (e) => {
            e.preventDefault();
            if (!this.isDrawStart)
                return;
            const clientPoint = this.getClientOffset(e);
            const point = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](clientPoint.x, clientPoint.y);
            this.erase(point);
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            const { ctx } = this;
            ctx.globalCompositeOperation = 'source-over';
            this.isDrawStart = false;
        };
        this.ctx = ctx;
        this.size = 5;
        this.canvas = canvas;
        this.registerEvent(canvas);
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    }
    erase(point) {
        const { ctx } = this;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.stroke();
        this.lastPoint.setPoint(point.x, point.y);
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

/***/ "./src/canvas/ImageEditor/Tool/Line.ts":
/*!*********************************************!*\
  !*** ./src/canvas/ImageEditor/Tool/Line.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/canvas/coordinate */ "./src/utils/canvas/coordinate.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Point */ "./src/canvas/ImageEditor/Point.ts");


class LineTool {
    constructor(ctx, canvas) {
        this.isDrawStart = false;
        this.getClientOffset = (e) => {
            const { canvas } = this;
            const { pageX, pageY } = e.touches ? e.touches[0] : e;
            const rect = canvas.getBoundingClientRect();
            const x = pageX - rect.left;
            const y = pageY - rect.top;
            return {
                x,
                y,
            };
        };
        this.setColor = (color) => {
            this.color = color;
        };
        this.mouseDown = (e) => {
            e.preventDefault();
            this.isDrawStart = true;
            const clientPoint = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getClientOffset)(e, this.canvas);
            this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
        };
        this.mouseMove = (e) => {
            e.preventDefault();
            if (!this.isDrawStart)
                return;
            this.draw(e);
            this.clearCanvas();
        };
        this.mouseUp = (e) => {
            e.preventDefault();
            this.isDrawStart = false;
        };
        this.clearCanvas = () => {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
        this.ctx = ctx;
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
        this.setColor('white');
        this.canvas = canvas;
        this.registerEvent(canvas);
    }
    draw(e) {
        const { canvas, ctx } = this;
        const clientPoint = (0,_utils_canvas_coordinate__WEBPACK_IMPORTED_MODULE_0__.getClientOffset)(e, canvas);
        ctx.beginPath();
        ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
        ctx.lineTo(clientPoint.x, clientPoint.y);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.stroke();
        this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineTool);


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
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./src/canvas/ImageEditor/Tool/Line.ts");


const Tools = {
    LineTool: _Line__WEBPACK_IMPORTED_MODULE_1__["default"],
    EraseTool: _Erase__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony import */ var _canvas_ImageEditor_Layer_Layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/canvas/ImageEditor/Layer/Layer */ "./src/canvas/ImageEditor/Layer/Layer.ts");





const CanvasImageEditor = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const ViewsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new _canvas_ImageEditor_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_3__["default"]());
    const onClickFile = (e) => {
        setFile(e.target.files[0]);
    };
    const onDeleteFile = (e) => {
        setFile(null);
    };
    const onDraw = () => {
        setMode('LineTool');
    };
    const onErase = () => {
        setMode('EraseTool');
    };
    // useEffect(() => {
    //   if (canvasRef.current && file !== null) {
    //     const canvas = canvasRef.current;
    //     const ctx = canvasRef.current.getContext('2d');
    //     const main = new Views(ctx, canvas);
    //     main.loadFile(file);
    //   } else {
    //     const canvas = canvasRef.current;
    //     const ctx = canvasRef.current.getContext('2d');
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   }
    // }, [file]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current && file !== null) {
            const canvas = canvasRef.current;
            const ctx = canvasRef.current.getContext('2d');
            const layer = new _canvas_ImageEditor_Layer_Layer__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, canvas);
            layer.loadFile(file);
        }
    }, [file]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current && file !== null) {
            const canvas = canvasRef.current;
            const ctx = canvasRef.current.getContext('2d');
            const ToolClass = (0,_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_2__["default"])(mode);
            let tool = new ToolClass(ctx, canvas);
            return () => {
                tool.unRegisterEvent(canvas);
            };
        }
    }, [mode]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current) {
            ViewsRef.current.initializeCanvas(canvasRef.current);
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

/***/ "./src/utils/canvas/coordinate.ts":
/*!****************************************!*\
  !*** ./src/utils/canvas/coordinate.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClientOffset": () => (/* binding */ getClientOffset)
/* harmony export */ });
function getClientOffset(e, canvas) {
    const { pageX, pageY } = e.touches ? e.touches[0] : e;
    const rect = canvas.getBoundingClientRect();
    const x = pageX - rect.left;
    const y = pageY - rect.top;
    return {
        x,
        y,
    };
}


/***/ })

}]);
//# sourceMappingURL=js/75c2a995faa241e7e12c.js.map