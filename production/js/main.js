(function() {
  $(function() {
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



var initialize;
$('.map-cover').on('click', function() {
  return $(this).hide();
});

$('#map_canvas').on('mouseout', function() {
    return $('.map-cover').show();
  });

$(window).on('scroll', function() {
  return $('.map-cover').show();
});

if ($('.map').length > 0) {
  return initialize = (function() {
    var MarkerLatlng, image, map, marker, myLatlng, myOptions;
    myLatlng = new google.maps.LatLng(40.7771287, -73.6450779);
    MarkerLatlng = new google.maps.LatLng(40.7771287, -73.6450779);
    myOptions = {
      zoom: 11,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]

    };
    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    image = new google.maps.MarkerImage('/location-contacts.png', new google.maps.Size(50, 67), new google.maps.Point(0, 0), new google.maps.Point(25, 82));
    return marker = new google.maps.Marker({
      position: MarkerLatlng,
      map: map,
      icon: image,
      title: 'Гагаринское плато, 5а'
    });
  })();
}



  });

}).call(this);


