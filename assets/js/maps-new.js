//Set default map location
function initMap() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 4,
        disableDefaultUI: true,
        center: {
            lat: -39.52916921878557, //New Zealand
            lng: 175.08429833641372
        }
    });
};

//Set map to Wellington
document.getElementById("wellington").addEventListener("click", initMapWell);

function initMapWell() {
    const wellington = { lat: -41.29235450909053, lng: 174.77948265394016 }; //Wellington
    const map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 14,
        center: wellington
    });
    const marker = new google.maps.Marker({
        position: wellington,
        map: map,
        animation: google.maps.Animation.DROP
    });
}

//Set map to Wellington Restaurants
document.getElementById("welly-rest").addEventListener("click", wellRestaurants);

function wellRestaurants() {
    var restMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 15,
        center: {
            lat: -41.29235450909053, 
            lng: 174.77948265394016
        }
    });
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let wellRestLocation = [
        { lat: -41.2950004986167, lng: 174.78421241048974 }, //La Boca Loca
        { lat: -41.291911555689836, lng: 174.77529899514886 }, //Little Penang
        { lat: -41.29436051901506, lng: 174.7751597004475 } //Olive
    ];
    let markers = wellRestLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(restMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}