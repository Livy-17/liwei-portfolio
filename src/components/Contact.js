import React from "react";
import { Box, Flex, Heading, Text, Input, Textarea, Button, FormControl, FormLabel, FormHelperText, FormErrorMessage, useColorModeValue } from "@chakra-ui/react";

const Contact = props => {
  return (
    <Flex id='contactSection' direction="column" align="center" p={{base: "60px 0 60px 0", md: "100px 0 100px 0"}}>
      <Heading mb="40px" fontSize="2xl">CONTACT</Heading>
      <Text fontSize="lg" mb="50px" w={{base: "300px", md: "760px"}} >&nbsp;&nbsp;&nbsp;&nbsp;Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</Text>
      <Box border="solid 1px gray" borderRadius="5px" p="30px 20px 30px 20px" w={{base: "300px", md: "760px"}} >
        <FormControl>
          <FormLabel htmlFor="name" mb="20px">Name</FormLabel>
          <Input id="name" mb="20px" placeholder="Enter your name" />
          <FormLabel htmlFor="email" mb="20px">Email</FormLabel>
          <Input id="email" mb="20px" placeholder="Enter your Email" />
          <FormLabel htmlFor="message" mb="20px">Message</FormLabel>
          <Textarea id="message" placeholder="Enter your message" />
          <FormErrorMessage>Invalid</FormErrorMessage>
        </FormControl>
        <Button variant="solid" size="lg" w={{base: "100px", md: "150px"}} ml={{base: "160px", md: "570px"}} mt="30px">Submit</Button>
      </Box>
    </Flex>
  )
}

export default Contact;