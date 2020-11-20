<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

#app {
 font-family: 'Poppins', sans-serif;
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
}

</style>
