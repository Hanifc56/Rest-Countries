import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetails/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(handleVisitedCountry);
  console.log(country);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country && ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" />
      <p>population: {population} </p>
      <p>area: {area} </p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <br />
      {visited ? "i have visited" : "i want to visit"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
