// Header Nav

$(function() {
    var pull = $('.nav-toddle');
    var menu = $(pull.attr("data-target"));

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle('fast');
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

$('.header__nav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-120 });
    return false;
});

$('.b01__content .btn').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset: 0});
    return false;
});


//  Slider

$('.reply__body').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply__nav.prev').click(function(){
    $('.reply__body').slick('slickPrev');
});

$('.reply__nav.next').click(function(){
    $('.reply__body').slick('slickNext');
});



// ----- Маска ----------
jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});



$(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
    var block = $(this);
    $(window).scroll(function() {
        var top = block.offset().top;
        var bottom = block.height()+top;
        top = top - $(window).height();
        var scroll_top = $(this).scrollTop();
        if ((scroll_top > top) && (scroll_top < bottom)) {
            if (!block.hasClass("animated")) {
                block.addClass("animated");
            }
        } else {
            block.removeClass("animated");
        }
    });
});