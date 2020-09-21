<template>
    <footer class="footer">
        <div class="footer_main">
            <div class="_container">
                <div class="footer_main-wrapper">
                    <router-link :to="'/'"><img src="../assets/Pricing/logo.png" class="logo" alt="logo"></router-link>
                    <nav>
                        <ul class="footer_navigation">
                            <li class="footer_navigation-item">
                                <router-link :to="'/'">Home</router-link>
                            </li>
                            <li class="footer_navigation-item">
                                <router-link :to="'/pricing'">Pricing</router-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="footer_social">
                        <a href="#"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 4.51562C17.4219 6.20833 16.224 8.53906 13.9062 11.5078C11.5365 14.6068 9.53125 16.1432 7.89062 16.1172C6.875 16.1172 6.0026 15.1797 5.27344 13.3047L4.72656 11.1953C4.1276 8.95573 3.69792 7.51042 3.4375 6.85938C3.04688 5.81771 2.63021 5.29688 2.1875 5.29688C2.05729 5.29688 1.60156 5.57031 0.820312 6.11719L0 5.0625L1.13281 4.04688C2.17448 3.10938 2.91667 2.47135 3.35938 2.13281C4.11458 1.5599 4.71354 1.26042 5.15625 1.23438C6.51042 1.10417 7.34375 2.02865 7.65625 4.00781C8.07292 6.53385 8.41146 8.2526 8.67188 9.16406C8.95833 10.2318 9.29688 10.7396 9.6875 10.6875C10.0781 10.6354 10.625 10.0625 11.3281 8.96875C12.0573 7.79688 12.4479 6.91146 12.5 6.3125C12.5781 5.50521 12.3177 5.02344 11.7188 4.86719C11.25 4.73698 10.6901 4.8151 10.0391 5.10156C10.8984 2.28906 12.5391 0.921875 14.9609 1C16.7578 1.05208 17.6042 2.22396 17.5 4.51562Z" fill="white"/>
                        </svg></a>
                        <a href="#"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.4844 2.34375C21.3542 1.875 21.1198 1.47135 20.7812 1.13281C20.4427 0.794271 20.0391 0.559896 19.5703 0.429688C18.8932 0.247396 17.3047 0.117188 14.8047 0.0390625L11.25 0L7.69531 0.0390625C5.19531 0.117188 3.60677 0.247396 2.92969 0.429688C2.46094 0.559896 2.05729 0.794271 1.71875 1.13281C1.38021 1.47135 1.14583 1.875 1.01562 2.34375C0.833333 3.04688 0.703125 4.11458 0.625 5.54688C0.598958 6.27604 0.585938 6.92708 0.585938 7.5L0.625 9.45312C0.703125 10.9115 0.833333 11.9922 1.01562 12.6953C1.14583 13.138 1.38021 13.5286 1.71875 13.8672C2.05729 14.2057 2.46094 14.4401 2.92969 14.5703C3.60677 14.7526 5.19531 14.8828 7.69531 14.9609L11.25 15L14.8047 14.9609C17.3047 14.8828 18.8932 14.7526 19.5703 14.5703C20.0391 14.4401 20.4427 14.2057 20.7812 13.8672C21.1198 13.5286 21.3542 13.138 21.4844 12.6953C21.6667 11.9922 21.7969 10.9115 21.875 9.45312L21.9141 7.5L21.875 5.54688C21.7969 4.11458 21.6667 3.04688 21.4844 2.34375ZM9.0625 10.7031V4.33594L14.6484 7.5L9.0625 10.7031Z" fill="white"/>
                        </svg></a>
                        <a href="#"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.00781 20.5V11.5547H0V8H3.00781V5.1875C3.00781 3.70312 3.42448 2.55729 4.25781 1.75C5.09115 0.916667 6.19792 0.5 7.57812 0.5C8.69792 0.5 9.60938 0.552083 10.3125 0.65625V3.82031H8.4375C7.73438 3.82031 7.2526 3.97656 6.99219 4.28906C6.78385 4.54948 6.67969 4.96615 6.67969 5.53906V8H10L9.53125 11.5547H6.67969V20.5H3.00781Z" fill="white"/>
                        </svg></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="_container">
                <p class="copyright_label">Copyright © 2020 Cogplay. All right reserved.</p>
            </div>
        </div>
    </footer>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer_main{
    background: #02001C;
    .footer_main-wrapper{
        min-height: 109px;
        display: flex;
        justify-content: space-between;
        align-items: center;
         @media screen and (max-width: 568px){
             flex-direction: column;
             padding: 25px 0px;
         }
        .logo{
            width: 88px;
            height: 49px;
            @media screen and (max-width: 568px){
                width: 55px;
                height: 31px;
            }
        }
        .footer_navigation,
        .footer_social{
            display: flex;
            align-items: center;
        }
        .footer_navigation-item a{
            font-weight: 300;
            font-size: 20px;
            line-height: 30px;
            color: #FFFFFF;
            text-decoration: none;
            &:hover{
                color:#f9ca24;
                transition: 0.3s;
            }
            @media screen and (max-width: 992px){
                font-size: 16px;
            }
        }
        svg{
           path:hover{
                fill: #f9ca24;
                transition: 0.3s;
            }
        }
        .footer_navigation-item:first-child{
            margin-right: 51px;
             @media screen and (max-width: 568px){
                 margin-right: 30px;
             }
        }
        .footer_social a{
            margin-right: 20px;
            cursor: pointer;
        }
        .footer_social a:last-child{
            margin-right: 0;
        }
    }
}

.copyright{
    background: #010013;
    display: flex;
    align-items: center;
    min-height: 48px;
    .copyright_label{
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #D8D8D8;
    }
     @media screen and (max-width: 992px){
         font-size: 12px;
     }
}
</style>