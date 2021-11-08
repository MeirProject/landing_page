

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
    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) {
        obsever.observe(target);
    }
});

//control de Form

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarnos, responderemos en breve')
    }
}


