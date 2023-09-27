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
