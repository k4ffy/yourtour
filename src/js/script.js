import * as flsFunctions from './modules/functions.js'
flsFunctions.isWebp();

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');

	if (window.scrollY > 450) {	
		header.classList.add('header_fixed');
	} else if (window.scrollY < 450) {
		header.classList.remove('header_fixed');
	}
});

import './modules/moveto.js';