'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Dates;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dates() {
    return _react2.default.createElement(
        'div',
        { style: { backgroundColor: '#f90' }, type: 'text', className: 'date' },
        new Date().getTime()
    );
}