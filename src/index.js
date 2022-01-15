
import './styles/main.scss';
import one from './js/js1';
import switchLang from './js/switch-lang';

import clock from './js/clock';

console.log('Это файл APP.JS');

window.addEventListener('DOMContentLoaded', function() {
    one();
    // clock();
    switchLang();
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

