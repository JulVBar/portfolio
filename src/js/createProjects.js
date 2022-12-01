

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
            <a href=${this.link} class="masonry__block" data-animation>
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
            name: "Концепт автомобиля будущего Mercedes",
            poster: "images/projects/conceptcar-poster.jpg",
            category: "Landing Page",
            link: "conceptcar.html",
            filterId: "lp",
        },
        {
            name: "Интернет-магазин натуральной косметики",
            poster: "images/projects/makeupstore-poster.gif",
            category: "Интернет-магазин",
            link: "makeupstore.html",
            filterId: "e-commerce",
        },
        {
            name: "Ip-zone Angular Application",
            poster: "images/projects/ipzone-poster.jpg",
            category: "Веб-приложение",
            link: "ipzone.html",
            filterId: "webapp",
        },
        {
            name: "Приложение для чтения книг на Vue",
            poster: "images/projects/readbooks-poster.jpg",
            category: "Веб-приложение",
            link: "readbooks.html",
            filterId: "webapp",
        },
        {
            name: "HR Events React JS Application",
            poster: "images/projects/hrevents-poster.jpg",
            category: "Веб-приложение",
            link: "hrevents.html",
            filterId: "webapp",
        },
        {
            name: "Приложения для подбор тем интерфейса на React",
            poster: "images/projects/interfaceapp-poster.gif",
            category: "Веб-приложение",
            link: "interfaceapp.html",
            filterId: "webapp",
        },
        {
            name: "Лэндинг для студии дизайна ногтей Good Vin",
            poster: "images/projects/nail-poster.gif",
            category: "Landing Page",
            link: "nailstudio.html",
            filterId: "lp",
        },
        {
            name: "Многостраничный сайт для частной фирмы по эвакуации автомобилей",
            poster: "images/projects/evacuator-poster.jpg",
            category: "Landing Page",
            link: "evacuator.html",
            filterId: "lp",
        },
        {
            name: "Интернет-магазин по продаже фасадных материалов и услуг",
            poster: "images/projects/saiding-poster.jpg",
            category: "Интернет-магазин",
            link: "saidingmarket.html",
            filterId: "e-commerce",
        },
        {
            name: "Shop List React JS Application",
            poster: "images/projects/shoplist-poster.jpg",
            category: "Веб-приложение",
            link: "shoplist.html",
            filterId: "webapp",
        },
        {
            name: "Макет для веб студии",
            poster: "images/projects/roxlab-poster.jpg",
            category: "Landing Page",
            link: "roxlab.html",
            filterId: "lp",
        },
        {
            name: "Макет портфолио веб-дизайнера",
            poster: "images/projects/portfolioblue-poster.jpg",
            category: "Landing Page",
            link: "portfolioblue.html",
            filterId: "lp",
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
