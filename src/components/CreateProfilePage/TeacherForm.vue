<template>
            
    <div class="profile-member" id="profile-teacher">
        <a class="profile-member__name" @click="showTeacher = !showTeacher" href="#"><span>I am a Teacher</span>
        <img class="profile-member__arrow" v-bind:class="{ active: showTeacher }" src="../../assets/top-arrow.svg" alt="hide">
        </a>
        <div class="teacher-model" v-if="showTeacher">
            <form action="#" name="teacherForm" class="parent-form" id="teacherForm" @submit="checkFormTeacher">
            <div class="registration-form__enter">
                <label for="teacher-fullName">Full Name</label>
                <div class="enter-wrapper">
                    <input v-model="teacherFullName" type="text" id="teacher-fullName" maxlength="50" placeholder="Enter your full name">
                    <p class="count-text">0/50</p>
                </div>
                <span class="validation-error">{{errorTeacherFullName}}</span>
            </div>
            <div class="registration-form__enter">
                <label for="TeacherSignUpEmai">Email</label>
                <input v-model="teacherEmail" type="text" id="TeacherSignUpEmail" placeholder="Enter your email">
                <span class="validation-error">{{errorTeacherEmail}}</span>
            </div>
            <div class="registration-form__enter">
                <label for="TeacherPassword">Password</label>
                    <div class="enter-wrapper">
                        <input v-model="teacherPassword" type="password" id="TeacherPassword" placeholder="Enter your password">
                         <div class="hide-password">
                            <img v-show="hidePassword1" @click="hidePassw1" src="../../assets/registration/eye-close.svg" alt="hide password">
                            <img v-show="showPassword1" @click="showPassw1" src="../../assets/registration/eye.svg" alt="show password">
                        </div>
                    </div>
                    <span class="validation-error">{{errorTeacherPassword}}</span>
            </div>
            <div class="registration-form__enter">
                <label for="TeacherPasswordConfirm">Confirm Password</label>
                    <div class="enter-wrapper">
                        <input v-model="teacherConfPassword" type="password" id="TeacherPasswordConfirm" placeholder="Confirm password">
                        <div class="hide-password">
                            <img v-show="hidePassword" @click="hidePassw" src="../../assets/registration/eye-close.svg" alt="hide password">
                            <img v-show="showPassword" @click="showPassw" src="../../assets/registration/eye.svg" alt="show password">
                        </div>
                    </div>
                <span class="validation-error">{{errorTeacherConfPassword}}</span>
            </div>
            <div class="profile-member__line"></div>
                <div class="registration-form__enter">
                <label for="profileStudentName">Student’s First Name</label>
                    <div class="enter-wrapper">
                        <input v-model="studentFistName" type="text" id="profileStudentName" maxlength="50" placeholder="Enter first name">
                        <p class="count-text">0/50</p>
                    </div>
                    <span class="validation-error">{{errorStudentFirstName}}</span>
                </div>
                <div class="registration-form__enter">
                    <label for="profileStudentAge">Student’s Age</label>
                    <div class="enter-wrapper">
                    <input v-model="studentAge" type="text" maxlength="2" id="profileStudentAge" placeholder="Enter age">
                    </div>
                    <span class="validation-error">{{errorStudentAge}}</span>
                </div>
                    <div class="registration-form__enter">
                <label for="full-name">Student’s Grade</label>
                <div class="enter-wrapper">
                    <v-select :options="grade" placeholder="Enter grade"></v-select>
                </div>
            </div>
            <div class="registration-form__enter">
                <label for="full-name">Student’s School District</label>
                <div class="enter-wrapper">
                <v-select :options="district" placeholder="Enter district"></v-select>
                </div>
            </div>
            <div class="registration-form__enter">
                <label for="full-name">Specific Diagnosis, Suspected Learning, Disability</label>
                <div class="enter-wrapper">
                <v-select :options="diagnosis" placeholder="Enter diagnosis"></v-select>
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
  name: 'TeacherForm',
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
            teacherFullName: null,
            teacherEmail:null,
            teacherPassword: null,
            teacherConfPassword:null,
            studentFistName: null,
            studentAge: null,
            errorTeacherFullName:'',
            errorTeacherEmail:'',
            errorTeacherPassword: '',
            errorTeacherConfPassword:'',
            errorStudentFirstName:'',
            errorStudentAge: ''
        }
    },
    methods:{
        checkFormTeacher:function(e){
            this.errorTeacherFullName='';
            this.errorTeacherEmail='';
            this.errorTeacherPassword= '';
            this.errorTeacherConfPassword='';
            this.errorStudentFirstName='';
            this.errorStudentAge='';
            if(!this.teacherFullName) this.errorTeacherFullName = "Name required.";
            if(!this.teacherEmail) this.errorTeacherEmail ="Email required.";
            if(!this.validEmailTeacher(this.teacherEmail)) {
                this.errorTeacherEmail ="Valid email required." ; 
            }
            if(!this.teacherPassword) this.errorTeacherPassword ="Password required.";
            if(!this.teacherConfPassword) this.errorTeacherConfPassword = "Configm password required.";
            if(!this.studentFistName) this.errorStudentFirstName = "Student name required.";
            if(!this.studentAge) this.errorStudentAge = "Student age required."
            if(!parseInt(this.studentAge)) this.errorStudentAge = "The field must be numeric."
            if(!(this.teacherPassword === this.teacherConfPassword))  this.errorTeacherConfPassword= "Passwords must be the same.";
            if((this.teacherFullName && this.teacherEmail && this.teacherPassword && this.teacherConfPassword && this.studentFistName && this.studentAge) &&(this.teacherConfPassword === this.teacherPassword)) return true;
            e.preventDefault();
        },
        validEmailTeacher: function(teacherEmail){
             //eslint-disable-next-line
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(teacherEmail);
        },
         hidePassw: function(){
            this.hidePassword = false;
            this.showPassword = true;
            document.getElementById('TeacherPasswordConfirm').type = 'text';
        },
        hidePassw1: function(){
            this.hidePassword1 = false;
            this.showPassword1 = true;
            document.getElementById('TeacherPassword').type = 'text';
        },
          showPassw: function(){
            this.showPassword = false; 
            this.hidePassword = true;
            document.getElementById('TeacherPasswordConfirm').type = 'password';
        },
        showPassw1: function(){
            this.showPassword1 = false; 
            this.hidePassword1 = true;
            document.getElementById('TeacherPassword').type = 'password';
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