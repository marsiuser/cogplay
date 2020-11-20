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
              <div class="pricing_plan-block">
            <div class="_container">
                <div class="pricing_plan-block_wrapper">
                    <a href="#" class="pricing_card-item">
                        <div class="price-section">
                           <div class="price-section__header">
                               <h4>Parents</h4>
                               <p>Parents with 1 child</p>
                           </div>
                        </div>
                        <div class="price-plans">
                            <div class="price-plan">
                                <h6>Math</h6>
                                <div class="price-plan__cost">
                                    <a href="#"><span>$49</span>/month</a>
                                    <a href="#"><span>$299</span>/year</a>
                                </div>
                            </div>
                            <div class="price-plan">
                                <h6>Spelling Reading Comprehension</h6>
                                <div class="price-plan__cost">
                                    <a href="#"><span>$49</span>/month</a>
                                    <a href="#"><span>$299</span>/year</a>
                                </div>
                            </div>
                             <div class="price-plan">
                                <h6>Whole program</h6>
                                <div class="price-plan__cost">
                                    <a href="#"><span>$79</span>/month</a>
                                    <a href="#"><span>$499</span>/year</a>
                                </div>
                            </div>
                        </div>
                        <div class="price_card-button">
                                <vs-button @click="popupActivo=true" >Become a member</vs-button>
                                <vs-popup class="holamundo"  :active.sync="popupActivo">
                                    <div class="payment-header"></div>
                                    <div class="payment-body">
                                        <h5>Payment Info</h5>
                                        <form action="#" name="payment-form" id="payment" class="payment-form">
                                            <label for="card-number">Card Number</label>
                                            <input type="text" id="card-number">
                                            <div class="payment-wrapper">
                                                <div class="payment-input">
                                                     <label for="expiry-date">Expiry Date</label>
                                                      <input type="text" id="expiry-date">
                                                </div>
                                                <div class="payment-input">
                                                     <label for="secure-code">Secure Code</label>
                                                      <input type="text" id="secure-code">
                                                </div>
                                            </div>
                                             <label for="cardholder-name">Cardholder Name</label>
                                            <input type="text" id="cardholder-name">
                                        </form>
                                        <h5>Order Summary</h5>
                                        <div class="payment-summary">
                                            <div class="payment-summary__line">
                                                <h6>Plan</h6>
                                                <p>Parents with 1 child</p>
                                            </div>
                                            <div class="payment-summary__line">
                                                <h6>Program</h6>
                                                <p>Math</p>
                                            </div>
                                            <div class="payment-summary__line">
                                                <h6>Time</h6>
                                                <p>Month</p>
                                            </div>
                                             <div class="payment-summary__line payment-summary__total">
                                                <h6>Total</h6>
                                                <p>$49</p>
                                            </div>
                                        </div>
                                        <button class="payment-paybtn">Pay <span>$49</span> </button>
                                    </div>
                                </vs-popup>
                        </div>
                        <!-- <button class="price_card-button">Become a member</button> -->
                        <span class="price-section__more">By clicking Pay you agree with our <a href="#">Terms of Service and Privacy Policy</a>. Thank you for trusting our service</span>
                    </a>
                    <a href="#" class="pricing_card-item">
                        <div class="price-section">
                           <div class="price-section__header">
                               <h4>Teachers</h4>
                               <p>Teachers with 10 students</p>
                           </div>
                        </div>
                        <div class="price-plans">
                            <div class="price-plan">
                                <h6>Math</h6>
                                <div class="price-plan__cost">
                                    <a href="#"><span>$249</span>/month</a>
                                    <a href="#"><span>$1299</span>/year</a>
                                </div>
                            </div>
                            <div class="price-plan">
                                <h6>Spelling Reading Comprehension</h6>
                                <div class="price-plan__cost">
                                    <a href="#"><span>$249</span>/month</a>
                                    <a href="#"><span>$1299</span>/year</a>
                                </div>
                            </div>
                             <div class="price-plan">
                                <h6>Whole program</h6>
                                <div class="price-plan__cost">
                                    <a href="#"><span>$399</span>/month</a>
                                    <a href="#"><span>$1999</span>/year</a>
                                </div>
                            </div>
                        </div>
                        <button class="price_card-button">Become a member</button>
                        <span class="price-section__more">By clicking Pay you agree with our <a href="#">Terms of Service and Privacy Policy</a>. Thank you for trusting our service</span>
                    </a>
                </div>
            </div>
        </div> 
        </div>     
    </div>
</template>

<script>
import Vue from 'vue'
import PricingHeader from './PricingHeader.vue'
import {vsButton, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
export default {
    components:{
        PricingHeader
    },
    data(){
        return {
            popupActivo:false,
        }
    },
    methods(){
        
    }
}

Vue.use(vsPopup);
Vue.use(vsButton);
</script>


<style lang="scss" scoped>
.payment-body{
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px 0px 30px;
    h5{
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #130F40;
    }
    .payment-summary{
        margin: 0px 20px 10px;
        &__line{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            h6{
                font-weight: 300;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #2C2C2C;
            }
            p{
                font-size: 18px;
                line-height: 27px;
                text-align: center;
                color: #130F40;
            }
        }
        &__total{
            h6{
                font-size: 20px;
                line-height: 30px;
                text-align: center;
                color: #130F40;
            }
            p{
                font-weight: bold;
                font-size: 25px;
                line-height: 37px;
                text-align: center;
                color: #130F40;
            }
        }
    }
      .payment-paybtn{
           font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: 14px;
            line-height: 21px;
            text-align: center;
            color: #232323;
            background: #F6EF25;
            border-radius: 100px;
            border: none;
            padding: 10px;
            margin: 0px 20px 0px;
            cursor: pointer;
            span{
                font-weight: 600;
            }
            &:hover{
                    background: #fff71c;
                    transition: 0.3s;
            }
        }
    .payment-form{
        padding: 0px 0px 10px;
        margin: 0px 20px 10px;
        display: flex;
        flex-direction: column;
        text-align: left;
        border-bottom: 1px solid #130F40;
        .payment-wrapper{
            display: flex;
            justify-content: space-between;
            .payment-input{
                display: flex;
                flex-direction: column;
                width: 48%;
            }
        }
        input{
            border: 1px solid #130F40;
            padding: 12px 15px;
            border-radius: 10px;
            margin-bottom: 12px;
        }
        label{
            font-size: 16px;
            line-height: 24px;
            color: #232323;
            margin-bottom: 5px;
        }
    }
}
.vs-button-primary.vs-button-filled {
     background: transparent !important; 
     color: #000;
     padding: 0px;
     width: 100%;
     &:hover{
         box-shadow: none;
     }
}



.vs-popup--content {

.payment-header{
        background: url(../assets/Pricing/payment-header.png) no-repeat;
        background-size: cover;
        width: 100%;
        height: 180px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
}

.pricing{
    padding-bottom: 385px;
     @media screen and (max-width: 960px){
        padding-bottom: 885px;
    }
     @media screen and (max-width: 568px){
          padding-bottom: 585px;
     }
}
.pricing_title-block{
    background-color: #1312DD;
    min-height: 390px;
    position: relative;
    @media screen and (max-width: 992px){
        min-height: 390px;
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
                 @media screen and (max-width: 700px){
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
    position: absolute;
    top: 117%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
     @media screen and (max-width: 1200px){
         width: 90%;
        ._container {
             width: 85%;
        }
     }
    @media screen and (max-width: 960px){
        top: 0%;
        transform: translate(-50%, 25%);
    }
    @media screen and (max-width: 568px){
         transform: translate(-50%,40%);
    }
    .pricing_plan-block_wrapper{
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 960px){
            flex-direction: column;
        }
        @media screen and (max-width: 568px){
            flex-direction: column;
        }
           
            .pricing {

		// .pricing_card-item

		&_card-item {
            padding: 30px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
            width:49%;
            text-decoration: none;
            &:hover{
             box-shadow: 0px 2px 7px rgba(37, 31, 110, 0.4);
              transition: 0.3s;
            }
             @media screen and (max-width: 1440px){
                 width: 42%;
             }
             @media screen and (max-width: 960px){
                width: 90%;
                margin: 0px auto 20px;
            }
             @media screen and (max-width: 568px){
                 padding: 15px;
             }
		}
    }
        .price-section {
                margin-bottom: 15px;
                // .price-section__header

                &__header {
                    h4{
                        font-weight: 600;
                        font-size: 30px;
                        line-height: 45px;
                        text-align: center;
                        color: #130F40;
                          @media screen and (max-width: 568px){
                              font-size: 20px;
                              line-height: 30px;
                          }
                    }
                    p{
                        font-weight: 300;
                        font-size: 20px;
                        line-height: 30px;
                        text-align: center;
                        color: #2C2C2C;
                         @media screen and (max-width: 568px){
                             font-size: 14px;
                                line-height: 21px;
                          }
                    }
                }

                // .price-section__more

                &__more {
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 21px;
                    text-align: center;
                    letter-spacing: 0.07em;
                    color: #232323;
                    margin-top: 10px;
                    @media screen and (max-width: 568px){
                        font-size: 8px;
                        line-height: 12px;
                    }
                    a{
                        text-decoration: none;
                        color: rgb(102, 48, 248);
                        &:hover{
                            color: rgb(63, 24, 170);
                            transition: 0.3s;
                        }
                    }
                }
        }
        .price-plans {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 20px;
            .price-plan {
                background: #FFFFFF;
                box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
                border-radius: 10px;
                padding: 15px 10px;
                width: 30%;
                @media screen and (max-width: 568px){
                    width: 27%;
                    padding: 10px 7px 15px;
                }
                h6{
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    color: #232323;
                    min-height: 80px;
                     @media screen and (max-width: 568px){
                        font-size: 10px;
                        line-height: 15px;
                        min-height: 40px;
                    }
                }
                // .price-plan__cost

                &__cost {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    a > span{
                         font-weight: 600;
                    }
                    a{
                        display: inline-block;
                        width: 90%;
                        text-align: center;
                        border: 2px solid #F6EF25;
                        border-radius: 50px;
                        padding: 5px;
                        text-decoration: none;
                        font-size: 16px;
                        line-height: 24px;
                        color: #232323;
                        margin-bottom: 10px;
                        &:hover{
                            background-color: #F6EF25;
                            transition: 0.3s;
                        }
                          @media screen and (max-width: 568px){
                            font-size: 10px;
                            line-height: 15px;
                            padding: 3px;
                            margin: 5px 0px 0px;
                            width: 96%;
                        }
                    }
                }
            }
        }
        
        .price {

                // .price_card-button

                &_card-button {
                    background: #F6EF25;
                    border-radius: 100px;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 21px;
                    text-align: center;
                    color: #232323;
                    padding: 10px;
                    border: none;
                    width: 100%;
                    outline: none;
                    cursor: pointer;
                    &:hover{
                        background: #fff71c;
                        transition: 0.3s;
                    }
                    @media screen and (max-width: 568px){
                        font-size: 12px;
                        line-height: 18px;
                        padding: 8px;
                    }
                }


            @media screen and (max-width: 992px){
                padding: 30px 0px;
            }
            @media screen and (max-width: 568px){
                width: 100%;
                margin-bottom: 20px;
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

 @media screen and (max-width: 1440px){
     .pricing_plan-block ._container{
        width: 100%;
    }
 }
</style>