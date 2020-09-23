const weather = new Weather('San Francisco', 'CA');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}