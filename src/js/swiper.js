
import Swiper, { Autoplay, Breakpoints, Pagination, Navigation } from 'swiper';
Swiper.use([Autoplay, Breakpoints, Navigation, Pagination]);

function swiperSlider() {   

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,

        navigation: {
            nextEl: ".slider-btn-right",
            prevEl: ".slider-btn-left",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },

        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     700: {
        //         slidesPerView: 3,
        //     },
        //     1025: {
        //         slidesPerView: 6,
        //         }
        //     }
        });
}

export default swiperSlider;