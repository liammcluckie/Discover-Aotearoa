//Original code taken from CI learning material and customised for this project

//Code for Google Places search taken from https://stackoverflow.com/questions/58206884/how-do-i-get-google-maps-to-display-nearby-restaurants and customised for this project

//Code for info window functions taken from https://stackoverflow.com/questions/2223574/google-maps-auto-close-open-infowindows and customised for this project

//Set default map location
function initMap() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
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
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -45.03007565651303, //Queenstown
            lng: 168.6584263202857
        },
        zoom: 15
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['restaurant']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Queenstown Accommodation
document.getElementById("queens-accomm").addEventListener("click", queensAccommodation);

function queensAccommodation() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -45.03007565651303, //Queenstown
            lng: 168.6584263202857
        },
        zoom: 15
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['lodging']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Queenstown Attractions
document.getElementById("queens-attr").addEventListener("click", queensAttractions);

function queensAttractions() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -45.03007565651303, //Queenstown
            lng: 168.6584263202857
        },
        zoom: 15
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['tourist_attraction']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
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
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -42.39948938642581, //Kaikoura
            lng: 173.6805899014221
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['restaurant']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Kaikoura Accommodation
document.getElementById("kaik-accomm").addEventListener("click", kaikAccommodation);

function kaikAccommodation() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -42.39948938642581, //Kaikoura
            lng: 173.6805899014221
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['lodging']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Kaikoura Attractions
document.getElementById("kaik-attr").addEventListener("click", kaikAttractions);

function kaikAttractions() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -42.39948938642581, //Kaikoura
            lng: 173.6805899014221
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['tourist_attraction']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
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
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -43.529981399003944, //Christchurch
            lng: 172.623711848145
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['restaurant']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Christchurch Accommodation
document.getElementById("christ-accomm").addEventListener("click", christAccommodation);

function christAccommodation() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -43.529981399003944, //Christchurch
            lng: 172.623711848145
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['lodging']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Christchurch Attractions
document.getElementById("christ-attr").addEventListener("click", christAttractions);

function christAttractions() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -43.529981399003944, //Christchurch
            lng: 172.623711848145
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['tourist_attraction']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
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
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -41.27064730913376, //Nelson  
            lng: 173.28090584740903
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['restaurant']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Nelson Accommodation
document.getElementById("nelson-accomm").addEventListener("click", nelsAccommodation);

function nelsAccommodation() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -41.27064730913376, //Nelson  
            lng: 173.28090584740903
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['lodging']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Nelson Attractions
document.getElementById("nelson-attr").addEventListener("click", nelsAttractions);

function nelsAttractions() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -41.27064730913376, //Nelson  
            lng: 173.28090584740903
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['tourist_attraction']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
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
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -45.87959636887899, //Dunedin  
            lng: 170.50053578282763
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['restaurant']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Dunedin Accommodation
document.getElementById("dunedin-accomm").addEventListener("click", dunAccommodation);

function dunAccommodation() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -45.87959636887899, //Dunedin  
            lng: 170.50053578282763
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['lodging']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Dunedin Attractions
document.getElementById("dunedin-attr").addEventListener("click", dunAttractions);

function dunAttractions() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -45.87959636887899, //Dunedin  
            lng: 170.50053578282763
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['tourist_attraction']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
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
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -41.513936515129295, //Blenheim
            lng: 173.95903441173152
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['restaurant']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Blenheim Accommodation
document.getElementById("blen-accomm").addEventListener("click", blenAccommodation);

function blenAccommodation() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -41.513936515129295, //Blenheim
            lng: 173.95903441173152
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['lodging']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
};

//Set map to Blenheim Attractions
document.getElementById("blen-attr").addEventListener("click", blenAttractions);

function blenAttractions() {
    map = new google.maps.Map(document.getElementById("si-dest-map"), {
        center: {
            lat: -41.513936515129295, //Blenheim
            lng: 173.95903441173152
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 1000,
        types: ['tourist_attraction']
    }

    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    let prevInfoWindow = false;

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name,
            animation: google.maps.Animation.DROP
        })
        const infoWindow = new google.maps.InfoWindow({
            content: place.name
        });
        marker.addListener("click", function () {
            if (prevInfoWindow) {
                prevInfoWindow.close();
            }
            prevInfoWindow = infoWindow;
            infoWindow.open(map, marker);
        });
    }
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