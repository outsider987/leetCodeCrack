"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_api_auth_ts-src_hooks_useMyForm_tsx-src_utils_validate_ts"],{

/***/ "./src/api/auth.ts":
/*!*************************!*\
  !*** ./src/api/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/api/base.ts");


const subPath = 'auth';
// AxiosResponse<APIResponse<any>, any>
const useAuthApi = () => {
    const authApi = (0,_base__WEBPACK_IMPORTED_MODULE_1__["default"])(subPath);
    const privateAuthApi = (0,_base__WEBPACK_IMPORTED_MODULE_1__.privateApi)(subPath);
    const POST_REGISTER = async (userDate) => {
        const resp = await authApi.post('register', {
            ...userDate,
        });
        if (resp.data.data)
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.setTokenStorage)(resp.data.data);
        return resp;
    };
    const POST_LOGIN = async (userDate) => {
        const resp = await authApi.post('login', {
            ...userDate,
        });
        if (resp.data.data)
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.setTokenStorage)(resp.data.data);
        return resp;
    };
    const GET_REFRESH = async () => {
        const resp = await privateAuthApi.get('refresh', {
            withCredentials: true,
        });
        return resp;
    };
    const GET_TokenTest = async () => {
        const resp = await privateAuthApi.get('test');
        return resp;
    };
    return { POST_REGISTER, GET_REFRESH, POST_LOGIN, GET_TokenTest };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthApi);


/***/ }),

/***/ "./src/api/base.ts":
/*!*************************!*\
  !*** ./src/api/base.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "privateApi": () => (/* binding */ privateApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store */ "./src/store/index.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/global */ "./src/store/global.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((subPath = '') => {
    const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: `${{"GITHUB_STATE":"/home/runner/work/_temp/_runner_file_commands/save_state_a122f5d0-2693-45fa-978e-734d81eafeb2","DEPLOYMENT_BASEPATH":"/opt/runner","DOTNET_NOLOGO":"1","USER":"runner","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false ci/github-actions","CI":"true","GITHUB_ENV":"/home/runner/work/_temp/_runner_file_commands/set_env_a122f5d0-2693-45fa-978e-734d81eafeb2","PIPX_HOME":"/opt/pipx","npm_node_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","JAVA_HOME_8_X64":"/usr/lib/jvm/temurin-8-jdk-amd64","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/runner","RUNNER_TEMP":"/home/runner/work/_temp","GITHUB_EVENT_PATH":"/home/runner/work/_temp/_github_workflow/event.json","npm_package_json":"/home/runner/work/leetCodeCrack/leetCodeCrack/package.json","JAVA_HOME_11_X64":"/usr/lib/jvm/temurin-11-jdk-amd64","PIPX_BIN_DIR":"/opt/pipx_bin","GRAALVM_11_ROOT":"/usr/local/graalvm/graalvm-ce-java11-22.3.0","GITHUB_REPOSITORY_OWNER":"outsider987","GRADLE_HOME":"/usr/share/gradle-7.5.1","ANDROID_NDK_LATEST_HOME":"/usr/local/lib/android/sdk/ndk/25.1.8937393","STATS_RDCL":"true","GITHUB_RETENTION_DAYS":"90","POWERSHELL_DISTRIBUTION_CHANNEL":"GitHub-Actions-ubuntu20","AZURE_EXTENSION_DIR":"/opt/az/azcliextensions","GITHUB_HEAD_REF":"","npm_config_userconfig":"/home/runner/.npmrc","npm_config_local_prefix":"/home/runner/work/leetCodeCrack/leetCodeCrack","GITHUB_GRAPHQL_URL":"https://api.github.com/graphql","COLOR":"0","NVM_DIR":"/home/runner/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","DOTNET_SKIP_FIRST_TIME_EXPERIENCE":"1","JAVA_HOME_17_X64":"/usr/lib/jvm/temurin-17-jdk-amd64","ImageVersion":"20221027.1","RUNNER_OS":"Linux","GITHUB_API_URL":"https://api.github.com","SWIFT_PATH":"/usr/share/swift/usr/bin","RUNNER_USER":"runner","CHROMEWEBDRIVER":"/usr/local/share/chrome_driver","JOURNAL_STREAM":"8:22359","GITHUB_WORKFLOW":"NodeJS with Webpack","_":"/opt/hostedtoolcache/node/16.16.0/x64/bin/npm","npm_config_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","GITHUB_RUN_ID":"3416453113","npm_config_cache":"/home/runner/.npm","GOROOT_1_17_X64":"/opt/hostedtoolcache/go/1.17.13/x64","GITHUB_REF_TYPE":"branch","BOOTSTRAP_HASKELL_NONINTERACTIVE":"1","GITHUB_BASE_REF":"","ImageOS":"ubuntu20","PERFLOG_LOCATION_SETTING":"RUNNER_PERFLOG","GOROOT_1_18_X64":"/opt/hostedtoolcache/go/1.18.7/x64","GITHUB_ACTION_REPOSITORY":"","npm_config_node_gyp":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/runner/work/leetCodeCrack/leetCodeCrack/node_modules/.bin:/home/runner/work/leetCodeCrack/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.16.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","ANT_HOME":"/usr/share/ant","DOTNET_MULTILEVEL_LOOKUP":"0","RUNNER_TRACKING_ID":"github_d514a57d-bf1e-4341-bfc6-45e90aa70bcb","INVOCATION_ID":"6cf8aa5f9b724aa1abaf250c96e97a8c","RUNNER_TOOL_CACHE":"/opt/hostedtoolcache","GOROOT_1_19_X64":"/opt/hostedtoolcache/go/1.19.2/x64","NODE":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","npm_package_name":"leetcodecrack","GITHUB_ACTION":"__run_2","GITHUB_RUN_NUMBER":"36","GITHUB_TRIGGERING_ACTOR":"outsider987","RUNNER_ARCH":"X64","XDG_RUNTIME_DIR":"/run/user/1001","AGENT_TOOLSDIRECTORY":"/opt/hostedtoolcache","LANG":"C.UTF-8","VCPKG_INSTALLATION_ROOT":"/usr/local/share/vcpkg","CONDA":"/usr/share/miniconda","RUNNER_NAME":"Hosted Agent","XDG_CONFIG_HOME":"/home/runner/.config","GITHUB_REF_NAME":"main","GITHUB_REPOSITORY":"outsider987/leetCodeCrack","npm_lifecycle_script":"webpack","ANDROID_NDK_ROOT":"/usr/local/lib/android/sdk/ndk/25.1.8937393","GITHUB_ACTION_REF":"","DEBIAN_FRONTEND":"noninteractive","GITHUB_ACTIONS":"true","PUBLISH_DIR":"./dist","npm_package_version":"1.0.0","npm_lifecycle_event":"build","GITHUB_REF_PROTECTED":"false","USER_EMAIL":"t7902195204@gmail.com","GITHUB_WORKSPACE":"/home/runner/work/leetCodeCrack/leetCodeCrack","ACCEPT_EULA":"Y","GITHUB_JOB":"build","RUNNER_PERFLOG":"/home/runner/perflog","GITHUB_SHA":"d9a2da589e7c50865e0184701bcf171043953c46","GITHUB_RUN_ATTEMPT":"1","GITHUB_REF":"refs/heads/main","GITHUB_ACTOR":"outsider987","ANDROID_SDK_ROOT":"/usr/local/lib/android/sdk","LEIN_HOME":"/usr/local/lib/lein","npm_config_globalconfig":"/opt/hostedtoolcache/node/16.16.0/x64/etc/npmrc","npm_config_init_module":"/home/runner/.npm-init.js","GITHUB_PATH":"/home/runner/work/_temp/_runner_file_commands/add_path_a122f5d0-2693-45fa-978e-734d81eafeb2","JAVA_HOME":"/usr/lib/jvm/temurin-11-jdk-amd64","PWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","RUNNER_WORKSPACE":"/home/runner/work/leetCodeCrack","npm_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/bin/npm-cli.js","HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS":"3650","GITHUB_EVENT_NAME":"push","HOMEBREW_NO_AUTO_UPDATE":"1","ANDROID_HOME":"/usr/local/lib/android/sdk","GITHUB_SERVER_URL":"https://github.com","GECKOWEBDRIVER":"/usr/local/share/gecko_driver","LEIN_JAR":"/usr/local/lib/lein/self-installs/leiningen-2.9.10-standalone.jar","GITHUB_OUTPUT":"/home/runner/work/_temp/_runner_file_commands/set_output_a122f5d0-2693-45fa-978e-734d81eafeb2","npm_config_global_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","USER_NAME":"outsider987","EDGEWEBDRIVER":"/usr/local/share/edge_driver","npm_command":"run-script","API_URL":"https://victorprofile.fly.dev/","MY_SECRET":"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","ANDROID_NDK":"/usr/local/lib/android/sdk/ndk/25.1.8937393","SGX_AESM_ADDR":"1","CHROME_BIN":"/usr/bin/google-chrome","SELENIUM_JAR_PATH":"/usr/share/java/selenium-server.jar","ANDROID_NDK_HOME":"/usr/local/lib/android/sdk/ndk/25.1.8937393","GITHUB_STEP_SUMMARY":"/home/runner/work/_temp/_runner_file_commands/step_summary_a122f5d0-2693-45fa-978e-734d81eafeb2","INIT_CWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","EDITOR":"vi"}.API_URL}${subPath}`,
        headers: { 'Content-Type': 'application/json' },
    });
    api.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    api.interceptors.response.use((response) => {
        checkErrorCdoe(response);
        return response;
    }, (error) => {
        checkErrorCdoe(error.response);
        return error.response;
    });
    return api;
});
const privateApi = (subPath = '') => {
    const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        // withCredentials: true,
        baseURL: `${{"GITHUB_STATE":"/home/runner/work/_temp/_runner_file_commands/save_state_a122f5d0-2693-45fa-978e-734d81eafeb2","DEPLOYMENT_BASEPATH":"/opt/runner","DOTNET_NOLOGO":"1","USER":"runner","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false ci/github-actions","CI":"true","GITHUB_ENV":"/home/runner/work/_temp/_runner_file_commands/set_env_a122f5d0-2693-45fa-978e-734d81eafeb2","PIPX_HOME":"/opt/pipx","npm_node_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","JAVA_HOME_8_X64":"/usr/lib/jvm/temurin-8-jdk-amd64","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/runner","RUNNER_TEMP":"/home/runner/work/_temp","GITHUB_EVENT_PATH":"/home/runner/work/_temp/_github_workflow/event.json","npm_package_json":"/home/runner/work/leetCodeCrack/leetCodeCrack/package.json","JAVA_HOME_11_X64":"/usr/lib/jvm/temurin-11-jdk-amd64","PIPX_BIN_DIR":"/opt/pipx_bin","GRAALVM_11_ROOT":"/usr/local/graalvm/graalvm-ce-java11-22.3.0","GITHUB_REPOSITORY_OWNER":"outsider987","GRADLE_HOME":"/usr/share/gradle-7.5.1","ANDROID_NDK_LATEST_HOME":"/usr/local/lib/android/sdk/ndk/25.1.8937393","STATS_RDCL":"true","GITHUB_RETENTION_DAYS":"90","POWERSHELL_DISTRIBUTION_CHANNEL":"GitHub-Actions-ubuntu20","AZURE_EXTENSION_DIR":"/opt/az/azcliextensions","GITHUB_HEAD_REF":"","npm_config_userconfig":"/home/runner/.npmrc","npm_config_local_prefix":"/home/runner/work/leetCodeCrack/leetCodeCrack","GITHUB_GRAPHQL_URL":"https://api.github.com/graphql","COLOR":"0","NVM_DIR":"/home/runner/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","DOTNET_SKIP_FIRST_TIME_EXPERIENCE":"1","JAVA_HOME_17_X64":"/usr/lib/jvm/temurin-17-jdk-amd64","ImageVersion":"20221027.1","RUNNER_OS":"Linux","GITHUB_API_URL":"https://api.github.com","SWIFT_PATH":"/usr/share/swift/usr/bin","RUNNER_USER":"runner","CHROMEWEBDRIVER":"/usr/local/share/chrome_driver","JOURNAL_STREAM":"8:22359","GITHUB_WORKFLOW":"NodeJS with Webpack","_":"/opt/hostedtoolcache/node/16.16.0/x64/bin/npm","npm_config_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","GITHUB_RUN_ID":"3416453113","npm_config_cache":"/home/runner/.npm","GOROOT_1_17_X64":"/opt/hostedtoolcache/go/1.17.13/x64","GITHUB_REF_TYPE":"branch","BOOTSTRAP_HASKELL_NONINTERACTIVE":"1","GITHUB_BASE_REF":"","ImageOS":"ubuntu20","PERFLOG_LOCATION_SETTING":"RUNNER_PERFLOG","GOROOT_1_18_X64":"/opt/hostedtoolcache/go/1.18.7/x64","GITHUB_ACTION_REPOSITORY":"","npm_config_node_gyp":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/runner/work/leetCodeCrack/leetCodeCrack/node_modules/.bin:/home/runner/work/leetCodeCrack/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.16.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","ANT_HOME":"/usr/share/ant","DOTNET_MULTILEVEL_LOOKUP":"0","RUNNER_TRACKING_ID":"github_d514a57d-bf1e-4341-bfc6-45e90aa70bcb","INVOCATION_ID":"6cf8aa5f9b724aa1abaf250c96e97a8c","RUNNER_TOOL_CACHE":"/opt/hostedtoolcache","GOROOT_1_19_X64":"/opt/hostedtoolcache/go/1.19.2/x64","NODE":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","npm_package_name":"leetcodecrack","GITHUB_ACTION":"__run_2","GITHUB_RUN_NUMBER":"36","GITHUB_TRIGGERING_ACTOR":"outsider987","RUNNER_ARCH":"X64","XDG_RUNTIME_DIR":"/run/user/1001","AGENT_TOOLSDIRECTORY":"/opt/hostedtoolcache","LANG":"C.UTF-8","VCPKG_INSTALLATION_ROOT":"/usr/local/share/vcpkg","CONDA":"/usr/share/miniconda","RUNNER_NAME":"Hosted Agent","XDG_CONFIG_HOME":"/home/runner/.config","GITHUB_REF_NAME":"main","GITHUB_REPOSITORY":"outsider987/leetCodeCrack","npm_lifecycle_script":"webpack","ANDROID_NDK_ROOT":"/usr/local/lib/android/sdk/ndk/25.1.8937393","GITHUB_ACTION_REF":"","DEBIAN_FRONTEND":"noninteractive","GITHUB_ACTIONS":"true","PUBLISH_DIR":"./dist","npm_package_version":"1.0.0","npm_lifecycle_event":"build","GITHUB_REF_PROTECTED":"false","USER_EMAIL":"t7902195204@gmail.com","GITHUB_WORKSPACE":"/home/runner/work/leetCodeCrack/leetCodeCrack","ACCEPT_EULA":"Y","GITHUB_JOB":"build","RUNNER_PERFLOG":"/home/runner/perflog","GITHUB_SHA":"d9a2da589e7c50865e0184701bcf171043953c46","GITHUB_RUN_ATTEMPT":"1","GITHUB_REF":"refs/heads/main","GITHUB_ACTOR":"outsider987","ANDROID_SDK_ROOT":"/usr/local/lib/android/sdk","LEIN_HOME":"/usr/local/lib/lein","npm_config_globalconfig":"/opt/hostedtoolcache/node/16.16.0/x64/etc/npmrc","npm_config_init_module":"/home/runner/.npm-init.js","GITHUB_PATH":"/home/runner/work/_temp/_runner_file_commands/add_path_a122f5d0-2693-45fa-978e-734d81eafeb2","JAVA_HOME":"/usr/lib/jvm/temurin-11-jdk-amd64","PWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","RUNNER_WORKSPACE":"/home/runner/work/leetCodeCrack","npm_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/bin/npm-cli.js","HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS":"3650","GITHUB_EVENT_NAME":"push","HOMEBREW_NO_AUTO_UPDATE":"1","ANDROID_HOME":"/usr/local/lib/android/sdk","GITHUB_SERVER_URL":"https://github.com","GECKOWEBDRIVER":"/usr/local/share/gecko_driver","LEIN_JAR":"/usr/local/lib/lein/self-installs/leiningen-2.9.10-standalone.jar","GITHUB_OUTPUT":"/home/runner/work/_temp/_runner_file_commands/set_output_a122f5d0-2693-45fa-978e-734d81eafeb2","npm_config_global_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","USER_NAME":"outsider987","EDGEWEBDRIVER":"/usr/local/share/edge_driver","npm_command":"run-script","API_URL":"https://victorprofile.fly.dev/","MY_SECRET":"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","ANDROID_NDK":"/usr/local/lib/android/sdk/ndk/25.1.8937393","SGX_AESM_ADDR":"1","CHROME_BIN":"/usr/bin/google-chrome","SELENIUM_JAR_PATH":"/usr/share/java/selenium-server.jar","ANDROID_NDK_HOME":"/usr/local/lib/android/sdk/ndk/25.1.8937393","GITHUB_STEP_SUMMARY":"/home/runner/work/_temp/_runner_file_commands/step_summary_a122f5d0-2693-45fa-978e-734d81eafeb2","INIT_CWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","EDITOR":"vi"}.API_URL}${subPath}`,
        headers: { 'Content-Type': 'application/json' },
    });
    api.interceptors.request.use(async (config) => {
        const token = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_1__.getTokenStorage)();
        if (config.headers)
            config.headers.authorization = `Bearer ${token.accessToken}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    api.interceptors.response.use(async (response) => {
        checkErrorCdoe(response);
        return response;
    }, async (error) => {
        if (error.response) {
            // Access Token was expired
            console.log(error);
            if (error.response.status === 401) {
                const storedToken = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_1__.getTokenStorage)();
                try {
                    const rs = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${{"GITHUB_STATE":"/home/runner/work/_temp/_runner_file_commands/save_state_a122f5d0-2693-45fa-978e-734d81eafeb2","DEPLOYMENT_BASEPATH":"/opt/runner","DOTNET_NOLOGO":"1","USER":"runner","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false ci/github-actions","CI":"true","GITHUB_ENV":"/home/runner/work/_temp/_runner_file_commands/set_env_a122f5d0-2693-45fa-978e-734d81eafeb2","PIPX_HOME":"/opt/pipx","npm_node_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","JAVA_HOME_8_X64":"/usr/lib/jvm/temurin-8-jdk-amd64","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/runner","RUNNER_TEMP":"/home/runner/work/_temp","GITHUB_EVENT_PATH":"/home/runner/work/_temp/_github_workflow/event.json","npm_package_json":"/home/runner/work/leetCodeCrack/leetCodeCrack/package.json","JAVA_HOME_11_X64":"/usr/lib/jvm/temurin-11-jdk-amd64","PIPX_BIN_DIR":"/opt/pipx_bin","GRAALVM_11_ROOT":"/usr/local/graalvm/graalvm-ce-java11-22.3.0","GITHUB_REPOSITORY_OWNER":"outsider987","GRADLE_HOME":"/usr/share/gradle-7.5.1","ANDROID_NDK_LATEST_HOME":"/usr/local/lib/android/sdk/ndk/25.1.8937393","STATS_RDCL":"true","GITHUB_RETENTION_DAYS":"90","POWERSHELL_DISTRIBUTION_CHANNEL":"GitHub-Actions-ubuntu20","AZURE_EXTENSION_DIR":"/opt/az/azcliextensions","GITHUB_HEAD_REF":"","npm_config_userconfig":"/home/runner/.npmrc","npm_config_local_prefix":"/home/runner/work/leetCodeCrack/leetCodeCrack","GITHUB_GRAPHQL_URL":"https://api.github.com/graphql","COLOR":"0","NVM_DIR":"/home/runner/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","DOTNET_SKIP_FIRST_TIME_EXPERIENCE":"1","JAVA_HOME_17_X64":"/usr/lib/jvm/temurin-17-jdk-amd64","ImageVersion":"20221027.1","RUNNER_OS":"Linux","GITHUB_API_URL":"https://api.github.com","SWIFT_PATH":"/usr/share/swift/usr/bin","RUNNER_USER":"runner","CHROMEWEBDRIVER":"/usr/local/share/chrome_driver","JOURNAL_STREAM":"8:22359","GITHUB_WORKFLOW":"NodeJS with Webpack","_":"/opt/hostedtoolcache/node/16.16.0/x64/bin/npm","npm_config_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","GITHUB_RUN_ID":"3416453113","npm_config_cache":"/home/runner/.npm","GOROOT_1_17_X64":"/opt/hostedtoolcache/go/1.17.13/x64","GITHUB_REF_TYPE":"branch","BOOTSTRAP_HASKELL_NONINTERACTIVE":"1","GITHUB_BASE_REF":"","ImageOS":"ubuntu20","PERFLOG_LOCATION_SETTING":"RUNNER_PERFLOG","GOROOT_1_18_X64":"/opt/hostedtoolcache/go/1.18.7/x64","GITHUB_ACTION_REPOSITORY":"","npm_config_node_gyp":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/runner/work/leetCodeCrack/leetCodeCrack/node_modules/.bin:/home/runner/work/leetCodeCrack/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.16.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","ANT_HOME":"/usr/share/ant","DOTNET_MULTILEVEL_LOOKUP":"0","RUNNER_TRACKING_ID":"github_d514a57d-bf1e-4341-bfc6-45e90aa70bcb","INVOCATION_ID":"6cf8aa5f9b724aa1abaf250c96e97a8c","RUNNER_TOOL_CACHE":"/opt/hostedtoolcache","GOROOT_1_19_X64":"/opt/hostedtoolcache/go/1.19.2/x64","NODE":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","npm_package_name":"leetcodecrack","GITHUB_ACTION":"__run_2","GITHUB_RUN_NUMBER":"36","GITHUB_TRIGGERING_ACTOR":"outsider987","RUNNER_ARCH":"X64","XDG_RUNTIME_DIR":"/run/user/1001","AGENT_TOOLSDIRECTORY":"/opt/hostedtoolcache","LANG":"C.UTF-8","VCPKG_INSTALLATION_ROOT":"/usr/local/share/vcpkg","CONDA":"/usr/share/miniconda","RUNNER_NAME":"Hosted Agent","XDG_CONFIG_HOME":"/home/runner/.config","GITHUB_REF_NAME":"main","GITHUB_REPOSITORY":"outsider987/leetCodeCrack","npm_lifecycle_script":"webpack","ANDROID_NDK_ROOT":"/usr/local/lib/android/sdk/ndk/25.1.8937393","GITHUB_ACTION_REF":"","DEBIAN_FRONTEND":"noninteractive","GITHUB_ACTIONS":"true","PUBLISH_DIR":"./dist","npm_package_version":"1.0.0","npm_lifecycle_event":"build","GITHUB_REF_PROTECTED":"false","USER_EMAIL":"t7902195204@gmail.com","GITHUB_WORKSPACE":"/home/runner/work/leetCodeCrack/leetCodeCrack","ACCEPT_EULA":"Y","GITHUB_JOB":"build","RUNNER_PERFLOG":"/home/runner/perflog","GITHUB_SHA":"d9a2da589e7c50865e0184701bcf171043953c46","GITHUB_RUN_ATTEMPT":"1","GITHUB_REF":"refs/heads/main","GITHUB_ACTOR":"outsider987","ANDROID_SDK_ROOT":"/usr/local/lib/android/sdk","LEIN_HOME":"/usr/local/lib/lein","npm_config_globalconfig":"/opt/hostedtoolcache/node/16.16.0/x64/etc/npmrc","npm_config_init_module":"/home/runner/.npm-init.js","GITHUB_PATH":"/home/runner/work/_temp/_runner_file_commands/add_path_a122f5d0-2693-45fa-978e-734d81eafeb2","JAVA_HOME":"/usr/lib/jvm/temurin-11-jdk-amd64","PWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","RUNNER_WORKSPACE":"/home/runner/work/leetCodeCrack","npm_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/bin/npm-cli.js","HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS":"3650","GITHUB_EVENT_NAME":"push","HOMEBREW_NO_AUTO_UPDATE":"1","ANDROID_HOME":"/usr/local/lib/android/sdk","GITHUB_SERVER_URL":"https://github.com","GECKOWEBDRIVER":"/usr/local/share/gecko_driver","LEIN_JAR":"/usr/local/lib/lein/self-installs/leiningen-2.9.10-standalone.jar","GITHUB_OUTPUT":"/home/runner/work/_temp/_runner_file_commands/set_output_a122f5d0-2693-45fa-978e-734d81eafeb2","npm_config_global_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","USER_NAME":"outsider987","EDGEWEBDRIVER":"/usr/local/share/edge_driver","npm_command":"run-script","API_URL":"https://victorprofile.fly.dev/","MY_SECRET":"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","ANDROID_NDK":"/usr/local/lib/android/sdk/ndk/25.1.8937393","SGX_AESM_ADDR":"1","CHROME_BIN":"/usr/bin/google-chrome","SELENIUM_JAR_PATH":"/usr/share/java/selenium-server.jar","ANDROID_NDK_HOME":"/usr/local/lib/android/sdk/ndk/25.1.8937393","GITHUB_STEP_SUMMARY":"/home/runner/work/_temp/_runner_file_commands/step_summary_a122f5d0-2693-45fa-978e-734d81eafeb2","INIT_CWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","EDITOR":"vi"}.API_URL}auth/refresh`, {
                        refresh_token: storedToken.refresh_token,
                    }, {
                        headers: {
                            authorization: `Bearer ${storedToken.refreshToken}`,
                        },
                    });
                    if (rs.status === 401) {
                        checkErrorCdoe(rs);
                        return rs;
                    }
                    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_1__.setTokenStorage)(rs.data.data);
                    return api(error.config);
                }
                catch (_error) {
                    checkErrorCdoe(_error.response);
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(error);
    });
    return api;
};
async function checkErrorCdoe(response) {
    switch (response.data.status) {
        case false:
            _store__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_store_global__WEBPACK_IMPORTED_MODULE_3__.setAlertDialog)({ show: true, msg: JSON.stringify(response.data) }));
            break;
        case true:
            break;
        default:
            break;
    }
}


/***/ }),

/***/ "./src/hooks/useMyForm.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useMyForm.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useForm": () => (/* binding */ useForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useForm = (initialStates, validateList, isStrean = true) => {
    const isSubmitted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialStates);
    const initializeErrors = initialStates;
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initializeErrors);
    const isPassRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const refErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(errors);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };
    function noWhiteSpaceChange(e) {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value.replace(/\s/g, '') });
    }
    const validating = () => {
        if (isSubmitted.current) {
            let isPassed = true;
            if (validateList) {
                for (const [key, vList] of Object.entries(validateList)) {
                    for (const v of vList) {
                        const validateIspass = v.validate(values[key]);
                        if (isPassed)
                            isPassed = isPassRef.current = validateIspass;
                        validateIspass
                            ? (refErrors.current = {
                                ...refErrors.current,
                                [key]: { pass: v.validate(values[key]), message: '' },
                            })
                            : (refErrors.current = {
                                ...refErrors.current,
                                [key]: { pass: v.validate(values[key]), message: v.message },
                            });
                        if (!validateIspass)
                            break;
                    }
                }
                setErrors(refErrors.current);
                isStrean ? (isSubmitted.current = true) : (isSubmitted.current = false);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        validating();
    }, [values]);
    const handleSubmit = (data) => {
        return (event) => {
            event.preventDefault();
            isSubmitted.current = true;
            validating();
            data(values, isPassRef.current);
        };
    };
    const validator = {
        values,
        errors,
        handleChange,
        noWhiteSpaceChange,
        isPass: isPassRef.current,
    };
    return { handleSubmit, validator };
};


/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanTokenStorage": () => (/* binding */ cleanTokenStorage),
/* harmony export */   "getTokenStorage": () => (/* binding */ getTokenStorage),
/* harmony export */   "setTokenStorage": () => (/* binding */ setTokenStorage)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/store */ "./src/store/index.ts");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/store/auth */ "./src/store/auth.ts");


const setTokenStorage = (tokens) => {
    localStorage.setItem('tokens', JSON.stringify(tokens));
    _store__WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_store_auth__WEBPACK_IMPORTED_MODULE_1__.setToken)(tokens));
};
const getTokenStorage = () => {
    const tokens = localStorage.getItem('tokens');
    if (tokens == undefined)
        return { accessToken: '', refreshToken: '' };
    if (tokens)
        return JSON.parse(tokens);
    return '';
};
const cleanTokenStorage = () => {
    localStorage.removeItem('tokens');
    _store__WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_store_auth__WEBPACK_IMPORTED_MODULE_1__.setToken)({ accessToken: '', refreshToken: '' }));
};


/***/ }),

/***/ "./src/utils/validate.ts":
/*!*******************************!*\
  !*** ./src/utils/validate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegexpBindFactory": () => (/* binding */ RegexpBindFactory),
/* harmony export */   "validateRegexp": () => (/* binding */ validateRegexp)
/* harmony export */ });
const validateRegexp = {
    email: RegexpBindFactory(/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/),
    require: RegexpBindFactory(/\w+/),
    password: RegexpBindFactory(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
};
function RegexpBindFactory(regexp) {
    return regexp.test.bind(regexp);
}


/***/ })

}]);
//# sourceMappingURL=js/1a398ad16e1555f00e91.js.map