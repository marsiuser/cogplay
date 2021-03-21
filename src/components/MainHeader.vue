<template>
  <div class="header">
      <div class="header__container _container">
        <div class="header__menu menu">
            <a class="header__logo" href="#"><img src="../assets/logo.svg" alt="logo"></a>
            <nav class="menu__body">
                <ul class="menu__list">
                    <li><router-link :to="'/'" class="menu__link menu__active">Home</router-link></li>
                    <li><router-link :to="'/pricing'" href="#" class="menu__link">Pricing</router-link></li>
                    <li><router-link :to="'/profile'" href="#" class="menu__link">Profile <img src="../assets/profile-header.svg" alt=""></router-link></li>
                </ul>
                <div class="header-burger">
                     <template>
                        <Slide right>
                            <router-link :to="'/'" class="header__logo" href="#">
                                <img src="../assets/logo_black.png" alt="logo">
                            </router-link>
                           <router-link :to="'/'" id="home" class="header-burger__active">
                                <span>Home</span>
                            </router-link>
                            <router-link :to="'/pricing'" id="pricing" >
                                <span>Pricing</span>
                            </router-link>
                            <router-link :to="'/profile'">
                                <span>Profile</span>
                            </router-link>
                        </Slide>
                    </template>
                </div>
            </nav>
        </div>
        <div class="header__note">
            <h1 class="main-note">Full body. Full brain. Fun</h1>
            <p>Increase focus optimize memory grow self-confidence</p>
            <a href="#">free PDFs and Powerpoints</a>
        </div>
      </div>
    <div class="courses">
        <div class="courses__container _container">
            <div class="course">
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course1.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Neuroplaticity of the brain</h4>
                        <p>Research has shown over and over “name” produces real results</p>
                    </div>
                    <div class="card-course__read">
                        <a href="#" @click="popupActivo=true" >Read more</a>
                        <vs-popup class="neuroplaticity-popup"  :active.sync="popupActivo">
                            <div class="neuroplaticity-popup__image"></div>
                        </vs-popup>
                    </div>
                </div>
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course2.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Eye tracking and focus</h4>
                        <p>Read our case studies to see how “name” drives success in classrooms nationwide </p>
                    </div>
                    <div class="card-course__read">
                        <a href="#" @click="popupEye=true" >Read more</a>
                        <vs-popup class="eye-popup neuroplaticity-popup" :active.sync="popupEye">
                            <div class="eye-popup__image"></div>
                        </vs-popup>
                    </div>
                </div>
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course3.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Teaching strategies </h4>
                        <p>The Elite 100 share why they turn to “name” to help their students grow</p>
                    </div>
                    <div class="card-course__read">
                         <a href="#" @click="popupTeaching=true" >Read more</a>
                        <vs-popup class="neuroplaticity-popup teaching-popup"  :active.sync="popupTeaching">
                            <div class="neuroplaticity-popup__image teaching-popup__image"></div>
                        </vs-popup>
                    </div>
                </div>
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course4.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Full body full brain movement</h4>
                        <p>Walk into the classroom every dau, and understand exactly what students know and precisely what to do next to help them improve</p>
                    </div>
                    <div class="card-course__read">
                        <a href="#" @click="popupCross=true" >Read more</a>
                        <vs-popup class="neuroplaticity-popup cross-popup"  :active.sync="popupCross">
                            <div class="neuroplaticity-popup__image cross-popup__image"></div>
                        </vs-popup>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Slide } from 'vue-burger-menu' 
import {vsButton, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
export default {
   components: {
        Slide, // Register your component
    },
      data(){
        return {
            popupActivo:false,
            popupEye: false,
            popupTeaching: false,
            popupCross: false
        }
    },
}
Vue.use(vsPopup);
Vue.use(vsButton);
</script>

<style  lang="scss" scoped>

// ************************* HEADER SECTION ***************************


  .header {
        background: url(../assets/bg.png) no-repeat;
        background-size: cover;
        position: relative;
         @media screen and (max-width: 1200px){
             background-position: 47% 0%;
         }
		// .header__container

		&__container {
            padding-bottom: 163px;
            color: #fff;
             @media screen and (max-width: 1200px){
                 padding-bottom: 87px;
             }
		}

		// .header__menu

		&__menu {
            display: flex;
            justify-content: space-between;
            padding: 10px 0px;
             @media screen and (max-width: 1200px){
                 padding: 10px 0px;
             }

		}

		// .header__logo

		&__logo {
            margin-top: 10px;
            img{
                 @media screen and (max-width: 1200px){
                    width: 55px;
                }
            }
           
		}

		// .header__note

		&__note {
            padding-top: 40px;
            max-width: 700px;
            @media screen and (max-width: 1440px){
                max-width: 500px;
            }
            @media screen and (max-width: 1200px){
                padding-top: 28px;
                max-width: 400px;
            }
            @media screen and (max-width: 568px){
                padding: 120px 0px 90px;
            }
            p{
                font-size: 22px;
                line-height: 32px;
                max-width: 474px;
                margin-top: 20px;
                @media screen and (max-width: 1440px){
                    font-size: 18px;
                    max-width: 374px;
                    line-height: 28px;
                }
                @media screen and (max-width: 1200px){
                    font-size: 16px;
                    line-height: 19px;
                    max-width: 311px;
                }
            }
            a{
                margin-top: 30px;
                display: inline-block;
                font-size: 22px;
                line-height: 33px;
                color: #FFFFFF;
                text-decoration: none;
                padding: 12px 25px;
                border: 3px solid #fff;
                border-radius: 50px;
                &:hover{
                    background-color: #fff;
                    color:#000;
                    transition: 0.3s;
                }
            }
		}
}

.menu {

		// .menu__body

		&__body {
            padding: 5px 0px;
		}

		// .menu__list

		&__list {
            display: flex;
            align-items: center;
             a{
                text-decoration: none;
            }
		}

		// .menu__link

		&__link {
            font-size: 20px;
            margin: 0px 0px 0px 45px;
            line-height: 30px;
            color: #fff;
            display: flex;
            align-items: center;            
            &:hover{
                color: #f9ca24;
            }
            img{
                margin-left: 20px;
                  @media screen and (max-width: 1600px){
                      width: 35px;
                  }
                @media screen and (max-width: 1140px){
                    max-width: 30px;
                }
            }
             @media screen and (max-width: 1600px){
                 font-size: 16px;
                 margin: 0px 16px;
             }
            @media screen and (max-width: 1200px){
                font-size: 14px;
                margin: 0px 14px;
                line-height: 21px;
                color: #fff;
            }
		}

        //.menu__active
        &__active{
            font-weight: 600;
        }
		// .menu__button

		&__button {
            color: #242260;
            background: #FFFFFF;
            border-radius: 100px;
            padding: 10px 36px;
            font-size: 14px;
            margin-left: 22px;
            transition: 0.3s ease;
            &:hover{
                background-color: #242260;
                color: #FFFFFF;
                transition: 0.3s ease;
            }
             @media screen and (max-width: 1440px){
                 font-size: 12px;
                  margin-left: 18px;
                  padding: 8px 28px;
             }
             @media screen and (max-width: 1200px){
                 font-size: 8px;
                 line-height: 12px;
                 padding: 6px 24px;
             }
              @media screen and (max-width: 568px){
                  display: none;
              }
		}
}
.main-note {
    font-weight: 600;
    font-size: 122px;
    line-height: 97.5%;
    color: #FFFFFF;
    letter-spacing: -2px;
    @media screen and (max-width: 1440px){
        font-size: 80px;
    }
    @media screen and (max-width: 1200px){
        font-size: 70px;
    }
     @media screen and (max-width: 360px){
         font-size: 50px;
     }
}



// *********************** HEADER SECTION END *************************

// COURSES SECTION

.courses {
        position: absolute;
        left: 50%;
        bottom: -10px;
        width: 100%;
        transform: translate(-50%, 83%);
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        @media screen and (max-width: 1140px){
            transform: translate(-50%, 76%);
        }
        @media screen and (max-width: 568px){
            display: none;
        }
		// .courses__container
         @media screen and (max-width: 768px){
            &__container {
                width: 90% !important;
            }
         }
}
.course {
        display: flex;
        justify-content: space-between;
		// .course__card

		&__card {
            width: 23%;
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
		}
}
.card-course {
        // card-course__read
        &__read{
            flex: 0 0 auto;
            margin-bottom: 25px;
             a{
                 background: #F6EF25;
                border-radius: 50px;
                font-weight: 300;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                text-decoration: none;
                padding: 8px 10px;
                color: #232323;
                width: 76%;
                display: inline-block;
                &:hover{
                    background: #fff71c;
                    transition: 0.3s;
                }
                @media screen and (max-width: 768px){
                    font-size: 12px;
                }
            }
        }

		// .card-course__img

		&__img {
            img{
                object-fit: cover;
                width: 100%;
            }
		}

		// .card-course__about

		&__about {
            flex: 1 0 auto;
            padding:32px 15px 5px;
            @media screen and (max-width: 1140px){
                padding: 4px 10px 15px;
            }
            h4{
                font-weight: 600;
                font-size: 22px;
                line-height: 33px;
                text-align: center;
                color: #130F40;
                max-width: 220px;
                margin: 0 auto;
                  @media screen and (max-width: 1440px){
                      font-size: 18px;
                      line-height: 24px;
                  }
                  @media screen and (max-width: 1140px){
                      font-size: 14px;
                      line-height: 21px;
                  }
            }
            p{
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #232323;
                margin-top: 10px;
                 @media screen and (max-width: 1440px){
                    font-size: 12px;
                    line-height: 20px;
                 }
                  @media screen and (max-width: 1140px){
                      font-size: 9px;
                      line-height: 13px;
                  }
            }
           
		}
}

.neuroplaticity-popup{
    // .neuroplaticity-popup__image
    &__image{
        background: url(../assets/courses/popup1.png) no-repeat;
        background-size: 100%;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        @media screen and (max-width: 1560px){
            width: 75%;
        }
    }
}

.eye-popup{
    // .eye-popup__image
    &__image{
        background: url(../assets/courses/popup2.png) no-repeat;
        background-size: 100%;
        height: 100%;
        width: 100%;
        margin: 0 auto;
           @media screen and (max-width: 1560px){
            width: 75%;
        }
    }
}

.teaching-popup{
     // .teaching-popup__image
    &__image{
        background: url(../assets/courses/popup3.png) no-repeat;
        background-size: 100%;
        height: 100%;
        width: 100%;
        margin: 0 auto;
           @media screen and (max-width: 1560px){
            width: 75%;
        }
    }
}
.cross-popup{
     // .cross-popup__image
    &__image{
        background: url(../assets/courses/popup4.png) no-repeat;
        background-size: 100%;
        height: 100%;
        width: 100%;
        margin: 0 auto;
           @media screen and (max-width: 1560px){
            width: 75%;
        }
    }
}
// ************************  COURSES SECTION END ***************************



</style>
