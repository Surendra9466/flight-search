import React, { useEffect } from "react";
import cities from "../cities.json";
// import City from "./City";

export default function Cities({ setCitiesName, citiesName }) {
  useEffect(() => {
    cities.map((city, index) => {
      //   console.log(city.name);
      return setCitiesName((prev) => {
        return [
          ...prev,
          {
            cityName: city.city,
            cityCode: city.iata_code
          }
        ];
      });
    });
  }, []);
//   console.log(citiesName);

  return <div></div>;
}
