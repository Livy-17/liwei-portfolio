import React from "react";
import * as styles from "./Intro_styles";
import { Heading, Box, Text, Button} from "@chakra-ui/react";

const Intro = (props) => {
  return (
    <Box sx={props.isLarger ? {...styles.outerBox, height: "1050px"} : styles.outerBox}>
      <Heading size="2xl" sx={props.isLight ? styles.heading : {...styles.heading, color: "white"}}>Hey, I'm Liwei Chen</Heading>
      {props.isLarger && <Text fontSize="2xl" sx={props.isLight ? styles.description : {...styles.description, color: "white"}}>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</Text>}
      {!props.isLarger && <Text sx={props.isLight ? styles.description : {...styles.description, color: "white"}}>Frontend Web Developer</Text>}
      <Button variant="solid" size="lg" sx={props.isLight? styles.projectsButton : {...styles.projectsButton, backgroundColor: "#8696a7", color: "white"}}>Projects</Button>
    </Box>
  )
};

export default Intro;