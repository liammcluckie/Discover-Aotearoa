//Display flight table data

//AKL
document.getElementById("akl-flight").addEventListener("click", aklFlightTable);

function aklFlightTable() {
    const flightTable = document.getElementById("display-flights");
    flightTable.style.display = "block";
};

//Wellington
document.getElementById("well-flight").addEventListener("click", wellFlightTable);

function wellFlightTable() {
    const flightTable = document.getElementById("display-flights");
    flightTable.style.display = "block";
};

//Initial fetch code taken from https://rapidapi.com/skyscanner/api/skyscanner-flight-search

//Display cheapest flights from Skyscanner Database

//AKL Flights
document.getElementById("akl-flight").addEventListener("click", flightsAkl);

function flightsAkl() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/UK-sky/AKL-sky/anytime?inboundpartialdate=2019-12-01", {
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
        const endDest = json.Places[1].CityName;
        const carriers = json.Carriers[0].Name;
        const quotes = json.Quotes[0].MinPrice;
        document.getElementById("start-dest").innerHTML = startDest;
        document.getElementById("end-dest").innerHTML = endDest;
        document.getElementById("carrier").innerHTML = carriers;
        document.getElementById("quote").innerHTML = `£` + quotes;
    })
    .catch(err => {
	    document.getElementById("flights-error-msg").innerHTML = "Unfortunately our partners system is down, please try again later";
    });
};

//Wellington Flights
document.getElementById("well-flight").addEventListener("click", flightsWell);

function flightsWell() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/UK-sky/WLGN-sky/anytime?inboundpartialdate=2019-12-01", {
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
        const startDest = json.Places[2].CityName;
        const endDest = json.Places[6].Name;
        const carriers = json.Carriers[0].Name;
        const quotes = json.Quotes[0].MinPrice;
        document.getElementById("start-dest").innerHTML = startDest;
        document.getElementById("end-dest").innerHTML = endDest;
        document.getElementById("carrier").innerHTML = carriers;
        document.getElementById("quote").innerHTML = `£` + quotes;
    })
    .catch(err => {
	    document.getElementById("flights-error-msg").innerHTML = "Unfortunately our partners system is down, please try again later";
    });
};