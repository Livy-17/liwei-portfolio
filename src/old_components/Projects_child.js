import React from "react";
import {Button, Box, Heading, Text, Image, StylesProvider} from "@chakra-ui/react";
import * as styles from "./Projects_child_styles";

const ProjectsChild = (props) => {

  return (
    <Box sx={styles.outerBox}>
      <Box sx={styles.imgBox}>
        <Image src={props.pic} alt="Project_pic_1"></Image>
      </Box>
      <Box sx={styles.textBox}>
        <Heading sx={{fontSize: "30px"}}>
          {props.title}
        </Heading>
        <Text sx={{fontSize: "20px"}}>
          {props.text}
        </Text>
        <Button variant="solid" sx={{padding: "30px 50px 30px 50px", fontSize: "20px", borderRadius: "10px"}}>
          Case Study
        </Button>
      </Box>
    </Box>
  )
};

export default ProjectsChild;