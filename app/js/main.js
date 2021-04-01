$(function(){

    $('.menu__btn').click(function(){
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('.conferences__slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 950,
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 1
            }
        }
        ]
    });

    $('.faqs__item').on('click', function(){
        $(this).toggleClass('faqs__item--active');
        $(this).children().slideToggle();
    });


    $('.footer__subtitle').on('click', function(){
        $(this).toggleClass('faqs__item--active');
        $(this).next().slideToggle();
    });

});