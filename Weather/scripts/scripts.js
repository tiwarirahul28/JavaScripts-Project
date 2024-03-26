const apikey = "13ffbfc5d389f11b210cc1e23058d10e";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.getElementById("cityInput");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
  try {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status !== 404) {
      // Corrected the condition
      const data = await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/images/mist.png";
      }
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    } else {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

searchbtn.addEventListener("click", () => {
  const city = searchbox.value.trim();
  if (city !== "") {
    getWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

// Initial call to fetch Mumbai weather
// getWeather("Mumbai");
getWeather();
