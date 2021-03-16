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
document.getElementById("christ-rest").addEventListener("click", christRestaurants);

function christRestaurants() {
    const restMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 12,
        center: {
            lat: -43.529981399003944, //Christchurch
            lng: 172.623711848145
        }
    });
    let labels = "123";
    let christRestLocation = [
        { lat: -43.53217802147153, lng: 172.63267727687432 }, //Inati  
        { lat: -43.5651840768612, lng: 172.6430276075378 }, //The Birdwood  
        { lat: -43.531105831680094, lng: 172.63821535908315 } //OGB  
    ];
    let markers = christRestLocation.map(function (location, i) {
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

//Set map to Christchurch Accommodation
document.getElementById("christ-accomm").addEventListener("click", christAccommodation);

function christAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 14,
        center: {
            lat: -43.529981399003944, //Christchurch
            lng: 172.623711848145
        }
    });
    let labels = "123";
    let christAccommLocation = [
        { lat: -43.52593723435632, lng: 172.6289000860707 }, //The George   
        { lat: -43.530603383721164, lng: 172.62884151183377 }, //The Classic Villa   
        { lat: -43.53175153330695, lng: 172.64510606153283 } //Eco Villa   
    ];
    let markers = christAccommLocation.map(function (location, i) {
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

//Set map to Christchurch Attractions
document.getElementById("christ-attr").addEventListener("click", christAttractions);

function christAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 8,
        center: {
            lat: -43.529981399003944, //Christchurch
            lng: 172.623711848145
        }
    });
    let labels = "123";
    let christAttrLocation = [
        { lat: -43.53128024123284, lng: 172.62261084928468 }, //Botanic Gardens    
        { lat: -43.5398399256713, lng: 172.60812093024816 }, //TranzAlpine Train    
        { lat: -43.38813389838374, lng: 170.18462442973492 } //Franz Josef    
    ];
    let markers = christAttrLocation.map(function (location, i) {
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
document.getElementById("nelson-rest").addEventListener("click", nelsRestaurants);

function nelsRestaurants() {
    const restMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 14,
        center: {
            lat: -41.270647309207824, //Nelson   
            lng: 173.28116334001177
        }
    });
    let labels = "123";
    let nelsRestLocation = [
        { lat: -41.27473641200716, lng: 173.2827513841446 }, //East Street   
        { lat: -41.27502592390915, lng: 173.28365520745785 }, //Harry's Bar   
        { lat: -41.26325681050195, lng: 173.2695473019354 } //The Styx   
    ];
    let markers = nelsRestLocation.map(function (location, i) {
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

//Set map to Nelson Accommodation
document.getElementById("nelson-accomm").addEventListener("click", nelsAccommodation);

function nelsAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 12,
        center: {
            lat: -41.270647309207824, //Nelson   
            lng: 173.28116334001177
        }
    });
    let labels = "123";
    let nelsAccommLocation = [
        { lat: -41.27769013308552, lng: 173.28410630378355 }, //Cathedral Inn    
        { lat: -41.26879253517607, lng: 173.26386439948595 }, //Wakefield Quay    
        { lat: -41.237460609496694, lng: 173.39964165838046 } //Retiro Lodge    
    ];
    let markers = nelsAccommLocation.map(function (location, i) {
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

//Set map to Nelson Attractions
document.getElementById("nelson-attr").addEventListener("click", nelsAttractions);

function nelsAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 9,
        center: {
            lat: -40.90654513282482, //Nelson     
            lng: 173.03560081111982
        }
    });
    let labels = "123";
    let nelsAttrLocation = [
        { lat: -40.86496688181207, lng: 173.01751273995384 }, //Abel Tasman      
        { lat: -41.12344411042801, lng: 172.99281570992324 }, //Skydive     
        { lat: -40.82162825597454, lng: 172.90341136268452 } //Golden Bay     
    ];
    let markers = nelsAttrLocation.map(function (location, i) {
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
document.getElementById("dunedin-rest").addEventListener("click", dunRestaurants);

function dunRestaurants() {
    const restMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 14,
        center: {
            lat: -45.87527764687663, //Dunedin  
            lng: 170.5071092689669
        }
    });
    let labels = "123";
    let dunRestLocation = [
        { lat: -45.874400410498275, lng: 170.50950555854556 }, //Ironic Cafe    
        { lat: -45.874609041924046, lng: 170.5050592481137 }, //Two Chefs    
        { lat: -45.88122497500021, lng: 170.5056623542484 } //Plato    
    ];
    let markers = dunRestLocation.map(function (location, i) {
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

//Set map to Dunedin Accommodation
document.getElementById("dunedin-accomm").addEventListener("click", dunAccommodation);

function dunAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 14,
        center: {
            lat: -45.87527764687663, //Dunedin  
            lng: 170.5071092689669
        }
    });
    let labels = "123";
    let dunAccommLocation = [
        { lat: -45.874913365437, lng: 170.50634798555407 }, //Chamberson Hotel     
        { lat: -45.87882703980639, lng: 170.501685218666 }, //Distinction Hotel     
        { lat: -45.87784110929906, lng: 170.50114786651739 } //Scenic Hotel     
    ];
    let markers = dunAccommLocation.map(function (location, i) {
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

//Set map to Dunedin Attractions
document.getElementById("dunedin-attr").addEventListener("click", dunAttractions);

function dunAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 11,
        center: {
            lat: -45.87527764687663, //Dunedin  
            lng: 170.5071092689669
        }
    });
    let labels = "123";
    let dunAttrLocation = [
        { lat: -45.86267289370769, lng: 170.62757188370597 }, //Larnach Castle       
        { lat: -45.81764722995544, lng: 170.61933132733532 }, //Port Chalmers      
        { lat: -45.87964473916685, lng: 170.5030942794093 } //Street Art Trail      
    ];
    let markers = dunAttrLocation.map(function (location, i) {
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
document.getElementById("blen-rest").addEventListener("click", blenRestaurants);

function blenRestaurants() {
    const restMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 12,
        center: {
            lat: -41.51542320880893, //Blenheim  
            lng: 173.8424330823052
        }
    });
    let labels = "123";
    let blenRestLocation = [
        { lat: -41.540730181420564, lng: 173.84281400437033 }, //Brancott Estate     
        { lat: -41.49145103332821, lng: 173.87555488784733 }, //Twelve Trees     
        { lat: -41.485706951358424, lng: 173.81778823077835 } //Wairau River     
    ];
    let markers = blenRestLocation.map(function (location, i) {
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

//Set map to Blenheim Accommodation
document.getElementById("blen-accomm").addEventListener("click", blenAccommodation);

function blenAccommodation() {
    const accommMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 9,
        center: {
            lat: -41.345040887055724, //Blenheim  
            lng: 173.96674826880547
        }
    });
    let labels = "123";
    let blenAccommLocation = [
        { lat: -41.192439668438595, lng: 174.15256594439887 }, //Bay of Many Coves        
        { lat: -41.4270008458428, lng: 173.95260000623824 }, //Marlborough B&B       
        { lat: -41.51379784764938, lng: 173.9553967540926 } //Hotel D'Urville       
    ];
    let markers = blenAccommLocation.map(function (location, i) {
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

//Set map to Blenheim Attractions
document.getElementById("blen-attr").addEventListener("click", blenAttractions);

function blenAttractions() {
    const attrMap = new google.maps.Map(document.getElementById("si-dest-map"), {
        zoom: 9,
        center: {
            lat: -41.345040887055724, //Blenheim  
            lng: 173.96674826880547
        }
    });
    let labels = "123";
    let blenAttrLocation = [
        { lat: -41.288208906068704, lng: 174.00493056574155 }, //Hop on Bus        
        { lat: -41.28880681764829, lng: 174.00530448721761 }, //Flyer Steam Train      
        { lat: -41.53774300240834, lng: 173.92991113447556 } //Omaka Aviation Centre      
    ];
    let markers = blenAttrLocation.map(function (location, i) {
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