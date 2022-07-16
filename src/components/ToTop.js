import React from "react";
import { useState, useEffect } from "react";
import { VStack, HStack, Box, Flex, Button, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ToTop = props => {

  const [showUp, setShowUp] = useState(false);

  const toggleShowUp = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setShowUp(true)
    }
    else if (scrolled <= 20) {
      setShowUp(false)
    }
  };

  const toggleToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  window.addEventListener("scroll", toggleShowUp);

  return (
    <Box display={{base: "flex", md: showUp ? "block" : "none"}} justifyContent="center">
      <Box
      mb={{base: "20px", md: ""}}
      borderRadius="10px"
      bg={useColorModeValue("rgba(191, 191, 191, 0.5)", "#656176")} 
      color={useColorModeValue('gray', 'white')}
      position={{base: "static", md: "fixed"}} 
      right={{base: "", md: "60px"}} 
      bottom={{base: "", md: "60px"}} 
      zIndex="99" 
      onClick={toggleToTop} 
      _hover={{ cursor: 'pointer' }}
      >
        <ArrowUpIcon w={{base: "260px", md: "30px"}} h="30px" />
      </Box>
    </Box>
  )
}

export default ToTop;