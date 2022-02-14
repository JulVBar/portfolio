
import Swiper, { Autoplay, Pagination, Navigation} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

function swiperSlider() {   

    const swiperHero = new Swiper(".heroSwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 600,
        centeredSlides: true,

        navigation: {
            nextEl: ".slider-btn-right",
            prevEl: ".slider-btn-left",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
}

export default swiperSlider;