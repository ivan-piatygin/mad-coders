$('.single-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  swipeToSlide: true,
  adaptiveHeight: true
});


$('.tripple-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  swipeToSlide: true,
  adaptiveHeight: true,
  variableWidth: true
});

$('.double-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  swipeToSlide: true,
  adaptiveHeight: true,
  variableWidth: true
});