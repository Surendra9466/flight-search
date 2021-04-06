import React from "react";
import City from "./City";

export default function Destination({ citiesName, setDestination }) {
  //   console.log(destination);
  return (
    <div>
      <h1>To</h1>
      <City
        setDestination={setDestination}
        name={"destination"}
        citiesName={citiesName}
      />
    </div>
  );
}
