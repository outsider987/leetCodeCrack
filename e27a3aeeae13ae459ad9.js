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
        baseURL: `${{"npm_package_dependencies_prettier":"^2.6.2","USER":"outsider","npm_package_devDependencies_webpack_cli":"^4.9.2","npm_package_devDependencies_webpack_bundle_analyzer":"^4.5.0","npm_config_version_commit_hooks":"true","npm_config_user_agent":"yarn/1.22.17 npm/? node/v16.16.0 linux x64","npm_package_bugs_url":"https://github.com/outsider987/leetCodeCrack/issues","npm_config_bin_links":"true","BUN_INSTALL":"/home/outsider/.bun","SSH_AGENT_PID":"7689","GIT_ASKPASS":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/extensions/git/dist/askpass.sh","npm_node_execpath":"/home/outsider/.nvm/versions/node/v16.16.0/bin/node","npm_package_devDependencies_gh_pages":"^4.0.0","npm_config_init_version":"1.0.0","SHLVL":"2","npm_config_noproxy":"","HOME":"/home/outsider","OLDPWD":"/home/outsider/github/leetCodeCrack","LESS":"-R","npm_package_devDependencies__typescript_eslint_parser":"^5.23.0","npm_package_devDependencies__types_react_loadable":"^5.5.6","NVM_BIN":"/home/outsider/.nvm/versions/node/v16.16.0/bin","TERM_PROGRAM_VERSION":"1.73.0","VSCODE_IPC_HOOK_CLI":"/tmp/vscode-ipc-48b327fe-aa9c-4485-a056-a270dc370ee2.sock","npm_package_json":"/home/outsider/github/leetCodeCrack/package.json","ZSH":"/home/outsider/.oh-my-zsh","LSCOLORS":"Gxfxcxdxbxegedabagacad","NVM_INC":"/home/outsider/.nvm/versions/node/v16.16.0/include/node","npm_config_init_license":"MIT","PAGER":"less","NODE_OPTIONS":"--require /home/outsider/.vscode-server/data/User/workspaceStorage/628e3f19d6239d6a0aed7d5b6f334bf0/ms-vscode.js-debug/bootloader.js ","VSCODE_GIT_ASKPASS_MAIN":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/extensions/git/dist/askpass-main.js","YARN_WRAP_OUTPUT":"false","npm_config_version_tag_prefix":"v","VSCODE_GIT_ASKPASS_NODE":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/node","npm_config_userconfig":"/home/outsider/.npmrc","npm_config_local_prefix":"/home/outsider/github/leetCodeCrack","STRIPE_DIR":"/home/outsider/stripe","P9K_TTY":"old","WSL_DISTRO_NAME":"Ubuntu","COLORTERM":"truecolor","npm_package_devDependencies_typescript":"^4.6.4","npm_package_devDependencies_tailwindcss":"^3.1.7","npm_package_description":"crack leetCode","COLOR":"1","NVM_DIR":"/home/outsider/.nvm","npm_package_devDependencies_react":"^18.1.0","npm_package_devDependencies__types_react_dom":"^18.0.3","npm_package_homepage":"https://github.com/outsider987/leetCodeCrack","npm_config_metrics_registry":"https://registry.yarnpkg.com/","npm_package_devDependencies_ts_loader":"^9.3.0","npm_package_devDependencies__reduxjs_toolkit":"^1.8.5","npm_package_scripts_dev":"webpack serve","LOGNAME":"outsider","WSL_INTEROP":"/run/WSL/10118_interop","NAME":"Code","_":"/mnt/c/Users/t7902/AppData/Roaming/npm/yarn","npm_package_devDependencies_node_sass":"^7.0.1","npm_package_devDependencies_autoprefixer":"^10.4.7","npm_package_dependencies_express":"^4.18.1","npm_config_prefix":"/home/outsider/.nvm/versions/node/v16.16.0","USER_ZDOTDIR":"/home/outsider","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^5.23.0","npm_package_scripts_lint":"npx prettier  src/**/*.{tsx,ts} --write && eslint --fix src/**/*.{tsx,ts} ","npm_config_registry":"https://registry.yarnpkg.com","TERM":"xterm-256color","npm_package_dependencies_path":"^0.12.7","npm_config_cache":"/home/outsider/.npm","npm_package_devDependencies_react_hook_form":"^7.34.2","npm_package_devDependencies_html_webpack_plugin":"^5.5.0","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0","npm_package_scripts_start":"node server.js","npm_config_ignore_scripts":"","npm_package_devDependencies_prettier_plugin_tailwindcss":"^0.1.13","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_dependencies_outsiderreact":"^1.4.2","npm_package_dependencies_axios":"^0.27.2","npm_config_node_gyp":"/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/outsider/github/leetCodeCrack/node_modules/.bin:/home/outsider/github/node_modules/.bin:/home/outsider/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/tmp/yarn--1667841246593-0.2984757099954556:/home/outsider/github/leetCodeCrack/node_modules/.bin:/home/outsider/.config/yarn/link/node_modules/.bin:/home/outsider/.yarn/bin:/home/outsider/.nvm/versions/node/v16.16.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/bin/node-gyp-bin:/home/outsider/.nvm/versions/node/v16.16.0/bin/node_modules/npm/bin/node-gyp-bin:/home/outsider/.fly/bin:/home/outsider/.bun/bin:/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/bin/remote-cli:/home/outsider/.fly/bin:/home/outsider/.bun/bin:/home/outsider/.nvm/versions/node/v16.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/WindowsApps/CanonicalGroupLimited.UbuntuonWindows_2004.2022.1.0_x64__79rhkp1fndgsc:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/xampp/php:/mnt/c/ProgramData/ComposerSetup/bin:/mnt/c/Program Files/PuTTY/:/mnt/c/Users/t7902/AppData/Roaming/nvm:/mnt/c/Program Files/nodejs:/mnt/c/ProgramData/chocolatey/bin:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/OpenJDK/openjdk-11.0.13_8/bin:/mnt/c/Program Files/Git/cmd:/mnt/c/sqlite:/mnt/c/Program Files (x86)/oh-my-posh/bin:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/Users/t7902/.rover/bin:/mnt/c/Users/t7902/AppData/Local/Programs/Python/Python39/Scripts/:/mnt/c/Users/t7902/AppData/Local/Programs/Python/Python39/:/mnt/c/Users/t7902/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/t7902/AppData/Local/GitHubDesktop/bin:/mnt/c/Users/t7902/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/t7902/AppData/Roaming/Composer/vendor/bin:/mnt/c/Program Files/MySQL/MySQL Workbench 8.0:/mnt/c/Program Files/nodejs/tsc:/mnt/c/Users/t7902/AppData/Roaming/npm:/mnt/c/Program Files/OpenSSL-Win64/bin:/mnt/c/Users/t7902/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Users/t7902/AppData/Local/gitkraken/bin:/mnt/c/Users/t7902/AppData/Local/JetBrains/Toolbox/scripts:/mnt/c/Users/t7902/.fly/bin","NODE":"/home/outsider/.nvm/versions/node/v16.16.0/bin/node","npm_package_repository_type":"git","npm_package_name":"leetcodecrack","npm_config_legacy_peer_deps":"true","LANG":"C.UTF-8","VSCODE_INJECTION":"1","npm_package_devDependencies_webpack":"^5.72.1","npm_package_devDependencies_eslint":">=5.16.0","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","TERM_PROGRAM":"vscode","VSCODE_GIT_IPC_HANDLE":"/tmp/vscode-git-1b731c677c.sock","npm_lifecycle_script":"webpack","npm_package_devDependencies_dotenv":"^16.0.1","npm_package_main":"index.tsx","SSH_AUTH_SOCK":"/tmp/ssh-cfKIlcE1jBZz/agent.7688","npm_package_devDependencies_webpack_dev_server":"^4.9.0","npm_package_devDependencies_react_router_dom":"^6.3.0","npm_config_version_git_message":"v%s","SHELL":"/bin/zsh","npm_lifecycle_event":"build","npm_package_devDependencies__types_react":"^18.0.9","npm_package_repository_url":"git+https://github.com/outsider987/leetCodeCrack.git","npm_package_version":"1.0.0","FLYCTL_INSTALL":"/home/outsider/.fly","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"deploy\"],\"original\":[\"deploy\"]}","npm_package_scripts_build":"webpack","npm_package_devDependencies_sass_loader":"^12.6.0","npm_package_devDependencies_eslint_plugin_tailwindcss":"^3.6.1","npm_config_version_git_tag":"true","npm_config_version_git_sign":"","P9K_SSH":"0","npm_package_devDependencies_react_loadable":"^5.5.0","npm_package_devDependencies_fork_ts_checker_webpack_plugin":"^7.2.11","npm_package_license":"ISC","npm_config_strict_ssl":"","BASH_ENV":"/etc/bash.bashrc","VSCODE_INSPECTOR_OPTIONS":":::{\"inspectorIpc\":\"/tmp/node-cdp.21256-1.sock.deferred\",\"deferredMode\":true,\"waitForDebugger\":\"\",\"execPath\":\"/home/outsider/.nvm/versions/node/v16.16.0/bin/node\",\"onlyEntrypoint\":false,\"autoAttachMode\":\"smart\",\"mandatePortTracking\":true,\"aaPatterns\":[\"/home/outsider/github/leetCodeCrack/**\",\"!**/node_modules/**\",\"**/$KNOWN_TOOLS$/**\"]}","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"","npm_package_devDependencies_style_loader":"^3.3.1","npm_config_globalconfig":"/home/outsider/.nvm/versions/node/v16.16.0/etc/npmrc","npm_config_init_module":"/home/outsider/.npm-init.js","PWD":"/home/outsider/github/leetCodeCrack","npm_execpath":"/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/bin/npm-cli.js","NVM_CD_FLAGS":"-q","_P9K_TTY":"/dev/pts/32","ZDOTDIR":"/tmp/outsider-code-zsh","npm_package_devDependencies_source_map_loader":"^3.0.1","npm_package_devDependencies_dotenv_webpack":"^8.0.1","npm_package_devDependencies_css_loader":"^6.7.1","npm_package_author_name":"Victor","npm_config_global_prefix":"/home/outsider/.nvm/versions/node/v16.16.0","npm_package_devDependencies_postcss":"^8.4.13","npm_config_save_prefix":"^","npm_config_ignore_optional":"","npm_command":"run-script","npm_package_devDependencies_react_redux":"^8.0.2","npm_package_devDependencies_mini_css_extract_plugin":"^2.6.0","npm_package_scripts_deploy":"npm run build && gh-pages -d dist","HOSTTYPE":"x86_64","INIT_CWD":"/home/outsider/github/leetCodeCrack","WSLENV":"ELECTRON_RUN_AS_NODE/w:BASH_ENV/u","npm_package_devDependencies_react_dom":"^18.1.0","npm_package_devDependencies_eslint_config_google":"^0.14.0","EDITOR":"vi"}.API_URL}${subPath}`,
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
        baseURL: `${{"npm_package_dependencies_prettier":"^2.6.2","USER":"outsider","npm_package_devDependencies_webpack_cli":"^4.9.2","npm_package_devDependencies_webpack_bundle_analyzer":"^4.5.0","npm_config_version_commit_hooks":"true","npm_config_user_agent":"yarn/1.22.17 npm/? node/v16.16.0 linux x64","npm_package_bugs_url":"https://github.com/outsider987/leetCodeCrack/issues","npm_config_bin_links":"true","BUN_INSTALL":"/home/outsider/.bun","SSH_AGENT_PID":"7689","GIT_ASKPASS":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/extensions/git/dist/askpass.sh","npm_node_execpath":"/home/outsider/.nvm/versions/node/v16.16.0/bin/node","npm_package_devDependencies_gh_pages":"^4.0.0","npm_config_init_version":"1.0.0","SHLVL":"2","npm_config_noproxy":"","HOME":"/home/outsider","OLDPWD":"/home/outsider/github/leetCodeCrack","LESS":"-R","npm_package_devDependencies__typescript_eslint_parser":"^5.23.0","npm_package_devDependencies__types_react_loadable":"^5.5.6","NVM_BIN":"/home/outsider/.nvm/versions/node/v16.16.0/bin","TERM_PROGRAM_VERSION":"1.73.0","VSCODE_IPC_HOOK_CLI":"/tmp/vscode-ipc-48b327fe-aa9c-4485-a056-a270dc370ee2.sock","npm_package_json":"/home/outsider/github/leetCodeCrack/package.json","ZSH":"/home/outsider/.oh-my-zsh","LSCOLORS":"Gxfxcxdxbxegedabagacad","NVM_INC":"/home/outsider/.nvm/versions/node/v16.16.0/include/node","npm_config_init_license":"MIT","PAGER":"less","NODE_OPTIONS":"--require /home/outsider/.vscode-server/data/User/workspaceStorage/628e3f19d6239d6a0aed7d5b6f334bf0/ms-vscode.js-debug/bootloader.js ","VSCODE_GIT_ASKPASS_MAIN":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/extensions/git/dist/askpass-main.js","YARN_WRAP_OUTPUT":"false","npm_config_version_tag_prefix":"v","VSCODE_GIT_ASKPASS_NODE":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/node","npm_config_userconfig":"/home/outsider/.npmrc","npm_config_local_prefix":"/home/outsider/github/leetCodeCrack","STRIPE_DIR":"/home/outsider/stripe","P9K_TTY":"old","WSL_DISTRO_NAME":"Ubuntu","COLORTERM":"truecolor","npm_package_devDependencies_typescript":"^4.6.4","npm_package_devDependencies_tailwindcss":"^3.1.7","npm_package_description":"crack leetCode","COLOR":"1","NVM_DIR":"/home/outsider/.nvm","npm_package_devDependencies_react":"^18.1.0","npm_package_devDependencies__types_react_dom":"^18.0.3","npm_package_homepage":"https://github.com/outsider987/leetCodeCrack","npm_config_metrics_registry":"https://registry.yarnpkg.com/","npm_package_devDependencies_ts_loader":"^9.3.0","npm_package_devDependencies__reduxjs_toolkit":"^1.8.5","npm_package_scripts_dev":"webpack serve","LOGNAME":"outsider","WSL_INTEROP":"/run/WSL/10118_interop","NAME":"Code","_":"/mnt/c/Users/t7902/AppData/Roaming/npm/yarn","npm_package_devDependencies_node_sass":"^7.0.1","npm_package_devDependencies_autoprefixer":"^10.4.7","npm_package_dependencies_express":"^4.18.1","npm_config_prefix":"/home/outsider/.nvm/versions/node/v16.16.0","USER_ZDOTDIR":"/home/outsider","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^5.23.0","npm_package_scripts_lint":"npx prettier  src/**/*.{tsx,ts} --write && eslint --fix src/**/*.{tsx,ts} ","npm_config_registry":"https://registry.yarnpkg.com","TERM":"xterm-256color","npm_package_dependencies_path":"^0.12.7","npm_config_cache":"/home/outsider/.npm","npm_package_devDependencies_react_hook_form":"^7.34.2","npm_package_devDependencies_html_webpack_plugin":"^5.5.0","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0","npm_package_scripts_start":"node server.js","npm_config_ignore_scripts":"","npm_package_devDependencies_prettier_plugin_tailwindcss":"^0.1.13","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_dependencies_outsiderreact":"^1.4.2","npm_package_dependencies_axios":"^0.27.2","npm_config_node_gyp":"/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/outsider/github/leetCodeCrack/node_modules/.bin:/home/outsider/github/node_modules/.bin:/home/outsider/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/tmp/yarn--1667841246593-0.2984757099954556:/home/outsider/github/leetCodeCrack/node_modules/.bin:/home/outsider/.config/yarn/link/node_modules/.bin:/home/outsider/.yarn/bin:/home/outsider/.nvm/versions/node/v16.16.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/bin/node-gyp-bin:/home/outsider/.nvm/versions/node/v16.16.0/bin/node_modules/npm/bin/node-gyp-bin:/home/outsider/.fly/bin:/home/outsider/.bun/bin:/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/bin/remote-cli:/home/outsider/.fly/bin:/home/outsider/.bun/bin:/home/outsider/.nvm/versions/node/v16.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/WindowsApps/CanonicalGroupLimited.UbuntuonWindows_2004.2022.1.0_x64__79rhkp1fndgsc:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/xampp/php:/mnt/c/ProgramData/ComposerSetup/bin:/mnt/c/Program Files/PuTTY/:/mnt/c/Users/t7902/AppData/Roaming/nvm:/mnt/c/Program Files/nodejs:/mnt/c/ProgramData/chocolatey/bin:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/OpenJDK/openjdk-11.0.13_8/bin:/mnt/c/Program Files/Git/cmd:/mnt/c/sqlite:/mnt/c/Program Files (x86)/oh-my-posh/bin:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/Users/t7902/.rover/bin:/mnt/c/Users/t7902/AppData/Local/Programs/Python/Python39/Scripts/:/mnt/c/Users/t7902/AppData/Local/Programs/Python/Python39/:/mnt/c/Users/t7902/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/t7902/AppData/Local/GitHubDesktop/bin:/mnt/c/Users/t7902/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/t7902/AppData/Roaming/Composer/vendor/bin:/mnt/c/Program Files/MySQL/MySQL Workbench 8.0:/mnt/c/Program Files/nodejs/tsc:/mnt/c/Users/t7902/AppData/Roaming/npm:/mnt/c/Program Files/OpenSSL-Win64/bin:/mnt/c/Users/t7902/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Users/t7902/AppData/Local/gitkraken/bin:/mnt/c/Users/t7902/AppData/Local/JetBrains/Toolbox/scripts:/mnt/c/Users/t7902/.fly/bin","NODE":"/home/outsider/.nvm/versions/node/v16.16.0/bin/node","npm_package_repository_type":"git","npm_package_name":"leetcodecrack","npm_config_legacy_peer_deps":"true","LANG":"C.UTF-8","VSCODE_INJECTION":"1","npm_package_devDependencies_webpack":"^5.72.1","npm_package_devDependencies_eslint":">=5.16.0","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","TERM_PROGRAM":"vscode","VSCODE_GIT_IPC_HANDLE":"/tmp/vscode-git-1b731c677c.sock","npm_lifecycle_script":"webpack","npm_package_devDependencies_dotenv":"^16.0.1","npm_package_main":"index.tsx","SSH_AUTH_SOCK":"/tmp/ssh-cfKIlcE1jBZz/agent.7688","npm_package_devDependencies_webpack_dev_server":"^4.9.0","npm_package_devDependencies_react_router_dom":"^6.3.0","npm_config_version_git_message":"v%s","SHELL":"/bin/zsh","npm_lifecycle_event":"build","npm_package_devDependencies__types_react":"^18.0.9","npm_package_repository_url":"git+https://github.com/outsider987/leetCodeCrack.git","npm_package_version":"1.0.0","FLYCTL_INSTALL":"/home/outsider/.fly","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"deploy\"],\"original\":[\"deploy\"]}","npm_package_scripts_build":"webpack","npm_package_devDependencies_sass_loader":"^12.6.0","npm_package_devDependencies_eslint_plugin_tailwindcss":"^3.6.1","npm_config_version_git_tag":"true","npm_config_version_git_sign":"","P9K_SSH":"0","npm_package_devDependencies_react_loadable":"^5.5.0","npm_package_devDependencies_fork_ts_checker_webpack_plugin":"^7.2.11","npm_package_license":"ISC","npm_config_strict_ssl":"","BASH_ENV":"/etc/bash.bashrc","VSCODE_INSPECTOR_OPTIONS":":::{\"inspectorIpc\":\"/tmp/node-cdp.21256-1.sock.deferred\",\"deferredMode\":true,\"waitForDebugger\":\"\",\"execPath\":\"/home/outsider/.nvm/versions/node/v16.16.0/bin/node\",\"onlyEntrypoint\":false,\"autoAttachMode\":\"smart\",\"mandatePortTracking\":true,\"aaPatterns\":[\"/home/outsider/github/leetCodeCrack/**\",\"!**/node_modules/**\",\"**/$KNOWN_TOOLS$/**\"]}","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"","npm_package_devDependencies_style_loader":"^3.3.1","npm_config_globalconfig":"/home/outsider/.nvm/versions/node/v16.16.0/etc/npmrc","npm_config_init_module":"/home/outsider/.npm-init.js","PWD":"/home/outsider/github/leetCodeCrack","npm_execpath":"/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/bin/npm-cli.js","NVM_CD_FLAGS":"-q","_P9K_TTY":"/dev/pts/32","ZDOTDIR":"/tmp/outsider-code-zsh","npm_package_devDependencies_source_map_loader":"^3.0.1","npm_package_devDependencies_dotenv_webpack":"^8.0.1","npm_package_devDependencies_css_loader":"^6.7.1","npm_package_author_name":"Victor","npm_config_global_prefix":"/home/outsider/.nvm/versions/node/v16.16.0","npm_package_devDependencies_postcss":"^8.4.13","npm_config_save_prefix":"^","npm_config_ignore_optional":"","npm_command":"run-script","npm_package_devDependencies_react_redux":"^8.0.2","npm_package_devDependencies_mini_css_extract_plugin":"^2.6.0","npm_package_scripts_deploy":"npm run build && gh-pages -d dist","HOSTTYPE":"x86_64","INIT_CWD":"/home/outsider/github/leetCodeCrack","WSLENV":"ELECTRON_RUN_AS_NODE/w:BASH_ENV/u","npm_package_devDependencies_react_dom":"^18.1.0","npm_package_devDependencies_eslint_config_google":"^0.14.0","EDITOR":"vi"}.API_URL}${subPath}`,
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
                    const rs = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${{"npm_package_dependencies_prettier":"^2.6.2","USER":"outsider","npm_package_devDependencies_webpack_cli":"^4.9.2","npm_package_devDependencies_webpack_bundle_analyzer":"^4.5.0","npm_config_version_commit_hooks":"true","npm_config_user_agent":"yarn/1.22.17 npm/? node/v16.16.0 linux x64","npm_package_bugs_url":"https://github.com/outsider987/leetCodeCrack/issues","npm_config_bin_links":"true","BUN_INSTALL":"/home/outsider/.bun","SSH_AGENT_PID":"7689","GIT_ASKPASS":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/extensions/git/dist/askpass.sh","npm_node_execpath":"/home/outsider/.nvm/versions/node/v16.16.0/bin/node","npm_package_devDependencies_gh_pages":"^4.0.0","npm_config_init_version":"1.0.0","SHLVL":"2","npm_config_noproxy":"","HOME":"/home/outsider","OLDPWD":"/home/outsider/github/leetCodeCrack","LESS":"-R","npm_package_devDependencies__typescript_eslint_parser":"^5.23.0","npm_package_devDependencies__types_react_loadable":"^5.5.6","NVM_BIN":"/home/outsider/.nvm/versions/node/v16.16.0/bin","TERM_PROGRAM_VERSION":"1.73.0","VSCODE_IPC_HOOK_CLI":"/tmp/vscode-ipc-48b327fe-aa9c-4485-a056-a270dc370ee2.sock","npm_package_json":"/home/outsider/github/leetCodeCrack/package.json","ZSH":"/home/outsider/.oh-my-zsh","LSCOLORS":"Gxfxcxdxbxegedabagacad","NVM_INC":"/home/outsider/.nvm/versions/node/v16.16.0/include/node","npm_config_init_license":"MIT","PAGER":"less","NODE_OPTIONS":"--require /home/outsider/.vscode-server/data/User/workspaceStorage/628e3f19d6239d6a0aed7d5b6f334bf0/ms-vscode.js-debug/bootloader.js ","VSCODE_GIT_ASKPASS_MAIN":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/extensions/git/dist/askpass-main.js","YARN_WRAP_OUTPUT":"false","npm_config_version_tag_prefix":"v","VSCODE_GIT_ASKPASS_NODE":"/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/node","npm_config_userconfig":"/home/outsider/.npmrc","npm_config_local_prefix":"/home/outsider/github/leetCodeCrack","STRIPE_DIR":"/home/outsider/stripe","P9K_TTY":"old","WSL_DISTRO_NAME":"Ubuntu","COLORTERM":"truecolor","npm_package_devDependencies_typescript":"^4.6.4","npm_package_devDependencies_tailwindcss":"^3.1.7","npm_package_description":"crack leetCode","COLOR":"1","NVM_DIR":"/home/outsider/.nvm","npm_package_devDependencies_react":"^18.1.0","npm_package_devDependencies__types_react_dom":"^18.0.3","npm_package_homepage":"https://github.com/outsider987/leetCodeCrack","npm_config_metrics_registry":"https://registry.yarnpkg.com/","npm_package_devDependencies_ts_loader":"^9.3.0","npm_package_devDependencies__reduxjs_toolkit":"^1.8.5","npm_package_scripts_dev":"webpack serve","LOGNAME":"outsider","WSL_INTEROP":"/run/WSL/10118_interop","NAME":"Code","_":"/mnt/c/Users/t7902/AppData/Roaming/npm/yarn","npm_package_devDependencies_node_sass":"^7.0.1","npm_package_devDependencies_autoprefixer":"^10.4.7","npm_package_dependencies_express":"^4.18.1","npm_config_prefix":"/home/outsider/.nvm/versions/node/v16.16.0","USER_ZDOTDIR":"/home/outsider","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^5.23.0","npm_package_scripts_lint":"npx prettier  src/**/*.{tsx,ts} --write && eslint --fix src/**/*.{tsx,ts} ","npm_config_registry":"https://registry.yarnpkg.com","TERM":"xterm-256color","npm_package_dependencies_path":"^0.12.7","npm_config_cache":"/home/outsider/.npm","npm_package_devDependencies_react_hook_form":"^7.34.2","npm_package_devDependencies_html_webpack_plugin":"^5.5.0","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0","npm_package_scripts_start":"node server.js","npm_config_ignore_scripts":"","npm_package_devDependencies_prettier_plugin_tailwindcss":"^0.1.13","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_dependencies_outsiderreact":"^1.4.2","npm_package_dependencies_axios":"^0.27.2","npm_config_node_gyp":"/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/outsider/github/leetCodeCrack/node_modules/.bin:/home/outsider/github/node_modules/.bin:/home/outsider/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/tmp/yarn--1667841246593-0.2984757099954556:/home/outsider/github/leetCodeCrack/node_modules/.bin:/home/outsider/.config/yarn/link/node_modules/.bin:/home/outsider/.yarn/bin:/home/outsider/.nvm/versions/node/v16.16.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/bin/node-gyp-bin:/home/outsider/.nvm/versions/node/v16.16.0/bin/node_modules/npm/bin/node-gyp-bin:/home/outsider/.fly/bin:/home/outsider/.bun/bin:/home/outsider/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/bin/remote-cli:/home/outsider/.fly/bin:/home/outsider/.bun/bin:/home/outsider/.nvm/versions/node/v16.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/WindowsApps/CanonicalGroupLimited.UbuntuonWindows_2004.2022.1.0_x64__79rhkp1fndgsc:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/xampp/php:/mnt/c/ProgramData/ComposerSetup/bin:/mnt/c/Program Files/PuTTY/:/mnt/c/Users/t7902/AppData/Roaming/nvm:/mnt/c/Program Files/nodejs:/mnt/c/ProgramData/chocolatey/bin:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/OpenJDK/openjdk-11.0.13_8/bin:/mnt/c/Program Files/Git/cmd:/mnt/c/sqlite:/mnt/c/Program Files (x86)/oh-my-posh/bin:/mnt/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/mnt/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/Users/t7902/.rover/bin:/mnt/c/Users/t7902/AppData/Local/Programs/Python/Python39/Scripts/:/mnt/c/Users/t7902/AppData/Local/Programs/Python/Python39/:/mnt/c/Users/t7902/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/t7902/AppData/Local/GitHubDesktop/bin:/mnt/c/Users/t7902/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/t7902/AppData/Roaming/Composer/vendor/bin:/mnt/c/Program Files/MySQL/MySQL Workbench 8.0:/mnt/c/Program Files/nodejs/tsc:/mnt/c/Users/t7902/AppData/Roaming/npm:/mnt/c/Program Files/OpenSSL-Win64/bin:/mnt/c/Users/t7902/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Users/t7902/AppData/Local/gitkraken/bin:/mnt/c/Users/t7902/AppData/Local/JetBrains/Toolbox/scripts:/mnt/c/Users/t7902/.fly/bin","NODE":"/home/outsider/.nvm/versions/node/v16.16.0/bin/node","npm_package_repository_type":"git","npm_package_name":"leetcodecrack","npm_config_legacy_peer_deps":"true","LANG":"C.UTF-8","VSCODE_INJECTION":"1","npm_package_devDependencies_webpack":"^5.72.1","npm_package_devDependencies_eslint":">=5.16.0","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","TERM_PROGRAM":"vscode","VSCODE_GIT_IPC_HANDLE":"/tmp/vscode-git-1b731c677c.sock","npm_lifecycle_script":"webpack","npm_package_devDependencies_dotenv":"^16.0.1","npm_package_main":"index.tsx","SSH_AUTH_SOCK":"/tmp/ssh-cfKIlcE1jBZz/agent.7688","npm_package_devDependencies_webpack_dev_server":"^4.9.0","npm_package_devDependencies_react_router_dom":"^6.3.0","npm_config_version_git_message":"v%s","SHELL":"/bin/zsh","npm_lifecycle_event":"build","npm_package_devDependencies__types_react":"^18.0.9","npm_package_repository_url":"git+https://github.com/outsider987/leetCodeCrack.git","npm_package_version":"1.0.0","FLYCTL_INSTALL":"/home/outsider/.fly","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"deploy\"],\"original\":[\"deploy\"]}","npm_package_scripts_build":"webpack","npm_package_devDependencies_sass_loader":"^12.6.0","npm_package_devDependencies_eslint_plugin_tailwindcss":"^3.6.1","npm_config_version_git_tag":"true","npm_config_version_git_sign":"","P9K_SSH":"0","npm_package_devDependencies_react_loadable":"^5.5.0","npm_package_devDependencies_fork_ts_checker_webpack_plugin":"^7.2.11","npm_package_license":"ISC","npm_config_strict_ssl":"","BASH_ENV":"/etc/bash.bashrc","VSCODE_INSPECTOR_OPTIONS":":::{\"inspectorIpc\":\"/tmp/node-cdp.21256-1.sock.deferred\",\"deferredMode\":true,\"waitForDebugger\":\"\",\"execPath\":\"/home/outsider/.nvm/versions/node/v16.16.0/bin/node\",\"onlyEntrypoint\":false,\"autoAttachMode\":\"smart\",\"mandatePortTracking\":true,\"aaPatterns\":[\"/home/outsider/github/leetCodeCrack/**\",\"!**/node_modules/**\",\"**/$KNOWN_TOOLS$/**\"]}","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"","npm_package_devDependencies_style_loader":"^3.3.1","npm_config_globalconfig":"/home/outsider/.nvm/versions/node/v16.16.0/etc/npmrc","npm_config_init_module":"/home/outsider/.npm-init.js","PWD":"/home/outsider/github/leetCodeCrack","npm_execpath":"/home/outsider/.nvm/versions/node/v16.16.0/lib/node_modules/npm/bin/npm-cli.js","NVM_CD_FLAGS":"-q","_P9K_TTY":"/dev/pts/32","ZDOTDIR":"/tmp/outsider-code-zsh","npm_package_devDependencies_source_map_loader":"^3.0.1","npm_package_devDependencies_dotenv_webpack":"^8.0.1","npm_package_devDependencies_css_loader":"^6.7.1","npm_package_author_name":"Victor","npm_config_global_prefix":"/home/outsider/.nvm/versions/node/v16.16.0","npm_package_devDependencies_postcss":"^8.4.13","npm_config_save_prefix":"^","npm_config_ignore_optional":"","npm_command":"run-script","npm_package_devDependencies_react_redux":"^8.0.2","npm_package_devDependencies_mini_css_extract_plugin":"^2.6.0","npm_package_scripts_deploy":"npm run build && gh-pages -d dist","HOSTTYPE":"x86_64","INIT_CWD":"/home/outsider/github/leetCodeCrack","WSLENV":"ELECTRON_RUN_AS_NODE/w:BASH_ENV/u","npm_package_devDependencies_react_dom":"^18.1.0","npm_package_devDependencies_eslint_config_google":"^0.14.0","EDITOR":"vi"}.API_URL}auth/refresh`, {
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
//# sourceMappingURL=js/e27a3aeeae13ae459ad9.js.map