

// -----------------Get Job Options-------------------
// var url = "https://jooble.org/api/";
// var key = "66db19d3-8777-40aa-a3c1-d214c3c4b8ea";
// var SearchKeywords = 'Software Engineer';
// var searchJobLocation = 'Seattle';
// var params = "{ keywords: "+SearchKeywords +", location: "+searchJobLocation;

// function getJobs(){
// //create xmlHttpRequest object
// var http = new XMLHttpRequest();
// //open connection. true - asynchronous, false - synchronous
// http.open("POST", url + key, true);

// //Send the proper header information
// http.setRequestHeader("Content-type", "application/json");
	
// //Callback when the state changes
// http.onreadystatechange = function() {
// 	if(http.readyState == 4 && http.status == 200) {
// 		alert(http.responseText);
//     console.log(JSON.parse(http.responseText));
// 	}
// }
// //Send request to the server
// http.send(params);
// console.log("Got Jobs")
// }

// getJobs();




// var container = $("#card-container");
// function renderCard(){

// var newCard = $("<div>");

// newCard.attr("class", "card");

//   var face1 = $("<div>").attr("class", "face face1").appendTo(newCard);
//   var faceContent1 = $("<div>").attr("class", "content").appendTo(face1);
//   $("<h3>").text("JOB TITLE").appendTo(faceContent1);

//   var face2 = $("<div>").attr("class", "face face2").appendTo(newCard);
//   var faceContent2 = $("<div>").attr("class", "content").appendTo(face2);
//   $("<p>").text("Housing Info").appendTo(faceContent2);
//   var houseListing = $("<p>").attr("class", "houseInfo");
  // $("<li>").text(housePrice).appendTo(houseListing);
  // $("<li>").text(bedRooms).appendTo(houseListing);
  // $("<li>").text(propertyType).appendTo(houseListing);
  // $("<li>").text(squareFootage).appendTo(houseListing);
  
  // up to you if you think it's important
  // $("<li>").text(yearBuilt).appendTo(houseListing);

//   newCard.appendTo(container);

// }

// renderCard()

var JobElementInput = $("#job_input");
var cityElementInput = $("#city_input");
var bathroomElementInput = $("#bathroom_input");
var bedRoomElementInput = $("#bedroom_input");





$("#searchButton").on("click", runSearch);

//search entry point
function runSearch() {
    var JobElementInputValue = JobElementInput.val();
    var cityElementInputValue = cityElementInput.val();
    var bathroomElementInputValue = bathroomElementInput.val();
    var bedRoomElementInputValue = bedRoomElementInput.val();



  console.log("searching");
  

  //filterData();
    console.log(JobElementInput.val());
    console.log(cityElementInput.val());
    console.log(bathroomElementInput.val());
    console.log(bedRoomElementInput.val());


    //check for valid input
    if(JobElementInputValue == ""){
        //alert bad jab input
        return;
    }
    if(cityElementInputValue == ""){
        //alert bad location input
        return;
    }
    if(bathroomElementInputValue == ""){
        
    }
    if(bedRoomElementInputValue == ""){
        
    }

    //get the job input to be replaced with filterData(); but just saved to local storage to save calls
    getJobs(cityElementInput.val(), JobElementInput.val());
    var jobInfo = JSON.parse(localStorage.getItem("JobSearch"));


    //getHousing(cityElementInput.val(), bathroomElementInput.val(), bedRoomElementInput.val());
    var houseInfo = JSON.parse(localStorage.getItem("houseSearch"));

    var pagelength = (jobInfo.totalCount>houseInfo.length)?houseInfo.length:jobInfo.totalCount;

    console.log(pagelength);
    for(var i = 0; i<pagelength;i++){
        renderCard(jobInfo.jobs[i].company, houseInfo[i].formattedAddress);
    }


}


//Temp variables for getHousing Function...to be removed later*


//may need to add state param*
function getHousing(Qcity, Bed_rooms, bath_rooms) {

  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://realty-mole-property-api.p.rapidapi.com/saleListings?city=" +
      Qcity,
    data: {
      
      bedrooms: Bed_rooms,
      bathrooms: bath_rooms,
    },
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1fc0b1137emsha592badbb2ae9fap1a1cbajsn46535d340b45",
      "X-RapidAPI-Host": "realty-mole-property-api.p.rapidapi.com",
    },
  };
    // Api request, .done - on successful callback
  $.ajax(settings).done(function (response) {
    console.log(response);
    localStorage.setItem("houseSearch", JSON.stringify(response));
  });
}



function getJobs(searchCity, searchKeywords) {
 
  var url = "https://jooble.org/api/";
  var key = "66db19d3-8777-40aa-a3c1-d214c3c4b8ea";
  var params = "{ keywords: "+ searchKeywords +","+ "location: " + searchCity+ "}";

  var http = new XMLHttpRequest();
 
  http.open("POST", url + key, true);

  http.setRequestHeader("Content-type", "application/json");
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      localStorage.setItem("JobSearch", http.responseText);
    }
  };
  http.send(params);
}

function filterData() {
  var jobInfo = localStorage.getItem("JobSearch");
  var houseInfo = localStorage.getItem("houseSearch");

  console.log(JSON.parse(jobInfo));
  console.log(JSON.parse(houseInfo));
}



//render single card to page
var container = $("#card-container");

//add more params tommorow eg. Position, salary, description, link
//house price, address, property type,, square footage, year built, description
function renderCard(JobTitle, HouseLink) {
  var newCard = $("<div>");

  newCard.attr("class", "card");

    //top card - jobs
  var face1 = $("<div>").attr("class", "face face1").appendTo(newCard);
  var faceContent1 = $("<div>").attr("class", "content").appendTo(face1);
  $("<h3>").text(JobTitle).appendTo(faceContent1);

    //under card
  var face2 = $("<div>").attr("class", "face face2").appendTo(newCard);
  var faceContent2 = $("<div>").attr("class", "content").appendTo(face2);
  $("<p>").text(HouseLink).appendTo(faceContent2);

  newCard.appendTo(container);
}

//-----------------Get Housing Options-------------------
// var Qcity = 'Austin', Qstate = 'TX';
// var Bed_rooms = 2, bath_rooms =2, limit = 10;

// function getHousing(){
//   const settings = {
//     async: true,
//     crossDomain: true,
//     url: 'https://realty-mole-property-api.p.rapidapi.com/saleListings?city=' + Qcity,
//     data: {
//       state: Qstate,
//       bedrooms: Bed_rooms,
//       bathrooms: bath_rooms
//     },
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '1fc0b1137emsha592badbb2ae9fap1a1cbajsn46535d340b45',
//       'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
//     }
//   };

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
//   }
// getHousing();

