var APIkey = "79741315355edf6fda5bdf5caf4d6127"
var currentCity = "";
var previousCity = "";
var cityName = document.querySelector(".cityName")
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var windSpeed = document.querySelector("windSpeed");
var uvIndex = document.querySelector(".uvIndex");




function weatherCurrent (event){
    event.preventDefault();
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value.trim() +"&appid=" + APIkey + "&units=imperial")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var date = new Date(data.dt*1000).toLocaleDateString('en-US');
      console.log(date);
      localStorage.setItem
      weatherIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
      cityName.textContent = data.name + " (" + date + ")";
      console.log(data.name);
      temp.textContent = "Temperature: " + data.main.temp + "°F";
      humidity.textContent = "Humidity: " + data.main.humidity + "%";
      windSpeed.textContent = "Wind Speed: " + data.wind.speed;
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      uvFunction(lat, lon);
      localStorage.setItem("currentWeather", JSON.stringify(inputValue.value));
    })

};

