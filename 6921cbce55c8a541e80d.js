"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_Breakout_tsx"],{

/***/ "./src/canvas/Ball.ts":
/*!****************************!*\
  !*** ./src/canvas/Ball.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DrawObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawObject */ "./src/canvas/DrawObject.ts");

class Ball extends _DrawObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(ctx, x, y, radius, color, canvas) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.ctx = ctx;
        this.dx = 0;
        this.dy = 0;
        this.canvas = canvas;
        this.resetX = x;
        this.resetY = y;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    update() {
        this.move();
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius * 2 > this.canvas.width || this.x - this.radius * 2 < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    }
    checkNeedSpeedUp(count, brickLegth) {
        if (count > brickLegth / 5) {
            let speed = 8;
            if (this.dx > 0)
                this.dx = speed;
            else
                this.dx = -speed;
            if (this.dy > 0)
                this.dy = speed;
            else
                this.dy = -speed;
        }
        if (count > brickLegth / 2) {
            let speed = 11;
            if (this.dx > 0)
                this.dx = speed;
            else
                this.dx = -speed;
            if (this.dy > 0)
                this.dy = speed;
            else
                this.dy = -speed;
        }
    }
    reset() {
        this.x = this.resetX;
        this.y = this.resetY;
    }
    start() {
        this.dx = 5;
        this.dy = -5;
    }
    collide(object) {
        let xMin = object.x;
        let xMax = object.x + object.width;
        let yMin = object.y;
        let yMax = object.y + object.height;
        if (this.x + this.radius >= xMin &&
            this.x - this.radius <= xMax &&
            this.y + this.radius >= yMin &&
            this.y - this.radius <= yMax) {
            return true;
        }
        return false;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);


/***/ }),

/***/ "./src/canvas/Brick.ts":
/*!*****************************!*\
  !*** ./src/canvas/Brick.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DrawObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawObject */ "./src/canvas/DrawObject.ts");

class Brick extends _DrawObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(ctx, x, y, width, height, color) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.status = 1;
        this.ctx = ctx;
        this.destroyed = false;
    }
    draw() {
        if (this.status === 1) {
            this.ctx.beginPath();
            this.ctx.rect(this.x, this.y, this.width, this.height);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);


/***/ }),

/***/ "./src/canvas/DrawObject.ts":
/*!**********************************!*\
  !*** ./src/canvas/DrawObject.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class DrawObject {
    constructor() { }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawObject);


/***/ }),

/***/ "./src/canvas/Game.ts":
/*!****************************!*\
  !*** ./src/canvas/Game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ "./src/canvas/Ball.ts");
/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brick */ "./src/canvas/Brick.ts");
/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paddle */ "./src/canvas/Paddle.ts");



class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.score = 0;
        this.canvas = canvas;
        let cw = (canvas.width = canvas.clientWidth);
        let ch = (canvas.height = canvas.clientHeight);
        this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvas.width / 2, canvas.height - 30, 10, 'white', canvas);
        this.paddle = new _Paddle__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, canvas.width / 2 - 50, canvas.height - 10, 100, 10, 'red');
        this.bricks = [];
        this.createBricks();
        this.registerEvent(canvas, this.ball, this.paddle);
        this.score = 0;
        this.lives = 3;
    }
    createBricks() {
        let width = this.canvas.width / 15;
        let paddingLeft = width;
        let height = this.canvas.height / 20;
        let paddingTop = height;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 9; j++) {
                this.bricks.push(new _Brick__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, j * width + (paddingLeft * (j + 1)) / 2, paddingTop * (i + 1), width, height, 'yellow'));
            }
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.paddle.draw();
        this.ball.draw();
        this.bricks.forEach((brick) => !brick.destroyed && brick.draw());
        this.drawScore();
        this.drawLives();
    }
    update() {
        this.ball.update();
        this.checkCollision();
        this.ball.checkNeedSpeedUp(this.score, this.bricks.length);
        this.checkeFail();
        this.checkWin();
    }
    checkCollision() {
        this.bricks.forEach((brick) => {
            if (this.ball.collide(brick) && !brick.destroyed) {
                this.score++;
                this.ball.dy = -this.ball.dy;
                brick.destroyed = true;
            }
        });
        if (this.ball.collide(this.paddle)) {
            this.ball.dy = -this.ball.dy;
        }
    }
    checkWin() {
        return this.score === this.bricks.length;
    }
    drawScore() {
        this.ctx.font = '16px Arial';
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fillText('Score: ' + this.score, 8, 20);
    }
    drawLives() {
        this.ctx.font = '16px Arial';
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fillText('Lives: ' + this.lives, this.canvas.width - 65, 20);
    }
    checkeFail() {
        if (this.ball.y + this.ball.radius > this.canvas.height) {
            this.ball.reset();
            this.lives -= 1;
            if (this.lives === 0) {
                this.lives = 3;
            }
            return true;
        }
    }
    registerEvent(canvas, ball, paddle) {
        canvas.addEventListener('mousemove', function (e) {
            let mouseX = e.offsetX;
            paddle.update(mouseX);
        });
        document.addEventListener('keydown', function (e) {
            console.log(e);
            let val = 0;
            if (e.key === 'd')
                val = paddle.x + 1;
            else if (e.key === 'a')
                val = paddle.x - 1;
            if (e.code == 'Space') {
                ball.start();
            }
            paddle.update(val);
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/canvas/Paddle.ts":
/*!******************************!*\
  !*** ./src/canvas/Paddle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DrawObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawObject */ "./src/canvas/DrawObject.ts");

class Paddle extends _DrawObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(ctx, x, y, width, height, color) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(dx) {
        this.x = dx - this.width / 2;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);


/***/ }),

/***/ "./src/components/Chart/Breakout.tsx":
/*!*******************************************!*\
  !*** ./src/components/Chart/Breakout.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canvas_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/canvas/Game */ "./src/canvas/Game.ts");


const Breakout = (props) => {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const game = new _canvas_Game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
            function animate() {
                game.draw();
                game.update();
                if (game.checkWin() || game.checkeFail()) {
                    game.lives === 0 ? alert('faile game') : alert('you win');
                    window.location.reload();
                    return false;
                }
                requestAnimationFrame(animate);
            }
            function start() {
                requestAnimationFrame(animate);
            }
            start();
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { ...props, ref: canvasRef });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breakout);


/***/ }),

/***/ "./src/pages/Home/Canvas/Breakout.tsx":
/*!********************************************!*\
  !*** ./src/pages/Home/Canvas/Breakout.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chart_Breakout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Chart/Breakout */ "./src/components/Chart/Breakout.tsx");


const Breakout = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto flex w-full flex-col items-center justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Chart_Breakout__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "h-[50vh] w-[65vw]" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breakout);


/***/ })

}]);
//# sourceMappingURL=js/6921cbce55c8a541e80d.js.map