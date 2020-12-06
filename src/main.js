import Vue from 'vue'
import App from './App.vue'
import 'reset-css';
import VueRouter from "vue-router";
import Main from "./components/MainPage.vue"
import Pricing from "./components/Pricing.vue";
import Profile from "./components/Profile.vue";
import RegistrationPage from "./components/RegistrationProfile/RegistrationPage.vue";
import ForgotPassword from "./components/RegistrationProfile/ForgotPassword.vue";
import CreateProfile from "./components/CreateProfilePage/CreateProfile.vue";

Vue.use(VueRouter);

const routes = [
  { path : '/', component : Main},
  { path : '/pricing', component : Pricing},
  { path : '/profile', component : Profile},
  { path : '/registration', component : RegistrationPage},
  { path : '/forgotpassword', component : ForgotPassword},
  { path : '/createprofile', component : CreateProfile},
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
