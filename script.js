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
        results += '<h2>Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
          results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;F</h2>";
        results += "<p>";
        for (let i=0; i < json.weather.length; i++) {
            results += json.weather[i].description;
            if (i !== json.weather.length - 1)
                results += ", "
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
        console.log(json);
    });

  
   // console.log(results);


});



