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
import QuizGameOne from "./components/Quiz/QuizGameOne.vue";
import QuizGameTwo from "./components/Quiz/QuizGameTwo.vue";
import QuizGameThree from "./components/Quiz/QuizGameThree.vue";
import QuizGameFour from "./components/Quiz/QuizGameFour.vue";
import QuizGameFive from "./components/Quiz/QuizGameFive.vue";
import QuizGameSix from "./components/Quiz/QuizGameSix.vue";
import QuizGameSeven from "./components/Quiz/QuizGameSeven.vue";
import QuizGameEight from "./components/Quiz/QuizGameEight.vue";
import QuizGameNine from "./components/Quiz/QuizGameNine.vue";
import QuizGameTen from "./components/Quiz/QuizGameTen.vue";
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
  { path : '/math/addition/quiz/onegame', component : QuizGameOne},
  { path : '/math/addition/quiz/twogame', component : QuizGameTwo},
  { path : '/math/addition/quiz/threegame', component : QuizGameThree},
  { path : '/math/addition/quiz/fourgame', component : QuizGameFour},
  { path : '/math/addition/quiz/fivegame', component : QuizGameFive},
  { path : '/math/addition/quiz/sixgame', component : QuizGameSix},
  { path : '/math/addition/quiz/sevengame', component : QuizGameSeven},
  { path : '/math/addition/quiz/eightgame', component : QuizGameEight},
  { path : '/math/addition/quiz/ninegame', component : QuizGameNine},
  { path : '/math/addition/quiz/tengame', component : QuizGameTen}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
