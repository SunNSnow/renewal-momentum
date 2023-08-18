const API_KEY = "7145e4362d11e747634b0b6754ead97e";

const onGeoOK = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longtitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = `${data.name}`;
    });
};

const onGeoNO = () => {
  alert("Cannot find your location. Weather service not provided.");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoNO);
