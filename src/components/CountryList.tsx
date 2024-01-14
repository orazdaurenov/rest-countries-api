import { SimpleGrid, Text } from "@chakra-ui/react";
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryCardSkeleton from "./CountryCardSkeleton";

export interface Country {
  id: string;
  flags: { svg: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string;
  continents: string[];
  selectedRegion: string | null;
  currencies?: Currencies;
}
export interface Currencies {
  [currencyCode: string]: Currency;
}

export interface Currency {
  name: string;
}

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all", {
        signal: controller.signal,
      })
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
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
        {isLoading &&
          skeletons.map((skeleton) => <CountryCardSkeleton key={skeleton} />)}
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CountryList;
