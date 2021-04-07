import React from "react";
import City from "./City";

export default function Destination({ citiesName, setDestination }) {
  //   console.log(destination);
  return (
    <div className="destination">
      <h1 style={{
        fontWeight:"lighter",
        marginBottom:"-2px"
      }}>To: </h1>
      <City
        setDestination={setDestination}
        name={"destination"}
        citiesName={citiesName}
      />
    </div>
  );
}
