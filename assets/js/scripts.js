/*

//-----------------Get Job Options-------------------
var url = "https://jooble.org/api/";
var key = "66db19d3-8777-40aa-a3c1-d214c3c4b8ea";
var SearchKeywords = 'Software Engineer';
var searchJobLocation = 'Seattle';
var params = "{ keywords: "+SearchKeywords +", location: "+searchJobLocation;

function getJobs(){
//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		alert(http.responseText);
    console.log(JSON.parse(http.responseText));
	}
}
//Send request to the server
http.send(params);
console.log("Got Jobs")
}

getJobs();

*/


var container = $("#card-container");
function renderCard(){

var newCard = $("<div>");

newCard.attr("class", "card");

  var face1 = $("<div>").attr("class", "face face1").appendTo(newCard);
  var faceContent1 = $("<div>").attr("class", "content").appendTo(face1);
  $("<h3>").text("JOB TITLE").appendTo(faceContent1);

  var face2 = $("<div>").attr("class", "face face2").appendTo(newCard);
  var faceContent2 = $("<div>").attr("class", "content").appendTo(face2);
  $("<p>").text("JOB STUFFF").appendTo(faceContent2);


  newCard.appendTo(container);

}

renderCard();
renderCard();
renderCard();
renderCard();
renderCard();



//-----------------Get Housing Options-------------------
var Qcity = 'Austin', Qstate = 'TX';
var Bed_rooms = 2, bath_rooms =2, limit = 10;

function getHousing(){
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://realty-mole-property-api.p.rapidapi.com/saleListings?city=' + Qcity,
    data: {
      state: Qstate,
      bedrooms: Bed_rooms,
      bathrooms: bath_rooms
    },
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1fc0b1137emsha592badbb2ae9fap1a1cbajsn46535d340b45',
      'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  }
getHousing();