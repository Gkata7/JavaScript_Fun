class Weather {
  constructor(city, state){
    this.apiKey = '';
    this.city = city;
    this.stateCode = state.code;
  }
  // Fetch Weather API
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.stateCode}&APPID=${this.apiKey}&units=metric`);
    const responseData = await response.json();
    return responseData;
  }
  // Change weather location
  changeLocation(city, stateCode) {
    this.city = city;
    this.stateCode = state.code;
  }
}