//Google Maps
let markers = [];
let currentInfoWindow = false;

//Set default map 
function initMap() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 4,
        disableDefaultUI: true,
        center: {
            lat: -39.52916921878557,
            lng: 175.08429833641372
        }
    });
};

//Set new location with marker
function setLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng,
    });
    map.setZoom(14);
    let marker = new google.maps.Marker({
        position: { lat: newLat, lng: newLng },
        map: map,
        animation: google.maps.Animation.DROP
    });
    markers.push(marker);
};

//Remove markers
function removeMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
};

//Add markers
//Code used from https://developers.google.com/maps/documentation/javascript/examples/place-search
function addMarkers(place) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: place.geometry.location,
        title: place.name,
    });
    let infoWindow = new google.maps.InfoWindow({
        content: place.name,
    });
    marker.addListener("click", function() {
        if (currentInfoWindow) {
            currentInfoWindow.close();
        }
        currentInfoWindow = infoWindow;
        infoWindow.open(map, marker);
    });
    markers.push(marker);
};

//Function to display destination markers
$("document").ready(function() {
    $("#wellington").click(function() {
        removeMarkers();
        setLocation(-41.29235450909053, 174.77948265394016);
    }),
    $("#martinborough").click(function() {
        removeMarkers();
        setLocation(-41.21998622909235, 175.46008741862477);
    }),
    $("#taupo").click(function() {
        removeMarkers();
        setLocation(-38.690234522533515, 176.08205250434554);
    }),
    $("#rotorua").click(function() {
        removeMarkers();
        setLocation(-38.14450009493867, 176.2374791885155);
    }),
    $("#coromandel").click(function() {
        removeMarkers();
        setLocation(-36.758700792793924, 175.4991370198656);
    }),
    $("#maunganui").click(function() {
        removeMarkers();
        setLocation(-37.67236816425535, 176.2249385212569);
    }),
    $("#napier").click(function() {
        removeMarkers();
        setLocation(-39.51047145465511, 176.87814419646284);
    }),
    $("#auckland").click(function() {
        removeMarkers();
        setLocation(-36.85130339882221, 174.76338912848433); 
    });
});

//Display top picks info
document.getElementById("wellington").addEventListener("click", wellingtonPicks);
function wellingtonPicks() {
    let recommendWellington = document.getElementById("recommend-wellington")
    recommendWellington.style.display = "block";
}