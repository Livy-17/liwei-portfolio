import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = props => {
  return (
    <Flex pb="30px" direction="column" align="center" >
      <Text fontSize="md" color="gray">© 2022 Liwei Chen. All Rights Reserved.</Text>
    </Flex>
  )
}

export default Footer;