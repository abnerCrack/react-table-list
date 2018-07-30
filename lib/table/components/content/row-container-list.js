'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowContainerList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rowContainer = require('./row-container');

var _rowContainer2 = _interopRequireDefault(_rowContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Table 组件 Content层
var RowContainerList = function (_Component) {
  _inherits(RowContainerList, _Component);

  function RowContainerList() {
    _classCallCheck(this, RowContainerList);

    return _possibleConstructorReturn(this, (RowContainerList.__proto__ || Object.getPrototypeOf(RowContainerList)).apply(this, arguments));
  }

  _createClass(RowContainerList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('%c    RowContainerList Did Mount    ', 'background:#f39c12;color:#fff');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tables = this.props.tables;

      return _react2.default.createElement(
        'div',
        { className: 'row-container-list' },
        tables.map(function (row, index) {
          return _react2.default.createElement(_rowContainer2.default, _extends({}, _this2.props, { row: row, key: 'row-' + index }));
        })
      );
    }
  }]);

  return RowContainerList;
}(_react.Component);

exports.RowContainerList = RowContainerList;
exports.default = RowContainerList;

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