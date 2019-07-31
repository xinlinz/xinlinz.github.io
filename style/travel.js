// Initialize and add the map
function initMap() {
  // the map
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 0, center: {lat: 0, lng: 0}});

  // markers
  var yellowstone = new google.maps.Marker({position: {lat: 44.449904, lng: -110.589359}, map: map});
  var bryce = new google.maps.Marker({position: {lat: 37.619637, lng: -112.230383}, map: map});
  var zion = new google.maps.Marker({position: {lat: 37.321395, lng: -113.028129}, map: map});
  var vancouver = new google.maps.Marker({position: {lat: 49.271612, lng: -123.139631}, map: map});
}
