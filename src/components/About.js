import React from "react";
import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const About = props => {
  return(
    <Flex direction="column" bg={useColorModeValue("rgba(238, 229, 247, 1)", "")} pt={{base: "60px", md: "100px"}} align="center">
      <Heading mb="40px" fontSize="2xl">About Me</Heading>
      <Text fontSize="lg" w={{base: "300px", md: "760px"}} mb="60px">&nbsp;&nbsp;&nbsp;&nbsp;I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my works in the Works section.<br />
&nbsp;&nbsp;&nbsp;&nbsp;I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</Text>
      <Flex direction={{base: "column", md: "row"}} gap={{base: "40px", md: "60px"}} mb={{base: "60px", md: "100px"}}>
        <Flex direction="column" align="center" w="350px">
          <Heading fontSize="xl" mb="20px">Education</Heading>
          <Flex direction="column" align="center" gap="10px">
            <Text fontSize="md">MSc Statistics -- University of Sheffield 2021</Text>
            <Text fontSieze="md">BSc Mathematics -- Shenzhen University 2019</Text>
            <Text fontSize="md">Google Data Analyst Certificate</Text>
            <Text fontSize="md">Freecodecamp Frontend Developing Certificate</Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="center" w="350px">
          <Heading fontSize="xl" mb="20px">Skills</Heading>
          <Box align="center" fontSize="md">
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>HTML</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>CSS</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>JavaScript</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Python</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>React</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Redux</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Next JS</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Git</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Github</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Chakra UI</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Material UI</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Framer Motion</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Lottie Animation</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Vercel</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About;