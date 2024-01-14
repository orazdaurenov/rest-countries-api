import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Country } from "./CountryList";

interface Props {
  country: Country;
}

const CountryCard = ({ country }: Props) => {
  return (
    <Card borderRadius={5} overflow="hidden">
      <Image src={country.flags.svg} />
      <CardBody>
        <Heading marginBottom={4} fontSize="2xl">
          {country.name.common}
        </Heading>
        <Text>Population: {country.population}</Text>
        <Text>Region: {country.region}</Text>
        <Text>Capital: {country.capital}</Text>
        <Text>Continent: {country.continents}</Text>
        {country.currencies && (
          <Text>
            Currencies:{" "}
            {Object.values(country.currencies).map((currency) => currency.name)}
          </Text>
        )}
      </CardBody>
    </Card>
  );
};

export default CountryCard;
