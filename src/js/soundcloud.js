import $ from 'jquery';
import clientId from "./token.js";

console.log(clientId);

//create ajax setup for the client id since it has to be in the url
$.ajaxSetup ({
  data: {
    client_id: clientId
  }
});

//make ajax request:
function searchTracks (query) {
  return $.ajax({
    url: "https://api.soundcloud.com/tracks",
    data: {
      q: query
    }
  });
}
// Function searchTracks gives us the ability to make the ajax request as many times as we want. We give it the parameter query bc it will be passed information later. The data:{q:query} has to be there bc soundcloud's API tells us that it looks for the q when you give it a string (artist or song name).


//make sure the request works and returns something
//
// function logData (data) {
//   console.log(data);
// };
//

// export { logData };
export { searchTracks };
