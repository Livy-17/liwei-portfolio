import React from "react";
import * as styles from "./Navbar_styles";
import { IconButton, Button, Text, Flex, Box, Heading } from "@chakra-ui/react";
import {SunIcon, MoonIcon, ChevronDownIcon, HamburgerIcon} from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';

const Navbar = (props) => {

  // return(
  //   <Flex as="nav" sx={props.isLight ? styles.outerFlexbox : styles.outerFlexboxDK}>
  //     <Box sx={props.isLarger ? props.isLight ? {...styles.nameLG, color: "black"} : {...styles.nameLG, color: "white"} : props.isLight ? {...styles.name, color: "black"} : {...styles.name, color: "white"}} id="name">Liwei Chen</Box>
  //     {props.isLarger && <Button variant="ghost" sx={props.isLarger ? props.isLight ? {...styles.aboutLG, color: "black"} : {...styles.aboutLG, color: "white"} : props.isLight ? {...styles.about, color: "black"} : {...styles.about, color: "white"}}>About</Button>}
  //     {props.isLarger && <Button variant="ghost" sx={props.isLarger ? props.isLight ? {...styles.projectsLG, color: "black"} : {...styles.projectsLG, color: "white"} : props.isLight ? {...styles.projects, color: "black"} : {...styles.projects, color: "white"}}>Projects</Button>}
  //     {props.isLight ? <MoonIcon w={4} h={4} sx={props.isLarger ? styles.moonLG : styles.moon} onClick={props.handleTheme}/> : <SunIcon w={4} h={4} sx={props.isLarger ? styles.sunLG : styles.sun} onClick={props.handleTheme}/>}
  //     {!props.isLarger &&
  //       <Menu>
  //         <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" sx={props.isLight ? styles.menuButton : {...styles.menuButton, color: "white"}} />
  //         <MenuList>
  //           <MenuItem>Projects</MenuItem>
  //           <MenuItem>about</MenuItem>
  //         </MenuList>
  //       </Menu>
  //     }
  //   </Flex>
  // )

  return(
    <Flex as="nav" sx={props.isLight ? styles.outerFlexbox : styles.outerFlexboxDK}>
      {props.isSmallV && 
        <Menu>
          <MenuButton as={IconButton} aria-lable="Options" icon={<HamburgerIcon />} variant="outline" sx={props.isLight ? styles.menuButton : {...styles.menuButton, color: "white"}} />
          <MenuList>
            <MenuItem>Projects</MenuItem>
            <MenuItem>About</MenuItem>
          </MenuList>
        </Menu> 
      }
    </Flex>
  )
};

export default Navbar;