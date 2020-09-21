<template>
  <div class="pricinghd">
       <div class="_container"> 
            <nav class="menu__body">
                <ul class="menu__list">
                    <li><router-link :to="'/'" class="menu__link">Home</router-link></li>
                    <li><router-link :to="'/pricing'" href="#" class="menu__link menu__active">Pricing</router-link></li>
                    <li><a href="#" class="menu__button">Choose pricing plan </a></li>
                </ul>
            </nav>
       </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .pricinghd {
        background: #F6EF25;
        padding: 15px 0px;
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
                font-size: 14px;
            }
		}

		// .menu__list

		&__list {
            display: flex;
            justify-content: space-between;
            max-width: 350px;
            margin-left: auto;
            align-items: center;
             @media screen and (max-width: 568px){
                 justify-content: flex-end;
             }
		}

		// .menu__link

		&__link {
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

</style>