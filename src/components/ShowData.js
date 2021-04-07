import React from "react";
import './css/showdata.css'

export default function ShowData({
  source,
  time,
  destination,
  price,
  flightName,
}) {
  console.log(time);
  return (
    <div className="show-data">
      <div className="city-data">
        <h3>From: {source}</h3>
        <h3>To: {destination}</h3>
      </div>
      <div className="flight-name">
        <h1>Flight Name: <span id="main-name">{flightName}</span></h1>
      </div>
      <div className="other-data">
        <h1 id="price">Price: {price}</h1>
        <h1>Time: {time}</h1>
      </div>
    </div>
  );
}
