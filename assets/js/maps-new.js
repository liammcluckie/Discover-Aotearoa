//Set default map location
function initMap() {
    const map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 4,
        disableDefaultUI: true,
        center: {
            lat: -39.52916921878557, //New Zealand
            lng: 175.08429833641372
        }
    });
};

//Set map to Wellington
document.getElementById("wellington").addEventListener("click", mapWell);

function mapWell() {
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
    const restMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 16,
        center: {
            lat: -41.29235450909053, 
            lng: 174.77948265394016
        }
    });
    let labels = "123";
    let wellRestLocation = [
        { lat: -41.2951073042275, lng: 174.78356063375207 }, //Boquita
        { lat: -41.291911555689836, lng: 174.77529899514886 }, //Little Penang
        { lat: -41.2943642230102, lng: 174.77507513229375 } //Olive 
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

//Set map to Wellington Accommodation
document.getElementById("welly-accomm").addEventListener("click", wellAccommodation);

function wellAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 16,
        center: {
            lat: -41.29235450909053, 
            lng: 174.77948265394016
        }
    });
    let labels = "123";
    let wellAccommLocation = [
        { lat: -41.29170651146583, lng: 174.78272230164237 }, //QT Wellington
        { lat: -41.29152858791054, lng: 174.78076806605986 }, //U Residence Hotel
        { lat: -41.295207298517475, lng: 174.7750301343776 } //CQ Hotels
    ];
    let markers = wellAccommLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(accommMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Set map to Wellington Attractions
document.getElementById("welly-attr").addEventListener("click", wellAttractions);

function wellAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 14,
        center: {
            lat: -41.29235450909053, 
            lng: 174.77948265394016
        }
    });
    let labels = "123";
    let wellAttrLocation = [
        { lat: -41.28420510741158, lng: 174.7752955550159 }, //Cable Car
        { lat: -41.29042705680073, lng: 174.782306656861 }, //Te Papa Museum
        { lat: -41.29600266967774, lng: 174.79464299183735 } //Mt Victoria
    ];
    let markers = wellAttrLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(attrMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}