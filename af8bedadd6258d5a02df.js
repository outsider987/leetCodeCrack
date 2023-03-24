"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["vendors-node_modules_react-three_fiber_dist_react-three-fiber_esm_js"],{

/***/ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => (/* binding */ Canvas),
/* harmony export */   "ReactThreeFiber": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "_roots": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "act": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "addAfterEffect": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   "addEffect": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "addTail": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   "advance": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "applyProps": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "context": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "createEvents": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "createPortal": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "createRoot": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "dispose": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "events": () => (/* binding */ createPointerEvents),
/* harmony export */   "extend": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "flushGlobalEffects": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "getRootState": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "invalidate": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "reconciler": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "render": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "useFrame": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "useGraph": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "useInstanceHandle": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   "useLoader": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "useStore": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "useThree": () => (/* reexport safe */ _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-bb759d07.esm.js */ "./node_modules/@react-three/fiber/dist/index-bb759d07.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-use-measure */ "./node_modules/react-use-measure/dist/web.js");
/* harmony import */ var its_fine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! its-fine */ "./node_modules/its-fine/dist/index.js");
/* harmony import */ var react_reconciler_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reconciler/constants */ "./node_modules/react-reconciler/constants.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reconciler */ "./node_modules/react-reconciler/index.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");













const DOM_EVENTS = {
  onClick: ['click', false],
  onContextMenu: ['contextmenu', false],
  onDoubleClick: ['dblclick', false],
  onWheel: ['wheel', true],
  onPointerDown: ['pointerdown', true],
  onPointerUp: ['pointerup', true],
  onPointerLeave: ['pointerleave', true],
  onPointerMove: ['pointermove', true],
  onPointerCancel: ['pointercancel', true],
  onLostPointerCapture: ['lostpointercapture', true]
};

/** Default R3F event manager for web */
function createPointerEvents(store) {
  const {
    handlePointer
  } = (0,_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)(store);
  return {
    priority: 1,
    enabled: true,
    compute(event, state, previous) {
      // https://github.com/pmndrs/react-three-fiber/pull/782
      // Events trigger outside of canvas when moved, use offsetX/Y by default and allow overrides
      state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
      state.raycaster.setFromCamera(state.pointer, state.camera);
    },
    connected: undefined,
    handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => ({
      ...acc,
      [key]: handlePointer(key)
    }), {}),
    update: () => {
      var _internal$lastEvent;
      const {
        events,
        internal
      } = store.getState();
      if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
    },
    connect: target => {
      var _events$handlers;
      const {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      set(state => ({
        events: {
          ...state.events,
          connected: target
        }
      }));
      Object.entries((_events$handlers = events.handlers) != null ? _events$handlers : []).forEach(([name, event]) => {
        const [eventName, passive] = DOM_EVENTS[name];
        target.addEventListener(eventName, event, {
          passive
        });
      });
    },
    disconnect: () => {
      const {
        set,
        events
      } = store.getState();
      if (events.connected) {
        var _events$handlers2;
        Object.entries((_events$handlers2 = events.handlers) != null ? _events$handlers2 : []).forEach(([name, event]) => {
          if (events && events.connected instanceof HTMLElement) {
            const [eventName] = DOM_EVENTS[name];
            events.connected.removeEventListener(eventName, event);
          }
        });
        set(state => ({
          events: {
            ...state.events,
            connected: undefined
          }
        }));
      }
    }
  };
}

const CanvasImpl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Canvas({
  children,
  fallback,
  resize,
  style,
  gl,
  events = createPointerEvents,
  eventSource,
  eventPrefix,
  shadows,
  linear,
  flat,
  legacy,
  orthographic,
  frameloop,
  dpr,
  performance,
  raycaster,
  camera,
  onPointerMissed,
  onCreated,
  ...props
}, forwardedRef) {
  // Create a known catalogue of Threejs-native elements
  // This will include the entire THREE namespace by default, users can extend
  // their own elements by using the createRoot API instead
  react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => (0,_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.e)(three__WEBPACK_IMPORTED_MODULE_6__), []);
  const Bridge = (0,its_fine__WEBPACK_IMPORTED_MODULE_7__.useContextBridge)();
  const [containerRef, containerRect] = (0,react_use_measure__WEBPACK_IMPORTED_MODULE_8__["default"])({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...resize
  });
  const canvasRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const divRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(forwardedRef, () => canvasRef.current);
  const handlePointerMissed = (0,_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)(onPointerMissed);
  const [block, setBlock] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);

  // Suspend this component if block is a promise (2nd run)
  if (block) throw block;
  // Throw exception outwards if anything within canvas throws
  if (error) throw error;
  const root = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  (0,_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.a)(() => {
    const canvas = canvasRef.current;
    if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
      if (!root.current) root.current = (0,_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.b)(canvas);
      root.current.configure({
        gl,
        events,
        shadows,
        linear,
        flat,
        legacy,
        orthographic,
        frameloop,
        dpr,
        performance,
        raycaster,
        camera,
        size: containerRect,
        // Pass mutable reference to onPointerMissed so it's free to update
        onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
        onCreated: state => {
          // Connect to event source
          state.events.connect == null ? void 0 : state.events.connect(eventSource ? (0,_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(eventSource) ? eventSource.current : eventSource : divRef.current);
          // Set up compute function
          if (eventPrefix) {
            state.setEvents({
              compute: (event, state) => {
                const x = event[eventPrefix + 'X'];
                const y = event[eventPrefix + 'Y'];
                state.pointer.set(x / state.size.width * 2 - 1, -(y / state.size.height) * 2 + 1);
                state.raycaster.setFromCamera(state.pointer, state.camera);
              }
            });
          }
          // Call onCreated callback
          onCreated == null ? void 0 : onCreated(state);
        }
      });
      root.current.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Bridge, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.E, {
        set: setError
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.B, {
          set: setBlock
        })
      }, children))));
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) return () => (0,_index_bb759d07_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)(canvas);
  }, []);

  // When the event source is not this div, we need to set pointer-events to none
  // Or else the canvas will block events from reaching the event source
  const pointerEvents = eventSource ? 'none' : 'auto';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: divRef,
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents,
      ...style
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    ref: containerRef,
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("canvas", {
    ref: canvasRef,
    style: {
      display: 'block'
    }
  }, fallback)));
});

/**
 * A DOM canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */
const Canvas = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CanvasWrapper(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(its_fine__WEBPACK_IMPORTED_MODULE_7__.FiberProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CanvasImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    ref: ref
  })));
});




/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler-constants.development.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler-constants.development.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var SyncLane =
/*                        */
1;
var InputContinuousLane =
/*            */
4;
var DefaultLane =
/*                    */
16;
var IdleLane =
/*                       */
536870912;

var DiscreteEventPriority = SyncLane;
var ContinuousEventPriority = InputContinuousLane;
var DefaultEventPriority = DefaultLane;
var IdleEventPriority = IdleLane;

var LegacyRoot = 0;
var ConcurrentRoot = 1;

exports.ConcurrentRoot = ConcurrentRoot;
exports.ContinuousEventPriority = ContinuousEventPriority;
exports.DefaultEventPriority = DefaultEventPriority;
exports.DiscreteEventPriority = DiscreteEventPriority;
exports.IdleEventPriority = IdleEventPriority;
exports.LegacyRoot = LegacyRoot;
  })();
}


/***/ }),

/***/ "./node_modules/react-reconciler/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/react-reconciler/constants.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-reconciler-constants.development.js */ "./node_modules/react-reconciler/cjs/react-reconciler-constants.development.js");
}


/***/ }),

/***/ "./node_modules/react-reconciler/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-reconciler/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-reconciler.development.js */ "./node_modules/react-reconciler/cjs/react-reconciler.development.js");
}


/***/ }),

/***/ "./node_modules/react-use-measure/dist/web.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use-measure/dist/web.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMeasure)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);



function useMeasure(_temp) {
  let {
    debounce,
    scroll,
    polyfill,
    offsetSize
  } = _temp === void 0 ? {
    debounce: 0,
    scroll: false,
    offsetSize: false
  } : _temp;
  const ResizeObserver = polyfill || (typeof window === 'undefined' ? class ResizeObserver {} : window.ResizeObserver);

  if (!ResizeObserver) {
    throw new Error('This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills');
  }

  const [bounds, set] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }); // keep all state in a ref

  const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: bounds
  }); // set actual debounce values early, so effects know if they should react accordingly

  const scrollDebounce = debounce ? typeof debounce === 'number' ? debounce : debounce.scroll : null;
  const resizeDebounce = debounce ? typeof debounce === 'number' ? debounce : debounce.resize : null; // make sure to update state only as long as the component is truly mounted

  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mounted.current = true;
    return () => void (mounted.current = false);
  }); // memoize handlers, so event-listeners know when they should update

  const [forceRefresh, resizeChange, scrollChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const callback = () => {
      if (!state.current.element) return;
      const {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      } = state.current.element.getBoundingClientRect();
      const size = {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      };

      if (state.current.element instanceof HTMLElement && offsetSize) {
        size.height = state.current.element.offsetHeight;
        size.width = state.current.element.offsetWidth;
      }

      Object.freeze(size);
      if (mounted.current && !areBoundsEqual(state.current.lastBounds, size)) set(state.current.lastBounds = size);
    };

    return [callback, resizeDebounce ? debounce__WEBPACK_IMPORTED_MODULE_1___default()(callback, resizeDebounce) : callback, scrollDebounce ? debounce__WEBPACK_IMPORTED_MODULE_1___default()(callback, scrollDebounce) : callback];
  }, [set, offsetSize, scrollDebounce, resizeDebounce]); // cleanup current scroll-listeners / observers

  function removeListeners() {
    if (state.current.scrollContainers) {
      state.current.scrollContainers.forEach(element => element.removeEventListener('scroll', scrollChange, true));
      state.current.scrollContainers = null;
    }

    if (state.current.resizeObserver) {
      state.current.resizeObserver.disconnect();
      state.current.resizeObserver = null;
    }
  } // add scroll-listeners / observers


  function addListeners() {
    if (!state.current.element) return;
    state.current.resizeObserver = new ResizeObserver(scrollChange);
    state.current.resizeObserver.observe(state.current.element);

    if (scroll && state.current.scrollContainers) {
      state.current.scrollContainers.forEach(scrollContainer => scrollContainer.addEventListener('scroll', scrollChange, {
        capture: true,
        passive: true
      }));
    }
  } // the ref we expose to the user


  const ref = node => {
    if (!node || node === state.current.element) return;
    removeListeners();
    state.current.element = node;
    state.current.scrollContainers = findScrollContainers(node);
    addListeners();
  }; // add general event listeners


  useOnWindowScroll(scrollChange, Boolean(scroll));
  useOnWindowResize(resizeChange); // respond to changes that are relevant for the listeners

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    removeListeners();
    addListeners();
  }, [scroll, scrollChange, resizeChange]); // remove all listeners when the components unmounts

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => removeListeners, []);
  return [ref, bounds, forceRefresh];
} // Adds native resize listener to window


function useOnWindowResize(onWindowResize) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const cb = onWindowResize;
    window.addEventListener('resize', cb);
    return () => void window.removeEventListener('resize', cb);
  }, [onWindowResize]);
}

function useOnWindowScroll(onScroll, enabled) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (enabled) {
      const cb = onScroll;
      window.addEventListener('scroll', cb, {
        capture: true,
        passive: true
      });
      return () => void window.removeEventListener('scroll', cb, true);
    }
  }, [onScroll, enabled]);
} // Returns a list of scroll offsets


function findScrollContainers(element) {
  const result = [];
  if (!element || element === document.body) return result;
  const {
    overflow,
    overflowX,
    overflowY
  } = window.getComputedStyle(element);
  if ([overflow, overflowX, overflowY].some(prop => prop === 'auto' || prop === 'scroll')) result.push(element);
  return [...result, ...findScrollContainers(element.parentElement)];
} // Checks if element boundaries are equal


const keys = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height'];

const areBoundsEqual = (a, b) => keys.every(key => a[key] === b[key]);




/***/ })

}]);
//# sourceMappingURL=js/af8bedadd6258d5a02df.js.map