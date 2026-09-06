document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    if (burger && menu) {
        burger.addEventListener('click', function() {
            menu.classList.toggle('active');
            const expanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', !expanded);
        });
    }
});