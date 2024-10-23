"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_pages_contacts_js"],{

/***/ "./node_modules/@mui/material/styles/ThemeProvider.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/styles/ThemeProvider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _identifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identifier */ "./node_modules/@mui/material/styles/identifier.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["theme"];





function ThemeProvider(_ref) {
  let {
      theme: themeInput
    } = _ref,
    props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  const scopedTheme = themeInput[_identifier__WEBPACK_IMPORTED_MODULE_4__["default"]];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_system__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    themeId: scopedTheme ? _identifier__WEBPACK_IMPORTED_MODULE_4__["default"] : undefined,
    theme: scopedTheme || themeInput
  }));
}
 true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)]).isRequired
} : 0;

/***/ }),

/***/ "./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/exactProp.js");
/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTheme/ThemeContext */ "./node_modules/@mui/private-theming/useTheme/ThemeContext.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@mui/private-theming/useTheme/useTheme.js");
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nested */ "./node_modules/@mui/private-theming/ThemeProvider/nested.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








// To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(['MUI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }
    return mergedTheme;
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerTheme, localTheme);
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_3__["default"])();
  if (true) {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const theme = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[_nested__WEBPACK_IMPORTED_MODULE_4__["default"]] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: theme,
    children: children
  });
}
 true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)]).isRequired
} : 0;
if (true) {
   true ? ThemeProvider.propTypes = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(ThemeProvider.propTypes) : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ }),

/***/ "./node_modules/@mui/private-theming/ThemeProvider/nested.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/private-theming/ThemeProvider/nested.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');

/***/ }),

/***/ "./node_modules/@mui/private-theming/useTheme/ThemeContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/private-theming/useTheme/ThemeContext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  ThemeContext.displayName = 'ThemeContext';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);

/***/ }),

/***/ "./node_modules/@mui/private-theming/useTheme/useTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/private-theming/useTheme/useTheme.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ "./node_modules/@mui/private-theming/useTheme/ThemeContext.js");


function useTheme() {
  const theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(theme);
  }
  return theme;
}

/***/ }),

/***/ "./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_private_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/private-theming */ "./node_modules/@mui/private-theming/useTheme/useTheme.js");
/* harmony import */ var _mui_private_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/private-theming */ "./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/exactProp.js");
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styled-engine */ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var _useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useThemeWithoutDefault */ "./node_modules/@mui/system/esm/useThemeWithoutDefault.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === 'function') {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      // must return a function for the private theme to NOT merge with the upper theme.
      // see the test case "use provided theme from a callback" in ThemeProvider.test.js
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, upperTheme, {
      [themeId]: localTheme
    }) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 *
 * <ThemeProvider theme={theme}> // existing use case
 * <ThemeProvider theme={{ id: theme }}> // theme scoping
 */
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = (0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_3__["default"])(EMPTY_THEME);
  const upperPrivateTheme = (0,_mui_private_theming__WEBPACK_IMPORTED_MODULE_4__["default"])() || EMPTY_THEME;
  if (true) {
    if (upperTheme === null && typeof localTheme === 'function' || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_private_theming__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: privateTheme,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_styled_engine__WEBPACK_IMPORTED_MODULE_6__.T.Provider, {
      value: engineTheme,
      children: children
    })
  });
}
 true ? ThemeProvider.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Your component tree.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
} : 0;
if (true) {
   true ? ThemeProvider.propTypes = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_8__["default"])(ThemeProvider.propTypes) : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ }),

/***/ "./src/component/content.js":
/*!**********************************!*\
  !*** ./src/component/content.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/red.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
var Container = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])('div')(function (_ref) {
  var theme = _ref.theme,
    has_image = _ref.has_image,
    _ref$horizontal_direc = _ref.horizontal_direction,
    horizontal_direction = _ref$horizontal_direc === void 0 ? 'ltr' : _ref$horizontal_direc,
    _ref$enable_backgroun = _ref.enable_background,
    enable_background = _ref$enable_backgroun === void 0 ? false : _ref$enable_backgroun,
    _ref$src_url = _ref.src_url,
    src_url = _ref$src_url === void 0 ? src_url : _ref$src_url;
  return {
    display: 'grid',
    gridTemplateColumns: has_image ? '40% 60%' : 'unset',
    gap: '10px',
    direction: horizontal_direction,
    position: "relative",
    overflow: "hidden",
    '@media (max-width: 768px)': {
      gridTemplateColumns: '100%' // Adjust the column layout for smaller screens
    }
  };
});

var ItemImage = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])('div')(function (_ref2) {
  var theme = _ref2.theme,
    img_width = _ref2.img_width,
    _ref2$horizontal_dire = _ref2.horizontal_direction,
    horizontal_direction = _ref2$horizontal_dire === void 0 ? 'ltr' : _ref2$horizontal_dire,
    _ref2$src_url = _ref2.src_url,
    src_url = _ref2$src_url === void 0 ? src_url : _ref2$src_url;
  return {
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    marginTop: '4rem',
    position: 'relative',
    scrollSnapType: 'y mandatory',
    overflow: 'none',
    '& div': {
      position: 'relative',
      width: '100%',
      height: '400px',
      left: horizontal_direction == 'ltr' ? '-100%' : img_width * 2,
      transition: "left 0.5s cubic-bezier(.05,1.3,1,.68)",
      backgroundImage: "url(".concat(src_url, ")"),
      backgroundSize: 'cover',
      backgroundPosition: horizontal_direction == 'ltr' ? 'center right' : 'center left'
    },
    '@media (max-width: 768px)': {
      '& div': {
        height: '100%',
        minHeight: '250px'
      }
    }
  };
});
var ItemDetails = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])('div')(function (_ref3) {
  var theme = _ref3.theme,
    has_image = _ref3.has_image,
    _ref3$horizontal_dire = _ref3.horizontal_direction,
    horizontal_direction = _ref3$horizontal_dire === void 0 ? 'ltr' : _ref3$horizontal_dire;
  return {
    padding: '10px',
    margin: has_image ? 'unset' : '0 auto',
    '& div#first': {
      padding: '2em',
      maxWidth: 800,
      textAlign: horizontal_direction == 'ltr' ? 'left' : 'right',
      position: "relative",
      '& p': {
        marginBottom: '2em',
        '& b': {
          fontWidth: 'bold',
          color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__["default"][900]
        }
      }
    },
    '@media (max-width: 768px)': {
      '& div#first': {
        textAlign: 'left',
        padding: '0 1em'
      }
    }
  };
});
var BackgroundWall = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])('div')(function (_ref4) {
  var _ref5;
  var theme = _ref4.theme,
    src_url = _ref4.src_url;
  return _ref5 = {
    position: 'sticky'
  }, _defineProperty(_ref5, "position", 'fixed'), _defineProperty(_ref5, "width", '100vw'), _defineProperty(_ref5, "height", '100vh'), _defineProperty(_ref5, "zIndex", '-1'), _defineProperty(_ref5, "top", 0), _defineProperty(_ref5, "left", 0), _defineProperty(_ref5, "backgroundImage", "url(".concat(src_url, ")")), _defineProperty(_ref5, "backgroundSize", "cover"), _defineProperty(_ref5, "opacity", 0), _defineProperty(_ref5, "transition", 'transform 0.2s ease-in'), _defineProperty(_ref5, "transform", 'translateY(100%)'), _defineProperty(_ref5, "backgroundPosition", 'center center'), _ref5;
});
var Content = function Content(props) {
  var image_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var background_wall_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var content_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var details_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    imageWidth = _useState2[0],
    setImageWidth = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var image = image_ref.current;
    var background_wall = background_wall_ref.current;
    var content = content_ref.current;
    var details = details_ref.current;
    var hor_direction = props.direction || 'ltr';
    var exit_multiplier = 0.55;
    var entry_multiplier = 0.9;
    var screen_height = window.innerHeight;
    var handleScroll = function handleScroll() {
      if (image && details && content) {
        var image_bcr = image.getBoundingClientRect();
        var details_bcr = details.getBoundingClientRect();
        var content_bcr = content.getBoundingClientRect();
        if (image_bcr.top <= screen_height * entry_multiplier) {
          image.style.left = 0;
        } else if (image_bcr.top > details_bcr.height * entry_multiplier) {
          image.style.left = hor_direction === 'ltr' ? "-".concat(image_bcr.width, "px") : image_bcr.width * 2 + "px";
        }
        if (props.enable_background && background_wall) {
          if (content_bcr.top <= screen_height * entry_multiplier) {
            background_wall.style.opacity = 0.2;
            background_wall.style.transform = 'translateY(0)';
            background_wall.style.transition = 'transform 0.4s ease-in';
          } else {
            background_wall.style.transform = 'translateY(100%)';
            background_wall.style.transition = 'transform 0.4s ease-out';
          }
          if (details_bcr.top + details_bcr.height - screen_height <= 0) {
            background_wall.style.transform = 'translateY(-100%)';
            background_wall.style.transition = 'transform 0.4s ease-out';
          }
        }
        setImageWidth(image_bcr.width);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
    ref: content_ref,
    has_image: props.image ? true : false,
    horizontal_direction: props.direction,
    enable_background: props.enable_background,
    src_url: props.image
  }, props.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemImage, {
    horizontal_direction: props.direction,
    img_width: imageWidth,
    src_url: props.image
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: image_ref
  })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemDetails, {
    ref: details_ref,
    has_image: props.image ? true : false,
    horizontal_direction: props.direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "first"
  }, props.children)), props.enable_background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundWall, {
    ref: background_wall_ref,
    src_url: props.image
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/pages/contacts.js":
/*!*******************************!*\
  !*** ./src/pages/contacts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/content */ "./src/component/content.js");


function Contacts() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you have a question about us, need more information, or want to make a suggestion, please use any of the following options to contact us:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Level 10-1 Fort Legend Tower 3rd Ave. Corner 31st street"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Bonifacio Global Taguig City, Philippines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Taguig Landline: (632)529-0698"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Cell: (0995)094-1740 or (0910)361-1750"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Email: coppercore10@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Email: coppercore.sales@gmail.com")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacts);

/***/ })

}]);
//# sourceMappingURL=src_pages_contacts_js.bundle.js.map