"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_ImageEditor_tsx"],{

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


const CanvasImageEditor = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const onClickFile = (e) => {
        setFile(e.target.files[0]);
    };
    const onDeleteFile = (e) => {
        setFile(null);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current && file !== null) {
            const canvas = canvasRef.current;
            const ctx = canvasRef.current.getContext('2d');
            // ctx.imageSmoothingEnabled = false;
            const image = new Image();
            image.onload = () => {
                let ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
                let x = (canvas.width - image.width * ratio) / 2;
                let y = (canvas.height - image.height * ratio) / 2;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, image.width, image.height, x, y, image.width * ratio, image.height * ratio);
            };
            image.src = URL.createObjectURL(file);
        }
        else {
            const canvas = canvasRef.current;
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [file]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: ` relative border-solid border-yellow-400` },
        file === null && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-white" }, "please click or drag file"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { onChange: onClickFile, className: " absolute inset-0 z-10 cursor-pointer opacity-0", type: "file", accept: "image/*" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex space-x-3" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onDeleteFile }, " delete File"))));
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
//# sourceMappingURL=js/a65fa83a78184e50910d.js.map