_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/_app"],{

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !./node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./global.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !./node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./global.css",
      function () {
        content = __webpack_require__(/*! !./node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./global.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./animate.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/animate.css/animate.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./animate.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/animate.css/animate.min.css",
      function () {
        content = __webpack_require__(/*! !../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./animate.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/animate.css/animate.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/bootswatch/dist/materia/bootstrap.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/bootswatch/dist/materia/bootstrap.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./bootstrap.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/bootswatch/dist/materia/bootstrap.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./bootstrap.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/bootswatch/dist/materia/bootstrap.min.css",
      function () {
        content = __webpack_require__(/*! !../../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./bootstrap.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/bootswatch/dist/materia/bootstrap.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./global.css":
/*!********************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./global.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\r\nbody,\r\nbody > div:first-child,\r\ndiv#__next,\r\ndiv#__next > div {\r\n  height: 100%;\r\n}\r\n\r\n.overflow {\r\n    height: 50%;\r\n    overflow: hidden;\r\n}\r\n\r\n.overflow .card-img-top {\r\n    transform: scale(1);\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.overflow .card-img-top:hover {\r\n    transform: scale(1.8);\r\n}\r\n\r\n#nprogress .bar {\r\n    background-color: orangered !important;\r\n}\r\n\r\n#nprogress .spinner-icon {\r\n    border-top-color: #ffbb00;\r\n    border-left-color: #ffbb00;\r\n}", "",{"version":3,"sources":["webpack://global.css"],"names":[],"mappings":"AAAA;;;;;EAKE,YAAY;AACd;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;AAC9B","sourcesContent":["html,\r\nbody,\r\nbody > div:first-child,\r\ndiv#__next,\r\ndiv#__next > div {\r\n  height: 100%;\r\n}\r\n\r\n.overflow {\r\n    height: 50%;\r\n    overflow: hidden;\r\n}\r\n\r\n.overflow .card-img-top {\r\n    transform: scale(1);\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.overflow .card-img-top:hover {\r\n    transform: scale(1.8);\r\n}\r\n\r\n#nprogress .bar {\r\n    background-color: orangered !important;\r\n}\r\n\r\n#nprogress .spinner-icon {\r\n    border-top-color: #ffbb00;\r\n    border-left-color: #ffbb00;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/animate.css/animate.min.css":
/*!**************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/animate.css/animate.min.css ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";/*!\n * animate.css - https://animate.style/\n * Version - 4.1.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2020 Animate.css\n */:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.animate__animated{animation-duration:1s;animation-duration:var(--animate-duration);animation-fill-mode:both}.animate__animated.animate__infinite{animation-iteration-count:infinite}.animate__animated.animate__repeat-1{animation-iteration-count:1;animation-iteration-count:var(--animate-repeat)}.animate__animated.animate__repeat-2{animation-iteration-count:2;animation-iteration-count:calc(var(--animate-repeat)*2)}.animate__animated.animate__repeat-3{animation-iteration-count:3;animation-iteration-count:calc(var(--animate-repeat)*3)}.animate__animated.animate__delay-1s{animation-delay:1s;animation-delay:var(--animate-delay)}.animate__animated.animate__delay-2s{animation-delay:2s;animation-delay:calc(var(--animate-delay)*2)}.animate__animated.animate__delay-3s{animation-delay:3s;animation-delay:calc(var(--animate-delay)*3)}.animate__animated.animate__delay-4s{animation-delay:4s;animation-delay:calc(var(--animate-delay)*4)}.animate__animated.animate__delay-5s{animation-delay:5s;animation-delay:calc(var(--animate-delay)*5)}.animate__animated.animate__faster{animation-duration:.5s;animation-duration:calc(var(--animate-duration)/2)}.animate__animated.animate__fast{animation-duration:.8s;animation-duration:calc(var(--animate-duration)*0.8)}.animate__animated.animate__slow{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2)}.animate__animated.animate__slower{animation-duration:3s;animation-duration:calc(var(--animate-duration)*3)}@media (prefers-reduced-motion:reduce),print{.animate__animated{animation-duration:1ms!important;transition-duration:1ms!important;animation-iteration-count:1!important}.animate__animated[class*=Out]{opacity:0}}@keyframes bounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0) scaleY(.95)}90%{transform:translate3d(0,-4px,0) scaleY(1.02)}}.animate__bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.animate__flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}.animate__pulse{animation-name:pulse;animation-timing-function:ease-in-out}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}.animate__rubberBand{animation-name:rubberBand}@keyframes shakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.animate__shakeX{animation-name:shakeX}@keyframes shakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}.animate__shakeY{animation-name:shakeY}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.animate__headShake{animation-timing-function:ease-in-out;animation-name:headShake}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.animate__swing{transform-origin:top center;animation-name:swing}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.animate__tada{animation-name:tada}@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}.animate__wobble{animation-name:wobble}@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animate__jello{animation-name:jello;transform-origin:center}@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}.animate__heartBeat{animation-name:heartBeat;animation-duration:1.3s;animation-duration:calc(var(--animate-duration)*1.3);animation-timing-function:ease-in-out}@keyframes backInDown{0%{transform:translateY(-1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}.animate__backInDown{animation-name:backInDown}@keyframes backInLeft{0%{transform:translateX(-2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}.animate__backInLeft{animation-name:backInLeft}@keyframes backInRight{0%{transform:translateX(2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}.animate__backInRight{animation-name:backInRight}@keyframes backInUp{0%{transform:translateY(1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}.animate__backInUp{animation-name:backInUp}@keyframes backOutDown{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(700px) scale(.7);opacity:.7}}.animate__backOutDown{animation-name:backOutDown}@keyframes backOutLeft{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(-2000px) scale(.7);opacity:.7}}.animate__backOutLeft{animation-name:backOutLeft}@keyframes backOutRight{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(2000px) scale(.7);opacity:.7}}.animate__backOutRight{animation-name:backOutRight}@keyframes backOutUp{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(-700px) scale(.7);opacity:.7}}.animate__backOutUp{animation-name:backOutUp}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.animate__bounceIn{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;transform:translate3d(0,25px,0) scaleY(.9)}75%{transform:translate3d(0,-10px,0) scaleY(.95)}90%{transform:translate3d(0,5px,0) scaleY(.985)}to{transform:translateZ(0)}}.animate__bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(25px,0,0) scaleX(1)}75%{transform:translate3d(-10px,0,0) scaleX(.98)}90%{transform:translate3d(5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}.animate__bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}.animate__bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}75%{transform:translate3d(0,10px,0) scaleY(.95)}90%{transform:translate3d(0,-5px,0) scaleY(.985)}to{transform:translateZ(0)}}.animate__bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.animate__bounceOut{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,2000px,0) scaleY(3)}}.animate__bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(-2000px,0,0) scaleX(2)}}.animate__bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}.animate__bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,-2000px,0) scaleY(3)}}.animate__bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate__fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeInTopLeft{0%{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopLeft{animation-name:fadeInTopLeft}@keyframes fadeInTopRight{0%{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopRight{animation-name:fadeInTopRight}@keyframes fadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomLeft{animation-name:fadeInBottomLeft}@keyframes fadeInBottomRight{0%{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomRight{animation-name:fadeInBottomRight}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animate__fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.animate__fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}.animate__fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}.animate__fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.animate__fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}.animate__fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.animate__fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}.animate__fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes fadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}.animate__fadeOutTopLeft{animation-name:fadeOutTopLeft}@keyframes fadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}.animate__fadeOutTopRight{animation-name:fadeOutTopRight}@keyframes fadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,100%,0)}}.animate__fadeOutBottomRight{animation-name:fadeOutBottomRight}@keyframes fadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}.animate__fadeOutBottomLeft{animation-name:fadeOutBottomLeft}@keyframes flip{0%{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}}.animate__animated.animate__flip{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.animate__flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.animate__flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.animate__flipOutX{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}.animate__flipOutY{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}@keyframes lightSpeedInRight{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInRight{animation-name:lightSpeedInRight;animation-timing-function:ease-out}@keyframes lightSpeedInLeft{0%{transform:translate3d(-100%,0,0) skewX(30deg);opacity:0}60%{transform:skewX(-20deg);opacity:1}80%{transform:skewX(5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInLeft{animation-name:lightSpeedInLeft;animation-timing-function:ease-out}@keyframes lightSpeedOutRight{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.animate__lightSpeedOutRight{animation-name:lightSpeedOutRight;animation-timing-function:ease-in}@keyframes lightSpeedOutLeft{0%{opacity:1}to{transform:translate3d(-100%,0,0) skewX(-30deg);opacity:0}}.animate__lightSpeedOutLeft{animation-name:lightSpeedOutLeft;animation-timing-function:ease-in}@keyframes rotateIn{0%{transform:rotate(-200deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateIn{animation-name:rotateIn;transform-origin:center}@keyframes rotateInDownLeft{0%{transform:rotate(-45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInDownLeft{animation-name:rotateInDownLeft;transform-origin:left bottom}@keyframes rotateInDownRight{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInDownRight{animation-name:rotateInDownRight;transform-origin:right bottom}@keyframes rotateInUpLeft{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInUpLeft{animation-name:rotateInUpLeft;transform-origin:left bottom}@keyframes rotateInUpRight{0%{transform:rotate(-90deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInUpRight{animation-name:rotateInUpRight;transform-origin:right bottom}@keyframes rotateOut{0%{opacity:1}to{transform:rotate(200deg);opacity:0}}.animate__rotateOut{animation-name:rotateOut;transform-origin:center}@keyframes rotateOutDownLeft{0%{opacity:1}to{transform:rotate(45deg);opacity:0}}.animate__rotateOutDownLeft{animation-name:rotateOutDownLeft;transform-origin:left bottom}@keyframes rotateOutDownRight{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}.animate__rotateOutDownRight{animation-name:rotateOutDownRight;transform-origin:right bottom}@keyframes rotateOutUpLeft{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}.animate__rotateOutUpLeft{animation-name:rotateOutUpLeft;transform-origin:left bottom}@keyframes rotateOutUpRight{0%{opacity:1}to{transform:rotate(90deg);opacity:0}}.animate__rotateOutUpRight{animation-name:rotateOutUpRight;transform-origin:right bottom}@keyframes hinge{0%{animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}.animate__hinge{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2);animation-name:hinge;transform-origin:top left}@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.animate__jackInTheBox{animation-name:jackInTheBox}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}.animate__rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}.animate__rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.animate__zoomIn{animation-name:zoomIn}@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomOutDown{animation-name:zoomOutDown;transform-origin:center bottom}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0)}}.animate__zoomOutLeft{animation-name:zoomOutLeft;transform-origin:left center}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0)}}.animate__zoomOutRight{animation-name:zoomOutRight;transform-origin:right center}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomOutUp{animation-name:zoomOutUp;transform-origin:center bottom}@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}.animate__slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}.animate__slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}.animate__slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.animate__slideOutUp{animation-name:slideOutUp}", "",{"version":3,"sources":["webpack://node_modules/animate.css/animate.min.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";/*!\n * animate.css - https://animate.style/\n * Version - 4.1.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2020 Animate.css\n */:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.animate__animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-fill-mode:both;animation-fill-mode:both}.animate__animated.animate__infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animate__animated.animate__repeat-1{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-iteration-count:var(--animate-repeat);animation-iteration-count:var(--animate-repeat)}.animate__animated.animate__repeat-2{-webkit-animation-iteration-count:2;animation-iteration-count:2;-webkit-animation-iteration-count:calc(var(--animate-repeat)*2);animation-iteration-count:calc(var(--animate-repeat)*2)}.animate__animated.animate__repeat-3{-webkit-animation-iteration-count:3;animation-iteration-count:3;-webkit-animation-iteration-count:calc(var(--animate-repeat)*3);animation-iteration-count:calc(var(--animate-repeat)*3)}.animate__animated.animate__delay-1s{-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation-delay:var(--animate-delay);animation-delay:var(--animate-delay)}.animate__animated.animate__delay-2s{-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-delay:calc(var(--animate-delay)*2);animation-delay:calc(var(--animate-delay)*2)}.animate__animated.animate__delay-3s{-webkit-animation-delay:3s;animation-delay:3s;-webkit-animation-delay:calc(var(--animate-delay)*3);animation-delay:calc(var(--animate-delay)*3)}.animate__animated.animate__delay-4s{-webkit-animation-delay:4s;animation-delay:4s;-webkit-animation-delay:calc(var(--animate-delay)*4);animation-delay:calc(var(--animate-delay)*4)}.animate__animated.animate__delay-5s{-webkit-animation-delay:5s;animation-delay:5s;-webkit-animation-delay:calc(var(--animate-delay)*5);animation-delay:calc(var(--animate-delay)*5)}.animate__animated.animate__faster{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-duration:calc(var(--animate-duration)/2);animation-duration:calc(var(--animate-duration)/2)}.animate__animated.animate__fast{-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-duration:calc(var(--animate-duration)*0.8);animation-duration:calc(var(--animate-duration)*0.8)}.animate__animated.animate__slow{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:calc(var(--animate-duration)*2);animation-duration:calc(var(--animate-duration)*2)}.animate__animated.animate__slower{-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-duration:calc(var(--animate-duration)*3);animation-duration:calc(var(--animate-duration)*3)}@media (prefers-reduced-motion:reduce),print{.animate__animated{-webkit-animation-duration:1ms!important;animation-duration:1ms!important;-webkit-transition-duration:1ms!important;transition-duration:1ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important}.animate__animated[class*=Out]{opacity:0}}@-webkit-keyframes bounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}@keyframes bounce{0%,20%,53%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0) scaleY(1.1);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0) scaleY(1.05);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0) scaleY(.95);transform:translateZ(0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-4px,0) scaleY(1.02);transform:translate3d(0,-4px,0) scaleY(1.02)}}.animate__bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.animate__flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__pulse{-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shakeX{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shakeX{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.animate__shakeX{-webkit-animation-name:shakeX;animation-name:shakeX}@-webkit-keyframes shakeY{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}20%,40%,60%,80%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}}@keyframes shakeY{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}20%,40%,60%,80%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}}.animate__shakeY{-webkit-animation-name:shakeY;animation-name:shakeY}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.animate__headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.animate__swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animate__jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes heartBeat{0%{-webkit-transform:scale(1);transform:scale(1)}14%{-webkit-transform:scale(1.3);transform:scale(1.3)}28%{-webkit-transform:scale(1);transform:scale(1)}42%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(1);transform:scale(1)}}.animate__heartBeat{-webkit-animation-name:heartBeat;animation-name:heartBeat;-webkit-animation-duration:1.3s;animation-duration:1.3s;-webkit-animation-duration:calc(var(--animate-duration)*1.3);animation-duration:calc(var(--animate-duration)*1.3);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes backInDown{0%{-webkit-transform:translateY(-1200px) scale(.7);transform:translateY(-1200px) scale(.7);opacity:.7}80%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes backInDown{0%{-webkit-transform:translateY(-1200px) scale(.7);transform:translateY(-1200px) scale(.7);opacity:.7}80%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.animate__backInDown{-webkit-animation-name:backInDown;animation-name:backInDown}@-webkit-keyframes backInLeft{0%{-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7);opacity:.7}80%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes backInLeft{0%{-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7);opacity:.7}80%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.animate__backInLeft{-webkit-animation-name:backInLeft;animation-name:backInLeft}@-webkit-keyframes backInRight{0%{-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7);opacity:.7}80%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes backInRight{0%{-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7);opacity:.7}80%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.animate__backInRight{-webkit-animation-name:backInRight;animation-name:backInRight}@-webkit-keyframes backInUp{0%{-webkit-transform:translateY(1200px) scale(.7);transform:translateY(1200px) scale(.7);opacity:.7}80%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes backInUp{0%{-webkit-transform:translateY(1200px) scale(.7);transform:translateY(1200px) scale(.7);opacity:.7}80%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.animate__backInUp{-webkit-animation-name:backInUp;animation-name:backInUp}@-webkit-keyframes backOutDown{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:translateY(700px) scale(.7);transform:translateY(700px) scale(.7);opacity:.7}}@keyframes backOutDown{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:translateY(700px) scale(.7);transform:translateY(700px) scale(.7);opacity:.7}}.animate__backOutDown{-webkit-animation-name:backOutDown;animation-name:backOutDown}@-webkit-keyframes backOutLeft{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7);opacity:.7}}@keyframes backOutLeft{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:translateX(-2000px) scale(.7);transform:translateX(-2000px) scale(.7);opacity:.7}}.animate__backOutLeft{-webkit-animation-name:backOutLeft;animation-name:backOutLeft}@-webkit-keyframes backOutRight{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7);opacity:.7}}@keyframes backOutRight{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateX(0) scale(.7);transform:translateX(0) scale(.7);opacity:.7}to{-webkit-transform:translateX(2000px) scale(.7);transform:translateX(2000px) scale(.7);opacity:.7}}.animate__backOutRight{-webkit-animation-name:backOutRight;animation-name:backOutRight}@-webkit-keyframes backOutUp{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:translateY(-700px) scale(.7);transform:translateY(-700px) scale(.7);opacity:.7}}@keyframes backOutUp{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}20%{-webkit-transform:translateY(0) scale(.7);transform:translateY(0) scale(.7);opacity:.7}to{-webkit-transform:translateY(-700px) scale(.7);transform:translateY(-700px) scale(.7);opacity:.7}}.animate__backOutUp{-webkit-animation-name:backOutUp;animation-name:backOutUp}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.animate__bounceIn{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*0.75);animation-duration:calc(var(--animate-duration)*0.75);-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0) scaleY(3);transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0) scaleY(.9);transform:translate3d(0,25px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,-10px,0) scaleY(.95);transform:translate3d(0,-10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,5px,0) scaleY(.985);transform:translate3d(0,5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0) scaleY(3);transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0) scaleY(.9);transform:translate3d(0,25px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,-10px,0) scaleY(.95);transform:translate3d(0,-10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,5px,0) scaleY(.985);transform:translate3d(0,5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0) scaleX(3);transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0) scaleX(1);transform:translate3d(25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(-10px,0,0) scaleX(.98);transform:translate3d(-10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(5px,0,0) scaleX(.995);transform:translate3d(5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0) scaleX(3);transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0) scaleX(1);transform:translate3d(25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(-10px,0,0) scaleX(.98);transform:translate3d(-10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(5px,0,0) scaleX(.995);transform:translate3d(5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0) scaleX(3);transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0) scaleX(1);transform:translate3d(-25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(10px,0,0) scaleX(.98);transform:translate3d(10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(-5px,0,0) scaleX(.995);transform:translate3d(-5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0) scaleX(3);transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0) scaleX(1);transform:translate3d(-25px,0,0) scaleX(1)}75%{-webkit-transform:translate3d(10px,0,0) scaleX(.98);transform:translate3d(10px,0,0) scaleX(.98)}90%{-webkit-transform:translate3d(-5px,0,0) scaleX(.995);transform:translate3d(-5px,0,0) scaleX(.995)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0) scaleY(5);transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,10px,0) scaleY(.95);transform:translate3d(0,10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-5px,0) scaleY(.985);transform:translate3d(0,-5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0) scaleY(5);transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}75%{-webkit-transform:translate3d(0,10px,0) scaleY(.95);transform:translate3d(0,10px,0) scaleY(.95)}90%{-webkit-transform:translate3d(0,-5px,0) scaleY(.985);transform:translate3d(0,-5px,0) scaleY(.985)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.animate__bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*0.75);animation-duration:calc(var(--animate-duration)*0.75);-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0) scaleY(.985);transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0) scaleY(3);transform:translate3d(0,2000px,0) scaleY(3)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0) scaleY(.985);transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0) scaleY(.9);transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0) scaleY(3);transform:translate3d(0,2000px,0) scaleY(3)}}.animate__bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0) scaleX(.9);transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0) scaleX(2);transform:translate3d(-2000px,0,0) scaleX(2)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0) scaleX(.9);transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0) scaleX(2);transform:translate3d(-2000px,0,0) scaleX(2)}}.animate__bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0) scaleX(.9);transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0) scaleX(2);transform:translate3d(2000px,0,0) scaleX(2)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0) scaleX(.9);transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0) scaleX(2);transform:translate3d(2000px,0,0) scaleX(2)}}.animate__bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0) scaleY(.985);transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0) scaleY(.9);transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0) scaleY(3);transform:translate3d(0,-2000px,0) scaleY(3)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0) scaleY(.985);transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0) scaleY(.9);transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0) scaleY(3);transform:translate3d(0,-2000px,0) scaleY(3)}}.animate__bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate__fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeInTopLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInTopLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInTopLeft{-webkit-animation-name:fadeInTopLeft;animation-name:fadeInTopLeft}@-webkit-keyframes fadeInTopRight{0%{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInTopRight{0%{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInTopRight{-webkit-animation-name:fadeInTopRight;animation-name:fadeInTopRight}@-webkit-keyframes fadeInBottomLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInBottomLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInBottomLeft{-webkit-animation-name:fadeInBottomLeft;animation-name:fadeInBottomLeft}@-webkit-keyframes fadeInBottomRight{0%{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInBottomRight{0%{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__fadeInBottomRight{-webkit-animation-name:fadeInBottomRight;animation-name:fadeInBottomRight}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animate__fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.animate__fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.animate__fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.animate__fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.animate__fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.animate__fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.animate__fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.animate__fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes fadeOutTopLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}}@keyframes fadeOutTopLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,-100%,0);transform:translate3d(-100%,-100%,0)}}.animate__fadeOutTopLeft{-webkit-animation-name:fadeOutTopLeft;animation-name:fadeOutTopLeft}@-webkit-keyframes fadeOutTopRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}}@keyframes fadeOutTopRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,-100%,0);transform:translate3d(100%,-100%,0)}}.animate__fadeOutTopRight{-webkit-animation-name:fadeOutTopRight;animation-name:fadeOutTopRight}@-webkit-keyframes fadeOutBottomRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}}@keyframes fadeOutBottomRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(100%,100%,0);transform:translate3d(100%,100%,0)}}.animate__fadeOutBottomRight{-webkit-animation-name:fadeOutBottomRight;animation-name:fadeOutBottomRight}@-webkit-keyframes fadeOutBottomLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}}@keyframes fadeOutBottomLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(-100%,100%,0);transform:translate3d(-100%,100%,0)}}.animate__fadeOutBottomLeft{-webkit-animation-name:fadeOutBottomLeft;animation-name:fadeOutBottomLeft}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animate__animated.animate__flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.animate__flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.animate__flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}.animate__flipOutX{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*0.75);animation-duration:calc(var(--animate-duration)*0.75);-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}.animate__flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-duration:calc(var(--animate-duration)*0.75);animation-duration:calc(var(--animate-duration)*0.75);-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedInRight{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes lightSpeedInRight{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__lightSpeedInRight{-webkit-animation-name:lightSpeedInRight;animation-name:lightSpeedInRight;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedInLeft{0%{-webkit-transform:translate3d(-100%,0,0) skewX(30deg);transform:translate3d(-100%,0,0) skewX(30deg);opacity:0}60%{-webkit-transform:skewX(-20deg);transform:skewX(-20deg);opacity:1}80%{-webkit-transform:skewX(5deg);transform:skewX(5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes lightSpeedInLeft{0%{-webkit-transform:translate3d(-100%,0,0) skewX(30deg);transform:translate3d(-100%,0,0) skewX(30deg);opacity:0}60%{-webkit-transform:skewX(-20deg);transform:skewX(-20deg);opacity:1}80%{-webkit-transform:skewX(5deg);transform:skewX(5deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__lightSpeedInLeft{-webkit-animation-name:lightSpeedInLeft;animation-name:lightSpeedInLeft;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOutRight{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOutRight{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.animate__lightSpeedOutRight{-webkit-animation-name:lightSpeedOutRight;animation-name:lightSpeedOutRight;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes lightSpeedOutLeft{0%{opacity:1}to{-webkit-transform:translate3d(-100%,0,0) skewX(-30deg);transform:translate3d(-100%,0,0) skewX(-30deg);opacity:0}}@keyframes lightSpeedOutLeft{0%{opacity:1}to{-webkit-transform:translate3d(-100%,0,0) skewX(-30deg);transform:translate3d(-100%,0,0) skewX(-30deg);opacity:0}}.animate__lightSpeedOutLeft{-webkit-animation-name:lightSpeedOutLeft;animation-name:lightSpeedOutLeft;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateIn{0%{-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.animate__rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes rotateInDownLeft{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInDownLeft{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.animate__rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateInDownRight{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInDownRight{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.animate__rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateInUpLeft{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInUpLeft{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.animate__rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateInUpRight{0%{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInUpRight{0%{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.animate__rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateOut{0%{opacity:1}to{-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@keyframes rotateOut{0%{opacity:1}to{-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}.animate__rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes rotateOutDownLeft{0%{opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes rotateOutDownLeft{0%{opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}.animate__rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateOutDownRight{0%{opacity:1}to{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutDownRight{0%{opacity:1}to{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.animate__rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes rotateOutUpLeft{0%{opacity:1}to{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutUpLeft{0%{opacity:1}to{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.animate__rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft;-webkit-transform-origin:left bottom;transform-origin:left bottom}@-webkit-keyframes rotateOutUpRight{0%{opacity:1}to{-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight{0%{opacity:1}to{-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}.animate__rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight;-webkit-transform-origin:right bottom;transform-origin:right bottom}@-webkit-keyframes hinge{0%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}.animate__hinge{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:calc(var(--animate-duration)*2);animation-duration:calc(var(--animate-duration)*2);-webkit-animation-name:hinge;animation-name:hinge;-webkit-transform-origin:top left;transform-origin:top left}@-webkit-keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.animate__jackInTheBox{-webkit-animation-name:jackInTheBox;animation-name:jackInTheBox}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}.animate__rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.animate__zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0)}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0)}}.animate__zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft;-webkit-transform-origin:left center;transform-origin:left center}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0)}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0)}}.animate__zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight;-webkit-transform-origin:right center;transform-origin:right center}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.animate__zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.animate__slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.animate__slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.animate__slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.animate__slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.animate__slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/bootswatch/dist/materia/bootstrap.min.css":
/*!****************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/bootswatch/dist/materia/bootstrap.min.css ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Bootswatch v4.6.0\n * Homepage: https://bootswatch.com\n * Copyright 2012-2021 Thomas Park\n * Licensed under MIT\n * Based on Bootstrap\n*//*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#2196f3;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#e51c23;--orange:#fd7e14;--yellow:#ff9800;--green:#4caf50;--teal:#20c997;--cyan:#9c27b0;--white:#fff;--gray:#666;--gray-dark:#222;--primary:#2196f3;--secondary:#fff;--success:#4caf50;--info:#9c27b0;--warning:#ff9800;--danger:#e51c23;--light:#fff;--dark:#222;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-size:.8125rem;font-weight:400;line-height:1.5;color:#444;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#2196f3;text-decoration:none;background-color:transparent}a:hover{color:#0a6ebd;text-decoration:underline}a:not([href]):not([class]){color:inherit;text-decoration:none}a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#666;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.03125rem}.h2,h2{font-size:1.625rem}.h3,h3{font-size:1.421875rem}.h4,h4{font-size:1.21875rem}.h5,h5{font-size:1.015625rem}.h6,h6{font-size:.8125rem}.lead{font-size:1.015625rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.015625rem}.blockquote-footer{display:block;font-size:80%;color:#666}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#666}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212121;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212121}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#444}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#444;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#c1e2fc}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#8cc8f9}.table-hover .table-primary:hover{background-color:#a9d7fb}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#a9d7fb}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#fff}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#fff}.table-hover .table-secondary:hover{background-color:#f2f2f2}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#f2f2f2}.table-success,.table-success>td,.table-success>th{background-color:#cde9ce}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#a2d5a4}.table-hover .table-success:hover{background-color:#bbe1bd}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#bbe1bd}.table-info,.table-info>td,.table-info>th{background-color:#e3c3e9}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#cc8fd6}.table-hover .table-info:hover{background-color:#dab0e2}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#dab0e2}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffe2b8}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffc97a}.table-hover .table-warning:hover{background-color:#ffd89f}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffd89f}.table-danger,.table-danger>td,.table-danger>th{background-color:#f8bfc1}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#f1898d}.table-hover .table-danger:hover{background-color:#f5a8ab}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f5a8ab}.table-light,.table-light>td,.table-light>th{background-color:#fff}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fff}.table-hover .table-light:hover{background-color:#f2f2f2}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#f2f2f2}.table-dark,.table-dark>td,.table-dark>th{background-color:#c1c1c1}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#8c8c8c}.table-hover .table-dark:hover{background-color:#b4b4b4}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b4b4b4}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#222;border-color:#353535}.table .thead-light th{color:#444;background-color:#eee;border-color:#dee2e6}.table-dark{color:#fff;background-color:#222}.table-dark td,.table-dark th,.table-dark thead th{border-color:#353535}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + 2rem);padding:1rem 0;font-size:.8125rem;font-weight:400;line-height:1.5;color:#666;background-color:transparent;background-clip:padding-box;border:0 solid transparent;border-radius:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #666}.form-control:focus{color:#666;background-color:transparent;border-color:#9acffa;outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.form-control::placeholder{color:rgba(0,0,0,.4);opacity:1}.form-control:disabled,.form-control[readonly]{background-color:transparent;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#666;background-color:transparent}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:1rem;padding-bottom:1rem;margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:1.015625rem;padding-bottom:1.015625rem;font-size:1.015625rem;line-height:1.5}.col-form-label-sm{padding-top:0;padding-bottom:0;font-size:.710938rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:1rem 0;margin-bottom:0;font-size:.8125rem;line-height:1.5;color:#444;background-color:transparent;border:solid transparent;border-width:0 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:1.5em;padding:0 0;font-size:.710938rem;line-height:1.5;border-radius:0}.form-control-lg{height:calc(1.5em + 2.03125rem);padding:1.015625rem 0;font-size:1.015625rem;line-height:1.5;border-radius:0}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#666}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#4caf50}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.710938rem;line-height:1.5;color:#fff;background-color:rgba(76,175,80,.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#4caf50;padding-right:calc(1.5em + 2rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%234caf50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .5rem) center;background-size:calc(.75em + 1rem) calc(.75em + 1rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#4caf50;box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 2rem);background-position:top calc(.375em + .5rem) right calc(.375em + .5rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#4caf50;padding-right:calc(.75em + 2.5rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0 center/8px 10px no-repeat,transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%234caf50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1rem/calc(.75em + 1rem) calc(.75em + 1rem) no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#4caf50;box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#4caf50}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#4caf50}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#4caf50}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#6ec071;background:#6ec071 linear-gradient(180deg,#84c987,#6ec071) repeat-x}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#4caf50}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#4caf50}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#4caf50;box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#e51c23}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.710938rem;line-height:1.5;color:#fff;background-color:rgba(229,28,35,.9);border-radius:.25rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#e51c23;padding-right:calc(1.5em + 2rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e51c23' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e51c23' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .5rem) center;background-size:calc(.75em + 1rem) calc(.75em + 1rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#e51c23;box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 2rem);background-position:top calc(.375em + .5rem) right calc(.375em + .5rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#e51c23;padding-right:calc(.75em + 2.5rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0 center/8px 10px no-repeat,transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e51c23' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e51c23' stroke='none'/%3e%3c/svg%3e\") center right 1rem/calc(.75em + 1rem) calc(.75em + 1rem) no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#e51c23;box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#e51c23}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#e51c23}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#e51c23}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#ea4a4f;background:#ea4a4f linear-gradient(180deg,#ed656a,#ea4a4f) repeat-x}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#e51c23}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#e51c23}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#e51c23;box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#444;text-align:center;vertical-align:middle;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.8rem 1rem;font-size:.8125rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#444;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border-color:#2196f3}.btn-primary:hover{color:#fff;background:#0c83e2 linear-gradient(180deg,#3196e6,#0c83e2) repeat-x;border-color:#0c7cd5}.btn-primary.focus,.btn-primary:focus{color:#fff;background:#0c83e2 linear-gradient(180deg,#3196e6,#0c83e2) repeat-x;border-color:#0c7cd5;box-shadow:0 0 0 .2rem rgba(66,166,245,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#2196f3;border-color:#2196f3;background-image:none}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0c7cd5;background-image:none;border-color:#0b75c9}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(66,166,245,.5)}.btn-secondary{color:#212121;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.btn-secondary:hover{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6}.btn-secondary.focus,.btn-secondary:focus{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6;box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#212121;background-color:#fff;border-color:#fff;background-image:none}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#212121;background-color:#e6e6e6;background-image:none;border-color:#dfdfdf}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-success{color:#fff;background:#4caf50 linear-gradient(180deg,#67bb6a,#4caf50) repeat-x;border-color:#4caf50}.btn-success:hover{color:#fff;background:#409444 linear-gradient(180deg,#5da460,#409444) repeat-x;border-color:#3d8b40}.btn-success.focus,.btn-success:focus{color:#fff;background:#409444 linear-gradient(180deg,#5da460,#409444) repeat-x;border-color:#3d8b40;box-shadow:0 0 0 .2rem rgba(103,187,106,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#4caf50;border-color:#4caf50;background-image:none}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#3d8b40;background-image:none;border-color:#39833c}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(103,187,106,.5)}.btn-info{color:#fff;background:#9c27b0 linear-gradient(180deg,#ab47bc,#9c27b0) repeat-x;border-color:#9c27b0}.btn-info:hover{color:#fff;background:#802091 linear-gradient(180deg,#9342a1,#802091) repeat-x;border-color:#771e86}.btn-info.focus,.btn-info:focus{color:#fff;background:#802091 linear-gradient(180deg,#9342a1,#802091) repeat-x;border-color:#771e86;box-shadow:0 0 0 .2rem rgba(171,71,188,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#9c27b0;border-color:#9c27b0;background-image:none}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#771e86;background-image:none;border-color:#6e1b7c}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(171,71,188,.5)}.btn-warning{color:#fff;background:#ff9800 linear-gradient(180deg,#ffa726,#ff9800) repeat-x;border-color:#ff9800}.btn-warning:hover{color:#fff;background:#d98100 linear-gradient(180deg,#de9426,#d98100) repeat-x;border-color:#cc7a00}.btn-warning.focus,.btn-warning:focus{color:#fff;background:#d98100 linear-gradient(180deg,#de9426,#d98100) repeat-x;border-color:#cc7a00;box-shadow:0 0 0 .2rem rgba(255,167,38,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#fff;background-color:#ff9800;border-color:#ff9800;background-image:none}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#cc7a00;background-image:none;border-color:#bf7200}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,167,38,.5)}.btn-danger{color:#fff;background:#e51c23 linear-gradient(180deg,#e93e44,#e51c23) repeat-x;border-color:#e51c23}.btn-danger:hover{color:#fff;background:#c4161d linear-gradient(180deg,#cd393f,#c4161d) repeat-x;border-color:#b9151b}.btn-danger.focus,.btn-danger:focus{color:#fff;background:#c4161d linear-gradient(180deg,#cd393f,#c4161d) repeat-x;border-color:#b9151b;box-shadow:0 0 0 .2rem rgba(233,62,68,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#e51c23;border-color:#e51c23;background-image:none}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b9151b;background-image:none;border-color:#ad1419}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(233,62,68,.5)}.btn-light{color:#212121;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.btn-light:hover{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6}.btn-light.focus,.btn-light:focus{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6;box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-light.disabled,.btn-light:disabled{color:#212121;background-color:#fff;border-color:#fff;background-image:none}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212121;background-color:#e6e6e6;background-image:none;border-color:#dfdfdf}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-dark{color:#fff;background:#222 linear-gradient(180deg,#434343,#222) repeat-x;border-color:#222}.btn-dark:hover{color:#fff;background:#0f0f0f linear-gradient(180deg,#333,#0f0f0f) repeat-x;border-color:#090909}.btn-dark.focus,.btn-dark:focus{color:#fff;background:#0f0f0f linear-gradient(180deg,#333,#0f0f0f) repeat-x;border-color:#090909;box-shadow:0 0 0 .2rem rgba(67,67,67,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#222;border-color:#222;background-image:none}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#090909;background-image:none;border-color:#020202}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(67,67,67,.5)}.btn-outline-primary{color:#2196f3;border-color:#2196f3}.btn-outline-primary:hover{color:#fff;background-color:#2196f3;border-color:#2196f3}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(33,150,243,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#2196f3;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#2196f3;border-color:#2196f3}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(33,150,243,.5)}.btn-outline-secondary{color:#fff;border-color:#fff}.btn-outline-secondary:hover{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#fff;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-success{color:#4caf50;border-color:#4caf50}.btn-outline-success:hover{color:#fff;background-color:#4caf50;border-color:#4caf50}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(76,175,80,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#4caf50;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#4caf50;border-color:#4caf50}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(76,175,80,.5)}.btn-outline-info{color:#9c27b0;border-color:#9c27b0}.btn-outline-info:hover{color:#fff;background-color:#9c27b0;border-color:#9c27b0}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(156,39,176,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#9c27b0;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#9c27b0;border-color:#9c27b0}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(156,39,176,.5)}.btn-outline-warning{color:#ff9800;border-color:#ff9800}.btn-outline-warning:hover{color:#fff;background-color:#ff9800;border-color:#ff9800}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,152,0,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ff9800;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#ff9800;border-color:#ff9800}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,152,0,.5)}.btn-outline-danger{color:#e51c23;border-color:#e51c23}.btn-outline-danger:hover{color:#fff;background-color:#e51c23;border-color:#e51c23}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(229,28,35,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#e51c23;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#e51c23;border-color:#e51c23}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(229,28,35,.5)}.btn-outline-light{color:#fff;border-color:#fff}.btn-outline-light:hover{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#fff;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-dark{color:#222;border-color:#222}.btn-outline-dark:hover{color:#fff;background-color:#222;border-color:#222}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(34,34,34,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#222;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#222;border-color:#222}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(34,34,34,.5)}.btn-link{font-weight:400;color:#2196f3;text-decoration:none}.btn-link:hover{color:#0a6ebd;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#666;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.015625rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.710938rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:.8125rem;color:#444;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #eee}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212121;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#141414;text-decoration:none;background:#eee linear-gradient(180deg,#f1f1f1,#eee) repeat-x}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.dropdown-item.disabled,.dropdown-item:disabled{color:#bbb;pointer-events:none;background-color:transparent;background-image:none}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.710938rem;color:#666;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212121}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:0}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label::after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label::after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:0}.input-group-prepend{margin-right:0}.input-group-append{margin-left:0}.input-group-text{display:flex;align-items:center;padding:1rem 0;margin-bottom:0;font-size:.8125rem;font-weight:400;line-height:1.5;color:#666;text-align:center;white-space:nowrap;background-color:transparent;border:0 solid transparent;border-radius:0}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 2.03125rem)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:1.015625rem 0;font-size:1.015625rem;line-height:1.5;border-radius:0}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:1.5em}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:0 0;font-size:.710938rem;line-height:1.5;border-radius:0}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1rem}.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.21875rem;padding-left:3rem;-webkit-print-color-adjust:exact;color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1.25rem;height:1.234375rem;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#2196f3;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.custom-control-input:focus~.custom-control-label::before{box-shadow:0}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#9acffa}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#cae6fc;border-color:#cae6fc}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#666}.custom-control-input:disabled~.custom-control-label::before,.custom-control-input[disabled]~.custom-control-label::before{background-color:#f8f9fa}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:-.015625rem;left:-3rem;display:block;width:1.25rem;height:1.25rem;pointer-events:none;content:\"\";background-color:#fff;border:#bbb solid 0}.custom-control-label::after{position:absolute;top:-.015625rem;left:-3rem;display:block;width:1.25rem;height:1.25rem;content:\"\";background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label::before{border-radius:2px}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#2196f3;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='4' fill='%232196f3'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-switch{padding-left:3.9375rem}.custom-switch .custom-control-label::before{left:-3.9375rem;width:2.1875rem;pointer-events:all;border-radius:.625rem}.custom-switch .custom-control-label::after{top:-.015625rem;left:-3.9375rem;width:1.25rem;height:1.25rem;background-color:#bbb;border-radius:.625rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;transform:translateX(.9375rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-select{display:inline-block;width:100%;height:calc(1.5em + 2rem);padding:1rem 1rem 1rem 0;font-size:.8125rem;font-weight:400;line-height:1.5;color:#666;vertical-align:middle;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0 center/8px 10px no-repeat;border:0 solid transparent;border-radius:0;-webkit-appearance:none;appearance:none}.custom-select:focus{border-color:#9acffa;outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.custom-select:focus::-ms-value{color:#666;background-color:transparent}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:0;background-image:none}.custom-select:disabled{color:#666;background-color:#eee}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #666}.custom-select-sm{height:1.5em;padding-top:0;padding-bottom:0;padding-left:0;font-size:.710938rem}.custom-select-lg{height:calc(1.5em + 2.03125rem);padding-top:1.015625rem;padding-bottom:1.015625rem;padding-left:0;font-size:1.015625rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + 2rem);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + 2rem);margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#9acffa;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:transparent}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + 2rem);padding:1rem 0;overflow:hidden;font-weight:400;line-height:1.5;color:#666;background-color:transparent;border:0 solid transparent;border-radius:0}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + 2rem);padding:1rem 0;line-height:1.5;color:#666;content:\"Browse\";background:transparent linear-gradient(180deg,rgba(255,255,255,.15),transparent) repeat-x;border-left:inherit;border-radius:0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(33,150,243,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(33,150,243,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(33,150,243,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background:#cae6fc linear-gradient(180deg,#d2eafd,#cae6fc) repeat-x}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background:#cae6fc linear-gradient(180deg,#d2eafd,#cae6fc) repeat-x}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background:#cae6fc linear-gradient(180deg,#d2eafd,#cae6fc) repeat-x}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#bbb}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#bbb}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#bbb}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#bbb;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid transparent}.nav-tabs .nav-link{margin-bottom:-1px;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#eee #eee transparent}.nav-tabs .nav-link.disabled{color:#bbb;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#444;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#2196f3}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:1rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.347656rem;padding-bottom:.347656rem;margin-right:1rem;font-size:1.015625rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.015625rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:#fff}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.75);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.75)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0 solid transparent;border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:0 solid transparent}.card-header:first-child{border-radius:.25rem .25rem 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:0 solid transparent}.card-footer:last-child{border-radius:0 0 .25rem .25rem}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:.25rem}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-img,.card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;grid-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#eee;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#666;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#666}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#2196f3;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0a6ebd;text-decoration:none;background-color:#eee;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#2196f3;border-color:#2196f3}.page-item.disabled .page-link{color:#666;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.015625rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.710938rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#2196f3}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0c7cd5}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.5)}.badge-secondary{color:#212121;background-color:#fff}a.badge-secondary:focus,a.badge-secondary:hover{color:#212121;background-color:#e6e6e6}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.badge-success{color:#fff;background-color:#4caf50}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#3d8b40}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(76,175,80,.5)}.badge-info{color:#fff;background-color:#9c27b0}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#771e86}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(156,39,176,.5)}.badge-warning{color:#fff;background-color:#ff9800}a.badge-warning:focus,a.badge-warning:hover{color:#fff;background-color:#cc7a00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,152,0,.5)}.badge-danger{color:#fff;background-color:#e51c23}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#b9151b}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(229,28,35,.5)}.badge-light{color:#212121;background-color:#fff}a.badge-light:focus,a.badge-light:hover{color:#212121;background-color:#e6e6e6}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.badge-dark{color:#fff;background-color:#222}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#090909}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(34,34,34,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#eee;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4.625rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#114e7e;background:#d3eafd linear-gradient(180deg,#daedfd,#d3eafd) repeat-x;border-color:#c1e2fc}.alert-primary hr{border-top-color:#a9d7fb}.alert-primary .alert-link{color:#0b3251}.alert-secondary{color:#858585;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.alert-secondary hr{border-top-color:#f2f2f2}.alert-secondary .alert-link{color:#6c6c6c}.alert-success{color:#285b2a;background:#dbefdc linear-gradient(180deg,#e0f1e1,#dbefdc) repeat-x;border-color:#cde9ce}.alert-success hr{border-top-color:#bbe1bd}.alert-success .alert-link{color:#18381a}.alert-info{color:#51145c;background:#ebd4ef linear-gradient(180deg,#eedaf1,#ebd4ef) repeat-x;border-color:#e3c3e9}.alert-info hr{border-top-color:#dab0e2}.alert-info .alert-link{color:#2c0b32}.alert-warning{color:#854f00;background:#ffeacc linear-gradient(180deg,#ffedd4,#ffeacc) repeat-x;border-color:#ffe2b8}.alert-warning hr{border-top-color:#ffd89f}.alert-warning .alert-link{color:#523100}.alert-danger{color:#770f12;background:#fad2d3 linear-gradient(180deg,#fbd9da,#fad2d3) repeat-x;border-color:#f8bfc1}.alert-danger hr{border-top-color:#f5a8ab}.alert-danger .alert-link{color:#4a090b}.alert-light{color:#858585;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.alert-light hr{border-top-color:#f2f2f2}.alert-light .alert-link{color:#6c6c6c}.alert-dark{color:#121212;background:#d3d3d3 linear-gradient(180deg,#dadada,#d3d3d3) repeat-x;border-color:#c1c1c1}.alert-dark hr{border-top-color:#b4b4b4}.alert-dark .alert-link{color:#000}@keyframes progress-bar-stripes{from{background-position:.375rem 0}to{background-position:0 0}}.progress{display:flex;height:.375rem;overflow:hidden;line-height:0;font-size:.609375rem;background-color:#eee;border-radius:0}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#2196f3;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:.375rem .375rem}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1 1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#444;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#444;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#444;background-color:#eee}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#666;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#2196f3;border-color:#2196f3}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#114e7e;background-color:#c1e2fc}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#114e7e;background-color:#a9d7fb}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#114e7e;border-color:#114e7e}.list-group-item-secondary{color:#858585;background-color:#fff}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#858585;background-color:#f2f2f2}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#858585;border-color:#858585}.list-group-item-success{color:#285b2a;background-color:#cde9ce}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#285b2a;background-color:#bbe1bd}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#285b2a;border-color:#285b2a}.list-group-item-info{color:#51145c;background-color:#e3c3e9}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#51145c;background-color:#dab0e2}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#51145c;border-color:#51145c}.list-group-item-warning{color:#854f00;background-color:#ffe2b8}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#854f00;background-color:#ffd89f}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#854f00;border-color:#854f00}.list-group-item-danger{color:#770f12;background-color:#f8bfc1}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#770f12;background-color:#f5a8ab}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#770f12;border-color:#770f12}.list-group-item-light{color:#858585;background-color:#fff}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#858585;background-color:#f2f2f2}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#858585;border-color:#858585}.list-group-item-dark{color:#121212;background-color:#c1c1c1}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#121212;background-color:#b4b4b4}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#121212;border-color:#121212}.close{float:right;font-size:2.125rem;font-weight:300;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#666;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid transparent;border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.710938rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#444}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#444}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#444}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#444}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#444;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.710938rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:.8125rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#444}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0;background-image:linear-gradient(90deg,rgba(0,0,0,.25),rgba(0,0,0,.001))}.carousel-control-next{right:0;background-image:linear-gradient(270deg,rgba(0,0,0,.25),rgba(0,0,0,.001))}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#2196f3!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0c7cd5!important}.bg-secondary{background-color:#fff!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#e6e6e6!important}.bg-success{background-color:#4caf50!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#3d8b40!important}.bg-info{background-color:#9c27b0!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#771e86!important}.bg-warning{background-color:#ff9800!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#cc7a00!important}.bg-danger{background-color:#e51c23!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#b9151b!important}.bg-light{background-color:#fff!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#e6e6e6!important}.bg-dark{background-color:#222!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#090909!important}.bg-gradient-primary{background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x!important}.bg-gradient-secondary{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x!important}.bg-gradient-success{background:#4caf50 linear-gradient(180deg,#67bb6a,#4caf50) repeat-x!important}.bg-gradient-info{background:#9c27b0 linear-gradient(180deg,#ab47bc,#9c27b0) repeat-x!important}.bg-gradient-warning{background:#ff9800 linear-gradient(180deg,#ffa726,#ff9800) repeat-x!important}.bg-gradient-danger{background:#e51c23 linear-gradient(180deg,#e93e44,#e51c23) repeat-x!important}.bg-gradient-light{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x!important}.bg-gradient-dark{background:#222 linear-gradient(180deg,#434343,#222) repeat-x!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#2196f3!important}.border-secondary{border-color:#fff!important}.border-success{border-color:#4caf50!important}.border-info{border-color:#9c27b0!important}.border-warning{border-color:#ff9800!important}.border-danger{border-color:#e51c23!important}.border-light{border-color:#fff!important}.border-dark{border-color:#222!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#2196f3!important}a.text-primary:focus,a.text-primary:hover{color:#0a6ebd!important}.text-secondary{color:#fff!important}a.text-secondary:focus,a.text-secondary:hover{color:#d9d9d9!important}.text-success{color:#4caf50!important}a.text-success:focus,a.text-success:hover{color:#357a38!important}.text-info{color:#9c27b0!important}a.text-info:focus,a.text-info:hover{color:#641971!important}.text-warning{color:#ff9800!important}a.text-warning:focus,a.text-warning:hover{color:#b36a00!important}.text-danger{color:#e51c23!important}a.text-danger:focus,a.text-danger:hover{color:#a21318!important}.text-light{color:#fff!important}a.text-light:focus,a.text-light:hover{color:#d9d9d9!important}.text-dark{color:#222!important}a.text-dark:focus,a.text-dark:hover{color:#000!important}.text-body{color:#444!important}.text-muted{color:#666!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #bbb;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}.dropdown-toggle::after,.dropleft .dropdown-toggle::after,.dropright .dropdown-toggle::after,.dropup .dropdown-toggle::after{border-width:4px}.navbar{border:none;box-shadow:0 1px 2px rgba(0,0,0,.3)}.navbar-brand{font-size:24px}.navbar-nav .nav-link{padding-top:.9rem;padding-bottom:.9rem}.navbar.bg-dark input[type=email],.navbar.bg-dark input[type=number],.navbar.bg-dark input[type=password],.navbar.bg-dark input[type=tel],.navbar.bg-dark input[type=text],.navbar.bg-primary input[type=email],.navbar.bg-primary input[type=number],.navbar.bg-primary input[type=password],.navbar.bg-primary input[type=tel],.navbar.bg-primary input[type=text]{color:#fff;box-shadow:inset 0 -1px 0 rgba(255,255,255,.5)}.navbar.bg-dark input[type=email]:focus,.navbar.bg-dark input[type=number]:focus,.navbar.bg-dark input[type=password]:focus,.navbar.bg-dark input[type=tel]:focus,.navbar.bg-dark input[type=text]:focus,.navbar.bg-primary input[type=email]:focus,.navbar.bg-primary input[type=number]:focus,.navbar.bg-primary input[type=password]:focus,.navbar.bg-primary input[type=tel]:focus,.navbar.bg-primary input[type=text]:focus{box-shadow:inset 0 -2px 0 #fff}.navbar.bg-dark input[type=email]::placeholder,.navbar.bg-dark input[type=number]::placeholder,.navbar.bg-dark input[type=password]::placeholder,.navbar.bg-dark input[type=tel]::placeholder,.navbar.bg-dark input[type=text]::placeholder,.navbar.bg-primary input[type=email]::placeholder,.navbar.bg-primary input[type=number]::placeholder,.navbar.bg-primary input[type=password]::placeholder,.navbar.bg-primary input[type=tel]::placeholder,.navbar.bg-primary input[type=text]::placeholder{color:rgba(255,255,255,.5)}.btn-primary{position:relative}.btn-primary:focus{background-color:#2196f3;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-primary:active:hover,.btn-primary:hover{background-color:#0d87e9}.btn-primary:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-primary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-primary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-primary.disabled::before,.btn-primary[disabled]::before{display:none}.btn-outline-primary{position:relative}.btn-outline-primary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-primary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-primary.disabled::before,.btn-outline-primary[disabled]::before{display:none}.btn-secondary{position:relative}.btn-secondary:focus{background-color:#fff;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-secondary:active:hover,.btn-secondary:hover{background-color:#f0f0f0}.btn-secondary:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-secondary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#bbb 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-secondary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-secondary.disabled::before,.btn-secondary[disabled]::before{display:none}.btn-outline-secondary{position:relative}.btn-outline-secondary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#bbb 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-secondary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-secondary.disabled::before,.btn-outline-secondary[disabled]::before{display:none}.btn-success{position:relative}.btn-success:focus{background-color:#4caf50;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-success:active:hover,.btn-success:hover{background-color:#439a46}.btn-success:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-success::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-success:active::before{background-size:0 0;opacity:.2;transition:none}.btn-success.disabled::before,.btn-success[disabled]::before{display:none}.btn-outline-success{position:relative}.btn-outline-success::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-success:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-success.disabled::before,.btn-outline-success[disabled]::before{display:none}.btn-info{position:relative}.btn-info:focus{background-color:#9c27b0;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-info:active:hover,.btn-info:hover{background-color:#862197}.btn-info:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-info::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-info:active::before{background-size:0 0;opacity:.2;transition:none}.btn-info.disabled::before,.btn-info[disabled]::before{display:none}.btn-outline-info{position:relative}.btn-outline-info::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-info:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-info.disabled::before,.btn-outline-info[disabled]::before{display:none}.btn-warning{position:relative}.btn-warning:focus{background-color:#ff9800;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-warning:active:hover,.btn-warning:hover{background-color:#e08600}.btn-warning:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-warning::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-warning:active::before{background-size:0 0;opacity:.2;transition:none}.btn-warning.disabled::before,.btn-warning[disabled]::before{display:none}.btn-outline-warning{position:relative}.btn-outline-warning::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-warning:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-warning.disabled::before,.btn-outline-warning[disabled]::before{display:none}.btn-danger{position:relative}.btn-danger:focus{background-color:#e51c23;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-danger:active:hover,.btn-danger:hover{background-color:#cb171e}.btn-danger:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-danger::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-danger:active::before{background-size:0 0;opacity:.2;transition:none}.btn-danger.disabled::before,.btn-danger[disabled]::before{display:none}.btn-outline-danger{position:relative}.btn-outline-danger::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-danger:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-danger.disabled::before,.btn-outline-danger[disabled]::before{display:none}.btn-dark{position:relative}.btn-dark:focus{background-color:#222;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-dark:active:hover,.btn-dark:hover{background-color:#131313}.btn-dark:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-dark::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-dark:active::before{background-size:0 0;opacity:.2;transition:none}.btn-dark.disabled::before,.btn-dark[disabled]::before{display:none}.btn-outline-dark{position:relative}.btn-outline-dark::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-dark:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-dark.disabled::before,.btn-outline-dark[disabled]::before{display:none}.btn-light{position:relative}.btn-light:focus{background-color:#fff;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-light:active:hover,.btn-light:hover{background-color:#f0f0f0}.btn-light:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-light::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-light:active::before{background-size:0 0;opacity:.2;transition:none}.btn-light.disabled::before,.btn-light[disabled]::before{display:none}.btn-outline-light{position:relative}.btn-outline-light::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-light:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-light.disabled::before,.btn-outline-light[disabled]::before{display:none}.btn{text-transform:uppercase;border:none;box-shadow:0 1px 4px rgba(0,0,0,.4);transition:color .4s,background-color .4s,border-color .4s,box-shadow .4s}.btn-link{box-shadow:none;color:#2196f3}.btn-link:focus,.btn-link:hover{box-shadow:none;color:#0a6ebd;text-decoration:underline}.btn-link.disabled:active:hover,.btn-link.disabled:hover,.btn-link[disabled]:active:hover,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:active:hover,fieldset[disabled] .btn-link:hover{color:#666;text-decoration:none}.btn-secondary.disabled,.btn-secondary[disabled],fieldset[disabled] .btn-secondary{background-color:rgba(0,0,0,.1);color:rgba(0,0,0,.4);opacity:1}.btn-secondary.disabled:focus,.btn-secondary.disabled:hover,.btn-secondary[disabled]:focus,.btn-secondary[disabled]:hover,fieldset[disabled] .btn-secondary:focus,fieldset[disabled] .btn-secondary:hover{background-color:rgba(0,0,0,.1)}.btn-outline-secondary{border-color:#eee;color:#dee2e6}.btn-warning{color:#fff}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:0}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:0}.btn-group .btn+.btn,.btn-group .btn+.btn-group>.dropdown-toggle{box-shadow:1px 1px 4px rgba(0,0,0,.4)}.border-secondary{border:1px solid #dfdfdf!important}body,button,input{-webkit-font-smoothing:antialiased;letter-spacing:.1px}p{margin:0 0 1em}.text-secondary{color:#bbb!important}.table-hover>tbody>tr,.table-hover>tbody>tr>td,.table-hover>tbody>tr>th{transition:background-color .2s,color .2s}.thead-inverse th{background-color:#2196f3;color:#fff}.col-form-label{font-size:16px}.col-form-label-sm{font-size:.710938rem}.col-form-label-lg{font-size:1.015625rem}[contenteditable].form-control,[type=email].form-control,[type=password].form-control,[type=tel].form-control,[type=text].form-control,input.form-control,input[type=email],input[type=number],input[type=password],input[type=text],textarea,textarea.form-control{box-shadow:inset 0 -1px 0 #ddd;transition:box-shadow .2s}[contenteditable].form-control:focus,[type=email].form-control:focus,[type=password].form-control:focus,[type=tel].form-control:focus,[type=text].form-control:focus,input.form-control:focus,input[type=email]:focus,input[type=number]:focus,input[type=password]:focus,input[type=text]:focus,textarea.form-control:focus,textarea:focus{box-shadow:inset 0 -2px 0 #2196f3}[contenteditable].form-control[disabled],[contenteditable].form-control[readonly],[type=email].form-control[disabled],[type=email].form-control[readonly],[type=password].form-control[disabled],[type=password].form-control[readonly],[type=tel].form-control[disabled],[type=tel].form-control[readonly],[type=text].form-control[disabled],[type=text].form-control[readonly],input.form-control[disabled],input.form-control[readonly],input[type=email][disabled],input[type=email][readonly],input[type=number][disabled],input[type=number][readonly],input[type=password][disabled],input[type=password][readonly],input[type=text][disabled],input[type=text][readonly],textarea.form-control[disabled],textarea.form-control[readonly],textarea[disabled],textarea[readonly]{box-shadow:none;border-bottom:1px dotted #ddd}[contenteditable].form-control[disabled],[contenteditable].form-control[disabled]::placeholder,[type=email].form-control[disabled],[type=email].form-control[disabled]::placeholder,[type=password].form-control[disabled],[type=password].form-control[disabled]::placeholder,[type=tel].form-control[disabled],[type=tel].form-control[disabled]::placeholder,[type=text].form-control[disabled],[type=text].form-control[disabled]::placeholder,input.form-control[disabled],input.form-control[disabled]::placeholder,input[type=email][disabled],input[type=email][disabled]::placeholder,input[type=number][disabled],input[type=number][disabled]::placeholder,input[type=password][disabled],input[type=password][disabled]::placeholder,input[type=text][disabled],input[type=text][disabled]::placeholder,textarea.form-control[disabled],textarea.form-control[disabled]::placeholder,textarea[disabled],textarea[disabled]::placeholder{color:#ddd}[contenteditable].form-control::-ms-clear,[type=email].form-control::-ms-clear,[type=password].form-control::-ms-clear,[type=tel].form-control::-ms-clear,[type=text].form-control::-ms-clear,input.form-control::-ms-clear,input[type=email]::-ms-clear,input[type=number]::-ms-clear,input[type=password]::-ms-clear,input[type=text]::-ms-clear,textarea.form-control::-ms-clear,textarea::-ms-clear{display:none}select,select.form-control{-webkit-appearance:none;appearance:none;padding:.5rem 0;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4' viewBox='0 0 8 4'%3e%3cpolygon fill='%23666' points='8 0 4 4 0 0'/%3e%3c/svg%3e%0a\");background-size:8px 4px;background-repeat:no-repeat;background-position:right center;box-shadow:inset 0 -1px 0 #ddd}select.form-control::-ms-expand,select::-ms-expand{display:none}select.form-control.input-sm,select.input-sm{font-size:.710938rem}select.form-control.input-lg,select.input-lg{font-size:1.015625rem}select.form-control:focus,select:focus{box-shadow:inset 0 -2px 0 #2196f3;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4' viewBox='0 0 8 4'%3e%3cpolygon fill='%23212121' points='8 0 4 4 0 0'/%3e%3c/svg%3e%0a\")}select.form-control[multiple],select[multiple]{background:0 0}.custom-control{min-height:1.5rem}.custom-control-label::before{top:0;border:2px solid #ced4da}.custom-control-label::after{top:0}.custom-control-input:checked~.custom-control-label::before{border-color:#2196f3}.custom-checkbox .custom-control-input:checked~.custom-control-label::before{background-image:none}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{transform:scale(1.5)}.custom-radio .custom-control-input~.custom-control-label::after{transform:scale(.75)}.custom-radio .custom-control-input:checked~.custom-control-label::before{background-color:#fff;background-image:none;transition:border-color .24s}.custom-radio .custom-control-input:checked~.custom-control-label::after{transform:scale(1.125);transition:background-image .24s,transform .24s}.custom-switch .custom-control-label::before{top:.125rem;height:.875rem;background-color:#bbb;border:none}.custom-switch .custom-control-input:disabled~.custom-control-label{opacity:.7}.custom-switch .custom-control-input:disabled~.custom-control-label::before{background-color:#bbb}.custom-switch .custom-control-label::after{background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.3)}.custom-switch .custom-control-input:checked~.custom-control-label::before{opacity:.38}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#2196f3}.custom-switch .custom-control-input:hover:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(0,0,0,.05)}.custom-switch .custom-control-input:focus:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(0,0,0,.09)}.custom-switch .custom-control-input:active:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(0,0,0,.16)}.custom-switch .custom-control-input:hover:checked:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(33,150,243,.05)}.custom-switch .custom-control-input:focus:checked:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(33,150,243,.09)}.custom-switch .custom-control-input:active:checked:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(33,150,243,.16)}.custom-switch .custom-control-input:active:not(:checked)~.custom-control-label::before{background-color:#bbb}.has-warning .form-control,.has-warning .form-control:focus,.has-warning [type=text].form-control[readonly],.has-warning input.form-control[readonly],.has-warning input:not([type=checkbox]),.has-warning input:not([type=checkbox]):focus,.has-warning input[type=text][readonly]{border-bottom:none;box-shadow:inset 0 -2px 0 #ff9800}.has-danger .form-control,.has-danger .form-control:focus,.has-danger [type=text].form-control[readonly],.has-danger input.form-control[readonly],.has-danger input:not([type=checkbox]),.has-danger input:not([type=checkbox]):focus,.has-danger input[type=text][readonly]{border-bottom:none;box-shadow:inset 0 -2px 0 #e51c23}.has-success .form-control,.has-success .form-control:focus,.has-success [type=text].form-control[readonly],.has-success input.form-control[readonly],.has-success input:not([type=checkbox]),.has-success input:not([type=checkbox]):focus,.has-success input[type=text][readonly]{border-bottom:none;box-shadow:inset 0 -2px 0 #4caf50}.has-danger .input-group-addon,.has-success .input-group-addon,.has-warning .input-group-addon{color:#666;border-color:transparent;background-color:transparent}.input-group>.input-group-prepend>.input-group-text{padding-right:.25rem}.input-group>.input-group-append>.input-group-text{padding-left:.25rem}.input-group .form-control{padding-left:.25rem;padding-right:.25rem}.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-prepend>.btn{padding:.25rem .5rem}.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem .25rem 0}.input-group-sm>.input-group-append>.input-group-text{padding:.25rem 0 .25rem .5rem}.input-group-sm>.input-group-prepend>.btn{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.input-group-sm>.input-group-append>.btn{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-prepend>.btn{padding:.5rem 1rem}.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem .5rem 0}.input-group-lg>.input-group-append>.input-group-text{padding:.5rem 0 .5rem 1rem}.input-group-lg>.input-group-prepend>.btn{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.input-group-lg>.input-group-append>.btn{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.form-group-lg select,.form-group-lg select.form-control{line-height:1.5}.nav-tabs .nav-item+.nav-item{margin-left:0}.nav-tabs .nav-link,.nav-tabs .nav-link:focus{margin-right:0;background-color:transparent;border:none;color:#444;box-shadow:inset 0 -1px 0 #ddd;transition:color .2s,box-shadow .2s}.nav-tabs .nav-link:focus:hover,.nav-tabs .nav-link:hover{background-color:transparent;box-shadow:inset 0 -2px 0 #2196f3;color:#2196f3}.nav-tabs .nav-link.active,.nav-tabs .nav-link.active:focus{border:none;box-shadow:inset 0 -2px 0 #2196f3;color:#2196f3}.nav-tabs .nav-link.active:focus:hover,.nav-tabs .nav-link.active:hover{border:none;color:#2196f3}.nav-tabs .nav-link.disabled{box-shadow:inset 0 -1px 0 #ddd}.nav-tabs.nav-justified .nav-link,.nav-tabs.nav-justified .nav-link.active,.nav-tabs.nav-justified .nav-link.active:focus,.nav-tabs.nav-justified .nav-link.active:hover,.nav-tabs.nav-justified .nav-link:focus,.nav-tabs.nav-justified .nav-link:hover{border:none}.nav-tabs .dropdown-menu{margin-top:0}.dropdown-menu{margin-top:0;border:none;box-shadow:0 1px 4px rgba(0,0,0,.3)}.alert{padding-right:2.5rem;border:none}.alert,.alert h1,.alert h2,.alert h3,.alert h4,.alert h5,.alert h6{color:#fff}.alert-primary{background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.alert-secondary{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x}.alert-success{background:#4caf50 linear-gradient(180deg,#67bb6a,#4caf50) repeat-x}.alert-info{background:#9c27b0 linear-gradient(180deg,#ab47bc,#9c27b0) repeat-x}.alert-warning{background:#ff9800 linear-gradient(180deg,#ffa726,#ff9800) repeat-x}.alert-danger{background:#e51c23 linear-gradient(180deg,#e93e44,#e51c23) repeat-x}.alert-light{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x}.alert-dark{background:#222 linear-gradient(180deg,#434343,#222) repeat-x}.alert .alert-link,.alert a:not(.btn){color:#fff;font-weight:700}.alert .close{color:#fff}.alert-light,.alert-light .alert-link,.alert-light a:not(.btn),.alert-secondary,.alert-secondary .alert-link,.alert-secondary a:not(.btn){color:#444}.badge-secondary{background-color:#bbb;color:#fff}.badge-light{background-color:#eee}.badge-warning{color:#fff}.tag{padding:4px 6px}.close{line-height:.5;opacity:.6;transition:opacity .2s}.close:hover{opacity:1}.card{box-shadow:0 1px 4px rgba(0,0,0,.4)}.card.border-danger,.card.border-dark,.card.border-info,.card.border-light,.card.border-primary,.card.border-secondary,.card.border-success,.card.border-warning{border-width:1px}.alert-dismissible .close{padding:.5rem .75rem}.list-group-item-action.active h1,.list-group-item-action.active h2,.list-group-item-action.active h3,.list-group-item-action.active h4,.list-group-item-action.active h5,.list-group-item-action.active h6{color:#fff}.modal-content{border-radius:.2rem;box-shadow:0 6px 36px rgba(0,0,0,.3)}.popover{border:none;box-shadow:0 1px 4px rgba(0,0,0,.3)}.carousel-caption h1,.carousel-caption h2,.carousel-caption h3,.carousel-caption h4,.carousel-caption h5,.carousel-caption h6{color:inherit}", "",{"version":3,"sources":["webpack://node_modules/bootswatch/dist/materia/bootstrap.min.css"],"names":[],"mappings":"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","sourcesContent":["/*!\n * Bootswatch v4.6.0\n * Homepage: https://bootswatch.com\n * Copyright 2012-2021 Thomas Park\n * Licensed under MIT\n * Based on Bootstrap\n*//*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);:root{--blue:#2196f3;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#e51c23;--orange:#fd7e14;--yellow:#ff9800;--green:#4caf50;--teal:#20c997;--cyan:#9c27b0;--white:#fff;--gray:#666;--gray-dark:#222;--primary:#2196f3;--secondary:#fff;--success:#4caf50;--info:#9c27b0;--warning:#ff9800;--danger:#e51c23;--light:#fff;--dark:#222;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-size:.8125rem;font-weight:400;line-height:1.5;color:#444;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#2196f3;text-decoration:none;background-color:transparent}a:hover{color:#0a6ebd;text-decoration:underline}a:not([href]):not([class]){color:inherit;text-decoration:none}a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#666;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.03125rem}.h2,h2{font-size:1.625rem}.h3,h3{font-size:1.421875rem}.h4,h4{font-size:1.21875rem}.h5,h5{font-size:1.015625rem}.h6,h6{font-size:.8125rem}.lead{font-size:1.015625rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.015625rem}.blockquote-footer{display:block;font-size:80%;color:#666}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#666}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212121;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212121}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-sm-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-md-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-md-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-md-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-md-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-md-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-lg-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.row-cols-xl-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#444}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#444;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#c1e2fc}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#8cc8f9}.table-hover .table-primary:hover{background-color:#a9d7fb}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#a9d7fb}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#fff}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#fff}.table-hover .table-secondary:hover{background-color:#f2f2f2}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#f2f2f2}.table-success,.table-success>td,.table-success>th{background-color:#cde9ce}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#a2d5a4}.table-hover .table-success:hover{background-color:#bbe1bd}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#bbe1bd}.table-info,.table-info>td,.table-info>th{background-color:#e3c3e9}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#cc8fd6}.table-hover .table-info:hover{background-color:#dab0e2}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#dab0e2}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffe2b8}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffc97a}.table-hover .table-warning:hover{background-color:#ffd89f}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffd89f}.table-danger,.table-danger>td,.table-danger>th{background-color:#f8bfc1}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#f1898d}.table-hover .table-danger:hover{background-color:#f5a8ab}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f5a8ab}.table-light,.table-light>td,.table-light>th{background-color:#fff}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fff}.table-hover .table-light:hover{background-color:#f2f2f2}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#f2f2f2}.table-dark,.table-dark>td,.table-dark>th{background-color:#c1c1c1}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#8c8c8c}.table-hover .table-dark:hover{background-color:#b4b4b4}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b4b4b4}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#222;border-color:#353535}.table .thead-light th{color:#444;background-color:#eee;border-color:#dee2e6}.table-dark{color:#fff;background-color:#222}.table-dark td,.table-dark th,.table-dark thead th{border-color:#353535}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + 2rem);padding:1rem 0;font-size:.8125rem;font-weight:400;line-height:1.5;color:#666;background-color:transparent;background-clip:padding-box;border:0 solid transparent;border-radius:0;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #666}.form-control:focus{color:#666;background-color:transparent;border-color:#9acffa;outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.form-control::-webkit-input-placeholder{color:rgba(0,0,0,.4);opacity:1}.form-control::-moz-placeholder{color:rgba(0,0,0,.4);opacity:1}.form-control:-ms-input-placeholder{color:rgba(0,0,0,.4);opacity:1}.form-control::-ms-input-placeholder{color:rgba(0,0,0,.4);opacity:1}.form-control::placeholder{color:rgba(0,0,0,.4);opacity:1}.form-control:disabled,.form-control[readonly]{background-color:transparent;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#666;background-color:transparent}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:1rem;padding-bottom:1rem;margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:1.015625rem;padding-bottom:1.015625rem;font-size:1.015625rem;line-height:1.5}.col-form-label-sm{padding-top:0;padding-bottom:0;font-size:.710938rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:1rem 0;margin-bottom:0;font-size:.8125rem;line-height:1.5;color:#444;background-color:transparent;border:solid transparent;border-width:0 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:1.5em;padding:0 0;font-size:.710938rem;line-height:1.5;border-radius:0}.form-control-lg{height:calc(1.5em + 2.03125rem);padding:1.015625rem 0;font-size:1.015625rem;line-height:1.5;border-radius:0}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#666}.form-check-label{margin-bottom:0}.form-check-inline{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#4caf50}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.710938rem;line-height:1.5;color:#fff;background-color:rgba(76,175,80,.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#4caf50;padding-right:calc(1.5em + 2rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%234caf50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .5rem) center;background-size:calc(.75em + 1rem) calc(.75em + 1rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#4caf50;box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 2rem);background-position:top calc(.375em + .5rem) right calc(.375em + .5rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#4caf50;padding-right:calc(.75em + 2.5rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0 center/8px 10px no-repeat,transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%234caf50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1rem/calc(.75em + 1rem) calc(.75em + 1rem) no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#4caf50;box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#4caf50}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#4caf50}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#4caf50}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#6ec071;background:#6ec071 linear-gradient(180deg,#84c987,#6ec071) repeat-x}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#4caf50}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#4caf50}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#4caf50;box-shadow:0 0 0 .2rem rgba(76,175,80,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#e51c23}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.710938rem;line-height:1.5;color:#fff;background-color:rgba(229,28,35,.9);border-radius:.25rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#e51c23;padding-right:calc(1.5em + 2rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e51c23' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e51c23' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .5rem) center;background-size:calc(.75em + 1rem) calc(.75em + 1rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#e51c23;box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 2rem);background-position:top calc(.375em + .5rem) right calc(.375em + .5rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#e51c23;padding-right:calc(.75em + 2.5rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0 center/8px 10px no-repeat,transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e51c23' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e51c23' stroke='none'/%3e%3c/svg%3e\") center right 1rem/calc(.75em + 1rem) calc(.75em + 1rem) no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#e51c23;box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#e51c23}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#e51c23}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#e51c23}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#ea4a4f;background:#ea4a4f linear-gradient(180deg,#ed656a,#ea4a4f) repeat-x}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#e51c23}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#e51c23}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#e51c23;box-shadow:0 0 0 .2rem rgba(229,28,35,.25)}.form-inline{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#444;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.8rem 1rem;font-size:.8125rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#444;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border-color:#2196f3}.btn-primary:hover{color:#fff;background:#0c83e2 linear-gradient(180deg,#3196e6,#0c83e2) repeat-x;border-color:#0c7cd5}.btn-primary.focus,.btn-primary:focus{color:#fff;background:#0c83e2 linear-gradient(180deg,#3196e6,#0c83e2) repeat-x;border-color:#0c7cd5;box-shadow:0 0 0 .2rem rgba(66,166,245,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#2196f3;border-color:#2196f3;background-image:none}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0c7cd5;background-image:none;border-color:#0b75c9}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(66,166,245,.5)}.btn-secondary{color:#212121;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.btn-secondary:hover{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6}.btn-secondary.focus,.btn-secondary:focus{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6;box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#212121;background-color:#fff;border-color:#fff;background-image:none}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#212121;background-color:#e6e6e6;background-image:none;border-color:#dfdfdf}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-success{color:#fff;background:#4caf50 linear-gradient(180deg,#67bb6a,#4caf50) repeat-x;border-color:#4caf50}.btn-success:hover{color:#fff;background:#409444 linear-gradient(180deg,#5da460,#409444) repeat-x;border-color:#3d8b40}.btn-success.focus,.btn-success:focus{color:#fff;background:#409444 linear-gradient(180deg,#5da460,#409444) repeat-x;border-color:#3d8b40;box-shadow:0 0 0 .2rem rgba(103,187,106,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#4caf50;border-color:#4caf50;background-image:none}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#3d8b40;background-image:none;border-color:#39833c}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(103,187,106,.5)}.btn-info{color:#fff;background:#9c27b0 linear-gradient(180deg,#ab47bc,#9c27b0) repeat-x;border-color:#9c27b0}.btn-info:hover{color:#fff;background:#802091 linear-gradient(180deg,#9342a1,#802091) repeat-x;border-color:#771e86}.btn-info.focus,.btn-info:focus{color:#fff;background:#802091 linear-gradient(180deg,#9342a1,#802091) repeat-x;border-color:#771e86;box-shadow:0 0 0 .2rem rgba(171,71,188,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#9c27b0;border-color:#9c27b0;background-image:none}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#771e86;background-image:none;border-color:#6e1b7c}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(171,71,188,.5)}.btn-warning{color:#fff;background:#ff9800 linear-gradient(180deg,#ffa726,#ff9800) repeat-x;border-color:#ff9800}.btn-warning:hover{color:#fff;background:#d98100 linear-gradient(180deg,#de9426,#d98100) repeat-x;border-color:#cc7a00}.btn-warning.focus,.btn-warning:focus{color:#fff;background:#d98100 linear-gradient(180deg,#de9426,#d98100) repeat-x;border-color:#cc7a00;box-shadow:0 0 0 .2rem rgba(255,167,38,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#fff;background-color:#ff9800;border-color:#ff9800;background-image:none}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#cc7a00;background-image:none;border-color:#bf7200}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,167,38,.5)}.btn-danger{color:#fff;background:#e51c23 linear-gradient(180deg,#e93e44,#e51c23) repeat-x;border-color:#e51c23}.btn-danger:hover{color:#fff;background:#c4161d linear-gradient(180deg,#cd393f,#c4161d) repeat-x;border-color:#b9151b}.btn-danger.focus,.btn-danger:focus{color:#fff;background:#c4161d linear-gradient(180deg,#cd393f,#c4161d) repeat-x;border-color:#b9151b;box-shadow:0 0 0 .2rem rgba(233,62,68,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#e51c23;border-color:#e51c23;background-image:none}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b9151b;background-image:none;border-color:#ad1419}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(233,62,68,.5)}.btn-light{color:#212121;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.btn-light:hover{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6}.btn-light.focus,.btn-light:focus{color:#212121;background:#ececec linear-gradient(180deg,#efefef,#ececec) repeat-x;border-color:#e6e6e6;box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-light.disabled,.btn-light:disabled{color:#212121;background-color:#fff;border-color:#fff;background-image:none}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212121;background-color:#e6e6e6;background-image:none;border-color:#dfdfdf}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,222,222,.5)}.btn-dark{color:#fff;background:#222 linear-gradient(180deg,#434343,#222) repeat-x;border-color:#222}.btn-dark:hover{color:#fff;background:#0f0f0f linear-gradient(180deg,#333,#0f0f0f) repeat-x;border-color:#090909}.btn-dark.focus,.btn-dark:focus{color:#fff;background:#0f0f0f linear-gradient(180deg,#333,#0f0f0f) repeat-x;border-color:#090909;box-shadow:0 0 0 .2rem rgba(67,67,67,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#222;border-color:#222;background-image:none}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#090909;background-image:none;border-color:#020202}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(67,67,67,.5)}.btn-outline-primary{color:#2196f3;border-color:#2196f3}.btn-outline-primary:hover{color:#fff;background-color:#2196f3;border-color:#2196f3}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(33,150,243,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#2196f3;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#2196f3;border-color:#2196f3}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(33,150,243,.5)}.btn-outline-secondary{color:#fff;border-color:#fff}.btn-outline-secondary:hover{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#fff;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-success{color:#4caf50;border-color:#4caf50}.btn-outline-success:hover{color:#fff;background-color:#4caf50;border-color:#4caf50}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(76,175,80,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#4caf50;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#4caf50;border-color:#4caf50}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(76,175,80,.5)}.btn-outline-info{color:#9c27b0;border-color:#9c27b0}.btn-outline-info:hover{color:#fff;background-color:#9c27b0;border-color:#9c27b0}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(156,39,176,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#9c27b0;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#9c27b0;border-color:#9c27b0}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(156,39,176,.5)}.btn-outline-warning{color:#ff9800;border-color:#ff9800}.btn-outline-warning:hover{color:#fff;background-color:#ff9800;border-color:#ff9800}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,152,0,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ff9800;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#ff9800;border-color:#ff9800}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,152,0,.5)}.btn-outline-danger{color:#e51c23;border-color:#e51c23}.btn-outline-danger:hover{color:#fff;background-color:#e51c23;border-color:#e51c23}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(229,28,35,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#e51c23;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#e51c23;border-color:#e51c23}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(229,28,35,.5)}.btn-outline-light{color:#fff;border-color:#fff}.btn-outline-light:hover{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#fff;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212121;background-color:#fff;border-color:#fff}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-dark{color:#222;border-color:#222}.btn-outline-dark:hover{color:#fff;background-color:#222;border-color:#222}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(34,34,34,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#222;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#222;border-color:#222}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(34,34,34,.5)}.btn-link{font-weight:400;color:#2196f3;text-decoration:none}.btn-link:hover{color:#0a6ebd;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#666;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.015625rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.710938rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:.8125rem;color:#444;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #eee}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212121;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#141414;text-decoration:none;background:#eee linear-gradient(180deg,#f1f1f1,#eee) repeat-x}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.dropdown-item.disabled,.dropdown-item:disabled{color:#bbb;pointer-events:none;background-color:transparent;background-image:none}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.710938rem;color:#666;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212121}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:0}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label::after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label::after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-append,.input-group-prepend{display:-ms-flexbox;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:0}.input-group-prepend{margin-right:0}.input-group-append{margin-left:0}.input-group-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1rem 0;margin-bottom:0;font-size:.8125rem;font-weight:400;line-height:1.5;color:#666;text-align:center;white-space:nowrap;background-color:transparent;border:0 solid transparent;border-radius:0}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 2.03125rem)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:1.015625rem 0;font-size:1.015625rem;line-height:1.5;border-radius:0}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:1.5em}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:0 0;font-size:.710938rem;line-height:1.5;border-radius:0}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1rem}.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.21875rem;padding-left:3rem;-webkit-print-color-adjust:exact;color-adjust:exact}.custom-control-inline{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1.25rem;height:1.234375rem;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#2196f3;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.custom-control-input:focus~.custom-control-label::before{box-shadow:0}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#9acffa}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#cae6fc;border-color:#cae6fc}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#666}.custom-control-input:disabled~.custom-control-label::before,.custom-control-input[disabled]~.custom-control-label::before{background-color:#f8f9fa}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:-.015625rem;left:-3rem;display:block;width:1.25rem;height:1.25rem;pointer-events:none;content:\"\";background-color:#fff;border:#bbb solid 0}.custom-control-label::after{position:absolute;top:-.015625rem;left:-3rem;display:block;width:1.25rem;height:1.25rem;content:\"\";background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label::before{border-radius:2px}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#2196f3;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='4' fill='%232196f3'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-switch{padding-left:3.9375rem}.custom-switch .custom-control-label::before{left:-3.9375rem;width:2.1875rem;pointer-events:all;border-radius:.625rem}.custom-switch .custom-control-label::after{top:-.015625rem;left:-3.9375rem;width:1.25rem;height:1.25rem;background-color:#bbb;border-radius:.625rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.9375rem);transform:translateX(.9375rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background:rgba(33,150,243,.5) linear-gradient(180deg,rgba(110,186,247,.575),rgba(33,150,243,.5)) repeat-x}.custom-select{display:inline-block;width:100%;height:calc(1.5em + 2rem);padding:1rem 1rem 1rem 0;font-size:.8125rem;font-weight:400;line-height:1.5;color:#666;vertical-align:middle;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0 center/8px 10px no-repeat;border:0 solid transparent;border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#9acffa;outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.custom-select:focus::-ms-value{color:#666;background-color:transparent}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:0;background-image:none}.custom-select:disabled{color:#666;background-color:#eee}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #666}.custom-select-sm{height:1.5em;padding-top:0;padding-bottom:0;padding-left:0;font-size:.710938rem}.custom-select-lg{height:calc(1.5em + 2.03125rem);padding-top:1.015625rem;padding-bottom:1.015625rem;padding-left:0;font-size:1.015625rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + 2rem);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + 2rem);margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#9acffa;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:transparent}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + 2rem);padding:1rem 0;overflow:hidden;font-weight:400;line-height:1.5;color:#666;background-color:transparent;border:0 solid transparent;border-radius:0}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + 2rem);padding:1rem 0;line-height:1.5;color:#666;content:\"Browse\";background:transparent linear-gradient(180deg,rgba(255,255,255,.15),transparent) repeat-x;border-left:inherit;border-radius:0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(33,150,243,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(33,150,243,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(33,150,243,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background:#cae6fc linear-gradient(180deg,#d2eafd,#cae6fc) repeat-x}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background:#cae6fc linear-gradient(180deg,#d2eafd,#cae6fc) repeat-x}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background:#cae6fc linear-gradient(180deg,#d2eafd,#cae6fc) repeat-x}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#bbb}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#bbb}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#bbb}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#bbb;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid transparent}.nav-tabs .nav-link{margin-bottom:-1px;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#eee #eee transparent}.nav-tabs .nav-link.disabled{color:#bbb;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#444;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#2196f3}.nav-fill .nav-item,.nav-fill>.nav-link{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.347656rem;padding-bottom:.347656rem;margin-right:1rem;font-size:1.015625rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.015625rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:#fff}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.75);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.75)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0 solid transparent;border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:0 solid transparent}.card-header:first-child{border-radius:.25rem .25rem 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:0 solid transparent}.card-footer:last-child{border-radius:0 0 .25rem .25rem}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:.25rem}.card-img,.card-img-bottom,.card-img-top{-ms-flex-negative:0;flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-img,.card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{-ms-flex:1 0 0%;flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:0}.breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#eee;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#666;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#666}.pagination{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#2196f3;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0a6ebd;text-decoration:none;background-color:#eee;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#2196f3;border-color:#2196f3}.page-item.disabled .page-link{color:#666;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.015625rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.710938rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#2196f3}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0c7cd5}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(33,150,243,.5)}.badge-secondary{color:#212121;background-color:#fff}a.badge-secondary:focus,a.badge-secondary:hover{color:#212121;background-color:#e6e6e6}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.badge-success{color:#fff;background-color:#4caf50}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#3d8b40}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(76,175,80,.5)}.badge-info{color:#fff;background-color:#9c27b0}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#771e86}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(156,39,176,.5)}.badge-warning{color:#fff;background-color:#ff9800}a.badge-warning:focus,a.badge-warning:hover{color:#fff;background-color:#cc7a00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,152,0,.5)}.badge-danger{color:#fff;background-color:#e51c23}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#b9151b}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(229,28,35,.5)}.badge-light{color:#212121;background-color:#fff}a.badge-light:focus,a.badge-light:hover{color:#212121;background-color:#e6e6e6}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.badge-dark{color:#fff;background-color:#222}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#090909}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(34,34,34,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#eee;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4.625rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#114e7e;background:#d3eafd linear-gradient(180deg,#daedfd,#d3eafd) repeat-x;border-color:#c1e2fc}.alert-primary hr{border-top-color:#a9d7fb}.alert-primary .alert-link{color:#0b3251}.alert-secondary{color:#858585;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.alert-secondary hr{border-top-color:#f2f2f2}.alert-secondary .alert-link{color:#6c6c6c}.alert-success{color:#285b2a;background:#dbefdc linear-gradient(180deg,#e0f1e1,#dbefdc) repeat-x;border-color:#cde9ce}.alert-success hr{border-top-color:#bbe1bd}.alert-success .alert-link{color:#18381a}.alert-info{color:#51145c;background:#ebd4ef linear-gradient(180deg,#eedaf1,#ebd4ef) repeat-x;border-color:#e3c3e9}.alert-info hr{border-top-color:#dab0e2}.alert-info .alert-link{color:#2c0b32}.alert-warning{color:#854f00;background:#ffeacc linear-gradient(180deg,#ffedd4,#ffeacc) repeat-x;border-color:#ffe2b8}.alert-warning hr{border-top-color:#ffd89f}.alert-warning .alert-link{color:#523100}.alert-danger{color:#770f12;background:#fad2d3 linear-gradient(180deg,#fbd9da,#fad2d3) repeat-x;border-color:#f8bfc1}.alert-danger hr{border-top-color:#f5a8ab}.alert-danger .alert-link{color:#4a090b}.alert-light{color:#858585;background:#fff linear-gradient(180deg,#fff,#fff) repeat-x;border-color:#fff}.alert-light hr{border-top-color:#f2f2f2}.alert-light .alert-link{color:#6c6c6c}.alert-dark{color:#121212;background:#d3d3d3 linear-gradient(180deg,#dadada,#d3d3d3) repeat-x;border-color:#c1c1c1}.alert-dark hr{border-top-color:#b4b4b4}.alert-dark .alert-link{color:#000}@-webkit-keyframes progress-bar-stripes{from{background-position:.375rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:.375rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:flex;height:.375rem;overflow:hidden;line-height:0;font-size:.609375rem;background-color:#eee;border-radius:0}.progress-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#2196f3;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:.375rem .375rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.list-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#444;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#444;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#444;background-color:#eee}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#666;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#2196f3;border-color:#2196f3}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#114e7e;background-color:#c1e2fc}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#114e7e;background-color:#a9d7fb}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#114e7e;border-color:#114e7e}.list-group-item-secondary{color:#858585;background-color:#fff}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#858585;background-color:#f2f2f2}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#858585;border-color:#858585}.list-group-item-success{color:#285b2a;background-color:#cde9ce}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#285b2a;background-color:#bbe1bd}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#285b2a;border-color:#285b2a}.list-group-item-info{color:#51145c;background-color:#e3c3e9}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#51145c;background-color:#dab0e2}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#51145c;border-color:#51145c}.list-group-item-warning{color:#854f00;background-color:#ffe2b8}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#854f00;background-color:#ffd89f}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#854f00;border-color:#854f00}.list-group-item-danger{color:#770f12;background-color:#f8bfc1}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#770f12;background-color:#f5a8ab}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#770f12;border-color:#770f12}.list-group-item-light{color:#858585;background-color:#fff}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#858585;background-color:#f2f2f2}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#858585;border-color:#858585}.list-group-item-dark{color:#121212;background-color:#c1c1c1}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#121212;background-color:#b4b4b4}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#121212;border-color:#121212}.close{float:right;font-size:2.125rem;font-weight:300;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{-ms-flex-preferred-size:350px;flex-basis:350px;max-width:350px;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.25rem .75rem;color:#666;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal.modal-static .modal-dialog{-webkit-transform:scale(1.02);transform:scale(1.02)}.modal-dialog-scrollable{display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid transparent;border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.710938rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#444}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#444}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#444}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#444}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#444;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.710938rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:.8125rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#444}.carousel{position:relative}.carousel.pointer-event{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0;background-image:linear-gradient(90deg,rgba(0,0,0,.25),rgba(0,0,0,.001))}.carousel-control-next{right:0;background-image:linear-gradient(270deg,rgba(0,0,0,.25),rgba(0,0,0,.001))}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#2196f3!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0c7cd5!important}.bg-secondary{background-color:#fff!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#e6e6e6!important}.bg-success{background-color:#4caf50!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#3d8b40!important}.bg-info{background-color:#9c27b0!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#771e86!important}.bg-warning{background-color:#ff9800!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#cc7a00!important}.bg-danger{background-color:#e51c23!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#b9151b!important}.bg-light{background-color:#fff!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#e6e6e6!important}.bg-dark{background-color:#222!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#090909!important}.bg-gradient-primary{background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x!important}.bg-gradient-secondary{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x!important}.bg-gradient-success{background:#4caf50 linear-gradient(180deg,#67bb6a,#4caf50) repeat-x!important}.bg-gradient-info{background:#9c27b0 linear-gradient(180deg,#ab47bc,#9c27b0) repeat-x!important}.bg-gradient-warning{background:#ff9800 linear-gradient(180deg,#ffa726,#ff9800) repeat-x!important}.bg-gradient-danger{background:#e51c23 linear-gradient(180deg,#e93e44,#e51c23) repeat-x!important}.bg-gradient-light{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x!important}.bg-gradient-dark{background:#222 linear-gradient(180deg,#434343,#222) repeat-x!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#2196f3!important}.border-secondary{border-color:#fff!important}.border-success{border-color:#4caf50!important}.border-info{border-color:#9c27b0!important}.border-warning{border-color:#ff9800!important}.border-danger{border-color:#e51c23!important}.border-light{border-color:#fff!important}.border-dark{border-color:#222!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#2196f3!important}a.text-primary:focus,a.text-primary:hover{color:#0a6ebd!important}.text-secondary{color:#fff!important}a.text-secondary:focus,a.text-secondary:hover{color:#d9d9d9!important}.text-success{color:#4caf50!important}a.text-success:focus,a.text-success:hover{color:#357a38!important}.text-info{color:#9c27b0!important}a.text-info:focus,a.text-info:hover{color:#641971!important}.text-warning{color:#ff9800!important}a.text-warning:focus,a.text-warning:hover{color:#b36a00!important}.text-danger{color:#e51c23!important}a.text-danger:focus,a.text-danger:hover{color:#a21318!important}.text-light{color:#fff!important}a.text-light:focus,a.text-light:hover{color:#d9d9d9!important}.text-dark{color:#222!important}a.text-dark:focus,a.text-dark:hover{color:#000!important}.text-body{color:#444!important}.text-muted{color:#666!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #bbb;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}.dropdown-toggle::after,.dropleft .dropdown-toggle::after,.dropright .dropdown-toggle::after,.dropup .dropdown-toggle::after{border-width:4px}.navbar{border:none;box-shadow:0 1px 2px rgba(0,0,0,.3)}.navbar-brand{font-size:24px}.navbar-nav .nav-link{padding-top:.9rem;padding-bottom:.9rem}.navbar.bg-dark input[type=email],.navbar.bg-dark input[type=number],.navbar.bg-dark input[type=password],.navbar.bg-dark input[type=tel],.navbar.bg-dark input[type=text],.navbar.bg-primary input[type=email],.navbar.bg-primary input[type=number],.navbar.bg-primary input[type=password],.navbar.bg-primary input[type=tel],.navbar.bg-primary input[type=text]{color:#fff;box-shadow:inset 0 -1px 0 rgba(255,255,255,.5)}.navbar.bg-dark input[type=email]:focus,.navbar.bg-dark input[type=number]:focus,.navbar.bg-dark input[type=password]:focus,.navbar.bg-dark input[type=tel]:focus,.navbar.bg-dark input[type=text]:focus,.navbar.bg-primary input[type=email]:focus,.navbar.bg-primary input[type=number]:focus,.navbar.bg-primary input[type=password]:focus,.navbar.bg-primary input[type=tel]:focus,.navbar.bg-primary input[type=text]:focus{box-shadow:inset 0 -2px 0 #fff}.navbar.bg-dark input[type=email]::-webkit-input-placeholder,.navbar.bg-dark input[type=number]::-webkit-input-placeholder,.navbar.bg-dark input[type=password]::-webkit-input-placeholder,.navbar.bg-dark input[type=tel]::-webkit-input-placeholder,.navbar.bg-dark input[type=text]::-webkit-input-placeholder,.navbar.bg-primary input[type=email]::-webkit-input-placeholder,.navbar.bg-primary input[type=number]::-webkit-input-placeholder,.navbar.bg-primary input[type=password]::-webkit-input-placeholder,.navbar.bg-primary input[type=tel]::-webkit-input-placeholder,.navbar.bg-primary input[type=text]::-webkit-input-placeholder{color:rgba(255,255,255,.5)}.navbar.bg-dark input[type=email]::-moz-placeholder,.navbar.bg-dark input[type=number]::-moz-placeholder,.navbar.bg-dark input[type=password]::-moz-placeholder,.navbar.bg-dark input[type=tel]::-moz-placeholder,.navbar.bg-dark input[type=text]::-moz-placeholder,.navbar.bg-primary input[type=email]::-moz-placeholder,.navbar.bg-primary input[type=number]::-moz-placeholder,.navbar.bg-primary input[type=password]::-moz-placeholder,.navbar.bg-primary input[type=tel]::-moz-placeholder,.navbar.bg-primary input[type=text]::-moz-placeholder{color:rgba(255,255,255,.5)}.navbar.bg-dark input[type=email]:-ms-input-placeholder,.navbar.bg-dark input[type=number]:-ms-input-placeholder,.navbar.bg-dark input[type=password]:-ms-input-placeholder,.navbar.bg-dark input[type=tel]:-ms-input-placeholder,.navbar.bg-dark input[type=text]:-ms-input-placeholder,.navbar.bg-primary input[type=email]:-ms-input-placeholder,.navbar.bg-primary input[type=number]:-ms-input-placeholder,.navbar.bg-primary input[type=password]:-ms-input-placeholder,.navbar.bg-primary input[type=tel]:-ms-input-placeholder,.navbar.bg-primary input[type=text]:-ms-input-placeholder{color:rgba(255,255,255,.5)}.navbar.bg-dark input[type=email]::-ms-input-placeholder,.navbar.bg-dark input[type=number]::-ms-input-placeholder,.navbar.bg-dark input[type=password]::-ms-input-placeholder,.navbar.bg-dark input[type=tel]::-ms-input-placeholder,.navbar.bg-dark input[type=text]::-ms-input-placeholder,.navbar.bg-primary input[type=email]::-ms-input-placeholder,.navbar.bg-primary input[type=number]::-ms-input-placeholder,.navbar.bg-primary input[type=password]::-ms-input-placeholder,.navbar.bg-primary input[type=tel]::-ms-input-placeholder,.navbar.bg-primary input[type=text]::-ms-input-placeholder{color:rgba(255,255,255,.5)}.navbar.bg-dark input[type=email]::placeholder,.navbar.bg-dark input[type=number]::placeholder,.navbar.bg-dark input[type=password]::placeholder,.navbar.bg-dark input[type=tel]::placeholder,.navbar.bg-dark input[type=text]::placeholder,.navbar.bg-primary input[type=email]::placeholder,.navbar.bg-primary input[type=number]::placeholder,.navbar.bg-primary input[type=password]::placeholder,.navbar.bg-primary input[type=tel]::placeholder,.navbar.bg-primary input[type=text]::placeholder{color:rgba(255,255,255,.5)}.btn-primary{position:relative}.btn-primary:focus{background-color:#2196f3;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-primary:active:hover,.btn-primary:hover{background-color:#0d87e9}.btn-primary:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-primary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-primary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-primary.disabled::before,.btn-primary[disabled]::before{display:none}.btn-outline-primary{position:relative}.btn-outline-primary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-primary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-primary.disabled::before,.btn-outline-primary[disabled]::before{display:none}.btn-secondary{position:relative}.btn-secondary:focus{background-color:#fff;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-secondary:active:hover,.btn-secondary:hover{background-color:#f0f0f0}.btn-secondary:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-secondary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#bbb 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-secondary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-secondary.disabled::before,.btn-secondary[disabled]::before{display:none}.btn-outline-secondary{position:relative}.btn-outline-secondary::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#bbb 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-secondary:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-secondary.disabled::before,.btn-outline-secondary[disabled]::before{display:none}.btn-success{position:relative}.btn-success:focus{background-color:#4caf50;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-success:active:hover,.btn-success:hover{background-color:#439a46}.btn-success:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-success::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-success:active::before{background-size:0 0;opacity:.2;transition:none}.btn-success.disabled::before,.btn-success[disabled]::before{display:none}.btn-outline-success{position:relative}.btn-outline-success::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-success:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-success.disabled::before,.btn-outline-success[disabled]::before{display:none}.btn-info{position:relative}.btn-info:focus{background-color:#9c27b0;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-info:active:hover,.btn-info:hover{background-color:#862197}.btn-info:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-info::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-info:active::before{background-size:0 0;opacity:.2;transition:none}.btn-info.disabled::before,.btn-info[disabled]::before{display:none}.btn-outline-info{position:relative}.btn-outline-info::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-info:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-info.disabled::before,.btn-outline-info[disabled]::before{display:none}.btn-warning{position:relative}.btn-warning:focus{background-color:#ff9800;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-warning:active:hover,.btn-warning:hover{background-color:#e08600}.btn-warning:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-warning::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-warning:active::before{background-size:0 0;opacity:.2;transition:none}.btn-warning.disabled::before,.btn-warning[disabled]::before{display:none}.btn-outline-warning{position:relative}.btn-outline-warning::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-warning:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-warning.disabled::before,.btn-outline-warning[disabled]::before{display:none}.btn-danger{position:relative}.btn-danger:focus{background-color:#e51c23;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-danger:active:hover,.btn-danger:hover{background-color:#cb171e}.btn-danger:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-danger::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-danger:active::before{background-size:0 0;opacity:.2;transition:none}.btn-danger.disabled::before,.btn-danger[disabled]::before{display:none}.btn-outline-danger{position:relative}.btn-outline-danger::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-danger:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-danger.disabled::before,.btn-outline-danger[disabled]::before{display:none}.btn-dark{position:relative}.btn-dark:focus{background-color:#222;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-dark:active:hover,.btn-dark:hover{background-color:#131313}.btn-dark:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-dark::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-dark:active::before{background-size:0 0;opacity:.2;transition:none}.btn-dark.disabled::before,.btn-dark[disabled]::before{display:none}.btn-outline-dark{position:relative}.btn-outline-dark::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-dark:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-dark.disabled::before,.btn-outline-dark[disabled]::before{display:none}.btn-light{position:relative}.btn-light:focus{background-color:#fff;box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-light:active:hover,.btn-light:hover{background-color:#f0f0f0}.btn-light:active{box-shadow:2px 2px 4px rgba(0,0,0,.4)}.btn-light::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-light:active::before{background-size:0 0;opacity:.2;transition:none}.btn-light.disabled::before,.btn-light[disabled]::before{display:none}.btn-outline-light{position:relative}.btn-outline-light::before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin-left:0;background-image:radial-gradient(circle,#fff 10%,transparent 10.01%);background-repeat:no-repeat;background-size:1000% 1000%;background-position:50%;border:none;opacity:0;pointer-events:none;transition:background .5s,opacity 1s}.btn-outline-light:active::before{background-size:0 0;opacity:.2;transition:none}.btn-outline-light.disabled::before,.btn-outline-light[disabled]::before{display:none}.btn{text-transform:uppercase;border:none;box-shadow:0 1px 4px rgba(0,0,0,.4);transition:color .4s,background-color .4s,border-color .4s,box-shadow .4s}.btn-link{box-shadow:none;color:#2196f3}.btn-link:focus,.btn-link:hover{box-shadow:none;color:#0a6ebd;text-decoration:underline}.btn-link.disabled:active:hover,.btn-link.disabled:hover,.btn-link[disabled]:active:hover,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:active:hover,fieldset[disabled] .btn-link:hover{color:#666;text-decoration:none}.btn-secondary.disabled,.btn-secondary[disabled],fieldset[disabled] .btn-secondary{background-color:rgba(0,0,0,.1);color:rgba(0,0,0,.4);opacity:1}.btn-secondary.disabled:focus,.btn-secondary.disabled:hover,.btn-secondary[disabled]:focus,.btn-secondary[disabled]:hover,fieldset[disabled] .btn-secondary:focus,fieldset[disabled] .btn-secondary:hover{background-color:rgba(0,0,0,.1)}.btn-outline-secondary{border-color:#eee;color:#dee2e6}.btn-warning{color:#fff}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:0}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:0}.btn-group .btn+.btn,.btn-group .btn+.btn-group>.dropdown-toggle{box-shadow:1px 1px 4px rgba(0,0,0,.4)}.border-secondary{border:1px solid #dfdfdf!important}body,button,input{-webkit-font-smoothing:antialiased;letter-spacing:.1px}p{margin:0 0 1em}.text-secondary{color:#bbb!important}.table-hover>tbody>tr,.table-hover>tbody>tr>td,.table-hover>tbody>tr>th{transition:background-color .2s,color .2s}.thead-inverse th{background-color:#2196f3;color:#fff}.col-form-label{font-size:16px}.col-form-label-sm{font-size:.710938rem}.col-form-label-lg{font-size:1.015625rem}[contenteditable].form-control,[type=email].form-control,[type=password].form-control,[type=tel].form-control,[type=text].form-control,input.form-control,input[type=email],input[type=number],input[type=password],input[type=text],textarea,textarea.form-control{box-shadow:inset 0 -1px 0 #ddd;transition:box-shadow .2s}[contenteditable].form-control:focus,[type=email].form-control:focus,[type=password].form-control:focus,[type=tel].form-control:focus,[type=text].form-control:focus,input.form-control:focus,input[type=email]:focus,input[type=number]:focus,input[type=password]:focus,input[type=text]:focus,textarea.form-control:focus,textarea:focus{box-shadow:inset 0 -2px 0 #2196f3}[contenteditable].form-control[disabled],[contenteditable].form-control[readonly],[type=email].form-control[disabled],[type=email].form-control[readonly],[type=password].form-control[disabled],[type=password].form-control[readonly],[type=tel].form-control[disabled],[type=tel].form-control[readonly],[type=text].form-control[disabled],[type=text].form-control[readonly],input.form-control[disabled],input.form-control[readonly],input[type=email][disabled],input[type=email][readonly],input[type=number][disabled],input[type=number][readonly],input[type=password][disabled],input[type=password][readonly],input[type=text][disabled],input[type=text][readonly],textarea.form-control[disabled],textarea.form-control[readonly],textarea[disabled],textarea[readonly]{box-shadow:none;border-bottom:1px dotted #ddd}[contenteditable].form-control[disabled]::-webkit-input-placeholder,[type=email].form-control[disabled]::-webkit-input-placeholder,[type=password].form-control[disabled]::-webkit-input-placeholder,[type=tel].form-control[disabled]::-webkit-input-placeholder,[type=text].form-control[disabled]::-webkit-input-placeholder,input.form-control[disabled]::-webkit-input-placeholder,input[type=email][disabled]::-webkit-input-placeholder,input[type=number][disabled]::-webkit-input-placeholder,input[type=password][disabled]::-webkit-input-placeholder,input[type=text][disabled]::-webkit-input-placeholder,textarea.form-control[disabled]::-webkit-input-placeholder,textarea[disabled]::-webkit-input-placeholder{color:#ddd}[contenteditable].form-control[disabled]::-moz-placeholder,[type=email].form-control[disabled]::-moz-placeholder,[type=password].form-control[disabled]::-moz-placeholder,[type=tel].form-control[disabled]::-moz-placeholder,[type=text].form-control[disabled]::-moz-placeholder,input.form-control[disabled]::-moz-placeholder,input[type=email][disabled]::-moz-placeholder,input[type=number][disabled]::-moz-placeholder,input[type=password][disabled]::-moz-placeholder,input[type=text][disabled]::-moz-placeholder,textarea.form-control[disabled]::-moz-placeholder,textarea[disabled]::-moz-placeholder{color:#ddd}[contenteditable].form-control[disabled]:-ms-input-placeholder,[type=email].form-control[disabled]:-ms-input-placeholder,[type=password].form-control[disabled]:-ms-input-placeholder,[type=tel].form-control[disabled]:-ms-input-placeholder,[type=text].form-control[disabled]:-ms-input-placeholder,input.form-control[disabled]:-ms-input-placeholder,input[type=email][disabled]:-ms-input-placeholder,input[type=number][disabled]:-ms-input-placeholder,input[type=password][disabled]:-ms-input-placeholder,input[type=text][disabled]:-ms-input-placeholder,textarea.form-control[disabled]:-ms-input-placeholder,textarea[disabled]:-ms-input-placeholder{color:#ddd}[contenteditable].form-control[disabled]::-ms-input-placeholder,[type=email].form-control[disabled]::-ms-input-placeholder,[type=password].form-control[disabled]::-ms-input-placeholder,[type=tel].form-control[disabled]::-ms-input-placeholder,[type=text].form-control[disabled]::-ms-input-placeholder,input.form-control[disabled]::-ms-input-placeholder,input[type=email][disabled]::-ms-input-placeholder,input[type=number][disabled]::-ms-input-placeholder,input[type=password][disabled]::-ms-input-placeholder,input[type=text][disabled]::-ms-input-placeholder,textarea.form-control[disabled]::-ms-input-placeholder,textarea[disabled]::-ms-input-placeholder{color:#ddd}[contenteditable].form-control[disabled],[contenteditable].form-control[disabled]::placeholder,[type=email].form-control[disabled],[type=email].form-control[disabled]::placeholder,[type=password].form-control[disabled],[type=password].form-control[disabled]::placeholder,[type=tel].form-control[disabled],[type=tel].form-control[disabled]::placeholder,[type=text].form-control[disabled],[type=text].form-control[disabled]::placeholder,input.form-control[disabled],input.form-control[disabled]::placeholder,input[type=email][disabled],input[type=email][disabled]::placeholder,input[type=number][disabled],input[type=number][disabled]::placeholder,input[type=password][disabled],input[type=password][disabled]::placeholder,input[type=text][disabled],input[type=text][disabled]::placeholder,textarea.form-control[disabled],textarea.form-control[disabled]::placeholder,textarea[disabled],textarea[disabled]::placeholder{color:#ddd}[contenteditable].form-control::-ms-clear,[type=email].form-control::-ms-clear,[type=password].form-control::-ms-clear,[type=tel].form-control::-ms-clear,[type=text].form-control::-ms-clear,input.form-control::-ms-clear,input[type=email]::-ms-clear,input[type=number]::-ms-clear,input[type=password]::-ms-clear,input[type=text]::-ms-clear,textarea.form-control::-ms-clear,textarea::-ms-clear{display:none}select,select.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:.5rem 0;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4' viewBox='0 0 8 4'%3e%3cpolygon fill='%23666' points='8 0 4 4 0 0'/%3e%3c/svg%3e%0a\");background-size:8px 4px;background-repeat:no-repeat;background-position:right center;box-shadow:inset 0 -1px 0 #ddd}select.form-control::-ms-expand,select::-ms-expand{display:none}select.form-control.input-sm,select.input-sm{font-size:.710938rem}select.form-control.input-lg,select.input-lg{font-size:1.015625rem}select.form-control:focus,select:focus{box-shadow:inset 0 -2px 0 #2196f3;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4' viewBox='0 0 8 4'%3e%3cpolygon fill='%23212121' points='8 0 4 4 0 0'/%3e%3c/svg%3e%0a\")}select.form-control[multiple],select[multiple]{background:0 0}.custom-control{min-height:1.5rem}.custom-control-label::before{top:0;border:2px solid #ced4da}.custom-control-label::after{top:0}.custom-control-input:checked~.custom-control-label::before{border-color:#2196f3}.custom-checkbox .custom-control-input:checked~.custom-control-label::before{background-image:none}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{-webkit-transform:scale(1.5);transform:scale(1.5)}.custom-radio .custom-control-input~.custom-control-label::after{-webkit-transform:scale(.75);transform:scale(.75)}.custom-radio .custom-control-input:checked~.custom-control-label::before{background-color:#fff;background-image:none;transition:border-color .24s}.custom-radio .custom-control-input:checked~.custom-control-label::after{-webkit-transform:scale(1.125);transform:scale(1.125);transition:background-image .24s,-webkit-transform .24s;transition:background-image .24s,transform .24s;transition:background-image .24s,transform .24s,-webkit-transform .24s}.custom-switch .custom-control-label::before{top:.125rem;height:.875rem;background-color:#bbb;border:none}.custom-switch .custom-control-input:disabled~.custom-control-label{opacity:.7}.custom-switch .custom-control-input:disabled~.custom-control-label::before{background-color:#bbb}.custom-switch .custom-control-label::after{background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.3)}.custom-switch .custom-control-input:checked~.custom-control-label::before{opacity:.38}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#2196f3}.custom-switch .custom-control-input:hover:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(0,0,0,.05)}.custom-switch .custom-control-input:focus:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(0,0,0,.09)}.custom-switch .custom-control-input:active:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(0,0,0,.16)}.custom-switch .custom-control-input:hover:checked:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(33,150,243,.05)}.custom-switch .custom-control-input:focus:checked:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(33,150,243,.09)}.custom-switch .custom-control-input:active:checked:not(:disabled)~.custom-control-label::after{box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 9px rgba(33,150,243,.16)}.custom-switch .custom-control-input:active:not(:checked)~.custom-control-label::before{background-color:#bbb}.has-warning .form-control,.has-warning .form-control:focus,.has-warning [type=text].form-control[readonly],.has-warning input.form-control[readonly],.has-warning input:not([type=checkbox]),.has-warning input:not([type=checkbox]):focus,.has-warning input[type=text][readonly]{border-bottom:none;box-shadow:inset 0 -2px 0 #ff9800}.has-danger .form-control,.has-danger .form-control:focus,.has-danger [type=text].form-control[readonly],.has-danger input.form-control[readonly],.has-danger input:not([type=checkbox]),.has-danger input:not([type=checkbox]):focus,.has-danger input[type=text][readonly]{border-bottom:none;box-shadow:inset 0 -2px 0 #e51c23}.has-success .form-control,.has-success .form-control:focus,.has-success [type=text].form-control[readonly],.has-success input.form-control[readonly],.has-success input:not([type=checkbox]),.has-success input:not([type=checkbox]):focus,.has-success input[type=text][readonly]{border-bottom:none;box-shadow:inset 0 -2px 0 #4caf50}.has-danger .input-group-addon,.has-success .input-group-addon,.has-warning .input-group-addon{color:#666;border-color:transparent;background-color:transparent}.input-group>.input-group-prepend>.input-group-text{padding-right:.25rem}.input-group>.input-group-append>.input-group-text{padding-left:.25rem}.input-group .form-control{padding-left:.25rem;padding-right:.25rem}.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-prepend>.btn{padding:.25rem .5rem}.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem .25rem 0}.input-group-sm>.input-group-append>.input-group-text{padding:.25rem 0 .25rem .5rem}.input-group-sm>.input-group-prepend>.btn{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.input-group-sm>.input-group-append>.btn{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-prepend>.btn{padding:.5rem 1rem}.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem .5rem 0}.input-group-lg>.input-group-append>.input-group-text{padding:.5rem 0 .5rem 1rem}.input-group-lg>.input-group-prepend>.btn{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.input-group-lg>.input-group-append>.btn{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.form-group-lg select,.form-group-lg select.form-control{line-height:1.5}.nav-tabs .nav-item+.nav-item{margin-left:0}.nav-tabs .nav-link,.nav-tabs .nav-link:focus{margin-right:0;background-color:transparent;border:none;color:#444;box-shadow:inset 0 -1px 0 #ddd;transition:color .2s,box-shadow .2s}.nav-tabs .nav-link:focus:hover,.nav-tabs .nav-link:hover{background-color:transparent;box-shadow:inset 0 -2px 0 #2196f3;color:#2196f3}.nav-tabs .nav-link.active,.nav-tabs .nav-link.active:focus{border:none;box-shadow:inset 0 -2px 0 #2196f3;color:#2196f3}.nav-tabs .nav-link.active:focus:hover,.nav-tabs .nav-link.active:hover{border:none;color:#2196f3}.nav-tabs .nav-link.disabled{box-shadow:inset 0 -1px 0 #ddd}.nav-tabs.nav-justified .nav-link,.nav-tabs.nav-justified .nav-link.active,.nav-tabs.nav-justified .nav-link.active:focus,.nav-tabs.nav-justified .nav-link.active:hover,.nav-tabs.nav-justified .nav-link:focus,.nav-tabs.nav-justified .nav-link:hover{border:none}.nav-tabs .dropdown-menu{margin-top:0}.dropdown-menu{margin-top:0;border:none;box-shadow:0 1px 4px rgba(0,0,0,.3)}.alert{padding-right:2.5rem;border:none}.alert,.alert h1,.alert h2,.alert h3,.alert h4,.alert h5,.alert h6{color:#fff}.alert-primary{background:#2196f3 linear-gradient(180deg,#42a6f5,#2196f3) repeat-x}.alert-secondary{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x}.alert-success{background:#4caf50 linear-gradient(180deg,#67bb6a,#4caf50) repeat-x}.alert-info{background:#9c27b0 linear-gradient(180deg,#ab47bc,#9c27b0) repeat-x}.alert-warning{background:#ff9800 linear-gradient(180deg,#ffa726,#ff9800) repeat-x}.alert-danger{background:#e51c23 linear-gradient(180deg,#e93e44,#e51c23) repeat-x}.alert-light{background:#fff linear-gradient(180deg,#fff,#fff) repeat-x}.alert-dark{background:#222 linear-gradient(180deg,#434343,#222) repeat-x}.alert .alert-link,.alert a:not(.btn){color:#fff;font-weight:700}.alert .close{color:#fff}.alert-light,.alert-light .alert-link,.alert-light a:not(.btn),.alert-secondary,.alert-secondary .alert-link,.alert-secondary a:not(.btn){color:#444}.badge-secondary{background-color:#bbb;color:#fff}.badge-light{background-color:#eee}.badge-warning{color:#fff}.tag{padding:4px 6px}.close{line-height:.5;opacity:.6;transition:opacity .2s}.close:hover{opacity:1}.card{box-shadow:0 1px 4px rgba(0,0,0,.4)}.card.border-danger,.card.border-dark,.card.border-info,.card.border-light,.card.border-primary,.card.border-secondary,.card.border-success,.card.border-warning{border-width:1px}.alert-dismissible .close{padding:.5rem .75rem}.list-group-item-action.active h1,.list-group-item-action.active h2,.list-group-item-action.active h3,.list-group-item-action.active h4,.list-group-item-action.active h5,.list-group-item-action.active h6{color:#fff}.modal-content{border-radius:.2rem;box-shadow:0 6px 36px rgba(0,0,0,.3)}.popover{border:none;box-shadow:0 1px 4px rgba(0,0,0,.3)}.carousel-caption h1,.carousel-caption h2,.carousel-caption h3,.carousel-caption h4,.carousel-caption h5,.carousel-caption h6{color:inherit}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL(false ? undefined : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = resolveRewrites;

function resolveRewrites() {}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var C_Users_renzo_Desktop_asd_Desarrollo_Portfolio_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootswatch_dist_materia_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootswatch/dist/materia/bootstrap.min.css */ "./node_modules/bootswatch/dist/materia/bootstrap.min.css");
/* harmony import */ var bootswatch_dist_materia_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_materia_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global.css */ "./global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\renzo\\Desktop\\asd\\Desarrollo\\Portfolio-nextjs\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_renzo_Desktop_asd_Desarrollo_Portfolio_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\Users\renzo\Desktop\asd\Desarrollo\Portfolio-nextjs\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ })

},[[0,"webpack"]]]);