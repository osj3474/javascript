const API_KEY = "c5767ee4079f381b18a6b83b46d66083";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const geoObj = {
    latitude,
    longitude,
  };
  localStorage.setItem(COORDS, JSON.stringify(geoObj));
  getWeather(latitude, longitude);
}

function handleGeoFail() {
  console.log("failed");
}

function askForGeo() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadGeo() {
  const myGeo = localStorage.getItem(COORDS);
  const parsedGeo = JSON.parse(myGeo);
  if (myGeo === null) {
    askForGeo();
  } else {
    getWeather(parsedGeo.latitude, parsedGeo.longitude);
  }
}

function init() {
  loadGeo();
}

init();
