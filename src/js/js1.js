

function one() {
    
    const masonry = document.querySelector('.masonry');
    const project = document.querySelector('.project');
    const projectContacts = document.querySelector('.project__connection');
        // scroll = calcScroll();
    const projectName = document.querySelector('.project__name');
    const projectDep = document.querySelector('.project__deployment');
    const projectGit = document.querySelector('.project__github');
    const projectPicture = document.querySelector('.project__picture');
    const projectDescr = document.querySelector('.project__description');
    const projectTech = document.querySelector('.project__tech');
    const projectPlug= document.querySelector('.project__plug');

    masonry.innerHTML = ''; // или очистить в самой верстке

    class Project {
        constructor(name, poster, category, description, picture, deployment, github, tech, plug) {
            this.name = name;
            this.poster = poster;
            this.category = category;
            this.description = description;
            this.picture = picture;
            this.deployment = deployment;
            this.github = github;
            this.tech = tech;
            this.plug = plug;
        }


        openProject() {
            project.classList.add('open');
            document.body.classList.add('no-scroll');
            // document.body.style.marginRight = `0px`;
            projectName.innerHTML = `${this.name}`;
            projectDescr.innerHTML = `${this.description}`;
            projectPicture.setAttribute('src', `${this.picture}`);
            projectPicture.setAttribute('alt', `${this.name}`);
            projectDep.setAttribute('href', `${this.deployment}`);
            projectGit.setAttribute('href', `${this.github}`);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add("masonry__wrapper");
            
            element.innerHTML = `
            <div class="masonry__block">
                <div class="masonry__text">${this.category}</div>
                <div class="masonry__title">${this.name}</div>
                <div class="masonry__image"><img src=${this.poster} alt=${this.name}></div>
            </div>
        `;
            masonry.append(element);

            element.addEventListener('click', () => {
                this.openProject();
                createList(this.tech, projectTech);
                createList(this.plug, projectPlug);
            });
        }
    }
    



    const projectsAll = [
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
    ];

    projectsAll.forEach(({name, poster, category, description, picture, deployment, github, tech, plug}) => {
        new Project(name, poster, category, description, picture, deployment, github, tech, plug).render();
    });




    function createList(array, list) {
        array.forEach(item => {
            const element = document.createElement('li');
            element.innerHTML = `${item}`;
            list.append(element);
        });
    }

    function closeProject() {
        project.classList.remove('open');
        document.body.classList.remove('no-scroll');
        // document.body.style.marginRight = `0px`;
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




    // function calcScroll() {
    //     let div = document.createElement('div');
    
    //     div.style.width = '50px';
    //     div.style.height = '50px';
    //     div.style.overflowY = 'scroll';
    //     div.style.visability = 'hidden';
    //     document.body.appendChild(div);
        
    //     let scrollWidth = div.offsetWidth - div.clientWidth;
    //     div.remove();
    
    //     return scrollWidth;
    // }
}
export default one;
