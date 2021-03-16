//Set default map location
function initMap() {
    const map = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 4,
        disableDefaultUI: true,
        center: {
            lat: -39.52916921878557, //New Zealand
            lng: 175.08429833641372
        }
    });
};

//Set map to Queenstown
document.getElementById("queenstown").addEventListener("click", mapQueens);

function mapQueens() {
    const queenstown = { lat: -45.03007565651303, lng: 168.6584263202857 }; //Queenstown 
    const map = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 14,
        center: queenstown
    });
    const marker = new google.maps.Marker({
        position: queenstown,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Queenstown Restaurants
document.getElementById("queens-rest").addEventListener("click", queensRestaurants);

function queensRestaurants() {
    const restMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 17,
        center: {
            lat: -45.03286550182683, //Queenstown  
            lng: 168.6605823535943
        }
    });
    let labels = "123";
    let queensRestLocation = [
        { lat: -45.03213001028978, lng: 168.66062475973928 }, //The Bunker  
        { lat: -45.03299992315802, lng: 168.66085567691803 }, //The Grille  
        { lat: -45.033070775411595, lng: 168.66160520206859 } //Blue Kanu  
    ];
    let markers = queensRestLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP
        });
    });
    new MarkerClusterer(restMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Queenstown Accommodation
document.getElementById("queens-accomm").addEventListener("click", queensAccommodation);

function queensAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 12,
        center: {
            lat: -45.03007565651303, //Queenstown
            lng: 168.6584263202857
        }
    });
    let labels = "123";
    let queensAccommLocation = [
        { lat: -45.044225437379204, lng: 168.62778313275203 }, //Azur Lodge  
        { lat: -45.059704748903535, lng: 168.588249361588 }, //Matakauri Lodge  
        { lat: -45.03462771086893, lng: 168.6518487352013 } //QT Queenstown  
    ];
    let markers = queensAccommLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP
        });
    });
    new MarkerClusterer(accommMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Queenstown Attractions
document.getElementById("queens-attr").addEventListener("click", queensAttractions);

function queensAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 8,
        center: {
            lat: -45.03007565651303, //Queenstown
            lng: 168.6584263202857
        }
    });
    let labels = "123";
    let queensAttrLocation = [
        { lat: -45.03089650558855, lng: 168.66022820636587 }, //Nevis Bungy  
        { lat: -45.41112456683435, lng: 167.74344615849895 }, //Fiordland  
        { lat: -45.05387241773965, lng: 168.81478689536422 } //Remarks  
    ];
    let markers = queensAttrLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP
        });
    });
    new MarkerClusterer(attrMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Kaikoura
document.getElementById("kaikoura").addEventListener("click", mapKaik);

function mapKaik() {
    const kaikoura = { lat: -42.39948938642581, lng: 173.6805899014221 }; //Kaikoura  
    const map = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 15,
        center: kaikoura
    });
    const marker = new google.maps.Marker({
        position: kaikoura,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Kaikoura Restaurants
document.getElementById("kaik-rest").addEventListener("click", kaikRestaurants);

function kaikRestaurants() {
    const restMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 11,
        center: {
            lat: -42.39948938642581, //Kaikoura
            lng: 173.6805899014221
        }
    });
    let labels = "123";
    let kaikRestLocation = [
        { lat: -42.401064124251306, lng: 173.68176878173378 }, //The Whaler  
        { lat: -42.41444513730136, lng: 173.7010410062723 }, //The Pier  
        { lat: -42.335244665517486, lng: 173.66275113388014 } //Koura Bay Lodge  
    ];
    let markers = kaikRestLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP
        });
    });
    new MarkerClusterer(restMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Kaikoura Accommodation
document.getElementById("kaik-accomm").addEventListener("click", kaikAccommodation);

function kaikAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 11,
        center: {
            lat: -42.36883059201554, //Kaikoura     
            lng: 173.68350699767618
        }
    });
    let labels = "123";
    let kaikAccommLocation = [
        { lat: -42.31260790620674, lng: 173.6949633891632 }, //Manakau Lodge  
        { lat: -42.31325069463624, lng: 173.73707689707217 }, //Hapuku Lodge   
        { lat: -42.41954579582532, lng: 173.61828789832165 } //Fyffe Country Lodge  
    ];
    let markers = kaikAccommLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP
        });
    });
    new MarkerClusterer(accommMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Kaikoura Attractions
document.getElementById("kaik-attr").addEventListener("click", kaikAttractions);

function kaikAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 12,
        center: {
            lat: -42.39948938642581, //Kaikoura
            lng: 173.6805899014221
        }
    });
    let labels = "123";
    let kaikAttrLocation = [
        { lat: -42.39604002857495, lng: 173.68088454615128 }, //Whale watch   
        { lat: -42.42318151987824, lng: 173.71645133940535 }, //Peninsula   
        { lat: -42.42423078995806, lng: 173.6836519130196 } //Fishing   
    ];
    let markers = kaikAttrLocation.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            animation: google.maps.Animation.DROP
        });
    });
    new MarkerClusterer(attrMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

//Set map to Christchurch
document.getElementById("christchurch").addEventListener("click", mapChrist);

function mapChrist() {
    const christchurch = { lat: -43.529981399003944, lng: 172.623711848145 }; //Christchurch  
    const map = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 13,
        center: christchurch
    });
    const marker = new google.maps.Marker({
        position: christchurch,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Christchurch Restaurants

//Set map to Christchurch Accommodation

//Set map to Christchurch Attractions

//Set map to Nelson
document.getElementById("nelson").addEventListener("click", mapNels);

function mapNels() {
    const nelson = { lat: -41.29825197726259, lng: 173.24399865401824 }; //Nelson  
    const map = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 15,
        center: nelson
    });
    const marker = new google.maps.Marker({
        position: nelson,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Nelson Restaurants

//Set map to Nelson Accommodation

//Set map to Nelson Attractions

//Set map to Dunedin
document.getElementById("dunedin").addEventListener("click", mapDun);

function mapDun() {
    const dunedin = { lat: -45.896802458411685, lng: 170.46354275642523 }; //Dunedin  
    const map = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 15,
        center: dunedin
    });
    const marker = new google.maps.Marker({
        position: dunedin,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Dunedin Restaurants

//Set map to Dunedin Accommodation

//Set map to Dunedin Attractions

//Set map to Blenheim
document.getElementById("blenheim").addEventListener("click", mapBlen);

function mapBlen() {
    const blenheim = { lat: -41.513936515129295, lng: 173.95903441173152 }; //Blenheim  
    const map = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 15,
        center: blenheim
    });
    const marker = new google.maps.Marker({
        position: blenheim,
        map: map,
        animation: google.maps.Animation.DROP
    });
};

//Set map to Blenheim Restaurants

//Set map to Blenheim Accommodation

//Set map to Blenheim Attractions