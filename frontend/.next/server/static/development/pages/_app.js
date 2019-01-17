module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DownloadLink.js":
/*!************************************!*\
  !*** ./components/DownloadLink.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/DownloadLink.js";



var DownloadLink = function DownloadLink(_ref) {
  var className = _ref.className,
      linkText = _ref.linkText,
      text = _ref.text,
      url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "print-gear-list",
    target: "__blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, linkText)));
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadLink);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/FooterNavStyles */ "./components/styles/FooterNavStyles.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Footer.js";





var FooterImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Footer__FooterImage",
  componentId: "sc-1lh932w-0"
})(["position:absolute;background-size:cover;width:100%;max-width:100%;height:auto;margin:-50% 0;box-shadow:", ";filter:contrast(1.1) brightness(15%);"], function (props) {
  return props.theme.bs;
});
var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.footer.withConfig({
  displayName: "Footer__StyledFooter",
  componentId: "sc-1lh932w-1"
})(["position:relative;display:grid;grid-template-columns:70% 15% 15%;justify-content:space-between;width:100%;max-width:100%;height:20rem;top:", ";bottom:0;overflow:hidden;padding:2rem 5rem;background-color:", ";border-top:1px solid ", ";box-sizing:border-box;@media(max-width:1300px){grid-template-columns:1fr 1fr 1fr;justify-content:flex-start;}"], function (props) {
  return props.theme.top;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.lightGrey;
});

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterImage, {
    src: "static/images/mountain-gear.jpg",
    alt: "Photo by Blaise Vonlanthen on Unsplash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "25px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-site-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Sierra Vista Expeditions LLC"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gear-shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Gear Shop"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/static/rental_terms_release_of_liability.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Rental Agreement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/static/terms-and-conditions.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Terms and Conditions"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/static/assumption-of-risk-release-of-liability.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Assumption of Risk and Liability"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "About Us")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-trips-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Treks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cordillera-huayhuash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Cordillera Huayhuash")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/chavin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Chavin de Huantar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/quilcayhuanca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Quilcayhuanca Valley"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-trips-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Climbs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ishinca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Ishinca Valley")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pisco",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Pisco")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/vallunaraju",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Vallunaraju"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Header.js";








next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__LogoContainer",
  componentId: "sc-1i3qtuf-0"
})(["position:relative;display:flex;align-items:center;a{line-height:0;}@media(max-width:1300px){grid-template-columns:1fr;justify-content:center;margin:1rem 0;}"]);
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1i3qtuf-1"
})(["position:fixed;display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;top:0;width:100%;max-width:100%;min-height:5rem;padding:0 5rem;background-color:white;border-bottom:10px solid ", ";box-sizing:border-box;z-index:2;h3{font-size:1rem;line-height:normal;padding:0 1rem;margin:0;}a{&:focus{text-decoration:none;}}@media(max-width:1300px){grid-template-columns:1fr;justify-content:center;padding:0;h3{margin:0.4rem auto;}}"], function (props) {
  return props.theme.black;
});

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Sierra Vista Expeditions")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Logo.js";

var black = '#393939';
var white = '#FFFFFF';
var topSky = '#E1FCFF';
var midSky = '#C3F9FF';
var btmSky = '#00E8FF';

var Logo = function Logo(_ref) {
  var size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 519 519",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlinkHref: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Sierra Vista Expeditions Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "path-1",
    cx: "258.5",
    cy: "258.5",
    r: "258.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "mountain-logo",
    transform: "translate(1.000000, 1.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    id: "mask-2",
    fill: white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#path-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    id: "Oval",
    stroke: "#979797",
    xlinkHref: "#path-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "sky",
    mask: "url(#mask-2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(0.000000, -6.000000)",
    id: "Rectangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: topSky,
    x: "0",
    y: "0",
    width: "517",
    height: "158",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M-5.68434189e-14,156 C148.222222,106.666667 259.888889,82 335,82 C410.111111,82 470.777778,106.666667 517,156 L517,268 L-5.68434189e-14,268 L-5.68434189e-14,156 Z",
    fill: midSky,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M-1.13686838e-13,218 C66.4555108,206.189885 113.788844,201.189885 142,203 C235.661158,209.009589 306.977848,237 363,237 C444.333333,237 495.666667,230.666667 517,218 L517,378 L-1.13686838e-13,378 L-1.13686838e-13,218 Z",
    fill: btmSky,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Mountain",
    mask: "url(#mask-2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-3.000000, 155.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M70.257,80.631 L103.591,119.802 L121.096,121.995 L160.825,159.914 L232.207,74.676 L257.458,66.217 L298.872,0.407 L312.003,6.362 L347.356,70.291 L402.238,99.121 L431.866,135.471 L444.323,117.922 L454.088,117.922 L516.294,180.926 C514.938,227.594 501.18,324.727 478.211,362 L38.716,362 C14.493,322.698 0.519,222.831 0.519,173.275 C0.519,160.137 1.509,147.23 3.402,134.621 L32.213,88.467 L70.257,80.631 Z",
    id: "Path",
    fill: black,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Group",
    strokeWidth: "1",
    fill: "none",
    transform: "translate(50.000000, 7.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Path",
    fill: white,
    points: "251.688 2.424 260.315 42.591 251.564 42.906 257.957 89.598 284.893 145.378 310.888 195.203 344.828 195.203 332.368 151.331 338.764 149.137 366 187 449.872 225.288 441.121 201.159 385.129 135.902 382.404 139.738 345.827 94.864 310.888 76.51 321.596 114.038 316.879 115.606 293.608 67.434 290.175 65.63 254.969 1.965 252.64 0.909",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Path",
    fill: white,
    points: "209.84 63.77 230.688 139.423 223.952 141.616 186.924 72.407 188.037 71.077",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Path",
    fill: white,
    points: "0.947 82.618 24.968 153.052531 39 141.616 67.053 187.053 73.448 190.188 104.655 155.657 66.561 119.302 48.499 117.039 16.483 79.417",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M398.02,117.742 L398.02,139.735 L421.249,166.372 L427.311,152.271 L432.025,153.835 L463.311,206.356 C464.533,198.534 465.385,190.593 465.889,182.557 L399.895,115.716 L399.456,115.716 L398.02,117.742 Z",
    id: "Path",
    fill: white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M258.5,517 C115.734392,517 0,401.265608 0,258.5 C0,115.734392 115.734392,0 258.5,0 C401.265608,0 517,115.734392 517,258.5 C517,401.265608 401.265608,517 258.5,517 Z M259,504 C394.309764,504 504,394.309764 504,259 C504,123.690236 394.309764,14 259,14 C123.690236,14 14,123.690236 14,259 C14,394.309764 123.690236,504 259,504 Z",
    id: "Combined-Shape",
    fill: black,
    mask: "url(#mask-2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Meta.js";


/**
 * Add meta tags to site. Next.js handles the side effects.
 */

var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Sierra Vista"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style/css */ "antd/lib/popover/style/css");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/styles/index.js");


var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Nav.js";



var menu = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["NavMenu"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/apply",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Trip application"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/gear-shop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Gear shop"))));

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["NavStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cordillera-huayhuash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Cordillera Huayhuash"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/chavin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Chavin de Huantar"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/quilcayhuanca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Quilcayhuanca Valley"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/ishinca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Ishinca Valley"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/pisco",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Pisco"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/vallunaraju",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Vallunaraju"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "nav-about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: menu,
    placement: "bottomRight",
    trigger: "hover",
    mouseEnterDelay: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "About Us")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "./components/theme.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @font-face {\n        font-family: 'radnika_next';\n        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n        font-weight: normal;\n        font-style: normal;\n    }\n    html: {\n        box-sizing: border-box;\n        font-size: 10px;\n    }\n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n    body {\n        margin: 0;\n        padding: 0;\n        font-family: 'radnika_next';\n        font-size: 1.2rem;\n        line-height: 2;\n    }\n    a {\n        text-decoration: none;\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







/**
 * Injects global styles into the application
 * Just need to call it here
 */

Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].black);
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-1yp396i-0"
})(["color:", ";overflow:hidden;"], function (props) {
  return props.theme.black;
});
var InnerPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__InnerPage",
  componentId: "sc-1yp396i-1"
})(["position:relative;max-width:100%;top:", ";"], function (props) {
  return props.theme.top;
});

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: _theme__WEBPACK_IMPORTED_MODULE_5__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/icons/AcclimatizeIcon.js":
/*!*********************************************!*\
  !*** ./components/icons/AcclimatizeIcon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/AcclimatizeIcon.js";


var AcclimatizeIcon = function AcclimatizeIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Gear icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M43.428,32.819 C39.418,32.819 34.947,31.549 30.171,28.128 C14.008,16.553 3.037,27.482 2.579,27.953 C2.000,28.546 1.053,28.559 0.459,27.984 C-0.135,27.408 -0.151,26.462 0.422,25.867 C0.552,25.733 13.602,12.572 31.917,25.689 C47.990,37.200 59.789,21.160 60.284,20.472 C60.769,19.798 61.707,19.647 62.377,20.129 C63.050,20.612 63.203,21.549 62.720,22.222 C62.617,22.365 54.928,32.818 43.428,32.819 Z",
    id: "path-1",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M43.428,23.375 C39.418,23.375 34.947,22.105 30.171,18.684 C13.941,7.059 3.038,18.033 2.582,18.505 C2.007,19.102 1.058,19.119 0.461,18.544 C-0.136,17.969 -0.152,17.019 0.422,16.423 C0.552,16.288 13.602,3.128 31.917,16.245 C47.985,27.752 59.789,11.716 60.284,11.027 C60.769,10.354 61.707,10.203 62.377,10.684 C63.050,11.167 63.203,12.105 62.720,12.778 C62.617,12.921 54.928,23.374 43.428,23.375 Z",
    id: "path-2",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M43.428,12.986 C39.418,12.986 34.947,11.716 30.171,8.295 C14.008,-3.280 3.037,7.648 2.579,8.120 C2.000,8.712 1.053,8.726 0.459,8.150 C-0.135,7.575 -0.151,6.629 0.422,6.034 C0.552,5.899 13.602,-7.261 31.917,5.856 C47.990,17.367 59.789,1.327 60.284,0.638 C60.769,-0.035 61.707,-0.187 62.377,0.295 C63.050,0.779 63.203,1.716 62.720,2.389 C62.617,2.532 54.928,12.984 43.428,12.986 Z",
    id: "path-3",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

AcclimatizeIcon.displayName = 'AcclimatizeIcon';
AcclimatizeIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (AcclimatizeIcon);

/***/ }),

/***/ "./components/icons/AddIcon.js":
/*!*************************************!*\
  !*** ./components/icons/AddIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/AddIcon.js";


var AddIcon = function AddIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Add icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Add icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "checkbox-add-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M31.7795456,42.430004 C30.7620919,42.8599597 29.5887348,42.3836985 29.1587791,41.3662449 C28.7288235,40.3487913 29.2050846,39.1754342 30.2225383,38.7454785 C30.523581,38.6182638 30.8205481,38.4818244 31.1130603,38.3363783 C34.2369953,36.7830614 36.7829786,34.2370983 38.3363208,31.1131759 C38.4815031,30.8212001 38.6177118,30.5247856 38.7447298,30.2243095 C39.1748087,29.2069079 40.3482234,28.7307888 41.365625,29.1608676 C42.3830266,29.5909464 42.8591457,30.7643612 42.4290669,31.7817627 C42.2700916,32.1578374 42.0996347,32.5287822 41.9179736,32.8941204 C39.97659,36.7984317 36.798303,39.9766935 32.8939758,41.9180455 C32.5279662,42.1000368 32.1563297,42.2707825 31.7795456,42.430004 Z M26,22 L32,22 C33.1045695,22 34,22.8954305 34,24 C34,25.1045695 33.1045695,26 32,26 L26,26 L26,32 C26,33.1045695 25.1045695,34 24,34 C22.8954305,34 22,33.1045695 22,32 L22,26 L16,26 C14.8954305,26 14,25.1045695 14,24 C14,22.8954305 14.8954305,22 16,22 L22,22 L22,16 C22,14.8954305 22.8954305,14 24,14 C25.1045695,14 26,14.8954305 26,16 L26,22 Z M44,24 C44,25.1045695 43.1045695,26 42,26 C40.8954305,26 40,25.1045695 40,24 C40,15.163444 32.836556,8 24,8 C15.163444,8 8,15.163444 8,24 C8,32.836556 15.163444,40 24,40 C25.1045695,40 26,40.8954305 26,42 C26,43.1045695 25.1045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 C35.045695,4 44,12.954305 44,24 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

AddIcon.displayName = 'AddIcon';
AddIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (AddIcon);

/***/ }),

/***/ "./components/icons/AvatarIcon.js":
/*!****************************************!*\
  !*** ./components/icons/AvatarIcon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/AvatarIcon.js";


var AvatarIcon = function AvatarIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Avatar icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Avatar icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24,4 C35.04,4 44,12.96 44,24 C44,35.04 35.04,44 24,44 C12.96,44 4,35.04 4,24 C4,12.96 12.96,4 24,4 Z M24,8 C15.169139,8 8,15.169139 8,24 C8,32.830861 15.169139,40 24,40 C32.830861,40 40,32.830861 40,24 C40,15.169139 32.830861,8 24,8 Z M24,36 C20.0629632,36 16.4328282,34.3655446 14,31.6360837 C15.2262505,29.7755981 19.7163263,28 24,28 C28.2836737,28 32.7737495,29.7755981 34,31.6360837 C31.5671718,34.3655446 27.9370368,36 24,36 Z M24,14 C27.32,14 30,16.68 30,20 C30,23.32 27.32,26 24,26 C20.68,26 18,23.32 18,20 C18,16.68 20.68,14 24,14 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

AvatarIcon.displayName = 'AvatarIcon';
AvatarIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (AvatarIcon);

/***/ }),

/***/ "./components/icons/DownloadIcon.js":
/*!******************************************!*\
  !*** ./components/icons/DownloadIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/DownloadIcon.js";


var DownloadIcon = function DownloadIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Download icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Download icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "arrow-02-right-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.2204544,5.56999601 C17.2379081,5.14004032 18.4112652,5.61630149 18.8412209,6.63375512 C19.2711765,7.65120874 18.7949154,8.82456583 17.7774617,9.25452152 C17.476419,9.3817362 17.1794519,9.51817559 16.8869397,9.66362169 C13.7630047,11.2169386 11.2170214,13.7629017 9.66367919,16.8868241 C9.51849687,17.1787999 9.38228824,17.4752144 9.25527015,17.7756905 C8.82519132,18.7930921 7.6517766,19.2692112 6.63437502,18.8391324 C5.61697344,18.4090536 5.14085427,17.2356388 5.5709331,16.2182373 C5.72990843,15.8421626 5.90036526,15.4712178 6.08202642,15.1058796 C8.02340999,11.2015683 11.201697,8.02330651 15.1060242,6.08195448 C15.4720338,5.8999632 15.8436703,5.72921749 16.2204544,5.56999601 Z M4,24 C4,22.8954305 4.8954305,22 6,22 C7.1045695,22 8,22.8954305 8,24 C8,32.836556 15.163444,40 24,40 C32.836556,40 40,32.836556 40,24 C40,15.163444 32.836556,8 24,8 C22.8954305,8 22,7.1045695 22,6 C22,4.8954305 22.8954305,4 24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 Z M25.6160513,24 L20.5318622,19.0340344 C19.8227126,18.3399571 19.8227126,17.2146353 20.5318622,16.520558 C21.2410117,15.8264807 22.3907703,15.8264807 23.0999199,16.520558 L29.4681378,22.7432618 C30.1772874,23.4373391 30.1772874,24.5626609 29.4681378,25.2567382 L23.0999199,31.479442 C22.3907703,32.1735193 21.2410117,32.1735193 20.5318622,31.479442 C19.8227126,30.7853647 19.8227126,29.6600429 20.5318622,28.9659656 L25.6160513,24 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

DownloadIcon.displayName = 'DownloadIcon';
DownloadIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (DownloadIcon);

/***/ }),

/***/ "./components/icons/EmailIcon.js":
/*!***************************************!*\
  !*** ./components/icons/EmailIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/EmailIcon.js";


var EmailIcon = function EmailIcon(_ref) {
  var size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:info@sierravistaexpeditions.com",
    style: {
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Email",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "contact-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M40,14.7612497 L27.7481703,24.5627135 C25.5568584,26.315763 22.4431416,26.315763 20.2518297,24.5627135 L8,14.7612497 L8,34 C8,35.1045695 8.8954305,36 10,36 L16.8,36 C17.4627417,36 18,36.5372583 18,37.2 L18,38.8 C18,39.4627417 17.4627417,40 16.8,40 L10,40 C6.6862915,40 4,37.3137085 4,34 L4,14 C4,10.6862915 6.6862915,8 10,8 L38,8 C41.3137085,8 44,10.6862915 44,14 L44,34 C44,37.3137085 41.3137085,40 38,40 L31.2,40 C30.5372583,40 30,39.4627417 30,38.8 L30,37.2 C30,36.5372583 30.5372583,36 31.2,36 L38,36 C39.1045695,36 40,35.1045695 40,34 L40,14.7612497 Z M37.0484379,12 L10.9515621,12 L22.7506099,21.4392382 C23.4810472,22.0235881 24.5189528,22.0235881 25.2493901,21.4392382 L37.0484379,12 Z M21.2,36 L26.8,36 C27.4627417,36 28,36.5372583 28,37.2 L28,38.8 C28,39.4627417 27.4627417,40 26.8,40 L21.2,40 C20.5372583,40 20,39.4627417 20,38.8 L20,37.2 C20,36.5372583 20.5372583,36 21.2,36 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })))));
};

EmailIcon.displayName = 'EmailIcon';
EmailIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (EmailIcon);

/***/ }),

/***/ "./components/icons/FoodIcon.js":
/*!**************************************!*\
  !*** ./components/icons/FoodIcon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/FoodIcon.js";


var FoodIcon = function FoodIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 63 55",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Food icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "group-69svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M30.253,24.028 C15.593,24.028 0.013,19.819 0.013,12.019 C0.013,4.219 15.593,0.010 30.253,0.010 C44.913,0.010 60.493,4.219 60.493,12.019 C60.493,19.819 44.913,24.028 30.253,24.028 ZM30.253,3.010 C14.200,3.010 3.013,7.758 3.013,12.019 C3.013,16.281 14.200,21.028 30.253,21.028 C46.306,21.028 57.493,16.281 57.493,12.019 C57.493,7.758 46.306,3.010 30.253,3.010 Z",
    id: "path-1",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M39.522,6.385 C37.248,5.859 34.599,5.581 31.860,5.581 C26.879,5.581 21.086,6.547 19.010,8.649 C19.010,8.649 18.920,8.534 18.920,8.534 C18.920,8.534 18.889,8.777 18.889,8.777 C18.704,8.983 18.556,9.199 18.444,9.426 C18.078,10.177 18.118,10.981 18.550,11.727 C18.566,12.383 18.789,13.022 19.208,13.603 C19.208,13.603 19.322,13.764 19.322,13.764 C19.322,13.764 19.483,13.875 19.483,13.875 C21.052,14.965 24.397,15.796 27.837,16.003 C27.261,16.020 26.678,16.029 26.087,16.029 C23.825,16.029 21.679,15.887 19.688,15.603 C19.071,15.516 18.495,15.911 18.372,16.521 C18.372,16.521 18.370,16.532 18.370,16.532 C18.240,17.175 18.662,17.797 19.307,17.916 C21.320,18.288 23.510,18.458 26.227,18.458 C27.541,18.458 28.855,18.420 30.170,18.382 C31.463,18.345 32.755,18.307 34.146,18.303 C41.632,17.652 46.090,15.499 46.377,12.393 C46.609,9.889 44.064,7.646 39.522,6.385 ZM28.709,8.053 C28.709,8.053 28.668,8.347 28.668,8.347 C28.627,8.649 28.611,8.947 28.623,9.239 C27.696,9.491 27.001,9.795 26.439,10.184 C26.439,10.184 26.267,10.332 26.267,10.332 C25.445,11.186 25.563,11.981 25.706,12.378 C25.795,12.626 25.931,12.849 26.118,13.049 C24.817,12.743 23.584,12.317 22.316,11.877 C21.690,11.568 21.279,11.300 21.011,11.086 C21.668,9.940 24.198,8.469 28.709,8.053 ZM35.135,11.834 C35.147,12.037 34.989,12.283 34.711,12.511 C34.692,12.504 34.674,12.496 34.654,12.488 C33.889,12.189 32.666,11.710 31.828,10.945 C32.508,10.837 33.155,10.732 33.730,10.592 C34.731,11.049 35.117,11.536 35.135,11.834 ZM34.825,15.184 C34.825,15.184 35.692,14.882 35.857,14.684 C35.857,14.684 37.311,13.169 37.311,13.169 C37.544,12.727 37.616,12.307 37.615,11.953 C37.615,11.355 37.403,10.575 36.615,9.752 C36.615,9.752 35.227,8.664 35.117,8.598 C39.831,9.465 42.847,11.139 43.282,12.105 C42.316,13.376 38.848,14.693 34.090,15.432 C34.327,15.351 34.825,15.184 34.825,15.184 Z",
    id: "path-2",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.124,40.125 C36.124,40.125 24.454,40.125 24.454,40.125 C22.346,40.125 20.348,39.363 18.825,37.979 C18.218,37.479 2.619,24.496 0.115,12.321 C-0.051,11.510 0.472,10.717 1.283,10.550 C2.088,10.382 2.887,10.904 3.055,11.717 C5.345,22.853 20.636,35.585 20.790,35.713 C21.812,36.640 23.095,37.125 24.454,37.125 C24.454,37.125 36.124,37.125 36.124,37.125 C37.483,37.125 38.766,36.640 39.733,35.760 C39.942,35.585 55.233,22.838 57.523,11.701 C57.691,10.890 58.489,10.367 59.295,10.535 C60.106,10.701 60.629,11.494 60.463,12.307 C57.959,24.480 42.361,37.478 41.698,38.025 C40.230,39.363 38.232,40.125 36.124,40.125 Z",
    id: "path-3",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.737,50.767 C14.012,50.767 13.374,50.239 13.258,49.500 C13.129,48.682 13.687,47.914 14.506,47.785 C14.506,47.785 52.608,41.781 52.608,41.781 C53.422,41.656 54.194,42.210 54.323,43.029 C54.452,43.848 53.893,44.615 53.075,44.744 C53.075,44.744 14.973,50.749 14.973,50.749 C14.894,50.761 14.815,50.767 14.737,50.767 Z",
    id: "path-4",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23.409,54.590 C22.684,54.590 22.046,54.062 21.930,53.323 C21.801,52.505 22.359,51.737 23.178,51.607 C23.178,51.607 61.279,45.603 61.279,45.603 C62.092,45.479 62.865,46.033 62.994,46.851 C63.123,47.670 62.564,48.438 61.746,48.567 C61.746,48.567 23.644,54.572 23.644,54.572 C23.565,54.584 23.487,54.590 23.409,54.590 Z",
    id: "path-5",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
};

FoodIcon.displayName = 'FoodIcon';
FoodIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (FoodIcon);

/***/ }),

/***/ "./components/icons/GearIcon.js":
/*!**************************************!*\
  !*** ./components/icons/GearIcon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/GearIcon.js";


var GearIcon = function GearIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Gear icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Gear icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "setting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.6060609,4 L27.3939391,4 C29.0517505,4 30.4666009,5.21454579 30.6794161,6.85708199 L30.9513937,8.95624198 C30.9830109,9.200268 31.1251688,9.4161679 31.336843,9.54163659 L33.1192613,10.5981552 C33.3350005,10.7260333 33.5982218,10.7453415 33.8303119,10.6503132 L36.0252214,9.75161664 C37.5485848,9.12788182 39.3121187,9.70546541 40.1511856,11.1202647 L43.5451247,16.8429815 C44.3995142,18.283617 44.0182087,20.1236529 42.670686,21.1189755 L40.5525686,22.6834834 C40.3483667,22.8343134 40.2278738,23.0731115 40.2278738,23.3269778 L40.2278738,24.6730222 C40.2278738,24.9268885 40.3483667,25.1656866 40.5525686,25.3165166 L42.670686,26.8810245 C44.0182087,27.8763471 44.3995142,29.716383 43.5451247,31.1570185 L40.1511856,36.8797353 C39.3121187,38.2945346 37.5485848,38.8721182 36.0252214,38.2483834 L33.8303119,37.3496868 C33.5982218,37.2546585 33.3350005,37.2739667 33.1192613,37.4018448 L31.336843,38.4583634 C31.1251688,38.5838321 30.9830109,38.799732 30.9513937,39.043758 L30.6794161,41.142918 C30.4666009,42.7854542 29.0517505,44 27.3939391,44 L20.6060609,44 C18.9482495,44 17.5333991,42.7854542 17.3205839,41.142918 L17.0486063,39.043758 C17.0169891,38.799732 16.8748312,38.5838321 16.663157,38.4583634 L14.8807387,37.4018448 C14.6649995,37.2739667 14.4017782,37.2546585 14.1696881,37.3496868 L11.9747786,38.2483834 C10.4514152,38.8721182 8.68788135,38.2945346 7.84881439,36.8797353 L4.45487528,31.1570185 C3.60048579,29.716383 3.98179133,27.8763471 5.32931404,26.8810245 L7.44743138,25.3165166 C7.65163331,25.1656866 7.77212623,24.9268885 7.77212623,24.6730222 L7.77212623,23.3269778 C7.77212623,23.0731115 7.65163331,22.8343134 7.44743138,22.6834834 L5.32931404,21.1189755 C3.98179133,20.1236529 3.60048579,18.283617 4.45487528,16.8429815 L7.84881439,11.1202647 C8.68788135,9.70546541 10.4514152,9.12788182 11.9747786,9.75161664 L14.1696881,10.6503132 C14.4017782,10.7453415 14.6649995,10.7260333 14.8807387,10.5981552 L16.663157,9.54163659 C16.8748312,9.4161679 17.0169891,9.200268 17.0486063,8.95624198 L17.3205839,6.85708199 C17.5333991,5.21454579 18.9482495,4 20.6060609,4 Z M20.654439,10.1254318 C20.5128295,11.2099964 19.8761265,12.1695539 18.9280734,12.7271899 L16.5038019,14.1531237 C15.5375574,14.7214597 14.3586559,14.8072723 13.3191806,14.3849333 L11.6633969,13.7121879 C11.297615,13.5635707 10.878109,13.7040298 10.6755598,14.0429358 L8.37361081,17.8945655 C8.16183985,18.2489015 8.25444047,18.7061864 8.58738138,18.9502177 L10.1386794,20.0872522 C11.0532686,20.7576066 11.5929392,21.8189376 11.5929392,22.9472396 L11.5929392,25.0527604 C11.5929392,26.1810624 11.0532686,27.2423934 10.1386794,27.9127478 L8.58738138,29.0497823 C8.25444047,29.2938136 8.16183985,29.7510985 8.37361081,30.1054345 L10.6755598,33.9570642 C10.878109,34.2959702 11.297615,34.4364293 11.6633969,34.2878121 L13.3191806,33.6150667 C14.3586559,33.1927277 15.5375574,33.2785403 16.5038019,33.8468763 L18.9280734,35.2728101 C19.8761265,35.8304461 20.5128295,36.7900036 20.654439,37.8745682 L20.8410217,39.3035753 C20.8930411,39.7019831 21.232499,40 21.6342885,40 L26.3657115,40 C26.767501,40 27.1069589,39.7019831 27.1589783,39.3035753 L27.345561,37.8745682 C27.4871705,36.7900036 28.1238735,35.8304461 29.0719266,35.2728101 L31.4961981,33.8468763 C32.4624426,33.2785403 33.6413441,33.1927277 34.6808194,33.6150667 L36.3366031,34.2878121 C36.702385,34.4364293 37.121891,34.2959702 37.3244402,33.9570642 L39.6263892,30.1054345 C39.8381602,29.7510985 39.7455595,29.2938136 39.4126186,29.0497823 L37.8613206,27.9127478 C36.9467314,27.2423934 36.4070608,26.1810624 36.4070608,25.0527604 L36.4070608,22.9472396 C36.4070608,21.8189376 36.9467314,20.7576066 37.8613206,20.0872522 L39.4126186,18.9502177 C39.7455595,18.7061864 39.8381602,18.2489015 39.6263892,17.8945655 L37.3244402,14.0429358 C37.121891,13.7040298 36.702385,13.5635707 36.3366031,13.7121879 L34.6808194,14.3849333 C33.6413441,14.8072723 32.4624426,14.7214597 31.4961981,14.1531237 L29.0719266,12.7271899 C28.1238735,12.1695539 27.4871705,11.2099964 27.345561,10.1254318 L27.1589783,8.69642468 C27.1069589,8.29801686 26.767501,8 26.3657115,8 L21.6342885,8 C21.232499,8 20.8930411,8.29801686 20.8410217,8.69642468 L20.654439,10.1254318 Z M32,24 C32,25.1045695 31.1045695,26 30,26 C28.8954305,26 28,25.1045695 28,24 C28,21.790861 26.209139,20 24,20 C21.790861,20 20,21.790861 20,24 C20,26.209139 21.790861,28 24,28 C25.1045695,28 26,28.8954305 26,30 C26,31.1045695 25.1045695,32 24,32 C19.581722,32 16,28.418278 16,24 C16,19.581722 19.581722,16 24,16 C28.418278,16 32,19.581722 32,24 Z",
    fill: "#31303D",
    fillRule: "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

GearIcon.displayName = 'GearIcon';
GearIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (GearIcon);

/***/ }),

/***/ "./components/icons/GroupIcon.js":
/*!***************************************!*\
  !*** ./components/icons/GroupIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/GroupIcon.js";


var GroupIcon = function GroupIcon(_ref) {
  var size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Group Icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Group Icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.2,38 L28.8,38 C29.4627417,38 30,38.5372583 30,39.2 L30,40.8 C30,41.4627417 29.4627417,42 28.8,42 L19.2,42 C18.5372583,42 18,41.4627417 18,40.8 L18,39.2 C18,38.5372583 18.5372583,38 19.2,38 Z M32,34 C32,30.6862915 29.3137085,28 26,28 L22,28 C18.6862915,28 16,30.6862915 16,34 L16,42 C13.790861,42 12,40.209139 12,38 L8,38 C5.790861,38 4,36.209139 4,34 L4,30 C4,26.1358848 6.19167383,22.7836624 9.39974602,21.1186084 C7.91048702,19.5128712 7,17.3627634 7,15 C7,10.0294373 11.0294373,6 16,6 C19.0644745,6 21.8514853,7.54625513 23.494071,10.0139808 C23.6615339,10.0047013 23.8302179,10 24,10 C24.1697911,10 24.338484,10.0047018 24.5059557,10.0139823 C26.1489573,7.54564968 28.9361215,6 32,6 C36.9705627,6 41,10.0294373 41,15 C41,17.3627634 40.089513,19.5128712 38.600254,21.1186084 C41.8083262,22.7836624 44,26.1358848 44,30 L44,34 C44,36.209139 42.209139,38 40,38 L36,38 C36,40.209139 34.209139,42 32,42 L32,34 Z M36,34 L40,34 L40,30 C40,26.6862915 37.3137085,24 34,24 L31.484451,24 C31.2192198,24.3962347 30.9233583,24.7702333 30.600254,25.1186084 C33.8083262,26.7836624 36,30.1358848 36,34 Z M37,15 C37,12.2385763 34.7614237,10 32,10 C30.7293554,10 29.5450178,10.4777786 28.6461492,11.2904339 C31.2554535,12.8663028 33,15.7294211 33,19 C33,19.3068162 32.9846471,19.6100466 32.9546677,19.9089648 C35.2594556,19.4633698 37,17.4349479 37,15 Z M28.88587,20.067141 C28.961059,19.7193229 29,19.364209 29,19 C29,16.2385763 26.7614237,14 24,14 C21.2385763,14 19,16.2385763 19,19 C19,21.7614237 21.2385763,24 24,24 C26.3951787,24 28.3970023,22.3158467 28.88587,20.067141 Z M12,34 C12,30.1358848 14.1916738,26.7836624 17.399746,25.1186084 C17.0766417,24.7702333 16.7807802,24.3962347 16.515549,24 L14,24 C10.6862915,24 8,26.6862915 8,30 L8,34 L12,34 Z M16,10 C13.2385763,10 11,12.2385763 11,15 C11,17.4349479 12.7405444,19.4633698 15.0453323,19.9089648 C15.0153529,19.6100466 15,19.3068162 15,19 C15,15.7294207 16.7445469,12.8663021 19.3538517,11.2904333 C18.4551084,10.477929 17.2707955,10 16,10 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))));
};

GroupIcon.displayName = 'GroupIcon';
GroupIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (GroupIcon);

/***/ }),

/***/ "./components/icons/GuideIcon.js":
/*!***************************************!*\
  !*** ./components/icons/GuideIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/GuideIcon.js";


var GuideIcon = function GuideIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Gear icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "group-5svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M54.776,22.013 C54.776,22.013 36.417,22.013 36.417,22.013 C35.589,22.013 35.344,21.341 35.344,20.512 C35.344,20.512 35.344,10.505 35.344,10.505 C35.344,9.676 35.589,9.004 36.417,9.004 C36.417,9.004 54.776,9.004 54.776,9.004 C55.693,9.004 56.379,9.539 56.833,9.893 C56.833,9.893 60.649,12.895 60.649,12.895 C61.558,13.577 62.094,14.663 62.094,15.855 C62.094,17.047 61.558,18.134 60.622,18.836 C60.622,18.836 56.953,21.444 56.953,21.444 C56.195,22.013 55.307,22.013 54.776,22.013 ZM38.344,19.011 C38.344,19.011 54.776,19.011 54.776,19.011 C54.902,19.011 55.165,19.011 55.244,18.986 C55.244,18.986 58.854,16.412 58.854,16.412 C59.067,16.250 59.094,15.968 59.094,15.855 C59.094,15.742 59.067,15.460 58.821,15.275 C58.821,15.275 54.989,12.261 54.989,12.261 C54.891,12.184 54.739,12.066 54.643,12.006 C54.643,12.006 38.344,12.006 38.344,12.006 C38.344,12.006 38.344,19.011 38.344,19.011 Z",
    id: "path-1",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.565,25.068 C6.010,25.068 5.520,24.912 5.111,24.604 C5.111,24.604 1.550,22.254 1.550,22.254 C0.540,21.500 0.003,20.430 0.003,19.267 C0.003,18.103 0.540,17.033 1.476,16.330 C1.476,16.330 5.123,13.642 5.123,13.642 C5.878,13.073 6.740,13.007 7.321,13.007 C7.321,13.007 25.417,13.007 25.417,13.007 C26.245,13.007 27.344,13.679 27.344,14.508 C27.344,14.508 27.344,23.514 27.344,23.514 C27.344,24.343 26.245,25.015 25.417,25.015 C25.417,25.015 7.321,25.015 7.321,25.015 C7.241,25.015 7.162,25.026 7.084,25.034 C6.907,25.052 6.733,25.068 6.565,25.068 ZM6.564,22.065 C6.564,22.065 6.565,23.567 6.565,23.567 C6.565,23.567 6.565,22.065 6.565,22.065 C6.565,22.065 6.564,22.065 6.564,22.065 ZM7.321,16.009 C7.002,16.009 6.918,16.049 6.909,16.053 C6.909,16.053 3.266,18.740 3.266,18.740 C3.038,18.911 3.003,19.144 3.003,19.267 C3.003,19.389 3.038,19.622 3.275,19.800 C3.275,19.800 6.696,22.057 6.696,22.057 C6.722,22.054 6.748,22.051 6.774,22.048 C6.954,22.029 7.137,22.013 7.321,22.013 C7.321,22.013 24.344,22.013 24.344,22.013 C24.344,22.013 24.344,16.009 24.344,16.009 C24.344,16.009 7.321,16.009 7.321,16.009 Z",
    id: "path-2",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M25.417,42.027 C25.417,42.027 7.321,42.027 7.321,42.027 C6.542,42.027 5.757,41.760 5.111,41.275 C5.111,41.275 1.473,38.530 1.473,38.530 C0.540,37.830 0.003,36.751 0.003,35.574 C0.003,34.396 0.540,33.317 1.476,32.615 C1.476,32.615 5.103,29.849 5.103,29.849 C5.840,29.296 6.583,29.018 7.321,29.018 C7.321,29.018 25.417,29.018 25.417,29.018 C26.245,29.018 27.344,29.690 27.344,30.519 C27.344,30.519 27.344,40.526 27.344,40.526 C27.344,41.356 26.245,42.027 25.417,42.027 ZM7.321,32.020 C7.290,32.024 7.143,32.071 6.914,32.243 C6.914,32.243 3.285,35.010 3.285,35.010 C3.038,35.195 3.003,35.442 3.003,35.574 C3.003,35.705 3.038,35.952 3.275,36.130 C3.275,36.130 6.916,38.876 6.916,38.876 C7.041,38.971 7.189,39.025 7.321,39.025 C7.321,39.025 24.344,39.025 24.344,39.025 C24.344,39.025 24.344,32.020 24.344,32.020 C24.344,32.020 7.321,32.020 7.321,32.020 Z",
    id: "path-3",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M38.344,59.540 C38.344,61.474 36.777,63.042 34.844,63.042 C34.844,63.042 28.844,63.042 28.844,63.042 C26.911,63.042 25.344,61.474 25.344,59.540 C25.344,59.540 25.344,3.500 25.344,3.500 C25.344,1.566 26.911,-0.002 28.844,-0.002 C28.844,-0.002 34.844,-0.002 34.844,-0.002 C36.777,-0.002 38.344,1.566 38.344,3.500 C38.344,3.500 38.344,59.540 38.344,59.540 ZM35.344,3.500 C35.344,3.224 35.120,3.000 34.844,3.000 C34.844,3.000 28.844,3.000 28.844,3.000 C28.567,3.000 28.344,3.224 28.344,3.500 C28.344,3.500 28.344,59.540 28.344,59.540 C28.344,59.816 28.567,60.040 28.844,60.040 C28.844,60.040 34.844,60.040 34.844,60.040 C35.120,60.040 35.344,59.816 35.344,59.540 C35.344,59.540 35.344,3.500 35.344,3.500 Z",
    id: "path-4",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
};

GuideIcon.displayName = 'GuideIcon';
GuideIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (GuideIcon);

/***/ }),

/***/ "./components/icons/HospitalityIcon.js":
/*!*********************************************!*\
  !*** ./components/icons/HospitalityIcon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/HospitalityIcon.js";


var HospitalityIcon = function HospitalityIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Hospitality icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Hospitality icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.00065583,19.1339975 L6.97159608,19.7433611 C6.00604621,20.2797875 4.78846181,19.9318999 4.25204521,18.9663324 C3.71562861,18.000765 4.06350987,16.7831584 5.02905975,16.246732 L21.0861955,6.75505634 C22.8982977,5.74831455 25.1017023,5.74831455 26.9138045,6.75505634 L42.9709403,16.246732 C43.9364901,16.7831584 44.2843714,18.000765 43.7479548,18.9663324 C43.2115382,19.9318999 41.9939538,20.2797875 41.0284039,19.7433611 L40.0000729,19.134429 L40.0000729,40.8 C40.0000729,41.4627417 39.4628244,42 38.8000947,42 L27.2003061,42 C26.5375764,42 26.0003279,41.4627417 26.0003279,40.8 L26.0003279,34.4 C26.0003279,34.1790861 25.8212418,34 25.6003279,34 L22.4004008,34 C22.1794869,34 22.0004008,34.1790861 22.0004008,34.4 L22.0004008,40.8 C22.0004008,41.4627417 21.4631523,42 20.8004226,42 L9.20063397,42 C8.53790434,42 8.00065583,41.4627417 8.00065583,40.8 L8.00065583,19.1339975 Z M20,24 L27.9997814,24 C29.1043509,24 29.9997814,24.8954305 29.9997814,26 C29.9997814,27.1045695 29.1043509,28 27.9997814,28 L20,28 C18.8954305,28 18,27.1045695 18,26 C18,24.8954305 18.8954305,24 20,24 Z M12.000583,16.7654179 L12.000583,37.6 C12.000583,37.8209139 12.1796658,38 12.4005757,38 L17.6004809,38 C17.8213908,38 18.0004737,37.8209139 18.0004737,37.6 L18.0004737,32 C18.0004737,30.8954305 18.8959042,30 20.0004737,30 L28.000255,30 C29.1048245,30 30.000255,30.8954305 30.000255,32 L30.000255,37.6 C30.000255,37.8209139 30.1793379,38 30.4002478,38 L35.600153,38 C35.8210629,38 36.0001457,37.8209139 36.0001457,37.6 L36.0001457,16.7658494 L24.9712682,10.2350368 C24.3672341,9.89945622 23.6327659,9.89945622 23.0287318,10.2350368 L12.000583,16.7654179 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

HospitalityIcon.displayName = 'HospitalityIcon';
HospitalityIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (HospitalityIcon);

/***/ }),

/***/ "./components/icons/ItineraryIcon.js":
/*!*******************************************!*\
  !*** ./components/icons/ItineraryIcon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/ItineraryIcon.js";


var ItineraryIcon = function ItineraryIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Itinerary icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Itinerary icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14,4 L27.8023698,4 C29.4297508,4 30.9873262,4.66104678 32.1179335,5.83155782 L38.3155637,12.2479279 C39.3960788,13.3665789 40,14.861091 40,16.4163701 L40,38 C40,41.3137085 37.3137085,44 34,44 L14,44 C10.6862915,44 8,41.3137085 8,38 L8,10 C8,6.6862915 10.6862915,4 14,4 Z M14,8 C12.8954305,8 12,8.8954305 12,10 L12,38 C12,39.1045695 12.8954305,40 14,40 L34,40 C35.1045695,40 36,39.1045695 36,38 L36,16.4163701 C36,15.8979437 35.7986929,15.399773 35.4385212,15.0268894 L29.240891,8.61051927 C28.8640219,8.22034893 28.3448301,8 27.8023698,8 L14,8 Z M27.005231,10.1724704 L33.8275296,16.994769 C34.0574901,17.2247295 34.0574901,17.5975691 33.8275296,17.8275296 C33.7170987,17.9379605 33.5673222,18 33.4111493,18 L26.5888507,18 C26.2636374,18 26,17.7363626 26,17.4111493 L26,10.5888507 C26,10.2636374 26.2636374,10 26.5888507,10 C26.7450236,10 26.8948001,10.0620395 27.005231,10.1724704 Z M16,28 L32,28 C33.1045695,28 34,28.8954305 34,30 C34,31.1045695 33.1045695,32 32,32 L16,32 C14.8954305,32 14,31.1045695 14,30 C14,28.8954305 14.8954305,28 16,28 Z M16,34 L32,34 C33.1045695,34 34,34.8954305 34,36 C34,37.1045695 33.1045695,38 32,38 L16,38 C14.8954305,38 14,37.1045695 14,36 C14,34.8954305 14.8954305,34 16,34 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

ItineraryIcon.displayName = 'ItineraryIcon';
ItineraryIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (ItineraryIcon);

/***/ }),

/***/ "./components/icons/MountainBackdrop.js":
/*!**********************************************!*\
  !*** ./components/icons/MountainBackdrop.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/MountainBackdrop.js";

var mtnColor = '#fafafa';

var MountainBackdrop = function MountainBackdrop() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 5000,
    height: 2100,
    viewBox: "0 0 519 519",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      transform: 'translate(-1500px, 850px)',
      zIndex: -1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Mountain backdrop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("desc", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Mountain backdrop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "mountain-logo",
    transform: "translate(1.000000, 1.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Mountain",
    mask: "url(#mask-2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-150.000000, 155.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M70.257,80.631 L103.591,119.802 L121.096,121.995 L160.825,159.914 L232.207,74.676 L257.458,66.217 L298.872,0.407 L312.003,6.362 L347.356,70.291 L402.238,99.121 L431.866,135.471 L444.323,117.922 L454.088,117.922 L516.294,180.926 C514.938,227.594 501.18,324.727 478.211,362 L38.716,362 C14.493,322.698 0.519,222.831 0.519,173.275 C0.519,160.137 1.509,147.23 3.402,134.621 L32.213,88.467 L70.257,80.631 Z",
    id: "Path",
    fill: mtnColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))))));
};

MountainBackdrop.displayName = 'MountainBackdrop';
/* harmony default export */ __webpack_exports__["default"] = (MountainBackdrop);

/***/ }),

/***/ "./components/icons/PriceIcon.js":
/*!***************************************!*\
  !*** ./components/icons/PriceIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/PriceIcon.js";


var PriceIcon = function PriceIcon(_ref) {
  var className = _ref.className,
      size = _ref.size,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    onClick: onClick,
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Price icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Price icon",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Bounding_Boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Shape",
    points: "0 0 48 0 48 48 0 48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.9466835,43.70242 C19.4734572,44.3622825 17.7393701,43.8976353 16.7934499,42.5895645 L14.8328837,39.8783849 L11.5046502,39.5360745 C9.89886759,39.3709191 8.62942776,38.1014792 8.46427228,36.4956966 L8.12196194,33.1674631 L5.41078235,31.2068969 C4.10271152,30.2609767 3.6380643,28.5268897 4.29792678,27.0536633 L5.66559407,24.0001734 L4.29792678,20.9466835 C3.6380643,19.4734572 4.10271152,17.7393701 5.41078235,16.7934499 L8.12196194,14.8328837 L8.46427228,11.5046502 C8.62942776,9.89886759 9.89886759,8.62942776 11.5046502,8.46427228 L14.8328837,8.12196194 L16.7934499,5.41078235 C17.7393701,4.10271152 19.4734572,3.6380643 20.9466835,4.29792678 L24.0001734,5.66559407 L27.0536633,4.29792678 C28.5268897,3.6380643 30.2609767,4.10271152 31.2068969,5.41078235 L33.1674631,8.12196194 L36.4956966,8.46427228 C38.1014792,8.62942776 39.3709191,9.89886759 39.5360745,11.5046502 L39.8783849,14.8328837 L42.5895645,16.7934499 C43.8976353,17.7393701 44.3622825,19.4734572 43.70242,20.9466835 L42.3347528,24.0001734 L43.70242,27.0536633 C44.3622825,28.5268897 43.8976353,30.2609767 42.5895645,31.2068969 L39.8783849,33.1674631 L39.5360745,36.4956966 C39.3709191,38.1014792 38.1014792,39.3709191 36.4956966,39.5360745 L33.1674631,39.8783849 L31.2068969,42.5895645 C30.2609767,43.8976353 28.5268897,44.3622825 27.0536633,43.70242 L24.0001734,42.3347528 L20.9466835,43.70242 Z M19,22 C17.3431458,22 16,20.6568542 16,19 C16,17.3431458 17.3431458,16 19,16 C20.6568542,16 22,17.3431458 22,19 C22,20.6568542 20.6568542,22 19,22 Z M29,32 C27.3431458,32 26,30.6568542 26,29 C26,27.3431458 27.3431458,26 29,26 C30.6568542,26 32,27.3431458 32,29 C32,30.6568542 30.6568542,32 29,32 Z M19.7519869,39.8546212 L22.6075637,38.5755998 C23.4935633,38.178758 24.5067836,38.178758 25.3927831,38.5755998 L28.2483599,39.8546212 L30.0818513,37.3191678 C30.6507284,36.5324929 31.528203,36.0258828 32.493922,35.9265581 L35.6064348,35.6064348 L35.9265581,32.493922 C36.0258828,31.528203 36.5324929,30.6507284 37.3191678,30.0818513 L39.8546212,28.2483599 L38.5755998,25.3927831 C38.178758,24.5067836 38.178758,23.4935633 38.5755998,22.6075637 L39.8546212,19.7519869 L37.3191678,17.9184956 C36.5324929,17.3496184 36.0258828,16.4721439 35.9265581,15.5064248 L35.6064348,12.3939121 L32.493922,12.0737887 C31.528203,11.9744641 30.6507284,11.4678539 30.0818513,10.681179 L28.2483599,8.14572558 L25.3927831,9.42474699 C24.5067836,9.82158884 23.4935633,9.82158884 22.6075637,9.42474699 L19.7519869,8.14572558 L17.9184956,10.681179 C17.3496184,11.4678539 16.4721439,11.9744641 15.5064248,12.0737887 L12.3939121,12.3939121 L12.0737887,15.5064248 C11.9744641,16.4721439 11.4678539,17.3496184 10.681179,17.9184956 L8.14572558,19.7519869 L9.42474699,22.6075637 C9.82158884,23.4935633 9.82158884,24.5067836 9.42474699,25.3927831 L8.14572558,28.2483599 L10.681179,30.0818513 C11.4678539,30.6507284 11.9744641,31.528203 12.0737887,32.493922 L12.3939121,35.6064348 L15.5064248,35.9265581 C16.4721439,36.0258828 17.3496184,36.5324929 17.9184956,37.3191678 L19.7519869,39.8546212 Z M31.4833804,16.5166196 C32.1722065,17.2054458 32.1722065,18.3222536 31.4833804,19.0110797 L19.0110797,31.4833804 C18.3222536,32.1722065 17.2054458,32.1722065 16.5166196,31.4833804 C15.8277935,30.7945542 15.8277935,29.6777464 16.5166196,28.9889203 L28.9889203,16.5166196 C29.6777464,15.8277935 30.7945542,15.8277935 31.4833804,16.5166196 Z",
    fill: "#31303D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

PriceIcon.displayName = 'PriceIcon';
PriceIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (PriceIcon);

/***/ }),

/***/ "./components/icons/RoutesIcon.js":
/*!****************************************!*\
  !*** ./components/icons/RoutesIcon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/icons/RoutesIcon.js";


var RoutesIcon = function RoutesIcon(_ref) {
  var size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 62 58",
    preserveAspectRatio: "xMidYMid",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Routes icon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "group-33svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.163,57.241 C2.706,57.241 -0.000,54.418 -0.000,51.076 C-0.000,51.076 -0.000,8.007 -0.000,8.007 C-0.000,5.060 2.440,2.256 5.581,1.885 C5.581,1.885 21.250,0.049 21.250,0.049 C22.046,0.049 23.000,0.655 23.000,1.777 C23.000,1.777 23.000,53.491 23.000,53.491 C23.000,54.015 22.824,54.444 22.708,54.674 C22.708,54.674 22.238,55.397 22.238,55.397 C22.238,55.397 21.338,55.511 21.338,55.511 C21.338,55.511 6.808,57.199 6.808,57.199 C6.567,57.228 6.404,57.241 6.163,57.241 ZM20.000,3.222 C20.000,3.222 6.146,4.867 6.146,4.867 C4.528,5.058 3.000,6.584 3.000,8.007 C3.000,8.007 3.000,51.076 3.000,51.076 C3.000,52.878 4.797,54.446 6.755,54.217 C6.755,54.217 20.000,52.687 20.000,52.687 C20.000,52.687 20.000,3.222 20.000,3.222 Z",
    id: "path-1",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M40.956,57.853 C40.898,57.853 41.053,57.850 40.996,57.843 C40.450,57.779 39.000,57.585 39.000,56.104 C39.000,56.104 39.000,4.109 39.000,4.109 C39.000,2.987 39.654,2.775 40.671,2.775 C40.677,2.775 40.683,2.775 40.688,2.775 C40.688,2.775 55.820,1.695 55.820,1.695 C59.225,1.490 62.000,3.942 62.000,7.651 C62.000,7.651 62.000,50.766 62.000,50.766 C62.000,54.080 59.401,56.725 56.237,56.919 C56.237,56.919 41.155,57.850 41.155,57.850 C41.125,57.852 40.987,57.853 40.956,57.853 ZM42.000,5.336 C42.000,5.336 42.000,54.810 42.000,54.810 C42.000,54.810 56.266,53.922 56.266,53.922 C57.851,53.825 59.000,52.498 59.000,50.766 C59.000,50.766 59.000,7.651 59.000,7.651 C59.000,6.021 58.140,4.377 56.213,4.495 C56.213,4.495 42.000,5.336 42.000,5.336 Z",
    id: "path-2",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M40.073,57.797 C40.013,57.797 39.952,57.793 39.892,57.786 C39.892,57.786 21.105,55.462 21.105,55.462 C20.352,55.370 20.000,54.731 20.000,53.972 C20.000,53.972 20.000,1.500 20.000,1.500 C20.000,1.070 19.971,0.661 20.292,0.376 C20.615,0.091 20.928,-0.043 21.363,0.010 C21.363,0.010 40.523,2.349 40.523,2.349 C41.275,2.442 42.000,3.081 42.000,3.840 C42.000,3.840 42.000,56.296 42.000,56.296 C42.000,56.726 41.602,57.135 41.281,57.420 C41.005,57.664 40.437,57.797 40.073,57.797 ZM23.000,52.643 C23.000,52.643 39.000,54.601 39.000,54.601 C39.000,54.601 39.000,5.167 39.000,5.167 C39.000,5.167 23.000,3.197 23.000,3.197 C23.000,3.197 23.000,52.643 23.000,52.643 Z",
    id: "path-3",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.784,40.179 C1.531,40.179 1.275,40.115 1.040,39.980 C0.321,39.568 0.072,38.651 0.483,37.932 C0.483,37.932 13.736,14.760 13.736,14.760 C14.030,14.245 14.583,13.951 15.193,14.012 C15.783,14.074 16.282,14.478 16.465,15.043 C16.465,15.043 21.751,31.385 21.751,31.385 C21.751,31.385 23.696,26.599 23.696,26.599 C23.849,26.226 24.144,25.929 24.516,25.776 C24.888,25.623 25.307,25.626 25.677,25.785 C25.677,25.785 41.017,32.363 41.017,32.363 C41.017,32.363 53.259,19.148 53.259,19.148 C53.821,18.540 54.771,18.506 55.377,19.067 C55.377,19.067 61.222,24.479 61.222,24.479 C61.830,25.042 61.867,25.992 61.304,26.600 C60.741,27.209 59.791,27.245 59.185,26.682 C59.185,26.682 54.439,22.289 54.439,22.289 C54.439,22.289 42.497,35.180 42.497,35.180 C42.065,35.646 41.387,35.789 40.807,35.539 C40.807,35.539 25.899,29.147 25.899,29.147 C25.899,29.147 22.980,36.328 22.980,36.328 C22.744,36.912 22.206,37.290 21.536,37.263 C20.906,37.240 20.357,36.825 20.164,36.225 C20.164,36.225 14.655,19.197 14.655,19.197 C14.655,19.197 3.087,39.423 3.087,39.423 C2.810,39.907 2.304,40.179 1.784,40.179 Z",
    id: "path-4",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

RoutesIcon.displayName = 'RoutesIcon';
RoutesIcon.defaultProps = {
  size: 48
};
/* harmony default export */ __webpack_exports__["default"] = (RoutesIcon);

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: AcclimatizeIcon, AddIcon, AvatarIcon, DownloadIcon, EmailIcon, FoodIcon, GearIcon, GroupIcon, GuideIcon, HospitalityIcon, ItineraryIcon, MountainBackdrop, PriceIcon, RoutesIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AcclimatizeIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcclimatizeIcon */ "./components/icons/AcclimatizeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcclimatizeIcon", function() { return _AcclimatizeIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AddIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddIcon */ "./components/icons/AddIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddIcon", function() { return _AddIcon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _AvatarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvatarIcon */ "./components/icons/AvatarIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarIcon", function() { return _AvatarIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DownloadIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DownloadIcon */ "./components/icons/DownloadIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadIcon", function() { return _DownloadIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _EmailIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailIcon */ "./components/icons/EmailIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailIcon", function() { return _EmailIcon__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FoodIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FoodIcon */ "./components/icons/FoodIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoodIcon", function() { return _FoodIcon__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _GearIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GearIcon */ "./components/icons/GearIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GearIcon", function() { return _GearIcon__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _GroupIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GroupIcon */ "./components/icons/GroupIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupIcon", function() { return _GroupIcon__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _GuideIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GuideIcon */ "./components/icons/GuideIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuideIcon", function() { return _GuideIcon__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _HospitalityIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HospitalityIcon */ "./components/icons/HospitalityIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HospitalityIcon", function() { return _HospitalityIcon__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ItineraryIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ItineraryIcon */ "./components/icons/ItineraryIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItineraryIcon", function() { return _ItineraryIcon__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _MountainBackdrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MountainBackdrop */ "./components/icons/MountainBackdrop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MountainBackdrop", function() { return _MountainBackdrop__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _PriceIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PriceIcon */ "./components/icons/PriceIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceIcon", function() { return _PriceIcon__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _RoutesIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RoutesIcon */ "./components/icons/RoutesIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesIcon", function() { return _RoutesIcon__WEBPACK_IMPORTED_MODULE_13__["default"]; });

















/***/ }),

/***/ "./components/styles/Button.js":
/*!*************************************!*\
  !*** ./components/styles/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1ynjabp-0"
})(["position:relative;display:flex;justify-content:center;align-items:center;height:2rem;min-width:3.2rem;color:", ";text-transform:uppercase;font-size:0.8rem;font-weight:900;white-space:nowrap;border:0;background:linear-gradient(to right,", ",", ");transition:transform 150ms ease-in-out,box-shadow 125ms ease-in;box-sizing:border-box;cursor:", ";@media (max-width:700px){font-size:0.8rem;padding:0 1rem;}&:hover,&:focus{transform:scale(1.035);filter:brightness(1.05);box-shadow:", ";outline:none;@media (max-width:700px){width:calc(100% - 10px);}}&:active{transform:scale(0.98);filter:brightness(1);}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.theme.bs;
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/styles/ContentContainer.js":
/*!***********************************************!*\
  !*** ./components/styles/ContentContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContentContainer",
  componentId: "k1xnn4-0"
})(["width:60%;font-size:0.9rem;margin-bottom:5rem;padding-top:", ";h2{font-family:", ";}"], function (props) {
  return props.paddingTop ? props.paddingTop : 0;
}, function (props) {
  return props.theme.headingFont;
});
/* harmony default export */ __webpack_exports__["default"] = (ContentContainer);

/***/ }),

/***/ "./components/styles/ContentSection.js":
/*!*********************************************!*\
  !*** ./components/styles/ContentSection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContentSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContentSection",
  componentId: "u9l5fo-0"
})(["border-bottom:1px solid ", ";h3,p,strong,.trip-section-title,.trip-section-sub-title{color:", ";}p,.trip-section-sub-title{padding:0 2rem;}h3,h4{font-family:", ";}.trip-section-title{display:flex;align-items:center;margin-top:0.5rem;svg{margin-right:0.5rem;}}.overview-section,.overview-content{padding:0;margin:1rem 0;}.basic-itinerary > p{margin:0 0 0 1rem;}.trip-section-sub-title{line-height:normal;margin:2rem 0 0;}.print-gear-list{color:", ";}.print-gear-list::before{content:' ';}"], function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.mdGrey;
}, function (props) {
  return props.theme.headingFont;
}, function (props) {
  return props.theme.dkBlue;
});
/* harmony default export */ __webpack_exports__["default"] = (ContentSection);

/***/ }),

/***/ "./components/styles/FooterNavStyles.js":
/*!**********************************************!*\
  !*** ./components/styles/FooterNavStyles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FooterNavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "FooterNavStyles",
  componentId: "sc-1xdykoq-0"
})(["position:relative;display:flex;flex-direction:column;margin:0;padding:0;font-size:1rem;p{display:inline-block;margin:0;line-height:1.5;}.footer-site-name{font-family:'radnika_next';margin:0 0 0 0.5rem;}.footer-logo{font-size:0.8rem;margin-bottom:1rem;}.footer-trips-heading{align-self:flex-end;font-size:0.8rem;line-height:2;text-transform:uppercase;color:white;}.footer-trips{align-self:flex-end;}a{position:relative;display:flex;padding:0;font-family:", ";font-weight:normal;font-size:0.8rem;color:white;white-space:nowrap;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:0.8rem;padding:0 15px;}&:hover,&:focus{color:", ";outline:none;}span{display:inline-block;}}.footer-links{display:inline-block;}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;a{font-size:0.6rem;}}"], function (props) {
  return props.theme.standardFont;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (FooterNavStyles);

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "bf5asu-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;border-radius:5px;padding:1rem;line-height:1.5;font-weight:600;opacity:", ";pointer-events:", ";transition:1s opacity ease-in;box-sizing:border-box;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;margin-bottom:0.5rem;font-size:0.8rem;border:none;border-radius:3px;&:focus{outline:0;border-color:", ";}}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.emptyCart ? 1 : 0.3;
}, function (props) {
  return props.emptyCart ? 'none' : 'auto';
}, function (props) {
  return props.theme.red;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/GearInfo.js":
/*!***************************************!*\
  !*** ./components/styles/GearInfo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/GearInfo.js";



var GearInfo = function GearInfo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "This list has been compiled to guide you on packing for your trip. The brands recommended are not required as different brands fit different than others. We highly recommend starting to shop months in advanced in order to allow enough time to choose wisely and get proper fitting equipment. Do not wait until the last minute. We understand this gear is expensive so shop around and look for sales, especially after the winter season has ended in your local area. Once you have this equipment it can be used for years on mountains similar in height, in any range throughout the world."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Most of these items are available for rent from Sierra Vista Expeditions on our", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gear-shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "print-gear-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "rental page")), ". You must submit your rental requests 60 days prior to your trip start date. Around 30 days before your start date you will receive your rental equipment in the mail. You are responsible for this equipment until it is shipped back to us once you have arrived home."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Please do not hesitate to contact us about any questions regarding any and all things related to your trip. We are here for you, and together we will make a safe, successful and memorable expedition for years to come."));
};

/* harmony default export */ __webpack_exports__["default"] = (GearInfo);

/***/ }),

/***/ "./components/styles/GearItem.js":
/*!***************************************!*\
  !*** ./components/styles/GearItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ItemContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemContent */ "./components/styles/ItemContent.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/GearItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StyledItemGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GearItem__StyledItemGroup",
  componentId: "nxiirt-0"
})(["     position:relative;display:grid;grid-template-columns:6% 84% 10%;padding:0.8rem;border:1px solid ", ";.gear-title{font-weight:bold;}.gear-desc{font-weight:450;margin:0.5rem 0;}.gear-brand{font-size:0.75rem;font-weight:bold;color:", ";}.add-icon{margin-left:auto;&:hover{cursor:pointer;path{fill:", ";}}}img{width:40px;height:40px;min-width:100%;}@media(max-width:1300px){padding:0.5rem 1rem;}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.mdGrey;
}, function (props) {
  return props.theme.mdBlue;
});

var GearItem =
/*#__PURE__*/
function (_Component) {
  _inherits(GearItem, _Component);

  function GearItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GearItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GearItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRentGear", function () {
      var title = _this.props.item.title;

      _this.props.addToCart(title);
    });

    return _this;
  }

  _createClass(GearItem, [{
    key: "render",
    value: function render() {
      var _this$props$item = this.props.item,
          brand = _this$props$item.brand,
          title = _this$props$item.title,
          desc = _this$props$item.desc,
          img = _this$props$item.img,
          required = _this$props$item.required,
          rentable = _this$props$item.rentable;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledItemGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "static/images/gear/".concat(img),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "gear-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "gear-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "gear-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, brand)), rentable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__["AddIcon"], {
        className: "add-icon",
        onClick: this.handleRentGear,
        size: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }]);

  return GearItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

GearItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    brand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    desc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    quantity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (GearItem);

/***/ }),

/***/ "./components/styles/GearList.js":
/*!***************************************!*\
  !*** ./components/styles/GearList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DownloadLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DownloadLink */ "./components/DownloadLink.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/GearList.js";



var StyledGearList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GearList__StyledGearList",
  componentId: "v0jdps-0"
})(["display:flex;justify-content:space-between;background-color:", ";padding:1rem;font-size:0.8rem;ul{list-style-type:none;width:30%;margin:0;padding:0;}"], function (props) {
  return props.theme.offWhite;
});

var GearList = function GearList(props) {
  var trek = props.trek;

  if (trek) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DownloadLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      linkText: "printable version",
      text: "Download a",
      url: "/static/trekking_gear_check_list.pdf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledGearList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Trekking Poles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Fleece Hat or Beanie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Baseball Cap or Sun Hat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Buff (neck gaiter)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Headlamp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Sunglasses"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Lightweight Baselayer Tops and Bottoms (1-2) Each"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Heavyweight Baselayer Bottom (1)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Synthetic Short Sleeve Shirts (1-2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Soft Shell Trekking Pants (1-2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Trekking Shorts (1)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Insulated Synthetic Pant, Full Side Zips"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Mid Layer Top"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Insulated Down or Synthetic Jacket")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Hard Shell Jacket with Hood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Hard Shell Pant, Full side Zips"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Light Trekking Boots or Shoes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Down Booties (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Mid to Heavyweight Socks (4)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Midweight Gloves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Duffle Bag 40-50 Liter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "0 Degree Sleeping Bag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Sleeping Pad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Backpack 30-40 Liter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Hydration System"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Thermos (1 Liter) (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Water Bottle (2) (1 liter bottles)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Pee Bottler (1 Liter)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Pee Funnel (women)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "PASSPORT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Travel Clothes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Non-cotton Underwear (4)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Sunscreen (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Lip Balm (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Contractor Bags (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Bic Lighters (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Hand Warmers (3-6)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "First Aid Kit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Knife"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Ear Plugs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Toiletry Kit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Camera"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Extra Batteries/ SD Cards"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Binoculars"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Energy Snacks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Fit and Able Body!"))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DownloadLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    linkText: "printable version",
    text: "Download a",
    url: "/static/climbing_gear_check_list.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledGearList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Basic Ice Axe With Adze"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Crampons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Climbing Specific Helmet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Alpine Climbing Harness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Rappel/Belay Device"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Locking Carabiners (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Non Locking Carabiner (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Trekking Poles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Prussik Cord (40ft)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Fleece Hat or Beanie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Balaclava"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Baseball Cap or Sun Hat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Buff (neck gaiter)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Headlamp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Glacier Glasses"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Ski Goggles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Lightweight Baselayer Tops and Bottoms (2) Each"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Heavyweight Baselayer Bottom (1)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Synthetic Short Sleeve Shirts (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Soft Shell Trekking Pants (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Soft Shell Climbing Pant")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Insulated Synthetic Pant, Full Side Zips"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Synthetic Soft Shell Jacket"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Mid Layer Top"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Insulated Synthetic Jacket"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Hard Shell Jacket with Hood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Hard Shell Pant, Full side Zips"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Down Parka with Hood"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Light Trekking Boots or Shoes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Down Booties (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Double Climbing Boots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Gaiters (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Mid to Heavyweight Socks (4)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Lightweight Gloves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "MidWeight Gloves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Heavyweight Gloves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Duffle Bag 150 Liter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Duffle Bag 40-50 Liter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "0 Degree Sleeping Bag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Sleeping Pad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Backpack 40-50 Liter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Hydration System")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Thermos (1 Liter) (optional)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Water Bottle (2) (1 liter bottles)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Pee Bottler (1 Liter)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Pee Funnel (women)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Travel Clothes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "PASSPORT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Non-cotton Underwear (4)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Sunscreen (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Lip Balm (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Contractor Bags (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Bic Lighters (2)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Hand Warmers (3-6)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "First Aid Kit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Knife"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Ear Plugs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Toiletry Kit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Camera"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Extra Batteries/ SD Cards"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Binoculars"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Energy Snacks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Fit and Able Body!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (GearList);

/***/ }),

/***/ "./components/styles/HeroImage.js":
/*!****************************************!*\
  !*** ./components/styles/HeroImage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");

var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/HeroImage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{opacity:0.45;transform:scale(0.9999);}100%{opacity:1;transform:scale(1);}"]);

var preloadImgWithPromise = function preloadImgWithPromise(src) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      resolve();
    };

    image.src = src;
  });
};

var StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
  displayName: "HeroImage__StyledImage",
  componentId: "sc-15vepgj-0"
})(["background-size:cover;width:100%;max-width:100%;height:auto;max-height:1072px;margin:", ";box-shadow:", ";animation:", " 1s ease-in-out;filter:contrast(1.1);"], function (props) {
  return props.page === 'home' ? 0 : props.theme.imgCrop;
}, function (props) {
  return props.theme.bs;
}, fadeIn);

var HeroImage =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(HeroImage, _React$PureComponent);

  function HeroImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeroImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeroImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loaded: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadImage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return preloadImgWithPromise(_this.props.src);

            case 3:
              _this.setState(function () {
                return {
                  loaded: true
                };
              });

              Object(_utils__WEBPACK_IMPORTED_MODULE_4__["safeCall"])(_this.props.notifyImgLoaded);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    })));

    return _this;
  }

  _createClass(HeroImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadImage();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          base64 = _this$props.base64,
          alt = _this$props.alt;
      var loaded = this.state.loaded;
      var currentSrc = loaded ? src : base64;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledImage, _extends({}, this.props, {
        src: currentSrc,
        alt: alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }));
    }
  }]);

  return HeroImage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

_defineProperty(HeroImage, "propTypes", {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  base64: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  notifyImgLoaded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape()
});

;
/* harmony default export */ __webpack_exports__["default"] = (HeroImage);

/***/ }),

/***/ "./components/styles/InclusionChart.js":
/*!*********************************************!*\
  !*** ./components/styles/InclusionChart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_price_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/price-data */ "./static/price-data.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/InclusionChart.js";



var StyledInclusionChart = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InclusionChart__StyledInclusionChart",
  componentId: "njaayg-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;width:100%;max-width:100%;margin-bottom:2rem;padding:2rem;background-color:rgba(225,225,225,0.4);box-sizing:border-box;ul{list-style-type:disc;padding-left:1rem;}li{font-size:0.8rem;line-height:1.5;margin:0.5rem 0;}.inclusion-title{display:inline-block;margin:0;padding:0;line-height:normal;font-size:0.8rem;font-style:italic;color:", ";border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.mdGrey;
}, function (props) {
  return props.theme.mdGrey;
});

var InclusionColumn = function InclusionColumn(_ref) {
  var data = _ref.data,
      included = _ref.included;
  var title = included ? 'Included in the price:' : 'Not included in the price:';
  var inclusions = included ? data.included : data.notIncluded;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "inclusion-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, inclusions.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, item);
  })));
};

var InclusionChart = function InclusionChart(_ref2) {
  var trip = _ref2.trip;
  var data = _static_price_data__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (tripData) {
    return tripData.trip === trip;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInclusionChart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InclusionColumn, {
    included: true,
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InclusionColumn, {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InclusionChart);

/***/ }),

/***/ "./components/styles/InfoCard.js":
/*!***************************************!*\
  !*** ./components/styles/InfoCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/InfoCard.js";



var StyledInfoCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InfoCard__StyledInfoCard",
  componentId: "sc-7wo6op-0"
})(["display:flex;width:100%;height:auto;color:", ";font-size:1rem;line-height:1.5;box-sizing:border-box;.icon-right-align{margin-left:auto;}"], function (props) {
  return props.theme.black;
});
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InfoCard__ImageContainer",
  componentId: "sc-7wo6op-1"
})(["position:relative;width:100%;height:100%;img{position:relative;width:100%;height:auto;box-shadow:", ";}"], function (props) {
  return props.theme.bs;
});
var InfoContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InfoCard__InfoContent",
  componentId: "sc-7wo6op-2"
})(["display:flex;flex-direction:column;width:100%;height:100%;padding:0 ", " 2rem ", ";text-align:", ";p{margin:0 0 0.5rem;font-size:1rem;}.info-title{display:flex;align-items:center;font-family:", ";font-size:1.2rem;svg{margin-right:1rem;}}"], function (props) {
  return props.imagePosition === 'right' ? '2rem' : 0;
}, function (props) {
  return props.imagePosition === 'left' ? '2rem' : 0;
}, function (props) {
  return props.imagePosition;
}, function (props) {
  return props.theme.headingFont;
});

var getImage = function getImage(imgSrc, title) {
  return imgSrc ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "static/images/".concat(imgSrc),
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })) : null;
};

var getInfoSection = function getInfoSection(text, title, imagePosition, sectionIcon) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoContent, {
    imagePosition: imagePosition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "info-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, sectionIcon, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, text));
};

var getIcon = function getIcon(name) {
  switch (name) {
    case 'food':
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["FoodIcon"], {
          size: 28,
          className: "icon-right-align",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        });
      }

    case 'gear':
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["GearIcon"], {
          size: 28,
          className: "icon-right-align",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        });
      }

    case 'guide':
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["GuideIcon"], {
          size: 28,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        });
      }

    case 'hospitality':
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["HospitalityIcon"], {
          size: 28,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        });
      }

    default:
      return null;
  }
};

var InfoCard = function InfoCard(_ref) {
  var imagePosition = _ref.imagePosition,
      icon = _ref.icon,
      imgSrc = _ref.imgSrc,
      title = _ref.title,
      text = _ref.text;
  var sectionIcon = getIcon(icon);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInfoCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, imagePosition === 'right' && getInfoSection(text, title, imagePosition, sectionIcon), getImage(imgSrc, title), imagePosition === 'left' && getInfoSection(text, title, imagePosition, sectionIcon));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoCard);

/***/ }),

/***/ "./components/styles/ItemContent.js":
/*!******************************************!*\
  !*** ./components/styles/ItemContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ItemContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ItemContent",
  componentId: "fo8yvs-0"
})(["position:relative;display:flex;flex-direction:column;background:white;min-width:100%;p{font-size:0.8rem;line-height:normal;font-weight:300;flex-grow:1;padding:0 1rem;margin:0;}.buttonList{display:grid;width:100%;border-top:1px solid ", ";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:", ";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}@media(max-width:1300px){min-width:100%;}"], function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (ItemContent);

/***/ }),

/***/ "./components/styles/NavMenu.js":
/*!**************************************!*\
  !*** ./components/styles/NavMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NavMenu",
  componentId: "sc-1eyvoz5-0"
})(["display:flex;flex-direction:column;font-family:", ";"], function (props) {
  return props.theme.standardFont;
});
/* harmony default export */ __webpack_exports__["default"] = (NavMenu);

/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-17wrysj-0"
})(["position:relative;display:flex;justify-self:end;margin:0;padding:0;max-width:100%;font-size:1rem;a{display:flex;align-items:center;position:relative;padding:0.5rem 1rem;color:", ";letter-spacing:0.5px;font-size:0.75rem;white-space:nowrap;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:0.8rem;padding:0 15px;}&:before{content:'';position:absolute;width:1px;height:40%;margin:auto 0;background:", ";left:0;top:0;bottom:0;}&:focus{text-decoration:none;}span{position:relative;transition:transform 100ms ease-in-out;&:after{content:'';position:absolute;height:4px;width:0;background:", ";margin-top:1rem;left:50%;opacity:0;transform:translateX(-50%);transition:opacity 250ms ease-in-out,width 250ms ease-in-out;transition-timing-function:cubic-bezier(1,-0.65,0,1.31);z-index:-1;}&:hover,&:focus{transform:scale(1.15);outline:none;&:after{opacity:1;width:calc(100% - 20px);}@media (max-width:700px){opacity:1;width:calc(100% - 10px);}}}}.nav-about-us{&:before{content:'';position:absolute;width:2px;height:40%;margin:auto 0;background:", ";left:0;top:0;bottom:0;}}@media (max-width:1300px){justify-content:center;width:100%;a{font-size:0.7rem;}}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.dkBlue;
});
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/PriceChart.js":
/*!*****************************************!*\
  !*** ./components/styles/PriceChart.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip/style/css */ "antd/lib/tooltip/style/css");
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_price_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/price-data */ "./static/price-data.js");


var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/PriceChart.js";



var StyledPriceChart = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "PriceChart__StyledPriceChart",
  componentId: "sc-1sbdsma-0"
})(["display:grid;grid-template-columns:60% 1fr;grid-gap:10px;width:100%;max-width:100%;ul{margin-top:0;list-style-type:none;}"]);
var StyledAddOn = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "PriceChart__StyledAddOn",
  componentId: "sc-1sbdsma-1"
})(["margin-left:0.2rem;color:", ";&:hover{cursor:pointer;}"], function (props) {
  return props.theme.dkBlue;
});
var addOnText = 'Add on price reflects the option for a single room and an individual tent while on the trip. The hotel rooms I book may have two single beds however you may choose to stay in your own room with this option.';

var PackageColumn = function PackageColumn(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, Object.values(items).map(function (item) {
    if (Array.isArray(item)) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: item[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, item[0]);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "add-on",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Single room/tent", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default.a, {
      placement: "bottom",
      title: addOnText,
      overlayStyle: {
        fontSize: '0.7rem',
        fontFamily: 'Arial, sans-serif'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledAddOn, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "add on")));
  }));
};

var PriceColumn = function PriceColumn(_ref2) {
  var items = _ref2.items;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object.values(items).map(function (item) {
    if (Array.isArray(item)) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: item[1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, item[1]);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, item);
  }));
};

var PriceChart = function PriceChart(_ref3) {
  var trip = _ref3.trip;
  var data = _static_price_data__WEBPACK_IMPORTED_MODULE_4__["default"].find(function (tripData) {
    return tripData.trip === trip;
  });
  var packages = data.prices;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledPriceChart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PackageColumn, {
    items: packages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PriceColumn, {
    items: packages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PriceChart);

/***/ }),

/***/ "./components/styles/RentalCartList.js":
/*!*********************************************!*\
  !*** ./components/styles/RentalCartList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var RentalCartList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RentalCartList",
  componentId: "sc-1te7spu-0"
})(["position:relative;display:flex;flex-direction:column;margin:2rem 0;a,p{font-size:0.8rem;font-weight:normal;letter-spacing:1.2px;}a:hover{color:", ";}"], function (props) {
  return props.theme.blue;
});
/* harmony default export */ __webpack_exports__["default"] = (RentalCartList);

/***/ }),

/***/ "./components/styles/RentalCartPanel.js":
/*!**********************************************!*\
  !*** ./components/styles/RentalCartPanel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var RentalCartPanel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "RentalCartPanel",
  componentId: "j4hfxj-0"
})(["position:relative;padding:2rem 1rem;h3{margin:1rem 0;line-height:normal;}p{font-size:0.8rem;font-weight:normal;color:", ";}.rental-agreement-link{font-size:0.65rem;font-weight:normal;letter-spacing:0.5px;line-height:normal;margin:1rem 0;padding:0;}"], function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (RentalCartPanel);

/***/ }),

/***/ "./components/styles/Tabs.js":
/*!***********************************!*\
  !*** ./components/styles/Tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Tabs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Tabs",
  componentId: "k72s4h-0"
})(["display:flex;border-bottom:1px solid ", ";padding-bottom:1rem;margin-bottom:1rem;.active-tab{font-weight:bold;color:", ";}span{font-family:", ";font-size:0.9rem;margin-right:2rem;transition:scale 150ms ease-in-out;cursor:pointer;}span:hover{transform:scale(1.1);color:", ";}"], function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.standardFont;
}, function (props) {
  return props.theme.blue;
});
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/styles/TripContainer.js":
/*!********************************************!*\
  !*** ./components/styles/TripContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0.25;\n    }\n\n    100% {\n        opacity: 1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var TripContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TripContainer",
  componentId: "sc-1ab96ld-0"
})(["position:relative;padding:0 8rem;font-family:", ";font-size:1rem;background-color:white;animation:", " 1s ease-in-out;"], function (props) {
  return props.theme.standardFont;
}, fadeIn);
/* harmony default export */ __webpack_exports__["default"] = (TripContainer);

/***/ }),

/***/ "./components/styles/TripContent.js":
/*!******************************************!*\
  !*** ./components/styles/TripContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TripContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TripContent",
  componentId: "fdfwe8-0"
})(["display:flex;justify-content:space-between;"]);
/* harmony default export */ __webpack_exports__["default"] = (TripContent);

/***/ }),

/***/ "./components/styles/TripDates.js":
/*!****************************************!*\
  !*** ./components/styles/TripDates.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/TripDates.js";


var StyledTripDates = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TripDates__StyledTripDates",
  componentId: "rgl2yd-0"
})(["display:grid;grid-template-columns:1fr;width:100%;max-width:100%;ul{list-style-type:none;}"]);

var TripDates = function TripDates(_ref) {
  var dates = _ref.dates,
      duration = _ref.duration;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Dates:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTripDates, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, dates.map(function (date) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, date, " ", duration);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TripDates);

/***/ }),

/***/ "./components/styles/TripHeader.js":
/*!*****************************************!*\
  !*** ./components/styles/TripHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TripHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "TripHeader",
  componentId: "sc-1if4l5w-0"
})(["display:flex;justify-content:space-between;padding:1rem;transform:translateY(-50px);background:white;border-bottom:1px solid ", ";h2{width:50%;max-width:50%;margin:0;font-family:", ";font-size:calc(0.5rem + 0.75vw);color:", ";}"], function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.headingFont;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["default"] = (TripHeader);

/***/ }),

/***/ "./components/styles/TripNav.js":
/*!**************************************!*\
  !*** ./components/styles/TripNav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TripNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "TripNav",
  componentId: "ghk07a-0"
})(["display:flex;justify-content:space-around;align-items:center;width:50%;margin:0;padding:0;font-size:0.9rem;list-style-type:none;a{position:relative;white-space:nowrap;border:0;transition:transform 200ms ease-in-out,filter 200ms ease-in-out,box-shadow 200ms ease-in-out;cursor:pointer;&:after{content:'';position:absolute;height:2px;width:0;background:", ";margin-top:1.40rem;left:50%;transform:translateX(-50%);transition:width 250ms ease-in-out;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);}&:hover,&:focus{outline:none;&:after{width:calc(100% - 10px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1200px){justify-content:center;width:100%;font-size:1rem;border-top:1px solid ", ";}"], function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (TripNav);

/***/ }),

/***/ "./components/styles/TripSidePanel.js":
/*!********************************************!*\
  !*** ./components/styles/TripSidePanel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/styles/TripSidePanel.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var TripSidePanel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TripSidePanel",
  componentId: "sc-1doxtxo-0"
})(["position:", ";top:", ";right:", ";flex:0 1 30%;max-width:372px;padding:2rem;padding-top:", ";font-size:0.9rem;background-color:rgba(225,225,225,0.4);box-sizing:border-box;p,ul{margin:0;}ul{list-style-type:disc;}p{font-weight:bold;}a::before{content:' ';}span,li,.staff-desc{font-size:0.8rem;line-height:1.5;}span,small,li,.staff-title,.staff-desc{color:", ";}.trip-dates,.staff-desc{font-family:", ";font-weight:normal;}.print-gear-list{color:", ";}.staff-heading,.staff-title{margin-top:0.5rem;}.staff-desc{margin:1rem 0;}"], function (props) {
  return props.fixed || props.scrollY > 880 ? 'fixed' : 'relative';
}, function (props) {
  return props.scrollY > 880 || props.fixed ? '75px' : null;
}, function (props) {
  return props.scrollY > 880 || props.fixed ? '128px' : null;
}, function (props) {
  return props.paddingTop ? props.paddingTop : '1rem';
}, function (props) {
  return props.theme.mdGrey;
}, function (props) {
  return props.theme.standardFont;
}, function (props) {
  return props.theme.dkBlue;
});

var SidePanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SidePanel, _React$Component);

  function SidePanel() {
    var _this;

    _classCallCheck(this, SidePanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SidePanel).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "detectScrollPosition", function () {
      _this.setState(function () {
        return {
          scrollY: window.scrollY
        };
      });
    });

    _this.panelRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      scrollY: 0
    };
    return _this;
  }

  _createClass(SidePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.detectScrollPosition);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.detectScrollPosition);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fixed = _this$props.fixed,
          paddingTop = _this$props.paddingTop;
      var scrollY = this.state.scrollY;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.panelRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TripSidePanel, {
        scrollY: scrollY,
        fixed: fixed,
        paddingTop: paddingTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return SidePanel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SidePanel);

/***/ }),

/***/ "./components/styles/index.js":
/*!************************************!*\
  !*** ./components/styles/index.js ***!
  \************************************/
/*! exports provided: Button, ContentContainer, ContentSection, Form, GearItem, GearInfo, GearList, HeroImage, InclusionChart, InfoCard, NavMenu, NavStyles, PriceChart, RentalCartList, RentalCartPanel, Tabs, TripContainer, TripContent, TripDates, TripHeader, TripNav, TripSidePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TripContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TripContainer */ "./components/styles/TripContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripContainer", function() { return _TripContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TripContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TripContent */ "./components/styles/TripContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripContent", function() { return _TripContent__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroImage */ "./components/styles/HeroImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroImage", function() { return _HeroImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TripHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TripHeader */ "./components/styles/TripHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripHeader", function() { return _TripHeader__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TripNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TripNav */ "./components/styles/TripNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripNav", function() { return _TripNav__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _TripSidePanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TripSidePanel */ "./components/styles/TripSidePanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripSidePanel", function() { return _TripSidePanel__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _TripDates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TripDates */ "./components/styles/TripDates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripDates", function() { return _TripDates__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/styles/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ContentContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentContainer */ "./components/styles/ContentContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentContainer", function() { return _ContentContainer__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ContentSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContentSection */ "./components/styles/ContentSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return _ContentSection__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Form */ "./components/styles/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _GearList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GearList */ "./components/styles/GearList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GearList", function() { return _GearList__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _GearItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GearItem */ "./components/styles/GearItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GearItem", function() { return _GearItem__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _GearInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./GearInfo */ "./components/styles/GearInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GearInfo", function() { return _GearInfo__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _InclusionChart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./InclusionChart */ "./components/styles/InclusionChart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InclusionChart", function() { return _InclusionChart__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NavMenu */ "./components/styles/NavMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavMenu", function() { return _NavMenu__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NavStyles */ "./components/styles/NavStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavStyles", function() { return _NavStyles__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _PriceChart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PriceChart */ "./components/styles/PriceChart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceChart", function() { return _PriceChart__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Tabs */ "./components/styles/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _RentalCartPanel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RentalCartPanel */ "./components/styles/RentalCartPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RentalCartPanel", function() { return _RentalCartPanel__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _RentalCartList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RentalCartList */ "./components/styles/RentalCartList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RentalCartList", function() { return _RentalCartList__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _InfoCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./InfoCard */ "./components/styles/InfoCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoCard", function() { return _InfoCard__WEBPACK_IMPORTED_MODULE_21__["default"]; });

























/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Style variables that are pass through context via ThemeProvider
 * This is injected in the Page component
 */
var theme = {
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  black: '#393939',
  blue: '#00BDFF',
  mdBlue: '#1c85f5',
  lightBlue: '#00dcff',
  dkBlue: '#137bc2',
  lightGrey: '#E1E1E166',
  mdGrey: '#555555',
  grey: '#3A3A3A',
  offWhite: '#EDEDED',
  red: '#FF0000',
  blueGradient: 'linear-gradient(to right, #00BDFF, #00dcff)',
  ltGrnGradient: 'linear-gradient(180deg, rgba(244,251,249,1) 0%, rgba(227,241,240,0.9976365546218487) 50%, rgba(236,245,245,1) 99%)',
  headingFont: 'radnika_next',
  standardFont: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif',
  top: '75px',
  maxWidth: '1300px',
  padding: '1rem 5rem',
  imgCrop: '0 0 -14%'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEndpoint", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var prodEndpoint = 'https://sierra-vista-yoga-prod.herokuapp.com/';
var perPage = 4;

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");



/**
 * Creates a client side application
 * ApolloClient is state management, aka, database on the client
 * withApollo (HOC) to enable ApolloClient when rendering on the server
 * @param {*} param0 
 */

function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: function request(operation) {
      // pass cookies through
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Application =
/*#__PURE__*/
function (_App) {
  _inherits(Application, _App);

  function Application() {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, _getPrototypeOf(Application).apply(this, arguments));
  }

  _createClass(Application, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",

    /**
     * Next.js custom lifecycle method to crawl through all pages
     * to get data that's needed on the server side before render.
     * This enables querying and mutating data on the server.
     * @param Component
     * @param ctx
     */
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Application;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(Application));

/***/ }),

/***/ "./static/price-data.js":
/*!******************************!*\
  !*** ./static/price-data.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var priceData = [{
  trip: 'ishinca',
  prices: {
    pkg1: ['2-3 climbers', '$3,275'],
    pkg2: ['4 climbers', '$2,975'],
    pkg3: ['5-6 climbers', '$2,775'],
    addOn: '$350'
  },
  included: ['All required transportation as stated in itinerary', 'All meals as stated in itinerary', 'Celebratory dinner upon successful completion of expedition', 'All hotel rooms, private double occupancy', 'Burros for personal and group gear to and from base camp', 'Cooking tent, dining tent, tables, and chairs', 'Stoves and fuel', 'Cook and/or assistant cook', 'Tents for base camp, double occupancy', 'Ropes for climbing', 'All park fees, conservation fees and highway fees'],
  notIncluded: ['International round-trip airfare to or from Lima', 'Dinners in Huaraz/Lima unless stated in Itinerary', 'Rescue or medical insurance, evacuation costs, insurance of any kind', 'Additional lodging/tent charges for single occupancy', 'Alcoholic beverages', 'Snacks/energy food during expedition', 'Personal climbing/trekking clothing', 'Personal climbing/trekking equipment', 'Staff gratuities', 'Charges incurred beyond the control of SierraVista Expeditions such as weather, delayed itinerary, cancelled flights, etc']
}, {
  trip: 'pisco',
  prices: {
    pkg1: ['2-3 climbers', '$3,275'],
    pkg2: ['4 climbers', '$2,975'],
    pkg3: ['5-6 climbers', '$2,775'],
    addOn: '$300'
  },
  included: ['All required transportation as stated in itinerary', 'All meals as stated in itinerary', 'Celebratory dinner upon successful completion of expedition', 'All hotel rooms, private double occupancy', 'Burros for personal and group gear to and from base camp', 'Cooking tent, dining tent, tables, and chairs', 'Stoves and fuel', 'Cook and/or assistant cook', 'Tents for base camp, double occupancy', 'Ropes for climbing', 'All park fees, conservation fees and highway fees'],
  notIncluded: ['International round-trip airfare to or from Lima', 'Dinners in Huaraz/Lima unless stated in Itinerary', 'Rescue or medical insurance, evacuation costs, insurance of any kind', 'Additional lodging/tent charges for single occupancy', 'Alcoholic beverages', 'Snacks/energy food during expedition', 'Personal climbing/trekking clothing', 'Personal climbing/trekking equipment', 'Staff gratuities', 'Charges incurred beyond the control of SierraVista Expeditions such as weather, delayed itinerary, cancelled flights, etc']
}, {
  trip: 'vallunaraju',
  prices: {
    pkg1: ['2-3 trekkers', '$3,275'],
    pkg2: ['4-5 trekkers', '$2,975'],
    pkg3: ['6-8 trekkers', '$2,775'],
    addOn: '$415'
  },
  included: ['All required transportation as stated in itinerary', 'All meals as stated in itinerary', 'Celebratory dinner upon successful completion of expedition', 'All hotel rooms, private double occupancy', 'Burros for personal and group gear to and from base camp', 'Cooking tent, dining tent, tables, and chairs', 'Stoves and fuel', 'Cook and/or assistant cook', 'Tents for base camp, double occupancy', 'Ropes for climbing', 'All park fees, conservation fees and highway fees'],
  notIncluded: ['International round-trip airfare to or from Lima', 'Dinners in Huaraz/Lima unless stated in Itinerary', 'Rescue or medical insurance, evacuation costs, insurance of any kind', 'Additional lodging/tent charges for single occupancy', 'Alcoholic beverages', 'Snacks/energy food during expedition', 'Personal climbing/trekking clothing', 'Personal climbing/trekking equipment', 'Staff gratuities', 'Charges incurred beyond the control of SierraVista Expeditions such as weather, delayed itinerary, cancelled flights, etc']
}, {
  trip: 'quilcayhuanca',
  prices: {
    pkg1: ['2-3 trekkers', '$2,875'],
    pkg2: ['4-5 trekkers', '$2,475'],
    pkg3: ['6-8 trekkers', '$2,275'],
    addOn: '$335'
  },
  included: ['All required transportation as stated in itinerary', 'All meals as stated in itinerary', 'Celebratory dinner upon successful completion of expedition', 'All hotel rooms, private double occupancy', 'Burros for personal and group gear to and from base camp', 'Cooking tent, dining tent, tables, and chairs', 'Stoves and fuel', 'Cook and/or assistant cook', 'Tents for base camp, double occupancy', 'All park fees, conservation fees and highway fees'],
  notIncluded: ['International round-trip airfare to or from Lima', 'Dinners in Huaraz/Lima unless stated in Itinerary', 'Rescue or medical insurance, evacuation costs, insurance of any kind', 'Additional lodging/tent charges for single occupancy', 'Alcoholic beverages', 'Snacks/energy food during expedition', 'Personal climbing/trekking clothing', 'Personal climbing/trekking equipment', 'Staff gratuities', 'Charges incurred beyond the control of SierraVista Expeditions such as weather, delayed itinerary, cancelled flights, etc']
}, {
  trip: 'chavin',
  prices: {
    pkg1: ['2-3 trekkers', '$2,875'],
    pkg2: ['4-5 trekkers', '$2,475'],
    pkg3: ['6-8 trekkers', '$2,275'],
    addOn: '$365'
  },
  included: ['All required transportation as stated in itinerary', 'All meals as stated in itinerary', 'Celebratory dinner upon successful completion of expedition', 'All hotel rooms, private double occupancy', 'Burros for personal and group gear to and from base camp', 'Cooking tent, dining tent, tables, and chairs', 'Stoves and fuel', 'Cook and/or assistant cook', 'Tents for base camp, double occupancy', 'Ropes for climbing', 'All park fees, conservation fees and highway fees'],
  notIncluded: ['International round-trip airfare to or from Lima', 'Dinners in Huaraz/Lima unless stated in Itinerary', 'Rescue or medical insurance, evacuation costs, insurance of any kind', 'Additional lodging/tent charges for single occupancy', 'Alcoholic beverages', 'Snacks/energy food during expedition', 'Personal climbing/trekking clothing', 'Personal climbing/trekking equipment', 'Staff gratuities', 'Charges incurred beyond the control of SierraVista Expeditions such as weather, delayed itinerary, cancelled flights, etc']
}, {
  trip: 'huayhuash',
  prices: {
    pkg1: ['2-3 trekkers', '$3,975'],
    pkg2: ['4-5 trekkers', '$3,475'],
    pkg3: ['6-8 trekkers', '$2,975'],
    addOn: '$335'
  },
  included: ['All required transportation as stated in itinerary', 'All meals as stated in itinerary', 'Celebratory dinner upon successful completion of expedition', 'All hotel rooms, private double occupancy', 'Burros for personal and group gear to and from base camp', 'Cooking tent, dining tent, tables, and chairs', 'Stoves and fuel', 'Cook and/or assistant cook', 'Tents for base camp, double occupancy', 'All park fees, conservation fees and highway fees'],
  notIncluded: ['International round-trip airfare to or from Lima', 'Dinners in Huaraz/Lima unless stated in Itinerary', 'Rescue or medical insurance, evacuation costs, insurance of any kind', 'Additional lodging/tent charges for single occupancy', 'Alcoholic beverages', 'Snacks/energy food during expedition', 'Personal climbing/trekking clothing', 'Personal climbing/trekking equipment', 'Staff gratuities', 'Charges incurred beyond the control of SierraVista Expeditions such as weather, delayed itinerary, cancelled flights, etc']
}];
/* harmony default export */ __webpack_exports__["default"] = (priceData);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: safeCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _safeCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeCall */ "./utils/safeCall.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeCall", function() { return _safeCall__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./utils/safeCall.js":
/*!***************************!*\
  !*** ./utils/safeCall.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeCall = function safeCall(func) {
  if (func && typeof func === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    func.call.apply(func, [null].concat(args));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (safeCall);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/popover/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/popover/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover/style/css");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "antd/lib/tooltip/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/tooltip/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip/style/css");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map