"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_views_Home_Js_index_tsx"],{

/***/ "./src/views/Home/Js/index.tsx":
/*!*************************************!*\
  !*** ./src/views/Home/Js/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Js = () => {
    const [randomArray, setRandomArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const onStart = () => {
        // setRandomArray(quickSort(randomArray));
        quickSort(randomArray);
        console.log(randomArray);
    };
    const getRandomNoDuplicateArray = (maxValue) => {
        let result = [];
        while (result.length < maxValue) {
            const randomValu = Math.floor(Math.random() * maxValue) + 1;
            if (result.indexOf(randomValu) === -1)
                result.push(randomValu);
        }
        return result;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setRandomArray(getRandomNoDuplicateArray(99));
    }, []);
    const quickSort = (array, length = array.length - 1, start = 0) => {
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
        setTimeout(async () => {
            setRandomArray(replaceOrignalPartArray(start, [...quickSort(left), pivot, ...quickSort(right)]));
        }, 1000);
        setRandomArray(replaceOrignalPartArray(start, [...quickSort(left), pivot, ...quickSort(right)]));
        // setRandomArray([...quickSort(left), pivot, ...quickSort(right)] as any);
        return [...quickSort(left), pivot, ...quickSort(right)];
    };
    const replaceOrignalPartArray = (start, chandArray) => {
        console.log(`start:${start},${randomArray.slice(start, chandArray.length - 1, ...chandArray)}`);
        console.log(chandArray);
        return chandArray;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "JS")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Js);


/***/ })

}]);
//# sourceMappingURL=js/880db445dcccc2ed896d.js.map