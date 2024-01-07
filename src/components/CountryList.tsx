import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Country {
  flags: { svg: string };
  name: { common: string };
  population: number;
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
      <Box></Box>
    </>
  );
};

export default CountryList;
