$('.media-container').slick({
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplayspeed: 2000,
    speed: 800,
    centerPadding: '20px',
    draggable: false,
    responsive: [
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 1,
                centerPadding: 0,
                centerMode: false,
            }
        }
    ]
});

$('header .content-container').slick({
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    speed: 800,
    autoplaySpeed: 6000,
    draggable: false,
    fade: true
})

$('.container nav ul li, .content-container .content button').click(function(){
    var $scrollId = $(this).attr('data-scroll-id');
    var $scrollPoint;

    if($scrollId){
        $scrollPoint = $($scrollId).offset().top;
        $('html').animate({
            scrollTop: Math.floor($scrollPoint - 59)
        },1000);
    }
});

$(window).scroll(function(){
    if($(this).scrollTop() > 0) $('header .container nav').addClass('scrolled');
    else $('header .container nav').removeClass('scrolled');
});