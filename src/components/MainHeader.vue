<template>
  <div class="header">
      <div class="header__container _container">
        <div class="header__menu menu">
            <a class="header__logo" href="#"><img src="../assets/logo.svg" alt="logo"></a>
            <nav class="menu__body">
                <ul class="menu__list">
                    <li><router-link :to="'/'" class="menu__link menu__active">Home</router-link></li>
                    <li><router-link :to="'/pricing'" href="#" class="menu__link">Pricing</router-link></li>
                    <li><a href="#" class="menu__button">Choose pricing plan </a></li>
                </ul>
            </nav>
        </div>
        <div class="header__note">
            <h1 class="main-note">Full body. Full brain. Fun</h1>
            <p>Increase focus optimize memory grow self-confidence</p>
        </div>
      </div>
    <div class="courses">
        <div class="courses__container _container">
            <div class="course">
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course1.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Neuroplaticity of the brain</h4>
                        <p>Research has shown over and over “name” produces real results</p>
                    </div>
                </div>
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course2.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Eye tracking and focus</h4>
                        <p>Read our case studies to see how “name” drives success in classrooms nationwide </p>
                    </div>
                </div>
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course3.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Teaching strategies </h4>
                        <p>The Elite 100 share why they turn to “name” to help their students grow</p>
                    </div>
                </div>
                <div class="course__card card-course">
                    <div class="card-course__img">
                        <img src="../assets/courses/course4.png" alt="Neuroplaticity of the brain">
                    </div>
                    <div class="card-course__about">
                        <h4>Full body full brain movement</h4>
                        <p>Walk into the classroom every dau, and understand exactly what students know and precisely what to do next to help them improve</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style  lang="scss" scoped>

// ************************* HEADER SECTION ***************************

  .header {
        background: url(../assets/bg.png) no-repeat;
        background-size: cover;
        position: relative;
         @media screen and (max-width: 1200px){
             background-position: 47% 0%;
         }
		// .header__container

		&__container {
            padding-bottom: 163px;
            color: #fff;
             @media screen and (max-width: 1200px){
                 padding-bottom: 87px;
             }
		}

		// .header__menu

		&__menu {
            display: flex;
            justify-content: space-between;
            padding: 19px 0px;
             @media screen and (max-width: 1200px){
                 padding: 10px 0px;
             }

		}

		// .header__logo

		&__logo {
            img{
                 @media screen and (max-width: 1200px){
                    width: 55px;
                }
            }
           
		}

		// .header__note

		&__note {
            padding-top: 40px;
            max-width: 700px;
            @media screen and (max-width: 1440px){
                max-width: 500px;
            }
            @media screen and (max-width: 1200px){
                padding-top: 28px;
                max-width: 400px;
            }
            @media screen and (max-width: 568px){
                padding: 120px 0px 90px;
            }
            p{
                font-size: 22px;
                line-height: 32px;
                max-width: 474px;
                @media screen and (max-width: 1440px){
                    font-size: 18px;
                    max-width: 374px;
                    line-height: 28px;
                }
                @media screen and (max-width: 1200px){
                    font-size: 16px;
                    line-height: 19px;
                    max-width: 311px;
                }
            }
		}
}

.menu {

		// .menu__body

		&__body {
            padding: 5px 0px;
		}

		// .menu__list

		&__list {
            display: flex;
            align-items: center;
             a{
                text-decoration: none;
            }
		}

		// .menu__link

		&__link {
            font-size: 20px;
            margin: 0px 26px;
            line-height: 30px;
            color: #fff;
            &:hover{
                color: #f9ca24;
            }
             @media screen and (max-width: 1440px){
                 font-size: 16px;
                 margin: 0px 16px;
             }
            @media screen and (max-width: 1200px){
                font-size: 14px;
                margin: 0px 14px;
                line-height: 21px;
                color: #fff;
            }
		}

        //.menu__active
        &__active{
            font-weight: 600;
        }
		// .menu__button

		&__button {
            color: #242260;
            background: #FFFFFF;
            border-radius: 100px;
            padding: 10px 36px;
            font-size: 14px;
            margin-left: 22px;
            transition: 0.3s ease;
            &:hover{
                background-color: #242260;
                color: #FFFFFF;
                transition: 0.3s ease;
            }
             @media screen and (max-width: 1440px){
                 font-size: 12px;
                  margin-left: 18px;
                  padding: 8px 28px;
             }
             @media screen and (max-width: 1200px){
                 font-size: 8px;
                 line-height: 12px;
                 padding: 6px 24px;
             }
              @media screen and (max-width: 568px){
                  display: none;
              }
		}
}
.main-note {
    font-weight: 600;
    font-size: 122px;
    line-height: 97.5%;
    color: #FFFFFF;
    letter-spacing: -2px;
    @media screen and (max-width: 1440px){
        font-size: 90px;
    }
    @media screen and (max-width: 1200px){
        font-size: 70px;
    }
     @media screen and (max-width: 360px){
         font-size: 50px;
     }
}

// *********************** HEADER SECTION END *************************

// COURSES SECTION

.courses {
        position: absolute;
        left: 50%;
        bottom: 0px;
        width: 100%;
        transform: translate(-50%, 83%);
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        @media screen and (max-width: 1140px){
            transform: translate(-50%, 76%);
        }
        @media screen and (max-width: 568px){
            display: none;
        }
		// .courses__container
         @media screen and (max-width: 768px){
            &__container {
                width: 90% !important;
            }
         }
}
.course {
        display: flex;
        justify-content: space-between;
		// .course__card

		&__card {
            width: 23%;
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
		}
}
.card-course {

		// .card-course__img

		&__img {
            img{
                object-fit: cover;
                width: 100%;
            }
		}

		// .card-course__about

		&__about {
            padding:32px 15px 15px;
            @media screen and (max-width: 1140px){
                padding: 4px 10px 15px;
            }
            h4{
                font-weight: 600;
                font-size: 22px;
                line-height: 33px;
                text-align: center;
                color: #130F40;
                max-width: 220px;
                margin: 0 auto;
                  @media screen and (max-width: 1440px){
                      font-size: 18px;
                      line-height: 24px;
                  }
                  @media screen and (max-width: 1140px){
                      font-size: 14px;
                      line-height: 21px;
                  }
            }
            p{
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #232323;
                margin-top: 10px;
                 @media screen and (max-width: 1440px){
                    font-size: 12px;
                    line-height: 20px;
                 }
                  @media screen and (max-width: 1140px){
                      font-size: 9px;
                      line-height: 13px;
                  }
            }
		}
}

// ************************  COURSES SECTION END ***************************



</style>
