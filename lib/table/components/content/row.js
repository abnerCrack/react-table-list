'use strict';

_coreJs.Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = undefined;

var _extends = _coreJs.Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (_coreJs.Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _coreJs.Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

var _util = require('../../util');

var _text = require('../common/text');

var _text2 = _interopRequireDefault(_text);

var _checkbox = require('../common/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _placeholder = require('../common/placeholder');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _coreJs = require('core-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = _coreJs.Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _coreJs.Object.setPrototypeOf ? _coreJs.Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_PureComponent) {
    _inherits(Row, _PureComponent);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, (Row.__proto__ || _coreJs.Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('%c    Row Did Mount    ', 'background:#3498db;color:#fff');
        }
    }, {
        key: 'getDefaultChildren',
        value: function getDefaultChildren() {
            // const {components} = this.props
            return [
                // ...components
                //     <Checkbox
                //             {...this.props}
                //             key="checkbox"
                //             order={0}
                //         />
            ];
        }
        // componentsHashMapping(_components) {
        //     // Text,
        //     const components = Object.create(null);
        //     _components.map(component => {
        //         const Type = firstUpperCase(component.props.type)
        //         if(!Type) {
        //             console.warn(`${component.type.name} 扩展组件type未定义,默认渲染为Text `)
        //             return 
        //         }
        //         components[Type] = component
        //     })
        //     return components
        // }

    }, {
        key: 'getExternalsChildren',
        value: function getExternalsChildren() {
            var _this2 = this;

            var _props = this.props,
                row = _props.row,
                components = _props.components;
            // const newComponents = this.componentsHashMapping(components)
            // 解析默认数据类型
            // todo 增加 子节点特殊字段类型解析

            return row.map(function (column, index) {
                return _react2.default.createElement(
                    _column2.default,
                    { prefix: column.type, column: column, order: index, key: 'column-' + index },
                    _react2.default.createElement(_placeholder2.default, _extends({}, _this2.props, { components: components, name: column.key, order: index }, column))
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
}(_react.PureComponent);

exports.default = Row;