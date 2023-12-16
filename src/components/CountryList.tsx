import axios from "axios";
import { useEffect, useState } from "react";

interface Country {
  id: number;
  flags: { svg: string };
  name: { common: string };
  population: string;
  region: string;
  capital: string;
  currencies: string;
}

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <>
      {countries.map((country) => (
        <div key={country.id} className="">
          {country.id}
          <img src={country.flags.svg} alt={country.name.common} />
          <h1 className="">{country.name.common}</h1>
          <p className="">{country.population}</p>
          <p className="">{country.region}</p>
          <p className="">{country.capital}</p>
        </div>
      ))}
    </>
  );
};

export default CountryList;
