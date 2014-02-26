/*
 * This requires: restler
 * To install, type 'npm install restler'
 * Tested with node.js v0.6.14
 * Kimono APIs link (you must me signed in): http://www.kimonolabs.com/apis

 */

var util = require('util');
var restclient = require('restler');
var request = require('request');
var parseString = require('xml2js').parseString;


var foodery = 'http://www.kimonolabs.com/api/8ab8g67o?apikey=7f8726a3ca95deffb99820d4dc373c91';



/*
  Foodery Scraper
  GETs weekley foodery menu using Custom Kimono API "The Foodery Weekly"(refreshes daily).
  Link: http://www.kimonolabs.com/apis/8ab8g67o
*/
request(foodery , function(err, response, body){
  var data = JSON.parse(body);
  var items = data.results.Food;
  for (var i=0; i<items.length; i++){
    var title = items[i].Title;
    var picture = items[i].Picture.src;
    var allergens = items[i].Allergens;
  }
});

/*
  General Foodler Scraper
  GETs all available resturant information using custom Kimono API "Foodler".
  Link: http://www.kimonolabs.com/apis/2u1eakeo
*/
var foodlerTitle = 'http://www.kimonolabs.com/api/cho51hok?apikey=7f8726a3ca95deffb99820d4dc373c91';
request(foodler, function(err, response, body){
  var data = JSON.parse(body);
  //console.log(data.results.collection1);
  /*
  for (var i=0; i<items.length; i++){
    var title = items[i].Title;
    var picture = items[i].Picture.src;
    var allergens = items[i].Allergens;
    console.log(allergens);
  }
  /////Still needs work/////
  */
});

/*
  Foodler Scraper: Resturant titles
  GETs just resturant titles (more accurate) using custom Kimono API "Foodler Titles". 
  Link: http://www.kimonolabs.com/apis/cho51hok 
*/
var foodler = 'http://www.kimonolabs.com/api/6ftclxke?apikey=7f8726a3ca95deffb99820d4dc373c91';
var filter = '&'
request(foodlerTitle + filter, function(err, response, body){
  var data = JSON.parse(body);
  var places = data.results.places;
  for (var i=0; i<places.length; i++){
    var title = places[i].title.text;
    var fulllink = places[i].title.href;
    var link = fulllink.split(";", 1);
    console.log(title + ' ' + link);
  }
});

/*
  Supermarket Scraper
  Uses Supermarker API Trial to get grocery store data
  Link: http://www.supermarketapi.com/Methods_v1.aspx
*/
var market = 'http://www.SupermarketAPI.com/api.asmx/';
var marketApiKey = '274f79f561';
var command = 'GetGroceries';
var property = 'SearchText';
var value = 'Peach';
var marketreq = market + command + '?APIKEY=' + marketApiKey + '&' + property + '=' + value;

request(marketreq, function(err, response, body){
  parseString(body, function(err, result){
    var output = result.ArrayOfString.string;
    //console.log(output);
  })
});



/*
------------------------------Not Being Used---------------------------------

//Code for using rest client with google planes API

//Config
var fxml_url = 'http://flightxml.flightaware.com/json/FlightXML2/';
var username = 'YOUR_USERNAME';
var apiKey = 'YOUR_APIKEY';

//Flights at airport: KAUS
restclient.get(fxml_url + 'MetarEx', {
    username: username,
    password: apiKey,
    query: {airport: 'KAUS', howMany: 1}
}).on('success', function(result, response) {
    // util.puts(util.inspect(result, true, null));
    var entry = result.MetarExResult.metar[0];
    util.puts('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');
});
//List origin and aircraft type from KIAH
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
});
------------------------------Not Being Used---------------------------------
*/