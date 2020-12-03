<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from "./components/Footer.vue";
import 'material-icons/iconfont/material-icons.css';
export default {
  name: 'App',
  components: {
    // Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

#app {
 font-family: 'Poppins', sans-serif;
}

.vs-popup--content::-webkit-scrollbar {
	-webkit-appearance: none;
	width: 7px;
}
.vs-popup--content::-webkit-scrollbar-thumb {
	border-radius: 2px;
	background-color: rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 0 1px rgba(255,255,255,0.5);
}
.vs-popup-primary .vs-popup--background{
    background: rgba(35, 35, 35, 0.7) !important;
    backdrop-filter: blur(19px) !important;
}

.vs-component .vs-popup--header{
    display: none;
}

.tabs-component-tabs{
    display: flex;
    justify-content: center;
}

.tabs-component-tab a{
    margin: 0px 25px;
    font-weight: 300;
    font-size: 25px;
    line-height: 37px;
    color: #232323;
  position: relative;
}

.tabs-component-tabs .is-active a{
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  color: #FF1616;
}
.tabs-component-tabs li:first-child a::before{
  background: url(./assets/registration/line.png) no-repeat;
  content: "";
  position: absolute;
  top: 3px;
  right: -27px;
  width: 1px;
  height: 28px;
  background-size: cover;
}
.con-vs-popup .vs-popup{
  position: relative;
}

.neuroplaticity-popup .vs-popup{
    background: transparent  !important;
    background-color: transparent !important;
}

.neuroplaticity-popup .vs-popup--content{
  height: 790px;
}

.neuroplaticity-popup  .vs-popup{
    box-shadow: unset  !important;
    -webkit-box-shadow: unset !important;
}

.con-vs-popup .vs-popup::before{
  /* content: "";
  position: absolute;
  top: -55px;
  right: 0px;
  background: url(assets/Pricing/close-payment.svg) no-repeat;
  width: 40px;
  height: 40px;
  cursor: pointer; */
}
.vs-popup--content{
  width: 100% !important;
}
.con-vs-popup .vs-popup{
  border-radius: 10px !important;
}
.vs-component .vs-popup--content{
  padding: 0px;
  margin: 0px;
}
body.bm-overlay .bm-menu {
      width: 100% !important;
      background-color: #fff !important;
}

body.bm-overlay  .bm-item-list>*{
  justify-content: center;
  padding: 0px 0px 40px !important;
}

body.bm-overlay .header-burger .header__logo img{
  width: 88px;
  margin-bottom: 20px;
}
body.bm-overlay .bm-item-list{
  margin-left: 0px;
}

.header-burger .bm-burger-bars{
  background-color: #fff;
}

.header-burger .bm-burger-button{
  top: 20px;
  right: 20px !important;
  height: 19px;
  width: 28px;
}

body.bm-overlay .header-burger .header-burger__active span{
  font-weight: bold !important;
}

.header-burger .line-style {
    height: 12%;
    border-radius: 5px;
}
body.bm-overlay .bm-item-list>*>span{
  font-weight: 300 !important;
  font-size: 30px !important;
  line-height: 45px !important;
  color: #232323 !important;
  margin-left: 0px !important;
}

body.bm-overlay .bm-cross-button{
  right: 0px !important;
}

body.bm-overlay .bm-cross{
  background: #FF1616 !important;
   width: 4px !important;
  height: 25px !important;
  border-radius: 5px !important;
}

.bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: #FFF;
  }
  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-menu {
    height: 100%; 
    width: 0; 
    position: fixed; 
    z-index: 1000; 
    top: 0;
    left: 0;
    background-color: rgb(63, 63, 65);
    overflow-x: hidden; 
    padding-top: 60px;
    transition: 0.5s; 
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    color: #b8b7ad;
    margin-left: 10%;
    font-size: 20px;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
  }
  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
  }

.header-burger{
  display: none;
}
/* ._container */

._container{
   max-width: 1266px;
  margin: 0 auto;
}

@media screen and (max-width: 1560px){
   .tabs-component-tabs .is-active a,
     .tabs-component-tabs  a{
      font-size: 20px;
    }
    .tabs-component-tabs li:first-child a::before{
      height: 23px;
    }
}
@media screen and (max-width: 1440px){
    ._container{
        width: 80%;
    }
}

@media screen and (max-width: 1140px){
    ._container {
      width: 70%;
    }
}

@media screen and (max-width: 992px){
    ._container{
      width: 80%;
  }
}

@media screen and (max-width: 568px){
   ._container{
      width: 90%;
  }
  .header__menu .menu__list{
    display: none !important;
  }
  .header-burger{
    display: block;
  }
  .con-vs-popup .vs-popup::before{
    width: 25px;
    height: 25px;
    background-size: cover;
    top: -32px;
  }
}

</style>
