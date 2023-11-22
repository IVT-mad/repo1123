import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Мопеды и мотоциклы",
    description:
      "Мототехника от разных производителей: Honda, Yamaha, Suzuki, Kawasaki и многие другие.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Спецтехника",
    description:
      "Экскаваторы, культиваторы, газонокосилки, снегоуборочные машины от таких фирм как Kobelco, Jonda и др.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Машины",
    description:
      "машины от таких производителей как Mitsubishi, ...",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Прочие товары",
    description:
      "Мелкие товары: строительные и бытовые инструменты.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Товары
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
