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