//Google Maps
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var markers = [];
var prevInfoWindow = false;
const northIslandLocations = {
    wellington: {
        latitude: "-41.23738666847414",
        longitude: "174.75528006624342"
    },
    martinborough: {
        latitude: "-41.21998622909235",
        longitude: "175.46008741862477"
    },
    taupo: {
        latitude: "-38.684874786281014",
        longitude: "176.06926549890744"
    },
    rotorua: {
        latitude: "-38.134509098139745", 
        longitude: "176.22254642395612"
    },
    coromandel: {
        latitude: "-36.75632658589822", 
        longitude: "175.50358071895684"
    },
    maunganui: {
        latitude: "-37.67236816425535",
        longitude: "176.2249385212569"
    },
    napier: {
        latitude: "-39.468803942785044",
        longitude: "176.8796966905139"
    },
    auckland: {
        latitude: "-36.80889322070665",
        longitude: "74.77752410655344"
    }
};

//Set default map location
function initMap() {
    let map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 5,
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
    map.setZoom(10);
    let marker = new google.maps.Marker({
        position: { lat: newLat, lng: newLng },
        map: map
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
        position: place.geometry.location,
        title: place.name,
    });
    let infoWindow = new google.maps.InfoWindow({
        content: place.name,
    });
    marker.addListener("click", function() {
        if (prevInfoWindow) {
            prevInfoWindow.close();
        }
        prevInfoWindow = infoWindow;
        infoWindow.open(map, marker);
    });
    markers.push(marker);
};
