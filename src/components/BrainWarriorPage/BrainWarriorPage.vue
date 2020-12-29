<template>
    <div class="game-brain">
        <LastHeader />
        <BrainWarriorVideo />
        <Footer />
    </div>
</template>

<script>
import BrainWarriorVideo from './BrainWarriorVideo'
import LastHeader from '../../components/LastHeader'
import Footer from "../Footer.vue";
export default {
  name: 'BrainWarriorPage',
  components:{
        LastHeader,
        Footer,
        BrainWarriorVideo
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