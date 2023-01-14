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

const Canvas = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const results = [
        { mood: 'Angry', total: 1499, color: '#0a9627' },
        { mood: 'Happy', total: 478, color: '#960A2C' },
        { mood: 'Melancholic', total: 332, color: '#332E2E' },
        { mood: 'Gloomy', total: 195, color: '#F73809' },
        { mood: 'Test', total: 195, color: 'pink' },
    ];
    let totalNumber = results.reduce((sum, { total }) => sum + total, 0);
    let lastValue = 0;
    const datas = results.map((result) => {
        const lastPercentage = (lastValue / totalNumber) * 100;
        const percentage = Math.round(lastPercentage + (result.total / totalNumber) * 100);
        lastValue += result.total;
        return {
            percentage,
            color: result.color,
            startAngle: Math.round((-Math.PI / 2 + (Math.PI * 2 * lastPercentage) / 100) * 100) / 100,
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let currentAngle = 0;
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            var cw = canvas.width;
            var ch = canvas.height;
            var nextTime = 0;
            var duration = 1000;
            var endingPct = 100;
            var pct = 0;
            var increment = duration / pct;
            var cx = cw / 2;
            var cy = ch / 2;
            var img = new Image();
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
                for (let moodValue of datas) {
                    ctx.fillStyle = moodValue.color;
                    if (endRadians >= moodValue.startAngle && pct <= moodValue.percentage) {
                        if (moodValue.color === '#0a9627') {
                            // debugger;
                        }
                        ctx.beginPath();
                        ctx.arc(cx, cy, 100, moodValue.startAngle, endRadians);
                        ctx.lineTo(cx, cy);
                        ctx.save();
                        ctx.clip();
                        ctx.fillStyle = moodValue.color;
                        ctx.fill();
                        ctx.restore();
                    }
                }
            }
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef });
};
Canvas.defaultProps = {
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);
// import React, { useRef, useEffect } from 'react';
// interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {}
// const Canvas = (props: CanvasProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const results = [
//     { mood: 'Angry', total: 1499, shade: '#0a9627' },
//     { mood: 'Happy', total: 478, shade: '#960A2C' },
//     { mood: 'Melancholic', total: 332, shade: '#332E2E' },
//     { mood: 'Gloomy', total: 195, shade: '#F73809' },
//   ];
//   let totalNumberOfPeople = results.reduce((sum, { total }) => sum + total, 0);
//   useEffect(() => {
//     let currentAngle = 0;
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       var cw = canvas.width;
//       var ch = canvas.height;
//       var nextTime = 0;
//       var duration = 1000;
//       var endingPct = 75;
//       var pct = 0;
//       var increment = duration / pct;
//       var cx = cw / 2;
//       var cy = ch / 2;
//       var img = new Image();
//       img.onload = start;
//       img.src = require('~/assets/img/me.jpg');
//       function start() {
//         requestAnimationFrame(animate);
//       }
//       function animate(time) {
//         draw(pct);
//         pct++;
//         if (pct <= endingPct) {
//           requestAnimationFrame(animate);
//         }
//       }
//       function draw(pct) {
//         // //
//         // var endRadians = -Math.PI / 2 + (Math.PI * 2 * pct) / 100;
//         // //
//         // ctx.fillStyle = 'black';
//         // ctx.fillRect(0, 0, cw, ch);
//         // //
//         // ctx.beginPath();
//         // ctx.arc(cx, cy, 100, -Math.PI / 2, endRadians);
//         // ctx.lineTo(cx, cy);
//         // ctx.save();
//         // ctx.clip();
//         // ctx.drawImage(img, cx - img.width / 2, cx - img.height / 2);
//         // ctx.restore();
//         for (let moodValue of results) {
//           //calculating the angle the slice (portion) will take in the chart
//           let portionAngle = (moodValue.total / totalNumberOfPeople) * 2 * Math.PI;
//           //drawing an arc and a line to the center to differentiate the slice from the rest
//           ctx.beginPath();
//           ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
//           currentAngle += portionAngle;
//           ctx.lineTo(100, 100);
//           ctx.save();
//           ctx.clip();
//           //filling the slices with the corresponding mood's color
//           ctx.fillStyle = moodValue.shade;
//           ctx.fill();
//           ctx.restore();
//         }
//       }
//       //   start();
//     }
//   }, []);
//   return <canvas {...props} ref={canvasRef} />;
// };
// Canvas.defaultProps = {
//   width: window.innerWidth / 2,
//   height: window.innerHeight / 2,
// };
// export default Canvas;


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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);


/***/ }),

/***/ "./src/assets/img/me.jpg":
/*!*******************************!*\
  !*** ./src/assets/img/me.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/img/me.af2f25858a0ff2c5b2b6.jpg";

/***/ })

}]);
//# sourceMappingURL=js/eb0a0aa070a09c7d9314.js.map