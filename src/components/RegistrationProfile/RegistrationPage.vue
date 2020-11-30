<template>
    <div class="registration">
        <div class="registration-bg">
            <img class="registration-bg__logo" src="../../assets/registration/logo_black.svg" alt="logo">
        </div>
        <div class="registration-section">
            <div class="registration-form">
               <div class="registration-form__wrapper">
                    <h3>Welcome to Cogplay!</h3>
                <div>
                    <tabs>
                        <tab name="Sign Up">
                            <form action="#" name="Sign up" id="signUp-form">
                              <div class="registration-form__enter">
                                    <label for="full-name">Full Name</label>
                                    <div class="enter-wrapper">
                                        <input type="text" id="full-name" placeholder="Enter your full name">
                                        <p class="count-text">0/50</p>
                                    </div>
                              </div>
                                <div class="registration-form__enter">
                                    <label for="signUp-email">Email</label>
                                    <input type="text" id="signUp-email" placeholder="Enter your email">
                              </div>
                                <div class="registration-form__enter">
                                    <label for="signUp-password">Password</label>
                                     <div class="enter-wrapper">
                                        <input type="text" id="signUp-password" placeholder="Enter your password">
                                        <div class="hide-password">
                                            <img src="../../assets/registration/eye-close.svg" alt="hide password">
                                        </div>
                                     </div>
                              </div>
                              <div class="registration-form__enter">
                                    <label for="signUp-password">Confirm Password</label>
                                     <div class="enter-wrapper">
                                        <input type="text" id="signUp-password" placeholder="Confirm password">
                                        <div class="hide-password">
                                            <img src="../../assets/registration/eye-close.svg" alt="hide password">
                                        </div>
                                     </div>
                              </div>
                              <button class="registration-create">Create account</button>
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
                           <form action="#" name="Log in" id="logIn-form">
                                <div class="registration-form__enter">
                                    <label for="logIn-email">Email</label>
                                    <input type="text" id="logIn-email" placeholder="Enter your email">
                              </div>
                                <div class="registration-form__enter">
                                    <label for="logIn-password">Password</label>
                                     <div class="enter-wrapper">
                                        <input type="text" id="logIn-password" placeholder="Enter your password">
                                        <div class="hide-password">
                                            <img src="../../assets/registration/eye.svg" alt="hide password">
                                        </div>
                                     </div>
                                     <a href="#" class="registration-forgotpas">Forgot your password? </a>
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
}
</script>

<style  lang="scss" scoped>
    .registration {
        display: flex;
        justify-content: space-between;
        height: 100vh;
        @media screen and (max-width: 998px){
            flex-direction: column;
        }
        .registration-bg {
            width: 50%;
             background: url(../../assets/registration/bg.png) no-repeat;
             background-size: cover;
             position: relative;
            @media screen and (max-width: 998px){
                padding: 140px 0px;
                width: 100%;
                background-position: 0% 33%;
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
            padding: 50px 0px 100px;
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
                         font-size: 32px;
                         line-height: 40px;
                     }
                     @media screen and (max-width: 568px){
                         font-size: 30px;
                     }
                }
                #signUp-form{
                    margin-top: 25px;
                }
            }
            // .registration-form__enter

            &__enter {
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;
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
                }
                input::placeholder { 
                    color: #232323;
                    opacity: 1; 
                }

                 input:-ms-input-placeholder { 
                    color: #232323;
                }

                 input::-ms-input-placeholder { 
                    color: #232323;
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