

const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const obsever = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
        if (entry.isIntersecting) {
            menuLink.classList.add('selected');
        } else {
            menuLink.classList.remove('selected');
        }
    });
}, { rootMargin: '-30% 0px -70% 0px' });

menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', function () {
        menu.classList.remove('menu_opened');
    });
    const hash = menuLink.getAttribute('href');
    document.querySelector(hash);
    if (target) {
        obsever.observe(target);
    }
});