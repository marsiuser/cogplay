<template>
    <div class="profile create-profile">
        <LastHeader />
        <div class="profile-greeting">
            <div class="profile-logo">
                <img src="../../assets/Profile/logo-greeting.svg" alt="logo">
            </div>
            <div class="profile-welcome">
                <h2>Create your profile</h2>
                <p>You can change this info later</p>
            </div>
        </div>
        <div class="profile-who">
            <ParentForm />
            <TeacherForm />
        </div>
        <Footer />
    </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import LastHeader from '../LastHeader.vue'
import TeacherForm from './TeacherForm.vue'
import ParentForm from './ParentForm.vue'
import Footer from "../Footer";
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
export default {
  name: 'CreateProfile',
  components:{
        LastHeader,
        Footer,
        TeacherForm,
        ParentForm
    },
    data: function(){
        return{
            show: true,
            showTeacher: true,
            hidePassword: true,
            showPassword: false,
            hidePassword1: true,
            showPassword1: false,
        }
    },
    methods:{
    }
}
</script>

<style  lang="scss" scoped>
    .create-profile {
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .profile-who {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 70%;
        margin: -120px auto 60px;
        @media screen and (max-width: 998px){
            width: 90%;
        }
        @media screen and (max-width: 568px){
            flex-direction: column;
        }
    }
    .profile-greeting {
        background: #1312DD;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 38px 0px 180px;
         @media screen and (max-width: 568px){
            justify-content: flex-start;
            text-align: left;
        }
    }
    .profile-logo {
        width: 90%;
        margin: 0 auto;
    }
    .profile-welcome {
        width: 90%;
        margin: 0 auto;
        h2{
            font-size: 40px;
            line-height: 60px;
            color: #FFFFFF;
            @media screen and (max-width: 568px){
                font-size: 30px;
                line-height: 45px;
                margin-top: 10px;
            }
        }
        p{
            font-size: 20px;
            line-height: 30px;
            color: #FFFFFF;
            @media screen and (max-width: 568px){
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
}
</style>