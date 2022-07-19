import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useColorModeValue, useColorMode, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

const Project = props => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={{ base: '40px 20px 40px 20px', md: '30px 30px 30px 30px', lg: '50px 50px 50px 50px' }} bg={useColorModeValue('white', '#2c394b')} borderRadius='15px'>
      <Flex direction="column" >
        <Flex direction={{base: "column", md: "row"}} gap={{base: "20px", md: "40px", lg: "60px"}} mb="20px" align={{base: "center", md: "inherit"}}>
          <Heading display={{base: "inherit", md: "none"}} fontSize="xl" mb="5px">{props.theHeading}</Heading>
          <Image src={`Project_${props.ProjectName}_${props.DarkMode}_pic.webp`} alt='' width={{base: "250px", md: '300px', lg: "350px"}} height={{base: '130px', md: '156px', lg: '182px'}} objectFit="cover" fallbackSrc="https://via.placeholder.com/150" borderRadius="10px" boxShadow='0 0 5px gray' mb={{base: '10px', md: ''}}></Image>
          <Flex direction="column" justifyContent="center" align={{base: "center", md: "flex-start"}}>
            <Heading display={{base: "none", md: "inherit"}} fontSize="xl" mb="15px">{props.theHeading}</Heading>
            <Text fontSize="lg" w={{base: "260px", md: '300px', lg: "350px"}} mb="10px">{props.theText}</Text>
          </Flex>
        </Flex>

        <Flex justifyContent="center">
          <Button onClick={onOpen} display={{base: "block", lg: "none"}} bg={useColorModeValue('#c1cbd7', '#656176')} w="200px" mt='10px'>Case Study</Button>
          <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered="true">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{props.ProjectName}</ModalHeader>
              <ModalBody>
                <Text fontSize='lg' fontWeight='bold' mb='10px'>Project Description</Text>
                <Text w='280px' mb='20px'>{props.ProjectDescription}</Text>
                <Text fontSize='lg' fontWeight='bold' mb='10px'>Tools Used</Text>
                <Box w='280px' mb='20px'>
                  {props.ToolsUsed.map((item, i) => (
                    <Text key={i} display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={ colorMode === 'light' ? "rgba(191, 191, 191, 1)" : "black" }>{item}</Text>
                  ))}
                </Box>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} mr="20px" size="sm">Close</Button>
                <a href={props.LiveLink}>
                  <Button size="sm">Open</Button>
                </a>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>

        <Accordion allowToggle display={{base: "none", lg: "block"}} mt='25px'>
          <AccordionItem border="none">
            <AccordionButton bg={useColorModeValue('#c1cbd7', '#656176')} _hover={{filter: 'brightness(90%)'}} borderRadius='10px' transition='0.2s'>
              <Box flex="1" textAlign="left" fontSize="xl">Case Study</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Box w={{ base: '600px', lg: '700px' }} mt='30px'>
                <Text fontSize='xl' fontWeight='bold' mb='10px'>Project Overview</Text>
                <Text mb='30px'>{props.ProjectDescription}</Text>
                <Text fontSize='xl' fontWeight='bold' mb='10px'>Tools Used</Text>
                <Box mb='30px'>
                  {props.ToolsUsed.map((item, i) => (
                    <Text key={i} display="inline-block" m="0 4px 4px 0" p="0 8px 0 8px" borderRadius="5px" bg={ colorMode === 'light' ? "rgba(191, 191, 191, 1)" : "black" }>{item}</Text>
                  ))}
                </Box>
                <Text fontSize='xl' fontWeight='bold' mb='10px'>See Live</Text>
                <a href={props.LiveLink} target='_blank' rel='noreferrer'>
                  <Button w='150px' _focus={{border: "none"}} _hover={{bg: "rgba(156, 168, 184, 1)"}} _active={{bg: "rgba(134, 150, 167, 1)"}} bg={useColorModeValue("rgba(193, 203, 215, 1)", "#656176")}>Live Link</Button>
                </a>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  )
}

export default Project;