
import './styles/main.scss';
import createProjects from './js/createProjects';
import switchLang from './js/switch-lang';
import iconsSwitch from './js/icons-switch';
import portfolioParallax from './js/parallax';
import titleParallax from './js/paralax-title';
import categories from './js/categories';
import preloader from './js/preloader';
import btnToTop from './js/btn-to-top';
import nav from './js/nav';
import priceTabs from './js/priceTabs';
import worckcircle from './js/worckcircle';
import briks from './js/briks';

import clock from './js/clock';
import swiperSlider from './js/swiper';
// import multiSwiper from './js/multiSwiper';


window.addEventListener('DOMContentLoaded', function() {
    preloader();
    btnToTop();

    if(document.querySelector('.page--home')) {
        // titleParallax();
        clock();
        switchLang();
        swiperSlider();
        iconsSwitch();
        nav();
        priceTabs();
        worckcircle();
        AOS.init();
    }
    if (document.querySelector('.portfolio')) {
        portfolioParallax();
        categories();
        createProjects();
    }

    if (document.querySelector('[data-aos-init]')) {
        AOS.init();
    }
    if (document.querySelector('#briks')) {
        briks();
    }
    // if (document.querySelector('#creditbank')) {
    //     multiSwiper();
    // }
});


const fonts = importAll(require.context('./fonts', false, /\.(woff|woff2|ttf|otf|eot)$/));

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const projects = importAll(require.context('./images/projects', false, /\.(png|jpe?g|svg|gif)$/));
const interfaceapp = importAll(require.context('./images/projects/interfaceapp', false, /\.(png|jpe?g|svg|gif)$/));
const books = importAll(require.context('./images/projects/books', false, /\.(png|jpe?g|svg|gif)$/));
const ipzone = importAll(require.context('./images/projects/ipzone', false, /\.(png|jpe?g|svg|gif)$/));
const makeupstore = importAll(require.context('./images/projects/makeupstore', false, /\.(png|jpe?g|svg|gif)$/));
const conceptcar = importAll(require.context('./images/projects/conceptcar', false, /\.(png|jpe?g|svg|gif)$/));
const layout = importAll(require.context('./images/projects/layout', false, /\.(png|jpe?g|svg|gif)$/));
const creditbank = importAll(require.context('./images/projects/creditbank', false, /\.(png|jpe?g|svg|gif)$/));
const briksImg = importAll(require.context('./images/projects/briks', false, /\.(png|jpe?g|svg|gif)$/));
const evacuator = importAll(require.context('./images/projects/evacuator', false, /\.(png|jpe?g|svg|gif)$/));
const flowers = importAll(require.context('./images/projects/flowers', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

