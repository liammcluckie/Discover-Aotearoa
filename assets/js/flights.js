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
        document.getElementById("akl-start-dest").innerHTML = startDest;
        document.getElementById("akl-end-dest").innerHTML = endDest;
        document.getElementById("akl-carrier").innerHTML = carriers;
        document.getElementById("akl-quote").innerHTML = `£` + quotes;
    });
};

$(document).ready(function() {
    flightsAkl();
});

