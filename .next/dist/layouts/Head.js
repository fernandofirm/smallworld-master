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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\the-one\\Reactproject\\smallworld-master\\layouts\\Head.js';


var WebHead = function (_Component) {
  (0, _inherits3.default)(WebHead, _Component);

  function WebHead() {
    (0, _classCallCheck3.default)(this, WebHead);

    return (0, _possibleConstructorReturn3.default)(this, (WebHead.__proto__ || (0, _getPrototypeOf2.default)(WebHead)).apply(this, arguments));
  }

  (0, _createClass3.default)(WebHead, [{
    key: 'render',
    value: function render() {
      var title = 'Small World บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ';
      // if (Router.pathname==='/') title = 'Home Small World บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
      // if (Router.pathname==='/about') title = 'About เกี่ยวกับเราบริการพี่เลี้ยงเด็กสองภาษา'
      // if (Router.pathname==='/contact') title = 'Contact ติดต่อ กรุงเทพปริมณฑล บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
      // if (Router.pathname==='/service') title = 'Service บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
      // if (Router.pathname==='/user') title = 'Teacher&Nanny บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
      // if (Router.pathname==='/news') title = 'News ข่าวสารอัพเดท บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'

      return _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, title), _react2.default.createElement('meta', { name: 'description', content: 'Smallworld \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E40\u0E14\u0E47\u0E01 \u0E04\u0E23\u0E39\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E40\u0E14\u0E47\u0E01 \u0E40\u0E14\u0E47\u0E01\u0E2A\u0E2D\u0E07\u0E20\u0E32\u0E29\u0E32 \u0E2A\u0E2D\u0E19\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 \u0E43\u0E19\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E34\u0E21\u0E19\u0E11\u0E25', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { name: 'keywords', content: '\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07,\u0E40\u0E14\u0E47\u0E01,\u0E1D\u0E32\u0E01\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07,\u0E14\u0E39\u0E41\u0E25\u0E40\u0E14\u0E47\u0E01,\u0E04\u0E23\u0E39,\u0E40\u0E14\u0E47\u0E01\u0E40\u0E25\u0E47\u0E01,\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19,\u0E2A\u0E2D\u0E19\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29,\u0E40\u0E14\u0E47\u0E01\u0E2A\u0E2D\u0E07\u0E20\u0E32\u0E29\u0E32,school,kid,teacher', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'content-language', content: 'th', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('meta', { name: 'revisit-after', content: '7 days', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('meta', { name: 'robots', content: 'index, follow', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Indie+Flower', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('link', { href: '/static/css/bootstrap.min.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('link', { href: '/static/css/animate.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('link', { href: '/static/css/image-gallery.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement('link', { href: '/static/css/styles.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'loading.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js', integrity: 'sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js', integrity: 'sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }));
    }
  }]);

  return WebHead;
}(_react.Component);

exports.default = WebHead;