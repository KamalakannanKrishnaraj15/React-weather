var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is an simple weather application build on React framework.</p>
      <p> Here are some of the tools used: </p>
      <ul>
          <li>
              <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
          </li>
          <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather data by city name.
          </li>
      </ul>
    </div>
  )
};

module.exports = About;
