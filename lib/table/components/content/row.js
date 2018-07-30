'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _util = require('../../util');

var _text = require('../common/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    _createClass(Checkbox, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('input', { type: 'checkbox', name: '', id: '' });
        }
    }]);

    return Checkbox;
}(_react.Component);

var Row = function (_Component2) {
    _inherits(Row, _Component2);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('%c    Row Did Mount    ', 'background:#3498db;color:#fff');
        }
    }, {
        key: 'getDefaultChildren',
        value: function getDefaultChildren() {
            return [_react2.default.createElement(
                _column2.default,
                { key: 0.2 },
                _react2.default.createElement(Checkbox, _extends({}, this.props, {
                    key: 'checkbox',
                    order: 0
                }))
            )];
        }
    }, {
        key: 'getExternalsChildren',
        value: function getExternalsChildren() {
            var row = this.props.row;
            // 解析默认数据类型
            // todo 增加 子节点特殊字段类型解析

            return row.map(function (column, index) {
                return _react2.default.createElement(
                    _column2.default,
                    { column: column, order: index, key: 'column-' + index },
                    _react2.default.createElement(_text2.default, column)
                );
            });
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            var children = _react2.default.Children.toArray(this.props.children);
            var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
            var externalsChildren = this.props.disableExternalsControls ? [] : this.getExternalsChildren();
            return (0, _util.mergeAndSortChildren)(defaultChildren, children, externalsChildren, this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.getChildren();
            return _react2.default.createElement(
                'li',
                { className: 'row' },
                _react2.default.createElement(
                    'ul',
                    { className: 'column-container' },
                    children
                )
            );
        }
    }]);

    return Row;
}(_react.Component);

exports.default = Row;