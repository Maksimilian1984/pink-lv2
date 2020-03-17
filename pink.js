const buttonBurger = document.querySelector('.button-toggle');
const menu = document.querySelector('.menu');
const pageHeaderWrapper = document.querySelector('.page-header__wrapper');



 buttonBurger.addEventListener('click', function (evt) {
       evt.preventDefault();
       menu.classList.toggle('menu--visible');
       pageHeaderWrapper.classList.toggle('page-header__wrapper--when-open-menu');



 })


