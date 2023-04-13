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
/* harmony import */ var _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/canvas/constants */ "./src/utils/canvas/constants.js");
/* harmony import */ var _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_canvas_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Maincanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Maincanvas */ "./src/canvas/components/ImageEditor/Maincanvas.tsx");
/* harmony import */ var _CursorCanvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CursorCanvas */ "./src/canvas/components/ImageEditor/CursorCanvas.tsx");
/* harmony import */ var _canvas_ImageEditor_StateController_StateController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/canvas/ImageEditor/StateController/StateController */ "./src/canvas/ImageEditor/StateController/StateController.ts");
/* harmony import */ var _canvas_ImageEditor_Canvas_RasterCanvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/canvas/ImageEditor/Canvas/RasterCanvas */ "./src/canvas/ImageEditor/Canvas/RasterCanvas.ts");










const CanvasImageEditor = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const rasterCanvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const ContentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const ViewsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const stateController = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new _canvas_ImageEditor_StateController_StateController__WEBPACK_IMPORTED_MODULE_8__["default"]());
    const rasterViewsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { isShowPanel, mode, globalState } = (0,_store_context__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)();
    const { MENU_WIDTH, PANEL_WIDTH } = _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_SIZE;
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const onClickFile = (e) => {
        ViewsRef.current = new _canvas_ImageEditor_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
        rasterViewsRef.current = new _canvas_ImageEditor_Canvas_RasterCanvas__WEBPACK_IMPORTED_MODULE_9__["default"]();
        setFile(e.target.files[0]);
    };
    const contentMaxSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const panelWidth = isShowPanel ? PANEL_WIDTH : 0;
        return `calc(100% - ${panelWidth || MENU_WIDTH})`;
    }, [isShowPanel]);
    const menuClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('flex', 'min-w-[2.5rem]', 'text-white');
    const contentClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('flex-1', 'border', 'border-solid', 'border-yellow-400', 'w-full', 'relative', 'overflow-hidden');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: containerRef, className: `${props.className} h-[100vh] ` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: menuClasses },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], { ViewsRef: ViewsRef, setFile: setFile, rasterViewsRef: rasterViewsRef, file: file, stateController: stateController.current })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: ContentRef, className: contentClasses, style: { maxWidth: contentMaxSize } },
                file === null && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-white" }, "please click or drag file"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { onChange: onClickFile, className: `absolute inset-0 z-10 cursor-pointer opacity-0 `, type: "file", accept: "image/*" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Maincanvas__WEBPACK_IMPORTED_MODULE_6__["default"], { canvasRef: canvasRef, ContentRef: ContentRef, ViewsRef: ViewsRef, rasterViewsRef: rasterViewsRef, rasterCanvasRef: rasterCanvasRef, file: file, mode: mode, stateController: stateController.current }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CursorCanvas__WEBPACK_IMPORTED_MODULE_7__["default"], { mode: mode, ContentRef: ContentRef, canvasRef: canvasRef, globalState: globalState })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasImageEditor);


/***/ }),

/***/ "./src/canvas/components/ImageEditor/CursorCanvas.tsx":
/*!************************************************************!*\
  !*** ./src/canvas/components/ImageEditor/CursorCanvas.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/canvas/mainCanvas */ "./src/utils/canvas/mainCanvas.ts");


const CursorCanvas = (props) => {
    const { canvasRef, mode, globalState } = props;
    const canvasCursorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { brushSize, eraseSize } = globalState || {};
    const isShow = mode === 'BrushTool' || mode === 'EraseTool';
    const [isCursor, setShowCursor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!canvasCursorRef.current && !isShow && !canvasRef.current)
            return;
        handleChangSize();
        canvasRef.current.addEventListener('mousemove', handleMouseMove);
        canvasRef.current.addEventListener('wheel', handleChangSize);
        setShowCursor(isShow);
        return () => {
            if (canvasRef.current) {
                canvasRef.current.removeEventListener('mousemove', handleMouseMove);
                canvasRef.current.removeEventListener('wheel', handleChangSize);
            }
            setShowCursor(false);
        };
    }, [mode, brushSize, eraseSize]);
    function handleChangSize(e) {
        let size = 1;
        switch (mode) {
            case 'BrushTool':
                size = brushSize | 1;
                break;
            case 'EraseTool':
                size = eraseSize | 1;
                break;
            default:
                break;
        }
        const ctx = canvasRef.current.getContext('2d');
        const level = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_1__.getCurrentZoom)(ctx);
        canvasCursorRef.current.width = Math.max(size, 3) * level;
        canvasCursorRef.current.height = Math.max(size, 3) * level;
    }
    function handleMouseMove(e) {
        const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
        const newX = offsetX - canvasCursorRef.current.width / 2;
        const newY = offsetY - canvasCursorRef.current.height / 2;
        canvasCursorRef.current.style.left = `${newX}px`;
        canvasCursorRef.current.style.top = `${newY}px`;
        // setShowCursor(
        //   !IsOutRect(
        //     newX,
        //     newY,
        //     canvasRef.current.clientLeft,
        //     canvasRef.current.clientTop,
        //     canvasRef.current.clientWidth,
        //     canvasRef.current.clientHeight,
        //   ),
        // );
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { className: "pointer-events-none absolute left-0 top-0 z-10 flex select-none rounded-full border  border-solid border-yellow-400", ref: canvasCursorRef, style: { display: isCursor ? 'block' : 'none' } })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorCanvas);


/***/ }),

/***/ "./src/canvas/components/ImageEditor/Maincanvas.tsx":
/*!**********************************************************!*\
  !*** ./src/canvas/components/ImageEditor/Maincanvas.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/canvas/mainCanvas */ "./src/utils/canvas/mainCanvas.ts");


const CanvasMain = (props) => {
    const { canvasRef, ContentRef, ViewsRef, file, stateController, rasterCanvasRef, rasterViewsRef, mode } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!canvasRef.current || !ContentRef.current || file === null)
            return;
        ViewsRef.current.initializeCanvas(canvasRef.current);
        stateController.initializeCanvas(ViewsRef.current);
        rasterViewsRef.current.initializeCanvas(canvasRef.current, rasterCanvasRef.current, ViewsRef.current.bufferCanvas);
        (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_1__.updateCanvasSize)(canvasRef.current, rasterCanvasRef.current, ContentRef.current.offsetWidth, ContentRef.current.offsetHeight);
        ViewsRef.current.loadFile(file).then(() => {
            stateController.pushUndoStack();
        });
        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                if (ViewsRef.current)
                    resizeCanvas();
                // if (file === null) ViewsRef.current.cleanCanvas();
            });
        });
        observer.observe(ContentRef.current);
        return () => {
            observer.unobserve;
            stateController.cleanState();
            rasterViewsRef.current.cleanCanvas();
            rasterViewsRef.current = null;
            ViewsRef.current.cleanCanvas();
            ViewsRef.current = null;
        };
    }, [file]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!canvasRef.current || !ContentRef.current || file === null)
            return;
        rasterViewsRef.current.cleanCanvas();
    }, [mode]);
    const resizeCanvas = () => {
        if (canvasRef.current && canvasRef.current && file !== null) {
            // adjust the canvas size to match the size of its container
            const zoomLevel = (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_1__.getCurrentZoom)(ViewsRef.current.ctx);
            const x = ViewsRef.current.ctx.getTransform().e + ContentRef.current.offsetWidth - canvasRef.current.width;
            const y = ViewsRef.current.ctx.getTransform().f + ContentRef.current.offsetHeight - canvasRef.current.height;
            (0,_utils_canvas_mainCanvas__WEBPACK_IMPORTED_MODULE_1__.updateCanvasSize)(canvasRef.current, rasterCanvasRef.current, ContentRef.current.offsetWidth, ContentRef.current.offsetHeight);
            ViewsRef.current.ctx.translate(x, y);
            ViewsRef.current.ctx.scale(zoomLevel, zoomLevel);
            ViewsRef.current.draw();
            rasterViewsRef.current.draw();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ref: canvasRef }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { className: "pointer-events-none absolute inset-0 select-none", ref: rasterCanvasRef })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasMain);


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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Brush.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/PanTool.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AutoFixNormal.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Crop.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DeleteForever.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Undo.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Redo.js");
/* harmony import */ var _canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool */ "./src/canvas/ImageEditor/Tool/index.ts");
/* harmony import */ var _Panel_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Panel/Panel */ "./src/canvas/components/Panel/Panel.tsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");
/* harmony import */ var _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/canvas/constants */ "./src/utils/canvas/constants.js");
/* harmony import */ var _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");







const Menu = ({ ViewsRef, setFile, file, stateController, rasterViewsRef }) => {
    const { mode, setMode, setShowPanel, isShowPanel } = (0,_store_context__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();
    const [tool, setTool] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { MENU_WIDTH } = _utils_canvas_constants__WEBPACK_IMPORTED_MODULE_4__.LAYOUT_SIZE;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (ViewsRef.current && file !== null && mode !== null) {
            setShowPanel(true);
            const ToolClass = (0,_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__["default"])(mode);
            const toolInstance = new ToolClass(ViewsRef.current, stateController, rasterViewsRef.current);
            setTool(toolInstance);
            if (mode === 'CropTool')
                rasterViewsRef.current.setInstance(toolInstance);
            else
                rasterViewsRef.current.setInstance(null);
            toolInstance.registerEvent();
            return () => {
                toolInstance.unRegisterEvent();
                setTool(null);
            };
        }
    }, [mode]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        !isShowPanel && setMode(null);
    }, [isShowPanel]);
    const handleDelte = () => {
        setFile(null);
        setTool(null);
        setMode(null);
        setShowPanel(false);
    };
    const tools = [
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__["default"], null),
            onClick: () => setMode(_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.BrushTool.name),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"], null),
            onClick: () => setMode(_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.PanTool.name),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__["default"], null),
            onClick: () => setMode(_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.EraseTool.name),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__["default"], null),
            onClick: () => setMode(_canvas_ImageEditor_Tool__WEBPACK_IMPORTED_MODULE_1__.Tools.CropTool.name),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__["default"], null),
            onClick: () => handleDelte(),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__["default"], null),
            onClick: () => stateController.undo(),
        },
        {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__["default"], null),
            onClick: () => stateController.redo(),
        },
    ];
    const menuClass = (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('inset-y-0', 'flex', 'flex-col', 'items-center', 'text-white');
    return (file && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: menuClass, style: { maxWidth: MENU_WIDTH } }, tools.map(({ icon, onClick }, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { key: index, onClick: onClick, className: " row-auto cursor-pointer p-2  hover:bg-slate-500" }, icon)))),
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
/* harmony import */ var _components_NumberInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/NumberInput */ "./src/components/NumberInput.tsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");





const BrushPanel = (props) => {
    const { tool } = props;
    const { globalState, setGlobalState } = (0,_store_context__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)();
    const { brushColor, brushSize } = globalState || {};
    const currentColor = brushColor || tool.color;
    const currentSize = brushSize || tool.size;
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentColor);
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentSize);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        tool.setColor(color);
    }, [tool]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        tool.setSize(size);
    }, [size]);
    const handleSetColor = (newColor) => {
        setColor(newColor);
        tool.setColor(newColor);
        setGlobalState({ ...globalState, brushColor: newColor });
    };
    const handleSetSize = (newSize) => {
        setSize(newSize);
        tool.setSize(newSize);
        setGlobalState({ ...globalState, brushSize: newSize });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-1 flex-col space-y-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"], { colorValue: color, setColorCallBack: handleSetColor }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], { size: size, setSizeCallBack: handleSetSize, max: 1000 }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NumberInput__WEBPACK_IMPORTED_MODULE_3__["default"], { max: 1000, value: size, setValue: handleSetSize })));
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
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setColor(colorValue);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "color", value: color, onChange: handleColorChange })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasColorPicker);


/***/ }),

/***/ "./src/canvas/components/Panel/Crop/CropPanel.tsx":
/*!********************************************************!*\
  !*** ./src/canvas/components/Panel/Crop/CropPanel.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Button */ "./src/components/Button.tsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");



const CropPanel = (props) => {
    const { tool } = props;
    const { globalState, setGlobalState } = (0,_store_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();
    const { eraseSize } = globalState || {};
    const currentSize = eraseSize || tool.size;
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentSize);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        tool.draw();
    }, [tool]);
    const onConfirm = () => {
        tool.onConfirm();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-1 flex-col space-y-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onConfirm }, "confirm")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CropPanel);


/***/ }),

/***/ "./src/canvas/components/Panel/Erase/ErasePanel.tsx":
/*!**********************************************************!*\
  !*** ./src/canvas/components/Panel/Erase/ErasePanel.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NumberInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/NumberInput */ "./src/components/NumberInput.tsx");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Slider */ "./src/components/Slider.tsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");




const ErasePanel = (props) => {
    const { tool } = props;
    const { globalState, setGlobalState } = (0,_store_context__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();
    const { eraseSize } = globalState || {};
    const currentSize = eraseSize || tool.size;
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentSize);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        tool.setSize(size);
    }, [size]);
    const handleSetSize = (newSize) => {
        setSize(newSize);
        tool.setSize(newSize);
        setGlobalState({ ...globalState, eraseSize: newSize });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-1 flex-col space-y-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], { size: size, setSizeCallBack: handleSetSize, max: 1000 }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NumberInput__WEBPACK_IMPORTED_MODULE_1__["default"], { max: 1000, value: size, setValue: handleSetSize })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErasePanel);


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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store/context */ "./src/store/context/index.tsx");
/* harmony import */ var _Brush_BrushPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brush/BrushPanel */ "./src/canvas/components/Panel/Brush/BrushPanel.tsx");
/* harmony import */ var _canvas_ImageEditor_Tool_Brush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Brush */ "./src/canvas/ImageEditor/Tool/Brush.ts");
/* harmony import */ var _canvas_ImageEditor_Tool_Pan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Pan */ "./src/canvas/ImageEditor/Tool/Pan.ts");
/* harmony import */ var _canvas_ImageEditor_Tool_Erase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Erase */ "./src/canvas/ImageEditor/Tool/Erase.ts");
/* harmony import */ var _Erase_ErasePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Erase/ErasePanel */ "./src/canvas/components/Panel/Erase/ErasePanel.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/canvas/ImageEditor/Tool/Crop */ "./src/canvas/ImageEditor/Tool/Crop.ts");
/* harmony import */ var _Crop_CropPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Crop/CropPanel */ "./src/canvas/components/Panel/Crop/CropPanel.tsx");











const Panel = (props) => {
    const { isShowPanel, setShowPanel } = (0,_store_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalContext)();
    const { title, mode, tool } = props;
    const panel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        switch (mode) {
            case _canvas_ImageEditor_Tool_Brush__WEBPACK_IMPORTED_MODULE_3__["default"].name:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Brush_BrushPanel__WEBPACK_IMPORTED_MODULE_2__["default"], { tool: tool });
            case _canvas_ImageEditor_Tool_Pan__WEBPACK_IMPORTED_MODULE_4__["default"].name:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
            case _canvas_ImageEditor_Tool_Erase__WEBPACK_IMPORTED_MODULE_5__["default"].name:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Erase_ErasePanel__WEBPACK_IMPORTED_MODULE_6__["default"], { tool: tool });
            case _canvas_ImageEditor_Tool_Crop__WEBPACK_IMPORTED_MODULE_8__["default"].name:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Crop_CropPanel__WEBPACK_IMPORTED_MODULE_9__["default"], { tool: tool });
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
        }
    }, [tool]);
    const containerClass = (0,clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('h-full', 'flex-1', 'flex-col', 'w-panel-width');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isShowPanel && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: containerClass },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ...props, className: `flex  flex-row justify-around bg-navbar p-2` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-center space-y-3  border-b border-solid text-white" }, title),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "flex-1 text-white", onClick: () => setShowPanel(false) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2" },
            " ",
            panel)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);


/***/ }),

/***/ "./src/components/NumberInput.tsx":
/*!****************************************!*\
  !*** ./src/components/NumberInput.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=js/c2149d4dcfce31b91b2f.js.map