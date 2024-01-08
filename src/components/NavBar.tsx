import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Text fontSize="1.5em" fontFamily="sans-serif" fontWeight={600}>
        Where in the world ?
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
