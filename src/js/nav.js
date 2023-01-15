function nav() {

        const navLinks = document.querySelectorAll('[data-scroll-link]'),
            navItems = document.querySelectorAll('[data-scroll-item]'),
            sections = document.querySelectorAll('section'),
            btnTop = document.querySelectorAll('.button__to__top');
        
        // Navigation by click and smooth
        navItems.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
        
                let href = this.firstChild.getAttribute('href').substring(1);
        
                const scrollTarget = document.getElementById(href),
                    topOffset = document.querySelector('.header').offsetHeight,
                    elementPosition = scrollTarget.getBoundingClientRect().top,
                    offsetPosition = elementPosition - topOffset;
        
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
        
        // Navigation by scrolling
        
        function windowScroll() {
            sections.forEach(el => {
        
                let scroll = window.pageYOffset;
                let top = el.offsetTop - 100;
                let bottom = el.offsetHeight + top;
                
                let id = el.getAttribute('id');
                    
                if (scroll > top && scroll < bottom)  { 
        
                    navLinks.forEach(link => {
        
                        link.classList.remove('active'); 
                        
                        if (link.getAttribute('href').substring(1) == id) { 
                            
                            link.classList.add('active');
                        }
                    });
                }   
            });
        }
        
        window.addEventListener('scroll', windowScroll);
}

export default nav;