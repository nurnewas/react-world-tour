import { useState } from "react";
import "./country.css";
// import "../../Components/Cats/Cat/Cat.css"; // Assuming you want to use the same styles as Cat component
const Country = ({ country, handleVisitedCountry }) => {
  // const { name, flags } = country;
  console.log("Received country:", country);

  const [visited, SetVisited] = useState(false);

  const handleVisited = () => {
    SetVisited(!visited);
    console.log("Visited:", country.name.common);
  };

  return (
    <>
      <div className={`country container ${visited && "visited"}`}>
        <div className="text-start">
          <p>Country Name: {country?.name?.common}</p>
          <p>code: {country?.cca3}</p>
          {(visited && <p>Already I visited here </p>) || (
            <p>Visited i Never Visit there</p>
          )}
          {/* <img>Flag: {country?.flags.png}</img> */}
          <button
            onClick={() => {
              handleVisitedCountry(country?.name?.common);
            }}
          >
            Marl Visited
          </button>
          <button onClick={handleVisited}>
            {visited ? "Not visited" : "Visited"}
          </button>
        </div>
        <div>
          <img
            className="img-width"
            src={country?.flags?.png}
            alt={country?.flags?.alt || `${country?.name?.common} flag`}
            width="100"
          />
          {/* <img src={country?.name.} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Country;
