import React from 'react';
import { VStack, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToTop from './components/ToTop';

const App = () => {
  return (
    <Box w="100%" bg={useColorModeValue('', '')} >
      <Flex direction="column" h="100vh" justifyContent="center">
        <Navbar />
        <Intro />
      </Flex>
      <About />
      <Works />
      <Contact />
      <ToTop />
      <Footer />
    </Box>
  );
};

export default App;