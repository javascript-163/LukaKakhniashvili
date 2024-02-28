let locationInput = document.getElementById("location_input");
let searchBtn = document.querySelector(".search_btn");
let tempDisplay = document.querySelector(".temp_display");
let windspeedDisplay = document.querySelector(".windspeed_display");
let windImg = document.querySelector(".wind_img");

const endPoint = 'https://geocode.maps.co/search';
const apiKey = '65d5ef8f74e31703182746xjf605e4b';

function fetchCoordinates(location) {
    const url = `${endPoint}?q=${location}&api_key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let lat = data[0].lat;
            let lon = data[0].lon;
            fetchWeather(lat, lon, location);
        })
        .catch(error => {
            console.error('Error during fetching a weather data: ', error);
        });
}

searchBtn.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
        fetchCoordinates(location);
    }
})

function fetchWeather(lat, lon, location) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,rain,windspeed_10m`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let currentTemp = data.current_weather.temperature;
            tempDisplay.innerHTML = `Current temperature in ${location} is: ${currentTemp} celsius`;
            let windspeed = data.current_weather.windspeed;
            windImg.classList.remove("hide");
            if (windspeed < 20) {
                windspeedDisplay.innerHTML = `Current windspeed is low: ${windspeed} km/h`;
                windImg.src = "images/low.png";
            } else if (windspeed < 40) {
                windspeedDisplay.innerHTML = `Current windspeed is medium: ${windspeed} km/h`;
                windImg.src = "images/medium.png";
            } else {
                windspeedDisplay.innerHTML = `Current windspeed is high: ${windspeed} km/h`;
                windImg.src = "images/high.png";
            }

        })
        .catch(error => {
            console.error('Error during fetching a weather data:', error);
        });
}