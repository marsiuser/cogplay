"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("reset-css");

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _MainPage = _interopRequireDefault(require("./components/MainPage.vue"));

var _Pricing = _interopRequireDefault(require("./components/Pricing.vue"));

var _Profile = _interopRequireDefault(require("./components/Profile.vue"));

var _RegistrationPage = _interopRequireDefault(require("./components/RegistrationProfile/RegistrationPage.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  component: _MainPage["default"]
}, {
  path: '/pricing',
  component: _Pricing["default"]
}, {
  path: '/profile',
  component: _Profile["default"]
}, {
  path: '/registration',
  component: _RegistrationPage["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: router
}).$mount('#app');