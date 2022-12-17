var scraper = require("hko-scraper");
scraper.getWeather().then(function (weather) {
  console.log(weather);
});
