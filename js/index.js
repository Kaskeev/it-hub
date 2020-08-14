let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 42.8524506,
      lng:74.5853227
    },
    zoom: 18
  });
}