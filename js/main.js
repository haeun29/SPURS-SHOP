
$(function(){
    
    $('.kit').click(function(){
		$('.modal').addClass('on');
	}),

	$('.modal .btn-close').click(function(){
		$('.modal').removeClass('on');
	});

    $('.menu-btn').click(function(){
        $('.mainMenu').toggleClass('on');
    });

});

$(function(){

    var sMedia = window.matchMedia('(max-width: 959px)');

    if ( sMedia.matches == true)
    {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1.5,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        
    }

});



