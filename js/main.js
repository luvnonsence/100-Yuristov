$(function () {
	// Бургер
	$('#burger').click(function () {
		$('.header__nav-contacts').toggleClass('header__nav-contacts--active');
	});

	// Модальное окно
	$('.btn--open').click(function () {
		$(body).addClass('body--fixed');
		$('.modal').fadeIn(300);
		return false;
	});
	$('.modal__close-btn').click(function () {
		$(body).removeClass('body--fixed');
		$(this).parents('.modal').fadeOut(300);
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$(body).removeClass('body--fixed');
			$('.modal').fadeOut(300);
		}
	});
	$('.modal').click(function (e) {
		if ($(e.target).closest('.modal__window').length == 0) {
			$(body).removeClass('body--fixed');
			$(this).fadeOut(300);
		}
	});
});

const slider1 = new Swiper('.specialties__grid', {
	slidesPerView: 1,
	autoHeight: true,
	breakpoints: {
		// Окно >= 768
		768: {
			enabled: false,
			slidesPerView: 2,
			spaceBetween: 20,
			autoHeight: false,
		},
	},
});

const slider2 = new Swiper('.comments__grid', {
	speed: 300,
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.comments__right-arrow',
		prevEl: '.comments__left-arrow',
	},
	breakpoints: {
		// Окно >= 768
		970: {
			slidesPerView: 3,
		},
		// Окно >= 740
		740: {
			slidesPerView: 2,
		}
	},
});
