// document.getElementById("weatherSubmit").addEventListener("click", function(event) {
//     event.preventDefault();
//     const value = document.getElementById("weatherInput").value;
//     if (value === "")
//       return;
//     console.log(value);

//     const APIKEY = '30c7a38b25886b96005dfbe98b8bdca7'; //not so secret key :p
// const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=" + APIKEY;
     
//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     }).then(function(json) {
//         //put some of the json data in html
//         let results = "";
//         results += '<div class = "current"><h2>Current Weather in ' + json.name + ":</h2>";
//         for (let i=0; i < json.weather.length; i++) {
//           results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
//         }
//         results += '<h2>' + json.main.temp + " &deg;F</h2>";
//         results += "<p>";
//         // add temp range: min-max
//         results += "<em>Low: " + json.main.temp_min + "&deg;F, High: " + json.main.temp_max + "&deg;F</em><br/>";
//         results += "Wind Speed: " + json.wind.speed + " mph<br/><strong>Looks Like: "; //adding wind data
//         for (let i=0; i < json.weather.length; i++) {
//             results += json.weather[i].description;
//             if (i !== json.weather.length - 1)
//                 results += ", "
//         }
//         results += "</strong></p></div>";
//         // update html div id with data. 
//         document.getElementById("weatherResults").innerHTML = results;
//         //console.log(json);
//     });



// });



//stuff from codepen - jquery


document.getElementById("get-pkmn").addEventListener("click", function(event) {
  event.preventDefault();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // max, exclusive and min, inclusive
  }

  const url = 'https://pokeapi.co/api/v2/pokemon/'+ getRandomInt(1,150);

  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    //clear current field
    let results = "";
    document.getElementById("results").innerHTML = results;

    results += "<h1> It's " + myJson.name + " </h1>";
    document.getElementById("results").innerHTML = results;
  });


});

