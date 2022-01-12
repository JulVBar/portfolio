function switchLang() {
    
    const switchTrigger = document.querySelector('.switch');
    const switchButton = document.querySelector('.switch__button');

    switchTrigger.addEventListener('click', () => {
        switchTrigger.classList.toggle('active');

        if (switchButton.textContent == "RU") {
            switchButton.textContent = "EN";
        } else {
            switchButton.textContent = "RU";
        }
    });



}

export default switchLang;