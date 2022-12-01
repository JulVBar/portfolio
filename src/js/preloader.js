function preloader() {
    document.body.onload = function() {
        document.body.style.overflow = 'hidden';
        
        setTimeout(function() {
            let preloader = document.querySelector('.preloader');

            if (preloader && !preloader.classList.contains('done')) {
                preloader.classList.add('done');
                document.body.style.overflow = '';
                // document.querySelector('.hero').classList.add('start-animation');
                // document.querySelector('.algorithm').classList.add('start-animation');
            }
        }, 0); //$preloader-delay: 1000ms in SCSS
    };
    
}

export default preloader;