//jQuery Attempt:
// $(document).ready(function() {
//   $.get('http://www.omdbapi.com/?s=minions', function(data,status){
//     $('#button').on('click', function() {
//       $('picDiv').append(data.Search.Poster)
//     });
//     // for (var i = 0; i < data.length; i++) {
//     //   console.log(data[i]);
//     // }
//     console.log(data.Search);
//   });
// })

//javascript:

var request = new XMLHttpRequest();
var input = document.getElementById('input');
var picDiv = document.getElementById('picDiv');
var button = document.getElementById('button');
var h1 = document.getElementById('h1');

button.addEventListener('click', function(event){
  event.preventDefault();
  request.onreadystatechange = function(){
    if (request.readyState === 4) {
      if (request.status < 400) {
        var result = JSON.parse(request.responseText);
        console.log(result);
        picDiv.innerHTML='';
        h1.innerHTML='';
        result.Search.forEach(function(movie){
          if(movie.Poster === "N/A"){
            picDiv.innerHMTL = '<h1>Title: </h1' + '<h1>Not Shown</h1>';
          }else {
            picDiv.innerHTML += '<img src=' + movie.Poster + '>';
            picDiv.innerHTML += '<h1>Title: ' + movie.Title + '</h1>';
          }
        })
      }
    }
  }
  request.open('GET', 'http://www.omdbapi.com/?s=' + input.value);
  request.send();
})

//
