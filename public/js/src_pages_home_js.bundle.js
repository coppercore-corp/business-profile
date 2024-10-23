"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_pages_home_js"],{

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

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _component_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/content */ "./src/component/content.js");
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load */ "./node_modules/react-lazy-load/dist/LazyLoad.js");






var items = [{
  name: "On Service",
  description: "On service",
  image: "url(/static/images/carousel_onservice.png)"
}, {
  name: "2KVA 3 Phase Master Power AVR",
  description: "The power that maters",
  image: "url(/static/images/carousel_2kva3_master_power_avr.png)"
}, {
  name: "Dahua",
  description: "The brand that you can trust.",
  image: "url(/static/images/carousel_dahua_units.png)"
}];
function Item(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      borderRadius: 0,
      backgroundImage: props.item.image,
      minHeight: props.height,
      backgroundColor: "rgba(0, 0, 0, 0)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: 'relative',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, props.item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "CheckButton"
  }, "Check it out!"));
}
var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
var CarouselContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    '& div.car-body': {
      margin: '0'
    },
    '@media (max-width: 768px)': {
      margin: '1em 0'
    }
  };
});
function Home() {
  var container_aboutus_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var about_details_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var about_img_ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var carousel_height = window.innerWidth < 610 ? 420 : 620;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CarouselContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
    interval: 7000,
    sx: {
      marginBottom: 1 + 'em'
    },
    className: "car-body"
  }, items.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
      key: i,
      item: item,
      height: carousel_height
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_aboutus.png"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is a company committed to performing Electrical and Mechanical Services extended to Civil and Architectural works established in year of 2017. A group of highly knowledgeable, experienced and creative engineers and team players in the industry."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " was named after a cable called \u201CFlexible Copper Core\u201D that is used to transmit electricity and signal which we also define as a vessel of power, strength and unity."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " was formed to fill the demand for practical knowledge and hands on experience in Maintenance, installation and trouble shooting and design of control systems."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is a leading corporation specializing in the installation of Closed Circuit Television (CCTV) systems for both residential and commercial customers. With its headquarters located in the heart of the city, the company boasts a team of highly skilled and experienced technicians who are dedicated to providing quality installation services to clients across the region."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Since its inception, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " has earned a reputation for delivering reliable, innovative, and cost-effective security solutions. The company's commitment to excellence and customer satisfaction has made it a trusted name in the industry, with a loyal client base that continues to grow year after year."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), ", the team understands the importance of security in today's world, and they work tirelessly to ensure that their clients have access to the latest technology and products to keep their homes and businesses safe. From surveillance cameras to access control systems and alarm monitoring services, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers a comprehensive range of solutions to meet the unique needs of each client."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "With a focus on professionalism, integrity, and quality, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is committed to providing exceptional customer service and technical expertise. Whether you're a homeowner looking to install a basic CCTV system or a business owner seeking to protect your premises with advanced security solutions, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " has the skills, experience, and resources to deliver the results you need."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_mission_vision.png",
    direction: 'rtl'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Mission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s mission is to provide exceptional security solutions to our clients through the latest technology and products, while maintaining the highest standards of professionalism, integrity, and quality. We strive to exceed our clients' expectations and build long-lasting relationships based on trust and reliability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Vision"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s vision is to be the leading provider of security solutions in the industry, recognized for our innovative products, exceptional customer service, and technical expertise. We aim to expand our reach and services globally, while continuing to maintain our commitment to excellence and integrity. Our ultimate goal is to ensure that our clients feel safe and secure, knowing that they have the best security solutions in place to protect their homes and businesses."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "--line-break"
  }, "Services Offered"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_service2.png",
    enable_background: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "CCTV Security Installation & Planning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is a leading provider of comprehensive CCTV Security Installation & Planning services, offering advanced surveillance solutions to ensure the safety and security of residential, commercial, and industrial properties. With our team of highly skilled technicians and expertise in cutting-edge CCTV technologies, we deliver tailored installations and strategic planning to meet the unique security requirements of our clients."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "CCTV Security Installation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), ", we understand the importance of a reliable and effective surveillance system in deterring crime, monitoring activities, and providing evidence in critical situations. Our CCTV Security Installation services encompass the design, installation, and configuration of state-of-the-art CCTV systems. We conduct a thorough assessment of your premises, considering factors such as layout, lighting conditions, and specific security concerns. Our experienced technicians then install high-quality cameras, strategically positioning them to provide maximum coverage and optimize surveillance capabilities. We ensure seamless integration with other security components, such as access control systems and alarm systems, to create a comprehensive security solution."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "System Configuration and Optimization:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s expertise extends beyond installation. We specialize in the configuration and optimization of CCTV systems to deliver superior performance and functionality. Our technicians carefully set up system parameters, including camera resolutions, frame rates, motion detection, and recording schedules, tailored to your specific needs. We optimize video storage capacity, network bandwidth, and user access rights to ensure efficient and secure operation of the CCTV system. Through meticulous configuration and optimization, we help clients achieve the best possible surveillance outcomes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Remote Monitoring and Mobile Access:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " integrates remote monitoring and mobile access capabilities into our CCTV installations, enabling clients to monitor their premises from anywhere, at any time. We configure the CCTV system to allow remote access via computers, smartphones, or tablets, empowering clients to view live feeds, playback recorded footage, and receive real-time alerts. Our user-friendly interfaces and secure connectivity options ensure convenient and reliable remote monitoring, enhancing situational awareness and facilitating prompt response to security incidents."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Maintenance and Support:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Regular maintenance is essential to ensure the long-term reliability and performance of CCTV systems. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers comprehensive maintenance and support services to keep your CCTV system operating at its optimal level. Our technicians conduct routine inspections, cleaning, and software updates to identify and address potential issues proactively. We provide timely technical support and troubleshooting to resolve any system glitches or malfunctions efficiently, minimizing downtime and ensuring uninterrupted surveillance coverage."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Strategic Planning and Consultation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " takes a proactive approach to security by providing strategic planning and consultation services. Our experts work closely with clients to assess their security needs, evaluate vulnerabilities, and develop customized security strategies. We help identify the most suitable camera types, locations, and surveillance techniques to achieve comprehensive coverage and address specific security concerns. By leveraging our expertise and industry knowledge, we assist clients in implementing effective CCTV security measures aligned with their unique requirements."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s CCTV Security Installation & Planning services provide clients with reliable, cutting-edge surveillance solutions to safeguard their premises. With our expertise, state-of-the-art technologies, and commitment to excellence, we deliver tailored CCTV installations, system optimization, remote monitoring, and ongoing maintenance and support. Trust CopperCore to enhance your security posture and provide you with peace of mind through our comprehensive CCTV security solutions."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_service6.png",
    enable_background: true,
    direction: "rtl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Solar Panel Installation Service & Planning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is a trusted provider of Solar Panel Installation and Planning services, offering sustainable energy solutions that harness the power of solar technology. With our team of experienced professionals and expertise in solar energy systems, we deliver customized installations and strategic planning to meet the unique energy needs of residential, commercial, and industrial clients."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Solar Panel Installation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), ", we understand the significance of renewable energy and its potential to reduce carbon footprints and lower energy costs. Our Solar Panel Installation services encompass the design, installation, and integration of high-quality solar panels and associated equipment. We conduct a thorough assessment of your property, considering factors such as sun exposure, shading, roof structure, and energy consumption patterns. Our skilled technicians then install solar panels strategically to maximize energy production and optimize system efficiency. We ensure seamless integration with existing electrical infrastructure, adhering to industry standards and local regulations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Energy Consumption Analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " conducts detailed energy consumption analysis to determine the most effective solar solution for your specific needs. By evaluating your current energy usage, we identify opportunities for energy optimization and determine the appropriate size and configuration of your solar panel system. Our goal is to design and install a solar solution that maximizes energy generation, reduces reliance on the grid, and provides long-term cost savings."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "System Monitoring and Performance Optimization"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To ensure the optimal performance and reliability of your solar panel system, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " provides system monitoring and performance optimization services. We integrate advanced monitoring technologies into your installation, allowing you to track real-time energy production, monitor system health, and identify potential issues promptly. Our team utilizes remote monitoring tools to analyze system data and optimize performance, ensuring that your solar panels operate at their maximum efficiency."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Net Metering and Energy Storage Integration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers expertise in net metering and energy storage solutions to further enhance the benefits of your solar panel installation. We assist clients in connecting their solar systems to the grid through net metering, enabling them to offset their energy consumption and potentially earn credits for excess energy production. Additionally, we provide guidance on incorporating energy storage solutions, such as batteries, to store surplus energy generated by solar panels for use during low-sunlight periods or power outages."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Maintenance and Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " understands the importance of regular maintenance for the longevity and optimal performance of solar panel systems. We offer comprehensive maintenance and support services to keep your solar installation operating efficiently. Our technicians perform routine inspections, cleanings, and system checks to ensure that your panels are free from debris and operating at their peak capacity. We provide timely support and troubleshooting to address any issues promptly, ensuring minimal downtime and maximum energy production."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Financial Analysis and Incentive Assistance:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "As part of our Solar Panel Installation and Planning services, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " conducts financial analysis to assess the long-term benefits and return on investment of your solar installation. We provide insights into potential energy savings, payback periods, and available government incentives or rebates. Our team assists clients in navigating incentive programs and subsidy applications, ensuring that you take full advantage of financial opportunities associated with solar energy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s Solar Panel Installation and Planning services offer sustainable energy solutions tailored to your specific needs. With our expertise, high-quality products, and commitment to excellence, we help clients harness the power of solar energy, reduce their environmental impact, and achieve long-term energy savings. Trust CopperCore to provide you with a comprehensive solar installation that maximizes energy generation and supports your sustainable energy goals."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_service1.png",
    enable_background: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Electrical Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " takes pride in offering comprehensive electrical works services to meet the diverse needs of our valued clients. With our team of highly skilled and certified electricians, we provide reliable and efficient electrical solutions for residential, commercial, and industrial projects."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Residential Electrical Works:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), ", we understand the importance of a safe and functional electrical system in your home. Whether you're building a new house, renovating, or require electrical repairs, our experts are here to assist you. We handle a wide range of residential electrical services, including wiring installations, lighting fixture setups, electrical panel upgrades, outlet installations, and electrical troubleshooting. Our team ensures that all work is conducted in compliance with safety codes and regulations, prioritizing the safety and satisfaction of our clients."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Commercial Electrical Works:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " recognizes the significance of reliable and efficient electrical systems for commercial establishments. Our experienced electricians are equipped to handle various commercial electrical projects, ranging from office buildings and retail spaces to restaurants and educational institutions. We offer services such as electrical system design and installation, power distribution, lighting solutions, energy-efficient upgrades, and electrical maintenance. Our goal is to provide tailored solutions that align with your specific requirements, ensuring smooth operations and optimal productivity for your business."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Industrial Electrical Works:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "In industrial settings, a robust and dependable electrical infrastructure is vital for seamless operations. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " specializes in industrial electrical works, serving manufacturing plants, warehouses, factories, and more. Our team has the expertise to design, install, and maintain industrial electrical systems, including machinery connections, power distribution systems, motor controls, electrical troubleshooting, and equipment upgrades. We adhere to industry standards and regulations, prioritizing safety, efficiency, and reliability in every project we undertake."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Emergency Electrical Services:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Electrical emergencies can occur unexpectedly, disrupting your daily routine or causing potential hazards. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers prompt and reliable emergency electrical services to address any urgent electrical issues you may encounter. Our skilled electricians are available round the clock to provide quick diagnostics, repairs, and solutions to restore electrical functionality and ensure the safety of your premises."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), ", we are committed to delivering high-quality electrical works services with a focus on safety, reliability, and customer satisfaction. Whether it's residential, commercial, or industrial projects, our dedicated team is ready to handle your electrical needs with professionalism and expertise. Trust ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " to provide you with exceptional electrical solutions that meet the highest industry standards."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_service3.png",
    enable_background: true,
    direction: "rtl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Automation Control & Maintenance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is proud to offer comprehensive Automation Control and Maintenance services, designed to optimize operational efficiency, enhance productivity, and streamline processes for our valued clients. With our team of skilled professionals and expertise in automation technologies, we deliver tailored solutions to meet the unique requirements of various industries."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Automation Control Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " understands the transformative power of automation in today's fast-paced business environment. Our Automation Control services encompass the design, installation, and integration of advanced control systems to automate and monitor various processes. Whether it's industrial machinery, manufacturing lines, or building management systems, our team works closely with clients to develop customized automation solutions that improve efficiency, reduce costs, and enhance overall performance. We specialize in programmable logic controllers (PLCs), human-machine interfaces (HMIs), SCADA systems, and other cutting-edge automation technologies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Maintenance Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " recognizes that regular maintenance is crucial to ensure the longevity and optimal functionality of automation systems. Our Maintenance services are designed to keep your automation infrastructure in top condition, minimizing downtime and maximizing productivity. Our experienced technicians perform routine inspections, preventive maintenance, and troubleshooting to identify and address potential issues before they escalate. We offer proactive maintenance plans tailored to your specific needs, utilizing industry best practices and adhering to manufacturer recommendations to ensure that your automation systems operate reliably and efficiently."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "System Upgrades and Retrofitting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "As technology evolves, keeping pace with the latest advancements is essential for maintaining a competitive edge. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " provides System Upgrades and Retrofitting services to help clients modernize their existing automation systems. Our experts assess your current setup, identify opportunities for improvement, and implement upgrades or retrofitting measures to enhance functionality, performance, and compatibility with the latest automation technologies. By upgrading your systems, you can benefit from increased efficiency, reduced downtime, and improved overall productivity."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Integration Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Seamless integration of automation systems with other components of your infrastructure is key to achieving optimal results. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers Integration services that facilitate the smooth collaboration between automation systems and other critical components such as data management systems, enterprise resource planning (ERP) software, and production management systems. Our experts work closely with your team to ensure effective data exchange, communication protocols, and synchronization, enabling streamlined operations and real-time decision-making."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), ", we are committed to providing exceptional Automation Control and Maintenance services that empower our clients to harness the full potential of automation technologies. Whether you require initial system implementation, ongoing maintenance, or system upgrades, our dedicated team is equipped with the knowledge and expertise to deliver customized solutions that align with your specific needs. Trust CopperCore to optimize your automation infrastructure, enhance productivity, and drive operational excellence."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_service4.png",
    enable_background: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "HVAC & Refrigeration System Control"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is a trusted provider of HVAC (Heating, Ventilation, and Air Conditioning) & Refrigeration System Control services, offering comprehensive solutions to meet the cooling, heating, and refrigeration needs of our diverse client base. With our team of experienced professionals and expertise in HVAC and refrigeration control systems, we deliver reliable, energy-efficient, and cost-effective solutions tailored to your specific requirements."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Design and Installation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " specializes in designing and installing HVAC and refrigeration control systems that optimize comfort, efficiency, and reliability. Our expert engineers work closely with clients to understand their unique needs, assess the space, and develop customized designs that integrate cutting-edge technologies for heating, cooling, ventilation, and refrigeration. We ensure seamless integration with existing systems and adhere to industry standards and regulations throughout the installation process."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Energy Management and Optimization:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Energy efficiency is a crucial aspect of HVAC and refrigeration systems. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers energy management and optimization services to help clients reduce energy consumption, minimize operational costs, and achieve sustainability goals. Our team utilizes advanced control algorithms, smart sensors, and building automation systems to optimize temperature control, ventilation, and refrigeration cycles. By implementing intelligent energy management strategies, we help clients achieve significant energy savings without compromising comfort or performance."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "System Upgrades and Retrofitting:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Keeping up with technological advancements is essential to enhance the performance and efficiency of HVAC and refrigeration systems. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " provides system upgrades and retrofitting services to modernize existing systems and maximize their capabilities. We evaluate your current infrastructure, identify areas for improvement, and implement upgrades or retrofitting measures such as replacing outdated components, integrating smart controls, or implementing energy-efficient technologies. Our goal is to enhance system performance, extend equipment lifespan, and reduce operating costs."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Monitoring and Maintenance:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Proactive monitoring and regular maintenance are critical for ensuring the smooth operation and longevity of HVAC and refrigeration systems. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers comprehensive monitoring and maintenance services to detect and address potential issues before they escalate into major problems. Our technicians perform routine inspections, calibration, and testing to ensure optimal system performance. We also provide scheduled maintenance plans, emergency repairs, and 24/7 support to minimize downtime and keep your systems running at peak efficiency."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Integration and Control Systems:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Integration with building management systems and control platforms is essential for effective HVAC and refrigeration system control. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " specializes in integrating HVAC and refrigeration systems with centralized control platforms, allowing for seamless management, monitoring, and control of various system components. We ensure interoperability, data exchange, and synchronization between different subsystems, enabling real-time monitoring, remote access, and efficient system control."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s HVAC & Refrigeration System Control services are designed to meet the unique needs of commercial, industrial, and residential clients. With our expertise, cutting-edge technologies, and commitment to excellence, we deliver customized solutions that optimize comfort, improve energy efficiency, and ensure the reliable operation of HVAC and refrigeration systems. Trust ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " to provide you with comprehensive control services to enhance the performance and efficiency of your HVAC and refrigeration infrastructure."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_service5.png",
    enable_background: true,
    direction: "rtl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Fire Sprinkler System Controls"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is a trusted provider of Fire Sprinkler System Controls, offering comprehensive solutions to enhance the safety and protection of buildings and occupants. With our team of experienced professionals and expertise in fire protection systems, we deliver reliable, efficient, and code-compliant fire sprinkler system controls tailored to your specific requirements."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Design and Installation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " specializes in the design and installation of fire sprinkler system controls that prioritize early detection, rapid response, and effective suppression of fires. Our team works closely with clients to assess their unique needs, evaluate the building's layout and occupancy, and develop customized designs that comply with local fire codes and regulations. We ensure the seamless integration of control panels, valves, alarms, and other components to create a comprehensive fire sprinkler system that maximizes safety."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Centralized Control and Monitoring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Efficient control and monitoring are crucial for the effective operation of fire sprinkler systems. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " provides centralized control solutions that enable real-time monitoring, remote access, and efficient management of fire sprinkler systems. Our integrated control platforms allow for quick system status checks, alarm notifications, and control of system components. We prioritize ease of use and provide user-friendly interfaces that empower facility managers and authorized personnel to respond swiftly to any fire emergency."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Emergency Response and Alarms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Timely response is critical in fire emergencies. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " integrates state-of-the-art alarm systems into fire sprinkler controls to ensure immediate and effective notification of fire events. We design comprehensive alarm systems that include audible and visual alarms, strobe lights, and emergency communication interfaces. Our goal is to provide clear and accurate alerts that enable occupants to evacuate safely while alerting emergency responders to the exact location of the fire incident."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Testing, Inspection, and Maintenance:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Regular testing, inspection, and maintenance are essential for the reliability and effectiveness of fire sprinkler system controls. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers comprehensive testing and inspection services to verify the functionality and compliance of fire sprinkler controls. Our trained technicians conduct routine inspections, flow tests, valve tests, and other necessary checks to ensure that the system operates at its optimal level. We provide maintenance plans tailored to your specific requirements, adhering to industry standards and regulatory guidelines."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "System Upgrades and Retrofitting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "As technology advances, upgrading and retrofitting fire sprinkler system controls can enhance the overall safety and efficiency of your fire protection infrastructure. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers system upgrade and retrofitting services to modernize existing fire sprinkler systems. We assess your current setup, identify areas for improvement, and implement upgrades such as integrating smart control panels, remote monitoring capabilities, or advanced alarm systems. By enhancing the functionality and performance of your fire sprinkler controls, we help you stay at the forefront of fire safety technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s Fire Sprinkler System Controls provide reliable, efficient, and code-compliant solutions to safeguard buildings and occupants. With our expertise, cutting-edge technologies, and commitment to excellence, we deliver customized control systems that optimize safety and protection. Trust ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " to provide you with comprehensive fire sprinkler system controls tailored to your specific needs, ensuring the utmost safety and peace of mind."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/static/images/content_service8.png",
    enable_background: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Water System & Pupms Controls"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " is a trusted provider of Water System and Pumps Control solutions, offering comprehensive services to optimize the efficiency, reliability, and performance of water systems and pumps. With our team of experienced professionals and expertise in water management technologies, we deliver customized control solutions tailored to meet the unique needs of various industries and applications."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Water System Control:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " understands the importance of efficient water management for residential, commercial, and industrial settings. Our Water System Control services encompass the design, installation, and integration of advanced control systems that enable precise monitoring, regulation, and automation of water distribution and usage. We specialize in water flow control, pressure management, tank level monitoring, and remote access systems. By implementing intelligent control solutions, we help clients optimize water consumption, reduce operational costs, and ensure reliable water supply."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Pumps Control:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Efficient control of pumps is essential for reliable water distribution, pressure regulation, and wastewater management. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers comprehensive Pumps Control solutions designed to maximize pump performance, energy efficiency, and system reliability. Our expertise extends to various pump types, including centrifugal pumps, submersible pumps, booster pumps, and sewage pumps. We utilize advanced control algorithms, variable frequency drives (VFDs), and sensor technologies to optimize pump operation, maintain desired water pressure, and reduce energy consumption."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Remote Monitoring and Automation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " integrates remote monitoring and automation capabilities into water system and pumps control solutions. Our advanced control platforms allow for real-time monitoring, data logging, and remote access to critical system parameters. We enable remote control of pumps, valves, and other components, providing facility managers with convenient access to monitor system performance, respond to alarms, and adjust settings as needed. Remote monitoring and automation enhance operational efficiency, reduce manual intervention, and facilitate proactive maintenance and troubleshooting."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Alarm Systems and Emergency Response:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Prompt detection and response to water system anomalies or emergencies are critical for minimizing damage and ensuring timely mitigation. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " incorporates comprehensive alarm systems and emergency response mechanisms into water system and pumps control solutions. We design alarm systems that provide audible and visual alerts, enabling immediate response to leaks, pump failures, or other system abnormalities. Our integrated control platforms also facilitate automated emergency response protocols, such as shutting down pumps or activating backup systems when necessary.Prompt detection and response to water system anomalies or emergencies are critical for minimizing damage and ensuring timely mitigation. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " incorporates comprehensive alarm systems and emergency response mechanisms into water system and pumps control solutions. We design alarm systems that provide audible and visual alerts, enabling immediate response to leaks, pump failures, or other system abnormalities. Our integrated control platforms also facilitate automated emergency response protocols, such as shutting down pumps or activating backup systems when necessary."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Testing, Inspection, and Maintenance:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Regular testing, inspection, and maintenance are vital for the reliable and efficient operation of water systems and pumps. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), " offers comprehensive testing and inspection services to ensure compliance with industry standards and regulatory requirements. Our technicians perform routine maintenance tasks, including system checks, calibration, and performance optimization. We also provide scheduled maintenance plans to identify and address potential issues proactively, minimizing downtime and optimizing system performance."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COPPERCORE"), "'s Water System and Pumps Control services deliver reliable, efficient, and customized solutions to optimize water management and pump operation. With our expertise, cutting-edge technologies, and commitment to excellence, we help clients achieve optimal water usage, energy efficiency, and system reliability. Trust CopperCore to provide you with comprehensive control solutions tailored to your specific needs, ensuring efficient water distribution, optimal pump performance, and reliable water system operation.CopperCore's Water System and Pumps Control services deliver reliable, efficient, and customized solutions to optimize water management and pump operation. With our expertise, cutting-edge technologies, and commitment to excellence, we help clients achieve optimal water usage, energy efficiency, and system reliability. Trust CopperCore to provide you with comprehensive control solutions tailored to your specific needs, ensuring efficient water distribution, optimal pump performance, and reliable water system operation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section section_clients"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section__item--big"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Our Valued Clients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section__clients"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client21.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Wilcon Depot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Your Winning Solution for all your construction needs."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client9.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Saint Lukes Medical Center"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Delivering Exceptional Healthcare with Compassion and Expertise."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client16.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Emapta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Your Trusted Partner in Outsourcing Solutions and Business Process Optimization."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client10.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Oman Air"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Elevating Travel Experiences with World-class Service and Unmatched Hospitality."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client14.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Garena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Connecting the Dots"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client17.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Ateneo de Manila University"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Inspiring Excellence, Shaping Future Leaders, and Igniting Minds."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client20.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Palmer Fire, Safety & Security Solutions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Protecting Lives, Safeguarding Assets, and Ensuring Peace of Mind."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client12.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "Reedley International School"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Nurturing Global Citizens, Inspiring Lifelong Learners, and Cultivating Excellence."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client15.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "JRP Designs Inc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "Transforming Spaces with Innovative Designs and Timeless Elegance."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/images/client19.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--title"
  }, "BMW"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "__clients__list__bar--subtitle"
  }, "The Ultimate Driving Experience, Combining Luxury, Performance, and Innovation."))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

}]);
//# sourceMappingURL=src_pages_home_js.bundle.js.map