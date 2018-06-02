//owl-carousel
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});

//tabs
$('.nav-pills li.active').addClass('current');
$('.nav-pills li ').click(function() {
    $('ul li.current').removeClass('current');
    $(this).closest('li').addClass('current');
});
//slider
$('.carousel').carousel({
    interval: 2000
  })

