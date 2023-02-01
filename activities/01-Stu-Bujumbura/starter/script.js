// Add your own API key between the ""
var APIKey = "86ff72916161d4edff0e2159782031aa";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  // Create CODE HERE to Log the queryURL
  console.log(queryURL)
  // Create CODE HERE to log the resulting object
  console.log(response)
  // Create CODE HERE to calculate the temperature (converted from Kelvin)
  // Create CODE HERE to transfer content to HTML
  $('.city').text(response.name)
  $('.wind').text(response.wind.speed)
  $('.humidity').text(response.main.humidity)

  $('.temp').text((parseFloat(response.main.temp)-273.15).toFixed(1))

  // Hint: To convert from Kelvin to Celsius: C = K - 273.15
  // Create CODE HERE to dump the temperature content into HTML

});