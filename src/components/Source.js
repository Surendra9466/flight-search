import React from "react";
import City from "./City";

export default function Source({ citiesName, setSource }) {
  // console.log(source);
  return (
    <div>
      <h1>From</h1>
      <City setSource={setSource} name={"source"} citiesName={citiesName} />
    </div>
  );
}
