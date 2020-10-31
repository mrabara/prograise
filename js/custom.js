$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.sidenav-close').sidenav();

    $('.scrollspy').scrollSpy();

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('nav').removeClass('transparent')
            $('nav').addClass('blue');
        }else{
            $('nav').addClass('transparent')
            $('nav').removeClass('blue')
        }
    })

    $('.slider').slick({
        infinite: true,
        slideToShow:1,
        slideToScroll:1,
        autoplay: true,
        autoplaySpeed: 5000
    });



});