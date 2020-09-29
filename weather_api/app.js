const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
// Changing the Location
document.getElementById('change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  weather.changeLocation(city, country);
  storage.setLocationData(city, country);
  getWeather();
  $('#locationModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}