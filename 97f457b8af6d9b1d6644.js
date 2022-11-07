"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Sort_MergeSort_tsx"],{

/***/ "./src/pages/Home/Sort/MergeSort.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Home/Sort/MergeSort.tsx ***!
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




const MergeSort = () => {
    console.log('Merge Rerender');
    const refArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_utils_regular__WEBPACK_IMPORTED_MODULE_3__.getRandomNoDuplicateArray)(80));
    const [tempArray, setTempArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(refArray.current);
    const merge = async (left, right) => {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        let pivot = refArray.current.findIndex((item) => item === left[0]);
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        const t = result
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
        refArray.current = replaceOrignalPartArray(refArray.current, pivot, t);
        setTempArray(refArray.current);
        await (0,_utils_regular__WEBPACK_IMPORTED_MODULE_3__.sleep)(100);
        return t;
    };
    const mergeSort = async (array) => {
        if (array.length === 1) {
            return array;
        }
        const length = array.length;
        const middle = Math.floor(length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        // refArray.current = replaceOrignalPartArray(refArray.current, right);
        // setTempArray(refArray.current);
        // await sleep(100);
        return merge(await mergeSort(left), await mergeSort(right));
    };
    const onStart = async () => {
        setTempArray(await mergeSort(refArray.current));
    };
    const replaceOrignalPartArray = (orgArray, pivot, changeArray) => {
        const temp = new Array(...orgArray);
        temp.splice(pivot, changeArray.length, ...changeArray);
        return temp;
    };
    const content = {
        desktop: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_LayoutSort__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "MergeSort", isDesktop: true, boxDatas: refArray.current, onStart: onStart })),
        mobile: () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_LayoutSort__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "MergeSort", isDesktop: false, boxDatas: refArray.current, onStart: onStart })),
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__["default"], { ...content });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MergeSort);


/***/ })

}]);
//# sourceMappingURL=js/97f457b8af6d9b1d6644.js.map