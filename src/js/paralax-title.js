
function titleParallax() {
    let title2 = document.querySelector('.mouse-parallax-title-2');
    let title3 = document.querySelector('.mouse-parallax-title-3');
    let title4 = document.querySelector('.mouse-parallax-title-4');

    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        
        title2.style.transform = 'translate3d(0rem, -' + y + 'rem, 0rem) rotateZ(' + ((0.5 - x) * 18) + 'deg)';
        title3.style.transform = 'translate3d(0rem, -' + y*2 + 'rem, 0rem) rotateZ(' + ((0.5 - x) * 18 * 1.5) + 'deg)';
        title4.style.transform = 'translate3d(0rem, -' + y*3 + 'rem, 0rem) rotateZ(' + ((0.5 - x) * 18 * 2) + 'deg)';
    });
}

export default titleParallax;



