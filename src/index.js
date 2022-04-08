import './sass/styles.scss';

// MENU
const menu = document.getElementById('menu');
const burgerBtn = document.getElementById('burger');

burgerBtn.addEventListener('click', () => {
	menu.classList.toggle('header__menu__active');
	burgerBtn.classList.toggle('burger__active');
});
