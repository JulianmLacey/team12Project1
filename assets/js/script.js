// *Jerome suggested that this be considered a stretch challenge, so only prioritize it after we complete core features

// let map;
// let center;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");
//   const { LatLng, LatLngBounds } = await google.maps.importLibrary("core");

//   center = new LatLng(37.4161493, -122.0812166);
//   map = new Map(document.getElementById("map"), {
//     center: center,
//     zoom: 14,
//     // ...
//   });
//   findPlaces(LatLng, LatLngBounds);
// }

// async function findPlaces(LatLng, LatLngBounds) {
//   const { Place } = await google.maps.importLibrary("places");
//   //@ts-ignore
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//   const request = {
//     query: "Tacos in Mountain View",
//     fields: [
//       "displayName",
//       "location",
//       "businessStatus",
//       "hasWheelchairAccessibleEntrance",
//     ],
//     includedType: "restaurant",
//     isOpenNow: true,
//     language: "en-US",
//     maxResultCount: 7,
//     minRating: 3.2,
//     region: "us",
//     useStrictTypeFiltering: false,
//   };
//   //@ts-ignore
//   const { places } = await Place.searchByText(request);
//   const bound = new LatLngBounds();

//   if (places.length) {
//     console.log(places);
//     // Loop through and get all the results.
//     places.forEach((place) => {
//       const markerView = new AdvancedMarkerElement({
//         map,
//         position: place.location,
//         title: place.displayName,
//       });

//       bound.extend(new LatLng(place.location));
//       console.log(place);
//     });
//     map.setCenter(bound.getCenter());
//   } else {
//     console.log("No results");
//   }
// }

// initMap();

// *Jerome suggested that this be considered a stretch challenge, so only prioritize it after we complete core features
// function dojCrime() {
//     var url = "https://data.ojp.usdoj.gov/resource/gcuy-rt5g.json?year=2021&$limit=500"
    
//     fetch(url).then(function (response) {
//         console.log(response)
//         return response.json()
//     }).then(function(data){
//         console.log(data)
//     })
// }

// dojCrime()


var submitCity = document.getElementById("submit-city")

submitCity.addEventListener("click", function() {
    var searchInput = document.getElementById("city-search").value;
    searchCity(searchInput)
})

function searchCity(searchInput) {
    var searchForm = document.getElementById("search")
    
        var cityStateSelect = document.createElement("select");

        const url = `https://find-places-to-live.p.rapidapi.com/location?query=${searchInput}`;
        const options = {
	    method: 'GET',
	    headers: {
	    	'X-RapidAPI-Key': 'ef09a4f5bbmsh3dd4fee7e15cf2ep1c973ejsna3a2ad737be5',
	    	'X-RapidAPI-Host': 'find-places-to-live.p.rapidapi.com'
	        }
        };
        
        fetch(url, options)
            .then(function (response) {
                console.log(response)
                return response.json()
        })
            .then(function (data) {
            console.log(data)

            // iterate through the data array of all the different cities and turn them into
            // a dropdown menu for the user to select the correct city and state
            data.forEach(city => {
                var cityOption = document.createElement("option")
                cityOption.textContent = `${city.label}, ${city.state}`
                cityOption.setAttribute("type", city.type)
                cityOption.setAttribute("name", city.urlFragment)
                cityStateSelect.appendChild(cityOption) 
            })
            
            searchForm.appendChild(cityStateSelect)

            cityStateSelect.addEventListener("change", function() {
                var selectedCity = cityStateSelect.options[cityStateSelect.selectedIndex]
                
                // will need to find a way to change city name textContent dynamically 
                var cityNameDisplay = document.getElementById("city-1");

                cityNameDisplay.textContent = selectedCity.textContent
                var cityUrl = selectedCity.getAttribute("name");
                var cityType = selectedCity.getAttribute("type");
                

                getRentPrices(cityUrl, cityType)
                console.log(typeof selectedCity.type)
                debugger
            })
        })
        debugger
    // })
}
// searchCity()


function getRentPrices(city, type) {
    const url = `https://find-places-to-live.p.rapidapi.com/placesToLive?place=${city}&type=${type}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef09a4f5bbmsh3dd4fee7e15cf2ep1c973ejsna3a2ad737be5',
		'X-RapidAPI-Host': 'find-places-to-live.p.rapidapi.com'
	}
};

    fetch(url, options).then(function (response) {
        console.log(response)
        return response.json()
    }).then(function (data) {
        console.log(data)
        var medianRent = data["real-estate"]["Median Rent"]["value"];
    
    
    
    //    var medianHomeVal = data["real-estate"]["Median Home Value"];
    //    var reportCard = data["report-card"];
    //    console.log(reportCard)
    //    var cityOne = document.getElementById("city-one");

    //    var rent = document.createElement("ul")
    //    rent.textContent = medianRent

    //    var reportCardList = Object.keys(reportCard);
    //    console.log(reportCardList)

    //    // need job income. will attempt to set background color of median income based on earning
    //    if (medianRent < jobIncome) {
    //        medianRent.style.backgroundColor = "green"
    //    } else if (Math.floor(jobIncome *.5) < medianRent) {
    //        medianRent.style.backgroundColor = "yellow"
    //    } else {
    //        medianRent.style.backgroundColor = "red"
    //    }


        
    })
}

// getRentPrices()

