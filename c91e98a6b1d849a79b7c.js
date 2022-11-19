"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_index_tsx"],{

/***/ "./src/layouts/NavBar/index.tsx":
/*!**************************************!*\
  !*** ./src/layouts/NavBar/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/LayoutDivider */ "./src/components/LayoutDivider.tsx");
/* harmony import */ var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/SvgIcon */ "./src/components/SvgIcon.tsx");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/router */ "./src/router/index.tsx");
/* harmony import */ var _NavBarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavBarItem */ "./src/layouts/NavBarItem.tsx");






const NavBar = () => {
    const [toggelMenu, setToggelMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [mobildContentClass, setMobildContentClass] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('hidden');
    const onMobileMenuClick = () => {
        setToggelMenu(!toggelMenu);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setMobildContentClass(toggelMenu ? 'h-[50vh] animate-menu_collpase_on ' : 'opacity-0 pointer-events-none animate-menu_collpase_off ');
    }, [toggelMenu]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setMobildContentClass('hidden');
    }, []);
    const layouts = {
        desktop: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative hidden min-h-screen\n        w-full max-w-navbar_desktop_w bg-navbar lg:block " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute right-[-1px] w-[1px] bg-black/20 " }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-[1.66vw] py-[37px]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mb-[5vh]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "logo" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative hidden flex-col items-center space-y-6 lg:flex" }, _router__WEBPACK_IMPORTED_MODULE_3__.HomeRoute.children.map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_4__["default"], { key: item.path, isShow: item.isShow, iconName: item.icon, path: item.path, text: item.text, children: item.children, isFocus: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)().pathname === `${item.path}` }))))))),
        mobile: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " fixed h-m-navbar-desktop-h w-full bg-navbar" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: onMobileMenuClick, className: "justify-end text-white", name: "menu" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `w-full space-y-3 bg-navbar ${mobildContentClass}` }, _router__WEBPACK_IMPORTED_MODULE_3__.HomeRoute.children.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: onMobileMenuClick, key: index, isShow: item.isShow, iconName: item.icon, path: item.path, text: item.text, 
                    // children={item.children}
                    isFocus: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)().pathname === `${item.path}` }))))))),
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__["default"], { ...layouts });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ }),

/***/ "./src/layouts/NavBarItem.tsx":
/*!************************************!*\
  !*** ./src/layouts/NavBarItem.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/SvgIcon */ "./src/components/SvgIcon.tsx");



const NavBarItem = ({ level = 0, children, iconName, path, isShow, isFocus, text, onClick }) => {
    if (!isShow) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    level++;
    //  mobile
    //   <Link onClick={onClick} to={path} className="relative flex flex-col items-center justify-center">
    //   <SvgICon name={iconName} className={`relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}`}>
    //     {isFocus && (
    //       <div className="absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" />
    //     )}
    //   </SvgICon>
    //   <span className="min-h-[18px] text-center text-xs leading-[150%] tracking-[0.4px] text-white">{text}</span>
    // </Link>
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const renderRootItem = () => {
        if (children) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: () => setIsOpen(!isOpen), className: "relative flex cursor-pointer flex-row items-center justify-between" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { name: iconName, className: `relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}` }, isFocus && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `absolute inset-0 m-auto min-h-[18px] text-center ${level > 1 ? 'text-xs' : 'text-lg'} leading-[150%] tracking-[0.4px] text-white` }, text),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "arrow", className: isOpen ? 'rotate-90' : 'rotate-[270deg]' })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { onClick: onClick, to: path, className: "relative flex flex-col items-center justify-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { name: iconName, className: `relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}` }, isFocus && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "min-h-[18px] text-center text-xs leading-[150%] tracking-[0.4px] text-white hover:bg-slate-300" }, text)));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative flex w-full flex-col" },
        renderRootItem(),
        children && isOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "relative flex flex-col space-y-2  bg-orange-500 " },
            children.map((subItem, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBarItem, { className: "z-[99]", key: index, ...subItem, level: level }))),
            ' '))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBarItem);


/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _layouts_HomeWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/layouts/HomeWrapper */ "./src/layouts/HomeWrapper.tsx");
/* harmony import */ var _layouts_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/NavBar */ "./src/layouts/NavBar/index.tsx");




const Home = () => {
    const contentContainer = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)().pathname === '/profile'
        ? 'content_tags_container'
        : 'content_container';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_HomeWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: contentContainer }, (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)().pathname !== '/' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, null)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, { to: '/profile' })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

}]);
//# sourceMappingURL=js/c91e98a6b1d849a79b7c.js.map