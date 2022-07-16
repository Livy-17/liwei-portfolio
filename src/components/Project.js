import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useColorModeValue, Divider, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, Box, Flex, Grid, Stack, Heading, Text, Image, Button } from "@chakra-ui/react";

const Project = props => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pb="50px">
      <Flex direction="column" pb="50px" >
        <Flex direction={{base: "column", md: "row"}} gap={{base: "20px", md: "60px"}} mb="20px" align={{base: "center", md: "inherit"}}>
          <Heading display={{base: "inherit", md: "none"}} fontSize="xl" mb="5px">{props.theHeading}</Heading>
          <Image src={`Project${props.theCount}_pic.png`} alt={`Picture of Work 1`} w={{base: "250px", md: "350px"}} objectFit="cover" fallbackSrc="https://via.placeholder.com/150" borderRadius="10px"></Image>
          <Flex direction="column" justifyContent="center" align={{base: "center", md: "flex-start"}}>
            <Heading display={{base: "none", md: "inherit"}} fontSize="xl" mb="5px">{props.theHeading}</Heading>
            <Text fontSize="lg" w={{base: "300px", md: "350px"}} mb="10px">{props.theText}</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="center">
          <Button onClick={onOpen} display={{base: "block", md: "none"}} w="170px">Case Study</Button>
          <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered="true">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Header</ModalHeader>
              <ModalBody>
                sjdiofjiosjdio
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} mr="20px" size="sm">Close</Button>
                <Button size="sm">Open</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Accordion allowToggle display={{base: "none", md: "block"}}>
          <AccordionItem border="none">
            <AccordionButton >
              <Box flex="1" textAlign="left" fontSize="xl">Case Study</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              wiuhhefiuhwiuehfuiw
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
      <Divider borderColor={useColorModeValue("black", "white")} />
    </Box>
  )
}

export default Project;