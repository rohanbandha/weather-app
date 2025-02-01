async function getWeather() {
    const apiKey = '4e8e0c92c3e40e4afe2f418d4b00aa46'; 
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = 
                `${data.main.temp}°C | ${data.weather[0].description}`;
                const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                    const weatherIcon = document.getElementById('weather-icon');
                    weatherIcon.src = iconUrl;
                    weatherIcon.classList.remove('hidden');
        } else {
            document.getElementById('weather').innerHTML = "City not found";
            document.getElementById('weather-icon').classList.add('hidden');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = "Error retrieving data";
        document.getElementById('weather-icon').classList.add('hidden');
    }
}