"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_ImageEditor_tsx"],{

/***/ "./src/canvas/ImageEditor/Line.tsx":
/*!*****************************************!*\
  !*** ./src/canvas/ImageEditor/Line.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Line {
    constructor(ctx, x, y, color, canvas) {
        this.startPosition = { x: 0, y: 0 };
        this.lineCoordinates = { x: 0, y: 0 };
        this.isDrawStart = false;
        this.getClientOffset = (event) => {
            const { pageX, pageY } = event.touches ? event.touches[0] : event;
            const x = pageX - this.canvas.offsetLeft;
            const y = pageY - this.canvas.offsetTop;
            return {
                x,
                y,
            };
        };
        this.mouseDownListener = (event) => {
            this.startPosition = this.getClientOffset(event);
            this.isDrawStart = true;
        };
        this.mouseMoveListener = (event) => {
            if (!this.isDrawStart)
                return;
            this.lineCoordinates = this.getClientOffset(event);
            this.clearCanvas();
            this.draw();
        };
        this.mouseupListener = (event) => {
            this.isDrawStart = false;
        };
        this.clearCanvas = () => {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = canvas;
        this.registerEvent(canvas, this.mouseDownListener, this.mouseMoveListener, this.mouseupListener);
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(this.startPosition.x, this.startPosition.y);
        this.ctx.lineTo(this.lineCoordinates.x, this.lineCoordinates.y);
        this.ctx.stroke();
    }
    registerEvent(canvas, mouseDownListener, mouseMoveListener, mouseupListener) {
        canvas.addEventListener('mousedown', mouseDownListener);
        canvas.addEventListener('mousemove', mouseMoveListener);
        canvas.addEventListener('mousemove', mouseupListener);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


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
/* harmony import */ var _canvas_ImageEditor_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/canvas/ImageEditor/Line */ "./src/canvas/ImageEditor/Line.tsx");



const CanvasImageEditor = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const modes = [_canvas_ImageEditor_Line__WEBPACK_IMPORTED_MODULE_2__["default"]];
    const onClickFile = (e) => {
        setFile(e.target.files[0]);
    };
    const onDeleteFile = (e) => {
        setFile(null);
    };
    const onDraw = () => {
        setMode('draw');
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current && file !== null) {
            const canvas = canvasRef.current;
            const ctx = canvasRef.current.getContext('2d');
            const image = new Image();
            image.onload = () => {
                let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
                let x = (canvas.width - image.width * ratio) / 2;
                let y = (canvas.height - image.height * ratio) / 2;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
            };
            image.src = URL.createObjectURL(file);
            // const canvas = canvasRef.current;
            // const ctx = canvasRef.current.getContext('2d');
            const line = new modes[0](ctx, 0, 0, 'white', canvas);
        }
        else {
            const canvas = canvasRef.current;
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [file]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current && file !== null) {
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: ` relative border-solid border-yellow-400` },
            file === null && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-white" }, "please click or drag file"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { onChange: onClickFile, className: " absolute inset-0 z-10 cursor-pointer opacity-0", type: "file", accept: "image/*" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef, width: 1920, height: 1080 })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full space-x-3" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onDeleteFile }, " delete File"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onDraw }, " draw mode"))));
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Chart_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "h-[50vh] w-[65vw] border border-solid border-white " })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageEditor);


/***/ })

}]);
//# sourceMappingURL=js/29ece6a4568715de6619.js.map