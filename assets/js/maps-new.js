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

//Display Wellington top picks info
document.getElementById("wellington").addEventListener("click", wellingtonPicks);
function wellingtonPicks() {
    let recommendWellington = document.getElementById("recommend-wellington")
    recommendWellington.style.display = "block";
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

//Set map to Martinborough
document.getElementById("martinborough").addEventListener("click", mapMart);

function mapMart() {
    const martinborough = { lat: -41.21998622909235, lng: 175.46008741862477 }; //Martinborough
    const map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 15,
        center: martinborough
    });
    const marker = new google.maps.Marker({
        position: martinborough,
        map: map,
        animation: google.maps.Animation.DROP
    });
}

//Display Martinborough top picks info
document.getElementById("martinborough").addEventListener("click", martinboroughPicks);
function martinboroughPicks() {
    let recommendMartinborough = document.getElementById("recommend-martinborough")
    recommendMartinborough.style.display = "block";
}

//Set map to Martinborough Restaurants
document.getElementById("mart-rest").addEventListener("click", martRestaurant);

function martRestaurant() {
    const restMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 14,
        center: {
            lat: -41.21998622909235, //Martinborough 
            lng: 175.46008741862477
        }
    });
    let labels = "123";
    let martRestLocation = [
        { lat: -41.216266185883725, lng: 175.46540193231985 }, //Cambridge Road
        { lat: -41.22337633503677, lng: 175.47515828877738 }, //Colombo
        { lat: -41.21697262978785, lng: 175.48549768940939 } //Luna
    ];
    let markers = martRestLocation.map(function (location, i) {
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

//Set map to Martinborough Accommodation
document.getElementById("mart-accomm").addEventListener("click", martAccommodation);

function martAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 14,
        center: {
            lat: -41.215587892705436, //Martinborough 
            lng: 175.45813476983486
        }
    });
    let labels = "123";
    let martAccommLocation = [
        { lat: -41.20833484931799, lng: 175.45729143969933 }, //Peppers
        { lat: -41.218272140033925, lng: 175.4592038427573 }, //Mart Hotel
        { lat: -41.21140356803334, lng: 175.46654030901948 } //Aylestone
    ];
    let markers = martAccommLocation.map(function (location, i) {
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

//Set map to Martinborough Attractions
document.getElementById("mart-attr").addEventListener("click", martAttraction);

function martAttraction() {
    const attrMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 10,
        center: {
            lat: -41.32609427505324, //Martinborough -41.32609427505324, 175.4427779972823
            lng: 175.4427779972823
        }
    });
    let labels = "123";
    let martAttrLocation = [
        { lat: -41.21548669061603, lng: 175.45715036057425 }, //Wine Tours
        { lat: -41.50600405919251, lng: 175.43036948388405 }, //Horse Trek
        { lat: -41.27592440562157, lng: 175.4131342262065 } //Ranui
    ];
    let markers = martAttrLocation.map(function (location, i) {
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