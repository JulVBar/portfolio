function categories() {
    
    const input = document.querySelectorAll('.categories__input');  

    input.forEach(item => {
        item.addEventListener('click', (e) => {
            const blocks = document.querySelectorAll('.masonry__wrapper');

            blocks.forEach(el => {
                el.style.display = "none";

                if (el.getAttribute("data-filter") == e.target.getAttribute("id") || e.target.getAttribute("id") == "all") {
                    el.style.display = "none";
                    el.style.display = "flex";
                    el.classList.add("fadeIn");
                }
            });
        });
    });
}
export default categories;