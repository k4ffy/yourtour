import IMask from 'imask';

const dateOptions = {
	mask: Date,
	lazy: true,
	overwrite: true,
	autofix: true,
	blocks: {
		d: {mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2},
		m: {mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2},
		Y: {mask: IMask.MaskedRange, from: 2022, to: 2025, maxLength: 4},
	},
};

IMask(document.querySelector('.form-tour #phone'), {
	mask: '+{7} (000) 000-00-00',
	lazy: true,
});

IMask(document.querySelector('.form-tour #date-from'), dateOptions);
IMask(document.querySelector('.form-tour #date-to'), dateOptions);