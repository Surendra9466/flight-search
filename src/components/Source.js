import React from "react";
import City from "./City";
import "./css/sourceCity.css";

export default function Source({ citiesName, setSource }) {
  // console.log(source);
  return (
    <div className="source">
      <h1
        style={{
          fontWeight: "lighter",
          marginBottom: "-2px",
        }}
      >
        From:
      </h1>
      <City
        className="sourceCity"
        setSource={setSource}
        name={"source"}
        citiesName={citiesName}
      />
    </div>
  );
}
