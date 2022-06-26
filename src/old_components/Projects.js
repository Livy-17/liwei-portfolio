import React from "react";
import ProjectsChild from "./Projects_child";
import { Heading, Text, Box, StylesProvider } from "@chakra-ui/react";
import { ProjectsData } from "./Projects_data";
import * as styles from "./Projects_styles.js"

const Projects = () => {

  const theProjects = ProjectsData.map(
    item => {
      return (
        <ProjectsChild key={item.id} pic={item.pic} title={item.title} text={item.text} />
      )
    }
  );

  return (
    <Box sx={styles.outerBox}>
      <Heading sx={styles.outerHeading}>Projects</Heading>
      <Text sx={styles.outerText}>Here you will find some of the personal and clients projects that I created with each project containing its own case study</Text>
      {theProjects}
    </Box>
  )
};

export default Projects;