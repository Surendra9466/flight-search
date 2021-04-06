import React from "react";

export default function City({ citiesName, setDestination, setSource, name }) {
  // console.log(citiesName);
  function handleClick(e) {
    let nameOfCity = e.target.value;
    // console.log(nameOfCity);
    if (name === "source") {
      setSource(nameOfCity);
    } else {
      setDestination(nameOfCity);
    }
  }
  return (
    <div>
      {/* <h1>I m in City component</h1> */}
      <select onChange={handleClick}>
        {citiesName.map((city, index) => {
          return <option value={city.cityCode}>{city.cityName}</option>;
        })}
      </select>
    </div>
  );
}
//   return Object.entries(city).forEach(([key, value]) => {
//     // console.log("key:"+key);
//     // console.log("value:"+value);

//     return (

//     <option key={key} value={value.cityCode}>{value.cityName}</option>);
//   });
