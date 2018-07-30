'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('./table');

var _container = require('./table/container');

var _container2 = _interopRequireDefault(_container);

var _data = require('./data');

var _date = require('./table/components/common/date');

var _date2 = _interopRequireDefault(_date);

var _cardInfo = require('./table/components/common/cardInfo');

var _cardInfo2 = _interopRequireDefault(_cardInfo);

var _text = require('./table/components/common/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log()
var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleRowClick = function () {}, _this.handleRowMouseEnter = function () {}, _this.handleSelectAll = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _table.Table
        // column 是否支持排序
        // 支持相应 type 的字段 否则默认走text 
        ,
        { components: []
          // handleSelectAll
          // handleChecked
          // 翻页
          // 300条
          // 长串  /  滚动条
          // 可排序
          // 搜索高亮 组价内部是否启用高亮
          , disableDefultRow: true,
          disableDefultColumn: true,
          tables: _data.tables
        },
        _react2.default.createElement(_table.Row, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;