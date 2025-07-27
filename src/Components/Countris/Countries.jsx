import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./country.css";

const Countries = () => {
  // data Rakbo
  const [countries, setCountries] = useState([]);

  // Fetch countries data from an API or local source
  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all")
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <p>Country are: {countries.length}</p>
      <div className="counties-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
