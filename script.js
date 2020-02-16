document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);

    const APIKEY = '30c7a38b25886b96005dfbe98b8bdca7'; //not so secret key :p
const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=" + APIKEY;
     
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        //put some of the json data in html
        let results = "";
        results += '<div class = "current"><h2>Current Weather in ' + json.name + ":</h2>";
        for (let i=0; i < json.weather.length; i++) {
          results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;F</h2>";
        results += "<p>";
        // add temp range: min-max
        results += "Low: " + json.main.temp_min + "&deg;F, High: " + json.main.temp_max + "&deg;F<br/>";
        results += "Wind Speed: " + json.wind.speed + " mph<br/>Looks Like: "; //adding wind data
        for (let i=0; i < json.weather.length; i++) {
            results += json.weather[i].description;
            if (i !== json.weather.length - 1)
                results += ", "
        }
        results += "</p></div>";
        // update html div id with data. 
        document.getElementById("weatherResults").innerHTML = results;
        //console.log(json);
    });

    // forecast code here
    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=" + APIKEY;
    fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        let forecast = "<h2>Forecast:</h2>";
      for (let i=0; i < json.list.length; i++) {

        forecast += "<div class = 'forecast'><h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
        // forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        forecast += '<h2>' + json.list[i].main.temp + " &deg;F</h2>";
       // forecast += '<p>Low: ' + json.list[i].main.temp_min + "&deg;F, High: " + json.list[i].main.temp_max + "&deg;F<br/>"
        forecast += "<p>Wind Speed: " + json.list[i].wind.speed + " mph<br/>Looks Like: "; //adding wind data
        forecast += json.list[i].weather[0].description //try this out?

        //results += json.weather[i].description;

        forecast += '</p></div>'; //end p tag and div
      }
      document.getElementById("forecastResults").innerHTML = forecast;
      console.log(json);
    });
  
   // console.log(results);


});



