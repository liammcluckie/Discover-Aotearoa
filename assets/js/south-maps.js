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

//Set map to Queenstown Accommodation

//Set map to Queenstown Attractions

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

//Set map to Kaikoura Accommodation

//Set map to Kaikoura Attractions

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