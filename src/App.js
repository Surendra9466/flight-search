import react, { useEffect, useState } from "react";
import ApiCall from "./components/ApiCall";
import Cities from "./components/Cities";
import City from "./components/City";
import Date from "./components/Date";
import Visit from "./components/Visit";

const App = () => {
  const [apiData, setApiData] = useState(); // city names
  const [source, setSource] = useState(""); //setting source place
  const [destination, setDestination] = useState("");//setting destination place
  const [citiesName, setCitiesName] = useState([]); //Dates

  const [date, setDate] = useState();

  // console.log(source);
  // console.log(destination);
  return (
    <div>
      <h1>hi</h1>
      <Cities setCitiesName={setCitiesName} citiesName={citiesName} />
      <Visit citiesName={citiesName}  setSource={setSource} setDestination={setDestination}/>
      <Date setDate={setDate} />
      <ApiCall setApiData={setApiData} date={date} source={source} destination={destination} />
    </div>
  );
};

export default App;
