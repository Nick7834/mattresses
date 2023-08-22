const burger = document.querySelector('.menu-icon');
const menuMob = document.querySelector('.menuMob');
const hrefNav = document.querySelectorAll('.menuMob__link');
const body = document.body;

burger.addEventListener('click', () => {
    menuMob.classList.toggle('activeMob');
    body.classList.toggle('hidden');
});

hrefNav.forEach(el => {
    el.addEventListener('click', () => {
        menuMob.classList.remove('activeMob');
        body.classList.remove('hidden');
    })
});