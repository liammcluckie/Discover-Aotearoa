//Display flight table data

//Christchurch
document.getElementById("christ-flight").addEventListener("click", christFlightTable);

function christFlightTable() {
    const flightTable = document.getElementById("display-flights");
    flightTable.style.display = "block";
};

//Queenstown
document.getElementById("queens-flight").addEventListener("click", queensFlightTable);

function queensFlightTable() {
    const flightTable = document.getElementById("display-flights");
    flightTable.style.display = "block";
};

//Dunedin
document.getElementById("dun-flight").addEventListener("click", dunFlightTable);

function dunFlightTable() {
    const flightTable = document.getElementById("display-flights");
    flightTable.style.display = "block";
};

//Initial fetch code taken from https://rapidapi.com/skyscanner/api/skyscanner-flight-search

//Display cheapest flights from Skyscanner Database

//Christchurch Flights
document.getElementById("christ-flight").addEventListener("click", flightsChrist);

function flightsChrist() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/UK-sky/CHC-sky/anytime?inboundpartialdate=2019-12-01", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71dcc459aemsh21a782fd290145bp13f38cjsnd76cee169067",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        const startDest = json.Places[1].CityName;
        const endDest = json.Places[2].CityName;
        const carriers = json.Carriers[0].Name;
        const quotes = json.Quotes[0].MinPrice;
        document.getElementById("start-dest").innerHTML = startDest;
        document.getElementById("end-dest").innerHTML = endDest;
        document.getElementById("carrier").innerHTML = carriers;
        document.getElementById("quote").innerHTML = `£` + quotes;
        document.getElementById("flights-error-msg").innerHTML = "";
    })
    .catch(err => {
        document.getElementById("flights-error-msg").innerHTML = "Unfortunately our partners system is down, please try again later";
        document.getElementById("start-dest").innerHTML = "";
        document.getElementById("end-dest").innerHTML = "";
        document.getElementById("carrier").innerHTML = "";
        document.getElementById("quote").innerHTML = "";
    });
};

//Queenstown Flights
document.getElementById("queens-flight").addEventListener("click", flightsQueens);

function flightsQueens() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/UK-sky/ZQN-sky/anytime?inboundpartialdate=2019-12-01", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71dcc459aemsh21a782fd290145bp13f38cjsnd76cee169067",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        const startDest = json.Places[0].CityName;
        const endDest = json.Places[8].Name;
        const carriers = json.Carriers[2].Name;
        const quotes = json.Quotes[0].MinPrice;
        document.getElementById("start-dest").innerHTML = startDest;
        document.getElementById("end-dest").innerHTML = endDest;
        document.getElementById("carrier").innerHTML = carriers;
        document.getElementById("quote").innerHTML = `£` + quotes;
        document.getElementById("flights-error-msg").innerHTML = "";
    })
    .catch(err => {
        document.getElementById("flights-error-msg").innerHTML = "Unfortunately our partners system is down, please try again later";
        document.getElementById("start-dest").innerHTML = "";
        document.getElementById("end-dest").innerHTML = "";
        document.getElementById("carrier").innerHTML = "";
        document.getElementById("quote").innerHTML = "";
    });
};

//Dunedin Flights
document.getElementById("dun-flight").addEventListener("click", flightsDun);

function flightsDun() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/UK-sky/DUD-sky/anytime?inboundpartialdate=2019-12-01", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71dcc459aemsh21a782fd290145bp13f38cjsnd76cee169067",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        const startDest = json.Places[1].CityName;
        const endDest = json.Places[0].Name;
        const carriers = json.Carriers[0].Name;
        const quotes = json.Quotes[0].MinPrice;
        document.getElementById("start-dest").innerHTML = startDest;
        document.getElementById("end-dest").innerHTML = endDest;
        document.getElementById("carrier").innerHTML = carriers;
        document.getElementById("quote").innerHTML = `£` + quotes;
        document.getElementById("flights-error-msg").innerHTML = "";
    })
    .catch(err => {
        document.getElementById("flights-error-msg").innerHTML = "Unfortunately our partners system is down, please try again later";
        document.getElementById("start-dest").innerHTML = "";
        document.getElementById("end-dest").innerHTML = "";
        document.getElementById("carrier").innerHTML = "";
        document.getElementById("quote").innerHTML = "";
    });
};