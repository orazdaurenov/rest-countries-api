import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <>
      {countries.map((country) => {
        const { numericCode, name, population, region, capital, flag } =
          country;
        return (
          <article key={numericCode}>
            <div>
              <img src={flag} alt={name} />
              <h2>{name}</h2>
              <h4>Population: {population}</h4>
              <h4>Region: {region}</h4>
              <h4>Capital: {capital}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Countries;
