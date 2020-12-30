<template>
    <div class="game-brain">
        <LastHeader />
        <FingerGif />
        <Footer />
    </div>
</template>

<script>
import LastHeader from '../../components/LastHeader'
import FingerGif from '../FingerGame/FingerGif'
import Footer from "../Footer.vue";
export default {
  name: 'FingerPage',
  components:{
        LastHeader,
        Footer,
        FingerGif
    },
    data: function(){
        return{
        }
    },
    methods:{
    },
}
</script>

<style  lang="scss" scoped>
</style>