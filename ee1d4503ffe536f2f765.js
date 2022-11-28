"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Performance_Carousel_tsx"],{

/***/ "./src/components/Carousel.tsx":
/*!*************************************!*\
  !*** ./src/components/Carousel.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Carousel = (props) => {
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const ZindexRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('z-[3]');
    const onNext = () => {
        const nextIndex = currentIndex === props.images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        ZindexRef.current = 'z-[3]';
    };
    const onPrev = () => {
        const nextIndex = currentIndex === 0 ? props.images.length - 1 : currentIndex - 1;
        setCurrentIndex(nextIndex);
        ZindexRef.current = 'z-[0]';
    };
    const onAimatedCondition = (index) => {
        if (index === currentIndex)
            return 'translate-x-0 z-[2]';
        if (index === currentIndex + 1 || (props.images.length - 1 === currentIndex && index === 0))
            return 'translate-x-full z-[1] ';
        return `-translate-x-full ${ZindexRef.current}`;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative min-h-[30vh] min-w-[30vw] text-white" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative h-56 overflow-hidden rounded-lg  md:h-96" }, props.images.map((image, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: `${index + image}-img`, className: `${onAimatedCondition(index)} absolute top-0 h-full w-full transition duration-700
            ease-in-out` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: " absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 ", alt: "...", src: image }))))),
        currentIndex,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: onPrev, type: "button", className: "group absolute top-0 left-0 z-20  flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none", "data-carousel-prev": true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-orange-500 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { "aria-hidden": "true", className: "h-6 w-6 ", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 19l-7-7 7-7" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "sr-only" }, "Previous"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: onNext, type: "button", className: "group absolute top-0 right-0 z-20  flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none", "data-carousel-next": true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-orange-500  group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { "aria-hidden": "true", className: "h-6 w-6 ", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "sr-only" }, "Next")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);


/***/ }),

/***/ "./src/pages/Home/Performance/Carousel.tsx":
/*!*************************************************!*\
  !*** ./src/pages/Home/Performance/Carousel.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Carousel */ "./src/components/Carousel.tsx");


const ReactQuery = () => {
    const images = [
        'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
        'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
        'https://previews.agefotostock.com/previewimage/medibigoff/7180821159c21ff4602393b1d5dc30a8/oth-233-58225.jpg',
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], { images: images })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactQuery);


/***/ })

}]);
//# sourceMappingURL=js/ee1d4503ffe536f2f765.js.map