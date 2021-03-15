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