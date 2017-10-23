'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _FormSearch = require('../components/FormSearch');

var _FormSearch2 = _interopRequireDefault(_FormSearch);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\the-one\\Reactproject\\smallworld-master\\layouts\\Footer.js';
// REDUX


var MyFooter = function (_Component) {
  (0, _inherits3.default)(MyFooter, _Component);

  function MyFooter() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyFooter.__proto__ || (0, _getPrototypeOf2.default)(MyFooter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      messages: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyFooter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.props.messages;

      var routes = [{
        path: '/',
        name: messages['Home']
      }, {
        path: '/about',
        name: messages['About']
      }, {
        path: '/news',
        name: messages['News']
      }, {
        path: '/user',
        name: messages['Teacher&Nanny']
      }, {
        path: '/service',
        name: messages['Services&Pricing']
      }, {
        path: '/contact',
        name: messages['Contact']
      }];
      return _react2.default.createElement('div', { id: 'Footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('div', { className: 'connect', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_reactstrap.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', { className: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'GET START'), _react2.default.createElement(_FormSearch2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), _react2.default.createElement('div', { className: 'content', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_reactstrap.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_reactstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'All About'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Small World Service Center'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Maid&Nancy'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Nursery'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Nursery'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Teacher@Home'), _react2.default.createElement(_reactstrap.Button, { color: 'primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'VIEW'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Quick Links'), _lodash2.default.map(routes, function (route) {
        return _react2.default.createElement(_link2.default, { perfect: true, href: route.path, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, route.name));
      }), _react2.default.createElement('a', { style: { cursor: 'pointer', float: 'left', 'margin-right': '10px' }, onClick: function onClick() {
          return _this2.props.changeLanguage('th');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'TH'), _react2.default.createElement('a', { style: { cursor: 'pointer', float: 'left' }, onClick: function onClick() {
          return _this2.props.changeLanguage('en');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'EN'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), _react2.default.createElement(_reactstrap.Col, { xs: '12', md: '4', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Contact Us'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Address: ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), '956/14, The Winning Tower Compound, Pridi Banumyong Soi 40, Sukhumvit 71 Road, 10110 Bangkok, Thailand'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Line: @smallworld.nanny'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('a', { href: 'https://www.facebook.com/SmallWorldServiceCenter/', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'FB: fb.com/smallworld.nanny')), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Tel: 094 994 9554'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }))))));
    }
  }]);

  return MyFooter;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: (0, _redux.bindActionCreators)(_store.changeLanguage, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyFooter);