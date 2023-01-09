

function createProjects() {
    const masonry = document.querySelector('.masonry');
    masonry.innerHTML = '';
    class Project {
        constructor(
                    name,
                    poster,
                    category,
                    link,
                    filter
        )
        {
            this.name = name;
            this.poster = poster;
            this.category = category;
            this.link = link;
            this.filter = filter;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add("masonry__wrapper");
            element.classList.add("fadeIn");
            element.setAttribute("data-filter", this.filter);

            element.innerHTML = `
            <a href="${this.link}" class="masonry__block">
                <div class="masonry__text">${this.category}</div>
                <div class="masonry__image">
                    <img src=${this.poster} alt=${this.name}>
                </div>
                <div class="masonry__title">${this.name}</div>
            </a>
        `;
            masonry.append(element);
        }
    }

    const projectsAll = [
        {
            name: "Лэндинг авторских букетов из сухоцветов",
            poster: "images/projects/flowers/flowers-poster.png",
            category: "Landing page",
            link: "flowers.html",
            filter: "lp",
        },
        {
            name: "Лэндинг сервиса эвакуации автомобилей",
            poster: "images/projects/evacuator/evacuator-poster.png",
            category: "Landing page",
            link: "evacuator.html",
            filter: "lp",
        },
        {
            name: "Ip Zone Angular Application",
            poster: "images/projects/ipzone/ipzone-poster.png",
            category: "Веб-приложение Angular",
            link: "ipzone.html",
            filter: "webapp",
        },
        {
            name: "Концепт автомобиля будущего Mercedes",
            poster: "images/projects/conceptcar/conceptcar-poster.png",
            category: "Landing page",
            link: "conceptcar.html",
            filter: "lp",
        },
        {
            name: "Лэндинг компании быстрых займов",
            poster: "images/projects/creditbank/creditbank-poster.jpg",
            category: "Landing page",
            link: "creditbank.html",
            filter: "lp",
        },
        {
            name: "Интернет-магазин натуральной косметики",
            poster: "images/projects/makeupstore/makeupstore-poster.gif",
            category: "Интернет-магазин",
            link: "makeupstore.html",
            filter: "multipage",
        },
        
        {
            name: "Приложение для чтения книг на Vue",
            poster: "images/projects/books/readbooks-poster.png",
            category: "Веб-приложение Vue",
            link: "readbooks.html",
            filter: "webapp",
        },
        {
            name: "Приложения для подбор тем интерфейса на React",
            poster: "images/projects/interfaceapp/interfaceapp-poster.png",
            category: "Веб-приложение React",
            link: "interfaceapp.html",
            filter: "webapp",
        },
    ];


    projectsAll.forEach(({name, poster, category, link, filter}) => {
        new Project(name, poster, category, link, filter).render();
    });
}
export default createProjects;
