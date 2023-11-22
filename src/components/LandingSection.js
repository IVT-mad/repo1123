import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Привет, мы DrivePro!";
const bio1 = "Компания в городе Алматы";
const bio2 = "занимающаяся продажей японской техники";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#295191"
  >
    <VStack spacing={5}>
      <VStack spacing={2}>
      <Box w="1vw" h="100%" bgGradient="linear(to-t, green.200, pink.500)" />
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2x1"/>
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={2}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>  
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;
