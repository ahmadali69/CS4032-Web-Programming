$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();
        var city = $('#city-input').val();
        if (city.trim() === '') {
            alert('Please enter a city name.');
            return;
        }
        getWeather(city);
    });
});

function getWeather(city) {
    const API_KEY = '430384fe39e1bbdb71526bd5c0f23c2a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    $.getJSON(apiUrl, function(data) {
        displayWeather(data);
    }).fail(function() {
        alert('Failed to fetch weather data. Please try again.');
    });
}

function displayWeather(data) {
    var cityName = data.name;
    var temperature = data.main.temp;
    var description = data.weather[0].description;

    var weatherInfoHtml = '<div class="weather-card">';
    weatherInfoHtml += '<h2>' + cityName + '</h2>';
    weatherInfoHtml += '<p>Temperature: ' + temperature + '°C</p>';
    weatherInfoHtml += '<p>Description: ' + description + '</p>';
    weatherInfoHtml += '</div>';

    $('#weather-info').html(weatherInfoHtml);
}
