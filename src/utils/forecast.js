const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9863ac4aa4d4e500de98a6ce8d3489b2&query=" +
    lat +
    "," +
    long +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if ((body.error, undefined)) {
      callback("Unable to find location");
    } else {
      console.log(body.current);
      callback(
        undefined,
        `It is currently ${body.current.weather_descriptions[0]} and ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.
        Humidity ${body.current.humidity} percent. Wind speed of ${body.current.wind_speed} miles per hour.`
      );
    }
  });
};

module.exports = forecast;
