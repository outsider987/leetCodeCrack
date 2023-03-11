"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_ImageEditor_tsx-src_utils_canvas_coordinate_ts-src_utils_canvas_rect_ts-0de39c"],{

/***/ "./src/canvas/components/ImageEditor/CanvasImageEditor.tsx":
/*!*****************************************************************!*\
  !*** ./src/canvas/components/ImageEditor/CanvasImageEditor.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canvas_ImageEditor_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/canvas/ImageEditor/Canvas/Canvas */ "./src/canvas/ImageEditor/Canvas/Canvas.ts");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Menu */ "./src/canvas/components/Menu/Menu.tsx");
/* harmony import */ var _utils_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/canvas/canvas */ "./src/utils/canvas/canvas.ts");
/* harmony import */ var _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/canvas/constants */ "./src/utils/canvas/constants.ts");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");






const CanvasImageEditor = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { MENU_WIDTH, PANEL_WIDTH } = _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4__.LAYOUT_SIZE;
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const ViewsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new _canvas_ImageEditor_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]());
    const ContentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const { isShowPanel } = (0,_store_context__WEBPACK_IMPORTED_MODULE_5__.useGlobalContext)();
    const onClickFile = (e) => {
        setFile(e.target.files[0]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!canvasRef.current || !ContentRef.current || file === null)
            return;
        ViewsRef.current.initializeCanvas(canvasRef.current);
        canvasRef.current.width = ContentRef.current.offsetWidth;
        canvasRef.current.height = ContentRef.current.offsetHeight;
        ViewsRef.current.loadFile(file);
        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                updateDimensions();
            });
        });
        observer.observe(ContentRef.current);
        return () => {
            observer.unobserve(ContentRef.current);
            ViewsRef.current.cleanCanvas();
        };
    }, [file]);
    const contentMaxSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const panelWidth = isShowPanel ? PANEL_WIDTH : 0;
        return `calc(100% - ${panelWidth || MENU_WIDTH})`;
    }, [isShowPanel]);
    const updateDimensions = () => {
        if (canvasRef.current && file !== null) {
            // adjust the canvas size to match the size of its container
            const zoomLevel = (0,_utils_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__.getCurrentZoom)(ViewsRef.current.ctx);
            const x = ViewsRef.current.ctx.getTransform().e + ContentRef.current.offsetWidth - canvasRef.current.width;
            const y = ViewsRef.current.ctx.getTransform().f + ContentRef.current.offsetHeight - canvasRef.current.height;
            // reset the transform matrix as it is cumulative
            canvasRef.current.width = ContentRef.current.offsetWidth;
            canvasRef.current.height = ContentRef.current.offsetHeight;
            ViewsRef.current.ctx.translate(x, y);
            ViewsRef.current.ctx.scale(zoomLevel, zoomLevel);
            ViewsRef.current.draw();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `${props.className} h-[100vh] ` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-w-[2.5rem]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], { ViewsRef: ViewsRef, setFile: setFile, file: file })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: ContentRef, className: `relative flex-1  border  border-solid border-yellow-400`, style: { maxWidth: contentMaxSize } },
                file === null && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-white" }, "please click or drag file"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { onChange: onClickFile, className: `absolute inset-0 z-10 cursor-pointer opacity-0 `, type: "file", accept: "image/*" }))),
                ContentRef.current && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ref: canvasRef })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasImageEditor);


/***/ }),

/***/ "./src/canvas/components/Menu/Menu.tsx":
/*!*********************************************!*\
  !*** ./src/canvas/components/Menu/Menu.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Brush.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/PanTool.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AutoFixNormal.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DeleteForever.js");
/* harmony import */ var _canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool */ "./src/canvas/ImageEditor/Tool/index.ts");
/* harmony import */ var _Panel_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Panel/Panel */ "./src/canvas/components/Panel/Panel.tsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");





const Menu = ({ ViewsRef, setFile, file }) => {
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { setShowPanel } = (0,_store_context__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (ViewsRef.current.canvas && file !== null) {
            setShowPanel(true);
            const ToolClass = (0,_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__["default"])(mode);
            let tool = new ToolClass(ViewsRef.current);
            return () => {
                tool.unRegisterEvent(ViewsRef.current.canvas);
            };
        }
    }, [mode]);
    const tools = [
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__["default"], null),
            onClick: () => setMode('PaintTool'),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__["default"], null),
            onClick: () => setMode('PanTool'),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__["default"], null),
            onClick: () => setMode('EraseTool'),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"], null),
            onClick: () => setFile(null),
        },
    ];
    return (file && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " inset-y-0 left-0 flex w-menu-width min-w-[2.5rem] flex-col items-center  space-y-3 text-white" }, tools.map(({ icon, onClick }, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cursor-pointer", key: index, onClick: onClick }, icon)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel_Panel__WEBPACK_IMPORTED_MODULE_2__["default"], { title: mode, className: " " }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/canvas/components/Panel/Panel.tsx":
/*!***********************************************!*\
  !*** ./src/canvas/components/Panel/Panel.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");



const Panel = (props) => {
    const { isShowPanel, setShowPanel } = (0,_store_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    const { title, children } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isShowPanel && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ...props, className: `flex h-full w-panel-width flex-row justify-around bg-navbar p-2` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-center space-y-3  border-b border-solid text-white" }, title),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "flex-1 text-white", onClick: () => setShowPanel(false) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__["default"], null))),
        children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);


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
/* harmony import */ var _canvas_components_ImageEditor_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/canvas/components/ImageEditor/CanvasImageEditor */ "./src/canvas/components/ImageEditor/CanvasImageEditor.tsx");


const ImageEditor = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative m-auto flex w-full flex-col items-center justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_canvas_components_ImageEditor_CanvasImageEditor__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "relative  flex h-full w-full max-w-[100vw-(240px)] flex-row border border-solid border-white" })));
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

/***/ "./src/utils/canvas/constants.ts":
/*!***************************************!*\
  !*** ./src/utils/canvas/constants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_SIZE": () => (/* binding */ LAYOUT_SIZE)
/* harmony export */ });
const LAYOUT_SIZE = { MENU_WIDTH: '2.5rem', PANEL_WIDTH: '10rem' };


/***/ }),

/***/ "./src/utils/canvas/coordinate.ts":
/*!****************************************!*\
  !*** ./src/utils/canvas/coordinate.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/utils/canvas/rect.ts":
/*!**********************************!*\
  !*** ./src/utils/canvas/rect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=js/62eff041566f125396b9.js.map