<template>
    <div class="quiz">
        <div class="quiz-vh">
            <LastHeader />
            <div class="quiz-wrap">
                <div class="quiz-header">
                    <router-link :to="'/'" class="header__logo" href="#">
                        <img src="../../assets/logo_black.png" alt="logo">
                    </router-link>
                    <h2 class="quiz-header__name">Quiz</h2>
                    <div class="quiz-header__close">
                        <router-link :to="'/math/addition/quiz'">
                            <img src="../../assets/close-video.svg" alt="close">
                        </router-link>
                    </div>
                </div>
            <div class="quiz-sub">
                    <p class="quiz-subname">Zeros Addition Quiz </p>
            </div>
            <div v-if="(!isTimeOver) && (additionNumber < 21)" class="addition-zero">
                <div class="addition-zero__calc">
                    <div class="zero-calc">
                       <div class="zero-calc__wrap">
                            <p>{{zero}}</p>
                            <p><span>+</span> {{additionNumber}}</p>
                       </div>
                    </div>
                    <div class="addition-zero__result">
                        <input type="number" v-model="myResult" @change="calcAddition()">
                    </div>
                </div>
            </div>
            <div v-else class="quiz-timeOver">
                <p v-if="isTimeOver">Time is over !</p>
                <p v-else>Level passed!</p>
                <span>Your result: {{ary.length}}</span>
            </div>
            <div class="quiz-timer">
                <p>{{ time }}</p>
            </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import LastHeader from '../../components/LastHeader'
import Footer from "../Footer.vue";
import Vue from 'vue'
import moment from 'moment'
Vue.use(require('vue-moment'));
export default {
  name: 'QuizGameZero',
  components:{
      LastHeader,
      Footer
    },
    data: function(){
        return{
            zero:0,
            number:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            trueResultNumber:[],
            myResultNumber:[],
            myResult: undefined,
            date: moment(60 * 5 * 1000),
            isTimeOver: false,
            ary: undefined,
            additionNumber: 1
        }
    },
    methods:{
        calcAddition: function(){
            this.additionNumber++;
             this.trueResultNumber = this.number.map(function(el){
                 return el + 0;
            })
            console.log(this.trueResultNumber);
            this.myResultNumber.push(Number(this.myResult));
            console.log(this.myResultNumber);
            this.ary = new Array();
            var  arr1 = this.trueResultNumber;
            var arr2 = this.myResultNumber;
            for(var i=0; i< 20; ++i){
                if(arr1[i] == arr2[i]){
                    this.ary.push(arr1[i]); // значения элементов, которые совпали
                   // ary.push(i); // позиции, на которых совпадают элементы 
                }
            }
            console.log("Значения, которые совпадают" + this.ary);
            console.log("Количество совпадений: " + this.ary.length);
            this.myResult = '';
        }
    },
    computed:{
            time: function(){
            return this.date.format('mm:ss');
        }
    },
    mounted: function(){
        var timer = setInterval(() => {
        this.date = moment(this.date.subtract(1, 'seconds'));
            if(this.date.diff(moment(0)) === 0){
                clearInterval(timer);
                this.isTimeOver = true;
            }
        }, 1000);
    }
}
</script>

<style  lang="scss" scoped>
.quiz {
    .quiz-vh{
        height: calc(100vh - 157px);
        @media screen and (max-width: 1500px){
            height: unset;
        }
    }
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
        .quiz-timeOver{
            min-height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            p{   
                text-align: center;
                color: #FF1616;
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 20px;
            }
            span{
                font-size: 20px;
                color: #232323;
                line-height: 30px;
            }
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0; 
        }
        .quiz-timer{
           display: flex;
           justify-content: center;
            p{
                font-weight: bold;
                font-size: 25px;
                line-height: 37px;
                text-align: center;
                color: #FFFFFF;
                background: #5858FE;
                border-radius: 10px;
                padding: 10px 0px;
                width: 55%;
                 @media screen and (max-width: 1500px){
                     padding: 6px 0px;
                     font-size: 20px;
                 }
                @media screen and (max-width: 768px){
                    width: 100%;
                    padding: 4px 0px;
                    font-size: 16px;
                }
            }
        }
        .addition-zero {
                // .addition-zero__calc
                margin: 50px 0px;
                @media screen and (max-width: 1500px){
                    margin: 30px 0px;
                }
                &__calc {
                    p{
                        font-weight: 600;
                        font-size: 90px;
                        line-height: 100.9%;
                        text-align: right;
                        color: #130F40;
                        @media screen and (max-width: 1500px){
                            font-size: 60px;
                            line-height: 60px;
                        }
                    }
                }
                .zero-calc{
                    display: flex;
                    justify-content: center;
                    &__wrap{
                        border-bottom: 5px solid #130F40;
                    }
                }
                // .addition-zero__result

                &__result {
                    text-align:  center;
                    margin: 15px 0px;
                    input{
                        border: 1px solid #130F40;
                        box-sizing: border-box;
                        border-radius: 5px;
                        width: 90px;
                        height: 90px;
                        font-size: 60px;
                        text-align: center;
                        padding: 10px;
                        color: #130F40;
                        font-weight: 600;
                         @media screen and (max-width: 1500px){
                             font-size: 48px;
                         }
                    }
                    input.active{
                        background: red;
                    }
                }
        }
    }
   
        &-sub{
            display: flex;
            justify-content: center;
        }
        &-subname{
            font-size: 20px;
            line-height: 30px;
            color: #232323;
        }
    .quiz-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        position: relative;
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
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
}

</style>