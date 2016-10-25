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


//make sure the request works and returns something
//
// function logData (data) {
//   console.log(data);
// };
//

// export { logData };
export { searchTracks };
