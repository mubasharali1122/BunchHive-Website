var map;
      function initMap() {
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: 31.4089507, lng: 74.2600803},
          zoom: 8
        });
      }