import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Text>Where in the world ?</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
