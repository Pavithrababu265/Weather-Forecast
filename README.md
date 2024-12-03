
 Dynamic Weather Forecast App🌦️

This project is a simple yet interactive weather forecast app that displays real-time weather information based on user input. It dynamically changes the background based on the weather condition, providing a visually engaging experience.



**Features**
- **Real-time Weather Data**: Get current weather details for any city.
- **Dynamic Background**: The background changes based on weather conditions (e.g., sunny, cloudy, rainy).
- **Interactive UI**: Responsive design with smooth animations and transitions.
- **Error Handling**: Alerts users if the city is not found or the API key is invalid.



**Technologies Used**
- **HTML**: Structure of the app.
- **CSS**: Styling, animations, and responsive design.
- **JavaScript**: Logic for fetching data from the weather API and dynamically updating the UI.
- **OpenWeatherMap API**: Provides real-time weather data.
  

## **How It Works**

1. **User Input**:
   - The user enters the name of a city.
   - Clicking the "Get Weather" button triggers a request to the OpenWeatherMap API.

2. **API Request**:
   - The app fetches weather data for the entered city using the provided API key.
   - It retrieves details such as temperature, weather description, and humidity.

3. **Dynamic UI Updates**:
   - Displays the weather details (city, temperature, description, and humidity).
   - Changes the background color based on the weather condition (e.g., clear, rain, snow).

4. **Error Handling**:
   - If the city name is invalid or the API key is incorrect, an error message is shown.


 **Setup Instructions**

 **Prerequisites**
- A web browser.
- An API key from [OpenWeatherMap](https://openweathermap.org/).

 **Steps to Run the App**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Open the `index.html` file in a web browser.

3. Enter a city name in the input field and click "Get Weather."

---

**Project Structure**

```
weather-app/
│
├── index.html         # Main HTML structure
├── style.css          # CSS for styling and animations
└── script.js          # JavaScript for app logic
```

---

**Code Explanation**

 **1. `index.html`**
Defines the structure of the web app, including:
- An input field for entering the city name.
- A button to trigger the weather search.
- A section to display weather details dynamically.

 **2. `style.css`**
Handles the visual aspects of the app:
- **Gradient Backgrounds**: Changes based on weather conditions.
- **Animations**: Smooth transitions for button interactions.
- **Responsive Design**: Ensures the app looks good on all devices.

**3. `script.js`**
Contains the core functionality:
- **API Fetching**: Retrieves weather data using the OpenWeatherMap API.
- **Dynamic Content**: Updates the DOM with real-time weather information.
- **Background Updates**: Changes the background gradient based on weather (e.g., `clear`, `rain`, `clouds`).
- **Error Handling**: Alerts users for invalid inputs or API issues.

---

 **Weather Condition Mapping**

The app changes the background dynamically based on the following conditions:
| Weather Condition | Background Gradient |
|-------------------|---------------------|
| Clear             | Yellow to Orange    |
| Clouds            | Gray to Dark Blue   |
| Rain/Drizzle      | Light to Dark Blue  |
| Thunderstorm      | Dark Gray to Blue   |
| Snow              | Light Gray to Dark  |
| Mist/Fog          | Gray to Blue-Gray   |
| Default           | Purple to Blue      |

---

**Future Enhancements**
- Add support for multi-language weather descriptions.
- Display additional data like wind speed and sunrise/sunset times.
- Implement a search history feature.

---

**Contributing**
Contributions are welcome! Feel free to open issues or submit pull requests.

---

