$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    navigation: true,
    items: 1,
    addClassActive: true,
    nav: true,
    loop:true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });

  var $container = $('.isotope');

  $container.isotope({
  itemSelector: '.isotope__item',
  layoutMode: 'fitRows'
  });






});
