$('.media-container').slick({
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplayspeed: 2000,
    speed: 800,
    centerPadding: '20px',
    draggable: false,
    arrows: false,
    dots: false,
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

$('.header .header_content').slick({
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    speed: 800,
    autoplaySpeed: 3000,
    draggable: false,
    fade: true
})

$('.header_container .nav ul li, .header_content .header_slide .next button').click(function(){
    let $scrollId = $(this).attr('data-scroll-id');
    let $scrollPoint;

    if($scrollId){
        $scrollPoint = $($scrollId).offset().top;
        $('html').animate({
            scrollTop: Math.floor($scrollPoint - 59)
        },1000);
    }
});

$(window).scroll(function(){
    let $navId = $('.header .header_container .nav');

    if($(this).scrollTop() > 0) $navId.addClass('scrolled');
    else $navId.removeClass('scrolled');
});

$('.header .header_container .nav .fa-bars, .header .header_container .nav_mobile .fa-times-circle').click(function(){
    $('.header .header_container .nav_mobile').toggleClass('--activated');
});

$('.header .header_container .nav_mobile ul li').click(function(){
    let $scrollId = $(this).attr('data-scroll-id');
    let $scrollPoint;

    if($scrollId){
        $scrollPoint = $($scrollId).offset().top;
        $('html').animate({
            scrollTop: Math.floor($scrollPoint - 49)
        },1000);
        $('.header .header_container .nav_mobile').toggleClass('--activated');
    }
});

$('.header .header_container .nav_mobile').click(function(e){
    if(e.target.localName != "li" && e.target.localName != "i") $('.header .header_container .nav_mobile').toggleClass('--activated');
})