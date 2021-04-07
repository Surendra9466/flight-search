import React from "react";
import "./css/city.css";

export default function City({ citiesName, setDestination, setSource, name }) {
  // console.log(citiesName);
  function handleClick(e) {
    let nameOfCity = e.target.value;
    console.log(nameOfCity);
    // console.log(e);
    if (name === "source") {
      setSource(nameOfCity);
    } else {
      setDestination(nameOfCity);
    }
  }
  return (
    <div className="city">
      <input
        id="city-input"
        placeholder={`Enter ${name} place`}
        onChange={handleClick}
        autoComplete="on"
        list="suggestions"
      />

      {/* <h1>I m in City component</h1> */}
      <datalist id="suggestions">
        {citiesName.map((city, index) => {
          return <option value={city.cityCode}>{city.cityName}</option>;
        })}
      </datalist>
    </div>
  );
}
//   return Object.entries(city).forEach(([key, value]) => {
//     // console.log("key:"+key);
//     // console.log("value:"+value);

//     return (

//     <option key={key} value={value.cityCode}>{value.cityName}</option>);
//   });
