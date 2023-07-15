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

function searchCity() {
    const url = 'https://find-places-to-live.p.rapidapi.com/location?query=belmont';
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
        var searchInput = document.getElementById("city-search").value
        var cityStateSelect = document.createElement("select");

        // iterate through the data array of all the different cities and turn them into
        // a dropdown menu for the user to select the correct city and state
        data.forEach(city => {
            var cityOption = document.createElement("option")
            cityOption.textContent = `${city.label}, ${city.state}`
            cityStateSelect.appendChild(cityOption) 
        })
        searchInput.appendChild(cityStateSelect)
        
        searchInput.addEventListener("change", function() {
            getRentPrices(cityOption.urlFragment, cityOption.type)
        })
    })
}


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
        var medianRent = data.real-estate["Median Rent"]
        var medianHomeVal = data.real-estate["Median Home Value"]
        var crimeStats = data.report-card["Crime & Safety"]
        

    })
}

// getRentPrices()

