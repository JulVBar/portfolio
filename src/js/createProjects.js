

function createProjects() {
    
    const masonry = document.querySelector('.masonry');
    masonry.innerHTML = '';
    class Project {
        constructor(
                    name = "Coming Soon...",
                    poster = "images/projects/comingsoon.jpg",
                    category = "Coming Soon...",
                    link,
                    filterId
        )
        {
            this.name = name;
            this.poster = poster;
            this.category = category;
            this.link = link;
            this.filterId = filterId;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add("masonry__wrapper");
            element.classList.add("fadeIn");
            element.setAttribute("data-filter", this.filterId);

            element.innerHTML = `
            <a href=${this.link} class="masonry__block">
                <div class="masonry__text">${this.category}</div>
                <div class="masonry__title">${this.name}</div>
                <div class="masonry__image">
                    <img src=${this.poster} alt=${this.name}>
                </div>
            </a>
        `;
            masonry.append(element);
        }
    }

    const projectsAll = [
        {
            name: "Read Books Vue Application",
            poster: "images/projects/readbooks-poster.jpg",
            category: "Веб-приложение",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "HR Events React JS Application",
            poster: "images/projects/hrevents-poster.jpg",
            category: "Веб-приложение",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "Interface Styles React JS Application",
            poster: "images/projects/interfaceApp-poster.jpg",
            category: "Веб-приложение",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "Marvel React JS Application",
            poster: "images/projects/marvel-poster.gif",
            category: "Веб-приложение",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "Shop List React JS Application",
            poster: "images/projects/shoplist-poster.jpg",
            category: "Веб-приложение",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "Корпоративный сайт студии дизайна ногтей Good Vin",
            poster: "images/icon/nail-poster.gif",
            category: "Корпоративный сайт",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "Корпоративный сайт для частной фирмы по эвакуации автомобилей",
            poster: "images/projects/evacuator-poster.jpg",
            category: "Корпоративный сайт",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "Интернет-магазин по продаже фасадных материалов и услуг",
            poster: "images/projects/saiding-poster.jpg",
            category: "Интернет-магазин",
            link: "project.html",
            filterId: "e-commerce",
        },
        {
            name: "Coming Soon...",
            poster: "images/projects/comingsoon.jpg",
            category: "Coming Soon...",
            filterId: "all",
        },
    ];


    projectsAll.forEach(({name, poster, category, link, filterId}) => {
        new Project(name, poster, category, link, filterId).render();
    });

    

    // document.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('project__button')) {
    //         projectContacts.classList.toggle('active');
    //     }

    //     if (e.target.classList.contains('project__contacts')) {
    //         projectContacts.classList.remove('active');
    //     }
    // });

}
export default createProjects;
