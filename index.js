'use strict';

function getDogImage(pic) {
  fetch('https://dog.ceo/api/breeds/image/random/'+pic)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (let index = 0; index < responseJson.message.length; index++) {
  $('.results').append(`<img src="${responseJson.message[index]}" class="results-img">`);
  }
//   //replace the existing image with the new one
//   $('.results-img').replaceWith(
//     `<img src="${responseJson.message}" class="results-img">`
//   )
//   //display the results section
//   $('.results').removeClass('hidden');
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