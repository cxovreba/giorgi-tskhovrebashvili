const city = document.querySelector('.city');
const todayTemp = document.querySelector('.tempature');
const date = document.querySelector('.city1');
const time = document.querySelector('.time');
const dayTemp = document.querySelector('.day');
const nightTemp = document.querySelector('.night');
const calDate = document.querySelector('.date');
const day = document.querySelector('week-day');
const humidityElement = document.querySelector('#procent');
const sun = document.querySelector('#sunrise');

function getApi() {
    fetch('weatherJSON.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            city.innerHTML = data.city;
            todayTemp.innerHTML = data.current_weather.temperature;
            humidityElement.innerHTML = data.current_weather.humidity;
            sun.innerHTML = data.current_weather.sunrise;
           
        })
        .catch(error => {
            console.error('Error fetching API:', error);
        });
}

getApi()