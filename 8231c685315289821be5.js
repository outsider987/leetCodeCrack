"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_index_tsx"],{

/***/ "./src/layouts/NavBar/NavBarItem.tsx":
/*!*******************************************!*\
  !*** ./src/layouts/NavBar/NavBarItem.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/LayoutDivider */ "./src/components/LayoutDivider.tsx");
/* harmony import */ var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/SvgIcon */ "./src/components/SvgIcon.tsx");




const NavBarItem = ({ level = 0, children, iconName, path, isShow, isFocus, text, onClick }) => {
    if (!isShow) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
    }
    level++;
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setIsOpen(false);
    }, [location]);
    const renderDesktop = () => {
        const renderRootItem = () => {
            if (children) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: () => setIsOpen(!isOpen), className: "relative flex h-full cursor-pointer flex-row items-center justify-between " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `z-[9999] flex h-full items-center text-center ${level > 1 ? 'text-xs' : 'text-lg'}  text-white` }, text)));
            }
            else {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { onClick: onClick, to: path, className: "relative flex h-full flex-col items-center justify-center hover:bg-greyscale/20 " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " flex h-full items-center  text-center text-lg  leading-[150%] tracking-[0.4px] text-white " }, text)));
            }
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative flex h-full justify-center" },
            renderRootItem(),
            children && isOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "absolute inset-0 top-[100%] z-[9999] flex h-fit flex-col space-y-2 bg-orange-500" }, children.map((subItem, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBarItem, { className: "z-[99] ", key: index, ...subItem, level: level })))))));
    };
    const rendertMobile = () => {
        const renderRootItem = () => {
            if (children) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: () => setIsOpen(!isOpen), className: "relative flex cursor-pointer flex-row items-center justify-between" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { name: iconName, className: `relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}` }, isFocus && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `absolute inset-0 m-auto  text-center ${level > 1 ? 'text-xs' : 'text-lg'} leading-[150%] tracking-[0.4px] text-white` }, text),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "arrow", className: isOpen ? 'rotate-90' : 'rotate-[270deg]' })));
            }
            else {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { onClick: onClick, to: path, className: "relative flex flex-col items-center justify-center hover:bg-greyscale/20 " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { name: iconName, className: `relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}` }, isFocus && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "min-h-[18px] text-center text-xs leading-[150%] tracking-[0.4px] text-white " }, text)));
            }
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative flex w-full flex-col" },
            renderRootItem(),
            children && isOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "relative flex flex-col space-y-2  bg-orange-500 " }, children.map((subItem, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBarItem, { className: "z-[99] ", key: index, ...subItem, level: level })))))));
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__["default"], { desktop: () => renderDesktop(), mobile: () => rendertMobile() });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBarItem);


/***/ }),

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/LayoutDivider */ "./src/components/LayoutDivider.tsx");
/* harmony import */ var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/SvgIcon */ "./src/components/SvgIcon.tsx");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/router */ "./src/router/index.tsx");
/* harmony import */ var _NavBarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBarItem */ "./src/layouts/NavBar/NavBarItem.tsx");






const NavBar = () => {
    const [toggelMenu, setToggelMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [mobildContentClass, setMobildContentClass] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('hidden');
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
    const onMobileMenuClick = () => {
        setToggelMenu(!toggelMenu);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setMobildContentClass(toggelMenu ? 'h-[50vh] animate-menu_collpase_on ' : 'opacity-0 pointer-events-none animate-menu_collpase_off ');
    }, [toggelMenu]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setMobildContentClass('hidden');
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setToggelMenu(false);
    }, [location]);
    const layouts = {
        desktop: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed z-50 flex max-h-10 min-h-[4rem] w-full flex-col items-center justify-around bg-navbar px-12 " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid w-full grid-flow-col" }, _router__WEBPACK_IMPORTED_MODULE_3__.HomeRoute.children.map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_4__["default"], { key: item.path, isShow: item.isShow, iconName: item.icon, path: item.path, text: item.text, children: item.children, isFocus: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)().pathname === `${item.path}` })))))),
        mobile: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `fixed z-50 h-m-navbar-desktop-h w-full bg-navbar ${toggelMenu ? 'opacity-100' : 'opacity-80'}` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: onMobileMenuClick, className: "justify-end text-white", name: "menu" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `w-full space-y-3 bg-navbar ${mobildContentClass}` }, _router__WEBPACK_IMPORTED_MODULE_3__.HomeRoute.children.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBarItem__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: onMobileMenuClick, key: index, isShow: item.isShow, iconName: item.icon, path: item.path, text: item.text, children: item.children, isFocus: (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)().pathname === `${item.path}` }))))))),
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__["default"], { ...layouts });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _layouts_HomeWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/layouts/HomeWrapper */ "./src/layouts/HomeWrapper.tsx");
/* harmony import */ var _layouts_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/NavBar */ "./src/layouts/NavBar/index.tsx");




const Home = () => {
    const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    let contentContainer = '';
    contentContainer = pathname === '/canvas/image-editor' ? 'content_editor_container' : 'content_container';
    contentContainer = pathname === '/profile' ? 'content_profile' : 'content_container';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_HomeWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: contentContainer }, (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)().pathname !== '/' ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, null) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Navigate, { to: '/profile' }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

}]);
//# sourceMappingURL=js/8231c685315289821be5.js.map