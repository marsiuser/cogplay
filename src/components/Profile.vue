<template>
    <div class="profile">
        <LastHeader />
        <div class="profile-greeting">
            <div class="profile-logo">
                <img src="../assets/Profile/logo-greeting.svg" alt="logo">
            </div>
            <div class="profile-welcome">
                <h2>Hello Elena! Welcome to your profile</h2>
                <p>All test results will be sent to your email</p>
                <a href="#">Edit profile</a>
            </div>
        </div>
        <div class="_container">
            <div class="profile-thanks">
                <h3>Thanks for becoming a member!</h3>
                <a href="#">Change plan</a>
            </div>
            <div class="profile-program">
                <h4>Math program</h4>
                <div class="games">
                    <div class="games__container">
                        <div class="game">
                            <!-- <QuizCard /> -->
                            <MemoryCard />
                            <DirectionCharts />
                            <FigureCard />
                            <!-- <BrainVideo />
                            <SpellingActivityCard />
                            <NumberFamilies />
                            <RewardTracking />
                            <ReadingCard /> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

import LastHeader from './LastHeader.vue'
import Footer from "./Footer.vue";
import MemoryCard from './GameCards/MemoryCard.vue'
import DirectionCharts from './GameCards/DirectionCharts.vue'
import FigureCard from './GameCards/FigureCard.vue'

export default {
  name: 'Profile',
  components:{
        LastHeader,
        MemoryCard,
        DirectionCharts,
        FigureCard,
        Footer
    },
}
</script>

<style  lang="scss" scoped>
    .profile {
        ._container {
            max-width: 1266px;
            margin: 0 auto;
        }
        .profile-greeting {
            background: #1312DD;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 38px 0px 110px;
            @media screen and (max-width: 568px){
                text-align: left;
                align-items: flex-start;
                justify-content: flex-start;
            }
            .profile-welcome,
            .profile-logo{
                width: 90%;
                margin: 0 auto;
            }
            .profile-welcome {
                h2{
                    font-size: 40px;
                    line-height: 60px;
                    color: #FFFFFF;
                     @media screen and (max-width: 568px){
                        font-size: 30px;
                        line-height: 45px;
                    }
                }
                p{
                    font-size: 20px;
                    line-height: 30px;
                    color: #FFFFFF;
                    margin-bottom: 30px;
                     @media screen and (max-width: 568px){
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
                a{
                    display: inline-block;
                    background: #FFFFFF;
                    border-radius: 100px;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 24px;
                    color: #232323;
                    max-width: 300px;
                    width: 100%;
                    padding: 8px 0px;
                    &:hover{
                        background: #000;
                        color: #fff;
                        transition: 0.3s;
                    }
                    @media screen and (max-width: 568px){
                        font-size: 12px;
                        line-height: 18px;
                        text-align: center;
                    }
                }
            }
        }
        .profile-thanks{
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
            padding: 25px;
            text-align: center;
            margin: 30px 0px 70px;
              @media screen and (max-width: 568px){
                    margin: 30px 0px 40px;
                }
            h3{
                font-weight: 600;
                font-size: 30px;
                line-height: 45px;
                text-align: center;
                color: #130F40;
                margin-bottom: 30px;
                @media screen and (max-width: 568px){
                    font-size: 20px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }
            }
            a{
                display: inline-block;
                font-size: 14px;
                line-height: 21px;
                text-align: center;
                padding: 7px 10px;
                color: #232323;
                background: #F6EF25;
                border-radius: 100px;
                width: 50%;
                &:hover{
                    background: #fff71c;
                    transition: 0.3s;
                }
                @media screen and (max-width: 568px){
                    font-size: 12px;
                    width: 100%;
                }
            }
        }
        .profile-program{
            margin-bottom: 35px;
            h4{
                font-weight: 600;
                font-size: 30px;
                line-height: 45px;
                text-align: center;
                color: #130F40;
                margin-bottom: 20px;
                @media screen and (max-width: 568px){
                    font-size: 20px;
                    line-height: 28px;
                }
            }
        }
}

.game{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>