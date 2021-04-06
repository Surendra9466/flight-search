import React from "react";

export default function ShowData({source, destination, price, flightName}) {
  return (
    <div>
      <h1>flight name:{flightName}</h1>
      <h3>From:{source}</h3>
      <h3>To:{destination}</h3>
      <h1>Price:{price}</h1>
    </div>
  );
}
