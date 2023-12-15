import axios from "axios";
import { useEffect, useState } from "react";

interface Country {
  name: { common: string };
  population: string;
  region: string;
  capital: string;
  currencies: string;
}

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((res) => console.log(res.data[5].currencies));
  });
  return <></>;
}

export default App;
