"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Member_index_tsx"],{

/***/ "./node_modules/outsiderreact/dist/components/Button/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/outsiderreact/dist/components/Button/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Button = (props) => {
    const whiteClass = `bg-white 
   text-[#121212] hover:bg-[#121212] hover:text-white`;
    const darkClass = `bg-[#121212]  
   text-white hover:bg-white hover:text-[#121212]`;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", Object.assign({}, props, { "data-testid": "btn", className: `flex items-center justify-center border border-solid
       border-black py-[0.8125rem]
    px-[0.625rem] font-bold leading-[100%] ${props.isRounded ? 'rounded-full' : 'rounded'} ${props.isWhite ? whiteClass : darkClass} ${props.className}`, onClick: props.onClick }), props.children));
};
Button.defaultProps = { isRounded: false, isWhite: true };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/pages/Home/Member/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Home/Member/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInitial": () => (/* binding */ LoginInitial),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! outsiderreact/dist/components/Input */ "./node_modules/outsiderreact/dist/components/Input/index.js");
/* harmony import */ var outsiderreact_dist_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! outsiderreact/dist/components/Button */ "./node_modules/outsiderreact/dist/components/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/api/auth */ "./src/api/auth.ts");
/* harmony import */ var _hooks_useMyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/hooks/useMyForm */ "./src/hooks/useMyForm.tsx");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utils/validate */ "./src/utils/validate.ts");







const LoginInitial = {
    email: 't790219520@gmail.com',
    password: 'T5204t5204-',
};
const Member = () => {
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const rules = {
        email: [
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_5__.validateRegexp.email, message: 'wrong mail formate' },
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_5__.validateRegexp.require, message: 'need value' },
        ],
        password: [
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_5__.validateRegexp.require, message: 'need value' },
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_5__.validateRegexp.password, message: 'wrong ' },
        ],
    };
    const { validator, handleSubmit } = (0,_hooks_useMyForm__WEBPACK_IMPORTED_MODULE_4__.useForm)(LoginInitial, rules);
    const { POST_LOGIN, GET_TokenTest } = (0,_api_auth__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const onSubmit = handleSubmit(async (data) => {
        if (!data)
            throw 'submit failed';
        const res = await POST_LOGIN(data);
        setToken(JSON.stringify(res.data.data));
    });
    const onTestToken = (e) => {
        e.preventDefault();
        const t = GET_TokenTest();
        // alert(t);
    };
    const isShow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)().pathname === '/member';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isShow ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full w-full " },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: "m-auto w-[50vw] space-y-6 " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col space-y-5 " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "email", label: "Account", className: "text-white", type: "text", onChange: validator.noWhiteSpaceChange, value: validator.values.email, placeholder: "Account" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " text-orange-500" }, validator.errors.email.message),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "password", label: "Password", className: "text-white", type: "text", onChange: validator.noWhiteSpaceChange, value: validator.values.password, placeholder: "Password" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " text-orange-500" }, validator.errors.password.message)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex font-bold text-orange-400" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, { to: "/member/register" }, "Register?")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: onSubmit, className: "m-auto" }, "Submit")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: onTestToken, className: "m-auto" }, "TokenTest"),
                token)))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Outlet, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Member);


/***/ })

}]);
//# sourceMappingURL=js/0b3da8644b6cfb2f665f.js.map