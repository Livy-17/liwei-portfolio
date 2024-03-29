import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const About = props => {

  return(
    <Flex id='aboutSection' direction="column" pt={{base: "130px", md: "220px"}} pb={{base: '80px', md: '80px'}} align="center" justifyContent='center' bg={useColorModeValue('', '')}>
      <Flex data-aos='fade-up' direction='column' align='center' justifyContent='center'>
        <Heading mb="40px" fontSize="2xl">About Me</Heading>
        <Text fontSize="lg" w={{base: "300px", md: "700px", lg: "800px"}} mb="60px">&nbsp;&nbsp;&nbsp;&nbsp;I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my projects in the Projects section.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</Text>
      </Flex>
      <Flex direction={{base: "column", lg: "row"}} gap={{base: "40px", md: "60px"}} mb={{base: "60px", md: "100px"}}>
        <Flex data-aos='fade-down' direction="column" align="center" w="350px">
          <Heading fontSize="xl" mb="20px">Education</Heading>
          <Flex direction="column" align="center" gap="10px" w={{ base: '300px', md: '600px', lg: '700px'}}>
            <Text fontSize="md">MSc Statistics -- University of Sheffield 2021</Text>
            <Text fontSize="md">BSc Mathematics -- Shenzhen University 2019</Text>
            <Text fontSize="md">Google Data Analyst Certificate</Text>
          </Flex>
        </Flex>
        <Flex data-aos='fade-down' direction="column" align="center" justifyContent='center' w="350px">
          <Heading fontSize="xl" mb="20px">Skills</Heading>
          <Box align="center" fontSize="md" w={{ base: '300px', md: '400px' }}>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>HTML</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>CSS</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Sass</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>UI/CSS Frameworks</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>JavaScript</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>TypeScript</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>React JS</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Next JS</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Redux JS</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>REST APIs</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>GraphQL</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>CI/CD</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Git</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Github</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Unit Testing</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>Jest</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>TDD</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>BDD</Text>
            <Text display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={useColorModeValue("rgba(191, 191, 191, 1)", "black")}>PWA</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About;