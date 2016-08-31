$(document).ready(function(){

  $.getJSON('https://api.seatgeek.com/2/venues?per_page=3', function(venue){
  	//var myVenue = venue.venues;
  	var myVenue = venue.venues;
  	showResults(venue)
  		$.each(myVenue, function(index, value){
    console.log(value.name);
  });

  //$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139', function(data){
  	//var myZip = 
  	//	$.each(myZip, function(index, value){
    //console.log(value.zip);
  //});
  });

});

function showResults(results){
  //console.log(results);
  var html = "";
  results.venues.forEach(function(value,index){
    html += '<p>' + 'Venue:' + ' ' + value.name + '</p>';
   // console.log(index,value);
  });
  $('#ping').html(html);
}