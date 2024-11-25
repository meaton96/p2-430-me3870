"use strict";
(self["webpackChunkkitchen_sync"] = self["webpackChunkkitchen_sync"] || []).push([["client_shared_BottomLeftToast_jsx"],{

/***/ "./client/shared/BottomLeftToast.jsx":
/*!*******************************************!*\
  !*** ./client/shared/BottomLeftToast.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/UserContext */ "./client/utils/UserContext.js");



var BottomLeftToast = function BottomLeftToast() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_UserContext__WEBPACK_IMPORTED_MODULE_1__.UserContext),
    blToastMessage = _useContext.blToastMessage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bottom-left-toast "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, blToastMessage));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomLeftToast);

/***/ })

}]);
//# sourceMappingURL=client_shared_BottomLeftToast_jsxBundle.js.map