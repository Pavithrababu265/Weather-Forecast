const apiKey = '63784a1cf8b7b9a340709563af0778ee';

document.getElementById('getWeather').addEventListener('click', function () {
  const city = document.getElementById('city').value.trim();
  const button = this;

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  button.textContent = 'Loading...';
  button.disabled = true;

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
    })
    .finally(() => {
      button.textContent = 'Get Weather';
      button.disabled = false;
    });
});

function displayWeather(data) {
  const weatherCondition = data.weather[0].main.toLowerCase();
  changeBackground(weatherCondition);

  document.getElementById('cityName').textContent = `Weather in ${data.name}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

  document.getElementById('weatherResult').classList.remove('hidden');
}

function changeBackground(condition) {
  const body = document.body;
  
  switch (condition) {
    case 'clear':
      body.style.background = "linear-gradient(135deg, #fceabb, #f8b500)";
      break;
    case 'clouds':
      body.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
      break;
    case 'rain':
    case 'drizzle':
      body.style.background = "linear-gradient(135deg, #3a7bd5, #3a6073)";
      break;
    case 'thunderstorm':
      body.style.background = "linear-gradient(135deg, #373b44, #4286f4)";
      break;
    case 'snow':
      body.style.background = "linear-gradient(135deg, #e6dada, #274046)";
      break;
    case 'mist':
    case 'fog':
      body.style.background = "linear-gradient(135deg, #d7d2cc, #304352)";
      break;
    default:
      body.style.background = "linear-gradient(135deg, #6a11cb, #2575fc)";
  }
}
