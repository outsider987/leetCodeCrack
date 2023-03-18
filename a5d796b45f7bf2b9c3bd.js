(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_components_NumberInput_tsx-src_components_Slider_tsx-src_pages_Home_Canvas_ImageEditor_ts-7d3914"],{

/***/ "./src/components/NumberInput.tsx":
/*!****************************************!*\
  !*** ./src/components/NumberInput.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NumberInput = (props) => {
    const { min = 0, max = 100, value, setValue, className } = props;
    const handleChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            setValue(newValue);
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            setValue(Math.min(value + 1, max));
        }
        else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setValue(Math.max(value - 1, min));
        }
    };
    const inputClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(className, 'flex-1', 'w-full', 'rounded-lg', 'border-2', 'border-solid', 'border-white', 'bg-black', 'px-2', 'pt-2', 'pb-2', 'text-sm', 'text-white', 'focus:border-orange-400', 'focus:outline-none');
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", value: value, onChange: handleChange, className: inputClasses, min: min, max: max, onKeyDown: handleKeyDown }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInput);


/***/ }),

/***/ "./src/components/Slider.tsx":
/*!***********************************!*\
  !*** ./src/components/Slider.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Slider = (props) => {
    const { setSizeCallBack, min = 1, max = 100, size } = props;
    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleChange = (event) => {
        const newValue = event.target.value;
        const value = min && newValue < min ? min : max && newValue > max ? max : newValue;
        setSizeCallBack(value);
    };
    const handleDragStart = () => {
        setIsDragging(true);
    };
    const handleDragEnd = () => {
        setIsDragging(false);
    };
    const percentage = (size / max) * 100;
    const volumeGradient = `linear-gradient(to right, 
      rgba(255, 212, 71, 1) 0%, 
      rgba(255, 161, 71, 1) ${percentage}%, 
      rgba(255, 84, 84, 1) 100%)`;
    const circlePosition = {
        left: `calc(${percentage}% - 7px)`,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative h-4 w-full rounded-full bg-gray-800" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "h-full rounded-full", style: { width: `${percentage}%`, background: volumeGradient } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `absolute top-0  ${isDragging ? 'block' : 'hidden'}`, style: circlePosition },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "h-4 w-4 rounded-full border-2 border-yellow-500 bg-white" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "range", min: min, max: max, value: size, onChange: handleChange, onMouseDown: handleDragStart, onTouchStart: handleDragStart, onTouchEnd: handleDragEnd, onTouchCancel: handleDragEnd, onMouseUp: handleDragEnd, className: "absolute top-0 left-0 h-full w-full cursor-pointer opacity-0" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);


/***/ }),

/***/ "./src/pages/Home/Canvas/ImageEditor.tsx":
/*!***********************************************!*\
  !*** ./src/pages/Home/Canvas/ImageEditor.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canvas_components_ImageEditor_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/canvas/components/ImageEditor/CanvasImageEditor */ "./src/canvas/components/ImageEditor/CanvasImageEditor.tsx");


const ImageEditor = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `relative m-auto flex h-full max-h-screen w-full flex-col items-center justify-center` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_canvas_components_ImageEditor_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "relative  flex h-full w-full  flex-row border border-solid border-white" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageEditor);


/***/ }),

/***/ "./src/utils/canvas/coordinate.ts":
/*!****************************************!*\
  !*** ./src/utils/canvas/coordinate.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTransformedPaintPoint": () => (/* binding */ getTransformedPaintPoint),
/* harmony export */   "getTransformedPoint": () => (/* binding */ getTransformedPoint),
/* harmony export */   "getTransformedPoints": () => (/* binding */ getTransformedPoints)
/* harmony export */ });
function getTransformedPoint(e, canvas, ctx) {
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    const originalPoint = new DOMPoint(offsetX, offsetY);
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


/***/ }),

/***/ "./src/utils/canvas/mainCanvas.ts":
/*!****************************************!*\
  !*** ./src/utils/canvas/mainCanvas.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentZoom": () => (/* binding */ getCurrentZoom),
/* harmony export */   "redrawBoundBackGround": () => (/* binding */ redrawBoundBackGround),
/* harmony export */   "updateCanvasSize": () => (/* binding */ updateCanvasSize)
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
function updateCanvasSize(mianCanvas, width, height) {
    mianCanvas.width = width;
    mianCanvas.height = height;
}


/***/ }),

/***/ "./src/utils/canvas/rect.ts":
/*!**********************************!*\
  !*** ./src/utils/canvas/rect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsInRect": () => (/* binding */ IsInRect),
/* harmony export */   "IsOutRect": () => (/* binding */ IsOutRect),
/* harmony export */   "IsOverBoundRect": () => (/* binding */ IsOverBoundRect),
/* harmony export */   "getNewSize": () => (/* binding */ getNewSize)
/* harmony export */ });
function IsInRect(x, y, left, top, right, bottom) {
    return x >= left && x <= right && y >= top && y <= bottom;
}
function IsOutRect(x, y, left, top, right, bottom) {
    return x < left || x > right || y < top || y > bottom;
}
function IsOverBoundRect(innerLeft, innerTop, innerRight, innerBottom, outerLeft, outerTop, outerRight, outerBottom) {
    return innerLeft < outerLeft || innerTop < outerTop || innerRight > outerRight || innerBottom > outerBottom;
}
function getNewSize(canvas, image) {
    const widthRatio = canvas.width / image.width;
    const heightRatio = canvas.height / image.height;
    // Use the smaller ratio to ensure that the image fits inside the canvas
    const scale = Math.min(widthRatio, heightRatio);
    // Calculate the new width and height of the image
    const newWidth = image.width * scale;
    const newHeight = image.height * scale;
    return { newWidth, newHeight };
}


/***/ }),

/***/ "./src/utils/image.ts":
/*!****************************!*\
  !*** ./src/utils/image.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onload2promise": () => (/* binding */ onload2promise)
/* harmony export */ });
function onload2promise(obj) {
    return new Promise((resolve, reject) => {
        obj.onload = () => resolve(obj);
        obj.onerror = reject;
    });
}


/***/ }),

/***/ "./src/utils/canvas/constants.js":
/*!***************************************!*\
  !*** ./src/utils/canvas/constants.js ***!
  \***************************************/
/***/ ((module) => {

const LAYOUT_SIZE = { MENU_WIDTH: '2.5rem', PANEL_WIDTH: '10rem' };
module.exports = {
    LAYOUT_SIZE,
}

/***/ })

}]);
//# sourceMappingURL=js/a5d796b45f7bf2b9c3bd.js.map