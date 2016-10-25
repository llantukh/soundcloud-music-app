import $ from "jquery";


function displayResults (data) {

  console.log(data);
  $(".searchResults").empty();

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
