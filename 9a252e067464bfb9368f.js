"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_views_Home_Sort_index_tsx"],{

/***/ "./src/views/Home/Sort/index.tsx":
/*!***************************************!*\
  !*** ./src/views/Home/Sort/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/router */ "./src/router/index.tsx");



const Sort = () => {
    console.log((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname);
    const isShow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname === '/sort';
    console.log('123');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isShow ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-[80vh]" }, _router__WEBPACK_IMPORTED_MODULE_1__.HomeRoute.children.find((item) => item.path === '/sort')
        ?.children?.map((item2) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { className: "text-white hover:text- text-2xl rounded-2xl shadow-xl flex justify-center items-center font-bold tracking-wide w-1/2 h-1/2 bg-navbar", to: item2.path }, item2.text))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sort);
// async function sleep(ms: number) {
//   return new Promise((r) => setTimeout(r, ms));
// }
// function getRandomNoDuplicateArray(maxValue: number): number[] {
//   let result: any = [];
//   while (result.length < maxValue) {
//     const randomValu = Math.floor(Math.random() * maxValue) + 1;
//     if (result.indexOf(randomValu) === -1) result.push(randomValu);
//   }
//   return result;
// }


/***/ })

}]);
//# sourceMappingURL=js/9a252e067464bfb9368f.js.map