import React, { useState } from "react";
import ShowData from "./ShowData";
import "./css/apicall.css";
import WaitingMessage from "./WaitingMessage";

export default function ApiCall({ setApiData, date, source, destination }) {
  const [price, setPrice] = useState();
  const [flightName, setFlightName] = useState("");
  const [time, setTime] = useState("");
  const [satisfy, setSatisfy] = useState(false);

  function handleSearch() {
    fetch(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IN/INR/en-US/${source}-sky/${destination}-sky/${date}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8db4642c40msh90620a03e49b53cp192835jsn76ae0eca68c3",
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFlightName(data.Carriers[0].Name);
        setPrice(data.Quotes[0].MinPrice);
        setApiData(data);
        setTime(data.Quotes[0].OutboundLeg.DepartureDate);
        // console.log(data.Quotes[0].OutboundLeg.DepartureDate);

        setSatisfy(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="api-call">
      <div className="search">
        <button id="btn" onClick={handleSearch}>
          Search Flight
        </button>
      </div>
      <div className="show-data">
        {satisfy ? (
          <ShowData
            source={source}
            destination={destination}
            price={price}
            flightName={flightName}
            time={time}
          />
        ) : <WaitingMessage />}
      </div>
    </div>
  );
}
