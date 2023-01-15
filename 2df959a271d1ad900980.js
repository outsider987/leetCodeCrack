"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_Chart_tsx"],{

/***/ "./src/components/Canvas.tsx":
/*!***********************************!*\
  !*** ./src/components/Canvas.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/canvas */ "./src/utils/canvas.ts");


const Canvas = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const results = [
        { mood: 'Angry', total: 1499, color: '#0a9627' },
        { mood: 'Happy', total: 478, color: '#960A2C' },
        { mood: 'Melancholic', total: 332, color: '#332E2E' },
        { mood: 'Gloomy', total: 195, color: '#F73809' },
        { mood: 'Gloomy', total: 195, color: 'pink' },
    ];
    let totalNumber = results.reduce((sum, { total }) => sum + total, 0);
    let lastValue = 0;
    const datas = results.map((result) => {
        const lastPercentage = (lastValue / totalNumber) * 100;
        const accumlatePercentage = (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_1__.accumlateOfPercentange)(result.total, lastPercentage, totalNumber);
        lastValue += result.total;
        return {
            accumlatePercentage: accumlatePercentage,
            percentage: Math.round((result.total / totalNumber) * 100),
            data: result.total,
            color: result.color,
            startAngle: (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_1__.getAngleOfPercentage)(lastPercentage),
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            let cw = (canvas.width = canvasRef.current.clientWidth);
            let ch = (canvas.height = canvasRef.current.clientHeight);
            // ctx.fillStyle = 'white';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            let endingPct = 100;
            let radius = canvasRef.current.clientWidth / 4;
            let pct = 0;
            let cx = Math.ceil(cw / 2);
            let cy = Math.ceil(ch / 2);
            let img = new Image();
            img.onload = start;
            img.src = __webpack_require__(/*! ~/assets/img/me.jpg */ "./src/assets/img/me.jpg");
            function start() {
                requestAnimationFrame(animate);
            }
            function animate(time) {
                draw(pct);
                pct++;
                if (pct <= endingPct) {
                    requestAnimationFrame(animate);
                }
            }
            function draw(pct) {
                var endRadians = -Math.PI / 2 + (Math.PI * 2 * pct) / 100;
                for (const [index, moodValue] of datas.entries()) {
                    ctx.fillStyle = moodValue.color;
                    if (endRadians >= moodValue.startAngle && pct <= moodValue.accumlatePercentage) {
                        if (moodValue.color === '#0a9627') {
                            // debugger;
                        }
                        (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_1__.drawPie)(ctx, {
                            radius,
                            startAngle: moodValue.startAngle,
                            endAngle: endRadians,
                            cx,
                            cy,
                            color: moodValue.color,
                        });
                        (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_1__.drawSegmentLabel)(ctx, {
                            cx,
                            cy,
                            startAngle: moodValue.startAngle,
                            endAngle: (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_1__.getAngleOfPercentage)(moodValue.accumlatePercentage),
                            radius,
                            percentage: moodValue.accumlatePercentage,
                            text: String(moodValue.percentage),
                        });
                    }
                }
            }
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);


/***/ }),

/***/ "./src/pages/Home/Canvas/Chart.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Home/Canvas/Chart.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Canvas */ "./src/components/Canvas.tsx");


const Chart = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto flex justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "h-[50vh] w-[50vh]" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);


/***/ }),

/***/ "./src/utils/canvas.ts":
/*!*****************************!*\
  !*** ./src/utils/canvas.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accumlateOfPercentange": () => (/* binding */ accumlateOfPercentange),
/* harmony export */   "drawPie": () => (/* binding */ drawPie),
/* harmony export */   "drawSegmentLabel": () => (/* binding */ drawSegmentLabel),
/* harmony export */   "getAngleOfPercentage": () => (/* binding */ getAngleOfPercentage)
/* harmony export */ });
function drawSegmentLabel(ctx, dto) {
    const centerDistance = 0.5;
    ctx.beginPath();
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    let theta = (dto.startAngle + dto.endAngle) / 2;
    let deltaY = Math.ceil(Math.sin(theta) * centerDistance * dto.radius);
    let deltaX = Math.ceil(Math.cos(theta) * centerDistance * dto.radius);
    ctx.fillText(dto.text, deltaX + dto.cx, deltaY + dto.cy);
    ctx.closePath();
}
function drawPie(ctx, dto) {
    const strokeWidth = 2;
    ctx.beginPath();
    ctx.arc(dto.cx, dto.cy, dto.radius, dto.startAngle, dto.endAngle);
    ctx.lineWidth = strokeWidth;
    ctx.lineTo(dto.cx, dto.cy);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillStyle = dto.color;
    ctx.fill();
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
}
const getAngleOfPercentage = (percentage) => {
    return -Math.PI / 2 + (Math.PI * 2 * percentage) / 100;
};
const accumlateOfPercentange = (data, percentage, totalNumber) => {
    return Math.ceil(percentage + (data / totalNumber) * 100);
};


/***/ }),

/***/ "./src/assets/img/me.jpg":
/*!*******************************!*\
  !*** ./src/assets/img/me.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/img/me.af2f25858a0ff2c5b2b6.jpg";

/***/ })

}]);
//# sourceMappingURL=js/2df959a271d1ad900980.js.map