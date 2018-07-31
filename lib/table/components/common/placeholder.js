'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Placeholder = function (_PureComponent) {
    _inherits(Placeholder, _PureComponent);

    function Placeholder() {
        _classCallCheck(this, Placeholder);

        return _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).apply(this, arguments));
    }

    _createClass(Placeholder, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(this.RealComponent, this.props);
        }
    }, {
        key: 'Components',
        get: function get() {
            var components = this.props.components;

            return _extends({
                Text: _text2.default,
                Checkbox: _checkbox2.default
            }, components);
        }
    }, {
        key: 'RealComponent',
        get: function get() {
            var _props = this.props,
                type = _props.type,
                name = _props.name;

            // console.log(this.props);
            var ComponentKey = (0, _util.firstUpperCase)(type);
            if (this.Components[ComponentKey]) {
                return this.Components[ComponentKey];
            }
            console.warn(ComponentKey + ' \u7EC4\u4EF6\u672A\u5B9A\u4E49,\u8BF7\u4F20\u5165\u5BF9\u5E94\u7EC4\u4EF6,\u7EC4\u4EF6name\u4E3A ' + name);
            return _text2.default;
        }
    }]);

    return Placeholder;
}(_react.PureComponent);

exports.default = Placeholder;