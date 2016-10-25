// import all the functions we need from other js files
import $ from "jquery";
import clientId from "./token.js";
import { searchTracks } from "./soundcloud.js";
import { displayResults } from "./template.js";
// import { logData } from "./soundcloud.js"
// (logData is the function I used to make sure the ajax request was working before I created the displayResults function)


searchTracks().then(displayResults);
// makeRequest.then(logData);
// this runs the ajax function and then displays the results on the screen.

function searchArtist (event) {
  var input = $(".artistSearch").val();
  searchTracks(input).then(displayResults);
  event.preventDefault();
};

$(".searchBox").submit(searchArtist);
// function searchArtist is passed an event bc we want to run an event handler on it later. var input pulls the value of whatever is written in the text box on the page. the input then gets passed to searchTracks (the ajax request) and then the results are displayed on the screen through the displayResults function. event.preventDefault keeps the page from refreshing every time the search button is pressed.
// This line of code: $(".searchBox").submit(searchArtist); is basically the click event, but we are not doing a click event we are doing a submit event on the searchBox form.

function playArtist (event) {
  console.log("this is", this.dataset.stream);
  var songURL = this.dataset.stream + "?client_id=" + clientId;
  var songPlayer = $("audio")[0];
  songPlayer.src = songURL;
  songPlayer.play();
};

//this says run the playArtist function only when you click on the resultsBox
$(document).on("click", ".resultsBox", playArtist);




// click handler
// .... var input = $("....").val();
// .... searchTracks(input).then(displayResults)
// update the page with the new results

// click handler for `resultsBox`
// all click handlers get an event ... with a target
// ... look up the audio tag on your page
// ... change the "source" of audio to the song they clicked, the stream url
// ... audioTag.play(); maybe check audioTag.paused
