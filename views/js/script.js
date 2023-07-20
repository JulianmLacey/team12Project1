var JobElementInput = $("#job_input");
var cityElementInput = $("#city_input");
var bathroomElementInput = $("#bathroom_input");
var bedRoomElementInput = $("#bedroom_input");

function runSearch() {
  let JobElementInputValue = JobElementInput.val();
  let cityElementInputValue = cityElementInput.val();
  let bathroomElementInputValue = bathroomElementInput.val();
  let bedRoomElementInputValue = bedRoomElementInput.val();

  console.log("searching");

  //filterData();
  console.log(JobElementInput.val());
  console.log(cityElementInput.val());
  console.log(bathroomElementInput.val());
  console.log(bedRoomElementInput.val());

  //check for valid input
  if (
    JobElementInputValue == "" ||
    bathroomElementInputValue == "Bathrooms" ||
    bedRoomElementInputValue == "Bedrooms" ||
    cityElementInputValue == ""
  ) {
    //alert bad jab input›
    return;
  }

  getJobs(cityElementInput.val(), JobElementInput.val());
  var jobInfo = JSON.parse(localStorage.getItem("JobSearch"));

  getHousing(
    cityElementInput.val(),
    bathroomElementInput.val(),
    bedRoomElementInput.val()
  );
  var houseInfo = JSON.parse(localStorage.getItem("houseSearch"));

  var pagelength = 25 > houseInfo.length ? houseInfo.length : 25;

  console.log(pagelength);
  for (var i = 0; i < pagelength; i++) {
    renderCard(SEjobs[i], houseInfo[i]);
  }
}

function getHousing(Qcity, Bed_rooms, bath_rooms) {
  const paramsURL = `https://realty-mole-property-api.p.rapidapi.com/saleListings?city=${Qcity}&bedrooms=${Bed_rooms}&bathrooms=${bath_rooms}&limit=25`;

  //request settings
  const settings = {
    async: true,
    crossDomain: true,
    url: paramsURL,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1fc0b1137emsha592badbb2ae9fap1a1cbajsn46535d340b45",
      "X-RapidAPI-Host": "realty-mole-property-api.p.rapidapi.com",
    },
  };

  //Request and set to local storage
  $.ajax(settings).done(function (response) {
    localStorage.setItem("houseSearch", JSON.stringify(response));
  });
}

//search for jobs
function getJobs(searchCity, searchKeywords) {
  //Variable to put into param
  let url = "https://jooble.org/api/";
  let key = "66db19d3-8777-40aa-a3c1-d214c3c4b8ea";
  let params =
    "{ keywords: " + searchKeywords + "," + "location: " + searchCity + "}";

  let http = new XMLHttpRequest();
  //open connection
  http.open("POST", url + key, true);

  //Send the header information
  http.setRequestHeader("Content-type", "application/json");

  //Callback when the state changes
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
      //localStorage.setItem("JobSearch", http.responseText);
    }
  };
  //Send request to the server
  http.send(params);
}

//render single card to page
var container = $("#card-container");

function renderCard(jobinfo, HouseLink) {
  let newCard = $("<div>");

  newCard.attr("class", "card");

  let face1 = $("<div>").attr("class", "face face1").appendTo(newCard);
  let faceContent1 = $("<div>").attr("class", "content").appendTo(face1);
  $("<h3>")
    .text("Position: " + jobinfo.title)
    .appendTo(faceContent1);
  $("<h4>")
    .text("Salary: " + jobinfo.Salary)
    .appendTo(faceContent1);
  $("<h4>")
    .text("Company: " + jobinfo.company)
    .appendTo(faceContent1);

  let face2 = $("<div>").attr("class", "face face2").appendTo(newCard);
  let faceContent2 = $("<div>").attr("class", "content").appendTo(face2);
  $("<h2>").text(HouseLink.propertyType).appendTo(faceContent2);
  $("<h4>").text(HouseLink.formattedAddress).appendTo(faceContent2);
  $("<h5>").text(HouseLink.price).appendTo(faceContent2);
  $("<p>")
    .text("Property Type: " + HouseLink.propertyType)
    .appendTo(faceContent2);
  $("<p>")
    .text("Property Size: " + HouseLink.squareFootage)
    .appendTo(faceContent2);
  $("<p>")
    .text("Built in " + HouseLink.yearBuilt)
    .appendTo(faceContent2);

  newCard.appendTo(container);
}
