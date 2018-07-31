'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableProperties = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.formatTime = formatTime;
exports.isTableChild = isTableChild;
exports.mergeAndSortChildren = mergeAndSortChildren;
exports.firstUpperCase = firstUpperCase;
exports.deprecatedWarning = deprecatedWarning;
exports.throttle = throttle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */

//  copy from github
function formatTime() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;

  var s = Math.floor(seconds % 60);
  var m = Math.floor(seconds / 60 % 60);
  var h = Math.floor(seconds / 3600);
  var gm = Math.floor(guide / 60 % 60);
  var gh = Math.floor(guide / 3600);

  // handle invalid times
  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-';
  }

  // Check if we need to show hours
  h = h > 0 || gh > 0 ? h + ':' : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

  // Check if leading zero is need for seconds
  s = s < 10 ? '0' + s : s;

  return h + m + s;
}

// Check if the element belongs to a table element
// only accept <source />, <track />,
// <MyComponent isTableChild />
// elements

function isTableChild(c) {
  if (c.props && c.props.isTableChild) {
    return true;
  }
  return c.type === 'source' || c.type === 'track';
}

var find = function find(elements, func) {
  return elements.filter(func)[0];
};

// check if two components are the same type
var isTypeEqual = function isTypeEqual(component1, component2) {
  // console.log(component1,component2)
  var type1 = component1.type;
  var type2 = component2.type;
  if (typeof type1 === 'string' || typeof type2 === 'string') {
    return type1 === type2;
  }

  if (typeof type1 === 'function' && typeof type2 === 'function') {
    return type1.displayName === type2.displayName;
  }

  return false;
};

function mergeAndSortChildren(defaultChildren, _children) {
  var _externalsChildren = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _parentProps = arguments[3];
  var defaultOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var children = _react2.default.Children.toArray(_children);
  var externalsChildren = _react2.default.Children.toArray(_externalsChildren);
  var parentProps = _extends({}, _parentProps);
  return children.filter(function (element) {
    return !element.props.disabled;
  }) // filter the disabled components
  // 过滤规则 暂时不加 看场景变更
  .concat(defaultChildren
  // .filter(         // concat default children
  // (c) => !find(children, (component) => isTypeEqual(component, c))
  // )
  ).concat(externalsChildren
  // .filter(       // concat externals children
  //   (c) => !find(children, (component) => isTypeEqual(component, c))
  // )
  ).map(function (element) {
    var defaultComponent = find(defaultChildren, function (c) {
      return isTypeEqual(c, element);
    });
    delete parentProps.order;
    var defaultProps = defaultComponent ? defaultComponent.props : {};
    var props = _extends({}, parentProps, defaultProps, element.props);

    var e = _react2.default.cloneElement(element, props, element.props.children);
    return e;
  }).sort(function (a, b) {
    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
  });
}

/**
 * Temporary utility for generating the warnings
 */

function firstUpperCase(str) {
  return str.replace(/^\S/, function (s) {
    return s.toUpperCase();
  });
}
function deprecatedWarning(oldMethodCall, newMethodCall) {
  // eslint-disable-next-line no-console
  console.warn('WARNING: ' + oldMethodCall + ' will be deprecated soon! Please use ' + newMethodCall + ' instead.');
}

function throttle(callback, limit) {
  var _arguments = arguments;

  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, _arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

var tableProperties = exports.tableProperties = ['error', 'crossOrigin', 'networkState', 'width', 'height', 'tableWidth', 'tableHeight'];