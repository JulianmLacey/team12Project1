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

function getRentPrices() {
    const url = 'https://find-places-to-live.p.rapidapi.com/placesToLive?place=belmont-san-mateo-ca&type=Town';
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
    }).then(function (data){
        console.log(data)
    })
}

getRentPrices()