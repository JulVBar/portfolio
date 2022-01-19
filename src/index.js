
import './styles/main.scss';
import one from './js/js1';
import switchLang from './js/switch-lang';
import iconsSwitch from './js/icons-switch';

import clock from './js/clock';
import swiperSlider from './js/swiper';

console.log('Это файл APP.JS');

window.addEventListener('DOMContentLoaded', function() {
    one();
    clock();
    switchLang();
    swiperSlider();
    iconsSwitch();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const slider = importAll(require.context('./images/slider', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

