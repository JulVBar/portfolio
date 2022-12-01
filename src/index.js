
import './styles/main.scss';
import createProjects from './js/createProjects';
import switchLang from './js/switch-lang';
import iconsSwitch from './js/icons-switch';
import portfolioParallax from './js/parallax';
import titleParallax from './js/paralax-title';
import categories from './js/categories';
import preloader from './js/preloader';
import contactsBtn from './js/contacts-btn';
import btnToTop from './js/btn-to-top';

import clock from './js/clock';
import swiperSlider from './js/swiper';


window.addEventListener('DOMContentLoaded', function() {
    // AOS.init();
    preloader();
    contactsBtn();
    btnToTop();

    if(document.querySelector('.page--home')) {
        titleParallax();
        clock();
        switchLang();
        swiperSlider();
        iconsSwitch();
    }
    if (document.querySelector('.page--portfolio')) {
        portfolioParallax();
        categories();
        createProjects();
    }
    
});


const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const projects = importAll(require.context('./images/projects', false, /\.(png|jpe?g|svg|gif)$/));
const nailstudio = importAll(require.context('./images/projects/nailstudio', false, /\.(png|jpe?g|svg|gif)$/));
const books = importAll(require.context('./images/projects/books', false, /\.(png|jpe?g|svg|gif)$/));
const ipzone = importAll(require.context('./images/projects/ipzone', false, /\.(png|jpe?g|svg|gif)$/));
const evacuator = importAll(require.context('./images/projects/evacuator', false, /\.(png|jpe?g|svg|gif)$/));
const makeupstore = importAll(require.context('./images/projects/makeupstore', false, /\.(png|jpe?g|svg|gif)$/));
const saiding = importAll(require.context('./images/projects/saiding', false, /\.(png|jpe?g|svg|gif)$/));
const conceptcar = importAll(require.context('./images/projects/conceptcar', false, /\.(png|jpe?g|svg|gif)$/));
const hrevents = importAll(require.context('./images/projects/hrevents', false, /\.(png|jpe?g|svg|gif)$/));
const shoplist = importAll(require.context('./images/projects/shoplist', false, /\.(png|jpe?g|svg|gif)$/));
const creditbank = importAll(require.context('./images/projects/creditbank', false, /\.(png|jpe?g|svg|gif)$/));


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

