<template>
    <div class="registration">
        <div class="registration-bg">
            <router-link :to="'/'"><img class="registration-bg__logo" src="../../assets/registration/logo_black.svg" alt="logo"></router-link>
        </div>
    
        <div class="registration-section">
            <!--                       TAB FORGOT PASSWORD 1                      -->
            <div class="registration-form form-forgotPasw" v-show="visibleForgotPassword">
               <div class="registration-form__wrapper">
                    <h3>Forgot your password?</h3>
                <div>
                    <form action="#" name="Forgot password" id="forgPas-form">
                        <div class="registration-form__enter">
                            <label for="forgPas-email">Email</label>
                            <span class="registration-form__note">You will get an email with recovery link</span>
                            <input v-model="emailForgot" type="text" id="forgPas-email" placeholder="Enter your email">
                            <span class="validation-error">{{errorEmail}}</span>
                            <a href="#" class="registration-form__again">Didn’t get the email? Send again</a>
                        </div>
                        <button class="registration-create" @click="newPaswword">Send</button>
                    </form>
                </div>
               </div>
            </div>
            <!--                     END  TAB FORGOT PASSWORD 1                      -->

            <!--                        TAB NEW PASSWORD                         -->

            <div class="registration-form form-newPassword" v-show="visibleNewPassword">
               <div class="registration-form__wrapper">
                    <h3><img @click="prevPage" src="../../assets/registration/previous.svg" alt="prev"> <span>Forgot your password?</span></h3>
                <div>
                    <form action="#" name="New password" id="newPassword-form">
                         <div class="registration-form__enter">
                                    <label for="newPassword-password">New password</label>
                                     <div class="enter-wrapper">
                                        <input v-model="newPas" type="text" id="formNewPassw" placeholder="Enter your password">
                                         <div class="hide-password">
                                            <img v-show="hidePassword4" @click="hidePassw4" src="../../assets/registration/eye-close.svg" alt="hide password">
                                            <img v-show="showPassword4" @click="showPassw4" src="../../assets/registration/eye.svg" alt="show password">
                                        </div>
                                     </div>
                                     <span class="validation-error">{{errorNewPassword}}</span>
                              </div>
                              <div class="registration-form__enter">
                                    <label for="newPassword-password">Confirm Password</label>
                                     <div class="enter-wrapper">
                                        <input v-model="confNewPas" type="password" id="newPassword-password" placeholder="Confirm password">
                                         <div class="hide-password">
                                            <img v-show="hidePassword3" @click="hidePassw3" src="../../assets/registration/eye-close.svg" alt="hide password">
                                            <img v-show="showPassword3" @click="showPassw3" src="../../assets/registration/eye.svg" alt="show password">
                                        </div>
                                     </div>
                                     <span class="validation-error">{{errorConfigmNewPassword}}</span>
                              </div>
                             <button class="registration-create" @click="lastStep">Change password</button>
                    </form>
                </div>
               </div>
            </div>
              <!--                      END TAB NEW PASSWORD                         -->

            <!--                        TAB SUCCESSES                       -->

            <div class="registration-form form-successes" v-show="visibleSuccesses">
               <div class="registration-form__wrapper">
                    <h3>Successful password reset!</h3>
                <div>
                    <form action="#" name="New password" id="newPassword-form">
                        <div class="registration-form__enter">
                            <p class="form-successes__last">You can now use your new password to login to your account</p>
                        </div>
                        <button class="registration-create" @click="openRigistration">Log in</button>
                    </form>
                </div>
               </div>
            </div>
              <!--                                  END  TAB SUCCESSES                                     -->

              <!--                       TAB SIGN UP/ LOG IN                         -->
            <div class="registration-form" v-show="visibleSignUp" >
               <div class="registration-form__wrapper">
                    <h3>Welcome to Cogplay!</h3>
                <div>
                    <tabs>
                        <tab name="Sign Up">
                            <form action="#" name="Sign up" id="signUp-form" @submit="checkForm">
                              <div class="registration-form__enter">
                                    <label for="full-name">Full Name</label>
                                    <div class="enter-wrapper">
                                        <input v-model="fullName" maxlength="50" type="text" id="full-name" placeholder="Enter your full name">
                                        <p class="count-text">0/50</p>
                                    </div>
                                    <span class="validation-error">{{errorName}}</span>
                              </div>
                                <div class="registration-form__enter">
                                    <label for="signUp-email">Email</label>
                                    <input v-model="signUpEmail" type="text" id="signUp-email" placeholder="Enter your email">
                                    <span class="validation-error">{{errorEmail}}</span>
                              </div>
                                <div class="registration-form__enter">
                                    <label for="signUp-password">Password</label>
                                     <div class="enter-wrapper">
                                        <input v-model="signUpPassword" type="password" id="signUp-password" placeholder="Enter your password">
                                        <div class="hide-password">
                                            <img v-show="hidePassword" @click="hidePassw" src="../../assets/registration/eye-close.svg" alt="hide password">
                                            <img v-show="showPassword" @click="showPassw" src="../../assets/registration/eye.svg" alt="show password">
                                        </div>
                                     </div>
                                     <span class="validation-error">{{errorPassword}}</span>
                              </div>
                              <div class="registration-form__enter">
                                    <label for="signUp-passwordConfirm">Confirm Password</label>
                                     <div class="enter-wrapper">
                                        <input v-model="signUpConfPassword" type="password" id="signUp-passwordConfirm" placeholder="Confirm password">
                                        <div class="hide-password">
                                            <img v-show="hidePassword1" @click="hidePassw1" src="../../assets/registration/eye-close.svg" alt="hide password">
                                            <img v-show="showPassword1" @click="showPassw1" src="../../assets/registration/eye.svg" alt="show password">
                                        </div>
                                     </div>
                                    <span class="validation-error">{{errorConfPassword}}</span>
                              </div>
                              <input type="submit" class="registration-create" value="Create account">
                            </form>
                            <div class="registration-bottom">
                                <p>or</p>
                                <div class="registration-social">
                                    <a href="#">
                                        <img src="../../assets/registration/google.svg" alt="google">
                                        <span>Google</span>
                                    </a>
                                    <a href="#">
                                        <img src="../../assets/registration/facebook.svg" alt="facebook">
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#">
                                        <img src="../../assets/registration/twitter.svg" alt="twitter">
                                        <span>Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </tab>
                        <tab name="Log in">
                           <form action="#" name="Log in" id="logIn-form" @submit="checkLogInForm">
                                <div class="registration-form__enter">
                                    <label for="logIn-email">Email</label>
                                    <input v-model="signEmail" type="text" id="logIn-email" placeholder="Enter your email">
                                    <span class="validation-error">{{errorEmail}}</span>
                              </div>
                                <div class="registration-form__enter">
                                    <label for="logIn-password">Password</label>
                                     <div class="enter-wrapper">
                                        <input v-model="signPas" type="password" id="logIn-password" placeholder="Enter your password">
                                        <div class="hide-password">
                                            <img v-show="hidePassword2" @click="hidePassw2" src="../../assets/registration/eye-close.svg" alt="hide password">
                                            <img v-show="showPassword2" @click="showPassw2" src="../../assets/registration/eye.svg" alt="show password">
                                        </div>
                                     </div>
                                     <span class="validation-error">{{errorName}}</span>
                                     <a @click="openChangePassword" href="#" class="registration-forgotpas">Forgot your password? </a>
                              </div>
                              <button class="registration-create">Log in</button>
                            </form>
                            <div class="registration-bottom">
                                <p>or</p>
                                <div class="registration-social">
                                    <a href="#">
                                        <img src="../../assets/registration/google.svg" alt="google">
                                        <span>Google</span>
                                    </a>
                                    <a href="#">
                                        <img src="../../assets/registration/facebook.svg" alt="facebook">
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#">
                                        <img src="../../assets/registration/twitter.svg" alt="twitter">
                                        <span>Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </tab>
                    </tabs>
                </div>
               </div>
            </div>
             <!--                      END TAB SIGN UP/ LOG IN                         -->
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Tabs from 'vue-tabs-component';
import {Tab} from 'vue-tabs-component';


Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.use(Tabs);
export default {
  name: 'RegistrationPage',
  data: function () {
    return {
         visibleSignUp: true,
         visibleForgotPassword: false,
         visibleNewPassword: false,
         visibleSuccesses: false,
         hidePassword: true,
         showPassword: false,
         hidePassword1: true,
         showPassword1: false,
         hidePassword2: true,
         showPassword2: false,
         hidePassword3: true,
         showPassword3: false,
        hidePassword4: true,
         showPassword4: false,
         fullName: null,
         signUpEmail:null,
         signUpPassword: null,
         signUpConfPassword: null,
         newPas: null,
         confNewPas: null,
         signPas: null,
         signEmail: null,
         emailForgot: null,
         errorName: '',
         errorEmail:'',
         errorPassword:'',
         errorConfPassword:'',
         loginPassword:'',
         errorConfigmNewPassword:'',
         errorNewPassword:''
    }
  },
  methods:{
      openChangePassword: function(){
          this.visibleSignUp = false;
          this.visibleForgotPassword = true;
      },
      newPaswword: function(e){
          this.errorEmail = '';
            if(!this.emailForgot) this.errorEmail ="Email required.";
            if(!this.validEmail(this.emailForgot)) {
                this.errorEmail ="Valid email required." ; 
            }
            if(this.emailForgot && this.validEmail(this.emailForgot)){
                this.visibleForgotPassword = false;
                this.visibleNewPassword = true;
            }
            e.preventDefault();
      },
      prevPage: function(){
          this.visibleNewPassword = false;
          this.visibleForgotPassword = true;
      },
      lastStep: function(e){
          this.errorConfigmNewPassword = '';
          this.errorNewPassword ='';
          if(!this.newPas) this.errorNewPassword ="Password required.";
          if(!this.confNewPas) this.errorConfigmNewPassword = "Configm Password required."
          if(!(this.newPas === this.confNewPas)) this.errorConfigmNewPassword = "Passwords must be the same."
          if((this.newPas && this.confNewPas) && (this.newPas === this.confNewPas)){
            this.visibleNewPassword = false;
            this.visibleSuccesses = true;
          }
          e.preventDefault();
      },
      openRigistration: function(){
          this.visibleSuccesses = false;
          this.visibleSignUp = true;
      },
      hidePassw: function(){
          this.hidePassword = false;
          this.showPassword = true;
          document.getElementById('signUp-password').type = 'text';
      },
    hidePassw1: function(){
        this.hidePassword1 = false;
        this.showPassword1 = true;
        document.getElementById('signUp-passwordConfirm').type = 'text';
    },
    hidePassw2: function(){
        this.hidePassword2 = false;
        this.showPassword2 = true;
        document.getElementById('logIn-password').type = 'text';
    },
     hidePassw3: function(){
        this.hidePassword3 = false;
        this.showPassword3 = true;
        document.getElementById('newPassword-password').type = 'text';
    },
      hidePassw4: function(){
        this.hidePassword4 = false;
        this.showPassword4 = true;
        document.getElementById('formNewPassw').type = 'text';
    },
    showPassw: function(){
        this.showPassword = false; 
        this.hidePassword = true;
        document.getElementById('signUp-password').type = 'password';
    },
    showPassw1: function(){
        this.showPassword1 = false; 
        this.hidePassword1 = true;
        document.getElementById('signUp-passwordConfirm').type = 'password';
    },
    showPassw2: function(){
        this.showPassword2 = false; 
        this.hidePassword2 = true;
        document.getElementById('logIn-password').type = 'password';
    },
    showPassw3: function(){
        this.showPassword3 = false; 
        this.hidePassword3 = true;
        document.getElementById('newPassword-password').type = 'password';
    },
     showPassw4: function(){
        this.showPassword4 = false; 
        this.hidePassword4 = true;
        document.getElementById('formNewPassw').type = 'password';
    },
    checkForm:function(e) {
        this.errorName = '';
        this.errorEmail = '';
        this.errorPassword = '';
        this.errorConfPassword = '';
        if(!this.fullName) this.errorName ="Name required.";
        if(!this.signUpPassword) this.errorPassword = "Password required.";
        if(!this.signUpConfPassword) this.errorConfPassword="Password configm required.";
        if(!(this.signUpPassword === this.signUpConfPassword)) this.errorConfPassword = "Passwords must be the same."
        if(!this.signUpEmail ) {
            this.errorEmail ="Email required.";
        }  
        if(!this.validEmail(this.signUpEmail)) {
            this.errorEmail ="Valid email required." ; 
        }
        if((this.fullName && this.signUpEmail && this.signUpPassword && this.signUpConfPassword) && (this.signUpPassword === this.signUpConfPassword)) return true;
        e.preventDefault();
    },
    validEmail:function(signUpEmail) {
      //eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(signUpEmail);
    },
    checkLogInForm:function(e){
        this.errorName = '';
        this.errorEmail = '';
        this.loginPassword = '';
        if(!this.signEmail) this.errorEmail ="Email required.";
         if(!this.validEmail(this.signEmail)) {
            this.errorEmail ="Valid email required." ; 
        }
        if(!this.signPas) this.errorName ="Password required.";
        if(this.signEmail && this.signPas) return true;
        e.preventDefault();
    },
  },
  
}
</script>

<style  lang="scss" scoped>
  .form-newPassword h3{
        display: flex;
        align-items: center;
        justify-content: center;
        span{
                margin-left: 20px;
        }
        img{
            cursor: pointer;
        }
    }
    .form-successes__last{
        text-align: center;
        line-height: 28px;
    }
    .registration {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 998px){
            flex-direction: column;
        }
        .form-forgotPasw{
            @media screen and (max-width: 998px){
                transform: translateY(-80%);
            }
        }
        .form-successes{
             @media screen and (max-width: 998px){
                transform: translateY(-175%);
            }
        }
        .form-newPassword{
             @media screen and (max-width: 998px){
                transform: translateY(-70%);
            }
        }
        .validation-error{
            margin-top: 5px;
            color: #eb0000;
            font-size: 12px;
        }
        .registration-bg {
            width: 50%;
            background: url(../../assets/registration/bg.png) no-repeat;
            background-size: cover;
            position: relative;
            height: 100vh;
            @media screen and (max-width: 998px){
                padding: 140px 0px;
                width: 100%;
                background-position: 0% 33%;
                height: unset;
            }
            &__logo{
                position: absolute;
                top: 40px;
                right: 40px;
                width: 12%;
                @media screen and (max-width: 998px){
                    transform: translate(-50%, -50%);
                    top: 20%;
                    left: 50%;
                    width: 110px;
                }
            }
        }
        .registration-bottom{
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 15px;
            p{
                position: relative;
                width: 100%;
                text-align: center;
                &::before{
                    display: block;               
                    width:40%;                   
                    content: '';                     
                    position: absolute;              
                    border-bottom: 1px solid #000;   
                    top:50%;                        
                    right: 4px;
                }
                &::after{
                    display: block;
                    width:40%;
                    content: '';
                    position: absolute;
                    border-bottom: 1px solid #000;
                    top:50%;
                    left: 4px;
                }
            }
            
            .registration-social{
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-top: 20px;
                    a{
                        display: flex;
                        align-items: center;
                        background: #FFFFFF;
                        box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
                        border-radius: 10px;
                        padding: 7px 15px;
                        width: 30%;
                        justify-content: center;
                        &:hover{
                            box-shadow: 0px 2px 7px rgba(37, 31, 110, 0.4);
                            transition: 0.3s;
                        }
                      
                    img{
                        margin-right: 5px;
                    }
                    span{
                        font-weight: 300;
                        font-size: 16px;
                        line-height: 24px;
                        color: #232323;
                        @media screen and (max-width: 1560px){
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .registration-section {
            width: 50%;
            padding: 50px 0px;
            @media screen and (max-width: 1440px){
                padding: 25px 0px;
            }
            @media screen and (max-width: 998px){
                width: 100%;
            }
        }
    .registration-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .registration-forgotpas{
                font-size: 14px;
                line-height: 21px;
                color: #1312DD;
                margin-top: 10px;
                &:hover{
                     color: #111192;
                     transition: 0.3s;
                }
                 @media screen and (max-width: 568px){
                    font-size: 10px;
                }
            }
            &__again{
                font-size: 14px;
                line-height: 21px;
                color: #1312DD;
                margin-top: 7px;
            }
            &__wrapper{
                background: #FFFFFF;
                box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
                border-radius: 10px;
                padding: 20px;
                width: 68%;
                 @media screen and (max-width: 1200px){
                     width: 85%;
                 }
                  @media screen and (max-width: 998px){
                    width: 70%;
                    transform: translateY(-24%);
                }
                @media screen and (max-width: 568px){
                    width: 90%;
                }
                h3{
                    text-align: center;
                    font-size: 40px;
                    line-height: 60px;
                    color: #130F40;
                    margin-bottom: 15px;
                     @media screen and (max-width: 1560px){
                         font-size: 28px;
                         line-height: 34px;
                         margin-bottom: 10px;
                     }
                     @media screen and (max-width: 568px){
                         font-size: 30px;
                     }
                }
                #signUp-form{
                    margin-top: 25px;
                    @media screen and (max-width: 1560px){
                        margin-top: 15px;
                    }
                }
            }
            &__note{
                font-size: 14px;
                line-height: 21px;
                color: #232323;
                opacity: 0.5;
                margin: -5px 0px 10px;
            }
            // .registration-form__enter

            &__enter {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
                label{
                    margin-bottom: 5px;
                    font-size: 16px;
                    line-height: 24px;
                    color: #232323;
                }
                input{
                    border: 1px solid #130F40;
                    border-radius: 10px;
                    padding: 8px 15px;
                    color: #232323;
                    width: 100%;
                    font-family: 'Poppins', sans-serif;
                    @media screen and (max-width: 1560px){
                        padding: 6px 10px;
                    }
                }
                input::placeholder { 
                    color: #232323;
                    opacity: 0.5; 
                }

                 input:-ms-input-placeholder { 
                    color: #232323;
                    opacity: 0.5;
                }

                 input::-ms-input-placeholder { 
                    color: #232323;
                    opacity: 0.5;
                }
                .enter-wrapper{
                    position: relative;
                    .count-text{
                        font-size: 12px;
                        line-height: 18px;
                        color: #232323;
                        opacity: 0.3;
                        position: absolute;
                        top: 50%;
                        right: 0%;
                        transform: translate(-50%, -50%);
                    }
                    .hide-password{
                        cursor: pointer;
                        position: absolute;
                        top: 50%;
                        right: 0%;
                        transform: translate(-50%, -50%);
                        img{
                            width: 24px;
                        }
                    }
                }
            }
    }
         .registration-create {
            background: #F6EF25;
            border-radius: 100px;
            padding: 8px 10px;
            width: 100%;
            border: none;
            font-weight: 300;
            font-size: 14px;
            line-height: 21px;
            color: #232323;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            &:hover{
                background: #fff71c;
                transition: 0.3s;
            }
    }
}
    
   

</style>