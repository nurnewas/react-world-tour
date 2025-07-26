const Country = ({ country }) => {
  console.log(country);
  return (
    <>
      <h1>Country Name: {country?.name?.common}</h1>
    </>
  );
};

export default Country;
