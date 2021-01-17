<template>
    <div class="quiz">
        <LastHeader />
        <div class="quiz-wrap">
            <div class="quiz-header">
                <router-link :to="'/'" class="header__logo" href="#">
                    <img src="../../assets/logo_black.png" alt="logo">
                </router-link>
                <h2 class="quiz-header__name">Quiz</h2>
                <div class="quiz-header__close">
                     <img src="../../assets/close-video.svg" alt="close">
                </div>
            </div>
            <div class="quiz-levels">
                <div class="quiz-item"  @click="selected = 1" :class="{active:selected == 1}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view1.png" alt="level 1">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Zeros Addition Quiz</p>
                    </div>
                </div>
                   <div class="quiz-item" @click="selected = 2" :class="{active:selected == 2}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view2.png" alt="level 2">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Ones Addition Quiz</p>
                    </div>
                </div>
                   <div class="quiz-item" @click="selected = 3" :class="{active:selected == 3}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view3.png" alt="level 3">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Twos Addition Quiz</p>
                    </div>
                </div>
                <div class="quiz-item" @click="selected = 4" :class="{active:selected == 4}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view4.png" alt="level 4">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Threes Addition Quiz</p>
                    </div>
                </div>
                 <div class="quiz-item" @click="selected = 5" :class="{active:selected == 5}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view5.png" alt="level 5">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Fours Addition Quiz</p>
                    </div>
                </div>
                <div class="quiz-item" @click="selected = 6" :class="{active:selected == 6}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view6.png" alt="level 6">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Fives Addition Quiz</p>
                    </div>
                </div>
                <div class="quiz-item" @click="selected = 7" :class="{active:selected == 7}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view7.png" alt="level 7">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Sixes Addition Quiz</p>
                    </div>
                </div>
                <div class="quiz-item" @click="selected = 8" :class="{active:selected == 8}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view8.png" alt="level 8">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Sevens Addition Quiz</p>
                    </div>
                </div>
                 <div class="quiz-item" @click="selected = 9" :class="{active:selected == 9}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view9.png" alt="level 9">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Eights Addition Quiz</p>
                    </div>
                </div>
                <div class="quiz-item" @click="selected = 10" :class="{active:selected == 10}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view10.png" alt="level 10">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Nines Addition Quiz</p>
                    </div>
                </div>
                 <div class="quiz-item" @click="selected = 11" :class="{active:selected == 11}">
                    <div class="quiz-item__view">
                        <img src="../../assets/Quiz/view11.png" alt="level 11">
                    </div>  
                    <div class="quiz-item__description">
                        <p>Tens Addition Quiz</p>
                    </div>
                </div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
                <div class="quiz-item hidden"></div>
            </div>
           <div class="quiz-start">
                <router-link :to="'/math/addition/quiz/zerogame'" class="quiz-start__btn">
                    Start
                </router-link>
           </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import LastHeader from '../../components/LastHeader'
import Footer from "../Footer.vue";
export default {
  name: 'QuizPage',
  components:{
      LastHeader,
        Footer
    },
    data: function(){
        return{
            selected: 1
        }
    },
    methods:{
    }
}
</script>

<style  lang="scss" scoped>
.quiz {
    .quiz-wrap {
        background: #FFFFFF;
        box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
        border-radius: 10px;
        padding: 40px;
        width: 80%;
        margin: 40px auto;
        @media screen and (max-width: 768px){
            padding: 0px;
            box-shadow: none;
        }
        @media screen and (max-width: 568px){
            width: 90%;
        }
    }
    .quiz-start{
        text-align: center;
        margin: 20px auto;
        &__btn{
            display: inline-block;
             font-weight: 300;
             font-size: 25px;
            line-height: 37px;
            color: #FFFFFF;
            background: #FF1616;
            border-radius: 10px;
            padding: 10px;
            width: 55%;
            &:hover{
                background: #e91414;
                transition: all 0.3s;
            }
            @media screen and (max-width: 768px){
                width: 100%;
            }
             @media screen and (max-width: 568px){
                 font-size: 18px;
                 padding: 6px;
             }
        }
    }
    .hidden {
        visibility: hidden;
        height: 0;
        padding: 0px !important;
        margin: 0px !important;
        @media screen and (max-width: 568px){
            border: none !important;
        }
    }
    .quiz-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
        @media screen and (max-width: 568px){
            justify-content: center;
            margin-bottom: 20px;
        }
		// .quiz-header__name

		&__name {
            font-weight: 600;
            font-size: 30px;
            line-height: 45px;
            color: #130F40;
            @media screen and (max-width: 568px){
                font-size: 20px;
            }
		}

		// .quiz-header__close

		&__close {
            cursor: pointer;
              @media screen and (max-width: 568px){
                 display: none;
             }
		}
        .header__logo{
             @media screen and (max-width: 568px){
                 display: none;
             }
        }
    }
    .quiz-levels {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        &::after {
            content: "";
            flex: auto;
        }
    }
    .quiz-item.active{
        border: 2px solid #FF1616;
        transition: all 0.3s;
    }
    .quiz-item {
            border: 2px solid transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 27px 32px;
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
            margin-bottom: 20px;
            width: 23%;
            cursor: pointer;
            transition: all 0.3s;
            @media screen and (max-width: 1560px){
                padding: 17px;
            }
             @media screen and (max-width: 1140px){
                 width: 30%;
             }
            @media screen and (max-width: 998px){
                width: 48%;
            }
            @media screen and (max-width: 768px){
                justify-content: center;
            }
            // .quiz-item__view

            &__view {
                margin-right: 15px;
            }

            // .quiz-item__description

            &__description {
                p{
                    font-size: 20px;
                    line-height: 30px;
                    color: #232323;
                    @media screen and (max-width: 568px){
                        font-size: 16px;
                        line-height: 23px;
                    }
                }
            }
    }

}

</style>