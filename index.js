'use strict';

function getDogImage(pic) {
  fetch('https://dog.ceo/api/breeds/image/random/'+pic)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  $('.results-img').replaceWith(
    `<img src="" class="results-img">`)
  console.log(responseJson);
  $('.results-msg').replaceWith(`<h1 class="results-msg">Look at these dogs!</h1>`)
  for (let index = 0; index < responseJson.message.length; index++) {
  $('.results').append(`<img src="${responseJson.message[index]}" class="results-img">`);
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    var pic = $('#picnum').val();
    console.log(pic);
        getDogImage(pic);
    
  });
}
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});