async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const apiKey = "1cdc1f31ae2c94e5199e7b0d3f9e9fbf";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp*0.1}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "Error fetching weather data";
  }
}
