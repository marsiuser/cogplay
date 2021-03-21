<template>
    <div class="quiz">
        <div class="quiz-vh">
            <LastHeader />
            <div class="quiz-wrap" v-bind:class="{ active: isDone }">
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
            <div v-if="(!isTimeOver) && next <=20" class="addition-zero">
                <div class="addition-zero__calc">
                    <div class="zero-calc">
                       <div class="zero-calc__wrap" v-bind:class="{ reverse: isReverse }">
                            <p>{{six}}</p>
                            <div class="zero-calc__int">
                                <span>+</span>
                                <p id="currentNumber"></p>
                           </div>
                       </div>
                    </div>
                    <div class="addition-zero__result">
                        <input type="number" v-model="myResult" @change="calcAddition()">
                    </div>
                </div>
            </div>
            <div v-else class="quiz-timeOver">
                <div v-if="isTimeOver" class="over-time">
                     <p>Time is over !</p>
                    <span>Your result is <b>{{ time }}</b> </span>
                    <p >You don't finished the quiz</p>
                    <div class="quiz-allien">
                        <img class="quiz-allien__map" src="../../assets/picres.png" alt="result">
                        <img class="" src="../../assets/allien-red.png" alt="allien">
                    </div>
                      <router-link :to="'/math/addition/quiz'" class="goto">
                        Try again
                      </router-link>
                </div>
                <div v-else class="done-result">
                    <span>Your result: {{ary.length}} </span>
                    <span>Your result is <b>{{ time }}</b> </span>
                    <p >Good job! You finished the quiz! Watch your alien move towards the finish line!</p>
                     <div class="quiz-allien">
                        <img @click="allienMove()" class="quiz-allien__map" src="../../assets/picres.png" alt="result">
                        <img class="quiz-allien__single" id="allien" src="../../assets/allien-red.png" alt="allien">
                        <img v-bind:class="{ close: isClick }" class="quiz-allien__tap" src="../../assets/tap.svg" alt="click tap">
                    </div>
                    <a class="goto" href="#">Go to Figure 8 Activity</a>
                </div>
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
  name: 'QuizGameSix',
  components:{
      LastHeader,
      Footer
    },
    data: function(){
        return{
            six:6,
            trueResultNumber:[],
            myResultNumber:[],
            myResult: undefined,
            date: moment(60 * 5 * 1000),
            isTimeOver: false,
            ary: undefined,
            additionNumber: 1, 
            randomArr:[],
            p:'',
            next:1,
            passed: false,
            isDone:false,
            isReverse:false,
            isClick:false
        }
    },
    methods:{
        calcAddition: function(){
            // console.log(this.next);
            this.putRandomNumber();
            this.myResultNumber.push(Number(this.myResult));
            this.ary = new Array();
            var  arr1 = this.trueResultNumber;
            var arr2 = this.myResultNumber;
            for(var i=0; i< 20; ++i){
                if(arr1[i] == arr2[i]){
                    this.ary.push(arr1[i]); // значения элементов, которые совпали
                   // ary.push(i); // позиции, на которых совпадают элементы 
                }
            }
            // console.log("Значения, которые совпадают" + this.ary);
            // console.log("Количество совпадений: " + this.ary.length);
            this.myResult = '';
        },
        putRandomNumber:function(){
              this.p.innerHTML = this.randomArr[this.next++];
              this.next = this.next % 22;
            if( this.next % 2 == 0){
                this.isReverse = true;
                // this.p.innerHTML = this.randomArr[this.next];
            }
            else{
                this.isReverse = false;
              
            } 
        },
        shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
        },
        allienMove:function(){
            this.isClick = true;
            let allien = document.getElementById("allien");
            if ( this.ary.length <=1 ){
                allien.classList.add("move-null");
            }
             if ( this.ary.length >= 2 &&  this.ary.length <=9 ){
                allien.classList.add("move");
            }
            if (this.ary.length >= 10 &&  this.ary.length <=14 ){
                allien.classList.add("move-normal");
            }
              else if (this.ary.length >= 15 && this.ary.length <= 16){
                allien.classList.add("move-good");
            }
              else if (this.ary.length >= 17 && this.ary.length <= 20){
                allien.classList.add("move-exellent");
            }
            else{
                return allien;
            }
        }
    },
    computed:{
        time: function(){
            return this.date.format('mm:ss');
        },
    },
    mounted: function(){
        var timer = setInterval(() => {
        this.date = moment(this.date.subtract(1, 'seconds'));
            if(this.date.diff(moment(0)) === 0){
                clearInterval(timer);
                this.isTimeOver = true;
                this.isDone= true;
            }
            if(this.next == 21){
                clearInterval(timer);
                this.passed = true;
                this.isDone= true;
            }
        }, 1000);
        for (var i = 0; i < 20; i++){
            this.randomArr.push(i);
        }
       this.shuffle(this.randomArr);

        // console.log(this.randomArr);

        this.additionNumber++;
        this.trueResultNumber = this.randomArr;
        this.trueResultNumber = this.trueResultNumber.map(function(el){
                return el + 6;
        })
        // console.log(this.trueResultNumber);
        this.p = document.getElementById('currentNumber');
        this.p.innerHTML = this.randomArr[0];
       
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
    .quiz-wrap.active{
        background: url(../../assets/bg-result.png) no-repeat;
        background-size: cover;
        .quiz-subname{
            display: none;
        }
        .quiz-timer{
            display: none;
        }
        .goto{
              background: #1312DD;
                border-radius: 10px;
                display: inline-block;
                font-weight: 300;
                font-size: 25px;
                line-height: 37px;
                text-align: center;
                color: #FFFFFF;
                margin-top: 30px;
                padding: 10px 30px;
                width: 74%;
                 @media screen and (max-width:568px){
                     font-size: 18px;
                     padding: 6px 10px;
                     margin-bottom: 30px;
                 }
                &:hover{
                    background: #2626f5;
                    transition: all 0.3s;
                }
        }
        .quiz-header__name{
              @media screen and (max-width: 568px){
                transform: translate(-50%, 0%);
            }
        }
        .done-result,
        .over-time{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                font-size: 30px;
                line-height: 45px;
                color: #FFFFFF;
                margin-bottom: 30px;
                @media screen and (max-width:568px){
                    font-size: 20px;
                    margin: 15px 0px;
                }
                b{
                    font-weight: 600;
                }
            }
        }
    }
    .quiz-allien__tap.close{
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s;
    }
    .quiz-allien{
        position: relative;
        cursor: pointer;
        &__tap{
            visibility: visible;
            opacity: 1;
            position: absolute;
            bottom: 5px;
            right: -15px;
            width: 60px;
            transition: all 0.3s;
        }
        &__map{
            width: 100%;
            margin: 20px auto;
        }
        &__single{
            position: absolute;
            top: 15%;
            left: 0%;
        }
    }
    #allien{
        transition: all 0.9s;
    }
    #allien.move-null{
         position: absolute;
        top: 15%;
        left: 0%;
    }
    #allien.move{
        top: 46%;
        left: -7%;
        transition: all 0.9s;
    }
     #allien.move-normal{    
        left: 10%;
        top: 48%;
    }
     #allien.move-good{
        left: 12%;
        top: 50%;
        transform: scale(1.2);
    }
    #allien.move-exellent{
        left: 23%;
        top: 28%;
        transform: scale(1.2);
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
                color: #fff;
                font-weight: normal;
                font-size: 20px;
                line-height: 30px;
                text-align: center;
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
                        position: relative;
                    }
                    .reverse{
                        display: flex;
                        flex-direction: column-reverse;
                    }
                    .zero-calc__int{
                        display: flex;
                        span{
                           font-weight: 600;
                            font-size: 90px;
                            line-height: 100.9%;
                            text-align: right;
                            color: #130F40;
                            position: absolute;
                            bottom: 0px;
                            left: -62px;
                            @media screen and (max-width: 1500px){
                                font-size: 60px;
                                line-height: 60px;
                            }
                        }
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