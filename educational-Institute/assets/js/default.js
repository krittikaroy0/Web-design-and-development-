
// navbar scroll background change code start
const navbar = document.querySelector('#navbar');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
// navbar scroll background change code end
