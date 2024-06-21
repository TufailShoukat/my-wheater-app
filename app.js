
function getWeather() {
    const city = document.getElementById("citySelect").value;
    const weatherInfoDiv = document.getElementById("weatherInfo");

    const weatherData = {
        karachi: { temp: 32, condition: 'Sunny' },
        lahore: { temp: 35, condition: 'Hot' },
        islamabad: { temp: 28, condition: 'Cloudy' },
        peshawar: { temp: 34, condition: 'Partly Cloudy' },
        quetta: { temp: 25, condition: 'Windy' },
        faisalabad: { temp: 33, condition: 'Sunny' },
        multan: { temp: 36, condition: 'Hot' },
        rawalpindi: { temp: 27, condition: 'Rainy' },
        sialkot: { temp: 31, condition: 'Cloudy' },
        hyderabad: { temp: 30, condition: 'Sunny' }
    };

    const weather = weatherData[city];

    if (weather) {
        weatherInfoDiv.innerHTML = `<strong>Temperature:</strong> ${weather.temp}°C <br> <strong>Condition:</strong> ${weather.condition}`;
    } else {
        weatherInfoDiv.innerHTML = 'Weather information not available';
    }
}















