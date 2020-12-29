<template>
    <div class="game-brain__video video-brain">
        <div class="video-brain__wrap">
            <div class="video-brain__top">
                <div class="video-brain__logo">
                   <router-link :to="'/'" href="#"><img src="../../assets/logo_black.png" alt="logo"></router-link>
                </div>
                <div class="video-brain__name">
                    <h4>Brain Warrior Workout</h4>
                </div>
                <div class="video-brain__close">
                    <a href="#"><img src="../../assets/close-video.svg" alt="close"></a>
                </div>
            </div>
            <div class="video-brain__section" @mouseover="openControlls">
                <video  id="v-brain" @click="hidePlayBtn">
                    <source src="../../assets/video/videobrain.mp4" type="video/mp4">
                    <source src="../../assets/video/videobrain.mp4" type="video/webm">
                    <source src="video.ogv" type="video/ogg">
                    <object data="video.swf" type="application/x-shockwave-flash">
                        <param name="movie" value="video.swf">
                    </object>
                </video>
                <a class="video-brain__playbtn" v-bind:class="{ active: hide }" @click="playVideo"  href="#"><img src="../../assets/video/player.svg" alt="play"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BrainWarriorVideo',
  components:{
    },
    data: function(){
        return{
            hide:false,
        }
    },
    methods:{
        playVideo:function(){
            const vBrain = document.getElementById('v-brain');
            vBrain.play();
            this.hide = !this.hide;
        },
        openControlls:function(){
            const vBrain = document.getElementById('v-brain');
            vBrain.setAttribute("controls", "controls");
        },
        hidePlayBtn:function(){
            this.hide = !this.hide;
        }
    },
}
</script>

<style  lang="scss" scoped>
.game-brain {
		// .game-brain__video

		&__video {
            max-width: 1266px;
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(19, 15, 64, 0.4);
            border-radius: 10px;
            padding: 40px;
            margin: 40px auto 60px;
            @media screen and (max-width: 1560px){
                max-width: unset;
                width: 85%;
            }
            @media screen and (max-width: 1140px){
                height: calc(100vh - 325px);
            }
            @media screen and (max-width: 998px){
                padding: 15px;
                height: calc(100vh - 225px);
            }
		}
}
.video-brain {

		// .video-brain__wrap

		&__wrap {
		}

		// .video-brain__top

		&__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
		}

		// .video-brain__logo

		&__logo {
            @media screen and (max-width: 568px){
                max-width: 50px;
                height: auto;
                img{
                    width: 100%;
                    object-fit: cover;
                }
            }   
		}

		// .video-brain__name

		&__name {
            font-weight: 600;
            font-size: 30px;
            line-height: 45px;
            text-align: center;
            color: #130F40;
            @media screen and (max-width: 568px){
                font-size: 16px;
                line-height: 20px;
            }   
             @media screen and (max-width: 420px){
                 font-size: 12px;
             }
		}

		// .video-brain__close

		&__close {
               @media screen and (max-width: 568px){
                max-width: 18px;
                height: auto;
                img{
                    width: 100%;
                    object-fit: cover;
                }
            }   
		}
      
		// .video-brain__section

		&__section {
            position: relative;
            #v-brain{
                width: 100%;
                height: auto;
                max-height: 100%;
                 z-index: 1;
            }
             #v-brain:fullscreen {
              top: 100px !important;
            z-index: 1 !important;
            }
             #v-brain:fullscreen::backdrop{
                 top: 100px !important;
                 z-index: 1 !important;
             }
           .video-brain__playbtn.active{
                display: none;
            }
            .video-brain__playbtn{
                cursor: pointer;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                @media screen and (max-width: 568px){
                    max-width: 30px;
                    height: auto;
                    img{
                        width: 100%;
                        object-fit: cover;
                    }
                }   
            }
		}
}

</style>