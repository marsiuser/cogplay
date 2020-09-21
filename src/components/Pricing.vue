<template>  
    <div class="pricing">
        <PricingHeader />
        <div class="pricing_title-block">
            <div class="_container"> 
                <div class="pricing_title-block_wrapper">
                    <router-link :to="'/'" ><img src="../assets/Pricing/logo.png" alt="logo" class="logo"></router-link>
                    <h3 class="pricing_title">Find the perfect plan for you</h3>
                    <p class="pricing_subtitle">Simple pricing that works at any scale</p>
                </div>
            </div>
        </div>
        <div class="pricing_plan-block">
            <div class="_container">
                <div class="pricing_plan-block_wrapper">
                    <a href="#" class="pricing_card-item">
                        <!-- <img src="../assets/Pricing/parents.png" class="pricing_card-price" alt="parents-price"> -->
                        <div class="price-section">
                           <div class="price-section__top">
                               <p class="price-dolar">$</p>
                               <p class="price-amount">10</p>
                           </div>
                           <div class="price-section__button">
                               <p class="price-mounth">/month</p>
                               <p class="price-year">/year</p>
                           </div>
                        </div>
                        <p class="price_card-title">Parents</p>
                        <p class="price_card-subtitle">Parents with 1 child</p>
                        <button class="price_card-button">Become a member</button>
                    </a>
                    <a href="#" class="pricing_card-item">
                        <!-- <img src="../assets/Pricing/teachers.png" class="pricing_card-price" alt="teachers-price"> -->
                           <div class="price-section">
                           <div class="price-section__top">
                               <p class="price-dolar">$</p>
                               <p class="price-amount">30</p>
                           </div>
                           <div class="price-section__button">
                               <p class="price-mounth">/month</p>
                               <p class="price-year">/year</p>
                           </div>
                        </div>
                        <p class="price_card-title">Teachers</p>
                        <p class="price_card-subtitle">Teacher with 30 children</p>
                        <button class="price_card-button">Become a member</button>
                    </a>
                    <a href="#" class="pricing_card-item">
                        <!-- <img src="../assets/Pricing/schools.png" class="pricing_card-price" alt="schools-price"> -->
                           <div class="price-section">
                           <div class="price-section__top">
                               <p class="price-dolar">$</p>
                               <p class="price-amount">50</p>
                           </div>
                           <div class="price-section__button">
                               <p class="price-mounth">/month</p>
                               <p class="price-year">/year</p>
                           </div>
                        </div>
                        <p class="price_card-title">Schools</p>
                        <p class="price_card-subtitle">4 Teachers and 120 students</p>
                        <button class="price_card-button">Become a member</button>
                    </a>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
import PricingHeader from './PricingHeader.vue'
export default {
    components:{
        PricingHeader
    }
}
</script>

<style lang="scss" scoped>
.pricing{
    margin-bottom: -75px;
}
.pricing_title-block{
    background-color: #1312DD;
    min-height: 474px;
    @media screen and (max-width: 992px){
        min-height: 390px;
    }
     @media screen and (max-width: 568px){
        min-height: 450px;
    }
    ._container {
        max-width: 1266px;
        margin: 0 auto;
        .pricing_title-block_wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 38px;
            @media screen and (max-width: 568px){
                align-items: flex-start;
                padding-top: 80px;
            }
            .logo{
                width: 88px;
                height: 49px;
            }
            .pricing_title{
                font-weight: 400;
                font-size: 40px;
                line-height: 60px;
                color: #FFFFFF;
                 @media screen and (max-width: 568px){
                     font-size: 30px;
                     line-height: 45px;
                 }
            }
            .pricing_subtitle{
                font-weight: normal;
                font-size: 20px;
                line-height: 30px;
                color: #FFFFFF;
                @media screen and (max-width: 568px){
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        }
    }
}
.pricing_plan-block{
    transform: translateY(-135px);
     @media screen and (max-width: 1200px){
        ._container {
             width: 85%;
        }
     }
    @media screen and (max-width: 568px){
        ._container {
             width: 90%;
        }
    }
    .pricing_plan-block_wrapper{
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 568px){
            flex-direction: column;
        }
        .pricing_card-item{
            padding: 50px 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
            width: 32%;
            text-decoration: none;
            &:hover{
             box-shadow: 0px 2px 7px rgba(37, 31, 110, 0.4);
              transition: 0.3s;
            }
            @media screen and (max-width: 992px){
                padding: 30px 0px;
            }
            @media screen and (max-width: 568px){
                width: 100%;
                margin-bottom: 20px;
            }
            .pricing_card-price{
                max-width: 253px;
                height: auto;
            }
            .price_card-title{
                margin-top: 10px;
                font-weight: 600;
                font-size: 30px;
                line-height: 45px;
                text-align: center;
                color: #130F40;
                 @media screen and (max-width: 992px){
                     font-size: 20px;
                     line-height: 20px;
                 }
                @media screen and (max-width: 768px){
                    margin-top: 0px;
                }
            }
            .price_card-subtitle{
                font-weight: 300;
                font-size: 20px;
                line-height: 30px;
                text-align: center;
                color: #2C2C2C;
                margin-bottom: 20px;
                 @media screen and (max-width: 992px){
                     font-size: 12px;
                     line-height: 18px;
                 }
            }
            .price_card-button{
                padding: 11px 42px;                              
                background: #F6EF25;
                border-radius: 100px;
                font-weight: 300;
                font-size: 14px;
                line-height: 21px;
                color: #232323;
                border: none;
                cursor: pointer;
                outline: none;
                &:hover{
                     background: #fff827;
                     box-shadow: 0px 2px 7px rgba(37, 31, 110, 0.4);
                     transition: 0.3s;
                }
                @media screen and (max-width: 992px){
                    font-size: 12px;
                }
                  @media screen and (max-width: 768px){
                      padding: 11px 10px;
                      width: 90%;
                      margin: 0 auto;
                  }
                @media screen and (max-width: 568px){
                    width: 220px;
                }
            }
        }
    }
}

.price-section {
      background: url(/img/union.7f79ecea.svg) no-repeat;
        background-size: 255px;
        width: 100%;
        height: 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 0px;
         @media screen and (max-width: 992px){
             background-size: 210px;
         }
        @media screen and (max-width: 768px){
            background-size: 162px;
            padding: 30px 0px;
        }
        @media screen and (max-width: 568px){
            background-size: 265px;
            padding: 50px 0px;
        }
		// .price-section__top

		&__top {
            display: flex;
            align-items: flex-start;
            margin-right: 60px;
            @media screen and (max-width: 992px){
                margin-top: 10px;
            }
             @media screen and (max-width: 768px){
                 margin-right: 50px;
             }
            @media screen and (max-width: 568px){
                margin-right: 65px;
            }
		}

		// .price-section__button

		&__button {
            display: flex;
            flex-direction: column;
            margin-left: 100px;
            @media screen and (max-width: 992px){
                margin-top: -10px;
            }
            @media screen and (max-width: 768px){
                margin-left: 70px;
            }
            @media screen and (max-width: 568px){
                margin-left: 120px;
                margin-top: -20px;
            }
		}
}
.price-dolar {
    color: #FF1616;
    font-size: 25px;
    line-height: 37px;
    margin-right: 5px;
     @media screen and (max-width: 768px){
         font-size: 18px;
         line-height: 18px;
     }
      @media screen and (max-width: 568px){
          font-size: 25px;
          line-height: 37px;
      }
}

.price-amount {
    color: #FF1616;
    font-weight: 600;
    font-size: 70px;
    line-height: 70px;
    @media screen and (max-width: 992px){
         font-size: 60px;
         line-height: 60px;
     }
    @media screen and (max-width: 768px){
        font-size: 40px;
        line-height: 40px;
    }
    @media screen and (max-width: 568px){
        font-size: 90px;
        line-height: 90px;
    }
    @media screen and (max-width: 380px){
        font-size: 70px;
        line-height: 70px;
    }
}
.price-mounth {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #FF1616;
    margin-bottom: 5px;
     @media screen and (max-width: 992px){
         font-size: 14px;
     }
    @media screen and (max-width: 768px){
        margin-bottom: 0px;
        font-size: 12px;
        line-height: 18px;
    }
    @media screen and (max-width: 568px){
        font-size: 20px;
        line-height: 30px;
    }
}

.price-year {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #686868;
     @media screen and (max-width: 992px){
         font-size: 14px;
     }
    @media screen and (max-width: 768px){
        font-size: 12px;
        line-height: 18px;
    }
    @media screen and (max-width: 568px){
        font-size: 20px;
        line-height: 30px;
    }
}


</style>