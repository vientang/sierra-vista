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
/* harmony import */ var _FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterNavStyles */ "./components/FooterNavStyles.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Footer.js";





var FooterImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Footer__FooterImage",
  componentId: "sc-1lh932w-0"
})(["position:absolute;object-fit:cover;width:100%;max-width:100%;max-height:100%;margin:0;filter:contrast(1.2) brightness(10%);"]);
var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.footer.withConfig({
  displayName: "Footer__StyledFooter",
  componentId: "sc-1lh932w-1"
})(["position:relative;display:grid;grid-template-columns:70% 15% 15%;justify-content:space-between;width:100%;max-width:100%;height:25rem;top:115px;bottom:0;overflow:hidden;padding:2rem 5rem;background-color:", ";border-top:1px solid ", ";box-sizing:border-box;"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.lightGrey;
});
var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__LogoContainer",
  componentId: "sc-1lh932w-2"
})(["position:relative;display:flex;align-items:center;margin-bottom:1rem;a{line-height:0;}"]);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterImage, {
    src: "static/mountain-gear.jpg",
    alt: "Photo by Blaise Vonlanthen on Unsplash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "45px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-site-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Sierra Vista Expeditions LLC")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gear-shop",
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
  }, "Gear Shop"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/static/rental_terms_release_of_liability.pdf",
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
  }, "Rental Agreement"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/static/terms-and-conditions.pdf",
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
  }, "Terms and Conditions"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/static/assumption-of-risk-release-of-liability.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Assumption of Risk and Liability"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "About Us")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-trips-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Treks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cordillera-huayhuash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Cordillera Huayhuash")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/chavin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Chavin de Huantar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/quilcayhuanca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Quilcayhuanca Valley"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterNavStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-trips-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Climbs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ishinca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Ishinca Valley")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pisco",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Pisco")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/vallunaraju",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-trips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Vallunaraju"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FooterNavStyles.js":
/*!***************************************!*\
  !*** ./components/FooterNavStyles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FooterNavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "FooterNavStyles",
  componentId: "z3yx41-0"
})(["position:relative;display:flex;flex-direction:column;margin:0;padding:0;font-size:1rem;p{display:inline-block;margin:0;}.footer-site-name,.footer-trips-heading,.footer-trips,.footer-links{color:", ";}.footer-site-name{width:100%;font-size:1rem;font-family:'radnika_next';white-space:nowrap;margin:0 0 0 1.2rem;}.footer-trips-heading{align-self:flex-end;font-size:0.8rem;line-height:2;text-transform:uppercase;}.footer-trips{align-self:flex-end;}.footer-links,.footer-trips{position:relative;display:inline-block;padding:0;font-family:", ";font-weight:normal;font-size:0.9rem;line-height:2.2;white-space:nowrap;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:0.8rem;padding:0 15px;}&:hover,&:focus{color:", ";outline:none;}span{display:inline-block;}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.standardFont;
}, function (props) {
  return props.theme.blue;
});
/* harmony default export */ __webpack_exports__["default"] = (FooterNavStyles);

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
})(["position:relative;display:flex;align-items:center;a{line-height:0;}"]);
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1i3qtuf-1"
})(["position:fixed;display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;top:0;width:100%;max-width:100%;min-height:5rem;padding:0 8rem;background-color:white;border-bottom:10px solid ", ";box-sizing:border-box;z-index:2;h3{font-size:1rem;line-height:normal;padding:0 1rem;margin:0;}a{&:focus{text-decoration:none;}}"], function (props) {
  return props.theme.black;
});

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Sierra Vista Expeditions")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Header));

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
/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavMenu */ "./components/NavMenu.js");
/* harmony import */ var _NavStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavStyles */ "./components/NavStyles.js");
/* harmony import */ var _static_trip_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/trip-data */ "./static/trip-data.js");


var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/components/Nav.js";






var getDateString = function getDateString(dates) {
  var start = dates[0].split(' ')[0];
  return new Date(start).toDateString();
};

var menu = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/apply",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Trip application"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
  className: "menu-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/static/rental_terms_release_of_liability.pdf",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  className: "menu-list-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Rental Agreement"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/static/terms-and-conditions.pdf",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  className: "menu-list-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Terms and Conditions"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/static/assumption-of-risk-release-of-liability.pdf",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  className: "menu-list-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Assumption of Risk and Liability")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/gear-shop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Gear shop"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
  className: "menu-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: {
    pathname: '/gear-shop',
    query: {
      active: 'trekking'
    }
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  className: "menu-list-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "Trekking gear"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: {
    pathname: '/gear-shop',
    query: {
      active: 'climbing'
    }
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  className: "menu-list-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "Climbing gear")))));
var trekMenu = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/cordillera-huayhuash",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "Cordillera Huayhuash"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  className: "menu-item-desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, getDateString(_static_trip_data__WEBPACK_IMPORTED_MODULE_6__["default"].huayhuash.dates)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/chavin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, "Chavin de Huantar"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  className: "menu-item-desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, "Inquire for dates"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/quilcayhuanca",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "Quilcayhuanca Valley"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  className: "menu-item-desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, getDateString(_static_trip_data__WEBPACK_IMPORTED_MODULE_6__["default"].quilcayhuanca.dates)))));
var climbMenu = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/ishinca",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, "Ishinca Valley"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  className: "menu-item-desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, getDateString(_static_trip_data__WEBPACK_IMPORTED_MODULE_6__["default"].ishinca.dates)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/pisco",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, "Pisco"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  className: "menu-item-desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, getDateString(_static_trip_data__WEBPACK_IMPORTED_MODULE_6__["default"].pisco.dates)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/vallunaraju",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  className: "menu-item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, "Vallunaraju"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  className: "menu-item-desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, getDateString(_static_trip_data__WEBPACK_IMPORTED_MODULE_6__["default"].vallunaraju.dates)))));

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: trekMenu,
    placement: "bottomRight",
    trigger: "hover",
    mouseEnterDelay: 0,
    overlayClassName: "ant-popover-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Treks")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: climbMenu,
    placement: "bottomRight",
    trigger: "hover",
    mouseEnterDelay: 0,
    overlayClassName: "ant-popover-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Climbs")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: menu,
    placement: "bottomRight",
    trigger: "hover",
    mouseEnterDelay: 0,
    overlayClassName: "ant-popover-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "About Us")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/NavMenu.js":
/*!*******************************!*\
  !*** ./components/NavMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NavMenu",
  componentId: "sc-18mu66q-0"
})(["display:flex;flex-direction:column;min-width:200px;font-family:", ";line-height:2;a:focus{text-decoration:none;}.menu-item-title,.menu-item-desc,.menu-list-item{padding:0;color:", ";&:hover,&:focus{color:", ";}}.menu-item-desc,.menu-list-item{margin:0 1rem;font-size:0.75rem;}.menu-item-title{position:relative;margin:0;font-size:0.8rem;color:", ";text-transform:uppercase;font-weight:bold;&:after{content:'';position:absolute;top:1.5rem;left:0;width:100%;height:2px;background-color:", ";}}.menu-list{list-style:none;margin:0.5rem 0;padding:0;line-height:1.75;}"], function (props) {
  return props.theme.standardFont;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.lightBlue;
}, function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (NavMenu);

/***/ }),

/***/ "./components/NavStyles.js":
/*!*********************************!*\
  !*** ./components/NavStyles.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "tzvia0-0"
})(["position:relative;display:flex;justify-self:end;align-items:center;margin:0;padding:0;max-width:100%;list-style:none;.nav-item{position:relative;margin:0;padding:0 1rem;color:", ";font-size:0.75rem;letter-spacing:0.5px;text-transform:uppercase;line-height:normal;transition:transform 100ms ease-in-out,opacity 100ms ease-in-out,width 100ms ease-in-out;cursor:pointer;&:before{content:'';position:absolute;width:1px;height:100%;margin:auto 0;background:", ";left:0;top:0;bottom:0;}&:after{content:'';position:absolute;height:4px;width:0;background:", ";margin-top:1rem;left:50%;opacity:0;transform:translateX(-50%);transition:opacity 250ms ease-in-out,width 250ms ease-in-out;transition-timing-function:cubic-bezier(1,-0.65,0,1.31);z-index:-1;}&:hover,&:focus{transform:scale(1.1);outline:none;&:after{opacity:1;width:calc(100% - 2rem);}@media (max-width:700px){opacity:1;width:calc(100% - 1rem);}}}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightGrey;
}, function (props) {
  return props.theme.lightBlue;
});
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

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
  var data = _taggedTemplateLiteral(["\n    @font-face {\n        font-family: 'radnika_next';\n        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n        font-weight: normal;\n        font-style: normal;\n    }\n    html: {\n        box-sizing: border-box;\n        font-size: 10px;\n    }\n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n    body {\n        margin: 0;\n        padding: 0;\n        font-family: 'radnika_next';\n        font-size: 1.2rem;\n        line-height: 2;\n    }\n    a {\n        text-decoration: none;\n        color: ", ";\n    }\n    .ant-popover-menu {\n        .ant-popover-inner-content {\n            border-radius: 2px;\n            background: ", ";\n        }\n        .ant-popover-content {\n            .ant-popover-arrow {\n                border-top-color: ", ";\n                border-right-color: transparent;\n                border-bottom-color: transparent;\n                border-left-color: ", ";\n            }\n        }\n    }\n"]);

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

Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].black, _theme__WEBPACK_IMPORTED_MODULE_5__["default"].grey, _theme__WEBPACK_IMPORTED_MODULE_5__["default"].grey, _theme__WEBPACK_IMPORTED_MODULE_5__["default"].grey);
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-1yp396i-0"
})(["color:", ";overflow:hidden;"], function (props) {
  return props.theme.black;
});
var InnerPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__InnerPage",
  componentId: "sc-1yp396i-1"
})(["position:relative;max-width:100%;top:", ";z-index:0;"], function (props) {
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
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

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
  lightBlue: '#00dcff',
  mdBlue: '#1c85f5',
  dkBlue: '#137bc2',
  lightGrey: '#E1E1E166',
  grey: '#3A3A3A',
  mdGrey: '#555555',
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");

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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_4__["default"])(Application));

/***/ }),

/***/ "./static/trip-data.js":
/*!*****************************!*\
  !*** ./static/trip-data.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var trips = {
  huayhuash: {
    name: 'Cordillera Huayhuash',
    url: '/cordillera-huayhuash',
    application: 'trip_application.pdf',
    heroImg: 'static/images/boat.jpg',
    base64: 'static/images/boat-blur.jpg',
    gearList: 'trekking_gear_check_list.pdf',
    dates: ['5/29/19 - 6/12/19', '8/7/19 - 8/21/19'],
    duration: '(15 days)',
    skillLevel: 4,
    title: 'Cordillera Huayhuash 10 Day Circuit',
    overview: ['The Cordillera Huayhuash is an isolated and compact collection of mountains in the Peruvian Andes. Lying 100km south of Huaraz, this range hosts less trekkers and climbers, due to it\'s isolation. Ranked one of the top 10 treks in the world, trekking in the Huayhuash will never disappoint. Our Itinerary is a shortened version of the traditional 12-16 day trek. Due to recent improvements with access, this is made possible.', 'The Cordillera Huayhuash was a completely unprotected area until 2002, when the Peruvian government declared it a reserved area. However, the actual owners of this land, the communities situated around the range, have designated their own respective holdings, which they themselves manage. April through October is considered the dry season, with low chances of wind and rain. Temperatures can be up to 70 degrees on a bright sunny day, while dropping at or just below freezing in the early morning.'],
    itinerary: {
      basic: ['Arrive in Lima', 'Luxury Bus Lima to Huaraz', 'Acclimatization day hike', 'Acclimatization day hike', 'Drive Huaraz to Mantacancha camp at Cuartelhuain', 'Hike to laguna Mitucocha camp at laguna Carhuacocha', 'Rest day at laguna Carhuacocha', 'Hike Carnicero pass to Huayhuash camp', 'Hike Portachuelo pass to camp at laguna Viconga', 'Rest day at laguna Viconga', 'Hike Cuyoc pass camp at Rinconada', 'Hike to Huatiac camp', 'Hike Tapush pass and Yaucha pass camp at laguna Jahuacocha', 'Hike Pampa Llamac pass to Llamac, transport back to Huaraz', 'Luxury bus Huaraz to Lima, depart Lima'],
      detailed: ['Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you. Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.', 'Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz 3,050m (10,000 ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.', 'Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200 ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'Starting early again we will take our transportation to the trail head of Laguna Churup, our second acclimatization day hike. Lunch will be provided at the lake 4,450m (14,600 ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'After an early breakfast we will drive 3-4 hours to the village of Llamac 3,300m (10,825 ft). Once we arrive we will meet our burro team and the handlers. While we are eating lunch, the animals will be packed with all necessary group and personal gear for the next 8 days. After lunch we will begin hiking along the Quero river to our first nights camp at Cuartelhain 4,150m (13,615 ft). 5-6 hours total hiking time. All meals included.', 'After departing camp we will hike the Cacananpunta pass at 4,700m (15,420 ft). This pass marks the Andean Continental Divide, which is the watershed from the Andes to the Amazon and South Atlantic Ocean. Once over our second pass, Carhuac 4,650m (15,255 ft), we will be struck with the mighty views of Yerupaja 6,634m (21,765 ft) and Siula Grande 6,344m (20,813 ft). Siula Grande was made famous from the book and film Touching the Void, Simon Yates and Joe Simpson. We will descend the pass into a grassy valley and make our camp at laguna Carhuacocha 4,150m (13,615ft). This lake is renowned for its crystal turquoise water. On clear calm days, the lake has a perfect reflection of the mountains surrounding it. 6-7 hours hiking time. All meals included.', 'A well deserved rest. You can take a stroll around the lake, or just lay down, looking up at the peaks. All meals included.', 'Departing camp early we begin heading towards Carnicero pass 4,800m (15,750 ft). The pass is in between Nevado Carnicero 5,960m (19,550 ft) and Nevado Trapecio 5,653 (18,545 ft). Beautiful views of Lake Carnicero and Lake Atocshiac come into view. We descend into the small village of Huayhuash 4750m (15,585ft) and make our camp. Hiking time 6-7 hours. All meals included.', 'This morning we hike the Portachuelo de Huayhuash pass 4,750m (15,585 ft). From atop the pass will reveal outstanding views of the Cordillera Raura, another separate mountain range. Once we reach the lake of Viconga 4,395m (14,420 ft), we will soak our tired bodies in the warm natural hot springs. 5-6 hours total hiking time. All meals included.', 'Another well deserved rest day complete with a morning soak in the hot springs. Naps, hydration, and extra calories are key on this day. All meals included.', 'Once camp is departed we hike the Cuyoc pass 5,000m (16,405 ft). For those that opt out on a climb, this will be your high point. From here we have incredible views of the northern Huayhuash mountains and the southern Raura mountains. We descend and continue hiking to set up our camp in Rinconada 4,300m (14,110 ft). Hiking time 5-6 hours. All meals included.', 'Today the inclines decrease with easy walking to the village of Huayllap 3,700m (12,139 ft). Once in Huayllap, we continue up to the pastures of Huatiac 4,350m (14,270 ft) and make camp. 4-5 hours hiking time. All meals included.', 'Departing camp, we will hike the Yaucha pass at 4,800 (15,750 ft). Descending the pass we will trek into our camp at laguna Jahuacocha 4,150m (13,615ft). Hiking time 8 hours. All meals included.', 'Our last day of trekking, we depart the lake for the village of Llamac. Making a full circuit, this trek is not to be forgotten. At times it may test your physical and mental limits, but you just created memories that will last as long as you do. Once in the village, we will depart for our arranged accommodations in Huaraz. Hiking time 5-6 hours. Driving time 3-4 hours. Celebratory dinner provided by Sierra Vista Expeditions. All meals included.', 'Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima one additional night to enjoy fresh seafood and nightlife. Dinner not included.', 'Depart Lima for your next adventure.']
    },
    elevations: {
      huaraz: ['Huaraz', '3,050m (10,000ft)'],
      laguna: ['Laguna Wilcacocha', '3,720m (12,200ft)'],
      churup: ['Laguna Churup', '4,450m (14,600ft)'],
      llamac: ['Llamac', '3,300m (10,825ft)'],
      cuartelhuain: ['Cuartelhuain camp', '4,150m (13,615ft)'],
      cacananpunta: ['Cacananpunta pass', '4,700m (15,420ft)'],
      carhuac: ['Carhuac pass', '4,650m (15,255ft)'],
      carhuacocha: ['Laguna Carhuacocha', '4,150m (13,615ft)'],
      carnicero: ['Carnicero pass', '4,800m (15,750ft)'],
      huayhuash: ['Huayhuash village', '4,750m (15,585ft)'],
      portachuelo: ['Portachuelo de Huayhuash pass', '4,750m (15,585ft)'],
      viconga: ['Laguna Viconga', '4,395m (14,420ft)'],
      cuyoc: ['Cuyoc pass', '5,000m (16,405ft)'],
      rinconada: ['Rinconada camp', '4,300m (14,110ft)'],
      huayllap: ['Huayllap village', '3,700m (12,139ft)'],
      huatiac: ['Huatiac camp', '4,350m (14,270ft)'],
      yaucha: ['Yaucha pass', '4,800m (15,750ft)'],
      jahuacocha: ['Laguna Jahuacocha', '4,150m (13,615ft)']
    }
  },
  quilcayhuanca: {
    name: 'Quilcayhuanca Valley',
    url: '/quilcayhuanca',
    application: 'trip_application.pdf',
    heroImg: 'static/images/quilcayhuanca-valley-sharp.jpg',
    base64: 'static/images/quilcayhuanca-valley-blur.jpg',
    gearList: 'trekking_gear_check_list.pdf',
    dates: ['8/26/19 - 9/4/19'],
    duration: '(10 days)',
    skillLevel: 2,
    title: 'Quilcayhuanca Trek',
    overview: ['This relatively relaxed three night four day trek is an ideal entry level trip to high altitude trekking. The first days trek to Maparaju base camp is absolutely stunning. We will be hiking on soft grass areas know as pampas, all the while next to stunning alpine creeks, surrounded by incredible high valley walls, with high alpine wild flowers galore. Our second day will be spent hiking further into the valley to make our camp at the beautiful lake of Tullpacochca. Our active rest day includes a chance to explore a second valley, Quebrada Cayesh. Beautiful views of high mountains and opportunities to sight condors are included. Our final day, we descend gradually out of the valley to meet our transportation. For those that do not wish to add on a climb, you will be heading back to Lima for your flights home.'],
    itinerary: {
      basic: ['Arrive in Lima', 'Luxury Bus Lima to Huaraz', 'Acclimatization day hike', 'Acclimatization day hike', 'Drive to the base of Quilcayhuanca, hike to first camp', 'Hike to Laguna Tullpacocha', 'Active rest day', 'Hike out, stay in Huaraz', 'Luxury bus Huaraz to Lima', 'Depart Lima'],
      detailed: ['Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you. Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.', 'Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz 3,050m (10,000ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.', 'Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'Starting early again we will take our transportation to the trail head of Laguna Churup, our second acclimatization day hike. Lunch will be provided at the lake 4,450m (14,600ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'We will depart our hotel in Huaraz at 8am and drive with private transportaion to the base of the Quilcayhuanca valley. Here we will organize our burros and begin hiking to the base camp of Maparaju. 2-3 hours walking. All meals included.', 'After a leisurely morning, we will pack up camp and begin hiking to Lake Tullpacocha 4,250m (13,940). Here we will make our second nights camp. All meals included.', 'Today we have a nice active rest day. In the mid morning,, we will take a day hike up into the Cayesh valley. Or for those who wish to relax, you can spend your day hiking around the lake or just, read a book while looking at the mountains. All meals included.', 'Once breakfast is finished and the camp is packed, we will begin hiking out of the Quilcayhuanca valley. Once at the entrance, our transportation will be waiting to take us back to Huaraz. Celebratory dinner provided by SierraVista Expeditions. All meals included.', 'Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima one additional night to enjoy fresh seafood and nightlife. Dinner not included.', 'Depart Lima for your next adventure.']
    },
    elevations: {
      huaraz: ['Huaraz', '3,050m (10,000ft)'],
      laguna: ['Laguna Wilcacocha', '3,720m (12,200ft)'],
      churup: ['Laguna Churup', '4,450m (14,600ft)'],
      tullpacocha: ['Laguna Tullpacocha', '4,250m (13,940ft)']
    }
  },
  chavin: {
    name: 'Olleros to Chavin',
    url: '/chavin',
    application: 'trip_application.pdf',
    heroImg: 'static/images/chinchey-1.jpg',
    base64: 'static/images/chinchey-blur.jpg',
    gearList: 'trekking_gear_check_list.pdf',
    dates: ['Please inquire about trip dates'],
    duration: '',
    skillLevel: 3,
    title: 'Olleros to Chavin Cultural Trek 4 Days',
    overview: ['This 3 night 4 day trek is one of our easiest and entry level treks. The trekking route takes us from the west side of the Cordillera Blanca, over the Yanashallah pass, and down to the east side ending at Chavin de Huantar. Following an ancient Chavin civilization path, this trek is sacred. Chavin culture is considered the mother culture to all Peruvian people, including the Incas. We use Llamas on this trek, as was tradition, in ancient Chavin transportation methods.', 'Chavin de Huantar is an ancient archaeological site containing ruins and artifacts constructed at least by 3000BC. This area was occupied until 400-500BC by the Chavin, a major Pre-Incan Culture. This area is a UNESCO World Heritage Site. Primarily a Cermonial site, Chavin de Huantar provided a centralized location for all people of the region to gather for ceremony and worship. The site is located at the meeting point of two rivers, the Mosna river and the Huanchesca river. The meeting point of two rivers is referred to as tinkuy, in Quechua. Tinkuy can be defined as the harmonious meeting of opposing forces. It is suggested and well known that Chavin de Huantar did serve and continues to serve as the meeting place of the natural and cosmic forces.'],
    itinerary: {
      basic: ['Arrive in Lima', 'Luxury Bus Lima to Huaraz', 'Acclimatization day hike', 'Acclimatization day hike', 'Drive to Olleros, Hike to Sacracancha camp', 'Hike Yanashallash pass to Shonkoruri camp', 'Hike to Chavin de Huantar, stay in lodge', 'Private transportation back to Huaraz', 'Luxury bus Huaraz to Lima'],
      detailed: ['Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you. Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.', 'Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz 3,050m (10,000ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.', 'Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'Starting early again we will take our transportation to the trail head of Laguna Churup, our second acclimatization day hike. Lunch will be provided at the lake 4,450m (14,600ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'After breakfast in our hotel we will be transferred to the small town of Olleros 3,500m (11,480ft). Here we will meet and pack our llamas and begin hiking to our first nights camp Sacracancha 3,850m (12,630ft). A gradual ascent will lead us to a small lake with amazing views of the surrounding mountains. 4-5 hours hiking total. All meals included.', 'Departing our camp we begin to hike towards the Yanashallash pass 4,700m (15,420ft). This is our high point of the trek. Once over the pass, we begin a section of downhill to our second nights camp at Shonkoruri 4,090m (13,420ft). 5-6 hours total hiking. All meals included.', 'Once camp is packed, we make our way to the ancient ruins of Chavin de Huantar 3,150m (10,335ft). Today we are hiking through small Quechua farming communities, witnessing traditional living and peaceful lifestyles. Tonight we will stay in basic accommodations in Chavin. 3-4 hours hiking total. All meals included.', 'Departing in the morning after breakfast, Private transportation takes us back to our hotel in Huaraz. Celebratory dinner provided by SierraVista Expeditions. All meals included.', 'Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima one additional night to enjoy fresh seafood and nightlife. Dinner not included.', 'Depart Lima for your next adventure.']
    },
    elevations: {
      huaraz: ['Huaraz', '3,050m (10,000ft)'],
      laguna: ['Laguna Wilcacocha', '3,720m (12,200ft)'],
      olleros: ['Olleros', '3,500m (11,480ft)'],
      sacracancha: ['Sacracancha', '3,850m (12,630ft)'],
      yanashallash: ['Yanashallash pass', '4,700m (15,420ft)'],
      shonkoruri: ['Shonkoruri', '4,090m (13,420ft)'],
      chavin: ['Chavin de Huantar', '3,150m (10,335)']
    }
  },
  ishinca: {
    name: 'Ishinca Valley',
    url: '/ishinca',
    application: 'trip_application.pdf',
    heroImg: 'static/images/ishinca-climb-sharp.jpg',
    base64: 'static/images/ishinca-climb-blur.jpg',
    gearList: 'climbing_gear_check_list.pdf',
    dates: ['7/03/19 - 7/15/19'],
    duration: '(13 days)',
    skillLevel: 5,
    title: 'Ishinca Valley Expedition',
    overview: ['The Cordillera Blanca is the perfect destination for novice and advanced climbers alike. Also, for those looking to develop glacier experience, high altitude snow and ice climbing, climbers looking for partners or just to broaden your alpine climbing resume.', 'Sierra Vista Expeditions offers a cost effective high altitude expedition to 2 incredible introductory peaks. This expedition is limited to 6 climbers and two expedition leaders. With a 1:3 leader climber ratio.', 'Our experience shows that with a high level of fitness and basic crampon skills, you will enjoy the adventure more and perform better. We will review and discuss all practices needed for a safe, fast, light expedition of two 5,000 meter summits.', 'Our main priority on this expedition is safety through proper acclimatization, proper skills, techniques, and proper leadership. We want to emphasize, fast and light alpine climbing, while being well within our boundary\'s. This expedition is not guided, rather led. All expedition leaders have summited the mountains they are leading multiple times, and have adequate, sufficient experience to lead the team in a hazardous, high altitude environment.'],
    itinerary: {
      basic: ['Arrive in Lima, hotel in Lima', 'Luxury bus to Huaraz', 'Acclimatization hike to Laguna Wilcacocha, hotel in Huaraz', 'Acclimatization hike to Laguna Churup, hotel in Huaraz', 'Private transport to Pashpa, hike to Ishinca Valley base camp', 'Rest Day at base camp', 'Glacier review day on Ishinca', 'Climb Ishinca', 'Rest day at base camp', 'Climb Urus Este', 'Hike to Pashpa, private transport to hotel in Huaraz', 'Luxury bus to Lima, hotel in Lima', 'Depart Lima'],
      detailed: ['Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you. Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.', 'Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz 3,050m (10,000ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.', 'Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike.  Dinner not included.', 'Starting early again we will take our transportation to the trail head of Laguna Churup, our second acclimatization day hike. Lunch will be provided at the lake 4,450m (14,600ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'Our team will begin with breakfast at our hotel in Huaraz and depart at 8am. We will then make the one hour drive, as a team, with private transportation to Pashpa at the mouth of the Ishinca Valley. This is where we will meet the burros and arrieros. After loading, we will begin our 3 to 4 hour trek into Ishinca Valley base camp 4,350m (14,270ft) with light packs and lunch on the trail. Once camp is set up, we will enjoy a delicious and wholesome dinner surrounded with incredible views. All meals included.', 'Rest day at base camp. Today is a day for catching up on hydration and calories. We continue to acclimatize in anticipation for our summit days. All meals included.', 'Today we will depart base camp and hike 3 hours to the toe of the Ishinca glacier. Once on the glacier, we will practice roped travel, building anchors, crampon placement, ice axe placement, and crevasse rescue. We will stash all of our climbing gear and return to base camp. All meals included.', 'Departing base camp at 4 am, out by 5 am we will head back to the Ishinca gacier. Once on the glacier, our climb begins. After the summit 5,530m (18,145ft) and once off the glacier, we return to base camp. All meals included.', 'Relaxed morning and rest. After lunch, we will review crevasse rescue and anchor construction. All meals included.', 'Another alpine start leaving base camp by 5 am we will climb Urus Este 5,420m (17,782ft). Once off the glacier, we return to base camp in time for lunch. All meals included.', 'Depart base camp in the morning and trek back to Pashpa. Private transportation back to our hotel in Huaraz. Celebratory dinner provided by SierraVista Expeditions. All meals included.', 'Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima one additional night to enjoy fresh seafood and nightlife. Dinner not included.', 'Depart Lima for your next adventure.']
    },
    routes: ['We will begin on a trail immediately out of base camp on the north side of the valley. The trail is well marked and climbs 400 meters to the edge of the moraine ridge. Snow line is reached in 2-3 hours from base camp.', 'Climbing begins with a 45 degree snow slope while crossing over rock slabs leading to the base of the south east face snow slopes. The slopes climb 45 degree snow and relaxing gradually to the base of the east ridge.', 'The east ridge climbs at 45-50 degrees on snow, with some granite rock scrambling. The ridge leads to a 30 degree snow slope to the summit. The summit takes on average 1-3 hours from the base of the snow line.', 'Leading out of the south end of base camp lies a trail to take us to Laguna Ishinca. Once past the lake, the trail steepens and ends at the foot of the Ishinca glacier. 3-4 hours expected from base camp.', 'Once on the glacier the route takes us gradually onto the north west ridge, gaining the summit with a short but steep 50 degree snow climb. 2-3 hours from the edge of the glacier to summit.', 'Making a full traverse of the mountain, we will descend the south west ridge with gentle snow slopes leading off the glacier. Time to base camp can be anywhere from 3-5 hours total.'],
    elevations: {
      huaraz: ['Huaraz', '3,050m (10,000ft)'],
      laguna: ['Laguna Wilcacocha', '3,720m (12,200ft)'],
      churup: ['Laguna Churup', '4,450m (14,600ft)'],
      summit: ['Ishinca Summit', '5,530m (18,145ft)'],
      base: ['Ishinca Base Camp', '4,350m (14,270ft)'],
      uruseste: ['Urus Este', '5,420m (17,782ft)']
    },
    experience: ['Crampon and ice axe technique', 'Snow and ice anchors', 'Crevasse rescue', 'Moving as a rope team on a glacier', 'Snow and moderate ice climbing at altitude', 'Route finding and glacier navigation', 'Cold weather camping']
  },
  pisco: {
    name: 'Pisco',
    url: '/pisco',
    application: 'trip_application.pdf',
    heroImg: 'static/images/pisco.jpg',
    base64: 'static/images/pisco-blur.jpg',
    gearList: 'climbing_gear_check_list.pdf',
    dates: ['7/22/19 - 8/02/19'],
    duration: '(12 days)',
    skillLevel: 5,
    title: 'Pisco',
    overview: ['Pisco is a classic mountain in the Cordillera Blanca. With relatively high altitude, This makes a great choice for those new to the Cordillera Blanca, and also for those who are short on time. Once on the summit, we will have one of the best 360 degree views in the Cordillera Blanca.', 'Our main priority on this expedition is safety through proper acclimatization, proper skills, techniques, and proper leadership. We want to emphasize, fast and light alpine climbing, while being well within our boundary\'s. This expedition is not guided, rather led. All expedition leaders have summited the mountains they are leading multiple times, and have adequate, sufficient experience to lead the team in a hazardous, high altitude environment.'],
    itinerary: {
      basic: ['Arrive in Lima', 'Luxury Bus Lima to Huaraz', 'Acclimatization day hike', 'Drive to Pisco base camp', 'Move to Pisco cave camp', 'Rest day in cave camp', 'Carry to moraine camp, return to cave camp', 'Move to moraine camp, review climbing skills on glacier', 'Summit day back to cave camp', 'Return to Huaraz', 'Luxury bus Huaraz to Lima', 'Depart Lima'],
      detailed: ['Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you. Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.', 'Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz 3,050m (10,000ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.', 'Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'We will depart our hotel in Huaraz at 8am and drive as a team to Pisco base camp 3,810m (12,500ft) in the Llanganuco valley. The scenic 3 hour drive will take us through beautiful farming communities and past the notorious ice blue Llanganuco lakes. Here we will set up base camp and continue to acclimatize. All meals included.', 'From base camp we will hike as a team to Pisco cave camp 4,265m (14,000ft). All meals included.', 'Active rest day in cave camp. Today we will review glacier and crevasse rescue skills. All meals included.', 'Carry loads to moraine camp 4,877m (16,000ft). This day crosses a challenging morainal glacier. Return to sleep in cave camp. All meals included.', 'Move as a team to moraine camp. After lunch and a rest we head onto the glacier. We will review all skills covered on day 6, now including crampon and ice axe skills. This day greatly aids in acclimatization and allows a huge gain in summit possibility making tomorrows climb shorter. Return to moraine camp for the night. All meals included.', 'Summit day 5,750m (18,870ft). With an early alpine start, we will gain the summit of Pisco and return to cave camp. All meals included.', 'Depart from cave camp in the morning and trek back to base camp. With our private transportation we drive back to our hotel in Huaraz. Celebratory dinner provided by Sierra Vista Expeditions. All meals included.', 'Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima one additional night to enjoy fresh seafood and nightlife. Dinner not included.', 'Depart Lima for your next adventure.']
    },
    routes: ['We will climb the normal route on Pisco\'s south west ridge beginning with 3rd class rock scrambles before the snow line. From the toe of the glacier we climb moderate slopes to the saddle between Huandoy este and Pisco. With a gradual sloping glacier weaving around crevasses we climb to the final summit wall. The wall is often steep, requiring 60 degree snow and ice climbing and excellent crampon and ice axe placement.'],
    elevations: {
      huaraz: ['Huaraz', '3,050m (10,000ft)'],
      laguna: ['Laguna Wilcacocha', '3,720m (12,200ft)'],
      base: ['Pisco base camp', '3,810m (12,500ft)'],
      cave: ['Cave camp', '4,265m (14,000ft)'],
      Moraine: ['Moraine camp', '4,877m (16,000ft)'],
      summit: ['Pisco summit', '5750m (18,870ft)']
    },
    experience: ['Crampon and ice axe technique', 'Snow and ice anchors', 'Crevasse rescue', 'Moving as a rope team on a glacier', 'Snow and moderate ice climbing at altitude', 'Route finding and glacier navigation', 'Cold weather camping']
  },
  vallunaraju: {
    name: 'Vallunaraju',
    url: '/vallunaraju',
    application: 'trip_application.pdf',
    heroImg: 'static/images/mountain.jpg',
    base64: 'static/images/mountain-blur.jpg',
    gearList: 'climbing_gear_check_list.pdf',
    dates: ['6/17/19 - 6/28/19'],
    duration: '(12 days)',
    skillLevel: 5,
    title: 'Vallunaraju',
    overview: ['This relatively relaxed two night three day trek is an ideal entry level trip to high altitude trekking. The first days trek to Tullpacocha is absolutely stunning. We will be hiking on soft grass areas know as pampas, all the while next to stunning alpine creeks, surrounded by incredible high valley walls, with high alpine wild flowers galore. Our active rest day includes a chance to explore a second valley, Quebrada Cayesh. Beautiful views of high mountains and opportunities to sight condors are included. Our final day, we descend gradually out of the valley to meet our transportation and head back to Huraz.', 'Nevado Vallunaraju sits directly above the city of Huaraz with a striking twin summit. After our acclimatization day hikes and our 3 day trek we will be well acclimatized. Vallunaraju offers wonderful views of the city of Huaraz and the peaks that surround it. This is en entry level climb with relatively high altitude, and a great chance to practice cramponing, ice axe, and roped glacial travel techniques.', 'Our main priority on this expedition is safety through proper acclimatization, proper skills, techniques, and proper leadership. We want to emphasize, fast and light alpine climbing, while being well within our boundary\'s. This expedition is not guided, rather led. All expedition leaders have summited the mountains they are leading multiple times, and have adequate, sufficient experience to lead the team in a hazardous, high altitude environment.'],
    itinerary: {
      basic: ['Arrive in Lima', 'Luxury Bus Lima to Huaraz', 'Acclimatization day hike', 'Acclimatization day hike', 'Drive to the base of Quilcayhuanca, hike to first camp Tullpacocha', 'Active rest day', 'Hike to base of Quilcayhuanca, Drive back to Huaraz', 'Huaraz rest day, gear check', 'Drive to Vallunaraju base camp, carry to moraine camp', 'Climb Vallunaraju, back to Huaraz', 'Luxury bus Huaraz to Lima', 'Depart Lima'],
      detailed: ['Arrive into Lima Jorge Chavez International Airport, where the expedition leader will meet you. Private transportation will take us to our hotel in the district of Miraflores. Dinner not included.', 'Private transportation will take us as a team to the bus depot for our 7 hour journey to Huaraz 3,050m (10,000ft). Once in Huaraz we will have transport to our accommodations. Dinner not included.', 'Beginning early, we take private transportation to the trail head of Laguna Wilcacocha, to begin our first acclimatization day hike. Lunch will be provided at the lake 3,720m (12,200ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'Starting early again we will take our transportation to the trail head of Laguna Churup, our second acclimatization day hike. Lunch will be provided at the lake 4,450m (14,600ft). Once we return to the trail head, we will be transported back to our hotel in Huaraz. Gear check after our day hike. Dinner not included.', 'We will depart our hotel in Huaraz at 8am and drive with private transportaion to the base of the Quilcayhuanca valley. Here we will organize our burros and begin hiking to the head of the valley to make our first camp at Tullpacocha (4,250m) 13,940ft. 4-5 hours walking. All meals included.', 'Today we have a nice active rest day. In the mid morning,, we will take a day hike up into the Cayesh valley. Or for those who wish to relax, you can spend your day hiking around the lake or just read a book while looking at the mountains. All meals included.', 'Once breakfast is finished and the camp is packed, we will begin hiking out of the Quilcayhuanca valley. Once at the entrance, our transportation will be waiting to take us back to Huaraz. Dinner not included.', 'Active rest day in Huaraz. We have the recommended option of an additional acclimatization day hike to lake 69 4,550m (14,925ft) where lunch will be provided at the lake. Otherwise we will take a lazy rest day enjoying the town and restaurants, with a gear check in the evening. Dinner not included.', 'After breakfast in our hotel, we will depart for Vallunaraju base camp in our private transportation, driving right up to the camp. Here we will organize packs and begin our hike to moraine camp 4,760m (15,600ft) Total hiking 3-4 hours. Once camp is setup we will review glacier and crampon techniques. We will get a good nights rest in anticipation of our early morning summit bid. *Porters are provided for our carry to moraine camp. All meals included.', 'Leaving camp by 4am we will begin our climb to the summit of Vallunaraju 5,686m (18,650ft). A minimum of 4 hours climbing with a descent of 1-2 hours. Once back to moraine camp, we will spend 1-2 hours resting and make our way back to base camp. Here our transportation will be waiting to drive us back to our hotel in Huaraz. Celebratory dinner provided by SierraVista Expeditions. All meals included.', 'Depart Huaraz by bus for Lima. It is possible to fly out from Lima on this day for those with time constraints. Most flights back to North America depart late in the evening. Otherwise, stay in Lima one additional night to enjoy fresh seafood and nightlife. Dinner not included.', 'Depart Lima for your next adventure.']
    },
    routes: ['Departing moraine camp we will step onto the glacier after 20 minutes. Here we will gear up and begin our roped climb on the glacier. Walking on gradual glacial slopes while weaving around crevasses will take us to the col of the north and south summits. The north summit is higher and will be steeper, up to 40 degree snow climbing. If time allows, we will climb the south summit as well before returning to moraine camp. 4-5 hours to north summit, 1-2 hours descent.'],
    elevations: {
      huaraz: ['Huaraz', '3,050m (10,000ft)'],
      laguna: ['Laguna Wilcacocha', '3,720m (12,200ft)'],
      tullpacocha: ['Tullpacocha', '4,250m (13,940ft)'],
      churup: ['Laguna Churup', '4,450m (14,600ft)'],
      moraine: ['Vallunaraju Moraine Camp', '4,760m (15,600ft)'],
      summit: ['Vallunaraju Summit', '5,686m (18,650ft)']
    },
    experience: ['Crampon and ice axe technique', 'Snow and ice anchors', 'Crevasse rescue', 'Moving as a rope team on a glacier', 'Snow and moderate ice climbing at altitude', 'Route finding and glacier navigation', 'Cold weather camping']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (trips);

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