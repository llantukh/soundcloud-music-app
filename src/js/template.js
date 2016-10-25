import $ from "jquery";


function displayResults (data) {

  // console.log(data);
  $(".searchResults").empty();
  // This clears our page of old results bc below we are appending,
  // so if we don't clear the page new results just get added to the bottom.

  data.forEach(function(item){
    // console.log(item)
    var resultsHtml = `
    <div class="resultsBox"
    data-stream="${item.stream_url}">
      <img src = ${item.artwork_url || item.user.avatar_url}>
      <div class = "songName">
        <span class = "songTitle"> ${item.title} <span>
      </div>
      <div class = "artistName">
        <span class = "artist"> ${item.user.username} <span>
      </div>
    </div>`

    $(".searchResults").append(resultsHtml);

  })
};

export { displayResults };

// Function displayResults pulls the information we actually want from our ajax request and puts it on the page. The artist image, name, and song title all get put into regular html divs. The stream_url, however, has to get stored in the resultsBox's main div so that it is still available when we click on the image. 
