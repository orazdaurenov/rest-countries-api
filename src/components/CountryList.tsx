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
      <div className="bg-[#fafafa] w-[375px] h-[3305px]">
        {countries.map((country) => (
          <div
            key={country.id}
            className="bg-[#d6d2d2] rounded-[5px] w-[264px] h-[336px] mb-5"
          >
            {country.id}
            <img src={country.flags.svg} alt={country.name.common} />
            <h1 className="">{country.name.common}</h1>
            <p className="">Population: {country.population}</p>
            <p className="">Region: {country.region}</p>
            <p className="">Capital: {country.capital}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryList;
