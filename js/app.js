

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


// User ID
// user_id
// Access Token
// random_access-token

(function () {
    // emailjs.init("USERID");
    const user_id = "user_L7jpp8q2NCZYImd7ApBQM"; //https://dashboard.emailjs.com/admin/integration/browser
    emailjs.init(user_id);
})();

/**
  emailjs.send("SERVICE ID", "TEMPLATE NAME", {
    to_name: "USERNAME",
    from_name: "FROM NAME",
    message: "MESSAGE",
  });
 **/


function validate() {
    let loader = document.querySelector(".loader");
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');
    let btn = document.querySelector(".submit");
    const form = document.getElementById('form');

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || message.value == "") {
            emptyerror();
        } else {
            loader.style.display = "flex";
            sendmail(subject.value, name.value, email.value, message.value, phone.value);
            success();
            loader.style.display = "none";
            form.reset();
        }
    });

}
validate();


function sendmail(subject, name, email, message, phone) {

    const service_id = "service_n7ykf5z"; //https://dashboard.emailjs.com/admin
    const template_name = "form-contact"; //https://dashboard.emailjs.com/admin/templates
    const to_name = 'informaciones.meir@gmail.com'; //Correo asociado a EmailJS

    //campos como se indicaron en el template
    emailjs.send(service_id, template_name, {
        subject: subject,
        to_name: to_name,
        from_name: name,
        from_email: email,
        message: message,
        phone: phone,
    });
}

function emptyerror() {
    Swal.fire({
        icon: "error",
        title: "Lo sentimos...",
        text: "Los campos son requeridos!",
    });
}

function error() {
    Swal.fire({
        icon: "error",
        title: "Lo sentimos...",
        text: "Algo salio mal!",
    });
}

function success() {
    Swal.fire({
        icon: "success",
        title: "Muchas gracias...",
        text: "Su mensaje fue enviado, nos cumunicaremos a la brevedad",
    });
}


