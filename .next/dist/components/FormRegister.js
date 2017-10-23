'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _firebase = require('../api/firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\the-one\\Reactproject\\smallworld-master\\components\\FormRegister.js';


var FormRegister = function (_Component) {
  (0, _inherits3.default)(FormRegister, _Component);

  function FormRegister() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormRegister);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormRegister.__proto__ || (0, _getPrototypeOf2.default)(FormRegister)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      user: {},
      displayName: '',
      email: '',
      password: '',
      password2: '',
      day: '',
      month: '',
      year: '',
      gender: ''
    }, _this.handleFackbook = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _firebase.loginWithFacebook)(function (error) {
                console.log(error);
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.handleRegister = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var _this$state, password, password2;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, password = _this$state.password, password2 = _this$state.password2;

                if (password === password2) {
                  _this.doRegister();
                } else {
                  console.log('PASSWORD ERROR');
                }

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.doRegister = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var _this$state2, displayName, email, password, password2, day, month, year, gender, birthday, user;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$state2 = _this.state, displayName = _this$state2.displayName, email = _this$state2.email, password = _this$state2.password, password2 = _this$state2.password2, day = _this$state2.day, month = _this$state2.month, year = _this$state2.year, gender = _this$state2.gender;
              birthday = year; /////////////////////

              user = {
                displayName: displayName,
                email: email,
                detail: {
                  gender: gender,
                  birthday: birthday
                }
              };
              _context3.next = 5;
              return (0, _firebase.register)(email, password, user, function (error) {
                console.log(error);
              });

            case 5:
              _index2.default.push({
                pathname: '/about'
              });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormRegister, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'FormRegister', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Join To Small World'), _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleRegister, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'email', placeholder: 'E-mail', state: 'danger', onChange: function onChange(e) {
          return _this3.setState({ email: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Password', onChange: function onChange(e) {
          return _this3.setState({ password: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Confirm Password', onChange: function onChange(e) {
          return _this3.setState({ password2: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Display Name', onChange: function onChange(e) {
          return _this3.setState({ displayName: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), _react2.default.createElement(_reactstrap.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Birthday'), _react2.default.createElement('div', { className: 'row no-gutters', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('div', { className: 'col-md-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '\u0E27\u0E31\u0E19', onChange: function onChange(e) {
          return _this3.setState({ day: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), _react2.default.createElement('div', { className: 'col-md-5', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'select', name: 'select', onChange: function onChange(e) {
          return _this3.setState({ month: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Month'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, '1'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, '2'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, '3'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, '4'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, '5'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, '6'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, '7'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, '8'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, '9'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, '10'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, '11'), _react2.default.createElement('option', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, '12')))), _react2.default.createElement('div', { className: 'col-md-4', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '\u0E1B\u0E35', onChange: function onChange(e) {
          return _this3.setState({ year: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })))), _react2.default.createElement(_reactstrap.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Gender'), _react2.default.createElement(_reactstrap.FormGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('label', { className: 'custom-control custom-radio', onClick: function onClick(e) {
          return _this3.setState({ gender: 'male' });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('input', { id: 'radio1', name: 'radio', type: 'radio', className: 'custom-control-input', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement('span', { className: 'custom-control-indicator', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement('span', { className: 'custom-control-description', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Male')), _react2.default.createElement('label', { className: 'custom-control custom-radio', onClick: function onClick(e) {
          return _this3.setState({ gender: 'female' });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('input', { id: 'radio2', name: 'radio', type: 'radio', className: 'custom-control-input', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), _react2.default.createElement('span', { className: 'custom-control-indicator', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement('span', { className: 'custom-control-description', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Female'))), _react2.default.createElement(_reactstrap.Button, { color: 'primary', size: 'lg', block: true, onSubmit: this.handleRegister, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, 'Sign Up')));
    }
  }]);

  return FormRegister;
}(_react.Component);

exports.default = FormRegister;