$(document).ready(function() {
  $('.header-button').click(function(event) {
    $('.header-button, .header-span, .header_menu').toggleClass('active');
  });
  $('.s3_block').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
  })  
});