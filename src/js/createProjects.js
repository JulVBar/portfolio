

function createProjects() {
    
    const masonry = document.querySelector('.masonry');
    const project = document.querySelector('.project');
    const projectLists = document.querySelectorAll('.project__list');
    const projectContacts = document.querySelector('.project__connection');
    const projectName = document.querySelector('.project__name');
    const projectDep = document.querySelector('.project__deployment');
    const projectGit = document.querySelector('.project__github');
    const projectPicture = document.querySelector('.project__image');
    const projectDescr = document.querySelector('.project__description');
    const projectTech = document.querySelector('.project__tech');
    const projectPlug= document.querySelector('.project__plug');

    const picture = document.createElement('img');
    picture.classList.add("project__picture");
    let scroll = calcScroll();
    

    masonry.innerHTML = '';

    class Project {
        constructor(description, picture, deployment, filter, github, tech, plug,
                    name = "Coming Soon...",
                    poster = "images/projects/comingsoon.jpg",
                    category = "Coming Soon...")
        {
            this.name = name;
            this.poster = poster;
            this.category = category;
            this.description = description;
            this.picture = picture;
            this.deployment = deployment;
            this.filter = filter;
            this.github = github;
            this.tech = tech;
            this.plug = plug;
        }

        openProject() {
            project.classList.add('open');
            document.querySelector('.project__body').scrollTop = "0";

            document.body.classList.add('no-scroll');
            document.body.style.marginRight = `${scroll}px`;

            projectName.innerHTML = `${this.name}`;
            
            picture.setAttribute('src', `${this.picture}`);
            picture.setAttribute('alt', `${this.name}`);
            projectPicture.append(picture);
            
            projectDescr.innerHTML = `${this.description}`;
            projectDep.setAttribute('href', `${this.deployment}`);
            projectGit.setAttribute('href', `${this.github}`);
            createList(this.tech, projectTech);
            createList(this.plug, projectPlug);

            if(this.github == "") {
                projectGit.style.display = "none";
                projectDep.style.marginRight = "0";
            } else {
                projectGit.style.display = "flex";
                projectDep.style.marginRight = "4rem";
            }

            if(this.description == "") {
                projectDescr.parentNode.style.display = "none";
            } else {
                projectDescr.parentNode.style.display = "block";
            }

            if(this.tech == "" || this.plug == "") {
                projectLists.forEach(item => {
                    item.parentNode.style.width = "100%";
                });
            } else {
                projectLists.forEach(item => {
                    item.parentNode.style.width = "45%";
                });
            }
        }

        render() {
            const element = document.createElement('div');
            element.classList.add("masonry__wrapper");
            element.classList.add("fadeIn");
            element.setAttribute("data-filter", this.filter);

            element.innerHTML = `
            <div class="masonry__block">
                <div class="masonry__text">${this.category}</div>
                <div class="masonry__title">${this.name}</div>
                <div class="masonry__image"><img src=${this.poster} alt=${this.name}></div>
            </div>
        `;
            masonry.append(element);

            element.addEventListener('click', () => {
                
                if(this.category != "Coming Soon...") {
                    this.openProject();
                }
            });
        }
    }
    
    function createList(array, list) {
        list.innerHTML = '';

        if(array && array.length > 0) {
            array.forEach(item => {
                const element = document.createElement('li');
                element.innerHTML = `${item}`;
                list.append(element);
                list.parentNode.style.display = "flex";
            });
        } else {
            list.parentNode.style.display = "none";
        }

        return list;
    }

    function closeProject() {
        project.classList.remove('open');
        document.body.classList.remove('no-scroll');
        document.body.style.marginRight = `0px`;
    }

    project.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') == '') {
            closeProject();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && project.classList.contains('open')) {
            closeProject();
        }
    });

    project.addEventListener('click', (e) => {
        if (e.target.classList.contains('project__button')) {
            projectContacts.classList.toggle('active');
        }

        if (e.target.classList.contains('project__contacts')) {
            projectContacts.classList.remove('active');
        }
    });


    function calcScroll() {
        let div = document.createElement('div');
    
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visability = 'hidden';
        document.body.appendChild(div);
        
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
    
        return scrollWidth;
    }
    

    const projectsAll = [
        {
            name: "HR Events React JS Application",
            poster: "images/projects/hrevents-poster.jpg",
            category: "Веб-приложение",
            picture: "images/projects/hrevents.png",
            description: "Приложение для создания эвентов внутри комапании на React JS. Возможность создавать события разных типов для участников, удобный доступ к информации и получение обратной связи. Командная разработка.",
            deployment: "https://github.com/JulVBar/codeFragmentsHREventApp/tree/main",
            filter: "webapp",
            github: "https://github.com/JulVBar/codeFragmentsHREventApp/tree/main",
            tech: [
                "React", "JavaScript", "Redux", "Redux Toolkit", "Redux Thunk", "Node JS", "Jest", "Enzyme", "JSON", "AJAX", "HTML5", "SASS", "NPM", "ESLINT", "Bootstrap 4", "Webpack", "Git Lab", "Jira"],
            plug: ["React router", "Formik", "Proptypes", "Classnames", "Yup"],
        },
        {
            name: "Shop List React JS Application",
            poster: "images/projects/shoplist-poster.jpg",
            category: "Веб-приложение",
            picture: "images/projects/shoplist.png",
            description: "Приложение для создания списка покупок на React JS. Добавление и удаление товаров, поиск, фильтрация по категориям.",
            deployment: "https://julvbar.github.io/shop-list-react/",
            filter: "webapp",
            github: "https://github.com/JulVBar/shop-list-react",
            tech: ["React", "React-Dom", "JavaScript", "HTML5", "CSS3", "NPM", "ESLINT", "Webpack", "Git", "Git-pages"],
            plug: "",
        },
        {
            name: "Корпоративный сайт для частной фирмы по эвакуации автомобилей",
            poster: "images/projects/evacuator-poster.jpg",
            category: "Корпоративный сайт",
            picture: "images/projects/evacuator.png",
            description: "Многостраничный сайт для частной фирмы по эвакуации автомобилей. Главная страница выполнена как целевая. Калькулятор, навигация и другой функционал написан на чистом JavaScript. Так же подключены плагины. Собственный прототип и дизайн макета. Адаптирован под все устройства.",
            deployment: "https://julvbar.github.io/evacuator/",
            filter: "company",
            github: "https://github.com/JulVBar/evacuator",
            tech: ["JavaScript", "HTML 5", "SCSS", "NPM", "Webpack", "BEM"],
            plug: ["AOS", "Swiper", "Normalize.css"],
        },
        {
            name: "Корпоративный сайт студии дизайна ногтей Good Vin",
            poster: "images/icon/nail-poster.gif",
            category: "Корпоративный сайт",
            picture: "images/projects/nail.png",
            description: "Корпоративный сайт для студии дизайна ногтей. Весь функционал написан на JavaScript без использования сторонних библиотек и готовых решений: слайдер, модальные окна, табы, галерея с фильтрами. Блог и формы обратной связи разработаны для посадки на CMS. Прайс подгружается из отдельного json-файла. Адаптирован под все устройства.",
            deployment: "https://julvbar.github.io/Nailstudio/",
            filter: "company",
            github: "https://github.com/JulVBar/Nailstudio",
            tech: ["JavaScript", "HTML 5", "SCSS", "NPM", "Webpack", "JSON"],
            plug: ["Normalize.css"],
        },
        {
            name: "Интернет-магазин по продаже фасадных материалов и услуг",
            poster: "images/projects/saiding-poster.jpg",
            category: "Интернет-магазин",
            picture: "images/projects/saiding.png",
            description: "Многостраничный сайт-каталог фирмы по монтажу и продаже отделочных материалов. Главная страница выполнена как целевая. Адаптирован под все устройства. Каталог более, чем на 2000 товаров. Сайт интегрирован в CMS.",
            deployment: "https://saiding-market.pro/",
            filter: "e-commerce",
            github: "",
            tech: ["JavaScript", "HTML 5", "CSS 3", "Wordpress"],
            plug: ["Contac Form 7", "Slider Revolution", "WooCommerce", "WPBakery Page Builder"],
        },
        {
            name: "Фильмотека",
            poster: "images/projects/moviedb-poster.jpg",
            category: "Веб-приложение",
            picture: "images/projects/moviedb.png",
            description: "Веб-приложение для сбора своей коллекции фильмов. Фильмы можно добавлять в коллекцию, добавлять и удалять из списка избранных, просматривать детали фильма, выполнять поиск. Собственный дизайн, отзывчивая верстка под мобильные устройства. Для создания базы данных используется Firebase storage и database. Весь функционал написан на JavaScript без использования сторонних библиотек и готовых решений.",
            deployment: "https://julvbar.github.io/Movie-data-base/",
            filter: "webapp",
            github: "https://github.com/JulVBar/Movie-data-base",
            tech: ["JavaScript", "HTML 5", "CSS 3", "Firebase", "Gulp", "JSON", "NPM"],
            plug: ["Firebase Storage", "Firebase DataBase"],
        },
        {
            name: "Coming Soon...",
            poster: "images/projects/medpedicure.jpg",
            category: "Coming Soon...",
        },
        {
            name: "Coming Soon...",
            poster: "images/projects/webdesign.jpg",
            category: "Coming Soon...",
        },
        {
            name: "Coming Soon...",
            poster: "images/projects/uidesign.jpg",
            category: "Coming Soon...",
        },
        {
            name: "Coming Soon...",
            poster: "images/projects/webdesign2.jpg",
            category: "Coming Soon...",
        },
        {
            name: "Coming Soon...",
            poster: "images/projects/comingsoon.jpg",
            category: "Coming Soon...",
        },
    ];


    projectsAll.forEach(({description, picture, deployment, filter, github, tech, plug, name, poster, category}) => {
        new Project(description, picture, deployment, filter, github, tech, plug, name, poster, category).render();
    });

}
export default createProjects;
