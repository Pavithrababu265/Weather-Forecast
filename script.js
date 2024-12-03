const apiKey = '63784a1cf8b7b9a340709563af0778ee'; 

document.getElementById('getWeather').addEventListener('click', function() {
  const city = document.getElementById('city').value.trim();
  
  if (!city) {
    alert('Please enter a city name.');
    return;
  }
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found or invalid API key');
      }
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => {
      alert(error.message);
      console.error('Error:', error);
    });
});

function displayWeather(data) {
  document.getElementById('cityName').textContent = `Weather in ${data.name}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

  document.getElementById('weatherResult').classList.remove('hidden');
}
