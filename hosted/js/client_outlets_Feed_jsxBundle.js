"use strict";
(self["webpackChunkkitchen_sync"] = self["webpackChunkkitchen_sync"] || []).push([["client_outlets_Feed_jsx"],{

/***/ "./client/outlets/Feed.jsx":
/*!*********************************!*\
  !*** ./client/outlets/Feed.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var Suspense = (react__WEBPACK_IMPORTED_MODULE_0___default().Suspense),
  lazy = (react__WEBPACK_IMPORTED_MODULE_0___default().lazy);
var FollowingFeed = lazy(function () {
  return __webpack_require__.e(/*! import() */ "client_modules_twitter-clone_feeds_FollowingFeed_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/twitter-clone/feeds/FollowingFeed.jsx */ "./client/modules/twitter-clone/feeds/FollowingFeed.jsx"));
});
var SimplePostFeed = lazy(function () {
  return __webpack_require__.e(/*! import() */ "client_modules_twitter-clone_feeds_SimplePostFeed_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../modules/twitter-clone/feeds/SimplePostFeed.jsx */ "./client/modules/twitter-clone/feeds/SimplePostFeed.jsx"));
});
var feeds = {
  discover: 'discover',
  following: 'following',
  myPosts: 'myPosts'
};
var Feed = function Feed() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState('discover'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    feed = _React$useState2[0],
    setFeed = _React$useState2[1];
  var getFeed = function getFeed() {
    switch (feed) {
      case feeds.discover:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SimplePostFeed, {
          key: "discover",
          endpoint: '/simplePublicPosts'
        });
      case feeds.following:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FollowingFeed, null);
      case feeds.myPosts:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SimplePostFeed, {
          key: "myPosts",
          endpoint: '/getPostsForCurrentUser'
        });
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SimplePostFeed, {
          key: "discover",
          endpoint: '/simplePublicPosts'
        });
    }
  };
  var handleFeedChange = function handleFeedChange(feedIndex) {
    switch (feedIndex) {
      case 0:
        setFeed(feeds.discover);
        break;
      case 1:
        setFeed(feeds.following);
        break;
      case 2:
        setFeed(feeds.myPosts);
        break;
      default:
        setFeed(feeds.discover);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "feed-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex is-justify-content-center py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: "image is-48x48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/assets/img/logo-120p.png",
    alt: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: feed === feeds.discover ? "is-active" : "",
    onClick: function onClick() {
      return handleFeedChange(0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Discover")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: feed === feeds.following ? "is-active" : "",
    onClick: function onClick() {
      return handleFeedChange(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Following")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: feed === feeds.myPosts ? "is-active" : "",
    onClick: function onClick() {
      return handleFeedChange(2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "My Posts"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "feed-parent"
  }, getFeed())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);

/***/ })

}]);
//# sourceMappingURL=client_outlets_Feed_jsxBundle.js.map