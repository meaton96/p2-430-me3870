"use strict";
(self["webpackChunkkitchen_sync"] = self["webpackChunkkitchen_sync"] || []).push([["client_outlets_Profile_jsx"],{

/***/ "./client/feeds/FeedPost.jsx":
/*!***********************************!*\
  !*** ./client/feeds/FeedPost.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_UserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/UserContext.js */ "./client/utils/UserContext.js");
/* harmony import */ var _shared_FeedPostFooter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/FeedPostFooter.jsx */ "./client/shared/FeedPostFooter.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _hooks_usePostInteractions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/usePostInteractions.js */ "./client/hooks/usePostInteractions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var FeedPost = function FeedPost(_ref) {
  var post = _ref.post;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("/assets/img/avatar-grey-small.png"),
    _useState2 = _slicedToArray(_useState, 2),
    avatar = _useState2[0],
    setAvatar = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_UserContext_js__WEBPACK_IMPORTED_MODULE_1__.UserContext),
    setIsBackButtonActive = _useContext.setIsBackButtonActive;
  var _usePostInteractions = (0,_hooks_usePostInteractions_js__WEBPACK_IMPORTED_MODULE_3__["default"])(post._id),
    likes = _usePostInteractions.likes,
    shares = _usePostInteractions.shares,
    liked = _usePostInteractions.liked,
    shared = _usePostInteractions.shared,
    setLikes = _usePostInteractions.setLikes,
    setShares = _usePostInteractions.setShares,
    setLiked = _usePostInteractions.setLiked,
    setShared = _usePostInteractions.setShared;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var getUserAvatar = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, resJson;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("/getAvatarByUsername/".concat(post.author));
            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();
            case 6:
              resJson = _context.sent;
              if (resJson.avatar) {
                setAvatar(resJson.avatar);
              }
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error("Error getting avatar:", _context.t0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10]]);
      }));
      return function getUserAvatar() {
        return _ref2.apply(this, arguments);
      };
    }();
    getUserAvatar();
  }, []);
  var calculateAge = function calculateAge(createdAt) {
    var now = new Date();
    var createdDate = new Date(createdAt);
    var diffInSeconds = Math.floor((now - createdDate) / 1000);
    if (diffInSeconds < 60) return "".concat(diffInSeconds, " s");
    if (diffInSeconds < 3600) return "".concat(Math.floor(diffInSeconds / 60), " m");
    if (diffInSeconds < 86400) return "".concat(Math.floor(diffInSeconds / 3600), " h");
    return "".concat(Math.floor(diffInSeconds / 86400), " d");
  };
  var age = calculateAge(post.createdDate);

  //console.log(post.media);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "post-container px-4 py-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-narrow mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: "image is-48x48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: avatar,
    alt: "avatar"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/profile/".concat(post.author, "/post/").concat(post._id),
    className: "post-link",
    onClick: function onClick() {
      return setIsBackButtonActive(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "has-text-weight-bold"
  }, "@", post.author), " - ", age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, post.content.split("\n").map(function (line, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: index
    }, line, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex is-align-items-center is-justify-content-start my-1"
  }, post.media && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "post-media",
    src: post.media,
    alt: "media"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_FeedPostFooter_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    post: post,
    likes: likes,
    shares: shares,
    liked: liked,
    shared: shared,
    setLikes: setLikes,
    setShares: setShares,
    setLiked: setLiked,
    setShared: setShared
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPost);

/***/ }),

/***/ "./client/hooks/simplePostProvider.js":
/*!********************************************!*\
  !*** ./client/hooks/simplePostProvider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteSimplePost: () => (/* binding */ deleteSimplePost),
/* harmony export */   getCommentsForPost: () => (/* binding */ getCommentsForPost),
/* harmony export */   sendCommentOnPost: () => (/* binding */ sendCommentOnPost),
/* harmony export */   sendSimplePost: () => (/* binding */ sendSimplePost)
/* harmony export */ });
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helper.js */ "./client/utils/helper.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_helper_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var sendSimplePost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(post) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _utils_helper_js__WEBPACK_IMPORTED_MODULE_0___default().sendPost("/simplePost", post);
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error posting:", _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function sendSimplePost(_x) {
    return _ref.apply(this, arguments);
  };
}();
var sendCommentOnPost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(comment, postId) {
    var res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _utils_helper_js__WEBPACK_IMPORTED_MODULE_0___default().sendPost("/addComment", {
            postId: postId,
            content: comment
          });
        case 3:
          res = _context2.sent;
          console.log("Result of sendCommentOnPost:", res);
          return _context2.abrupt("return", res);
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error("Error commenting on post:", _context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function sendCommentOnPost(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getCommentsForPost = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(postId, skip, limit) {
    var res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _utils_helper_js__WEBPACK_IMPORTED_MODULE_0___default().sendGet("/getCommentsForPost/".concat(postId, "?limit=").concat(limit, "&skip=").concat(skip));
        case 3:
          res = _context3.sent;
          return _context3.abrupt("return", res);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error("Error getting comments:", _context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getCommentsForPost(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteSimplePost = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(postId) {
    var res, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          console.log("deleteSimplePost called with postId: ".concat(postId));
          _context4.prev = 1;
          _context4.next = 4;
          return fetch("/simplePost/".concat(postId), {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          });
        case 4:
          res = _context4.sent;
          _context4.next = 7;
          return res.json();
        case 7:
          result = _context4.sent;
          return _context4.abrupt("return", result);
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          console.error("Error deleting post:", _context4.t0);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteSimplePost(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./client/hooks/usePostInteractions.js":
/*!*********************************************!*\
  !*** ./client/hooks/usePostInteractions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helper.js */ "./client/utils/helper.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_helper_js__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var usePostInteractions = function usePostInteractions(postId) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    likes = _useState2[0],
    setLikes = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    shares = _useState4[0],
    setShares = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    liked = _useState6[0],
    setLiked = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    shared = _useState8[0],
    setShared = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    comments = _useState10[0],
    setComments = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    commented = _useState12[0],
    setCommented = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var getInteractions = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, likesData, sharesData, commentsData, likedData, sharedData, commentedData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Promise.all([_utils_helper_js__WEBPACK_IMPORTED_MODULE_1___default().sendGet("/getNumLikesForPost/".concat(postId)), _utils_helper_js__WEBPACK_IMPORTED_MODULE_1___default().sendGet("/getNumSharesForPost/".concat(postId)), _utils_helper_js__WEBPACK_IMPORTED_MODULE_1___default().sendGet("/countCommentsForPost/".concat(postId)), _utils_helper_js__WEBPACK_IMPORTED_MODULE_1___default().sendGet("/simplePost/".concat(postId, "/has-liked/")), _utils_helper_js__WEBPACK_IMPORTED_MODULE_1___default().sendGet("/simplePost/".concat(postId, "/has-shared/")), _utils_helper_js__WEBPACK_IMPORTED_MODULE_1___default().sendGet("/simplePost/".concat(postId, "/has-commented/"))]);
            case 3:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 6);
              likesData = _yield$Promise$all2[0];
              sharesData = _yield$Promise$all2[1];
              commentsData = _yield$Promise$all2[2];
              likedData = _yield$Promise$all2[3];
              sharedData = _yield$Promise$all2[4];
              commentedData = _yield$Promise$all2[5];
              // console.log('commentsData:', commentsData);
              //  console.log('commentedData:', commentedData);

              setLikes(likesData.count || 0);
              setShares(sharesData.count || 0);
              setComments(commentsData.count || 0);
              setLiked(likedData.hasLiked || false);
              setShared(sharedData.hasShared || false);
              setCommented(commentedData.hasCommented || false);
              _context.next = 22;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching post interactions:', _context.t0);
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 19]]);
      }));
      return function getInteractions() {
        return _ref.apply(this, arguments);
      };
    }();
    getInteractions();
  }, [postId]);
  return {
    likes: likes,
    shares: shares,
    liked: liked,
    shared: shared,
    comments: comments,
    commented: commented,
    setLikes: setLikes,
    setShares: setShares,
    setLiked: setLiked,
    setShared: setShared,
    setComments: setComments,
    setCommented: setCommented
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePostInteractions);

/***/ }),

/***/ "./client/outlets/PostView.jsx":
/*!*************************************!*\
  !*** ./client/outlets/PostView.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _posts_SinglePost_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/SinglePost.jsx */ "./client/posts/SinglePost.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helper.js */ "./client/utils/helper.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_helper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/UserContext */ "./client/utils/UserContext.js");
/* harmony import */ var _post_view_CommentBox_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-view/CommentBox.jsx */ "./client/post-view/CommentBox.jsx");
/* harmony import */ var _post_view_Comments_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post-view/Comments.jsx */ "./client/post-view/Comments.jsx");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var PostView = function PostView() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    post = _useState2[0],
    setPost = _useState2[1];
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
    username = _useParams.username,
    postId = _useParams.postId;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_UserContext__WEBPACK_IMPORTED_MODULE_3__.UserContext),
    avatar = _useContext.avatar,
    setReplyPost = _useContext.setReplyPost,
    setNewReplyModalActive = _useContext.setNewReplyModalActive;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  //const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchPost = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _utils_helper_js__WEBPACK_IMPORTED_MODULE_2___default().sendGet("/simplePost/".concat(postId));
            case 3:
              res = _context.sent;
              if (res && res.author) {
                setPost(res);
                setLoading(false);
              } else {
                setError("Post not found");
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching post:", _context.t0);
              setError(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function fetchPost() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchPost();
  }, [postId]);
  var renderView = function renderView() {
    if (error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "error-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "button return-to-home-btn",
        onClick: function onClick() {
          return window.location.href = '/';
        }
      }, "Go back to feed"));
    } else if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "spinner-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_spinners__WEBPACK_IMPORTED_MODULE_7__["default"], {
        color: (0,_utils_helper_js__WEBPACK_IMPORTED_MODULE_2__.getCssVariable)('--primary-color'),
        size: 50
      }));
    } else if (post) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, post && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "single-post-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_posts_SinglePost_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        username: username,
        postId: postId,
        post: post
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_post_view_CommentBox_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        avatar: avatar,
        onClick: function onClick() {
          setReplyPost(post);
          setNewReplyModalActive(true);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_post_view_Comments_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post
      })));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Error fetching post ", error);
    }
  };
  return renderView();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostView);

/***/ }),

/***/ "./client/outlets/Profile.jsx":
/*!************************************!*\
  !*** ./client/outlets/Profile.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _PostView_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostView.jsx */ "./client/outlets/PostView.jsx");



var Profile = function Profile() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    username = _useParams.username;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProfileDetails, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: "post/:postId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PostView_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  })));
};
var ProfileDetails = function ProfileDetails() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Profile details go here...");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./client/post-view/CommentBox.jsx":
/*!*****************************************!*\
  !*** ./client/post-view/CommentBox.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CommentBox = function CommentBox(_ref) {
  var avatar = _ref.avatar,
    onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-comment-box px-4 py-3",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-comment-btn is-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-narrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: "image is-32x32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: avatar,
    alt: "avatar"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex is-align-items-center pl-1"
  }, "Add a comment...")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentBox);

/***/ }),

/***/ "./client/post-view/Comments.jsx":
/*!***************************************!*\
  !*** ./client/post-view/Comments.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
/* harmony import */ var _feeds_FeedPost_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feeds/FeedPost.jsx */ "./client/feeds/FeedPost.jsx");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helper.js */ "./client/utils/helper.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_helper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_simplePostProvider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/simplePostProvider.js */ "./client/hooks/simplePostProvider.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var Comments = function Comments(_ref) {
  var post = _ref.post;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    posts = _useState2[0],
    setPosts = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFetching = _useState6[0],
    setIsFetching = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    page = _useState8[0],
    setPage = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    hasMore = _useState10[0],
    setHasMore = _useState10[1];
  var limit = 10;
  var sentinelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Fetch posts from the server
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchPosts = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var skip, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setIsFetching(true);
              _context.prev = 1;
              skip = page * limit;
              _context.next = 5;
              return (0,_hooks_simplePostProvider_js__WEBPACK_IMPORTED_MODULE_3__.getCommentsForPost)(post._id, skip, limit);
            case 5:
              res = _context.sent;
              // console.log("res", res);
              if (res && res.length > 0) {
                setPosts(function (prevPosts) {
                  return [].concat(_toConsumableArray(prevPosts), _toConsumableArray(res));
                });
              } else {
                setHasMore(false);
              }
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.error("Error getting posts:", _context.t0);
            case 12:
              _context.prev = 12;
              setIsFetching(false);
              setLoading(false);
              return _context.finish(12);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 9, 12, 16]]);
      }));
      return function fetchPosts() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchPosts();
  }, [page, post]);

  //Endless scrolling thanks to chat gpt
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFetching || !hasMore) return;
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setPage(function (prevPage) {
          return prevPage + 1;
        });
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return function () {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [isFetching, hasMore]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex is-flex-direction-column is-justify-content-center"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_spinners__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: (0,_utils_helper_js__WEBPACK_IMPORTED_MODULE_2__.getCssVariable)('--primary-color'),
    size: 50
  })) : posts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_feeds_FeedPost_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: post._id,
      post: post
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: sentinelRef
  }), isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_spinners__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: (0,_utils_helper_js__WEBPACK_IMPORTED_MODULE_2__.getCssVariable)('--primary-color'),
    size: 50
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "m-2"
  }, "Nothing here...")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ }),

/***/ "./client/posts/SinglePost.jsx":
/*!*************************************!*\
  !*** ./client/posts/SinglePost.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_FeedPostFooter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/FeedPostFooter.jsx */ "./client/shared/FeedPostFooter.jsx");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helper.js */ "./client/utils/helper.js");
/* harmony import */ var _utils_helper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_helper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_usePostInteractions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/usePostInteractions.js */ "./client/hooks/usePostInteractions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var SinglePost = function SinglePost(_ref) {
  var username = _ref.username,
    postId = _ref.postId,
    post = _ref.post;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("/assets/img/avatar-grey-small.png"),
    _useState2 = _slicedToArray(_useState, 2),
    avatar = _useState2[0],
    setAvatar = _useState2[1];
  var _usePostInteractions = (0,_hooks_usePostInteractions_js__WEBPACK_IMPORTED_MODULE_3__["default"])(postId),
    likes = _usePostInteractions.likes,
    shares = _usePostInteractions.shares;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!post) return;
    var getUserAvatar = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _utils_helper_js__WEBPACK_IMPORTED_MODULE_2___default().sendGet("/getAvatarByUsername/".concat(post.author));
            case 3:
              res = _context.sent;
              if (res.avatar) {
                setAvatar(res.avatar);
              }
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("Error getting avatar:", _context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function getUserAvatar() {
        return _ref2.apply(this, arguments);
      };
    }();
    getUserAvatar();
  }, [post]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "post-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-3 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "post-header is-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-narrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: "image is-48x48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: avatar,
    alt: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "has-text-weight-bold is-size-5"
  }, username))), post && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "post-content pt-1 px-1 pb-2"
  }, post.content.split("\n").map(function (line, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: index
    }, line, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _utils_helper_js__WEBPACK_IMPORTED_MODULE_2___default().formatDateTime(post.createdDate)), post.media && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex is-align-items-center is-justify-content-start my-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "post-media-single",
    src: post.media,
    alt: "media"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "post-hr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "post-info"
  }, shares), " shares - ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "post-info"
  }, likes), " likes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "post-hr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_FeedPostFooter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    post: post
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePost);

/***/ }),

/***/ "./client/shared/FeedPostFooter.jsx":
/*!******************************************!*\
  !*** ./client/shared/FeedPostFooter.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.mjs");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helper */ "./client/utils/helper.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/UserContext */ "./client/utils/UserContext.js");
/* harmony import */ var _hooks_usePostInteractions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/usePostInteractions */ "./client/hooks/usePostInteractions.js");
/* harmony import */ var _hooks_simplePostProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/simplePostProvider */ "./client/hooks/simplePostProvider.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var FeedPostFooter = function FeedPostFooter(_ref) {
  var post = _ref.post;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_UserContext__WEBPACK_IMPORTED_MODULE_3__.UserContext),
    setNewReplyModalActive = _useContext.setNewReplyModalActive,
    setReplyPost = _useContext.setReplyPost,
    username = _useContext.username;
  var _usePostInteractions = (0,_hooks_usePostInteractions__WEBPACK_IMPORTED_MODULE_4__["default"])(post._id),
    likes = _usePostInteractions.likes,
    shares = _usePostInteractions.shares,
    liked = _usePostInteractions.liked,
    shared = _usePostInteractions.shared,
    commented = _usePostInteractions.commented,
    comments = _usePostInteractions.comments,
    setLikes = _usePostInteractions.setLikes,
    setShares = _usePostInteractions.setShares,
    setLiked = _usePostInteractions.setLiked,
    setShared = _usePostInteractions.setShared,
    setCommented = _usePostInteractions.setCommented,
    setComments = _usePostInteractions.setComments;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setMenuOpen = _useState2[1];
  var menuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Ref for the menu element

  var toggleLike = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, _res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!liked) {
              _context.next = 15;
              break;
            }
            _context.prev = 1;
            setLiked(false);
            _context.next = 5;
            return _utils_helper__WEBPACK_IMPORTED_MODULE_2___default().sendPost('/removeLike', {
              postId: post._id
            });
          case 5:
            res = _context.sent;
            if (res.postId) {
              setLikes(function (prevLikes) {
                return prevLikes - 1;
              });
            }
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            setLiked(true);
            console.error('Error unliking post:', _context.t0);
          case 13:
            _context.next = 27;
            break;
          case 15:
            _context.prev = 15;
            setLiked(true);
            _context.next = 19;
            return _utils_helper__WEBPACK_IMPORTED_MODULE_2___default().sendPost('/addLike', {
              postId: post._id
            });
          case 19:
            _res = _context.sent;
            if (_res.newLike) {
              setLikes(function (prevLikes) {
                return prevLikes + 1;
              });
            }
            _context.next = 27;
            break;
          case 23:
            _context.prev = 23;
            _context.t1 = _context["catch"](15);
            setLiked(false);
            console.error('Error liking post:', _context.t1);
          case 27:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 9], [15, 23]]);
    }));
    return function toggleLike() {
      return _ref2.apply(this, arguments);
    };
  }();
  var toggleShare = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res, _res2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!shared) {
              _context2.next = 15;
              break;
            }
            _context2.prev = 1;
            setShared(false);
            _context2.next = 5;
            return _utils_helper__WEBPACK_IMPORTED_MODULE_2___default().sendPost('/removeShare', {
              postId: post._id
            });
          case 5:
            res = _context2.sent;
            if (res.postId) {
              setShares(function (prevShares) {
                return prevShares - 1;
              });
            }
            _context2.next = 13;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            setShared(true);
            console.error('Error unsharing post:', _context2.t0);
          case 13:
            _context2.next = 27;
            break;
          case 15:
            _context2.prev = 15;
            setShared(true);
            _context2.next = 19;
            return _utils_helper__WEBPACK_IMPORTED_MODULE_2___default().sendPost('/addShare', {
              postId: post._id
            });
          case 19:
            _res2 = _context2.sent;
            if (_res2.newShare) {
              setShares(function (prevShares) {
                return prevShares + 1;
              });
            } else {
              setShared(false);
            }
            _context2.next = 27;
            break;
          case 23:
            _context2.prev = 23;
            _context2.t1 = _context2["catch"](15);
            setShared(false);
            console.error('Error sharing post:', _context2.t1);
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 9], [15, 23]]);
    }));
    return function toggleShare() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleMenuClick = function handleMenuClick() {
    console.log("Menu clicked");
    setMenuOpen(function (prev) {
      return !prev;
    });
  };
  var closeMenu = function closeMenu(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Attach the event listener for clicks outside the dropdown
    if (menuOpen) {
      document.addEventListener('mousedown', closeMenu);
    } else {
      document.removeEventListener('mousedown', closeMenu);
    }

    // Cleanup event listener on unmount
    return function () {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [menuOpen]);
  var handleDeleteClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0,_hooks_simplePostProvider__WEBPACK_IMPORTED_MODULE_5__.deleteSimplePost)(post._id);
          case 3:
            res = _context3.sent;
            //console.log(res);
            if (res.postId) {
              window.location.reload();
            }
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error('Error deleting post:', _context3.t0);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function handleDeleteClick() {
      return _ref4.apply(this, arguments);
    };
  }();
  var renderDeleteMenu = function renderDeleteMenu() {
    if (username === post.author) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "dropdown-content open"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: handleDeleteClick
      }, "Delete"));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "feed-post-footer is-flex is-justify-content-space-between is-fullwidth my-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "comment-button ".concat(commented ? 'commented' : ''),
    onClick: function onClick() {
      setReplyPost(post);
      setNewReplyModalActive(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mx-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faComment
  })), comments), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "repeat-button ".concat(shared ? 'shared' : ''),
    onClick: toggleShare
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mx-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faRepeat
  })), shares), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "like-button ".concat(liked ? 'liked' : ''),
    onClick: toggleLike
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mx-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: liked ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHeart : _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faHeart
  })), likes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dropdown",
    ref: menuRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleMenuClick,
    className: "px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "footer-menu-btn-text"
  }, "...")), menuOpen && renderDeleteMenu()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedPostFooter);

/***/ }),

/***/ "./node_modules/react-spinners/esm/ClipLoader.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-spinners/esm/ClipLoader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/unitConverter */ "./node_modules/react-spinners/esm/helpers/unitConverter.js");
/* harmony import */ var _helpers_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/animation */ "./node_modules/react-spinners/esm/helpers/animation.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var clip = (0,_helpers_animation__WEBPACK_IMPORTED_MODULE_1__.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function ClipLoader(_a) {
    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 35 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
    var style = __assign({ background: "transparent !important", width: (0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.cssValue)(size), height: (0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.cssValue)(size), borderRadius: "100%", border: "2px solid", borderTopColor: color, borderBottomColor: "transparent", borderLeftColor: color, borderRightColor: color, display: "inline-block", animation: "".concat(clip, " ").concat(0.75 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "both" }, cssOverride);
    if (!loading) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", __assign({ style: style }, additionalprops));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipLoader);


/***/ }),

/***/ "./node_modules/react-spinners/esm/helpers/animation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-spinners/esm/helpers/animation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnimation: () => (/* binding */ createAnimation)
/* harmony export */ });
var createAnimation = function (loaderName, frames, suffix) {
    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
    if (typeof window == "undefined" || !window.document) {
        return animationName;
    }
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
    if (styleSheet) {
        styleSheet.insertRule(keyFrames, 0);
    }
    return animationName;
};


/***/ }),

/***/ "./node_modules/react-spinners/esm/helpers/unitConverter.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-spinners/esm/helpers/unitConverter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssValue: () => (/* binding */ cssValue),
/* harmony export */   parseLengthAndUnit: () => (/* binding */ parseLengthAndUnit)
/* harmony export */ });
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true,
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px",
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    }
    else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit,
        };
    }
    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
    return {
        value: value,
        unit: "px",
    };
}
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}


/***/ }),

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/index.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-regular-svg-icons/index.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   faAddressBook: () => (/* binding */ faAddressBook),
/* harmony export */   faAddressCard: () => (/* binding */ faAddressCard),
/* harmony export */   faAngry: () => (/* binding */ faAngry),
/* harmony export */   faArrowAltCircleDown: () => (/* binding */ faArrowAltCircleDown),
/* harmony export */   faArrowAltCircleLeft: () => (/* binding */ faArrowAltCircleLeft),
/* harmony export */   faArrowAltCircleRight: () => (/* binding */ faArrowAltCircleRight),
/* harmony export */   faArrowAltCircleUp: () => (/* binding */ faArrowAltCircleUp),
/* harmony export */   faBarChart: () => (/* binding */ faBarChart),
/* harmony export */   faBell: () => (/* binding */ faBell),
/* harmony export */   faBellSlash: () => (/* binding */ faBellSlash),
/* harmony export */   faBookmark: () => (/* binding */ faBookmark),
/* harmony export */   faBuilding: () => (/* binding */ faBuilding),
/* harmony export */   faCalendar: () => (/* binding */ faCalendar),
/* harmony export */   faCalendarAlt: () => (/* binding */ faCalendarAlt),
/* harmony export */   faCalendarCheck: () => (/* binding */ faCalendarCheck),
/* harmony export */   faCalendarDays: () => (/* binding */ faCalendarDays),
/* harmony export */   faCalendarMinus: () => (/* binding */ faCalendarMinus),
/* harmony export */   faCalendarPlus: () => (/* binding */ faCalendarPlus),
/* harmony export */   faCalendarTimes: () => (/* binding */ faCalendarTimes),
/* harmony export */   faCalendarXmark: () => (/* binding */ faCalendarXmark),
/* harmony export */   faCaretSquareDown: () => (/* binding */ faCaretSquareDown),
/* harmony export */   faCaretSquareLeft: () => (/* binding */ faCaretSquareLeft),
/* harmony export */   faCaretSquareRight: () => (/* binding */ faCaretSquareRight),
/* harmony export */   faCaretSquareUp: () => (/* binding */ faCaretSquareUp),
/* harmony export */   faChartBar: () => (/* binding */ faChartBar),
/* harmony export */   faCheckCircle: () => (/* binding */ faCheckCircle),
/* harmony export */   faCheckSquare: () => (/* binding */ faCheckSquare),
/* harmony export */   faChessBishop: () => (/* binding */ faChessBishop),
/* harmony export */   faChessKing: () => (/* binding */ faChessKing),
/* harmony export */   faChessKnight: () => (/* binding */ faChessKnight),
/* harmony export */   faChessPawn: () => (/* binding */ faChessPawn),
/* harmony export */   faChessQueen: () => (/* binding */ faChessQueen),
/* harmony export */   faChessRook: () => (/* binding */ faChessRook),
/* harmony export */   faCircle: () => (/* binding */ faCircle),
/* harmony export */   faCircleCheck: () => (/* binding */ faCircleCheck),
/* harmony export */   faCircleDot: () => (/* binding */ faCircleDot),
/* harmony export */   faCircleDown: () => (/* binding */ faCircleDown),
/* harmony export */   faCircleLeft: () => (/* binding */ faCircleLeft),
/* harmony export */   faCirclePause: () => (/* binding */ faCirclePause),
/* harmony export */   faCirclePlay: () => (/* binding */ faCirclePlay),
/* harmony export */   faCircleQuestion: () => (/* binding */ faCircleQuestion),
/* harmony export */   faCircleRight: () => (/* binding */ faCircleRight),
/* harmony export */   faCircleStop: () => (/* binding */ faCircleStop),
/* harmony export */   faCircleUp: () => (/* binding */ faCircleUp),
/* harmony export */   faCircleUser: () => (/* binding */ faCircleUser),
/* harmony export */   faCircleXmark: () => (/* binding */ faCircleXmark),
/* harmony export */   faClipboard: () => (/* binding */ faClipboard),
/* harmony export */   faClock: () => (/* binding */ faClock),
/* harmony export */   faClockFour: () => (/* binding */ faClockFour),
/* harmony export */   faClone: () => (/* binding */ faClone),
/* harmony export */   faClosedCaptioning: () => (/* binding */ faClosedCaptioning),
/* harmony export */   faComment: () => (/* binding */ faComment),
/* harmony export */   faCommentAlt: () => (/* binding */ faCommentAlt),
/* harmony export */   faCommentDots: () => (/* binding */ faCommentDots),
/* harmony export */   faCommenting: () => (/* binding */ faCommenting),
/* harmony export */   faComments: () => (/* binding */ faComments),
/* harmony export */   faCompass: () => (/* binding */ faCompass),
/* harmony export */   faContactBook: () => (/* binding */ faContactBook),
/* harmony export */   faContactCard: () => (/* binding */ faContactCard),
/* harmony export */   faCopy: () => (/* binding */ faCopy),
/* harmony export */   faCopyright: () => (/* binding */ faCopyright),
/* harmony export */   faCreditCard: () => (/* binding */ faCreditCard),
/* harmony export */   faCreditCardAlt: () => (/* binding */ faCreditCardAlt),
/* harmony export */   faDizzy: () => (/* binding */ faDizzy),
/* harmony export */   faDotCircle: () => (/* binding */ faDotCircle),
/* harmony export */   faDriversLicense: () => (/* binding */ faDriversLicense),
/* harmony export */   faEdit: () => (/* binding */ faEdit),
/* harmony export */   faEnvelope: () => (/* binding */ faEnvelope),
/* harmony export */   faEnvelopeOpen: () => (/* binding */ faEnvelopeOpen),
/* harmony export */   faEye: () => (/* binding */ faEye),
/* harmony export */   faEyeSlash: () => (/* binding */ faEyeSlash),
/* harmony export */   faFaceAngry: () => (/* binding */ faFaceAngry),
/* harmony export */   faFaceDizzy: () => (/* binding */ faFaceDizzy),
/* harmony export */   faFaceFlushed: () => (/* binding */ faFaceFlushed),
/* harmony export */   faFaceFrown: () => (/* binding */ faFaceFrown),
/* harmony export */   faFaceFrownOpen: () => (/* binding */ faFaceFrownOpen),
/* harmony export */   faFaceGrimace: () => (/* binding */ faFaceGrimace),
/* harmony export */   faFaceGrin: () => (/* binding */ faFaceGrin),
/* harmony export */   faFaceGrinBeam: () => (/* binding */ faFaceGrinBeam),
/* harmony export */   faFaceGrinBeamSweat: () => (/* binding */ faFaceGrinBeamSweat),
/* harmony export */   faFaceGrinHearts: () => (/* binding */ faFaceGrinHearts),
/* harmony export */   faFaceGrinSquint: () => (/* binding */ faFaceGrinSquint),
/* harmony export */   faFaceGrinSquintTears: () => (/* binding */ faFaceGrinSquintTears),
/* harmony export */   faFaceGrinStars: () => (/* binding */ faFaceGrinStars),
/* harmony export */   faFaceGrinTears: () => (/* binding */ faFaceGrinTears),
/* harmony export */   faFaceGrinTongue: () => (/* binding */ faFaceGrinTongue),
/* harmony export */   faFaceGrinTongueSquint: () => (/* binding */ faFaceGrinTongueSquint),
/* harmony export */   faFaceGrinTongueWink: () => (/* binding */ faFaceGrinTongueWink),
/* harmony export */   faFaceGrinWide: () => (/* binding */ faFaceGrinWide),
/* harmony export */   faFaceGrinWink: () => (/* binding */ faFaceGrinWink),
/* harmony export */   faFaceKiss: () => (/* binding */ faFaceKiss),
/* harmony export */   faFaceKissBeam: () => (/* binding */ faFaceKissBeam),
/* harmony export */   faFaceKissWinkHeart: () => (/* binding */ faFaceKissWinkHeart),
/* harmony export */   faFaceLaugh: () => (/* binding */ faFaceLaugh),
/* harmony export */   faFaceLaughBeam: () => (/* binding */ faFaceLaughBeam),
/* harmony export */   faFaceLaughSquint: () => (/* binding */ faFaceLaughSquint),
/* harmony export */   faFaceLaughWink: () => (/* binding */ faFaceLaughWink),
/* harmony export */   faFaceMeh: () => (/* binding */ faFaceMeh),
/* harmony export */   faFaceMehBlank: () => (/* binding */ faFaceMehBlank),
/* harmony export */   faFaceRollingEyes: () => (/* binding */ faFaceRollingEyes),
/* harmony export */   faFaceSadCry: () => (/* binding */ faFaceSadCry),
/* harmony export */   faFaceSadTear: () => (/* binding */ faFaceSadTear),
/* harmony export */   faFaceSmile: () => (/* binding */ faFaceSmile),
/* harmony export */   faFaceSmileBeam: () => (/* binding */ faFaceSmileBeam),
/* harmony export */   faFaceSmileWink: () => (/* binding */ faFaceSmileWink),
/* harmony export */   faFaceSurprise: () => (/* binding */ faFaceSurprise),
/* harmony export */   faFaceTired: () => (/* binding */ faFaceTired),
/* harmony export */   faFile: () => (/* binding */ faFile),
/* harmony export */   faFileAlt: () => (/* binding */ faFileAlt),
/* harmony export */   faFileArchive: () => (/* binding */ faFileArchive),
/* harmony export */   faFileAudio: () => (/* binding */ faFileAudio),
/* harmony export */   faFileClipboard: () => (/* binding */ faFileClipboard),
/* harmony export */   faFileCode: () => (/* binding */ faFileCode),
/* harmony export */   faFileExcel: () => (/* binding */ faFileExcel),
/* harmony export */   faFileImage: () => (/* binding */ faFileImage),
/* harmony export */   faFileLines: () => (/* binding */ faFileLines),
/* harmony export */   faFilePdf: () => (/* binding */ faFilePdf),
/* harmony export */   faFilePowerpoint: () => (/* binding */ faFilePowerpoint),
/* harmony export */   faFileText: () => (/* binding */ faFileText),
/* harmony export */   faFileVideo: () => (/* binding */ faFileVideo),
/* harmony export */   faFileWord: () => (/* binding */ faFileWord),
/* harmony export */   faFileZipper: () => (/* binding */ faFileZipper),
/* harmony export */   faFlag: () => (/* binding */ faFlag),
/* harmony export */   faFloppyDisk: () => (/* binding */ faFloppyDisk),
/* harmony export */   faFlushed: () => (/* binding */ faFlushed),
/* harmony export */   faFolder: () => (/* binding */ faFolder),
/* harmony export */   faFolderBlank: () => (/* binding */ faFolderBlank),
/* harmony export */   faFolderClosed: () => (/* binding */ faFolderClosed),
/* harmony export */   faFolderOpen: () => (/* binding */ faFolderOpen),
/* harmony export */   faFontAwesome: () => (/* binding */ faFontAwesome),
/* harmony export */   faFontAwesomeFlag: () => (/* binding */ faFontAwesomeFlag),
/* harmony export */   faFontAwesomeLogoFull: () => (/* binding */ faFontAwesomeLogoFull),
/* harmony export */   faFrown: () => (/* binding */ faFrown),
/* harmony export */   faFrownOpen: () => (/* binding */ faFrownOpen),
/* harmony export */   faFutbol: () => (/* binding */ faFutbol),
/* harmony export */   faFutbolBall: () => (/* binding */ faFutbolBall),
/* harmony export */   faGem: () => (/* binding */ faGem),
/* harmony export */   faGrimace: () => (/* binding */ faGrimace),
/* harmony export */   faGrin: () => (/* binding */ faGrin),
/* harmony export */   faGrinAlt: () => (/* binding */ faGrinAlt),
/* harmony export */   faGrinBeam: () => (/* binding */ faGrinBeam),
/* harmony export */   faGrinBeamSweat: () => (/* binding */ faGrinBeamSweat),
/* harmony export */   faGrinHearts: () => (/* binding */ faGrinHearts),
/* harmony export */   faGrinSquint: () => (/* binding */ faGrinSquint),
/* harmony export */   faGrinSquintTears: () => (/* binding */ faGrinSquintTears),
/* harmony export */   faGrinStars: () => (/* binding */ faGrinStars),
/* harmony export */   faGrinTears: () => (/* binding */ faGrinTears),
/* harmony export */   faGrinTongue: () => (/* binding */ faGrinTongue),
/* harmony export */   faGrinTongueSquint: () => (/* binding */ faGrinTongueSquint),
/* harmony export */   faGrinTongueWink: () => (/* binding */ faGrinTongueWink),
/* harmony export */   faGrinWink: () => (/* binding */ faGrinWink),
/* harmony export */   faHand: () => (/* binding */ faHand),
/* harmony export */   faHandBackFist: () => (/* binding */ faHandBackFist),
/* harmony export */   faHandLizard: () => (/* binding */ faHandLizard),
/* harmony export */   faHandPaper: () => (/* binding */ faHandPaper),
/* harmony export */   faHandPeace: () => (/* binding */ faHandPeace),
/* harmony export */   faHandPointDown: () => (/* binding */ faHandPointDown),
/* harmony export */   faHandPointLeft: () => (/* binding */ faHandPointLeft),
/* harmony export */   faHandPointRight: () => (/* binding */ faHandPointRight),
/* harmony export */   faHandPointUp: () => (/* binding */ faHandPointUp),
/* harmony export */   faHandPointer: () => (/* binding */ faHandPointer),
/* harmony export */   faHandRock: () => (/* binding */ faHandRock),
/* harmony export */   faHandScissors: () => (/* binding */ faHandScissors),
/* harmony export */   faHandSpock: () => (/* binding */ faHandSpock),
/* harmony export */   faHandshake: () => (/* binding */ faHandshake),
/* harmony export */   faHardDrive: () => (/* binding */ faHardDrive),
/* harmony export */   faHdd: () => (/* binding */ faHdd),
/* harmony export */   faHeart: () => (/* binding */ faHeart),
/* harmony export */   faHospital: () => (/* binding */ faHospital),
/* harmony export */   faHospitalAlt: () => (/* binding */ faHospitalAlt),
/* harmony export */   faHospitalWide: () => (/* binding */ faHospitalWide),
/* harmony export */   faHourglass: () => (/* binding */ faHourglass),
/* harmony export */   faHourglass2: () => (/* binding */ faHourglass2),
/* harmony export */   faHourglassEmpty: () => (/* binding */ faHourglassEmpty),
/* harmony export */   faHourglassHalf: () => (/* binding */ faHourglassHalf),
/* harmony export */   faIdBadge: () => (/* binding */ faIdBadge),
/* harmony export */   faIdCard: () => (/* binding */ faIdCard),
/* harmony export */   faImage: () => (/* binding */ faImage),
/* harmony export */   faImages: () => (/* binding */ faImages),
/* harmony export */   faKeyboard: () => (/* binding */ faKeyboard),
/* harmony export */   faKiss: () => (/* binding */ faKiss),
/* harmony export */   faKissBeam: () => (/* binding */ faKissBeam),
/* harmony export */   faKissWinkHeart: () => (/* binding */ faKissWinkHeart),
/* harmony export */   faLaugh: () => (/* binding */ faLaugh),
/* harmony export */   faLaughBeam: () => (/* binding */ faLaughBeam),
/* harmony export */   faLaughSquint: () => (/* binding */ faLaughSquint),
/* harmony export */   faLaughWink: () => (/* binding */ faLaughWink),
/* harmony export */   faLemon: () => (/* binding */ faLemon),
/* harmony export */   faLifeRing: () => (/* binding */ faLifeRing),
/* harmony export */   faLightbulb: () => (/* binding */ faLightbulb),
/* harmony export */   faListAlt: () => (/* binding */ faListAlt),
/* harmony export */   faMap: () => (/* binding */ faMap),
/* harmony export */   faMeh: () => (/* binding */ faMeh),
/* harmony export */   faMehBlank: () => (/* binding */ faMehBlank),
/* harmony export */   faMehRollingEyes: () => (/* binding */ faMehRollingEyes),
/* harmony export */   faMessage: () => (/* binding */ faMessage),
/* harmony export */   faMinusSquare: () => (/* binding */ faMinusSquare),
/* harmony export */   faMoneyBill1: () => (/* binding */ faMoneyBill1),
/* harmony export */   faMoneyBillAlt: () => (/* binding */ faMoneyBillAlt),
/* harmony export */   faMoon: () => (/* binding */ faMoon),
/* harmony export */   faNewspaper: () => (/* binding */ faNewspaper),
/* harmony export */   faNoteSticky: () => (/* binding */ faNoteSticky),
/* harmony export */   faObjectGroup: () => (/* binding */ faObjectGroup),
/* harmony export */   faObjectUngroup: () => (/* binding */ faObjectUngroup),
/* harmony export */   faPaperPlane: () => (/* binding */ faPaperPlane),
/* harmony export */   faPaste: () => (/* binding */ faPaste),
/* harmony export */   faPauseCircle: () => (/* binding */ faPauseCircle),
/* harmony export */   faPenToSquare: () => (/* binding */ faPenToSquare),
/* harmony export */   faPlayCircle: () => (/* binding */ faPlayCircle),
/* harmony export */   faPlusSquare: () => (/* binding */ faPlusSquare),
/* harmony export */   faQuestionCircle: () => (/* binding */ faQuestionCircle),
/* harmony export */   faRectangleList: () => (/* binding */ faRectangleList),
/* harmony export */   faRectangleTimes: () => (/* binding */ faRectangleTimes),
/* harmony export */   faRectangleXmark: () => (/* binding */ faRectangleXmark),
/* harmony export */   faRegistered: () => (/* binding */ faRegistered),
/* harmony export */   faSadCry: () => (/* binding */ faSadCry),
/* harmony export */   faSadTear: () => (/* binding */ faSadTear),
/* harmony export */   faSave: () => (/* binding */ faSave),
/* harmony export */   faShareFromSquare: () => (/* binding */ faShareFromSquare),
/* harmony export */   faShareSquare: () => (/* binding */ faShareSquare),
/* harmony export */   faSmile: () => (/* binding */ faSmile),
/* harmony export */   faSmileBeam: () => (/* binding */ faSmileBeam),
/* harmony export */   faSmileWink: () => (/* binding */ faSmileWink),
/* harmony export */   faSnowflake: () => (/* binding */ faSnowflake),
/* harmony export */   faSoccerBall: () => (/* binding */ faSoccerBall),
/* harmony export */   faSquare: () => (/* binding */ faSquare),
/* harmony export */   faSquareCaretDown: () => (/* binding */ faSquareCaretDown),
/* harmony export */   faSquareCaretLeft: () => (/* binding */ faSquareCaretLeft),
/* harmony export */   faSquareCaretRight: () => (/* binding */ faSquareCaretRight),
/* harmony export */   faSquareCaretUp: () => (/* binding */ faSquareCaretUp),
/* harmony export */   faSquareCheck: () => (/* binding */ faSquareCheck),
/* harmony export */   faSquareFull: () => (/* binding */ faSquareFull),
/* harmony export */   faSquareMinus: () => (/* binding */ faSquareMinus),
/* harmony export */   faSquarePlus: () => (/* binding */ faSquarePlus),
/* harmony export */   faStar: () => (/* binding */ faStar),
/* harmony export */   faStarHalf: () => (/* binding */ faStarHalf),
/* harmony export */   faStarHalfAlt: () => (/* binding */ faStarHalfAlt),
/* harmony export */   faStarHalfStroke: () => (/* binding */ faStarHalfStroke),
/* harmony export */   faStickyNote: () => (/* binding */ faStickyNote),
/* harmony export */   faStopCircle: () => (/* binding */ faStopCircle),
/* harmony export */   faSun: () => (/* binding */ faSun),
/* harmony export */   faSurprise: () => (/* binding */ faSurprise),
/* harmony export */   faThumbsDown: () => (/* binding */ faThumbsDown),
/* harmony export */   faThumbsUp: () => (/* binding */ faThumbsUp),
/* harmony export */   faTimesCircle: () => (/* binding */ faTimesCircle),
/* harmony export */   faTimesRectangle: () => (/* binding */ faTimesRectangle),
/* harmony export */   faTired: () => (/* binding */ faTired),
/* harmony export */   faTrashAlt: () => (/* binding */ faTrashAlt),
/* harmony export */   faTrashCan: () => (/* binding */ faTrashCan),
/* harmony export */   faUser: () => (/* binding */ faUser),
/* harmony export */   faUserCircle: () => (/* binding */ faUserCircle),
/* harmony export */   faVcard: () => (/* binding */ faVcard),
/* harmony export */   faWindowClose: () => (/* binding */ faWindowClose),
/* harmony export */   faWindowMaximize: () => (/* binding */ faWindowMaximize),
/* harmony export */   faWindowMinimize: () => (/* binding */ faWindowMinimize),
/* harmony export */   faWindowRestore: () => (/* binding */ faWindowRestore),
/* harmony export */   faXmarkCircle: () => (/* binding */ faXmarkCircle),
/* harmony export */   far: () => (/* binding */ icons),
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/*!
 * Font Awesome Free 6.7.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const prefix = "far";
const faTrashCan = {
  prefix: 'far',
  iconName: 'trash-can',
  icon: [448, 512, [61460, "trash-alt"], "f2ed", "M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"]
};
const faTrashAlt = faTrashCan;
const faMessage = {
  prefix: 'far',
  iconName: 'message',
  icon: [512, 512, ["comment-alt"], "f27a", "M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"]
};
const faCommentAlt = faMessage;
const faFileLines = {
  prefix: 'far',
  iconName: 'file-lines',
  icon: [384, 512, [128441, 128462, 61686, "file-alt", "file-text"], "f15c", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]
};
const faFileAlt = faFileLines;
const faFileText = faFileLines;
const faCalendarDays = {
  prefix: 'far',
  iconName: 'calendar-days',
  icon: [448, 512, ["calendar-alt"], "f073", "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"]
};
const faCalendarAlt = faCalendarDays;
const faHandPointRight = {
  prefix: 'far',
  iconName: 'hand-point-right',
  icon: [512, 512, [], "f0a4", "M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"]
};
const faFaceSmileBeam = {
  prefix: 'far',
  iconName: 'face-smile-beam',
  icon: [512, 512, [128522, "smile-beam"], "f5b8", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z"]
};
const faSmileBeam = faFaceSmileBeam;
const faFaceGrinStars = {
  prefix: 'far',
  iconName: 'face-grin-stars',
  icon: [512, 512, [129321, "grin-stars"], "f587", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"]
};
const faGrinStars = faFaceGrinStars;
const faAddressBook = {
  prefix: 'far',
  iconName: 'address-book',
  icon: [512, 512, [62138, "contact-book"], "f2b9", "M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16L80 64c0-8.8 7.2-16 16-16l288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"]
};
const faContactBook = faAddressBook;
const faComments = {
  prefix: 'far',
  iconName: 'comments',
  icon: [640, 512, [128490, 61670], "f086", "M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"]
};
const faPaste = {
  prefix: 'far',
  iconName: 'paste',
  icon: [512, 512, ["file-clipboard"], "f0ea", "M104.6 48L64 48C28.7 48 0 76.7 0 112L0 384c0 35.3 28.7 64 64 64l96 0 0-48-96 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l16 0c0 17.7 14.3 32 32 32l72.4 0C202 108.4 227.6 96 256 96l62 0c-7.1-27.6-32.2-48-62-48l-40.6 0C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48zM144 56a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 464l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L464 243.9 464 448c0 8.8-7.2 16-16 16zM256 512l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L256 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z"]
};
const faFileClipboard = faPaste;
const faFaceGrinTongueSquint = {
  prefix: 'far',
  iconName: 'face-grin-tongue-squint',
  icon: [512, 512, [128541, "grin-tongue-squint"], "f58a", "M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 81.7 47.1 152.4 115.7 186.4c-2.4-8.4-3.7-17.3-3.7-26.4l0-23.3c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6l0 22.9c0 9.2-1.3 18-3.7 26.4C416.9 408.4 464 337.7 464 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm116-98.9c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm262.5-10.5c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9zM320 416l0-37.4c0-14.7-11.9-26.6-26.6-26.6l-2 0c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9l-2 0c-14.7 0-26.6 11.9-26.6 26.6l0 37.4c0 35.3 28.7 64 64 64s64-28.7 64-64z"]
};
const faGrinTongueSquint = faFaceGrinTongueSquint;
const faFaceFlushed = {
  prefix: 'far',
  iconName: 'face-flushed',
  icon: [512, 512, [128563, "flushed"], "f579", "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM160.4 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 336c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-128 0zM160 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm144-80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z"]
};
const faFlushed = faFaceFlushed;
const faSquareCaretRight = {
  prefix: 'far',
  iconName: 'square-caret-right',
  icon: [448, 512, ["caret-square-right"], "f152", "M400 96c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"]
};
const faCaretSquareRight = faSquareCaretRight;
const faSquareMinus = {
  prefix: 'far',
  iconName: 'square-minus',
  icon: [448, 512, [61767, "minus-square"], "f146", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM152 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
};
const faMinusSquare = faSquareMinus;
const faCompass = {
  prefix: 'far',
  iconName: 'compass',
  icon: [512, 512, [129517], "f14e", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
};
const faSquareCaretDown = {
  prefix: 'far',
  iconName: 'square-caret-down',
  icon: [448, 512, ["caret-square-down"], "f150", "M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]
};
const faCaretSquareDown = faSquareCaretDown;
const faFaceKissBeam = {
  prefix: 'far',
  iconName: 'face-kiss-beam',
  icon: [512, 512, [128537, "kiss-beam"], "f597", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304.7 41.7c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 427.1 257.4 432 240 432c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zm-87.1-68.9s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z"]
};
const faKissBeam = faFaceKissBeam;
const faLightbulb = {
  prefix: 'far',
  iconName: 'lightbulb',
  icon: [384, 512, [128161], "f0eb", "M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]
};
const faFlag = {
  prefix: 'far',
  iconName: 'flag',
  icon: [448, 512, [127988, 61725], "f024", "M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 64 0 350.5 0 400l0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52l0-28zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8l0 241.8-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5l0-237z"]
};
const faSquareCheck = {
  prefix: 'far',
  iconName: 'square-check',
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
};
const faCheckSquare = faSquareCheck;
const faCircleDot = {
  prefix: 'far',
  iconName: 'circle-dot',
  icon: [512, 512, [128280, "dot-circle"], "f192", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
};
const faDotCircle = faCircleDot;
const faFaceDizzy = {
  prefix: 'far',
  iconName: 'face-dizzy',
  icon: [512, 512, ["dizzy"], "f567", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM103 135c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9zm192 0c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9z"]
};
const faDizzy = faFaceDizzy;
const faFutbol = {
  prefix: 'far',
  iconName: 'futbol',
  icon: [512, 512, [9917, "futbol-ball", "soccer-ball"], "f1e3", "M435.4 361.4l-89.7-6c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-22 87.2c-14.4 3.2-29.4 4.8-44.8 4.8s-30.3-1.7-44.8-4.8l-22-87.2c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-89.7 6C61.7 335.9 51.9 307 49 276.2L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15L100.4 118c19.9-22.4 44.6-40.5 72.4-52.7l69.1 57.6c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l69.1-57.6c27.8 12.2 52.5 30.3 72.4 52.7l-33.4 83.4c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9L463 276.2c-3 30.8-12.7 59.7-27.6 85.2zM256 48l.9 0-1.8 0 .9 0zM56.7 196.2c.9-3 1.9-6.1 2.9-9.1l-2.9 9.1zM132 423l3.8 2.7c-1.3-.9-2.5-1.8-3.8-2.7zm248.1-.1c-1.3 1-2.6 2-4 2.9l4-2.9zm75.2-226.7l-3-9.2c1.1 3 2.1 6.1 3 9.2zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6l59.2 0c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"]
};
const faFutbolBall = faFutbol;
const faSoccerBall = faFutbol;
const faPenToSquare = {
  prefix: 'far',
  iconName: 'pen-to-square',
  icon: [512, 512, ["edit"], "f044", "M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"]
};
const faEdit = faPenToSquare;
const faHourglassHalf = {
  prefix: 'far',
  iconName: 'hourglass-half',
  icon: [384, 512, ["hourglass-2"], "f252", "M0 24C0 10.7 10.7 0 24 0L360 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 19c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445l0 19 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-19c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67l0-19-8 0C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5l184.4 0c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67l0-19L80 48l0 19c0 22.1 7 43.4 19.8 61l184.4 0z"]
};
const faHourglass2 = faHourglassHalf;
const faEyeSlash = {
  prefix: 'far',
  iconName: 'eye-slash',
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"]
};
const faHand = {
  prefix: 'far',
  iconName: 'hand',
  icon: [512, 512, [129306, 9995, "hand-paper"], "f256", "M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64l0 165.5-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75l8.5 0 8 0c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5l0-176c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2l0-2c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1l0-.1 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 31.9 0 .1 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16l0 55.9c0 0 0 .1 0 .1l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-71.9c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16l0 172.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2l-4.9 0-8.5 0c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2L160 96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9L192 232c0 13.3 10.7 24 24 24s24-10.7 24-24l0-135.9z"]
};
const faHandPaper = faHand;
const faHandSpock = {
  prefix: 'far',
  iconName: 'hand-spock',
  icon: [576, 512, [128406], "f259", "M170.2 80.8C161 47 180.8 12 214.6 2.4c34-9.6 69.4 10.2 79 44.2l30.3 107.1L337.1 84c6.6-34.7 40.1-57.5 74.8-50.9c31.4 6 53 33.9 52 64.9c10-2.6 20.8-2.8 31.5-.1c34.3 8.6 55.1 43.3 46.6 77.6L486.7 397.2C469.8 464.7 409.2 512 339.6 512l-33.7 0c-56.9 0-112.2-19-157.2-53.9l-92-71.6c-27.9-21.7-32.9-61.9-11.2-89.8s61.9-32.9 89.8-11.2l17 13.2L100.5 167.5c-13-32.9 3.2-70.1 36-83c11.1-4.4 22.7-5.4 33.7-3.7zm77.1-21.2c-2.4-8.5-11.2-13.4-19.7-11s-13.4 11.2-11 19.7l54.8 182.4c3.5 12.3-3.3 25.2-15.4 29.3s-25.3-2-30-13.9L174.9 138.1c-3.2-8.2-12.5-12.3-20.8-9s-12.3 12.5-9 20.8l73.3 185.6c12 30.3-23.7 57-49.4 37l-63.1-49.1c-7-5.4-17-4.2-22.5 2.8s-4.2 17 2.8 22.5l92 71.6c36.5 28.4 81.4 43.8 127.7 43.8l33.7 0c47.5 0 89-32.4 100.5-78.5l55.4-221.6c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-26 104C435.6 271.8 425 280 413 280c-16.5 0-28.9-15-25.8-31.2L415.7 99c1.7-8.7-4-17.1-12.7-18.7s-17.1 4-18.7 12.7L352.5 260c-2.2 11.6-12.4 20-24.2 20c-11 0-20.7-7.3-23.7-17.9L247.4 59.6z"]
};
const faFaceKiss = {
  prefix: 'far',
  iconName: 'face-kiss',
  icon: [512, 512, [128535, "kiss"], "f596", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304.7 25.7c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 411.1 257.4 416 240 416c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1l-.8-.5-.1-.1-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faKiss = faFaceKiss;
const faFaceGrinTongue = {
  prefix: 'far',
  iconName: 'face-grin-tongue',
  icon: [512, 512, [128539, "grin-tongue"], "f589", "M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 81.7 47.1 152.4 115.7 186.4c-2.4-8.4-3.7-17.3-3.7-26.4l0-52.4c-8.9-8-16.7-17.1-23.1-27.1c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5c18.7-4.4 35.9 12 25.5 28.1c-6.4 9.9-14.2 19-23 27l0 52.5c0 9.2-1.3 18-3.7 26.4C416.9 408.4 464 337.7 464 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 416l0-37.4c0-14.7-11.9-26.6-26.6-26.6l-2 0c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9l-2 0c-14.7 0-26.6 11.9-26.6 26.6l0 37.4c0 35.3 28.7 64 64 64s64-28.7 64-64z"]
};
const faGrinTongue = faFaceGrinTongue;
const faChessBishop = {
  prefix: 'far',
  iconName: 'chess-bishop',
  icon: [320, 512, [9821], "f43a", "M104 0C90.7 0 80 10.7 80 24c0 11.2 7.6 20.6 18 23.2c-7.8 8-16.1 17-24.4 27C38.2 116.7 0 178.8 0 250.9c0 44.8 24.6 72.2 48 87.8L48 352l48 0 0-27c0-9-5-17.2-13-21.3c-18-9.3-35-24.7-35-52.7c0-55.5 29.8-106.8 62.4-145.9c16-19.2 32.1-34.8 44.2-45.5c1.9-1.7 3.7-3.2 5.3-4.6c1.7 1.4 3.4 3 5.3 4.6c12.1 10.7 28.2 26.3 44.2 45.5c5.3 6.3 10.5 13 15.5 20L159 191c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57.8-57.8c12.8 25.9 21.2 54.3 21.2 83.8c0 28-17 43.4-35 52.7c-8 4.1-13 12.3-13 21.3l0 27 48 0 0-13.3c23.4-15.6 48-42.9 48-87.8c0-72.1-38.2-134.2-73.6-176.7c-8.3-9.9-16.6-19-24.4-27c10.3-2.7 18-12.1 18-23.2c0-13.3-10.7-24-24-24L160 0 104 0zM52.7 464l16.6-32 181.6 0 16.6 32L52.7 464zm207.9-80l-201 0c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512l238.5 0c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2c-5.5-10.6-16.5-17.3-28.4-17.3z"]
};
const faFaceGrinWink = {
  prefix: 'far',
  iconName: 'face-grin-wink',
  icon: [512, 512, ["grin-wink"], "f58c", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"]
};
const faGrinWink = faFaceGrinWink;
const faFaceGrinWide = {
  prefix: 'far',
  iconName: 'face-grin-wide',
  icon: [512, 512, [128515, "grin-alt"], "f581", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM224 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64zm96 64c-17.7 0-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64z"]
};
const faGrinAlt = faFaceGrinWide;
const faFaceFrownOpen = {
  prefix: 'far',
  iconName: 'face-frown-open',
  icon: [512, 512, [128550, "frown-open"], "f57a", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faFrownOpen = faFaceFrownOpen;
const faHandPointUp = {
  prefix: 'far',
  iconName: 'hand-point-up',
  icon: [384, 512, [9757], "f0a6", "M64 64l0 177.6c5.2-1 10.5-1.6 16-1.6l16 0 0-32L96 64c0-8.8-7.2-16-16-16s-16 7.2-16 16zM80 288c-17.7 0-32 14.3-32 32c0 0 0 0 0 0l0 24c0 66.3 53.7 120 120 120l48 0c52.5 0 97.1-33.7 113.4-80.7c-3.1 .5-6.2 .7-9.4 .7c-20 0-37.9-9.2-49.7-23.6c-9 4.9-19.4 7.6-30.3 7.6c-15.1 0-29-5.3-40-14c-11 8.8-24.9 14-40 14l-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-40 0-40 0zM0 320s0 0 0 0c0-18 6-34.6 16-48L16 64C16 28.7 44.7 0 80 0s64 28.7 64 64l0 82c5.1-1.3 10.5-2 16-2c25.3 0 47.2 14.7 57.6 36c7-2.6 14.5-4 22.4-4c20 0 37.9 9.2 49.7 23.6c9-4.9 19.4-7.6 30.3-7.6c35.3 0 64 28.7 64 64l0 64 0 24c0 92.8-75.2 168-168 168l-48 0C75.2 512 0 436.8 0 344l0-24zm336-64c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM160 240c5.5 0 10.9 .7 16 2l0-2 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32 16 0zm64 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 24z"]
};
const faBookmark = {
  prefix: 'far',
  iconName: 'bookmark',
  icon: [384, 512, [128278, 61591], "f02e", "M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"]
};
const faHandPointDown = {
  prefix: 'far',
  iconName: 'hand-point-down',
  icon: [384, 512, [], "f0a7", "M64 448l0-177.6c5.2 1 10.5 1.6 16 1.6l16 0 0 32 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16zM80 224c-17.7 0-32-14.3-32-32c0 0 0 0 0 0l0-24c0-66.3 53.7-120 120-120l48 0c52.5 0 97.1 33.7 113.4 80.7c-3.1-.5-6.2-.7-9.4-.7c-20 0-37.9 9.2-49.7 23.6c-9-4.9-19.4-7.6-30.3-7.6c-15.1 0-29 5.3-40 14c-11-8.8-24.9-14-40-14l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0-40 0zM0 192s0 0 0 0c0 18 6 34.6 16 48l0 208c0 35.3 28.7 64 64 64s64-28.7 64-64l0-82c5.1 1.3 10.5 2 16 2c25.3 0 47.2-14.7 57.6-36c7 2.6 14.5 4 22.4 4c20 0 37.9-9.2 49.7-23.6c9 4.9 19.4 7.6 30.3 7.6c35.3 0 64-28.7 64-64l0-64 0-24C384 75.2 308.8 0 216 0L168 0C75.2 0 0 75.2 0 168l0 24zm336 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64zM160 272c5.5 0 10.9-.7 16-2l0 2 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 16 0zm64-24l0-40c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24z"]
};
const faFolder = {
  prefix: 'far',
  iconName: 'folder',
  icon: [512, 512, [128193, 128447, 61716, "folder-blank"], "f07b", "M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z"]
};
const faFolderBlank = faFolder;
const faUser = {
  prefix: 'far',
  iconName: 'user',
  icon: [448, 512, [128100, 62144], "f007", "M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"]
};
const faSquareCaretLeft = {
  prefix: 'far',
  iconName: 'square-caret-left',
  icon: [448, 512, ["caret-square-left"], "f191", "M48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320zm16 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm64-224c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"]
};
const faCaretSquareLeft = faSquareCaretLeft;
const faStar = {
  prefix: 'far',
  iconName: 'star',
  icon: [576, 512, [11088, 61446], "f005", "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]
};
const faChessKnight = {
  prefix: 'far',
  iconName: 'chess-knight',
  icon: [448, 512, [9822], "f441", "M226.6 48L117.3 48l17.1 12.8c6 4.5 9.6 11.6 9.6 19.2s-3.6 14.7-9.6 19.2l-6.5 4.9c-10 7.5-16 19.3-16 31.9l-.3 91c0 10.2 4.9 19.9 13.2 25.8l1.9 1.3c9.9 7.1 23.3 7 33.2-.1l49.9-36.3c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5l-49.9 36.3-53.8 39.1c-7.3 5.3-13 12.2-16.9 20.1l-50.7 0c5.3-22.1 17.8-41.9 35.9-56.3c-1.3-.8-2.6-1.7-3.8-2.6L97 291.8c-21-15-33.4-39.2-33.3-65l.3-91c.1-19.8 6.7-38.7 18.6-53.9l-.4-.3C70.7 73 64 59.6 64 45.3C64 20.3 84.3 0 109.3 0L226.6 0C331.2 0 416 84.8 416 189.4c0 11.1-1 22.2-2.9 33.2L390.1 352l-48.8 0 24.5-137.8c1.5-8.2 2.2-16.5 2.2-24.8C368 111.3 304.7 48 226.6 48zM85.2 432L68.7 464l310.7 0-16.6-32L85.2 432zm315.7-30.7l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L56.8 512C34.2 512 16 493.8 16 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C52.5 390.7 63.5 384 75.5 384l297 0c12 0 22.9 6.7 28.4 17.3zM172 128a20 20 0 1 1 0 40 20 20 0 1 1 0-40z"]
};
const faFaceLaughSquint = {
  prefix: 'far',
  iconName: 'face-laugh-squint',
  icon: [512, 512, ["laugh-squint"], "f59b", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9l212.5 0c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm2.8-183.3l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 141.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"]
};
const faLaughSquint = faFaceLaughSquint;
const faFaceLaugh = {
  prefix: 'far',
  iconName: 'face-laugh',
  icon: [512, 512, ["laugh"], "f599", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9l212.5 0c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faLaugh = faFaceLaugh;
const faFolderOpen = {
  prefix: 'far',
  iconName: 'folder-open',
  icon: [576, 512, [128194, 128449, 61717], "f07c", "M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z"]
};
const faClipboard = {
  prefix: 'far',
  iconName: 'clipboard',
  icon: [384, 512, [128203], "f328", "M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
};
const faChessQueen = {
  prefix: 'far',
  iconName: 'chess-queen',
  icon: [512, 512, [9819], "f445", "M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-95.2-8c-18.1 0-31.3 12.8-35.6 26.9c-8 26.2-32.4 45.2-61.2 45.2c-10 0-19.4-2.3-27.7-6.3c-7.6-3.7-16.7-3.3-24 1.2C.7 162.1-3.1 177.1 3.7 188.9L97.6 352l55.4 0-83-144.1c40.5-2.2 75.3-25.9 93.1-59.8c22 26.8 55.4 43.9 92.8 43.9s70.8-17.1 92.8-43.9c17.8 34 52.6 57.7 93.1 59.8L359 352l55.4 0 93.9-163.1c6.8-11.7 3-26.7-8.6-33.8c-7.3-4.5-16.4-4.9-24-1.2c-8.4 4-17.7 6.3-27.7 6.3c-28.8 0-53.2-19-61.2-45.2C382.5 100.8 369.3 88 351.2 88c-14.5 0-26.3 8.5-32.4 19.3c-12.4 22-35.9 36.7-62.8 36.7s-50.4-14.8-62.8-36.7C187.1 96.5 175.4 88 160.8 88zM133.2 432l245.6 0 16.6 32-278.7 0 16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3l-265 0c-12 0-22.9 6.7-28.4 17.3L68.6 452.5c-3 5.8-4.6 12.2-4.6 18.7c0 22.5 18.2 40.8 40.8 40.8l302.5 0c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"]
};
const faHandBackFist = {
  prefix: 'far',
  iconName: 'hand-back-fist',
  icon: [448, 512, ["hand-rock"], "f255", "M144 64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16l0 104c0 31.3-20 58-48 67.9c-9.6 3.4-16 12.5-16 22.6L304 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-117.8c38-20.1 64-60.1 64-106.2l0-104c0-35.3-28.7-64-64-64c-2.8 0-5.6 .2-8.3 .5C332.8 77.1 311.9 64 288 64c-2.8 0-5.6 .2-8.3 .5C268.8 45.1 247.9 32 224 32c-2.8 0-5.6 .2-8.3 .5C204.8 13.1 183.9 0 160 0C124.7 0 96 28.7 96 64l0 64.3c-11.7 7.4-22.5 16.4-32 26.9l17.8 16.1L64 155.2l-9.4 10.5C40 181.8 32 202.8 32 224.6l0 12.8c0 49.6 24.2 96.1 64.8 124.5l13.8-19.7L96.8 361.9l8.9 6.2c6.9 4.8 14.4 8.6 22.3 11.3L128 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-128.1c0-12.6-9.8-23.1-22.4-23.9c-7.3-.5-14.3-2.9-20.3-7.1l-13.1 18.7 13.1-18.7-8.9-6.2C96.6 303.1 80 271.3 80 237.4l0-12.8c0-9.9 3.7-19.4 10.3-26.8l9.4-10.5c3.8-4.2 7.9-8.1 12.3-11.6l0 32.3c0 8.8 7.2 16 16 16s16-7.2 16-16l0-65.7 0-14.3 0-64z"]
};
const faHandRock = faHandBackFist;
const faSquareCaretUp = {
  prefix: 'far',
  iconName: 'square-caret-up',
  icon: [448, 512, ["caret-square-up"], "f151", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]
};
const faCaretSquareUp = faSquareCaretUp;
const faChartBar = {
  prefix: 'far',
  iconName: 'chart-bar',
  icon: [512, 512, ["bar-chart"], "f080", "M24 32c13.3 0 24 10.7 24 24l0 352c0 13.3 10.7 24 24 24l416 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L72 480c-39.8 0-72-32.2-72-72L0 56C0 42.7 10.7 32 24 32zM128 136c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24zm24 72l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
};
const faBarChart = faChartBar;
const faWindowRestore = {
  prefix: 'far',
  iconName: 'window-restore',
  icon: [512, 512, [], "f2d2", "M432 48L208 48c-17.7 0-32 14.3-32 32l0 16-48 0 0-16c0-44.2 35.8-80 80-80L432 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80l-16 0 0-48 16 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-192L48 256l0 192zM64 128l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64z"]
};
const faSquarePlus = {
  prefix: 'far',
  iconName: 'square-plus',
  icon: [448, 512, [61846, "plus-square"], "f0fe", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
};
const faPlusSquare = faSquarePlus;
const faImage = {
  prefix: 'far',
  iconName: 'image',
  icon: [512, 512, [], "f03e", "M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
};
const faFolderClosed = {
  prefix: 'far',
  iconName: 'folder-closed',
  icon: [512, 512, [], "e185", "M251.7 127.6s0 0 0 0c10.5 10.5 24.7 16.4 39.6 16.4L448 144c8.8 0 16 7.2 16 16l0 32L48 192l0-96c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l33.9-33.9L208.8 84.7l42.9 42.9zM48 240l416 0 0 176c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-176zM285.7 93.7L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.3 96c-2.1 0-4.2-.8-5.7-2.3z"]
};
const faLemon = {
  prefix: 'far',
  iconName: 'lemon',
  icon: [448, 512, [127819], "f094", "M368 80c-3.2 0-6.2 .4-8.9 1.3C340 86.8 313 91.9 284.8 84.6C227.4 69.7 160.2 92 110.1 142.1S37.7 259.4 52.6 316.8c7.3 28.2 2.2 55.2-3.3 74.3c-.8 2.8-1.3 5.8-1.3 8.9c0 17.7 14.3 32 32 32c3.2 0 6.2-.4 8.9-1.3c19.1-5.5 46.1-10.7 74.3-3.3c57.4 14.9 124.6-7.4 174.7-57.5s72.4-117.3 57.5-174.7c-7.3-28.2-2.2-55.2 3.3-74.3c.8-2.8 1.3-5.8 1.3-8.9c0-17.7-14.3-32-32-32zm0-48c44.2 0 80 35.8 80 80c0 7.7-1.1 15.2-3.1 22.3c-4.6 15.8-7.1 32.9-3 48.9c20.1 77.6-10.9 161.5-70 220.7s-143.1 90.2-220.7 70c-16-4.1-33-1.6-48.9 3c-7.1 2-14.6 3.1-22.3 3.1c-44.2 0-80-35.8-80-80c0-7.7 1.1-15.2 3.1-22.3c4.6-15.8 7.1-32.9 3-48.9C-14 251.3 17 167.3 76.2 108.2S219.3 18 296.8 38.1c16 4.1 33 1.6 48.9-3c7.1-2 14.6-3.1 22.3-3.1zM246.7 167c-52 15.2-96.5 59.7-111.7 111.7c-3.7 12.7-17.1 20-29.8 16.3s-20-17.1-16.3-29.8c19.8-67.7 76.6-124.5 144.3-144.3c12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z"]
};
const faHandshake = {
  prefix: 'far',
  iconName: 'handshake',
  icon: [640, 512, [], "f2b5", "M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]
};
const faGem = {
  prefix: 'far',
  iconName: 'gem',
  icon: [512, 512, [128142], "f3a5", "M168.5 72L256 165l87.5-93-175 0zM383.9 99.1L311.5 176l129 0L383.9 99.1zm50 124.9L256 224 78.1 224 256 420.3 433.9 224zM71.5 176l129 0L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"]
};
const faCirclePlay = {
  prefix: 'far',
  iconName: 'circle-play',
  icon: [512, 512, [61469, "play-circle"], "f144", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"]
};
const faPlayCircle = faCirclePlay;
const faCircleCheck = {
  prefix: 'far',
  iconName: 'circle-check',
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]
};
const faCheckCircle = faCircleCheck;
const faCircleStop = {
  prefix: 'far',
  iconName: 'circle-stop',
  icon: [512, 512, [62094, "stop-circle"], "f28d", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z"]
};
const faStopCircle = faCircleStop;
const faIdBadge = {
  prefix: 'far',
  iconName: 'id-badge',
  icon: [384, 512, [], "f2c1", "M256 48l0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16l-64 0zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM160 320l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L96 416c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]
};
const faFaceLaughBeam = {
  prefix: 'far',
  iconName: 'face-laugh-beam',
  icon: [512, 512, [128513, "laugh-beam"], "f59a", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9l212.5 0c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm86.9-85.1s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z"]
};
const faLaughBeam = faFaceLaughBeam;
const faRegistered = {
  prefix: 'far',
  iconName: 'registered',
  icon: [512, 512, [174], "f25d", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152l0 112 0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 60.9 0 37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8L315.7 275c21.8-14.3 36.3-39 36.3-67c0-44.2-35.8-80-80-80l-88 0c-13.3 0-24 10.7-24 24zm48 88l0-64 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0z"]
};
const faAddressCard = {
  prefix: 'far',
  iconName: 'address-card',
  icon: [576, 512, [62140, "contact-card", "vcard"], "f2bb", "M512 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z"]
};
const faContactCard = faAddressCard;
const faVcard = faAddressCard;
const faFaceTired = {
  prefix: 'far',
  iconName: 'face-tired',
  icon: [512, 512, [128555, "tired"], "f5c8", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.5 64.3C196.1 302.1 223.8 288 256 288s59.9 14.1 79.5 32.3C354.5 338.1 368 362 368 384c0 5.4-2.7 10.4-7.2 13.4s-10.2 3.4-15.2 1.3l-17.2-7.5c-22.8-10-47.5-15.1-72.4-15.1s-49.6 5.2-72.4 15.1l-17.2 7.5c-4.9 2.2-10.7 1.7-15.2-1.3s-7.2-8-7.2-13.4c0-22 13.5-45.9 32.5-63.7zm-43-173.6l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"]
};
const faTired = faFaceTired;
const faFontAwesome = {
  prefix: 'far',
  iconName: 'font-awesome',
  icon: [512, 512, [62501, 62694, "font-awesome-flag", "font-awesome-logo-full"], "f2b4", "M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 48 0 256 0 48 0 64 48 0 0-64 389.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96zM80 400l0-256 356.4 0L388.1 252.5c-5.5 12.4-5.5 26.6 0 39L436.4 400 80 400z"]
};
const faFontAwesomeFlag = faFontAwesome;
const faFontAwesomeLogoFull = faFontAwesome;
const faFaceSmileWink = {
  prefix: 'far',
  iconName: 'face-smile-wink',
  icon: [512, 512, [128521, "smile-wink"], "f4da", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"]
};
const faSmileWink = faFaceSmileWink;
const faFileWord = {
  prefix: 'far',
  iconName: 'file-word',
  icon: [384, 512, [], "f1c2", "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z"]
};
const faFilePowerpoint = {
  prefix: 'far',
  iconName: 'file-powerpoint',
  icon: [384, 512, [], "f1c4", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z"]
};
const faEnvelopeOpen = {
  prefix: 'far',
  iconName: 'envelope-open',
  icon: [512, 512, [62135], "f2b6", "M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"]
};
const faFileZipper = {
  prefix: 'far',
  iconName: 'file-zipper',
  icon: [384, 512, ["file-archive"], "f1c6", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l48 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l48 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm48 112c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8l-14.8 0c-14.5 0-27.2 9.7-30.9 23.8zM128 336l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
};
const faFileArchive = faFileZipper;
const faSquare = {
  prefix: 'far',
  iconName: 'square',
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
const faSnowflake = {
  prefix: 'far',
  iconName: 'snowflake',
  icon: [448, 512, [10052, 10054], "f2dc", "M224 0c13.3 0 24 10.7 24 24l0 46.1 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-57 57 0 76.5 66.2-38.2 20.9-77.8c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4L373 142.2l37.1-21.4c11.5-6.6 26.2-2.7 32.8 8.8s2.7 26.2-8.8 32.8L397 183.8l31.5 8.4c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-77.8-20.9L272 256l66.2 38.2 77.8-20.9c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4L397 328.2l37.1 21.4c11.5 6.6 15.4 21.3 8.8 32.8s-21.3 15.4-32.8 8.8L373 369.8l8.4 31.5c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-20.9-77.8L248 297.6l0 76.5 57 57c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23 0 46.1c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-46.1-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57 0-76.5-66.2 38.2-20.9 77.8c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4L75 369.8 37.9 391.2c-11.5 6.6-26.2 2.7-32.8-8.8s-2.7-26.2 8.8-32.8L51 328.2l-31.5-8.4c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l77.8 20.9L176 256l-66.2-38.2L31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4L51 183.8 13.9 162.4c-11.5-6.6-15.4-21.3-8.8-32.8s21.3-15.4 32.8-8.8L75 142.2l-8.4-31.5c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l20.9 77.8L200 214.4l0-76.5L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23L200 24c0-13.3 10.7-24 24-24z"]
};
const faNewspaper = {
  prefix: 'far',
  iconName: 'newspaper',
  icon: [512, 512, [128240], "f1ea", "M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
};
const faFaceKissWinkHeart = {
  prefix: 'far',
  iconName: 'face-kiss-wink-heart',
  icon: [512, 512, [128536, "kiss-wink-heart"], "f598", "M338.9 446.8c-25.4 11-53.4 17.2-82.9 17.2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 22.4-3.5 43.9-10.1 64.1c3.1 4.5 5.7 9.4 7.8 14.6c12.7-1.6 25.1 .4 36.2 5c9.1-26.2 14-54.4 14-83.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c35.4 0 69.1-7.2 99.7-20.2c-4.8-5.5-8.5-12.2-10.4-19.7l-6.5-25.3zM296 316c0-6.9-3.1-13.2-7.3-18.3c-4.3-5.2-10.1-9.7-16.7-13.4C258.7 276.9 241.4 272 224 272c-3.6 0-6.8 2.5-7.7 6s.6 7.2 3.8 9c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2 .1c.2 .1 .5 .3 .9 .5c.8 .5 2 1.2 3.4 2.1c2.8 1.9 6.5 4.5 10.2 7.6c3.7 3.1 7.2 6.6 9.6 10.1c2.5 3.5 3.5 6.4 3.5 8.6s-1 5-3.5 8.6c-2.5 3.5-5.9 6.9-9.6 10.1c-3.7 3.1-7.4 5.7-10.2 7.6c-1.4 .9-2.6 1.6-3.4 2.1c-.4 .2-.7 .4-.9 .5l-.2 .1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c-2.5 1.4-4.1 4.1-4.1 7s1.6 5.6 4.1 7c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2 .1c.2 .1 .5 .3 .9 .5c.8 .5 2 1.2 3.4 2.1c2.8 1.9 6.5 4.5 10.2 7.6c3.7 3.1 7.2 6.6 9.6 10.1c2.5 3.5 3.5 6.4 3.5 8.6s-1 5-3.5 8.6c-2.5 3.5-5.9 6.9-9.6 10.1c-3.7 3.1-7.4 5.7-10.2 7.6c-1.4 .9-2.6 1.6-3.4 2.1c-.4 .2-.7 .4-.9 .5l-.2 .1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-3.2 1.8-4.7 5.5-3.8 9s4.1 6 7.7 6c17.4 0 34.7-4.9 47.9-12.3c6.6-3.7 12.5-8.2 16.7-13.4c4.3-5.1 7.3-11.4 7.3-18.3s-3.1-13.2-7.3-18.3c-4.3-5.2-10.1-9.7-16.7-13.4c-2.7-1.5-5.7-3-8.7-4.3c3.1-1.3 6-2.7 8.7-4.3c6.6-3.7 12.5-8.2 16.7-13.4c4.3-5.1 7.3-11.4 7.3-18.3zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm159.3-20c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C375.7 186.8 355 180 335.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zM434 352.3c-6-23.2-28.8-37-51.1-30.8s-35.4 30.1-29.5 53.4l22.9 89.3c2.2 8.7 11.2 13.9 19.8 11.4l84.9-23.8c22.2-6.2 35.4-30.1 29.5-53.4s-28.8-37-51.1-30.8l-20.2 5.6-5.4-21z"]
};
const faKissWinkHeart = faFaceKissWinkHeart;
const faStarHalfStroke = {
  prefix: 'far',
  iconName: 'star-half-stroke',
  icon: [576, 512, ["star-half-alt"], "f5c0", "M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7l0-305.6 52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z"]
};
const faStarHalfAlt = faStarHalfStroke;
const faFileExcel = {
  prefix: 'far',
  iconName: 'file-excel',
  icon: [384, 512, [], "f1c3", "M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z"]
};
const faFaceGrinBeam = {
  prefix: 'far',
  iconName: 'face-grin-beam',
  icon: [512, 512, [128516, "grin-beam"], "f582", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM217.6 228.8s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z"]
};
const faGrinBeam = faFaceGrinBeam;
const faObjectUngroup = {
  prefix: 'far',
  iconName: 'object-ungroup',
  icon: [640, 512, [], "f248", "M48.2 66.8c-.1-.8-.2-1.7-.2-2.5l0-.2c0-8.8 7.2-16 16-16c.9 0 1.9 .1 2.8 .2C74.3 49.5 80 56.1 80 64c0 8.8-7.2 16-16 16c-7.9 0-14.5-5.7-15.8-13.2zM0 64c0 26.9 16.5 49.9 40 59.3l0 105.3C16.5 238.1 0 261.1 0 288c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l201.3 0c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3l0-105.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40L123.3 40C113.9 16.5 90.9 0 64 0C28.7 0 0 28.7 0 64zm368 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM324.7 88c6.5 16 19.3 28.9 35.3 35.3l0 105.3c-16 6.5-28.9 19.3-35.3 35.3l-201.3 0c-6.5-16-19.3-28.9-35.3-35.3l0-105.3c16-6.5 28.9-19.3 35.3-35.3l201.3 0zM384 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 288c0 7.9-5.7 14.5-13.2 15.8c-.8 .1-1.7 .2-2.5 .2l-.2 0c-8.8 0-16-7.2-16-16c0-.9 .1-1.9 .2-2.8C49.5 277.7 56.1 272 64 272c8.8 0 16 7.2 16 16zm391.3-40l45.4 0c6.5 16 19.3 28.9 35.3 35.3l0 105.3c-16 6.5-28.9 19.3-35.3 35.3l-201.3 0c-6.5-16-19.3-28.9-35.3-35.3l0-36.7-48 0 0 36.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l201.3 0c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3l0-105.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40L448 200l0 16.4c9.8 8.8 17.8 19.5 23.3 31.6zm88.9-26.7a16 16 0 1 1 31.5 5.5 16 16 0 1 1 -31.5-5.5zM271.8 450.7a16 16 0 1 1 -31.5-5.5 16 16 0 1 1 31.5 5.5zm307-18.5a16 16 0 1 1 -5.5 31.5 16 16 0 1 1 5.5-31.5z"]
};
const faCircleRight = {
  prefix: 'far',
  iconName: 'circle-right',
  icon: [512, 512, [61838, "arrow-alt-circle-right"], "f35a", "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z"]
};
const faArrowAltCircleRight = faCircleRight;
const faFaceRollingEyes = {
  prefix: 'far',
  iconName: 'face-rolling-eyes',
  icon: [512, 512, [128580, "meh-rolling-eyes"], "f5a5", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 376c0 13.3 10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-128 0c-13.3 0-24 10.7-24 24zm-8-104c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm192-32c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]
};
const faMehRollingEyes = faFaceRollingEyes;
const faObjectGroup = {
  prefix: 'far',
  iconName: 'object-group',
  icon: [576, 512, [], "f247", "M48 115.8C38.2 107 32 94.2 32 80c0-26.5 21.5-48 48-48c14.2 0 27 6.2 35.8 16l344.4 0c8.8-9.8 21.6-16 35.8-16c26.5 0 48 21.5 48 48c0 14.2-6.2 27-16 35.8l0 280.4c9.8 8.8 16 21.6 16 35.8c0 26.5-21.5 48-48 48c-14.2 0-27-6.2-35.8-16l-344.4 0c-8.8 9.8-21.6 16-35.8 16c-26.5 0-48-21.5-48-48c0-14.2 6.2-27 16-35.8l0-280.4zM125.3 96c-4.8 13.6-15.6 24.4-29.3 29.3l0 261.5c13.6 4.8 24.4 15.6 29.3 29.3l325.5 0c4.8-13.6 15.6-24.4 29.3-29.3l0-261.5c-13.6-4.8-24.4-15.6-29.3-29.3L125.3 96zm2.7 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
};
const faHeart = {
  prefix: 'far',
  iconName: 'heart',
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]
};
const faFaceSurprise = {
  prefix: 'far',
  iconName: 'face-surprise',
  icon: [512, 512, [128558, "surprise"], "f5c2", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM256 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
};
const faSurprise = faFaceSurprise;
const faCirclePause = {
  prefix: 'far',
  iconName: 'circle-pause',
  icon: [512, 512, [62092, "pause-circle"], "f28b", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24z"]
};
const faPauseCircle = faCirclePause;
const faCircle = {
  prefix: 'far',
  iconName: 'circle',
  icon: [512, 512, [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], "f111", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]
};
const faCircleUp = {
  prefix: 'far',
  iconName: 'circle-up',
  icon: [512, 512, [61467, "arrow-alt-circle-up"], "f35b", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z"]
};
const faArrowAltCircleUp = faCircleUp;
const faFileAudio = {
  prefix: 'far',
  iconName: 'file-audio',
  icon: [384, 512, [], "f1c7", "M64 464l256 0c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM192 272l0 128c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L129.4 376 112 376c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16l17.4 0 35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8zm85.8-4c11.6 20 18.2 43.3 18.2 68s-6.6 48-18.2 68c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8c7.5-12.9 11.8-27.9 11.8-44s-4.3-31.1-11.8-44c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8z"]
};
const faFileImage = {
  prefix: 'far',
  iconName: 'file-image',
  icon: [384, 512, [128443], "f1c5", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2l48 0 32 0 40 0 72 0c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z"]
};
const faCircleQuestion = {
  prefix: 'far',
  iconName: 'circle-question',
  icon: [512, 512, [62108, "question-circle"], "f059", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
};
const faQuestionCircle = faCircleQuestion;
const faFaceMehBlank = {
  prefix: 'far',
  iconName: 'face-meh-blank',
  icon: [512, 512, [128566, "meh-blank"], "f5a4", "M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faMehBlank = faFaceMehBlank;
const faEye = {
  prefix: 'far',
  iconName: 'eye',
  icon: [576, 512, [128065], "f06e", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]
};
const faFaceSadCry = {
  prefix: 'far',
  iconName: 'face-sad-cry',
  icon: [512, 512, [128557, "sad-cry"], "f5b3", "M400 406.1L400 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152.6c-28.7 15-61.4 23.4-96 23.4s-67.3-8.5-96-23.4L160 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 118.1C72.6 368.2 48 315 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 59-24.6 112.2-64 150.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm166.6 9.7c5.5-5.8 14.8-9.7 25.4-9.7s19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C391.7 186.8 371 180 351.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9zM208 320l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z"]
};
const faSadCry = faFaceSadCry;
const faFileCode = {
  prefix: 'far',
  iconName: 'file-code',
  icon: [384, 512, [], "f1c9", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"]
};
const faWindowMaximize = {
  prefix: 'far',
  iconName: 'window-maximize',
  icon: [512, 512, [128470], "f2d0", "M.3 89.5C.1 91.6 0 93.8 0 96L0 224 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192 0-128c0-35.3-28.7-64-64-64L64 32c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224l416 0 0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"]
};
const faFaceFrown = {
  prefix: 'far',
  iconName: 'face-frown',
  icon: [512, 512, [9785, "frown"], "f119", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faFrown = faFaceFrown;
const faFloppyDisk = {
  prefix: 'far',
  iconName: 'floppy-disk',
  icon: [448, 512, [128190, 128426, "save"], "f0c7", "M48 96l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-245.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8L320 184c0 13.3-10.7 24-24 24l-192 0c-13.3 0-24-10.7-24-24L80 80 64 80c-8.8 0-16 7.2-16 16zm80-16l0 80 144 0 0-80L128 80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]
};
const faSave = faFloppyDisk;
const faCommentDots = {
  prefix: 'far',
  iconName: 'comment-dots',
  icon: [512, 512, [128172, 62075, "commenting"], "f4ad", "M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
};
const faCommenting = faCommentDots;
const faFaceGrinSquint = {
  prefix: 'far',
  iconName: 'face-grin-squint',
  icon: [512, 512, [128518, "grin-squint"], "f585", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zm-216-161.7l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"]
};
const faGrinSquint = faFaceGrinSquint;
const faHandPointer = {
  prefix: 'far',
  iconName: 'hand-pointer',
  icon: [448, 512, [], "f25a", "M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 136c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16 0 104c0 39.8-32.2 72-72 72l-56 0-59.8 0-.9 0c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23l0-19.9 0-256zM176 0c-35.3 0-64 28.7-64 64l0 197.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2l.9 0 59.8 0 56 0c66.3 0 120-53.7 120-120l0-104 0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5L240 64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zm48-16c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z"]
};
const faHandScissors = {
  prefix: 'far',
  iconName: 'hand-scissors',
  icon: [512, 512, [], "f257", "M.2 276.3c-1.2-35.3 26.4-65 61.7-66.2l3.3-.1L57 208.1C22.5 200.5 .7 166.3 8.3 131.8S50.2 75.5 84.7 83.2l173 38.3c2.3-2.9 4.7-5.7 7.1-8.5l18.4-20.3C299.9 74.5 323.5 64 348.3 64l10.2 0c54.1 0 104.1 28.7 131.3 75.4l1.5 2.6c13.6 23.2 20.7 49.7 20.7 76.6L512 344c0 66.3-53.7 120-120 120l-8 0-96 0c-35.3 0-64-28.7-64-64c0-2.8 .2-5.6 .5-8.3c-19.4-11-32.5-31.8-32.5-55.7c0-.8 0-1.6 0-2.4L66.4 338c-35.3 1.2-65-26.4-66.2-61.7zm63.4-18.2c-8.8 .3-15.7 7.7-15.4 16.5s7.7 15.7 16.5 15.4l161.5-5.6c9.8-.3 18.7 5.3 22.7 14.2s2.2 19.3-4.5 26.4c-2.8 2.9-4.4 6.7-4.4 11c0 8.8 7.2 16 16 16c9.1 0 17.4 5.1 21.5 13.3s3.2 17.9-2.3 25.1c-2 2.7-3.2 6-3.2 9.6c0 8.8 7.2 16 16 16l96 0 8 0c39.8 0 72-32.2 72-72l0-125.4c0-18.4-4.9-36.5-14.2-52.4l-1.5-2.6c-18.6-32-52.8-51.6-89.8-51.6l-10.2 0c-11.3 0-22 4.8-29.6 13.1l-17.5-15.9 17.5 15.9-18.4 20.3c-.6 .6-1.1 1.3-1.7 1.9l57 13.2c8.6 2 14 10.6 12 19.2s-10.6 14-19.2 12l-85.6-19.7L74.3 130c-8.6-1.9-17.2 3.5-19.1 12.2s3.5 17.2 12.2 19.1l187.5 41.6c10.2 2.3 17.8 10.9 18.7 21.4l.1 1c.6 6.6-1.5 13.1-5.8 18.1s-10.6 7.9-17.2 8.2L63.6 258.1z"]
};
const faFaceGrinTears = {
  prefix: 'far',
  iconName: 'face-grin-tears',
  icon: [640, 512, [128514, "grin-tears"], "f588", "M516.1 325.5c1 3 2.1 6 3.3 8.9c3.3 8.1 8.4 18.5 16.5 26.6c3.9 3.9 8.2 7.4 12.7 10.3C506.4 454.8 419.9 512 320 512s-186.4-57.2-228.6-140.6c4.5-2.9 8.7-6.3 12.7-10.3c8.1-8.1 13.2-18.6 16.5-26.6c1.2-2.9 2.3-5.9 3.3-8.9C152.5 406.2 229.5 464 320 464s167.5-57.8 196.1-138.5zM320 48c-101.4 0-185.8 72.5-204.3 168.5c-6.7-3.1-14.3-4.3-22.3-3.1c-6.8 .9-16.2 2.4-26.6 4.4C85.3 94.5 191.6 0 320 0S554.7 94.5 573.2 217.7c-10.3-2-19.8-3.5-26.6-4.4c-8-1.2-15.7 .1-22.3 3.1C505.8 120.5 421.4 48 320 48zM78.5 341.1C60 356.7 32 355.5 14.3 337.7c-18.7-18.7-19.1-48.8-.7-67.2c8.6-8.6 30.1-15.1 50.5-19.6c13-2.8 25.5-4.8 33.9-6c5.4-.8 9.9 3.7 9 9c-3.1 21.5-11.4 70.2-25.5 84.4c-.9 1-1.9 1.8-2.9 2.7zm483 0c-.8-.6-1.5-1.3-2.3-2c-.2-.2-.5-.4-.7-.7c-14.1-14.1-22.5-62.9-25.5-84.4c-.8-5.4 3.7-9.9 9-9c1 .1 2.2 .3 3.3 .5c8.2 1.2 19.2 3 30.6 5.5c20.4 4.4 41.9 10.9 50.5 19.6c18.4 18.4 18 48.5-.7 67.2c-17.7 17.7-45.7 19-64.2 3.4zM439 336.5C414.4 374.6 370.3 400 319.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5c18.7-4.4 35.9 12 25.5 28.1zM281.6 228.8c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0zm160 0s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0z"]
};
const faGrinTears = faFaceGrinTears;
const faCalendarXmark = {
  prefix: 'far',
  iconName: 'calendar-xmark',
  icon: [448, 512, ["calendar-times"], "f273", "M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zm-95 89l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
};
const faCalendarTimes = faCalendarXmark;
const faFileVideo = {
  prefix: 'far',
  iconName: 'file-video',
  icon: [384, 512, [], "f1c8", "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 288c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 16 44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L240 368l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96z"]
};
const faFilePdf = {
  prefix: 'far',
  iconName: 'file-pdf',
  icon: [512, 512, [], "f1c1", "M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"]
};
const faComment = {
  prefix: 'far',
  iconName: 'comment',
  icon: [512, 512, [128489, 61669], "f075", "M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"]
};
const faEnvelope = {
  prefix: 'far',
  iconName: 'envelope',
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"]
};
const faHourglass = {
  prefix: 'far',
  iconName: 'hourglass',
  icon: [384, 512, [9203, 62032, "hourglass-empty"], "f254", "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l8 0 0 19c0 40.3 16 79 44.5 107.5L158.1 256 76.5 337.5C48 366 32 404.7 32 445l0 19-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-19c0-40.3-16-79-44.5-107.5L225.9 256l81.5-81.5C336 146 352 107.3 352 67l0-19 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0zM192 289.9l81.5 81.5C293 391 304 417.4 304 445l0 19L80 464l0-19c0-27.6 11-54 30.5-73.5L192 289.9zm0-67.9l-81.5-81.5C91 121 80 94.6 80 67l0-19 224 0 0 19c0 27.6-11 54-30.5 73.5L192 222.1z"]
};
const faHourglassEmpty = faHourglass;
const faCalendarCheck = {
  prefix: 'far',
  iconName: 'calendar-check',
  icon: [448, 512, [], "f274", "M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
};
const faHardDrive = {
  prefix: 'far',
  iconName: 'hard-drive',
  icon: [512, 512, [128436, "hdd"], "f0a0", "M64 80c-8.8 0-16 7.2-16 16l0 162c5.1-1.3 10.5-2 16-2l384 0c5.5 0 10.9 .7 16 2l0-162c0-8.8-7.2-16-16-16L64 80zM48 320l0 96c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L64 304c-8.8 0-16 7.2-16 16zM0 320L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 224 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-96zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
};
const faHdd = faHardDrive;
const faFaceGrinSquintTears = {
  prefix: 'far',
  iconName: 'face-grin-squint-tears',
  icon: [512, 512, [129315, "grin-squint-tears"], "f586", "M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z"]
};
const faGrinSquintTears = faFaceGrinSquintTears;
const faRectangleList = {
  prefix: 'far',
  iconName: 'rectangle-list',
  icon: [576, 512, ["list-alt"], "f022", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
};
const faListAlt = faRectangleList;
const faCalendarPlus = {
  prefix: 'far',
  iconName: 'calendar-plus',
  icon: [448, 512, [], "f271", "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256zm176 40c-13.3 0-24 10.7-24 24l0 48-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-48c0-13.3-10.7-24-24-24z"]
};
const faCircleLeft = {
  prefix: 'far',
  iconName: 'circle-left',
  icon: [512, 512, [61840, "arrow-alt-circle-left"], "f359", "M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"]
};
const faArrowAltCircleLeft = faCircleLeft;
const faMoneyBill1 = {
  prefix: 'far',
  iconName: 'money-bill-1',
  icon: [576, 512, ["money-bill-alt"], "f3d1", "M112 112c0 35.3-28.7 64-64 64l0 160c35.3 0 64 28.7 64 64l352 0c0-35.3 28.7-64 64-64l0-160c-35.3 0-64-28.7-64-64l-352 0zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm80-48c0 8.8 7.2 16 16 16l0 64-8 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 24 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-8 0 0-80c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]
};
const faMoneyBillAlt = faMoneyBill1;
const faClock = {
  prefix: 'far',
  iconName: 'clock',
  icon: [512, 512, [128339, "clock-four"], "f017", "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
};
const faClockFour = faClock;
const faKeyboard = {
  prefix: 'far',
  iconName: 'keyboard',
  icon: [576, 512, [9000], "f11c", "M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 320l224 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z"]
};
const faClosedCaptioning = {
  prefix: 'far',
  iconName: 'closed-captioning',
  icon: [576, 512, [], "f20a", "M512 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"]
};
const faImages = {
  prefix: 'far',
  iconName: 'images',
  icon: [576, 512, [], "f302", "M160 80l352 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-21.2 0L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336 160 336c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zM96 96l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
};
const faFaceGrin = {
  prefix: 'far',
  iconName: 'face-grin',
  icon: [512, 512, [128512, "grin"], "f580", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faGrin = faFaceGrin;
const faFaceMeh = {
  prefix: 'far',
  iconName: 'face-meh',
  icon: [512, 512, [128528, "meh"], "f11a", "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]
};
const faMeh = faFaceMeh;
const faIdCard = {
  prefix: 'far',
  iconName: 'id-card',
  icon: [576, 512, [62147, "drivers-license"], "f2c2", "M528 160l0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16l0-256 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z"]
};
const faDriversLicense = faIdCard;
const faSun = {
  prefix: 'far',
  iconName: 'sun',
  icon: [512, 512, [9728], "f185", "M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]
};
const faFaceLaughWink = {
  prefix: 'far',
  iconName: 'face-laugh-wink',
  icon: [512, 512, ["laugh-wink"], "f59c", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9l212.5 0c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"]
};
const faLaughWink = faFaceLaughWink;
const faCircleDown = {
  prefix: 'far',
  iconName: 'circle-down',
  icon: [512, 512, [61466, "arrow-alt-circle-down"], "f358", "M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3L304 256l0-96c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 96-57.7 0C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"]
};
const faArrowAltCircleDown = faCircleDown;
const faThumbsDown = {
  prefix: 'far',
  iconName: 'thumbs-down',
  icon: [512, 512, [128078, 61576], "f165", "M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z"]
};
const faChessPawn = {
  prefix: 'far',
  iconName: 'chess-pawn',
  icon: [320, 512, [9823], "f443", "M232 152A72 72 0 1 0 88 152a72 72 0 1 0 144 0zm24 120l-12.6 0 10.7 80-48.4 0L195 272l-35 0-35 0-10.7 80-48.4 0 10.7-80L64 272c-13.3 0-24-10.7-24-24s10.7-24 24-24c-15.1-20.1-24-45-24-72C40 85.7 93.7 32 160 32s120 53.7 120 120c0 27-8.9 51.9-24 72c13.3 0 24 10.7 24 24s-10.7 24-24 24zM52.7 464l214.7 0-16.6-32L69.2 432 52.7 464zm207.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L40.8 512C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384l201 0z"]
};
const faCreditCard = {
  prefix: 'far',
  iconName: 'credit-card',
  icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z"]
};
const faCreditCardAlt = faCreditCard;
const faBell = {
  prefix: 'far',
  iconName: 'bell',
  icon: [448, 512, [128276, 61602], "f0f3", "M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"]
};
const faFile = {
  prefix: 'far',
  iconName: 'file',
  icon: [384, 512, [128196, 128459, 61462], "f15b", "M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"]
};
const faHospital = {
  prefix: 'far',
  iconName: 'hospital',
  icon: [640, 512, [127973, 62589, "hospital-alt", "hospital-wide"], "f0f8", "M232 0c-39.8 0-72 32.2-72 72l0 8L72 80C32.2 80 0 112.2 0 152L0 440c0 39.8 32.2 72 72 72l.2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0s0 0 0 0l272 0 8 0s0 0 0 0l104 0c39.8 0 72-32.2 72-72l0-288c0-39.8-32.2-72-72-72l-88 0 0-8c0-39.8-32.2-72-72-72L232 0zM480 128l88 0c13.3 0 24 10.7 24 24l0 40-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 48-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 104c0 13.3-10.7 24-24 24l-88 0 0-128 0-208zM72 128l88 0 0 336c0 0 0 0-.1 0l-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0c-13.2 0-24-10.7-24-24l0-104 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-48 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-40c0-13.3 10.7-24 24-24zM208 72c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24l0 264 0 128-64 0 0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64-64 0 0-392zm88 24l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]
};
const faHospitalAlt = faHospital;
const faHospitalWide = faHospital;
const faChessRook = {
  prefix: 'far',
  iconName: 'chess-rook',
  icon: [448, 512, [9820], "f447", "M80 80l0 112c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L133.5 352l-48.3 0 9.4-85L54.4 236.8C40.3 226.2 32 209.6 32 192L32 72c0-22.1 17.9-40 40-40l304 0c22.1 0 40 17.9 40 40l0 120c0 17.6-8.3 34.2-22.4 44.8L353.4 267l9.4 85-48.3 0-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4l0-112-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24L80 80zm4.7 384l278.7 0-16.6-32-245.6 0L84.7 464zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L72.8 512C50.2 512 32 493.8 32 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C68.5 390.7 79.5 384 91.5 384l265 0zM208 288c-8.8 0-16-7.2-16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 8.8-7.2 16-16 16l-32 0z"]
};
const faStarHalf = {
  prefix: 'far',
  iconName: 'star-half',
  icon: [576, 512, [61731], "f089", "M293.3 .6c10.9 2.5 18.6 12.2 18.6 23.4l0 384.7c0 8.9-4.9 17-12.7 21.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.3c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5c4.9-10.1 16.1-15.4 27-12.9zM263.9 128.4l-28.6 58.8c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l92.5-49.4 0-265.9z"]
};
const faChessKing = {
  prefix: 'far',
  iconName: 'chess-king',
  icon: [448, 512, [9818], "f43f", "M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 40L59.6 144C26.7 144 0 170.7 0 203.6c0 8.2 1.7 16.3 4.9 23.8L59.1 352l52.3 0L49 208.2c-.6-1.5-1-3-1-4.6c0-6.4 5.2-11.6 11.6-11.6L224 192l164.4 0c6.4 0 11.6 5.2 11.6 11.6c0 1.6-.3 3.2-1 4.6L336.5 352l52.3 0 54.2-124.6c3.3-7.5 4.9-15.6 4.9-23.8c0-32.9-26.7-59.6-59.6-59.6L248 144l0-40 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32zM101.2 432l245.6 0 16.6 32L84.7 464l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3l-265 0c-12 0-22.9 6.7-28.4 17.3L36.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C32 493.8 50.2 512 72.8 512l302.5 0c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"]
};
const faCircleUser = {
  prefix: 'far',
  iconName: 'circle-user',
  icon: [512, 512, [62142, "user-circle"], "f2bd", "M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"]
};
const faUserCircle = faCircleUser;
const faCopy = {
  prefix: 'far',
  iconName: 'copy',
  icon: [448, 512, [], "f0c5", "M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"]
};
const faShareFromSquare = {
  prefix: 'far',
  iconName: 'share-from-square',
  icon: [576, 512, [61509, "share-square"], "f14d", "M400 255.4l0-15.4 0-32c0-8.8-7.2-16-16-16l-32 0-16 0-46.5 0c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112l48 0 16 0 32 0c8.8 0 16-7.2 16-16l0-32 0-15.4L506 160 400 255.4zM336 240l16 0 0 48c0 17.7 14.3 32 32 32l3.7 0c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7L352 80l-16 0-32 0-16 0c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4l2.5 0c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5c0 0 0 0 0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5l14.5 0 32 0zM72 32C32.2 32 0 64.2 0 104L0 440c0 39.8 32.2 72 72 72l336 0c39.8 0 72-32.2 72-72l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64c0 13.3-10.7 24-24 24L72 464c-13.3 0-24-10.7-24-24l0-336c0-13.3 10.7-24 24-24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 32z"]
};
const faShareSquare = faShareFromSquare;
const faCopyright = {
  prefix: 'far',
  iconName: 'copyright',
  icon: [512, 512, [169], "f1f9", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"]
};
const faMap = {
  prefix: 'far',
  iconName: 'map',
  icon: [576, 512, [128506, 62072], "f279", "M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z"]
};
const faBellSlash = {
  prefix: 'far',
  iconName: 'bell-slash',
  icon: [640, 512, [128277, 61943], "f1f6", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L542.6 400c2.7-7.8 1.3-16.5-3.9-23l-14.9-18.6C495.5 322.9 480 278.8 480 233.4l0-33.4c0-75.8-55.5-138.6-128-150.1L352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 17.9c-43.9 7-81.5 32.7-104.4 68.7L38.8 5.1zM221.7 148.4C239.6 117.1 273.3 96 312 96l8 0 8 0c57.4 0 104 46.6 104 104l0 33.4c0 32.7 6.4 64.8 18.7 94.5L221.7 148.4zM406.2 416l-60.9-48-176.9 0c21.2-32.8 34.4-70.3 38.4-109.1L160 222.1l0 11.4c0 45.4-15.5 89.5-43.8 124.9L101.3 377c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l286.2 0zM384 448l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"]
};
const faHandLizard = {
  prefix: 'far',
  iconName: 'hand-lizard',
  icon: [512, 512, [], "f258", "M72 112c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l152 0c4.5 0 8.9 1.3 12.7 3.6l64 40c7 4.4 11.3 12.1 11.3 20.4l0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-10.7L281.1 384 136 384c-39.8 0-72-32.2-72-72s32.2-72 72-72l104 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L72 208c-39.8 0-72-32.2-72-72S32.2 64 72 64l209.6 0c46.7 0 90.9 21.5 119.7 58.3l78.4 100.1c20.9 26.7 32.3 59.7 32.3 93.7L512 424c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-107.9c0-23.2-7.8-45.8-22.1-64.1L363.5 151.9c-19.7-25.2-49.9-39.9-81.9-39.9L72 112z"]
};
const faFaceSmile = {
  prefix: 'far',
  iconName: 'face-smile',
  icon: [512, 512, [128578, "smile"], "f118", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faSmile = faFaceSmile;
const faHandPeace = {
  prefix: 'far',
  iconName: 'hand-peace',
  icon: [512, 512, [9996], "f25b", "M250.8 1.4c-35.2-3.7-66.6 21.8-70.3 57L174 119 156.7 69.6C145 36.3 108.4 18.8 75.1 30.5S24.2 78.8 35.9 112.1L88.7 262.2C73.5 276.7 64 297.3 64 320c0 0 0 0 0 0l0 24c0 92.8 75.2 168 168 168l48 0c92.8 0 168-75.2 168-168l0-72 0-16 0-32c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-.7 0-1.5 0-2.2 0l5.9-56.3c3.7-35.2-21.8-66.6-57-70.3zm-.2 155.4C243.9 166.9 240 179 240 192l0 48c0 .7 0 1.4 0 2c-5.1-1.3-10.5-2-16-2l-7.4 0-5.4-15.3 17-161.3c.9-8.8 8.8-15.2 17.6-14.2s15.2 8.8 14.2 17.6l-9.5 90.1zM111.4 85.6L165.7 240 144 240c-4 0-8 .3-11.9 .9L81.2 96.2c-2.9-8.3 1.5-17.5 9.8-20.4s17.5 1.5 20.4 9.8zM288 192c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48zm38.4 108c10.4 21.3 32.3 36 57.6 36c5.5 0 10.9-.7 16-2l0 10c0 66.3-53.7 120-120 120l-48 0c-66.3 0-120-53.7-120-120l0-24s0 0 0 0c0-17.7 14.3-32 32-32l80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c35.3 0 64-28.7 64-64c0-.7 0-1.4 0-2c5.1 1.3 10.5 2 16 2c7.9 0 15.4-1.4 22.4-4zM400 272c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 16z"]
};
const faFaceGrinHearts = {
  prefix: 'far',
  iconName: 'face-grin-hearts',
  icon: [512, 512, [128525, "grin-hearts"], "f584", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM215.3 137.1c17.8 4.8 28.4 23.1 23.6 40.8l-17.4 65c-2.3 8.5-11.1 13.6-19.6 11.3l-65.1-17.4c-17.8-4.8-28.4-23.1-23.6-40.8s23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1c4.8-17.8 23.1-28.4 40.8-23.6zm122.3 23.6l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6s-5.8 36.1-23.6 40.8l-65.1 17.4c-8.5 2.3-17.3-2.8-19.6-11.3l-17.4-65c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6z"]
};
const faGrinHearts = faFaceGrinHearts;
const faBuilding = {
  prefix: 'far',
  iconName: 'building',
  icon: [384, 512, [127970, 61687], "f1ad", "M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z"]
};
const faFaceGrinBeamSweat = {
  prefix: 'far',
  iconName: 'face-grin-beam-sweat',
  icon: [512, 512, [128517, "grin-beam-sweat"], "f583", "M476.8 126.3C497.1 120.8 512 102.7 512 81c0-20-28.6-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0c-9.5 12.6-27.1 37.2-36 57.5c-.3 .7-.6 1.4-.9 2.1C417.8 69.7 416 76 416 81c0 26 21.5 47 48 47c4.4 0 8.7-.6 12.8-1.7zM395.4 41.2C355.3 15.2 307.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-35.8-7.3-69.9-20.6-100.8c-8.6 3.1-17.8 4.8-27.4 4.8c-8.9 0-17.6-1.5-25.7-4.2C454.7 185.5 464 219.7 464 256c0 114.9-93.1 208-208 208S48 370.9 48 256S141.1 48 256 48c48.7 0 93.4 16.7 128.9 44.7c-.6-3.8-.9-7.7-.9-11.7c0-11.4 3.8-22.4 7.1-30.5c1.3-3.1 2.7-6.2 4.3-9.3zM375 336.5c10.4-16.1-6.8-32.5-25.5-28.1c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5zM217.6 228.8s0 0 0 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C126.7 188.4 120 206.1 120 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0zm160 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C286.7 188.4 280 206.1 280 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0c0 0 0 0 0 0z"]
};
const faGrinBeamSweat = faFaceGrinBeamSweat;
const faMoon = {
  prefix: 'far',
  iconName: 'moon',
  icon: [384, 512, [127769, 9214], "f186", "M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"]
};
const faCalendar = {
  prefix: 'far',
  iconName: 'calendar',
  icon: [448, 512, [128197, 128198], "f133", "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"]
};
const faFaceGrinTongueWink = {
  prefix: 'far',
  iconName: 'face-grin-tongue-wink',
  icon: [512, 512, [128540, "grin-tongue-wink"], "f58b", "M348.3 442.4c2.4-8.4 3.7-17.3 3.7-26.4l0-52.5c8.8-8 16.6-17.1 23-27c10.4-16.1-6.8-32.5-25.5-28.1c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c6.5 10 14.3 19.1 23.1 27.1l0 52.4c0 9.2 1.3 18 3.7 26.4C95.1 408.4 48 337.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 81.7-47.1 152.4-115.7 186.4zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm176.7 12a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-.4-72a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM320 416c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-37.4c0-14.7 11.9-26.6 26.6-26.6l2 0c11.3 0 21.1 7.9 23.6 18.9c2.8 12.6 20.8 12.6 23.6 0c2.5-11.1 12.3-18.9 23.6-18.9l2 0c14.7 0 26.6 11.9 26.6 26.6l0 37.4z"]
};
const faGrinTongueWink = faFaceGrinTongueWink;
const faClone = {
  prefix: 'far',
  iconName: 'clone',
  icon: [512, 512, [], "f24d", "M64 464l224 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 48-64 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16zM224 304l224 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16L224 48c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16zm-64-16l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z"]
};
const faFaceAngry = {
  prefix: 'far',
  iconName: 'face-angry',
  icon: [512, 512, [128544, "angry"], "f556", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.4-118.5c9.7-9 10.2-24.2 1.2-33.9C315.3 344.3 290.6 328 256 328s-59.3 16.3-73.5 31.6c-9 9.7-8.5 24.9 1.2 33.9s24.9 8.5 33.9-1.2c7.4-7.9 20-16.4 38.5-16.4s31.1 8.5 38.5 16.4c9 9.7 24.2 10.2 33.9 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"]
};
const faAngry = faFaceAngry;
const faRectangleXmark = {
  prefix: 'far',
  iconName: 'rectangle-xmark',
  icon: [512, 512, [62164, "rectangle-times", "times-rectangle", "window-close"], "f410", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
};
const faRectangleTimes = faRectangleXmark;
const faTimesRectangle = faRectangleXmark;
const faWindowClose = faRectangleXmark;
const faPaperPlane = {
  prefix: 'far',
  iconName: 'paper-plane',
  icon: [512, 512, [61913], "f1d8", "M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"]
};
const faLifeRing = {
  prefix: 'far',
  iconName: 'life-ring',
  icon: [512, 512, [], "f1cd", "M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256s-22.1-118.9-58.8-163.3L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L58.8 92.7C22.1 137.1 0 193.9 0 256s22.1 118.9 58.8 163.3L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
};
const faFaceGrimace = {
  prefix: 'far',
  iconName: 'face-grimace',
  icon: [512, 512, [128556, "grimace"], "f57f", "M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM168 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0-48-8 0zm40 48l32 0 0-48-32 0 0 48zm96 0l0-48-32 0 0 48 32 0zm32 0l8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 48zM168 288l176 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-176 0c-30.9 0-56-25.1-56-56s25.1-56 56-56zm-23.6-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faGrimace = faFaceGrimace;
const faCalendarMinus = {
  prefix: 'far',
  iconName: 'calendar-minus',
  icon: [448, 512, [], "f272", "M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM296 352l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24z"]
};
const faCircleXmark = {
  prefix: 'far',
  iconName: 'circle-xmark',
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]
};
const faTimesCircle = faCircleXmark;
const faXmarkCircle = faCircleXmark;
const faThumbsUp = {
  prefix: 'far',
  iconName: 'thumbs-up',
  icon: [512, 512, [128077, 61575], "f164", "M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"]
};
const faWindowMinimize = {
  prefix: 'far',
  iconName: 'window-minimize',
  icon: [512, 512, [128469], "f2d1", "M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432z"]
};
const faSquareFull = {
  prefix: 'far',
  iconName: 'square-full',
  icon: [512, 512, [128997, 128998, 128999, 129000, 129001, 129002, 129003, 11035, 11036], "f45c", "M464 48l0 416L48 464 48 48l416 0zM48 0L0 0 0 48 0 464l0 48 48 0 416 0 48 0 0-48 0-416 0-48L464 0 48 0z"]
};
const faNoteSticky = {
  prefix: 'far',
  iconName: 'note-sticky',
  icon: [448, 512, [62026, "sticky-note"], "f249", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l224 0 0-80c0-17.7 14.3-32 32-32l80 0 0-224c0-8.8-7.2-16-16-16L64 80zM288 480L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224 0 5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7l-5.5 0z"]
};
const faStickyNote = faNoteSticky;
const faFaceSadTear = {
  prefix: 'far',
  iconName: 'face-sad-tear',
  icon: [512, 512, [128546, "sad-tear"], "f5b4", "M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
};
const faSadTear = faFaceSadTear;
const faHandPointLeft = {
  prefix: 'far',
  iconName: 'hand-point-left',
  icon: [512, 512, [], "f0a5", "M64 128l177.6 0c-1 5.2-1.6 10.5-1.6 16l0 16-32 0L64 160c-8.8 0-16-7.2-16-16s7.2-16 16-16zm224 16c0-17.7 14.3-32 32-32c0 0 0 0 0 0l24 0c66.3 0 120 53.7 120 120l0 48c0 52.5-33.7 97.1-80.7 113.4c.5-3.1 .7-6.2 .7-9.4c0-20-9.2-37.9-23.6-49.7c4.9-9 7.6-19.4 7.6-30.3c0-15.1-5.3-29-14-40c8.8-11 14-24.9 14-40l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40 0-40zm32-80s0 0 0 0c-18 0-34.6 6-48 16L64 80C28.7 80 0 108.7 0 144s28.7 64 64 64l82 0c-1.3 5.1-2 10.5-2 16c0 25.3 14.7 47.2 36 57.6c-2.6 7-4 14.5-4 22.4c0 20 9.2 37.9 23.6 49.7c-4.9 9-7.6 19.4-7.6 30.3c0 35.3 28.7 64 64 64l64 0 24 0c92.8 0 168-75.2 168-168l0-48c0-92.8-75.2-168-168-168l-24 0zM256 400c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0zM240 224c0 5.5 .7 10.9 2 16l-2 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0 16zm24 64l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l24 0z"]
};
var icons = {
  faTrashCan,
  faTrashAlt,
  faMessage,
  faCommentAlt,
  faFileLines,
  faFileAlt,
  faFileText,
  faCalendarDays,
  faCalendarAlt,
  faHandPointRight,
  faFaceSmileBeam,
  faSmileBeam,
  faFaceGrinStars,
  faGrinStars,
  faAddressBook,
  faContactBook,
  faComments,
  faPaste,
  faFileClipboard,
  faFaceGrinTongueSquint,
  faGrinTongueSquint,
  faFaceFlushed,
  faFlushed,
  faSquareCaretRight,
  faCaretSquareRight,
  faSquareMinus,
  faMinusSquare,
  faCompass,
  faSquareCaretDown,
  faCaretSquareDown,
  faFaceKissBeam,
  faKissBeam,
  faLightbulb,
  faFlag,
  faSquareCheck,
  faCheckSquare,
  faCircleDot,
  faDotCircle,
  faFaceDizzy,
  faDizzy,
  faFutbol,
  faFutbolBall,
  faSoccerBall,
  faPenToSquare,
  faEdit,
  faHourglassHalf,
  faHourglass2,
  faEyeSlash,
  faHand,
  faHandPaper,
  faHandSpock,
  faFaceKiss,
  faKiss,
  faFaceGrinTongue,
  faGrinTongue,
  faChessBishop,
  faFaceGrinWink,
  faGrinWink,
  faFaceGrinWide,
  faGrinAlt,
  faFaceFrownOpen,
  faFrownOpen,
  faHandPointUp,
  faBookmark,
  faHandPointDown,
  faFolder,
  faFolderBlank,
  faUser,
  faSquareCaretLeft,
  faCaretSquareLeft,
  faStar,
  faChessKnight,
  faFaceLaughSquint,
  faLaughSquint,
  faFaceLaugh,
  faLaugh,
  faFolderOpen,
  faClipboard,
  faChessQueen,
  faHandBackFist,
  faHandRock,
  faSquareCaretUp,
  faCaretSquareUp,
  faChartBar,
  faBarChart,
  faWindowRestore,
  faSquarePlus,
  faPlusSquare,
  faImage,
  faFolderClosed,
  faLemon,
  faHandshake,
  faGem,
  faCirclePlay,
  faPlayCircle,
  faCircleCheck,
  faCheckCircle,
  faCircleStop,
  faStopCircle,
  faIdBadge,
  faFaceLaughBeam,
  faLaughBeam,
  faRegistered,
  faAddressCard,
  faContactCard,
  faVcard,
  faFaceTired,
  faTired,
  faFontAwesome,
  faFontAwesomeFlag,
  faFontAwesomeLogoFull,
  faFaceSmileWink,
  faSmileWink,
  faFileWord,
  faFilePowerpoint,
  faEnvelopeOpen,
  faFileZipper,
  faFileArchive,
  faSquare,
  faSnowflake,
  faNewspaper,
  faFaceKissWinkHeart,
  faKissWinkHeart,
  faStarHalfStroke,
  faStarHalfAlt,
  faFileExcel,
  faFaceGrinBeam,
  faGrinBeam,
  faObjectUngroup,
  faCircleRight,
  faArrowAltCircleRight,
  faFaceRollingEyes,
  faMehRollingEyes,
  faObjectGroup,
  faHeart,
  faFaceSurprise,
  faSurprise,
  faCirclePause,
  faPauseCircle,
  faCircle,
  faCircleUp,
  faArrowAltCircleUp,
  faFileAudio,
  faFileImage,
  faCircleQuestion,
  faQuestionCircle,
  faFaceMehBlank,
  faMehBlank,
  faEye,
  faFaceSadCry,
  faSadCry,
  faFileCode,
  faWindowMaximize,
  faFaceFrown,
  faFrown,
  faFloppyDisk,
  faSave,
  faCommentDots,
  faCommenting,
  faFaceGrinSquint,
  faGrinSquint,
  faHandPointer,
  faHandScissors,
  faFaceGrinTears,
  faGrinTears,
  faCalendarXmark,
  faCalendarTimes,
  faFileVideo,
  faFilePdf,
  faComment,
  faEnvelope,
  faHourglass,
  faHourglassEmpty,
  faCalendarCheck,
  faHardDrive,
  faHdd,
  faFaceGrinSquintTears,
  faGrinSquintTears,
  faRectangleList,
  faListAlt,
  faCalendarPlus,
  faCircleLeft,
  faArrowAltCircleLeft,
  faMoneyBill1,
  faMoneyBillAlt,
  faClock,
  faClockFour,
  faKeyboard,
  faClosedCaptioning,
  faImages,
  faFaceGrin,
  faGrin,
  faFaceMeh,
  faMeh,
  faIdCard,
  faDriversLicense,
  faSun,
  faFaceLaughWink,
  faLaughWink,
  faCircleDown,
  faArrowAltCircleDown,
  faThumbsDown,
  faChessPawn,
  faCreditCard,
  faCreditCardAlt,
  faBell,
  faFile,
  faHospital,
  faHospitalAlt,
  faHospitalWide,
  faChessRook,
  faStarHalf,
  faChessKing,
  faCircleUser,
  faUserCircle,
  faCopy,
  faShareFromSquare,
  faShareSquare,
  faCopyright,
  faMap,
  faBellSlash,
  faHandLizard,
  faFaceSmile,
  faSmile,
  faHandPeace,
  faFaceGrinHearts,
  faGrinHearts,
  faBuilding,
  faFaceGrinBeamSweat,
  faGrinBeamSweat,
  faMoon,
  faCalendar,
  faFaceGrinTongueWink,
  faGrinTongueWink,
  faClone,
  faFaceAngry,
  faAngry,
  faRectangleXmark,
  faRectangleTimes,
  faTimesRectangle,
  faWindowClose,
  faPaperPlane,
  faLifeRing,
  faFaceGrimace,
  faGrimace,
  faCalendarMinus,
  faCircleXmark,
  faTimesCircle,
  faXmarkCircle,
  faThumbsUp,
  faWindowMinimize,
  faSquareFull,
  faNoteSticky,
  faStickyNote,
  faFaceSadTear,
  faSadTear,
  faHandPointLeft
};




/***/ })

}]);
//# sourceMappingURL=client_outlets_Profile_jsxBundle.js.map