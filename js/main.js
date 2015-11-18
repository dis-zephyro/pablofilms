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


// Post

$(document).ready(function() {

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =     $('input[name="name"]', $form).val(),
                email    =     $('input[name="email"]', $form).val(),
                phone   =     $('input[name="phone"]', $form).val(),
                form   =     $('input[name="form"]', $form).val();
            console.log(name, phone, form, email);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, form:form, email:email}
            }).done(function(msg) {
                console.log(name, phone, form, email);
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                /*
                 $.fancybox.open('#done', 'closeBtn : false');
                 setTimeout("$.fancybox.close()", 3000);
                 */
                document.location.replace('http://zephyrus.ru/project/2015/pablofilms/done.html');
            });
        }
    });



});