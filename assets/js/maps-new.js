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
};

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
};

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
};

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
};

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
};

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
};

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
};

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
};

//Set map to Rotorua
document.getElementById("rotorua").addEventListener("click", mapRot);

function mapRot() {
    const rotorua = { lat: -38.14460134789613, lng: 176.23795125681022 }; //Rotorua  
    const map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 15,
        center: rotorua
    });
    const marker = new google.maps.Marker({
        position: rotorua,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Rotorua Restaurants
document.getElementById("rotorua-rest").addEventListener("click", rotRestaurant);

function rotRestaurant() {
    const restMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 15,
        center: {
            lat: -38.13484666746624, //Rotorua
            lng: 176.25370118708543
        }
    });
    let labels = "123";
    let rotRestLocation = [
        { lat: -38.13295431071398, lng: 176.25187590974573 }, //Ambrosia
        { lat: -38.133287653915644, lng: 176.2519831980976 }, //Atticus Finch
        { lat: -38.138295993139856, lng: 176.24862507599286 } //Abracadabra
    ];
    let markers = rotRestLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(restMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Rotorua Accommodation
document.getElementById("rotorua-accomm").addEventListener("click", rotAccommodation);

function rotAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 11,
        center: {
            lat: -38.15932706710032, //Rotorua
            lng: 176.25787458820008
        }
    });
    let labels = "123";
    let rotAccommLocation = [
        { lat: -38.11879528807034, lng: 176.30186437599215 }, //Wai Ora
        { lat: -38.26248328934628, lng: 176.16410972139815 }, //Astelia Lodge
        { lat: -38.13351455287648, lng: 176.25085792998746 } //Regent
    ];
    let markers = rotAccommLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(accommMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Rotorua Attractions
document.getElementById("rotorua-attr").addEventListener("click", rotAttractions);

function rotAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 11,
        center: {
            lat: -38.18603124597475, //Rotorua
            lng: 176.28336101935605
        }
    });
    let labels = "123";
    let rotAttrLocation = [
        { lat: -38.285207661691274, lng: 176.3864092011571 }, //Volcanic Valley
        { lat: -38.1354999724193, lng: 176.25936265392184 }, //Rotorua Museum
        { lat: -38.21209389540114, lng: 176.3638863557706 } //Te Wairoa
    ];
    let markers = rotAttrLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(attrMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Coromandel
document.getElementById("coromandel").addEventListener("click", mapCoro);

function mapCoro() {
    const coromandel = { lat: -36.7555547584621, lng: 175.50151882207095 }; //Coromandel
    const map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 12,
        center: coromandel
    });
    const marker = new google.maps.Marker({
        position: coromandel,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Coromandel Restaurants
document.getElementById("coromandel-rest").addEventListener("click", coroRestaurant);

function coroRestaurant() {
    const restMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 11,
        center: {
            lat: -36.7555547584621, //Coromandel
            lng: 175.50151882207095
        }
    });
    let labels = "123";
    let coroRestLocation = [
        { lat: -36.75976525856058, lng: 175.4973724103061 }, //Pepper Tree
        { lat: -36.79939359724517, lng: 175.49943357965978 }, //Oyster Company
        { lat: -36.83388195413243, lng: 175.7153546882942 } //Salt
    ];
    let markers = coroRestLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(restMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Coromandel Accommodation
document.getElementById("coromandel-accomm").addEventListener("click", coroAccommodation);

function coroAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 10,
        center: {
            lat: -36.914457035426715, //Coromandel
            lng: 175.77465815168537
        }
    });
    let labels = "123";
    let coroAccommLocation = [
        { lat: -37.04623290947913, lng: 175.94228828666363 }, //Slipper Island
        { lat: -36.84786299562006, lng: 175.6002038391779 }, //Wairua Lodge
        { lat: -36.81218958451478, lng: 175.70024295082493 } //Beachfront Resort
    ];
    let markers = coroAccommLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(accommMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Coromandel Attractions
document.getElementById("coromandel-attr").addEventListener("click", coroAttractions);

function coroAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 10,
        center: {
            lat: -36.911296688015895, 
            lng:175.7493268202981
        }
    });
    let labels = "123";
    let coroAttrLocation = [
        { lat: -36.827147554655795, lng: 175.79018222469207 }, //Cathedral Cove
        { lat: -36.83957481838393, lng: 175.80273902937589 }, //Food Trail
        { lat: -37.04777388054902, lng: 175.71492963877895 } //The Pinnacles
    ];
    let markers = coroAttrLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(attrMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Maunganui
document.getElementById("maunganui").addEventListener("click", mapMaung);

function mapMaung() {
    const maunganui = { lat: -37.66373971996193, lng: 176.20571233871715 }; //maunganui
    const map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 12,
        center: maunganui
    });
    const marker = new google.maps.Marker({
        position: maunganui,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Maunganui Restaurants
document.getElementById("maung-rest").addEventListener("click", maungRestaurant);

function maungRestaurant() {
    const restMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 12,
        center: {
            lat: -37.66373971996193, //Maunganui
            lng: 176.20571233871715
        }
    });
    let labels = "123";
    let maungRestLocation = [
        { lat: -37.63873597800313, lng: 176.18393937045477 }, //Latitude 37
        { lat: -37.642678303052094, lng: 176.1860844925429 }, //Pizza Library
        { lat: -37.68266062071589, lng: 176.16869856493415 } //Dumpling House
    ];
    let markers = maungRestLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(restMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Maunganui Accommodation
document.getElementById("maung-accomm").addEventListener("click", maungAccommodation);

function maungAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 12,
        center: {
            lat: -37.66373971996193, //Maunganui
            lng: 176.20571233871715
        }
    });
    let labels = "123";
    let maungAccommLocation = [
        { lat: -37.675770580796964, lng: 176.17020888702206 }, //Trinity Wharf
        { lat: -37.632113693532524, lng: 176.17737416002325 }, //Oceanside Resort
        { lat: -37.65021612874893, lng: 176.20182143487278 } //The Reef
    ];
    let markers = maungAccommLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(accommMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Maunganui Attractions
document.getElementById("maung-attr").addEventListener("click", maungAttractions);

function maungAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 9,
        center: {
            lat: -37.66373971996193, //Maunganui
            lng: 176.20571233871715
        }
    });
    let labels = "123";
    let maungAttrLocation = [
        { lat: -37.631608328924806, lng: 176.17115167714317 }, //Mount
        { lat: -37.63673154155493, lng: 176.18857296988458 }, //Surf Academy
        { lat: -38.022948636564465, lng: 177.1675554155366 } //Kayak tours
    ];
    let markers = maungAttrLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(attrMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Auckland
document.getElementById("auckland").addEventListener("click", mapAkl);

function mapAkl() {
    const auckland = { lat: -36.85130339882221, lng: 174.76338912848433 }; //AKL
    const map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 12,
        center: auckland
    });
    const marker = new google.maps.Marker({
        position: auckland,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Auckland Restaurants
document.getElementById("akl-rest").addEventListener("click", aklRestaurant);

function aklRestaurant() {
    const restMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 14,
        center: {
            lat: -36.85130339882221, //AKL
            lng: 174.76338912848433
        }
    });
    let labels = "123";
    let aklRestLocation = [
        { lat: -36.84917750914824, lng: 174.7624511047869 }, //Masu
        { lat: -36.85734146851791, lng: 174.7602278599986 }, //Gemmayze
        { lat: -36.85557331824575, lng: 174.7801385225784 } //Pasture
    ];
    let markers = aklRestLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(restMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Auckland Accommodation
document.getElementById("akl-accomm").addEventListener("click", aklAccommodation);

function aklAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 16,
        center: {
            lat: -36.84606223949095, //AKL
            lng: 174.76273204129532
        }
    });
    let labels = "123";
    let aklAccommLocation = [
        { lat: -36.84687176031843, lng: 174.76704423055043 }, //DeBrett
        { lat: -36.84902848958577, lng: 174.7621392593857 }, //Skycity
        { lat: -36.84565334223906, lng: 174.7653686526384 } //Stamford
    ];
    let markers = aklAccommLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(accommMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Auckland Attractions
document.getElementById("akl-attr").addEventListener("click", aklAttractions);

function aklAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 11,
        center: {
            lat: -36.85130339882221, //AKL
            lng: 174.76338912848433
        }
    });
    let labels = "123";
    let aklAttrLocation = [
        { lat: -36.800304414162625, lng: 175.1001321051428 }, //Waiheke
        { lat: -36.84843080898061, lng: 174.76232242564964 }, //Sky Tower
        { lat: -36.85134754107415, lng: 174.76631880478695 } //Art Gallery
    ];
    let markers = aklAttrLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(attrMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Function to only display relevant destination picks
let topPickButtons = document.querySelectorAll(".ex-btn");
for (let button of topPickButtons) {
    button.addEventListener('click', (e) => {
        let allContent = document.querySelectorAll(".top-picks")
        for (let content of allContent) {
            if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    });
}