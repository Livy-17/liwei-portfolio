import React from "react";
import { Box, Flex, Grid, Stack, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react";
import Work from "./Work";

const Works = props => {
  return (
    <Flex direction="column" align="center" pt={{base: "60px", md: "100px"}} bg={useColorModeValue("pink", "rgba(21, 32, 43, 1)")} pb={{base: "20px", md: "60px"}}>
      <Heading mb="40px" fontSize="2xl">Works</Heading>
      <Text fontSize="lg" mb="50px" w={{base: "300px", md: "760px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Here you will find some of the personal and clients projects that I created with each project containing its own case study</Text>
      <Work 
      theCount="1"
      theHeading="A Heading"
      theText="Some description about the workfdsfhiuewhfioudhcjsiunvusdhiufhsuihdfiushduihfiushdiuhfuishduifhiusdhui sudhfiushdiuhfuhishfiud"
      />
      <Work
      theCount="2"
      theHeading="A Heading"
      theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
      />
      <Work
      theCount="3"
      theHeading="A Heading"
      theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
      />
      <Work
      theCount="4"
      theHeading="A Heading"
      theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
      />
      <Work
      theCount="5"
      theHeading="A Heading"
      theText="bjlajfidjfiojsidoajfiodjsiodfjviosjoijvoisjojdsiojfio"
      /> 
    </Flex>
  )
}

export default Works;