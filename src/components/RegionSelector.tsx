import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface Props {
  onSelectRegion: (regions: string) => void;
}

const RegionSelector = ({ onSelectRegion }: Props) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Filter by Region
      </MenuButton>
      <MenuList>
        {regions.map((region) => (
          <MenuItem onClick={() => onSelectRegion(region)} key={region}>
            {region}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
