
import Swiper, { Autoplay, Pagination, Navigation, Mousewheel} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Mousewheel]);

function multiSwiper() {   
    document.querySelectorAll('.slider').forEach((n, i) => {
        window[`slider${i+1}`] = new Swiper(n, {
            freeMode: true,
            centeredSlides: true,
            direction: 'vertical',
            mousewheel: true,
            slidesPerView: 1.75,
            slidesOffsetBefore: -125
        })
    })
    
    bindSwipers(slider1, slider2, slider3);
    console.log(slider1)

    function bindSwipers(...swiperList) {
        for (const swiper of swiperList) {
            swiper.setTranslate = function(translate, byController, doNotPropagate) {
                if (doNotPropagate) {
                    Swiper.prototype.setTranslate.apply(this, arguments)
                } else {
                    for (const swiper of swiperList) {
                        swiper.setTranslate(translate, byController, true)
                    }
                }
            }
            swiper.setTransition = function(duration, byController, doNotPropagate) {
                if (doNotPropagate) {
                    Swiper.prototype.setTransition.apply(this, arguments)
                } else {
                    for (const swiper of swiperList) {
                        swiper.setTransition(duration, byController, true)
                    }
                }
            }
        }
    }
}

export default multiSwiper;