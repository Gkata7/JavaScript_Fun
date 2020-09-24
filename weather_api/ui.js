class UI {
  constructor(){
    this.location = document.getElementById('location');
    this.desc = document.getElementById('desc');
    this.tempature = document.getElementById('tempature');
    this.details = document.getElementById('details');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('humidity');
    this.feelsLike = document.getElementById('feels-like');
    this.wind = document.getElementById('wind');
  }
  paint(weather){
    this.location.textContent = weather.name + ' ,' + weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.tempature.textContent = weather.main.temp + ' °C';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`); 
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} F`;
    this.wind.textContent = `Wind: ${weather.wind.speed} meters/sec`;
  }
}