"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Canvas_Game_tsx"],{

/***/ "./src/pages/Home/Canvas/Game.tsx":
/*!****************************************!*\
  !*** ./src/pages/Home/Canvas/Game.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var _three_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/three/Player */ "./src/three/Player.tsx");
/* harmony import */ var _three_Ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/three/Ball */ "./src/three/Ball.tsx");
/* harmony import */ var _utils_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/hepler */ "./src/utils/hepler.ts");






const Game = () => {
    const balls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    //set up listeners
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        generateBalls();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!mounted) {
            setUpListeners();
        }
    }, [player, mounted]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_utils_hepler__WEBPACK_IMPORTED_MODULE_3__.sleep)(1000).then(() => setTime((t) => t + 1000));
    }, [time]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        checkIfCollide();
    }, [player, balls]);
    const generateBalls = () => {
        window.setInterval(() => {
            balls.current.push({
                pos: { x: Math.floor(Math.random() * 10) - 5, y: Math.floor(Math.random() * 10) - 5 },
                nonce: Math.floor(Math.random() * 1000),
            });
        }, 5000);
    };
    const setUpListeners = () => {
        if (player) {
            //only want listeners to be created once so setMounted true so doesn't fire again
            setMounted(true);
            window.addEventListener('keydown', (e) => {
                //player has been created
                switch (e.key) {
                    case 'w':
                        player.current.position.y += 0.2;
                        break;
                    case 's':
                        player.current.position.y -= 0.2;
                        break;
                    case 'd':
                        player.current.position.x += 0.2;
                        break;
                    case 'a':
                        player.current.position.x -= 0.2;
                        break;
                    default:
                        break;
                }
                //to force update state
                setPlayer(Object.create(player));
            });
        }
    };
    const checkIfCollide = () => {
        if (player) {
            for (let i = 0; i < balls.current.length; i++) {
                if (Math.floor(player.current.position.x) === balls.current[i].pos.x &&
                    Math.floor(player.current.position.y) === balls.current[i].pos.y) {
                    balls.current.splice(i, 1);
                    break;
                }
            }
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, { id: 'game-canvas' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ambientLight", { intensity: 0.5 }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("spotLight", { position: [10, 15, 10], angle: 0.3 }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_three_Player__WEBPACK_IMPORTED_MODULE_1__.Player, { setPlayer: setPlayer }),
        balls.current.map((ball, i) => {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_three_Ball__WEBPACK_IMPORTED_MODULE_2__.Ball, { ball: ball, key: `${ball.pos.x}-${ball.pos.y}-${ball.nonce}` });
        })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/three/Ball.tsx":
/*!****************************!*\
  !*** ./src/three/Ball.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ball": () => (/* binding */ Ball)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Ball = ({ ball }) => {
    //give game ref to ball
    //   const ref = useRef();
    //   ball.ref = ref;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", { position: [ball.pos.x, ball.pos.y, 0], ref: ball.ref },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sphereGeometry", { args: [0.25, 16, 16] }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meshLambertMaterial", { attach: 'material', color: 'pink' })));
};


/***/ }),

/***/ "./src/three/Player.tsx":
/*!******************************!*\
  !*** ./src/three/Player.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Player = ({ setPlayer }) => {
    //give our app reference to this player object
    const player = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    setPlayer(player);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mesh", { ref: player },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("boxBufferGeometry", { attach: 'geometry' }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meshLambertMaterial", { attach: 'material', color: 'orange' })));
};


/***/ }),

/***/ "./src/utils/hepler.ts":
/*!*****************************!*\
  !*** ./src/utils/hepler.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
const sleep = async (ms) => {
    return new Promise((r) => setTimeout(r, ms));
};


/***/ })

}]);
//# sourceMappingURL=js/d246d729ada307fe83fa.js.map