"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Performance_index_tsx"],{

/***/ "./src/pages/Home/Performance/index.tsx":
/*!**********************************************!*\
  !*** ./src/pages/Home/Performance/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/api/post */ "./src/api/post.ts");
/* harmony import */ var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/SvgIcon */ "./src/components/SvgIcon.tsx");



const Performance = () => {
    const page = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(1);
    const { GET_POSTS } = (0,_api_post__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const { data, isSuccess, isFetchingNextPage, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage } = GET_POSTS(1);
    const observerElem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let fetching = false;
        const handleScroll = async (e) => {
            const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
                fetching = true;
                if (hasNextPage)
                    await fetchNextPage();
                fetching = false;
            }
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [fetchNextPage, hasNextPage]);
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((entries) => {
        const [target] = entries;
        if (target.isIntersecting) {
            fetchNextPage();
        }
    }, [fetchNextPage, hasNextPage]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const element = observerElem.current;
        const option = { threshold: 0 };
        const observer = new IntersectionObserver(handleObserver, option);
        observer.observe(element);
        return () => observer.unobserve(element);
    }, [fetchNextPage, hasNextPage, handleObserver]);
    const len = data?.pages.length;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        isSuccess &&
            data.pages.flat().map((post) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "result", key: post?.id },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: post?.image })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-white", ref: observerElem },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "w-5", name: "spin" }),
            isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Performance);


/***/ })

}]);
//# sourceMappingURL=js/3f05bbddc2bfcc827237.js.map