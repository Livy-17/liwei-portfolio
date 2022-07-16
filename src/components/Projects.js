import React from "react";
import { Box, Flex, Grid, Stack, Heading, Text, Button, useColorModeValue, useColorMode } from "@chakra-ui/react";
import Project from "./Project";

const Projects = props => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex id='worksSection' direction="column" align="center" pt={{base: "130px", md: "150px"}} pb={{base: "120px", md: "120px"}} bg={useColorModeValue('#F7F6F2','#1B2430')} gap='50px'>
      <Flex data-aos='flip-down' direction='column' align='center' justifyContent='center'>
        <Heading mb="40px" fontSize="2xl">Projects</Heading>
        <Text fontSize="lg" mb="20px" w={{base: "300px", md: "700px", lg: "800px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Here you will find some of the projects that I created with each project containing its own case study</Text>
      </Flex>
      <Box data-aos='flip-left'>
        <Project
        ProjectName="Moving"
        theHeading="Moving"
        theText="Moving is a property website. With Moving, you can explore properties which are for sale or for rent in Dubai."
        ProjectDescription='Moving is a property website which lists some beautiful properties in Dubai. The properties are available for sale or for rent. You can explore them based on your needs by using filters. You can also click on the properties to see the details. Dark mode with dark toned colour designs is added for better low-light browsing experience.'
        ToolsUsed={['HTML', 'CSS', 'JavaScript', 'Chakra UI', 'Next JS', 'Git', 'Github', 'Netlify', 'Bayut API']}
        LiveLink='https://moving.liweichen.info'
        DarkMode={colorMode}
        />
      </Box>
      <Box data-aos='flip-right'>
        <Project
        ProjectName='WhatToWatch'
        theHeading='WhatToWatch'
        theText='Netflix, Prime, Disney, HBO, Hulu and many others. Lookup which shows are available on streaming services across more than 20 countries.'
        ProjectDescription='By choosing your country, you can explore which streaming services are available in your country, and what movies are available in each service. You can also click the movies to see their details.'
        ToolsUsed={['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Next JS', 'Git', 'Github', 'Netlify', 'Steaming Availability API']}
        LiveLink='https://what-to-watch.liweichen.info'
        DarkMode={colorMode}
        />
      </Box>
      <Box data-aos='flip-left'>
        <Project
        ProjectName='EpicShoes'
        theHeading='EpicShoes'
        theText="An online shoes store which sells trending sneakers."
        ProjectDescription='EpicShoes sells the trending sneakers. You can choose your favourite sneakers at the gallery and pay online.'
        ToolsUsed={['HTML', 'CSS', 'JavaScript', 'Chakra UI', 'Commerce JS', 'Stripe', 'Git', 'Github', 'Netlify']}
        LiveLink='https://epic-shoes.liweichen.info'
        DarkMode={colorMode}
        />
      </Box>
        <Project
        ProjectName='WhereTo'
        theHeading='WhereTo'
        theText="Realtime Hotels, Restaurants, Attractions picks for you."
        ProjectDescription='WhereTo shows the information about the hotels, restaurants and attractions near you. Make sure to allow your browser to use your location. You can filter the destinations by rating. You can also change your exploration area by using map or search bar.'
        ToolsUsed={['HTML', 'CSS', 'JavaScript', 'Material UI', 'Git', 'Github', 'Netlify', 'Google Map API', 'Trip Advisor API']}
        LiveLink='https://where-to.liweichen.info'
        DarkMode={colorMode}
        />
      <Box data-aos='flip-right'>
      </Box>
    </Flex>
  )
}

export default Projects;