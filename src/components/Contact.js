import React from "react";
import { Box, Flex, Heading, Text, Input, Textarea, Button, FormControl, FormLabel, FormHelperText, FormErrorMessage, useColorModeValue } from "@chakra-ui/react";

const Contact = props => {
  return (
    <Flex id='contactSection' direction="column" align="center" p={{base: "130px 0 130px 0", md: "160px 0 160px 0"}}>
      <Flex direction='column' align='center' justifyContent='center' data-aos='zoom-in-up'>
        <Heading mb="40px" fontSize="2xl">CONTACT</Heading>
        <Text fontSize="lg" mb="50px" w={{base: "300px", md: "700px", lg: "800px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</Text>
      </Flex>
      <Box data-aos='zoom-in' border="solid 1px gray" borderRadius="5px" p="30px 20px 30px 20px" w={{base: "300px", md: "700px", lg: "800px"}}>
        <form action="https://formsubmit.co/f7cd069ea5d53a48b1364bc2c8c49b9c" method="POST">
          <label htmlFor='name' style={{ display: 'block', fontWeight: 'bold', marginBottom: '20px' }}>Name</label>
          <input type="text" name="name" id='name' placeholder="" required style={{ display: 'block', marginBottom: '20px', border: 'solid 1px lightgray', width: '100%', height: '40px', borderRadius: '5px', padding: '3px 0 0 15px' }} />
          <label htmlFor='email' style={{ display: 'block', fontWeight: 'bold', marginBottom: '20px' }}>Email</label>
          <input type="email" name="email" id='email' placeholder="" required style={{ display: 'block', marginBottom: '20px', border: 'solid 1px lightgray', width: '100%', height: '40px', borderRadius: '5px', padding: '3px 0 0 15px' }} />
          <label htmlFor='message' style={{ display: 'block', fontWeight: 'bold', marginBottom: '20px' }}>Message</label>
          <textarea name='message' id='message' placeholder="(Optional)" style={{ display: 'block', marginBottom: '20px', border: 'solid 1px lightgray', width: '100%', height: '80px', borderRadius: '5px', padding: '10px 0 0 15px' }} />
          <button type="submit" style={{ display: 'block', margin: '30px 0 0 auto', width: '120px', height: '40px', backgroundColor: useColorModeValue('#edf2f7',''), borderRadius: '5px' }}>Send</button>
          <input type="hidden" name="_next" value={`${window.location.hostname}/submitted`} />
        </form>
      </Box>
    </Flex>
  )
}

export default Contact;