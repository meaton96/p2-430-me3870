"use strict";
(self["webpackChunkkitchen_sync"] = self["webpackChunkkitchen_sync"] || []).push([["client_nav_Nav_jsx"],{

/***/ "./client/nav/DesktopNav.jsx":
/*!***********************************!*\
  !*** ./client/nav/DesktopNav.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_UserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/UserContext.js */ "./client/utils/UserContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _DesktopNavButton_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesktopNavButton.jsx */ "./client/nav/DesktopNavButton.jsx");






var DesktopNav = function DesktopNav(_ref) {
  var avatar = _ref.avatar,
    icons = _ref.icons;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_UserContext_js__WEBPACK_IMPORTED_MODULE_1__.UserContext),
    isBackButtonActive = _useContext.isBackButtonActive,
    handleBackButtonClicked = _useContext.handleBackButtonClicked,
    setNewPostModalActive = _useContext.setNewPostModalActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-container px-3 is-hidden-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-avatar hide-at-1100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: "avatar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: avatar,
    alt: "avatar",
    className: "avatar-image is-pointer"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-back-btn-container ".concat(isBackButtonActive ? '' : 'is-invisible')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBackButtonClicked
  }, '<'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "hide-on-large-desktop "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/profile",
    className: "nav-avatar-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: avatar,
    alt: "avatar",
    className: "avatar-image"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopNavButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: icons.faHouse,
    text: "Home",
    to: "/feed"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopNavButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: icons.faUser,
    text: "My Profile",
    to: "/profile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopNavButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: icons.faSearch,
    text: "Search Recipes",
    to: "/recipes/search"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopNavButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: icons.faUtensils,
    text: "My Recipes",
    to: "/recipes"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopNavButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: icons.faDoorClosed,
    text: "My Pantry",
    to: "/pantry"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopNavButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: icons.faGear,
    text: "Account Settings",
    to: "/account-settings"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "hide-on-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setNewPostModalActive(true);
    },
    className: "post-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: icons.faPenToSquare
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hide-at-1100"
  }, "New Post")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopNav);

/***/ }),

/***/ "./client/nav/DesktopNavButton.jsx":
/*!*****************************************!*\
  !*** ./client/nav/DesktopNavButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



var DesktopNavButton = function DesktopNavButton(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    to = _ref.to,
    addClass = _ref.addClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: to,
    className: addClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hide-at-1100"
  }, text)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopNavButton);

/***/ }),

/***/ "./client/nav/MobileNav.jsx":
/*!**********************************!*\
  !*** ./client/nav/MobileNav.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _MobileNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileNavButton.jsx */ "./client/nav/MobileNavButton.jsx");



var MobileNav = function MobileNav(_ref) {
  var icons = _ref.icons,
    setIsNavModalOpen = _ref.setIsNavModalOpen,
    avatar = _ref.avatar;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-modal",
    onClick: function onClick() {
      return setIsNavModalOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "close-modal",
    onClick: function onClick() {
      return setIsNavModalOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: icons.faTimes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: icons.faHouse,
    setIsNavModalOpen: setIsNavModalOpen,
    to: "/feed"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: icons.faUser,
    setIsNavModalOpen: setIsNavModalOpen,
    to: "/feed"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: icons.faSearch,
    setIsNavModalOpen: setIsNavModalOpen,
    to: "/recipes/search"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: icons.faUtensils,
    setIsNavModalOpen: setIsNavModalOpen,
    to: "/recipes"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: icons.faDoorClosed,
    setIsNavModalOpen: setIsNavModalOpen,
    to: "/pantry"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNavButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: icons.faGear,
    setIsNavModalOpen: setIsNavModalOpen,
    to: "/account-settings"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);

/***/ }),

/***/ "./client/nav/MobileNavButton.jsx":
/*!****************************************!*\
  !*** ./client/nav/MobileNavButton.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



var MobileNavButton = function MobileNavButton(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    to = _ref.to,
    addClass = _ref.addClass,
    setIsNavModalOpen = _ref.setIsNavModalOpen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    onClick: function onClick() {
      setIsNavModalOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: to,
    className: addClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: icon
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNavButton);

/***/ }),

/***/ "./client/nav/Nav.jsx":
/*!****************************!*\
  !*** ./client/nav/Nav.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _DesktopNav_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopNav.jsx */ "./client/nav/DesktopNav.jsx");
/* harmony import */ var _MobileNav_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileNav.jsx */ "./client/nav/MobileNav.jsx");
/* harmony import */ var _utils_UserContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/UserContext.js */ "./client/utils/UserContext.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var Nav = function Nav() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isNavModalOpen = _useState2[0],
    setIsNavModalOpen = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_UserContext_js__WEBPACK_IMPORTED_MODULE_4__.UserContext),
    avatar = _useContext.avatar;
  var icons = {
    faHouse: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHouse,
    faUser: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser,
    faUtensils: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUtensils,
    faDoorClosed: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faDoorClosed,
    faGear: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGear,
    faPenToSquare: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPenToSquare,
    faTimes: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimes,
    faSearch: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSearch
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "hamburger",
    onClick: function onClick() {
      return setIsNavModalOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DesktopNav_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    avatar: avatar
    //setNewPostModalActive={setNewPostModalActive}
    ,
    icons: icons
  }), isNavModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNav_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icons: icons,
    setIsNavModalOpen: setIsNavModalOpen,
    avatar: avatar
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ })

}]);
//# sourceMappingURL=client_nav_Nav_jsxBundle.js.map