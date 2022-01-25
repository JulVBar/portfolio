
function portfolioParallax() {
    
    const moveCoef = 0.1;
    let screenCenter = window.innerHeight / 2;


    window.addEventListener('scroll', () => {
        parallaxBlocks();
    });

    // parallaxBlocks();


    function parallaxBlocks() {
        const blocks = document.querySelectorAll('.masonry__block');
        

        let scrollTop = window.scrollY;

        blocks .forEach(element => {
            //середина экрна + высота контейнера паралакса
            let startPoint = screenCenter + element.parentNode.offsetHeight; // 861
            let coordinates = element.getBoundingClientRect();
            let elementTop = coordinates.y + window.pageYOffset; //относительно документа = относительно окна + прокрутка, статич

            if (elementTop <= scrollTop + startPoint) {
                /* Вычисляем смещение */
                let move = (coordinates.y - startPoint) * moveCoef;
                element.style.transform = `translateY(${move}px)`;
            }
        }); 
    }

    

}
export default portfolioParallax;