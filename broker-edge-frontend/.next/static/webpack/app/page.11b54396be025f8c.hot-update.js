"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Listings.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Listings.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Listings)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Listings(param) {\n    let { initialData } = param;\n    _s();\n    const [listings, setListings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: listings.map((listing, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-gray-300 p-5 rounded-xl relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-lg mb-2\",\n                        children: listing.title\n                    }, void 0, false, {\n                        fileName: \"/Users/kimsinton/src/broker-edge/src/app/components/Listings.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8\",\n                        children: [\n                            listing.description.substring(0, 330),\n                            \".. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                className: \"text-blue-600 text-decoration-line\",\n                                children: \"more >>\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kimsinton/src/broker-edge/src/app/components/Listings.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 88\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kimsinton/src/broker-edge/src/app/components/Listings.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-0 bottom-0 rounded-br-xl rounded-tl bg-[#ededed] py-1 px-3\",\n                        children: [\n                            \"$\",\n                            Math.round(listing.price / 1000),\n                            \"k\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kimsinton/src/broker-edge/src/app/components/Listings.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/kimsinton/src/broker-edge/src/app/components/Listings.tsx\",\n                lineNumber: 13,\n                columnNumber: 29\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(Listings, \"Zx2PsrJXe30C0TNIX+Tl/b+pBs4=\");\n_c = Listings;\nvar _c;\n$RefreshReg$(_c, \"Listings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBR3pCLFNBQVNFLFNBQVMsS0FBa0Q7UUFBbEQsRUFBQ0MsV0FBVyxFQUFzQyxHQUFsRDs7SUFFN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDRTtJQUV6QyxxQkFDSTtrQkFFUUMsU0FBU0UsR0FBRyxDQUFDLENBQUNDLFNBQTJCQztZQUNyQyxxQkFBUSw4REFBQ0M7Z0JBRUxDLFdBQVU7O2tDQUVWLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBMEJILFFBQVFJLEtBQUs7Ozs7OztrQ0FDdEQsOERBQUNGO3dCQUFJQyxXQUFVOzs0QkFBUUgsUUFBUUssV0FBVyxDQUFDQyxTQUFTLENBQUMsR0FBRTs0QkFBSzswQ0FBRyw4REFBQ0M7Z0NBQUVDLE1BQUs7Z0NBQUdMLFdBQVU7MENBQXFDOzs7Ozs7NEJBQVc7Ozs7Ozs7a0NBQ3BJLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQTRFOzRCQUFFTSxLQUFLQyxLQUFLLENBQUNWLFFBQVFXLEtBQUssR0FBRzs0QkFBTTs7Ozs7Ozs7ZUFMekhWOzs7OztRQU9iOztBQUloQjtHQXBCd0JOO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMva2ltc2ludG9uL3NyYy9icm9rZXItZWRnZS9zcmMvYXBwL2NvbXBvbmVudHMvTGlzdGluZ3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0aW5nSW50ZXJmYWNlIGZyb20gXCIuLi90eXBlcy9MaXN0aW5nSW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RpbmdzKHtpbml0aWFsRGF0YX0gOiB7IGluaXRpYWxEYXRhOiBMaXN0aW5nSW50ZXJmYWNlW119ICkge1xuXG4gICAgY29uc3QgW2xpc3RpbmdzLCBzZXRMaXN0aW5nc10gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3RpbmdzLm1hcCgobGlzdGluZzogTGlzdGluZ0ludGVyZmFjZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTUgcm91bmRlZC14bCByZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgbWItMlwiPntsaXN0aW5nLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+e2xpc3RpbmcuZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsMzMwKX0uLiA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB0ZXh0LWRlY29yYXRpb24tbGluZVwiPm1vcmUgPj48L2E+LjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIGJvdHRvbS0wIHJvdW5kZWQtYnIteGwgcm91bmRlZC10bCBiZy1bI2VkZWRlZF0gcHktMSBweC0zXCI+JHtNYXRoLnJvdW5kKGxpc3RpbmcucHJpY2UgLyAxMDAwKX1rPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpc3RpbmdzIiwiaW5pdGlhbERhdGEiLCJsaXN0aW5ncyIsInNldExpc3RpbmdzIiwibWFwIiwibGlzdGluZyIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1YnN0cmluZyIsImEiLCJocmVmIiwiTWF0aCIsInJvdW5kIiwicHJpY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Listings.tsx\n"));

/***/ })

});