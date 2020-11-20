<template>
  <div class="games">
    <div class="games__container _container">
        <h2 class="games__choose">Activities in the Units</h2>
        <div class="game">
            <a href="#" class="game__card card-game">
                <div class="card-game__name">
                    <h4>Quiz</h4>
                </div>
                <div class="card-game__preview card-game__quiz">
                    <img src="../assets/games/quiz.svg" alt="Quizes">
                </div>
            </a>
            <a href="#" class="game__card card-game">
                <div class="card-game__name yellow-bg">
                    <h4>Reading Comprehension</h4>
                </div>
                 <div class="card-game__preview reading-comprehension">
                    <!-- <img src="../assets/games/reading-comprehension.png" alt="Quizes"> -->
                </div>
            </a>
            <a href="#" class="game__card card-game">
                <div class="card-game__name">
                    <h4>Direction Charts</h4>
                </div>
                <div class="card-game__preview direction-charts">
                    <img src="../assets/games/direction-charts.png" alt="Direction Charts">
                </div>
            </a>
             <a href="#" class="game__card card-game">
                <div class="card-game__name">
                    <h4>Colour Coded Memory Math Cards</h4>
                </div>
                 <div class="card-game__preview memory-math">
                    <img src="../assets/games/memory-math.png" alt="Colour Coded Memory Math Cards">
                </div>
            </a>
            <a href="#" class="game__card card-game">
                <div class="card-game__name green-bg">
                    <h4>Reward Tracking</h4>
                </div>
                  <div class="card-game__preview reward-tracking">
                    
                </div>
            </a>
            <a href="#" class="game__card card-game">
                <div class="card-game__name">
                    <h4>Number Families</h4>
                </div>
                <div class="card-game__preview number-families">
                     <img src="../assets/games/number-families.png" alt="Number Families">
                </div>
            </a>
            <a href="#" class="game__card card-game">
                <div class="card-game__name">
                    <h4>Spelling Activity</h4>
                    <div class="card-game__preview spelling-activity">
                        <img src="../assets/games/spelling-activity.png" alt="Spelling Activity">
                    </div>
                </div>
            </a>
              <a href="#" class="game__card card-game">
                <div class="brain-warrior">
                    <div class="card-game__name">
                        <h4>Brain Warrior Video</h4>
                    </div>
                </div>
            </a>
            <a href="#" class="game__card card-game">
                <div class="card-game__name">
                    <h4>Figure 8</h4>
                    <div class="card-game__preview figure">
                        <img src="../assets/games/figure.png" alt="figure 8">
                    </div>
                </div>
            </a>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainChooseGame',
}
</script>

<style  lang="scss" scoped>
    .games {
        padding: 475px 0px 80px;
        text-align: center;
        @media screen and (max-width: 1140px){
            padding-top: 290px;
        }
        @media screen and (max-width: 568px){
            padding-top: 30px;
        }
		// .games__container

		&__container {
		}

		// .games__choose

		&__choose {
            font-weight: 600;
            font-size: 30px;
            line-height: 45px;
            color: #130F40;
            @media screen and (max-width: 1440px){
                 font-size: 24px;
            }
              @media screen and (max-width: 1140px){
                  font-size: 20px;
                  line-height: 30px;
              }
		}
}
.game {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 19px;
        @media screen and (max-width: 1140px){
          margin-top: 10px;   
        }
        a{
            text-decoration: none;
        }
		// .game__card

		&__card {
            width: 32%;
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
            margin-bottom: 19px;
            transition: 0.3s;
            &:hover{
                  box-shadow: 0px 2px 7px rgba(37, 31, 110, 0.4);
                  transition: 0.3s;
            }
            @media screen and (max-width: 1140px){
                width: 48%;
            }
            @media screen and (max-width: 998px){
                height: 160px;
            }
            @media screen and (max-width: 568px){
                width: 100%;
                height: 200px;
            }
		}
}
.brain-warrior{
    background: url(../assets/games/brain-warrior.png) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
}

.card-game {
        .memory-math{
            max-width: 58%;
            margin-bottom: 12px;
              @media screen and (max-width: 998px){
                 max-width: 40%;
            }
             @media screen and (max-width: 568px){
                width: 150px;
                max-width: unset;
                margin-top: 10px;
            }
        }
        .spelling-activity{
            max-width: 58%;
            margin-bottom: 10px;
            @media screen and (max-width: 998px){
                 max-width: 22%;
                 margin-top: 5px;
            }
              @media screen and (max-width: 568px){
                 max-width: unset;
                 width: 80px;
                 margin-top: 10px;
            }
        }
        .number-families{
            max-width: 56%;
              @media screen and (max-width: 998px){
                 max-width: 40%;
            }
            @media screen and (max-width: 568px){
                 max-width: unset;
                 width: 160px;
                 margin-top: 10px;
            }
        }
        .figure{
            max-width: 58%;
              @media screen and (max-width: 998px){
                 max-width: 15%;
            }
              @media screen and (max-width: 568px){
                 max-width: unset;
                 width: 55px;
                 margin-top: 10px;
            }
        }
        .direction-charts{
            @media screen and (max-width: 998px){
                width: 85%;
            }
            @media screen and (max-width: 568px){
                width: 250px;
                margin-top: 10px;
            }
        }
        .reward-tracking{
            background: url(../assets/games/reward-tracking.png) no-repeat;
            background-size: cover;
            width: 100%;
            height: 100%;
            max-height: 182px;
             @media screen and (max-width: 1140px){
                 max-height: 150px;
             }
            @media screen and (max-width: 998px){
                 max-height: 73%;
            }
            @media screen and (max-width: 568px){
                 max-height: 79%;
            }
        }
        .reading-comprehension{
            background: url(../assets/games/reading-comprehension.png) no-repeat;
            background-size: cover;
            width: 100%;
            height: 100%;
            max-height: 182px;
             @media screen and (max-width: 1140px){
                 max-height: 172px;
             }
            @media screen and (max-width: 998px){
                 max-height: 73%;
            }
             @media screen and (max-width: 568px){
                 max-height: 79%;
            }
        }
        //  card-game__preview

        &__preview{
            margin: 0 auto;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            img{
                width: 100%;
                object-fit: cover;
            }
        }

        //  card-game__quiz
         &__quiz{
            max-width:78px;
            margin: 13px auto 30px;
            @media screen and (max-width: 1140px){
                max-width: 20%;
            }
              @media screen and (max-width: 998px){
                 max-width: 12%;
            }
            @media screen and (max-width: 568px){
               width: 65px;
                max-width: unset;
            }
        }
        .yellow-bg{
            background: #F6EF25;
        }
        .green-bg{
            background: #14ED09;
        }
		// .card-game__name

		&__name {
            padding: 20px 10px 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            @media screen and (max-width: 1140px){
                // min-height: 147px;
            }
            @media screen and (max-width: 568px){
                // min-height: 180px;
            }
            @media screen and (max-width: 360px){
                // min-height: 140px;
            }
            h4{
                font-size: 20px;
                line-height: 30px;
                text-align: center;
                color: #232323;
                 @media screen and (max-width: 992px){
                     font-size: 16px;
                     line-height: 18px;
                 }
            }
		}
}



</style>