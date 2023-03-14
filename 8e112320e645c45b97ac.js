"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_canvas_components_ImageEditor_CanvasImageEditor_tsx"],{

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
                ViewsRef.current.backgroundLayer && updateDimensions();
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Brush.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/PanTool.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AutoFixNormal.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DeleteForever.js");
/* harmony import */ var _canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool */ "./src/canvas/ImageEditor/Tool/index.ts");
/* harmony import */ var _Panel_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Panel/Panel */ "./src/canvas/components/Panel/Panel.tsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");
/* harmony import */ var _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/canvas/constants */ "./src/utils/canvas/constants.ts");






const Menu = ({ ViewsRef, setFile, file }) => {
    const { mode, setMode, setShowPanel } = (0,_store_context__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();
    const [tool, setTool] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { MENU_WIDTH } = _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4__.LAYOUT_SIZE;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (ViewsRef.current.canvas && file !== null) {
            setShowPanel(true);
            const ToolClass = (0,_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__["default"])(mode);
            const toolInstance = new ToolClass(ViewsRef.current);
            setTool(toolInstance);
            return () => {
                toolInstance.unRegisterEvent(ViewsRef.current.canvas);
            };
        }
    }, [mode]);
    const tools = [
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__["default"], null),
            onClick: () => setMode(_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.BrushTool.name),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__["default"], null),
            onClick: () => setMode(_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.PanTool.name),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"], null),
            onClick: () => setMode(_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.EraseTool.name),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__["default"], null),
            onClick: () => setFile(null),
        },
    ];
    return (file && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `inset-y-0 left-0 flex min-w-[${MENU_WIDTH}] flex-col  items-center  text-white`, style: { maxWidth: MENU_WIDTH } }, tools.map(({ icon, onClick }, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { key: index, onClick: onClick, className: " row-auto cursor-pointer p-2  hover:bg-slate-500" }, icon)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel_Panel__WEBPACK_IMPORTED_MODULE_2__["default"], { title: mode, mode: mode, tool: tool, className: " " }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/canvas/components/Panel/Brush/BrushPanel.tsx":
/*!**********************************************************!*\
  !*** ./src/canvas/components/Panel/Brush/BrushPanel.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPicker */ "./src/canvas/components/Panel/Brush/ColorPicker.tsx");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Slider */ "./src/components/Slider.tsx");



const BrushPanel = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('#000000');
    const { tool } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => { }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"], { colorValue: color, setColorCallBack: tool.setColor }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], { setSizeCallBack: tool.setSize })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrushPanel);


/***/ }),

/***/ "./src/canvas/components/Panel/Brush/ColorPicker.tsx":
/*!***********************************************************!*\
  !*** ./src/canvas/components/Panel/Brush/ColorPicker.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CanvasColorPicker = (props) => {
    // const canvasRef = useRef(null);
    // const [selectedColor, setSelectedColor] = useState({ R: 255, G: 255, B: 255, A: 1 });
    // useEffect(() => {
    //   const canvas = canvasRef.current;
    //   const context = canvas.getContext('2d');
    //   // Draw a gradient on the canvas
    //   const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    //   gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
    //   gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    //   gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    //   gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    //   gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    //   gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    //   gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');
    //   context.fillStyle = gradient;
    //   context.fillRect(0, 0, canvas.width, canvas.height);
    // }, []);
    // function handlePickerClick(event) {
    //   const canvas = canvasRef.current;
    //   const x = event.nativeEvent.offsetX;
    //   const y = event.nativeEvent.offsetY;
    //   const imageData = canvas.getContext('2d').getImageData(x, y, 1, 1);
    //   const color = {
    //     R: imageData.data[0],
    //     G: imageData.data[1],
    //     B: imageData.data[2],
    //     A: imageData.data[3] / 255,
    //   };
    //   setSelectedColor(color);
    // }
    // const selectedColorString = `rgba(${selectedColor.R}, ${selectedColor.G}, ${selectedColor.B}, ${selectedColor.A})`;
    const { setColorCallBack, colorValue } = props;
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(colorValue);
    const handleColorChange = (event) => {
        setColor(event.target.value);
        setColorCallBack(event.target.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "color", value: color, onChange: handleColorChange })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasColorPicker);


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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");
/* harmony import */ var _Brush_BrushPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brush/BrushPanel */ "./src/canvas/components/Panel/Brush/BrushPanel.tsx");
/* harmony import */ var _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/canvas/constants */ "./src/utils/canvas/constants.ts");
/* harmony import */ var _canvas_ImageEditor_Tool_Brush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Brush */ "./src/canvas/ImageEditor/Tool/Brush.ts");
/* harmony import */ var _canvas_ImageEditor_Tool_Pan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Pan */ "./src/canvas/ImageEditor/Tool/Pan.ts");
/* harmony import */ var _canvas_ImageEditor_Tool_Erase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Erase */ "./src/canvas/ImageEditor/Tool/Erase.ts");








const Panel = (props) => {
    const { isShowPanel, setShowPanel } = (0,_store_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    const { PANEL_WIDTH } = _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_SIZE;
    const { title, children, mode, tool } = props;
    const panel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        switch (mode) {
            case _canvas_ImageEditor_Tool_Brush__WEBPACK_IMPORTED_MODULE_4__["default"].name:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Brush_BrushPanel__WEBPACK_IMPORTED_MODULE_2__["default"], { tool: tool });
            case _canvas_ImageEditor_Tool_Pan__WEBPACK_IMPORTED_MODULE_5__["default"].name:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
            case _canvas_ImageEditor_Tool_Erase__WEBPACK_IMPORTED_MODULE_6__["default"].name:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
        }
    }, [mode, tool]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isShowPanel && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-full flex-1 flex-col max-w-[${PANEL_WIDTH}]` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ...props, className: `flex  flex-row justify-around bg-navbar p-2` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-center space-y-3  border-b border-solid text-white" }, title),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "flex-1 text-white", onClick: () => setShowPanel(false) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"], null)))),
        panel))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);


/***/ })

}]);
//# sourceMappingURL=js/8e112320e645c45b97ac.js.map