$(document).ready(function(){
  $('.demo').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
  });
});
