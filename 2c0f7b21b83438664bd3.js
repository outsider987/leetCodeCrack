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
/* harmony export */   "ReactThreeFiber": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "_roots": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "act": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "addAfterEffect": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   "addEffect": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "addTail": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   "advance": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "applyProps": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "context": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "createEvents": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "createPortal": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "createRoot": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "dispose": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "events": () => (/* binding */ createPointerEvents),
/* harmony export */   "extend": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "flushGlobalEffects": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "getRootState": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "invalidate": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "reconciler": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "render": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "useFrame": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "useGraph": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "useInstanceHandle": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   "useLoader": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "useStore": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "useThree": () => (/* reexport safe */ _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-27a1523b.esm.js */ "./node_modules/@react-three/fiber/dist/index-27a1523b.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-use-measure */ "./node_modules/react-use-measure/dist/web.js");
/* harmony import */ var its_fine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! its-fine */ "./node_modules/its-fine/dist/index.js");
/* harmony import */ var react_reconciler_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reconciler/constants */ "./node_modules/react-reconciler/constants.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reconciler */ "./node_modules/react-reconciler/index.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scheduler */ "./node_modules/@react-three/fiber/node_modules/scheduler/index.js");













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
  } = (0,_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)(store);
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
    handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => ({ ...acc,
      [key]: handlePointer(key)
    }), {}),
    connect: target => {
      var _events$handlers;

      const {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      set(state => ({
        events: { ...state.events,
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
          events: { ...state.events,
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
  react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => (0,_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.e)(three__WEBPACK_IMPORTED_MODULE_6__), []);
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
  const [canvas, setCanvas] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(forwardedRef, () => canvasRef.current);
  const handlePointerMissed = (0,_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)(onPointerMissed);
  const [block, setBlock] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false); // Suspend this component if block is a promise (2nd run)

  if (block) throw block; // Throw exception outwards if anything within canvas throws

  if (error) throw error;
  const root = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
    if (!root.current) root.current = (0,_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.a)(canvas);
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
        state.events.connect == null ? void 0 : state.events.connect(eventSource ? (0,_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(eventSource) ? eventSource.current : eventSource : divRef.current); // Set up compute function

        if (eventPrefix) {
          state.setEvents({
            compute: (event, state) => {
              const x = event[eventPrefix + 'X'];
              const y = event[eventPrefix + 'Y'];
              state.pointer.set(x / state.size.width * 2 - 1, -(y / state.size.height) * 2 + 1);
              state.raycaster.setFromCamera(state.pointer, state.camera);
            }
          });
        } // Call onCreated callback


        onCreated == null ? void 0 : onCreated(state);
      }
    });
    root.current.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Bridge, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.E, {
      set: setError
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.B, {
        set: setBlock
      })
    }, children))));
  }

  (0,_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.b)(() => {
    setCanvas(canvasRef.current);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (canvas) return () => (0,_index_27a1523b_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)(canvas);
  }, [canvas]); // When the event source is not this div, we need to set pointer-events to none
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




/***/ })

}]);
//# sourceMappingURL=js/2c0f7b21b83438664bd3.js.map