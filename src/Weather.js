import React from "react";


export default function Weather() {
  return (
    <div className="Weather">
      <h1> Weather Application</h1>
      <form>
        <input type="search" placeholder="Type a city name" />
        <input type="submit" value="Search" />
      </form>

    </div>
  );
}
