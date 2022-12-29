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

                document.querySelectorAll('[data-animation]').forEach(item=>item.classList.add('start-animation'));

                if(document.querySelector('#briks')) {
                    document.querySelectorAll('[data-animation]').forEach(item=>item.classList.add('start-animation'));
                }
            }
        }, 200);
    };
    
}

export default preloader;