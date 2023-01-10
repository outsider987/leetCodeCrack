(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["vendors-node_modules_debounce_index_js-node_modules_its-fine_dist_index_js"],{

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/its-fine/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/its-fine/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiberProvider": () => (/* binding */ FiberProvider),
/* harmony export */   "traverseFiber": () => (/* binding */ traverseFiber),
/* harmony export */   "useContainer": () => (/* binding */ useContainer),
/* harmony export */   "useContextBridge": () => (/* binding */ useContextBridge),
/* harmony export */   "useFiber": () => (/* binding */ useFiber),
/* harmony export */   "useNearestChild": () => (/* binding */ useNearestChild),
/* harmony export */   "useNearestParent": () => (/* binding */ useNearestParent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function traverseFiber(fiber, ascending, selector) {
  if (!fiber)
    return;
  if (selector(fiber) === true)
    return fiber;
  let child = ascending ? fiber.return : fiber.child;
  while (child) {
    const match = traverseFiber(child, ascending, selector);
    if (match)
      return match;
    child = ascending ? null : child.sibling;
  }
}
function wrapContext(context) {
  try {
    return Object.defineProperties(context, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch (_) {
    return context;
  }
}
const FiberContext = wrapContext(react__WEBPACK_IMPORTED_MODULE_0__.createContext(null));
class FiberProvider extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FiberContext.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
const { ReactCurrentOwner, ReactCurrentDispatcher } = react__WEBPACK_IMPORTED_MODULE_0__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function useFiber() {
  const root = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FiberContext);
  if (!root)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const id = react__WEBPACK_IMPORTED_MODULE_0__.useId();
  const fiber = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => {
      var _a;
      return (_a = ReactCurrentOwner.current) != null ? _a : traverseFiber(root, false, (node) => {
        let state = node.memoizedState;
        while (state) {
          if (state.memoizedState === id)
            return true;
          state = state.next;
        }
      });
    },
    [root, id]
  );
  return fiber;
}
function useContainer() {
  const fiber = useFiber();
  const root = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => traverseFiber(fiber, true, (node) => {
      var _a;
      return ((_a = node.stateNode) == null ? void 0 : _a.containerInfo) != null;
    }),
    [fiber]
  );
  return root == null ? void 0 : root.stateNode.containerInfo;
}
function useNearestChild(type) {
  const fiber = useFiber();
  const childRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    var _a;
    childRef.current = (_a = traverseFiber(
      fiber,
      false,
      (node) => typeof node.type === "string" && (type === void 0 || node.type === type)
    )) == null ? void 0 : _a.stateNode;
  }, [fiber]);
  return childRef;
}
function useNearestParent(type) {
  const fiber = useFiber();
  const parentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    var _a;
    parentRef.current = (_a = traverseFiber(
      fiber,
      true,
      (node) => typeof node.type === "string" && (type === void 0 || node.type === type)
    )) == null ? void 0 : _a.stateNode;
  }, [fiber]);
  return parentRef;
}
function useContextBridge() {
  var _a, _b;
  const fiber = useFiber();
  const [contexts] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => /* @__PURE__ */ new Map());
  contexts.clear();
  let node = fiber;
  while (node) {
    const context = (_a = node.type) == null ? void 0 : _a._context;
    if (context && context !== FiberContext && !contexts.has(context)) {
      contexts.set(context, (_b = ReactCurrentDispatcher.current) == null ? void 0 : _b.readContext(wrapContext(context)));
    }
    node = node.return;
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => Array.from(contexts.keys()).reduce(
      (Prev, context) => (props) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Prev, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, __spreadProps(__spreadValues({}, props), {
        value: contexts.get(context)
      }))),
      (props) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FiberProvider, __spreadValues({}, props))
    ),
    [contexts]
  );
}

//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=js/008083c50eab176364a0.js.map