import "./country.css";
const Country = ({ country }) => {
  // const { name, flags } = country;
  console.log("Received country:", country);

  return (
    <>
      <div className="country container">
        <div>
          <p>Country Name: {country?.name?.common}</p>
        </div>
        <div>
          <img
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
