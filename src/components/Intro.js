import React from "react";
import { Heading, Text, Box, Flex, Button} from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

const Intro = props => {

  const toggleWorks = (e) => {
    const worksDOM = document.getElementById('worksSection');
    worksDOM.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <Box bgImage={ colorMode === 'light' ? 'light-sky.webp' : 'dark-sky.webp' } bgSize='cover'>
      {/* <Box display={{base: 'none', '2xl': 'inherit'}} position='absolute' top='0' right='0' filter={useColorModeValue('brightness(80%)', 'brightness(30%)')}>
        <video autoPlay loop muted playsInline style={{ objectFit: 'cover', width: '100%', minHeight: '100vh' }}>
          <source src='bgVideo.webm' type="video/webm" />
        </video>
      </Box> */}
      <Flex direction="column" align="center" justifyContent='center' h='100vh' backdropFilter={ colorMode === 'light' ? 'brightness(90%)' : 'brightness(50%)' }>
        <Flex direction='column' align='center' zIndex='2'>
          <Heading fontSize="2xl" color={{'2xl': 'white'}}>Hey, I'm Liwei Chen</Heading>
          <Text display={{base: "inherit", md: "none"}} fontSize="lg" mt="10px" >A Frontend focused Web Developer</Text>
          <Text display={{base: "none", md: "inherit"}} fontSize="lg" mt="20px" w="700px" textAlign="center" color={{'2xl': 'white'}} >A Frontend focused Web Developer building the Frontend of Websites and Web Applications that lead to the success of the overall product</Text>
          <Button onClick={toggleWorks} w={{base: "150px", md: "200px"}} mt={{base: "20px", md: "40px"}} _focus={{border: "none"}} _hover={{bg: "rgba(156, 168, 184, 1)"}} _active={{bg: "rgba(134, 150, 167, 1)"}} bg={useColorModeValue("#c1cbd7", "#656176")}>Projects</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Intro;