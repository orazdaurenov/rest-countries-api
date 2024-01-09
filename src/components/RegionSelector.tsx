import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Country } from "./CountryList";

interface Props {
  onSelectRegion: (region: Country) => void;
}

const RegionSelector = ({ onSelectRegion }: Props) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Filter by Region
      </MenuButton>
      <MenuList>
        {regions.map((region) => (
          <MenuItem key={region}>{region}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
