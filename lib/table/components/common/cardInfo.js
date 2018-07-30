'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CardInfo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardInfo() {
    return _react2.default.createElement(
        'div',
        { type: 'text', className: 'date' },
        ' ',
        '我是卡片'
    );
}