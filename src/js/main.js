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
// Function searchArtist is passed an event bc we want to run an event handler on it later. Var input pulls the value of whatever is written in the text box on the page. The input then gets passed to searchTracks (the ajax request) and then the results are displayed on the screen through the displayResults function. event.preventDefault keeps the page from refreshing every time the search button is pressed.
// This line of code: $(".searchBox").submit(searchArtist); is basically the click event, but we are not doing a click event we are doing a submit event on the searchBox form.

function playArtist (event) {
  // console.log("this is", this.dataset.stream);
  var songURL = this.dataset.stream + "?client_id=" + clientId;
  var songPlayer = $("audio")[0];
  songPlayer.src = songURL;
  songPlayer.play();
};
// Function searchArtist is what runs when you click on which song you want to play. Var songURL pulls the stream url from where we stored it in our div on our template page and then adds the client id to the end of that url so that the ajax request can run through. VAr songPlayer pulls the audio tag from out html page; then we set the play source equal to the songURL. And finally we tell the player to actually play the song. This function is called below:

$(document).on("click", ".resultsBox", playArtist);
//this says run the playArtist function only when you click on the resultsBox.



//Below are the instructions Brit gave me on how to write the functions above:

// click handler
// .... var input = $("....").val();
// .... searchTracks(input).then(displayResults)
// update the page with the new results

// click handler for `resultsBox`
// all click handlers get an event ... with a target
// ... look up the audio tag on your page
// ... change the "source" of audio to the song they clicked, the stream url
// ... audioTag.play(); maybe check audioTag.paused
