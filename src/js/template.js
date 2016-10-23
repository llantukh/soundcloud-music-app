import $ from "jquery";


function displayResults (data){

data.forEach(function(item){
  console.log(item)
  var resultsHtml = `<div class = "resultsBox">
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
