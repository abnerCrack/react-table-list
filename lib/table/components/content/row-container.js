'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../util');

var _row = require('../../components/content/row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}
var RowContainer = (_temp = _class = function (_Component) {
    _inherits(RowContainer, _Component);

    function RowContainer(props) {
        _classCallCheck(this, RowContainer);

        var _this = _possibleConstructorReturn(this, (RowContainer.__proto__ || Object.getPrototypeOf(RowContainer)).call(this, props));

        _this._ref = _react2.default.createRef();
        return _this;
    }

    _createClass(RowContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('%c    RowContainer Did Mount    ', 'background:#2ecc71;color:#fff');
        }
    }, {
        key: 'getDefaultChildren',
        value: function getDefaultChildren() {
            return [_react2.default.createElement(_row2.default, _extends({}, this.props, {
                key: 'default-row',
                order: 0
            }))];
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            var children = _react2.default.Children.toArray(this.props.children);
            // 是否屏蔽默认 row组件
            var defaultChildren = this.props.disableDefultRow ? [] : this.getDefaultChildren();
            // 扩展类组件 传入方式待定
            var externalsChildren = [];
            return (0, _util.mergeAndSortChildren)(defaultChildren, children, externalsChildren, this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.getChildren();

            return _react2.default.createElement(
                'ul',
                { className: 'row-container',
                    ref: this._ref,
                    onMouseEnter: this.props.handleMouseEnter,
                    onMouseLeave: this.props.handleMouseLeave,
                    onClick: this.props.handleClick },
                children
            );
        }
    }]);

    return RowContainer;
}(_react.Component), _class.defaultProps = {
    handleMouseEnter: noop,
    handleMouseLeave: noop,
    handleClick: noop
}, _temp);
exports.default = RowContainer;