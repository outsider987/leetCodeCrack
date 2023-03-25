(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_ImageEditor_tsx-src_utils_canvas_coordinate_ts-src_utils_canvas_rasterC-bbec4b"],{

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
/* harmony export */   "getTransformedPoints": () => (/* binding */ getTransformedPoints)
/* harmony export */ });
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
function updateCanvasSize(mianCanvas, rasterCanvas, width, height) {
    mianCanvas.width = width;
    mianCanvas.height = height;
    rasterCanvas.width = width;
    rasterCanvas.height = height;
}


/***/ }),

/***/ "./src/utils/canvas/rasterCanvas.ts":
/*!******************************************!*\
  !*** ./src/utils/canvas/rasterCanvas.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cropCursorChange": () => (/* binding */ cropCursorChange),
/* harmony export */   "drawCropFiled": () => (/* binding */ drawCropFiled),
/* harmony export */   "getCursorPoint": () => (/* binding */ getCursorPoint),
/* harmony export */   "redrawRasterBoundBackGround": () => (/* binding */ redrawRasterBoundBackGround)
/* harmony export */ });
/* harmony import */ var _mainCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainCanvas */ "./src/utils/canvas/mainCanvas.ts");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect */ "./src/utils/canvas/rect.ts");
/* harmony import */ var _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Crop */ "./src/canvas/ImageEditor/Tool/Crop.ts");



function redrawRasterBoundBackGround(rasterCanvas) {
    const ctx = rasterCanvas.getContext('2d');
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, rasterCanvas.width, rasterCanvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, rasterCanvas.width, rasterCanvas.height);
    ctx.restore();
}
function drawCropFiled(ctx, bufferCanvas, rasterCtx, rasterCanvas, isDrawOdd, focusRect) {
    const lineWidth = 2;
    redrawRasterBoundBackGround(rasterCanvas);
    const transform = ctx.getTransform();
    const currentZoom = (0,_mainCanvas__WEBPACK_IMPORTED_MODULE_0__.getCurrentZoom)(ctx);
    rasterCtx.clearRect(focusRect.left, focusRect.top, focusRect.getWidth(), focusRect.getHeight());
    rasterCtx.strokeStyle = 'white';
    rasterCtx.strokeRect(focusRect.left - lineWidth, focusRect.top - lineWidth, focusRect.getWidth() + lineWidth * 2, focusRect.getHeight() + lineWidth * 2);
    // Draw vertical lines
    for (let i = 0; i < 4; i++) {
        if ([0, 3].includes(i) || !isDrawOdd)
            continue;
        rasterCtx.beginPath();
        rasterCtx.strokeStyle = 'white';
        rasterCtx.lineWidth = lineWidth;
        rasterCtx.moveTo(focusRect.left + (i * focusRect.getWidth()) / 3, focusRect.top);
        rasterCtx.lineTo(focusRect.left + (i * focusRect.getWidth()) / 3, focusRect.top + focusRect.getHeight());
        rasterCtx.stroke();
        rasterCtx.closePath();
    }
    // Draw horizontal lines
    for (let i = 0; i < 4; i++) {
        if ([0, 3].includes(i) || !isDrawOdd)
            continue;
        rasterCtx.beginPath();
        rasterCtx.strokeStyle = 'white';
        rasterCtx.lineWidth = lineWidth;
        rasterCtx.moveTo(focusRect.left, focusRect.top + (i * focusRect.getHeight()) / 3);
        rasterCtx.lineTo(focusRect.left + focusRect.getWidth(), focusRect.top + (i * focusRect.getHeight()) / 3);
        rasterCtx.stroke();
        rasterCtx.closePath();
    }
}
function cropCursorChange(canvas, point, originalRect) {
    canvas.style.cursor = 'default';
    const isOutside = !(0,_rect__WEBPACK_IMPORTED_MODULE_1__.IsInRect)(point.x, point.y, originalRect.left, originalRect.top, originalRect.right, originalRect.bottom);
    if (isOutside) {
        const isleft = point.x < originalRect.left;
        const isTop = point.y < originalRect.top;
        const isRight = point.x > originalRect.right;
        const isBottom = point.y > originalRect.bottom;
        if (isTop || isBottom) {
            canvas.style.cursor = 'ns-resize';
        }
        if (isleft || isRight) {
            canvas.style.cursor = 'ew-resize';
        }
        if (isleft && isTop) {
            canvas.style.cursor = 'nw-resize';
        }
        if (isleft && isBottom) {
            canvas.style.cursor = 'sw-resize';
        }
        if (isRight && isTop) {
            canvas.style.cursor = 'ne-resize';
        }
        if (isRight && isBottom) {
            canvas.style.cursor = 'se-resize';
        }
    }
    else {
        canvas.style.cursor = 'move';
    }
}
function getCursorPoint(point, focusRect) {
    const isOutside = !(0,_rect__WEBPACK_IMPORTED_MODULE_1__.IsInRect)(point.x, point.y, focusRect.left, focusRect.top, focusRect.right, focusRect.bottom);
    if (isOutside) {
        const isleft = point.x < focusRect.left;
        const isTop = point.y < focusRect.top;
        const isRight = point.x > focusRect.right;
        const isBottom = point.y > focusRect.bottom;
        if (isleft && isTop) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.topLeft;
        }
        if (isleft && isBottom) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.bottomLeft;
        }
        if (isRight && isTop) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.topRight;
        }
        if (isRight && isBottom) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.bottomRight;
        }
        if (isTop) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.top;
        }
        if (isleft) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.left;
        }
        if (isRight) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.right;
        }
        if (isBottom) {
            return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.bottom;
        }
    }
    else {
        return _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_2__.CursorPoint.move;
    }
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
//# sourceMappingURL=js/09a151e97c545ea772e7.js.map