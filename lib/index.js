'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('./table');

var _container = require('./table/container');

var _container2 = _interopRequireDefault(_container);

var _data = require('./data');

var _rowContainer = require('./table/components/content/row-container');

var _rowContainer2 = _interopRequireDefault(_rowContainer);

var _date = require('./table/components/common/date');

var _date2 = _interopRequireDefault(_date);

var _cardInfo = require('./table/components/common/cardInfo');

var _cardInfo2 = _interopRequireDefault(_cardInfo);

var _text = require('./table/components/common/text.1');

var _text2 = _interopRequireDefault(_text);

require('./index.scss');

var _checkbox = require('./table/components/common/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log()
var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleRowClick = function () {
      alert(222);
    }, _this.handleRowMouseEnter = function () {}, _this.handleSelectAll = function () {}, _this.handleSelectSingle = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_table.Table
      /*
        1.数据源中有组件未传入 控制台会提示并且自动转换为Text组件
        2.增加type  源数据修改type 类型 组件需要传入对应名称组件类
        3.扩展组件可以拿到一切props传递进去的数据/方法
      */

      //  == 头部扩展组件 ==  (传入组件类,名称对应源数据type)
      // headerComponents= {{Text,Checkbox}} 

      // == 行扩展组件 == (传入组件类,名称对应源数据type)
      // rowComponents= {{Text,Checkbox}} 

      // == 列扩展组件 == (传入组件类,名称对应源数据type)
      // columnComponents= {{Text,Checkbox}} 

      // == 自定义事件 (自己定义自己组件内部接收))==
      // handleTextClick = {this.handleRowClick}


      // Todo
      // 表格总数
      , _extends({ total: _data.table.tables.length
        // capacity 一页容量
        // viewport  true false 是否在可视区范围   长串  /  滚动条

        // column 是否支持排序
        // 增加 ref 回传  获取 index
        // 翻页
        // 300条


        // 搜索高亮 组价内部是否启用高亮

        // 内部排序方式 (index,condition)
        // 内部高亮函数 (keyword,color)

        // disableDefultRow = {true}
        // disableDefultColumn = {true}
        // react-deom renderComponent
        // 渲染回调
      }, _data.table));
    }
  }]);

  return App;
}(_react.PureComponent);

exports.default = App;