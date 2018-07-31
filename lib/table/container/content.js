'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rowContainerList = require('../components/content/row-container-list');

var _rowContainerList2 = _interopRequireDefault(_rowContainerList);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Table 组件 Content层
var Content = (_temp = _class = function (_PureComponent) {
  _inherits(Content, _PureComponent);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        _this$props$current = _this$props.current,
        current = _this$props$current === undefined ? 1 : _this$props$current,
        _this$props$capacity = _this$props.capacity,
        capacity = _this$props$capacity === undefined ? 15 : _this$props$capacity,
        _this$props$totalCurr = _this$props.totalCurrent,
        totalCurrent = _this$props$totalCurr === undefined ? 0 : _this$props$totalCurr;

    _this.state = {
      current: current,
      capacity: capacity,
      totalCurrent: totalCurrent
    };
    return _this;
  }

  _createClass(Content, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
    // console.log('%c    Table Did Mount    ','background:#e74c3c;color:#fff');

    // 分页数据

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          total = _props.total,
          totalCurrent = _props.totalCurrent;
      var capacity = this.state.capacity;

      return _react2.default.createElement(
        'div',
        { className: 'react-flex-table' },
        _react2.default.createElement(_rowContainerList2.default, _extends({ list: this.reallListData }, this.props)),
        _react2.default.createElement(_footer2.default, _extends({
          handlePagingChange: this.handlePagingChange,
          handleCapacityChange: this.handleCapacityChange
        }, { total: total, capacity: capacity, totalCurrent: totalCurrent }))
      );
    }
  }, {
    key: 'reallListData',
    get: function get() {
      var tables = this.props.tables;
      var _state = this.state,
          current = _state.current,
          capacity = _state.capacity;

      var reallList = [].concat(_toConsumableArray(tables));
      var start = (current - 1) * capacity;
      var end = start + capacity;
      return reallList.slice(start, end);
    }
    // 容量

    // 切页面

  }]);

  return Content;
}(_react.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleCapacityChange = function (current, capacity) {
    _this2.setState({
      current: current,
      capacity: capacity
    });
  };

  this.handlePagingChange = function (current, capacity) {
    _this2.setState({
      current: current,
      capacity: capacity
    });
  };
}, _temp);
exports.Content = Content;
exports.default = Content;

// {/* <div className='tips'>
// <div className="tips-content">发消息</div>
// <div className="tips-arrow"></div>
// </div> */}


// getDefaultChildren(props, fullProps) {
//   return [
//     <Video
//       ref={(c) => {
//         this.video = c;
//         this.manager.video = this.video;
//       }}
//       key="video"
//       order={0.0}
//       {...fullProps}
//     />,
//   ];
// }

// getChildren(props) {
//   const propsWithoutChildren = {
//     ...props,
//     children: null,
//   };
//   const children = React.Children.toArray(this.props.children)
//     .filter(e => (!isVideoChild(e)));
//   const defaultChildren = this.getDefaultChildren(propsWithoutChildren, props);
//   return mergeAndSortChildren(defaultChildren, children, propsWithoutChildren);
// }