"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Sort_index_tsx"],{

/***/ "./src/pages/Home/Sort/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/Home/Sort/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/router */ "./src/router/index.tsx");



const Sort = () => {
    console.log((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname);
    const isShow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname === '/sort';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isShow ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full space-x-3  " }, _router__WEBPACK_IMPORTED_MODULE_1__.HomeRoute.children.find((item) => item.path === '/sort')
        ?.children?.map((item2) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { className: "m-auto flex h-1/2 w-1/2 items-center justify-center rounded-2xl bg-navbar text-2xl font-bold tracking-wide text-white shadow-xl", to: item2.path }, item2.text))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sort);


/***/ })

}]);
//# sourceMappingURL=js/27b8651155dbabacd930.js.map