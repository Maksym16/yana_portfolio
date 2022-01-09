const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/*========== LIGHTBOX IMAGE GALLERY ==========*/
$(document).ready(function () {
	lightbox.option({
			'resizeDuration': 600,
			'wrapAround': true,
			'imageFadeDuration': 500
	});
});


// $(document).ready(function () {
//   $('.submit').click( function(event) {

//     let firstName = $('.firstName').val();
//     let lastName = $('.lastName').val();
//     let email = $('.email').val();
//     let massage = $('.massage').val();
//     let statusField = $('.status')
//     statusField.empty()

//     if (email.length > 5 && email.includes('@') && email.includes('.')) {
//       statusField.append('<div>Thanks!</div>');
//       lastName = '';
//       firstName = '';
//       email = '';
//       statusField;
//     } else {
//       event.preventDefault();
//       statusField.append('Oops! There was a problem.');
//     }
//   })
// })


