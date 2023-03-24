"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Member_Register_tsx"],{

/***/ "./src/pages/Home/Member/Register.tsx":
/*!********************************************!*\
  !*** ./src/pages/Home/Member/Register.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterInitial": () => (/* binding */ RegisterInitial),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! outsiderreact/dist/components/Input */ "./node_modules/outsiderreact/dist/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Button */ "./src/components/Button.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/validate */ "./src/utils/validate.ts");
/* harmony import */ var _hooks_useMyForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/hooks/useMyForm */ "./src/hooks/useMyForm.tsx");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/api/auth */ "./src/api/auth.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/global */ "./src/store/global.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/store */ "./src/store/index.ts");
/* harmony import */ var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/SvgIcon */ "./src/components/SvgIcon.tsx");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/store/auth */ "./src/store/auth.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");












const RegisterInitial = {
    email: 'test@gmail.com',
    username: 'Victor',
    password: 'Asd123!',
    confirmPassword: 'Asd123!',
};
const Register = () => {
    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const authSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_store__WEBPACK_IMPORTED_MODULE_7__.selectAuth);
    const { POST_REGISTER } = (0,_api_auth__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const validaList = {
        email: [{ validate: _utils_validate__WEBPACK_IMPORTED_MODULE_3__.validateRegexp.email, message: 'wrong format' }],
        username: [
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_3__.validateRegexp.require, message: 'need value' },
            {
                validate: (0,_utils_validate__WEBPACK_IMPORTED_MODULE_3__.RegexpBindFactory)(/^([a-zA-Z\d]){2,15}/),
                message: 'need 15 ',
            },
        ],
        password: [{ validate: _utils_validate__WEBPACK_IMPORTED_MODULE_3__.validateRegexp.password, message: 'password wong format' }],
        confirmPassword: [
            {
                validate: (data) => data === validator.values.password,
                message: 'not same pasword',
            },
        ],
    };
    const { validator, handleSubmit } = (0,_hooks_useMyForm__WEBPACK_IMPORTED_MODULE_4__.useForm)(RegisterInitial, validaList);
    const onSubmit = handleSubmit(async (data, ispass) => {
        if (ispass) {
            if (data) {
                setLoading(true);
                const res = await POST_REGISTER(data);
                await setLoading(false);
                if (!res.data.status) {
                    return;
                }
                _store__WEBPACK_IMPORTED_MODULE_7__.store.dispatch((0,_store_auth__WEBPACK_IMPORTED_MODULE_9__.setToken)(res.data.data));
            }
        }
        else {
            _store__WEBPACK_IMPORTED_MODULE_7__.store.dispatch((0,_store_global__WEBPACK_IMPORTED_MODULE_6__.setAlertDialog)({ show: true, msg: JSON.stringify(validator.errors), title: 'Error' }));
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full w-full " },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: onSubmit, className: "m-auto w-[50vw] space-y-6" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full sm:flex-col sm:space-x-0 lg:flex-row lg:space-x-3" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full flex-col" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], { label: "@E-mail", className: "w-full text-white", type: "text", name: "email", onChange: validator.noWhiteSpaceChange, value: validator.values.email, placeholder: "fill your mail" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " text-orange-500" }, validator.errors.email.message)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full flex-col" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], { label: "Username", className: "w-full text-white", type: "text", name: "username", onChange: validator.noWhiteSpaceChange, value: validator.values.username, placeholder: "username" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " text-orange-500" }, validator.errors.username.message))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], { label: "Password", className: "w-full text-white", type: "password", name: "password", onChange: validator.noWhiteSpaceChange, value: validator.values.password, placeholder: "Password" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " text-orange-500" }, validator.errors.password.message),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], { label: "Conform Password", className: "w-full text-white", type: "password", name: "confirmPassword", onChange: validator.noWhiteSpaceChange, value: validator.values.confirmPassword, placeholder: "Conform Password" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " text-orange-500" }, validator.errors.confirmPassword.message),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, { className: "flex font-bold text-orange-400", to: "/member" }, "Login?"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { isWhite: validator.isPass, type: "submit", className: `m-auto ${isLoading ? 'text-stone-900' : ''}` }, isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_8__["default"], { className: "w-4", name: "spin" }) : 'Submit')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);


/***/ })

}]);
//# sourceMappingURL=js/14a297ef6406fafc7c22.js.map