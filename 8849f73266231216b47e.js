"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Performance_InfiniteScroll_tsx"],{

/***/ "./src/api/base.ts":
/*!*************************!*\
  !*** ./src/api/base.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "privateApi": () => (/* binding */ privateApi),
/* harmony export */   "publicApi": () => (/* binding */ publicApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store */ "./src/store/index.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/global */ "./src/store/global.ts");




const publicApi = (subPath = '', isDummyData = false) => {
    const url = isDummyData ? 'https://dummyapi.io/data/v1/' : `${{"GITHUB_STATE":"/home/runner/work/_temp/_runner_file_commands/save_state_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","STATS_TRP":"true","DEPLOYMENT_BASEPATH":"/opt/runner","DOTNET_NOLOGO":"1","USER":"runner","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false ci/github-actions","CI":"true","GITHUB_ENV":"/home/runner/work/_temp/_runner_file_commands/set_env_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","PIPX_HOME":"/opt/pipx","npm_node_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","JAVA_HOME_8_X64":"/usr/lib/jvm/temurin-8-jdk-amd64","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/runner","RUNNER_TEMP":"/home/runner/work/_temp","GITHUB_EVENT_PATH":"/home/runner/work/_temp/_github_workflow/event.json","npm_package_json":"/home/runner/work/leetCodeCrack/leetCodeCrack/package.json","JAVA_HOME_11_X64":"/usr/lib/jvm/temurin-11-jdk-amd64","PIPX_BIN_DIR":"/opt/pipx_bin","GITHUB_REPOSITORY_OWNER":"outsider987","GRADLE_HOME":"/usr/share/gradle-8.1.1","ANDROID_NDK_LATEST_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","STATS_RDCL":"true","GITHUB_RETENTION_DAYS":"90","GITHUB_REPOSITORY_OWNER_ID":"29707987","POWERSHELL_DISTRIBUTION_CHANNEL":"GitHub-Actions-ubuntu22","AZURE_EXTENSION_DIR":"/opt/az/azcliextensions","GITHUB_HEAD_REF":"","npm_config_userconfig":"/home/runner/.npmrc","npm_config_local_prefix":"/home/runner/work/leetCodeCrack/leetCodeCrack","SYSTEMD_EXEC_PID":"680","GITHUB_GRAPHQL_URL":"https://api.github.com/graphql","COLOR":"0","GOROOT_1_20_X64":"/opt/hostedtoolcache/go/1.20.4/x64","NVM_DIR":"/home/runner/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","DOTNET_SKIP_FIRST_TIME_EXPERIENCE":"1","JAVA_HOME_17_X64":"/usr/lib/jvm/temurin-17-jdk-amd64","ImageVersion":"20230507.1","RUNNER_OS":"Linux","GITHUB_API_URL":"https://api.github.com","SWIFT_PATH":"/usr/share/swift/usr/bin","RUNNER_USER":"runner","CHROMEWEBDRIVER":"/usr/local/share/chrome_driver","JOURNAL_STREAM":"8:17153","GITHUB_WORKFLOW":"NodeJS with Webpack","_":"/opt/hostedtoolcache/node/16.16.0/x64/bin/npm","npm_config_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","GITHUB_RUN_ID":"5104626889","npm_config_cache":"/home/runner/.npm","GITHUB_REF_TYPE":"branch","BOOTSTRAP_HASKELL_NONINTERACTIVE":"1","GITHUB_WORKFLOW_SHA":"884e21e2898190cee3661cb24a30a4c69df61285","GITHUB_BASE_REF":"","ImageOS":"ubuntu22","GITHUB_WORKFLOW_REF":"outsider987/leetCodeCrack/.github/workflows/webpack.yml@refs/heads/main","PERFLOG_LOCATION_SETTING":"RUNNER_PERFLOG","GOROOT_1_18_X64":"/opt/hostedtoolcache/go/1.18.10/x64","GITHUB_ACTION_REPOSITORY":"","npm_config_node_gyp":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/runner/work/leetCodeCrack/leetCodeCrack/node_modules/.bin:/home/runner/work/leetCodeCrack/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.16.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","ANT_HOME":"/usr/share/ant","DOTNET_MULTILEVEL_LOOKUP":"0","RUNNER_TRACKING_ID":"github_dade69c0-9849-4964-89c7-b46b89f85e11","INVOCATION_ID":"a33599c9fae246afa76eaa5ed727f63c","RUNNER_TOOL_CACHE":"/opt/hostedtoolcache","GOROOT_1_19_X64":"/opt/hostedtoolcache/go/1.19.9/x64","NODE":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","npm_package_name":"leetcodecrack","GITHUB_ACTION":"__run_2","GITHUB_RUN_NUMBER":"160","GITHUB_TRIGGERING_ACTOR":"outsider987","RUNNER_ARCH":"X64","XDG_RUNTIME_DIR":"/run/user/1001","AGENT_TOOLSDIRECTORY":"/opt/hostedtoolcache","LANG":"C.UTF-8","VCPKG_INSTALLATION_ROOT":"/usr/local/share/vcpkg","CONDA":"/usr/share/miniconda","RUNNER_NAME":"GitHub Actions 2","XDG_CONFIG_HOME":"/home/runner/.config","STATS_VMD":"true","GITHUB_REF_NAME":"main","GITHUB_REPOSITORY":"outsider987/leetCodeCrack","npm_lifecycle_script":"webpack","ANDROID_NDK_ROOT":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_ACTION_REF":"","DEBIAN_FRONTEND":"noninteractive","GITHUB_REPOSITORY_ID":"505868934","GITHUB_ACTIONS":"true","PUBLISH_DIR":"./dist","STATS_NM":"true","npm_package_version":"1.0.1","npm_lifecycle_event":"build","GITHUB_REF_PROTECTED":"false","USER_EMAIL":"t7902195204@gmail.com","GITHUB_WORKSPACE":"/home/runner/work/leetCodeCrack/leetCodeCrack","ACCEPT_EULA":"Y","GITHUB_JOB":"build","RUNNER_PERFLOG":"/home/runner/perflog","GITHUB_SHA":"884e21e2898190cee3661cb24a30a4c69df61285","GITHUB_RUN_ATTEMPT":"1","GITHUB_REF":"refs/heads/main","GITHUB_ACTOR":"outsider987","ANDROID_SDK_ROOT":"/usr/local/lib/android/sdk","LEIN_HOME":"/usr/local/lib/lein","npm_config_globalconfig":"/opt/hostedtoolcache/node/16.16.0/x64/etc/npmrc","npm_config_init_module":"/home/runner/.npm-init.js","GITHUB_PATH":"/home/runner/work/_temp/_runner_file_commands/add_path_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","JAVA_HOME":"/usr/lib/jvm/temurin-11-jdk-amd64","PWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","GITHUB_ACTOR_ID":"29707987","RUNNER_WORKSPACE":"/home/runner/work/leetCodeCrack","npm_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/bin/npm-cli.js","HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS":"3650","STATS_TIS":"mining","GITHUB_EVENT_NAME":"push","HOMEBREW_NO_AUTO_UPDATE":"1","ANDROID_HOME":"/usr/local/lib/android/sdk","GITHUB_SERVER_URL":"https://github.com","GECKOWEBDRIVER":"/usr/local/share/gecko_driver","LEIN_JAR":"/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar","GHCUP_INSTALL_BASE_PREFIX":"/usr/local","GITHUB_OUTPUT":"/home/runner/work/_temp/_runner_file_commands/set_output_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","npm_config_global_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","USER_NAME":"outsider987","EDGEWEBDRIVER":"/usr/local/share/edge_driver","STATS_EXT":"true","npm_command":"run-script","API_URL":"https://victorprofile.fly.dev","MY_SECRET":"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","ANDROID_NDK":"/usr/local/lib/android/sdk/ndk/25.2.9519653","SGX_AESM_ADDR":"1","CHROME_BIN":"/usr/bin/google-chrome","SELENIUM_JAR_PATH":"/usr/share/java/selenium-server.jar","STATS_EXTP":"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.137+2/provjobd.data","ANDROID_NDK_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_STEP_SUMMARY":"/home/runner/work/_temp/_runner_file_commands/step_summary_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","INIT_CWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","EDITOR":"vi"}.API_URL}/${subPath}`;
    const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
        },
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
        if (error.response.status === 401)
            return error.response;
        checkErrorCdoe(error.response);
        return error.response;
    });
    return api;
};
const privateApi = (subPath = '') => {
    const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: `${{"GITHUB_STATE":"/home/runner/work/_temp/_runner_file_commands/save_state_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","STATS_TRP":"true","DEPLOYMENT_BASEPATH":"/opt/runner","DOTNET_NOLOGO":"1","USER":"runner","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false ci/github-actions","CI":"true","GITHUB_ENV":"/home/runner/work/_temp/_runner_file_commands/set_env_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","PIPX_HOME":"/opt/pipx","npm_node_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","JAVA_HOME_8_X64":"/usr/lib/jvm/temurin-8-jdk-amd64","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/runner","RUNNER_TEMP":"/home/runner/work/_temp","GITHUB_EVENT_PATH":"/home/runner/work/_temp/_github_workflow/event.json","npm_package_json":"/home/runner/work/leetCodeCrack/leetCodeCrack/package.json","JAVA_HOME_11_X64":"/usr/lib/jvm/temurin-11-jdk-amd64","PIPX_BIN_DIR":"/opt/pipx_bin","GITHUB_REPOSITORY_OWNER":"outsider987","GRADLE_HOME":"/usr/share/gradle-8.1.1","ANDROID_NDK_LATEST_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","STATS_RDCL":"true","GITHUB_RETENTION_DAYS":"90","GITHUB_REPOSITORY_OWNER_ID":"29707987","POWERSHELL_DISTRIBUTION_CHANNEL":"GitHub-Actions-ubuntu22","AZURE_EXTENSION_DIR":"/opt/az/azcliextensions","GITHUB_HEAD_REF":"","npm_config_userconfig":"/home/runner/.npmrc","npm_config_local_prefix":"/home/runner/work/leetCodeCrack/leetCodeCrack","SYSTEMD_EXEC_PID":"680","GITHUB_GRAPHQL_URL":"https://api.github.com/graphql","COLOR":"0","GOROOT_1_20_X64":"/opt/hostedtoolcache/go/1.20.4/x64","NVM_DIR":"/home/runner/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","DOTNET_SKIP_FIRST_TIME_EXPERIENCE":"1","JAVA_HOME_17_X64":"/usr/lib/jvm/temurin-17-jdk-amd64","ImageVersion":"20230507.1","RUNNER_OS":"Linux","GITHUB_API_URL":"https://api.github.com","SWIFT_PATH":"/usr/share/swift/usr/bin","RUNNER_USER":"runner","CHROMEWEBDRIVER":"/usr/local/share/chrome_driver","JOURNAL_STREAM":"8:17153","GITHUB_WORKFLOW":"NodeJS with Webpack","_":"/opt/hostedtoolcache/node/16.16.0/x64/bin/npm","npm_config_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","GITHUB_RUN_ID":"5104626889","npm_config_cache":"/home/runner/.npm","GITHUB_REF_TYPE":"branch","BOOTSTRAP_HASKELL_NONINTERACTIVE":"1","GITHUB_WORKFLOW_SHA":"884e21e2898190cee3661cb24a30a4c69df61285","GITHUB_BASE_REF":"","ImageOS":"ubuntu22","GITHUB_WORKFLOW_REF":"outsider987/leetCodeCrack/.github/workflows/webpack.yml@refs/heads/main","PERFLOG_LOCATION_SETTING":"RUNNER_PERFLOG","GOROOT_1_18_X64":"/opt/hostedtoolcache/go/1.18.10/x64","GITHUB_ACTION_REPOSITORY":"","npm_config_node_gyp":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/runner/work/leetCodeCrack/leetCodeCrack/node_modules/.bin:/home/runner/work/leetCodeCrack/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.16.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","ANT_HOME":"/usr/share/ant","DOTNET_MULTILEVEL_LOOKUP":"0","RUNNER_TRACKING_ID":"github_dade69c0-9849-4964-89c7-b46b89f85e11","INVOCATION_ID":"a33599c9fae246afa76eaa5ed727f63c","RUNNER_TOOL_CACHE":"/opt/hostedtoolcache","GOROOT_1_19_X64":"/opt/hostedtoolcache/go/1.19.9/x64","NODE":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","npm_package_name":"leetcodecrack","GITHUB_ACTION":"__run_2","GITHUB_RUN_NUMBER":"160","GITHUB_TRIGGERING_ACTOR":"outsider987","RUNNER_ARCH":"X64","XDG_RUNTIME_DIR":"/run/user/1001","AGENT_TOOLSDIRECTORY":"/opt/hostedtoolcache","LANG":"C.UTF-8","VCPKG_INSTALLATION_ROOT":"/usr/local/share/vcpkg","CONDA":"/usr/share/miniconda","RUNNER_NAME":"GitHub Actions 2","XDG_CONFIG_HOME":"/home/runner/.config","STATS_VMD":"true","GITHUB_REF_NAME":"main","GITHUB_REPOSITORY":"outsider987/leetCodeCrack","npm_lifecycle_script":"webpack","ANDROID_NDK_ROOT":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_ACTION_REF":"","DEBIAN_FRONTEND":"noninteractive","GITHUB_REPOSITORY_ID":"505868934","GITHUB_ACTIONS":"true","PUBLISH_DIR":"./dist","STATS_NM":"true","npm_package_version":"1.0.1","npm_lifecycle_event":"build","GITHUB_REF_PROTECTED":"false","USER_EMAIL":"t7902195204@gmail.com","GITHUB_WORKSPACE":"/home/runner/work/leetCodeCrack/leetCodeCrack","ACCEPT_EULA":"Y","GITHUB_JOB":"build","RUNNER_PERFLOG":"/home/runner/perflog","GITHUB_SHA":"884e21e2898190cee3661cb24a30a4c69df61285","GITHUB_RUN_ATTEMPT":"1","GITHUB_REF":"refs/heads/main","GITHUB_ACTOR":"outsider987","ANDROID_SDK_ROOT":"/usr/local/lib/android/sdk","LEIN_HOME":"/usr/local/lib/lein","npm_config_globalconfig":"/opt/hostedtoolcache/node/16.16.0/x64/etc/npmrc","npm_config_init_module":"/home/runner/.npm-init.js","GITHUB_PATH":"/home/runner/work/_temp/_runner_file_commands/add_path_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","JAVA_HOME":"/usr/lib/jvm/temurin-11-jdk-amd64","PWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","GITHUB_ACTOR_ID":"29707987","RUNNER_WORKSPACE":"/home/runner/work/leetCodeCrack","npm_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/bin/npm-cli.js","HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS":"3650","STATS_TIS":"mining","GITHUB_EVENT_NAME":"push","HOMEBREW_NO_AUTO_UPDATE":"1","ANDROID_HOME":"/usr/local/lib/android/sdk","GITHUB_SERVER_URL":"https://github.com","GECKOWEBDRIVER":"/usr/local/share/gecko_driver","LEIN_JAR":"/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar","GHCUP_INSTALL_BASE_PREFIX":"/usr/local","GITHUB_OUTPUT":"/home/runner/work/_temp/_runner_file_commands/set_output_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","npm_config_global_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","USER_NAME":"outsider987","EDGEWEBDRIVER":"/usr/local/share/edge_driver","STATS_EXT":"true","npm_command":"run-script","API_URL":"https://victorprofile.fly.dev","MY_SECRET":"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","ANDROID_NDK":"/usr/local/lib/android/sdk/ndk/25.2.9519653","SGX_AESM_ADDR":"1","CHROME_BIN":"/usr/bin/google-chrome","SELENIUM_JAR_PATH":"/usr/share/java/selenium-server.jar","STATS_EXTP":"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.137+2/provjobd.data","ANDROID_NDK_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_STEP_SUMMARY":"/home/runner/work/_temp/_runner_file_commands/step_summary_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","INIT_CWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","EDITOR":"vi"}.API_URL}/${subPath}`,
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
            if (error.response.status === 401) {
                const storedToken = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_1__.getTokenStorage)();
                try {
                    const rs = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${{"GITHUB_STATE":"/home/runner/work/_temp/_runner_file_commands/save_state_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","STATS_TRP":"true","DEPLOYMENT_BASEPATH":"/opt/runner","DOTNET_NOLOGO":"1","USER":"runner","npm_config_user_agent":"npm/8.11.0 node/v16.16.0 linux x64 workspaces/false ci/github-actions","CI":"true","GITHUB_ENV":"/home/runner/work/_temp/_runner_file_commands/set_env_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","PIPX_HOME":"/opt/pipx","npm_node_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","JAVA_HOME_8_X64":"/usr/lib/jvm/temurin-8-jdk-amd64","SHLVL":"1","npm_config_noproxy":"","HOME":"/home/runner","RUNNER_TEMP":"/home/runner/work/_temp","GITHUB_EVENT_PATH":"/home/runner/work/_temp/_github_workflow/event.json","npm_package_json":"/home/runner/work/leetCodeCrack/leetCodeCrack/package.json","JAVA_HOME_11_X64":"/usr/lib/jvm/temurin-11-jdk-amd64","PIPX_BIN_DIR":"/opt/pipx_bin","GITHUB_REPOSITORY_OWNER":"outsider987","GRADLE_HOME":"/usr/share/gradle-8.1.1","ANDROID_NDK_LATEST_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","STATS_RDCL":"true","GITHUB_RETENTION_DAYS":"90","GITHUB_REPOSITORY_OWNER_ID":"29707987","POWERSHELL_DISTRIBUTION_CHANNEL":"GitHub-Actions-ubuntu22","AZURE_EXTENSION_DIR":"/opt/az/azcliextensions","GITHUB_HEAD_REF":"","npm_config_userconfig":"/home/runner/.npmrc","npm_config_local_prefix":"/home/runner/work/leetCodeCrack/leetCodeCrack","SYSTEMD_EXEC_PID":"680","GITHUB_GRAPHQL_URL":"https://api.github.com/graphql","COLOR":"0","GOROOT_1_20_X64":"/opt/hostedtoolcache/go/1.20.4/x64","NVM_DIR":"/home/runner/.nvm","npm_config_metrics_registry":"https://registry.npmjs.org/","DOTNET_SKIP_FIRST_TIME_EXPERIENCE":"1","JAVA_HOME_17_X64":"/usr/lib/jvm/temurin-17-jdk-amd64","ImageVersion":"20230507.1","RUNNER_OS":"Linux","GITHUB_API_URL":"https://api.github.com","SWIFT_PATH":"/usr/share/swift/usr/bin","RUNNER_USER":"runner","CHROMEWEBDRIVER":"/usr/local/share/chrome_driver","JOURNAL_STREAM":"8:17153","GITHUB_WORKFLOW":"NodeJS with Webpack","_":"/opt/hostedtoolcache/node/16.16.0/x64/bin/npm","npm_config_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","GITHUB_RUN_ID":"5104626889","npm_config_cache":"/home/runner/.npm","GITHUB_REF_TYPE":"branch","BOOTSTRAP_HASKELL_NONINTERACTIVE":"1","GITHUB_WORKFLOW_SHA":"884e21e2898190cee3661cb24a30a4c69df61285","GITHUB_BASE_REF":"","ImageOS":"ubuntu22","GITHUB_WORKFLOW_REF":"outsider987/leetCodeCrack/.github/workflows/webpack.yml@refs/heads/main","PERFLOG_LOCATION_SETTING":"RUNNER_PERFLOG","GOROOT_1_18_X64":"/opt/hostedtoolcache/go/1.18.10/x64","GITHUB_ACTION_REPOSITORY":"","npm_config_node_gyp":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/runner/work/leetCodeCrack/leetCodeCrack/node_modules/.bin:/home/runner/work/leetCodeCrack/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.16.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin","ANT_HOME":"/usr/share/ant","DOTNET_MULTILEVEL_LOOKUP":"0","RUNNER_TRACKING_ID":"github_dade69c0-9849-4964-89c7-b46b89f85e11","INVOCATION_ID":"a33599c9fae246afa76eaa5ed727f63c","RUNNER_TOOL_CACHE":"/opt/hostedtoolcache","GOROOT_1_19_X64":"/opt/hostedtoolcache/go/1.19.9/x64","NODE":"/opt/hostedtoolcache/node/16.16.0/x64/bin/node","npm_package_name":"leetcodecrack","GITHUB_ACTION":"__run_2","GITHUB_RUN_NUMBER":"160","GITHUB_TRIGGERING_ACTOR":"outsider987","RUNNER_ARCH":"X64","XDG_RUNTIME_DIR":"/run/user/1001","AGENT_TOOLSDIRECTORY":"/opt/hostedtoolcache","LANG":"C.UTF-8","VCPKG_INSTALLATION_ROOT":"/usr/local/share/vcpkg","CONDA":"/usr/share/miniconda","RUNNER_NAME":"GitHub Actions 2","XDG_CONFIG_HOME":"/home/runner/.config","STATS_VMD":"true","GITHUB_REF_NAME":"main","GITHUB_REPOSITORY":"outsider987/leetCodeCrack","npm_lifecycle_script":"webpack","ANDROID_NDK_ROOT":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_ACTION_REF":"","DEBIAN_FRONTEND":"noninteractive","GITHUB_REPOSITORY_ID":"505868934","GITHUB_ACTIONS":"true","PUBLISH_DIR":"./dist","STATS_NM":"true","npm_package_version":"1.0.1","npm_lifecycle_event":"build","GITHUB_REF_PROTECTED":"false","USER_EMAIL":"t7902195204@gmail.com","GITHUB_WORKSPACE":"/home/runner/work/leetCodeCrack/leetCodeCrack","ACCEPT_EULA":"Y","GITHUB_JOB":"build","RUNNER_PERFLOG":"/home/runner/perflog","GITHUB_SHA":"884e21e2898190cee3661cb24a30a4c69df61285","GITHUB_RUN_ATTEMPT":"1","GITHUB_REF":"refs/heads/main","GITHUB_ACTOR":"outsider987","ANDROID_SDK_ROOT":"/usr/local/lib/android/sdk","LEIN_HOME":"/usr/local/lib/lein","npm_config_globalconfig":"/opt/hostedtoolcache/node/16.16.0/x64/etc/npmrc","npm_config_init_module":"/home/runner/.npm-init.js","GITHUB_PATH":"/home/runner/work/_temp/_runner_file_commands/add_path_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","JAVA_HOME":"/usr/lib/jvm/temurin-11-jdk-amd64","PWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","GITHUB_ACTOR_ID":"29707987","RUNNER_WORKSPACE":"/home/runner/work/leetCodeCrack","npm_execpath":"/opt/hostedtoolcache/node/16.16.0/x64/lib/node_modules/npm/bin/npm-cli.js","HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS":"3650","STATS_TIS":"mining","GITHUB_EVENT_NAME":"push","HOMEBREW_NO_AUTO_UPDATE":"1","ANDROID_HOME":"/usr/local/lib/android/sdk","GITHUB_SERVER_URL":"https://github.com","GECKOWEBDRIVER":"/usr/local/share/gecko_driver","LEIN_JAR":"/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar","GHCUP_INSTALL_BASE_PREFIX":"/usr/local","GITHUB_OUTPUT":"/home/runner/work/_temp/_runner_file_commands/set_output_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","npm_config_global_prefix":"/opt/hostedtoolcache/node/16.16.0/x64","USER_NAME":"outsider987","EDGEWEBDRIVER":"/usr/local/share/edge_driver","STATS_EXT":"true","npm_command":"run-script","API_URL":"https://victorprofile.fly.dev","MY_SECRET":"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","ANDROID_NDK":"/usr/local/lib/android/sdk/ndk/25.2.9519653","SGX_AESM_ADDR":"1","CHROME_BIN":"/usr/bin/google-chrome","SELENIUM_JAR_PATH":"/usr/share/java/selenium-server.jar","STATS_EXTP":"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.137+2/provjobd.data","ANDROID_NDK_HOME":"/usr/local/lib/android/sdk/ndk/25.2.9519653","GITHUB_STEP_SUMMARY":"/home/runner/work/_temp/_runner_file_commands/step_summary_ff5cd1e3-33e7-4e44-aad7-42d1e95e3f56","INIT_CWD":"/home/runner/work/leetCodeCrack/leetCodeCrack","EDITOR":"vi"}.API_URL}/auth/refresh`, {
                        refreshToken: storedToken.refreshToken,
                    }, {
                        headers: {
                            authorization: `Bearer ${storedToken.refreshToken}`,
                        },
                    });
                    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_1__.setTokenStorage)(rs.data.data);
                    return api(error.config);
                }
                catch (_error) {
                    console.log(_error);
                    if (_error.response.status === 401) {
                        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_1__.cleanTokenStorage)();
                    }
                    checkErrorCdoe(_error.response, _error.response.status);
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(error);
    });
    return api;
};
async function checkErrorCdoe(response, catchError = 'good') {
    switch (response.data.status) {
        case false:
            _store__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_store_global__WEBPACK_IMPORTED_MODULE_3__.setAlertDialog)({ show: true, msg: JSON.stringify(response.data), title: 'Error' }));
            break;
        case true:
            break;
        default:
            break;
    }
}


/***/ }),

/***/ "./src/api/randPost.ts":
/*!*****************************!*\
  !*** ./src/api/randPost.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDatasType": () => (/* binding */ PostDatasType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/api/base.ts");

const PostDatasType = {
    id: '60d21b4667d0d8992e610c85',
    image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
    likes: 43,
    tags: ['animal', 'dog', 'golden retriever'],
    text: 'adult Labrador retriever',
    publishDate: '2020-05-24T14:53:17.598Z',
    owner: {
        id: '60d0fe4f5311236168a109ca',
        title: 'ms',
        firstName: 'Sara',
        lastName: 'Andersen',
        picture: 'https://randomuser.me/api/portraits/women/58.jpg',
    },
};
const subPath = 'post';
const useRandPostsApi = () => {
    const postApi = (0,_base__WEBPACK_IMPORTED_MODULE_0__.publicApi)(subPath);
    const GET_POSTS = async ({ pageParam = 1 }) => {
        const resp = await postApi.get('https://dummyapi.io/data/v1/post?limit=10', {
            headers: {
                'Content-Type': 'application/json',
                'app-id': '637e288874c675dfd68d88e1',
            },
            params: { page: pageParam },
        });
        return resp.data.data;
    };
    return { GET_POSTS };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRandPostsApi);


/***/ }),

/***/ "./src/data/randPost.ts":
/*!******************************!*\
  !*** ./src/data/randPost.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRandPostsDatas": () => (/* binding */ useRandPostsDatas)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _api_randPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/api/randPost */ "./src/api/randPost.ts");


const useRandPostsDatas = (page) => {
    const { GET_POSTS } = (0,_api_randPost__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const Posts = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)('post', GET_POSTS, {
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            return nextPage;
        },
    });
    return Posts;
};


/***/ }),

/***/ "./src/pages/Home/Performance/InfiniteScroll.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/Home/Performance/InfiniteScroll.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/SvgIcon */ "./src/components/SvgIcon.tsx");
/* harmony import */ var _data_randPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/data/randPost */ "./src/data/randPost.ts");



const InfiniteScroll = () => {
    const page = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(1);
    const { data, isSuccess, isLoading, isFetchingNextPage, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage, } = (0,_data_randPost__WEBPACK_IMPORTED_MODULE_2__.useRandPostsDatas)(1);
    const observerElem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let fetching = false;
        const handleScroll = async (e) => {
            const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
                fetching = true;
                if (hasNextPage)
                    await fetchNextPage();
                fetching = false;
            }
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [fetchNextPage, hasNextPage]);
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((entries) => {
        const [target] = entries;
        if (target.isIntersecting) {
            fetchNextPage();
        }
    }, [fetchNextPage, hasNextPage]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const element = observerElem.current;
        const option = { threshold: 0 };
        const observer = new IntersectionObserver(handleObserver, option);
        observer.observe(element);
        return () => observer.unobserve(element);
    }, [fetchNextPage, hasNextPage, handleObserver]);
    const len = data?.pages.length;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        isSuccess &&
            data.pages.flat().map((post) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "result", key: post?.id },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: post?.image })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex text-white", ref: observerElem },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "spin", className: "w-5" }),
            isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteScroll);


/***/ })

}]);
//# sourceMappingURL=js/8849f73266231216b47e.js.map