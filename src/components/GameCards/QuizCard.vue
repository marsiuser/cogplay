<template>
    <a href="#" class="game__card card-game">
        <div class="card-game__name">
            <h4>Quiz</h4>
        </div>
        <div class="card-game__preview card-game__quiz">
            <img src="../../assets/games/quiz.svg" alt="Quizes">
        </div>
    </a>
</template>

<script>

export default {
  name: 'QuizCard',
}
</script>

<style  lang="scss" scoped>
// .game__card

		.game__card {
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
        .card-game__quiz{
            max-width: 78px;
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
        .card-game__quiz{
            max-width: 78px;
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
       .card-game__preview{
            img{
                width: 100%;
                object-fit: cover;
            }
        }
		.card-game__name {
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
</style>