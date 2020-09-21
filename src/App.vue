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
}

</style>
