$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 300,
    items: 1,
    addClassActive: true,
    nav: true,
    loop:true,
    animateOut: 'flipOutY',
    animateIn: 'fadeIn',
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
});
