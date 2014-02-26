/*
 * This requires: restler
 * To install, type 'npm install restler'
 * Tested with node.js v0.6.14
 */

var util = require('util');
var restclient = require('restler');
var request = require('request');

//var fxml_url = 'http://flightxml.flightaware.com/json/FlightXML2/';
var foodery = 'http://www.kimonolabs.com/api/8ab8g67o?apikey=7f8726a3ca95deffb99820d4dc373c91';
var foodler = 'http://www.kimonolabs.com/api/6n9804eg?apikey=7f8726a3ca95deffb99820d4dc373c91'
//var username = 'YOUR_USERNAME';
//var apiKey = 'YOUR_APIKEY';
request(foodery, function(err, response, body){
  var data = JSON.parse(body);
  var items = data.results.Food;
  for (var i=0; i<items.length; i++){
    var title = items[i].Title;
    var picture = items[i].Picture.src;
    var allergens = items[i].Allergens;
  }
});
request(foodler, function(err, response, body){
  var data = JSON.parse(body);
  console.log(data.results.collection1);
  /*
  for (var i=0; i<items.length; i++){
    var title = items[i].Title;
    var picture = items[i].Picture.src;
    var allergens = items[i].Allergens;
    console.log(allergens);
  }*/
});
/*
restclient.get(fxml_url + 'MetarEx', {
    username: username,
    password: apiKey,
    query: {airport: 'KAUS', howMany: 1}
}).on('success', function(result, response) {
    // util.puts(util.inspect(result, true, null));
    var entry = result.MetarExResult.metar[0];
    util.puts('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');
});

restclient.get(fxml_url + 'Enroute', {
    username: username,
    password: apiKey,
    query: {airport: 'KIAH', howMany: 10, filter: '', offset: 0}
}).on('success', function(result, response) {
    util.puts('Aircraft en route to KIAH:');
    //util.puts(util.inspect(result, true, null));
    var flights = result.EnrouteResult.enroute;
    for (i in flights) {
      var flight = flights[i];
      //util.puts(util.inspect(flight));
      util.puts(flight.ident + ' (' + flight.aircrafttype + ')\t' + 
          flight.originName + ' (' + flight.origin + ')');
    }
});*/