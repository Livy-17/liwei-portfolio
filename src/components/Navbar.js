import React from "react";
import { HStack, IconButton, Button, Text, Flex, Box, Heading, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider} from "@chakra-ui/react";
import { SunIcon, MoonIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const Navbar = props => {

  const { colorMode, toggleColorMode } = useColorMode();

  const toggleAbout = () => {
    const aboutDOM = document.getElementById('aboutSection');
    aboutDOM.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const toggleWorks = () => {
    const worksDOM = document.getElementById('worksSection');
    worksDOM.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const toggleContact = () => {
    const contactDOM = document.getElementById('contactSection');
    contactDOM.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const browserPattern = navigator.userAgent;
  let wantedPattern = /Firefox/;
  let isFirefox = wantedPattern.test(browserPattern);

  return(
    <Box display="flex" alignItems="center" position="fixed" top="0" as="nav" w="100%" h="60px" bg={useColorModeValue("rgba(252, 248, 238, 0.2)", "")} sx={isFirefox ? {bg: ""} : {backdropFilter: "blur(10px)"}} zIndex={99}>
      <Heading as="a" href="" size='md' p="10px 10px 10px 10px" display="inline-block" mr="auto" ml={{base: "20px", md: "60px"}} _hover={{cursor: "pointer"}} >Liwei Chen</Heading>
      <HStack display={{base: "none", md: "inherit"}} spacing="20px" mr="60px">
        <Text onClick={toggleAbout} fontSize="lg" p="10px 20px 10px 20px" borderRadius="5px" transition="all 0.2s ease-out" _hover={{bg: "rgba(193, 203, 215, 1)", cursor: "pointer"}} >About</Text>
        <Text onClick={toggleWorks} fontSize="lg" p="10px 20px 10px 20px" borderRadius="5px" transition="all 0.2s ease-out" _hover={{bg: "rgba(193, 203, 215, 1)", cursor: "pointer"}} >Works</Text>
        <Text onClick={toggleContact} fontSize="lg" p="10px 20px 10px 20px" borderRadius="5px" transition="all 0.2s ease-out" _hover={{bg: "rgba(193, 203, 215, 1)", cursor: "pointer"}} >Contact</Text>
      </HStack>
      {colorMode === "light" ? <MoonIcon mr={{base: "5px", md: "60px"}} h="45px" w="45px" p="15px 15px 15px 15px" borderRadius="5px" onClick={toggleColorMode} transition="all 0.2s ease-out" _hover={{base: {cursor: "pointer"}, md: {cursor: "pointer", bg: "purple"}}} /> : <SunIcon mr={{base: "5px", md: "60px"}} h="45px" w="45px" p="15px 15px 15px 15px" borderRadius="5px" onClick={toggleColorMode} transition="all 0.2s ease-out" _hover={{base: {cursor: "pointer"}, md: {cursor: "pointer", bg: "orange"}}} />}
      <Box display={{base: "inline-block", md: "none"}}>
        <Menu isLazy>
          <MenuButton aria-label="Options" as={IconButton} rightIcon={<HamburgerIcon />} variant="ghost" size="lg" mr="10px" p="0 15px 0 0" _focus={{border: 'none'}} />
          <MenuList>
            <MenuItem onClick={toggleAbout}>About</MenuItem>
            <MenuItem onClick={toggleWorks}>Works</MenuItem>
            <MenuItem onClick={toggleContact}>Contact</MenuItem>
          </MenuList>
        </Menu>
      </Box>

    </Box>
  )
}

export default Navbar;