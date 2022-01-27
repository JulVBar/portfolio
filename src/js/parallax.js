
function portfolioParallax() {
    
    const moveCoef = 0.1;
    let screenCenter = window.innerHeight / 2;

    window.addEventListener('scroll', () => {
        parallaxBlocks();
    });

    function parallaxBlocks() {
        const blocks = document.querySelectorAll('.masonry__block');
        

        let scrollTop = window.scrollY;

        blocks .forEach(element => {
            let startPoint = screenCenter + element.parentNode.offsetHeight;
            let coordinates = element.getBoundingClientRect();
            let elementTop = coordinates.y + window.pageYOffset;

            if (elementTop <= scrollTop + startPoint) {
                let move = (coordinates.y - startPoint) * moveCoef;
                element.style.transform = `translateY(${move}px)`;
            }
        }); 
    }
}
export default portfolioParallax;