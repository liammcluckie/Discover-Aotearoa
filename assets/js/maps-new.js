//Original code taken from CI learning material and customised for this project

//Code for Google Places search taken from https://stackoverflow.com/questions/58206884/how-do-i-get-google-maps-to-display-nearby-restaurants and customised for this project

//Code for info window functions taken from https://stackoverflow.com/questions/2223574/google-maps-auto-close-open-infowindows and customised for this project

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
document.getElementById("dest-btn-one").addEventListener("click", mapWell);

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
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -41.29235450909053, //Wellington
            lng: 174.77948265394016
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

//Set map to Wellington Accommodation
document.getElementById("welly-accomm").addEventListener("click", wellAccommodation);

function wellAccommodation() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -41.29235450909053, //Wellington
            lng: 174.77948265394016
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

//Set map to Wellington Attractions
document.getElementById("welly-attr").addEventListener("click", wellAttractions);

function wellAttractions() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -41.29235450909053, //Wellington
            lng: 174.77948265394016
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

//Set map to Martinborough
document.getElementById("dest-btn-two").addEventListener("click", mapMart);

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
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -41.21998622909235, //Martinborough
            lng: 175.46008741862477
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

//Set map to Martinborough Accommodation
document.getElementById("mart-accomm").addEventListener("click", martAccommodation);

function martAccommodation() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -41.21998622909235, //Martinborough
            lng: 175.46008741862477
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

//Set map to Martinborough Attractions
document.getElementById("mart-attr").addEventListener("click", martAttraction);

function martAttraction() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -41.21998622909235, //Martinborough
            lng: 175.46008741862477
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

//Set map to Rotorua
document.getElementById("dest-btn-three").addEventListener("click", mapRot);

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
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -38.14460134789613, //Rotorua
            lng: 176.23795125681022
        },
        zoom: 13
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Rotorua Accommodation
document.getElementById("rotorua-accomm").addEventListener("click", rotAccommodation);

function rotAccommodation() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -38.14460134789613, //Rotorua
            lng: 176.23795125681022
        },
        zoom: 13
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Rotorua Attractions
document.getElementById("rotorua-attr").addEventListener("click", rotAttractions);

function rotAttractions() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -38.14460134789613, //Rotorua
            lng: 176.23795125681022
        },
        zoom: 13
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Coromandel
document.getElementById("dest-btn-four").addEventListener("click", mapCoro);

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
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -36.7555547584621, //Coromandel
            lng: 175.50151882207095
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Coromandel Accommodation
document.getElementById("coromandel-accomm").addEventListener("click", coroAccommodation);

function coroAccommodation() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -36.7555547584621, //Coromandel
            lng: 175.50151882207095
        },
        zoom: 13
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Coromandel Attractions
document.getElementById("coromandel-attr").addEventListener("click", coroAttractions);

function coroAttractions() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -36.7555547584621, //Coromandel
            lng: 175.50151882207095
        },
        zoom: 13
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Maunganui
document.getElementById("dest-btn-five").addEventListener("click", mapMaung);

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
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -37.66373971996193, //Maunganui
            lng: 176.20571233871715
        },
        zoom: 10
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Maunganui Accommodation
document.getElementById("maung-accomm").addEventListener("click", maungAccommodation);

function maungAccommodation() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -37.66373971996193, //Maunganui
            lng: 176.20571233871715
        },
        zoom: 10
    });

    const request = {
        location: map.getCenter(),
        radius: 10000,
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

//Set map to Maunganui Attractions
document.getElementById("maung-attr").addEventListener("click", maungAttractions);

function maungAttractions() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -37.66373971996193, //Maunganui
            lng: 176.20571233871715
        },
        zoom: 10
    });

    const request = {
        location: map.getCenter(),
        radius: 10000,
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

//Set map to Auckland
document.getElementById("dest-btn-six").addEventListener("click", mapAkl);

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
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -36.85130339882221, //AKL
            lng: 174.76338912848433
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Auckland Accommodation
document.getElementById("akl-accomm").addEventListener("click", aklAccommodation);

function aklAccommodation() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -36.85130339882221, //AKL
            lng: 174.76338912848433
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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

//Set map to Auckland Attractions
document.getElementById("akl-attr").addEventListener("click", aklAttractions);

function aklAttractions() {
    map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        center: {
            lat: -36.85130339882221, //AKL
            lng: 174.76338912848433
        },
        zoom: 14
    });

    const request = {
        location: map.getCenter(),
        radius: 100000,
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
let topPickButtons = document.querySelectorAll(".destinations-btn");
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