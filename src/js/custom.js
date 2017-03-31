jQuery(document).ready(function () {
   
   $('.afisha-slider').slick({
 		infinite: false,
 		centerMode: true,
 		slidesToShow: 1
  	});

	$('.scene').each(function(){
   		$(this).parallax(); 
	});

	baguetteBox.run('.gallery', {
   	 	animation: 'fadeIn',
    	noScrollbars: true
	});

	$('.girls .btn').on('click', e => {
		$('.girls .scene').hide();
		$('.girls .gallery-wrap').show();
		$('#girls').addClass('active');
		setTimeout(() => {
			$('.gallery__item').addClass('active');
		},200);
	});

	$('.pary .btn-gallery').on('click', e => {
		$('.pary .scene').hide();
		$('.pary .gallery-wrap').show();
		$('#pary').addClass('active');
		setTimeout(() => {
			$('.gallery__item').addClass('active');
		},200);
	});

	$('.girls .gallery__button').on('click', e => {
		$('.girls .scene').show();
		$('.girls .gallery-wrap').hide();
		$('#girls').removeClass('active');
		$('.gallery__item').removeClass('active');
	});

	$('.pary .gallery__button').on('click', e => {
		$('.pary .scene').show();
		$('.pary .gallery-wrap').hide();
		$('#pary').removeClass('active');
		$('.gallery__item').removeClass('active');
	});

	$('.over__yes').on('click', e => {
		$('.over').addClass('active');
	});

	$('.over__no').on('click', e => {
		$('.over h5').html('Доступ запрещен');
	});

	$('.hamburger').on('click', e => {
		$('.menu').addClass('active');
	});
	
	$('.btn-close, .menu__link').on('click', e => {
		$('.menu').removeClass('active');
	});
});


