import axios from "axios";
import { useEffect, useState } from "react";

interface Country {
  id: number;
  name: { common: string };
  population: string;
  region: string;
  capital: string;
  currencies: string;
}

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <>
      {countries.map((country) => (
        <div key={country.id} className="container flex mb-5 gap-3">
          {country.id}
          <h1 className="">{country.name.common}</h1>
          <p className="">{country.population}</p>
          <p className="">{country.region}</p>
          <p className="">{country.capital}</p>
        </div>
      ))}
    </>
  );
}

export default App;
