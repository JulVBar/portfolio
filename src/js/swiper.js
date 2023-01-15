
import Swiper, { Autoplay, Pagination, Navigation, Mousewheel, FreeMode} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Mousewheel, FreeMode]);

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

    const workcircleSwiper = new Swiper(".workcircle-swiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        // freeMode: true,
        grabCursor: true,
        // loop: true,
        // speed: 500,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".workcircle-swiper-button-next",
            prevEl: ".workcircle-swiper-button-prev",
        },
    })

    const slides = document.querySelectorAll('.workcircle-swiper-slide');

    workcircleSwiper.on('slideChange', function () {
        
        slides.forEach(slide => slide.firstElementChild?.classList.remove("changeanim"));
        slides[swiper.activeIndex].firstElementChild?.classList.add("animation");
        // act.classList.add('.changeanim');


    });
}

export default swiperSlider;