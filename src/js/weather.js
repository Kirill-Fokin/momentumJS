export async function initWeather(key, city='минск') {
  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const language = 'lang=ru';
  const units = 'units=metric';
  const link =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&${language}&appid=${key}&${units}`;

  const resp = await fetch(link);
  const data = await resp.json()

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}