

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

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function () {
        menu.classList.remove('menu_opened');
    });
<<<<<<< HEAD
    const hash = menuLinks.getAttribute('href');
=======
    const hash = menuLink.getAttribute('href');
>>>>>>> 53d6b90ea92fb3863ba1fc3c73b4f511b856549a
    const target = document.querySelector(hash);
    if (target) {
        obsever.observe(target);
    }
});