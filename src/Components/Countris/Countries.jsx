import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./country.css";

const Countries = () => {
  // data Rakbo
  const [countries, setCountries] = useState([]);
  // visitedCountrys
  const [visitedCountries, setVisitedCountries] = useState([]);

  // Fetch countries data from an API or local source
  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all")
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setCountries(data));
  }, []);

  // visited Country Handel
  const handleVisitedCountry = (country) => {
    console.log("add this to visited list ");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <h1>Countries</h1>
      <h3>Visited Country: {visitedCountries.length}</h3>
      <p>Country are: {countries.length}</p>
      <div className="counties-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
