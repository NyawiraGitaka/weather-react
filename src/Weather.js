import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <form class="search-form">
          <input
            type="search"
            id="city-input"
            class="enter-city"
            placeholder="Enter a city.."
            required
            autofocus
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="present-city">Nairobi</h1>
            <p class="city-details">
              <span className="day">Saturday</span>{" "}
              <span className="time">15:32,</span> moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div className="currenttemp">
            <span className="current-temp-emoji">
              {" "} ☀️ {" "}
            </span>
            <span className="current-temp-value">24</span>
            <span className="current-temp-unit">°C </span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          <span>This project was coded by</span>
          <a
            href="https://www.linkedin.com/in/nyawiragitaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nyawira Gitaka
          </a>
          <span>and is</span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            on GitHub
          </a>
          <span>and</span>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
