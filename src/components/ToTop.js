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
      border="solid 1px rgb(40, 40, 40)" 
      borderRadius="10px"
      bg={useColorModeValue("rgba(191, 191, 191, 0.5)", "white")} 
      color="gray" 
      position={{base: "static", md: "fixed"}} 
      right={{base: "", md: "60px"}} 
      bottom={{base: "", md: "60px"}} 
      zIndex="99" 
      onClick={toggleToTop} 
      >
        <ArrowUpIcon w={{base: "300px", md: "30px"}} h="30px" />
      </Box>
    </Box>
  )
}

export default ToTop;