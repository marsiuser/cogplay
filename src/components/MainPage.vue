<template>
  <div class="main">
    <MainHeader />
    <MainChooseGame />
  </div>
</template>

<script>

import MainHeader from './MainHeader.vue'
import MainChooseGame from './MainChooseGame.vue'
export default {
  name: 'MainPage',
  components: {
    MainHeader,
    MainChooseGame
  }
}
</script>

<style>
</style>

