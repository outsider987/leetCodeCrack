"use strict";
(self["webpackChunkleetcodecrack"] = self["webpackChunkleetcodecrack"] || []).push([["src_pages_Home_Profile_index_tsx"],{

/***/ "./src/components/Employment.tsx":
/*!***************************************!*\
  !*** ./src/components/Employment.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Employment = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-y-3 text-white" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full justify-between lg:max-w-[20vw]" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-gray-400" },
                props.startYeat,
                "-",
                props.endYear),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "block w-1 bg-white/60" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, props.company_name)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            " ",
            props.title),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "list-inside list-disc space-y-1  " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                "Skill:",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "break-words leading-6 text-blue-400" }, props.skill)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                "Responsible:",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: " mt-1 list-inside list-disc space-y-1 leading-6 transition  delay-150 duration-300 ease-in-out lg:hover:scale-110" }, props.responsible.map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "font-light text-gray-400" },
                    item.content,
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { target: "blank", className: " font-semibold text-blue-800", href: item.link }, item.link !== `` && '(Link)')))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Employment);


/***/ }),

/***/ "./src/pages/Home/Profile/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/Home/Profile/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/LayoutDivider */ "./src/components/LayoutDivider.tsx");
/* harmony import */ var _components_Employment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Employment */ "./src/components/Employment.tsx");



const Profile = () => {
    const list = [
        {
            skill: 'CI/CD, javascript,React,SSR,SPA,Ubuntu,SPA,AWS,RWD',
            endYear: 'Still',
            startYeat: '2022.02',
            responsible: [
                { content: `from scratch build CI/CD achieve auto deployment`, link: `` },
                {
                    content: `refactor React class to functional `,
                    link: ``,
                },
                {
                    content: `revamp and maintenance clinic CMS system`,
                    link: ``,
                },
                { content: `refactor project and optimize api loading`, link: `` },
                {
                    content: ` user upload files categeory by user id in S3`,
                    link: ``,
                },
                {
                    content: ` maintenance wordpress`,
                    link: ``,
                },
                {
                    content: ` review code and maintenance code quality`,
                    link: ``,
                },
                {
                    content: `maintenance landing page "standardlife"`,
                    link: `https://member.mediconcen.com/en`,
                },
            ],
            company_name: `MEDICONCEN`,
            title: `Full Stack`,
        },
        {
            skill: 'CI/CD, Typescript,Vue,SSR,SPA,nginx,Ubuntu,AWD,Click UP,AWS,RWD',
            endYear: '2022.02',
            startYeat: '2021.07',
            responsible: [
                {
                    content: `official landing page from scratch`,
                    link: `https://paradromix.com/`,
                },
                { content: `CMS system from scratch`, link: `` },
                {
                    content: `write tech document for colleague and share tech from scratch`,
                    link: ``,
                },
                {
                    content: `write tech document for colleague and share tech`,
                    link: ``,
                },
                {
                    content: `Eco2 landing page from scratch`,
                    link: `https://eco2.eco/`,
                },
            ],
            company_name: `PARADROMIX`,
            title: `Frontend Engineer`,
        },
        {
            skill: 'C++,MFC,Typescript ,Angular,opencv,SPA,JIRA,Opencv',
            endYear: '2021.07',
            startYeat: '2018.01',
            responsible: [
                {
                    content: `survey task requirments and estimate effort on the manage platform(Jira)`,
                    link: ``,
                },
                {
                    content: `corwok with PM and UI/UX and recommand easy way to hit the goal`,
                    link: ``,
                },
                {
                    content: `apply fronted tech to desktop application`,
                    link: ``,
                },
            ],
            company_name: `ULICKTEK`,
            title: `Soft Ware Engineer`,
        },
    ];
    const name = `CHANG YAO SIAN ( V i c t o r )`;
    const contentDescr = `Hi this is Victor, In my college I was majors medical chemistry
  ,but I found the programing is interesting stuff I never met ,so
  I start to learning computer science improve my programing skill
  and luckily I got the software engineer on my currently job, I
  wish I could be a Influential person on the IT`;
    const content = {
        desktop: () => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex animate-fade_in flex-col space-y-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "  flex items-center justify-around space-x-6 lg:max-w-[70vw]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-[15vw] rounded-full", src: __webpack_require__(/*! ~/assets/img/me.jpg */ "./src/assets/img/me.jpg") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full flex-col space-y-3 text-white" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-3xl font-bold" }, name),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " font-light leading-[1.5rem] tracking-wide text-gray-400" }, contentDescr),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://micro-react.herokuapp.com/" })))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex max-h-[50vh] min-h-[50vh] max-w-[75vw] flex-col space-y-6 overflow-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-2xl font-bold text-white" }, " EMPLOYMENT"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-10 grid grid-cols-2 gap-6" }, list.map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Employment__WEBPACK_IMPORTED_MODULE_2__["default"], { ...item })))))));
        },
        mobile: () => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "animate-fade_in overflow-auto opacity-100" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col space-y-4 sm:mr-2 " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " flex flex-col items-center justify-around space-x-6 lg:max-w-[70vw]" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-[15vw] rounded-full", src: __webpack_require__(/*! ~/assets/img/me.jpg */ "./src/assets/img/me.jpg") }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full flex-col space-y-3 text-white" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-center text-xl font-bold" }, name),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "font-light leading-[1.5rem] tracking-wide text-gray-400" }, contentDescr),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://micro-react.herokuapp.com/" })))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-[50vh] flex-col space-y-6 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-2xl font-bold text-white" }, " EMPLOYMENT"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col gap-6 " }, list.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Employment__WEBPACK_IMPORTED_MODULE_2__["default"], { key: index, ...item }))))))));
        },
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LayoutDivider__WEBPACK_IMPORTED_MODULE_1__["default"], { ...content });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);


/***/ }),

/***/ "./src/assets/img/me.jpg":
/*!*******************************!*\
  !*** ./src/assets/img/me.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/img/me.af2f25858a0ff2c5b2b6.jpg";

/***/ })

}]);
//# sourceMappingURL=js/e8dfab72bf39a2f6f20f.js.map