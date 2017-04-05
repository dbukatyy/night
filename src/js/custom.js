//= scroll/velocity.min.js
//= scroll/velocity.ui.min.js
//= scroll/main.js

jQuery(document).ready(function () {

    $(window).on('scroll', e => {

        if ( $(this).scrollTop() > 150 ) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    })
   
   $('.afisha-slider').slick({
 		infinite: false,
 		// centerMode: true,
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

	 //ajax
    $('.form .btn').on('click', function (e) {
		e.preventDefault();

		var msg = $('.form__msg'),
            // message = $('.form-alert .msg'),
            form = $(this).closest('.form'),
            inputs =  form.find('.form__field'),
            // errorMsg = form.find('.error'),
            valid = validate();


        function validate () {
       
            var valid = true;

            // console.log(inputs );

            inputs.each( function () {

                if ( $(this).val() === '' ) {
                     // console.log($(this).val());
                    valid = false;
                    return false;
                } 
            });
               
            return valid;
        }

        function showMessage(data) {
            msg.html(data);
            msg.addClass('active');
        }

        if (valid) {

             $.ajax({    
                url: form.attr('action'),
                data: form.serialize(),
                type: 'POST',
                success: function(data){
                    showMessage(data);
                    msg.css('background', 'rgba(39,179,101,1)');
                },
                error: function(){
                    showMessage('Ошибка отправки. Пожалуйста, повторите попытку.');
                    msg.css('background', 'rgba(158,26,47,1)');
                },
                complete: function(){
                    setTimeout(function () {
                        msg.removeClass('active');
                    }, 2000);
                    form[0].reset();
                }
            });
         } else {
            showMessage('Пожалуйста, заполните все поля.')
            msg.css('background', 'rgba(158,26,47,1)');
            setTimeout( function () {
                msg.removeClass('active');
            }, 2000);
         }
	});
});


