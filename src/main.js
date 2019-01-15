import { Giphy } from './giphy';
import $ from 'jquery';

$(document).ready(function(){

  // jQuery Weather App
  // $('#weatherLocation').click(function() {
  //   let city = $('#location').val();
  //   $('#location').val("");
  //   $.ajax({
  //     url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER}`,
  //     type: 'GET',
  //     data: {
  //       format: 'json'
  //     },
  //     success: function(response) {
  //       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
  //       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
  //     },
  //     error: function() {
  //       $('#errors').text("There was an error processing your request. Please try again.");
  //     }
  //   });
  // });


// jQuery giphy search
  // $('#search').click(function(){
  //   let term = $('#searchterm').val();
  //   $('#searchterm').val("");
  //   $.ajax({
  //     url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${term}`,
  //     type: 'GET',
  //     data: {
  //       format: 'json'
  //     },
  //     success: function(response){
  //       $('.showURL').text(`${response.data[0].url}`)
  //     },
  //     error: function(){
  //       $('#errors').text("There was an error.")
  //     }
  //   });
  // });

  //vanilla JS weather
  $('#weatherLocation').click(function(){
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log("Hi");
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response){
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });

  //vanilla JS Giphy
  $('#search').click(function(){
    const term = $('#searchterm').val();
    $('#searchterm').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${term}`;

    request.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response){
      $('.showURL').text(`${response.data[0].url}`);
    }
  });
});
