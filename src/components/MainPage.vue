<template>
  <div class="main">
    <MainHeader />
    <MainChooseGame />
    <Footer />
  </div>
</template>

<script>

import Footer from "./Footer.vue";
import MainHeader from './MainHeader.vue'
import MainChooseGame from './MainChooseGame.vue'
export default {
  name: 'MainPage',
  components: {
    MainHeader,
    MainChooseGame,
    Footer
  }
}
</script>

<style>
</style>

