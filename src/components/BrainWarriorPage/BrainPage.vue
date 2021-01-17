<template>
    <div class="game-brain">
        <LastHeader />
        <BrainVideo />
        <Footer />
    </div>
</template>

<script>
import BrainVideo from './BrainVideo'
import LastHeader from '../../components/LastHeader'
import Footer from "../Footer.vue";
export default {
  name: 'BrainWarriorPage',
  components:{
        LastHeader,
        Footer,
        BrainVideo
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