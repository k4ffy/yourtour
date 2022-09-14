import MoveTo from 'moveto';

const moveTo = new MoveTo({duration: 400});
const buttons = document.querySelectorAll('.menu .menu__link');

buttons.forEach(btn => {
	moveTo.registerTrigger(btn);
});

const headerLogo = document.querySelector('.header__logo');
moveTo.registerTrigger(headerLogo);