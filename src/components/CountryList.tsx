import { SimpleGrid, Text } from "@chakra-ui/react";
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export interface Country {
  id: string;
  flags: { svg: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string;
  currencies: { name: string };
  continents: string[];
}

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all", {
        signal: controller.signal,
      })
      .then((res) => setCountries(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        paddingX={5}
        spacing={5}
      >
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CountryList;
