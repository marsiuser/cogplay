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
import BrainWarriorPage from "./components/BrainWarriorPage/BrainWarriorPage.vue";
import FingerPage from "./components/FingerGame/FingerPage.vue";
import QuizPage from "./components/Quiz/QuizPage.vue";
import QuizGameZero from "./components/Quiz/QuizGameZero.vue";
import BrainPage from "./components/BrainWarriorPage/BrainPage.vue"

Vue.use(VueRouter);

const routes = [
  { path : '/', component : Main},
  { path : '/pricing', component : Pricing},
  { path : '/profile', component : Profile},
  { path : '/registration', component : RegistrationPage},
  { path : '/forgotpassword', component : ForgotPassword},
  { path : '/createprofile', component : CreateProfile},
  { path : '/math/addition/brainwarriorgame', component : BrainWarriorPage},
  { path : '/math/addition/brainwarriorgame2', component : BrainPage},
  { path : '/fingerskip', component : FingerPage},
  { path : '/math/addition/quiz', component : QuizPage},
  { path : '/math/addition/quiz/zerogame', component : QuizGameZero},
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
