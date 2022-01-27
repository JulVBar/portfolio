function categories() {
    
    const input = document.querySelectorAll('.categories__input');
    const categoryButton = document.querySelector('.header__button');
    const categoryMenu = document.querySelector('.categories');  

    input.forEach(item => {
        item.addEventListener('click', (e) => {
            const blocks = document.querySelectorAll('.masonry__wrapper');

            blocks.forEach(el => {
                el.style.display = "none";

                if (el.getAttribute("data-filter") == e.target.getAttribute("id") || e.target.getAttribute("id") == "all") {
                    el.style.display = "none";
                    el.style.display = "flex";
                }
            });
        });
    });

    if(categoryButton) {
        categoryButton.addEventListener('click', () => {
            categoryButton.classList.toggle('active');
            categoryMenu.classList.toggle('open');
        });
    } 
}
export default categories;