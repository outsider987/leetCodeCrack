"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Member_Login_tsx"],{

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

/***/ "./src/components/Input.tsx":
/*!**********************************!*\
  !*** ./src/components/Input.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Input = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `flex flex-col ` + props.className },
        props.label != undefined && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "flex" }, props.label),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { ...props, "data-testid": "add-word-input", style: { backgroundColor: props.backgroundColor }, className: `w-auto rounded-md border-2
            border-solid border-opacity-50 bg-black
          px-2 pt-5 pb-4 text-sm
           leading-4  
           tracking-wide text-white outline-none placeholder:opacity-30
           focus:border-orange-400
            focus:opacity-100
          ${props.inputClassName}`, type: props.type, placeholder: props.placeholder, value: props.value, autoFocus: props.autoFocus, onChange: props.onChange })));
};
Input.defaultProps = { autoFocus: false };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./src/components/Member/Account.tsx":
/*!*******************************************!*\
  !*** ./src/components/Member/Account.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Input */ "./src/components/Input.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Account = ({ validator }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col space-y-5 " },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], { name: "email", label: "Account", className: "text-white", type: "text", onChange: validator.noWhiteSpaceChange, value: validator.values.email, placeholder: "Account" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: " text-orange-500" }, validator.errors.email.message),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], { name: "password", label: "Password", className: "text-white", type: "text", onChange: validator.noWhiteSpaceChange, value: validator.values.password, placeholder: "Password" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: " text-orange-500" }, validator.errors.password.message)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);


/***/ }),

/***/ "./src/components/Member/ThridPartySSO.tsx":
/*!*************************************************!*\
  !*** ./src/components/Member/ThridPartySSO.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThridPartySSO = () => {
    const onGoogleClick = async (event) => {
        event.preventDefault();
        // const res = await GET_GoogleLogin();
        // console.log(res.data);
        window.open(`${{"GITHUB_STATE":"/home/runner/work/_temp/_runner_file_commands/save_state_a2bc66e2-b0fa-4bec-adfe-7eccca763a4d","STATS_TRP":"true","DEPLOYMENT_BASEPATH":"/opt/runner","DOTNET_NOLOGO":"1","USER":"runner","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false ci/github-actions","CI":"true","RUNNER_ENVIRONMENT":"github-hosted","GITHUB_ENV":"/home/runner/work/_temp/_runner_file_commands/set_env_a2bc66e2-b0fa-4bec-adfe-7eccca763a4d","PIPX_HOME":"/opt/pipx","npm_node_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","JAVA_HOME_8_X64":"/usr/lib/jvm/temurin-8-jdk-amd64","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/runner","RUNNER_TEMP":"/home/runner/work/_temp","GITHUB_EVENT_PATH":"/home/runner/work/_temp/_github_workflow/event.json","npm_package_json":"/home/runner/work/leetCodeCrack/leetCodeCrack/package.json","JAVA_HOME_11_X64":"/usr/lib/jvm/temurin-11-jdk-amd64","PIPX_BIN_DIR":"/opt/pipx_bin","GITHUB_REPOSITORY_OWNER":"outsider987","GRADLE_HOME":"/usr/share/gradle-8.2","ANDROID_NDK_LATEST_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","STATS_RDCL":"true","GITHUB_RETENTION_DAYS":"90","GITHUB_REPOSITORY_OWNER_ID":"29707987","POWERSHELL_DISTRIBUTION_CHANNEL":"GitHub-Actions-ubuntu22","AZURE_EXTENSION_DIR":"/opt/az/azcliextensions","GITHUB_HEAD_REF":"","npm_config_userconfig":"/home/runner/.npmrc","npm_config_local_prefix":"/home/runner/work/leetCodeCrack/leetCodeCrack","SYSTEMD_EXEC_PID":"670","GITHUB_GRAPHQL_URL":"https://api.github.com/graphql","COLOR":"0","GOROOT_1_20_X64":"/opt/hostedtoolcache/go/1.20.5/x64","NVM_DIR":"/home/runner/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","DOTNET_SKIP_FIRST_TIME_EXPERIENCE":"1","JAVA_HOME_17_X64":"/usr/lib/jvm/temurin-17-jdk-amd64","ImageVersion":"20230710.1.0","RUNNER_OS":"Linux","GITHUB_API_URL":"https://api.github.com","SWIFT_PATH":"/usr/share/swift/usr/bin","RUNNER_USER":"runner","STATS_V3PS":"true","CHROMEWEBDRIVER":"/usr/local/share/chrome_driver","JOURNAL_STREAM":"8:17128","GITHUB_WORKFLOW":"NodeJS with Webpack","_":"/opt/hostedtoolcache/node/16.16.0/x64/bin/npm","npm_config_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","GITHUB_RUN_ID":"5590399112","npm_config_cache":"/home/runner/.npm","GITHUB_REF_TYPE":"branch","BOOTSTRAP_HASKELL_NONINTERACTIVE":"1","GITHUB_WORKFLOW_SHA":"ee7d519c0c672b5325590c21c490cba0db0f0139","GITHUB_BASE_REF":"","ImageOS":"ubuntu22","GITHUB_WORKFLOW_REF":"outsider987/leetCodeCrack/.github/workflows/webpack.yml@refs/heads/main","PERFLOG_LOCATION_SETTING":"RUNNER_PERFLOG","GOROOT_1_18_X64":"/opt/hostedtoolcache/go/1.18.10/x64","GITHUB_ACTION_REPOSITORY":"","npm_config_node_gyp":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/runner/work/leetCodeCrack/leetCodeCrack/node_modules/.bin:/home/runner/work/leetCodeCrack/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.16.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","ANT_HOME":"/usr/share/ant","DOTNET_MULTILEVEL_LOOKUP":"0","RUNNER_TRACKING_ID":"github_d6579e09-e6f6-4b83-8ba4-f1ecb4246dbc","INVOCATION_ID":"614edcd3493c49269f6709c7873b9b17","RUNNER_TOOL_CACHE":"/opt/hostedtoolcache","GOROOT_1_19_X64":"/opt/hostedtoolcache/go/1.19.10/x64","NODE":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","npm_package_name":"leetcodecrack","GITHUB_ACTION":"__run_2","GITHUB_RUN_NUMBER":"164","GITHUB_TRIGGERING_ACTOR":"outsider987","RUNNER_ARCH":"X64","XDG_RUNTIME_DIR":"/run/user/1001","AGENT_TOOLSDIRECTORY":"/opt/hostedtoolcache","LANG":"C.UTF-8","VCPKG_INSTALLATION_ROOT":"/usr/local/share/vcpkg","CONDA":"/usr/share/miniconda","RUNNER_NAME":"GitHub Actions 2","XDG_CONFIG_HOME":"/home/runner/.config","STATS_VMD":"true","GITHUB_REF_NAME":"main","GITHUB_REPOSITORY":"outsider987/leetCodeCrack","npm_lifecycle_script":"webpack","ANDROID_NDK_ROOT":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_ACTION_REF":"","DEBIAN_FRONTEND":"noninteractive","GITHUB_REPOSITORY_ID":"505868934","GITHUB_ACTIONS":"true","PUBLISH_DIR":"./dist","npm_package_version":"1.0.1","npm_lifecycle_event":"build","GITHUB_REF_PROTECTED":"false","USER_EMAIL":"t7902195204@gmail.com","GITHUB_WORKSPACE":"/home/runner/work/leetCodeCrack/leetCodeCrack","ACCEPT_EULA":"Y","GITHUB_JOB":"build","RUNNER_PERFLOG":"/home/runner/perflog","GITHUB_SHA":"ee7d519c0c672b5325590c21c490cba0db0f0139","GITHUB_RUN_ATTEMPT":"1","GITHUB_REF":"refs/heads/main","GITHUB_ACTOR":"outsider987","ANDROID_SDK_ROOT":"/usr/local/lib/android/sdk","LEIN_HOME":"/usr/local/lib/lein","npm_config_globalconfig":"/opt/hostedtoolcache/node/16.16.0/x64/etc/npmrc","npm_config_init_module":"/home/runner/.npm-init.js","GITHUB_PATH":"/home/runner/work/_temp/_runner_file_commands/add_path_a2bc66e2-b0fa-4bec-adfe-7eccca763a4d","JAVA_HOME":"/usr/lib/jvm/temurin-11-jdk-amd64","PWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","GITHUB_ACTOR_ID":"29707987","RUNNER_WORKSPACE":"/home/runner/work/leetCodeCrack","npm_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/bin/npm-cli.js","HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS":"3650","STATS_TIS":"mining","GITHUB_EVENT_NAME":"push","HOMEBREW_NO_AUTO_UPDATE":"1","ANDROID_HOME":"/usr/local/lib/android/sdk","GITHUB_SERVER_URL":"https://github.com","GECKOWEBDRIVER":"/usr/local/share/gecko_driver","LEIN_JAR":"/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar","GHCUP_INSTALL_BASE_PREFIX":"/usr/local","GITHUB_OUTPUT":"/home/runner/work/_temp/_runner_file_commands/set_output_a2bc66e2-b0fa-4bec-adfe-7eccca763a4d","npm_config_global_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","USER_NAME":"outsider987","EDGEWEBDRIVER":"/usr/local/share/edge_driver","STATS_EXT":"true","npm_command":"run-script","API_URL":"https://victorprofile.fly.dev","MY_SECRET":"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","ANDROID_NDK":"/usr/local/lib/android/sdk/ndk/25.2.9519653","SGX_AESM_ADDR":"1","CHROME_BIN":"/usr/bin/google-chrome","SELENIUM_JAR_PATH":"/usr/share/java/selenium-server.jar","STATS_EXTP":"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data","ANDROID_NDK_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_STEP_SUMMARY":"/home/runner/work/_temp/_runner_file_commands/step_summary_a2bc66e2-b0fa-4bec-adfe-7eccca763a4d","INIT_CWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","EDITOR":"vi"}.API_URL}/auth/google`, '_self');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full flex-col" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex cursor-pointer space-x-1 text-white", onClick: onGoogleClick },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: __webpack_require__(/*! ~/assets/svg/btn_google_dark_normal_ios.svg */ "./src/assets/svg/btn_google_dark_normal_ios.svg"), alt: '' }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Google Login"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThridPartySSO);


/***/ }),

/***/ "./src/pages/Home/Member/Login.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Home/Member/Login.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInitial": () => (/* binding */ LoginInitial),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var outsiderreact_dist_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! outsiderreact/dist/components/Button */ "./node_modules/outsiderreact/dist/components/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/api/auth */ "./src/api/auth.ts");
/* harmony import */ var _hooks_useMyForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/hooks/useMyForm */ "./src/hooks/useMyForm.tsx");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/validate */ "./src/utils/validate.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store */ "./src/store/index.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/global */ "./src/store/global.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Member_Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/Member/Account */ "./src/components/Member/Account.tsx");
/* harmony import */ var _components_Member_ThridPartySSO__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/Member/ThridPartySSO */ "./src/components/Member/ThridPartySSO.tsx");











const LoginInitial = {
    email: 'test@gmail.com',
    password: 'Asd123!',
};
const Login = () => {
    const authSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_store__WEBPACK_IMPORTED_MODULE_5__.selectAuth);
    const [accessCount, setAccessCountToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
    const [tokeType, setTokeType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('access');
    const firstRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const intervalId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const countTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(10);
    const tokeTypeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('access');
    document.cookie = 'name=value';
    const rules = {
        email: [
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_4__.validateRegexp.email, message: 'wrong mail formate' },
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_4__.validateRegexp.require, message: 'need value' },
        ],
        password: [
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_4__.validateRegexp.require, message: 'need value' },
            { validate: _utils_validate__WEBPACK_IMPORTED_MODULE_4__.validateRegexp.password, message: 'wrong ' },
        ],
    };
    const { validator, handleSubmit } = (0,_hooks_useMyForm__WEBPACK_IMPORTED_MODULE_3__.useForm)(LoginInitial, rules);
    const { POST_LOGIN, GET_TokenTest, GET_USER, GET_LOGOUT } = (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const onSubmit = handleSubmit(async (data) => {
        if (!data)
            throw 'submit failed';
        const res = await POST_LOGIN(data);
        if (res.data.status) {
            firstRender.current = true;
            countTime.current = 10;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        clearInterval(intervalId.current);
        tokeTypeRef.current = 'access';
        setTokeType(tokeTypeRef.current);
        countTime.current = 10;
        setAccessCountToken(countTime.current);
        if (authSelector.user.accessToken !== '') {
            intervalId.current =
                countTime.current > 0 &&
                    setInterval(() => {
                        setAccessCountToken(--countTime.current);
                        if (countTime.current === 0 && tokeTypeRef.current === 'access') {
                            tokeTypeRef.current = 'refresh';
                            setTokeType(tokeTypeRef.current);
                            countTime.current = 10;
                            setAccessCountToken(10);
                            // clearInterval(intervalId.current as any);
                        }
                        if (countTime.current === 0 && tokeTypeRef.current === 'refresh') {
                            clearInterval(intervalId.current);
                        }
                    }, 1000);
        }
    }, [authSelector.user.accessToken]);
    const onTestToken = (e) => {
        e.preventDefault();
        GET_TokenTest().then((res) => {
            _store__WEBPACK_IMPORTED_MODULE_5__.store.dispatch((0,_store_global__WEBPACK_IMPORTED_MODULE_6__.setAlertDialog)({ show: true, msg: 'test work', title: 'test' }));
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const test = async () => {
            const res1 = await GET_USER();
            console.log(res1);
            console.log('123');
        };
        test();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full w-full " },
        authSelector.user.userInformation.username !== '' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col text-white" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                "name:",
                authSelector.user.userInformation.username),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => GET_LOGOUT() }, "log out "))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: "m-auto w-[50vw] space-y-6 " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Member_Account__WEBPACK_IMPORTED_MODULE_8__["default"], { validator: validator }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex font-bold text-orange-400" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { to: "/member/register" }, "Register?")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onSubmit, className: "m-auto" }, "Submit")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full flex-col" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(outsiderreact_dist_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: onTestToken, className: "m-auto" }, "TokenTest"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "max-w-xs break-all text-white" }, tokeType === 'refresh'
                        ? `refresh:${authSelector.user.refreshToken}`
                        : `access:${authSelector.user.accessToken}`),
                    authSelector.user.accessToken !== '' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-xl font-bold text-white" }, `${tokeType} expired at ${accessCount}`)))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Member_ThridPartySSO__WEBPACK_IMPORTED_MODULE_9__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ "./src/assets/svg/btn_google_dark_normal_ios.svg":
/*!*******************************************************!*\
  !*** ./src/assets/svg/btn_google_dark_normal_ios.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/svg/btn_google_dark_normal_ios.9fe90a177bb225564f2a.svg";

/***/ })

}]);
//# sourceMappingURL=js/c9dc86a4ab8da7cbb49a.js.map