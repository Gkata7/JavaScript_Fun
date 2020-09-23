class UI {
  constructor(){
    this.location = document.getElementById('location');
    this.description = document.getElementById('description');
    this.tempature = document.getElementById('tempature');
    this.details = document.getElementById('details');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('humidity');
    this.dewpoint = document.getElementById('dewpoint');
    this.feelsLike = document.getElementById('feels-like');
    this.wind = document.getElementById('wind');
  }
  paint(weather){
    this.location.textContent = weather.display;
  }
}