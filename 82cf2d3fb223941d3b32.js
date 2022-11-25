"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Performance_ReactQuery_tsx"],{

/***/ "./src/pages/Home/Performance/ReactQuery.tsx":
/*!***************************************************!*\
  !*** ./src/pages/Home/Performance/ReactQuery.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/api/post */ "./src/api/post.ts");


const ReactQuery = () => {
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const { GET_POSTS } = (0,_api_post__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const Posts = GET_POSTS(0);
    const loadMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setPage((page) => page + 1);
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactQuery);


/***/ })

}]);
//# sourceMappingURL=js/82cf2d3fb223941d3b32.js.map