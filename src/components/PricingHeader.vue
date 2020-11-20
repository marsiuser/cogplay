<template>
  <div class="pricinghd">
       <div class="_container"> 
            <nav class="menu__body">
                <ul class="menu__list">
                    <li><router-link :to="'/'" class="menu__link">Home</router-link></li>
                    <li><router-link :to="'/pricing'" href="#" class="menu__link menu__active">Pricing</router-link></li>
                    <li><router-link :to="'/pricing'" href="#" class="menu__link">Log in / <span> Sign up</span> <img src="../assets/profile-header.svg" alt="sign up"></router-link></li>
                </ul>
                 <div class="header-burger">
                     <template>
                        <Slide right>
                            <a class="header__logo" href="#">
                                <img src="../assets/logo_black.png" alt="logo">
                            </a>
                            <a id="home" class="header-burger__active" href="#">
                                <span>Home</span>
                            </a>
                            <a id="pricing" href="#">
                                <span>Pricing</span>
                            </a>
                            <a id="pricing" href="#">
                                <span>Profile</span>
                            </a>
                        </Slide>
                    </template>
                </div>
            </nav>
       </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu' 
export default {
   components: {
        Slide 
    }
}
</script>

<style lang="scss" scoped>
    .pricinghd {
        background: #F6EF25;
        padding: 15px 0px;
        @media screen and (max-width: 568px){
            padding: 30px 0px;
        }
		// ._container
		&_container {
		}
}
.menu {
		// .menu__body

		&__body {
             a{
                color: #000;
                text-decoration: none;
                font-size: 20px;
                @media screen and (max-width: 1560px){
                    font-size: 16px;
                }
                img{
                      @media screen and (max-width: 1560px){
                        width: 35px;
                    }
                }
            }
		}

		// .menu__list

		&__list {
            display: flex;
            justify-content: space-between;
            max-width: 450px;
            margin-left: auto;
            align-items: center;
            @media screen and (max-width: 1560px){
                max-width: 380px;
            }
             @media screen and (max-width: 568px){
                 justify-content: flex-end;
             }
		}

		// .menu__link

		&__link {
            display: flex;
            align-items: center;
            span{
                color: red;
            }
            img{
                margin-left: 20px;
            }
             @media screen and (max-width: 568px){
                 margin-left: 40px;
             }
		}

		// .menu__active

		&__active {
            font-weight: 700;
		}

		// .menu__button

		&__button {
            background: #FFFFFF;
            border-radius: 100px;
            padding: 10px 24px;
            font-size: 8px !important;
            display: block;
            &:hover{
                background-color:#1312DD;
                color: #fff;
                transition: 0.3s;
            }
            @media screen and (max-width: 568px){
                display: none;
            }
		}
}

@media screen and (max-width: 568px){
    .menu__list{
        display: none;
    }
}

</style>