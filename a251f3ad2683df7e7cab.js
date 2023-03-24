"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_Chart_tsx"],{

/***/ "./src/components/Chart/ChartBar.tsx":
/*!*******************************************!*\
  !*** ./src/components/Chart/ChartBar.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/canvas/chart */ "./src/utils/canvas/chart.ts");


const ChartBar = (props) => {
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
        const accumlatePercentage = (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.accumlateOfPercentange)(result.total, lastPercentage, totalNumber);
        lastValue += result.total;
        return {
            accumlatePercentage: accumlatePercentage,
            percentage: Math.round((result.total / totalNumber) * 100),
            data: result.total,
            color: result.color,
            startAngle: (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.getAngleOfPercentage)(lastPercentage),
        };
    });
    const options = {
        padding: 30,
        gridColor: 'white',
        gridScale: 300,
        data: datas,
        spaceScale: 2,
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let maxValue = 2000;
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            let cw = (canvas.width = canvasRef.current.clientWidth);
            let ch = (canvas.height = canvasRef.current.clientHeight);
            function drawGridLines() {
                let canvasActualHeight = ch - options.padding * 2;
                let canvasActualWidth = cw - options.padding * 2;
                let gridValue = 0;
                while (gridValue <= maxValue) {
                    var gridY = canvasActualHeight * (1 - gridValue / maxValue) + options.padding;
                    (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, 0, gridY, canvas.width, gridY, options.gridColor);
                    (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.drawLine)(ctx, options.padding / 2, options.padding / 2, options.padding / 2, gridY + options.padding / 2, options.gridColor);
                    // Writing grid markers
                    ctx.save();
                    ctx.fillStyle = options.gridColor;
                    ctx.textBaseline = 'bottom';
                    ctx.font = 'bold 10px Arial';
                    ctx.fillText(String(gridValue), +20, gridY - 2);
                    ctx.restore();
                    gridValue += options.gridScale;
                }
            }
            function drawBars() {
                let canvasActualWidth = cw - options.padding * 2;
                let canvasActualHeight = ch - options.padding * 2;
                let barIndex = 0;
                let numberOfBars = Object.keys(options.data).length;
                let baseBarSize = canvasActualWidth / numberOfBars / options.spaceScale;
                let barSize = baseBarSize;
                let space = barSize / 2;
                let values = Object.values(options.data);
                for (const [i, val] of values.entries()) {
                    let barHeight = Math.round((canvasActualHeight * val.data) / maxValue);
                    let leftSpace = space * (i + 1);
                    let rightSpace = space * i;
                    (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.drawBar)(ctx, options.padding + barIndex * barSize + leftSpace + rightSpace, canvas.height - barHeight - options.padding, barSize, barHeight, val.color);
                    barIndex++;
                }
            }
            drawBars();
            drawGridLines();
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartBar);


/***/ }),

/***/ "./src/components/Chart/ChartPie.tsx":
/*!*******************************************!*\
  !*** ./src/components/Chart/ChartPie.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/canvas/chart */ "./src/utils/canvas/chart.ts");


const ChartPie = (props) => {
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
        const accumlatePercentage = (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.accumlateOfPercentange)(result.total, lastPercentage, totalNumber);
        lastValue += result.total;
        return {
            accumlatePercentage: accumlatePercentage,
            percentage: Math.round((result.total / totalNumber) * 100),
            data: result.total,
            color: result.color,
            startAngle: (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.getAngleOfPercentage)(lastPercentage),
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
            // let img = new Image();
            // img.onload = start;
            // img.src = require('~/assets/img/me.jpg');
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
                            // ;
                        }
                        (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.drawPie)(ctx, {
                            radius,
                            startAngle: moodValue.startAngle,
                            endAngle: endRadians,
                            cx,
                            cy,
                            color: moodValue.color,
                        });
                        (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.drawSegmentLabel)(ctx, {
                            cx,
                            cy,
                            startAngle: moodValue.startAngle,
                            endAngle: (0,_utils_canvas_chart__WEBPACK_IMPORTED_MODULE_1__.getAngleOfPercentage)(moodValue.accumlatePercentage),
                            radius,
                            percentage: moodValue.accumlatePercentage,
                            text: String(moodValue.percentage),
                        });
                    }
                }
            }
            start();
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartPie);


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
/* harmony import */ var _components_Chart_ChartBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Chart/ChartBar */ "./src/components/Chart/ChartBar.tsx");
/* harmony import */ var _components_Chart_ChartPie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Chart/ChartPie */ "./src/components/Chart/ChartPie.tsx");



const Chart = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto flex w-full flex-col items-center justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Chart_ChartPie__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "h-[50vh] w-[50vh]" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Chart_ChartBar__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "h-[50vh] w-[50vh]" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);


/***/ }),

/***/ "./src/utils/canvas/chart.ts":
/*!***********************************!*\
  !*** ./src/utils/canvas/chart.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accumlateOfPercentange": () => (/* binding */ accumlateOfPercentange),
/* harmony export */   "drawBar": () => (/* binding */ drawBar),
/* harmony export */   "drawLine": () => (/* binding */ drawLine),
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
function drawLine(ctx, startX, startY, endX, endY, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.restore();
}
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
    ctx.restore();
}
const getAngleOfPercentage = (percentage) => {
    return -Math.PI / 2 + (Math.PI * 2 * percentage) / 100;
};
const accumlateOfPercentange = (data, percentage, totalNumber) => {
    return Math.ceil(percentage + (data / totalNumber) * 100);
};


/***/ })

}]);
//# sourceMappingURL=js/a251f3ad2683df7e7cab.js.map