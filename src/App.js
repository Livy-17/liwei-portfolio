import React from 'react';
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToTop from './components/ToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Submitted from './Submitted';

AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Box w='100vw' bg={useColorModeValue('', '')}>
            <Navbar />
            <Flex direction="column" h="100vh" w='100%' justifyContent="center" alignItems='center' bg={useColorModeValue('#F7F6F2','#1B2430')}>
              <Intro />
            </Flex>
            <About />
            <Projects />
            <Contact />
            <ToTop />
            <Footer />
          </Box>
        } />
        <Route path='/submmited' element={
          <Submitted />
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;