//Google Maps API Key
const API = "AIzaSyBJUmFV06QkhbGMPiH8aA0vpJ8CDb4gKfc";

function initMap() {
    let map = new google.maps.Map(document.getElementById("ni-dest-map"), {
        zoom: 5,
        center: {
            lat: -39.52916921878557,
            lng: 175.08429833641372
        }
    });
}