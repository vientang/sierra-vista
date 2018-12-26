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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

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
})(["border-bottom:1px solid ", ";"], function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (ContentSection);

/***/ }),

/***/ "./components/styles/HomeImage.js":
/*!****************************************!*\
  !*** ./components/styles/HomeImage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TripImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "HomeImage__TripImage",
  componentId: "y7p3sj-0"
})(["     background-size:cover;width:100%;max-width:100%;height:auto;box-shadow:", ";filter:brightness(80%);"], function (props) {
  return props.theme.bs;
});
/* harmony default export */ __webpack_exports__["default"] = (TripImage);

/***/ }),

/***/ "./components/styles/ReserveButton.js":
/*!********************************************!*\
  !*** ./components/styles/ReserveButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ReserveButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "ReserveButton",
  componentId: "sc-25oh8f-0"
})(["position:relative;display:flex;align-items:center;padding:0.5rem 1rem;text-transform:uppercase;font-size:0.8rem;font-weight:900;white-space:nowrap;border:0;background:", ";cursor:pointer;@media (max-width:700px){font-size:0.8rem;padding:0 15px;}&:after{content:'';position:absolute;height:2px;width:0;background:red;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:1rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 30px);}@media (max-width:700px){width:calc(100% - 10px);}}"], function (props) {
  return props.theme.blue;
});
/* harmony default export */ __webpack_exports__["default"] = (ReserveButton);

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

var TripContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TripContainer",
  componentId: "sc-1ab96ld-0"
})(["     position:relative;padding:", ";font-family:Arial,Helvetica,sans-serif;font-size:1rem;background-color:", ";"], function (props) {
  return props.theme.padding;
}, function (props) {
  return props.theme.offWhite;
});
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
})(["display:flex;justify-content:space-between;margin-top:1rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (TripContent);

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

var TripHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TripHeader",
  componentId: "sc-1if4l5w-0"
})(["display:flex;justify-content:space-between;border-bottom:1px solid ", ";h2{margin:0;}"], function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (TripHeader);

/***/ }),

/***/ "./components/styles/TripImage.js":
/*!****************************************!*\
  !*** ./components/styles/TripImage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TripImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "TripImage",
  componentId: "z00ndb-0"
})(["     background-size:cover;width:100%;max-width:100%;height:auto;margin:", ";box-shadow:", ";filter:contrast(1.1) brightness(90%);"], function (props) {
  return props.theme.imgCrop;
}, function (props) {
  return props.theme.bs;
});
/* harmony default export */ __webpack_exports__["default"] = (TripImage);

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
})(["display:flex;justify-content:space-around;align-items:center;width:50%;margin:0;padding:0;font-size:1rem;list-style-type:none;a{position:relative;white-space:nowrap;border:0;cursor:pointer;&:after{content:'';position:absolute;height:2px;width:0;background:red;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 10px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1200px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1rem;}"], function (props) {
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TripSidePanel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TripSidePanel",
  componentId: "sc-1doxtxo-0"
})(["flex:0 1 30%;padding:1rem;font-size:0.9rem;background-color:", ";ul{list-style-type:none;margin:0;}"], function (props) {
  return props.theme.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (TripSidePanel);

/***/ }),

/***/ "./components/styles/index.js":
/*!************************************!*\
  !*** ./components/styles/index.js ***!
  \************************************/
/*! exports provided: TripContainer, TripContent, TripImage, TripHeader, TripNav, TripSidePanel, ReserveButton, HomeImage, ContentSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TripContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TripContainer */ "./components/styles/TripContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripContainer", function() { return _TripContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TripContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TripContent */ "./components/styles/TripContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripContent", function() { return _TripContent__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TripImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TripImage */ "./components/styles/TripImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripImage", function() { return _TripImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TripHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TripHeader */ "./components/styles/TripHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripHeader", function() { return _TripHeader__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TripNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TripNav */ "./components/styles/TripNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripNav", function() { return _TripNav__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _TripSidePanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TripSidePanel */ "./components/styles/TripSidePanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TripSidePanel", function() { return _TripSidePanel__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ReserveButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReserveButton */ "./components/styles/ReserveButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReserveButton", function() { return _ReserveButton__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _HomeImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeImage */ "./components/styles/HomeImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeImage", function() { return _HomeImage__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ContentSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentSection */ "./components/styles/ContentSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentSection", function() { return _ContentSection__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles */ "./components/styles/index.js");
var _jsxFileName = "/Users/vientang/Documents/playground/sierra-vista/frontend/pages/index.js";




var StyledHomePage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__StyledHomePage",
  componentId: "sc-1lduvdi-0"
})(["padding:", ";font-family:Arial,Helvetica,sans-serif;font-size:1rem;"], function (props) {
  return props.theme.padding;
});
var StyledOverlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__StyledOverlay",
  componentId: "sc-1lduvdi-1"
})(["position:absolute;color:white;top:0;left:0;transform:translateY(525px);padding:", ";a{display:inline-block;}p,h2,span{margin:0;filter:drop-shadow(.05em .05em orange);}h2{font-size:1.2rem;text-transform:uppercase;line-height:normal;}p{font-size:3rem;}span{display:block;}"], function (props) {
  return props.theme.padding;
});
/**
 * Link from next binds HTML5 push state to anchor tags
 */

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles__WEBPACK_IMPORTED_MODULE_3__["HomeImage"], {
    src: "static/images/lake.jpg",
    alt: "Cordillera Huayhuash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledOverlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Next Trip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Cordillera Huayhash"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "April 14th - April 22nd"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cordillera-huayhuash",
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles__WEBPACK_IMPORTED_MODULE_3__["ReserveButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Reserve a spot")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHomePage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Here at Sierra Vista Expeditions, we offer a lower cost than most other companies based in the United States. This is because we are a small company with all of our own staff and equipment based in Peru. This allows us to pass on the savings to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "All of our trekking and climbing trips are assisted with animals, mainly burros (donkeys). Everything we need for the trip including your personal gear and clothing will be transported by burros, requiring you to carry only what you need for the day of hiking. This allows our guests to have lighter backpacks, and more energy spent enjoying the lakes and beauty of the mountains."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "The food we provide is excellent, hands down. We will be eating the local cuisine while on our trek or climb. Examples of meals are pastas, rice, potatoes, trout, chicken, beef, oatmeal, quinoa, puddings, eggs and breads. All of the food is purchased fresh in the local markets of Huaraz, and cooked with a high degree of sanitation by our certified cooks. We may be able to accommodate certain dietary restrictions with an advanced notice."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "We select excellent hotels in Lima and Huaraz with hot showers and continental breakfast provided. They are located in the best affluent areas, close to restaurants and many attractions. All of the transportation provided is with certified commercial drivers, and the vehicles are regularly inspected for safety and maintenance."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "The equipment we provide on our trips is of the highest quality. Popular brand names you may recognize are selected for their durability and comfort. We provide a dining tent complete with tables and chairs, plates and bowls, cups and cutlery. Also provided, is a complimentary 3 person tent with double occupancy during our treks and climbs. All ropes are provided for trips requiring them."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "We look forward to not only working with you but for you. Please contact us directly for any and all inquiries. We look forward to providing you with one of the best all inclusive international travel adventures available!")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 10:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=index.js.map