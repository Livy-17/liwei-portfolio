import React from "react";
import { Heading, Text, Box, Flex, Button} from "@chakra-ui/react";

const Intro = props => {

  const toggleWorks = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({top: 1420, behavior: "smooth"});
  };

  return(
    <Flex direction="column" align="center" >
      <Heading fontSize="2xl">Hey, I'm Liwei Chen</Heading>
      <Text display={{base: "inherit", md: "none"}} fontSize="lg" mt="10px" >A Frontend focused Web Developer</Text>
      <Text display={{base: "none", md: "inherit"}} fontSize="lg" mt="20px" w="700px" textAlign="center" >A Frontend focused Web Developer building the Frontend of Websites and Web Applications that lead to the success of the overall product</Text>
      <Button onClick={toggleWorks} w={{base: "100px", md: "200px"}} mt={{base: "20px", md: "40px"}} _focus={{border: "none"}} _hover={{bg: "rgba(156, 168, 184, 1)"}} _active={{bg: "rgba(134, 150, 167, 1)"}} bg="rgba(193, 203, 215, 1)">Works</Button>
    </Flex>
  )
}

export default Intro;