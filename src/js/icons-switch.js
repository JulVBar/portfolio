function iconsSwitch() {
    
    const icons = document.querySelectorAll('.circle-frame__icon');
    let i = 0;

    function iconActive() {
        icons.forEach(icon => {
            icon.classList.remove('active');
        });

        if (i < 3) {
            icons[i].classList.add('active');
            i++;
        } else {
            i = 0;
        }
    }

    const switchIconInterval = setInterval(iconActive, 3000);
}
export default iconsSwitch;