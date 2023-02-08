"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_ImageEditor_tsx"],{

/***/ "./src/canvas/ImageEditor/Line.ts":
/*!****************************************!*\
  !*** ./src/canvas/ImageEditor/Line.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/canvas/ImageEditor/Point.ts");

class Line {
    constructor(ctx, color, canvas) {
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
            const clientPoint = this.getClientOffset(e);
            this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
            this.isDrawStart = true;
        };
        this.mouseMove = (e) => {
            if (!this.isDrawStart)
                return;
            this.draw(e);
            // this.lineCoordinates = this.getClientOffset(event);
            this.clearCanvas();
        };
        this.mouseUp = (event) => {
            console.log();
            this.isDrawStart = false;
        };
        this.clearCanvas = () => {
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
        this.ctx = ctx;
        this.lastPoint = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        this.color = color;
        this.canvas = canvas;
        this.registerEvent(canvas);
    }
    draw(e) {
        const { canvas, ctx } = this;
        const { pageX, pageY } = e.touches ? e.touches[0] : e;
        const rect = canvas.getBoundingClientRect();
        const x = pageX - rect.left;
        const y = pageY - rect.top;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        const clientPoint = this.getClientOffset(e);
        this.lastPoint.setPoint(clientPoint.x, clientPoint.y);
    }
    registerEvent(canvas) {
        canvas.addEventListener('mousedown', this.mouseDown.bind(this));
        canvas.addEventListener('mousemove', this.mouseMove.bind(this));
        canvas.addEventListener('mouseup', this.mouseUp.bind(this));
        canvas.addEventListener('touchstart', this.mouseDown.bind(this));
        canvas.addEventListener('touchmove', this.mouseMove.bind(this));
        canvas.addEventListener('touchend', this.mouseUp.bind(this));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


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
/* harmony import */ var _canvas_ImageEditor_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/canvas/ImageEditor/Line */ "./src/canvas/ImageEditor/Line.ts");



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
            const line = new modes[0](ctx, 'white', canvas);
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
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef, width: window.innerWidth * 0.6, height: window.innerHeight / 2 })),
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Chart_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__["default"], { className: " border border-solid border-white " })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageEditor);


/***/ })

}]);
//# sourceMappingURL=js/19a6577b61594ee954cf.js.map