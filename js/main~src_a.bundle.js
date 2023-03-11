"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["main~src_a"],{

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/reset.scss":
/*!************************!*\
  !*** ./src/reset.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.scss */ "./src/reset.scss");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layouts_ModalsWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/ModalsWrapper */ "./src/layouts/ModalsWrapper.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/context */ "./src/store/context/index.tsx");









const rootElement = document.getElementById('root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);


const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClient();
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, { store: _store__WEBPACK_IMPORTED_MODULE_5__.store },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.HashRouter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_store_context__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClientProvider, { client: queryClient },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_ModalsWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_router__WEBPACK_IMPORTED_MODULE_2__.MYRoutes, null))))))));


/***/ }),

/***/ "./src/components/Button.tsx":
/*!***********************************!*\
  !*** ./src/components/Button.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Button = (props) => {
    const { isRounded, isWhite } = props;
    const whiteClass = `bg-white 
   text-[#121212] hover:bg-[#121212] hover:text-white`;
    const darkClass = `bg-[#121212]  
   text-white hover:bg-white hover:text-[#121212]`;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { ...props, "data-testid": "btn", className: `flex items-center justify-center border border-solid
       border-black py-[0.8125rem]
    px-[0.625rem] font-bold leading-[100%] ${isRounded ? 'rounded-full' : 'rounded'} ${isWhite ? whiteClass : darkClass} ` }, props.children));
};
Button.defaultProps = { isRounded: false, isWhite: true };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/components/LayoutDivider.tsx":
/*!******************************************!*\
  !*** ./src/components/LayoutDivider.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LayoutDivider = ({ desktop, mobile }) => {
    const [width, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, width > 1024 ? desktop() : mobile());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutDivider);


/***/ }),

/***/ "./src/components/SortBox.tsx":
/*!************************************!*\
  !*** ./src/components/SortBox.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SortBox = ({ height, width }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border border-solid border-black bg-gray-300", style: { height: `${height}vh`, width: `${width}vw` } }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortBox);


/***/ }),

/***/ "./src/components/modals/ErrorDialog.tsx":
/*!***********************************************!*\
  !*** ./src/components/modals/ErrorDialog.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./src/components/Button.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/components/modals/Modal.tsx");



const ErrorDialog = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], { toggle: props.toggle, backdrop: props.backdrop },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: (e) => e.stopPropagation(), className: "flex min-h-[50vh] w-0 animate-pop flex-col rounded-xl bg-greyscale p-[1%] shadow-2xl sm:min-w-[90vw]  lg:min-w-[50vw]" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center space-y-2 text-3xl font-bold text-white" }, props.titile),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { wordBreak: 'break-word' }, className: "m-auto flex h-full max-h-[50vh] max-w-[90vw] items-center overflow-auto text-orange-400" }, props.msg),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "border-[0px]", isWhite: false, onClick: props.backdrop }, "OK!"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorDialog);


/***/ }),

/***/ "./src/components/modals/Modal.tsx":
/*!*****************************************!*\
  !*** ./src/components/modals/Modal.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Modal = (props) => {
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.toggle);
    if (props.toggle) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ...props, onClick: props.backdrop, className: `absolute inset-0 z-50
        m-auto flex h-full animate-fade_in
        items-center
        justify-center
        overflow-hidden
        bg-gray-800/50
        ` }, props.children));
    }
    else {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./src/layouts/HomeWrapper.tsx":
/*!*************************************!*\
  !*** ./src/layouts/HomeWrapper.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const HomeWrapper = ({ children }) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-screen w-full bg-greyscale sm:flex-col lg:flex-row" }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeWrapper);


/***/ }),

/***/ "./src/layouts/LayoutSort.tsx":
/*!************************************!*\
  !*** ./src/layouts/LayoutSort.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.tsx");
/* harmony import */ var _components_SortBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SortBox */ "./src/components/SortBox.tsx");



const LayoutSort = (props) => {
    if (props.isDesktop) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-[90vh]  flex-row" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " mr-2 flex flex-col space-y-3 text-lg font-bold text-white" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.title),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                    "count:",
                    props.boxDatas.length),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mr-2 mb-2 flex w-full items-end" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: props.onStart }, " start"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex max-h-[94vh] w-full flex-row items-end" }, props.boxDatas.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SortBox__WEBPACK_IMPORTED_MODULE_2__["default"], { key: index, height: item, width: 2 }))))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " flex flex-row justify-around text-lg font-bold text-white" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.title),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                "count:",
                props.boxDatas.length),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " mr-2 mb-2 flex items-end" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: props.onStart }, " start"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex max-h-[94vh] w-full flex-row items-end" }, props.boxDatas.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SortBox__WEBPACK_IMPORTED_MODULE_2__["default"], { key: index, height: item * 0.9, width: 2 }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSort);


/***/ }),

/***/ "./src/layouts/ModalsWrapper.tsx":
/*!***************************************!*\
  !*** ./src/layouts/ModalsWrapper.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_modals_ErrorDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/modals/ErrorDialog */ "./src/components/modals/ErrorDialog.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store */ "./src/store/index.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/global */ "./src/store/global.ts");





const ModalsWrapper = (props) => {
    const globalSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_store__WEBPACK_IMPORTED_MODULE_3__.selectGlobal);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modals_ErrorDialog__WEBPACK_IMPORTED_MODULE_2__["default"], { toggle: globalSelector.alertDialog.show, msg: globalSelector.alertDialog.msg, backdrop: () => dispatch((0,_store_global__WEBPACK_IMPORTED_MODULE_4__.setAlertDialog)({ ...globalSelector.alertDialog, show: false })), titile: globalSelector.alertDialog.title }),
        props.children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalsWrapper);


/***/ }),

/***/ "./src/pages/Home/Sort/QuickSort.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Home/Sort/QuickSort.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/LayoutDivider */ "./src/components/LayoutDivider.tsx");
/* harmony import */ var _layouts_LayoutSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/layouts/LayoutSort */ "./src/layouts/LayoutSort.tsx");
/* harmony import */ var _utils_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/regular */ "./src/utils/regular.ts");




const MemoChild = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_layouts_LayoutSort__WEBPACK_IMPORTED_MODULE_2__["default"]);
const QuickSort = () => {
    console.log('QuickSort Rerender');
    const refArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_utils_regular__WEBPACK_IMPORTED_MODULE_3__.getRandomNoDuplicateArray)(80));
    const [tempArray, setTempArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(refArray.current);
    const BoxDatas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => refArray.current, [refArray.current]);
    const onStart = async () => {
        await quickSort(refArray.current);
    };
    const quickSort = async (array, length = array.length - 1, start = 0) => {
        if (array.length < 2)
            return array; // base case
        let left = [];
        let right = [];
        let pivot = array[length];
        while (start < length) {
            if (array[start] < pivot) {
                left.push(array[start]);
            }
            else {
                right.push(array[start]);
            }
            start++;
        }
        refArray.current = replaceOrignalPartArray(refArray.current, pivot, [
            ...left,
            pivot,
            ...right,
        ]);
        setTempArray(refArray.current);
        await (0,_utils_regular__WEBPACK_IMPORTED_MODULE_3__.sleep)(100);
        return [...(await quickSort(left)), pivot, ...(await quickSort(right))];
    };
    const replaceOrignalPartArray = (orgArray, pivot, changeArray) => {
        const temp = new Array(...orgArray);
        temp.splice(temp.findIndex((i) => i === pivot) - (changeArray.length - 1), changeArray.length, ...changeArray);
        return temp;
    };
    const content = {
        desktop: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_LayoutSort__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "QuickSort", isDesktop: true, boxDatas: refArray.current, onStart: onStart })),
        mobile: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_LayoutSort__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "QuickSort", isDesktop: false, boxDatas: refArray.current, onStart: onStart })),
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__["default"], { ...content });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickSort);


/***/ }),

/***/ "./src/pages/Page404.tsx":
/*!*******************************!*\
  !*** ./src/pages/Page404.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_HomeWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/layouts/HomeWrapper */ "./src/layouts/HomeWrapper.tsx");


const Page404 = () => {
    const contentContainer = location.pathname === '/tags'
        ? 'content_tags_container'
        : 'content_container';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_HomeWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "404")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page404);


/***/ }),

/***/ "./src/router/index.tsx":
/*!******************************!*\
  !*** ./src/router/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute),
/* harmony export */   "MYRoutes": () => (/* binding */ MYRoutes),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Home_Sort_QuickSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/pages/Home/Sort/QuickSort */ "./src/pages/Home/Sort/QuickSort.tsx");
/* harmony import */ var _pages_Page404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/pages/Page404 */ "./src/pages/Page404.tsx");




_pages_Home_Sort_QuickSort__WEBPACK_IMPORTED_MODULE_1__["default"];
const lazyLoad = (Comp) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "\u52A0\u8F7D\u4E2D...") },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Comp, null)));
};
const HomeRoute = {
    path: '/',
    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("src_components_SvgIcon_tsx"), __webpack_require__.e("src_pages_Home_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home */ "./src/pages/Home/index.tsx")))),
    icon: 'logo',
    children: [
        {
            path: '/profile',
            element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Profile_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Profile */ "./src/pages/Home/Profile/index.tsx")))),
            icon: 'template',
            isShow: true,
            text: 'profile',
        },
        {
            path: '/sort',
            element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Sort_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Sort */ "./src/pages/Home/Sort/index.tsx")))),
            icon: 'template',
            isShow: true,
            text: 'Sort',
            children: [
                {
                    path: '/sort/quicksort',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Sort/QuickSort */ "./src/pages/Home/Sort/QuickSort.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'QuickSort',
                },
                {
                    path: '/sort/mergesort',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Sort_MergeSort_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Sort/MergeSort */ "./src/pages/Home/Sort/MergeSort.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'MergeSort',
                    // children: [
                    //   {
                    //     path: '/sort/mergesort',
                    //     element: lazyLoad(React.lazy(() => import('~/pages/Home/Sort/MergeSort'))),
                    //     icon: 'template',
                    //     isShow: true,
                    //     text: 'test',
                    //     children: [
                    //       {
                    //         path: '/sort/mergesort/2',
                    //         element: lazyLoad(React.lazy(() => import('~/pages/Home/Sort/MergeSort'))),
                    //         icon: 'template',
                    //         isShow: true,
                    //         text: 'test',
                    //       },
                    //     ],
                    //   },
                    // ],
                },
            ],
        },
        {
            path: '/member',
            element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_axios_index_js-node_modules_axios_lib_adapters_xhr_js"), __webpack_require__.e("vendors-node_modules_axios_lib_cancel_CancelToken_js-node_modules_axios_lib_core_Axios_js-nod-ea0872"), __webpack_require__.e("vendors-node_modules_axios_lib_helpers_bind_js-node_modules_axios_lib_helpers_buildURL_js-nod-316a2f"), __webpack_require__.e("vendors-node_modules_axios_lib_utils_js"), __webpack_require__.e("node_modules_outsiderreact_dist_components_Input_index_js-src_api_auth_ts-src_hooks_useMyForm-226379"), __webpack_require__.e("src_pages_Home_Member_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Member */ "./src/pages/Home/Member/index.tsx")))),
            icon: 'template',
            isShow: true,
            text: 'member',
            children: [
                {
                    path: '/member/login',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_axios_index_js-node_modules_axios_lib_adapters_xhr_js"), __webpack_require__.e("vendors-node_modules_axios_lib_cancel_CancelToken_js-node_modules_axios_lib_core_Axios_js-nod-ea0872"), __webpack_require__.e("vendors-node_modules_axios_lib_helpers_bind_js-node_modules_axios_lib_helpers_buildURL_js-nod-316a2f"), __webpack_require__.e("vendors-node_modules_axios_lib_utils_js"), __webpack_require__.e("node_modules_outsiderreact_dist_components_Input_index_js-src_api_auth_ts-src_hooks_useMyForm-226379"), __webpack_require__.e("src_pages_Home_Member_Login_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Member/Login */ "./src/pages/Home/Member/Login.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'login',
                },
                {
                    path: '/member/register',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_axios_index_js-node_modules_axios_lib_adapters_xhr_js"), __webpack_require__.e("vendors-node_modules_axios_lib_cancel_CancelToken_js-node_modules_axios_lib_core_Axios_js-nod-ea0872"), __webpack_require__.e("vendors-node_modules_axios_lib_helpers_bind_js-node_modules_axios_lib_helpers_buildURL_js-nod-316a2f"), __webpack_require__.e("vendors-node_modules_axios_lib_utils_js"), __webpack_require__.e("src_components_SvgIcon_tsx"), __webpack_require__.e("node_modules_outsiderreact_dist_components_Input_index_js-src_api_auth_ts-src_hooks_useMyForm-226379"), __webpack_require__.e("src_pages_Home_Member_Register_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Member/Register */ "./src/pages/Home/Member/Register.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'register',
                },
            ],
        },
        {
            path: '/performance',
            element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Performance_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Performance */ "./src/pages/Home/Performance/index.tsx")))),
            icon: 'template',
            isShow: true,
            text: 'performance',
            children: [
                {
                    path: '/performance/infinite',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_axios_index_js-node_modules_axios_lib_adapters_xhr_js"), __webpack_require__.e("vendors-node_modules_axios_lib_cancel_CancelToken_js-node_modules_axios_lib_core_Axios_js-nod-ea0872"), __webpack_require__.e("vendors-node_modules_axios_lib_helpers_bind_js-node_modules_axios_lib_helpers_buildURL_js-nod-316a2f"), __webpack_require__.e("vendors-node_modules_axios_lib_utils_js"), __webpack_require__.e("src_components_SvgIcon_tsx"), __webpack_require__.e("src_pages_Home_Performance_InfiniteScroll_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Performance/InfiniteScroll */ "./src/pages/Home/Performance/InfiniteScroll.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'infinite',
                },
                {
                    path: '/performance/carousel',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Performance_Carousel_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Performance/Carousel */ "./src/pages/Home/Performance/Carousel.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'carousel',
                },
                {
                    path: '/performance/debounce',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_axios_index_js-node_modules_axios_lib_adapters_xhr_js"), __webpack_require__.e("vendors-node_modules_axios_lib_cancel_CancelToken_js-node_modules_axios_lib_core_Axios_js-nod-ea0872"), __webpack_require__.e("vendors-node_modules_axios_lib_helpers_bind_js-node_modules_axios_lib_helpers_buildURL_js-nod-316a2f"), __webpack_require__.e("vendors-node_modules_axios_lib_utils_js"), __webpack_require__.e("src_components_SvgIcon_tsx"), __webpack_require__.e("src_pages_Home_Performance_Debounce_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Performance/Debounce */ "./src/pages/Home/Performance/Debounce.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'debounce',
                },
            ],
        },
        {
            path: '/canvas',
            element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Performance_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Performance */ "./src/pages/Home/Performance/index.tsx")))),
            icon: 'template',
            isShow: true,
            text: 'canvas',
            children: [
                // {
                //   path: '/canvas/game',
                //   element: lazyLoad(React.lazy(() => import('~/pages/Home/Canvas/Game'))),
                //   icon: 'template',
                //   isShow: true,
                //   text: 'Demo Game',
                // },
                {
                    path: '/canvas/breakout',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Canvas_Breakout_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Canvas/Breakout */ "./src/pages/Home/Canvas/Breakout.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'Breakout',
                },
                {
                    path: '/canvas/image-editor',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_cache_dist_emotion-cache_browser_esm_js-node_modules_clsx_dist_c-3b4961"), __webpack_require__.e("vendors-node_modules_emotion_hash_dist_emotion-hash_esm_js-node_modules_emotion_is-prop-valid-d47ef5"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js"), __webpack_require__.e("vendors-node_modules_emotion_serialize_dist_emotion-serialize_browser_esm_js"), __webpack_require__.e("vendors-node_modules_emotion_sheet_dist_emotion-sheet_browser_esm_js-node_modules_emotion_sty-920671"), __webpack_require__.e("vendors-node_modules_mui_icons-material_esm_Brush_js-node_modules_mui_icons-material_esm_Clos-d2d7f6"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createMixins_js-node_modules_mui_material_styles_cre-e1ef3c"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-598e64"), __webpack_require__.e("vendors-node_modules_mui_material_styles_zIndex_js-node_modules_mui_material_utils_capitalize-502eb8"), __webpack_require__.e("vendors-node_modules_mui_system_esm_borders_js-node_modules_mui_system_esm_colorManipulator_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createStyled_js-node_modules_mui_system_esm_cssGrid_js-no-49a160"), __webpack_require__.e("vendors-node_modules_mui_system_esm_propsToClassKey_js-node_modules_mui_system_esm_styleFunct-5ba1e5"), __webpack_require__.e("vendors-node_modules_mui_utils_esm_capitalize_js-node_modules_mui_utils_esm_composeClasses_co-3deb45"), __webpack_require__.e("vendors-node_modules_prop-types_factoryWithTypeCheckers_js"), __webpack_require__.e("vendors-node_modules_prop-types_index_js-node_modules_prop-types_lib_ReactPropTypesSecret_js--40d499"), __webpack_require__.e("vendors-node_modules_react_cjs_react-jsx-runtime_development_js"), __webpack_require__.e("vendors-node_modules_react_jsx-runtime_js-node_modules_stylis_src_Middleware_js-node_modules_-548351"), __webpack_require__.e("src_canvas_ImageEditor_Canvas_Canvas_ts-src_canvas_ImageEditor_Tool_index_ts"), __webpack_require__.e("src_pages_Home_Canvas_ImageEditor_tsx-src_utils_canvas_coordinate_ts-src_utils_canvas_rect_ts-0de39c")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Canvas/ImageEditor */ "./src/pages/Home/Canvas/ImageEditor.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'ImageEditor',
                },
                {
                    path: '/canvas/chart',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Home_Canvas_Chart_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Canvas/Chart */ "./src/pages/Home/Canvas/Chart.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'Chart',
                },
                {
                    path: '/canvas/box',
                    element: lazyLoad(react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_debounce_index_js-node_modules_its-fine_dist_index_js"), __webpack_require__.e("vendors-node_modules_react-reconciler_constants_js-node_modules_react-reconciler_index_js-nod-4f8830"), __webpack_require__.e("vendors-node_modules_react-reconciler_cjs_react-reconciler_development_js"), __webpack_require__.e("vendors-node_modules_react-three_fiber_dist_index-27a1523b_esm_js"), __webpack_require__.e("vendors-node_modules_react-three_fiber_dist_react-three-fiber_esm_js"), __webpack_require__.e("vendors-node_modules_react-three_fiber_node_modules_scheduler_index_js"), __webpack_require__.e("vendors-node_modules_react-use-measure_dist_web_js"), __webpack_require__.e("vendors-node_modules_suspend-react_dist_index_js-node_modules_zustand_esm_index_js"), __webpack_require__.e("vendors-node_modules_three_build_three_module_js"), __webpack_require__.e("src_pages_Home_Canvas_Box_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ~/pages/Home/Canvas/Box */ "./src/pages/Home/Canvas/Box.tsx")))),
                    icon: 'template',
                    isShow: true,
                    text: 'Box Demo',
                },
            ],
        },
    ],
};
const routes = [
    HomeRoute,
    {
        path: '*',
        element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Page404__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        icon: 'logo',
    },
];
const MYRoutes = () => {
    const element = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useRoutes)(routes);
    return element;
};



/***/ }),

/***/ "./src/store/auth.ts":
/*!***************************!*\
  !*** ./src/store/auth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "globalSlice": () => (/* binding */ globalSlice),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "setToken": () => (/* binding */ setToken)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");


const initialState = {
    user: {
        accessToken: '',
        refreshToken: '',
        userInformation: {
            email: '',
            exp: 0,
            iat: 0,
            user_id: 0,
            username: '',
        },
    },
    // tokenConfig: {
    //   tokenExpiredTime: 10,
    //   tokeType: 'access',
    // },
};
const globalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'global',
    initialState,
    reducers: {
        setToken: (state, action) => {
            const { user } = state;
            const { accessToken, refreshToken } = action.payload;
            if (accessToken === '') {
                state.user = { ...action.payload, userInformation: initialState.user.userInformation };
                return;
            }
            else {
                const jwtUser = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(accessToken);
                state.user = { ...user, accessToken, refreshToken, userInformation: jwtUser };
            }
        },
        // setTokenConfig: (state, action: PayloadAction<typeof initialState.tokenConfig>) => {
        //   // const { tokenExpiredTime } = state.tokenConfig;
        //   // state.tokenConfig = {
        //   //   ...state.tokenConfig,
        //   //   tokenExpiredTime: action.payload.tokenExpiredTime,
        //   //   tokeType: action.payload.tokeType,
        //   // };
        // },
    },
});
// Action creators are generated for each case reducer function
const { setToken } = globalSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalSlice.reducer);


/***/ }),

/***/ "./src/store/context/index.tsx":
/*!*************************************!*\
  !*** ./src/store/context/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useGlobalContext": () => (/* binding */ useGlobalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const state = {
    isShowPanel: false,
    setShowPanel: (value) => { },
};
const GlobalContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(state);
const ContextProvider = ({ children }) => {
    const [isShowPanel, setShowPanel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalContext.Provider, { value: { isShowPanel, setShowPanel } }, children);
};
const useGlobalContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GlobalContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);


/***/ }),

/***/ "./src/store/global.ts":
/*!*****************************!*\
  !*** ./src/store/global.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "globalSlice": () => (/* binding */ globalSlice),
/* harmony export */   "setAlertDialog": () => (/* binding */ setAlertDialog)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
    alertDialog: {
        show: false,
        msg: '',
        title: 'error',
    },
};
const globalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'global',
    initialState,
    reducers: {
        setAlertDialog: (state, action) => {
            const { alertDialog } = state;
            const { msg, show, title } = action.payload;
            state.alertDialog = { ...alertDialog, show, msg, title };
        },
    },
});
// Action creators are generated for each case reducer function
const { setAlertDialog } = globalSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalSlice.reducer);


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAuth": () => (/* binding */ selectAuth),
/* harmony export */   "selectGlobal": () => (/* binding */ selectGlobal),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/store/global.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/store/auth.ts");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        global: _global__WEBPACK_IMPORTED_MODULE_0__["default"],
        auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
});
const selectGlobal = (state) => state.global;
const selectAuth = (state) => state.auth;


/***/ }),

/***/ "./src/utils/regular.ts":
/*!******************************!*\
  !*** ./src/utils/regular.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomNoDuplicateArray": () => (/* binding */ getRandomNoDuplicateArray),
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
async function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
function getRandomNoDuplicateArray(maxValue) {
    let result = [];
    while (result.length < maxValue) {
        const randomValu = Math.floor(Math.random() * maxValue) + 1;
        if (result.indexOf(randomValu) === -1)
            result.push(randomValu);
    }
    return result;
}


/***/ })

}]);
//# sourceMappingURL=js/main~src_a.bundle.js.map