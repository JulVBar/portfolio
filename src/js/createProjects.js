

function createProjects() {
    
    const masonry = document.querySelector('.masonry');
    const project = document.querySelector('.project');
    const projectContacts = document.querySelector('.project__connection');
    const projectName = document.querySelector('.project__name');
    const projectDep = document.querySelector('.project__deployment');
    const projectGit = document.querySelector('.project__github');
    const projectPicture = document.querySelector('.project__picture');
    const projectDescr = document.querySelector('.project__description');
    const projectTech = document.querySelector('.project__tech');
    const projectPlug= document.querySelector('.project__plug');
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
            document.body.classList.add('no-scroll');
            document.body.style.marginRight = `${scroll}px`;
            projectName.innerHTML = `${this.name}`;
            projectDescr.innerHTML = `${this.description}`;
            projectPicture.setAttribute('src', `${this.picture}`);
            projectPicture.setAttribute('alt', `${this.name}`);
            projectDep.setAttribute('href', `${this.deployment}`);
            projectGit.setAttribute('href', `${this.github}`);
            createList(this.tech, projectTech);
            createList(this.plug, projectPlug);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add("masonry__wrapper");
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

        if(array) {
            array.forEach(item => {
                const element = document.createElement('li');
                element.innerHTML = `${item}`;
                list.append(element);
            });
        }
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
            name: "Корпоративный сайт для частной фирмы по эвакуации автомобилей",
            poster: "images/icon/gif.gif",
            category: "Корпоративный сайт",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            filter: "company",
            github: "index.html",
            tech: ["3", "4"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/evacuator-poster-book.jpg",
            category: "Веб-приложение",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            filter: "webapp",
            github: "index.html",
            tech: ["HTML", "CSS"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/project.jpg",
            category: "Интернет-магазин",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            filter: "e-commerce",
            github: "index.html",
            tech: ["HTML", "JavaScript"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/evacuator-poster-mak.jpg",
            category: "E-commerce",
            filter: "e-commerce",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            github: "index.html",
            tech: ["HTML", "CSS"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/project.jpg",
            category: "E-commerce",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            github: "index.html",
            tech: ["HTML", "JavaScript"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/project.jpg",
            category: "E-commerce",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            github: "index.html",
            tech: ["HTML", "CSS"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/project.jpg",
            category: "E-commerce",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            github: "index.html",
            tech: ["HTML", "JavaScript"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/project.jpg",
            category: "E-commerce",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            github: "index.html",
            tech: ["HTML", "CSS"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/project.jpg",
            category: "E-commerce",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            github: "index.html",
            tech: ["HTML", "JavaScript"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Интернет-магазин отделочных материалов",
            poster: "images/projects/project.jpg",
            category: "E-commerce",
            picture: "images/projects/project2.jpg",
            description: "Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.",
            deployment: "index.html",
            github: "index.html",
            tech: ["HTML", "CSS"],
            plug: ["AOS", "Webpack"],
        },
        {
            name: "Coming Soon...",
            poster: "images/projects/project.jpg",
            category: "Coming Soon...",
        },
    ];


    projectsAll.forEach(({description, picture, deployment, filter, github, tech, plug, name, poster, category}) => {
        new Project(description, picture, deployment, filter, github, tech, plug, name, poster, category).render();
    });

}
export default createProjects;
