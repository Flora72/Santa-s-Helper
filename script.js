document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.regular-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
    });
});
