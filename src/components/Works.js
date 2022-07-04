import React from "react";
import { Box, Flex, Grid, Stack, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react";
import Work from "./Work";

const Works = props => {
  return (
    <Flex id='worksSection' direction="column" align="center" pt={{base: "130px", md: "150px"}} pb={{base: "120px", md: "120px"}} bg={useColorModeValue('#F7F6F2','#1B2430')}>
      <Flex data-aos='flip-down' direction='column' align='center' justifyContent='center'>
        <Heading mb="40px" fontSize="2xl">Works</Heading>
        <Text fontSize="lg" mb="50px" w={{base: "300px", md: "760px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Here you will find some of the personal and clients projects that I created with each project containing its own case study</Text>
      </Flex>
      <Box data-aos='flip-left'>
        <Work 
        theCount="1"
        theHeading="A Heading"
        theText="Some description about the workfdsfhiuewhfioudhcjsiunvusdhiufhsuihdfiushduihfiushdiuhfuishduifhiusdhui sudhfiushdiuhfuhishfiud"
        />
      </Box>
      <Box data-aos='flip-right'>
        <Work
        data-aos='flip-right'
        theCount="2"
        theHeading="A Heading"
        theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
        />
      </Box>
      <Box data-aos='flip-left'>
        <Work
        data-aos='flip-left'
        theCount="3"
        theHeading="A Heading"
        theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
        />
      </Box>
      <Box data-aos='flip-right'>
        <Work
        data-aos='flip-right'
        theCount="4"
        theHeading="A Heading"
        theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
        />
      </Box>
      <Box data-aos='flip-left'>
        <Work
        data-aos='flip-left'
        theCount="5"
        theHeading="A Heading"
        theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
        /> 
      </Box>
    </Flex>
  )
}

export default Works;