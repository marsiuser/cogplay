<template>
        <div class="profile-member" id="profile-parent">
            <a class="profile-member__name parent" @click="show = !show" href="#"><span>I am a Parent </span>
                <img class="profile-member__arrow" v-bind:class="{ active: show }" src="../../assets/top-arrow.svg" alt="hide">
            </a>
            <div class="parent-model" v-if="show">
                <form action="#" name="parentForm" class="parent-form" id="prentForm"  @submit="checkFormParent">
                <div class="registration-form__enter">
                    <label for="full-name">Full Name</label>
                    <div class="enter-wrapper">
                        <input v-model="parentFullName" type="text" id="profile-fullName" maxlength="50" placeholder="Enter your full name">
                        <p class="count-text">0/50</p>
                    </div>
                    <span class="validation-error">{{errorParentFullName}}</span>
                </div>
                <div class="registration-form__enter">
                    <label for="signUp-email">Email</label>
                    <input v-model="parentEmail" type="text" id="ProfileSignUpEmail" placeholder="Enter your email">
                    <span class="validation-error">{{errorParentEmail}}</span>
                </div>
                <div class="registration-form__enter">
                    <label for="signUp-password">Password</label>
                        <div class="enter-wrapper">
                        <input v-model="parentPassword" type="password" id="ProfileSignUpPassword" placeholder="Enter your password">
                        <div class="hide-password">
                            <img v-show="hidePassword" @click="hidePassw" src="../../assets/registration/eye-close.svg" alt="hide password">
                            <img v-show="showPassword" @click="showPassw" src="../../assets/registration/eye.svg" alt="show password">
                        </div>
                        </div>
                        <span class="validation-error">{{errorParentPassword}}</span>
                </div>
                <div class="registration-form__enter">
                    <label for="signUp-passwordConfirm">Confirm Password</label>
                        <div class="enter-wrapper">
                        <input v-model="parentConfPassword" type="password" id="ProfileSignUpPasswordConfirm" placeholder="Confirm password">
                        <div class="hide-password">
                            <img v-show="hidePassword1" @click="hidePassw1" src="../../assets/registration/eye-close.svg" alt="hide password">
                            <img v-show="showPassword1" @click="showPassw1" src="../../assets/registration/eye.svg" alt="show password">
                        </div>
                        </div>
                    <span class="validation-error">{{errorParentConfPassword}}</span>
                </div>
                <div class="profile-member__line"></div>
                <div class="registration-form__enter">
                    <label for="full-name">Child’s First Name</label>
                    <div class="enter-wrapper">
                        <input v-model="childFistName" type="text" id="profile-childName" maxlength="50" placeholder="Enter first name">
                        <p class="count-text">0/50</p>
                    </div>
                    <span class="validation-error">{{errorChildFirstName}}</span>
                </div>
                <div class="registration-form__enter">
                    <label for="profileChildAge">Child’s Age</label>
                    <div class="enter-wrapper">
                    <input v-model="childAge" type="text" id="profileChildAge" maxlength="2" placeholder="Enter age">
                    </div>
                    <span class="validation-error">{{errorChildAge}}</span>
                </div>
                <div class="registration-form__enter">
                    <label for="full-name">Child’s Grade</label>
                    <div class="enter-wrapper">
                        <v-select :options="grade" placeholder="6"></v-select>
                    </div>
                </div>
                <div class="registration-form__enter">
                    <label for="full-name">Child’s School District</label>
                    <div class="enter-wrapper">
                    <v-select :options="district" placeholder="Ontario"></v-select>
                    </div>
                </div>
                <div class="registration-form__enter">
                    <label for="full-name">Specific Diagnosis, Suspected Learning, Disability</label>
                    <div class="enter-wrapper">
                    <v-select :options="diagnosis" placeholder="Autism"></v-select>
                    </div>
                </div>
                <input type="submit" class="profile-createbtn" value="Create account">
                </form>
            </div>
        </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
export default {
  name: 'ParentForm',
    data: function(){
        return{
            show: true,
            showTeacher: true,
            hidePassword: true,
            showPassword: false,
            hidePassword1: true,
            showPassword1: false,
            diagnosis: [
                'Autism',
                'Autism1',
                'Autism2'
            ],
             district: [
                'Ontario',
                'Ontario1',
                'Ontario2'
            ],
            grade:[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
            ],
            parentFullName: null,
            parentEmail: null,
            parentPassword:null,
            parentConfPassword:null,
            childFistName: null,
            childAge: null,
            errorParentFullName:'',
            errorParentEmail:'',
            errorParentPassword:'',
            errorParentConfPassword:'',
            errorChildFirstName:'',
            errorChildAge:'',
        }
    },
    methods:{
          hidePassw: function(){
            this.hidePassword = false;
            this.showPassword = true;
            document.getElementById('ProfileSignUpPassword').type = 'text';
        },
        hidePassw1: function(){
            this.hidePassword1 = false;
            this.showPassword1 = true;
            document.getElementById('ProfileSignUpPasswordConfirm').type = 'text';
        },
          showPassw: function(){
            this.showPassword = false; 
            this.hidePassword = true;
            document.getElementById('ProfileSignUpPassword').type = 'password';
        },
        showPassw1: function(){
            this.showPassword1 = false; 
            this.hidePassword1 = true;
            document.getElementById('ProfileSignUpPasswordConfirm').type = 'password';
        },
        checkFormParent: function(e){
            this.errorParentFullName = '';
            this.errorParentEmail = '';
            this.errorParentPassword = '';
            this.errorParentConfPassword = '';
            this.errorChildFirstName = '';
            this.errorChildAge = '';
            if(!this.parentFullName) this.errorParentFullName ="Name required.";
            if(!this.childFistName) this.errorChildFirstName = "Child’s First Name required.";
            if(!this.childAge) this.errorChildAge = "Child’s Age required."
            if(!parseInt(this.childAge)) this.errorChildAge = "The field must be numeric."
            if(!this.parentEmail) this.errorParentEmail ="Email required.";
            if(!this.validEmail(this.parentEmail)) {
                this.errorParentEmail ="Valid email required." ; 
            }
            if(!this.parentPassword) this.errorParentPassword ="Password required.";
            if(!this.parentConfPassword) this.errorParentConfPassword ="Configm password required.";
            if(!(this.parentPassword === this.parentConfPassword )) this.errorParentConfPassword ="Passwords must be the same.";
            if((this.parentFullName && this.parentEmail && this.parentPassword && this.parentConfPassword && this.childFistName && this.childAge) && (this.parentPassword === this.parentConfPassword )) return true;
            e.preventDefault();
        },
         validEmail:function(parentEmail) {
            //eslint-disable-next-line
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(parentEmail);
        },
    }
}
</script>

<style  lang="scss" scoped>
    .create-profile {
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
            opacity: 0;
        }
        .profile-who {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 70%;
            margin: -120px auto 60px
        }
        .profile-member {
                width: 49%;
                background: #FFFFFF;
                box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
                border-radius: 10px;
                 @media screen and (max-width: 568px){
                     width: 100%;
                     margin-bottom: 30px;
                 }
                .profile-member__arrow.active{
                    transform: rotate(180deg);
                    transition: all 0.3s;
                }
                .profile-member__arrow{
                    transition: all 0.3s;
                }
                // .profile-member__name

                &__name {
                    padding: 11px 10px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    background: #FFFFFF;
                    box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #232323;
                    img{
                        margin-left: 15px;
                    }
                }
                  // .profile-member__line
                &__line{
                    width: 100%;
                    border-bottom: 1px solid #130F40;
                    margin-bottom: 15px;
                }
                 .profile-createbtn{
                    background: #F6EF25;
                    border-radius: 100px;   
                    border: none;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 21px;
                    color: #232323;
                    display: inline-block;
                    width: 100%;
                    padding:8px 0px;
                    cursor: pointer; 
                    font-family: 'Poppins', sans-serif;
                    margin-top: 10px;
                    &:hover{
                        background: #fff71c;
                        transition: 0.3s;
                    }
                }
        }
        .parent {
        }
        .parent-form {
            padding: 20px;
        }
        .registration-form {
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
                    }
                }
        }
        .enter-wrapper {
            position: relative;
            .count-text {
                font-size: 12px;
                line-height: 18px;
                color: #232323;
                opacity: 0.3;
                position: absolute;
                top: 50%;
                right: 0%;
                transform: translate(-50%, -50%)
            }
            .select-list{
                opacity: 1;
                top: 53%;
                cursor: pointer;
            }
        }
  
        .validation-error {
            margin-top: 5px;
            color: #eb0000;
            font-size: 12px;
        }
        .hide-password {
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

</style>