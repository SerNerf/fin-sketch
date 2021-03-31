$(function(){

    $('.menu__btn').click(function(){
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('.conferences__slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

});