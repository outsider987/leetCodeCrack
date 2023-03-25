"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_Box_tsx"],{

/***/ "./src/pages/Home/Canvas/Box.tsx":
/*!***************************************!*\
  !*** ./src/pages/Home/Canvas/Box.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/index-27a1523b.esm.js");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");




const BoxPage = () => {
    const isShow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)().pathname === '/canvas';
    function Box(props) {
        // This reference gives us direct access to the THREE.Mesh object
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
        // Hold state for hovered and clicked events
        const [hovered, hover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const [clicked, click] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        // Subscribe this component to the render-loop, rotate the mesh every frame
        (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.A)((state, delta) => (ref.current.rotation.x += delta));
        // Return the view, these are regular Threejs elements expressed in JSX
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", { ...props, ref: ref, scale: clicked ? 1.5 : 1, onClick: (event) => click(!clicked), onPointerOver: (event) => hover(true), onPointerOut: (event) => hover(false) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("boxGeometry", { args: [1, 1, 1] }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meshStandardMaterial", { color: hovered ? 'hotpink' : 'orange' })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "three" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ambientLight", null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pointLight", { position: [10, 10, 10] }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, { position: [-1.2, 0, 0] }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, { position: [1.2, 0, 0] })),
            ",")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxPage);


/***/ })

}]);
//# sourceMappingURL=js/00391727ab5aab00579e.js.map